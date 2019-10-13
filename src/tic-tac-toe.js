class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = "x";
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null) {
            if (this.currentPlayer == "x") {
                this.matrix[rowIndex][columnIndex] = "x";
                this.currentPlayer = "o";
            } else {
                this.matrix[rowIndex][columnIndex] = "o";
                this.currentPlayer = "x";
            }
        }
    }

    isFinished() {
        if (this.getWinner() != null||this.isDraw()) {
            return true;
        } else return false;
    }

    getWinner() {

        let result = false;
        let result2 = false;
        let sym = "";
        let sym2 = "";

        for (let i = 0; i < this.matrix.length; i++) {
            result = true;
            result2 = true;
            sym = "";
            sym2 = "";
            for (let j = 0; j < this.matrix.length; j++) {
                if (sym == "") {
                    sym = this.matrix[i][j];
                }
                if (sym2 == "") {
                    sym2 = this.matrix[j][i];
                }

                if (sym != this.matrix[i][j]) {
                    result = false;
                }
                if (sym2 != this.matrix[j][i]) {
                    result2 = false;
                }
            }
            if (result) {
                return sym;
            }
            if (result2) {
                return sym2;
            }
        }

        result = true;
        result2 = true;
        sym = "";
        sym2 = "";
        for (let i = 0; i < this.matrix.length; i++) {
            if (sym == "") {
                sym = this.matrix[i][i];
            }
            if (sym2 == "") {
                sym2 = this.matrix[i][i];
            }

            if (sym != this.matrix[i][i]) {
                result = false;
            }
            if (sym2 != this.matrix[i][i]) {
                result2 = false;
            }
        }
        if (result) {
            return sym;
        }
        if (result2) {
            return sym2;
        }


        result = true;
        result2 = true;
        sym = "";
        sym2 = "";
        for (let i = 0; i < this.matrix.length; i++) {

            if (sym == "") {
                sym = this.matrix[i][this.matrix.length - i - 1];
            }
            if (sym2 == "") {
                sym2 = this.matrix[i][this.matrix.length - i - 1];
            }

            if (sym != this.matrix[i][this.matrix.length - i - 1]) {
                result = false;
            }
            if (sym2 != this.matrix[i][this.matrix.length - i - 1]) {
                result2 = false;
            }
        }
        if (result) {
            return sym;
        }
        if (result2) {
            return sym2;
        }

        return null;
    }

    noMoreTurns() {
        for (let i=0; i < this.matrix.length; i++) {
            for (let j=0; j<this.matrix.length; j++) {
                if (this.matrix[i][j] == null) {
                    return false;
                }
            }
        }

        return true;
    }

    isDraw() {
        if (this.noMoreTurns()&&this.getWinner()==null) {
            return true;
        } else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
