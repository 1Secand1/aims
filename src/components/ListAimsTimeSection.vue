<template>
  <transition name="fade">
    <TransitionGroup
      name="list"
      tag="ul"
      class="card-list"
      v-show="cards.length"
    >
      <h2 class="title">
        {{ title }}
      </h2>

      <li class="card"
        v-for="{ id, title, description } in cards"
        :key="id+title"
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
              @click="confirm(id)"
              type="checkbox"
            />
          </label>

          <button class="button"
            @click="deleteCardFromSection(id)"
          >
            Удалить
          </button>
        </div>
      </li>
    </TransitionGroup>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['title', 'cards'])
const emits = defineEmits(['confirm', 'cardRemove'])

function deleteCardFromSection(id) {
  emits('cardRemove', id)
}

function confirm(id) {
  emits('confirm', id)
}
</script>

<style scoped>
.card-list {
  display: grid;
  transition: all 0.7s ease;
  gap: 20px;
}

.card {
  background: #253334;
  border-radius: 6px;

  padding: 15px;

  list-style-type: none;
  color: white;
}

.controls-buttons {
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

.list-enter-active,
.list-leave-active,
.fade-enter-active,
.fade-leave-active{
  transition:
    all 0.7s ease,
    transform 0.7s ease;
}

.list-leave-to,
.list-enter-from,
.fade-enter,
.fade-leave-to{
  opacity: 0;
  transform: scale(0.9);
}
</style>
