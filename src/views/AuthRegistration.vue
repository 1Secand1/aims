<template>
  <div class="wrapper">
    <div class="form">
      <h2>Создать аккаунт</h2>
      <input 
        v-model="regData.login"
        type="text"
        placeholder="Логин" />

      <input v-model="regData.password"
        type="text"
        placeholder="Пароль" />
      <button @click="userRegistration(regData)">
        зарегистрироваться
      </button>

      <small>
        Нет акаунта -
        <RouterLink 
          class="router-link" 
          to="/registration"
        >
          ввойти
        </RouterLink>
      </small>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { userCreation } from"../servives/autofitration.js"


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
