import $ from 'jquery'
import './app4.css'

const $tar = $('#app4 .circle')
$tar.on('mouseenter', () => {
  $tar.addClass('active')
}).on('mouseleave', ()=>{
  $tar.removeClass('active')
})
