'use strict'

class MarsRover {
    constructor(startingXCoordiante, startingYCoordiante, startingDirection, routeInstructions, plateauLimitations) {
        this.currentXCoordinate = startingXCoordiante;
        this.currentYCoordinate = startingYCoordiante;
        this.currentDirection = startingDirection;
        this.routeInstructions = routeInstructions;
        this.plateauLimitations = plateauLimitations;
    }

    getX() {
        return this.currentXCoordinate;
    }

    getY() {
        return this.currentYCoordinate;
    }

    turnLeft() {
        switch(this.currentDirection){
            case 'N': this.currentDirection = 'W'; break;
            case 'E': this.currentDirection = 'N'; break;
            case 'S': this.currentDirection = 'E'; break;
            case 'W': this.currentDirection = 'S'; break;
        }
    }

    turnRight() {
        switch(this.currentDirection){
            case 'N': this.currentDirection = 'E'; break;
            case 'E': this.currentDirection = 'S'; break;
            case 'S': this.currentDirection = 'W'; break;
            case 'W': this.currentDirection = 'N'; break;
        }
    }

    moveForward() {
        switch(this.currentDirection){
            case 'N': 
                (this.getY() < this.plateauLimitations[1]) && (++this.currentYCoordinate);
                break;
            case 'E': 
                (this.getX() < this.plateauLimitations[0]) && (++this.currentXCoordinate);
                break;
            case 'S': 
                (this.getY() > 0) && (--this.currentYCoordinate);
                break;
            case 'W': 
                (this.getX() > 0) && (--this.currentXCoordinate);
                break;
        }
    }

    explore() {
        for (let i = 0; i < this.routeInstructions.length; i++) {
            (this.routeInstructions[i] == 'L') && this.turnLeft();
            (this.routeInstructions[i] == 'R') && this.turnRight();
            (this.routeInstructions[i] == 'M') && this.moveForward();
        }
        return [this.getX(), this.getY(), this.currentDirection].join(' ');
    };
}

module.exports = {
    MarsRover
};