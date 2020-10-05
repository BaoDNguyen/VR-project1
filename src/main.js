// aframe: https://github.com/aframevr/aframe
AFRAME.registerComponent('cursor-listener', {
    init: function () {
        // change light color
        let lastIndex = 0;
        let light = [], lightBox = [];
        for (let i = 1; i < 10; i++) {
            let name = '#light'+i.toString()
            light[i-1] = document.querySelector(name);
            name = '#lightContainer'+i.toString();
            lightBox[i-1] = document.querySelector(name);
        }
        let lightButton = document.querySelector('#lightButton');
        lightButton.addEventListener('click', function (evt) {
            lastIndex += 1;
            let colorCase = lastIndex % 4;
            let lightColor;
            switch (colorCase) {
                case 0:
                    lightColor = "#FFF";
                    break;
                case 1:
                    lightColor = "#FF0000";
                    break;
                case 2:
                    lightColor = "#00FF00";
                    break;
                case 3:
                    lightColor = "#0000FF";
                    break;
            }
            for (let i = 0; i < 9; i++) {
                light[i].setAttribute('color',lightColor);
                lightBox[i].setAttribute('material','color',lightColor);
            }
        });
        // Covid mode
        let isCovid = false;
        let covid = document.querySelector('#covidButton');
        let studentDesk = [];
        for (let i = 0; i < 18; i++) {
            let name = '#desk'+i.toString();
            studentDesk[i] = document.querySelector(name);
        }
        let board = document.querySelector('#frontBoard');
        covid.addEventListener('click',function(){
            isCovid = !isCovid;
            if (isCovid) {
                for (let i = 0; i < 18; i++) {
                    studentDesk[i].setAttribute('visible',false);
                }
                board.setAttribute('material','src','#lectureVid');
                let videoEl = document.querySelector('#lectureVid');
                videoEl.play();
            } else {
                for (let i = 0; i < 18; i++) {
                    studentDesk[i].setAttribute('visible',true);
                }
                board.setAttribute('material','src','url(textures/frontBoard.jpg)');
            }
        });

    },

});

