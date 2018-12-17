import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import TrackDetail from './TrackDetail'


class TrackList extends Component {
    state = { tracks: [] };

    componentWillMount() {
        axios.get('https://fast-laps.herokuapp.com')
            .then(response => this.setState({ tracks: response.data }));
    }

    renderTracks() {
        return this.state.tracks.map(track =>
             <TrackDetail key={track.track} track={track} />);
    }
    
    render () {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderTracks()}
            </ScrollView>
        );
    }
}

export default TrackList;
