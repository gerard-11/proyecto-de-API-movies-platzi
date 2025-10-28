const $ =(id)=> document.querySelector(id)
//sections
const headerSection= $('.header-container')
const trendingPreviewSection= $('#trendingPreview')
const categoriesPreviewSection= $('.categories-preview')
const genericSection= $('#genericList')
const movieDetailSection= $('#movieDetail')
const genericListContainer= $('.genericList-container')

//list and containers
const searchForm=$('#searchForm input')
const trendingMoviesPreviewList=$('.trendingPreview-movieList')
const categoriesPreviewList=$('.categoriesPreview_list')
const moviesDetailCategoriesList= $('#movieDetail .categories-list')
const relatedMoviesScrollContainer=$('.relatedMovies-scrollContainer')
const relatedMoviesContainer= $('.relatedMovies-container')
const relatedMoviesTitle= $('.relatedMovies-title')
//Elements
const headerTitle = $('.header-title');
const arrowBtn = $('.header-arrow');
const headerCategoryTitle = $('.header-title--categoryView');
const searchFormInput = $('#searchForm');
const searchFormBtn = $('#searchBtn');
const trendingBtn = $(' .trendingPreview-btn');
const movieDetailTitle = $('.movieDetail-title');
const movieDetailDescription = $('.movieDetail-description');
const movieDetailScore = $('.movieDetail-score');
const categoryTitle = $('.categories-preview .categoriesPreview__title');
const trendingPreviewHeader = $('.trendingPreview-header');
const titleHeader = $('.header-title__page');
const movieImgDetail = $('.movieDetail-container__page');