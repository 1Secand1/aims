
<template>
  <ul 
    class="card-list" 
    v-if="cards.length"
  >
    <h2>{{ title }}</h2>

    <li
      class="card"
      v-for="{ id, title, description } in cards"
      :key="id"
    >
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>

    <div class="controls-buttons">      
      <label class="button"
        :for="id"
      >
        Подтвердить
        <input
          class="checkbox-round"
          :id="id"
          type="checkbox"
        />
      </label>

      <button 
        class="button"
        @click="deleteCardFromSection(id)"
      >
        Удалить
      </button>
    </div>
    </li>
  </ul>
</template>

<script setup>
 defineProps(['title', 'cards'])
 const emit = defineEmits(['cardRemove'])

 function deleteCardFromSection(id) {
  emit("cardRemove",id)
 }
</script>

<style scoped>
.card-list {
  display: grid;
  gap: 20px;
}

.card {
  background: #253334;
  border-radius: 6px;

  padding: 15px;

  list-style-type: none;
  color: white;
}

.controls-buttons{
  display: flex;
  gap: 10px;
}

.button {
  display: flex;
  width: min-content;

  margin-top: 15px;
  padding: 5px 15px;
  gap: 10px;

  background: white;
  color: black;
  border-radius: 5px;
  border: none;

  cursor: pointer;
}

.checkbox-round {
  width: 1.5em;
  height: 1.5em;

  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 2px solid #000000;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}
.checkbox-round:checked {
  background-color: rgb(45, 45, 45);
}
</style>