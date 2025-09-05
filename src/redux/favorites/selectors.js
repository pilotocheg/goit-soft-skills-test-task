import { createSelector } from "@reduxjs/toolkit";

export const selectFavorites = (state) => state.favorites.items;
export const selectIsFavorite = createSelector(
  [selectFavorites, (_, camperId) => camperId],
  (favorites, camperId) => favorites.includes(camperId)
);
