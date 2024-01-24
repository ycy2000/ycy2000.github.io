//당번(번호) : #id_배치_왼쪽_고정회귀5종, #js_회귀변경p생성 => 한줄당 p 10개중 4~10번째 p, 10번째는 보볼
//            5,10,15주미출수 => 내부 p, 
if ('임시'=='임시ㅇㅇ') {
var 임시=document.querySelector('#임시');
function 임시함수(e) {//button 45개, class 선택, class 선택연계,---- 클릭시마다, 선택 석제 추가 중심으로하고 선택연계는 다 지우고 다시
  console.log('임시함수(e)')
  var 임시내button들=document.querySelectorAll('#임시 button');
  if (e.target.tagName=='BUTTON') {
    if (e.target.classList.contains('선택')) {
      e.target.classList.remove('선택')
    } else {
      e.target.classList.add('선택')
    }
    임시함수선택연계지움();
    임시함수_선택확인후색칠();
  }
  if (e.target.innerHTML=='번호전체지움') {
    for (var i=0; i<임시내button들.length; i++) {
      임시내button들[i].classList.remove('선택');
      임시내button들[i].classList.remove('선택연계');
    }
  }
}
function 임시함수선택연계지움() {
  console.log('임시함수선택연계지움()');
  var 임시내button들=document.querySelectorAll('#임시 button');
  for (var i=0; i<임시내button들.length; i++) {
    임시내button들[i].classList.remove('선택연계');
  }
}
function 임시함수_선택확인후색칠() {
  var 임시내button들=document.querySelectorAll('#임시 button');
  var 선택버튼들=document.querySelectorAll('#임시 .선택');
  console.log('임시함수_선택확인후색칠()')
  var 몫;
  var 나머지;
  if (선택버튼들[0]) {//선택 class가 하나라도 있으면
    for (var i=0; i<선택버튼들.length; i++) {
      몫=Math.floor(선택버튼들[i].innerHTML / 7);
      나머지=선택버튼들[i].innerHTML % 7;
      for (var 내부=0; 내부<임시내button들.length; 내부++) {
        if ((임시내button들[내부].innerHTML % 7)==나머지) {임시내button들[내부].classList.add('선택연계');}
        if (Math.floor(Number(Number(임시내button들[내부].innerHTML)-1) / 7)==몫) {임시내button들[내부].classList.add('선택연계');}
      }
    }
  } else {
    console.log('선택버튼이 없다')
  }
}
임시.addEventListener('click', 임시함수); 
}
var 색칠용바디=document.querySelector('body');
var 색칠할번호들=[];
var 색칠유형외부변수='';
function 색칠유형외부변수설정(e) {
  console.log('색칠유형외부변수설정(e)')
  if (e.target.innerHTML=='색칠' && e.target.parentNode.id=='배치_오른쪽_회차선택과_조회_선택회차당번') {색칠유형외부변수='배치_오른쪽_회차선택과_조회_선택회차당번';}
  if (e.target.innerHTML=='색칠' && e.target.parentNode.id=='미출수5주간') {색칠유형외부변수='미출수5주간';}
  if (e.target.innerHTML=='색칠' && e.target.parentNode.id=='미출수10주간') {색칠유형외부변수='미출수10주간';}
  if (e.target.innerHTML=='색칠' && e.target.parentNode.id=='미출수15주간') {색칠유형외부변수='미출수15주간';}
  console.log('색칠유형외부변수 : ' + 색칠유형외부변수)
  if (색칠유형외부변수=='') {return;}
  색칠()
}
function 색칠() {
  console.log('색칠()')
  //회차변경시 색칠번호 리프레시 하려면... 색칠선택 이름을 별도로 정해놓으면 색칠 함수가 그 변수를 받아 실행되도록 하면되겠다. 작성중
  색칠해제()
  색칠할번호들=[];
  if (색칠유형외부변수=='') {return;}
  var 색칠할숫자를담은요소각p요소들=document.querySelectorAll('#' + 색칠유형외부변수 + ' p');
  //색칠할 번호들 담기
  if (색칠유형외부변수=='배치_오른쪽_회차선택과_조회_선택회차당번') {//최근회차, p 7개
    for (var i=0; i<색칠할숫자를담은요소각p요소들.length; i++) {//7번째 제외
      if (((i+1) % 7) > 0 && 색칠할숫자를담은요소각p요소들[i].innerHTML!='') {//7일때 나머지 0;
        색칠할번호들.push(색칠할숫자를담은요소각p요소들[i].innerHTML);
      }
    }
  }
  if (색칠유형외부변수=='미출수5주간'||
      색칠유형외부변수=='미출수10주간'||
      색칠유형외부변수=='미출수15주간') {//미출수5,10,15주간 p 특정되지 않음. 빈칸도 있음
      for (var i=0; i<색칠할숫자를담은요소각p요소들.length; i++) {
        if (색칠할숫자를담은요소각p요소들[i].innerHTML!='') {색칠할번호들.push(색칠할숫자를담은요소각p요소들[i].innerHTML)};
      }
  }
  //본인색칠하기
  for (var i=0; i<색칠할숫자를담은요소각p요소들.length; i++) {
    if (색칠할숫자를담은요소각p요소들[i].innerHTML!='') {//7일때 나머지 0;
        색칠할숫자를담은요소각p요소들[i].classList.add('색칠')
    }
  }
  //왼쪽꺼 색칠하기
  var js색칠대상p요소들=document.querySelectorAll('#id_배치_왼쪽_다음회차 p');//p 10개씩
  for (var i=0; i<js색칠대상p요소들.length; i++) {
    if (((i+1) % 10) > 3 && js색칠대상p요소들[i].innerHTML!='') {//10번째꺼 나머지 0; 0,1,2번째 회귀,회차,날짜
      if (색칠할번호들.find(element => element==js색칠대상p요소들[i].innerHTML)) {
        js색칠대상p요소들[i].classList.add('색칠')
      }
    }
  }

  var js색칠대상p요소들=document.querySelectorAll('#id_배치_왼쪽_고정회귀5종 p');//p 10개씩
  for (var i=0; i<js색칠대상p요소들.length; i++) {
    if (((i+1) % 10) > 3 && js색칠대상p요소들[i].innerHTML!='') {//10번째꺼 나머지 0; 0,1,2번째 회귀,회차,날짜
      if (색칠할번호들.find(element => element==js색칠대상p요소들[i].innerHTML)) {
        js색칠대상p요소들[i].classList.add('색칠')
      }
    }
  }
  var js색칠대상p요소들=document.querySelectorAll('#js_회귀변경p생성 p');//p 10개씩
  for (var i=0; i<js색칠대상p요소들.length; i++) {
    if (((i+1) % 10) > 3 && js색칠대상p요소들[i].innerHTML!='') {//7일때 나머지 0;
      if (색칠할번호들.find(element => element==js색칠대상p요소들[i].innerHTML)) {
        js색칠대상p요소들[i].classList.add('색칠')
      }
    }
  }
  console.log('색칠할번호들 : ' + 색칠할번호들)
  console.log('js색칠대상p요소들.length : ' + js색칠대상p요소들.length)
}
function 색칠해제() {
  console.log('색칠해제()')
  var 색칠클래스=document.querySelectorAll('.색칠');
  if (색칠클래스[0]) {//하나라도 있으면
    for (var i=0; i<색칠클래스.length; i++) {
      색칠클래스[i].classList.remove('색칠')
    }
  }
}
function 색칠해제와변수초기화() {
  //html에 함수걸면
  console.log('색칠해제와변수초기화()')
  색칠유형외부변수='';
  var 색칠클래스=document.querySelectorAll('.색칠');
  if (색칠클래스[0]) {//하나라도 있으면
    for (var i=0; i<색칠클래스.length; i++) {
      색칠클래스[i].classList.remove('색칠')
    }
  }
}
색칠용바디.addEventListener('click',색칠유형외부변수설정);


