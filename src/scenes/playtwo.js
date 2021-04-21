class playtwo extends Phaser.Scene{
    constructor(){
        super("playtwoScene");
    }
    preload(){
        this.load.image('rocket','./assets/rocket.png');
        //this.load.image('spaceship','./assets/spaceship.png');
        this.load.image('spaceship','./assets/pikachuuu.png');
        this.load.image('eve','./assets/eve.png')
        this.load.image('starfield','./assets/starfield.png');
        this.load.image('back','./assets/back.png');
        this.load.spritesheet('explosion','./assets/explosion.png',{
            frameWidth: 32,
            frameHeight: 32,
            startFrame: 0,
            endFrame:4
        });
        this.load.spritesheet('ballui','./assets/ball.png',{
            frameWidth: 96,
            frameHeight: 96,
            startFrame: 0,
            endFrame:4
        });
        this.load.atlas('flares', 'assets/flares.png', 'assets/flares.json');
    }

    create(){
        //place starfield 
        game.music.play(); 
        this.starfield = this.add.tileSprite(0,0,game.config.width,game.config.height,'starfield').setOrigin(0.0);
        this.back = this.add.tileSprite(0,0,game.config.width,game.config.height,'back').setOrigin(0.0);
        //UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        // white borders
        //this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        //add rocket p1        
        this.p1Rocket = new Rocket(this, game.config.width/2-32, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);
        this.p2Rocket = new rocketwo(this, game.config.width/2+32, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);
    
        // add spaceships (x3)
        this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'spaceship', 0, 30).setOrigin(0, 0);
        this.ship02 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'spaceship', 0, 20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'spaceship', 0, 10).setOrigin(0,0);
        this.ship04 = new eve(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'eve', 0, 20).setOrigin(0,0);

        //define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
       
        //animation
        this.anims.create({
            key:'explode',
            frames: this.anims.generateFrameNumbers('explosion',{
                start: 0,
                end:4,
                first: 0
            }),
            frameRate: 15
        });
    //pokeball UI
        this.anims.create({
            key:'ballui',
            frames: this.anims.generateFrameNumbers('ballui',{
                start: 0,
                end:3,
            }),
            frameRate: 8,
            repeat:-1
        });

        this.add.sprite(-32, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(10, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(52, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(94, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(136, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(178, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(220, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(262, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(304, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(346, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(388, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(430, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(472, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(514, -32).play('ballui').setOrigin(0, 0);
        this.add.sprite(556, -32).play('ballui').setOrigin(0, 0);
        
        this.add.sprite(-32, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(10, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(52, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(94, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(136, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(178, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(220, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(262, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(304, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(346, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(388, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(430, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(472, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(514, 426).play('ballui').setOrigin(0, 0);
        this.add.sprite(556, 426).play('ballui').setOrigin(0, 0);


        
        // initialize score
        this.p1Score = 0;
          // display score
        let scoreConfig = {
            fontFamily: 'Gill Sans Extrabold',
            fontSize: '28px',
            //backgroundColor: '#F3B141',
            color: '#000000',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            //fixedWidth: 100
        }

        this.gameOvertext= this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
        this.nextSteptext= this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← for Menu', scoreConfig).setOrigin(0.5);
        this.gameOvertext.setVisible(false);
        this.nextSteptext.setVisible(false);
        scoreConfig.fixedWidth = 100;
        scoreConfig.backgroundColor= '#F0E68C';
        game.settings.currentTimer = game.settings.gameTimer;
        game.settings.timeLeft = this.add.text(490, borderUISize + borderPadding*2, game.settings.currentTimer/1000, scoreConfig).setOrigin(0.0);

        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);
        scoreConfig.fixedWidth = 140;
        scoreConfig.color = '#000000';
        scoreConfig.backgroundColor= '#A0522D';
        this.add.text(260,54,'GOTCHA! ',scoreConfig);
        // GAME OVER flag
        this.gameOver = false;

        this.timer = this.time.addEvent({
            delay: 100,                // ms
            callback: this.reduceTime,
            loop: true
        });

        // 60-second play clock
        scoreConfig.fixedWidth = 0;
        //this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
        //    this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
        //    this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← for Menu', scoreConfig).setOrigin(0.5);
        //    this.gameOver = true;
        //    this.timer.paused = true;
        //}, null, this);
        //this.gameOvertext= this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
        //this.nextSteptext= this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← for Menu', scoreConfig).setOrigin(0.5);
        //this.gameOvertext.setVisible(false);
        //this.nextSteptext.setVisible(false);


    }

    update(){
          // check key input for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.restartGame();
        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            game.music.pause();
            this.scene.start("newmenuScene");
        }
        this.starfield.tilePositionX -= starSpeed;
        this.back.tilePositionX -= backSpeed;
        
        if (this.game.settings.currentTimer > 5000){
            this.speedChange();
            }
        //
        if (!this.gameOver) {               
            this.p1Rocket.update();
            this.p2Rocket.update();         // update rocket sprite
            this.ship01.update();           // update spaceships (x3)
            this.ship02.update();
            this.ship03.update();
            this.ship04.update();
        } 
        if(this.checkCollision(this.p1Rocket, this.ship03)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship03);
            game.settings.currentTimer += 1000;
        }
        if(this.checkCollision(this.p1Rocket, this.ship02)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship02);
            game.settings.currnetTimer += 1000;
        }
        if(this.checkCollision(this.p1Rocket, this.ship01)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship01);
            game.settings.currentTimer += 1000; //+1s when you catch a pikachu
        }
        if(this.checkCollision(this.p1Rocket, this.ship04)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship04);
            this.p1Score += 10
            game.settings.currentTimer += 5000; //remainning time +5s when you catch an eevee
        }

        if(this.checkCollision(this.p2Rocket, this.ship03)){
            this.p2Rocket.reset();
            this.shipExplode(this.ship03);
            game.settings.currentTimer += 1000;
        }
        if(this.checkCollision(this.p2Rocket, this.ship02)){
            this.p2Rocket.reset();
            this.shipExplode(this.ship02);
            game.settings.currnetTimer += 1000;
        }
        if(this.checkCollision(this.p2Rocket, this.ship01)){
            this.p2Rocket.reset();
            this.shipExplode(this.ship01);
            game.settings.currentTimer += 1000; //+1s when you catch a pikachu
        }
        if(this.checkCollision(this.p2Rocket, this.ship04)){
            this.p2Rocket.reset();
            this.shipExplode(this.ship04);
            this.p1Score += 10
            game.settings.currentTimer += 5000; //remainning time +5s when you catch an eevee
        }

        if(game.settings.currentTimer <= 0){
            this.endCondition();
        }


    }

    checkCollision(rocket, ship){
        if (rocket.x<ship.x +ship.width &&
            rocket.x +rocket.width >ship.x &&
            rocket.y< ship.y +ship.height &&
            rocket.height +rocket.y>ship.y){
            return true;
        } else{
            return false;
        }
    }
    shipExplode(ship) {
        // temporarily hide ship
        ship.alpha = 0;
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');             // play explode animation
        boom.on('animationcomplete', () => {    // callback after anim completes
          ship.reset();                         // reset ship position
          ship.alpha = 1;                       // make ship visible again
          boom.destroy();                       // remove explosion sprite
        });  
        // score add and repaint
        
        
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score;     
        this.sound.play('sfx_explosion');  
    }
    
    
    reduceTime() {
        game.settings.currentTimer -= 100;
        game.settings.timeLeft.text = game.settings.currentTimer /1000;
    }
    speedChange(){
        game.settings.spaceshipSpeed = game.settings.spaceshipSpeed*5;

    }
    endCondition(){
        this.gameOvertext.setVisible(true);
        this.nextSteptext.setVisible(true);
        this.gameOver = true;
        this.timer.paused = true;
        game.settings.timeLeft.text = 0
    }
    restartGame(){
        this.scene.restart();
        this.p1Rocket.reset(this.ship01);
        this.p1Rocket.reset(this.ship02);
        this.p1Rocket.reset(this.ship03);
        this.p1Rocket.reset(this.ship04);
        this.p2Rocket.reset(this.ship01);
        this.p2Rocket.reset(this.ship02);
        this.p2Rocket.reset(this.ship03);
        this.p2Rocket.reset(this.ship04);
        this.gameOver = false;
        this.timer.paused = false;
        game.settings.currentTimer = game.settings.gameTimer;
        game.settings.timeLeft.text = game.settings.currentTimer;
        this.p1Score = 0;
    }
      
}