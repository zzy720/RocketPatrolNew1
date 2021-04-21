// rocket player prefabs
class rocketwo extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene,x, y, texture, frame);

        //add object to scene
        scene.add.existing(this);
        this.isFiring = false;  //track status
        this.moveSpeed = 3; //pixels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update(){
        //left/right movement
        if(!this.isFiring){
            if(keyA.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed;
            } else if(keyD.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }
          // fire button
          //(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) or
        if  (Phaser.Input.Keyboard.JustDown(keyE) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }

        //if fire move rocket up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -=this.moveSpeed;
        }
        //reset on miss
        if(this.y <=borderUISize *3 +borderPadding){
            this.reset();
        }
    }

    //reset rocket to ground
    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}