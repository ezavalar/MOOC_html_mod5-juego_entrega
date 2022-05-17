/**
 * El jefe final
 * Modificado por: Ericka Zavala
 */
 class Boss extends Opponent{
    /**
     * @param game {Game} La instancia del juego al que pertenece el jefe
     */
     constructor(game){
        super(game);
        this.speed = OPPONENT_SPEED*2;
        this.myImage = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;
        this.image.src = this.myImage;
     }
     /**
     * Mata al jefe
     */
    collide() {
        if (!this.dead) {
            
            this.game.score++;
            document.getElementById('scoreli').innerHTML="Score: "+this.game.score;//Modificado por Ericka Zavala.
            setTimeout(() => {
                this.game.removeOpponent();
                
            }, 2000);
            super.collide();
        }
        else{
            this.image.src = this.myImageDead;
            setTimeout(() => {
                    this.game.endGame();
                }, 2000);
        }
    }

 }