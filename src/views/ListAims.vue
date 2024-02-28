<template>
  <weekday-selection
    type="radio"
    selected="monday"
    @get-day="displayTheDaysAims"
  />

  <ul class="time-section-list">
    <time-section
      title="В течении дня"
      class="test"
      :cards="timeOfDayList.duringTheDay"
      @confirm="goToConfirmExecution"
      @cardRemove="
        removeAim(timeOfDayList.duringTheDay, $event, 'duringTheDay')
      "
    />

    <time-section
      title="Утром"
      class="test"
      :cards="timeOfDayList.morning"
      @confirm="goToConfirmExecution"
      @cardRemove="removeAim(timeOfDayList.morning, $event, 'morning')"
    />

    <time-section
      title="Днём"
      class="test"
      :cards="timeOfDayList.afternoon"
      @confirm="goToConfirmExecution"
      @cardRemove="removeAim(timeOfDayList.afternoon, $event, 'afternoon')"
    />

    <time-section
      title="Вечером"
      class="test"
      :cards="timeOfDayList.evening"
      @confirm="goToConfirmExecution"
      @cardRemove="removeAim(timeOfDayList.evening, $event, 'evening')"
    />
  </ul>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { requestRemoveAim } from '../servives/aims.js'

import timeSection from '../components/ListAimsTimeSection.vue'
import weekdaySelection from '@/components/WeekdaySelection.vue'
import { getAimsList } from '../servives/aims.js'
import router from '@/router'

const timeOfDayList = reactive({
  duringTheDay: [],
  morning: [],
  afternoon: [],
  evening: []
})

async function displayTheDaysAims(weekDay) {
  const { aims } = await getAimsList(weekDay)

  const timeOfDayNameList = Object.keys(timeOfDayList)
  const reverseSequenceObjectKeys = timeOfDayNameList.toReversed()

  for (const key of reverseSequenceObjectKeys) {
    while (timeOfDayList[key].length > 0) {
      timeOfDayList[key].pop()
      await new Promise((resolve) => setTimeout(resolve, 100))
    }
  }

  for (const aim of aims) {
    await new Promise((resolve) => setTimeout(resolve, 300))
    timeOfDayList[aim.timeOfDay].push(aim)
  }
}

function goToConfirmExecution(id) {
  router.push({
    path: '/ConfirmExecution',
    query: {
      id: id
    }
  })
}

async function removeAim(array, itemID) {
  //TODO заменить на мадальное окно
  const toRemove = confirm('Вы точно хотите удолить эту привычку ?')
  if (!toRemove) return

  for (const weekDay in timeOfDayList) {
    if (timeOfDayList[weekDay] == array) {
      timeOfDayList[weekDay] = timeOfDayList[weekDay].filter((aim) => {
        return aim.id != itemID
      })
    }
  }

  // TODO убрать после перехода на бекенд
  const newAimsList = [
    ...timeOfDayList.morning,
    ...timeOfDayList.afternoon,
    ...timeOfDayList.evening,
    ...timeOfDayList.duringTheDay
  ]

  // переопределение id
  newAimsList.forEach((aim, id) => {
    aim.id = ++id
  })

  await requestRemoveAim({
    aims: newAimsList
  })
}

onMounted(() => {})
</script>

<style scoped>
.time-section-list {
  display: grid;

  gap: 20px;
  margin-top: 20px;
}

.test {
  animation: fadeIn 2s ease-in-out;
}
</style>
