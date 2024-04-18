<template>
    <header>
        <div class="container">
            <ul>
                <li v-for="{ name, path } in menu" :key="path">
                    <NuxtLink :to="path">{{ name }}</NuxtLink>
                </li>
            </ul>
        </div>
    </header>
    
</template>

<script setup>

    const menu = [
        { name: 'Home', path: '/'},
        { name: 'About', path: '/about'},
        { name: 'Movies', path: '/movies'},
    ]

</script>

<style scoped>
    header {
        @apply bg-black py-5 text-snow;
    }
    ul {
        @apply flex gap-10;
    }
    .router-link-exact-active {
        @apply text-primary relative;
    }

    .router-link-exact-active:after {
        content: '';
        @apply absolute -bottom-1 left-0 h-[1px] bg-primary w-full;
    }
</style>