let game = {
    statusGame: undefined,
    width: 1920,
    height: 1080,
    ctx: undefined,
    ctx2: null,
    sprites: {
        score: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ 'images/score_1.png' ]
            }
        },
        score2: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ 'images/score_2.png' ]
            }
        },
        crowd: {
            index: 0,
            key: 'idle',
            images: {
                idle: [
                    'images/crowd/crowd_1.png',
                    'images/crowd/crowd_2.png',
                    'images/crowd/crowd_3.png',
                    'images/crowd/crowd_4.png',
                ]
            },
        },
        people1st: {
            index: 0,
            key: 'idle',
            images: {
                idle: [
                    'images/people/st1/idle/1st_people_idle_0.png',
                    'images/people/st1/idle/1st_people_idle_1.png',
                    'images/people/st1/idle/1st_people_idle_2.png',
                    'images/people/st1/idle/1st_people_idle_3.png',
                ],
                joy: [
                    'images/people/st1/joy/1st_people_joy_0.png',
                    'images/people/st1/joy/1st_people_joy_1.png',
                    'images/people/st1/joy/1st_people_joy_2.png',
                    'images/people/st1/joy/1st_people_joy_3.png',
                    'images/people/st1/joy/1st_people_joy_4.png',
                    'images/people/st1/joy/1st_people_joy_5.png',
                ]
            }
        },
        people2st: {
            index: 0,
            key: 'idle',
            images: {
                idle: [
                    'images/people/st2/idle/2nd_people_idle_0.png',
                    'images/people/st2/idle/2nd_people_idle_1.png',
                    'images/people/st2/idle/2nd_people_idle_2.png',
                    'images/people/st2/idle/2nd_people_idle_3.png',
                ],
                joy: [
                    'images/people/st2/joy/2nd_people_joy_0.png',
                    'images/people/st2/joy/2nd_people_joy_1.png',
                    'images/people/st2/joy/2nd_people_joy_2.png',
                    'images/people/st2/joy/2nd_people_joy_3.png',
                    'images/people/st2/joy/2nd_people_joy_4.png',
                    'images/people/st2/joy/2nd_people_joy_5.png',
                ]
            }
        },
        boy: {
            index: 0,
            key: 'idle',
            images: {
                idle: [
                    'images/people/boy/idle/boy_idle_0.png',
                    'images/people/boy/idle/boy_idle_1.png',
                    'images/people/boy/idle/boy_idle_2.png',
                    'images/people/boy/idle/boy_idle_3.png',
                ],
                joy: [
                    'images/people/boy/joy/boy_joy_0.png',
                    'images/people/boy/joy/boy_joy_1.png',
                    'images/people/boy/joy/boy_joy_2.png',
                    'images/people/boy/joy/boy_joy_3.png',
                    'images/people/boy/joy/boy_joy_4.png',
                    'images/people/boy/joy/boy_joy_5.png',
                ]
            }
        },
        row1: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ 'images/row/row_1.png' ]
            }
        },
        row2: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ 'images/row/row_2.png' ]
            }
        },
        speacer: {
            index: 0,
            key: 'animate',
            images: {
                idle: [ 'images/speaker/1/Speaker_1_1.png' ],
                animate: [
                    'images/speaker/1/Speaker_1_1.png',
                    'images/speaker/1/Speaker_1_2.png',
                    'images/speaker/1/Speaker_1_3.png',
                    'images/speaker/1/Speaker_1_4.png',
                ]
            }
        },
    },
    animationOn: {
        crowd: false,
        people1st: true,
        people2st: true,
        boy: true,
        speacer: true
    },
    create: function () {

    },
    start: function() {
        this.animation();
        this.init();
        this.load();
        this.create();
        this.run();
    },
    init: function () {
        let canvas = document.getElementById('game');
        this.ctx = canvas.getContext('2d');
    },
    load: function () {
        const sprites = this.sprites;
        for(const key in sprites) {
            const sprite = sprites[key];
            if(sprite.index !== undefined) {
                sprite.loadImg = {};
                for(const typeKey in sprite.images) {
                    sprite.loadImg[typeKey] = [];
                    for(const imgKey in sprite.images[typeKey]) {
                        const imgNew = new Image();
                        imgNew.src = sprite.images[typeKey][imgKey];
                        sprite.loadImg[typeKey].push(imgNew);
                    }
                }
            }

        }
    },
    render: function() {
        const sprites = this.sprites;
        this.ctx.clearRect(0, 0, this.width, this.hight);
        this.ctx.drawImage(sprites.crowd.loadImg[sprites.crowd.key][sprites.crowd.index], 0, 0);
        

        const people1st = sprites.people1st.loadImg[sprites.people1st.key][sprites.people1st.index];
        const people2st = sprites.people2st.loadImg[sprites.people2st.key][sprites.people2st.index];
        const boy = sprites.boy.loadImg[sprites.boy.key][sprites.boy.index];

        const row1 = sprites.row1.loadImg[sprites.row1.key][sprites.row1.index];
        const row2 = sprites.row2.loadImg[sprites.row2.key][sprites.row2.index];
        
        const speacer = sprites.speacer.loadImg[sprites.speacer.key][sprites.speacer.index];

        const people2stx = -120;
        const people2sty = -80;

        const r1x = 640;
        const r1y = 400;

        const r2x = 640;
        const r2y = 400;

        const people1stx = -120;
        const people1sty = -80;

        this.ctx.drawImage(people2st, 0, 0, 1920, 429, -110 - people2stx, 650 - people2sty, 1920 + people2stx, 429 + people2sty);
        this.ctx.drawImage(row2, 0, 0, 1280, 720, 640 - r2x, 360 - r2y, 1280 + r2x, 720 + r2y);
        this.ctx.drawImage(boy, 0, 0, 341, 346, 1570, 708, 341, 346);
        this.ctx.drawImage(people1st, 0, 0, 1920, 429, -110 - people1stx, 590 - people1sty, 1920 + people1stx, 429 + people1sty);
        this.ctx.drawImage(row1, 0, 0, 1280, 720, 640 - r1x, 360 - r1y, 1280 + r1x, 720 + r1y);
        
        const speacerx = -850;
        const speacery = -900;

        this.ctx.drawImage(speacer, 0, 0, 1965 - speacerx, 2128 - speacery, -160, 200, 1965 + speacerx, 2128 + speacery);

        
        
        
        /**********************score*************************/
        const score = sprites.score.loadImg[sprites.score.key][sprites.score.index];
        const scoreX = - 650;
        const scoreY = - 300;
        this.ctx.font = "25px Arial";
        this.ctx.fillText("ОЧКИ", 155, 40);
        this.ctx.drawImage(score, 0, 0, 954 - scoreX, 417 - scoreY, 100, 50, 954 + scoreX, 417 + scoreY);
        this.ctx.font = "45px Arial";
        this.ctx.fillText("5555", 140, 100);
        /**********************score*************************/

        /**********************score2*************************/
        const score2 = sprites.score2.loadImg[sprites.score2.key][sprites.score2.index];
        const score2X = - 650;
        const score2Y = - 300;
        this.ctx.font = "25px Arial";
        this.ctx.fillText("КОМБО", 345, 40);
        this.ctx.drawImage(score2, 0, 0, 954 - score2X, 417 - score2Y, 320, 50, 954 + score2X, 417 + score2Y);
        this.ctx.font = "45px Arial";
        this.ctx.fillText("5", 375, 100);
        /**********************score2*************************/

        

        // this.ctx.drawImage(
        //     row1,//sprite
        //     0,//ball.width
        //     0,//0
        //     1280,//ball.width
        //     720,//ball.height
        //     640 - r1x,//ball.x
        //     360 - r1y,//ball.y
        //     1280 + r1x,//ball.width
        //     720 + r1y//ball.height
        // );

    },
    update: function() {

    },
    restart: function() {

    },
    run: function() {
        this.update();
         this.render();
        window.requestAnimationFrame(() => {
            this.run();
        });
    },
    over: function () {
        this.statusGame.play = false;
    }
};
game.animation = function () {

    /**********************crowd****************************/
    /******************************************************/
    setInterval(() => {
        if(this.animationOn.crowd) {
            this.sprites.crowd.index++;
            if(this.sprites.crowd.index == this.sprites.crowd.images[this.sprites.crowd.key].length) {
                this.sprites.crowd.index = 0;
            }
        } else this.sprites.crowd.index = 0;
    }, 100);
    /******************************************************/
    /******************************************************/

    /**********************people1st****************************/
    /******************************************************/
    setInterval(() => {
        if(this.animationOn.people1st) {
            this.sprites.people1st.index++;
            if(this.sprites.people1st.index == this.sprites.people1st.images[this.sprites.people1st.key].length) {
                this.sprites.people1st.index = 0;
            }
        } else this.sprites.people1st.index = 0;
    }, 100);
    /******************************************************/
    /******************************************************/

    /**********************people2st****************************/
    /******************************************************/
    setInterval(() => {
        if(this.animationOn.people2st) {
            this.sprites.people2st.index++;
            if(this.sprites.people2st.index == this.sprites.people2st.images[this.sprites.people2st.key].length) {
                this.sprites.people2st.index = 0;
            }
        } else this.sprites.people2st.index = 0;
    }, 100);
    /******************************************************/
    /******************************************************/

    /**********************boy****************************/
    /******************************************************/
    setInterval(() => {
        if(this.animationOn.boy) {
            this.sprites.boy.index++;
            if(this.sprites.boy.index == this.sprites.boy.images[this.sprites.boy.key].length) {
                this.sprites.boy.index = 0;
            }
        } else this.sprites.boy.index = 0;
    }, 100);
    /******************************************************/
    /******************************************************/

    /**********************speacer****************************/
    /******************************************************/
    setInterval(() => {
        if(this.animationOn.speacer) {
            this.sprites.speacer.index++;
            if(this.sprites.speacer.index == this.sprites.speacer.images[this.sprites.speacer.key].length) {
                this.sprites.speacer.index = 0;
            }
        } else this.sprites.speacer.index = 0;
    }, 150);
    /******************************************************/
    /******************************************************/

};
game.helper = {
    getMousePos: function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        let x = evt.clientX;
        let y = evt.clientY;
        if('touches' in evt) {
            x = evt.touches[0].pageX;
            y = evt.touches[0].pageY;
        }
        return {
            x: (x - rect.left) / (rect.right - rect.left) * canvas.width,
            y: (y - rect.top) / (rect.bottom - rect.top) * canvas.height
        };
    },
    enterFullscreen: function (id) {
        var el = document.getElementById(id);
        if (el.webkitRequestFullScreen) {
          el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else {
          el.mozRequestFullScreen();
        }
    },
    playSound: function (src) {
        if(game.statusGame.sound) {
            var audio = new Audio();
            audio.preload = 'auto';
            audio.src = src;
            audio.play();
        }
    },
};

game.start();

// const startGame = (fullScreen = false) => {
//     if(fullScreen) {
//         game.helper.enterFullscreen('game-block');
//     }
//     document.getElementsByTagName('main')[0].removeAttribute('style');
    
// };

// window.addEventListener("load", () => {
//     document.getElementById('full').addEventListener('click', () => startGame());
//     document.getElementById('notfull').addEventListener('click', () => startGame());
// });