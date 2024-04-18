<template>
<section>
    <div class="container">

        home
        
        <pre>{{ filmData }}</pre>
    </div>
</section>
</template>

<script setup>

    import { ref } from 'vue'

    const filmData = ref([]);

    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODVhNjRiNzdmNGM0NDZhYWU5NGY0NjMzNWYxZmU4ZSIsInN1YiI6IjYyYjQzNmE0OTFmMGVhMDYwN2Q0YTkxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RjwDvvk3VOI_nobiZmATfokrEeP7oojnvhIRUa64ZFQ'
        }
    };

    
    useFetch(async () => {
        const response = await fetch(url, options);
        const json = await response.json();
        filmData.value = json.results;
    });

</script>

<style>
    body {
        @apply bg-snow;
    }
    .container {
        width: 80%;
        margin: 0 auto;
    }

    section, .section {
        padding: 70px 0;
    }
</style>