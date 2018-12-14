import * as React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends React.Component {

  state = {
    placeName: '',
  }

  placeChangedHandler = (val: string) => {
    this.setState({ placeName: val });
  }

  render() {
    const { placeName } = this.state;
    const { onPlaceAdded } = this.props;
    
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={placeName} 
          placeholder="An awesome place"
          onChangeText={this.placeChangedHandler}
          style={styles.placeInput}
        />
        <Button 
          title="Add" 
          onPress={() => onPlaceAdded(placeName)}
          style={styles.placeButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%'
  },
});

export default PlaceInput;
