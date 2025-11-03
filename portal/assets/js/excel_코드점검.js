let 전체변수h6title='';
function 특정id편집() {
  전체변수h6title ='JS이벤트리스너2' //원래는 h6의 title이다.
  전체대체에셑팅();
}
function 연습() {
  let 좌표예제=document.querySelector('#좌표예제');
  console.log(좌표예제.clientHeight);
  console.log(좌표예제.clientLeft);
  console.log(좌표예제.clientTop);
  console.log(좌표예제.clientWidth);

}
function 전체대체에셑팅() {
  //1.전체대체에 id를 셑팅하는 동작
  var 아이디=전체변수h6title.trim(); 
  if (아이디.length==0) {console.log('아이디.length==0'); return;}
  if (!document.querySelector('#' + 아이디)) {console.log('해당 id 요소가 없음(null'); return;}
  document.querySelector('#전체대체').innerHTML=document.querySelector('#' + 아이디).outerHTML;

  //2.id를 title로 갖는것이 있는지 확인(캔버스에서 title이 있는[id와 연결된 title]이 있는 h6 클릭시)
  var title요소들마지막=document.querySelectorAll('[title="' + 아이디 +'"]');
  if (title요소들마지막.length==0) {console.log('해당title을 id로 갖는 요소가 없음. \n캔버스,ID,제목 관련 건너뜀'); return;}

  //3.있다면 캔버스 :    5번째가 BODY(4번째까지 올라갈때까지 body가 나오면 종료), 캔버스안의 h6이면 5번째 부모에서 BODY태그 만난다.
  title요소들마지막=title요소들마지막[title요소들마지막.length-1]; // 마지막꺼에서 캔버스 클래스에서 id를 추출할 수 있다. 캔버스 안에 들어가면 이 부분이 없다
  var 부모요소=title요소들마지막.parentElement;
  for (var i=0; i<4; i++) {if(부모요소.tagName=='BODY') {console.log('BODY');return;};부모요소=부모요소.parentElement;}

  //캔버스 안에서 h6클릭했을때 header에 캔버스이름, id, 제목 넣는 경우
  //3단계위 부모: class=캔버스, 4단계위 부모:id=캔버스바디
  document.querySelector('#캔버스이름').innerHTML=title요소들마지막.parentElement.parentElement.parentElement.id;
  document.querySelector('#캔버스이름').title='개별카테고리 id : ' + title요소들마지막.parentElement.parentElement.id; //개별카테고리 id
  document.querySelector('#선택문서id').innerHTML=title요소들마지막.title;
  document.querySelector('#선택문서제목').innerHTML=title요소들마지막.innerHTML;
}
function 검색input결과초기화() {
  console.log('검색input결과초기화()');
  var 검색결과바탕색_클래스들 = document.querySelectorAll('.검색결과바탕색');
  for (var i=0; i<검색결과바탕색_클래스들.length; i++) {
    검색결과바탕색_클래스들[i].outerHTML=검색결과바탕색_클래스들[i].innerHTML;
  }
  document.querySelector('#canvas검색input').value='';
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
  document.querySelector('#캔버스바디').innerHTML='';

  var 찾는값=document.querySelector('#canvas검색input').value; 
  var 정규식내부= new RegExp('(?![^<]*>)' + 찾는값, 'ig')

  //예전코드 대비 추가 1 : id(공백도 있으니 유의) 요소의 innerHTML에 검색문자 있을때 id 를 배열에 담기.
  var 검색결과포함id배열=[];
  //id의 innerHTML에 찾는값 있을때 '아이디추출', 내부 값 색칠
  var 검색할클래스들 = document.querySelectorAll('.모든id모음 > div > [id]');
  console.log('id있는것개수 : ' + 검색할클래스들.length)  
  for (var i = 0; i < 검색할클래스들.length; i++) {
    if (검색할클래스들[i].id!='' && 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      검색결과포함id배열.push(검색할클래스들[i].id);
      if (검색할문자!=' ') {
        검색할클래스들[i].innerHTML = 검색할클래스들[i].innerHTML.replace(new RegExp(`(?![^<]*>)${검색할문자}`, 'ig'),m => `<span class="검색결과바탕색">${m}</span>`);
        //검색할클래스들[i].innerHTML= 검색할클래스들[i].innerHTML.replace(정규식내부, '<span class="검색결과바탕색">' + 찾는값 + '</span>');
        //m은 찾은 텍스트(대소문자 포함) 그대로 들어옵니다. 이렇게 하면 하이라이트가 원래 입력된 대소문자 형태를 유지합니다.
      }
    }
  }
  // title의 innerHTML에 찾는값 있을때 타이틀을 '검색결과포함id배열[]에 추가 내부 값 색칠
  var 검색할클래스들 = document.querySelectorAll('.개별카테고리 > div > [title]');
  for (var i = 0; i < 검색할클래스들.length; i++) {
    if (검색할클래스들[i].title!='' && 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      검색결과포함id배열.push(검색할클래스들[i].title);
      if (검색할문자!=' ') {
        검색할클래스들[i].innerHTML = 검색할클래스들[i].innerHTML.replace(new RegExp(`(?![^<]*>)${검색할문자}`, 'ig'),m => `<span class="검색결과바탕색">${m}</span>`);
        //검색할클래스들[i].innerHTML= 검색할클래스들[i].innerHTML.replace(정규식내부, '<span class="검색결과바탕색">' + 찾는값 + '</span>');
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

  //부모의 부모 class=개별카테고리 형식 맞춤
  document.querySelector('#캔버스바디').innerHTML = '<div class="개별카테고리"><div>' + 내부html + '</div></div>';
  document.querySelector('#canvas검색input').value = 검색할문자;
}
function 보숨토글(e) {
  let 요소=document.querySelector('#' + e.title);
  요소.classList.toggle('d-none'); // 보기, 숨기기 외 글자이면 건드리지 않는다.
  if (!['보기','숨기기'].includes(e.innerHTML)) {} else {if (요소.classList.contains('d-none')) {e.innerHTML='보기'} else {e.innerHTML='숨기기'}}
}

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

var 리스너_바디=document.querySelector('body');
function 리스너_바디_click(e) {

  var 부모요소=e.target; //자신이 body일수 있으므로 자신부터 확인함 4 => 5
  var 부모태그확인=true;
  for (var i=0; i<5; i++) {if(부모요소.tagName=='BODY') {//console.log('0~4까지확인 i=' + i + ', BODY');
    부모태그확인=false;break;};부모요소=부모요소.parentElement;}
  //캔버스바디 안의 h6 클릭시 : title을 id로 갖는 요소가 있을때 전체대체에 가져옴 (위치조건 : 부모태그확인[에러만 방지 100%위치 확인 안됨 ex)더 안쪽의 요소일때])
  if (부모태그확인 && e.target.parentElement.parentElement.classList.contains('개별카테고리')) {

    전체변수h6title=e.target.title;
    전체대체에셑팅();
    if (전체변수h6title=='JS이벤트리스너2') {document.querySelector('#요소마우스드래그').addEventListener('mousedown',요소mousedown);}
  }
}
리스너_바디.addEventListener('click',리스너_바디_click);




