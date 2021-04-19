class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('bg_music', './assets/playbg.mp3')
    }

    create(){
        let menuConfig={
            fontFamily: "Gill Sans Extrabold",
            fontSize:'28px',
            backgroundColor:'#b0e0e6',
            color: "#C0C0C0",
            align:'right',
            padding:{
                top:5,
                bottom:5,
            },
            fixedWidth:0
        }
        this.add.text(game.config.width/2,game.config.height/2-borderUISize-borderPadding,'POCKET PATROL',menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2,game.config.height/2,'Use ←→ arrows to move &(F) to fire',menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#b0e0e6';
        menuConfig.color = '#C0C0C0';
        this.add.text(game.config.width/2,game.config.height/2 + borderUISize+borderPadding,'Press ← for Novice or → for Expert',menuConfig).setOrigin(0.5)
    
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
        //setbgmusic
        game.music = this.sound.add('bg_music');
        game.music.setLoop(true);
      }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 2,
            gameTimer: 10000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');  
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 5000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
      }
}
