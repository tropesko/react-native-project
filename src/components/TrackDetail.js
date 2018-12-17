import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
//import Button from './Button';

const TrackDetail = ({ track }) => {
    const { track_name, name, avatar, track_img, car_img, time } = track;
    const { 
        thumbnailStyle, 
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle,
        carImageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: avatar}} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{track_name}</Text>
                    <Text>{name} - {time}</Text>
                    
                </View>
            </CardSection>
            
            <CardSection>
                <Image 
                    style={imageStyle}
                    source={{ uri: track_img}}
                />
            </CardSection>

            <CardSection>
                <Image 
                    style={carImageStyle}
                    source={{ uri: car_img}}
                />
            </CardSection>

        </Card>     
    );
};

const styles = {
    headerTextStyle: {
        fontSize: 18
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        flex: 2
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    carImageStyle: {
        height: 150,
        flex: 2,
        width: null
    }
};

export default TrackDetail;
