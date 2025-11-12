let 전체변수h6title='';
function 특정id편집() {
  전체변수h6title ='점검결과_20251112' //원래는 h6의 title이다.
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
  //우원전용
  if (e.target.title=='라벨_우원품명') {
    우원풀기();
    전체대체마진top조정();
  }
}
리스너_바디.addEventListener('click',리스너_바디_click);
function 전체대체마진top조정() {
  // getComputedStyle(document.querySelector('header')).height : 한줄은 44px
  var header한줄높이=Number(44);
  var header현재높이= Number(getComputedStyle(document.querySelector('header')).height.substring(0,getComputedStyle(document.querySelector('header')).height.length-2));
  document.querySelector('#전체대체').style.marginTop=(header현재높이-header한줄높이) + 'px';
}
function 우원풀기() {
  console.log('우원풀기()')
  var 원본텍스트 = document.querySelector('#우원원본').innerHTML;
  var 원본_줄바꿈split = 원본텍스트.split('\n');
  document.querySelector('#우원원본풀기js').innerHTML='';
  var 우원원본풀기js = document.querySelector('#우원원본풀기js');
  var 머리글='<table><tbody><tr><td>품명</td><td>규격</td><td>표시</td><td>kg</td></tr></tbody></table>';

  var 자료풀림결과 = '';
  for (var i = 2; i < 34; i++) {
    var div안span4 = '';
    div안span4 = '<td>' + 원본_줄바꿈split[i].split('\t')[0] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[3] + '</td>'
    //div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[25] + '</td>' //시간) : 엑셀에 넣으면 시간이 지워지니 표시안함
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    자료풀림결과+=div안span4;
  }
  자료풀림결과='<div>' + 머리글 + 자료풀림결과 + '</div>'
  우원원본풀기js.innerHTML=우원원본풀기js.innerHTML+자료풀림결과;

  var 자료풀림결과 = '';
  for (var i = 34; i < 65; i++) {
    var div안span4 = '';
    if (i==42) {
    div안span4 = '<td>빅버터플라이 <br>브레디드 쉬림프</td>'
    } else {
    div안span4 = '<td>' + 원본_줄바꿈split[i].split('\t')[0] + '</td>'
    }
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[3] + '</td>'
    //div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[25] + '</td>' //시간) : 엑셀에 넣으면 시간이 지워지니 표시안함
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    자료풀림결과+=div안span4;
  }
  자료풀림결과='<div>' + 머리글 + 자료풀림결과 + '</div>'
  우원원본풀기js.innerHTML=우원원본풀기js.innerHTML+자료풀림결과;

  var 자료풀림결과 = '';
  for (var i = 65; i < 97; i++) {
    var div안span4 = '';
    div안span4 = '<td>' + 원본_줄바꿈split[i].split('\t')[0] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[3] + '</td>'
    //div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[25] + '</td>' //시간) : 엑셀에 넣으면 시간이 지워지니 표시안함
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    자료풀림결과+=div안span4;
  }
  자료풀림결과='<div>' + 머리글 + 자료풀림결과 + '</div>'
  우원원본풀기js.innerHTML=우원원본풀기js.innerHTML+자료풀림결과;

  var 자료풀림결과 = '';
  for (var i = 97; i < 129; i++) {
    var div안span4 = '';
    div안span4 = '<td>' + 원본_줄바꿈split[i].split('\t')[0] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[3] + '</td>'
    //div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[25] + '</td>' //시간) : 엑셀에 넣으면 시간이 지워지니 표시안함
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    자료풀림결과+=div안span4;
  }
  자료풀림결과='<div>' + 머리글 + 자료풀림결과 + '</div>'
  우원원본풀기js.innerHTML=우원원본풀기js.innerHTML+자료풀림결과;

  var 자료풀림결과 = '';
  for (var i = 129; i < 원본_줄바꿈split.length - 1; i++) {
    var div안span4 = '';
    if (i==134) {
    div안span4 = '<td>코코넛 버터플라이 <br>브레디드 쉬림프</td>'}  else if(i==147) {
    div안span4 = '<td>탈각새우 <br>(아르헨티나 붉은새우)</td>'
    }
    else {
    div안span4 = '<td>' + 원본_줄바꿈split[i].split('\t')[0] + '</td>'
    }
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[3] + '</td>'
    //div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[25] + '</td>' //시간) : 엑셀에 넣으면 시간이 지워지니 표시안함
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    자료풀림결과+=div안span4;
  }
  자료풀림결과='<div>' + 머리글 + 자료풀림결과 + '</div>'
  우원원본풀기js.innerHTML=우원원본풀기js.innerHTML+자료풀림결과;
  return;
  for (var i = 1; i < 원본_줄바꿈split.length - 1; i++) {
  }

}
function textarea정보에서html파일이름추출() {
  if (document.querySelector('#전체대체 #js파일리스트기록').children.length<2) {alert('image폴더클릭_파일사용현황파악() 실행 후 사용할 것'); return;}
  var 모든파일webkitRelativePath=Array.from(document.querySelectorAll('#js파일리스트기록 > div:not(:first-child)'));
  모든파일webkitRelativePath=모든파일webkitRelativePath.map( value => value=value.children[1].innerHTML + value.children[2].innerHTML)
  // Path문자열형식 : portal/images/문서연결_엑셀VBA/API_Key_발급방법.png <> src="Path문자열"
  //이미 기록된것은 건너뛰도록한다
  var 파악된html리스트=document.querySelector('#파악된html리스트').innerHTML.split(',');
  var 리스트정보div들=document.querySelectorAll('#전체대체 #js파일리스트기록 > div');


  //정규식 (HTML 태그 안의 src 속성만, 내부 경로만)
  //<[^>]+src="([^"]+)"[^>]*>/ig
  //<[^>]+ → 여는 태그 시작 (<img, <script, <iframe 등)
  //src="([^"]+)" → src="...내용..." 에서 내용만 캡처
  //[^>]*> → 태그 끝날 때까지
  //  match 결과는 value 그대로 사용하면 되고
  //  matchAll : 결과가 2가지 정보를 가진 배열이다 다른 여러 정보도 있다: [0]match결과 <img src="경로">, [1]macthall결과 경로 
  var html파일이름=document.querySelector('#html파일이름').innerText;   
  if (파악된html리스트.indexOf(html파일이름)==-1) {

    var 미사용누적 = document.querySelector('#결과표_현재html_미사용src'); 미사용누적.innerHTML='';
    var 검색할text = document.querySelector('body').innerHTML;

    var 카운트정보요소=document.querySelector('#전체대체 #결과표_현재html .결과');
    // HTML 태그 안의 src 속성만 추출 (내부 경로만)
    //var 찾은src들 = [...검색할text.matchAll(/<[^>]+src="([^"]+)"[^>]*>/ig)]; //사이에 1글자 이상이어야 가져옴
    var 찾은src들 = [...검색할text.matchAll(/<[^>]+src="([^"]*)"[^>]*>/ig)]; //사이에 공백이어도 가져옴
    
    //console.log('찾은src들[0] : ' + 찾은src들[0]) 0,1이 같다. 하나민 두번나오는 이유?
    //console.log('찾은src들[1] : ' + 찾은src들[1])
    //console.log('찾은src들[2] : ' + 찾은src들[2])
    //console.log('찾은src들[2] : ' + 찾은src들[3])

    //var 찾은src들 = [...검색할text.match(/<*[^>]+src="([^"]+)"[^>]*>/ig)];
    var 사용src=0, 공백src=0, 미사용src=0;
    if (찾은src들) { // 있으면, 1.모든파일webkitRelativePath 에 있을때 : html이름표시, 2.없을때 : 미사용누적 에 누적
      찾은src들.forEach ( (value,index,arr) => {
        //value[0] : <img src=\"portal/images/문서연결_엑셀VBA/파일리스트설명.png\" alt=\"이미지없음\">
        //value[1] : portal/images/문서연결_엑셀VBA/파일리스트설명.png
        if (value[1].length==0) {공백src+=1;}
        else { // 경로가 있을때
          if (index==0) {
           //console.log('찾은src들[0] : ' + 찾은src들[0]) 0,1이 같다. 하나민 두번나오는 이유?
          } else {
            if (모든파일webkitRelativePath.indexOf(value[1]) !== -1) {
              사용src+=1;
              var index플러스1=모든파일webkitRelativePath.indexOf(value[1])+1;
              console.log('index : ' + index + ', path : ' + value[1] + ', ' + 리스트정보div들[index플러스1].children[0].innerHTML)
              if (리스트정보div들[index플러스1].children[0].innerHTML=='_') {
                리스트정보div들[index플러스1].children[0].innerHTML=html파일이름;
              } else {
                리스트정보div들[index플러스1].children[0].innerHTML+='<br>' + html파일이름;
              }
              리스트정보div들[index플러스1].children[0].classList.add('src있음');
            } else {
              미사용src+=1;
              var div = document.createElement('div');
              div.innerText=value[1];
              미사용누적.appendChild(div);
            }
          }

        }
      }); //찾은src들.forEach
    }
    카운트정보요소.children[2].innerHTML=html파일이름; //html 파일이름
    카운트정보요소.children[3].innerHTML=찾은src들.length-1-공백src; //값있는src개수
    카운트정보요소.children[4].innerHTML=사용src; //사용중개수
    카운트정보요소.children[5].innerHTML=미사용src; //미사용개수
    카운트정보요소.children[6].innerHTML=공백src; //src=""
    document.querySelector('#파악된html리스트').innerHTML+=',' + html파일이름;
  }

  //textarea 정보 관련
  var textarea관련=document.querySelectorAll('#전체대체 .textarea결과만');
  var 미사용누적id=['결과표_textarea1_미사용src','결과표_textarea2_미사용src','결과표_textarea3_미사용src','결과표_textarea4_미사용src','결과표_textarea5_미사용src'];
  var 카운트정보요소id=['#전체대체 #결과표_textarea1 .결과','#전체대체 #결과표_textarea2 .결과','#전체대체 #결과표_textarea3 .결과','#전체대체 #결과표_textarea4 .결과','#전체대체 #결과표_textarea5 .결과'];
  var 검색할text요소id=['#전체대체 #결과표_textarea1 textarea','#전체대체 #결과표_textarea2 textarea','#전체대체 #결과표_textarea3 textarea','#전체대체 #결과표_textarea4 textarea','#전체대체 #결과표_textarea5 textarea'];
  for (var i=0; i<textarea관련.length; i++) {
    var 미사용누적 = document.querySelector('#' + 미사용누적id[i]); 미사용누적.innerHTML='';
    var 검색할text = document.querySelector(검색할text요소id[i]).value.substring(document.querySelector(검색할text요소id[i]).value.indexOf('body')+4,document.querySelector(검색할text요소id[i]).value.length)
        var html이름추출관련문자열='id="html파일이름" style="display:none">';
        var html추출시작index=검색할text.indexOf(html이름추출관련문자열) + html이름추출관련문자열.length;
        var html추출끝index=검색할text.indexOf('<',html추출시작index);
        //"문자열".substring(startIndex, endIndex);0부터, 1부터
        원본정보text에서추출된html파일이름=검색할text.substring(html추출시작index,html추출끝index)
    var html파일이름 = 검색할text.substring(html추출시작index,html추출끝index);    
    var 카운트정보요소 = document.querySelector(카운트정보요소id[i]);
    // HTML 태그 안의 src 속성만 추출 (내부 경로만)
    var 찾은src들 = [...검색할text.matchAll(/<[^>]+src="([^"]+)"[^>]*>/ig)];
    //var 찾은src들 = [...검색할text.match(/<*[^>]+src="([^"]+)"[^>]*>/ig)];
    var 사용src=0, 공백src=0, 미사용src=0;
    if (찾은src들) { // 있으면, 1.모든파일webkitRelativePath 에 있을때 : html이름표시, 2.없을때 : 미사용누적 에 누적
      찾은src들.forEach ( (value,index,arr) => {
        //value[0] : <img src=\"portal/images/문서연결_엑셀VBA/파일리스트설명.png\" alt=\"이미지없음\">
        //value[1] : portal/images/문서연결_엑셀VBA/파일리스트설명.png
        if (value[1].length==0) {공백src+=1;}
        else { // 경로가 있을때
          if (모든파일webkitRelativePath.indexOf(value[1]) !== -1) {
            사용src+=1;
            var index플러스1=모든파일webkitRelativePath.indexOf(value[1])+1;
            if (리스트정보div들[index플러스1].children[0].innerHTML=='') {
              리스트정보div들[index플러스1].children[0].innerHTML=html파일이름;
            } else {
              리스트정보div들[index플러스1].children[0].innerHTML+='<br>' + html파일이름;
            }
            리스트정보div들[index플러스1].children[0].classList.add('src있음');
          } else {
            미사용src+=1;
            var div = document.createElement('div');
            div.innerText=value[1];
            미사용누적.appendChild(div);
          }
        }
      }); //찾은src들.forEach
    }
    카운트정보요소.children[2].innerHTML=html파일이름; //html 파일이름
    카운트정보요소.children[3].innerHTML=찾은src들.length; //값있는src개수
    카운트정보요소.children[4].innerHTML=사용src; //사용중개수
    카운트정보요소.children[5].innerHTML=미사용src; //미사용개수
    카운트정보요소.children[6].innerHTML=공백src; //src=""
  }
}
function image폴더클릭_파일사용현황파악() {
  document.querySelector('#파악된html리스트').innerHTML='';
  var 모든파일webkitRelativePath=[];
  //'파일선택' 클릭하면 파일리스트 추출완료시 change 감지됨
  var 이벤트감지=document.querySelector('#file_input');
  var 기록할곳=document.querySelector('#js파일리스트기록');
  //**webkitRelativePath**라는 속성에 상위 폴더명부터 파일까지의 상대 경로가 포함됩니다.
  //webkitRelativePath는 브라우저(주로 크롬, 엣지, 오페라 등)에서만 지원됩니다.
  //상위 폴더 이름은 첫 번째 파일의 webkitRelativePath를 /로 분리하면 됩니다.
  function 함수내파일리스트가공() {
    var 파일리스트배열=이벤트감지.files;
    var split개수=[];
    Array.from(파일리스트배열).forEach ( (file,index,arr) => {
      모든파일webkitRelativePath.push('portal/' + file.webkitRelativePath);
      if (index==0) {//제목부분
        var div=document.createElement('div');
        var span=document.createElement('span');
        span.innerText= '사용중인html';
        div.appendChild(span);
        var span=document.createElement('span');
        span.innerText= '경로만';
        div.appendChild(span);
        var span=document.createElement('span');
        span.innerText= '파일이름';
        div.appendChild(span);
        기록할곳.appendChild(div);
      }
      var div=document.createElement('div');
      var span=document.createElement('span');
      span.innerText= '_';
      div.appendChild(span);
      var span=document.createElement('span');
      span.innerText= 'portal/' + file.webkitRelativePath.split('/').slice(0,file.webkitRelativePath.split('/').length-1).join('/') + '/';
      div.appendChild(span);
      var span=document.createElement('span');
      span.innerText= file.name;
      div.appendChild(span);
      기록할곳.appendChild(div);
    })
     //폭조정
    //========== 실행 다 하고, 이벤트 발생시 이벤트함수 실행하므로, 폭조정을 이벤트 함수안에 넣어야 된다  
    var 첫번째width=[];
    var 두번째width=[];
    var 세번째width=[];
    Array.from(document.querySelectorAll('#js파일리스트기록 > div')).forEach ( (요소,index,array) => {
      if (요소.children.length>1) {두번째width.push(요소.children[1].clientWidth)};
      if (요소.children.length>2) {세번째width.push(요소.children[2].clientWidth)};
    });
    Array.from(document.querySelectorAll('#js파일리스트기록 > div')).forEach ( (요소,index,array) => {
      if (요소.children.length>1) {요소.children[1].setAttribute('style','width:' + Math.max(...두번째width) + 'px')};
      if (요소.children.length>2) {요소.children[2].setAttribute('style','width:' + Math.max(...세번째width) + 'px')};
    });
  }
  이벤트감지.addEventListener('change',함수내파일리스트가공)
}
function 캔버스_개별카테고리_h6의title과id순서() {
  //왼쪽 : id나열
  var 아이디=Array.from(document.querySelectorAll('.모든id모음 > div > [id]'), (요소,index) => 요소.id); 
  var 넣을곳=document.querySelector('#id나열');넣을곳.innerHTML='';
  document.querySelector('#id개수').innerHTML=아이디.length;
  아이디.forEach ( (value,index,array) => {
    if (index==0) {
      var div=document.createElement('div');
      Array.from({length:2}).forEach ( (ele,내부index) => {
        var span=document.createElement('span');
        span.innerText=['id순번','id'][내부index];
        div.appendChild(span);
      })
      넣을곳.appendChild(div);
    }
    if (value.length!=0) {
      var div=document.createElement('div');
      var span=document.createElement('span');
      span.innerText=index + 1; //value는 id
      div.appendChild(span);
      var span=document.createElement('span');
      span.innerText=value; //value는 id
      div.appendChild(span);
      넣을곳.appendChild(div);
    }
  });
  var 첫번째width=[];
  var 두번째width=[];
  Array.from(document.querySelectorAll('#id나열 > div')).forEach ( (요소,index,array) => {
    첫번째width.push(요소.children[0].clientWidth);
    두번째width.push(요소.children[1].clientWidth);
  });
  Array.from(document.querySelectorAll('#id나열 > div')).forEach ( (요소,index,array) => {
    요소.children[0].setAttribute('style','width:' + Math.max(...첫번째width) + 'px');
    요소.children[1].setAttribute('style','width:' + Math.max(...두번째width) + 'px');
  });

  //h6의 title 부분 : {캔버스id,카테고리id,title} 따오기
  var h6정보=Array.from(document.querySelectorAll('.캔버스관련모두감싸기 .개별카테고리 > div > [title]'));
  var 넣을곳=document.querySelector('#title나열');넣을곳.innerHTML='';
  var 캔버스id, 카테고리id, title;
  var h6정보3종=[];
  // 위에 정의 : var h6정보=Array.from(document.querySelectorAll('.개별카테고리 > div > [title]'));
  document.querySelector('#title개수').innerHTML=h6정보.length;
  h6정보.forEach ( (요소,인덱스,array) => {
    캔버스id=요소.parentElement.parentElement.parentElement.id;
    카테고리id=요소.parentElement.parentElement.id;
    title=요소.title;
    //h6정보3종.push({'캔버스id':캔버스id,'카테고리id':카테고리id,'title':title})
    h6정보3종.push({캔버스id,카테고리id,title})
  })
  var 카운트=0;
  var 넣을곳=document.querySelector('#title나열');넣을곳.innerHTML='';
  for (const { 캔버스id,카테고리id,title } of h6정보3종) {
    카운트+=1;
    if (카운트==1) {
      var div=document.createElement('div');
      Array.from({length:4}).forEach ( (ele,내부index) => {
        var span=document.createElement('span');
        span.innerText=['캔버스id','카테고리id','title','innerTEXT'][내부index];
        div.appendChild(span);
      })
      넣을곳.appendChild(div);
    }
    var div=document.createElement('div');
    var span=document.createElement('span');
    span.innerText=캔버스id;
    div.appendChild(span);
    var span=document.createElement('span');
    span.innerText=카테고리id; 
    div.appendChild(span);
    //아이디와 innerTEXT가 공백일때 _ 로 대체 (높이)
    var span=document.createElement('span');
    span.innerText=title=='' ? '_':title; 
    div.appendChild(span);
    var span=document.createElement('span');
    span.innerText=document.querySelector('[title="' + title + '"]').innerText=='' ? '_':document.querySelector('[title="' + title + '"]').innerText; 
    div.appendChild(span);
    넣을곳.appendChild(div);
  };
  var 첫번째width=[];
  var 두번째width=[];
  var 세번째width=[];
  var 네번째width=[];
  Array.from(document.querySelectorAll('#title나열 > div')).forEach ( (요소,index,array) => {
    첫번째width.push(요소.children[0].clientWidth);
    두번째width.push(요소.children[1].clientWidth);
    세번째width.push(요소.children[2].clientWidth);
    네번째width.push(요소.children[3].clientWidth);
  });
  Array.from(document.querySelectorAll('#title나열 > div')).forEach ( (요소,index,array) => {
    요소.children[0].setAttribute('style','width:' + Math.max(...첫번째width) + 'px');
    요소.children[1].setAttribute('style','width:' + Math.max(...두번째width) + 'px');
    요소.children[2].setAttribute('style','width:' + Math.max(...세번째width) + 'px');
    요소.children[3].setAttribute('style','width:' + Math.max(...네번째width) + 'px');
  });

  //서로 없는 정보에     if (!아이디.includes(title)) {span.setAttribute('class','노랑바탕색')}
  var 타이틀=Array.from(document.querySelectorAll('.캔버스관련모두감싸기 .개별카테고리 > div > [title]'), (요소,index) => 요소.title); 
  var id요소=document.querySelectorAll('#id나열 > div:not(:first-child)');
  Array.from(id요소).forEach ( (요소, index, arr) => {
    if (타이틀.indexOf(요소.children[1].innerHTML)==-1) {요소.children[1].classList.add('노랑바탕색')}
  });
  var title요소=document.querySelectorAll('#title나열 > div:not(:first-child)');
  Array.from(title요소).forEach ( (요소, index, arr) => {
    if (아이디.indexOf(요소.children[2].innerHTML)==-1) {요소.children[2].classList.add('노랑바탕색')}
  });
}