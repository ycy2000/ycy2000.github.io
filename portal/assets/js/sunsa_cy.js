// 링크이동시 실행될것 한번더
var 리스너_head_button_group=document.querySelector('#head_button_group');
var 리스너_main=document.querySelector('#리스너main');
function 리스너_head_button_group클릭이벤트(e) {
  console.log('리스너_클릭이벤트(e)');
  //
  if (e.target.parentNode.id=='head_button_group' && e.target.tagName=='BUTTON') {
    for (var i=0; i<document.querySelectorAll('#head_button_group button').length; i++) {
      document.querySelectorAll('#head_button_group button')[i].classList.remove('header_선택색상');
    }
    e.target.classList.add('header_선택색상');
  }
}
function 리스너_main클릭이벤트() {
  
}


리스너_head_button_group.addEventListener('click', 리스너_head_button_group클릭이벤트);
리스너_main.addEventListener('click', 리스너_main클릭이벤트);

