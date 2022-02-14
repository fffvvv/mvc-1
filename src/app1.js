import './app1.css'
import $ from 'jquery'

const $btn1 = $(window.add1)
const $btn2 = $(window.minus1)
const $btn3 = $(window.cheng1)
const $btn4 = $(window.chu1)
const app1Result = $(window.app1Result)
const n = localStorage.getItem('n')
app1Result.text(n || 100)

$btn1.on('click', () => {
  let n = parseInt(app1Result.text())
  n += 1
  localStorage.setItem('n', n)
  app1Result.text(n)
})
$btn2.on('click', () => {
  let n = parseInt(app1Result.text())
  n = n - 1
  localStorage.setItem('n', n)
  app1Result.text(n)
})
$btn3.on('click', () => {
  let n = parseInt(app1Result.text())
  n = n * 2
  localStorage.setItem('n', n)
  app1Result.text(n)
})
$btn4.on('click', () => {
  let n = parseInt(app1Result.text())
  n = n/2
  localStorage.setItem('n', n)
  app1Result.text(n)
})
