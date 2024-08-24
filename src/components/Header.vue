<script setup lang="ts">
import style from './Header.module.css'
import {
  DialogRoot,
  DialogTrigger,
} from 'radix-vue'
import NewOrderModal from '../components/Dialog.vue'
import { useDialogStore } from '../store/dialogStore';

const dialogStore = useDialogStore();

const handleOpenModal = function () {
  dialogStore.setDialogOpen(true)
}
</script>

<template>
  <header :class="style.header">
    <div :class="style.headerContent">
      <div :class="style.logo">Hamburgueria LA</div>
      <nav :class="style.nav">
        <ul :class="style.nav_list">
          <li :class="style.nav_item">
            <router-link to="/Orders">Pedidos</router-link>
          </li>
          <li>
            <DialogRoot>
              <DialogTrigger asChild>
                <button @click="handleOpenModal" :class="style.modalButton">Cadastrar Pedido</button>
              </DialogTrigger>
              <NewOrderModal v-if="dialogStore.getDialogIsOpen"/>
            </DialogRoot>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>