# mars-rover

## Approach
first, i like to break down requirements into a simple overview of whats needed:

Summary: a program which takes in the size of a grid, then uses a start location along with a
list of moves to determine the endpoint of the path. the system should handle erroneous data in a graceful way.
command line can be used as the interface.

next, if this was a business scenario i would list assumptions
1) if the start point is off the grid, the rover doesnt land, and we show an error


finally i would brainstorm some other options we could take, or other extensions that could be useful in the scenario:

other options:
1) given a topography of the grid, we could find the highest point of the grid and land the rover there, or navigate there
since we want a picture of the surface. ( ie: get a birds eye view)

extensions:
1) instead of returning the endpoint, we could use the start and end as inputs and determine the shortest path
2) we may have impassable terrain, so a different way to route to an endpoint would be useful
3) if this program is useful for space travel, it could also be used for underwater submersibles ( and this would also provide a good test case for the rover in the real world)
4) if we are trying to map out the area, we could input the range of the camera, and return a grid of what areas will be mapped given the provided directions
5) we could also determine the shortest path which maps the entire grid, including impassable terrain( a modified DFS with weights and range)

misc:
- validate negative points, off grid points, and letters that arent part of our system
- what if there are more directions later? like going up, etc?
- validate directions and input path to make sure its part of enum
- validate that input is right size (ie: all parts given)

Mars Rover Code Challenge
=========================

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be [0, 0, N], which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot.

'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1), and that the square directly East from (x, y) is (x+1, y).


Inputs
------

Input 1: The first line of input is the size of the plateau (the upper-right coordinates). The lower-left coordinates are assumed to be 0,0.

```
Plateau Input: 8 4
```


Input 2: Landing co-ordinates for the Rover. The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's orientation. 

```
Landing input: 1 2 N
```


Input 3: Navigation instructions (i.e a string containing 'L', 'R', or 'M'). 

```
Instructions Input: LMLMLMLMM
```


Test Example
------------

Assuming 2 rovers have been created called "Rover1" and "Rover2".

Input:

```
Plateau: 5 5
Rover1 Landing: 1 2 N
Rover1 Instructions: LMLMLMLMM
Rover2 Landing: 3 3 E
Rover2 Instructions: MMRMMRMRRM
```

Output:

```
Rover1: 1 3 N
Rover2: 5 1 E
```


Challenge
---------

Develop a command line app that can take the various inputs from the command line and generate the desired outputs.


Expectations
------------

- app should be working and not crash
- bad input should be handled (doesn't have to be fancy)
- should be modular, readable, and configurable (not just one big function)
- should contain unit tests for critical functions
- should be coded in javascript (nodejs or in a browser)


