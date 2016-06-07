import fetchJsonp from 'fetch-jsonp';

import { INSTAGRAM_ACCESS_TOKEN } from '../constants/config';
import { IMAGES } from '../constants/ActionTypes';

export function getImagesByLocation({latitude, longitude}) {
    
    return dispatch => {
        dispatch(requestImagesByLocation());
        return fetchJsonp(`https://api.instagram.com/v1/media/search?lat=${latitude}&lng=${longitude}&distance=5000&access_token=${INSTAGRAM_ACCESS_TOKEN}`)
            .then((response) => response.json())
            .then((json) => dispatch(succeededImagesByLocation(json)))
            .catch((error) => console.log(error));
    };
}

function requestImagesByLocation() {
    return {
        type: IMAGES.REQUEST_BY_LOCATION
    };
}

function succeededImagesByLocation(json) {
    return {
        type: IMAGES.SUCCESS_BY_LOCATION,
        data: json.data
    };
}