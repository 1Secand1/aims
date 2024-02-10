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
        @cardRemove="removeAims(aims.duringTheDay,$event)"
      />

      <time-section 
        title="Утром"
        :cards="aims.morning" 
        @cardRemove="removeAims(aims.morning,$event)"
      />

      <time-section
        title="Днём"
        :cards="aims.afternoon"
        @cardRemove="removeAims(aims.afternoon,$event)"
      />

      <time-section
        title="Вечером"
        :cards="aims.evening"
        @cardRemove="removeAims(aims.evening,$event)"
      />
    </ul>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import timeSection from '../components/ListAimsTimeSection.vue'
import weekdaySelection from '@/components/WeekdaySelection.vue'
import { daysOfTheWeek } from "../consts/weekDay.js"
import { fetchData } from "../servives/servises.js"


const aims = reactive({
  morning: [],
  afternoon: [],
  evening: [],
  duringTheDay: []
})

async function getJsonAimsList(aimsId = 1) {
  const url = `https://apigenerator.dronahq.com/api/HaSVeb1J/usersDailyAimsList/${aimsId}`
  const jsonAimsList = await fetchData(url)
  return jsonAimsList
}
async function displayTheDaysAims(weekDay) {
  const weekdayNumber = daysOfTheWeek[weekDay].weekdayNumber;
  const jsonAimsList = await getJsonAimsList(weekdayNumber);

  for (const key in aims) {
    aims[key] = []
  }

  jsonAimsList.aims.forEach((aim) => {
    aims[aim.timeOfDay].push(aim)
  })
}
function removeAims(array, itemID) {
  for (const iterator in aims) {
    if (aims[iterator] == array) {
      aims[iterator] = aims[iterator].filter((aim) => {
        return aim.id != itemID
      })
    }
  }
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
