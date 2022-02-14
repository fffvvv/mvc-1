import $ from 'jquery'
import './app3.css'

const $square = $('#app3 .square')
$square.on('mouseover', () => {
  $square.toggleClass('active')
})
