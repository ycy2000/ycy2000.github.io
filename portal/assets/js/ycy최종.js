check_초기설정();
회차select옵션생성();




function 연습() {
  var 문자열=document.querySelector('#당번숨김_안에_저장중').innerHTML;
  문자열=문자열 + document.querySelector('#당번숨김_안에_기록중').innerHTML;
  문자열=문자열.split('_');
  var 결과문자열='';
  for (var i=0; i<문자열.length; i++) {
    if ((i+1)%9==0) {결과문자열+=문자열[i].trim()+',';} else {결과문자열+=문자열[i].trim()+'_';}
    if ((i+1)%45==0) {결과문자열+='\n'}
  }
  document.querySelector('#메모').innerHTML=결과문자열;
}
function 색칠_1_동작설정() {
}
function 색칠_2_설정대로색칠동작() {
}

function html구조생성() {
}
function 회차change설정(e) {
  console.log(e.id)
  //당번회차change와 분석자료회차change 한개의 함수로 작성

}
function 회차select옵션생성() {
  let arr = ($('#당번숨김_안에_저장중').html() + $('#당번숨김_안에_기록중').html()).split(','); arr.pop(); //마지막 배열값 제거(빈거)
  let 옵션 = '';
  for (let i = arr.length - 1; i >= 0; i--) 옵션 += `<option>${arr[i].split('_')[0]}</option>`;  
  $('#당번_회차select, #분석자료_회차select').html(옵션);
}
function 체크this활용(e) {
  const $input = $(e).children('input');  const id = '#'+$input.attr('id').slice(6);  $(id).toggleClass('d-none', !$input.prop('checked'));
}
function check_초기설정() {
  $('.check클래스').each( function() {$(this).next('label').attr('for', this.id); if (this.checked) $('#' + this.id.slice(6)).removeClass('d-none');}  )
}