function removeMeasureUnitFromSize(size) {
  if (typeof size === 'string') {
    if (size.includes('px')) {
      return size.replace(/(?<=\d+\.?\d+)px/gi, '');
    }
  }
}

function setURLWithImageWidthHeight(rawURL, width = 10, height = 10, removeMeasureUnitFromSize) {
  const imageURLWidthHeight = new URL('', rawURL);
  imageURLWidthHeight.searchParams.append('w', `${removeMeasureUnitFromSize(width)}`);
  imageURLWidthHeight.searchParams.append('h', `${removeMeasureUnitFromSize(height)}`);
  return imageURLWidthHeight.toString();
}

async function setPreparedURLToImageWrappers(getDataObjectsArrayFromServer, searchParams, imageContent, imageContentWidth, imageContentHeight, setURLWithImageWidthHeight, removeMeasureUnitFromSize, searchQuery) {
  (await getDataObjectsArrayFromServer(searchParams, searchQuery)).forEach((dataObject, index) => {
    // accident error occur if imageContent[index] didn't load yet!
    // to prevent this add this condition
    if (imageContent[index]) {
      imageContent[index].style.backgroundImage = `url(${setURLWithImageWidthHeight(dataObject.urls.raw, imageContentWidth, imageContentHeight, removeMeasureUnitFromSize)})`;
    }
  })
}

function handleImagesAndLinksResponsedFromServer(imageGaleryContentContainer, imageContent) {
  if (!imageGaleryContentContainer.classList.contains('grid-auto-fill')) {
    imageGaleryContentContainer.classList.add('grid-auto-fill');
    imageGaleryContentContainer.classList.remove('layout-multiple-columns');
    imageGaleryContentContainer.classList.remove('_empty-request__container');
  }

  imageContent[0].style.width = '';
  imageContent[0].style.height = '';
}

async function removeExtraImageWrappers(imageWrapper, getDataObjectsArrayFromServer, searchParams, searchQuery) {
  // remove all extra imageWrapper
  for (let i = 0; i < (imageWrapper.length - (await getDataObjectsArrayFromServer(searchParams, searchQuery)).length); i++) {
    imageWrapper[i].remove();
  }
}

function handleEmptyUsersRequest(imageWrapper, imageGaleryContentContainer, imageContent, imageContentWidth, imageContentHeight, setURLWithImageWidthHeight, removeMeasureUnitFromSize) {
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
  imageContent[0].style.backgroundImage = `url(${setURLWithImageWidthHeight('https://images.unsplash.com/photo-1555861496-0666c8981751?ixid=M3w5ODA5OXwwfDF8c2VhcmNofDR8fDQwNHxlbnwwfDB8fHwxNjk2MzQ0ODQ5fDA&ixlib=rb-4.0.3', imageContentWidth, imageContentHeight, removeMeasureUnitFromSize)})`;
}

async function addRequiredImageWrappers(getDataObjectsArrayFromServer, searchParams, imageWrapper, imageGaleryContentContainer, imageGaleryContentHTMLElement, searchQuery) {
  for (let i = 0; i < (await getDataObjectsArrayFromServer(searchParams, searchQuery)).length - imageWrapper.length; i++) {
    imageGaleryContentContainer.append(imageGaleryContentHTMLElement.cloneNode(true));
  }
}

// remember!!! The order of arguments exteremely important while function initialization!!!
// function imperative wrapper
export async function handleImageWrapperElements(imageWrapper, getDataObjectsArrayFromServer, searchParams, imageWrapperElementsParams, searchQuery) {
  // quantity of content images === links quantity, responsed from server
  if (imageWrapper.length === (await getDataObjectsArrayFromServer(searchParams, searchQuery)).length) {
    handleImagesAndLinksResponsedFromServer(...imageWrapperElementsParams.handleImagesAndLinksResponsedFromServerParams);
    setPreparedURLToImageWrappers(...imageWrapperElementsParams.setPreparedURLToImageWrappersParams, setURLWithImageWidthHeight, removeMeasureUnitFromSize, searchQuery);
  }

  // quantity of content images > links quantity, responsed from server
  if ((imageWrapper.length > (await getDataObjectsArrayFromServer(searchParams, searchQuery)).length) && (await getDataObjectsArrayFromServer(searchParams, searchQuery)).length) {
    removeExtraImageWrappers(...imageWrapperElementsParams.removeExtraImageWrappersParams, searchQuery);
    setPreparedURLToImageWrappers(...imageWrapperElementsParams.setPreparedURLToImageWrappersParams, setURLWithImageWidthHeight, removeMeasureUnitFromSize, searchQuery)
  }
  
  // quantity of content images < links quantity, responsed from server
  if (imageWrapper.length < (await getDataObjectsArrayFromServer(searchParams, searchQuery)).length) {
    addRequiredImageWrappers(...imageWrapperElementsParams.addRequiredImageWrappersParams, searchQuery);
    setPreparedURLToImageWrappers(...imageWrapperElementsParams.setPreparedURLToImageWrappersParams, setURLWithImageWidthHeight, removeMeasureUnitFromSize, searchQuery);
  }

  // empty request from user
  if (!searchQuery) {
    handleEmptyUsersRequest(...imageWrapperElementsParams.handleEmptyUsersRequestParams, setURLWithImageWidthHeight, removeMeasureUnitFromSize);
  }
}