<script setup lang="ts">
import { ref } from 'vue';
import style from './Dialog.module.css'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from 'radix-vue'

let order = ref<string>('');
let price = ref<Number|string>('');
let category = ref<string>('');
let type = ref<string>('');
</script>

<template>
    <div>
        <DialogPortal>
        <DialogOverlay :class="style.DialogOverlay"/>
        <DialogContent :class="style.DialogContent">
            <DialogTitle>
                Novo Pedido
            </DialogTitle>
            <DialogClose :class="style.DialogClose">
                <span class="pi pi-times" />
            </DialogClose>
            <form  v-on:submit=>
                <label for="order" :class="style.sr_only"/>
                <input
                    id="order"
                    v-model="order"
                    type="text" 
                    placeholder="Nome" 
                    required 
                />
                <label for="price" :class="style.sr_only"/>
                <input
                    id="price"
                    v-model="price"
                    type="number" 
                    placeholder="Preço" 
                    required 
                />
                <label for="category" :class="style.sr_only"/>
                <input
                    id="category"
                    v-model="category"
                    type="text" 
                    placeholder="Categoria" 
                    required 
                />
                
                <button type="submit">
                    Cadastrar
                </button>
            </form>
            </DialogContent>
        </DialogPortal>
    </div>
</template>