import { action, makeObservable, observable } from "mobx";

class Store {
  base: string = "base";

  constructor() {
    makeObservable(this, {
      base: observable,
      setFun: action,
    });
  }

  //setters
  setFun = (value: string) => {
    this.base = value;
  };
}

export const store = new Store();
