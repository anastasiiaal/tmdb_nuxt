<template>
<section>
    <div class="container">

        home

    </div>
</section>
</template>

<script setup>

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap'); 

    body {
        @apply bg-snow;
        font-family: 'Poppins', sans-serif;
    }
    .container {
        width: 80%;
        margin: 0 auto;
    }

    section, .section {
        padding: 70px 0;
    }

    .movies-wrapper {
        @apply  flex flex-wrap justify-between gap-x-6 gap-y-12;
    }

    .movie_card {
        @apply flex flex-col w-[200px] bg-white;
    }

    .movie_card img {
        @apply object-cover h-[300px] w-full;
    }
</style>