//회차SELECT에 회차 넣는것은 공통..
var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
var 회차select안옵션html;
var 회차개수=Number(당번전체.length/9);//현재회차까지 회차개수
var 회차selectedIndex=0;//초기값
for (var i=0; i<회차개수; i++) {
  if (i==0) {
    회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>'
  } else {
    회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>' + 회차select안옵션html
  }
}
document.querySelector('#회차select').innerHTML=회차select안옵션html; //<option>회차</option>

document.querySelector('#회귀수입력').value=100;
var 일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
회차변경실행();//함수가 아래에 있어도 되네..
function 회귀변경() {
  일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  회차변경실행();
}
function 회귀변경1() {
  document.querySelector('#회귀수입력').value=1;
  일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  회차변경실행();
}
function 회귀변경5() {
  document.querySelector('#회귀수입력').value=5;
  일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  회차변경실행();
}
function 회귀변경100() {
  document.querySelector('#회귀수입력').value=100;
  일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  회차변경실행();
}

function 회차변경실행() {
  //회차SELECT부분,당번전체[0]은 2001년처음정보
  회차selectedIndex=document.querySelector('#회차select').selectedIndex;
  document.querySelector('#span_날짜').innerHTML=당번전체[-(회차selectedIndex*9) + 당번전체.length - 8]; //날짜, -9하면 회차(9개정보)
  for (var i=0; i<7; i++) {
    document.querySelectorAll('#span_날짜 ~ p')[i].innerHTML=당번전체[-(회차selectedIndex*9) + 당번전체.length - 7 + i]; 
  }
  //id_배치_왼쪽_다음회차 : 10게 p
  var id_배치_왼쪽_다음회차=document.querySelectorAll('#id_배치_왼쪽_다음회차 p');
  id_배치_왼쪽_다음회차[0].innerHTML='다음';
  id_배치_왼쪽_다음회차[1].innerHTML=(Number(document.querySelector('#회차select').value.substring(0, document.querySelector('#회차select').value.length-1))+1) + '회';
  if (회차selectedIndex==0) {
    for (var 내부=2;내부<10;내부++) {
      id_배치_왼쪽_다음회차[내부].innerHTML='';
    }
   } else {
    id_배치_왼쪽_다음회차[2].innerHTML=당번전체[-((회차selectedIndex-1)*9) + 당번전체.length - 8];//날짜
    for (var 내부=3;내부<10;내부++) {
      id_배치_왼쪽_다음회차[내부].innerHTML=당번전체[-((회차selectedIndex-1)*9) + 당번전체.length - 7 + 내부-3]; 
    }
  }
  //5,10,15,30,60회귀. 가로한줄당 p가 10개, [0]:100 200 ..., [1]:회차, [2]:날짜, [3~9]:번호
  일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  var 열개씩다섯줄p=document.querySelectorAll('#id_배치_왼쪽_고정회귀5종 p');
  var 회귀숫자;
  var 순번=0;
  var 최근회차=Number(document.querySelector('#회차select').value.substring(0, document.querySelector('#회차select').value.length-1))
  for (var 반복=1;반복<6;반복++) {
    if (반복==1) {회귀숫자=Number(5);}
    if (반복==2) {회귀숫자=Number(10);}
    if (반복==3) {회귀숫자=Number(15);}
    if (반복==4) {회귀숫자=Number(30);}
    if (반복==5) {회귀숫자=Number(60);}

    열개씩다섯줄p[순번].innerHTML=회귀숫자 + '회귀';
    순번+=1;
    열개씩다섯줄p[순번].innerHTML=(최근회차-회귀숫자) + '회';
    순번+=1;
    열개씩다섯줄p[순번].innerHTML=당번전체[-((회차selectedIndex+회귀숫자)*9) + 당번전체.length - 8];//날짜
    순번+=1;

    for (var 내부당번=0;내부당번<7;내부당번++) {
      열개씩다섯줄p[순번].innerHTML=당번전체[-((회차selectedIndex+회귀숫자)*9) + 당번전체.length - 7 + 내부당번];
      순번+=1;
    }
  }
  //id_배치_왼쪽_회귀변경 input값 회귀(1,5,100,input값). 20개까지(100회귀는 가능한 수만큼)
  회귀숫자=Number(document.querySelector('#회귀수입력').value);
  document.querySelector('#js_회귀변경p생성').innerHTML='';
  var js_회귀변경p생성html='';
  for (var 값이있으면=0; 값이있으면<20; 값이있으면++) {
    if (당번전체[-((회차selectedIndex+(회귀숫자*(값이있으면+1)))*9) + 당번전체.length - 8]) {
      js_회귀변경p생성html+='<P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><br>'
    }
  }
  document.querySelector('#js_회귀변경p생성').innerHTML=js_회귀변경p생성html;
  var 회귀변경가로개수=document.querySelectorAll('#js_회귀변경p생성 p').length/10;
  순번=0;
  for (var 값이있으면=0; 값이있으면<20; 값이있으면++) {
    if (당번전체[-((회차selectedIndex+(회귀숫자*(값이있으면+1)))*9) + 당번전체.length - 8]) {
      document.querySelectorAll('#js_회귀변경p생성 p')[순번].innerHTML=회귀숫자*(값이있으면+1);
      순번+=1;
      document.querySelectorAll('#js_회귀변경p생성 p')[순번].innerHTML=(최근회차-(회귀숫자*(값이있으면+1))) + '회';
      순번+=1;
      document.querySelectorAll('#js_회귀변경p생성 p')[순번].innerHTML=당번전체[-((회차selectedIndex+(회귀숫자*(값이있으면+1)))*9) + 당번전체.length - 8];//날짜
      순번+=1;

      for (var 내부당번=0;내부당번<7;내부당번++) {
        document.querySelectorAll('#js_회귀변경p생성 p')[순번].innerHTML=당번전체[-((회차selectedIndex+(회귀숫자*(값이있으면+1)))*9) + 당번전체.length - 7 + 내부당번];
        순번+=1;
      }
    }
  }
  //미출수기록
  if (회차selectedIndex>(회차개수-15)) {alert('회차selectedIndex>(회차개수-15)');return;}
  var 최근회차포함5주간번호들=[];//당번전체 한회당 9개, 회차_날짜_번호7개, 작업중
  var 최근회차포함10주간번호들=[];
  var 최근회차포함15주간번호들=[];
  // console.log('회차개수 : ' + 회차개수)
  // console.log('회차selectedIndex : ' + 회차selectedIndex)
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+1])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+2])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+3])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+4])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+5])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+6])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+7])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+8])
  // console.log((회차개수-회차selectedIndex-1)*9 % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+1) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+2) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+3) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+4) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+5) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+6) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+7) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+8) % 9)
  console.log('당번전체.length : ' + 당번전체.length + ' : ' + ((회차개수-회차selectedIndex-1)*9+8))
  for (var i=0; i<(9*15); i++) {//회차개수-회차selectedIndex-1+8 : 해당회차 마지막 번호
    if (((회차개수-회차selectedIndex-1)*9+8-i) % 9 < 2||((회차개수-회차selectedIndex-1)*9+8-i) % 9 == 8) {
      //회차, 날짜 건너뜀. or||보볼제외 뒤에서 온다.
    } else {
      if (i<(9*5)) {최근회차포함5주간번호들.push(당번전체[((회차개수-회차selectedIndex-1)*9+8-i)])}
      if (i<(9*10)) {최근회차포함10주간번호들.push(당번전체[((회차개수-회차selectedIndex-1)*9+8-i)])}
      if (i<(9*15)) {최근회차포함15주간번호들.push(당번전체[((회차개수-회차selectedIndex-1)*9+8-i)])}
    }
  }
  var 미출수5_html='';
  var 미출수10_html='';
  var 미출수15_html='';
  // for (var i=0; i<45; i++) {
  //   if (최근회차포함5주간번호들.filter(element => (i+1).toString() === element).length==0) {미출수5_html+='<p>' + (i+1) + '</p>'}
  //   if (최근회차포함10주간번호들.filter(element => (i+1).toString() === element).length==0) {미출수10_html+='<p>' + (i+1) + '</p>'}
  //   if (최근회차포함15주간번호들.filter(element => (i+1).toString() === element).length==0) {미출수15_html+='<p>' + (i+1) + '</p>'}
  // }
  for (var i=0; i<45; i++) {
    if (최근회차포함5주간번호들.filter(element => (i+1).toString() === element).length==0) {
      미출수5_html+='<p>' + (i+1) + '</p>';
      if (최근회차포함10주간번호들.filter(element => (i+1).toString() === element).length==0) {
        미출수10_html+='<p>' + (i+1) + '</p>';
      } else {
        미출수10_html+='<p></p>';
      }
      if (최근회차포함15주간번호들.filter(element => (i+1).toString() === element).length==0) {
        미출수15_html+='<p>' + (i+1) + '</p>';
      } else {
        미출수15_html+='<p></p>';
      }
    }
  }
  document.querySelector('#배치_오른쪽_5_10_15주미출수').innerHTML='<div id="미출수5주간"><span>5주간</span><span>색칠</span>' + 미출수5_html + '</div>' 
  + '<div id="미출수10주간"><span>10주간</span><span>색칠</span>' + 미출수10_html + '</div>'
  + '<div id="미출수15주간"><span>15주간</span><span>색칠</span>' + 미출수15_html + '</div>'




}
function 번호전체지움() {
  document.querySelector('#번호입력_좌').innerHTML='';
  document.querySelector('#번호입력_중').innerHTML='';
  document.querySelector('#번호입력_우').innerHTML='';
}
function 기본보기() {
  document.querySelector('#modal_오른쪽나온횟수').classList.remove('d-none');
  document.querySelector('#modal_오른쪽번호입력').classList.remove('d-none');
}
function 나온횟수보기() {
  document.querySelector('#modal_오른쪽나온횟수').classList.remove('d-none');
  document.querySelector('#modal_오른쪽번호입력').classList.add('d-none');
}
function 입력번호보기() {
  document.querySelector('#modal_오른쪽나온횟수').classList.add('d-none');
  document.querySelector('#modal_오른쪽번호입력').classList.remove('d-none');
}

