// TODO вынисти radio в const
<template>
  <form 
    @submit.prevent=""
    action="">
    <h2>Сооздать цель</h2>

    <input 
      v-model="newAims.title"
      type="text"
      placeholder="Название"
    />

    <input 
      v-model="newAims.description"
      type="text"
      placeholder="Описание" 
    />

    <weekday-selection
      type="select"
      :selected="defaultDays"
      @get-Day="setTargetDates"
    />

    <ul>
      <li>
        <label for="duringTheDay">В любое время</label>
        <input
          v-model="newAims.timeOfDay"
          id="duringTheDay"

          type="radio"
          name="timeOfDay"
          value="duringTheDay"
          checked
        />
      </li>
      <li>
        <label for="morning"> Утром </label>
        <input
          v-model="newAims.timeOfDay"
          id="morning"
          type="radio"
          name="timeOfDay"
          value="morning"
        />
      </li>
      <li>
        <label for="afternoon"> Днём </label>
        <input
          v-model="newAims.timeOfDay"
          id="afternoon"
          type="radio"
          name="timeOfDay"
          value="afternoon"
        />
      </li>
      <li>
        <label for="evening"> Вечером </label>
        <input
          v-model="newAims.timeOfDay"
          id="evening"
          type="radio"
          name="timeOfDay"
          value="evening"
        />
      </li>
    </ul>

    <select name="choice">
      <option value="0001">
        Вася
      </option>
      <option value="0002">
        Петя
      </option>
      <option value="0003">
        Коля
      </option>
      <option value="0004">
        Миша
      </option>
    </select>
    <button @click="createAim">
      Создать
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import weekdaySelection from '@/components/WeekdaySelection.vue'
import { daysOfTheWeek } from '../consts/weekDay.js'

const defaultDays = Object.keys(daysOfTheWeek)
const newAims = reactive({
  title: '',
  description: '',
  timeOfDay: 'duringTheDay',
  status: false,
  targetDates: ref([])
})

function scheduleTaskOnDays(weekDay) {
  
}

function setTargetDates(weekDays) {
  newAims.targetDates = weekDays
}

function createAim() {
  console.log({ ...newAims })
}
</script>

<style></style>
