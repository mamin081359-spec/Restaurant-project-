
function change(){
   let dor = document.getElementById('door')
   let win = document.getElementById('wind')
   let brea = document.getElementById('break')
   dor.style.display="flex"
   setTimeout(function(){
      brea.style.display="none"
      win.style.display="none"}, 1000)
}
function chang(){
   let dor = document.getElementById('door')
   let break_fas = document.getElementById('break')
   let win = document.getElementById('wind')
   setTimeout(function(){
      break_fas.style.display="none"
      win.style.display="flex"
      dor.style.display="none"}, 1000)
}
function chang_break(){
   let dor = document.getElementById('door')
   let win = document.getElementById('wind')
   let break_fas = document.getElementById('break')
   
   setTimeout(function(){
      break_fas.style.display="flex"
      win.style.display="none"
      dor.style.display="none"}, 1000)
}

