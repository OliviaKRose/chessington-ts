import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves = new Array(0)
        let currentSquare = board.findPiece(this)
        let currentRow = currentSquare.row
        let currentCol = currentSquare.col
        //white -> pawn moves up one
        if(this.player == 0 && !board.isSquareOccupied(Square.at(currentRow+1, currentCol)) && Square.at(currentRow+1, currentCol).isOnBoard()){
            availableMoves.push(Square.at(currentRow+1,currentCol))
            //if pawn unmoved -> allow move by 2
            //if unable to move forward 1 then won't be able to move forward by 2 -> length check
            if(currentRow == 1 && availableMoves.length == 1 && !board.isSquareOccupied(Square.at(currentRow+2, currentCol))){
                availableMoves.push(Square.at(currentRow+2, currentCol))
            }
        }
        //black -> pawn moves down one
        else if(this.player == 1 && !board.isSquareOccupied(Square.at(currentRow-1, currentCol)) && Square.at(currentRow-1, currentCol).isOnBoard()){
            availableMoves.push(Square.at(currentRow-1, currentCol))
            //if pawn unmoved -> allow move by 2
            if(currentRow == 6 && availableMoves.length == 1 && !board.isSquareOccupied(Square.at(currentRow-2, currentCol))){
                availableMoves.push(Square.at(currentRow-2,currentCol))
            }
        }

        return availableMoves;
    }
}
