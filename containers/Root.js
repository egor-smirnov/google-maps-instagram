import React, { Component } from 'react';
import MapContainer from './MapContainer';

export default class Root extends Component {
    render() {
        return (
            <div>
                <h2>Photos in Moscow for the Instagram user</h2>
                <MapContainer />
            </div>
        );
    }
}