class menunew extends Phaser.Scene{
    constructor(){
        super("newmenuScene");
    }
    preload() {
        this.load.image('menupicture','./assets/menupicture.png')
        this.load.image('bgpic','./assets/newbg.png')
        this.load.audio('weibai', './assets/weibai.mp3')
        this.load.audio('jump', './assets/jump.wav');
    }
    create(){
        let newmenuConfig={
            fontFamily: "Gill Sans Extrabold",
            fontSize:'28px',
            align:'right',
            padding:{
                top:5,
                bottom:5,
            },
            fixedWidth:0
        }
        newmenuConfig.backgroundColor = '#FFFFFF';
        newmenuConfig.color = '#FFFFFF';
        this.bgpic = this.add.image(game.config.width / 2, game.config.height / 2, "bgpic");
        this.image = this.add.image(game.config.width / 2, game.config.height *1.1/ 3, "menupicture");

        game.music = this.sound.add('weibai');
        game.music.setLoop(true);
        game.music.play();

        //this.bgpic.setInteractive();
        this.input.on('pointerdown', function (pointer) {

            console.log('down');
            game.music.pause();
            this.sound.play('jump');
            this.scene.start('menuScene');
            
        }, this);
        
    }
    update() {

        //if (Phaser.Input.Mouse.JustDown(keyLEFT)) {
        //    this.scene.start('menuScene');  
        //  }
    }
}