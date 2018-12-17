import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import TrackList from './src/components/TrackList';


const App = () => (
    <View>
        <Header headerText={"Flying Laps"}/>
        <TrackList />
    </View>
);


AppRegistry.registerComponent('Project', () => App);
