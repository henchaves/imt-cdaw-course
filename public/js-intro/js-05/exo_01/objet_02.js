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

let likers = { //Une autre manière de faire des objets en JS, moins lourde que les classes mais moins flexible
  likeScore: 87,
  users: [ //un tableau d'objets !!!!
    {
      "name": "user1"
    },
    {
      "name": "user2"
    },
  ]
};

let myMedia = new Media("Sword of the Stranger", "Anime");
myMedia.score = likers;
likers.associatedTo = myMedia;

/*


  {
    "name": "",
    "type": "Anime",
    "message": "Hey ! I'm Sword of the Stranger!"
    "score": {
      "likeScore": 87,
      "users": [
        {
          "name": "user1"
        },
        {
          "name": "user2"
        },
      ]
    }
  }

  Solution: Freeze l'object?
*/