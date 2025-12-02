if ('초기설정' == '초기설정') {
  //양이 많아서 숨길것을 위로 두고 기록중인것을 아래로 두는데 합쳐야되기 때문에..... 합친후 '회차별배열'에 모든배열을 담는다.
  $('#숨김정보_당번전체').append($('#숨김정보_당번전체기록중').html());
  document.querySelector('#숨김정보_당번전체').innerHTML =
    document.querySelector('#숨김정보_당번전체').innerHTML.replace(/\n|\s/g, '') //→ 줄바꿈(\n)과 모든 띄워쓰기(공백 및 탭 등)(\s)을 한 번에 제거
  var 회차별배열 = [];
  for (let i=0; i<$('#숨김정보_당번전체').html().split('_').length/9; i++) {
    회차별배열.push($('#숨김정보_당번전체').html().split('_').slice(i*9,(i+1)*9))
  }
  
  //변수명순서대로 : 5주출관련, 30주출관련 정보가 여러번 쓰이기때문에 순서를 사용하기위함. forEach에서 체이닝이 안되어서 
  var 변수명순서대로 = []; document.querySelectorAll('#당번변수 > div').forEach(요소 => { 변수명순서대로.push(요소.classList[0]); })

  //회차select옵션생성, check_초기설정, 당번 다음회차, 당번 30회정보, 분석자료45칸, ★30회빈도는 변동값이어서 제외됨
  고정html_구조생성및_초기설정();
  //회차는 1198회차인경우 1197이다. 
  var 최근회차 = document.querySelectorAll('#당번_회차select option').length-1;
  var 회차 = 최근회차;
  var 전체변수색칠문자열 = '';
  var 셑팅된곳변수포함id='#keep번호들_변수포함'
  var 셑팅된곳숫자만id='#keep번호들'
  var 색칠id='';

  당번_회차change설정();
  분석자료_회차change설정();
  따라가기위치설정();
  var 숨김버튼값 = '';
}
var 리스너_바디 = document.querySelector('body');
var 드래그이동_버튼45오른쪽단독 = document.querySelector('#버튼45오른쪽단독');
var 드래그이동_버튼45감싸기 = document.querySelector('#버튼45감싸기');

