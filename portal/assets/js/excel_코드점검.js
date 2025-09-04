let 전체변수h6title='';
//코드정리작업 메모
//1. 캔버스는 하나면 된다. 캔버스바디에 들어갈 div넣을때 필요한 버튼만 생성하면 된다.
//2. 이벤트리스너에 연결된 함수에는 웬만하면 기능을 넣지 말자.


//-----코드정리작업 모메 끝
function 연습() {
  캔버스_개별카테고리_h6의title과id순서()
}

function 특정id편집() {
  전체변수h6title ='설명_image폴더의자료사용현황' //원래는 h6의 title이다.
  전체대체에셑팅();
}
function 검색input결과초기화() {
  console.log('검색input결과초기화()');
  var 검색결과바탕색_클래스들 = document.querySelectorAll('.검색결과바탕색');
  for (var i=0; i<검색결과바탕색_클래스들.length; i++) {
    검색결과바탕색_클래스들[i].outerHTML=검색결과바탕색_클래스들[i].innerHTML;
  }
}
function 선택한캔버스_검색input_change시(e) {
  console.log('캔버스_검색value_change시');
  //추가 : 검색결과바탕색 클래스 TEXT만 남기기
  var 검색결과바탕색_클래스들 = document.querySelectorAll('.검색결과바탕색');
  for (var i=0; i<검색결과바탕색_클래스들.length; i++) {
    검색결과바탕색_클래스들[i].outerHTML=검색결과바탕색_클래스들[i].innerHTML;
  }
  //innerHTML로 검색한다. 메모도 검색해야하니까. 처음에만 두번표시한다?
  var 검색할문자 = document.querySelector('#canvas검색input').value.toUpperCase(); 
  if (document.querySelector('#canvas검색input').value == '') { return; }

  var 찾는값=document.querySelector('#canvas검색input').value; 
  var 정규식내부= new RegExp('(?![^<]*>)' + 찾는값, 'ig')

  //예전코드 대비 추가 1 : id(공백도 있으니 유의) 요소의 innerHTML에 검색문자 있을때 id 를 배열에 담기.
  var 검색결과포함id배열=[];
  //id의 innerHTML에 찾는값 있을때 '아이디추출', 내부 값 색칠
  var 검색할클래스들 = document.querySelectorAll('.모든id모음위치자유 > [id]');
  console.log('id있는것개수 : ' + 검색할클래스들.length)  
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
  var 검색할클래스들 = document.querySelectorAll('.개별카테고리 > div > [title]');
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
  var 검색할클래스들 = document.querySelectorAll('.개별카테고리 > div > [title]');
  var 내부html = '';
  for (var i = 0; i < 검색할클래스들.length; i++) {
  //예전코드 대비 추가 2 : if 조건 조정, 검색할클래스들의 title이 검색결과포함id배열 에 있으면 추가하는 코드는 먼저 진행하도록 한다  
    if (검색결과포함id배열.includes(검색할클래스들[i].title)) {
      내부html += 검색할클래스들[i].outerHTML;
    }  
  }
  if (내부html == '') { alert('없음'); return; }
  document.querySelector('#검색결과누적js').innerHTML = 내부html;
  document.querySelector('#캔버스바디').innerHTML = document.querySelector('#검색결과js').outerHTML;
  document.querySelector('#canvas검색input').value = 검색할문자;
}
function 보숨토글(e) {
  let 요소=document.querySelector('#' + e.title);
  요소.classList.toggle('d-none'); // 보기, 숨기기 외 글자이면 건드리지 않는다.
  if (!['보기','숨기기'].includes(e.innerHTML)) {} else {if (요소.classList.contains('d-none')) {e.innerHTML='보기'} else {e.innerHTML='숨기기'}}
}
var 리스너_바디=document.querySelector('body');
function 캔버스_연결버튼_클릭(e) {
  //#대표캔버스 열리기전에 작동한다. 1.e.title:'캔버스'이름, 2.
  if (document.querySelector('#현재캔버스이름').innerHTML==e.title) {console.log('reutrn;');return;}
  document.querySelector('#현재캔버스이름').innerHTML=e.title;
  document.querySelector('#js카테고리생성').innerHTML='';
  var 카테고리들=document.querySelectorAll('#' + e.title + ' .개별카테고리'); if(카테고리들.length==0) {return;}
  
  Array.from(카테고리들).forEach ( (요소,index) => {
    var 버튼생성=document.createElement('button');
    버튼생성.setAttribute('onclick','카테고리배치(this)')
    버튼생성.innerText=요소.id;
    document.querySelector('#js카테고리생성').appendChild(버튼생성);
    if (index==0) {     
      document.querySelector('#캔버스바디').innerHTML=document.querySelector('#' + 요소.id).outerHTML;
      버튼생성.setAttribute('class','선택카테고리');
    }
  });
}
function 카테고리배치(e) {
  console.log('카테고리배치(e)')
  document.querySelector('.선택카테고리').classList.remove('선택카테고리');
  e.setAttribute('class','선택카테고리');
  document.querySelector('#캔버스바디').innerHTML=document.querySelector('#' + e.innerHTML).outerHTML
}
function 전체대체에셑팅() {
  //캔버스바디의 h5을 클릭했을때와 같이, + header부분 캔버스, id, 제목 넣는것을 같이 구현해보자.
  //1. 카테고리 안의 h6을 클릭할때 title이 가지고올 요소의 id 이고, 카테고리 복사본이 캔버스바디에 들어있는 경우를 고려하면
  //   모든 title을 찾은후 마지막요소를 선택하면 원본의 위치이다.
  //2. 캔버스이름은 1.의 위치에서 부모의 부모의 id 이다.
  //3. id 는 title이다, 제목은 title을 가진 요소의 innerHTML이다
  var 아이디=전체변수h6title.trim(); 
  if (아이디.length==0) {console.log('아이디.length==0'); return;}
  if (!document.querySelector('#' + 아이디)) {console.log('해당title을 id로 갖는 요소가 없음(null'); return;}
  var title요소들마지막=document.querySelectorAll('[title="' + 아이디 +'"]');
  title요소들마지막=title요소들마지막[title요소들마지막.length-1];
  document.querySelector('#전체대체').innerHTML=document.querySelector('#' + 아이디).outerHTML;
  document.querySelector('#캔버스이름').innerHTML=title요소들마지막.parentElement.parentElement.parentElement.id;
  document.querySelector('#캔버스이름').title='개별카테고리 id : ' + title요소들마지막.parentElement.parentElement.id; //개별카테고리 id
  document.querySelector('#선택문서id').innerHTML=title요소들마지막.title;
  document.querySelector('#선택문서제목').innerHTML=title요소들마지막.innerHTML;
}
function 리스너_바디_click(e) {
  //캔버스바디 안의 h6 클릭시 : title을 id로 갖는 요소가 있을때 전체대체에 가져옴 (조건 : )
  if (e.target.parentElement.parentElement.classList.contains('개별카테고리')) {
    console.log('리스너_바디_click(e) : 전체변수h6title = ' + e.target.title);
    전체변수h6title=e.target.title;
    전체대체에셑팅();
  }
}
리스너_바디.addEventListener('click',리스너_바디_click)
