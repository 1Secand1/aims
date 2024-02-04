<template>
  <div class="wrapper">
    <div class="form">
      <h2>Создать аккаунт</h2>
      <br />
      <input 
        v-model="regData.login" 
        type="text" 
        placeholder="Логин" />

      <input 
        v-model="regData.password"
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

const regData = reactive({
  login: '',
  password: ''
})

function userRegistration(data) {
  fetch('https:/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(() => {
      alert('Пользователь создан')
      console.log('Пользователь создан')
    })
    .catch(() => {
      alert('Ошибка в создании пользователя')
      console.log('Ошибка в создании пользователя')
    })
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
