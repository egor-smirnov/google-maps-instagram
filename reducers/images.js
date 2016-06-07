import { IMAGES, POPUPS } from '../constants/ActionTypes';

export function images(state = [], action) {

    // array.slice() is used to prevent mutations to the original state
    const newState = state.slice(0);

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

        case POPUPS.OPEN_IMAGE_POPUP:
            
            newState[action.index].isPopupOpened = true;            
            return newState;

        case POPUPS.CLOSE_IMAGE_POPUP:
            
            newState[action.index].isPopupOpened = false;
            return newState;

        default:
            return state;
    }
}