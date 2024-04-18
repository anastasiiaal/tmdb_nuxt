export const useTmdb = () => {
    const config = useRuntimeConfig()

    const baseUrl = 'https://api.themoviedb.org/3';
    const queryParams = '?language=fr-FR&page=1';
    const queryParamsSingle = '?append_to_response=videos&language=fr-FR';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${config.public.tmdbKey}`
        }
    };

    async function getMovies(params : string) {
        const response = await $fetch(baseUrl + '/movie/' + params + queryParams , options);    // $fetch() == fetch() plus puissant de nuxt
        return response.results
    }

    async function getMovie(id : number) {
        const response = await $fetch(baseUrl + '/movie/' + id + queryParamsSingle, options)
        return response
    }

    return { getMovies, getMovie }
}