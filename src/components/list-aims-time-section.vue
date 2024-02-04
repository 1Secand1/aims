<script setup>
defineProps(["title", "aims"]);
</script>

<template>
  <ul v-if="aims.length">
    <h2>{{ title }}</h2>
    <br />
    <li 
      v-for="{ id, title, description } in aims"
      :key="id">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <br />
    </li>
  </ul>
  <br />
</template>

<style></style>
