import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves = new Array(0)
        const currentSquare = board.findPiece(this)
        const currentRow = currentSquare.row
        const currentCol = currentSquare.col

        //knight can move in an L, jumping over a piece
        let i = 0
        let modifySquare = [2,-2,1,-1]
        for(i; i <= 3; i++){
            if(Square.at(currentRow + modifySquare[i], currentCol + modifySquare[3-i]).isOnBoard()) {
                availableMoves.push(Square.at(currentRow + modifySquare[i], currentCol + modifySquare[3-i]))

            }
            if(Square.at(currentRow + modifySquare[i], currentCol - modifySquare[3-i]).isOnBoard()) {
                availableMoves.push(Square.at(currentRow + modifySquare[i], currentCol - modifySquare[3-i]))

            }
        }

        return availableMoves;
    }
}
