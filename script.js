// Configura aquí tu fecha objetivo
const countdownDate = new Date("April 11, 2026 05:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const diff = countdownDate - now;

    // Cálculos de tiempo
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Actualizar el DOM con formato de dos dígitos
    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = s.toString().padStart(2, '0');

    // Si el tiempo termina
    if (diff < 0) {
        clearInterval(timerInterval);
        document.querySelector(".timer-grid").innerHTML = "<h2>¡Evento Iniciado!</h2>";
    }
}

// Función para compartir (Web Share API - Muy "phone friendly")
function shareEvent() {
    if (navigator.share) {
        navigator.share({
            title: 'Cuenta Atrás',
            text: '¡Mira cuánto falta para el evento!',
            url: window.location.href
        }).catch(console.error);
    } else {
        alert("Copiado al portapapeles");
    }
}

// Ejecutar cada segundo
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();