if ('초기화'=='초기화') {
  //옵션 생성이 새로고침시 필수동작이다.

  var 색칠해제_변수='id_버튼45_1st';
  var 전체변수_번호색칠회차index=0;
  var 전체변수_당번회차index=0;
  var 전체변수_당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
  var 전체변수_회차개수=Number(전체변수_당번전체.length/9);
  var 전체변수_회차select안옵션html;
  var 전체변수_색칠할번호들_아이디='없음';
  var 전체변수_색칠할번호들_배열;//초기화 말고, 나중에 쓰임
  for (var i=0; i<전체변수_회차개수; i++) {
    if (i==0) {
      전체변수_회차select안옵션html='<option>' + 전체변수_당번전체[(i*9)] + '회</option>'
    } else {
      전체변수_회차select안옵션html='<option>' + 전체변수_당번전체[(i*9)] + '회</option>' + 전체변수_회차select안옵션html
    }
  }
  // <!--#색칠용번호들 각id를 innerHTML로 스크립트로 가져옴 <li><a class="dropdown-item">오주미출수</a></li>-->
  document.querySelector('#칠_색칠할번호선택_ul').innerHTML='';
  for (var i=0; i<document.querySelectorAll('#색칠용번호들 div').length; i++) {
    전체변수_아이디=document.querySelectorAll('#색칠용번호들 div')[i].id;
    document.querySelector('#칠_색칠할번호선택_ul').innerHTML+='<li><a class="dropdown-item 색칠할번호_로연결된text_class">' + 전체변수_아이디 + '</a></li>'
    if (전체변수_아이디=='피해서번호' || 전체변수_아이디=='나머지' || 전체변수_아이디=='칠_번호' || 전체변수_아이디=='오주출수' || 전체변수_아이디=='중복1_2') {
      document.querySelectorAll('#칠_색칠할번호선택_ul li')[i].classList.add('파란색글자');
    }
  }

  //번호색칠_회차변경 : 
  document.querySelector('#당번_회차select').innerHTML=전체변수_회차select안옵션html; //<option>회차</option>
  document.querySelector('#칠_회차select').innerHTML=전체변수_회차select안옵션html; 
  document.querySelector('#당번_회차select').selectedIndex=0;
  var 전체변수_index확정=document.querySelector('#당번_회차select').selectedIndex;
  var 전체변수_시작배열값;//9개정보중 회차번호
  당번_회차change();
  번호색칠_회차change();
  세로_모두숨기기();
  document.querySelector('#칠_전체').classList.remove('d-none');
  document.querySelector('#세로구분_당번_전체').classList.remove('d-none');  
  //=========>초기 작업 끝.
}
function 번호색칠_clear() {
  document.querySelector('#칠_현재색칠할번호_정보와개수').innerHTML='색칠할 번호 아이디 설정 없음';
  document.querySelector('#칠_현재색칠번호들').innerHTML='';
  전체변수_색칠할번호들_아이디='없음';
  전체변수_색칠할번호들_배열=[];
  색칠해제_변수에따라();
  색칠해제_당번();
}
function 색칠해제_변수에따라() {
  console.log('색칠해제_변수에따라()')
  var 버튼들=document.querySelectorAll('#' + 색칠해제_변수 + ' .색칠용버튼');
  for (var i=0; i<버튼들.length; i++) {
    버튼들[i].classList.remove('색칠용버튼');
    버튼들[i].removeAttribute('title');
  }
  var 버튼들=document.querySelectorAll('#' + 색칠해제_변수 + ' .피해서3종_선택번호');
  for (var i=0; i<버튼들.length; i++) {
    버튼들[i].classList.remove('피해서3종_선택번호');
  }
  var 버튼들=document.querySelectorAll('#' + 색칠해제_변수 + ' .피해서3종_피해서번호');
  for (var i=0; i<버튼들.length; i++) {
    버튼들[i].classList.remove('피해서3종_피해서번호');
  }
}
function 색칠해제_당번() {
  var 버튼들=document.querySelectorAll('#당번_전체 .색칠용버튼');
  for (var i=0; i<버튼들.length; i++) {
    버튼들[i].classList.remove('색칠용버튼');
    버튼들[i].removeAttribute('title');
  }
}
function 색칠동작() {//번호색칠 회차와 같은 회차가 당번회차에 있을때 동그라미
  console.log('색칠동작');
  색칠해제_변수에따라();
  색칠해제_당번();
  //번호색칠 회차와 같은 회차가 당번회차에 있을때 동그라미
  var 당번_span들=document.querySelectorAll('#당번_전체 span');
  if (document.querySelectorAll('#당번_전체 span')[0]) {
    for (var i=0; i<당번_span들.length; i++) {
      당번_span들[i].classList.remove('당번_span_한개');
    }
  }
  if (전체변수_당번회차index<=전체변수_번호색칠회차index) {
    var 인덱스차이=전체변수_번호색칠회차index-전체변수_당번회차index;
    당번_span들[인덱스차이].classList.add('당번_span_한개');
  }//동그라미 끝.

  if (전체변수_색칠할번호들_아이디=='없음') {//초기화시 또는 clear시
    document.querySelector('#칠_현재색칠할번호_정보와개수').innerHTML='색칠할 번호 아이디 설정 없음';
    document.querySelector('#칠_현재색칠번호들').innerHTML='';
    return;
  }
  //모두 45이하 숫자인지 확인. 아니면 메세지 후 중단, 아이디는 색칠할번호들 ul의 li 클릭시 생성되거나, 없음.
  전체변수_색칠할번호들_배열=document.querySelector('#색칠용번호들 #' + 전체변수_색칠할번호들_아이디).innerHTML.split('_');//비어있어도 1개이다.
  var 개수=0, 평균=0;
  for (var i=0; i<전체변수_색칠할번호들_배열.length;i++) {
    if (전체변수_색칠할번호들_배열[i]*1>45 || 전체변수_색칠할번호들_배열[i]*1<1) {
      document.querySelector('#칠_현재색칠번호들').innerHTML=전체변수_색칠할번호들_배열;
      document.querySelector('#칠_현재색칠할번호_정보와개수').innerHTML=전체변수_색칠할번호들_아이디 + ' (없음)';
      return;
    }
    개수+=1;
  }
  평균=(개수/7).toPrecision(2); 
  document.querySelector('#칠_현재색칠할번호_정보와개수').innerHTML=전체변수_색칠할번호들_아이디 + ' (' + 개수 + '개, 평균 : ' + 평균 + ')';
  document.querySelector('#칠_현재색칠번호들').innerHTML=전체변수_색칠할번호들_배열;
  //색칠
  var 버튼들=document.querySelectorAll('#' + 색칠해제_변수 + ' button');
  for (var i=0; i<버튼들.length; i++) {
    if (전체변수_색칠할번호들_배열.find(element => element == 버튼들[i].innerHTML)) {
      버튼들[i].classList.add('색칠용버튼');
      버튼들[i].setAttribute('title',버튼들[i].innerHTML);
     }
  }
  버튼들=document.querySelectorAll('#당번_있다면다음회차 button');
  for (var i=0; i<버튼들.length; i++) {
    if (전체변수_색칠할번호들_배열.find(element => element == 버튼들[i].innerHTML)) {
      버튼들[i].classList.add('색칠용버튼');
      버튼들[i].setAttribute('title',버튼들[i].innerHTML);
     }
  }
  버튼들=document.querySelectorAll('#당번_전체 button');
  for (var i=0; i<버튼들.length; i++) {
    if (전체변수_색칠할번호들_배열.find(element => element == 버튼들[i].innerHTML)) {
      버튼들[i].classList.add('색칠용버튼');
      버튼들[i].setAttribute('title',버튼들[i].innerHTML);
     }
  }
}
function 흐름또는출수제목중_흐름보기() {
  document.querySelector('#칠_right_흐름').classList.remove('d-none');
  document.querySelector('#칠_right_출수제목').classList.add('d-none');
}
function 흐름또는출수제목중_출수제목보기() {
  document.querySelector('#칠_right_흐름').classList.add('d-none');
  document.querySelector('#칠_right_출수제목').classList.remove('d-none');
}
function 번호색칠_회차change_플러스() {
  console.log('번호색칠_회차change_플러스()')
  전체변수_index확정=document.querySelector('#칠_회차select').selectedIndex;//선택안되면 -1, 초기화면 0
  if (전체변수_index확정==0) {

  } else {
    전체변수_index확정=전체변수_index확정-1;
  }
  전체변수_시작배열값=(전체변수_회차개수-전체변수_index확정)*9;//9개정보중 회차번호
  document.querySelector('#칠_회차select').selectedIndex=전체변수_index확정;//선택안되면 -1, 초기화면 0
  번호색칠_회차change()
}
function 번호색칠_회차change_마이너스() {
  console.log('번호색칠_회차change_마이너스()')
  전체변수_index확정=document.querySelector('#칠_회차select').selectedIndex;//선택안되면 -1, 초기화면 0
  전체변수_index확정=전체변수_index확정+1;
  전체변수_시작배열값=(전체변수_회차개수-전체변수_index확정)*9;//9개정보중 회차번호
  document.querySelector('#칠_회차select').selectedIndex=전체변수_index확정;//선택안되면 -1, 초기화면 0
  번호색칠_회차change()
}
function 번호색칠_회차change() {// 복잡!!
  console.log('번호색칠_회차change()')
  전체변수_번호색칠회차index=document.querySelector('#칠_회차select').selectedIndex;//당번회차동그라미용
  전체변수_index확정=document.querySelector('#칠_회차select').selectedIndex;//선택안되면 -1, 초기화면 0
  전체변수_시작배열값=(전체변수_회차개수-전체변수_index확정)*9;//9개정보중 회차번호
  //오주출수,오주미출수,십주미출수,십오주미출수,이월수,칠_번호,피해서번호,흰색부분,이웃수,이월이웃수,오주1출수,오주2출수,오주3출수,오주4출수,오주5출수 생성하여 넣어두기
  var 십오주간번호_보볼제외=[], 십주간번호_보볼제외=[], 오주간번호_보볼제외=[], 최근번호_보볼제외=[];
  var 나머지;
  for (var i=0; i<9*15; i++) {//결과번호 개수는 90개다. 6*15
    나머지=i%9;
    if (나머지<2 || 나머지==8) {

    } else {
      if (i<9*1) {최근번호_보볼제외.push(전체변수_당번전체[전체변수_시작배열값-i])}
      if (i<9*5) {오주간번호_보볼제외.push(전체변수_당번전체[전체변수_시작배열값-i])}
      if (i<9*10) {십주간번호_보볼제외.push(전체변수_당번전체[전체변수_시작배열값-i])}
      if (i<9*15) {십오주간번호_보볼제외.push(전체변수_당번전체[전체변수_시작배열값-i])}
    }
  }

  var 연결_text_배열=[];
  연결_text_배열=[];
  for (var i=1; i<46; i++) {if (십주간번호_보볼제외.filter(element => i == element).length==0) {연결_text_배열.push(i);}}
  document.querySelector('#십주미출수').innerHTML=연결_text_배열.join('_');

  연결_text_배열=[];
  for (var i=1; i<46; i++) {if (십오주간번호_보볼제외.filter(element => i == element).length==0) {연결_text_배열.push(i);}}
  document.querySelector('#십오주미출수').innerHTML=연결_text_배열.join('_');

  연결_text_배열=[];
  for (var i=1; i<46; i++) {if (오주간번호_보볼제외.filter(element => i == element).length>0) {연결_text_배열.push(i);}}
  document.querySelector('#오주출수').innerHTML=연결_text_배열.join('_');

  연결_text_배열=[];
  for (var i=1; i<46; i++) {if (오주간번호_보볼제외.filter(element => i == element).length==0) {연결_text_배열.push(i);}}
  document.querySelector('#오주미출수').innerHTML=연결_text_배열.join('_');

  연결_text_배열=[];
  for (var i=1; i<46; i++) {if (오주간번호_보볼제외.filter(element => i == element).length==1) {연결_text_배열.push(i);}}
  document.querySelector('#오주1출수').innerHTML=연결_text_배열.join('_');

  연결_text_배열=[];
  for (var i=1; i<46; i++) {if (오주간번호_보볼제외.filter(element => i == element).length==2) {연결_text_배열.push(i);}}
  document.querySelector('#오주2출수').innerHTML=연결_text_배열.join('_');

  연결_text_배열=[];
  for (var i=1; i<46; i++) {if (오주간번호_보볼제외.filter(element => i == element).length==3) {연결_text_배열.push(i);}}
  document.querySelector('#오주3출수').innerHTML=연결_text_배열.join('_');

  연결_text_배열=[];
  for (var i=1; i<46; i++) {if (오주간번호_보볼제외.filter(element => i == element).length==4) {연결_text_배열.push(i);}}
  document.querySelector('#오주4출수').innerHTML=연결_text_배열.join('_');

  연결_text_배열=[];
  for (var i=1; i<46; i++) {if (오주간번호_보볼제외.filter(element => i == element).length==5) {연결_text_배열.push(i);}}
  document.querySelector('#오주5출수').innerHTML=연결_text_배열.join('_');

  document.querySelector('#이월수').innerHTML=최근번호_보볼제외.sort((a, b) => a - b).join('_');

  연결_text_배열=[];
  var 왼쪽번호, 오른쪽번호;
  for (var i=0; i<6; i++) {
    if (최근번호_보볼제외[i]==1) {
      왼쪽번호=45;
    } else {
      왼쪽번호=Number(최근번호_보볼제외[i])-1;
    }
    if (최근번호_보볼제외[i]==45) {
      오른쪽번호=1;
    } else {
      오른쪽번호=Number(최근번호_보볼제외[i])+1;
    }
    if (최근번호_보볼제외.filter(element => 왼쪽번호 == element).length==0) {연결_text_배열.push(왼쪽번호);}
    if (최근번호_보볼제외.filter(element => 오른쪽번호 == element).length==0) {연결_text_배열.push(오른쪽번호);}
  }
  document.querySelector('#이웃수').innerHTML=연결_text_배열.sort((a, b) => a - b).join('_');

  //배열 초기화 하지 않고, 이웃수 결과에 이월수 추가한다.
  for (var i=0; i<6; i++) {
    if (연결_text_배열.filter(element => 최근번호_보볼제외[i] == element).length==0) {연결_text_배열.push(최근번호_보볼제외[i]);}
  }
  document.querySelector('#이월이웃수').innerHTML=연결_text_배열.sort((a, b) => a - b).join('_'); 
  색칠동작();
}
function 번호색칠_1_2중복() {
  console.log('번호색칠_1_2중복()');
  if (!document.querySelector('#색칠선택3').classList.contains('색칠선택span선택css')) {
    alert('색칠선택3 선택하고');
    return;
  }
  var 일번번호=[];
  for (var i=0; i<45; i++) {
    if (document.querySelectorAll('#id_버튼45_1st button')[i].classList.contains('색칠용버튼')){일번번호.push(i+1);}
  }
  var 이번번호=[];
  for (var i=0; i<45; i++) {
    if (document.querySelectorAll('#id_버튼45_2st button')[i].classList.contains('색칠용버튼')){이번번호.push(i+1);}
  }
  var 중복번호=[];
  for (var i=0; i<45; i++) {
    if (일번번호.includes(i+1) && 이번번호.includes(i+1)) {중복번호.push(i+1)}
  }

  var 버튼들=document.querySelectorAll('#id_버튼45_3st .색칠용버튼');
  for (var i=0; i<버튼들.length; i++) {
    버튼들[i].classList.remove('색칠용버튼');
    버튼들[i].removeAttribute('title');
  }
  var 버튼들=document.querySelectorAll('#id_버튼45_3st button');
  for (var i=0; i<45; i++) {
    if (중복번호.includes(i+1)) {
      console.log(i+1 + ' : 중복')
      버튼들[i].classList.add('색칠용버튼');
      버튼들[i].setAttribute('title',i+1);
    }
  }
  document.querySelector('#중복1_2').innerHTML=중복번호.join('_');
  전체변수_색칠할번호들_아이디='중복1_2';
  색칠동작();
}

