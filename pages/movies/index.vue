<template>
<section>
    <div class="container">

        Movies index
        
        <div class="card flex flex-col h-[300px] w-[250px] bg-slate-500">
            <img src="" alt="">
            <h3>Title</h3>

        </div>
        <!--
        <pre>{{ filmData }}</pre>
        -->
        <pre>{{ config.public.tmdbKey }}</pre>
    </div>
</section>

</template>

<script setup>

    const config = useRuntimeConfig()

    import { ref } from 'vue'

    const filmData = ref([]);

    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer '
        }
    };


    useFetch(async () => {
        const response = await fetch(url, options);
        const json = await response.json();
        filmData.value = json.results;
    });

</script>

<style scoped>

</style>