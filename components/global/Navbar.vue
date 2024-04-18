<template>
    <ul class="bg-slate-800 text-white">
        <li v-for="{ name, path } in menu" :key="path">
            <NuxtLink :to="path">{{ name }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup>

    const menu = [
        { name: 'Home', path: '/'},
        { name: 'About', path: '/about'},
        { name: 'Movies', path: '/movies'},
    ]

</script>

<style scoped>
    .router-link-exact-active {
        @apply text-primary;
    }
</style>