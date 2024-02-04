<template>
  <ul 
    class="weekday-selection"
    @click="selectDayOfTheWeek"
  >
    <li
      v-for="(weekDayText, weekDay) in weekdays"
      :class="{ active: activeWeekday.includes(weekDay) }"
      :data-weekday="weekDay"
      :key="weekDay"
    >
      {{ weekDayText }}
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
const weekdays = {
  monday: 'Пн',
  tuesday: 'Вт',
  wednesday: 'Ср',
  thursday: 'Чт',
  friday: 'Пт',
  saturday: 'Сб',
  sunday: 'Вс'
}

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
.weekday-selection {
  display: flex;

  column-gap: 15px;

  list-style: none;
}

.active {
  border: solid 1px;
}
</style>
