/**Theme Swith */
let swithPosition = true
document.querySelector('.theme-swith').addEventListener('click',() => {
    
    switch (swithPosition){
        case true:
            document.querySelector('body').style.backgroundColor = 'white'
            document.querySelector('.darkIcon').style.display = 'none'
            document.querySelector('.lightIcon').style.display = 'block'
            document.querySelector('.hours').className = 'hours hoursLight'
            document.querySelector('.min').className = 'min minLight'
            document.querySelector('.digitalClock').className = 'digitalClock'
            document.querySelector('.numDay').className = 'numDay'
            swithPosition = false
            break;
        
        case false:
            document.querySelector('body').style.backgroundColor = '#1f1f1f'
            document.querySelector('.darkIcon').style.display = 'block'
            document.querySelector('.lightIcon').style.display = 'none'            
            document.querySelector('.hours').className = 'hours hoursDark'
            document.querySelector('.min').className = 'min minDark'
            document.querySelector('.digitalClock').className = 'digitalClock digitalClockDark'
            document.querySelector('.numDay').className = 'numDay numDayDark'
            swithPosition = true
            break;
    }
})






/** Mantendo Passos */
let secStep = new Date().getSeconds() + 1
let minStep = new Date().getMinutes() + 1

/** Setando posição inicial */
setInicialPosition()
function setInicialPosition() {
    let time = new Date()
    let hours = document.querySelector('.hours')
    let min = document.querySelector('.min')
    let sec = document.querySelector('.sec')

    hours.style.transform = `rotate(${(time.getHours() - 12) * 30}deg) translateY(-45px)`
    min.style.transform = `rotate(${time.getMinutes() * 6}deg) translateY(-80px)`
    sec.style.transform = `rotate(${time.getSeconds() * 6}deg) translateY(-80px)`
}

setInterval(refreshPosition, 1000)
function refreshPosition() {
    let time = new Date()

    let sec = document.querySelector('.sec')
    sec.style.transform = `rotate(${secStep * 6}deg) translateY(-80px)`
    secStep++

    document.querySelector('.hours').style.transform = `rotate(${time.getHours() * 30}deg) translateY(-41px)`

    if (time.getSeconds() == 0) {
        document.querySelector('.min').style.transform = `rotate(${minStep * 6}deg) translateY(-81px)`
        minStep++
    }
}


setInterval(timer, 1000);
setInterval(setDay, 1000);
setInterval(setDate, 1000);


function timer() {
    const display = document.querySelector('h1')
    const date = new Date()
    const hours = ('00' + date.getHours()).slice(-2)
    const minutes = ('00' + date.getMinutes()).slice(-2)
    display.innerHTML = `${hours} : ${minutes}`
}

function setDate(){
    const dayMonth = document.querySelector('.semDay')

    dayMonth.innerHTML = `${getWeekday()}, ${getMonth()}`
}

function setDay() {
    let day = new Date().getDate()
    document.querySelector('.numDay').innerHTML = day
}

function getWeekday() {
    let dayWeek = new Date().getDay() - 1

    if (dayWeek == -1){
        dayWeek = 6
    }

    switch (dayWeek) {
        case 0:
            return 'SEGUNDA';
        case 1:
            return 'TERÇA'
        case 2:
            return 'QUARTA'
        case 3:
            return 'QUINTA'
        case 4:
            return 'SEXTA'
        case 5:
            return 'SÁBADO'
        case 6:
            return 'DOMINGO'
    }

    console.log(dayWeek);
}

function getMonth() {
    let dayWeek = new Date().getMonth() + 1

    switch (dayWeek) {
        case 1:
            return 'JAN'
        case 2:
            return 'FEV'
        case 3:
            return 'MAR'
        case 4:
            return 'ABR'
        case 5:
            return 'MAI'
        case 6:
            return 'JUN'
        case 7:
            return 'JUL'
        case 8:
            return 'AGO'
        case 9:
            return 'SET'
        case 10:
            return 'OUT'
        case 11:
            return 'NOV'
        case 12:
            return 'DEZ'
    }
}



