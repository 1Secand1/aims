// TODO вынисти radio в const
<template>
  <form 
    @submit.prevent=""
    action="">
    <h2>Сооздать цель</h2>

    <div class="input-box">
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
    </div>

    <weekday-selection
      type="select"
      :selected="defaultDays"
      @get-Day="setTargetDates"
    />

    <ul class="time-of-day-selection">
      <li class="time-of-day-selection__item">
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
      <li class="time-of-day-selection__item">
        <label for="morning"> Утром </label>
        <input
          v-model="newAims.timeOfDay"
          id="morning"
          type="radio"
          name="timeOfDay"
          value="morning"
        />
      </li>
      <li class="time-of-day-selection__item">
        <label for="afternoon"> Днём </label>
        <input
          v-model="newAims.timeOfDay"
          id="afternoon"
          type="radio"
          name="timeOfDay"
          value="afternoon"
        />
      </li>
      <li class="time-of-day-selection__item">
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

    <select 
      name="choice"
      class="partner-selection"
    >
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

    <button 
      class="create-Aims-button"  
      @click="createAim"
    >
      Создать
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import weekdaySelection from '@/components/WeekdaySelection.vue'
import { daysOfTheWeek } from '../consts/weekDay.js'
import { setDailyAims } from "../servives/crudAims.js";

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

  const{targetDates, ...dataAims} = newAims
  targetDates.forEach(weekDay => {
  setDailyAims(weekDay,dataAims)
  });
}
</script>

<style>
input,button,select{
  border: solid 1px gray;
  padding: 5px 10px;
  border-radius:5px ;
}

button,select{
  cursor: pointer;
}

button:hover{
  opacity: 0.8;
}

.input-box{
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.time-of-day-selection{
  display: flex;
  flex-wrap: wrap;

  gap: 15px;
  margin-top: 10px;

  list-style-type: none;
}

.time-of-day-selection__item{
  display: flex;
  flex: 0 1 auto;
  align-items: center;
}

.partner-selection{
  margin-top: 10px;
  width: 100%;
}

.create-Aims-button{
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
}

</style>
