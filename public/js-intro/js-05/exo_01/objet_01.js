class Media { //Pour info, ceci est une classe en JavaScript
  name;
  type;

  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  printMe() {
    console.log("Hey ! I'm " + this.name + "!");
  }
}

let myMedia = new Media("Hope", "Drama");
myMedia.printMe();

/*
  {
    "name": "Hope",
    "type": "Drama",
    "message": "Hey ! I'm Hope!"
  }
*/