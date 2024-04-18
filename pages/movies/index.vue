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

<hr>

<br>
<br>
<br>

<div class="w-full flex gap-8 snap-x scroll-ps-6 overflow-x-auto pb-10">
    <div class="bg-stripes-pink w-6 start-0 top-0 bottom-10"></div>
    <article v-for="movie in movies" :key="movie.id"
        class="group relative aspect-video h-96 min-w-[300px] cursor-pointer overflow-hidden rounded-xl snap-start first:ps-6">
        <NuxtLink :to="/movies/ + movie.id">
            <div
                class="absolute z-20 inset-0 to-90% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500">
                <h2
                    class="absolute bottom-8 left-8 m-0 font-extrabold uppercase opacity-0 transition-all delay-300 duration-300 ease-out group-hover:opacity-100 group-hover:bottom-1/2 group-hover:delay-0 group-hover:duration-300">
                    {{ movie.title }}
                </h2>
                <p
                    class="absolute left-8 top-1/2 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300">
                    {{ movie.overview }}
                </p>
                <a class="absolute bottom-8 left-8 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300"
                    href="/">
                    Find out more
                </a>
            </div>
            <!-- Overlay -->
            <div class="absolute h-full w-full z-10 inset-0 overlay-bg opacity-0 group-hover:opacity-100">
            </div>
            <img class="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300"
                :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="Movie Poster" />
        </NuxtLink>


    </article>

</div>


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
    /* ::-webkit-scrollbar {
        display: none;
    } */
</style>
