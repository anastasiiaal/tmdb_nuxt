<template>
<section>
    <div class="container">

        Movies index
        
        <div class="card flex flex-col h-[300px] w-[250px] bg-slate-500">
            <img src="" alt="">
            <h3>Title</h3>

        </div>
        <!--
        -->
        <pre>{{ movies }}</pre>
    </div>
</section>

</template>

<script setup>

    const { getMowPlayingMovies } = useTmdb();
    const movies = ref([]);

    movies.value = await getMowPlayingMovies();

</script>

<style scoped>

</style>