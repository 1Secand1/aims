<template>
  <h2 class="title">Отчёт о выполении привычки {{ $route.query.id }}</h2>

  <div class="accompanying-message__box">
    <h3 class="companying-message__title">
      Текст который будет отправлен вместе с отчётом
    </h3>
    <textarea name="" id="" cols="30" rows="5"></textarea>
  </div>

  <div class="pin-photo__box">
    <h3 class="pin-photo-title">Фото подтверждение</h3>
  </div>
  <input type="file" />
</template>

<script setup>
import router from '@/router'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.query.id)


</script>

<style scoped>
.accompanying-message__box {
  margin-top: 15px;
}
.companying-message__title {
}
.pin-photo__box {
  margin-top: 15px;
}
.pin-photo-title {
}
</style>
