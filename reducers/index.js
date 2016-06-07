import { combineReducers } from 'redux';

import { location } from './location';
import { images } from './images';

const rootReducer = combineReducers({
    location,
    images
});

export default rootReducer;