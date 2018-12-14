import * as React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import PlaceList from './components/PlaceList/PlaceList';
import PlaceInput from './components/PlaceInput/PlaceInput';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';

export default class App extends React.Component<{}> {

  state = {
    places: [],
    selectedPlace: null,
  }

  placeAddedHandler = (placeName: string) => {
    this.setState((prevState) => ({
      places: [
        { 
          key: Math.random(), 
          name: placeName, 
          image: {
            uri: 'https://lumiere-a.akamaihd.net/v1/images/image_da9047cc.jpeg?region=0%2C45%2C1280%2C720&width=960',
          } 
        }, 
        ...prevState.places
      ],
    }));
  }

  placeSelectedHandler = (key: number) => {
    this.setState((prevState) => ({
      selectedPlace: prevState.places.find((place: object) => place.key === key),
    }));
  }

  placeDeletedHandler = () => {
    this.setState((prevState) => ({
      places: prevState.places.filter((place: object) => place.key !== prevState.selectedPlace.key),
      selectedPlace: null,
    }));
  }

  modalClosedHandler = () => {
    this.setState({ selectedPlace: null });
  }

  render() {
    const { places, selectedPlace } = this.state;

    return (
      <View style={styles.container}>
        <PlaceInput 
          onPlaceAdded={this.placeAddedHandler} 
        />
        <PlaceList 
          places={places} 
          onPlaceSelected={this.placeSelectedHandler} 
        />
        <PlaceDetail 
          selectedPlace={selectedPlace}
          onPlaceDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#fff',
  },
});
