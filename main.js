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
        movieContainer.addEventListener('click',()=>{
           location.hash='movie=' + movie.id;
       })
        const movieImg= document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src',
            'https://image.tmdb.org/t/p/w200/' + movie.poster_path);

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer)
    })
}

function createCategories(categories, container){
    container.innerHTML = '';

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
        container.appendChild(previewCategory);
    })
}

async function getTrendingMoviesPreview(){
    const {data}= await api(`trending/movie/day` );
    const movies= data.results;

createMoviesContainer(movies,trendingPreviewSection);

};

async function createCategoriesPreview(){
    const {data}= await api ('genre/movie/list' );
    const categories= data.genres;
    createCategories(categories,categoriesPreviewSection );
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

async function getTrendingMovies(){
    const {data}= await api(`trending/movie/day` );
    const movies= data.results;

    createMoviesContainer(movies,genericSection);
};

async function getMovieById(id){
    const {data:movie}= await api(`movie/` + id );

    const movieImg= ' https://image.tmdb.org/t/p/w500/' + movie.poster_path

    movieImgDetail.style.background= `
    url(${movieImg}) `
    /*movieImgDetail.style.backgroundSize = 'cover';
    movieImgDetail.style.backgroundPosition = 'center';
    movieImgDetail.style.backgroundRepeat = 'no-repeat';
    movieImgDetail.style.borderRadius = '16px';
    movieImgDetail.style.boxShadow = '0 8px 25px rgba(0,0,0,0.6)';
    movieImgDetail.style.width = '500px';
    movieImgDetail.style.margin = '15px auto 15px auto';*/



    
    movieDetailTitle.textContent=movie.title
    movieDetailDescription.textContent=movie.overview
    movieDetailScore.textContent=movie.vote_average

    createCategories(movie.genres,moviesDetailCategoriesList)
    getRelatedMoviesById(id)
}

async function getRelatedMoviesById(id){
    const {data}= await api(`movie/${id}/similar` );
    const relatedMovies=data.results;
    console.log(relatedMovies);
    createMoviesContainer(relatedMovies, relatedMoviesContainer)
}

