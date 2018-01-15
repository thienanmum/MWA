class Musician {
    constructor(name) {
        this.name = name;
    }
    play(piece) {
        console.log(`${this.name} is now playing ${piece}`);
    }
}

var violinist = new Musician("Violinist");
var pianist = new Musician("Pianist");
violinist.play("Hello");
pianist.play("Right Here Waiting");
