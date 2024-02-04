<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
       Home -
      </RouterLink>
      <RouterLink to="/login">
       Войти в систему -
      </RouterLink>
      <RouterLink to="/registration">
       Создать аккаунт -
      </RouterLink>
      <RouterLink to="/listAims">
       Список задач -
      </RouterLink>
      <RouterLink to="/createaim">
       Создать цель -
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
