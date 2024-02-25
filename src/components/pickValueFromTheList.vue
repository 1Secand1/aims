<template>
  <ul 
    class="weekday-selection-list"
    @click="selectDayOfTheWeek"
  >
    <li
      class="weekday-selection-list__item"
      v-for="({name, textValue}) in elements"
      :class="{ active: selectedWeekdays.includes(name) }"
      :data-weekday="name"
      :key="name"
    >
      <!-- TODO изменить имя data-weekday -->
      {{ textValue }}
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { daysOfTheWeek } from '../constants/weekDay.js'

const emit = defineEmits(['getElement'])
const props = defineProps({
  type: {
    validator(value) {
      return ['radio', 'select'].includes(value)
    }
  },
  elements: [Array],
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
    selectedWeekdays.value = selectedWeekdays.value.filter(
      (item) => item !== weekDay
    )
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

  emit('getElement', selectedWeekdays.value)
}

onMounted(() => {
  emit('getElement', props.selected)
})
</script>

<style scoped>
.weekday-selection-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  gap: 5px;
  margin-top: 20px;

  list-style: none;
}

.weekday-selection-list__item {
  text-align: center;
  cursor: pointer;
  flex: 1;
  background: #253334;
  color: white;
  padding: 10px;
  border-radius: 6px;
}

.active {
  background: #623df6;
}
</style>
