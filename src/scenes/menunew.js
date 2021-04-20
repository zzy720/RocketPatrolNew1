class menunew extends Phaser.Scene{
    constructor(){
        super("newmenuScene");
    }
    preload() {
        this.load.image('menupicture','./assets/menupicture.png')
        this.load.image('bgpic','./assets/newbg.png')
        this.load.audio('weibai', './assets/weibai.mp3')
        this.load.audio('jump', './assets/jump.wav');
        this.load.spritesheet('pikachu','./assets/spaceship.png',{
            frameWidth: 96,
            frameHeight: 96,
            startFrame: 0,
            endFrame:4
        });
    }
    create(){
        let newmenuConfig={
            fontFamily: "Gill Sans Extrabold",
            fontSize:'28px',
            align:'right',
            //padding:{
            //    top:5,
            //    bottom:5,
            //},
            fixedWidth:0
        }
        //newmenuConfig.backgroundColor = '#FFFFFF';
        newmenuConfig.color = '#FFFFFF';
        this.bgpic = this.add.image(game.config.width / 2, game.config.height / 2, "bgpic");
        this.image = this.add.image(game.config.width / 2, game.config.height *1.1/ 3, "menupicture");
        this.add.text(game.config.width/2,game.config.height*6/7-borderUISize,
            'Press To Start',newmenuConfig).setOrigin(0.5);
        game.music = this.sound.add('weibai');
        game.music.setLoop(true);
        game.music.play();

        this.anims.create({
            key:'pikachu',
            frames: this.anims.generateFrameNumbers('pikachu',{
                start: 0,
                end:4,
            }),
            frameRate: 8,
            repeat:-1
        });
        
        this.add.sprite(game.config.width/2 -185,game.config.height*6/7-borderUISize -56).play('pikachu').setOrigin(0, 0);
        this.add.sprite(game.config.width/2 +90,game.config.height*6/7-borderUISize -56).play('pikachu').setOrigin(0, 0);

        //this.bgpic.setInteractive();
        this.input.on('pointerdown', function (pointer) {
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