<script setup lang="ts">
import style from './Summary.module.css'
import { useSummary } from '../composables/useSummary';
import { priceFormatter } from "../utils/formatter";

const { getSummaryData }  = useSummary();
</script>

<template>
    <div :class="style.container">
      <div :class="style.card">
        <header>
          <span>Entradas</span>
          <span class="pi pi-arrow-circle-up"></span>
        </header>

        <strong>{{priceFormatter.format(getSummaryData().income)}}</strong>
      </div>

      <div :class="style.card">
        <header>
          <span>Saídas</span>
          <span class="pi pi-arrow-circle-down"></span>
        </header>

        <strong>{{priceFormatter.format(getSummaryData().outcome)}}</strong>
      </div>

      <div :class="style.card">
        <header>
          <span>Total</span>
          <span class="pi pi-chart-line"></span>
        </header>

        <strong>{{priceFormatter.format(getSummaryData().total)}}</strong>
      </div>
    </div>
</template>