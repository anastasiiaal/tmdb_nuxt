<template>

    <div :class="displayClass[display]">
        <slot />
    </div>

</template>

<script setup>

    const displayClass = {
        grid: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  xl:grid-cols-6 gap-x-4 gap-y-6",
        carrousel: "scroll-ml-6 snap-x flex space-x-2 overflow-x-auto py-4",
        list: "list grid grid-cols-1 grid-row"
    }

    defineProps({
        display: String,
        default: 'grid',
        validator: (value) => ['grid', 'carrousel', 'list']
    })
</script>

<style scoped>
    .list > * {
        @apply max-h-[200px];
    }
</style>