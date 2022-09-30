import Piece from './piece';
import Player from '../player';
import Board from '../board';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let straightMoves = this.getStraightMoves(board,7)
        let diagonalMoves = this.getDiagonalMoves(board,7)
        return straightMoves.concat(diagonalMoves);
    }
}
