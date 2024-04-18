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

    const config = useRuntimeConfig()
    const movies = ref([]);

    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${config.public.tmdbKey}`
        }
    };

    async function getMowPlayingMovies() {
        const response = await $fetch(url, options);    // $fetch() == fetch() plus puissant de nuxt
        movies.value = response.results;
    }

    getMowPlayingMovies()


</script>

<style scoped>

</style>