<script setup lang="ts">
import style from './Header.module.css'
</script>

<template>
  <header :class="style.header">
    <div :class="style.headerContent">
      <div :class="style.logo">Hamburgueria LA</div>
      <nav :class="style.nav">
        <ul :class="style.nav_list">
          <li :class="style.nav_item"><router-link to="/Orders">Pedidos</router-link></li>
          <li :class="style.nav_item"><a href="#">Cadastrar Pedido</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>