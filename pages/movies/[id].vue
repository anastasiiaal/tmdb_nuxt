<template>
    <section id="poster">
        <img class="poster" :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`" alt="">
        <div class="container">
            <div class="info-wrapper pt-12 flex items-top gap-16">
                <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="">
                <div class="text-wrapper self-center">
                    <h1 class="mb-2">{{ movie.title }}</h1>
                    <p>{{ movie.overview }}</p>
                    <button class="mt-5 py-3 px-5 bg-primary hover:bg-primary-600 font-semibold cursor-pointer">
                        Voir le trailer
                    </button>
                </div>
                <div class="note self-top">
                    <h1>8.99<span>/10</span></h1>
                </div>
            </div>
        </div>
    </section>


    <section>
        <div class="container">
            movie single ID {{ params.id }}
            <pre>{{ movie }}</pre>
        </div>
    </section>

</template>

<script setup>
    const { params } = useRoute()
    const { getMovie } = useTmdb();
    const movie = ref();

    movie.value = await getMovie(params.id);
    
</script>

<style scoped>

    section {
        @apply text-snow;
    }

    section#poster { 
        padding: 0;
        height: 600px;
        position: relative;
        z-index: -2;
    }

    section#poster img.poster {
        height: 60%;
        width: 100%;
        object-fit: cover;
        filter: brightness(50%);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .info-wrapper img {
        height: 500px;
    }

    h1 {
        font-size: 50px;
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

    p {
        font-size: 18px;
        line-height: 180%;
    }
</style>