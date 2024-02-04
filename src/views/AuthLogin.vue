<template>
  <div class="wrapper">
    <div class="form">
      <h2>Вход в приложение</h2>
      <br />
      <input 
        v-model="logData.login"
        type="text"
        placeholder="Логин" />
      <input v-model="logData.password"
        type="text"
        placeholder="Пароль" />
      <button @click="userAuthorization(regData)">
        Войти
      </button>
      <small>
        Нет акаунта -
        <RouterLink to="/registration">cоздать</RouterLink>
      </small>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import router from '@/router'

const logData = reactive({
  login: '',
  password: ''
})

async function userAuthorization(data) {
  try {
    // API покачто нету
    const jwtToken = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })

    localStorage.setItem('jwtToken', '1234')
    router.push('/listAims')
  } catch (error) {
    alert('Ошибка при авторизации')
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