function 피해서3종() {
  if (!document.querySelector('#색칠선택3').classList.contains('색칠선택span선택css')) {alert('색칠선택3 선택하고 클릭할것');return;}
  번호색칠_칠_조금다름();//칠_번호, 피해서번호 생성되었음
  색칠해제_변수에따라(); 
  var 버튼들=document.querySelectorAll('#id_버튼45_3st button');
  var 칠_번호_text=document.querySelector('#칠_번호').innerHTML;
  var 피해서번호_text=document.querySelector('#피해서번호').innerHTML;
  var 번호들=[];
  if (칠_번호_text.length>0) {
    번호들=칠_번호_text.split('_');
    for (var i=1; i<46; i++) {
      if (번호들.filter(element => element==i).length>0) {버튼들[i-1].classList.add('피해서3종_선택번호');}
    }
  }
  // console.log('칠_번호_text : ' + 칠_번호_text + ' , 번호들 : ' + 번호들)
  if (피해서번호_text.length>0) {
    번호들=피해서번호_text.split('_');
    for (var i=1; i<46; i++) {
      if (번호들.filter(element => element==i).length>0) {버튼들[i-1].classList.add('피해서3종_피해서번호');}
    }
  }
  // console.log('피해서번호_text : ' + 피해서번호_text + ' , 번호들 : ' + 번호들)
}
function 번호색칠_칠_조금다름() {
  console.log('번호색칠_칠_조금다름()')
  전체변수_색칠할번호들_아이디='칠_번호';
  var 색칠45색칠된번호=[];
  var 버튼들=document.querySelectorAll('#' + 색칠해제_변수 + ' button');
  for (var i=0; i<45; i++) {
    if (버튼들[i].classList.contains('색칠용버튼')) {색칠45색칠된번호.push(i+1)}
  }
  document.querySelector('#색칠용번호들 #칠_번호').innerHTML=색칠45색칠된번호.join('_');//비어있어도 1개이다.


  var 색칠용버튼개수=document.querySelectorAll('#' + 색칠해제_변수 + ' .색칠용버튼').length;
  console.log('색칠용버튼개수 : ' + 색칠용버튼개수)
  //피할번호 있으면 작동, 몫과 나머지 구해놓기
  var 몫=[];
  var 나머지=[];
  if (색칠용버튼개수>0) {
    for (var i=0; i<45; i++) {
      if (버튼들[i].classList.contains('색칠용버튼')) {
        몫.push(Math.floor( i / 7));
        나머지.push(i % 7);
      }
    }
  }

  var 피해서번호_배열=[];
  for (var i=0; i<45; i++) {
    // console.log('번호 ' + (i+1) + ' 의 몫 : ' + Math.floor(i / 7) + ' 개수 : ' + 몫.filter(element => element==Math.floor(i / 7)).length)
    if (몫.filter(element => element==Math.floor(i / 7)).length==0) {피해서번호_배열.push(i+1)}
    if (나머지.filter(element => element==(i % 7)).length==0) {피해서번호_배열.push(i+1)}
  }
  피해서번호_배열=new Set(피해서번호_배열); //중복제거 배열아님
  피해서번호_배열=[...피해서번호_배열];//배열로 전환

  document.querySelector('#피해서번호').innerHTML=피해서번호_배열.join('_');

  var 나머지_배열=[];
  for (var i=1; i<46; i++) {
    if (피해서번호_배열.filter(element => element==i).length==0 && 색칠45색칠된번호.filter(element => element==i).length==0) {나머지_배열.push(i)}
  }
  document.querySelector('#나머지').innerHTML=나머지_배열.join('_');





  색칠동작();
}
function 오주전() {
  document.querySelector('#칠_회차select').selectedIndex=
  document.querySelector('#당번_회차select').selectedIndex+5;번호색칠_회차change();
}
function 십주전() {
  document.querySelector('#칠_회차select').selectedIndex=
  document.querySelector('#당번_회차select').selectedIndex+10;번호색칠_회차change();
}
function 십오주전() {
  document.querySelector('#칠_회차select').selectedIndex=
  document.querySelector('#당번_회차select').selectedIndex+15;번호색칠_회차change();
}
function 이십주전() {
  document.querySelector('#칠_회차select').selectedIndex=
  document.querySelector('#당번_회차select').selectedIndex+20;번호색칠_회차change();
}
function 당번_회차change() {//비교적 간단 : 색칠할 번호들의 변경은 없고!! 색칠 자체만 다시하면 됨.
  console.log('당번_회차change()')
  전체변수_당번회차index=document.querySelector('#당번_회차select').selectedIndex;//당번회차동그라미용
  전체변수_index확정=document.querySelector('#당번_회차select').selectedIndex;//선택안되면 -1, 초기화면 0
  전체변수_시작배열값=(전체변수_회차개수-전체변수_index확정-1)*9;//9개정보중 회차번호
  //당번부분 변경 : 있다면 다음회차부분
  document.querySelector('#당번_있다면다음회차 span').innerHTML=(전체변수_회차개수-전체변수_index확정+1) + '회';
  if (전체변수_index확정==0) {
    for (var i=0; i<7; i++) {
      document.querySelectorAll('#당번_있다면다음회차 button')[i].innerHTML='_';
    }
  } else {
    for (var i=0; i<7; i++) {
      document.querySelectorAll('#당번_있다면다음회차 button')[i].innerHTML=전체변수_당번전체[전체변수_시작배열값+2+i+9];
    }
  }
  //당번부분 변경 : .span_날짜
  document.querySelector('#당번_회차날짜조회묶음 .span_날짜').innerHTML=전체변수_당번전체[전체변수_시작배열값+1]; //날짜
  //당번부분 변경 : 100회분 가지고오기
  var 당번_전체html='';
  for (var i=0; i<100; i++) {
    var 각한줄당번div='';
    for (var 각한줄=0; 각한줄<9; 각한줄++) {
      if (각한줄==0) {각한줄당번div+='<span>' + 전체변수_당번전체[전체변수_시작배열값-(9*i)] + '회</span>';}
      // 각한줄==1) : 날짜는 건너뜀
      if (각한줄>1) {각한줄당번div+='<button>' + 전체변수_당번전체[전체변수_시작배열값-(9*i)+각한줄] + '</button>';}
    }
    각한줄당번div='<div>' + 각한줄당번div + '</div>'
    당번_전체html+=각한줄당번div;
  }
  document.querySelector('#당번_전체').innerHTML=당번_전체html; 
  색칠동작();
}
function 세로_모두숨기기() {
  var whole_자식div=document.querySelectorAll('#whole > div');
  for (var i=0; i<whole_자식div.length; i++) {
    whole_자식div[i].classList.add('d-none');
  }
}
function 바디클릭시동작설정(e) {
  if (e.target.innerHTML=='칠숨김') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==칠숨김');
    document.querySelector('#칠_left').classList.add('d-none');
    e.target.innerHTML='칠보기'
    return;
  }
  if (e.target.innerHTML=='칠보기') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==칠보기');
    document.querySelector('#칠_left').classList.remove('d-none');
    e.target.innerHTML='칠숨김'
    return;
  }
  if (e.target.innerHTML=='당번숨김') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==당번숨김');
    document.querySelector('#세로구분_당번_전체').classList.add('d-none');
    e.target.innerHTML='당번보기'
    return;
  }
  if (e.target.innerHTML=='당번보기') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==당번보기');
    document.querySelector('#세로구분_당번_전체').classList.remove('d-none');
    e.target.innerHTML='당번숨김'
    return;
  }
  if (e.target.innerHTML=='분석자료') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==분석자료');
    세로_모두숨기기();
    document.querySelector('#세로구분_분석자료_전체').classList.remove('d-none');
  }
  if (e.target.innerHTML=='흐름_') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==흐름');
    세로_모두숨기기();
    document.querySelector('#세로구분_흐름_전체').classList.remove('d-none');
    document.querySelector('#세로구분_당번_전체').classList.remove('d-none');
  }
  if (e.target.innerHTML=='임시사진_분석자료') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==임시사진_분석자료');
    세로_모두숨기기();
    document.querySelector('#세로구분_임시_전체').classList.remove('d-none');
  }
  if (e.target.innerHTML=='칠_관련,당번') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==칠_관련,당번');
    세로_모두숨기기();
    document.querySelector('#칠_전체').classList.remove('d-none');
    document.querySelector('#세로구분_당번_전체').classList.remove('d-none'); 
  }
  if (e.target.id=='색칠선택1') {
    console.log('바디클릭시동작설정(e) ==> e.target.id==색칠선택1')
    색칠해제_변수='id_버튼45_1st';
    document.querySelector('#색칠선택1').classList.add('색칠선택span선택css');
    document.querySelector('#색칠선택2').classList.remove('색칠선택span선택css');
    document.querySelector('#색칠선택3').classList.remove('색칠선택span선택css');
  }
  if (e.target.id=='색칠선택2') {
    console.log('바디클릭시동작설정(e) ==> e.target.id==색칠선택2')
    색칠해제_변수='id_버튼45_2st';
    document.querySelector('#색칠선택1').classList.remove('색칠선택span선택css');
    document.querySelector('#색칠선택2').classList.add('색칠선택span선택css');
    document.querySelector('#색칠선택3').classList.remove('색칠선택span선택css');
  }
  if (e.target.id=='색칠선택3') {
    console.log('바디클릭시동작설정(e) ==> e.target.id==색칠선택3')
    색칠해제_변수='id_버튼45_3st';
    document.querySelector('#색칠선택1').classList.remove('색칠선택span선택css');
    document.querySelector('#색칠선택2').classList.remove('색칠선택span선택css');
    document.querySelector('#색칠선택3').classList.add('색칠선택span선택css');
  }

  
  if (e.target.nodeName=='BUTTON' && e.target.parentNode.parentNode.classList.contains('버튼45css')) {//버튼 클릭시
    console.log('바디클릭시동작설정(e) ==> e.target.nodeName==BUTTON) && e.target.parentNode.parentNode.classList.contains(버튼45css)')
    if (e.target.classList.contains('색칠용버튼')) {
      e.target.classList.remove('색칠용버튼');
      e.target.removeAttribute('title');
    } else {
      e.target.classList.add('색칠용버튼');
      e.target.setAttribute('title',e.target.innerHTML);
    }
  }
  if (e.target.id=='동작_당번회차_플러스') {
    console.log('바디클릭시동작설정(e) ==> e.target.id==동작_당번회차_플러스')
    if (document.querySelector('#당번_회차select').selectedIndex==0) {
      alert('가장 최근회차입니다.');
    } else {
      document.querySelector('#당번_회차select').selectedIndex-=1;
      당번_회차change();
    }
  }
  if (e.target.id=='동작_당번회차_마이너스') {
    console.log('바디클릭시동작설정(e) ==> e.target.id==동작_당번회차_마이너스')
      document.querySelector('#당번_회차select').selectedIndex+=1;
      당번_회차change();
  }
  if (e.target.classList.contains('색칠할번호_로연결된text_class')) {
    console.log('바디클릭시동작설정(e) ==> e.target.classList.contains(색칠할번호_로연결된text_class)');
    //★★★
    전체변수_색칠할번호들_아이디=e.target.innerHTML;//설명정보 생성시 필요
    //★★★
    색칠동작();
}
}
var 바디리스너용=document.querySelector('body');
바디리스너용.addEventListener('click',바디클릭시동작설정)














  // ★★ 버튼 눌렀을때 번호들 가져오기
  function 색칠_45_간격당당첨빈버튼() {
    var 간격6html;
    var 간격;
    var 배열=[];
    for (var i=0; i<6; i++) {
      if(i==0) {간격6html='<button></button>'} else {간격6html+='<button></button>'}
    }
    document.querySelector('#색칠45_간격당당첨_있다면다음회차').innerHTML=간격6html;
    document.querySelector('#색칠45_간격당당첨_순번').innerHTML='다음회차당개';
    document.querySelector('#색칠45_간격당당첨_내림_있다면다음회차').innerHTML=간격6html;
    document.querySelector('#색칠45_간격당당첨_내림_순번').innerHTML='내림차순당개';
    // 빈버튼 만들기
    for (var i=0; i<100; i++) {
        if(i==0) {
          document.querySelector('#색칠45_간격당당첨_당번').innerHTML='<div>' + 간격6html + '</div>';
          document.querySelector('#색칠45_간격당당첨_내림_당번').innerHTML='<div>' + 간격6html + '</div>';
        } else {
          document.querySelector('#색칠45_간격당당첨_당번').innerHTML+='<div>' + 간격6html + '</div>';
          document.querySelector('#색칠45_간격당당첨_내림_당번').innerHTML+='<div>' + 간격6html + '</div>';
        }
     }
  }
  function 여러당번개수작성() {
    //추가:1==>01형태로 13_3 형태로 간격_다음회차 간격번호에 당첨개수 형태로 정렬후 간격부분과 당첨개수부분으로 뿌리기
    //첫번호일때 당첨이 마지막번호에서 45사이에 있는지 + 1에서 첫번호까지 당첨있는지 = 개수에서 
    var 버튼중복;
    var 버튼1개div;
    var 버튼3개div;
    var 버튼5개div;
    var 버튼7개div;
    for (var i=0; i<7; i++) {
      if (i==0) {
        버튼중복='<button></button>';
      } else {
        버튼중복+='<button></button>';
      }
      if (i==0) {
        버튼1개div='<div>' + 버튼중복 + '</div>';
      }
      if (i==2) {
        버튼3개div='<div>' + 버튼중복 + '</div>';
      }
      if (i==4) {
        버튼5개div='<div>' + 버튼중복 + '</div>';
      }
      if (i==6) {
        버튼7개div='<div>' + 버튼중복 + '</div>';
      }
    }
    var 완성버튼1개div;
    var 완성버튼3개div;
    var 완성버튼5개div;
    var 완성버튼7개div;
    for (var i=0; i<100; i++) {
      if (i==0) {
        완성버튼1개div=버튼1개div;
        완성버튼3개div=버튼3개div;
        완성버튼5개div=버튼5개div;
        완성버튼7개div=버튼7개div;
      } else {
        완성버튼1개div+=버튼1개div;
        완성버튼3개div+=버튼3개div;
        완성버튼5개div+=버튼5개div;
        완성버튼7개div+=버튼7개div;
      }
    }
    document.querySelector('#여러_오주미출버튼').innerHTML=완성버튼3개div;
    document.querySelector('#여러_오주1출버튼').innerHTML=완성버튼3개div;
    document.querySelector('#여러_오주2출버튼').innerHTML=완성버튼3개div;
    document.querySelector('#여러_오주3출버튼').innerHTML=완성버튼3개div;
    document.querySelector('#여러_이웃수버튼').innerHTML=완성버튼3개div;
    document.querySelector('#여러_이월수버튼').innerHTML=완성버튼1개div;
    document.querySelector('#여러_이월이웃수버튼').innerHTML=완성버튼3개div;
    document.querySelector('#여러_단번사십번버튼').innerHTML=완성버튼5개div;
    document.querySelector('#여러_가로라인버튼').innerHTML=완성버튼7개div;
    document.querySelector('#여러_세로라인버튼').innerHTML=완성버튼7개div;

    //5주미출때문에 95번째까지만 작성 95번째에서 96에서 100회에서 미출
    var 단번대=[1,2,3,4,5,6,7,8,9];
    var 십번대=[10,11,12,13,14,15,16,17,18,19];
    var 이십번대=[20,21,22,23,24,25,26,27,28,29];
    var 삼십번대=[30,31,32,33,34,35,36,37,38,39];
    var 사십번대=[40,41,42,43,44,45];
    var 가로1라인=[1,2,3,4,5,6,7];
    var 가로2라인=[8,9,10,11,12,13,14];
    var 가로3라인=[15,16,17,18,19,20,21];
    var 가로4라인=[22,23,24,25,26,27,28];
    var 가로5라인=[29,30,21,32,33,34,35];
    var 가로6라인=[36,37,38,39,40,41,42];
    var 가로7라인=[43,44,45];
    var 세로1라인=[1,8,15,22,29,36,43];
    var 세로2라인=[2,9,16,23,30,37,44];
    var 세로3라인=[3,10,17,24,31,38,45];
    var 세로4라인=[4,11,18,25,32,39];
    var 세로5라인=[5,12,19,26,33,40];
    var 세로6라인=[6,13,20,27,34,41];
    var 세로7라인=[7,14,21,28,35,42];
    var 현재당번=[];
    var 오주당번=[];
    var 전회차당번=[];
    var 이월수=[];
    var 이웃수=[];
    var 이월이웃수=[];

    var 오주미출개수=0;
    var 오주1출개수=0;
    var 오주2출개수=0;
    var 오주3출이상개수=0;
    var 오주미출당개=0;
    var 오주1출당개=0;
    var 오주2출당개=0;
    var 오주3출이상당개=0;
    var 이월당개=0;
    var 단번당개=0;
    var 십번당개=0;
    var 이십번당개=0;
    var 삼십번당개=0;
    var 사십번당개=0;
    var 가로1당개=0;
    var 가로2당개=0;
    var 가로3당개=0;
    var 가로4당개=0;
    var 가로5당개=0;
    var 가로6당개=0;
    var 가로7당개=0;
    var 세로1당개=0;
    var 세로2당개=0;
    var 세로3당개=0;
    var 세로4당개=0;
    var 세로5당개=0;
    var 세로6당개=0;
    var 세로7당개=0;
    var 이웃당개=0;
    var 이월이웃당개=0;
    var 빼기추가;
    var 더하기추가;

    var 전체당번button=document.querySelectorAll('#전체당번 button'); //8개중 2-7 6개번호(보볼제외)

    for (var 회차=0; 회차<95; 회차++) {
      현재당번=[];
      오주당번=[];
      전회차당번=[];
      이월수7=[];
      이웃수=[];
      이월이웃수=[];
  
      오주미출개수=0;
      오주1출개수=0;
      오주2출개수=0;
      오주3출이상개수=0;
      오주미출당개=0;
      오주1출당개=0;
      오주2출당개=0;
      오주3출이상당개=0;
      이월당개=0; //전회차당번이 현재당번에 몇개 있는지
      단번당개=0;
      십번당개=0;
      이십번당개=0;
      삼십번당개=0;
      사십번당개=0;
      가로1당개=0;
      가로2당개=0;
      가로3당개=0;
      가로4당개=0;
      가로5당개=0;
      가로6당개=0;
      가로7당개=0;
      세로1당개=0;
      세로2당개=0;
      세로3당개=0;
      세로4당개=0;
      세로5당개=0;
      세로6당개=0;
      세로7당개=0;
      이웃당개=0;
      이월이웃당개=0;

      for (var i=0; i<48; i++) {
        if (i%8==0 || i%8==7) {//i%8==0 || i%8==7 보볼제외시
          //첫번째 0 = 회차, 8번째 7 = 보볼
        } else {
          if (i<7) { //2-7까지만 넣게됨
            현재당번.push(전체당번button[(회차*8)+i].innerText*1)
          }
          if (i>7 && i<16) { //10-15까지만 넣게됨
            전회차당번.push(전체당번button[(회차*8)+i].innerText*1)
          }
          if (i>7) { //10-15까지만 넣게됨
            오주당번.push(전체당번button[(회차*8)+i].innerText*1)
          }
        }
      }
      이월수7=전회차당번;
      이월이웃수=전회차당번;
      for (i=0; i<6; i++) {
        if (이월수7[i]==1) {
          빼기추가=45;
          더하기추가=2;
        } else if (이월수7[i]==45) {
          빼기추가=44;
          더하기추가=1;
        } else {
          빼기추가=이월수7[i]-1;
          더하기추가=이월수7[i]+1;
        }
        if (이월수7.filter(element => element*1 == 빼기추가).length==0) {
          이웃수.push(빼기추가);
          이월이웃수.push(빼기추가);
        }
        if (이월수7.filter(element => element*1 == 더하기추가).length==0) {
          이웃수.push(더하기추가);
          이월이웃수.push(더하기추가);
        }
      }
      document.querySelectorAll('#여러_이웃수버튼 button')[(회차*3)].innerHTML=이웃수.length;
      if ((7*이웃수.length)/45<1) {
        document.querySelectorAll('#여러_이웃수버튼 button')[(회차*3)+1].innerHTML=((7*이웃수.length)/45).toPrecision(1);
      } else {
        document.querySelectorAll('#여러_이웃수버튼 button')[(회차*3)+1].innerHTML=((7*이웃수.length)/45).toPrecision(2);
      }
      document.querySelectorAll('#여러_이월이웃수버튼 button')[(회차*3)].innerHTML=이월이웃수.length;
      if ((7*이월이웃수.length)/45<1) {
        document.querySelectorAll('#여러_이월이웃수버튼 button')[(회차*3)+1].innerHTML=((7*이월이웃수.length)/45).toPrecision(1);
      } else {
        document.querySelectorAll('#여러_이월이웃수버튼 button')[(회차*3)+1].innerHTML=((7*이월이웃수.length)/45).toPrecision(2);
      }
      for (i=0; i<이웃수.length; i++) {
        if (현재당번.filter(element => 이웃수[i]*1 == element).length==1) {이웃당개=이웃당개+1};
      }
      document.querySelectorAll('#여러_이웃수버튼 button')[회차*3+2].innerHTML=이웃당개;
      for (i=0; i<이월이웃수.length; i++) {
        if (현재당번.filter(element => 이월이웃수[i]*1 == element).length==1) {이월이웃당개=이월이웃당개+1};
      }
      document.querySelectorAll('#여러_이월이웃수버튼 button')[회차*3+2].innerHTML=이월이웃당개;



      //5주미출,1,2,3출 작성중
      for (var 사오=1; 사오<46; 사오++) {
        if (오주당번.filter(element => element*1 == 사오).length==0) {
          오주미출개수=오주미출개수+1;
          if (현재당번.filter(element => element*1 == 사오).length==1) {오주미출당개=오주미출당개+1};
        } else if (오주당번.filter(element => element*1 == 사오).length==1) {
          오주1출개수=오주1출개수+1;
          if (현재당번.filter(element => element*1 == 사오).length==1) {오주1출당개=오주1출당개+1};
        } else if (오주당번.filter(element => element*1 == 사오).length==2) {
          오주2출개수=오주2출개수+1;
          if (현재당번.filter(element => element*1 == 사오).length==1) {오주2출당개=오주2출당개+1};
        } else {
          오주3출이상개수=오주3출이상개수+1;
          if (현재당번.filter(element => element*1 == 사오).length==1) {오주3출이상당개=오주3출이상당개+1};
        }
      }
      document.querySelectorAll('#여러_오주미출버튼 button')[(회차*3)].innerHTML=오주미출개수;
      document.querySelectorAll('#여러_오주미출버튼 button')[(회차*3)+1].innerHTML=((7*오주미출개수)/45).toPrecision(2);
      document.querySelectorAll('#여러_오주미출버튼 button')[(회차*3)+2].innerHTML=오주미출당개;
      document.querySelectorAll('#여러_오주1출버튼 button')[(회차*3)].innerHTML=오주1출개수;
      document.querySelectorAll('#여러_오주1출버튼 button')[(회차*3)+1].innerHTML=((7*오주1출개수)/45).toPrecision(2);
      document.querySelectorAll('#여러_오주1출버튼 button')[(회차*3)+2].innerHTML=오주1출당개;
      document.querySelectorAll('#여러_오주2출버튼 button')[(회차*3)].innerHTML=오주2출개수;
      if ((7*오주2출개수)/45<1) {
        document.querySelectorAll('#여러_오주2출버튼 button')[(회차*3)+1].innerHTML=((7*오주2출개수)/45).toPrecision(1);
      } else {
        document.querySelectorAll('#여러_오주2출버튼 button')[(회차*3)+1].innerHTML=((7*오주2출개수)/45).toPrecision(2);
      }
      document.querySelectorAll('#여러_오주2출버튼 button')[(회차*3)+2].innerHTML=오주2출당개;
      document.querySelectorAll('#여러_오주3출버튼 button')[(회차*3)].innerHTML=오주3출이상개수;
      if ((7*오주3출이상개수)/45<1) {
        document.querySelectorAll('#여러_오주3출버튼 button')[(회차*3)+1].innerHTML=((7*오주3출이상개수)/45).toPrecision(1);
      } else {
        document.querySelectorAll('#여러_오주3출버튼 button')[(회차*3)+1].innerHTML=((7*오주3출이상개수)/45).toPrecision(2);
      }
      document.querySelectorAll('#여러_오주3출버튼 button')[(회차*3)+2].innerHTML=오주3출이상당개;
      //이월,이웃,이월+이웃수작성중
      for (i=0; i<6; i++) {
        if (현재당번.filter(element => 전회차당번[i]*1 == element).length==1) {이월당개=이월당개+1};
      }
      document.querySelectorAll('#여러_이월수버튼 button')[회차].innerHTML=이월당개;
      //단번~40번대 : 단번대9, 1,2,3십번대 10, 40번대 6
      for (i=0; i<10; i++) {
        if (i<9 && 현재당번.filter(element => 단번대[i] == element).length==1) {단번당개=단번당개+1}
        if (i<10 && 현재당번.filter(element => 십번대[i] == element).length==1) {십번당개=십번당개+1}
        if (i<10 && 현재당번.filter(element => 이십번대[i] == element).length==1) {이십번당개=이십번당개+1}
        if (i<10 && 현재당번.filter(element => 삼십번대[i] == element).length==1) {삼십번당개=삼십번당개+1}
        if (i<6 && 현재당번.filter(element => 사십번대[i] == element).length==1) {사십번당개=사십번당개+1}
      }
      document.querySelectorAll('#여러_단번사십번버튼 button')[회차*5].innerHTML=단번당개;
      document.querySelectorAll('#여러_단번사십번버튼 button')[회차*5+1].innerHTML=십번당개;
      document.querySelectorAll('#여러_단번사십번버튼 button')[회차*5+2].innerHTML=이십번당개;
      document.querySelectorAll('#여러_단번사십번버튼 button')[회차*5+3].innerHTML=삼십번당개;
      document.querySelectorAll('#여러_단번사십번버튼 button')[회차*5+4].innerHTML=사십번당개;
      //가로,세로라인
      for (i=0; i<6; i++) {
        if (현재당번.filter(element => 가로1라인[i] == element).length==1) {가로1당개=가로1당개+1}
        if (현재당번.filter(element => 가로2라인[i] == element).length==1) {가로2당개=가로2당개+1}
        if (현재당번.filter(element => 가로3라인[i] == element).length==1) {가로3당개=가로3당개+1}
        if (현재당번.filter(element => 가로4라인[i] == element).length==1) {가로4당개=가로4당개+1}
        if (현재당번.filter(element => 가로5라인[i] == element).length==1) {가로5당개=가로5당개+1}
        if (현재당번.filter(element => 가로6라인[i] == element).length==1) {가로6당개=가로6당개+1}
        if (현재당번.filter(element => 가로7라인[i] == element).length==1) {가로7당개=가로7당개+1}
        if (현재당번.filter(element => 세로1라인[i] == element).length==1) {세로1당개=가로1당개+1}
        if (현재당번.filter(element => 세로2라인[i] == element).length==1) {세로2당개=가로2당개+1}
        if (현재당번.filter(element => 세로3라인[i] == element).length==1) {세로3당개=가로3당개+1}
        if (현재당번.filter(element => 세로4라인[i] == element).length==1) {세로4당개=가로4당개+1}
        if (현재당번.filter(element => 세로5라인[i] == element).length==1) {세로5당개=가로5당개+1}
        if (현재당번.filter(element => 세로6라인[i] == element).length==1) {세로6당개=가로6당개+1}
        if (현재당번.filter(element => 세로7라인[i] == element).length==1) {세로7당개=가로7당개+1}
      }
      document.querySelectorAll('#여러_가로라인버튼 button')[회차*7].innerHTML=가로1당개;
      document.querySelectorAll('#여러_가로라인버튼 button')[회차*7+1].innerHTML=가로2당개;
      document.querySelectorAll('#여러_가로라인버튼 button')[회차*7+2].innerHTML=가로3당개;
      document.querySelectorAll('#여러_가로라인버튼 button')[회차*7+3].innerHTML=가로4당개;
      document.querySelectorAll('#여러_가로라인버튼 button')[회차*7+4].innerHTML=가로5당개;
      document.querySelectorAll('#여러_가로라인버튼 button')[회차*7+5].innerHTML=가로6당개;
      document.querySelectorAll('#여러_가로라인버튼 button')[회차*7+6].innerHTML=가로7당개;
      document.querySelectorAll('#여러_세로라인버튼 button')[회차*7].innerHTML=세로1당개;
      document.querySelectorAll('#여러_세로라인버튼 button')[회차*7+1].innerHTML=세로2당개;
      document.querySelectorAll('#여러_세로라인버튼 button')[회차*7+2].innerHTML=세로3당개;
      document.querySelectorAll('#여러_세로라인버튼 button')[회차*7+3].innerHTML=세로4당개;
      document.querySelectorAll('#여러_세로라인버튼 button')[회차*7+4].innerHTML=세로5당개;
      document.querySelectorAll('#여러_세로라인버튼 button')[회차*7+5].innerHTML=세로6당개;
      document.querySelectorAll('#여러_세로라인버튼 button')[회차*7+6].innerHTML=세로7당개;




    }











        //내부에 개별적으로 숨긴것은 복원이 안되므로 개별적으로 다 복구해놓기
        document.querySelector('#여러당번개수').classList.remove('d-none');
        document.querySelector('#li_여러당번개수보기숨기기').innerText='[모두숨기기][3]여러당번개수';
        for (i=0; i<document.querySelectorAll('#여러당번개수 > div').length;i++) {
          document.querySelectorAll('#여러당번개수>div')[i].classList.remove('d-none');
        }
  }
  function 색칠_45_간격() {
    //추가:1==>01형태로 13_3 형태로 간격_다음회차 간격번호에 당첨개수 형태로 정렬후 간격부분과 당첨개수부분으로 뿌리기
    //첫번호일때 당첨이 마지막번호에서 45사이에 있는지 + 1에서 첫번호까지 당첨있는지 = 개수에서 
    var 간격6html;
    var 간격_다음당개=[];
    var 당개;
    var 다음당번=[];
    var 배열=[]; //두개 붙은 것 한세트
    for (var i=0; i<6; i++) {
      if(i==0) {간격6html='<button></button>'} else {간격6html+='<button></button>'}
    }
    document.querySelector('#색칠45_간격_이월_있다면다음회차').innerHTML='<button></button>';//추가
    document.querySelector('#색칠45_간격_있다면다음회차').innerHTML=간격6html;
    document.querySelector('#색칠45_원간격_있다면다음회차').innerHTML=간격6html; //원간격
    document.querySelector('#색칠45_간격당당첨_내림_있다면다음회차').innerHTML=간격6html; //작성중
    if (document.querySelector('#회차select').selectedIndex==0) {
      
       } else {
        // 다음회차 당번 있을때, 당개를 적지 않는다.
        for (var t=0; t<6; t++) {
          if (t==0) {
            간격_다음당개=44-document.querySelectorAll('#있다면다음회차 button')[6].innerHTML*1+document.querySelectorAll('#있다면다음회차 button')[1].innerHTML*1;
            배열.push(간격_다음당개);
          } else {
            간격_다음당개=-1+document.querySelectorAll('#있다면다음회차 button')[t+1].innerHTML*1-document.querySelectorAll('#있다면다음회차 button')[t+0].innerHTML*1;
            배열.push(간격_다음당개);
          }
        }
        // 배열에 담고 정렬후 다시 뿌리기 !!원간격에서 당번기록하는것으로
         //원간격
        for (var t=0; t<6; t++) {
          document.querySelectorAll('#색칠45_원간격_있다면다음회차 button')[t].innerHTML=배열[t];
        } //--원간격
        //!!원간격에서 당번기록하는것으로
        배열.sort((a,m) => m-a);
        for (var t=0; t<6; t++) {
          document.querySelectorAll('#색칠45_간격_있다면다음회차 button')[t].innerHTML=배열[t];
        }
    }
    document.querySelector('#색칠45_간격_순번').innerHTML='간격 내림차순(정렬만)';
    document.querySelector('#색칠45_원간격_순번').innerHTML='원간격'; //원간격
    document.querySelector('#색칠45_간격_이월_순번').innerHTML='이월'; //원간격
    // 빈버튼 만들기
    for (var i=0; i<100; i++) {
        if(i==0) {
          document.querySelector('#색칠45_간격_이월').innerHTML='<div><button></button></div>';
          document.querySelector('#색칠45_간격_당번').innerHTML='<div>' + 간격6html + '</div>';
          document.querySelector('#색칠45_원간격_당번').innerHTML='<div>' + 간격6html + '</div>'; //원간격
        } else {
          document.querySelector('#색칠45_간격_이월').innerHTML+='<div><button></button></div>';
          document.querySelector('#색칠45_간격_당번').innerHTML+='<div>' + 간격6html + '</div>';
          document.querySelector('#색칠45_원간격_당번').innerHTML+='<div>' + 간격6html + '</div>'; //원간격
        }
     }

    // 배열초기화
    for (var i=0; i<100; i++) {
      다음당번=[];
      if (i==0) {
        if (document.querySelector('#회차select').selectedIndex==0) {
          다음당번=[0,0,0,0,0,0];
        } else {
          for (var t=0; t<6; t++) {
            다음당번.push(document.querySelectorAll('#있다면다음회차 button')[t+1].innerHTML*1);
          }
        }
      }
      if (i!=0) {
        for (var t=0; t<6; t++) {
          다음당번.push(document.querySelectorAll('#전체당번 button')[(i*8)+t-7].innerHTML*1);
        }
      }
      //간격
      var 개수=0;
      for (var t=0; t<6; t++) {
        if (t==0) {
          간격_다음당개=44-document.querySelectorAll('#전체당번 button')[(i*8)+t+6].innerHTML*1+document.querySelectorAll('#전체당번 button')[(i*8)+t+1].innerHTML*1;
          document.querySelectorAll('#색칠45_원간격_당번 button')[(i*6)+t].innerHTML=간격_다음당개;//원간격
           if (간격_다음당개.toString().length==1) {간격_다음당개= '0' + 간격_다음당개;}
           //당개구하고 붙이기 (100개부분), data.sort((a, b) => 첫번째 조건 || 두번째 조건);
          //  console.log('다음당번 : ' + 다음당번 + ' ' + document.querySelectorAll('#전체당번 button')[(i*8)+t+6].innerHTML*1 + ' 보다 크거나' + document.querySelectorAll('#전체당번 button')[(i*8)+t+1].innerHTML*1 + ' 보다 작은것 개수');
               if (다음당번[0]==0) {
                   당개=0
                } else {
                당개=다음당번.filter(element => element >(document.querySelectorAll('#전체당번 button')[(i*8)+t+6].innerHTML*1) || element < document.querySelectorAll('#전체당번 button')[(i*8)+t+1].innerHTML*1).length;
                } 
               간격_다음당개=간격_다음당개 + '_' + 당개;
               개수+=당개; //이월수관련
      }
        else {
          간격_다음당개=-1+document.querySelectorAll('#전체당번 button')[(i*8)+t+1].innerHTML*1-document.querySelectorAll('#전체당번 button')[(i*8)+t+0].innerHTML*1;
          document.querySelectorAll('#색칠45_원간격_당번 button')[(i*6)+t].innerHTML=간격_다음당개;//원간격
           if (간격_다음당개.toString().length==1) {간격_다음당개= '0' + 간격_다음당개;}
           //당개구하고 붙이기
           당개=다음당번.filter(element => element <document.querySelectorAll('#전체당번 button')[(i*8)+t+1].innerHTML &&  element > document.querySelectorAll('#전체당번 button')[(i*8)+t+0].innerHTML).length;
           간격_다음당개=간격_다음당개 + '_' + 당개;
           개수+=당개; //이월수관련
      }
      //왼쪽에 먼저 뿌리기
        document.querySelectorAll('#색칠45_간격_당번 button')[(i*6)+t].innerHTML=간격_다음당개;
      }
        // 배열에 담고 정렬후 두군데로 나눠서 다시 뿌리기
        배열=[];
        for (var t=0; t<6; t++) {
          배열.push(document.querySelectorAll('#색칠45_간격_당번 button')[(i*6)+t].innerHTML);
        }

        //reverse 전에 추가됨(다음회차 당개가 원간격에서 나오게)
        for (var t=0; t<6; t++) {
          document.querySelectorAll('#색칠45_간격당당첨_당번 button')[(i*6)+t].innerHTML=배열[t].split('_')[1];
        }

          배열.sort().reverse();

        for (var t=0; t<6; t++) {
          document.querySelectorAll('#색칠45_간격_당번 button')[(i*6)+t].innerHTML=배열[t].split('_')[0];
        }
        for (var t=0; t<6; t++) {
          document.querySelectorAll('#색칠45_간격당당첨_내림_당번 button')[(i*6)+t].innerHTML=배열[t].split('_')[1];
        }

        //왼쪽 01 형식을 숫자로 변경
        for (var t=0; t<6; t++) {
          if (document.querySelectorAll('#색칠45_간격_당번 button')[(i*6)+t].innerHTML[0]==0) {
              document.querySelectorAll('#색칠45_간격_당번 button')[(i*6)+t].innerHTML=document.querySelectorAll('#색칠45_간격_당번 button')[(i*6)+t].innerHTML[1];
          }
        }
        if (document.querySelector('#회차select').selectedIndex==0 && i==0) {
          document.querySelectorAll('#색칠45_간격_이월 button')[i].innerHTML=0;
        } else {
          document.querySelectorAll('#색칠45_간격_이월 button')[i].innerHTML=6-개수;
        }
   }
   document.querySelector('#세로구분_색칠45_원간격').classList.remove('d-none');
   document.querySelector('#세로구분_색칠45_간격').classList.remove('d-none');
   document.querySelector('#세로구분_색칠45_간격당당첨').classList.remove('d-none');
   document.querySelector('#세로구분_색칠45_내림_간격당당첨').classList.remove('d-none');
   document.querySelector('#세로구분_색칠45_이월').classList.remove('d-none');
   document.querySelector('#세로구분_색칠45').classList.remove('d-none');
   document.querySelector('#li_색칠45보기숨기기').innerText='[숨기기][2]색칠45만';
   document.querySelector('#li_간격45보기숨기기').innerText='[숨기기][2]간격45만';
   document.querySelector('#li_45간격과색칠모두보기숨기기').innerHTML='[모두숨기기][2]45간격과색칠';
  }
  function 색칠_45() {
    var 버튼45html;
    for (var i=0; i<45; i++) {
      if(i==0) {버튼45html='<button></button>'} else {버튼45html+='<button></button>'}
    }
    if (document.querySelector('#회차select').selectedIndex==0) {
      document.querySelector('#색칠45_있다면다음회차').innerHTML=버튼45html;
       } else {
        // 다음회차 당번 있을때
        document.querySelector('#색칠45_있다면다음회차').innerHTML=버튼45html;//이거 없으면 회차바꾼후 첫 실행시 에러난다.
        for (var t=0; t<6; t++) {//색칠_45실행이 안된 경우 undefined이다
          번호=document.querySelectorAll('#있다면다음회차 button')[t+1].innerHTML*1
          //현재 45개 버튼을 품고있는 몇번째 div인가, 현재 div안의 몇번째 버튼에 색칠할것인가
          //숫자 예 : var 시작배열값=(회차개수-1)*9; 
          document.querySelectorAll('#색칠45_있다면다음회차 button')[번호-1].innerHTML=번호;//회차를 바꾼후
  
          document.querySelectorAll('#색칠45_있다면다음회차 button')[번호-1].classList.add('사오색칠');
  
        }
    }

    document.querySelector('#색칠45_순번').innerHTML=버튼45html;
    for (i=0; i<45; i++) {
      document.querySelectorAll('#색칠45_순번 button')[i].innerHTML=i+1
    }

    // 빈버튼 만들기
    for (var i=0; i<100; i++) {
        if(i==0) {
          document.querySelector('#색칠45_당번').innerHTML='<div>' + 버튼45html + '</div>';
        } else {
          document.querySelector('#색칠45_당번').innerHTML+='<div>' + 버튼45html + '</div>';
        }
     }

    // 색칠하기
    var 번호;
    for (var i=0; i<100; i++) {
      //당번 6개씩 번호 넣고 색칠하기
      for (var t=0; t<6; t++) {
        번호=document.querySelectorAll('#전체당번 button')[(i*8)+t+1].innerHTML*1
        //현재 45개 버튼을 품고있는 몇번째 div인가, 현재 div안의 몇번째 버튼에 색칠할것인가
        //숫자 예 : var 시작배열값=(회차개수-1)*9; 
        document.querySelectorAll('#색칠45_당번 button')[(i*45)+번호-1].innerHTML=번호;

        document.querySelectorAll('#색칠45_당번 button')[(i*45)+번호-1].classList.add('사오색칠');

      }
   }
   색칠_45_간격당당첨빈버튼()
   색칠_45_간격();

  }
  function 임시_셑팅번호_만개에색칠() {

    if (document.querySelector('#세로구분_색칠관련 #현재색칠번호들').innerHTML=='') {return;}
    var 번호들=document.querySelector('#세로구분_색칠관련 #현재색칠번호들').innerHTML.trim().split('_');
    var 버튼들=document.querySelectorAll('#추출만개 > div > button:not(.순번)'); 
    console.log('버튼들.length : ' + 버튼들.length)
    for (var i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<버튼들.length; i++) {
      if (번호들.filter(element => 버튼들[i].innerHTML == element).length!==0) {
        버튼들[i].classList.add('색칠용버튼');
        버튼들[i].setAttribute('title',버튼들[i].innerHTML);
      }
    }
    버튼들=document.querySelectorAll('#세로구분_색칠관련 #모달번호45_있다면다음당번 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<버튼들.length; i++) {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
    }
      //모달회차SELECTEDINDEX, 당번회차SELECTEDINDEX
      버튼들=document.querySelectorAll('#세로구분_당첨번호들 #전체당번 button');
      if (document.querySelector('#세로구분_색칠관련 #색칠용회차select').selectedIndex>=document.querySelector('#세로구분_당첨번호들 #회차select').selectedIndex) {
        var index차이=document.querySelector('#세로구분_색칠관련 #색칠용회차select').selectedIndex-document.querySelector('#세로구분_당첨번호들 #회차select').selectedIndex;
        버튼들[(index차이*8)].classList.add('색칠용버튼');
      }
  }

  function 임시_피해서번호색칠() {
    console.log('피해서번호색칠()');
    //피할번호연계 클래스 모두 지우고 시작
    var 버튼들=document.querySelectorAll('#색칠용modal-body button');//필요없는버튼 두개가 더 있다. 칠, 번호종류
    var 색칠용버튼숫자=document.querySelectorAll('#색칠용modal-body .색칠용버튼').length;
    //피할번호 있으면 작동, 몫과 나머지 구해놓기
    var 몫=[];
    var 나머지=[];
    var 번호묶음text='';
    if (색칠용버튼숫자>0) {
      for (var i=0; i<45; i++) {
        if (버튼들[i].classList.contains('색칠용버튼')) {
          몫.push(Math.floor( i / 7));
          나머지.push(i % 7);
        }
      }
    }
    //몫.find(element => element==Math.floor(i / 7))    나머지.find(element => element==(i % 7))
    console.log('몫 : ' + 몫 + ' , 나머지 : ' + 나머지)

    var 중복포함번호들=[];
    for (var i=0; i<45; i++) {
      // console.log('번호 ' + (i+1) + ' 의 몫 : ' + Math.floor(i / 7) + ' 개수 : ' + 몫.filter(element => element==Math.floor(i / 7)).length)
      if (몫.filter(element => element==Math.floor(i / 7)).length==0) {
        if (번호묶음text=='') {
          중복포함번호들.push(i+1);
          번호묶음text=(i+1);
        } else {
          중복포함번호들.push(i+1);
          번호묶음text=번호묶음text + '_' + (i+1);
        }
        // 버튼들[i].classList.add('색칠용버튼');
        // 버튼들[i].setAttribute('title',버튼들[i].innerHTML);
      }
      if (나머지.filter(element => element==(i % 7)).length==0) {
        if (번호묶음text=='') {
          중복포함번호들.push(i+1);
          번호묶음text=(i+1);
        } else {
          중복포함번호들.push(i+1);
          번호묶음text=번호묶음text + '_' + (i+1);
        }
        // 버튼들[i].classList.add('색칠용버튼');
        // 버튼들[i].setAttribute('title',버튼들[i].innerHTML);
      }
    }

    var 중복제거번호들=new Set(중복포함번호들);
    중복제거번호들=[...중복제거번호들];

    document.querySelector('#현재색칠번호들').innerHTML=중복제거번호들.join('_');

    모달색칠해제();
    셑팅번호_당번에색칠();
    임시_셑팅번호_만개에색칠();
    셑팅번호_모달에색칠();
    document.querySelector('#평균계산값').innerHTML='';

    var 숫자개수=중복제거번호들.length;
    var 평균=(숫자개수/7).toPrecision(2);
    var return값=' (' + 숫자개수 + '개, 평균 : ' + 평균 + ')';
    if (숫자개수>0) {
      document.querySelector('#평균계산값').innerHTML=return값;
    }

    document.querySelector('#현재색칠정보').innerHTML='피해서번호';
  }

  function 임시번호6() {//지워도 됨
    //번호들은 순서대로 되어있고 있는배열 개수만큼 푸시값 추가하여 푸시값에서 픽하여 index를 따고 있는 번호들의 index......
    for (var 출=0; 출<40; 출++) {
        var 랜덤=[], 개수=0, i=0, 푸시값, 추출6=[];
        while (i<45) {
          푸시값=Math.floor(Math.random()*1000);
          if (!랜덤.find(element => element == 푸시값)) {랜덤.push(푸시값);i++;}
        }
        for (var i=0; i<6; i++) {
          추출6.push(랜덤.indexOf(Math.max(...랜덤))+1);//인덱스 추출
          랜덤[랜덤.indexOf(Math.max(...랜덤))]=0;//최대값을 0으로 변경(최소화시킴)
        }
        console.log(추출6.sort((a, b) => a - b))
    }
  }
  function 임시_색칠할번호들call(e) {
    if (e.target.nodeName!='BUTTON') {return;}
    e.target.previousElementSibling.previousElementSibling.value=document.querySelector('#현재색칠정보').innerHTML + document.querySelector('#평균계산값').innerHTML;
    e.target.previousElementSibling.value=document.querySelector('#현재색칠번호들').innerHTML;

  }
  임시.addEventListener('click',임시_색칠할번호들call)



  function 임시clear() {
    document.querySelector('#추출만개').innerHTML='';
  }
  function 임시추출30개() {
    //<div>버튼6개</div>
    var 버튼6개='';
    var 세로백개html='';
    var 세로순번html='';
    for (var i=0; i<30; i++) {
      세로순번html+='<button class="순번">' + (i+1) + '</button>';
    }
    if (document.querySelector('#추출만개').innerHTML=='') {
      document.querySelector('#추출만개').innerHTML='<p style="margin-bottom:10px;"><button style="width:140px;" onclick="임시clear()">번호추출조건보기</button></p>'
      document.querySelector('#추출만개').innerHTML+=세로순번html='<div style="width:31px">' + 세로순번html + '</div>';
    }

    for (var i=0; i<30; i++) {

      var 랜덤=[], 개수=0, 내부=0, 푸시값, 추출6=[], 버튼6개='';
      while (내부<45) {
        푸시값=Math.floor(Math.random()*1000);
        if (!랜덤.find(element => element == 푸시값)) {랜덤.push(푸시값);내부++;}
      }
      for (var 내부=0; 내부<6; 내부++) {
        추출6.push(랜덤.indexOf(Math.max(...랜덤))+1);//인덱스 추출
        랜덤[랜덤.indexOf(Math.max(...랜덤))]=0;//최대값을 0으로 변경(최소화시킴)
      }
      추출6.sort((a, b) => a - b)

      for (var 내부=0; 내부<6; 내부++) {
        버튼6개+='<button>' + 추출6[내부] + '</button>'
      }
      세로백개html+=버튼6개;
    }
    세로백개html='<div>' + 세로백개html + '</div>'
    document.querySelector('#추출만개').innerHTML+=세로백개html;
    칠_click();
  }
  function 당번색칠해제() {
    var 버튼들=버튼들=document.querySelectorAll('#전체당번 button');
    for (var i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    버튼들=document.querySelectorAll('#있다면다음회차 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
          //모달회차SELECTEDINDEX, 당번회차SELECTEDINDEX
          var 버튼들=document.querySelectorAll('#전체당번 button');
          if (document.querySelector('#색칠용회차select').selectedIndex>=document.querySelector('#회차select').selectedIndex) {
            var index차이=document.querySelector('#색칠용회차select').selectedIndex-document.querySelector('#회차select').selectedIndex;
            버튼들[(index차이*8)].classList.add('색칠용버튼');
          }
  }
  function 모달색칠해제() {
    var 버튼들=document.querySelectorAll('#색칠용modal-body button');
    for (var i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    버튼들=document.querySelectorAll('#모달번호45_있다면다음당번 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
          //모달회차SELECTEDINDEX, 당번회차SELECTEDINDEX
          var 버튼들=document.querySelectorAll('#전체당번 button');
          if (document.querySelector('#색칠용회차select').selectedIndex>=document.querySelector('#회차select').selectedIndex) {
            var index차이=document.querySelector('#색칠용회차select').selectedIndex-document.querySelector('#회차select').selectedIndex;
            버튼들[(index차이*8)].classList.add('색칠용버튼');
          }
  }
  function 현재색칠정보_click_색과정보초기화() {
    document.querySelector('#현재색칠정보').innerHTML='색칠할정보';
    document.querySelector('#현재색칠번호들').innerHTML='';
    당번색칠해제()
    모달색칠해제()
        //모달회차SELECTEDINDEX, 당번회차SELECTEDINDEX
        var 버튼들=document.querySelectorAll('#전체당번 button');
        if (document.querySelector('#색칠용회차select').selectedIndex>=document.querySelector('#회차select').selectedIndex) {
          var index차이=document.querySelector('#색칠용회차select').selectedIndex-document.querySelector('#회차select').selectedIndex;
          버튼들[(index차이*8)].classList.add('색칠용버튼');
        }
  }
  function 칠_click() {
    document.querySelector('#현재색칠정보').innerHTML='색칠할정보';
    document.querySelector('#현재색칠번호들').innerHTML='';
    var 색칠된번호묶음text;
    var 버튼들=document.querySelectorAll('#색칠용modal-body button'); //45개만쓴다
    var 색칠개수=0;
    for (var i=0; i<45; i++) {
      if (버튼들[i].classList.contains('색칠용버튼')) {색칠개수=색칠개수+1}
    }
    if (색칠개수==0) {당번색칠해제();}
    색칠개수=0;
    for (var i=0; i<45; i++) {
      if (버튼들[i].classList.contains('색칠용버튼')) {
        if (색칠개수==0) {색칠된번호묶음text=버튼들[i].innerHTML;}
        if (색칠개수!==0) {색칠된번호묶음text=색칠된번호묶음text + '_' + 버튼들[i].innerHTML;}
        색칠개수=색칠개수+1;
      }
    }
    document.querySelector('#현재색칠번호들').innerHTML=색칠된번호묶음text;
    당번색칠해제();
    모달색칠해제();
    셑팅번호_당번에색칠();
    임시_셑팅번호_만개에색칠();
    셑팅번호_모달에색칠();
    출_출수제목_click시_숫자개수와평균();
  }
  function 셑팅번호_당번에색칠() {
    if (document.querySelector('#세로구분_색칠관련 #현재색칠번호들').innerHTML=='') {return;}
    var 번호들=document.querySelector('#세로구분_색칠관련 #현재색칠번호들').innerHTML.trim().split('_');
    버튼들=document.querySelectorAll('#세로구분_당첨번호들 #전체당번 button');
    for (var i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<버튼들.length; i++) {
      if (i%8==7) {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          // 보너스볼에 색칠 안함. 아래는 색칠할때
          // 버튼들[i].classList.add('색칠용버튼');
          // 버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      } else {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      }
    }
    //모달회차SELECTEDINDEX, 당번회차SELECTEDINDEX
    if (document.querySelector('#세로구분_색칠관련 #색칠용회차select').selectedIndex>=document.querySelector('#세로구분_당첨번호들 #회차select').selectedIndex) {
      var index차이=document.querySelector('#세로구분_색칠관련 #색칠용회차select').selectedIndex-document.querySelector('#세로구분_당첨번호들 #회차select').selectedIndex;
      버튼들[(index차이*8)].classList.add('색칠용버튼');
    }
    
    // 버튼들=document.querySelectorAll('#세로구분_색칠관련 #있다면다음회차 button');
    버튼들=document.querySelectorAll('#세로구분_당첨번호들 #있다면다음회차 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<버튼들.length; i++) {
      if (i%8==0) {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      } else {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      }
    }
  }
  function 셑팅번호_모달에색칠() {
    if (document.querySelector('#세로구분_색칠관련 #현재색칠번호들').innerHTML=='') {return;}
    var 번호들=document.querySelector('#세로구분_색칠관련 #현재색칠번호들').innerHTML.trim().split('_');
    var 버튼들=document.querySelectorAll('#세로구분_색칠관련 #색칠용modal-body button'); //45개만쓴다
    for (var i=0; i<45; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<45; i++) {
      if (번호들.filter(element => i+1 == element).length!==0) {
        버튼들[i].classList.add('색칠용버튼');
        버튼들[i].setAttribute('title',i+1);
      }
    }
    버튼들=document.querySelectorAll('#세로구분_색칠관련 #모달번호45_있다면다음당번 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<버튼들.length; i++) {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
    }
      //모달회차SELECTEDINDEX, 당번회차SELECTEDINDEX
      버튼들=document.querySelectorAll('#세로구분_당첨번호들 #전체당번 button');
      if (document.querySelector('#세로구분_색칠관련 #색칠용회차select').selectedIndex>=document.querySelector('#세로구분_당첨번호들 #회차select').selectedIndex) {
        var index차이=document.querySelector('#세로구분_색칠관련 #색칠용회차select').selectedIndex-document.querySelector('#세로구분_당첨번호들 #회차select').selectedIndex;
        버튼들[(index차이*8)].classList.add('색칠용버튼');
      }
  }
  function 당번조회와_색칠하기() {
    선택회차날짜와당번넣기();
    셑팅번호_당번에색칠();
  }
  function 당번조회와_색칠하기_플러스_일() {
    if (document.querySelector('#회차select').selectedIndex!==0){
      document.querySelector('#회차select').selectedIndex=
      document.querySelector('#회차select').selectedIndex-1;
      선택회차날짜와당번넣기();
      셑팅번호_당번에색칠();
    }
  }
  function 당번조회와_색칠하기_마이너스_일() {
    document.querySelector('#회차select').selectedIndex=
    document.querySelector('#회차select').selectedIndex+1;
    선택회차날짜와당번넣기();
    셑팅번호_당번에색칠();
  }
  function 선택회차날짜와당번넣기() {//색칠해제됨
    var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
    var 회차개수=Number(당번전체.length/9);
    
    //select안에 option넣는것은 새로고침시 단독작업이다.
    //select안에 option넣는것은 새로고침시 단독작업이다.--->>
    
    var selectedindex=document.querySelector('#회차select').selectedIndex; //선택안되면 -1, 초기화면 0
    var 시작배열값;
    if (selectedindex==-1) {
      var 시작배열값=(회차개수-1)*9; 
    } else {
      시작배열값=(회차개수-selectedindex-1)*9;
    }
    document.querySelector('#span_날짜').innerHTML=당번전체[시작배열값+1]; //날짜
    var span_날짜_다음btn;
    var span_날짜_다음btn_누적;
    var 변경배열값;
    
    //30회차정보가져오기
     for (var 삼십번=0; 삼십번<100; 삼십번++) {
      if (당번전체[시작배열값-(삼십번*9)]) {
        변경배열값=시작배열값-(삼십번*9);
        for (var i=0; i<9; i++) {
          if (i==0) {
            span_날짜_다음btn='<button>' + 당번전체[변경배열값+i] + '회</button>'; 
          } else if (i==1) {
            //날짜 건너뜀
          } else {
            span_날짜_다음btn+='<button>' + 당번전체[변경배열값+i] + '</button>'; 
          }
        }  
        if (삼십번==0) {
          document.querySelector('#전체당번').innerHTML='<div>' + span_날짜_다음btn + '</div>';
        } else {
          document.querySelector('#전체당번').innerHTML=document.querySelector('#전체당번').innerHTML + '<div>' + span_날짜_다음btn + '</div>';
        }
      }
    }
    
    //있다면 다음회차 : 전체당번와 유사
    var 있다면다음회차_btn;
    있다면다음회차_btn='<button>' + (Number(당번전체[시작배열값])+1) + '회</button><button>_</button><button>_</button><button>_</button><button>_</button><button>_</button><button>_</button><button>_</button>';
    
    if (당번전체[시작배열값+10]) {
      있다면다음회차_btn='';
      for (var i=0; i<9; i++) {
        if (i==0) {
          있다면다음회차_btn='<button>' + 당번전체[시작배열값+i+9] + '회</button>'; 
        } else if (i==1) {
          //날짜 건너뜀
        } else {
          있다면다음회차_btn+='<button>' + 당번전체[시작배열값+i+9] + '</button>'; 
        }
      }  
    }  
    document.querySelector('#있다면다음회차').innerHTML=있다면다음회차_btn;
  }
  function 회차select_click() {
    document.querySelector('#span_날짜').innerHTML='';
  }
  function 모달회차_플러스_일 () {
    if (document.querySelector('#색칠용회차select').selectedIndex==0){return;}
    document.querySelector('#색칠용회차select').selectedIndex=
    document.querySelector('#색칠용회차select').selectedIndex-1;
    모달회차_change();
    임시_셑팅번호_만개에색칠();
    셑팅번호_모달에색칠();
  }
  function 모달회차_마이너스_일 () {
    document.querySelector('#색칠용회차select').selectedIndex=
    document.querySelector('#색칠용회차select').selectedIndex+1;
    모달회차_change();
    임시_셑팅번호_만개에색칠();
    셑팅번호_모달에색칠();
  }

  function 모달회차_change() {
    //색칠용번호 넣기 : function과 유사하게 작성할것
      var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
      var 회차개수=Number(당번전체.length/9);
      var selectedindex=document.querySelector('#세로구분_색칠관련 #색칠용회차select').selectedIndex; //선택안되면 -1, 초기화면 0
      var 시작배열값;
    
    var index에서빼기=0;
    시작배열값=(회차개수-selectedindex-index에서빼기)*9;
  
    var 모달다음당번버튼들=document.querySelectorAll('#세로구분_색칠관련 #모달번호45_있다면다음당번 button');
    if (selectedindex>0) {
      for (i=0; i<모달다음당번버튼들.length; i++) {
        모달다음당번버튼들[i].innerHTML=당번전체[시작배열값+i+2];
      }
    } else {
      for (i=0; i<모달다음당번버튼들.length; i++) {
        모달다음당번버튼들[i].innerHTML='_';
      }
    }
    // 15주번호들을 담고 7*10=70개를 0으로 대체하면 5주번호들, 35개를 0으로 대체하면 10주번호들, 대체하지 않으면 15주번호들
    var 오주번호들=[];
    var 십주번호들=[];
    var 십오주번호들=[];
    //새로고침시 십오주번호들 : 
    
    index에서빼기=15;
    시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
    var 순번확인=0;
    
    for (var i=시작배열값; i<Number(시작배열값+135);i++ ) {
      순번확인=순번확인+1;
      if (순번확인>2) {//(순번확인>2)에서 변경
        십오주번호들.push(당번전체[i]);
      }
      if (순번확인==9) {순번확인=0;}
    }
   
    for (i=0; i<십오주번호들.length; i++) {
      if (i<70) {
        오주번호들.push(0);
      } else {
        오주번호들.push(십오주번호들[i]);
      } 
      if (i<35) {
        십주번호들.push(0);
      } else {
        십주번호들.push(십오주번호들[i]);
      } 
    }
    
    var 오주미출수=[];
    //오주미출수를 담는다
    for (i=0; i<45; i++) {
      if (오주번호들.filter(element => (i+1).toString() === element).length==0) {오주미출수.push(i+1);}
     }
    //오주미출수를 담았다. 숫자 제대로 정렬하기 위함.  오주미출수.sort(); 는 문자열로 인식하여 정렬됨
    오주미출수.sort((a,t) => a-t);
    
    var 십주미출수=[];
    //오주미출수를 담는다
    for (i=0; i<45; i++) {
      if (십주번호들.filter(element => (i+1).toString() === element).length==0) {십주미출수.push(i+1);}
     }
    //오주미출수를 담았다. 숫자 제대로 정렬하기 위함.  오주미출수.sort(); 는 문자열로 인식하여 정렬됨
    십주미출수.sort((a,t) => a-t);
    
    var 십오주미출수=[];
    //오주미출수를 담는다
    for (i=0; i<45; i++) {
      if (십오주번호들.filter(element => (i+1).toString() === element).length==0) {십오주미출수.push(i+1);}
     }
    //오주미출수를 담았다. 숫자 제대로 정렬하기 위함.  오주미출수.sort(); 는 문자열로 인식하여 정렬됨
    십오주미출수.sort((a,t) => a-t);
    
    var 오주미출결과;
    var 십주미출결과;
    var 십오주미출결과;
    for (i=0; i<오주미출수.length; i++) {
      if (i==0) {오주미출결과=오주미출수[i];}
      if (i!==0) {오주미출결과=오주미출결과 + '_' + 오주미출수[i];}
    }
    for (i=0; i<십주미출수.length; i++) {
      if (i==0) {십주미출결과=십주미출수[i];}
      if (i!==0) {십주미출결과=십주미출결과 + '_' + 십주미출수[i];}
    }
    for (i=0; i<십오주미출수.length; i++) {
      if (i==0) {십오주미출결과=십오주미출수[i];}
      if (i!==0) {십오주미출결과=십오주미출결과 + '_' + 십오주미출수[i];}
    }
    
    document.querySelector('#오주미출수').innerHTML=오주미출결과;
    document.querySelector('#십주미출수').innerHTML=십주미출결과;
    document.querySelector('#십오주미출수').innerHTML=십오주미출결과;
    
    var 오주1출결과;
    var 오주2출결과;
    var 오주3출결과;
    var 오주4출결과;
    var 오주5출결과;
    var 오주1출=[];
    var 오주2출=[];
    var 오주3출=[];
    var 오주4출=[];
    var 오주5출=[];
    
    for (i=0; i<45; i++) {
      if (오주번호들.filter(element => (i+1).toString() === element).length==1) {오주1출.push(i+1);}
      if (오주번호들.filter(element => (i+1).toString() === element).length==2) {오주2출.push(i+1);}
      if (오주번호들.filter(element => (i+1).toString() === element).length==3) {오주3출.push(i+1);}
      if (오주번호들.filter(element => (i+1).toString() === element).length==4) {오주4출.push(i+1);}
      if (오주번호들.filter(element => (i+1).toString() === element).length==5) {오주5출.push(i+1);}
     }
     for (i=0; i<오주1출.length; i++) {
      if (i==0) {오주1출결과=오주1출[i];}
      if (i!==0) {오주1출결과=오주1출결과 + '_' + 오주1출[i];}
    }
    for (i=0; i<오주2출.length; i++) {
      if (i==0) {오주2출결과=오주2출[i];}
      if (i!==0) {오주2출결과=오주2출결과 + '_' + 오주2출[i];}
    }
    for (i=0; i<오주3출.length; i++) {
      if (i==0) {오주3출결과=오주3출[i];}
      if (i!==0) {오주3출결과=오주3출결과 + '_' + 오주3출[i];}
    }
    for (i=0; i<오주4출.length; i++) {
      if (i==0) {오주4출결과=오주4출[i];}
      if (i!==0) {오주4출결과=오주4출결과 + '_' + 오주4출[i];}
    }
    for (i=0; i<오주5출.length; i++) {
      if (i==0) {오주5출결과=오주5출[i];}
      if (i!==0) {오주5출결과=오주5출결과 + '_' + 오주5출[i];}
    }
    document.querySelector('#오주1출수').innerHTML=오주1출결과;
    document.querySelector('#오주2출수').innerHTML=오주2출결과;
    document.querySelector('#오주3출수').innerHTML=오주3출결과;
    document.querySelector('#오주4출수').innerHTML=오주4출결과;
    document.querySelector('#오주5출수').innerHTML=오주5출결과;
    
    var 이월수결과;
    var 이웃수결과;
    var 이월수플러스이웃수결과;
    var 이월수=[];
    var 이웃수=[];
    var 이월수플러스이웃수=[];
    시작배열값=(회차개수-selectedindex-1)*9;
    for (i=2; i<8; i++) {
      이월수.push(당번전체[시작배열값+i])
    }
    for (i=0; i<이월수.length; i++) {
      if (i==0) {이월수결과=이월수[i];}
      if (i!==0) {이월수결과=이월수결과 + '_' + 이월수[i];}
    }
    이월수.sort((a,t) => a-t);
    for (i=0; i<6; i++) {
        if (이월수[i]==1) {
          이웃수.push(45);
          이웃수.push(2);
          이웃수.push(이월수[i]);
        } else if (이월수[i]==45) { //45 가능
          이웃수.push(1);
          이웃수.push(44);
          이웃수.push(이월수[i]);
        } else {
          이웃수.push(이월수[i]-1);
          이웃수.push(이월수[i]*1+1);
          이웃수.push(이월수[i]);
        }
      }
  
  //모두 문자열로 변환후 중복제거
    for (i=0; i<이웃수.length; i++) {
      이웃수[i]=이웃수[i].toString();
    }
    이웃수=[...new Set(이웃수)];
    이웃수.sort((a,t) => a-t);
  
    var 순번;
    순번=0;
    for (i=0; i<45; i++) { //이월수제거 >> 이웃수
      if (이웃수.filter(element => (i+1) == element).length==1) {
        if (이월수.filter(element => (i+1) == element).length==0) {
          순번=순번+1;
          if (순번==1) {이웃수결과=i+1;}
          if (순번!==1) {이웃수결과=이웃수결과 + '_' + (i+1);}
        }
      }
    }
    for (i=0; i<이웃수.length; i++) { //1개인것만
        if (i==0) {이월수플러스이웃수결과=이웃수[i];}
        if (i!==0) {이월수플러스이웃수결과=이월수플러스이웃수결과 + '_' + 이웃수[i];}
      }
    
    
    document.querySelector('#이월수').innerHTML=이월수결과;
    document.querySelector('#이웃수').innerHTML=이웃수결과;
    document.querySelector('#이월이웃수').innerHTML=이월수플러스이웃수결과;
  
    //바뀐 출수번호들에서 : #현재색칠정보 ex:오주미출수이면 바뀐 정보로 색칠
    var 현재색칠정보text=document.querySelector('#세로구분_색칠관련 #현재색칠정보').innerHTML;
    if (document.querySelector('#' + 현재색칠정보text)) {
      change용색칠할번호선택시색칠하기()
    } else {
      당번색칠해제();
      임시_셑팅번호_만개에색칠();
      셑팅번호_당번에색칠();
    }
    
  }

  function 출_출수제목_click시_숫자개수와평균() {
    document.querySelector('#평균계산값').innerHTML='';
    var 숫자개수=document.querySelector('#현재색칠번호들').innerHTML.trim().split('_').length;
    var 평균=(숫자개수/7).toPrecision(2);
    var return값=' (' + 숫자개수 + '개, 평균 : ' + 평균 + ')';
    if (숫자개수>0) {
      document.querySelector('#평균계산값').innerHTML=return값;
    }
  }
  function change용색칠할번호선택시색칠하기() {
    if (!document.querySelector('#' + document.querySelector('#세로구분_색칠관련 #현재색칠정보').innerHTML)) {return;}
    document.querySelector('#세로구분_색칠관련 #현재색칠번호들').innerHTML=document.querySelector('#' + document.querySelector('#세로구분_색칠관련 #현재색칠정보').innerHTML).innerHTML;  //색칠용번호들 정보를 가지고옴 1_2_3_형태
  
    var 번호들=document.querySelector('#' + document.querySelector('#세로구분_색칠관련 #현재색칠정보').innerHTML).innerHTML.trim().split('_');
    var 버튼들=document.querySelectorAll('#세로구분_색칠관련 #색칠용modal-body button'); //45개만쓴다
    for (var i=0; i<45; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
  
    }
    for (var i=0; i<45; i++) {
      if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
        버튼들[i].classList.add('색칠용버튼');
        버튼들[i].setAttribute('title',i+1);
      }
    }
    //왼쪽에 색칠
    버튼들=document.querySelectorAll('#세로구분_당첨번호들 #전체당번 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<버튼들.length; i++) {
      if (i%8==7) {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          // 보너스볼에 색칠 안함. 아래는 색칠할때
          // 버튼들[i].classList.add('색칠용버튼');
          // 버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      } else {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      }
    }
    버튼들=document.querySelectorAll('#세로구분_당첨번호들 #있다면다음회차 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<버튼들.length; i++) {
      if (i%8==0) {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      } else {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      }
    }
    출_출수제목_click시_숫자개수와평균();
  }
  
  var 리스너_색칠할번호선택_ul=document.querySelector('#색칠할번호선택_ul');
  var 리스너_모달번호들=document.querySelector('#색칠용modal-body');

  var 리스너_중복확인45버튼_1st=document.querySelector('#중복확인45버튼_1st');
  var 리스너_중복확인45버튼_2st=document.querySelector('#중복확인45버튼_2st');
  var 리스너_중복확인45버튼_3st=document.querySelector('#중복확인45버튼_3st');

  var 리스너_원간격버튼=document.querySelector('#세로구분_색칠45_원간격');
  
  function 리스너용모달번호각버튼색칠(e) {
    if (e.target.parentNode.parentNode.id=='색칠용modal-body') {모달번호들=document.querySelectorAll('#색칠용modal-body button');}
    // if (!document.querySelector('#flexCheckDefault').checked) {alert('input 안된상태')}
    // if (document.querySelector('#flexCheckDefault').checked) {alert('input 체크상태')}
    if (모달번호들[e.target.innerHTML]) {//첫번째버튼의 innerHTML이 CLEAR다
      if (모달번호들[e.target.innerHTML-1].classList.contains('색칠용버튼')) {
        모달번호들[e.target.innerHTML-1].classList.remove('색칠용버튼');
        모달번호들[e.target.innerHTML-1].removeAttribute('title');
      } else {
        모달번호들[e.target.innerHTML-1].classList.add('색칠용버튼');
        모달번호들[e.target.innerHTML-1].setAttribute('title',e.target.innerHTML);
      }
    }
  }
  function 리스너용색칠할번호선택시색칠하기(e) {
    if (!document.querySelector('#' + e.target.innerHTML)) {return;}
    document.querySelector('#현재색칠정보').innerHTML=e.target.innerHTML;
    document.querySelector('#현재색칠번호들').innerHTML=document.querySelector('#' + e.target.innerHTML).innerHTML;
    당번색칠해제();
    모달색칠해제();
    셑팅번호_당번에색칠();
    임시_셑팅번호_만개에색칠();
    셑팅번호_모달에색칠();
    출_출수제목_click시_숫자개수와평균()
  }
  function 리스너용_원간격번호_클릭한것_번호채취하여_색칠할정보에문자열전달(e) {
    if (document.querySelectorAll('.임시표시')) {
      for (var i=0; i<document.querySelectorAll('.임시표시').length; i++) {
        document.querySelectorAll('.임시표시')[i].classList.remove('임시표시')
      }
    }
    if (isNaN(e.target.innerHTML) || e.target.innerHTML=='' || e.target.innerHTML==0) {return;}
    e.target.classList.add('임시표시');
    var 증가=-1;
    var 선택index_6중;
    var 선택index_회차;
    var 부모요소=e.target.parentNode
    for (var i=0; i<부모요소.children.length; i++) {
      증가+=1;
      if (부모요소.children[i].classList.contains('임시표시')) {선택index_6중=증가;}
    }
    e.target.classList.remove('임시표시');
    부모요소.classList.add('임시표시');

    증가=-1;
    for (var i=0; i<document.querySelectorAll('#색칠45_원간격_당번 div').length; i++) {
      증가+=1;
      if (document.querySelectorAll('#색칠45_원간격_당번 div')[i].classList.contains('임시표시')) {선택index_회차=증가;}
    }
    부모요소.classList.remove('임시표시'); // 선택위치 확인 완료

    //문자열추출 하여 색칠할정보에 전달 : 결과를 1_13_23 형식으로
    var 문자열추출=[];
    if (선택index_6중==0) {
      if (document.querySelectorAll('#전체당번 div')[선택index_회차].children[6].innerHTML==45) {

      } else {
        for (var 반복=document.querySelectorAll('#전체당번 div')[선택index_회차].children[6].innerHTML*1+1; 반복<46;반복++) {
          문자열추출.push(반복);
        }
      }
      if (document.querySelectorAll('#전체당번 div')[선택index_회차].children[1].innerHTML==1) {

      } else {
        for (var 반복=1; 반복<document.querySelectorAll('#전체당번 div')[선택index_회차].children[1].innerHTML;반복++) {
          문자열추출.push(반복);
        }
      }
    }
    if (선택index_6중!=0) {
      var 시작숫자=document.querySelectorAll('#전체당번 div')[선택index_회차].children[선택index_6중].innerHTML*1;
      var 다음숫자=document.querySelectorAll('#전체당번 div')[선택index_회차].children[선택index_6중+1].innerHTML*1;
      console.log('시작숫자 : ' + 시작숫자 + ' , 다음숫자 : ' + 다음숫자 + ' , (시작숫자-다음숫자) : ' + (시작숫자-다음숫자))
      if ((시작숫자-다음숫자)==-1) {

      } else {
        for (var 반복=시작숫자; 반복<다음숫자;반복++) {
          if (반복==시작숫자 || 반복==다음숫자) {

          } else {
            문자열추출.push(반복);
          }
        }
      }
    }
    var 문자열추출join=문자열추출.join('_');
    document.querySelector('#현재색칠번호들').innerHTML=문자열추출join
    e.target.classList.add('임시표시');
    셑팅번호_모달에색칠();
    임시_셑팅번호_만개에색칠();
    셑팅번호_당번에색칠();
  }
  리스너_원간격버튼.addEventListener('click', 리스너용_원간격번호_클릭한것_번호채취하여_색칠할정보에문자열전달); 
  리스너_색칠할번호선택_ul.addEventListener('click',리스너용색칠할번호선택시색칠하기);
  리스너_모달번호들.addEventListener('click',리스너용모달번호각버튼색칠);
