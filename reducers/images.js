import { IMAGES, POPUPS } from '../constants/ActionTypes';

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

        case POPUPS.OPEN_IMAGE_POPUP:
            
            // array.slice() is used to prevent mutations to the original state
            
            const { index } = action;            
            const newState = state.slice(0);
            
            newState[index].isPopupOpened = true;
            
            return newState;

        default:
            return state;
    }
}