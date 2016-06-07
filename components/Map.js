import React, { PropTypes } from 'react';
import { default as ScriptjsLoader } from 'react-google-maps/lib/async/ScriptjsLoader';
import { GoogleMap, Marker } from 'react-google-maps';

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

function returnContainerElement() {
    return (
        <div style={{ width: '500px', height: '400px' }}/>
    );
}

function returnGoogleMapElement({location}) {
    return (
        <GoogleMap
            defaultZoom={14}
            defaultCenter={{lat: location.latitude, lng: location.longitude}}
        >
            <Marker
                position={{lat: location.latitude, lng: location.longitude}}
                title={'test title'}
            />
        </GoogleMap>
    );
}

Map.propTypes = {
    location: PropTypes.object.isRequired
};

export default Map;