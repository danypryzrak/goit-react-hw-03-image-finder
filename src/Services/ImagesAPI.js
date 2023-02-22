import axios from "axios";

const KEY = '33168858-09b17812fdd05775e42993a92'

export function getImagesPixabay(page=1, query) {
    const response = axios(`https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    console.log(response)
    return response
}