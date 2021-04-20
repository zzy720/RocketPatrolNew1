let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [menunew,Menu, play]
}
let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize /3;
let starSpeed = 4;
let backSpeed = 3;

//keyborad binding
let keyF, keyR, keyLEFT, keyRIGHT, pointer;