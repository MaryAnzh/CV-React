import { action, makeObservable, observable } from "mobx";

export class Store {
  point = 0;

  constructor() {
    makeObservable(this, {
      point: observable,
      setPoint: action,
    });
  }

  //setters
  setPoint = (value: number) => {
    this.point += value;
  }

  //round logic
  // startNewGame
  // startRound
  // finishRound
  //finishGame

  //utils
  //checkResult
}