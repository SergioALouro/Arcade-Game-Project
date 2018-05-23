// Enemies our player must avoid
class Enemy {
    constructor(enemyX, enemyY, enemySpeed ) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        this.enemyX = enemyX;
        this.enemyY = enemyY;
        this.enemySpeed = enemySpeed;
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.enemyX += this.enemySpeed * dt;

        if( this.enemyX > 505 ) {
            this.enemyX = -50;
            //random number function https://www.w3schools.com/js/js_random.asp
            this.enemySpeed = Math.floor(Math.random() * 400) + 60;
        };

        // 2D collision detection https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
        if( player.heroX < this.enemyX + 80 && player.heroX + 75 > this.enemyX && player.heroY < this.enemyY + 30 && 50 + player.heroY > this.enemyY) {
            player.heroX = 202;
            player.heroY = 404;
        };
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.enemyX, this.enemyY);
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


class Hero {
    constructor(heroX, heroY) {
        this.heroX = heroX;
        this.heroY = heroY;
        this.player = 'images/char-princess-girl.png';
    }

    update() {

        //horizontal limits
        if(this.heroX < 0) {
            this.heroX = 0;
        } else if (this.heroX > 404) {
            this.heroX = 404;
        }

        //vertical limits
        else if(this.heroY > 404) {
            this.heroY = 404;
        }else if (this.heroY < 0) {
            this.heroX = 202;
            this.heroY = 404;
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.player), this.heroX, this.heroY);
    }

    handleInput(arrow) {
        if(arrow == 'up') {
            this.heroY -= 84;
        };

        if(arrow== 'down') {
            this.heroY += 84;
        };

        if(arrow == 'left') {
            this.heroX -= 101
        };

        if (arrow == 'right') {
            this.heroX += 101;
        }

    }

}


let allEnemies = [new Enemy(-10,60,(Math.floor(Math.random() * 300) + 60)), new Enemy(0, 140, (Math.floor(Math.random() * 300) + 60)), new Enemy(10,225,(Math.floor(Math.random() * 300) + 60))];

let player = new Hero(202,404);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', e => {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
