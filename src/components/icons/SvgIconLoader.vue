<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :width="width"
    :height="height"
    :class="`icon-${iconName}`"
    :aria-labelledby="iconName"
    role="presentation"
  >
      <component :is="dynamicComponent" />
  </svg>
</template>

<script setup>
import { defineAsyncComponent, defineProps } from 'vue';
const props = defineProps({
  iconName: {
    type: String,
    default: 'box'
  },
    viewBox:{
    type: String,
    default: '0 0 18 18'
  },
  width: {
    type: [Number, String],
    default: 25
  },
  height: {
    type: [Number, String],
    default: 25
  },
  iconColor: {
    type: String,
    default: 'none'
  },
});

function capitalize(word) {
  if (!word) throw new Error("word undefined")
  return word.charAt(0).toUpperCase() + word.slice(1);
}
const capitalizedIconName = capitalize(props.iconName)
const filePath = `./Icon${capitalizedIconName}.vue`


const dynamicComponent = defineAsyncComponent(() =>
  import(filePath)
);
</script>

<style >

</style>