function 연습() {
  let 배열=[1,1,2,2,3,4];
  let 중복제거배열 = (배열) => Array.from(new Set(배열));
  let 곱하기2 = Array.from(중복제거배열(배열),(e) => e*2);
  console.log(곱하기2); // [2,4,6,8]


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
function 분석자료_삼십회표_js작성() {
  if ('출수최대값' == '출수최대값') {
    var 출수최대값 = 0;
    for (var i = 1; i < 21; i++) { //i가 1부터임
      var 삼십주당번모음 = [];
      for (var 삼십주 = 0; 삼십주 < 30; 삼십주++) { 회차별배열[회차 - 삼십주 - i + 1].slice(2, 8).forEach(번호 => { 삼십주당번모음.push(번호) }) }
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
  for (var i = 0; i < 30; i++) { 회차별배열[회차 - i].slice(2, 8).forEach(번호 => { 삼십주당번모음.push(번호) }) }

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
  var 버튼들=document.querySelectorAll('#분석자료_삼십회표_js > div:nth-of-type(2) > button');
  for (var i=1; i<버튼들.length; i++) {
    버튼들[i].setAttribute('class','클릭번호로보냄');
    버튼들[i].setAttribute('title','#분석자료변수 .공통변수_30주' + 버튼들[i].innerHTML + '출');
  }
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
    if (i == 머리글.children.length - 1) { 머리글.children[i].innerHTML = '합'; 머리글.children[i].setAttribute('title','2~6의 합계') }
  }
  var 출횟수 = document.querySelectorAll('#분석자료_삼십회23456개수_js > div');
  var 당첨개수 = document.querySelectorAll('#분석자료_삼십회당첨개수_js > div');
  for (var i = 1; i < 21; i++) { //i가 1부터임
    출횟수[i].children[0].innerHTML = 회차별배열[회차 - i + 1][0];
    var 삼십주당번모음 = [];
    for (var 삼십주 = 0; 삼십주 < 30; 삼십주++) { 회차별배열[회차 - 삼십주 - i + 1].slice(2, 8).forEach(번호 => { 삼십주당번모음.push(번호) }) }
    if (최근회차 < (회차 - i + 2)) { var 다음회차당번 = [] } else { var 다음회차당번 = 회차별배열[회차 - i + 2].slice(2, 8); }
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
      if (합계>0 && 합계<6) {
        당첨개수[i].children[당첨개수[i].children.length - 1].innerHTML = Number(당첨개수[i].children[당첨개수[i].children.length - 1].innerHTML) + Number(당첨개수[i].children[합계 + 1].innerHTML);
      }
    }
  }
}
function 분석자료_회차change설정() {
  console.log('분석자료_회차change설정()')
  document.querySelector('#분석자료_회차select').value = Number(회차+1);
  if (회차 > 최근회차) { 
    console.log('회차가 최근회차보다 크면 종료'); 
    회차 = 회차 - 1; 
    document.querySelector('#분석자료_회차select').value = Number(회차+1); return; 
  } //회차=회차-1 ==> 원래대로 돌림
  if (1 == 1) { //1. 당번8칸채우기(30회분), 다음회차 채우기(둘다), 설정유형별로 회차 적용하기
    if (회차별배열[Number(회차) + 1]) {
      for (var i = 0; i < 9; i++) {
        document.querySelectorAll('#분석자료_다음회차 > button')[i].innerHTML = 회차별배열[Number(회차) + 1][i];
      }
    } else {    //다음회차가 없을때 다음회차 _로 채우기
      for (var i = 0; i < 9; i++) {//회차부터 9종
        document.querySelectorAll('#분석자료_다음회차 > button')[i].innerHTML = '_';
      }
    }
    //당번8칸 채우기
    for (var i = 1; i < 9; i++) {//날짜부터 번호 8종
      document.querySelectorAll('#분석자료_선택회차 > button')[i - 1].innerHTML = 회차별배열[Number(회차)][i];
    }
  }
  if (1 == 1) { //#당번_오주삼십주개수 작성 및 변수에 값 넣기, //#당번변수 : 안에 class가 #분석자료변수 안에도 동일하므로... 부모id
    var 부모id = '#분석자료변수';
    변수명순서대로.forEach(변수명 => {
      document.querySelector(`${부모id} .${변수명}`).innerHTML = '';
    })
    if (i == 0 && 회차 == 최근회차) { document.querySelector(`${부모id} .${변수명순서대로[0]}`).innerHTML = '_,_,_,_,_,_' }//0 공통변수_다음당번
    if (i == 0 && 회차 != 최근회차) { document.querySelector(`${부모id} .${변수명순서대로[0]}`).innerHTML = 회차별배열[회차 + 1].slice(2, 8).join(',') } //0 공통변수_다음당번
    var 좌우수 = [], 이웃수 = [];
    당번 = 회차별배열[회차].slice(2, 8);
    document.querySelector(`${부모id} .공통변수_당번`).innerHTML = 회차별배열[회차].slice(2, 8).join(',');
    document.querySelector(`${부모id} .공통변수_당번이웃`).innerHTML = 회차별배열[회차].slice(2, 8).join(',') + ',';

    회차별배열[회차].slice(2, 8).forEach(숫자 => {
      if (숫자 == 1) { 좌우수.push(45); 좌우수.push(2); }
      if (숫자 == 45) { 좌우수.push(44); 좌우수.push(1); }
      if (숫자 > 1 && 숫자 < 45) { 좌우수.push(Number(숫자) - 1); 좌우수.push(Number(숫자) + 1); }
    })
    좌우수 = new Set(좌우수); 좌우수 = [...좌우수]
    좌우수.forEach(숫자 => {
      if (!회차별배열[회차].slice(2, 8).includes(숫자)) {
        document.querySelector(`${부모id} .공통변수_이웃`).innerHTML += 숫자 + ',';
        document.querySelector(`${부모id} .공통변수_당번이웃`).innerHTML += 숫자 + ',';
      };
    })

    var 오주당번모음 = [], 십주당번모음 = [], 십오주당번모음 = [], 삼십주당번모음 = [];
    for (var i = 0; i < 30; i++) {
      if (i < 5) { 회차별배열[회차 - i].slice(2, 8).forEach(번호 => { 오주당번모음.push(번호) }) }
      if (i < 10) { 회차별배열[회차 - i].slice(2, 8).forEach(번호 => { 십주당번모음.push(번호) }) }
      if (i < 15) { 회차별배열[회차 - i].slice(2, 8).forEach(번호 => { 십오주당번모음.push(번호) }) }
      if (i < 30) { 회차별배열[회차 - i].slice(2, 8).forEach(번호 => { 삼십주당번모음.push(번호) }) }
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
  var 클래스열개 = ['.공통변수_당번', '.공통변수_이웃', '.공통변수_당번이웃', '.공통변수_15주0출', '.공통변수_10주0출',
    '.공통변수_5주0출', '.공통변수_5주출', '.공통변수_5주1출', '.공통변수_5주2출', '.공통변수_5주3출']
  for (var i = 0; i < 10; i++) {
    var 현재배열 = document.querySelector(`#분석자료변수 ${클래스열개[i]}`).innerHTML.split(',');
    document.querySelector(`#분석자료변수 ${클래스열개[i]}`).innerHTML.split(',').forEach((element, index, array) => {
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
  //다음회차 있을때 30주간 색칠 번호부분에 당번색칠 (지우고 시작)
  if ('다음당번이 있을때' == '다음당번이 있을때') {
    var 색칠할요소 = document.querySelectorAll('#분석자료_표_하_js .다섯개씩번갈아색칠')[7]; // 8번째꺼
    //분석클래스는 지워지게 된다. 분석클래스였던게 숫자가 지워지네?
    for (var m = 0; m < 색칠할요소.children.length; m++) {

      색칠할요소.children[m].classList.remove('다음당번표시');
    }
    if (회차<최근회차) {
      for (var i=0; i<6; i++) {
        색칠할요소.children[Number(회차별배열[Number(회차) + 1][i+2])-1].classList.add('다음당번표시');
      }
    }
  }
  분석자료_삼십회표_js작성();
  분석자료_삼십회빈도와개수_js작성();
  셑팅2_번호45오른쪽_변경();
  색칠하기();
}
// ES6+ 리팩토링 완성본
function 당번_회차change설정() {
  console.log('당번_회차change설정()');

  // ===== 상수 =====
  const MAX_NUMBER = 45;
  const DRAW_NUM_COUNT = 6; // 한 회차 당번 개수
  const LAST_INDEX = 7; // split된 배열에서 마지막 당번 인덱스(2~7이 당번 6개)
  const THIRTY_WEEKS = 30;
  const TWENTY_WEEKS = 20;

  // ===== 헬퍼 함수 =====
  console.log(회차별배열[회차])
  const getNumbersRow = (idx) => 회차별배열[idx]; // 문자열 배열
  const getDrawNumbers = (idx) => getNumbersRow(idx).slice(2, 8).map(Number); // 6개 숫자
  const safeQueryAll = (sel) => document.querySelectorAll(sel);
  const clearElements = (selector, value = '') => safeQueryAll(selector).forEach(el => el.innerHTML = value);
  const setValues = (elements, values) => elements.forEach((el, i) => el.innerHTML = values[i] ?? '');
  const countIn = (arr, n) => arr.filter(v => v === n).length;
  const uniq = (arr) => Array.from(new Set(arr));

  // ===== 회차 셋팅 =====
  document.querySelector('#당번_회차select').value = Number(회차+1);
  if (회차 > 최근회차) {
    console.log('회차가 최근회차보다 크면 종료');
    회차 -= 1; // 원래대로 복귀
    document.querySelector('#당번_회차select').value = Number(회차+1);
    return;
  }

  // 현재 회차 당번
  const 당번 = getDrawNumbers(회차);

  // ===== 여러흐름 영역 초기화 =====
  clearElements('#칸_간격과삼이일_위 > div:not(:first-child):not(:nth-of-type(2)):not(:last-child) > span');
  clearElements('#칸_삼십회_위 > div:not(:first-child):not(:nth-of-type(2)):not(:last-child) > span');
  setValues(safeQueryAll('#칸_간격과삼이일_위 > div:last-child > span'), [0, 0, 0, 0]); // 마지막 4칸 0
  setValues(safeQueryAll('#칸_삼십회_위 > div:last-child > span'), Array(6).fill(0)); // 마지막 6칸 0

  // ===== 간격 계산(현재 회차 기준) =====
  const curRow = getNumbersRow(Number(회차)).map(Number);
  for (let i = 2; i < 8; i++) {
    const firstSpans = safeQueryAll('#칸_간격과삼이일_위 > div > span:nth-of-type(1)');
    firstSpans[i].innerHTML = curRow[i];

    const secondSpans = safeQueryAll('#칸_간격과삼이일_위 > div > span:nth-of-type(2)');
    let 간격;
    if (i === LAST_INDEX) {
      간격 = curRow[2] - curRow[LAST_INDEX] + MAX_NUMBER - 1;
    } else {
      간격 = curRow[i + 1] - curRow[i] - 1;
    }
    secondSpans[i].innerHTML = 간격;
  }

  // ===== 여러흐름용 과거 데이터(5주/30주) 모음 =====
  const 여러흐름용_이전오주당번모음 = [];
  const 여러흐름용_이전삼십주당번모음 = [];
  for (let i = 1; i <= THIRTY_WEEKS; i++) {
    const prev = getDrawNumbers(회차 - i);
    if (i < 6) 여러흐름용_이전오주당번모음.push(...prev);
    여러흐름용_이전삼십주당번모음.push(...prev);
  }

  // ===== 5주 출수 기록 =====
  for (let i = 0; i < DRAW_NUM_COUNT; i++) {
    let 오주출수 = countIn(여러흐름용_이전오주당번모음, 당번[i]);
    if (오주출수 > 3) 오주출수 = 3;

    safeQueryAll(`#칸_간격과삼이일_위 > div:nth-of-type(${3 + i}) > span`)[2 + 오주출수].innerHTML = 당번[i];
    const totalEls = safeQueryAll('#칸_간격과삼이일_위 > div:last-child > span');
    totalEls[1 + 오주출수].innerHTML = Number(totalEls[1 + 오주출수].innerHTML) + 1;
  }

  // ===== 30주 출수 기록 =====
  for (let i = 0; i < DRAW_NUM_COUNT; i++) {
    let 삼십주출수 = countIn(여러흐름용_이전삼십주당번모음, 당번[i]);
    if (삼십주출수 < 2 || 삼십주출수 > 6) 삼십주출수 = 7; // 기타

    safeQueryAll(`#칸_삼십회_위 > div:nth-of-type(${3 + i}) > span`)[삼십주출수 - 2].innerHTML = 당번[i];
    const totalEls = safeQueryAll('#칸_삼십회_위 > div:last-child > span');
    totalEls[삼십주출수 - 2].innerHTML = Number(totalEls[삼십주출수 - 2].innerHTML) + 1;
  }

  // ===== 번호대/삼이일20주/2345620주/당번이월20주 =====
  for (let 이십주 = 0; 이십주 < TWENTY_WEEKS; 이십주++) {
    const 기준회차 = 회차 - 이십주;
    const 당번20 = getDrawNumbers(기준회차);

    const 오주당번모음 = [];
    const 십주당번모음 = [];
    const 십오주당번모음 = [];
    const 삼십주당번모음 = [];

    for (let i = 0; i < THIRTY_WEEKS; i++) {
      const rowNums = getDrawNumbers(기준회차 - i - 1);
      if (i < 5) 오주당번모음.push(...rowNums);
      if (i < 10) 십주당번모음.push(...rowNums);
      if (i < 15) 십오주당번모음.push(...rowNums);
      if (i < 30) 삼십주당번모음.push(...rowNums);
    }

    // 간격/삼이일 아래(행 초기화 후 채우기)
    const 장미321 = safeQueryAll(`#칸_간격과삼이일_아래 > div:nth-of-type(${이십주 + 2}) > span`);
    장미321.forEach((el, idx) => { if (idx > 0) el.innerHTML = 0; });
    당번20.forEach((번호) => {
      const 오주Cnt = countIn(오주당번모음, 번호);
      const 십주Cnt = countIn(십주당번모음, 번호);
      if (십주Cnt === 0) 장미321[1].innerHTML = Number(장미321[1].innerHTML) + 1; // 10주 0출
      if (오주Cnt === 0) 장미321[2].innerHTML = Number(장미321[2].innerHTML) + 1; // 5주 0출
      if (오주Cnt === 1) 장미321[3].innerHTML = Number(장미321[3].innerHTML) + 1; // 5주 1출
      if (오주Cnt === 2) 장미321[4].innerHTML = Number(장미321[4].innerHTML) + 1; // 5주 2출
      if (오주Cnt > 2)  장미321[5].innerHTML = Number(장미321[5].innerHTML) + 1; // 5주 3출 이상
    });

    // 30회 아래(행 초기화 후 채우기)
    const 삼십회 = safeQueryAll(`#칸_삼십회_아래 > div:nth-of-type(${이십주 + 2}) > span`);
    삼십회.forEach((el) => el.innerHTML = 0);
    당번20.forEach((번호) => {
      const 개수 = countIn(삼십주당번모음, 번호);
      if (개수 > 1 && 개수 < 7) {
        삼십회[개수 - 2].innerHTML = Number(삼십회[개수 - 2].innerHTML) + 1;
        삼십회[5].innerHTML = Number(삼십회[5].innerHTML) + 1; // 총합
      }
    });

    // 이월 이웃 계산
    const 이월이웃 = safeQueryAll(`#칸_이웃수_아래 > div:nth-of-type(${이십주 + 2}) > span`);
    const 이전당번 = getDrawNumbers(기준회차 - 1);
    const 이전이웃 = [];

    이전당번.forEach((번호) => {
      let 왼쪽, 오른쪽;
      if (번호 === 1) { 왼쪽 = MAX_NUMBER; 오른쪽 = 2; }
      else if (번호 === MAX_NUMBER) { 왼쪽 = MAX_NUMBER - 1; 오른쪽 = 1; }
      else { 왼쪽 = 번호 - 1; 오른쪽 = 번호 + 1; }

      if (!이전당번.includes(왼쪽) && !이전이웃.includes(왼쪽)) 이전이웃.push(왼쪽);
      if (!이전당번.includes(오른쪽) && !이전이웃.includes(오른쪽)) 이전이웃.push(오른쪽);
    });

    //----20회 반복중 한번이다.
    // 1. 일단 당번 기록(원 코드 동일 동작 유지),
    이월이웃.forEach((el, idx) => {
      el.classList.remove('이월색칠');
      el.classList.remove('이웃색칠');
    });
    이월이웃[6].innerHTML=0; 이월이웃[7].innerHTML=0; 이월이웃[8].innerHTML=0;
    이월이웃.forEach((el, idx) => {
      if (idx < DRAW_NUM_COUNT) {
        el.innerHTML = 당번20[idx];//당번기록
        if (이전당번.includes(당번20[idx])) {
          el.classList.add('이월색칠');
          이월이웃[6].innerHTML=Number(이월이웃[6].innerHTML)+1;
        };
        if (이전이웃.includes(당번20[idx])) {
          el.classList.add('이웃색칠');
          이월이웃[7].innerHTML=Number(이월이웃[7].innerHTML)+1;
        };
      };
      이월이웃[8].innerHTML=Number(이월이웃[6].innerHTML)+Number(이월이웃[7].innerHTML)

    });



    // 2. 9개중 6개(당번)돌면서 이월색칠, 이웃색칠 클래스 부여, 클래스부여시 카운트





    //const prev = getDrawNumbers(회차 - i);
  }

  // ===== 다음회차 버튼 영역 =====
  if (회차별배열[Number(회차) + 1]) {
    const nextRow = getNumbersRow(Number(회차) + 1);
    for (let i = 0; i < 8; i++) {
      if (i === 0) safeQueryAll('#당번_다음회차 > div > span > button')[i].innerHTML = nextRow[i];
      else        safeQueryAll('#당번_다음회차 > div > span > button')[i].innerHTML = nextRow[i + 1];
    }
  } else {
    for (let i = 0; i < 8; i++) safeQueryAll('#당번_다음회차 > div > span > button')[i].innerHTML = '_';
  }

  // ===== 30회분 번호 표시 =====
  for (let 삼십번 = 0; 삼십번 < THIRTY_WEEKS; 삼십번++) {
    const row = getNumbersRow(Number(회차) - 삼십번);
    for (let i = 0; i < 8; i++) {
      const btn = safeQueryAll(`#당번_불러온당첨정보 > div:nth-of-type(${삼십번 + 1}) > span > button`)[i];
      if (i === 0) btn.innerHTML = row[i];
      else         btn.innerHTML = row[i + 1];
    }
  }

  // ===== 변수 채우기(#당번변수 / #당번_오주삼십주개수) =====
  const 부모id = '#당번변수';
  const 개수id = '#당번_오주삼십주개수';

  // 변수 초기화
  변수명순서대로.forEach((변수명) => {
    document.querySelector(`${부모id} .${변수명}`).innerHTML = '';
    document.querySelector(`${개수id} .${변수명}`).innerHTML = 0;
  });

  // 0 공통변수_다음당번
  if (회차 === 최근회차) {
    document.querySelector(`${부모id} .${변수명순서대로[0]}`).innerHTML = '_,_,_,_,_,_';
  } else {
    document.querySelector(`${부모id} .${변수명순서대로[0]}`).innerHTML = getDrawNumbers(회차 + 1).join(',');
  }

  // 공통변수_당번 / 당번이웃 기본값
  document.querySelector(`${부모id} .공통변수_당번`).innerHTML = 당번.join(',');
  document.querySelector(`${개수id} .공통변수_당번`).innerHTML = DRAW_NUM_COUNT;
  document.querySelector(`${부모id} .공통변수_당번이웃`).innerHTML = 당번.join(',') + ',';
  document.querySelector(`${개수id} .공통변수_당번이웃`).innerHTML = DRAW_NUM_COUNT;

  // 좌우 이웃(현재 회차 기준)
  let 좌우수 = [];
  당번.forEach((숫자) => {
    if (숫자 === 1) { 좌우수.push(MAX_NUMBER, 2); }
    else if (숫자 === MAX_NUMBER) { 좌우수.push(MAX_NUMBER - 1, 1); }
    else { 좌우수.push(숫자 - 1, 숫자 + 1); }
  });
  좌우수 = uniq(좌우수);
  좌우수.forEach((숫자) => {
    if (!당번.includes(숫자)) {
      document.querySelector(`${부모id} .공통변수_이웃`).innerHTML += `${숫자},`;
      document.querySelector(`${개수id} .공통변수_이웃`).innerHTML = Number(document.querySelector(`${개수id} .공통변수_이웃`).innerHTML) + 1;
      document.querySelector(`${부모id} .공통변수_당번이웃`).innerHTML += `${숫자},`;
      document.querySelector(`${개수id} .공통변수_당번이웃`).innerHTML = Number(document.querySelector(`${개수id} .공통변수_당번이웃`).innerHTML) + 1;
    }
  });

  // 과거 5/10/15/30주 모음(현재 회차 포함 방식은 원 코드 유지)
  const 오주당번모음 = [];
  const 십주당번모음 = [];
  const 십오주당번모음 = [];
  const 삼십주당번모음 = [];
  for (let i = 0; i < THIRTY_WEEKS; i++) {
    const nums = getDrawNumbers(회차 - i);
    if (i < 5)  오주당번모음.push(...nums);
    if (i < 10) 십주당번모음.push(...nums);
    if (i < 15) 십오주당번모음.push(...nums);
    if (i < 30) 삼십주당번모음.push(...nums);
  }

  /*
    변수명순서대로 인덱스 대응 (원 주석 유지)
    0 공통변수_다음당번  1 공통변수_당번  2 공통변수_이웃  3 공통변수_당번이웃  4 공통변수_5주출  5 공통변수_5주0출  6 공통변수_5주1출
    7 공통변수_5주2출   8 공통변수_5주3출  9 공통변수_10주0출  10 공통변수_15주0출  11 공통변수_30주0출  12 공통변수_30주1출
    13 공통변수_30주2출  14 공통변수_30주3출  15 공통변수_30주4출  16 공통변수_30주5출  17 공통변수_30주6출  18 공통변수_30주7출
    19 공통변수_30주8출  20 공통변수_30주9출  21 공통변수_30주10출  22 공통변수_30주11출  23 공통변수_30주12출
  */
  for (let i = 0; i < MAX_NUMBER; i++) {
    const 숫자 = i + 1;

    // 5주 구간
    const 오주출개수 = countIn(오주당번모음, 숫자);
    if (오주출개수 > 0) {
      document.querySelector(`${부모id} .${변수명순서대로[4]}`).innerHTML += `${숫자},`;
      document.querySelector(`${개수id} .${변수명순서대로[4]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[4]}`).innerHTML) + 1;
    }
    if (오주출개수 === 0) {
      document.querySelector(`${부모id} .${변수명순서대로[5]}`).innerHTML += `${숫자},`;
      document.querySelector(`${개수id} .${변수명순서대로[5]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[5]}`).innerHTML) + 1;
    }
    if (오주출개수 === 1) {
      document.querySelector(`${부모id} .${변수명순서대로[6]}`).innerHTML += `${숫자},`;
      document.querySelector(`${개수id} .${변수명순서대로[6]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[6]}`).innerHTML) + 1;
    }
    if (오주출개수 === 2) {
      document.querySelector(`${부모id} .${변수명순서대로[7]}`).innerHTML += `${숫자},`;
      document.querySelector(`${개수id} .${변수명순서대로[7]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[7]}`).innerHTML) + 1;
    }
    if (오주출개수 > 2) {
      document.querySelector(`${부모id} .${변수명순서대로[8]}`).innerHTML += `${숫자},`;
      document.querySelector(`${개수id} .${변수명순서대로[8]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[8]}`).innerHTML) + 1;
    }

    // 10/15주 0출
    const 십주출개수 = countIn(십주당번모음, 숫자);
    const 십오주출개수 = countIn(십오주당번모음, 숫자);
    if (십주출개수 === 0) {
      document.querySelector(`${부모id} .${변수명순서대로[9]}`).innerHTML += `${숫자},`;
      document.querySelector(`${개수id} .${변수명순서대로[9]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[9]}`).innerHTML) + 1;
    }
    if (십오주출개수 === 0) {
      document.querySelector(`${부모id} .${변수명순서대로[10]}`).innerHTML += `${숫자},`;
      document.querySelector(`${개수id} .${변수명순서대로[10]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[10]}`).innerHTML) + 1;
    }

    // 30주 세부 출수
    const 삼십주출개수 = countIn(삼십주당번모음, 숫자);
    if (삼십주출개수 === 0) { document.querySelector(`${부모id} .${변수명순서대로[11]}`).innerHTML += `${숫자},`; document.querySelector(`${개수id} .${변수명순서대로[11]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[11]}`).innerHTML) + 1; }
    if (삼십주출개수 === 1) { document.querySelector(`${부모id} .${변수명순서대로[12]}`).innerHTML += `${숫자},`; document.querySelector(`${개수id} .${변수명순서대로[12]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[12]}`).innerHTML) + 1; }
    if (삼십주출개수 === 2) { document.querySelector(`${부모id} .${변수명순서대로[13]}`).innerHTML += `${숫자},`; document.querySelector(`${개수id} .${변수명순서대로[13]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[13]}`).innerHTML) + 1; }
    if (삼십주출개수 === 3) { document.querySelector(`${부모id} .${변수명순서대로[14]}`).innerHTML += `${숫자},`; document.querySelector(`${개수id} .${변수명순서대로[14]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[14]}`).innerHTML) + 1; }
    if (삼십주출개수 === 4) { document.querySelector(`${부모id} .${변수명순서대로[15]}`).innerHTML += `${숫자},`; document.querySelector(`${개수id} .${변수명순서대로[15]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[15]}`).innerHTML) + 1; }
    if (삼십주출개수 === 5) { document.querySelector(`${부모id} .${변수명순서대로[16]}`).innerHTML += `${숫자},`; document.querySelector(`${개수id} .${변수명순서대로[16]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[16]}`).innerHTML) + 1; }
    if (삼십주출개수 === 6) { document.querySelector(`${부모id} .${변수명순서대로[17]}`).innerHTML += `${숫자},`; document.querySelector(`${개수id} .${변수명순서대로[17]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[17]}`).innerHTML) + 1; }
    if (삼십주출개수 === 7) { document.querySelector(`${부모id} .${변수명순서대로[18]}`).innerHTML += `${숫자},`; document.querySelector(`${개수id} .${변수명순서대로[18]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[18]}`).innerHTML) + 1; }
    if (삼십주출개수 === 8) { document.querySelector(`${부모id} .${변수명순서대로[19]}`).innerHTML = `${숫자},`;  document.querySelector(`${개수id} .${변수명순서대로[19]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[19]}`).innerHTML) + 1; }
    if (삼십주출개수 === 9) { document.querySelector(`${부모id} .${변수명순서대로[20]}`).innerHTML += `${숫자},`; document.querySelector(`${개수id} .${변수명순서대로[20]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[20]}`).innerHTML) + 1; }
    if (삼십주출개수 === 10){ document.querySelector(`${부모id} .${변수명순서대로[21]}`).innerHTML += `${숫자},`; document.querySelector(`${개수id} .${변수명순서대로[21]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[21]}`).innerHTML) + 1; }
    if (삼십주출개수 === 11){ document.querySelector(`${부모id} .${변수명순서대로[22]}`).innerHTML += `${숫자},`; document.querySelector(`${개수id} .${변수명순서대로[22]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[22]}`).innerHTML) + 1; }
    if (삼십주출개수 === 12){ document.querySelector(`${부모id} .${변수명순서대로[23]}`).innerHTML += `${숫자},`; document.querySelector(`${개수id} .${변수명순서대로[23]}`).innerHTML = Number(document.querySelector(`${개수id} .${변수명순서대로[23]}`).innerHTML) + 1; }
  }

  // 끝에 붙은 쉼표 제거
  변수명순서대로.forEach((변수명) => {
    const target = document.querySelector(`${부모id} .${변수명}`);
    if (target && target.innerHTML.slice(-1) === ',') {
      target.innerHTML = target.innerHTML.slice(0, -1);
    }
  });

  // .당번만 > button : title 속성 넣기
  safeQueryAll('.당번만 > button').forEach((btn) => btn.setAttribute('title', btn.innerHTML));

  // 마지막 후처리
  셑팅2_번호45오른쪽_변경();
  색칠하기();
  //당번_흐름만들기();
}
function 당번_흐름만들기() {
  console.log('당번_흐름만들기()');
  //'내림차순간격'은 이전회차의 간격
  //'내림간격당당첨'은 '내림차순간격'의 번호에 현재 당번의 포함개수


}

