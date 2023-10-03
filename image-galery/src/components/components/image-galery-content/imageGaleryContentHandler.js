import { htmlCreateComponentHelper } from '../../utilities/htmlCreateComponentHelper';

import imageTemplate from "./imageTemplate.html";

// project entire styles
// import "../../imageGalery.scss"; //TODO! Test will script work without this?

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
  // const imageWrapper = document.querySelectorAll(`.${imageWrapperClassName}`);
  // const imageContent = document.querySelectorAll(`.${imageContentClassName}`);
  const imageWrapper = document.getElementsByClassName(`${imageWrapperClassName}`);
  const imageContent = document.getElementsByClassName(`${imageContentClassName}`);
  
  // abstract data
  const imageContentWidth = getComputedStyle(imageWrapper[0]).width;
  const imageContentHeight = getComputedStyle(imageWrapper[0]).height;

  // apikeys
  const unsplashApiKeyString = 'jc4Wr95IEhsXFXsYx213dPJqBiq0oKrt7Pzq0yLpxrI';
  // const testUnsplashApiKeyString = 'e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
  
  // unsplash data
  const unsplashURL = new URL('https://api.unsplash.com/');
  // https://learn.javascript.ru/url
  // method .searchParams
  // e.g. .searchParams.append(.append('/search/photos', unsplashURL)) =>
  // URL object .toString => 'https://api.unsplash.com/search/photos'
  const unsplashURLSearch = new URL('/search/photos', unsplashURL);

  let searchQuery = 'universe';

  // utilities
  function getSearchQuery() {
    searchButton.addEventListener('search', (event) => {
      event.preventDefault();
      searchQuery = searchButton.value;
    })

    magnifyingGlassElement.addEventListener('click', (event) => {
      event.preventDefault();
      searchQuery = searchButton.value;
    })
  }

  function getUrlWithQuery(baseURL, searchQuery) {
    // it's impossible to reassign URL with new params added!!! Only creating new URL!
    // e.g. const url2 = url1.searchParams.append('param', 'value')
    // url2 === undefined
    const baseURLWithSearchAndQuery = new URL('', baseURL);
    // e.g. 'https://api.unsplash.com/search/photos' => 'https://api.unsplash.com/search/photos?query=universe'
    baseURLWithSearchAndQuery.searchParams.append('query', `${searchQuery}`);
    // return baseURLWithSearchAndQuery.searchParams.append('query', `${searchQuery}`); === undefined !!!!
    return baseURLWithSearchAndQuery;
  }

  function getUrlWithlimitImagesPerResponse(baseURL, quantity = 10) {
    // unsplash limit images per_page: 10 (default) ... 30;
    const baseURLWithImageLimit = new URL('', baseURL);
    // no other way to do so!
    baseURLWithImageLimit.searchParams.append(`per_page`, `${quantity}`);
    return baseURLWithImageLimit;
  }

  function getUrlWithsetImagesOrientationPerResponse(baseURL, orientation = 'portrait') {
    // unsplash orientation: landscape, portrait, squarish;
    const urlWithOrientation = new URL('', baseURL);
    urlWithOrientation.searchParams.append(`orientation`, `${orientation}`);
    return urlWithOrientation;
  }

  async function fetchData(preparedURL) {
    const response = await fetch(preparedURL, {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Client-ID ${unsplashApiKeyString}`,
      })
    });

    // response.ok === 200 ... 299
    if (response.ok) {
      const responseData = await response.json();
      // array like below
      // [{id..., likes..., links..., tags..., urls... etc}, {id..., likes..., links..., tags..., urls... etc} .... etc]
      return responseData.results;
    } else {
      console.error( `HTTP response failure: ${response.status}` );
    }
  }

  // get data [{...}, {...}, {...}] from the server
  async function getDataObjectsArrayFromServer() {
    // search button value on 'Enter' keydown
    getSearchQuery();

    const urlWithQuery = getUrlWithQuery(unsplashURLSearch, searchQuery);
    const urlWithlimitImagesPerResponse = getUrlWithlimitImagesPerResponse(urlWithQuery, 16);
    const urlWithsetImagesOrientationPerResponse = getUrlWithsetImagesOrientationPerResponse(urlWithlimitImagesPerResponse, 'landscape');
    // async function always return promise!!! To deal with => use .then after async function implementation
    // fetchData(urlWithsetImagesOrientationPerResponse).then(result => Object.assign(ObjectOfObjectsWithImages, result));
    const arrayOfObjects = await fetchData(urlWithsetImagesOrientationPerResponse);
    return arrayOfObjects;
  }

  function removeMeasureUnitFromSize(size) {
    if (typeof size === 'string') {
      if (size.includes('px')) {
        return size.replace(/(?<=\d+\.?\d+)px/gi, '');
      }
    }
  }

  function setURLWithImageWidthHeight(rawURL, width = 10, height = 10) {
    const imageURLWidthHeight = new URL('', rawURL);
    imageURLWidthHeight.searchParams.append('w', `${removeMeasureUnitFromSize(width)}`);
    imageURLWidthHeight.searchParams.append('h', `${removeMeasureUnitFromSize(height)}`);
    return imageURLWidthHeight.toString();
  }

  async function setPreparedURLToImageWrappers(getDataObjectsArrayFromServer) {
    (await getDataObjectsArrayFromServer()).forEach((dataObject, index) => {
      // accident error occur if imageContent[index] didn't load yet!
      // to prevent this add this condition
      if (imageContent[index]) {
        imageContent[index].style.backgroundImage = `url(${setURLWithImageWidthHeight(dataObject.urls.raw, imageContentWidth, imageContentHeight)})`;
      }
    })
  }
  
  function handleImagesAndLinksResponsedFromServer() {
    if (!imageGaleryContentContainer.classList.contains('grid-auto-fill')) {
      imageGaleryContentContainer.classList.add('grid-auto-fill');
      imageGaleryContentContainer.classList.remove('layout-multiple-columns');
      imageGaleryContentContainer.classList.remove('_empty-request__container');
    }

    imageContent[0].style.width = '';
    imageContent[0].style.height = '';
  }

  async function removeExtraImageWrappers() {
    // remove all extra imageWrapper
    for (let i = 0; i < (imageWrapper.length - (await getDataObjectsArrayFromServer()).length); i++) {
      imageWrapper[i].remove();
    }
  }

  function handleEmptyUsersRequest() {
    // leave the one imageWrapper
    for (let i = 0; i < imageWrapper.length - 1; i++) {
      imageWrapper[i].remove();
    }
    // styling image of empty request
    imageGaleryContentContainer.classList.remove('grid-auto-fill');
    imageGaleryContentContainer.classList.add('layout-multiple-columns');
    imageGaleryContentContainer.classList.add('_empty-request__container');

    imageContent[0].style.width = '50vw';
    imageContent[0].style.height = '50vh';
    imageContent[0].style.backgroundImage = `url(${setURLWithImageWidthHeight('https://images.unsplash.com/photo-1555861496-0666c8981751?ixid=M3w5ODA5OXwwfDF8c2VhcmNofDR8fDQwNHxlbnwwfDB8fHwxNjk2MzQ0ODQ5fDA&ixlib=rb-4.0.3', imageContentWidth, imageContentHeight)})`;
  }

  async function addRequiredImageWrappers() {
    for (let i = 0; i < (await getDataObjectsArrayFromServer()).length - imageWrapper.length; i++) {
      imageGaleryContentContainer.append(imageGaleryContentHTMLElement.cloneNode(true));
    }
  }

  async function handleImageWrapperElements(getDataObjectsArrayFromServer) {
    // quantity of content images === links quantity, responsed from server
    if (imageWrapper.length === (await getDataObjectsArrayFromServer()).length) {
      handleImagesAndLinksResponsedFromServer();
      setPreparedURLToImageWrappers(getDataObjectsArrayFromServer);
    }

    // quantity of content images > links quantity, responsed from server
    if ((imageWrapper.length > (await getDataObjectsArrayFromServer()).length) && (await getDataObjectsArrayFromServer()).length) {
      removeExtraImageWrappers();
      setPreparedURLToImageWrappers(getDataObjectsArrayFromServer);
    }
    
    // quantity of content images < links quantity, responsed from server
    if (imageWrapper.length < (await getDataObjectsArrayFromServer()).length) {
      addRequiredImageWrappers();
      setPreparedURLToImageWrappers(getDataObjectsArrayFromServer);
    }
    
    // empty request from user
    if (!searchQuery) {
      handleEmptyUsersRequest();
    }
  }

  // realization of image galery logic

  // observe imageGaleryContentContainer childs add | remove
  // and handle the images
  let mutatuinObserver = new MutationObserver(changes => {
    handleImageWrapperElements(getDataObjectsArrayFromServer)
  })

  mutatuinObserver.observe(imageGaleryContentContainer, {
    childList: true,
    childListOldValue: true,
    subtree: true, 
  })

  // logic for page on load (the entire script loads on window 'load' event at higher level)
  handleImageWrapperElements(getDataObjectsArrayFromServer);

  // logic for search button
  searchButton.addEventListener('search', (event) => {
    event.preventDefault();
    handleImageWrapperElements(getDataObjectsArrayFromServer);
  })

  // logic for search button
  magnifyingGlassElement.addEventListener('click', (event) => {
    event.preventDefault();
    handleImageWrapperElements(getDataObjectsArrayFromServer);
  })
}

