import {
    ValidateNewPosition,
    ValidateGridInput
} from './src/services/validationService.js'

const grid = {X: 5,Y:5}

test('position 1,2,N on a 5x5 grid is valid', () => {
    expect(ValidateNewPosition({X:1,Y:2,direction:"N"},grid)).toBe(true);
  }
);

test('negative X start -1,2,N on a 5x5 grid is invalid', () => {
    expect(ValidateNewPosition({X:-1,Y:2,direction:"N"},grid)).toBe(false);
  }
);

test('out of bounds X start 7,2,N on a 5x5 grid is invalid', () => {
    expect(ValidateNewPosition({X:7,Y:2,direction:"N"},grid)).toBe(false);
  }
);

test('negative Y start 1,-1,N on a 5x5 grid is invalid', () => {
    expect(ValidateNewPosition({X:1,Y:-1,direction:"N"},grid)).toBe(false);
  }
);

test('out of bounds Y start 1,7,N on a 5x5 grid is invalid', () => {
    expect(ValidateNewPosition({X:1,Y:7,direction:"N"},grid)).toBe(false);
  }
);

test('incorrect direction 1,7,F on a 5x5 grid is invalid', () => {
    expect(ValidateNewPosition({X:1,Y:7,direction:"N"},grid)).toBe(false);
  }
);

test('incorrect input for plateau: 34 G gives errors', () => {
    expect(ValidateGridInput("34 G").length).toBeTruthy();
  }
);

test('correct input for plateau: 34 4 gives no errors', () => {
    expect(ValidateGridInput("34 4").length).toBeFalsy();
  }
);


// additional tests could be done for both input parsing and validation, 

