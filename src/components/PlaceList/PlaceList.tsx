import * as React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Image } from 'react-native';

const placeList = (props) => (
  <FlatList 
    data={props.places}
    renderItem={(info) => (
      <TouchableOpacity onPress={() => props.onPlaceSelected(info.item.key)}>
        <View style={styles.listItem}>
          <Image 
            source={info.item.image} 
            style={styles.placeImage}
          />
          <Text>{info.item.name}</Text>
        </View>
      </TouchableOpacity>
    )}
    style={styles.listContainer}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30,
  }
});

export default placeList;
