import React from "react"

export function withFavoriteNumber(component) {
  const Component = component
  return function(props) {
    return (
      <Component favoriteNumber={12} {...props} />

      /**
      * here,
      * favoriteNumber={12} is a prop passed through the withFavoriteNumber component to the App component.
      * {...props} -> this enables the App component to get the props that sent to it from anywhere else, in case of its absence, we won't be able to access the props sent to the App component unless it is passed through the withFavoriteNumber component.
      */
    )
  }
}