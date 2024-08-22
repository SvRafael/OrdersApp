<script setup lang="ts">
import style from './App.module.css'
import HeaderPage from './components/Header.vue'
import Orders from './components/Orders.vue'
import Summary from './components/Summary.vue'
</script>

<template>
  <div>
    <HeaderPage />
    <Summary />
    <div :class="style.wrapper">
      <main>
        <Orders />
      </main>
    </div>
  </div>
</template>

