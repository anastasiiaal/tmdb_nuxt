<template>
<section>
    <div class="container">

        <div class="filter-wrapper flex gap-3 mb-10">
            <button v-for="{name, param} in menu" class="filter bg-black py-2 px-4 text-snow opacity-90 hover:opacity-100 radius-sm uppercase text-xs" @click="getFilteredMovies(param)">
                {{ name }}
            </button>
        </div>

        <div class="movies-wrapper">
            <a v-for="movie in movies" class="movie_card" :href="/movies/ + movie.id">
                <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title">
                <div class="text-wrapper p-4">
                    <h3>{{ movie.title }}</h3>
                </div>
            </a>
        </div>
    </div>
</section>

<pre>{{ movies }}</pre>

</template>

<script setup>

    const { getMovies } = useTmdb();
    const movies = ref([]);

    const menu = [
        { name: 'Bientôt', param: 'upcoming'},
        { name: 'Populaires', param: 'popular'},
        { name: 'Meilleure note', param: 'top_rated'},
        { name: 'A la une', param: 'now_playing'},
    ]

    async function getFilteredMovies (param) {
        movies.value = await getMovies(param);
    }

    onMounted(() => {
            getFilteredMovies('upcoming')
        }
    )

</script>

<style scoped>

</style>
