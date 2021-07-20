import {lowerBound, orientations, movements} from '../constants.js'

export function ValidateCoOrd(coord, grid, coOrdName){
    let errors = []
    if(!orientations.includes(coord.direction)){
        errors.push(`Direction of ${coOrdName} must be one of ${orientations.toString()}`)
    }
    // allows for us to one day have multiple axis, like xyz, etc
    for(let axis in grid){
        if(coord[axis] > grid[axis] || coord[axis] < lowerBound[axis]){
            errors.push(`${axis} co-ordinate of ${coOrdName} out of bounds`)
        }
    }
    return errors;
}

export function ValidateMoveset(moves){
    let errors = []
    for(let move of moves){
        if(!movements.includes(move))
        errors.push(`List of moves contained invalid move: ${move}`)
    }
    return errors
}

export function ValidateNewPosition(pos, grid){
    // keeping this as a seperate function, for future case of additional checks needed (ie: if the new co-ord is untraversible, etc)
    let errors = ValidateCoOrd(pos, grid,"")
    if(errors.length > 0){
         return false;
    }
    return true;
}

export function ValidateStartInput(inp){
    let errors=[]
    if(inp.split(" ").length !=3){
        errors.push("startPoint must have 3 values separated by spaces in the format <X> <Y> <direction>")
    }
    //if we have the errors
    let x=inp.split(" ")[0]
    let y=inp.split(" ")[1]
    if(x=="" || isNaN(x))
        errors.push("X start point must be a number")
    
    if(y=="" || isNaN(y))
        errors.push("Y start point must be a number")
    return errors
}
// FLAG: write validate for grid ValidateGridInput
export function ValidateGridInput(inp){
    let errors=[]
    if(inp.split(" ").length !=2){
        errors.push("Plateau Size must have 2 values separated by spaces in the format <X> <Y>")
    }
    //if we have the errors
    let x=inp.split(" ")[0]
    let y=inp.split(" ")[1]
    if(x=="" || isNaN(x))
        errors.push("X value of plateau must be a number")
    
    if(y=="" || isNaN(y))
        errors.push("Y value of plateau must be a number")
    return errors
}

export default {
    ValidateCoOrd,
    ValidateNewPosition,
    ValidateMoveset,
    ValidateStartInput,
    ValidateGridInput
}