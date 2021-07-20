import {
    GetEndPoint,
} from './src/services/navigationService'

const grid = {X: 5,Y:5}

test('moves MMMM for location start 1 2 N in a 3x3 grid should populate error', () => {
    expect(GetEndPoint({X:1,Y:2,direction:"N"},grid,"MMMMMMM").error).toBeTruthy();
  }
);

test('moves LMLMLMLM for location start 1 2 N in a 3x3 grid should give an end co-ordinate of 1 2', () => {
    let end =GetEndPoint({X:1,Y:2,direction:"N"},grid,"LMLMLMLM") 
    expect(end.X).toBe(1);
    expect(end.Y).toBe(2);
  }
);