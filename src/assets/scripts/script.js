const countDownDate = new Date(' Jun, 29, 2026 18:00:00' ).getTime()
const x = setInterval(function() {
    const now = new Date().getTime()
    const distance = countDownDate - now

    const days = Math.floor( distance/( 1000*60*60*24 ))
    console.log(typeof(days));
    const hours = Math.floor( (distance % (1000*60*60*24)) / (1000*60*60))
    const minuts = Math.floor( (distance%(1000*60*60)) / (1000*60))
    const seconds = Math.floor( (distance%(1000*60)) / 1000)

    document.getElementById('days').innerText = days
    document.getElementById('hours').innerText = String(hours).padStart(2, '0')
    document.getElementById('minuts').innerText = String(minuts).padStart(2, '0')
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0')
},1000)