import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Map from '../components/Map';

class MapContainer extends Component {

    render() {
        const {location} = this.props;

        return (
            <div>
                <Map location={location}/>
            </div>
        );
    }
}

MapContainer.propTypes = {};

function mapStateToProps(state) {
    return {
        location: state.location
    };
}

export default connect(mapStateToProps)(MapContainer);