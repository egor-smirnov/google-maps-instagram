import React, { PropTypes } from 'react';

import { likeImage } from '../actions/images';

const LikeBlock = ({image, dispatch}) => (
    <div>
        <a onClick={() => dispatch(likeImage(image.imageId))}>Like</a>
    </div>
);

LikeBlock.propTypes = {
    dispatch: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired
};

export default LikeBlock;