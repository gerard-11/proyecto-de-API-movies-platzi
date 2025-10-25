const api= axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type':'application/json;charset=UTF-8',
    },
    params:{
        'api_key': API_KEY
    }
})
//utilitis
function createMoviesContainer(movies, container){
    container.innerHTML='';

    movies.forEach(movie => {
        const movieContainer= document.createElement('div');
        movieContainer.classList.add('movie-container')

        const movieImg= document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src',
            'https://image.tmdb.org/t/p/w200/' + movie.poster_path);

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer)
    })
}

async function getTrendingMoviesPreview(){
    const {data}= await api(`trending/movie/day` );
    const movies= data.results;

createMoviesContainer(movies,moviesSection);

};


async function getCategoriesPreview(){
    const {data}= await api ('genre/movie/list' );
    const categories= data.genres;

    categoriesPreviewSection.innerHTML = '';

    categories.forEach(category => {
    const previewCategory= document.createElement('div');
    previewCategory.classList.add('category-container');

    const categoryTitle= document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', 'id' + category.id);
    previewCategory.addEventListener('click', ()=>{
        location.hash = `#category=${category.id}-${category.name}`;
    }); //aqui definimos la ubicacion del hash
    const categoryTitleText=document.createTextNode(category.name)

        categoryTitle.appendChild(categoryTitleText);
        previewCategory.appendChild(categoryTitle);
        categoriesPreviewSection.appendChild(previewCategory);
    })
}

async function getMoviesByCategories(id){
    const {data}= await api(`discover/movie`,{
        params: {
            with_genres: id,
        }
    });
    const movies= data.results;

    createMoviesContainer(movies,genericSection);
};

async function getMoviesBYSearch(query){
    const {data}= await api(`search/movie`,{
        params: {
            query,
        }
    });
    const movies= data.results;
console.log(movies);
    createMoviesContainer(movies,genericSection);
};


