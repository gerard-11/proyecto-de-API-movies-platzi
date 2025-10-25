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
arrowBtn.addEventListener('click',()=>{
    history.back();
    setTimeout(navigator, 50)
} )

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){
    if(location.hash.startsWith('#trends')){
        trendsPage()
    }else if(location.hash.startsWith('#search=')){
        searchPage()
    }else if(location.hash.startsWith('#movie=')){
       moviesPage()
    }else if(location.hash.startsWith('#category=')){
        categoriesPage()
    } else{
        homePage()
    }
}

function homePage(){
    console.log('Home!!')
  /*  headerSection.classList.remove('header-container--long')
   /!* headerSection.style.background= ''*!/
    arrowBtn.classList.add('inactive')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')
    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')
    trendingBtn.classList.remove('inactive')
    categoryTitle.classList.remove('inactive')*/
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')
    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    arrowBtn.classList.add('inactive')
    getTrendingMoviesPreview()
    getCategoriesPreview()
}
function categoriesPage(){
    console.log('category!!')
    /*headerSection.style.background= ''*/
    arrowBtn.classList.remove('inactive')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')
    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    const [_,categoryData]= location.hash.split('=')
    const [categoryId, categoryName] = decodeURIComponent(categoryData).split('-').map(str => str.trim());
    headerCategoryTitle.innerHTML = categoryName;
    document.scrollTop= 0;
    getMoviesByCategories(categoryId)

}
function searchPage(){
    console.log('search!!')
    headerSection.classList.remove('header-container--long')
    /*headerSection.style.background= ''*/
    arrowBtn.classList.remove('inactive')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')
    moviesDetailCategoriesList.classList.add('inactive')
    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.remove('inactive')
    movieDetailsContainer.classList.add('inactive')

    const [_,searchQuery]= location.hash.split('=')

    getMoviesBYSearch(searchQuery)
}
function moviesPage(){
    console.log('movies!!')
    headerSection.classList.remove('header-container--long')
    /*headerSection.style.background= ''*/
    arrowBtn.classList.remove('inactive')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')
    moviesDetailCategoriesList.classList.add('inactive')
    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')
}
function trendsPage(){
    console.log('trends!!')

    headerSection.classList.remove('header-container--long')
    /*headerSection.style.background= ''*/
    arrowBtn.classList.remove('inactive')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')
    moviesDetailCategoriesList.classList.add('inactive')
    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')

}