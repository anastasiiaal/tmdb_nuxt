<template>
    <ul>
        <li v-for="{ name, path } in menu" :key="link.path">
            <a :href="path">{{ name }}</a>
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