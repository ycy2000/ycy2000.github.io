if ('초기설정' == '초기설정') {
  //양이 많아서 숨길것을 위로 두고 기록중인것을 아래로 두는데 합쳐야되기 때문에..... 합친후 '회차별배열'에 모든배열을 담는다.
  $('#당번숨김_안에_저장중').append($('#당번숨김_안에_기록중').html());
  document.querySelector('#당번숨김_안에_저장중').innerHTML =
    document.querySelector('#당번숨김_안에_저장중').innerHTML.replace(/\n|\s/g, '') //→ 줄바꿈(\n)과 모든 띄워쓰기(공백 및 탭 등)(\s)을 한 번에 제거
  var 회차별배열 = [];
  $('#당번숨김_안에_저장중').html().split(',').forEach(요소 => { 회차별배열.push(요소) }) //당번만추출한배열[0]=='보정' (회차와 일치하도록 됨)

  //변수명순서대로 : 5주출관련, 30주출관련 정보가 여러번 쓰이기때문에 순서를 사용하기위함. forEach에서 체이닝이 안되어서 
  var 변수명순서대로 = []; document.querySelectorAll('#당번변수 > div').forEach(요소 => { 변수명순서대로.push(요소.classList[0]); })

  //회차select옵션생성, check_초기설정, 당번 다음회차, 당번 30회정보, 분석자료45칸, ★30회빈도는 변동값이어서 제외됨
  고정html_구조생성및_초기설정();

  var 최근회차 = document.querySelectorAll('#당번_회차select option').length - 1;
  var 회차 = 최근회차;
  var 색칠id = '';
  var 색칠class = '';
  var 색칠문자열 = '';

  당번_회차change설정();
  분석자료_회차change설정();
  따라가기위치설정();
  var 숨김버튼값 = '';
}
var 리스너_바디 = document.querySelector('body');
var 드래그이동_버튼45오른쪽단독 = document.querySelector('#버튼45오른쪽단독');
var 드래그이동_버튼45감싸기 = document.querySelector('#버튼45감싸기');

function 연습() {
  var 변수 = document.querySelector('#버튼45오른쪽단독');
  변수.setAttribute('class', 'd d d d d d d d')
}
function 색칠하기(색칠아이디) {
  console.log('선택 : ' + 색칠아이디)
  var 색칠할번호들=document.querySelector(색칠아이디).innerHTML.split(',');
  console.log(색칠할번호들)
}
function 색칠할번호들_clear() {
  var 변수 = ['#keep번호들_변수포함/#keep번호들', '#셑팅1번호들_변수포함/#셑팅1번호들', 
              '#셑팅2번호들_변수포함/#셑팅2번호들', '#셑팅3번호들_변수포함/#셑팅3번호들',
              '#클릭번호들_변수포함/#클릭번호들'];
  변수.forEach((문자열, 인덱스) => {
    document.querySelector(문자열.split('/')[0]).innerHTML='';
    document.querySelector(문자열.split('/')[1]).innerHTML='';
  });
}
function 색칠셑팅(색칠문자열) {
  console.log('색칠셑팅 : ' + 색칠문자열)
  document.querySelector('#클릭번호들_변수포함').innerHTML = 색칠문자열;
  //[0]색칠할번호들 정하기, [1]변경여부 판단, [2]변수포함 번호, [3]번호로 변환된곳
  var 변수 = ['#keep_input/#keep변경/#keep번호들_변수포함/#keep번호들', '#셑팅1_input/#셑팅1변경/#셑팅1번호들_변수포함/#셑팅1번호들', 
              '#셑팅2_input/#셑팅2변경/#셑팅2번호들_변수포함/#셑팅2번호들', '#셑팅3_input/#셑팅3변경/#셑팅3번호들_변수포함/#셑팅3번호들',
              '_/#클릭번호들변경/#클릭번호들_변수포함/#클릭번호들'];
  var 체크index='';
  //색칠할번호들 정하기
  변수.forEach((문자열, 인덱스) => {if (document.querySelector(문자열.split('/')[0])?.checked) {체크index = 인덱스 ;};});
  //색칠할곳으로선택된 곳이면,, 아니면,,
  var 선택한곳변수형식=document.querySelector(변수[체크index].split('/')[2]);
  if (document.querySelector('#누적').checked) {
        if (선택한곳변수형식.innerHTML.split(',').includes(색칠문자열)) {
          //같은게 있으면 안쓴다
        } else {
          if (선택한곳변수형식.innerHTML=='') 선택한곳변수형식.innerHTML=색칠문자열;
          else 선택한곳변수형식.innerHTML+=','+색칠문자열;
        }
    } else { //누적체크 해제일때
      선택한곳변수형식.innerHTML=색칠문자열;
  }
  // 변경체크 확인하는데 : 선택한곳은 상관없이 변경하고 나머지 변경체크한곳은 변경한다.
  var 풀기완료문자열;
  var 숫자로푼요소;
  변수.forEach((문자열, 인덱스) => {
    풀기완료문자열='';
    숫자로푼요소=document.querySelector(문자열.split('/')[3]);
    if (document.querySelector(문자열.split('/')[1]).checked || 문자열.split('/')[2]==변수[체크index].split('/')[2]) {
      //변경
      document.querySelector(문자열.split('/')[3]).innerHTML='';//초기화 시켜둔다.
      document.querySelector(문자열.split('/')[2]).innerHTML.split(',').forEach ( 숫자또는문자 => {

        console.log(문자열.split('/')[3]);



      });







    }
  });

  색칠문자열=''; //초기화
}

function 분석자료_삼십회표3종_작성_미완성() {

}
function 분석자료_버튼클릭시_상하_숨김동작() {//135줄이었던것
  console.log('분석자료_버튼클릭시_상하_숨김동작() : ' + 숨김버튼값)
  //버튼문자열 (25) ['X', 'O', 'a', '1', '2', '3', 'b', '4', '5', '6', 'c', '7', '8', '9', '10', 'd', '11', '12', '13', '14', '15', '16', '17', '18', '19']
  const 버튼문자열 = Array.from(document.querySelectorAll('#분석자료숨김버튼 > button')).map(btn => btn.innerText);
  버튼문자열.push('30주간당번', '5주출6번', '30주간출횟수');

  // 각 버튼에 대응하는 div 인덱스 배열 : 실제 한줄 요소에 d-none 있는지 여부에 따름. 위 버튼 색칠은 별개다.
  const index별작업_요소 = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], // 0~19까지 (X~19)
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], // O
    [1, 2, 3], [1], [2], [3], [4, 5, 6], [4], [5], [6],
    [7, 8, 9, 10], [7], [8], [9], [10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19], [11], [12], [13], [14], [15], [16], [17], [18], [19],
    [1], [2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38]
  ];

  const index = 버튼문자열.indexOf(숨김버튼값);
  if (index === -1) { 숨김버튼값 = ''; return console.warn('버튼문자열에 숨김버튼값 없음'); }
  const 대상index들 = index별작업_요소[index];
  const 상단요소들 = document.querySelectorAll('#분석자료_표_상_js > div');
  const 하단요소들 = document.querySelectorAll('#분석자료_표_하_js > div:nth-of-type(2) > div');
  const 대상요소들 = (index < 25) ? 상단요소들 : 하단요소들;

  // 현재 대상 중 d-none 개수 파악
  var d_none개수 = 대상index들.filter(i => 대상요소들[i].classList.contains('d-none')).length;
  var 모두숨김상태 = d_none개수 === 대상index들.length;

  대상index들.forEach(i => {
    const el = 대상요소들[i];
    // 상단 영역 처리 : toggle( '클래스명', true) , true면 무조건 넣고(감추고), false면 무조건 삭제(보이게)한다
    if (index < 25) {
      if (숨김버튼값 === 'X') el.classList.add('d-none');
      else if (숨김버튼값 === 'O') el.classList.remove('d-none');
      else el.classList.toggle('d-none', !모두숨김상태); // 토글
    }
    // 하단 영역 처리 (index 25 ~ 27)
    else if (index >= 25 && index < 28) {
      el.classList.toggle('d-none', !모두숨김상태);
      if (index === 25) {
        const titleEl = document.querySelector('#분석자료_표_하_js > div:nth-of-type(1) > div:nth-of-type(2)');
        titleEl.innerText = !모두숨김상태 ? '' : '30주 출현 빈도';
      }
    }
  });
  //분석자료숨김버튼처리
  //초기화때는 고정html_구조생성() 동작시 버튼에 '분석버튼숨김'클래스 있으면 찾아가사 d-none 넣는 동작이 있다.
  //다음부터는 : 요소에 d-none 상태에 따라 버튼에 '분석버튼숨김'클래스 부여한다.
  //X,O는 클래스부여 안한다.
  //클래스 제거후 실제 요소 확인하여 부여함
  const 하단관련버튼들 = Array.from(document.querySelectorAll('#분석자료_다음회차 > button')).slice(9, 12);
  하단관련버튼들.forEach(요소 => 요소.classList.remove('분석버튼숨김'))
  var 하단확인할곳 = [1, 2, 9]
  하단관련버튼들.forEach((요소, 인덱스) => {
    if (하단요소들[하단확인할곳[인덱스]].classList.contains('d-none')) { 요소.classList.add('분석버튼숨김') }
  })
  //상단, X,O,a,b,c,d 상단확인정보[0], 상단요소들
  var 상단관련버튼들 = Array.from(document.querySelectorAll('#분석자료숨김버튼 > button'));
  상단관련버튼들.forEach(요소 => 요소.classList.remove('분석버튼숨김'))
  //상단확인정보 : 'X'(이름),0(slice왼쪽값),19(slice오른쪽값),실제요소index시작) 실제요소=상단요소들
  var 상단확인정보 = [['버튼 : a인덱스,slice시작,slice끝', 2, 3, 6, '요소 : slice시작, slice끝', 1, 4],
  ['버튼 : b인덱스,slice시작,slice끝', 6, 7, 10, '요소 : slice시작, slice끝', 4, 7],
  ['버튼 : c인덱스,slice시작,slice끝', 10, 11, 15, '요소 : slice시작, slice끝', 7, 11],
  ['버튼 : d인덱스,slice시작,slice끝', 15, 16, 25, '요소 : slice시작, slice끝', 11, 20]]
  상단확인정보.forEach((element, ind) => {
    var 상단요소slice = Array.from(상단요소들).slice(상단확인정보[ind][5], 상단확인정보[ind][6])
    d_none개수 = 상단요소slice.filter(i => i.classList.contains('d-none')).length;
    모두숨김상태 = d_none개수 === 상단요소slice.length;

    var 시작 = Number(상단확인정보[ind][2]);
    상단요소slice.forEach((i, 상단index) => {
      if (i.classList.contains('d-none')) { 상단관련버튼들[시작].classList.add('분석버튼숨김'); }
      시작++; //조건이 안맞아도 더해져야한다
    });

    if (모두숨김상태) { 상단관련버튼들[상단확인정보[ind][1]].classList.add('분석버튼숨김') }

  });
}

