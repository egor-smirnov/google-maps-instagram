import { POPUPS } from '../constants/ActionTypes';

export function openImagePopup(index) {
    return {
        type: POPUPS.OPEN_IMAGE_POPUP,
        index
    };
}

export function closeImagePopup(index) {
    return {
        type: POPUPS.CLOSE_IMAGE_POPUP,
        index
    };
}