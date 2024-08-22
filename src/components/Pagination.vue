<script setup lang="ts">
    import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'radix-vue'
    import style from './Pagination.module.css'
    import { useOrderStore } from '../store/ordersStore';
    import { useData } from '../composables/useOrdersData'

    const { fetchPaginateData } = useData();
    const orderStore = useOrderStore();

    const handlePageClick = async (event: Event) => {
        const inputElement = event.target as HTMLInputElement | null;
        fetchPaginateData(inputElement ? Number(inputElement.value) : 1);
    }

</script>

<template>
    <div :class="style.pagination">
        <PaginationRoot
            :total="orderStore.getOrders.length"
            :sibling-count="1"
            show-edges
            :default-page="1"
        >
            <PaginationList
            v-slot="{ items }"
            :class="style.PaginationList"
            >
            <PaginationFirst :class="style.Button">
                <Icon icon="radix-icons:double-arrow-left" />
            </PaginationFirst>
            <PaginationPrev
                :style="{ marginRight: 16 }"
                :class="style.Button"
            >
                <Icon icon="radix-icons:chevron-left" />
            </PaginationPrev>
            <template v-for="(page, index) in items">
                <PaginationListItem
                    v-if="page.type === 'page'"
                    :key="index"
                    :class="style.Button"
                    :value="page.value"
                    @click="handlePageClick($event)"
                >
                {{ page.value }}
                </PaginationListItem>
                <PaginationEllipsis
                v-else
                    :key="page.type"
                    :index="index"
                    :class="style.PaginationEllipsis"
                >
                &#8230;
                </PaginationEllipsis>
            </template>
            <PaginationNext
                :style="{ marginLeft: 16 }"
                :class="style.Button"
            >
                <Icon icon="radix-icons:chevron-right" />
            </PaginationNext>
            <PaginationLast :class="style.Button">
                <Icon icon="radix-icons:double-arrow-right" />
            </PaginationLast>
            </PaginationList>
        </PaginationRoot>
    </div>
</template>