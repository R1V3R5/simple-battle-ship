class Square {

  constructor (id, initial) {
    this.id = id;
    this.state = initial;
    this.isBoat = initial === 1;
  }

  guess () {
    if (this.isBoat){
      this.state = 2;
    } else {
      this.state = 3;
    }
  }


}

export { Square };