// const { get } = require("browser-sync")

// window.addEventListener('DOMContentLoaded', () => {

const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.nav__hamburgerbtn')
const navCloseBtn = document.querySelector('.nav__close')
const navLinks = document.querySelectorAll('.nav__link')
window.addEventListener('scroll', function () {
  nav.classList.toggle('nav_active', window.scrollY > 10)
  // if(window.scrollY > 10) {
  //   for (link of navLinks) {
  //     link.style.color = '#fff'
  //   }
  // }
  // // } else {
  // //   for (link of navLinks) {
  // //     link.style.color = '#000'
  // //   }
  // // }
  document.querySelector('.nav__hamburgerbtn').classList.toggle('nav__hamburgerbtn_active', window.scrollY > 10)
})

navBtn.addEventListener('click', function () {
  const menu = document.querySelector('.nav__hamburger')
  menu.style.right = `0px`
  document.body.style.overflow = 'hidden'
})
navCloseBtn.addEventListener('click', function () {
  const menu = document.querySelector('.nav__hamburger')
  menu.style.right = `-100%`
  document.body.style.overflow = 'unset'
  // document.
})

function getTime(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
    minutes = Math.floor(t / (1000 * 60) % 60),
    seconds = Math.floor((t / 1000) % 60)

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

function setZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`
  } else {
    return num
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timerInterval = setInterval(updateClock, 1000)

  function updateClock() {
    const t = getTime(endtime)

    days.innerHTML = setZero(t.days)
    hours.innerHTML = setZero(t.hours)
    minutes.innerHTML = setZero(t.minutes)
    seconds.innerHTML = setZero(t.seconds)

    if (t.total <= 0) {
      clearInterval(timerInterval)
    }
  }
}
setClock('#timer', '2021-09-09')
// })
// const countDownDate = new Date('July 2, 2021 16:16:16').getTime()

// const countDownFn = setInterval(function () {
//   const now = new Date().getTime()
//   const distance = countDownDate - now

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24))
//   const hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ))
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000)

//   // document.getElementById('timer').innerHTML =
//   //   days + 'd' + hours + 'h' + minutes + 'm' + seconds + 's'
//   document.getElementById('days').innerHTML = days + `<span>Дней</span>`
//   document.getElementById('hours').innerHTML = hours + `<span>Часов</span>`
//   document.getElementById('minutes').innerHTML = minutes + `<span>Минут</span>`
//   document.getElementById('seconds').innerHTML = seconds + `<span>Секунд</span>`
//   if( distance < 0 ) {
//     clearInterval(countDownFn)
//     document.getElementById('timer').innerHTML = 'time is out'
//   }
// }, 1000)