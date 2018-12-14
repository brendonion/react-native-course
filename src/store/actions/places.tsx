import * as actionTypes from './actionTypes';

export const addPlace = (placeName: string) => ({
  type: actionTypes.ADD_PLACE,
  placeName,
});

export const deletePlace = () => ({
  type: actionTypes.DELETE_PLACE,
});

export const selectPlace = (key: number) => ({
  type: actionTypes.SELECT_PLACE,
  placeKey: key,
});

export const deselectPlace = () => ({
  type: actionTypes.DESELECT_PLACE,
});
