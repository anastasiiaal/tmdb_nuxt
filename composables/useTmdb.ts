export const useTmdb = () => {
    const config = useRuntimeConfig()

    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${config.public.tmdbKey}`
        }
    };

    async function getMowPlayingMovies() {
        const response = await $fetch(url, options);    // $fetch() == fetch() plus puissant de nuxt
        return response
    }

    return { getMowPlayingMovies }
}