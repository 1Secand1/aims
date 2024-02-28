<template>
<div class="wrapper">
  <RouterView />
</div>

<nav class="navigation-menu">
  <ul class="navigation-menu__list wrapper">
     <li class="navigation-menu__item">
      <RouterLink 
        to="/listAims"
        class="navigation-menu__icon-link"
      >
        <svg-icon-loader icon-name="home"
          viewBox="0 0 21 20"
          width="25"
          height="25" 
        />
        <h5 class="navigation-menu__icon-link-title">
          Home
        </h5>
      </RouterLink>
    </li>

     <li class="navigation-menu__item">
      <RouterLink 
        to="/listAims"
        class="navigation-menu__icon-link"
      >
        <svg-icon-loader 
          icon-name="undefined"
          viewBox="0 0 21 20"
          width="25"
          height="25" 
        />
        <h5 class="navigation-menu__icon-link-title">
          undefined
        </h5>
      </RouterLink>
    </li>

     <li class="navigation-menu__item">
      <RouterLink 
        to="/createAim"
        class="navigation-menu__icon-link"
      >
        <svg-icon-loader 
          icon-name="add"
          viewBox="0 0 50 50"
          width="50"
          iconColor="246BFD"
          height="50" 
        />
      </RouterLink>
    </li>

    <li class="navigation-menu__item">
      <RouterLink 
        to="/listAims"
        class="navigation-menu__icon-link"
      >
        <svg-icon-loader 
          icon-name="partners"
          viewBox="0 0 20 20"
          width="25"
          height="25" 
        />
        <h5 class="navigation-menu__icon-link-title">
          Напарники
        </h5>
      </RouterLink>
    </li>
    
    <li class="navigation-menu__item">
      <RouterLink 
        to="/listAims"
        class="navigation-menu__icon-link"
      >
        <svg-icon-loader 
          icon-name="friends"
          viewBox="0 0 33 20"
          width="33"
          height="20" 
        />
        <h5 class="navigation-menu__icon-link-title">
          Друзья
        </h5>
      </RouterLink>
    </li>
  </ul>
</nav>
</template>

<script setup>
import SvgIconLoader from './components/icons/SvgIconLoader.vue'
</script>

<style scoped>
@import './assets/main.css';

.wrapper {
  max-width: 900px;
  margin-inline: auto;
  padding-inline: 16px;
}

.navigation-menu {}

.navigation-menu__list {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 864px;

  width: 100%;
  display: flex;
  list-style-type: none;
  justify-content: space-between;

  border-radius: 10px 10px 0 0;
  padding: 10px 20px;

  background: #253334;
  color: white;
}

.navigation-menu__item{
  display: grid;
}

.navigation-menu__icon-link {
  display: grid;

  fill: #676D75;
  color: #676D75;

  gap: 5px;
  justify-items: center;

  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
}

.navigation-menu__icon-link:hover,
.icon-add:hover
{
  fill: #539DF3;
  color: #539DF3;
}

.icon-add{
  transition: all 0.5s ease;
  fill: #246BFD;
}
</style>
