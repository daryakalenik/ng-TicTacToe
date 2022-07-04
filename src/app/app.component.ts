import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  turn: string = "X";
  isGameOver = false;
  winner = "";
  board = ["", "", "", "", "", "", "", "", ""];

  computersTurn() {
    const number = this.getRandomNumber();
    if (this.board[number] === "") {
      this.board[number] = "O";
      this.checkWinner();
      this.turn = "X";
    } else this.computersTurn();
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 9);
  }

  makeAMove(e: HTMLElement) {
    if (this.isGameOver) {
      return;
    } else {
      if (this.turn === "X" && this.board[e.id] === "") {
        this.board[e.id] = "X";
        this.turn = "O";
        this.checkWinner();
        if (this.isGameOver) {
          return;
        } else {
          setTimeout(() => {
            this.computersTurn();
          }, 1000);
        }
      }
    }
  }

  checkWinner() {
    if (
      this.board[0] !== "" &&
      this.board[0] === this.board[1] &&
      this.board[0] === this.board[2]
    ) {
      this.endGame(this.board[0]);
    } else if (
      this.board[3] !== "" &&
      this.board[3] === this.board[4] &&
      this.board[3] === this.board[5]
    ) {
      this.endGame(this.board[3]);
    } else if (
      this.board[6] !== "" &&
      this.board[6] === this.board[7] &&
      this.board[6] === this.board[8]
    ) {
      this.endGame(this.board[6]);
    } else if (
      this.board[0] !== "" &&
      this.board[0] === this.board[3] &&
      this.board[0] === this.board[6]
    ) {
      this.endGame(this.board[0]);
    } else if (
      this.board[1] !== "" &&
      this.board[1] === this.board[4] &&
      this.board[1] === this.board[7]
    ) {
      this.endGame(this.board[1]);
    } else if (
      this.board[2] !== "" &&
      this.board[2] === this.board[5] &&
      this.board[2] === this.board[8]
    ) {
      this.endGame(this.board[2]);
    } else if (
      this.board[0] !== "" &&
      this.board[0] === this.board[4] &&
      this.board[0] === this.board[8]
    ) {
      this.endGame(this.board[0]);
    } else if (
      this.board[2] !== "" &&
      this.board[2] === this.board[4] &&
      this.board[2] === this.board[6]
    ) {
      this.endGame(this.board[2]);
    } else if (
      this.board.every((item) => {
        return item !== "";
      })
    ) {
      this.endGame("DRAW");
    }
  }

  endGame(winner) {
    this.isGameOver = true;
    if (winner === "X") {
      this.winner = "X";
    } else if (winner === "O") {
      this.winner = "O";
    } else if (winner === "DRAW") {
      this.winner = "DRAW";
    }
    console.log(this.board);
  }

  clearBoard() {
    this.isGameOver = false;
    this.winner = "";
    this.turn = "X";
    this.board.forEach((item, index, array) => {
      array[index] = "";
    });
  }
}