var 입력된번호들=document.querySelector('#modal_오른쪽번호입력');
function 번호하나삭제(e) {
  console.log('e.target.innerHTML : ' + e.target.innerHTML)
  if (e.target.innerHTML=='삭제') {
    e.target.parentNode.outerHTML='<div><span>삭제</span></div>';
  }
}
var 번호입력모달body=document.querySelector('#modal_왼쪽');
function 번호입력(e) {
  var 클릭수=Number(document.querySelector('#modal클릭수').innerHTML);
  // bg-primary있으면 빼고 id=클릭수 숫자 -1
  if (e.target.tagName=='BUTTON' && e.target.classList.contains('bg-primary')) {
    e.target.classList.remove('bg-primary');
    클릭수=Number(클릭수-1);
    document.querySelector('#modal클릭수').innerHTML=클릭수

    // bg-primary 없으면 넣고 id=클릭수 숫자 +1
  } else if(e.target.tagName=='BUTTON' && !e.target.classList.contains('bg-primary'))  {
    e.target.classList.add('bg-primary');
    클릭수=Number(클릭수+1);
    document.querySelector('#modal클릭수').innerHTML=클릭수
  }

  // 클릭수가 6일때
  if (클릭수==6) {
    var 버튼들=document.querySelectorAll('#modal_왼쪽 button');
    var 추가할innerhtml='';
    //숫자 6개 입력
    for (var i=0; i<버튼들.length; i++) {
      if (버튼들[i].classList.contains('bg-primary')) {
        //innertext : 번호
        추가할innerhtml+= '<P>' + 버튼들[i].innerHTML + '</P>';
      }
    }
    추가할innerhtml='<div><span>삭제</span>' + 추가할innerhtml + '</div>'

    if (document.querySelectorAll('#번호입력_좌 div').length<13) {
      document.querySelector('#번호입력_좌').innerHTML+=추가할innerhtml;
    } else if(document.querySelectorAll('#번호입력_중 div').length<13) {
      document.querySelector('#번호입력_중').innerHTML+=추가할innerhtml;
    } else if(document.querySelectorAll('#번호입력_우 div').length<13) {
      document.querySelector('#번호입력_우').innerHTML+=추가할innerhtml;
    }

    //색칠해제후 클릭수0 초기화
    for (var i=0; i<버튼들.length; i++) {
      if (버튼들[i].classList.contains('bg-primary')) {
        버튼들[i].classList.remove('bg-primary');
      }
    }
    document.querySelector('#modal클릭수').innerHTML=0
  }
  // 클릭수가 6일때 끝
}
입력된번호들.addEventListener('click', 번호하나삭제); 
번호입력모달body.addEventListener('click', 번호입력); 

