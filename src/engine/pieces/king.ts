import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let straightMoves = this.getStraightMoves(board,1)
        let diagonalMoves = this.getDiagonalMoves(board,1)
        return straightMoves.concat(diagonalMoves);

    }
}
