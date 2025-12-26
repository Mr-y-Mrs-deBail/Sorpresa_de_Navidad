function getNextChristmas() {
    var nextChristmas = new Date(2026, 11, 25, 0, 0, 0); 
    
    return nextChristmas.getTime();
}

function activarBotonNavidad() {
    const boton4 = document.getElementById("botón4");
    if (!boton4) return;

    boton4.querySelector('strong').textContent = 'Sorpresa Disponible!';
    
    boton4.classList.remove('sorpresa4');
    boton4.classList.add('sorpresa3', 'active'); 
    
    boton4.style.display = 'block'; 

    boton4.onclick = function() {
        Swal.fire({
            title: "Navidad 2026🎄",
            html: "🌟🎁✨", 
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
        .then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'https://mr-y-mrs-debail.github.io/Merry_Christmas2025/';
            }
        });
    };
}

var x;
var lastDays, lastHours, lastMinutes, lastSeconds;

function startCountdown() {
    var countDownDate = getNextChristmas();

    x = setInterval(function() {
        var nowString = new Date().toLocaleString("en-US", {timeZone: "America/Guatemala"});
        var now = new Date(nowString).getTime();
        
        var distance = countDownDate - now;
                
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
        if (distance <= 0) {
            activarBotonNavidad();
            
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
            
            clearInterval(x);
            return;
        }
    
        if (days !== lastDays) { 
            const dEl = document.getElementById("days");
            if(dEl) dEl.innerHTML = days; 
            lastDays = days; 
        }
        if (hours !== lastHours) { 
            const hEl = document.getElementById("hours");
            if(hEl) hEl.innerHTML = hours; 
            lastHours = hours; 
        }
        if (minutes !== lastMinutes) { 
            const mEl = document.getElementById("minutes");
            if(mEl) mEl.innerHTML = minutes; 
            lastMinutes = minutes; 
        }
        if (seconds !== lastSeconds) { 
            const sEl = document.getElementById("seconds");
            if(sEl) sEl.innerHTML = seconds; 
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