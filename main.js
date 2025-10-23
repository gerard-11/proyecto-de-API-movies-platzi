
async function getTrendingMoviesPreview(){
    const res= await fetch (`https://api.themoviedb.org/3/trending/movie/day?api_key=` + API_KEY );
    const data= await res.json();

    const movies= data.results;


    movies.forEach(movie => {
        const moviesSection= document.querySelector('.movies');

        const movieContainer= document.createElement('div');
        movieContainer.classList.add('movie-container')

        const movieImg= document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src',
            'https://image.tmdb.org/t/p/w200/' + movie.poster_path);

        moviesSection.appendChild(movieContainer)
        movieContainer.appendChild(movieImg);
    })
};
getTrendingMoviesPreview()

async function getCategoriesPreview(){
    const res= await fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=` + API_KEY );
    const data= await res.json();

    const categories= data.genres;
    console.log(categories)
    categories.forEach(category => {
    const containerCategoriesPreview= document.querySelector('.categoriesPreview_list');

    const previewCategory= document.createElement('div');
    previewCategory.classList.add('category-container');

    const categoryTitle= document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', 'id' + category.id);
    const categoryTitleText=document.createTextNode(category.name)

        categoryTitle.appendChild(categoryTitleText);
        previewCategory.appendChild(categoryTitle);
        containerCategoriesPreview.appendChild(previewCategory);
    })
}

getCategoriesPreview()


