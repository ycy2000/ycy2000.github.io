function 연습() {
  
}
function 캔버스초기셑팅(e) {
  //onclicke(캔버스_초기셑팅(e)) 실행후, 캔버스는 부트스트랩에 의해서 열린다.
  //e.title 참고 : e.title을 id로 하는 '요소' 참고

  //   헤더에 캔버스 클릭시 기존캔버스와 같다면.... 아무것도 안한다. (헤더에 캔버스이름, 카테고리이름, 제목이름) 참고
  if (document.querySelector('#캔버스이름').innerHTML==e.title) {return;} //#없음

  document.querySelector('#js카테고리생성').innerHTML='' //초기화
  document.querySelector('#캔버스바디').innerHTML='' //초기화
  let 카테고리버튼넣을곳=document.querySelector('#js카테고리생성').innerHTML;

  // 1.요소 안에 .캔버스헤더_카테고리 돌면서 title의 문자열을 담고있는 button을 #js카테고리생성 안에 누적 생성
  let 카테고리들=document.querySelectorAll('#' + e.title + ' .캔버스헤더_카테고리추출');
  Array.from(카테고리들).forEach ( 카테고리 => {var 버튼생성=document.createElement('button');버튼생성.setAttribute('onclick','카테고리실행(this)');버튼생성.setAttribute('style','margin-right:-2px');
    버튼생성.setAttribute('title',카테고리.id);버튼생성.innerText=카테고리.id;document.querySelector('#js카테고리생성').appendChild(버튼생성);
  })
}
function 카테고리실행(e) {
  document.querySelector('#캔버스바디').innerHTML=document.querySelector('#' + e.innerText).outerHTML
}
function 연결div보기숨기기(e) {
  var 연결div=document.querySelector('#' + e.title);
  연결div.classList.toggle('d-none');
  if (연결div.classList.contains('d-none')) {e.innerHTML='보기'} else {e.innerHTML='숨기기'}
}
function 캔버스_카테고리_제목_clear() {
  document.querySelector('#캔버스이름').innerHTML='';
  document.querySelector('#카테고리이름').innerHTML='';
  document.querySelector('#제목이름').innerHTML='';
}
function 선택한캔버스_검색input_change시(e) {
  console.log('캔버스_검색value_change시');
  //추가 : 검색결과바탕색 클래스 TEXT만 남기기
  var 검색결과바탕색_클래스들 = document.querySelectorAll('.검색결과바탕색');
  for (var i=0; i<검색결과바탕색_클래스들.length; i++) {
    검색결과바탕색_클래스들[i].outerHTML=검색결과바탕색_클래스들[i].innerHTML;
  }
  //innerHTML로 검색한다. 메모도 검색해야하니까. 처음에만 두번표시한다?
  var 검색할문자 = document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value.toUpperCase(); 
  if (document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value == '') { return; }

  var 찾는값=document.querySelector('#canvas검색input').value; 
  var 정규식내부= new RegExp('(?![^<]*>)' + 찾는값, 'ig') // < >안 문자열은 제외

  //예전코드 대비 추가 1 : id(공백도 있으니 유의) 요소의 innerHTML에 검색문자 있을때 id 를 배열에 담기.
  var 검색결과포함id배열=[];
  // 해당 캔버스관련만 : var 검색할클래스들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none > [id]');

  //id의 innerHTML에 찾는값 있을때 '아이디추출', 내부 값 색칠
  var 검색할클래스들 = document.querySelectorAll('.모든검색 > [id]');
  console.log(선택한캔버스id + ', id있는것개수 : ' + 검색할클래스들.length)  
  for (var i = 0; i < 검색할클래스들.length; i++) {
    if (검색할클래스들[i].id!='' && 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      검색결과포함id배열.push(검색할클래스들[i].id);
      if (검색할문자!=' ') {
        검색할클래스들[i].innerHTML=
        검색할클래스들[i].innerHTML.replace(정규식내부, '<span class="검색결과바탕색">' + 찾는값 + '</span>');
      }
    }
  }
  // title의 innerHTML에 찾는값 있을때 타이틀을 '검색결과포함id배열[]에 추가 내부 값 색칠
  var 검색할클래스들 = document.querySelectorAll('.모든검색 .개별카테고리 [title]');
  for (var i = 0; i < 검색할클래스들.length; i++) {
    if (검색할클래스들[i].title!='' && 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      검색결과포함id배열.push(검색할클래스들[i].title);
      if (검색할문자!=' ') {
        검색할클래스들[i].innerHTML=
        검색할클래스들[i].innerHTML.replace(정규식내부, '<span class="검색결과바탕색">' + 찾는값 + '</span>');
      }
    }
  }
  //검색결과포함id배열[] 고유값 추출 var uniqueArray = [...new Set(myArray)]
  검색결과포함id배열=[...new Set(검색결과포함id배열)];









  // 해당 캔버스관련만 : var 검색할클래스들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none .개별카테고리 > div > h6');
  var 검색할클래스들 = document.querySelectorAll('.모든검색 .개별카테고리 [title]');
  var 내부html = '';
  for (var i = 0; i < 검색할클래스들.length; i++) {
  //예전코드 대비 추가 2 : if 조건 조정, 검색할클래스들의 title이 검색결과포함id배열 에 있으면 추가하는 코드는 먼저 진행하도록 한다  
    if (검색결과포함id배열.includes(검색할클래스들[i].title)) {
      내부html += 검색할클래스들[i].outerHTML;
    }  
  }
  if (내부html == '') { alert('없음'); return; }
  document.querySelector('#' + 선택한캔버스id + ' .캔버스바디').innerHTML = 내부html;
  document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value = 검색할문자;
}
var 리스너_바디=document.querySelector('body');
function 리스너_바디_click(e) {
  if (e.target.classList.contains('h6의ID찾기') && document.querySelector('#' + e.target.title)) {
    //console.log('1.h6의ID찾기 클래스있고, 2.타이틀을 id로 가진요소가 있다')
    document.querySelector('#전체대체').innerHTML=document.querySelector('#' + e.target.title).outerHTML;
    var 원본=document.querySelectorAll('[title="' + e.target.title + '"]')[document.querySelectorAll('[title="' + e.target.title + '"]').length-1] ;
    document.querySelector('#캔버스이름').innerHTML=원본.parentElement.parentElement.parentElement.id;
    document.querySelector('#카테고리이름').innerHTML=원본.parentElement.parentElement.id;
    document.querySelector('#제목이름').innerHTML=e.target.innerHTML;
  }
}
리스너_바디.addEventListener('click',리스너_바디_click);