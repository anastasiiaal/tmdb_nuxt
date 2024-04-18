<template>
    <section id="poster">
        <img class="poster" :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`" alt="">
        <div class="container">
            <div class="info-wrapper py-16 flex items-top gap-16">
                <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="">
                <div class="text-wrapper self-center">
                    <h1 class="mb-2">{{ movie.title }}</h1>
                    <p>{{ movie.overview }}</p>
                    <button class="mt-5 py-3 px-5 bg-primary hover:bg-red-700 font-semibold cursor-pointer">
                        Voir les trailers
                    </button>
                </div>
                <div class="note self-top">
                    <h1>{{ movie.vote_average }}<span>/10</span></h1>
                </div>
            </div>
        </div>
    </section>

    <section v-if="trailers">
        <div class="container">
            <h2>Vidéos</h2>

            <div class="text-snow flex gap-4 overflow-x-auto"> 
                <div v-for="trailer in trailers">
                    <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${trailer.id}`" title="Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
    <!--
    <section>
        <div class="container">
            <h2 class="text-2xl">Trailers</h2>
            <pre>{{ trailers }}</pre>
            <h2 class="text-2xl">Movie data</h2>
            <pre>{{ movie }}</pre>
        </div>
    </section>
    -->
</template>

<script setup>
    const { params } = useRoute()
    const { getMovieById } = useTmdb();
    const movie = ref({});
    
    const trailers = computed(() => {
        return movie.value.videos?.results
    })

    onMounted(async () => {
        movie.value = await getMovieById(params.id, 'videos');
    })
    
</script>

<style scoped>

    section {
        @apply text-snow;
    }

    section#poster { 
        padding: 0;
        position: relative;
    }

    section#poster img.poster {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(35%);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .info-wrapper img {
        height: 500px;
    }

    h1 {
        font-size: 45px;
        font-weight: 700;
    }

    .note h1 {
        color: gold;
    }

    .note h1 span {
        font-size: 25px;
        font-weight: 500;
        @apply text-snow;
    }

    h2 {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 30px;
    }

    p {
        font-size: 18px;
        line-height: 180%;
    }
    
</style>