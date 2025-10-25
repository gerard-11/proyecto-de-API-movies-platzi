const $ =(id)=> document.querySelector(id)
//sections
const headerSection= $('.header-container')
const trendingPreviewSection= $('#trendingPreview')
const categoriesPreviewSection= $('.categories-preview')
const genericSection= $('#genericList')
const movieDetailSection= $('#movieDetail')

//list and containers
const searchForm=$('#searchForm input')
const trendingMoviesPreviewList=$('.trendingPreview-movieList')
const categoriesPreviewList=$('.categoriesPreview_list')
const moviesDetailCategoriesList= $('#movieDetail .categories-list')
const relatedMoviesContainer=$('.relatedMovies-scrollContainer')
const movieDetailsContainer=$('.movieDetail-container')
const moviesSection= $('.trendingPreview-container');

//Elements
const headerTitle = $('.header-title');
const arrowBtn = $('.header-arrow');
const headerCategoryTitle = $('.header-title--categoryView');
const searchFormInput = $('#searchForm');
const searchFormBtn = $('#searchBtn');
const trendingBtn = $('.trendingPreview-header .trendingPreview-btn');
const movieDetailTitle = $('.movieDetail-title');
const movieDetailDescription = $('.movieDetail-description');
const movieDetailScore = $('.movieDetail-score');
const categoryTitle = $('.categories-preview .categoriesPreview__title');