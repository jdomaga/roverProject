export const orientations = ["N","E","S","W"]
export const movements = ["L","R","M"]
export const rotations = ["L","R"]
// useful for if one day we add an axis such as height, where we can be below sea level
export const lowerBound = {
    X: 0,
    Y: 0,
}
export default {
    orientations,
    movements,
    rotations,
    lowerBound
}