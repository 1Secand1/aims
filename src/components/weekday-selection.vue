<template>
  <ul 
    class="weekday-selection-list"
    @click="selectDayOfTheWeek"
  >
    <li
      v-for="(weekDayText, weekDay) in daysOfTheWeek"
      :class="{ active: activeWeekday.includes(weekDay) }"
      :data-weekday="weekDay"
      :key="weekDay"
      class="weekday-selection-list__item"
    >
      {{ weekDayText.textValue }}
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {daysOfTheWeek} from "../consts/weekDay.js"

const emit = defineEmits(['getDay'])
const props = defineProps({
  type: {
    validator(value) {
      return ['radio', 'select'].includes(value)
    }
  },
  selected: [String, Array]
})

const activeWeekday = ref(props.selected)

function radio(weekDay) {
  activeWeekday.value = weekDay
}
function select(weekDay) {
  if (!activeWeekday.value.includes(weekDay)) {
    activeWeekday.value.push(weekDay)
  } else {
    activeWeekday.value = activeWeekday.value.filter((item) => item !== weekDay)
  }
}
function selectDayOfTheWeek({ target }) {
  const { tagName, dataset } = target

  if (tagName !== 'LI') return
  const weekDay = dataset.weekday

  if (props.type === 'radio') {
    radio(weekDay)
  } else {
    select(weekDay)
  }

  emit('getDay', activeWeekday.value)
}

onMounted(() => {
  emit('getDay', props.selected)
})
</script>

<style scoped>
.weekday-selection-list {
  display: flex;

  column-gap: 15px;

  list-style: none;
}

.weekday-selection-list__item{
  cursor: pointer;
}

.active {
  border: solid 1px;
}
</style>
