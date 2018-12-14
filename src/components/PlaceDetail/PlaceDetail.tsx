import * as React from 'react';
import { StyleSheet, Modal, View, Image, Text, Button } from 'react-native';

const placeDetail = (props) => (
  <Modal 
    onRequestClose={props.onModalClosed}
    visible={props.selectedPlace !== null} 
    animationType="slide"
  >
    <View style={styles.modalContainer}>
      {props.selectedPlace &&
        <React.Fragment>
          <Image 
            source={props.selectedPlace.image} 
            style={styles.placeImage} 
          />
          <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
        </React.Fragment>
      }
      <View>
        <Button 
          title="Delete" 
          color="red" 
          onPress={props.onPlaceDeleted} 
        />
        <Button 
          title="Close" 
          onPress={props.onModalClosed} 
        />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    height: 300,
    width: '100%',
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
});
   
export default placeDetail;
