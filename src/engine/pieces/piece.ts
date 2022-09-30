import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public getStraightMoves(board: Board, max: number) {

        let north = this.moveForward(board,1,0,max)
        let south = this.moveForward(board, -1, 0,max)
        let east =  this.moveForward(board,0,1,max)
        let west = this.moveForward(board,0,-1,max)
        return north.concat(south,east,west);
    }

    public getDiagonalMoves(board: Board, max: number){

        let northEast = this.moveForward(board,1,1,max)
        let southEast = this.moveForward(board, -1,1,max)
        let southWest = this.moveForward(board,-1,-1,max)
        let northWest = this.moveForward(board, 1,-1,max)
        return northEast.concat(southEast,southWest,northWest)

    }

    //rowMove and colMove: either +1, 0 , -1 depending on direction needed
    //max says how far to go in that direction
    public moveForward(board: Board, rowMove: number, colMove: number, max: number){
        let availableMoves = new Array(0)
        let currentSquare = board.findPiece(this)
        const currentRow = currentSquare.row
        const currentCol = currentSquare.col
        for(let i = 1; i<= max; i++) {
            if (Square.at(currentRow + rowMove*i, currentCol + colMove*i).isOnBoard()) {
                let stateOfSquare = board.getPiece(Square.at(currentRow + rowMove*i, currentCol + colMove*i))
                if(stateOfSquare === undefined){
                    availableMoves.push(Square.at(currentRow + rowMove*i, currentCol + colMove*i))
                }
                else if(stateOfSquare.player !== this.player) {
                    availableMoves.push(Square.at(currentRow + rowMove*i, currentCol + colMove*i))
                    break
                }
                else {
                    break
                }
            } else {
                break
            }
        }
        return availableMoves;
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

}
