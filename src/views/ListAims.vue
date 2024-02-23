<template >
    <weekday-selection 
      type="radio"
      selected="monday"
      @get-day="displayTheDaysAims" 
    />

    <ul class="time-section-list">
       <time-section 
        title="В течении дня"
        :cards="aims.duringTheDay" 
        @confirm="goToConfirmExecution"
        @cardRemove="removeAim(aims.duringTheDay,$event,'duringTheDay')"
      />

      <time-section 
        title="Утром"
        :cards="aims.morning" 
        @confirm="goToConfirmExecution"
        @cardRemove="removeAim(aims.morning,$event,'morning')"
      />

      <time-section
        title="Днём"
        :cards="aims.afternoon"
        @confirm="goToConfirmExecution"
        @cardRemove="removeAim(aims.afternoon,$event,'afternoon')"
      />

      <time-section
        title="Вечером"
        :cards="aims.evening"
        @confirm="goToConfirmExecution"
        @cardRemove="removeAim(aims.evening,$event,'evening')"
      />
    </ul>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { requestRemoveAim } from "../servives/aims.js";

import timeSection from '../components/ListAimsTimeSection.vue'
import weekdaySelection from '@/components/WeekdaySelection.vue'
import { getAimsList } from "../servives/aims.js"
import router from '@/router';


const aims = reactive({
  morning: [],
  afternoon: [],
  evening: [],
  duringTheDay: []
})


async function displayTheDaysAims(weekDay) {
  const jsonAimsList = await getAimsList(weekDay);
  
  if (!("aims" in jsonAimsList)) return

  for (const key in aims) {
    aims[key] = []
  }

  jsonAimsList.aims.forEach((aim) => {
    aims[aim.timeOfDay].push(aim)
  })
}

function goToConfirmExecution(id) {
  router.push({ 
    path: '/ConfirmExecution', 
    query: { 
      id: id,
    }
  })
}

async function removeAim(array, itemID) {

  //TODO заменить на мадальное окно
  const toRemove = confirm("Вы точно хотите удолить эту привычку ?");
  if (!toRemove) return

  console.log(array);
  for (const weekDay in aims) {

    if (aims[weekDay] == array) {
      aims[weekDay] = aims[weekDay].filter((aim) => {
        return aim.id != itemID
      })
    }
  }


// TODO убрать после перехода на бекенд
const newAimsList = [
    ...aims.morning,
    ...aims.afternoon,
    ...aims.evening,
    ...aims.duringTheDay
  ]

  // переопределение id
  newAimsList.forEach((aim,id)=>{
    aim.id = ++id
  })

  await requestRemoveAim({
    aims: newAimsList
  });
}

onMounted(() => {
})
</script>

<style scoped>

.time-section-list{
  display: grid;
  
  gap: 20px;
  margin-top: 20px;
}
</style>
