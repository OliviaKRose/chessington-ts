import Board from "./board";

export default class Square {
    public row: number;
    public col: number;

    public constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }

    public static at(row: number, col: number) {
        return new Square(row, col);
    }

    public equals(otherSquare: Square) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    public toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }

    public isOnBoard() {
        let onBoard = false
        if(this.col >= 0 && this.col <= 7 && this.row >= 0 && this.row <= 7) {
            onBoard = true
        }

        return onBoard;
    }
}
