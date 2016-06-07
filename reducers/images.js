import { IMAGES } from '../constants/ActionTypes';

export function images(state = [], action) {
    switch (action.type) {

        case IMAGES.SUCCESS_BY_LOCATION:
            
            return action.data.map((media) => {
                return {
                    src: media.images.low_resolution.url,
                    caption: media.location.name,
                    latitude: media.location.latitude,
                    longitude: media.location.longitude
                };
            });

        default:
            return state;
    }
}