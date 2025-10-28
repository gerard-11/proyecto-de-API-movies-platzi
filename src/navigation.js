
searchFormBtn.addEventListener('click',(e)=>{
    if(!searchForm.value){
        alert('ingresa datos')
        e.preventDefault();
    }else{
        location.hash= '#search=' + searchForm.value.trim()
    }
} )
trendingBtn.addEventListener('click',()=>{
    location.hash= '#trends='
} );

let historyArr = [];

arrowBtn.addEventListener("click", () => {
    if (historyArr.length > 1) {
        location.hash = historyArr[historyArr.length - 2];
        historyArr.splice(-2,2);
    } else {
        historyArr.pop();
        location.hash = "#home=" || '';
    }
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){
    historyArr.push(location.hash);
    console.log(historyArr);
   if(location.hash.startsWith('#search=')){
        searchPage()
    }else if(location.hash.startsWith('#movie=')){
       movieDetailPage()
    }else if(location.hash.startsWith('#category=')){
        categoriesPage()
    } else if(location.hash.startsWith('#trends=')){
       trendsPage()
    }else{
        homePage()
    }
}

function homePage(){
    console.log('Home!!')
    console.log(location.hash);
    headerSection.style.background= ''
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')
    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    arrowBtn.classList.add('inactive')
    trendingPreviewHeader.classList.remove('inactive')
    trendingBtn.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
    getTrendingMoviesPreview()
    createCategoriesPreview()
}
function categoriesPage(){
    console.log('category!!')
    headerSection.style.background= ''
    arrowBtn.classList.remove('inactive')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')
    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
    trendingPreviewHeader.classList.add('inactive')
    const [_,categoryData]= location.hash.split('=')
    const [categoryId, categoryName] = decodeURIComponent(categoryData).split('-').map(str => str.trim());
    headerCategoryTitle.innerHTML = categoryName;
    document.scrollTop= 0;
    getMoviesByCategories(categoryId)

}
function searchPage(){
    console.log('search!!')
    headerSection.classList.remove('header-container--long')
    headerSection.style.background= ''
    arrowBtn.classList.remove('inactive')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')
    moviesDetailCategoriesList.classList.add('inactive')
    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
    trendingPreviewHeader.classList.add('inactive')

    const [_,searchQuery]= location.hash.split('=')

    getMoviesBYSearch(searchQuery)
}
function movieDetailPage(){
    console.log('movies!!')

    headerSection.classList.remove('header-container--long')
    headerSection.classList.remove('inactive')
    arrowBtn.classList.remove('inactive')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')
    moviesDetailCategoriesList.classList.remove('inactive')
    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')
    trendingPreviewHeader.classList.add('inactive')

    const [_,movieId]= location.hash.split('=')

    getMovieById(movieId)
    console.log(moviesDetailCategoriesList)
}
function trendsPage(){
    console.log('trends!!')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background= ''
    arrowBtn.classList.remove('inactive')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')
    moviesDetailCategoriesList.classList.add('inactive')
    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    trendingBtn.classList.add('inactive')
    getTrendingMovies()
}