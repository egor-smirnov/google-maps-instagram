import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getImagesByLocation } from '../actions/images';

import Map from '../components/Map';

class MapContainer extends Component {
    
    componentDidMount() {
        const {dispatch, location} = this.props;

        dispatch(getImagesByLocation(location));
    }

    render() {
        const {location, images} = this.props;

        return (
            <div>
                <Map location={location} images={images}/>
            </div>
        );
    }
}

MapContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        location: state.location,
        images: state.images
    };
}

export default connect(mapStateToProps)(MapContainer);