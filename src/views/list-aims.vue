<template>
  <weekday-selection 
    type="radio"
    selected="monday"
    @get-day="displayTheDaysAims" 
  />

  <time-section 
    title="В течении дня"
    :aims="aims.duringTheDay" 
  />
  <time-section 
    title="Утром"
    :aims="aims.morning"
  />
  <time-section
    title="Днём"
    :aims="aims.afternoon"
  />
  <time-section
    title="Вечером"
    :aims="aims.evening"
  />
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import timeSection from '@/components/list-aims-time-section.vue'
import weekdaySelection from '@/components/weekday-selection.vue'
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

onMounted(() => {
})
</script>

<style></style>
