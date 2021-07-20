import {orientations,rotations} from '../constants.js';
import {ValidateNewPosition} from './validationService'

export function GetEndPoint(start,grid,moves){
    let numMoves = 0;
    let current = start;
    for(let move of moves){
        current = ExecuteMove(current,move);
        if(!ValidateNewPosition(current, grid)){
            // returning an object in case we want to include more in the errormessage for later, debugging etc.
            return {
                error: 'the Rover has fallen off the plateau!',
                lastLocation: current,
                numMoves: numMoves + 1,
                // for now, lastMove will always be M, but in the future we might have diff ways to move (ie: fwd, reverse, up, down)
                lastMove: moves[numMoves]
            }
        }
        //mark move as successfully completed
        numMoves +=1;
    }
    return current;
}
export function ExecuteMove(start, move){
    if(rotations.includes(move)){
        return RotateRover(start, move)
    }
    else if (move=="M"){
        return MoveRover(start)
    }
}
export function RotateRover(start, move){
    let currentOrientation = orientations.indexOf(start.direction)
    switch(move){
        case "R":  //turning right would get you to the next position of the ortientation ie: N => E
            currentOrientation +=1 
            currentOrientation = currentOrientation == orientations.length ? 0 : currentOrientation // we need to reset to first index if it would loop to start
            break;
        case "L":  //turning right would get you to the next position of the ortientation ie: N => E
            currentOrientation -=1 
            currentOrientation = currentOrientation < 0 ? orientations.length -1 : currentOrientation  // if it would be negative, loop to end
            break;
    }
    start.direction = orientations[currentOrientation]; 
    return start;
}
export function MoveRover(start){
    switch(start.direction){
        case "N" : 
            start.Y +=1;
            break;
        case "E" : 
            start.X +=1;
            break;
        case "S" : 
            start.Y -=1;
            break;
        case "W" : 
            start.X -=1;
            break;
    }
    return start;
}

export default {
    GetEndPoint,
    ExecuteMove,
    RotateRover,
    MoveRover
}