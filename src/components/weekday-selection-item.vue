<template>
  <li
    @click="toggleActive" 
    :class="isActive"
    :data-weekday="weekDay"
  >
    {{ text }}
  </li>
</template>

<script setup>
import { computed, ref } from "vue";

defineProps({
  weekDay: String,
  text: String
});

const isItOn = ref(false);

const isActive = computed(() => (isItOn.value ? 'active' : ''));

function toggleActive() {
  isItOn.value = !isItOn.value;
}


</script>

<style>
.active {
  border: solid 1px;
}
</style>