import React, { PropTypes } from 'react';
import { InfoWindow } from 'react-google-maps';

const ImagePopup = ({image}) => (
    <InfoWindow key={`info_window_${image.index}`}>
        <div>
            <strong>{image.caption}</strong>
            <br />
            <em><img src={image.src}/></em>
        </div>
    </InfoWindow>
);

ImagePopup.propTypes = {
    image: PropTypes.object.isRequired
};

export default ImagePopup;