function 색칠_1_동작설정() {
}
function 색칠_2_설정대로색칠동작() {
}
function 분석자료_삼십회표_js작성() {
  if ('출수최대값' == '출수최대값') {
    var 출수최대값 = 0;
    for (var i = 1; i < 21; i++) { //i가 1부터임
      var 삼십주당번모음 = [];
      for (var 삼십주 = 0; 삼십주 < 30; 삼십주++) { 회차별배열[회차 - 삼십주 - i + 1].split('_').slice(2, 8).forEach(번호 => { 삼십주당번모음.push(번호) }) }
      for (var 출45 = 1; 출45 < 46; 출45++) {
        var 출수 = 삼십주당번모음.filter(번호 => 번호 == 출45).length;
        if (출수최대값 < 출수) { 출수최대값 = 출수 }
      }
    }
  }

  document.querySelector('#분석자료_삼십회표_js').innerHTML = '';
  var 필요오주0출 = document.querySelector('#분석자료변수 .공통변수_5주0출').innerHTML.split(',');
  var 장미 = document.querySelector('#분석자료변수 .공통변수_10주0출').innerHTML.split(',');
  var 출0 = []; 필요오주0출.forEach(번호 => { if (장미.filter(장미번호 => 장미번호 == 번호) == 0) { 출0.push(번호) } });
  var 출1 = document.querySelector('#분석자료변수 .공통변수_5주1출').innerHTML.split(',');
  var 출2 = document.querySelector('#분석자료변수 .공통변수_5주2출').innerHTML.split(',');
  var 출3 = document.querySelector('#분석자료변수 .공통변수_5주3출').innerHTML.split(',');
  var 삼십주당번모음 = [];
  for (var i = 0; i < 30; i++) { 회차별배열[회차 - i].split('_').slice(2, 8).forEach(번호 => { 삼십주당번모음.push(번호) }) }

  //가로한줄 만들어둠. outerHTML로 넣을것이다. 개수, 횟수 기본으로 넣어둔다.
  var 가로한줄 = document.createElement('div'); //존재하는 요소에 들어가야 보인다
  for (var i = 0; i < 출수최대값 + 2; i++) { var 내부div = document.createElement('button'); 가로한줄.appendChild(내부div); }
  document.querySelector('#분석자료_삼십회표_js').innerHTML += 가로한줄.outerHTML;
  document.querySelectorAll('#분석자료_삼십회표_js > div')[0].children[0].innerHTML = '개수';
  for (var i = 0; i < 출수최대값 + 1; i++) { document.querySelectorAll('#분석자료_삼십회표_js > div')[0].children[i + 1].innerHTML = 0 }

  document.querySelector('#분석자료_삼십회표_js').innerHTML += 가로한줄.outerHTML;
  document.querySelectorAll('#분석자료_삼십회표_js > div')[1].children[0].innerHTML = '횟수';
  for (var i = 0; i < 출수최대값 + 1; i++) { document.querySelectorAll('#분석자료_삼십회표_js > div')[1].children[i + 1].innerHTML = i }

  //30주 0~8회까지만 기록하는데 9회이상이면 건너뜀어야함
  var 배열셑팅 = [장미, 출0, 출1, 출2, 출3]; var 배열제목 = ['장미', '출0', '출1', '출2', '출3'];
  var 기록기준배열값 = 2;
  var 현재배열최대값확인 = 0;
  for (var 배열대체 = 0; 배열대체 < 5; 배열대체++) {
    기록기준배열값 += 현재배열최대값확인;

    if (배열셑팅[배열대체][0] == '') { 현재배열최대값확인 = 0; continue; }
    var 삼십주기록 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//0~11 12개(여유)
    for (var 대체각번호반복 = 0; 대체각번호반복 < 배열셑팅[배열대체].length; 대체각번호반복++) {
      var 횟수 = 삼십주당번모음.filter(번호 => 번호 == 배열셑팅[배열대체][대체각번호반복]).length;
      var 이전최대값 = Math.max(...삼십주기록);
      //전체누적개수 기록
      document.querySelectorAll('#분석자료_삼십회표_js > div')[0].children[횟수 + 1].innerHTML =
        Number(document.querySelectorAll('#분석자료_삼십회표_js > div')[0].children[횟수 + 1].innerHTML) + 1;
      //   끝
      삼십주기록[횟수] += 1;
      var 기록후최대값 = Math.max(...삼십주기록);

      if (기록후최대값 > 이전최대값) { //제목만 추가된 빈한줄 추가
        document.querySelector('#분석자료_삼십회표_js').innerHTML += 가로한줄.outerHTML;
        if (기록후최대값 == 1) {
          document.querySelector('#분석자료_삼십회표_js > div:last-child').setAttribute('class', '첫' + 배열제목[배열대체] + ' ' + 배열제목[배열대체]);
        } else {
          document.querySelector('#분석자료_삼십회표_js > div:last-child').setAttribute('class', 배열제목[배열대체])
        }
        document.querySelector('#분석자료_삼십회표_js > div:last-child').children[0].innerText = 배열제목[배열대체];
      }
      //console.log('번호 : ' + 배열셑팅[배열대체][대체반복] + ', ' + 삼십주당번모음.filter(번호=>번호==배열셑팅[배열대체][대체반복]).length + '회')
      var 몇번째div인가 = 기록기준배열값 + 삼십주기록[횟수] - 1;
      var 몇번째children인가 = 횟수 + 1;
      document.querySelectorAll('#분석자료_삼십회표_js > div')[몇번째div인가].children[몇번째children인가].innerHTML = 배열셑팅[배열대체][대체각번호반복];
    }
    현재배열최대값확인 = 기록후최대값;
  }
  //두번째줄 div에 삼십회횟수기록 클래스 부여
  document.querySelectorAll('#분석자료_삼십회표_js > div')[1].classList.add('삼십회횟수기록2nddiv');
}
function 분석자료_삼십회빈도와개수_js작성() {
  document.querySelector('#분석자료_삼십회23456개수_js').innerHTML = '';
  document.querySelector('#분석자료_삼십회당첨개수_js').innerHTML = '';
  var 서식한줄복사본 = document.querySelectorAll('#분석자료_삼십회표_js > div')[0].cloneNode(true);
  var div = document.createElement('button');
  서식한줄복사본.appendChild(div);
  for (var i = 0; i < 서식한줄복사본.children.length; i++) { 서식한줄복사본.children[i].innerHTML = 0; }
  for (var i = 0; i < 21; i++) { document.querySelector('#분석자료_삼십회23456개수_js').innerHTML += 서식한줄복사본.outerHTML }
  var 머리글 = document.querySelector('#분석자료_삼십회23456개수_js > div:first-child');
  for (var i = 0; i < 머리글.children.length; i++) {
    if (i == 0) { 머리글.children[i].innerHTML = '회차' }
    if (i > 0 && i < 머리글.children.length - 1) { 머리글.children[i].innerHTML = i - 1 }
    if (i == 머리글.children.length - 1) { 머리글.children[i].innerHTML = '합' }
  }
  var 서식한줄복사본 = document.querySelectorAll('#분석자료_삼십회표_js > div')[0].cloneNode(true);
  for (var i = 0; i < 서식한줄복사본.children.length; i++) { 서식한줄복사본.children[i].innerHTML = 0; }
  for (var i = 0; i < 21; i++) { document.querySelector('#분석자료_삼십회당첨개수_js').innerHTML += 서식한줄복사본.outerHTML }
  var 머리글 = document.querySelector('#분석자료_삼십회당첨개수_js > div:first-child');
  for (var i = 0; i < 머리글.children.length; i++) {
    if (i < 머리글.children.length - 1) { 머리글.children[i].innerHTML = i }
    if (i == 머리글.children.length - 1) { 머리글.children[i].innerHTML = '합' }
  }
  var 출횟수 = document.querySelectorAll('#분석자료_삼십회23456개수_js > div');
  var 당첨개수 = document.querySelectorAll('#분석자료_삼십회당첨개수_js > div');
  for (var i = 1; i < 21; i++) { //i가 1부터임
    출횟수[i].children[0].innerHTML = 회차별배열[회차 - i + 1].split('_')[0];
    var 삼십주당번모음 = [];
    for (var 삼십주 = 0; 삼십주 < 30; 삼십주++) { 회차별배열[회차 - 삼십주 - i + 1].split('_').slice(2, 8).forEach(번호 => { 삼십주당번모음.push(번호) }) }
    if (최근회차 < (회차 - i + 2)) { var 다음회차당번 = [] } else { var 다음회차당번 = 회차별배열[회차 - i + 2].split('_').slice(2, 8); }
    for (var 출45 = 1; 출45 < 46; 출45++) {
      var 출수 = 삼십주당번모음.filter(번호 => 번호 == 출45).length;
      출횟수[i].children[출수 + 1].innerHTML = Number(출횟수[i].children[출수 + 1].innerHTML) + 1;
      if (다음회차당번.filter(번호 => 번호 == 출45).length) { 당첨개수[i].children[출수].innerHTML = Number(당첨개수[i].children[출수].innerHTML) + 1 }
    }
    출횟수[i].children[출횟수[i].children.length - 1].innerHTML = 0;
    for (var 합계 = 0; 합계 < 출횟수[i].children.length - 2; 합계++) {
      출횟수[i].children[출횟수[i].children.length - 1].innerHTML = Number(출횟수[i].children[출횟수[i].children.length - 1].innerHTML) + Number(출횟수[i].children[합계 + 1].innerHTML);
    }
    당첨개수[i].children[당첨개수[i].children.length - 1].innerHTML = 0;
    for (var 합계 = 0; 합계 < 당첨개수[i].children.length - 2; 합계++) {
      당첨개수[i].children[당첨개수[i].children.length - 1].innerHTML = Number(당첨개수[i].children[당첨개수[i].children.length - 1].innerHTML) + Number(당첨개수[i].children[합계 + 1].innerHTML);
    }
  }
}
function 분석자료_회차change설정() {
  console.log('분석자료_회차change설정()')
  document.querySelector('#분석자료_회차select').value = Number(회차);
  if (회차 > 최근회차) { console.log('회차가 최근회차보다 크면 종료'); 회차 = 회차 - 1; document.querySelector('#분석자료_회차select').value = Number(회차); return; } //회차=회차-1 ==> 원래대로 돌림
  if (1 == 1) { //1. 당번8칸채우기(30회분), 다음회차 채우기(둘다), 설정유형별로 회차 적용하기
    //당번8칸 채우기
    //다음회차 위치
    if (회차별배열[Number(회차) + 1]) {
      for (var i = 0; i < 9; i++) {
        document.querySelectorAll('#분석자료_다음회차 > button')[i].innerHTML = 회차별배열[Number(회차) + 1].split('_')[i];
      }
    } else {
      for (var i = 0; i < 9; i++) {//회차부터 9종
        document.querySelectorAll('#분석자료_다음회차 > button')[i].innerHTML = '_';
      }
    }
    for (var i = 1; i < 9; i++) {//날짜부터 번호 8종
      document.querySelectorAll('#분석자료_선택회차 > button')[i - 1].innerHTML = 회차별배열[Number(회차)].split('_')[i];
    }
  }
  if (1 == 1) { //#당번_오주삼십주개수 작성 및 변수에 값 넣기, //#당번변수 : 안에 class가 #분석자료변수 안에도 동일하므로... 부모id
    var 부모id = '#분석자료변수';
    변수명순서대로.forEach(변수명 => {
      document.querySelector(`${부모id} .${변수명}`).innerHTML = '';
    })
    if (i == 0 && 회차 == 최근회차) { document.querySelector(`${부모id} .${변수명순서대로[0]}`).innerHTML = '_,_,_,_,_,_' }//0 공통변수_다음당번
    if (i == 0 && 회차 != 최근회차) { document.querySelector(`${부모id} .${변수명순서대로[0]}`).innerHTML = 회차별배열[회차 + 1].split('_').slice(2, 8).join(',') } //0 공통변수_다음당번
    var 좌우수 = [], 이웃수 = [];
    당번 = 회차별배열[회차].split('_').slice(2, 8);
    document.querySelector(`${부모id} .공통변수_당번`).innerHTML = 회차별배열[회차].split('_').slice(2, 8).join(',');
    document.querySelector(`${부모id} .공통변수_당번이웃`).innerHTML = 회차별배열[회차].split('_').slice(2, 8).join(',') + ',';

    회차별배열[회차].split('_').slice(2, 8).forEach(숫자 => {
      if (숫자 == 1) { 좌우수.push(45); 좌우수.push(2); }
      if (숫자 == 45) { 좌우수.push(44); 좌우수.push(1); }
      if (숫자 > 1 && 숫자 < 45) { 좌우수.push(Number(숫자) - 1); 좌우수.push(Number(숫자) + 1); }
    })
    좌우수 = new Set(좌우수); 좌우수 = [...좌우수]
    좌우수.forEach(숫자 => {
      if (!회차별배열[회차].split('_').slice(2, 8).includes(숫자)) {
        document.querySelector(`${부모id} .공통변수_이웃`).innerHTML += 숫자 + ',';
        document.querySelector(`${부모id} .공통변수_당번이웃`).innerHTML += 숫자 + ',';
      };
    })

    var 오주당번모음 = [], 십주당번모음 = [], 십오주당번모음 = [], 삼십주당번모음 = [];
    for (var i = 0; i < 30; i++) {
      if (i < 5) { 회차별배열[회차 - i].split('_').slice(2, 8).forEach(번호 => { 오주당번모음.push(번호) }) }
      if (i < 10) { 회차별배열[회차 - i].split('_').slice(2, 8).forEach(번호 => { 십주당번모음.push(번호) }) }
      if (i < 15) { 회차별배열[회차 - i].split('_').slice(2, 8).forEach(번호 => { 십오주당번모음.push(번호) }) }
      if (i < 30) { 회차별배열[회차 - i].split('_').slice(2, 8).forEach(번호 => { 삼십주당번모음.push(번호) }) }
    }
    /* 
    0 공통변수_다음당번  1 공통변수_당번  2 공통변수_이웃  3 공통변수_당번이웃  4 공통변수_5주출  5 공통변수_5주0출  6 공통변수_5주1출  
    7 공통변수_5주2출   8 공통변수_5주3출  9 공통변수_10주0출  10 공통변수_15주0출  11 공통변수_30주0출  12 공통변수_30주1출  
    13 공통변수_30주2출  14 공통변수_30주3출  15 공통변수_30주4출  16 공통변수_30주5출  17 공통변수_30주6출  18 공통변수_30주7출 
    19 공통변수_30주8출  20 공통변수_30주9출  21 공통변수_30주10출  22 공통변수_30주11출  23 공통변수_30주12출
    */
    for (var i = 0; i < 45; i++) {
      var 오주출개수 = 오주당번모음.filter(숫자 => 숫자 == (i + 1)).length;
      var 숫자 = i + 1;
      if (오주출개수 > 0) {
        document.querySelector(`${부모id} .${변수명순서대로[4]}`).innerHTML += 숫자 + ',';
      }
      if (오주출개수 == 0) {
        document.querySelector(`${부모id} .${변수명순서대로[5]}`).innerHTML += 숫자 + ',';
      }
      if (오주출개수 == 1) {
        document.querySelector(`${부모id} .${변수명순서대로[6]}`).innerHTML += 숫자 + ',';
      }
      if (오주출개수 == 2) {
        document.querySelector(`${부모id} .${변수명순서대로[7]}`).innerHTML += 숫자 + ',';
      }
      if (오주출개수 > 2) {
        document.querySelector(`${부모id} .${변수명순서대로[8]}`).innerHTML += 숫자 + ',';
      }
      var 십주출개수 = 십주당번모음.filter(숫자 => 숫자 == (i + 1)).length;
      var 십오주출개수 = 십오주당번모음.filter(숫자 => 숫자 == (i + 1)).length;
      if (십주출개수 == 0) {
        document.querySelector(`${부모id} .${변수명순서대로[9]}`).innerHTML += 숫자 + ',';
      }
      if (십오주출개수 == 0) {
        document.querySelector(`${부모id} .${변수명순서대로[10]}`).innerHTML += 숫자 + ',';
      }

      var 삼십주출개수 = 삼십주당번모음.filter(숫자 => 숫자 == (i + 1)).length;
      if (삼십주출개수 == 0) {
        document.querySelector(`${부모id} .${변수명순서대로[11]}`).innerHTML += 숫자 + ',';
      }
      if (삼십주출개수 == 1) {
        document.querySelector(`${부모id} .${변수명순서대로[12]}`).innerHTML += 숫자 + ',';
      }
      if (삼십주출개수 == 2) {
        document.querySelector(`${부모id} .${변수명순서대로[13]}`).innerHTML += 숫자 + ',';
      }
      if (삼십주출개수 == 3) {
        document.querySelector(`${부모id} .${변수명순서대로[14]}`).innerHTML += 숫자 + ',';
      }
      if (삼십주출개수 == 4) {
        document.querySelector(`${부모id} .${변수명순서대로[15]}`).innerHTML += 숫자 + ',';
      }
      if (삼십주출개수 == 5) {
        document.querySelector(`${부모id} .${변수명순서대로[16]}`).innerHTML += 숫자 + ',';
      }
      if (삼십주출개수 == 6) {
        document.querySelector(`${부모id} .${변수명순서대로[17]}`).innerHTML += 숫자 + ',';
      }
      if (삼십주출개수 == 7) {
        document.querySelector(`${부모id} .${변수명순서대로[18]}`).innerHTML += 숫자 + ',';
      }
      if (삼십주출개수 == 8) {
        document.querySelector(`${부모id} .${변수명순서대로[19]}`).innerHTML = 숫자 + ',';
      }
      if (삼십주출개수 == 9) {
        document.querySelector(`${부모id} .${변수명순서대로[20]}`).innerHTML += 숫자 + ',';
      }
      if (삼십주출개수 == 10) {
        document.querySelector(`${부모id} .${변수명순서대로[21]}`).innerHTML += 숫자 + ',';
      }
      if (삼십주출개수 == 11) {
        document.querySelector(`${부모id} .${변수명순서대로[22]}`).innerHTML += 숫자 + ',';
      }
      if (삼십주출개수 == 12) {
        document.querySelector(`${부모id} .${변수명순서대로[23]}`).innerHTML += 숫자 + ',';
      }
    }
    변수명순서대로.forEach(변수명 => {
      var 요소확인 = document.querySelector(`${부모id} .${변수명}`);
      if (요소확인.innerHTML.slice(-1) == ',') { 요소확인.innerHTML = 요소확인.innerHTML.slice(0, -1) } //마지막이 쉼표(,)이면 쉼표삭제
    })
  }
  //색칠하기전에 #분석자료_표_상_js .js클릭번호 11번째까지 분석클랙스, 분석덧칠클래스 제거 + 
  //분석덧칠 은 class 만 부여한다.
  var 개수 = document.querySelectorAll('.분석자료_표_상_지울곳 .분석').length;
  for (var i = 0; i < 개수; i++) {
    document.querySelectorAll('.분석자료_표_상_지울곳 .분석')[0].innerHTML = '';//이것이 remove보다 앞에와야함
    document.querySelectorAll('.분석자료_표_상_지울곳 .분석')[0].classList.remove('분석');
  }

  var 개수 = document.querySelectorAll('.분석자료_표_상_지울곳 .분석덧칠').length;
  for (var i = 0; i < 개수; i++) {
    document.querySelectorAll('.분석자료_표_상_지울곳 .분석덧칠')[0].classList.remove('분석덧칠');
  }

  //색칠하기전에 #분석자료_표_하_js 분석클랙스, 분석덧칠클래스 제거 + 
  var 개수 = document.querySelectorAll('#분석자료_표_하_js .분석').length;
  for (var i = 0; i < 개수; i++) {
    document.querySelectorAll('#분석자료_표_하_js .분석')[0].innerHTML = '';//이것이 remove보다 앞에와야함
    document.querySelectorAll('#분석자료_표_하_js .분석')[0].classList.remove('분석');
  }

  var 개수 = document.querySelectorAll('#분석자료_표_하_js .분석덧칠').length;
  for (var i = 0; i < 개수; i++) {
    document.querySelectorAll('#분석자료_표_하_js .분석덧칠')[0].classList.remove('분석덧칠');
  }

  var 색칠요소이름 = '#분석자료_표_상_js .다섯개씩번갈아색칠'
  var class10종 = ['.공통변수_당번', '.공통변수_이웃', '.공통변수_당번이웃', '.공통변수_15주0출', '.공통변수_10주0출',
    '.공통변수_5주0출', '.공통변수_5주출', '.공통변수_5주1출', '.공통변수_5주2출', '.공통변수_5주3출']
  for (var i = 0; i < 10; i++) {
    var 현재배열 = document.querySelector(`#분석자료변수 ${class10종[i]}`).innerHTML.split(',');
    document.querySelector(`#분석자료변수 ${class10종[i]}`).innerHTML.split(',').forEach((element, index, array) => {
      //console.log((i+1) + '번째 ,element,index,array : ' + element + ', ' + index + ', [' + array + ']')
      if (element != '') { // 공백문자열 가지고 왔을때 length는 1 이고 Number(element)에서 에러남
        document.querySelectorAll(`${색칠요소이름}`)[i + 1].children[Number(element) - 1].classList.add('분석');
        document.querySelectorAll(`${색칠요소이름}`)[i + 1].children[Number(element) - 1].innerHTML = element;
      }
    });
    if (현재배열[0] != '') { document.querySelectorAll(`${색칠요소이름}`)[i + 1].previousElementSibling.children[1].innerHTML = 현재배열.length }
    if (현재배열[0] == '') { document.querySelectorAll(`${색칠요소이름}`)[i + 1].previousElementSibling.children[1].innerHTML = '' }
  }

  //#분석자료_표_하_js : 30회 횟수기록 45개(#삼십회횟수기록), 5주간 출횟수 6번, 30회 당번색칠
  //#분석자료_표_하_js : 30회 횟수기록 45개(#삼십회횟수기록)
  document.querySelectorAll('#삼십회횟수기록 button').forEach((element, index, arrar) => {
    element.innerHTML = 삼십주당번모음.filter(번호 => 번호 == (index + 1)).length;
  });
  //5주간 출횟수 6번 : 삼십주당번모음 slice로?
  if ('오주간출횟수6번' == '오주간출횟수6번') {
    var 다음 = 0;
    for (var i = 0; i < 6; i++) {
      var 현재오주번호들 = 삼십주당번모음.slice(다음 * 30, 다음 * 30 + 30);
      다음++;
      var 색칠할요소 = document.querySelectorAll('#분석자료_표_하_js .다섯개씩번갈아색칠')[다음]; //첫다음 1 (두번째꺼)
      for (var m = 0; m < 45; m++) {
        var 오주출횟수 = 현재오주번호들.filter(번호 => 번호 == (m + 1)).length;
        if (오주출횟수 > 0) { 색칠할요소.children[m].innerHTML = 오주출횟수 }
        if (오주출횟수 > 0) { 색칠할요소.children[m].classList.add('분석'); }
      }
    }
  }

  //30주간 당번 색칠
  if ('30주간 당번 색칠' == '30주간 당번 색칠') {
    var 다음 = 7, 이동 = 0;
    for (var i = 0; i < 30; i++) {
      var 현재당번들 = 삼십주당번모음.slice(이동 * 6, 이동 * 6 + 6);
      다음++; 이동++;
      var 색칠할요소 = document.querySelectorAll('#분석자료_표_하_js .다섯개씩번갈아색칠')[다음]; //첫다음 1 (두번째꺼)
      for (var m = 0; m < 6; m++) {
        색칠할요소.children[Number(현재당번들[m]) - 1].innerHTML = 현재당번들[m]
        색칠할요소.children[Number(현재당번들[m]) - 1].classList.add('분석');
      }
    }
  }
  분석자료_삼십회표_js작성();
  분석자료_삼십회빈도와개수_js작성();
  분석및당번change후_색칠번호변경();
}
function 당번_회차change설정() {
  console.log('당번_회차change설정()')
  document.querySelector('#당번_회차select').value = Number(회차);
  if (회차 > 최근회차) { console.log('회차가 최근회차보다 크면 종료'); 회차 = 회차 - 1; document.querySelector('#당번_회차select').value = Number(회차); return; } //회차=회차-1 ==> 원래대로 돌림
  if (1 == 1) { //1. 당번8칸채우기(30회분), 다음회차 채우기(둘다), 설정유형별로 회차 적용하기
    //당번8칸 채우기
    //다음회차 위치
    if (회차별배열[Number(회차) + 1]) {
      for (var i = 0; i < 8; i++) {
        if (i == 0) { document.querySelectorAll('#당번_다음회차 > div > span > button')[i].innerHTML = 회차별배열[Number(회차) + 1].split('_')[i] }
        if (i > 0) { document.querySelectorAll('#당번_다음회차 > div > span > button')[i].innerHTML = 회차별배열[Number(회차) + 1].split('_')[i + 1] }
      }
    } else {
      for (var i = 0; i < 8; i++) {
        document.querySelectorAll('#당번_다음회차 > div > span > button')[i].innerHTML = '_';
      }
    }
    //30회분 번호
    for (var 삼십번 = 0; 삼십번 < 30; 삼십번++) {
      for (var i = 0; i < 8; i++) {
        if (i == 0) { document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십번 + 1) + ') > span > button')[i].innerHTML = 회차별배열[Number(회차) - 삼십번].split('_')[i] }
        if (i > 0) { document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십번 + 1) + ') > span > button')[i].innerHTML = 회차별배열[Number(회차) - 삼십번].split('_')[i + 1] }
      }
    }
  }
  if (1 == 1) { //#당번_오주삼십주개수 작성 및 변수에 값 넣기, //#당번변수 : 안에 class가 #분석자료변수 안에도 동일하므로... 부모id
    var 부모id = '#당번변수', 개수id = '#당번_오주삼십주개수';
    변수명순서대로.forEach(변수명 => {
      document.querySelector(`${부모id} .${변수명}`).innerHTML = '';
      document.querySelector(`${개수id} .${변수명}`).innerHTML = 0; //?넣어도 안넘어가네 forEach, d-none으로 넣어줬다.
      //forEach안에서는 삼항연산은 쓸수있다. 체이닝은 쓸수없다.
    })
    if (i == 0 && 회차 == 최근회차) { document.querySelector(`${부모id} .${변수명순서대로[0]}`).innerHTML = '_,_,_,_,_,_' }//0 공통변수_다음당번
    if (i == 0 && 회차 != 최근회차) { document.querySelector(`${부모id} .${변수명순서대로[0]}`).innerHTML = 회차별배열[회차 + 1].split('_').slice(2, 8).join(',') } //0 공통변수_다음당번
    var 좌우수 = [], 이웃수 = [];
    당번 = 회차별배열[회차].split('_').slice(2, 8);
    document.querySelector(`${부모id} .공통변수_당번`).innerHTML = 회차별배열[회차].split('_').slice(2, 8).join(',');
    document.querySelector(`${개수id} .공통변수_당번`).innerHTML = 6;
    document.querySelector(`${부모id} .공통변수_당번이웃`).innerHTML = 회차별배열[회차].split('_').slice(2, 8).join(',') + ',';
    document.querySelector(`${개수id} .공통변수_당번이웃`).innerHTML = 6;

    회차별배열[회차].split('_').slice(2, 8).forEach(숫자 => {
      if (숫자 == 1) { 좌우수.push(45); 좌우수.push(2); }
      if (숫자 == 45) { 좌우수.push(44); 좌우수.push(1); }
      if (숫자 > 1 && 숫자 < 45) { 좌우수.push(Number(숫자) - 1); 좌우수.push(Number(숫자) + 1); }
    })
    좌우수 = new Set(좌우수); 좌우수 = [...좌우수]
    좌우수.forEach(숫자 => {
      if (!회차별배열[회차].split('_').slice(2, 8).includes(숫자)) {
        document.querySelector(`${부모id} .공통변수_이웃`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .공통변수_이웃`).innerHTML = Number(document.querySelector(`${개수id} .공통변수_이웃`).innerHTML) + 1;
        document.querySelector(`${부모id} .공통변수_당번이웃`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .공통변수_당번이웃`).innerHTML = Number(document.querySelector(`${개수id} .공통변수_당번이웃`).innerHTML) + 1;
      };
    })

    var 오주당번모음 = [], 십주당번모음 = [], 십오주당번모음 = [], 삼십주당번모음 = [];
    for (var i = 0; i < 30; i++) {
      if (i < 5) { 회차별배열[회차 - i].split('_').slice(2, 8).forEach(번호 => { 오주당번모음.push(번호) }) }
      if (i < 10) { 회차별배열[회차 - i].split('_').slice(2, 8).forEach(번호 => { 십주당번모음.push(번호) }) }
      if (i < 15) { 회차별배열[회차 - i].split('_').slice(2, 8).forEach(번호 => { 십오주당번모음.push(번호) }) }
      if (i < 30) { 회차별배열[회차 - i].split('_').slice(2, 8).forEach(번호 => { 삼십주당번모음.push(번호) }) }
    }
    /* 
    0 공통변수_다음당번  1 공통변수_당번  2 공통변수_이웃  3 공통변수_당번이웃  4 공통변수_5주출  5 공통변수_5주0출  6 공통변수_5주1출  
    7 공통변수_5주2출   8 공통변수_5주3출  9 공통변수_10주0출  10 공통변수_15주0출  11 공통변수_30주0출  12 공통변수_30주1출  
    13 공통변수_30주2출  14 공통변수_30주3출  15 공통변수_30주4출  16 공통변수_30주5출  17 공통변수_30주6출  18 공통변수_30주7출 
    19 공통변수_30주8출  20 공통변수_30주9출  21 공통변수_30주10출  22 공통변수_30주11출  23 공통변수_30주12출
    */
    for (var i = 0; i < 45; i++) {
      var 오주출개수 = 오주당번모음.filter(숫자 => 숫자 == (i + 1)).length;
      var 숫자 = i + 1;
      if (오주출개수 > 0) {
        document.querySelector(`${부모id} .${변수명순서대로[4]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[4]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[4]}`).innerHTML) + 1;
      }
      if (오주출개수 == 0) {
        document.querySelector(`${부모id} .${변수명순서대로[5]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[5]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[5]}`).innerHTML) + 1;
      }
      if (오주출개수 == 1) {
        document.querySelector(`${부모id} .${변수명순서대로[6]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[6]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[6]}`).innerHTML) + 1;
      }
      if (오주출개수 == 2) {
        document.querySelector(`${부모id} .${변수명순서대로[7]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[7]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[7]}`).innerHTML) + 1;
      }
      if (오주출개수 > 2) {
        document.querySelector(`${부모id} .${변수명순서대로[8]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[8]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[8]}`).innerHTML) + 1;
      }
      var 십주출개수 = 십주당번모음.filter(숫자 => 숫자 == (i + 1)).length;
      var 십오주출개수 = 십오주당번모음.filter(숫자 => 숫자 == (i + 1)).length;
      if (십주출개수 == 0) {
        document.querySelector(`${부모id} .${변수명순서대로[9]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[9]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[9]}`).innerHTML) + 1;
      }
      if (십오주출개수 == 0) {
        document.querySelector(`${부모id} .${변수명순서대로[10]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[10]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[10]}`).innerHTML) + 1;
      }

      var 삼십주출개수 = 삼십주당번모음.filter(숫자 => 숫자 == (i + 1)).length;
      if (삼십주출개수 == 0) {
        document.querySelector(`${부모id} .${변수명순서대로[11]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[11]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[11]}`).innerHTML) + 1;
      }
      if (삼십주출개수 == 1) {
        document.querySelector(`${부모id} .${변수명순서대로[12]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[12]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[12]}`).innerHTML) + 1;
      }
      if (삼십주출개수 == 2) {
        document.querySelector(`${부모id} .${변수명순서대로[13]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[13]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[13]}`).innerHTML) + 1;
      }
      if (삼십주출개수 == 3) {
        document.querySelector(`${부모id} .${변수명순서대로[14]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[14]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[14]}`).innerHTML) + 1;
      }
      if (삼십주출개수 == 4) {
        document.querySelector(`${부모id} .${변수명순서대로[15]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[15]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[15]}`).innerHTML) + 1;
      }
      if (삼십주출개수 == 5) {
        document.querySelector(`${부모id} .${변수명순서대로[16]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[16]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[16]}`).innerHTML) + 1;
      }
      if (삼십주출개수 == 6) {
        document.querySelector(`${부모id} .${변수명순서대로[17]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[17]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[17]}`).innerHTML) + 1;
      }
      if (삼십주출개수 == 7) {
        document.querySelector(`${부모id} .${변수명순서대로[18]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[18]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[18]}`).innerHTML) + 1;
      }
      if (삼십주출개수 == 8) {
        document.querySelector(`${부모id} .${변수명순서대로[19]}`).innerHTML = 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[19]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[19]}`).innerHTML) + 1;
      }
      if (삼십주출개수 == 9) {
        document.querySelector(`${부모id} .${변수명순서대로[20]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[20]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[20]}`).innerHTML) + 1;
      }
      if (삼십주출개수 == 10) {
        document.querySelector(`${부모id} .${변수명순서대로[21]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[21]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[21]}`).innerHTML) + 1;
      }
      if (삼십주출개수 == 11) {
        document.querySelector(`${부모id} .${변수명순서대로[22]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[22]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[22]}`).innerHTML) + 1;
      }
      if (삼십주출개수 == 12) {
        document.querySelector(`${부모id} .${변수명순서대로[23]}`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .${변수명순서대로[23]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[23]}`).innerHTML) + 1;
      }
    }
    변수명순서대로.forEach(변수명 => {
      var 요소확인 = document.querySelector(`${부모id} .${변수명}`);
      if (요소확인.innerHTML.slice(-1) == ',') { 요소확인.innerHTML = 요소확인.innerHTML.slice(0, -1) } //마지막이 쉼표(,)이면 쉼표삭제
    })
    //.당번만 > button : title넣기
    var 요소들 = document.querySelectorAll('.당번만 > button');
    for (var i = 0; i < 요소들.length; i++) {
      요소들[i].setAttribute('title', 요소들[i].innerHTML)
    }

  }
  //-------------- 흐름



  분석및당번change후_색칠번호변경();
}
function gpt() {
  for (let i = 0; i < 45; i++) {
    const 숫자 = i + 1;

    const 출현정보 = [
      { 출개수: 오주당번모음.filter(n => n === 숫자).length, 인덱스: [4, 5, 6, 7, 8], 기준: [v => v > 0, v => v == 0, v => v == 1, v => v == 2, v => v > 2] },
      { 출개수: 십주당번모음.filter(n => n === 숫자).length, 인덱스: [9], 기준: [v => v == 0] },
      { 출개수: 십오주당번모음.filter(n => n === 숫자).length, 인덱스: [10], 기준: [v => v == 0] },
      {
        출개수: 삼십주당번모음.filter(n => n === 숫자).length,
        인덱스: Array.from({ length: 13 }, (_, k) => 11 + k), // 11 ~ 23
        기준: Array.from({ length: 13 }, (_, k) => v => v === k) // 출현개수 0~12까지
      }
    ];

    출현정보.forEach(({ 출개수, 인덱스, 기준 }) => {
      기준.forEach((조건, idx) => {
        if (조건(출개수)) {
          const 변수명 = 변수명순서대로[인덱스[idx]];
          document.querySelector(`${부모id} .${변수명}`).innerHTML += 숫자 + ',';
          const 개수셀 = document.querySelector(`${개수id} .${변수명}`);
          개수셀.innerHTML = Number(개수셀.innerHTML) + 1;
        }
      });
    });
  }
}
function 회차change설정_보류() {
  if (아이디 == '당번플러스') { if (회차 > 최근회차) { alert('최근회차입니다'); return; } }
  if (아이디 == '분석플러스') { if (회차 > 최근회차) { alert('최근회차입니다'); return; } }

  if (설정유형 == '당번') { document.querySelector('#당번_회차select').value = 회차; }
  if (설정유형 == '분석') { document.querySelector('#분석자료_회차select').value = 회차; }
  var 범용당번배열 = $('#당번숨김_안에_저장중').html().split(','); 범용당번배열.pop(); //마지막 배열값 제거(빈거)

  var 당번 = [], _이웃 = [], _당번플러스이웃 = [], _5주출 = [], _5주0출 = [], _5주1출 = [], _5주2출 = [], _5주3출이상 = [], _10주0출 = [], _15주0출 = [];
  var 삼십_00 = [], 삼십_01 = [], 삼십_02 = [], 삼십_03 = [], 삼십_04 = [], 삼십_05 = [], 삼십_06 = [], 삼십_07 = [], 삼십_08 = [], 삼십_09 = [], 삼십_10 = [], 삼십_11 = [], 삼십_12 = [];
  var 삼십주번호들 = [], 오주번호들 = [], 십주번호들 = [], 십오주번호들 = [];
  for (var i = 0; i < 30; i++) {
    for (var 추출 = 2; 추출 < 8; 추출++) {
      if (i == 0) { 당번.push(범용당번배열[Number(회차) - i].split('_')[추출].trim()) }
      if (i < 5) { 오주번호들.push(범용당번배열[Number(회차) - i].split('_')[추출].trim()) }
      if (i < 10) { 십주번호들.push(범용당번배열[Number(회차) - i].split('_')[추출].trim()) }
      if (i < 15) { 십오주번호들.push(범용당번배열[Number(회차) - i].split('_')[추출].trim()) }
      삼십주번호들.push(범용당번배열[Number(회차) - i].split('_')[추출].trim())
    }
  }
  for (i = 0; i < 45; i++) {
    var 오주출개수 = 오주번호들.filter(번호 => 번호 == (i + 1)).length;
    var 십주0출개수 = 십주번호들.filter(번호 => 번호 == (i + 1)).length;
    var 십오주0출개수 = 십오주번호들.filter(번호 => 번호 == (i + 1)).length;
    var 삼십주출개수 = 삼십주번호들.filter(번호 => 번호 == (i + 1)).length;
    if (오주출개수 == 0) { _5주0출.push((i + 1)) }
    if (오주출개수 > 0) { _5주출.push((i + 1)) }
    if (오주출개수 == 1) { _5주1출.push((i + 1)) }
    if (오주출개수 == 2) { _5주2출.push((i + 1)) }
    if (오주출개수 > 2) { _5주3출이상.push((i + 1)) }
    if (십주0출개수 == 0) { _10주0출.push((i + 1)) }
    if (십오주0출개수 == 0) { _15주0출.push((i + 1)) }
    if (삼십주출개수 == 0) { 삼십_00.push((i + 1)) }
    if (삼십주출개수 == 1) { 삼십_01.push((i + 1)) }
    if (삼십주출개수 == 2) { 삼십_02.push((i + 1)) }
    if (삼십주출개수 == 3) { 삼십_03.push((i + 1)) }
    if (삼십주출개수 == 4) { 삼십_04.push((i + 1)) }
    if (삼십주출개수 == 5) { 삼십_05.push((i + 1)) }
    if (삼십주출개수 == 6) { 삼십_06.push((i + 1)) }
    if (삼십주출개수 == 7) { 삼십_07.push((i + 1)) }
    if (삼십주출개수 == 8) { 삼십_08.push((i + 1)) }
    if (삼십주출개수 == 9) { 삼십_09.push((i + 1)) }
    if (삼십주출개수 == 10) { 삼십_10.push((i + 1)) }
    if (삼십주출개수 == 11) { 삼십_11.push((i + 1)) }
    if (삼십주출개수 == 12) { 삼십_12.push((i + 1)) }
  }
  if (설정유형 == '당번') {
    //다음회차 위치
    if (범용당번배열[회차 + 1]) {
      for (var i = 0; i < 8; i++) {
        if (i == 0) { document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML = 범용당번배열[회차 + 1].split('_')[i] }
        if (i > 0) { document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML = 범용당번배열[회차 + 1].split('_')[i + 1] }
      }
    } else {
      for (var i = 0; i < 8; i++) {
        document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML = '_';
      }
    }
    //30회분 번호
    for (var 삼십번 = 0; 삼십번 < 30; 삼십번++) {
      for (var i = 0; i < 8; i++) {
        if (i == 0) { document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십번 + 1) + ') > div > div')[i].innerHTML = 범용당번배열[회차 - 삼십번].split('_')[i] }
        if (i > 0) { document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십번 + 1) + ') > div > div')[i].innerHTML = 범용당번배열[회차 - 삼십번].split('_')[i + 1] }
      }
    }
    //5주변수, 30주변수 넣기
    document.querySelector('#당번_변수_당번').innerHTML = 당번.join(',');
    document.querySelector('#당번_변수_이웃').innerHTML = 당번.join(',');
    document.querySelector('#당번_변수_당번이웃').innerHTML = 당번.join(',');
    document.querySelector('#당번_변수_5주출').innerHTML = _5주출.join(',');
    document.querySelector('#당번_변수_5주0출').innerHTML = _5주0출.join(',');
    document.querySelector('#당번_변수_5주1출').innerHTML = _5주1출.join(',');
    document.querySelector('#당번_변수_5주2출').innerHTML = _5주2출.join(',');
    document.querySelector('#당번_변수_5주3출').innerHTML = _5주3출이상.join(',');
    document.querySelector('#당번_변수_10주0출').innerHTML = _10주0출.join(',');
    document.querySelector('#당번_변수_15주0출').innerHTML = _15주0출.join(',');
    document.querySelector('#당번_변수_30주0출').innerHTML = 삼십_00.join(',');
    document.querySelector('#당번_변수_30주1출').innerHTML = 삼십_01.join(',');
    document.querySelector('#당번_변수_30주2출').innerHTML = 삼십_02.join(',');
    document.querySelector('#당번_변수_30주3출').innerHTML = 삼십_03.join(',');
    document.querySelector('#당번_변수_30주4출').innerHTML = 삼십_04.join(',');
    document.querySelector('#당번_변수_30주5출').innerHTML = 삼십_05.join(',');
    document.querySelector('#당번_변수_30주6출').innerHTML = 삼십_06.join(',');
    document.querySelector('#당번_변수_30주7출').innerHTML = 삼십_07.join(',');
    document.querySelector('#당번_변수_30주8출').innerHTML = 삼십_08.join(',');
    document.querySelector('#당번_변수_30주9출').innerHTML = 삼십_09.join(',');
    document.querySelector('#당번_변수_30주10출').innerHTML = 삼십_10.join(',');
    document.querySelector('#당번_변수_30주11출').innerHTML = 삼십_11.join(',');
    document.querySelector('#당번_변수_30주12출').innerHTML = 삼십_12.join(',');
    //오른쪽에 오주관련개수 넣기, 30주관련 개수 넣기
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(2) > button:nth-of-type(2)').innerHTML = 당번.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(3) > button:nth-of-type(2)').innerHTML = 당번.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(4) > button:nth-of-type(2)').innerHTML = 당번.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(5) > button:nth-of-type(2)').innerHTML = _5주출.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(6) > button:nth-of-type(2)').innerHTML = _5주0출.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(7) > button:nth-of-type(2)').innerHTML = _5주1출.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(8) > button:nth-of-type(2)').innerHTML = _5주2출.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(9) > button:nth-of-type(2)').innerHTML = _5주3출이상.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(10) > button:nth-of-type(2)').innerHTML = _10주0출.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(11) > button:nth-of-type(2)').innerHTML = _15주0출.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(2) > button:nth-of-type(2)').innerHTML = 삼십_00.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(3) > button:nth-of-type(2)').innerHTML = 삼십_01.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(4) > button:nth-of-type(2)').innerHTML = 삼십_02.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(5) > button:nth-of-type(2)').innerHTML = 삼십_03.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(6) > button:nth-of-type(2)').innerHTML = 삼십_04.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(7) > button:nth-of-type(2)').innerHTML = 삼십_05.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(8) > button:nth-of-type(2)').innerHTML = 삼십_06.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(9) > button:nth-of-type(2)').innerHTML = 삼십_07.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(10) > button:nth-of-type(2)').innerHTML = 삼십_08.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(11) > button:nth-of-type(2)').innerHTML = 삼십_09.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(12) > button:nth-of-type(2)').innerHTML = 삼십_10.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(13) > button:nth-of-type(2)').innerHTML = 삼십_11.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(14) > button:nth-of-type(2)').innerHTML = 삼십_12.length;
  }
}



