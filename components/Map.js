import React, { PropTypes } from 'react';
import { default as ScriptjsLoader } from 'react-google-maps/lib/async/ScriptjsLoader';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';

import ImagePopup from './ImagePopup';
import { openImagePopup, closeImagePopup } from '../actions/popups';

const version = Math.ceil(Math.random() * 22);

const Map = (props) => (
    <div>
        <ScriptjsLoader
            hostname={'maps.googleapis.com'}
            pathname={'/maps/api/js'}
            query={{ v: `3.${ version }`, libraries: `geometry,drawing,places` }}
            loadingElement={returnLoadingElement()}
            containerElement={returnContainerElement()}
            googleMapElement={returnGoogleMapElement(props)}
        />
    </div>
);

function returnLoadingElement() {
    return (
        <div>
            loading...
        </div>
    );
}

function renderInfoWindow(dispatch, image) {
    return (
        <InfoWindow key={`info_window_${image.index}`} onCloseclick={() => handleCloseClick(dispatch, image.index)}>
            <div>
                <strong>{image.caption}</strong>
                <br />
                <img src={image.src}/>
            </div>
        </InfoWindow>
    );
}

function returnContainerElement() {
    return (
        <div style={{ width: '800px', height: '600px' }}/>
    );
}

function returnGoogleMapElement({location, images, dispatch}) {
    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{lat: location.latitude, lng: location.longitude}}
        >
            {images.map((image, index) => {
                return (
                    <Marker
                        key={index}
                        position={{lat: image.latitude, lng: image.longitude}}
                        onClick={() => handleMarkerClick(dispatch, index)}
                    >
                        {image.isPopupOpened ? renderInfoWindow(dispatch, image) : null}                        
                    </Marker>
                );
            })}
        </GoogleMap>
    );
}

function handleMarkerClick(dispatch, index) {
    dispatch(openImagePopup(index));
}

function handleCloseClick(dispatch, index) {
    dispatch(closeImagePopup(index));
}

Map.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    images: PropTypes.array
};

export default Map;