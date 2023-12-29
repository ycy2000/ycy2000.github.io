document.querySelector('#결과left').innerHTML=document.querySelector('#결과left모음_none #결과left_선사').outerHTML;//안에 내용만
// 링크이동시 실행될것 한번더
var 리스너_결과left와right=document.querySelector('#결과left와right');
var 리스너_head_button_group=document.querySelector('#head_button_group');
function 리스너_결과left와right클릭이벤트(e) {

}
function 리스너_head_button_group클릭이벤트(e) {
  console.log('리스너_head_button_group클릭이벤트(e)');
  //버튼에 색칠하고 해당버튼의 title을 id로가진 결과left모음_none안의 요소를 id=결과left 에 배치
  if (e.target.classList.contains('선사화주cy')) {
    for (var i=0; i<document.querySelectorAll('#head_button_group .선사화주cy').length; i++) {
      document.querySelectorAll('#head_button_group .선사화주cy')[i].classList.remove('active');
    }
    e.target.classList.add('active');
    타이틀=e.target.title;
    if (e.target.title=='') {타이틀='_'} //타이틀이 공백이면 #에서 에러난다.
    if (document.querySelector('#결과left모음_none #' + 타이틀)) {
      document.querySelector('#결과left').innerHTML=document.querySelector('#결과left모음_none #' + 타이틀).outerHTML;//안에 내용만
    }
  }
}

function 리스너_head_button_group_change이벤트(e) {
  //e
  console.log('change이벤트(e)');
  if (e.target.tagName=='TEXTAREA') {
    var 줄바꿈별문자열=document.querySelector('#dk').value.split('\n')
    console.log('줄바꿈별문자열.lnegth : ' + 줄바꿈별문자열.length)
    var 탭분리문자열;
    for (var i=0; i<줄바꿈별문자열.length; i++) {
      console.log('줄바꿈별문자열[' + i + '] : ' + 줄바꿈별문자열[i])
      탭분리문자열=줄바꿈별문자열[i].split('\t')
      console.log('탭분리문자열.lnegth : ' + 탭분리문자열.length)
      for (var 내부=0; 내부<탭분리문자열.length; 내부++ ) {
        console.log('탭분리문자열[' + 내부 + '] : ' + 탭분리문자열[내부])
      }
    }
  }

  console.log('줄바꿈별문자열.length : ' + 줄바꿈별문자열.length)

}
리스너_결과left와right.addEventListener('click', 리스너_결과left와right클릭이벤트);
리스너_head_button_group.addEventListener('click', 리스너_head_button_group클릭이벤트);
리스너_head_button_group.addEventListener('change', 리스너_head_button_group_change이벤트);


