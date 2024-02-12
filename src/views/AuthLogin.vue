<template>
  <div class="wrapper">
    <form class="form">
      <h2>Вход в приложение</h2>
      <input 
        v-model="logData.login"
        type="text"
        placeholder="Логин" />
      <input
        v-model="logData.password"
        type="password"
        placeholder="Пароль" />
      <button @click="userAuthorization(regData)">
        Войти
      </button>
      <small>
        Нет акаунта -
        <RouterLink 
          class="router-link" 
          to="/registration"
        >
          cоздать
        </RouterLink>
      </small>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import router from '@/router'
import { getJwtToken } from"../servives/autofitration.js"


const logData = reactive({
  login: '',
  password: ''
})

async function userAuthorization(data) {
  try {
    const jwtToken = getJwtToken(data)

    localStorage.setItem('jwtToken', '1234')
    router.push('/listAims')
  } catch (error) {
    alert('Ошибка при авторизации')
  }
}
</script>

<style scoped>
input,button,select{
  border: solid 1px gray;
  padding: 5px 10px;
  border-radius:5px ;
}

button{
  cursor: pointer;
}
button:hover{
  opacity: 0.8;
}

.wrapper {
  width: 100%;
  height: 97dvh;
  display: grid;
  place-items: center;
}

.form {
  display: grid;
  max-width: 300px;
  width: 100%;

  background: #8569f6;
  padding: 10px 20px;
  gap: 10px;

  color: white;
  border-radius: 5px;
}

.router-link{
  color: #fefefe;
}
</style>
