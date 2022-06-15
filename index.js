// Your code here
function moveDodgerLeft() {
  var dodger = document.getElementById('dodger')
  var left = dodger.style.left
  left = parseInt(left)
  dodger.style.left = left - 10 + 'px'
}
function moveDodgerRight() {
  var dodger = document.getElementById('dodger')
  var left = dodger.style.left
  left = parseInt(left)
  dodger.style.left = left + 10 + 'px'
}