function 분석및당번change후_색칠번호변경() {
  //keep번호들, 셑팅1, 셑팅2, 셑팅3, 클릭번호들 : 변경체크되어 있을때

}

function 킵_보기숨기기(e) {
  var 버튼들 = document.querySelectorAll('.설명_왼쪽div_버튼5개 > button');
  if (e.classList.contains('js숨김')) { e.classList.remove('js숨김') } else { e.classList.add('js숨김') }
  for (var i = 0; i < 버튼들.length; i++) {
    if (버튼들[i].classList.contains('js숨김')) {
      document.querySelectorAll('.설명_첫번째div > .설명_가로한줄')[i].classList.add('d-none')
    } else {
      document.querySelectorAll('.설명_첫번째div > .설명_가로한줄')[i].classList.remove('d-none')
    }
  }

}













function 셑팅토글(e) {
  console.log('셑팅토글(e)');
  const 설정IDs = ['keep_input', '셑팅1_input', '셑팅2_input', '셑팅3_input'];
  const 설명들 = document.querySelectorAll('.설명_가로한줄');

  // 현재 클릭된 요소를 체크하고 나머지는 해제
  설정IDs.forEach((id, index) => {
    const input = document.getElementById(id);
    const 설명대상 = 설명들[index]?.children[0]?.children[2];
    
    if (e.id === id) {
      input.checked = true;
      설명대상?.classList.add('초코');
    } else {
      input.checked = false;
      설명대상?.classList.remove('초코');
    }
  });
}
function 고정html_구조생성및_초기설정() {
  //회차select옵션생성
  let 옵션 = $('#당번숨김_안에_저장중').html().split(',').reverse().map(v => `<option>${v.split('_')[0]}</option>`).join('');
  $('#당번_회차select, #분석자료_회차select').html(옵션);

  //check_초기설정 : .체크input checked인것 d-none제거(보이게), .분류 인것 이동리스트에 추가
  $('.체크input').each(function () {
    $(this).next('label').attr('for', this.id);
    this.checked && $('#' + this.id.slice(6))?.removeClass('d-none');
  });
  const html = $('.이동리스트').map((_, el) => `<div>${el.id}</div>`).get().join('');
  $('#이동할위치div리스트, #이동할div리스트').html(html);

  const 당번한줄html = `<div><span class="당번회차 d-inline-block"><button style="width:45px;font-weight:lighter;"></button></span><span 
  class="당번만 d-inline-block"><button></button><button></button><button></button><button></button><button></button><button></button></span><span 
  class="보볼 d-inline-block"><button style="font-weight:lighter;"></button></span></div>`
  document.querySelector('#당번_다음회차').innerHTML = 당번한줄html;
  for (var i = 0; i < 30; i++) {
    document.querySelector('#당번_불러온당첨정보').innerHTML += 당번한줄html;
  }
  //id="분석자료_표_상_js"
  if ('분석자료_표_상_js' == '분석자료_표_상_js') {
    for (var 외부 = 0; 외부 < 20; 외부++) { //처음 20칸
      var 가로한줄 = document.createElement('div');
      var 번호선택_추출_c = document.createElement('span');
      var 번호선택배열 = ['번호선택', '당번', '이웃수', '당번+이웃', '15주미출', '10주미출', '5주0출', '5주출', '5주1출', '5주2출', '5주3출']
      for (var i = 0; i < 4; i++) {
        var div요소 = document.createElement('span'); // div 요소 변수에 담는다.
        if (i == 0) { div요소.textContent = 번호선택배열[외부]; div요소.setAttribute('style', 'width:75px;height:24px; border:1px solid black;display:inline-block;margin-right:-1px;') }
        if (i == 1 && 외부 == 0) { div요소.textContent = '수' }
        if (i == 1) { div요소.setAttribute('style', 'width:30px; border:1px solid black;display:inline-block;margin-right:-1px;text-align:center;height:24px;') }

        if (i == 2) { div요소 = document.createElement('button'); }
        if (i == 2 && 외부 == 0) { div요소.textContent = '출' }
        if (i == 2 && 외부 != 0) { div요소.setAttribute('class', '카운팅') }      //녹색부분에 카운팅 클래스 넣기

        if (i == 3 && 외부 == 0) { div요소 = document.createElement('button'); div요소.textContent = 'C' }
        if (i == 3 && 외부 != 0) { div요소 = document.createElement('button'); div요소.setAttribute('class', '앞요소값clear') }

        if (i == 3 && 외부 != 0) { div요소.textContent = 외부 }
        //11부터 추가 : 번호선택 위치에 onclick="분석자료_11에서20_keep번호셑팅(this)", 수 위치에 onclick="keep셑팅초기화()"
        if (외부 > 10) {
          if (i == 0) { div요소.setAttribute('onclick', '분석자료_11에서20_keep번호셑팅(this)') }
          if (i == 0) { div요소.setAttribute('contenteditable', 'true') }
          if (i == 1) { div요소.setAttribute('onclick', 'keep셑팅초기화(this)') }
        }
        번호선택_추출_c.appendChild(div요소);
      }
      var 번호45 = document.createElement('span');
      //if (외부!=0) {번호45.setAttribute('class','다섯개씩번갈아색칠');}
      번호45.setAttribute('class', '다섯개씩번갈아색칠');

      for (var i = 1; i < 46; i++) {
        var div요소 = document.createElement('button'); // div 요소 변수에 담는다. 다섯개씩번갈아색칠
        번호45.appendChild(div요소);
      }
      가로한줄.appendChild(번호선택_추출_c);
      가로한줄.appendChild(번호45);
      if (외부 < 11) {
        가로한줄.setAttribute('class', 'js클릭번호 분석자료_표_상_지울곳')
      } else {
        가로한줄.setAttribute('class', 'js클릭번호')
      }
      document.querySelector('#분석자료_표_상_js').appendChild(가로한줄);
    } //20회반복 끝

    for (var i = 0; i < 45; i++) { document.querySelectorAll('#분석자료_표_상_js > div')[0].children[1].children[i].innerHTML = i + 1 }
    //다 만들고 난 후에 숨김할것 처리
    var 요소 = document.querySelectorAll('#분석자료숨김버튼 button');
    for (var i = 0; i < 요소.length; i++) {
      if (요소[i].classList.contains('분석버튼숨김')) {
        document.querySelector('#분석자료_표_상_js').children[요소[i].innerHTML].classList.add('d-none');
      }
    }
  }
  //id="분석자료_표_하_js"
  if ('분석자료_표_하_js' == '분석자료_표_하_js') {
    //왼쪽과 오른쪽 구분하여 작성
    if ('오른쪽' == '오른쪽') {
      var 오른쪽45 = document.createElement('div');
      오른쪽45.setAttribute('class', 'd-inline-block');
      for (var 외부 = 0; 외부 < 39; 외부++) {
        var 가로한줄 = document.createElement('div');
        var 번호선택_추출_c = document.createElement('span');
        var 번호45 = document.createElement('div');
        if (외부 != 1) { 번호45.setAttribute('class', '다섯개씩번갈아색칠') }
        if (외부 == 1) { 번호45.setAttribute('id', '삼십회횟수기록') }
        for (var i = 1; i < 46; i++) {
          var div요소 = document.createElement('button'); // div 요소 변수에 담는다. 다섯개씩번갈아색칠
          if (외부 == 0 || 외부 == 8) { div요소.innerText = i }
          번호45.appendChild(div요소);
        }
        오른쪽45.appendChild(번호45);
      }
    }

    if ('왼쪽' == '왼쪽') {
      var 왼쪽몇칸 = document.createElement('div');
      왼쪽몇칸.setAttribute('class', 'd-inline-block');
      왼쪽몇칸.setAttribute('style', 'margin-right:-1px;');
      var 번호45 = document.createElement('div');
      번호45.innerText = 'keep셑팅↔초기화'
      번호45.setAttribute('style', 'border:none;border-top:1px solid black;background-color:white; text-align:left;width:162px;height:24px;')
      왼쪽몇칸.appendChild(번호45);
      var 번호45 = document.createElement('div');
      번호45.setAttribute('style', 'border:none;background-color:white; text-align:right;width:150px;padding-right:5px;')
      번호45.innerText = '30주 출현 빈도';
      왼쪽몇칸.appendChild(번호45);
    }
    document.querySelector('#분석자료_표_하_js').appendChild(왼쪽몇칸) //빈 div 한개 넣어둠, 왼쪽 만들기 건너뜀, css 가져오기위함
    document.querySelector('#분석자료_표_하_js').appendChild(오른쪽45)
  }
  //색칠하기의 45칸 div 6번넣기
  var 색칠관련 = document.querySelectorAll('.설명_가로한줄'); //두번째자식
  var div45개 = ''; for (var i = 0; i < 45; i++) { div45개 += '<button></button>' }
  for (var i = 0; i < 색칠관련.length; i++) { 색칠관련[i].children[1].innerHTML = div45개 }
  for (var i = 1; i < 46; i++) { 색칠관련[5].children[1].children[i - 1].innerHTML = i }
}
function 이동하기() {
  const $from = $('#이동할div리스트 .active'), $to = $('#이동할위치div리스트 .active');
  if (!$from.length || !$to.length) return alert('둘다선택되어야함');
  if ($from.text() === $to.text()) return alert('둘은달라야함');
  const f = $from.text(), t = $to.text(), dir = $('#앞에').prop('checked') ? 'Before' : 'After';
  console.log(`이동하기 : ${f} => ${t}, ${dir === 'Before' ? '앞에' : '뒤에'}`);
  $('#' + f)[`insert${dir}`]('#' + t);
}
function 이동클릭관련(e) {
  e.classList.contains('active') ? e.classList.remove('active') :
    (e.parentElement.querySelector('.active')?.classList.remove('active'), e.classList.add('active'));
}
function 코드셑팅(e) {
  const $e = $(e);
  if ($e.toggleClass('active').hasClass('active'))
    $('#코드_클릭한정보call').html($($e.attr('title')).html());
  else $('#코드_클릭한정보call').html('');
}
function 체크this활용(e) {
  const $i = $(e).children('input'), id = '#' + $i.attr('id').slice(6);
  $(id).toggleClass('d-none', !$i.prop('checked'));
  if (id == '#버튼45오른쪽단독') {
    if (document.querySelector('#버튼45오른쪽단독').classList.contains('d-none')) {
      document.querySelector('#따라가기').classList.add('d-none');
    } else {
      document.querySelector('#따라가기').classList.remove('d-none');
    }
  }
}
function 따라가기위치설정() {
  var 버튼45오른쪽단독top숫자 = parseInt(document.querySelector('#버튼45오른쪽단독').style.top.replace(/px/g, '')) || 0;
  var 버튼45오른쪽높이추출위한정보가져오기 = window.getComputedStyle(document.querySelector('#버튼45오른쪽단독'));
  버튼45오른쪽높이추출위한정보가져오기 = 버튼45오른쪽높이추출위한정보가져오기.height.replace(/px/g, '') || 0;
  var 버튼45오른쪽단독left숫자 = parseInt(document.querySelector('#버튼45오른쪽단독').style.left.replace(/px/g, '')) || 0;
  document.querySelector('#따라가기').style.left = Number(버튼45오른쪽단독left숫자) - 5 + 'px';
  document.querySelector('#따라가기').style.top = Number(버튼45오른쪽단독top숫자) + Number(버튼45오른쪽높이추출위한정보가져오기) - 5 + 'px';
  if (document.querySelector('#버튼45오른쪽단독').classList.contains('d-none')) {
    document.querySelector('#따라가기').classList.add('d-none');
  } else {
    document.querySelector('#따라가기').classList.remove('d-none');
  }
}
function 리스너_바디_click(e) {
  console.log('리스너_바디_click(e)')
  if (e.target.parentElement.classList.contains('삼십회횟수기록2nddiv')) {
    //1. #분석자료_삼십회표_js에서의 동작을 구분
    //   a)분석, 분석덧칠, 클래스 지운다. b)(기존)선택클래스 지운다. c)선택클래스 넣는다. d)색칠물자열 정의한다.(이 경우 id와 클래스)
    //2. 색칠하기(전달문자)
    if (!isNaN(e.target.innerHTML)) {
      var 개수 = document.querySelectorAll('#분석자료_삼십회표_js .분석').length;
      for (var i = 0; i < 개수; i++) {
        document.querySelectorAll('#분석자료_삼십회표_js .분석')[0].classList.remove('분석');
      }
      document.querySelector('#분석자료_삼십회표_js .선택')?.classList.remove('선택');
      e.target.classList.add('선택');
      색칠id = '#분석자료변수'; 색칠class = ' .공통변수_30주' + e.target.innerHTML + '출';
      색칠문자열 = 색칠id + 색칠class;
      색칠셑팅(색칠문자열);
    }
  }
  if (e.target.parentElement.id == '삼십회횟수기록') {
    if (e.target.classList.contains('삼십회횟수같은거')) {
      Array.from($('#삼십회횟수기록').children()).forEach(요소 => { 요소.classList.remove('삼십회횟수같은거') });
      return;
    }
    Array.from($('#삼십회횟수기록').children()).forEach(요소 => { 요소.classList.remove('삼십회횟수같은거') });
    Array.from($('#삼십회횟수기록').children()).forEach(요소 => { if (요소.innerHTML == e.target.innerHTML) { 요소.classList.add('삼십회횟수같은거') } })
  }
  if (e.target.parentElement.id == '분석자료숨김버튼' || e.target.parentElement.id == '분석자료_다음회차') {
    숨김버튼값 = e.target.innerText; 분석자료_버튼클릭시_상하_숨김동작();
  }
  if (e.target.classList.contains('카운팅')) {
    console.log('리스너_바디_click(e) : 카운팅 클래스 있을때')
    var 현재 = Number(e.target.innerHTML);
    if (isNaN(현재)) { alert('현재 숫자 아님(공백은 0)'); return; }
    if (현재 == 6) { e.target.innerHTML = '' } else { e.target.innerHTML = 현재 + 1; }
  }
  if (e.target.classList.contains('앞요소값clear')) {
    console.log('리스너_바디_click(e) : 앞요소값clear 클래스 있을때')
    e.target.previousElementSibling.innerHTML = '';
    if (!e.target.parentElement.parentElement.classList.contains('분석자료_표_상_지울곳')) {
      e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = '';
    }
  }
  if (['이동할div리스트', '이동할위치div리스트'].includes(e.target.parentElement.id)) { //이동 클릭 관련
    console.log('이동할 항목 클릭')
    e.target.classList.contains('active') ?
      e.target.classList.remove('active') :
      (e.target.parentElement.querySelector('.active')?.classList.remove('active'), e.target.classList.add('active'));
  }
}
function mousedownOrTouchstart(e) {
  // 터치 이벤트인지 마우스 이벤트인지 확인
  var isTouchEvent = e.type === 'touchstart'; //pc일때 e.type는 mousedown이고, e.type === 'touchstart'는 false가 된다
  console.log('e.type : ' + e.type)
  var target = 드래그이동_버튼45오른쪽단독;//#버튼45오른쪽단독
  var isDragging = true; //드래그(move) 할 수 있으니 true로 설정해야함 아니면 move가 안됨
  // isDragging 은 자동으로 감지된다. down시 true로 설정하지 않으면 움직이기 시작할때 false로 인식되어 move가 작동안함

  var 처음타겟TOP숫자 = parseInt(target.style.top.replace(/px/g, '')) || 0; //top은 12px 처럼 나타나는데 px를 뺀 숫자만 추출함
  var 처음타겟LEFT숫자 = parseInt(target.style.left.replace(/px/g, '')) || 0; // || 0 은 추출실패하여 에러나 undefined인 경우 0을 추출함
  //처음타겟TOP숫자, 처음타겟LEFT숫자 : 소수점자리가 큰 숫자로 바뀌는 것
  //var 처음타겟TOP숫자 = parseInt(target.style.top.replace(/[^0-9]/g, '')) || 0;
  //var 처음타겟LEFT숫자 = parseInt(target.style.left.replace(/[^0-9]/g, '')) || 0;
  var 첫마우스y = isTouchEvent ? e.touches[0].clientY : e.clientY; //e.touches[0].clientY는 모바일에서 pc의 e.clientY의 값이다.
  var 첫마우스x = isTouchEvent ? e.touches[0].clientX : e.clientX; //물음표는 isTouchEvent가 true일때 : 앞쪽꺼, false일때 : 뒤쪽꺼로 설정
  // 부모 요소의 경계를 확인 (마우스이벤트예제div), 이거 안씀, 드래그 한계범위 설정시 사용
  var 부모_경계 = target.getBoundingClientRect();
  var 상자_너비 = target.offsetWidth;
  var 상자_높이 = target.offsetHeight;
  function 마우스moveOrTouchmove(e) {
    if (!isDragging) return;
    // 화면 스크롤 방지 (모바일)
    if (isTouchEvent) { //모바일에서 작동하는것
      e.preventDefault();//이거 에러나는듯, 검색 : preventDefault
      //window.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', 마우스moveOrTouchmove, {passive: false});
    }
    // 터치 이벤트인지 마우스 이벤트인지 확인
    var move_y = isTouchEvent ? e.touches[0].clientY : e.clientY;
    var move_x = isTouchEvent ? e.touches[0].clientX : e.clientX;
    var 첫마우스에서y이동거리 = move_y - 첫마우스y;
    var 첫마우스에서x이동거리 = move_x - 첫마우스x;
    // 새로운 위치 계산
    var 새로운_상자_위치_y = 처음타겟TOP숫자 + 첫마우스에서y이동거리;
    var 새로운_상자_위치_x = 처음타겟LEFT숫자 + 첫마우스에서x이동거리;
    // 경계 조건 설정 (상자 위치가 부모 요소를 벗어나지 않도록)
    // 부모_경계, 상자-너비, 상자_높이 적용하지 않았으니 경계조건은 제한이 없는 상태이다.
    if (새로운_상자_위치_y < 0) {
      새로운_상자_위치_y = 0;
    }
    if (새로운_상자_위치_x < 0) {
      새로운_상자_위치_x = 0;
    }
    // 상자 위치 적용
    target.style.top = 새로운_상자_위치_y + 'px';
    target.style.left = 새로운_상자_위치_x + 'px';
  }

  function 마우스upOrTouchend() {
    따라가기위치설정();
    //if (!isDragging) return;
    isDragging = false;
    // 이벤트 제거
    window.removeEventListener(isTouchEvent ? 'touchmove' : 'mousemove', 마우스moveOrTouchmove);
    window.removeEventListener(isTouchEvent ? 'touchend' : 'mouseup', 마우스upOrTouchend);
  }

  // 이벤트 추가
  window.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', 마우스moveOrTouchmove, { passive: false });
  window.addEventListener(isTouchEvent ? 'touchend' : 'mouseup', 마우스upOrTouchend);
}
function mousedownOrTouchstart2(e) {
  // 터치 이벤트인지 마우스 이벤트인지 확인
  var isTouchEvent = e.type === 'touchstart'; //pc일때 e.type는 mousedown이고, e.type === 'touchstart'는 false가 된다
  console.log('e.type : ' + e.type)
  var target = 드래그이동_버튼45감싸기;//#버튼45오른쪽단독
  var isDragging = true; //드래그(move) 할 수 있으니 true로 설정해야함 아니면 move가 안됨
  // isDragging 은 자동으로 감지된다. down시 true로 설정하지 않으면 움직이기 시작할때 false로 인식되어 move가 작동안함

  var 처음타겟TOP숫자 = parseInt(target.style.top.replace(/px/g, '')) || 0; //top은 12px 처럼 나타나는데 px를 뺀 숫자만 추출함
  var 처음타겟LEFT숫자 = parseInt(target.style.left.replace(/px/g, '')) || 0; // || 0 은 추출실패하여 에러나 undefined인 경우 0을 추출함
  //처음타겟TOP숫자, 처음타겟LEFT숫자 : 소수점자리가 큰 숫자로 바뀌는 것
  //var 처음타겟TOP숫자 = parseInt(target.style.top.replace(/[^0-9]/g, '')) || 0;
  //var 처음타겟LEFT숫자 = parseInt(target.style.left.replace(/[^0-9]/g, '')) || 0;
  var 첫마우스y = isTouchEvent ? e.touches[0].clientY : e.clientY; //e.touches[0].clientY는 모바일에서 pc의 e.clientY의 값이다.
  var 첫마우스x = isTouchEvent ? e.touches[0].clientX : e.clientX; //물음표는 isTouchEvent가 true일때 : 앞쪽꺼, false일때 : 뒤쪽꺼로 설정
  // 부모 요소의 경계를 확인 (마우스이벤트예제div), 이거 안씀, 드래그 한계범위 설정시 사용
  var 부모_경계 = target.getBoundingClientRect();
  var 상자_너비 = target.offsetWidth;
  var 상자_높이 = target.offsetHeight;
  function 마우스moveOrTouchmove(e) {
    if (!isDragging) return;
    // 화면 스크롤 방지 (모바일)
    if (isTouchEvent) { //모바일에서 작동하는것
      e.preventDefault();//이거 에러나는듯, 검색 : preventDefault
      //window.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', 마우스moveOrTouchmove, {passive: false});
    }
    // 터치 이벤트인지 마우스 이벤트인지 확인
    var move_y = isTouchEvent ? e.touches[0].clientY : e.clientY;
    var move_x = isTouchEvent ? e.touches[0].clientX : e.clientX;
    var 첫마우스에서y이동거리 = move_y - 첫마우스y;
    var 첫마우스에서x이동거리 = move_x - 첫마우스x;
    // 새로운 위치 계산
    var 새로운_상자_위치_y = 처음타겟TOP숫자 + 첫마우스에서y이동거리;
    var 새로운_상자_위치_x = 처음타겟LEFT숫자 + 첫마우스에서x이동거리;
    // 경계 조건 설정 (상자 위치가 부모 요소를 벗어나지 않도록)
    // 부모_경계, 상자-너비, 상자_높이 적용하지 않았으니 경계조건은 제한이 없는 상태이다.
    if (새로운_상자_위치_y < 0) {
      새로운_상자_위치_y = 0;
    }
    if (새로운_상자_위치_x < 0) {
      새로운_상자_위치_x = 0;
    }
    // 상자 위치 적용
    target.style.top = 새로운_상자_위치_y + 'px';
    target.style.left = 새로운_상자_위치_x + 'px';
  }

  function 마우스upOrTouchend() {
    //if (!isDragging) return;
    isDragging = false;
    // 이벤트 제거
    window.removeEventListener(isTouchEvent ? 'touchmove' : 'mousemove', 마우스moveOrTouchmove);
    window.removeEventListener(isTouchEvent ? 'touchend' : 'mouseup', 마우스upOrTouchend);
  }

  // 이벤트 추가
  window.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', 마우스moveOrTouchmove, { passive: false });
  window.addEventListener(isTouchEvent ? 'touchend' : 'mouseup', 마우스upOrTouchend);
}
리스너_바디.addEventListener('mousedown', 리스너_바디_click);
드래그이동_버튼45오른쪽단독.addEventListener('mousedown', mousedownOrTouchstart);
드래그이동_버튼45오른쪽단독.addEventListener('touchstart', mousedownOrTouchstart);
드래그이동_버튼45감싸기.addEventListener('mousedown', mousedownOrTouchstart2);
드래그이동_버튼45감싸기.addEventListener('touchstart', mousedownOrTouchstart2);