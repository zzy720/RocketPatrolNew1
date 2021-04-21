class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('bg_music', './assets/playbg.mp3');
    }

    create(){
        let menuConfig={
            fontFamily: "Gill Sans Extrabold",
            fontSize:'42px',
            //backgroundColor:'#b0e0e6',
            color: "#F5751D",
            align:'right',
            //padding:{
            //    top:5,
            //    bottom:5,
            //},
            fixedWidth:0
        }
        this.bgpic = this.add.image(game.config.width / 2, game.config.height / 2, "bgpic");
        this.add.text(game.config.width/2,100,'POCKET PATROL',menuConfig).setOrigin(0.5);
        //menuConfig.color = '#b0e0e6';
        menuConfig.fontSize='28px';
        //menuConfig.backgroundColor = '#b0e0e6';Use ←→ arrows to move &(F) to fire
        this.add.text(game.config.width/2,150,'Use ←→ arrows to move &(F) to fire',menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2,190,'Remaining time +1s when you catch a Pikachu,',menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2,230,'and worth 10 points',menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2,270,'Remaining time +5s when you catch an Eevee,',menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2,310,'and worth 20 points',menuConfig).setOrigin(0.5);
        menuConfig.fontSize='24px';
        menuConfig.color = '#b0e0e6';
        this.add.text(game.config.width/2,370,'Press ← for Novice, → for Expert, ↑ for P2',menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2,410,'Player2: Use A and D to move &(E) to fire',menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        
        //setbgmusic
        game.music = this.sound.add('bg_music');
        game.music.setLoop(true);
      }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 5000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');  
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 10000,   
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 10000,   
          }
          this.sound.play('sfx_select');
          this.scene.start('playtwoScene');    
        }
      }
}
