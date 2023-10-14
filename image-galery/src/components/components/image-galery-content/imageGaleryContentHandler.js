import { htmlCreateComponentHelper } from '../../utilities/htmlCreateComponentHelper';

import imageTemplate from "./imageTemplate.html";

import { getDataObjectsArrayFromServer } from './searchAndURLfunctions';
import { handleImageWrapperElements } from './userRequestHandleFunctions';

const imageGaleryContentHTMLElement = htmlCreateComponentHelper(imageTemplate);

export function imageGaleryHandler() {
  // classnames and ids
  const searchButtonClassName = 'search__button';
  const magnifyingGlassElementClassName = 'magnifying-glass_position';

  const imageGaleryContentContainerClassName = 'image-galery-content__container';
  const imageWrapperClassName = 'image-wrapper';
  const imageContentClassName = 'image-content';

  // HTML elements
  const body = document.querySelector(`body`);

  const searchButton = document.querySelector(`.${searchButtonClassName}`);
  const magnifyingGlassElement = document.querySelector(`.${magnifyingGlassElementClassName}`);

  const imageGaleryContentContainer = document.querySelector(`.${imageGaleryContentContainerClassName}`);
  const imageWrapper = document.getElementsByClassName(`${imageWrapperClassName}`);
  const imageContent = document.getElementsByClassName(`${imageContentClassName}`);
  
  // abstract data
  const imageContentWidth = getComputedStyle(imageWrapper[0]).width;
  const imageContentHeight = getComputedStyle(imageWrapper[0]).height;

  // apikeys
  // const unsplashApiKeyString = 'jc4Wr95IEhsXFXsYx213dPJqBiq0oKrt7Pzq0yLpxrI';
  // const testUnsplashApiKeyString = 'e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
  const unsplashApiKeyString = 'e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
  
  // unsplash data
  const unsplashURL = new URL('https://api.unsplash.com/');
  // https://learn.javascript.ru/url
  // method .searchParams
  // e.g. .searchParams.append(.append('/search/photos', unsplashURL)) =>
  // URL object .toString => 'https://api.unsplash.com/search/photos'
  const unsplashURLSearch = new URL('/search/photos', unsplashURL);

  // utilities
  const searchParams = {
    getSearchQueryParams: [searchButton, magnifyingGlassElement],
    getUrlWithQueryParams: [unsplashURLSearch],
    getUrlWithlimitImagesPerResponseParams: [16],
    getUrlWithsetImagesOrientationPerResponseParams: ['landscape'],
    fetchDataParams: [unsplashApiKeyString],
  }
  
  const imageWrapperElementsParams = {
    handleImagesAndLinksResponsedFromServerParams: [imageGaleryContentContainer, imageContent],
    setPreparedURLToImageWrappersParams: [getDataObjectsArrayFromServer, searchParams, imageContent, imageContentWidth, imageContentHeight],
    removeExtraImageWrappersParams: [imageWrapper, getDataObjectsArrayFromServer, searchParams],
    addRequiredImageWrappersParams: [getDataObjectsArrayFromServer, searchParams, imageWrapper, imageGaleryContentContainer, imageGaleryContentHTMLElement],
    handleEmptyUsersRequestParams: [imageWrapper, imageGaleryContentContainer, imageContent, imageContentWidth, imageContentHeight],
  }

  // realization of image galery logic

  // default value of the searchButton for content when window loaded
  // common for that closure. No other way!
  let searchQuery = 'universe';
  searchButton.value = searchQuery;

  // logic for page on load (the entire script loads on window 'load' event at higher level)
  handleImageWrapperElements(imageWrapper, getDataObjectsArrayFromServer, searchParams, imageWrapperElementsParams, searchQuery);
  
  // logic for search button
  searchButton.addEventListener('search', (event) => {
    // there's no other way as impure function that way...
    // addEventListener always return undefined!!!
    // https://stackoverflow.com/questions/68063283/addeventlistener-returns-undefined-in-javascript
    event.preventDefault();
    searchQuery = searchButton.value;
    handleImageWrapperElements(imageWrapper, getDataObjectsArrayFromServer, searchParams, imageWrapperElementsParams, searchQuery);
  })
  
  // logic for search button
  magnifyingGlassElement.addEventListener('click', (event) => {
    // same reasons as in the searchButton.addEventListener
    event.preventDefault();
    searchQuery = searchButton.value;
    handleImageWrapperElements(imageWrapper, getDataObjectsArrayFromServer, searchParams, imageWrapperElementsParams, searchQuery);
  })

  // observe imageGaleryContentContainer childs add | remove
  // and handle the images
  // only after searchButton.addEventListener('search'....)
  // only after magnifyingGlassElement.addEventListener('click'....)
  let mutatuinObserver = new MutationObserver(changes => {
    handleImageWrapperElements(imageWrapper, getDataObjectsArrayFromServer, searchParams, imageWrapperElementsParams, searchQuery);
  })
  
  mutatuinObserver.observe(imageGaleryContentContainer, {
    childList: true,
    childListOldValue: true,
    subtree: true, 
  })
}

