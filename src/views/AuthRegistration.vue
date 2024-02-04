<template>
  <div class="wrapper">
    <div class="form">
      <h2>Создать аккаунт</h2>
      <br />
      <input 
        v-model="regData.login"
        type="text"
        placeholder="Логин" />

      <input v-model="regData.password"
        type="text"
        placeholder="Пароль" />
      <button @click="userRegistration(regData)">
        Войти
      </button>

      <small>
        Уже есть аккаунт -
        <RouterLink to="/login"> ввойти </RouterLink>
      </small>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { userCreation } from"../servives/servises.js"


const regData = reactive({
  login: '',
  password: ''
})

async function userRegistration(userData) {
  try {
   const response = await userCreation(userData);

    alert('Пользователь создан')
    console.log('response')
    
  } catch (error) {
    alert('Ошибка в создании пользователя')
    console.log('Ошибка в создании пользователя')
  }
}
</script>

<style>
.wrapper {
  height: 97dvh;
  display: grid;
  place-items: center;
}

.form {
  display: grid;
  max-width: 300px;
  width: 100%;
}
</style>
