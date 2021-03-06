const path = window.location.host === "tanukichampion.ru" ? "/assets/game2/" : "";
let game = {
    statusGame: undefined,
    width: 1920,
    height: 1080,
    canvas: null,
    info: {
        pause: true,
        timerStart: null,
        score: 0,
        combo: 5,
        xCombo: 0,
        time: null,
        userName: '',
        modalMode: 'start',
        scoreInfo: {
            min: 699,
            middle: 1099,
        }
    },
    options: {
        full: false,
        fontName: "KulminoituvaRegular",
        flash: [
            { param: [480, 430, 180, 180], index: 0  },
            { param: [610, 480, 180, 180], index: 2  },
            { param: [750, 450, 180, 180], index: 0  },
            { param: [1000, 450, 180, 180], index: 3 },
            { param: [1250, 420, 130, 130], index: 1 },
            { param: [1400, 450, 130, 130], index: 2 },
        ],
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
        modal: {
            index: 0,
            key: 'idle',
            images: {
                idle: [
                    path + 'images/bg.png',
                    path + 'images/block/ui/Tanuki_2.png',
                    path + 'images/block/ui/yes.png',
                    path + 'images/block/ui/Tanuki_score_2.png',
                    path + 'images/block/ui/Tanuki_score_1.png',
                    path + 'images/block/ui/Tanuki_score_3.png',
                    path + 'images/block/ui/Tanuki_1.png',
                    path + 'images/block/button.png',
                    path + 'images/back.png',
                    path + 'images/Frame_201.svg',
                    path + 'images/Frame_202.svg',

                ]
            }
        },
        timer: {
            index: 0,
            key: 'idle',
            images: {
                idle: [
                    path + 'images/block/ui/timer_3.png',
                    path + 'images/block/ui/timer_2.png',
                    path + 'images/block/ui/timer_1.png',
                ]
            }
        },
        volume: {
            index: 0,
            key: 'idle',
            speed: -2,
            position: {
                0: { width: 570, height: 50, x: 700, y: 60 },
                1: { min: 705, max: 1185, point: 945, vector: 'down', blue: { left: 25, right: 55, width: 30 } },
                2: { min: 695, max: 1245, point: 970, vector: 'up' }
            },
            images: {
                idle: [ 
                    path + 'images/block/volume_level_1.png',
                    path + 'images/block/volume_level_2.png',
                    path + 'images/block/volume_level_3.png',
                ]
            } 
        },
        score: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ path + 'images/score_1.png' ]
            }
        },
        score2: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ path + 'images/score_2.png' ]
            }
        },
        crowd: {
            index: 0,
            key: 'idle',
            images: {
                idle: [
                    path + 'images/crowd/crowd_1.png',
                    path + 'images/crowd/crowd_2.png',
                    path + 'images/crowd/crowd_3.png',
                    path + 'images/crowd/crowd_4.png',
                ]
            },
        },
        people1st: {
            index: 0,
            key: 'idle',
            images: {
                idle: [
                    path + 'images/people/st1/idle/1st_people_idle_0.png',
                    path + 'images/people/st1/idle/1st_people_idle_1.png',
                    path + 'images/people/st1/idle/1st_people_idle_2.png',
                    path + 'images/people/st1/idle/1st_people_idle_3.png',
                ],
                joy: [
                    path + 'images/people/st1/joy/1st_people_joy_0.png',
                    path + 'images/people/st1/joy/1st_people_joy_1.png',
                    path + 'images/people/st1/joy/1st_people_joy_2.png',
                    path + 'images/people/st1/joy/1st_people_joy_3.png',
                    path + 'images/people/st1/joy/1st_people_joy_4.png',
                    path + 'images/people/st1/joy/1st_people_joy_5.png',
                ]
            }
        },
        people2st: {
            index: 0,
            key: 'idle',
            images: {
                idle: [
                    path + 'images/people/st2/idle/2nd_people_idle_0.png',
                    path + 'images/people/st2/idle/2nd_people_idle_1.png',
                    path + 'images/people/st2/idle/2nd_people_idle_2.png',
                    path + 'images/people/st2/idle/2nd_people_idle_3.png',
                ],
                joy: [
                    path + 'images/people/st2/joy/2nd_people_joy_0.png',
                    path + 'images/people/st2/joy/2nd_people_joy_1.png',
                    path + 'images/people/st2/joy/2nd_people_joy_2.png',
                    path + 'images/people/st2/joy/2nd_people_joy_3.png',
                    path + 'images/people/st2/joy/2nd_people_joy_4.png',
                    path + 'images/people/st2/joy/2nd_people_joy_5.png',
                ]
            }
        },
        boy: {
            index: 0,
            key: 'idle',
            images: {
                idle: [
                    path + 'images/people/boy/idle/boy_idle_0.png',
                    path + 'images/people/boy/idle/boy_idle_1.png',
                    path + 'images/people/boy/idle/boy_idle_2.png',
                    path + 'images/people/boy/idle/boy_idle_3.png',
                ],
                joy: [
                    path + 'images/people/boy/joy/boy_joy_0.png',
                    path + 'images/people/boy/joy/boy_joy_1.png',
                    path + 'images/people/boy/joy/boy_joy_2.png',
                    path + 'images/people/boy/joy/boy_joy_3.png',
                    path + 'images/people/boy/joy/boy_joy_4.png',
                    path + 'images/people/boy/joy/boy_joy_5.png',
                ]
            }
        },
        row1: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ path + 'images/row/row_1.png' ]
            }
        },
        row2: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ path + 'images/row/row_2.png' ]
            }
        },
        buttonJump: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ path + 'images/block/start_jump_button.png', path + 'images/block/button.png', path + 'images/btn.svg' ]
            }
        },
        speacer: {
            index: 0,
            key: 'idle',
            images: {
                idle: [ path + 'images/speaker/1/Speaker_1_1.png' ],
                animate1: [
                    path + 'images/speaker/1/Speaker_1_1.png',
                    path + 'images/speaker/1/Speaker_1_2.png',
                    path + 'images/speaker/1/Speaker_1_3.png',
                    path + 'images/speaker/1/Speaker_1_4.png',
                ],
                animate2: [
                    path + 'images/speaker/2/Speaker_2_1.png',
                    path + 'images/speaker/2/Speaker_2_2.png',
                    path + 'images/speaker/2/Speaker_2_3.png',
                    path + 'images/speaker/2/Speaker_2_4.png',
                ],
                animate3: [
                    path + 'images/speaker/3/Speaker_3_1.png',
                    path + 'images/speaker/3/Speaker_3_2.png',
                    path + 'images/speaker/3/Speaker_3_3.png',
                    path + 'images/speaker/3/Speaker_3_4.png',
                ],
                animate4: [
                    path + 'images/speaker/4/Speaker_4_1.png',
                    path + 'images/speaker/4/Speaker_4_2.png',
                    path + 'images/speaker/4/Speaker_4_3.png',
                    path + 'images/speaker/4/Speaker_4_4.png',
                ],
                animate5: [
                    path + 'images/speaker/5/Speaker_5_1.png',
                    path + 'images/speaker/5/Speaker_5_2.png',
                    path + 'images/speaker/5/Speaker_5_3.png',
                    path + 'images/speaker/5/Speaker_5_4.png',
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
        baner: {
            index: 0,
            key: 'red',
            status: 'close',
            images: {
                red: [
                    path + 'images/ban/red/red_banner_0.png',
                    path + 'images/ban/red/red_banner_1.png',
                    path + 'images/ban/red/red_banner_2.png',
                    path + 'images/ban/red/red_banner_3.png',
                    path + 'images/ban/red/red_banner_4.png',
                    path + 'images/ban/red/red_banner_5.png',
                ],
                blue: [
                    path + 'images/ban/blue/blue_banner_0.png',
                    path + 'images/ban/blue/blue_banner_1.png',
                    path + 'images/ban/blue/blue_banner_2.png',
                    path + 'images/ban/blue/blue_banner_3.png',
                    path + 'images/ban/blue/blue_banner_4.png',
                    path + 'images/ban/blue/blue_banner_5.png',
                ],
            }
        },
        flag1: {
            index: 0,
            key: 'red',
            images: {
                red: [ 
                    //path + 'images/flag/red/red_flag_0.png',
                    //path + 'images/flag/red/red_flag_1.png',
                    path + 'images/flag/red/red_flag_2.png',
                    path + 'images/flag/red/red_flag_3.png',
                    path + 'images/flag/red/red_flag_4.png',
                    path + 'images/flag/red/red_flag_5.png',
                    path + 'images/flag/red/red_flag_6.png',
                    path + 'images/flag/red/red_flag_7.png',
                    path + 'images/flag/red/red_flag_8.png',
                    path + 'images/flag/red/red_flag_9.png',
                    //path + 'images/flag/red/red_flag_10.png',
                    //path + 'images/flag/red/red_flag_11.png',
                ],
                blue: [ 
                    //path + 'images/flag/blue/red_flag_0.png',
                    //path + 'images/flag/blue/red_flag_1.png',
                    path + 'images/flag/blue/red_flag_2.png',
                    path + 'images/flag/blue/red_flag_3.png',
                    path + 'images/flag/blue/red_flag_4.png',
                    path + 'images/flag/blue/red_flag_5.png',
                    path + 'images/flag/blue/red_flag_6.png',
                    path + 'images/flag/blue/red_flag_7.png',
                    path + 'images/flag/blue/red_flag_8.png',
                    path + 'images/flag/blue/red_flag_9.png',
                    //path + 'images/flag/blue/red_flag_10.png',
                    //path + 'images/flag/blue/red_flag_11.png',
                ],
                rus: [
                    path + 'images/flag/rus/RUS_flag_0.png',
                    path + 'images/flag/rus/RUS_flag_1.png',
                    path + 'images/flag/rus/RUS_flag_2.png',
                    path + 'images/flag/rus/RUS_flag_3.png',
                    path + 'images/flag/rus/RUS_flag_4.png',
                    path + 'images/flag/rus/RUS_flag_5.png',
                    path + 'images/flag/rus/RUS_flag_6.png',
                    path + 'images/flag/rus/RUS_flag_7.png',
                    path + 'images/flag/rus/RUS_flag_8.png',
                    path + 'images/flag/rus/RUS_flag_9.png',
                    path + 'images/flag/rus/RUS_flag_10.png',
                    path + 'images/flag/rus/RUS_flag_11.png',
                ],
                logo: [
                    path + 'images/flag/hand/Logo_hand_0.png',
                    path + 'images/flag/hand/Logo_hand_1.png',
                    path + 'images/flag/hand/Logo_hand_2.png',
                    path + 'images/flag/hand/Logo_hand_3.png',
                    path + 'images/flag/hand/Logo_hand_0.png',
                    path + 'images/flag/hand/Logo_hand_1.png',
                    path + 'images/flag/hand/Logo_hand_2.png',
                    path + 'images/flag/hand/Logo_hand_3.png',
                    path + 'images/flag/hand/Logo_hand_0.png',
                    path + 'images/flag/hand/Logo_hand_1.png',
                    path + 'images/flag/hand/Logo_hand_2.png',
                ]
            }
        },
        boom: {
            index: 0,
            key: 'idle',
            visible: false,
            images: {
                idle: [ 
                    path + 'images/boom/flash_0.png',
                    path + 'images/boom/flash_1.png',
                    path + 'images/boom/flash_2.png',
                    path + 'images/boom/flash_3.png',
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
        boom: true,
    },
    create() {
        const userName = document.querySelector('[data-user-name]');
        if(userName) {
            this.userName = userName.dataset.userName;
        }
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


        /************************************************/
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
        /************************************************/

        this.ctx.drawImage(sprites.crowd.loadImg[sprites.crowd.key][this.info.modalMode ? 0 : sprites.crowd.index], 0, 0);
        
        if(this.info.modalMode) {
            this.ctx.drawImage(sprites.modal.loadImg['idle'][0], 0, 0);
        }
        if(this.options.full) {
            this.ctx.drawImage(sprites.modal.loadImg['idle'][9], 1800, 10, 110, 110);
        } else {
            this.ctx.drawImage(sprites.modal.loadImg['idle'][10], 1800, 10, 110, 110);
        }
        
        if(this.info.modalMode) {
            
            this.ctx.drawImage(sprites.modal.loadImg['idle'][8], 10, 10, 110, 110);
            this.ctx.drawImage(row2, 0, 0, 1280, 720, 640 - r1x, 360 - r1y, 1280 + r1x, 720 + r1y);
            this.ctx.drawImage(row1, 0, 0, 1280, 720, 640 - r1x, 360 - r1y, 1280 + r1x, 720 + r1y);
            this.ctx.fillStyle = "#fff";
            switch(this.info.modalMode) {
                case "start":
                    this.ctx.font = "30px " + this.options.fontName;
                    this.ctx.drawImage(sprites.modal.loadImg['idle'][1], 450, 100);
                    this.ctx.fillText("????????????", 900, 515);
                    const paddingBottom = 40;
                    this.ctx.textAlign = 'center';

                    const text = [
                        `????????????, ${this.userName}!`, 
                        `?????????? ???????????????????? ?????????? ???????????????????????`,
                        '??????????  ?????????? ?? ?????????????? ?????? ?????????? ????????????!', 
                        '?????? ?????????? ???????? ?????????? ?????????????? ????????????????',
                        '???? ????????????. ??????????? ?????????? ?????? ????????????!??',
                    ];
                    
                    for(const index in text) {
                        this.ctx.fillText(text[index], 1000, 623 + (paddingBottom * index));
                    }
                    this.ctx.textAlign = 'left';
                    const buttonJump = this.sprites.buttonJump.loadImg['idle'];
                    this.ctx.drawImage(buttonJump[2], 1575, 435, 350, 210);
                    this.ctx.font = "55px " + this.options.fontName;
                    this.ctx.fillText("??????????!", 1645, 558);
                break;
                case "countdown":
                    this.ctx.drawImage(sprites.timer.loadImg['idle'][sprites.timer.index], 750, 320);
                break;
                case "score":
                    let face = 5;
                    
                    if(this.info.score <= this.info.scoreInfo.min) {
                        face = 6;
                    } else if (this.info.score <= this.info.scoreInfo.middle) {
                        face = 4;
                    }

                    this.ctx.drawImage(sprites.modal.loadImg['idle'][face], 450, 100);
                    if(face === 6) {
                        this.ctx.textAlign = 'center';
                            this.ctx.font = "40px " + this.options.fontName;
                            this.ctx.fillText("???? ???????????? ???????? ??????????!", 1000, 680);
                            this.ctx.fillText("???????????? ?????????????????????? ?????? ???????", 1000, 725);

                            this.ctx.drawImage(sprites.modal.loadImg['idle'][2], 1600, 530, 230, 105);
                            this.ctx.font = "40px " + this.options.fontName;
                            this.ctx.fillText("????!", 1715, 595);

                            this.ctx.drawImage(sprites.modal.loadImg['idle'][7], 1600, 720, 230, 105);
                            this.ctx.font = "40px " + this.options.fontName;
                            this.ctx.fillText("??????", 1715, 782);

                        this.ctx.textAlign = 'left';
                    } else {
                        this.ctx.font = "25px " + this.options.fontName;
                        this.ctx.fillText("????????????", 900, 517);
                        this.ctx.textAlign = 'center';
                            this.ctx.font = "75px " + this.options.fontName;
                            this.ctx.fillText(this.info.xCombo, 785, 670);
                            this.ctx.font = "40px " + this.options.fontName;
                            this.ctx.fillText("??????????", 785, 740);
        
                            this.ctx.font = "75px " + this.options.fontName;
                            this.ctx.fillText(this.formateScore(this.info.score), 1195, 670);
                            this.ctx.font = "40px " + this.options.fontName;
                            this.ctx.fillText("??????????", 1200, 740);
                        this.ctx.textAlign = 'left';
                    }

                break;
            }
            this.ctx.fillStyle = "#000";
            return false;
        }

        this.ctx.drawImage(people2st, 0, 0, 1920, 429, -110 - people2stx, 650 - people2sty, 1920 + people2stx, 429 + people2sty);
        this.ctx.drawImage(row2, 0, 0, 1280, 720, 640 - r2x, 360 - r2y, 1280 + r2x, 720 + r2y);

        if(sprites.boom.visible) {
            const lenghtBoom = sprites.boom.loadImg['idle'].length;
            for(const b of this.options.flash) {
                const boom = sprites.boom.loadImg['idle'][b.index];
                this.ctx.drawImage(boom, ...b.param);
            }
        }
        
        const flagMap = this.options.flagMap;
        for(const comboIndex in flagMap) {
            if(comboIndex <= this.info.combo) {
                if(flagMap[comboIndex].position !== 0) flagMap[comboIndex].position -= 10;
            } else {
                if(flagMap[comboIndex].position !== 330) flagMap[comboIndex].position += 10;
            }
            for(const lll of flagMap[comboIndex].list) {
                const flag1 = sprites.flag1.loadImg[lll.type][sprites.flag1.index];
                this.ctx.drawImage(flag1, lll.x, lll.y + flagMap[comboIndex].position, 195, 350);
            }
        }
        const mapBaner = [
            { x: 395, y: 363, type: "red", width: 250, height: 110 },
            { x: 900, y: 395, type: "blue", width: 180, height: 100 },
        ];
        for(const baner of mapBaner) {
            const banerImg = sprites.baner.loadImg[baner.type][sprites.baner.index];
            this.ctx.drawImage(banerImg, baner.x, baner.y, baner.width, baner.height);
        }
        this.ctx.drawImage(boy, 0, 0, 341, 346, 1570, 708, 341, 346);
        this.ctx.drawImage(people1st, 0, 0, 1920, 429, -110 - people1stx, 590 - people1sty, 1920 + people1stx, 429 + people1sty);
        this.ctx.drawImage(row1, 0, 0, 1280, 720, 640 - r1x, 360 - r1y, 1280 + r1x, 720 + r1y);
        this.ctx.textAlign = 'center';

        this.ctx.fillStyle = "#504a70";
        /**********************score*************************/
        const score = sprites.score.loadImg[sprites.score.key][sprites.score.index];
        const scoreX = - 650;
        const scoreY = - 300;
        this.ctx.font = "25px " + this.options.fontName;
        this.ctx.fillText("????????", 190, 40);
        //
        this.ctx.drawImage(score, 0, 0, 954 - scoreX, 417 - scoreY, 100, 50, 954 + scoreX, 417 + scoreY);
        this.ctx.font = "45px KulminoituvaRegularNumber";
        this.ctx.fillText(this.formateScore(this.info.score), 190, 100);
        /**********************score*************************/
        /**********************score2*************************/
        const score2 = sprites.score2.loadImg[sprites.score2.key][sprites.score2.index];
        const score2X = - 650;
        const score2Y = - 300;
        this.ctx.font = "25px " + this.options.fontName;
        this.ctx.fillText("??????????", 390, 40);
        this.ctx.drawImage(score2, 0, 0, 954 - score2X, 417 - score2Y, 320, 50, 954 + score2X, 417 + score2Y);
        this.ctx.font = "45px KulminoituvaRegularNumber";
        this.ctx.fillText(`??${this.info.combo}`, 385, 100);
        /**********************score2*************************/

        this.ctx.fillStyle = "#fff";

        this.ctx.textAlign = 'left';
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
        this.ctx.font = "100px KulminoituvaRegularNumber";
        this.ctx.fillText(this.gameTime(), 1550, 110);
        /**********************time*************************/
        const ruporKey = sprites.speacer.key === 'idle' ? 'idle' : `animate${this.info.combo}`;
        const speacer = sprites.speacer.loadImg[ruporKey][sprites.speacer.index];
        const rotate = sprites.speacer.rotate.list[sprites.speacer.rotate.actual];
        this.ctx.rotate(rotate.rotate * Math.PI / 180);        
        this.ctx.drawImage(speacer, rotate.x, rotate.y + (ruporKey === 'idle' ? 0 : 160), 800, ruporKey === 'idle' ? 900 : 700);
        this.ctx.rotate(-rotate.rotate * Math.PI / 180);
        const buttonJump = this.sprites.buttonJump.loadImg['idle'];
        this.ctx.drawImage(buttonJump[0], 1620, 445, 300, 120);
        this.ctx.drawImage(buttonJump[1], 1640, 457, 250, 100);
        this.ctx.font = "40px " + this.options.fontName;
        this.ctx.fillText("??????!", 1700, 520);
        
        // this.ctx.drawImage(buttonJump[0], 1575, 435, 350, 210);
        // this.ctx.font = "55px " + this.options.fontName;
        // this.ctx.fillText("??????!", 1645, 558);

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

    const change = () => {
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
            this.addCombo();
            this.switchAnimation();
            this.addScore(number);
        } else {
            this.setCombo(1);
            this.switchAnimation();
            this.sprites.speacer.index = 0;
            this.sprites.speacer.key = 'idle';
        }
    };

    this.eventButton({
        event: {
            hover() { if(this.info.modalMode === 'start') this.canvas.style.cursor = "pointer"; },
            afterHover() { this.canvas.style.cursor = "" },
            click() { if(this.info.modalMode === 'start') { this.startTimer(function () { this.startGame(); }); } },
        }
    }, 1575, 435, 350, 210);
    this.eventButton({
        event: {
            hover() { this.canvas.style.cursor = "pointer"; },
            afterHover() { this.canvas.style.cursor = "" },
            click() {
                this.fullScreen();
            },
        }
    }, 1800, 10, 110, 110);
    this.eventButton({
        event: {
            hover() { if(this.info.modalMode === '') this.canvas.style.cursor = "pointer"; },
            afterHover() { this.canvas.style.cursor = ""; },
            click() { change() },
        }
    }, 1640, 457, 250, 100);
    this.eventButton({
        event: {
            hover() { if(this.info.modalMode) this.canvas.style.cursor = "pointer"; },
            afterHover() { this.canvas.style.cursor = "" },
            click() { window.location.href = "/playgames.html" },
        }
    }, 10, 10, 110, 110);
    this.eventButton({
        event: {
            hover() { if(this.info.modalMode === 'score') this.canvas.style.cursor = "pointer"; },
            afterHover() { this.canvas.style.cursor = "" },
            click() { if(this.info.modalMode === 'score') this.startGame() }
        }
    }, 1600, 530, 230, 105);
    this.eventButton({
        event: {
            hover() { if(this.info.modalMode === 'score') this.canvas.style.cursor = "pointer"; },
            afterHover() { this.canvas.style.cursor = ""; },
            click() { window.location.href = "/playgames.html"; }
        }
    }, 1600, 720, 230, 105);

    document.body.onkeydown = (e) => { if(e.keyCode == 32) change(e); }

    setInterval(() => {
        if(this.info.pause) return false;
        this.sprites.volume.speed += 4;
    }, 60000);

    setInterval(() => {
        if(this.info.pause) return false;
        this.info.time--;
        if(this.info.time === 0) {
            this.gameOver();
        }
    }, 1000);
};
game.animation = function () {
    setInterval(() => {
        if(this.info.pause) return false;
        if(this.sprites.baner.status === 'open') {
            if(this.sprites.baner.index < 5) {
                this.sprites.baner.index += 1;
            }
        } else {
            if(this.sprites.baner.index >= 1) {
                this.sprites.baner.index -= 1;
            } 
        }
    }, 200);
    /**********************speacer****************************/
    /******************************************************/
    setInterval(() => {
        if(this.info.pause) return false;
        const rotate = this.sprites.speacer.rotate;
        if(rotate.actual >= rotate.list.length - 1) {
            rotate.arrow = 'down';
        } else if (rotate.actual <= 0) {
            rotate.arrow = 'up';
        }
        rotate.actual += rotate.arrow === 'up' ? 1 : -1;
    }, 10);
    /******************************************************/
    setInterval(() => {
        if(this.info.pause) return false;
        const field = this.sprites['boom'];
        for(const b of this.options.flash) {
            b.index++;
            if(b.index == field.images[field.key].length) {
                b.index = 0;
            }
        }
    }, 180);
    /******************************************************/
    for (const fieldKey of ['crowd', 'people1st', 'people2st', 'boy', 'flag1']) {
        setInterval(() => {
            if(this.info.pause) return false;
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
            if(this.info.pause) return false;
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
        if(this.info.pause) {
            return false;
        }
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
    fullScreen() {
        this.options.full = !this.options.full;
        const mw = document.querySelector('#game-block');
        if(mw) {
            console.log('mw', mw);
            if(this.options.full) {
                console.log('fill');
                mw.classList.add('master-wrap_fixed');
                document.body.style.overflow = 'hidden';
            } else {
                mw.classList.remove('master-wrap_fixed');
                document.body.style.overflow = '';
            }
        }
    },
    gameOver() {
        this.info.modalMode = 'score';
        this.info.pause = true;
        if(this.info.score > this.info.scoreInfo.min) {
            const formData = new FormData();
            
            formData.append('score', this.info.score);
            formData.append('gameType', 'game2');

            try {
                fetch('/ajax/jump.php', { method: 'POST', body: formData });
            } catch (error) {
                console.error('????????????:', error);
            }
        }

    },
    startGame() {
        this.info.modalMode = '';
        this.info.score = 0;
        this.info.combo = 1;
        this.info.xCombo = 0;
        this.info.time = 120;
        this.info.pause = false;
        this.switchAnimation();
        this.animationOn.people1st = true;
        this.animationOn.people2st = true;
        this.animationOn.boy = true;
        this.animationOn.crowd = true;
        this.animationOn.speacer = true;
        this.animationOn.flag1 = true;
        this.animationOn.boom = true;
    },
    startTimer(callback = null) {
        this.sprites.timer.index = 0;
        this.info.modalMode = 'countdown';
        this.info.pause = true;
        setInterval(() => this.sprites.timer.index++ , 1000);
        this.info.timerStart = setInterval(() => {
            clearInterval(this.info.timerStart);
            this.info.timerStart = null;
            this.info.modalMode = '';
            if(callback) callback.apply(this);
        }, 3000);
    },
    eventButton(options = {}, x = 0, y = 0, width = 0, height = 0) {
        let hover = false;
        const getCursorPosition = (e) => {
            const canvas = this.canvas;
            const rect = canvas.getBoundingClientRect();
            let xV = e.clientX;
            let yV = e.clientY;
            if('touches' in e) {
                xV = e.touches[0].pageX;
                yV = e.touches[0].pageY;
            }
            return {
                x: (xV - rect.left) / (rect.right - rect.left) * canvas.width,
                y: (yV - rect.top) / (rect.bottom - rect.top) * canvas.height
            };
        }
        this.canvas.addEventListener("mousemove", (e) => {
            //this.ctx.fillRect(x, y, width, height);
            const position = getCursorPosition(e);
            const check = (position.x >= x && position.x < x + width && position.y >= y && position.y < y + height);
            if(check && !hover) {
                hover = true;
                if(options.event.hover) options.event.hover.apply(this);
            } else if (!check && hover) {
                hover = false;
                if(options.event.afterHover) options.event.afterHover.apply(this);
            }
        });
        const clickFunction = (e) => {
            const position = getCursorPosition(e);
            const check = (position.x >= x && position.x < x + width && position.y >= y && position.y < y + height);
            if(check) {
                options.event.click.apply(this);
            }
        };

        if(options.event.click) {
            this.canvas.addEventListener("mousedown", clickFunction);
            this.canvas.addEventListener("touch", clickFunction);
        }
    },
    switchAnimation() {
        if(this.info.combo <= 1) {
            this.sprites.people1st.index = 0;
            this.sprites.people2st.index = 0;
            this.sprites.boy.index = 0;
            this.sprites.people1st.key = 'idle';
            this.sprites.people2st.key = 'idle';
            this.sprites.boy.key = 'idle';
            this.sprites.baner.status = 'close';
            this.sprites.boom.visible = false;
        } else if (this.info.combo == 2) {
            this.sprites.people1st.index = 0;
            this.sprites.people2st.index = 0;
            this.sprites.boy.index = 0;
            this.sprites.people1st.key = 'joy';
            this.sprites.people2st.key = 'joy';
            this.sprites.boy.key = 'joy';
        } else if (this.info.combo === 5) {
            this.sprites.baner.status = 'open';
            this.sprites.boom.visible = true;
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
        if(lineXFactor === 6) {
            number += 10;
        }
        switch (this.info.combo) {
            case 2: number += 5; break;
            case 3: number += 10; break;
            case 4: number += 15; break;
            case 5: number += 20; break;
        }
        console.log(number, 'number');
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
            this.info.combo += 1;
        }
        this.info.xCombo += 1;
    },
    setCombo(number = 1) {
        this.info.combo = number;
    },
    formateScore: (score) => score > 9999 ? score : ('0'.repeat(4 - `${score}`.length)).concat(score),
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
