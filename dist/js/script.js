const nav = document.querySelector('.nav')
navBtn = document.querySelector('.nav__hamburgerbtn')
navCloseBtn  = document.querySelector('.nav__close')

window.addEventListener('scroll', function () {
  nav.classList.toggle('nav_active', window.scrollY > 10)
  document.querySelector('.nav__hamburgerbtn').classList.toggle('nav__hamburgerbtn_active', window.scrollY > 10)
})

navBtn.addEventListener('click', function () {
  const menu  = document.querySelector('.nav__hamburger')
  menu.style.right = `0px`
  document.body.style.overflow = 'hidden'
})
navCloseBtn.addEventListener('click', function () {
  const menu = document.querySelector('.nav__hamburger')
  menu.style.right = `-100%`
  document.body.style.overflow = 'unset'
  // document.
})

const countDownDate = new Date('July 2, 2021 16:16:16').getTime()

const countDownFn = setInterval(function () {
  const now = new Date().getTime()
  const distance = countDownDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // document.getElementById('timer').innerHTML =
  //   days + 'd' + hours + 'h' + minutes + 'm' + seconds + 's'
  document.getElementById('days').innerHTML = days + `<span>Дней</span>`
  document.getElementById('hours').innerHTML = hours + `<span>Часов</span>`
  document.getElementById('minutes').innerHTML = minutes + `<span>Минут</span>`
  document.getElementById('seconds').innerHTML = seconds + `<span>Секунд</span>`
  if( distance < 0 ) {
    clearInterval(countDownFn)
    document.getElementById('timer').innerHTML = 'time is out'
  }
}, 1000)