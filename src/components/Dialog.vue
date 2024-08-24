<script setup lang="ts">
import { ref } from 'vue';
import style from './Dialog.module.css'
import api from '../axios'
import { useDialogStore } from '../store/dialogStore';

import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  RadioGroupItem, 
  RadioGroupRoot
} from 'radix-vue'

const dialogStore = useDialogStore();

let order = ref<string>('');
let price = ref<Number|string>('');
let category = ref<string>('');
let type = ref<string>('ENTRADA');

const handleSubmit = async function() {
    await api.post('orders', {
        "order": order.value,
        "price": price.value,
        "category": category.value,
        "type": type.value,
        "create_at": new Date() 
    })
    dialogStore.setDialogOpen(false);
}
</script>

<template>
    <div>
        <DialogPortal>
            <DialogOverlay :class="style.DialogOverlay"/>
            <DialogContent :class="style.DialogContent">
                <DialogTitle>
                    Novo Registro
                </DialogTitle>
                <DialogClose :class="style.DialogClose">
                    <span class="pi pi-times" />
                </DialogClose>
                <form  @submit.prevent="handleSubmit">
                    <label 
                        :class="style.sr_only" 
                        for="order" 
                    />
                    <input
                        id="order"
                        v-model="order"
                        type="text" 
                        placeholder="Nome" 
                        required 
                    />
                    <label 
                        :class="style.sr_only" 
                        for="price"
                    />
                    <input
                        id="price"
                        v-model="price"
                        type="number" 
                        placeholder="Preço" 
                        required 
                    />
                    <label 
                        :class="style.sr_only" 
                        for="category" 
                    />
                    <input
                        id="category"
                        v-model="category"
                        type="text" 
                        placeholder="Categoria" 
                        required 
                    />
                    <RadioGroupRoot
                        v-model="type"
                        :class="style.RadioGroupRoot"
                        default-value="ENTRADA"
                        aria-label="View density"
                    >
                        <RadioGroupItem
                            :class="type == 'ENTRADA' ? style.RadioGroupItemCheck : style.RadioGroupItemNotCheck"
                            id="radioIncome"
                            value="ENTRADA"
                        >
                            Entrada
                        </RadioGroupItem>
                        <RadioGroupItem
                            :class="type == 'SAIDA' ? style.RadioGroupItemCheck : style.RadioGroupItemNotCheck"
                            id="radioOutcome"
                            value="SAIDA"
                        >
                            Saida
                        </RadioGroupItem>
                    </RadioGroupRoot>
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </DialogContent>
        </DialogPortal>
    </div>
</template>