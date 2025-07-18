check_초기설정();

function 색칠_1_동작설정() {
}
function 색칠_2_설정대로색칠동작() {
}
function 옵션생성() {
}
function html구조생성() {
}
function 회차change설정() {
  //당번회차change와 분석자료회차change 한개의 함수로 작성

}
function check_초기설정() {
  //머리글(분류) + 분류 안에 소분류 : class="check클래스"가진 input의 title이 '분류', '소분류'의 id이다. d-none이 있는상태 (퍼덕거리는거 보기싫어서)
  //체크this활용(e) 관련하여 : 인풋의 오른쪽형제인 lable에 'input의 id와 같은' for 생성, checked가 아닌경우 check_ 이후의 문자열(id) 요소에 d-none add
  var check클래스=document.querySelectorAll('.check클래스');
  for (var i=0; i<check클래스.length; i++) {check클래스[i].nextElementSibling.setAttribute('for',check클래스[i].id)}
  for (var i=0; i<check클래스.length; i++) {if(check클래스[i].checked) {
    document.querySelector('#' + check클래스[i].id.substring(6,check클래스[i].length)).classList.remove('d-none')}
  }  
}
function 체크this활용(e) {
  //머리글(분류) + 분류 안에 소분류 : div에 걸었어도, 안의 input lable체크시 작동함. 보기/숨기기할 id는 input의 id에서 check_ 오른쪽 문자열
  var 보기숨기기id='#' + e.children[0].id.substring(6,e.children[0].id.length); //  console.log('보기숨기기id : ' + 보기숨기기id)
  if (e.children[0].checked) {document.querySelector(보기숨기기id).classList.remove('d-none');console.log('checked')} else {console.log('checked false');document.querySelector(보기숨기기id).classList.add('d-none')}
}