for (var i=0; i<document.querySelectorAll('.카테고리').length; i++) {
  document.querySelectorAll('.카테고리')[i].classList.remove('active');
  if(document.querySelectorAll('.카테고리')[i].title=='결과_리스트') {
    document.querySelectorAll('.카테고리')[i].classList.add('active')
  }
}
document.querySelector('#결과카피').innerHTML=document.querySelector('#결과_리스트').outerHTML;
document.querySelector('#결과카피').classList.remove('d-none');


var 리스너_head_button_group=document.querySelector('#head_button_group');
function 리스너_head_button_group클릭이벤트(e) {
  for (var i=0; i<document.querySelectorAll('.카테고리').length; i++) {
    document.querySelectorAll('.카테고리')[i].classList.remove('active');
  }
  if(e.target.classList.contains('카테고리')) {e.target.classList.add('active')}

  document.querySelector('#결과카피').innerHTML='';
  document.querySelector('#결과카피').classList.add('d-none');
  if (document.querySelector('#' + e.target.title)) {
    document.querySelector('#결과카피').innerHTML=document.querySelector('#' + e.target.title).outerHTML;
    document.querySelector('#결과카피').classList.remove('d-none');
  }



}


리스너_head_button_group.addEventListener('click', 리스너_head_button_group클릭이벤트);


