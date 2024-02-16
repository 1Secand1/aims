<template>
  <ul 
    class="weekday-selection-list"
    @click="selectDayOfTheWeek"
  >
    <li
      class="weekday-selection-list__item"
      v-for="(weekDayText, weekDay) in daysOfTheWeek"
      :class="{ active: selectedWeekdays.includes(weekDay) }"
      :data-weekday="weekDay"
      :key="weekDay"
    >
    <!-- TODO изменить имя data-weekday -->
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

const selectedWeekdays = ref(props.selected)

function radio(weekDay) {
  selectedWeekdays.value = weekDay
}
function select(weekDay) {
  if (!selectedWeekdays.value.includes(weekDay)) {
    selectedWeekdays.value.push(weekDay)
  } else {
    selectedWeekdays.value = selectedWeekdays.value.filter((item) => item !== weekDay)
  }
}
function selectDayOfTheWeek({ target }) {
  const { tagName, dataset } = target

  if (tagName !== 'LI') return

  if (props.type === 'radio') {
    radio(dataset.weekday)
  } else {
    select(dataset.weekday)
  }

  emit('getDay', selectedWeekdays.value)
}

onMounted(() => {
  emit('getDay', props.selected)
})
</script>

<style scoped>
.weekday-selection-list {
  display: flex;
  flex-wrap: wrap;

  column-gap: 15px;
  margin-top: 20px;

  list-style: none;
}

.weekday-selection-list__item{
  text-align: center;
  cursor: pointer;
  flex: 1;
  background: #253334;
  color: white;
  padding: 5px;
  border-radius: 6px;
}

.active {
  background: #623DF6;
}
</style>
