//Fecha de la próxima Navidad <3
function getNextChristmas() {
    var now = new Date();
    var year = now.getFullYear();
    var nextChristmas = new Date(year, 11, 25);
    
    if (now > nextChristmas) {
        nextChristmas.setFullYear(year + 1);
    }
    
    return nextChristmas.getTime();
}

var countDownDate = getNextChristmas();
var lastDays, lastHours, lastMinutes, lastSeconds;
var x;

function startCountdown() {
    x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
                
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
        if (distance < 0) {
            
            const boton3 = document.getElementById("botón3");

            boton3.querySelector('strong').textContent = 'Sorpresa Disponible!';
            boton3.disabled = false;
            
            boton3.classList.remove('sorpresa3'); 
            boton3.classList.add('sorpresa2', 'active'); 

            const boton4 = document.getElementById("botón4");
            boton4.style.display = 'block'; 

            boton3.onclick = function() {
                Swal.fire({
                    title: "¡Feliz Navidad Mi Amor!🎄",
                    html: "Mi deseo más grande esta Navidad y todos los días🌟 es tenerte siempre cerca y siempre a mi lado Mi Todo!🎁✨", 
                    position: "center",
                    background: "black",
                    color: "white",
                    confirmButtonText: 'Continuar',
                    confirmButtonColor: 'purple',
                    imageUrl: 'img/MV3.png',
                    imageWidth: '250px',
                    imageAlt: 'mv',
                    allowOutsideClick: false,
                    customClass: {
                        title: 'titulo01'
                    }
                })
                .then((willContinue) => {
                    if (willContinue) {
                        window.location.href = '//mr-y-mrs-debail.github.io/Merry_Christmas2025/';
                    }
                });
            };

            clearInterval(x);
            countDownDate = getNextChristmas();

            startCountdown(); 
            
            return;
        }
    
        if (days !== lastDays) {
            document.getElementById("days").innerHTML = days;
            lastDays = days;
        }
        if (hours !== lastHours) {
            document.getElementById("hours").innerHTML = hours;
            lastHours = hours;
        }
        if (minutes !== lastMinutes) {
            document.getElementById("minutes").innerHTML = minutes;
            lastMinutes = minutes;
        }
        if (seconds !== lastSeconds) {
            document.getElementById("seconds").innerHTML = seconds;
            lastSeconds = seconds;
        }
    }, 1000);
}

startCountdown();

//Music <3 ----------------------------------------
class musicPlayer {
    constructor() {
        this.play = this.play.bind(this);
        this.playBtn = document.getElementById('play');
        this.playBtn.addEventListener('click', this.play);
        this.controlPanel = document.getElementById('control-panel');
        this.infoBar = document.getElementById('info');
        this.status = false;
    }

    play() {
        var audio = document.getElementById('Music'); 
        let controlPanelObj = this.controlPanel;
        let infoBarObj = this.infoBar;
        
        Array.from(controlPanelObj.classList).find(function(element){   
            return element !== "active" ? controlPanelObj.classList.add('active') : controlPanelObj.classList.remove('active');       
        });

        Array.from(infoBarObj.classList).find(function(element){
            return element !== "active" ? infoBarObj.classList.add('active') : infoBarObj.classList.remove('active');
        });

        this.status = !this.status;

        if (this.status) {
            audio.play();
            let progressBar = document.getElementById('progress-bar');
            let bar = progressBar.querySelector('.bar');
            let progressInterval = setInterval(() => {
                let audioDuration = audio.duration;
                let audioCurrentTime = audio.currentTime;
                let progressPercentage = (audioCurrentTime / audioDuration) * 100;
                bar.style.width = `${progressPercentage}%`;
                if (audioCurrentTime === audioDuration) {
                    clearInterval(progressInterval);
                }
            }, 1000);
        } else {
            audio.pause();
        }
    }
}

let player = new musicPlayer();
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', function() {
    var audio = document.getElementById('Music');
    audio.currentTime += 10;
});

prevBtn.addEventListener('click', function() {
    var audio = document.getElementById('Music');
    audio.currentTime -= 10;
});