function 당번_회차change설____정() {
  console.log('당번_회차change설정()')
  document.querySelector('#당번_회차select').value = Number(회차+1);
  var 당번 = 회차별배열[회차].slice(2, 8);
  if (회차 > 최근회차) { console.log('회차가 최근회차보다 크면 종료'); 회차 = 회차 - 1; document.querySelector('#당번_회차select').value = Number(회차+1); return; } //회차=회차-1 ==> 원래대로 돌림
  if (1 == 1) { //여러흐름
    //여러흐름중 당번 : 값 초기화, 마지막 개수는 나중에
    var 요소=document.querySelectorAll('#칸_간격과삼이일_위 > div:not(:first-child):not(:nth-of-type(2)):not(:last-child) > span')
    Array.from(요소).forEach ( 요소 => 요소.innerHTML='');
    var 요소=document.querySelectorAll('#칸_삼십회_위 > div:not(:first-child):not(:nth-of-type(2)):not(:last-child) > span')
    Array.from(요소).forEach ( 요소 => 요소.innerHTML='');
    var 요소=document.querySelectorAll('#칸_간격과삼이일_위 > div:last-child > span');
    for (var i = 2; i < 6; i++) {
      //마지막 4개 : 일단 0 기록
      요소[i-1].innerHTML=0;
    }
    var 요소=document.querySelectorAll('#칸_삼십회_위 > div:last-child > span');
    for (var i = 1; i < 7; i++) {
      //마지막 6개 : 일단 0 기록, 30회
      요소[i-1].innerHTML=0;
    }
    for (var i = 2; i < 8; i++) {
        var 요소=document.querySelectorAll('#칸_간격과삼이일_위 > div > span:nth-of-type(1)');
        요소[i].innerHTML=회차별배열[Number(회차)].split('_')[i];

        var 간격;
        var 요소=document.querySelectorAll('#칸_간격과삼이일_위 > div > span:nth-of-type(2)');            
        if (i==7) {간격=Number(회차별배열[Number(회차)].split('_')[2])-
                        Number(회차별배열[Number(회차)].split('_')[7])+45-1} 
                        else {
                    간격=Number(회차별배열[Number(회차)].split('_')[i+1])- 
                        Number(회차별배열[Number(회차)].split('_')[i])-1
                  }
        요소[i].innerHTML=간격;
    }
    //여러흐름중 당번 : 당번에 대해서 미출, 1,2,3출 위치에 각각 다시 기록 및 숫자개수 카운팅...여러흐름용_이전오주당번모음
    //          var 요소=document.querySelectorAll('#칸_간격과삼이일_위 > div:last-child > span');
    var 여러흐름용_이전오주당번모음=[], 여러흐름용_이전삼십주당번모음=[];
    for (var i = 0; i < 31; i++) {
      if (i>0 && i < 6) { 회차별배열[회차 - i].slice(2, 8).forEach(번호 => { 여러흐름용_이전오주당번모음.push(번호) }) }
      if (i>0 && i < 31) { 회차별배열[회차 - i].slice(2, 8).forEach(번호 => { 여러흐름용_이전삼십주당번모음.push(번호) }) }
    }    
    var 오주출수;
    for (var i=0; i<6; i++) {
      오주출수=여러흐름용_이전오주당번모음.filter( 번호 => 번호==당번[i]).length;
      //console.log('당번[i] : ' + 당번[i] + ',' + 오주출수)
      if (오주출수>3) {오주출수=3}
      document.querySelectorAll('#칸_간격과삼이일_위 > div:nth-of-type(' + (3+i) + ') > span')[2+오주출수].innerHTML=당번[i];
      document.querySelectorAll('#칸_간격과삼이일_위 > div:last-child > span')[1+오주출수].innerHTML=
      Number(document.querySelectorAll('#칸_간격과삼이일_위 > div:last-child > span')[1+오주출수].innerHTML) + 1;
    }
    var 삼십주출수;
    for (var i=0; i<6; i++) {
      삼십주출수=여러흐름용_이전삼십주당번모음.filter( 번호 => 번호==당번[i]).length;
      if (삼십주출수<2 || 삼십주출수>6) {삼십주출수=7} //7==기타의 위치
      document.querySelectorAll('#칸_삼십회_위 > div:nth-of-type(' + (3+i) + ') > span')[삼십주출수-2].innerHTML=당번[i];
      document.querySelectorAll('#칸_삼십회_위 > div:last-child > span')[삼십주출수-2].innerHTML=
      Number(document.querySelectorAll('#칸_삼십회_위 > div:last-child > span')[삼십주출수-2].innerHTML) + 1;
    }
    //번호대, 삼이일20주간, 2345620주간, 당번이월20주간
    for (var 이십주=0; 이십주<20; 이십주++) {
      var 당번=회차별배열[회차 - 이십주].slice(2, 8); //당 회차
      var 오주당번모음 = [], 십주당번모음 = [], 십오주당번모음 = [], 삼십주당번모음 = []; //이전부터 
      for (var i = 0; i < 30; i++) {
        if (i < 5) { 회차별배열[회차 - i - 이십주 -1].slice(2, 8).forEach(번호 => { 오주당번모음.push(번호) }) }
        if (i < 10) { 회차별배열[회차 - i - 이십주 -1].slice(2, 8).forEach(번호 => { 십주당번모음.push(번호) }) }
        if (i < 15) { 회차별배열[회차 - i - 이십주 -1].slice(2, 8).forEach(번호 => { 십오주당번모음.push(번호) }) }
        if (i < 30) { 회차별배열[회차 - i - 이십주 -1].slice(2, 8).forEach(번호 => { 삼십주당번모음.push(번호) }) }
      }
      var 장미321=document.querySelectorAll('#칸_간격과삼이일_아래 > div:nth-of-type(' + (이십주+2) + ') > span'); //첫span 비어있음
      Array.from(장미321).forEach ( (요소,인덱스) => {if (인덱스>0) {요소.innerHTML=0}});//일단 0 기록
      당번.forEach ( (번호,인덱스) => { 
        if (십주당번모음.filter (일치 => 일치==번호).length==0) {장미321[1].innerHTML=Number(장미321[1].innerHTML)+1}
        if (오주당번모음.filter (일치 => 일치==번호).length==0) {장미321[2].innerHTML=Number(장미321[2].innerHTML)+1}
        if (오주당번모음.filter (일치 => 일치==번호).length==1) {장미321[3].innerHTML=Number(장미321[3].innerHTML)+1}
        if (오주당번모음.filter (일치 => 일치==번호).length==2) {장미321[4].innerHTML=Number(장미321[4].innerHTML)+1}
        if (오주당번모음.filter (일치 => 일치==번호).length>2) {장미321[5].innerHTML=Number(장미321[5].innerHTML)+1}
      });
      var 삼십회=document.querySelectorAll('#칸_삼십회_아래 > div:nth-of-type(' + (이십주+2) + ') > span');
      Array.from(삼십회).forEach ( (요소,인덱스) => 요소.innerHTML=0);//일단 0 기록
      var 개수;
      당번.forEach ( (번호,인덱스) => { 
        개수=삼십주당번모음.filter ( m => m==번호 ).length;
        if (개수>1 && 개수<7) {삼십회[개수-2].innerHTML=Number(삼십회[개수-2].innerHTML)+1}
        if (개수>1 && 개수<7) {삼십회[5].innerHTML=Number(삼십회[5].innerHTML)+1}
      });
      var 이월이웃=document.querySelectorAll('#칸_이웃수_아래 > div:nth-of-type(' + (이십주+2) + ') > span'); //첫span 비어있음
      var 이전당번=회차별배열[회차 - 이십주-1].slice(2, 8);
      var 이전이웃=[];
      var 왼쪽, 오른쪽;
      이전당번.forEach (번호 => {
        if (번호==1) {왼쪽=45; 오른쪽=2;};if (번호==45) {왼쪽=44; 오른쪽=1;};if (번호!=45 && 번호!=1) {왼쪽=Number(번호)-1; 오른쪽=Number(번호)+1;};
        //왼쪽, 오른쪽 : 이전당번에 포함되지않는다, 이전이웃에 포함되지 않는다. => push
        if (이전당번.includes(왼쪽) || 이전이웃.includes(왼쪽)) {} else {이전이웃.push(왼쪽)};
        if (이전당번.includes(오른쪽) || 이전이웃.includes(오른쪽)) {} else {이전이웃.push(오른쪽)};
      });
      Array.from(이월이웃).forEach ( (요소,인덱스) => {if (인덱스<6) {요소.innerHTML=당번[인덱스]}}); //일단 당번 기록
      Array.from(이월이웃).forEach ( (요소,인덱스) => {

      });






    } //for 닫음
  }//if 닫음
  if (1 == 1) { //#당번_오주삼십주개수 작성 및 변수에 값 넣기, //#당번변수 : 안에 class가 #분석자료변수 안에도 동일하므로... 부모id
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
      for (var i = 0; i < 8; i++) { // 기존꺼다 건드리지 말것
        if (i == 0) { document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십번 + 1) + ') > span > button')[i].innerHTML = 회차별배열[Number(회차) - 삼십번].split('_')[i] }
        if (i > 0) { document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십번 + 1) + ') > span > button')[i].innerHTML = 회차별배열[Number(회차) - 삼십번].split('_')[i + 1] }
      }
    }    
    var 부모id = '#당번변수', 개수id = '#당번_오주삼십주개수';
    변수명순서대로.forEach(변수명 => {
      document.querySelector(`${부모id} .${변수명}`).innerHTML = '';
      document.querySelector(`${개수id} .${변수명}`).innerHTML = 0; //?넣어도 안넘어가네 forEach, d-none으로 넣어줬다.
      //forEach안에서는 삼항연산은 쓸수있다. 체이닝은 쓸수없다.
    })
    if (i == 0 && 회차 == 최근회차) { document.querySelector(`${부모id} .${변수명순서대로[0]}`).innerHTML = '_,_,_,_,_,_' }//0 공통변수_다음당번
    if (i == 0 && 회차 != 최근회차) { document.querySelector(`${부모id} .${변수명순서대로[0]}`).innerHTML = 회차별배열[회차 + 1].slice(2, 8).join(',') } //0 공통변수_다음당번
    var 좌우수 = [], 이웃수 = [];
    document.querySelector(`${부모id} .공통변수_당번`).innerHTML = 회차별배열[회차].slice(2, 8).join(',');
    document.querySelector(`${개수id} .공통변수_당번`).innerHTML = 6;
    document.querySelector(`${부모id} .공통변수_당번이웃`).innerHTML = 회차별배열[회차].slice(2, 8).join(',') + ',';
    document.querySelector(`${개수id} .공통변수_당번이웃`).innerHTML = 6;

    회차별배열[회차].slice(2, 8).forEach(숫자 => {
      if (숫자 == 1) { 좌우수.push(45); 좌우수.push(2); }
      if (숫자 == 45) { 좌우수.push(44); 좌우수.push(1); }
      if (숫자 > 1 && 숫자 < 45) { 좌우수.push(Number(숫자) - 1); 좌우수.push(Number(숫자) + 1); }
    })
    좌우수 = new Set(좌우수); 좌우수 = [...좌우수]
    좌우수.forEach(숫자 => {
      if (!회차별배열[회차].slice(2, 8).includes(숫자)) {
        document.querySelector(`${부모id} .공통변수_이웃`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .공통변수_이웃`).innerHTML = Number(document.querySelector(`${개수id} .공통변수_이웃`).innerHTML) + 1;
        document.querySelector(`${부모id} .공통변수_당번이웃`).innerHTML += 숫자 + ',';
        document.querySelector(`${개수id} .공통변수_당번이웃`).innerHTML = Number(document.querySelector(`${개수id} .공통변수_당번이웃`).innerHTML) + 1;
      };
    })

    var 오주당번모음 = [], 십주당번모음 = [], 십오주당번모음 = [], 삼십주당번모음 = [];
    for (var i = 0; i < 30; i++) {
      if (i < 5) { 회차별배열[회차 - i].slice(2, 8).forEach(번호 => { 오주당번모음.push(번호) }) }
      if (i < 10) { 회차별배열[회차 - i].slice(2, 8).forEach(번호 => { 십주당번모음.push(번호) }) }
      if (i < 15) { 회차별배열[회차 - i].slice(2, 8).forEach(번호 => { 십오주당번모음.push(번호) }) }
      if (i < 30) { 회차별배열[회차 - i].slice(2, 8).forEach(번호 => { 삼십주당번모음.push(번호) }) }
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


  셑팅2_번호45오른쪽_변경();
  색칠하기();
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
  따라가기위치설정()
}
function 토글11에서20_셑팅과초기화(e) {
  console.log('토글11에서20_셑팅과초기화(e)')
  var 체크확인배열=['#keep_input','#셑팅1_input','#셑팅2_input','#셑팅3_input']
  var 색칠할번호배열=['#keep번호들','#셑팅1번호들','#셑팅2번호들','#셑팅3번호들','#클릭번호들']
  var 인덱스=-1;
  if (색칠할번호배열.includes(색칠id)) {인덱스=색칠할번호배열.indexOf(색칠id)} else {
      체크확인배열.forEach ( (아이디,y) => {
        if (document.querySelector(아이디).checked) {인덱스=y}
      });
  }
  var 번호들=document.querySelector(색칠할번호배열[인덱스]).innerHTML.split(',');
  console.log(번호들)
  var 사오칸=e.parentElement.nextElementSibling.children;
  var 색칠있나=false;
  for (var i=0; i<45; i++) {
    if (사오칸[i].classList.contains('분석')) {색칠있나=true;}
    if (색칠있나) {break;}
  }
  for (var i=0; i<45; i++) {
    사오칸[i].classList.remove('분석');사오칸[i].innerHTML='';
    if (!색칠있나) {
        if (번호들.filter( 번호 => 번호==(i+1)).length) {사오칸[i].classList.add('분석');사오칸[i].innerHTML=i+1; }
    }
  }
  if (!색칠있나) {
    if(번호들[0].length>0) {e.innerHTML=번호들.length;}
    e.previousElementSibling.title=document.querySelector(셑팅된곳변수포함id).innerHTML;  
  }
  if (색칠있나) {e.previousElementSibling.title='';e.previousElementSibling.innerHTML='';e.nextElementSibling.innerHTML='';e.innerHTML=''}
}
function 셑팅2_번호45오른쪽_변경() {
  //색칠하기 : 변경cheched확인, 색칠할번호변수포함, 색칠할번호값, 색칠할곳
  var 체크확인배열=['#keep변경','#셑팅1변경','#셑팅2변경','#셑팅3변경','#클릭번호들변경'];
  var 변경할배열=['#keep번호들_변수포함','#셑팅1번호들_변수포함','#셑팅2번호들_변수포함','#셑팅3번호들_변수포함','#클릭번호들_변수포함']
  var 색칠할번호배열=['#keep번호들','#셑팅1번호들','#셑팅2번호들','#셑팅3번호들','#클릭번호들']
  var 색칠할곳배열=['#버튼45오른쪽단독_안에_keep번호들','#버튼45오른쪽단독_안에_셑팅1번호들','#버튼45오른쪽단독_안에_셑팅2번호들',
                   '#버튼45오른쪽단독_안에_셑팅3번호들','#버튼45오른쪽단독_안에_클릭번호들']
  //keep, 셑팅1, 셑팅2, 셑팅3, 클릭번호들 : 각각 돌면서 변경체크인 경우, 기존숫자 지우고 #keep번호들  
  //#keep번호들_변수포함 안의 문자열을 돌면서 숫자가 아니면 해당아이디의 innerHTML을 넣고 숫자면 숫자를  #keep번호들 내부에 넣는다
  //변경체크가 아니면 : #keep번호들 의 번호를 사용한다.

  var 색칠할번호요소,색칠할번호,색칠할곳;
  체크확인배열.forEach ( (아이디,인덱스) => {
    색칠할곳=document.querySelector(색칠할곳배열[인덱스])
    색칠할번호요소=document.querySelector(색칠할번호배열[인덱스]);
    if (document.querySelector(아이디).checked && 색칠할번호요소.innerHTML!='') {
      색칠할번호요소.innerHTML='';//초기화
      //색칠할번호 바꾸기
      document.querySelector(변경할배열[인덱스]).innerHTML.split(',').forEach ( (문자열,인덱스2,) => {
        //두번반복하는 이유
        if (문자열.substring(0,1)=='#') {
          if (색칠할번호요소.innerHTML=='') {색칠할번호요소.innerHTML=document.querySelector(문자열).innerHTML;}
          if (색칠할번호요소.innerHTML!='') {색칠할번호요소.innerHTML+=',' + document.querySelector(문자열).innerHTML;}
        }
        if (문자열.substring(0,1)!='#') {
          if (색칠할번호요소.innerHTML=='') {색칠할번호요소.innerHTML=문자열;}
          if (색칠할번호요소.innerHTML!='') {색칠할번호요소.innerHTML+=',' + 문자열;}
        }
      });
    }
    //번호가 두번씩 기록되는 이유?
    var 값=색칠할번호요소.innerHTML.split(',');값=new Set(값);값=[...값];색칠할번호요소.innerHTML=값.join(',');



    색칠할번호=document.querySelector(색칠할번호배열[인덱스]).innerHTML.split(',');
    for (var i=0; i<45; i++) {
      색칠할곳.children[i].classList.remove('분석');
      색칠할곳.children[i].innerHTML='';
      if (색칠할번호.filter( 번호 => 번호==(i+1)).length>0) {
        색칠할곳.children[i].classList.add('분석');
        색칠할곳.children[i].innerHTML=i+1;
      }
    }
  });
}
function 색칠하기() {
  var 체크확인배열=['#keep_input','#셑팅1_input','#셑팅2_input','#셑팅3_input']
  var 색칠할번호배열=['#keep번호들','#셑팅1번호들','#셑팅2번호들','#셑팅3번호들','#클릭번호들']
  var 인덱스=-1;
  if (색칠할번호배열.includes(색칠id)) {인덱스=색칠할번호배열.indexOf(색칠id)} else {
      체크확인배열.forEach ( (아이디,y) => {
        if (document.querySelector(아이디).checked) {인덱스=y}
      });
  }
  //색칠해제
  색칠해제();
  if (인덱스==-1) {return;}
  var 색칠할번호=document.querySelector(색칠할번호배열[인덱스]).innerHTML.split(',');
  var 색칠할곳체크배열=['#삼십회빈도','#당번표','#사오1ST','#사오2ST','#사오3ST'];
  var 색칠할곳id배열=['#분석자료_삼십회표_js > div:not(:first-child):not(:nth-of-type(2)) > button',
                     '.당번만 > button','#버튼45의1st button','#버튼45의2st button','#버튼45의3st button'];
  var 버튼들;
  색칠할곳id배열.forEach ( (아이디,인덱스) => {
    if (document.querySelector(색칠할곳체크배열[인덱스]).checked) {
        버튼들=document.querySelectorAll(아이디);
        for (var i=0; i<버튼들.length; i++) {
          if (버튼들[i].innerHTML!='' && 색칠할번호.includes(버튼들[i].innerHTML)) {
            버튼들[i].classList.add('색칠');
          }
        }
    }
  });
}
function 색칠해제() {
  var 개수=document.querySelectorAll('.색칠');
  for (var i=0; i<개수.length; i++) {
    if (!['버튼45의1st','버튼45의2st','버튼45의3st'].includes(개수[i].parentElement.parentElement.id)) {
       개수[i].classList.remove('색칠')
    }
  }
}
function 색칠할번호들_clear() {
  var 변수 = ['#keep번호들_변수포함/#keep번호들', '#셑팅1번호들_변수포함/#셑팅1번호들', 
              '#셑팅2번호들_변수포함/#셑팅2번호들', '#셑팅3번호들_변수포함/#셑팅3번호들',
              '#클릭번호들_변수포함/#클릭번호들'];
  var 색칠할곳배열=['#버튼45오른쪽단독_안에_keep번호들','#버튼45오른쪽단독_안에_셑팅1번호들','#버튼45오른쪽단독_안에_셑팅2번호들',
                   '#버튼45오른쪽단독_안에_셑팅3번호들','#버튼45오른쪽단독_안에_클릭번호들']
  변수.forEach((문자열, 인덱스) => {
    document.querySelector(문자열.split('/')[0]).innerHTML='';
    document.querySelector(문자열.split('/')[1]).innerHTML='';
    var 개수=document.querySelector(색칠할곳배열[인덱스]).children;
    for (var i=0; i<개수.length; i++) {개수[i].innerHTML='';개수[i].classList.remove('분석')}
  });
  색칠해제();
  색칠id='';
}
function 셑팅토글(인덱스) {
  console.log('셑팅토글(e)');
  const 체크확인 = ['#keep_input', '#셑팅1_input', '#셑팅2_input', '#셑팅3_input'];
  체크확인.forEach ( (아이디) => {document.querySelector(아이디).checked=false;});
  document.querySelector(체크확인[인덱스]).checked=true;

  const 셑팅 = ['#keep번호들_변수포함/#keep번호들', '#셑팅1번호들_변수포함/#셑팅1번호들',
               '#셑팅2번호들_변수포함/#셑팅2번호들', '#셑팅3번호들_변수포함/#셑팅3번호들'];
  셑팅된곳변수포함id=셑팅[인덱스].split('/')[0];셑팅된곳숫자만id=셑팅[인덱스].split('/')[1];
  console.log(셑팅된곳변수포함id)
  console.log(셑팅된곳숫자만id)
}
function 고정html_구조생성및_초기설정() {
  //#칸_간격과삼이일_위,#칸_간격과삼이일_아래,#칸_삼십회_위,#칸_삼십회_아래
  var 칸_html=`<div><span></span><span></span><span></span><span></span><span></span><span></span></div>`
  var 칸_별도html=`<div><span style="width:53px;">숫자개수</span><span></span><span></span><span></span><span></span></div>`
  var 칸_이월이웃수html=`<div><span></span><span></span><span></span></div>`
  var 칸_번호대html='<div><span></span><span></span><span></span><span></span><span></span></div>'
  var 칸_아이디=['#칸_간격과삼이일_위','#칸_삼십회_위','#칸_이월이웃수_위','#칸_이월이웃수_위_번호대'];
  for (var i=0; i<7; i++) {
    칸_아이디.forEach ( (칸_id,칸_index) => {
      if (칸_id=='#칸_이월이웃수_위') {document.querySelector(칸_id).innerHTML+=칸_이월이웃수html;}
      else if (칸_id=='#칸_이월이웃수_위_번호대') {document.querySelector(칸_id).innerHTML+=칸_번호대html;}
      else {
        if (칸_id=='#칸_간격과삼이일_위' && i==6) {document.querySelector(칸_id).innerHTML+=칸_별도html;} 
        else {
          document.querySelector(칸_id).innerHTML+=칸_html;
       }
      }
    });
  }
  var 칸_이웃수_아래html=`<div><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`
  var 칸_아이디=['#칸_간격과삼이일_아래','#칸_삼십회_아래','#칸_이웃수_아래'];
  for (var i=0; i<20; i++) {
    칸_아이디.forEach ( (칸_id,칸_index) => {
      if (칸_id=='#칸_이웃수_아래') {document.querySelector(칸_id).innerHTML+=칸_이웃수_아래html;}
      else {
        if (칸_id=='#칸_간격과삼이일_위' && i==6) {document.querySelector(칸_id).innerHTML+=칸_별도html;} 
        else {document.querySelector(칸_id).innerHTML+=칸_html;}
      }
    });
  }
  var 칸_세로27_html=`<div><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`
  var 칸_가로10_html=`<div><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`
  for (var i=0; i<17; i++) {
    document.querySelector('#칸_가로세로_세로').innerHTML+=칸_세로27_html;
  }
  for (var i=0; i<7; i++) {
    document.querySelector('#칸_가로세로_가로').innerHTML+=칸_가로10_html;
  }
  var 빈도정보=[{아이디:'#칸_빈도45_빈도',추가요소:'span',추가개수:5},
               {아이디:'#칸_빈도45_당번',추가요소:'span',추가개수:30}];

  for ( {아이디,추가요소,추가개수} of 빈도정보 ) {
    for (var 내부반복=0; 내부반복<46; 내부반복++) {
      var div=document.createElement('div');
      for (var i=0; i<추가개수; i++) {
        var span=document.createElement(추가요소);
        div.appendChild(span);
        document.querySelector(아이디).appendChild(div);        
      }
    }
  }





  //타이틀넣기
  var 요소=document.querySelectorAll('.버튼45css button');
  for (var i=0; i<요소.length; i++) {요소[i].setAttribute('title',요소[i].innerHTML)}

  //회차select옵션생성
  let 옵션 = 회차별배열.map(v => `<option>${v[0]}</option>`).reverse().join('');
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
      var 번호선택배열 = ['번호선택', '당번', '이웃', '당번이웃', '15주미출', '10주미출', '5주0출', '5주출', '5주1출', '5주2출', '5주3출']
      var 타이틀배열 = ['없음', '당번', '이웃', '당번이웃', '15주0출', '10주0출', '5주0출', '5주출', '5주1출', '5주2출', '5주3출']
      for (var i = 0; i < 4; i++) {
        var div요소 = document.createElement('span'); // div 요소 변수에 담는다.
        if (i == 0) { div요소.textContent = 번호선택배열[외부]; div요소.setAttribute('style', 'width:75px;height:24px; border:1px solid black;display:inline-block;margin-right:-1px;') }
        if (i == 1 && 외부 == 0) { div요소.textContent = '수' }
        if (i == 1) { div요소.setAttribute('style', 'width:30px; border:1px solid black;display:inline-block;margin-right:-1px;text-align:center;height:24px;') }
        if (i==0 && 외부>0 && 외부<11) {
          div요소.setAttribute('class','클릭번호로보냄');
          div요소.setAttribute('title','#분석자료변수 .공통변수_'+타이틀배열[외부]);
        }
        if (i == 2) { div요소 = document.createElement('button'); }
        if (i == 2 && 외부 == 0) { div요소.textContent = '출' }
        if (i == 2 && 외부 != 0) { div요소.setAttribute('class', '카운팅') }      //녹색부분에 카운팅 클래스 넣기

        if (i == 3 && 외부 == 0) { div요소 = document.createElement('button'); div요소.textContent = 'C' }
        if (i == 3 && 외부 != 0) { div요소 = document.createElement('button'); div요소.setAttribute('class', '앞요소값clear') }

        if (i == 3 && 외부 != 0) { div요소.textContent = 외부 }
        //11부터 추가 : 번호선택 위치에 onclick="분석자료_11에서20_keep번호셑팅(this)", 수 위치에 onclick="keep셑팅초기화()"
        if (외부 > 10) {
          if (i == 0) { div요소.setAttribute('contenteditable', 'true') }
          if (i == 1) { div요소.setAttribute('onclick', '토글11에서20_셑팅과초기화(this)') }
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
      번호45.innerText = 'keep셑팅↔초기화(수)'
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
  if (['버튼45의1st','버튼45의2st','버튼45의3st'].includes(e.target.parentElement.parentElement.id) && e.target.innerHTML=='콜') {
    console.log('콜')
    var 인덱스;
    var 배열=['#keep_input/#keep번호들','#셑팅2_input/#셑팅1번호들','#셑팅2_input/#셑팅2번호들','#셑팅2_input/#셑팅3번호들']
    배열.forEach ( (문자열,y) => {
      if (document.querySelector(문자열.split('/')[0]).checked) {인덱스=y}
    });
    var 선택번호들=document.querySelector(배열[인덱스].split('/')[1]).innerHTML.split(',');
    var 기록할요소=document.querySelectorAll('#' + e.target.parentElement.parentElement.id + ' button');
    console.log(기록할요소.length)
    for (var i=0; i<기록할요소.length; i++) {
      기록할요소[i].classList.remove('색칠');
      if (선택번호들.includes(기록할요소[i].innerHTML)) {기록할요소[i].classList.add('색칠');}
    }
    document.querySelector('#' + e.target.parentElement.parentElement.id + '_클릭번호들변수포함').innerHTML=선택번호들;
    document.querySelector('#' + e.target.parentElement.parentElement.id + '_클릭번호들숫자만').innerHTML=선택번호들;
    return;
  }
  if (['버튼45의1st','버튼45의2st','버튼45의3st'].includes(e.target.parentElement.parentElement.id) && e.target.tagName=='BUTTON') {
    e.target.classList.toggle('색칠')
  }
  if (['버튼45의1st','버튼45의2st','버튼45의3st'].includes(e.target.parentElement.parentElement.id) && e.target.innerHTML=='Clear') {
    var 요소들=document.querySelectorAll('#' + e.target.parentElement.parentElement.id + ' button');
    for (var i=0; i<요소들.length; i++) {요소들[i].classList.remove('색칠');}
    document.querySelector('#' + e.target.parentElement.parentElement.id + '_클릭번호들변수포함').innerHTML='';
    document.querySelector('#' + e.target.parentElement.parentElement.id + '_클릭번호들숫자만').innerHTML='';
  }
  if (e.target.classList.contains('클릭번호로보냄')) {
    //e.target.title 생성해야하는 경우
    console.log('클릭번호로보내기 class 있을때')
    if (e.target.innerHTML=='클릭번호로보내기') {//버튼45의1st','버튼45의2st','버튼45의3st
      var 선택번호들=[];
      Array.from(document.querySelectorAll('#' + e.target.parentElement.parentElement.id + ' button')).forEach ( 요소 => {
        if (요소.classList.contains('색칠')) {선택번호들.push(요소.innerHTML)}
      });
      document.querySelector('#' + e.target.parentElement.parentElement.id + '_클릭번호들변수포함').innerHTML=선택번호들.join(',');
      document.querySelector('#' + e.target.parentElement.parentElement.id + '_클릭번호들숫자만').innerHTML=선택번호들.join(',');
      e.target.title='#' + e.target.parentElement.parentElement.id + '_클릭번호들숫자만';
    }
    //공통
    console.log(e.target.title)
    const 변수Selector = e.target.title; //숫자가 들어있는 id
    const 클릭번호들El = document.querySelector('#클릭번호들');
    const 클릭번호들_변수포함El = document.querySelector('#클릭번호들_변수포함');
    const 셑팅된곳El = document.querySelector(셑팅된곳변수포함id); //정해져있음 keep번호들, 셑팅1번호들, 셑팅2번호들, 셑팅3번호들 중에 하나
    const 셑팅된숫자El = document.querySelector(셑팅된곳숫자만id);
    const 숫자들 = document.querySelector(변수Selector).innerHTML.split(',');

    클릭번호들_변수포함El.innerHTML = 변수Selector;
    클릭번호들El.innerHTML = 숫자들;

    if (document.querySelector('#누적').checked) {
      if (셑팅된곳El.innerHTML == '') {
        if (숫자들[0].length > 0) {
          셑팅된곳El.innerHTML = 변수Selector;
          셑팅된숫자El.innerHTML = 숫자들;
        }
      } else {
        if (숫자들[0].length > 0) {
          셑팅된곳El.innerHTML += ',' + 변수Selector;
          셑팅된숫자El.innerHTML += ',' + 숫자들;
        } else {
          셑팅된곳El.innerHTML += ',' + 변수Selector;
        }
      }
    } else {
      셑팅된곳El.innerHTML = 변수Selector;
      셑팅된숫자El.innerHTML = 숫자들;
    }

    // 중복 제거
    var 고유값 = [...new Set(셑팅된곳El.innerHTML.split(','))];
    셑팅된곳El.innerHTML = 고유값.join(',');

    var 고유값 = [...new Set(셑팅된숫자El.innerHTML.split(','))];
    셑팅된숫자El.innerHTML = 고유값.join(',');

    //45오른쪽단독 에 색칠하기
    셑팅2_번호45오른쪽_변경();
    색칠하기();

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
  //console.log('e.type : ' + e.type)
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