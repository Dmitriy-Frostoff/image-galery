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

async function fetchData(preparedURL, unsplashApiKeyString) {
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
// function imperative wrapper
// get data [{...}, {...}, {...}] from the server
export async function getDataObjectsArrayFromServer(searchParams, searchQuery) {
  // search button value on 'Enter' keydown

  const urlWithQuery = getUrlWithQuery(...searchParams.getUrlWithQueryParams, searchQuery);
  const urlWithlimitImagesPerResponse = getUrlWithlimitImagesPerResponse(urlWithQuery, ...searchParams.getUrlWithlimitImagesPerResponseParams);
  const urlWithsetImagesOrientationPerResponse = getUrlWithsetImagesOrientationPerResponse(urlWithlimitImagesPerResponse, ...searchParams.getUrlWithsetImagesOrientationPerResponseParams);
  // async function always return promise!!! To deal with => use .then after async function implementation
  // fetchData(urlWithsetImagesOrientationPerResponse).then(result => Object.assign(ObjectOfObjectsWithImages, result));
  const arrayOfObjects = await fetchData(urlWithsetImagesOrientationPerResponse, ...searchParams.fetchDataParams);
  return arrayOfObjects;
}