// TODO вынисти radio в const
<template>
  <form 
    @submit.prevent=""
    action=""
    class="form"
  >
    <h2>Создать цель</h2>

    <div class="input-box">
      <input 
        class="input-box__input-element"
        v-model="newAims.title"
        type="text"
        placeholder="Название"
      />

      <input 
        class="input-box__input-element"
        v-model="newAims.description"
        type="text"
        placeholder="Описание" 
      />
    </div>

    <pick-value-from-the-list
      type="select"
      :elements="weekDayFoListSelect"
      :selected="[]"
      :get-element="setTargetDates"
    />

    <pick-value-from-the-list
      type="radio"
      :elements="timeOfDayFoListSelect"
      :selected="[]"
      :get-element="setTimeOfDay"
    />

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
import pickValueFromTheList from '../components/pickValueFromTheList.vue'
import { daysOfTheWeek } from '../constants/weekDay.js'
import { setDailyAims } from "../servives/aims.js";

const newAims = reactive({
  title: '',
  description: '',
  timeOfDay: 'duringTheDay',
  status: false,
  targetDates: ref([])
})
const weekDayFoListSelect = Object.entries(daysOfTheWeek).map((weekDay)=>{
  return {
    name: weekDay[0],
    textValue: weekDay[1].textValue
  }
})
const timeOfDayFoListSelect = [
  {
    name: "duringTheDay",
    textValue: "В любое время"
  },
  {
    name: "morning",
    textValue: "Утром"
  },
  {
    name: "afternoon",
    textValue: "Днём"
  },
  {
    name: "evening",
    textValue: "Вечером"
  },
]

 function setTimeOfDay(timeOfDay) {
  newAims.timeOfDay = timeOfDay
 }

 function setTargetDates(weekDays) {
   newAims.targetDates.push(weekDays)
 }

function createAim() {
  const{targetDates, ...dataAims} = newAims
  
  console.log(newAims.targetDates);

  // targetDates.forEach(weekDay => {
  //   setDailyAims(weekDay,dataAims)
  // });
}
</script>

<style scoped>
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

.form{
  width: 100%;
}

.input-box{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.input-box__input-element{
  display: flex;
  flex: 1 auto;
}

.time-of-day-selection-list{
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

.time-of-day-selection__item-title{
  cursor: pointer;
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
