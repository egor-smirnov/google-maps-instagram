import { IMAGES } from '../constants/ActionTypes';

export function images(state = [], action) {
    switch (action.type) {

        case IMAGES.SUCCESS_BY_LOCATION:
            
            return action.data.map((media, index) => {
                return {
                    index,
                    src: media.images.thumbnail.url,
                    caption: media.location.name,
                    latitude: media.location.latitude,
                    longitude: media.location.longitude,
                    isPopupOpened: false
                };
            });

        default:
            return state;
    }
}