let game = {
    statusGame: undefined,
    width: 1920,
    height: 1080,
    canvas: null,
    info: {
        score: 0,
        combo: 1,
        time: 150,
    },
    options: {
        fontName: "KulminoituvaRegular",
        flagMap: {
            2: {
                list: [
                    { x: 380, y: 680, type: "red" },
                    { x: 1000, y: 640, type: "red" },
                    { x: 1400, y: 660, type: "blue" },
                ],
                position: 330,
            },
            3: {
                list: [
                    { x: 830, y: 640, type: "blue" },
                    { x: 650, y: 680, type: "blue" },
                ],
                position: 330,
            },
            4: {
                list: [
                    { x: 1300, y: 700, type: "red" },
                    { x: 1170, y: 670, type: "blue" },
                    { x: 1030, y: 700, type: "blue" },
                    { x: 1700, y: 600, type: "rus" },
                    { x: 530, y: 590, type: "red" },
                    { x: 1520, y: 580, type: "logo" },
                    { x: 250, y: 650, type: "blue" },
                ],
                position: 330,
            }
        }
    },
    ctx: null,
    sprites: {
        volume: {
            index: 0,
            key: 'idle',
            speed: 0,
            position: {
                0: { width: 570, height: 50, x: 700, y: 60 },
                1: { min: 705, max: 1185, point: 945, vector: 'down', blue: { left: 25, right: 55, width: 30 } },
                2: { min: 695, max: 1245, point: 970, vector: 'down' }
            },
            images: {
                idle: [ 
                    'images/block/volume_level_1.png',
                    'images/block/volume_level_2.png',
                    'images/block/volume_level_3.png',
                ]
            } 
        },
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
        buttonJump: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ 'images/block/start_jump_button.png', 'images/block/button.png' ]
            }
        },
        speacer: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ 'images/speaker/1/Speaker_1_1.png' ],
                animate1: [
                    'images/speaker/1/Speaker_1_1.png',
                    'images/speaker/1/Speaker_1_2.png',
                    'images/speaker/1/Speaker_1_3.png',
                    'images/speaker/1/Speaker_1_4.png',
                ],
                animate2: [
                    'images/speaker/2/Speaker_2_1.png',
                    'images/speaker/2/Speaker_2_2.png',
                    'images/speaker/2/Speaker_2_3.png',
                    'images/speaker/2/Speaker_2_4.png',
                ],
                animate3: [
                    'images/speaker/3/Speaker_3_1.png',
                    'images/speaker/3/Speaker_3_2.png',
                    'images/speaker/3/Speaker_3_3.png',
                    'images/speaker/3/Speaker_3_4.png',
                ],
                animate4: [
                    'images/speaker/4/Speaker_4_1.png',
                    'images/speaker/4/Speaker_4_2.png',
                    'images/speaker/4/Speaker_4_3.png',
                    'images/speaker/4/Speaker_4_4.png',
                ],
                animate5: [
                    'images/speaker/5/Speaker_5_1.png',
                    'images/speaker/5/Speaker_5_2.png',
                    'images/speaker/5/Speaker_5_3.png',
                    'images/speaker/5/Speaker_5_4.png',
                ],
            },
            rotate: {
                list: (() => {
                    const y = 200;
                    let x = -10;
                    const list = [];
                    for(let rotate = -5; rotate < 6; rotate += 0.1) {
                        x -= 2;
                        list.push( { rotate: -rotate, x: x, y: 200 } );
                    }
                    return list;
                })(),
                idle: { rotate: 0, x: -160, y: 200 },
                actual: 1,
                arrow: 'up',
            }
        },
        flag1: {
            index: 0,
            key: 'red',
            images: {
                red: [ 
                    //'images/flag/red/red_flag_0.png',
                    //'images/flag/red/red_flag_1.png',
                    'images/flag/red/red_flag_2.png',
                    'images/flag/red/red_flag_3.png',
                    'images/flag/red/red_flag_4.png',
                    'images/flag/red/red_flag_5.png',
                    'images/flag/red/red_flag_6.png',
                    'images/flag/red/red_flag_7.png',
                    'images/flag/red/red_flag_8.png',
                    'images/flag/red/red_flag_9.png',
                    //'images/flag/red/red_flag_10.png',
                    //'images/flag/red/red_flag_11.png',
                ],
                blue: [ 
                    //'images/flag/blue/red_flag_0.png',
                    //'images/flag/blue/red_flag_1.png',
                    'images/flag/blue/red_flag_2.png',
                    'images/flag/blue/red_flag_3.png',
                    'images/flag/blue/red_flag_4.png',
                    'images/flag/blue/red_flag_5.png',
                    'images/flag/blue/red_flag_6.png',
                    'images/flag/blue/red_flag_7.png',
                    'images/flag/blue/red_flag_8.png',
                    'images/flag/blue/red_flag_9.png',
                    //'images/flag/blue/red_flag_10.png',
                    //'images/flag/blue/red_flag_11.png',
                ],
                rus: [
                    'images/flag/rus/RUS_flag_0.png',
                    'images/flag/rus/RUS_flag_1.png',
                    'images/flag/rus/RUS_flag_2.png',
                    'images/flag/rus/RUS_flag_3.png',
                    'images/flag/rus/RUS_flag_4.png',
                    'images/flag/rus/RUS_flag_5.png',
                    'images/flag/rus/RUS_flag_6.png',
                    'images/flag/rus/RUS_flag_7.png',
                    'images/flag/rus/RUS_flag_8.png',
                    'images/flag/rus/RUS_flag_9.png',
                    'images/flag/rus/RUS_flag_10.png',
                    'images/flag/rus/RUS_flag_11.png',
                ],
                logo: [
                    'images/flag/hand/Logo_hand_0.png',
                    'images/flag/hand/Logo_hand_1.png',
                    'images/flag/hand/Logo_hand_2.png',
                    'images/flag/hand/Logo_hand_3.png',
                    'images/flag/hand/Logo_hand_0.png',
                    'images/flag/hand/Logo_hand_1.png',
                    'images/flag/hand/Logo_hand_2.png',
                    'images/flag/hand/Logo_hand_3.png',
                    'images/flag/hand/Logo_hand_0.png',
                    'images/flag/hand/Logo_hand_1.png',
                    'images/flag/hand/Logo_hand_2.png',
                ]
            }
        },
    },
    animationOn: {
        people1st: true,
        people2st: true,
        boy: true,
        crowd: true,
        speacer: true,
        flag1: true,
    },
    create() {

    },
    start() {
        for(const i in this.helper) {
            this[i] = this.helper[i];
        }
        delete this.helper;
        this.init();
        this.load();
        this.create();
        this.animation();
        this.initEvent();
        this.run();
    },
    init() {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
    },
    load() {
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
        
        const people1st = sprites.people1st.loadImg[sprites.people1st.key][sprites.people1st.index];
        const people2st = sprites.people2st.loadImg[sprites.people2st.key][sprites.people2st.index];
        const boy = sprites.boy.loadImg[sprites.boy.key][sprites.boy.index];

        const row1 = sprites.row1.loadImg[sprites.row1.key][sprites.row1.index];
        const row2 = sprites.row2.loadImg[sprites.row2.key][sprites.row2.index];

        const people2stx = -120;
        const people2sty = -80;

        const r1x = 640;
        const r1y = 400;

        const r2x = 640;
        const r2y = 400;

        const people1stx = -120;
        const people1sty = -80;

        this.ctx.drawImage(sprites.crowd.loadImg[sprites.crowd.key][sprites.crowd.index], 0, 0);
        this.ctx.drawImage(people2st, 0, 0, 1920, 429, -110 - people2stx, 650 - people2sty, 1920 + people2stx, 429 + people2sty);
        this.ctx.drawImage(row2, 0, 0, 1280, 720, 640 - r2x, 360 - r2y, 1280 + r2x, 720 + r2y);
        

        
        
        const flagMap = this.options.flagMap;
        for(const comboIndex in flagMap) {

            if(comboIndex <= this.info.combo) {
                if(flagMap[comboIndex].position !== 0) {
                    flagMap[comboIndex].position -= 10;
                }
            } else {
                if(flagMap[comboIndex].position !== 330) {
                    flagMap[comboIndex].position += 10;
                }
            }
            
            for(const lll of flagMap[comboIndex].list) {
                const flag1 = sprites.flag1.loadImg[lll.type][sprites.flag1.index];
                this.ctx.drawImage(flag1, lll.x, lll.y + flagMap[comboIndex].position, 195, 350);
            }
        }

        this.ctx.drawImage(boy, 0, 0, 341, 346, 1570, 708, 341, 346);
        this.ctx.drawImage(people1st, 0, 0, 1920, 429, -110 - people1stx, 590 - people1sty, 1920 + people1stx, 429 + people1sty);
        this.ctx.drawImage(row1, 0, 0, 1280, 720, 640 - r1x, 360 - r1y, 1280 + r1x, 720 + r1y);

        /**********************score*************************/
        const score = sprites.score.loadImg[sprites.score.key][sprites.score.index];
        const scoreX = - 650;
        const scoreY = - 300;
        this.ctx.font = "25px " + this.options.fontName;
        this.ctx.fillText("ОЧКИ", 155, 40);
        this.ctx.drawImage(score, 0, 0, 954 - scoreX, 417 - scoreY, 100, 50, 954 + scoreX, 417 + scoreY);
        this.ctx.font = "45px " + this.options.fontName;
        this.ctx.fillText(this.formateScore(this.info.score), 135, 100);
        /**********************score*************************/

        /**********************score2*************************/
        const score2 = sprites.score2.loadImg[sprites.score2.key][sprites.score2.index];
        const score2X = - 650;
        const score2Y = - 300;
        this.ctx.font = "25px " + this.options.fontName;
        this.ctx.fillText("КОМБО", 345, 40);
        this.ctx.drawImage(score2, 0, 0, 954 - score2X, 417 - score2Y, 320, 50, 954 + score2X, 417 + score2Y);
        this.ctx.font = "45px " + this.options.fontName;
        this.ctx.fillText(this.info.combo, 375, 100);
        /**********************score2*************************/

        /**********************volueme*************************/
        const positionV = sprites.volume.position;
        const volueme1 = sprites.volume.loadImg['idle'][0];
        const volueme2 = sprites.volume.loadImg['idle'][1];
        const volueme3 = sprites.volume.loadImg['idle'][2];
        this.ctx.drawImage(volueme1, positionV[0].x, positionV[0].y, positionV[0].width, positionV[0].height);
        this.ctx.drawImage(volueme2, positionV[1].point, 71, 80, 30);
        this.ctx.drawImage(volueme3, positionV[2].point, 35, 30, 45);
        /**********************volueme**************************/

        /**********************time*************************/
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "100px " + this.options.fontName;
        this.ctx.fillText(this.gameTime(), 1550, 110);
        /**********************time*************************/

        const buttonJump = sprites.buttonJump.loadImg['idle'];


        this.ctx.drawImage(buttonJump[0], 0, 0, 448, 202, 1630, 440, 290, 130);
        this.ctx.drawImage(buttonJump[1], 0, 0, 448, 202, 1650, 460, 250, 100);
        this.ctx.font = "40px " + this.options.fontName;
        this.ctx.fillText("ЖМИ!", 1710, 520);

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
        const ruporKey = sprites.speacer.key === 'idle' ? 'idle' : `animate${this.info.combo}`;
        const speacer = sprites.speacer.loadImg[ruporKey][sprites.speacer.index];
        const rotate = sprites.speacer.rotate.list[sprites.speacer.rotate.actual];

        this.ctx.rotate(rotate.rotate * Math.PI / 180);

        if(!speacer) {
            console.log(speacer, ruporKey, sprites.speacer.index);
        }
        
        //this.ctx.drawImage(speacer, 0, 0, 1965 - speacerx, 2128 - speacery, rotate.x, rotate.y, 1965 + speacerx, 2128 + speacery);
        this.ctx.drawImage(speacer, rotate.x, rotate.y + (ruporKey === 'idle' ? 0 : 160), 800, ruporKey === 'idle' ? 900 : 700);
        
        this.ctx.rotate(-rotate.rotate * Math.PI / 180);

        this.ctx.fillStyle = "#000";
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
game.initEvent = function () {
    document.body.onkeydown = (e) => {
        if(e.keyCode == 32) {
            const vPosition = this.sprites.volume.position;
            const pointBlockLeft = vPosition[1].point;
            const pointBlockRight = vPosition[1].point + 80;
            const pointArrow = vPosition[2].point + 15;
            if(pointArrow >= pointBlockLeft && pointArrow <= pointBlockRight) {
                let number = 1;
                if((pointBlockLeft + vPosition[1].blue.left) <= pointArrow && (pointBlockLeft + vPosition[1].blue.right) >= pointArrow) {
                    number = 3;
                }
                this.activateSpeacerAnimation();
                number = this.summXFactorAndAddBonus(number);
                this.addCombo();
                this.switchAnimation();
                this.addScore(number);
            } else {
                this.setCombo(1);
                this.switchAnimation();
            }
        }
    }

    setInterval(() => this.info.time--, 1000);

    this.canvas.addEventListener("click", event => {
        let x, y = 0;
        var canvas = this.canvas;
        if (event.x != undefined && event.y != undefined) {
          x = event.x;
          y = event.y;
        } else {
          x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
          y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
    
        x += canvas.offsetLeft;
        y += canvas.offsetTop;
        console.log(x,y);
    });
};
game.animation = function () {
    /**********************speacer****************************/
    /******************************************************/
    setInterval(() => {
        const rotate = this.sprites.speacer.rotate;
        if(rotate.actual >= rotate.list.length - 1) {
            rotate.arrow = 'down';
        } else if (rotate.actual <= 0) {
            rotate.arrow = 'up';
        }
        rotate.actual += rotate.arrow === 'up' ? 1 : -1;
    }, 10);
    /******************************************************/
    /******************************************************/
    for (const fieldKey of ['crowd', 'people1st', 'people2st', 'boy', 'flag1']) {
        setInterval(() => {
            const field = this.sprites[fieldKey];
            if(this.animationOn[fieldKey]) {
                field.index++;
                if(field.index == field.images[field.key].length) {
                    field.index = 0;
                }
            } else field.index = 0;
        }, 100);
    }
    for (const fieldKey of ['speacer']) {
        setInterval(() => {
            const field = this.sprites[fieldKey];
            if(this.animationOn[fieldKey]) {
                field.index++;
                const ruporKey = field.key === 'idle' ? 'idle' : `animate${this.info.combo}`;
                if(field.index == field.images[ruporKey].length) {
                    field.index = 0;
                }
            } else field.index = 0;
        }, 100);
    }
    /**********************volume****************************/
    /******************************************************/
    const moveVolume = (speed, position) => {
        position.point += position.vector === 'up' ? speed : -speed;
        if(position.point < position.min) {
            position.vector = 'up'
        } else if(position.point > position.max) {
            position.vector = 'down'
        }
    }
    setInterval(() => {    
        moveVolume(0.9 + (this.sprites.volume.speed * 0.1), this.sprites.volume.position[1]);
        moveVolume(0.7 + (this.sprites.volume.speed * 0.1), this.sprites.volume.position[2]);
    }, 1);
    /******************************************************/
    /******************************************************/

};
game.helper = {
    switchAnimation() {
        console.log(this.info.combo);
        if(this.info.combo <= 1) {
            this.sprites.people1st.index = 0;
            this.sprites.people2st.index = 0;
            this.sprites.people1st.key = 'idle';
            this.sprites.people2st.key = 'idle';
        } else if (this.info.combo == 2) {
            this.sprites.people1st.index = 0;
            this.sprites.people2st.index = 0;
            this.sprites.people1st.key = 'joy';
            this.sprites.people2st.key = 'joy';
        }

    },
    activateSpeacerAnimation() {
        this.sprites.speacer.key = 'animate';
        this.sprites.speacer.index = 0;
        setTimeout(() => {
            this.sprites.speacer.index = 0;
            this.sprites.speacer.key = 'idle';
        }, 1000);
    },
    gameTime() {
        const toInt = (num) => (("" + num).length < 2 ? "0".concat(num) : num);
        const m = Math.floor(this.info.time / 60);
        const s = this.info.time % 60;
        return ("" + m).concat(":", toInt(s));
    },
    summXFactorAndAddBonus(number) {
        let lineBonus = number;
        const lineXFactor = this.getNumberLine();
        lineBonus *= lineXFactor;
        number += lineBonus;
        if(lineXFactor === 5) {
            number += 10;
        }
        switch (this.info.combo) {
            case 2: number += 5; break;
            case 3: number += 10; break;
            case 4: number += 15; break;
            case 5: number += 20; break;
        }
        return number;
    },
    getNumberLine() {
        const vPosition = this.sprites.volume.position;
        const pointArrow = vPosition[2].point + 15;
        return Math.ceil((pointArrow - 700) / 95);
    },
    addScore(number = 1) {
        this.info.score += this.summXFactorAndAddBonus(number);
    },
    addCombo(number = 1) {
        if(this.info.combo < 5) {
            this.info.combo += number;
        }
    },
    setCombo(number = 1) {
        this.info.combo = 1;
    },
    formateScore: (score) => ('0'.repeat(4 - `${score}`.length)).concat(score),
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
    }
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
