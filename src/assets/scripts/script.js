const countDownDate = new Date(' Jan, 29, 2026 18:00:00' ).getTime()
const x = setInterval(function() {
    const now = new Date().getTime()
    const distance = countDownDate - now

    // Cuando acabe el contador las acciones que a tomar
    if( distance < 0 ) {
        // Detenemos la cuenta atrás
        clearInterval(x);
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            // Cambiamos la cuenta atrás por un texto
            countdownElement.innerHTML = '<div class="text-center text-neutral-content"><p class="text-2xl font-bold">¡El directo ha comenzado!</p><p>Gracias por seguir el proyecto. Ya puedes unirte para aprender Astro y apoyar la increíble labor de KMAKUS.</p></div>';
        }
        return;
    }

    // Calculamos el tiempo que falta para llegar a la fecha
    const days = Math.floor( distance/( 1000*60*60*24 ))
    const hours = Math.floor( (distance % (1000*60*60*24)) / (1000*60*60))
    const minuts = Math.floor( (distance%(1000*60*60)) / (1000*60))
    const seconds = Math.floor( (distance%(1000*60)) / 1000)

    // Lo mantenemos visible el cajón de días
    const containerDays = document.getElementById('container-days');
    if( containerDays ){
        if( days > 0 ){
            containerDays.classList.remove('hidden');
            containerDays.classList.add('flex');
            document.getElementById('days').innerText = days;
        } else {
            // Lo ocultamos al lllegar a 0
            containerDays.classList.add('hidden');
            containerDays.classList.remove('flex');
        }
    }

    // Update time elements
    document.getElementById('hours').innerText = String(hours).padStart(2, '0')
    document.getElementById('minuts').innerText = String(minuts).padStart(2, '0')
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0')
}, 1000)