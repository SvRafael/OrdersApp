<script setup lang="ts">
import style from './Summary.module.css'
</script>

<template>
    <div :class="style.container">
      <div :class="style.card">
        <header>
          <span>Entradas</span>
          <span class="pi pi-search"></span>
        </header>

        <strong>R$ 10,00</strong>
      </div>

      <div :class="style.card">
        <header>
          <span>Saídas</span>
          <span class="pi pi-search"></span>
        </header>

        <strong>R$ 10,00</strong>
      </div>

      <div :class="style.card">
        <header>
          <span>Total</span>
          <span class="pi pi-search"></span>
        </header>

        <strong>R$ 10,00</strong>
      </div>
    </div>
</template>