if ('초기화' == '초기화') {
  //옵션 생성이 새로고침시 필수동작이다.

  var 색칠해제_변수 = 'id_버튼45_1st';
  var 전체변수_번호색칠회차index = 0;
  var 전체변수_당번회차index = 0;
  var 전체변수_당번전체 = document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
  var 전체변수_회차개수 = Number(전체변수_당번전체.length / 9);
  var 전체변수_회차select안옵션html;
  var 전체변수_색칠할번호들_아이디 = '없음';
  var 전체변수_색칠할번호들_배열;//초기화 말고, 나중에 쓰임
  for (var i = 0; i < 전체변수_회차개수; i++) {
    if (i == 0) {
      전체변수_회차select안옵션html = '<option>' + 전체변수_당번전체[(i * 9)] + '회</option>'
    } else {
      전체변수_회차select안옵션html = '<option>' + 전체변수_당번전체[(i * 9)] + '회</option>' + 전체변수_회차select안옵션html
    }
  }
  // <!--#색칠용번호들 각id를 innerHTML로 스크립트로 가져옴 <li><a class="dropdown-item">오주미출수</a></li>-->
  document.querySelector('#칠_색칠할번호선택_ul').innerHTML = '';
  for (var i = 0; i < document.querySelectorAll('#색칠용번호들 div').length; i++) {
    전체변수_아이디 = document.querySelectorAll('#색칠용번호들 div')[i].id;
    document.querySelector('#칠_색칠할번호선택_ul').innerHTML += '<li><a class="dropdown-item 색칠할번호_로연결된text_class">' + 전체변수_아이디 + '</a></li>'
    if (전체변수_아이디 == '피해서번호' || 전체변수_아이디 == '나머지' || 전체변수_아이디 == '칠_번호' || 전체변수_아이디 == '오주출수' || 전체변수_아이디 == '중복1_2') {
      document.querySelectorAll('#칠_색칠할번호선택_ul li')[i].classList.add('파란색글자');
    }
  }

  // <!--#세로구분_흐름_전체 각id를 innerHTML로 스크립트로 가져옴 <li><a class="dropdown-item">오주미출수</a></li>-->
  document.querySelector('#칠_흐름_ul').innerHTML = '';
  for (var i = 0; i < document.querySelectorAll('#세로구분_흐름_전체 > div').length; i++) {
    전체변수_아이디 = document.querySelectorAll('#세로구분_흐름_전체 > div')[i].id;
    document.querySelector('#칠_흐름_ul').innerHTML += '<li><a class="dropdown-item">' + 전체변수_아이디 + '</a></li>'
    if (전체변수_아이디 == '피해서번호' || 전체변수_아이디 == '중복1_2') {//파란색 넣고 싶으면 아이디 넣으면 됨. 현재는 위 형식 맞추기용
      document.querySelectorAll('#칠_흐름_ul li')[i].classList.add('파란색글자');
    }
  }

  //번호색칠_회차변경 : 
  document.querySelector('#당번_회차select').innerHTML = 전체변수_회차select안옵션html; //<option>회차</option>
  document.querySelector('#칠_회차select').innerHTML = 전체변수_회차select안옵션html;
  document.querySelector('#당번_회차select').selectedIndex = 0;
  var 전체변수_index확정 = document.querySelector('#당번_회차select').selectedIndex;
  var 전체변수_시작배열값;//9개정보중 회차번호
  당번_회차change();
  번호색칠_회차change();
  세로_모두숨기기();
  document.querySelector('#칠_전체').classList.remove('d-none');
  document.querySelector('#세로구분_당번_전체').classList.remove('d-none');
  //=========>초기 작업 끝.
}
function 번호색칠_clear() {
  document.querySelector('#칠_현재색칠할번호_정보와개수').innerHTML = '색칠할 번호 아이디 설정 없음';
  document.querySelector('#칠_현재색칠번호들').innerHTML = '';
  전체변수_색칠할번호들_아이디 = '없음';
  전체변수_색칠할번호들_배열 = [];
  색칠해제_변수에따라();
  색칠해제_당번();
}
function 색칠해제_변수에따라() {
  console.log('색칠해제_변수에따라()')
  var 버튼들 = document.querySelectorAll('#' + 색칠해제_변수 + ' .색칠용버튼');
  for (var i = 0; i < 버튼들.length; i++) {
    버튼들[i].classList.remove('색칠용버튼');
    버튼들[i].removeAttribute('title');
  }
  var 버튼들 = document.querySelectorAll('#' + 색칠해제_변수 + ' .피해서3종_선택번호');
  for (var i = 0; i < 버튼들.length; i++) {
    버튼들[i].classList.remove('피해서3종_선택번호');
  }
  var 버튼들 = document.querySelectorAll('#' + 색칠해제_변수 + ' .피해서3종_피해서번호');
  for (var i = 0; i < 버튼들.length; i++) {
    버튼들[i].classList.remove('피해서3종_피해서번호');
  }
}
function 색칠해제_당번() {
  var 버튼들 = document.querySelectorAll('#당번_전체 .색칠용버튼');
  for (var i = 0; i < 버튼들.length; i++) {
    버튼들[i].classList.remove('색칠용버튼');
    버튼들[i].removeAttribute('title');
  }
}
function 색칠동작() {//번호색칠 회차와 같은 회차가 당번회차에 있을때 동그라미
  console.log('색칠동작');
  색칠해제_변수에따라();
  색칠해제_당번();
  //번호색칠 회차와 같은 회차가 당번회차에 있을때 동그라미
  var 당번_span들 = document.querySelectorAll('#당번_전체 span');
  if (document.querySelectorAll('#당번_전체 span')[0]) {
    for (var i = 0; i < 당번_span들.length; i++) {
      당번_span들[i].classList.remove('당번_span_한개');
    }
  }
  if (전체변수_당번회차index <= 전체변수_번호색칠회차index) {
    var 인덱스차이 = 전체변수_번호색칠회차index - 전체변수_당번회차index;
    당번_span들[인덱스차이].classList.add('당번_span_한개');
  }//동그라미 끝.

  if (전체변수_색칠할번호들_아이디 == '없음') {//초기화시 또는 clear시
    document.querySelector('#칠_현재색칠할번호_정보와개수').innerHTML = '색칠할 번호 아이디 설정 없음';
    document.querySelector('#칠_현재색칠번호들').innerHTML = '';
    return;
  }
  //모두 45이하 숫자인지 확인. 아니면 메세지 후 중단, 아이디는 색칠할번호들 ul의 li 클릭시 생성되거나, 없음.
  전체변수_색칠할번호들_배열 = document.querySelector('#색칠용번호들 #' + 전체변수_색칠할번호들_아이디).innerHTML.split('_');//비어있어도 1개이다.
  var 개수 = 0, 평균 = 0;
  for (var i = 0; i < 전체변수_색칠할번호들_배열.length; i++) {
    if (전체변수_색칠할번호들_배열[i] * 1 > 45 || 전체변수_색칠할번호들_배열[i] * 1 < 1) {
      document.querySelector('#칠_현재색칠번호들').innerHTML = 전체변수_색칠할번호들_배열;
      document.querySelector('#칠_현재색칠할번호_정보와개수').innerHTML = 전체변수_색칠할번호들_아이디 + ' (없음)';
      return;
    }
    개수 += 1;
  }
  평균 = (개수 / 7).toPrecision(2);
  document.querySelector('#칠_현재색칠할번호_정보와개수').innerHTML = 전체변수_색칠할번호들_아이디 + ' (' + 개수 + '개, 평균 : ' + 평균 + ')';
  document.querySelector('#칠_현재색칠번호들').innerHTML = 전체변수_색칠할번호들_배열;
  //색칠
  var 버튼들 = document.querySelectorAll('#' + 색칠해제_변수 + ' button');
  for (var i = 0; i < 버튼들.length; i++) {
    if (전체변수_색칠할번호들_배열.find(element => element == 버튼들[i].innerHTML)) {
      버튼들[i].classList.add('색칠용버튼');
      버튼들[i].setAttribute('title', 버튼들[i].innerHTML);
    }
  }
  버튼들 = document.querySelectorAll('#당번_있다면다음회차 button');
  for (var i = 0; i < 버튼들.length; i++) {
    if (전체변수_색칠할번호들_배열.find(element => element == 버튼들[i].innerHTML)) {
      버튼들[i].classList.add('색칠용버튼');
      버튼들[i].setAttribute('title', 버튼들[i].innerHTML);
    }
  }
  버튼들 = document.querySelectorAll('#당번_전체 button');
  for (var i = 0; i < 버튼들.length; i++) {
    if (전체변수_색칠할번호들_배열.find(element => element == 버튼들[i].innerHTML)) {
      버튼들[i].classList.add('색칠용버튼');
      버튼들[i].setAttribute('title', 버튼들[i].innerHTML);
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
function 흐름또는출수제목중_둘다숨기기() {
  document.querySelector('#칠_right_흐름').classList.add('d-none');
  document.querySelector('#칠_right_출수제목').classList.add('d-none');
}
function 번호색칠_회차change_플러스() {
  console.log('번호색칠_회차change_플러스()')
  전체변수_index확정 = document.querySelector('#칠_회차select').selectedIndex;//선택안되면 -1, 초기화면 0
  if (전체변수_index확정 == 0) {

  } else {
    전체변수_index확정 = 전체변수_index확정 - 1;
  }
  전체변수_시작배열값 = (전체변수_회차개수 - 전체변수_index확정) * 9;//9개정보중 회차번호
  document.querySelector('#칠_회차select').selectedIndex = 전체변수_index확정;//선택안되면 -1, 초기화면 0
  번호색칠_회차change()
}
function 번호색칠_회차change_마이너스() {
  console.log('번호색칠_회차change_마이너스()')
  전체변수_index확정 = document.querySelector('#칠_회차select').selectedIndex;//선택안되면 -1, 초기화면 0
  전체변수_index확정 = 전체변수_index확정 + 1;
  전체변수_시작배열값 = (전체변수_회차개수 - 전체변수_index확정) * 9;//9개정보중 회차번호
  document.querySelector('#칠_회차select').selectedIndex = 전체변수_index확정;//선택안되면 -1, 초기화면 0
  번호색칠_회차change()
}
function 번호색칠_회차change() {// 복잡!!
  console.log('번호색칠_회차change()')
  전체변수_번호색칠회차index = document.querySelector('#칠_회차select').selectedIndex;//당번회차동그라미용
  전체변수_index확정 = document.querySelector('#칠_회차select').selectedIndex;//선택안되면 -1, 초기화면 0
  전체변수_시작배열값 = (전체변수_회차개수 - 전체변수_index확정) * 9;//9개정보중 회차번호
  //오주출수,오주미출수,십주미출수,십오주미출수,이월수,칠_번호,피해서번호,흰색부분,이웃수,이월이웃수,오주1출수,오주2출수,오주3출수,오주4출수,오주5출수 생성하여 넣어두기
  var 십오주간번호_보볼제외 = [], 십주간번호_보볼제외 = [], 오주간번호_보볼제외 = [], 최근번호_보볼제외 = [];
  var 나머지;
  for (var i = 0; i < 9 * 15; i++) {//결과번호 개수는 90개다. 6*15
    나머지 = i % 9;
    if (나머지 < 2 || 나머지 == 8) {

    } else {
      if (i < 9 * 1) { 최근번호_보볼제외.push(전체변수_당번전체[전체변수_시작배열값 - i]) }
      if (i < 9 * 5) { 오주간번호_보볼제외.push(전체변수_당번전체[전체변수_시작배열값 - i]) }
      if (i < 9 * 10) { 십주간번호_보볼제외.push(전체변수_당번전체[전체변수_시작배열값 - i]) }
      if (i < 9 * 15) { 십오주간번호_보볼제외.push(전체변수_당번전체[전체변수_시작배열값 - i]) }
    }
  }

  var 연결_text_배열 = [];
  연결_text_배열 = [];
  for (var i = 1; i < 46; i++) { if (십주간번호_보볼제외.filter(element => i == element).length == 0) { 연결_text_배열.push(i); } }
  document.querySelector('#십주미출수').innerHTML = 연결_text_배열.join('_');

  연결_text_배열 = [];
  for (var i = 1; i < 46; i++) { if (십오주간번호_보볼제외.filter(element => i == element).length == 0) { 연결_text_배열.push(i); } }
  document.querySelector('#십오주미출수').innerHTML = 연결_text_배열.join('_');

  연결_text_배열 = [];
  for (var i = 1; i < 46; i++) { if (오주간번호_보볼제외.filter(element => i == element).length > 0) { 연결_text_배열.push(i); } }
  document.querySelector('#오주출수').innerHTML = 연결_text_배열.join('_');

  연결_text_배열 = [];
  for (var i = 1; i < 46; i++) { if (오주간번호_보볼제외.filter(element => i == element).length == 0) { 연결_text_배열.push(i); } }
  document.querySelector('#오주미출수').innerHTML = 연결_text_배열.join('_');

  연결_text_배열 = [];
  for (var i = 1; i < 46; i++) { if (오주간번호_보볼제외.filter(element => i == element).length == 1) { 연결_text_배열.push(i); } }
  document.querySelector('#오주1출수').innerHTML = 연결_text_배열.join('_');

  연결_text_배열 = [];
  for (var i = 1; i < 46; i++) { if (오주간번호_보볼제외.filter(element => i == element).length == 2) { 연결_text_배열.push(i); } }
  document.querySelector('#오주2출수').innerHTML = 연결_text_배열.join('_');

  연결_text_배열 = [];
  for (var i = 1; i < 46; i++) { if (오주간번호_보볼제외.filter(element => i == element).length == 3) { 연결_text_배열.push(i); } }
  document.querySelector('#오주3출수').innerHTML = 연결_text_배열.join('_');

  연결_text_배열 = [];
  for (var i = 1; i < 46; i++) { if (오주간번호_보볼제외.filter(element => i == element).length == 4) { 연결_text_배열.push(i); } }
  document.querySelector('#오주4출수').innerHTML = 연결_text_배열.join('_');

  연결_text_배열 = [];
  for (var i = 1; i < 46; i++) { if (오주간번호_보볼제외.filter(element => i == element).length == 5) { 연결_text_배열.push(i); } }
  document.querySelector('#오주5출수').innerHTML = 연결_text_배열.join('_');

  document.querySelector('#이월수').innerHTML = 최근번호_보볼제외.sort((a, b) => a - b).join('_');

  연결_text_배열 = [];
  var 왼쪽번호, 오른쪽번호;
  for (var i = 0; i < 6; i++) {
    if (최근번호_보볼제외[i] == 1) {
      왼쪽번호 = 45;
    } else {
      왼쪽번호 = Number(최근번호_보볼제외[i]) - 1;
    }
    if (최근번호_보볼제외[i] == 45) {
      오른쪽번호 = 1;
    } else {
      오른쪽번호 = Number(최근번호_보볼제외[i]) + 1;
    }
    if (최근번호_보볼제외.filter(element => 왼쪽번호 == element).length == 0) { 연결_text_배열.push(왼쪽번호); }
    if (최근번호_보볼제외.filter(element => 오른쪽번호 == element).length == 0) { 연결_text_배열.push(오른쪽번호); }
  }
  document.querySelector('#이웃수').innerHTML = 연결_text_배열.sort((a, b) => a - b).join('_');

  //배열 초기화 하지 않고, 이웃수 결과에 이월수 추가한다.
  for (var i = 0; i < 6; i++) {
    if (연결_text_배열.filter(element => 최근번호_보볼제외[i] == element).length == 0) { 연결_text_배열.push(최근번호_보볼제외[i]); }
  }
  document.querySelector('#이월이웃수').innerHTML = 연결_text_배열.sort((a, b) => a - b).join('_');
  색칠동작();
}
function 번호색칠_2_3중복() {
  console.log('번호색칠_2_3중복()');
  if (!document.querySelector('#색칠선택1').classList.contains('색칠선택span선택css')) {
    alert('색칠선택1 선택하고');
    return;
  }
  var 일번번호 = [];
  for (var i = 0; i < 45; i++) {
    if (document.querySelectorAll('#id_버튼45_2st button')[i].classList.contains('색칠용버튼')) { 일번번호.push(i + 1); }
  }
  var 이번번호 = [];
  for (var i = 0; i < 45; i++) {
    if (document.querySelectorAll('#id_버튼45_3st button')[i].classList.contains('색칠용버튼')) { 이번번호.push(i + 1); }
  }
  var 중복번호 = [];
  for (var i = 0; i < 45; i++) {
    if (일번번호.includes(i + 1) && 이번번호.includes(i + 1)) { 중복번호.push(i + 1) }
  }

  var 버튼들 = document.querySelectorAll('#id_버튼45_1st .색칠용버튼');
  for (var i = 0; i < 버튼들.length; i++) {
    버튼들[i].classList.remove('색칠용버튼');
    버튼들[i].removeAttribute('title');
  }
  var 버튼들 = document.querySelectorAll('#id_버튼45_1st button');
  for (var i = 0; i < 45; i++) {
    if (중복번호.includes(i + 1)) {
      console.log(i + 1 + ' : 중복')
      버튼들[i].classList.add('색칠용버튼');
      버튼들[i].setAttribute('title', i + 1);
    }
  }
  document.querySelector('#중복2_3').innerHTML = 중복번호.join('_');
  전체변수_색칠할번호들_아이디 = '중복2_3';
  색칠동작();
}

function 피해서3종() {
  if (!document.querySelector('#색칠선택3').classList.contains('색칠선택span선택css')) { alert('색칠선택3 선택하고 클릭할것'); return; }
  번호색칠_칠_조금다름();//칠_번호, 피해서번호 생성되었음
  색칠해제_변수에따라();
  var 버튼들 = document.querySelectorAll('#id_버튼45_3st button');
  var 칠_번호_text = document.querySelector('#칠_번호').innerHTML;
  var 피해서번호_text = document.querySelector('#피해서번호').innerHTML;
  var 번호들 = [];
  if (칠_번호_text.length > 0) {
    번호들 = 칠_번호_text.split('_');
    for (var i = 1; i < 46; i++) {
      if (번호들.filter(element => element == i).length > 0) { 버튼들[i - 1].classList.add('피해서3종_선택번호'); }
    }
  }
  // console.log('칠_번호_text : ' + 칠_번호_text + ' , 번호들 : ' + 번호들)
  if (피해서번호_text.length > 0) {
    번호들 = 피해서번호_text.split('_');
    for (var i = 1; i < 46; i++) {
      if (번호들.filter(element => element == i).length > 0) { 버튼들[i - 1].classList.add('피해서3종_피해서번호'); }
    }
  }
  // console.log('피해서번호_text : ' + 피해서번호_text + ' , 번호들 : ' + 번호들)
}
function 번호색칠_칠_조금다름() {
  console.log('번호색칠_칠_조금다름()')
  전체변수_색칠할번호들_아이디 = '칠_번호';
  var 색칠45색칠된번호 = [];
  var 버튼들 = document.querySelectorAll('#' + 색칠해제_변수 + ' button');
  for (var i = 0; i < 45; i++) {
    if (버튼들[i].classList.contains('색칠용버튼')) { 색칠45색칠된번호.push(i + 1) }
  }
  document.querySelector('#색칠용번호들 #칠_번호').innerHTML = 색칠45색칠된번호.join('_');//비어있어도 1개이다.


  var 색칠용버튼개수 = document.querySelectorAll('#' + 색칠해제_변수 + ' .색칠용버튼').length;
  console.log('색칠용버튼개수 : ' + 색칠용버튼개수)
  //피할번호 있으면 작동, 몫과 나머지 구해놓기
  var 몫 = [];
  var 나머지 = [];
  if (색칠용버튼개수 > 0) {
    for (var i = 0; i < 45; i++) {
      if (버튼들[i].classList.contains('색칠용버튼')) {
        몫.push(Math.floor(i / 7));
        나머지.push(i % 7);
      }
    }
  }

  var 피해서번호_배열 = [];
  for (var i = 0; i < 45; i++) {
    // console.log('번호 ' + (i+1) + ' 의 몫 : ' + Math.floor(i / 7) + ' 개수 : ' + 몫.filter(element => element==Math.floor(i / 7)).length)
    if (몫.filter(element => element == Math.floor(i / 7)).length == 0) { 피해서번호_배열.push(i + 1) }
    if (나머지.filter(element => element == (i % 7)).length == 0) { 피해서번호_배열.push(i + 1) }
  }
  피해서번호_배열 = new Set(피해서번호_배열); //중복제거 배열아님
  피해서번호_배열 = [...피해서번호_배열];//배열로 전환

  document.querySelector('#피해서번호').innerHTML = 피해서번호_배열.join('_');

  var 나머지_배열 = [];
  for (var i = 1; i < 46; i++) {
    if (피해서번호_배열.filter(element => element == i).length == 0 && 색칠45색칠된번호.filter(element => element == i).length == 0) { 나머지_배열.push(i) }
  }
  document.querySelector('#나머지').innerHTML = 나머지_배열.join('_');





  색칠동작();
}
function 오주전() {
  document.querySelector('#칠_회차select').selectedIndex =
    document.querySelector('#당번_회차select').selectedIndex + 5; 번호색칠_회차change();
}
function 십주전() {
  document.querySelector('#칠_회차select').selectedIndex =
    document.querySelector('#당번_회차select').selectedIndex + 10; 번호색칠_회차change();
}
function 십오주전() {
  document.querySelector('#칠_회차select').selectedIndex =
    document.querySelector('#당번_회차select').selectedIndex + 15; 번호색칠_회차change();
}
function 이십주전() {
  document.querySelector('#칠_회차select').selectedIndex =
    document.querySelector('#당번_회차select').selectedIndex + 20; 번호색칠_회차change();
}
function 당번_회차change() {//비교적 간단 : 색칠할 번호들의 변경은 없고!! 색칠 자체만 다시하면 됨.
  console.log('당번_회차change()')
  전체변수_당번회차index = document.querySelector('#당번_회차select').selectedIndex;//당번회차동그라미용
  전체변수_index확정 = document.querySelector('#당번_회차select').selectedIndex;//선택안되면 -1, 초기화면 0
  전체변수_시작배열값 = (전체변수_회차개수 - 전체변수_index확정 - 1) * 9;//9개정보중 회차번호
  //당번부분 변경 : 있다면 다음회차부분
  document.querySelector('#당번_있다면다음회차 span').innerHTML = (전체변수_회차개수 - 전체변수_index확정 + 1) + '회';
  if (전체변수_index확정 == 0) {
    for (var i = 0; i < 7; i++) {
      document.querySelectorAll('#당번_있다면다음회차 button')[i].innerHTML = '_';
    }
  } else {
    for (var i = 0; i < 7; i++) {
      document.querySelectorAll('#당번_있다면다음회차 button')[i].innerHTML = 전체변수_당번전체[전체변수_시작배열값 + 2 + i + 9];
    }
  }
  //당번부분 변경 : .span_날짜
  document.querySelector('#당번_회차날짜조회묶음 .span_날짜').innerHTML = 전체변수_당번전체[전체변수_시작배열값 + 1]; //날짜
  //당번부분 변경 : 100회분 가지고오기
  var 당번_전체html = '';
  for (var i = 0; i < 100; i++) {
    var 각한줄당번div = '';
    for (var 각한줄 = 0; 각한줄 < 9; 각한줄++) {
      if (각한줄 == 0) { 각한줄당번div += '<span>' + 전체변수_당번전체[전체변수_시작배열값 - (9 * i)] + '회</span>'; }
      // 각한줄==1) : 날짜는 건너뜀
      if (각한줄 > 1) { 각한줄당번div += '<button>' + 전체변수_당번전체[전체변수_시작배열값 - (9 * i) + 각한줄] + '</button>'; }
    }
    각한줄당번div = '<div>' + 각한줄당번div + '</div>'
    당번_전체html += 각한줄당번div;
  }
  document.querySelector('#당번_전체').innerHTML = 당번_전체html;
  색칠동작();
  실행_흐름만들기();
}
function 기본보기() {
  document.querySelector('#칠_전체').classList.remove('d-none');
  document.querySelector('#칠_left').classList.remove('d-none');
  document.querySelector('#칠_right_출수제목').classList.remove('d-none');
  document.querySelector('#칠_right_흐름').classList.add('d-none');

  document.querySelector('#세로구분_당번_전체').classList.remove('d-none');

}
function 세로_모두숨기기() {
  var whole_자식div = document.querySelectorAll('#whole > div');
  for (var i = 0; i < whole_자식div.length; i++) {
    whole_자식div[i].classList.add('d-none');
  }
}
function 실행_흐름만들기() {
  console.log('실행_흐름만들기()');
  //전체변수_당번전체, 8개중 2-7 6개번호(보볼제외)
  전체변수_index확정 = document.querySelector('#당번_회차select').selectedIndex;
  전체변수_시작배열값 = (전체변수_회차개수 - 전체변수_index확정 - 1) * 9;//9개정보중 회차번호 : 현재회차 다음회차!!
  document.querySelector('#흐름_삼이일 > div:nth-of-type(4)').innerHTML = '';
  document.querySelector('#흐름_간격 > div:nth-of-type(4)').innerHTML = '';
  document.querySelector('#흐름_간격당당첨 > div:nth-of-type(4)').innerHTML = '';
  document.querySelector('#흐름_간격내림차순 > div:nth-of-type(4)').innerHTML = '';
  document.querySelector('#흐름_간격당당첨내림차순 > div:nth-of-type(4)').innerHTML = '';
  for (var 당번정보 = 0; 당번정보 < 100; 당번정보++) {
    var 현재회차제외_오주간번호_보볼제외 = [], 현재회차제외_최근번호_보볼제외 = [], 현재회차_보볼제외 = [], 간격용_다음회차_보볼제외 = [];
    var 나머지;
    var 흐름_삼이일_미출 = 0, 흐름_삼이일_1출 = 0, 흐름_삼이일_2출 = 0, 흐름_삼이일_3출이상 = 0;
    var 흐름_삼이일_innerHTML = '';
    for (var i = 0; i < 9 * 5; i++) {
      나머지 = i % 9;//0:회차번호, 1:날짜, 8:보볼
      if (나머지 < 2 || 나머지 == 8) {

      } else {
        if (i < 9 * 1) { 현재회차제외_최근번호_보볼제외.push(전체변수_당번전체[전체변수_시작배열값 - i - (당번정보 * 9)]) }
        if (i < 9 * 1) { 현재회차_보볼제외.push(전체변수_당번전체[전체변수_시작배열값 - i + 9 - (당번정보 * 9)]) }
        if (i < 9 * 1) { 간격용_다음회차_보볼제외.push(전체변수_당번전체[전체변수_시작배열값 - i + 9 + 9 - (당번정보 * 9)]) }
        if (i < 9 * 5) { 현재회차제외_오주간번호_보볼제외.push(전체변수_당번전체[전체변수_시작배열값 - i - (당번정보 * 9)]) }
      }
    }
    //흐름_삼이일_미출=0, 흐름_삼이일_1출=0, 흐름_삼이일_2출=0, 흐름_삼이일_3출이상=0;
    for (var i = 0; i < 6; i++) {
      if (현재회차제외_오주간번호_보볼제외.filter(element => 현재회차_보볼제외[i] == element).length == 0) { 흐름_삼이일_미출 += 1; }
      if (현재회차제외_오주간번호_보볼제외.filter(element => 현재회차_보볼제외[i] == element).length == 1) { 흐름_삼이일_1출 += 1; }
      if (현재회차제외_오주간번호_보볼제외.filter(element => 현재회차_보볼제외[i] == element).length == 2) { 흐름_삼이일_2출 += 1; }
      if (현재회차제외_오주간번호_보볼제외.filter(element => 현재회차_보볼제외[i] == element).length > 2) { 흐름_삼이일_3출이상 += 1; }
    }
    흐름_삼이일_innerHTML += '<button>' + 흐름_삼이일_미출 + '</button>';
    흐름_삼이일_innerHTML += '<button>' + 흐름_삼이일_1출 + '</button>';
    흐름_삼이일_innerHTML += '<button>' + 흐름_삼이일_2출 + '</button>';
    흐름_삼이일_innerHTML += '<button>' + 흐름_삼이일_3출이상 + '</button>';
    흐름_삼이일_innerHTML = '<div>' + 흐름_삼이일_innerHTML + '</div>';
    document.querySelector('#흐름_삼이일 > div:nth-of-type(4)').innerHTML += 흐름_삼이일_innerHTML;
    //흐름_간격
    현재회차_보볼제외.sort((a, t) => a - t);
    현재회차제외_최근번호_보볼제외.sort((a, t) => a - t);

    var 간격1, 간격2, 간격3, 간격4, 간격5, 간격6, 당첨1, 당첨2, 당첨3, 당첨4, 당첨5, 당첨6;
    var 간격_innerHTML = '', 간격당당첨_innerHTML = '';
    간격1 = 현재회차_보볼제외[1] - 현재회차_보볼제외[0] - 1;
    간격2 = 현재회차_보볼제외[2] - 현재회차_보볼제외[1] - 1;
    간격3 = 현재회차_보볼제외[3] - 현재회차_보볼제외[2] - 1;
    간격4 = 현재회차_보볼제외[4] - 현재회차_보볼제외[3] - 1;
    간격5 = 현재회차_보볼제외[5] - 현재회차_보볼제외[4] - 1;
    간격6 = (45 - 현재회차_보볼제외[5]) + (현재회차_보볼제외[0] - 1);
    if (전체변수_index확정 == 0 && 당번정보 == 0) {
      당첨1 = '_', 당첨2 = '_', 당첨3 = '_', 당첨4 = '_', 당첨5 = '_', 당첨6 = '_';
      // console.log('당번정보 : ' + 당번정보)
    } else {
      당첨1 = 간격용_다음회차_보볼제외.filter(element => ((element > Number(현재회차_보볼제외[0])) && (element < Number(현재회차_보볼제외[1])))).length;
      당첨2 = 간격용_다음회차_보볼제외.filter(element => ((element > Number(현재회차_보볼제외[1])) && (element < Number(현재회차_보볼제외[2])))).length;
      당첨3 = 간격용_다음회차_보볼제외.filter(element => ((element > Number(현재회차_보볼제외[2])) && (element < Number(현재회차_보볼제외[3])))).length;
      당첨4 = 간격용_다음회차_보볼제외.filter(element => ((element > Number(현재회차_보볼제외[3])) && (element < Number(현재회차_보볼제외[4])))).length;
      당첨5 = 간격용_다음회차_보볼제외.filter(element => ((element > Number(현재회차_보볼제외[4])) && (element < Number(현재회차_보볼제외[5])))).length;
      당첨6 = 간격용_다음회차_보볼제외.filter(element => element > Number(현재회차_보볼제외[5])).length + 간격용_다음회차_보볼제외.filter(element => element < Number(현재회차_보볼제외[0])).length;
      // console.log('간격용_다음회차_보볼제외 : ' + 간격용_다음회차_보볼제외)
      // console.log('당번정보 : ' + 당번정보 + ' , ' + 당첨1 + ' ,' + 당첨2 + ' ,' + 당첨3 + ' ,' + 당첨4 + ' ,' + 당첨5 + ' ,' + 당첨6)
    }
    간격_innerHTML += '<button title="0">' + 간격1 + '</button>';
    간격_innerHTML += '<button title="1">' + 간격2 + '</button>';
    간격_innerHTML += '<button title="2">' + 간격3 + '</button>';
    간격_innerHTML += '<button title="3">' + 간격4 + '</button>';
    간격_innerHTML += '<button title="4">' + 간격5 + '</button>';
    간격_innerHTML += '<button title="5">' + 간격6 + '</button>';
    간격_innerHTML = '<div>' + 간격_innerHTML + '</div>';
    document.querySelector('#흐름_간격 > div:nth-of-type(4)').innerHTML += 간격_innerHTML;
    간격당당첨_innerHTML += '<button title="0">' + 당첨1 + '</button>';
    간격당당첨_innerHTML += '<button title="1">' + 당첨2 + '</button>';
    간격당당첨_innerHTML += '<button title="2">' + 당첨3 + '</button>';
    간격당당첨_innerHTML += '<button title="3">' + 당첨4 + '</button>';
    간격당당첨_innerHTML += '<button title="4">' + 당첨5 + '</button>';
    간격당당첨_innerHTML += '<button title="5">' + 당첨6 + '</button>';
    간격당당첨_innerHTML = '<div>' + 간격당당첨_innerHTML + '</div>';
    document.querySelector('#흐름_간격당당첨 > div:nth-of-type(4)').innerHTML += 간격당당첨_innerHTML;
    //흐름_간격 내림차순
    var 내림차순간격_innerHTML = '', 내림차순간격당당첨_innerHTML = '';
    var 간격배열 = [간격1, 간격2, 간격3, 간격4, 간격5, 간격6];
    var 당첨배열 = [당첨1, 당첨2, 당첨3, 당첨4, 당첨5, 당첨6];
    var 내림차순간격배열 = [];
    var 내림차순당첨배열 = [];
    var 내림차순의원간격인덱스 = [];
    for (var i = 0; i < 6; i++) {
      내림차순간격배열.push(Math.max(...간격배열));
      내림차순당첨배열.push(당첨배열[간격배열.indexOf(Math.max(...간격배열))]);
      내림차순의원간격인덱스.push(간격배열.indexOf(Math.max(...간격배열)));
      간격배열[간격배열.indexOf(Math.max(...간격배열))] = -1;
    }
    if (전체변수_index확정 == 0 && 당번정보 == 0) {
      당첨1 = '_', 당첨2 = '_', 당첨3 = '_', 당첨4 = '_', 당첨5 = '_', 당첨6 = '_';
      // console.log('당번정보 : ' + 당번정보)
    } else {
      당첨1 = 내림차순당첨배열[0];
      당첨2 = 내림차순당첨배열[1];
      당첨3 = 내림차순당첨배열[2];
      당첨4 = 내림차순당첨배열[3];
      당첨5 = 내림차순당첨배열[4];
      당첨6 = 내림차순당첨배열[5];
    }
    내림차순간격_innerHTML += '<button ' + 'title="' + 내림차순의원간격인덱스[0] + '">' + 내림차순간격배열[0] + '</button>';
    내림차순간격_innerHTML += '<button ' + 'title="' + 내림차순의원간격인덱스[1] + '">' + 내림차순간격배열[1] + '</button>';
    내림차순간격_innerHTML += '<button ' + 'title="' + 내림차순의원간격인덱스[2] + '">' + 내림차순간격배열[2] + '</button>';
    내림차순간격_innerHTML += '<button ' + 'title="' + 내림차순의원간격인덱스[3] + '">' + 내림차순간격배열[3] + '</button>';
    내림차순간격_innerHTML += '<button ' + 'title="' + 내림차순의원간격인덱스[4] + '">' + 내림차순간격배열[4] + '</button>';
    내림차순간격_innerHTML += '<button ' + 'title="' + 내림차순의원간격인덱스[5] + '">' + 내림차순간격배열[5] + '</button>';
    내림차순간격_innerHTML = '<div>' + 내림차순간격_innerHTML + '</div>';
    document.querySelector('#흐름_간격내림차순 > div:nth-of-type(4)').innerHTML += 내림차순간격_innerHTML;
    내림차순간격당당첨_innerHTML += '<button ' + 'title="' + 내림차순의원간격인덱스[0] + '">' + 당첨1 + '</button>';
    내림차순간격당당첨_innerHTML += '<button ' + 'title="' + 내림차순의원간격인덱스[1] + '">' + 당첨2 + '</button>';
    내림차순간격당당첨_innerHTML += '<button ' + 'title="' + 내림차순의원간격인덱스[2] + '">' + 당첨3 + '</button>';
    내림차순간격당당첨_innerHTML += '<button ' + 'title="' + 내림차순의원간격인덱스[3] + '">' + 당첨4 + '</button>';
    내림차순간격당당첨_innerHTML += '<button ' + 'title="' + 내림차순의원간격인덱스[4] + '">' + 당첨5 + '</button>';
    내림차순간격당당첨_innerHTML += '<button ' + 'title="' + 내림차순의원간격인덱스[5] + '">' + 당첨6 + '</button>';
    내림차순간격당당첨_innerHTML = '<div>' + 내림차순간격당당첨_innerHTML + '</div>';
    document.querySelector('#흐름_간격당당첨내림차순 > div:nth-of-type(4)').innerHTML += 내림차순간격당당첨_innerHTML;
  }
}
function 바디클릭시동작설정(e) {
  if (e.target.innerHTML == '칠숨김') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==칠숨김');
    document.querySelector('#칠_left').classList.add('d-none');
    e.target.innerHTML = '칠보기'
    return;
  }
  if (e.target.innerHTML == '칠보기') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==칠보기');
    document.querySelector('#칠_left').classList.remove('d-none');
    e.target.innerHTML = '칠숨김'
    return;
  }
  if (e.target.innerHTML == '당번숨김') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==당번숨김');
    document.querySelector('#세로구분_당번_전체').classList.add('d-none');
    e.target.innerHTML = '당번보기'
    return;
  }
  if (e.target.innerHTML == '당번보기') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==당번보기');
    document.querySelector('#세로구분_당번_전체').classList.remove('d-none');
    e.target.innerHTML = '당번숨김'
    return;
  }
  if (e.target.innerHTML == '분석자료') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==분석자료');
    기본보기();
    세로_모두숨기기();
    document.querySelector('#세로구분_분석자료_전체').classList.remove('d-none');
    return;
  }
  if (e.target.innerHTML == '흐름_') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==흐름_');
    기본보기();
    세로_모두숨기기();
    document.querySelector('#칠_전체').classList.remove('d-none');
    document.querySelector('#세로구분_흐름_전체').classList.remove('d-none');
    document.querySelector('#세로구분_당번_전체').classList.remove('d-none');
    for (var i = 0; i < document.querySelectorAll('.클릭시부모숨기기').length; i++) {
      document.querySelectorAll('.클릭시부모숨기기')[i].parentNode.classList.remove('d-none');
    }
    document.querySelector('#흐름_간격').classList.add('d-none');
    document.querySelector('#흐름_간격당당첨').classList.add('d-none');
    return;
  }
  if (e.target.innerHTML == '추출된번호') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==추출된번호');
    기본보기();
    세로_모두숨기기();
    document.querySelector('#세로구분_추출된번호_전체').classList.remove('d-none');
    return;
  }
  if (e.target.innerHTML == '필터링된번호들') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==필터링된번호들');
    기본보기();
    세로_모두숨기기();
    document.querySelector('#세로구분_추출된번호필터링_전체').classList.remove('d-none');
    return;
  }
  if (e.target.innerHTML == '임시사진_분석자료') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==임시사진_분석자료');
    기본보기();
    세로_모두숨기기();
    document.querySelector('#세로구분_임시_전체').classList.remove('d-none');
    return;
  }
  if (e.target.innerHTML == '칠_관련,당번') {
    console.log('바디클릭시동작설정(e) ==> e.target.innerHTML==칠_관련,당번');
    기본보기();
    세로_모두숨기기();
    document.querySelector('#칠_전체').classList.remove('d-none');
    document.querySelector('#세로구분_당번_전체').classList.remove('d-none');
    return;
  }
  if (e.target.id == '색칠선택1') {
    console.log('바디클릭시동작설정(e) ==> e.target.id==색칠선택1')
    색칠해제_변수 = 'id_버튼45_1st';
    document.querySelector('#색칠선택1').classList.add('색칠선택span선택css');
    document.querySelector('#색칠선택2').classList.remove('색칠선택span선택css');
    document.querySelector('#색칠선택3').classList.remove('색칠선택span선택css');
  }
  if (e.target.id == '색칠선택2') {
    console.log('바디클릭시동작설정(e) ==> e.target.id==색칠선택2')
    색칠해제_변수 = 'id_버튼45_2st';
    document.querySelector('#색칠선택1').classList.remove('색칠선택span선택css');
    document.querySelector('#색칠선택2').classList.add('색칠선택span선택css');
    document.querySelector('#색칠선택3').classList.remove('색칠선택span선택css');
    return;
  }
  if (e.target.id == '색칠선택3') {
    console.log('바디클릭시동작설정(e) ==> e.target.id==색칠선택3')
    색칠해제_변수 = 'id_버튼45_3st';
    document.querySelector('#색칠선택1').classList.remove('색칠선택span선택css');
    document.querySelector('#색칠선택2').classList.remove('색칠선택span선택css');
    document.querySelector('#색칠선택3').classList.add('색칠선택span선택css');
    return;
  }
  if (e.target.nodeName == 'BUTTON' && e.target.parentNode.parentNode.classList.contains('버튼45css')) {//버튼 클릭시
    console.log('바디클릭시동작설정(e) ==> e.target.nodeName==BUTTON) && e.target.parentNode.parentNode.classList.contains(버튼45css)')
    if (e.target.classList.contains('색칠용버튼')) {
      e.target.classList.remove('색칠용버튼');
      e.target.removeAttribute('title');
    } else {
      e.target.classList.add('색칠용버튼');
      e.target.setAttribute('title', e.target.innerHTML);
    }
    return;
  }
  if (e.target.id == '동작_당번회차_플러스') {
    console.log('바디클릭시동작설정(e) ==> e.target.id==동작_당번회차_플러스')
    if (document.querySelector('#당번_회차select').selectedIndex == 0) {
      alert('가장 최근회차입니다.');
    } else {
      document.querySelector('#당번_회차select').selectedIndex -= 1;
      당번_회차change();
    }
    return;
  }
  if (e.target.id == '동작_당번회차_마이너스') {
    console.log('바디클릭시동작설정(e) ==> e.target.id==동작_당번회차_마이너스')
    document.querySelector('#당번_회차select').selectedIndex += 1;
    당번_회차change();
    return;
  }
  if (e.target.classList.contains('색칠할번호_로연결된text_class')) {
    console.log('바디클릭시동작설정(e) ==> e.target.classList.contains(색칠할번호_로연결된text_class)');
    //★★★
    전체변수_색칠할번호들_아이디 = e.target.innerHTML;//설명정보 생성시 필요
    //★★★
    색칠동작();
    return;
  }
  if (e.target.classList.contains('클릭시부모숨기기')) {
    console.log('바디클릭시동작설정(e) ==> e.target.classList.contains(클릭시부모숨기기)');
    e.target.parentNode.classList.add('d-none')
    return;
  }
  if (e.target.parentNode.parentNode.classList.contains('간격추출색칠')) {
    console.log('바디클릭시동작설정(e) ==> e.target.parentNode.parentNode.classList.contains(간격추출색칠)');
    if (e.target.classList.contains('간격클릭클래스')) {
      document.querySelector('.간격클릭클래스').classList.remove('간격클릭클래스');//색칠되어있는거클릭시 색칠지움
      return;
    }
    e.target.parentNode.classList.add('코딩표시');
    if (document.querySelector('.간격클릭클래스')) {
      document.querySelector('.간격클릭클래스').classList.remove('간격클릭클래스');//하나있는거 지움
    }
    e.target.classList.add('간격클릭클래스');
    var 부모의부모의부모의아이디 = e.target.parentNode.parentNode.parentNode.id;
    var 순환요소 = document.querySelectorAll('#' + 부모의부모의부모의아이디 + ' .간격추출색칠 > div');
    var 순번 = 0;
    var 코딩표시인덱스;
    for (var i = 0; i < 순환요소.length; i++) {
      순번 += 1;
      if (순환요소[i].classList.contains('코딩표시')) {
        코딩표시인덱스 = 순번;
        순환요소[i].classList.remove('코딩표시')
      }
    }
    var 당번 = [];
    for (var i = 0; i < 6; i++) {
      당번.push(document.querySelectorAll('#당번_전체 > div:nth-of-type(' + 코딩표시인덱스 + ') button')[i].innerHTML);
    }
    console.log('당번 : ' + 당번)
    //#칠_번호에 : 1_2_3_4_5_6_7_8_9 형태로 번호전달, 전체변수_색칠할번호들_아이디 ==> 칠_번호
    var 클릭버튼인덱스 = Number(e.target.title);
    var 색칠할번호배열 = [];
    if (클릭버튼인덱스 == 5) {
      for (var i = 1; i < 당번[0]; i++) {
        색칠할번호배열.push(i);
      }
      for (var i = 45; i > 당번[5]; i--) {
        색칠할번호배열.push(i);
      }
    }
    if (클릭버튼인덱스 != 5) {
      for (var i = (Number(당번[클릭버튼인덱스]) + 1); i < Number(당번[클릭버튼인덱스 + 1]); i++) {
        색칠할번호배열.push(i);
      }
    }
    document.querySelector('#칠_번호').innerHTML = 색칠할번호배열.join('_');
    전체변수_색칠할번호들_아이디 = '칠_번호';
    색칠동작();

    return;
  }
  if (e.target.classList.contains('인풋clear')) {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.classList.contains(인풋clear');
    e.target.nextElementSibling.value = '';
    e.target.nextElementSibling.nextElementSibling.value = '';
  }
}
var 바디리스너용 = document.querySelector('body');
바디리스너용.addEventListener('click', 바디클릭시동작설정)
function 임시함수set관련() {
  //set 인수에 하나만 들어감?
  var 배열1=[3,1,1,1];
  var 배열2=[1,2,2,3];
  var 배열3=[4,5,6,7];
  console.log('배열1 : ' + 배열1);
  console.log('배열2 : ' + 배열2);
  console.log('배열3 : ' + 배열3);
  console.log('배열1.join("_") : ' + 배열1.join("_"));
  console.log('배열2.join("_"): ' + 배열2.join("_"));
  console.log('배열3.join("_") : ' + 배열3.join("_"));
  console.log('new Set(배열1.join("_")) : [object Set]');
  console.log(new Set(배열1.join("_")));
  console.log('new Set(배열2.join("_")) : [object Set]');
  console.log(new Set(배열2.join("_")));
  console.log('new Set(배열3.join("_")) : [object Set]');
  console.log(new Set(배열3.join("_")));
  console.log(배열1)
  console.log([...배열1])
  var 셑=new Set(배열3.join('_'));
  console.log(셑);
  var 셑=new Set(배열3);
  console.log(셑);
  셑.add([...배열1])
  console.log(셑);
  셑=new Set(배열1.join('_'),배열2.join('_'),배열3.join('_'));
  console.log(셑);
}












