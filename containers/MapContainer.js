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
        const {location} = this.props;

        return (
            <div>
                <Map location={location}/>
            </div>
        );
    }
}

MapContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        location: state.location
    };
}

export default connect(mapStateToProps)(MapContainer);