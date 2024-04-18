<template>
movie single ID {{ params.id  }}
<pre>{{ query.s }}</pre> <!-- ici on recupère le param "s" de l'url e.g. link.com?s=22 ===> "22"-->
</template>

<script setup>
    const { params, query } = useRoute()
</script>

<style scoped>

</style>