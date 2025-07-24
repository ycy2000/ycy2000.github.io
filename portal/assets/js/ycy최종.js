if ('초기설정' == '초기설정') {
  //양이 많아서 숨길것을 위로 두고 기록중인것을 아래로 두는데 합쳐야되기 때문에..... 합친후 '회차별배열'에 모든배열을 담는다.
  $('#당번숨김_안에_저장중').append($('#당번숨김_안에_기록중').html());
  document.querySelector('#당번숨김_안에_저장중').innerHTML=
  document.querySelector('#당번숨김_안에_저장중').innerHTML.replace(/\n|\s/g, '') //→ 줄바꿈(\n)과 모든 띄워쓰기(공백 및 탭 등)(\s)을 한 번에 제거
  var 회차별배열=[];
  $('#당번숨김_안에_저장중').html().split(',').forEach(요소=> {회차별배열.push(요소)}) //당번만추출한배열[0]=='보정' (회차와 일치하도록 됨)

  //변수명순서대로 : 5주출관련, 30주출관련 정보가 여러번 쓰이기때문에 순서를 사용하기위함. forEach에서 체이닝이 안되어서 
  var 변수명순서대로=[];document.querySelectorAll('#당번변수 > div').forEach(요소=> {변수명순서대로.push(요소.classList[0]);})

  check_초기설정();//모두숨김상태에서 input checked 인 것만 d-none 제거
  회차select옵션생성();

  //당번 다음회차, 당번 30회정보, 분석자료45칸, ★30회빈도는 변동값이어서 제외됨
  고정html_구조생성();

    var 최근회차=document.querySelectorAll('#당번_회차select option').length-1;
    var 회차=최근회차;

  당번_회차change설정();
  분석자료_회차change설정();
}
var 리스너_바디=document.querySelector('body');

function 연습() {
  var 배열=[1,2,3,4,5,6,7,8,9]
  var 배열2=[1,2,3,4,5,6,7,8,9]
  var 배열3=배열+배열2
  console.log(배열3)
}
function 색칠_1_동작설정() {
}
function 색칠_2_설정대로색칠동작() {
}
function 분석자료_회차change설정() {
  console.log('분석자료_회차change설정()')
  document.querySelector('#분석자료_회차select').value=Number(회차);
  if (회차>최근회차) {console.log('회차가 최근회차보다 크면 종료'); 회차=회차-1;document.querySelector('#분석자료_회차select').value=Number(회차); return;} //회차=회차-1 ==> 원래대로 돌림
  if (1==1) { //1. 당번8칸채우기(30회분), 다음회차 채우기(둘다), 설정유형별로 회차 적용하기
    //당번8칸 채우기
    //다음회차 위치
    if (회차별배열[Number(회차)+1]) {
        for (var i=0; i<9; i++) {
          document.querySelectorAll('#분석자료_다음회차 > div')[i].innerHTML=회차별배열[Number(회차)+1].split('_')[i]; 
        }
      } else {
        for (var i=0; i<9; i++) {//회차부터 9종
         document.querySelectorAll('#분석자료_다음회차 > div')[i].innerHTML='_';
        }
    }
      for (var i=1; i<9; i++) {//날짜부터 번호 8종
        document.querySelectorAll('#분석자료_선택회차 > div')[i-1].innerHTML=회차별배열[Number(회차)].split('_')[i];
      }
  }



}
function 당번_회차change설정() {
  console.log('당번_회차change설정()')
  document.querySelector('#당번_회차select').value=Number(회차);
  if (회차>최근회차) {console.log('회차가 최근회차보다 크면 종료'); 회차=회차-1;document.querySelector('#당번_회차select').value=Number(회차); return;} //회차=회차-1 ==> 원래대로 돌림
  if (1==1) { //1. 당번8칸채우기(30회분), 다음회차 채우기(둘다), 설정유형별로 회차 적용하기
    //당번8칸 채우기
    //다음회차 위치
    if (회차별배열[Number(회차)+1]) {
      for (var i=0; i<8; i++) {
        if (i==0) {document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML=회차별배열[Number(회차)+1].split('_')[i]} 
        if (i>0) {document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML=회차별배열[Number(회차)+1].split('_')[i+1]} 
      }
    } else {
      for (var i=0; i<8; i++) {
        document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML='_';
      }
    }
    //30회분 번호
    for (var 삼십번=0; 삼십번<30; 삼십번++) {
      for (var i=0; i<8; i++) {
        if (i==0) {document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십번+1) + ') > div > div')[i].innerHTML=회차별배열[Number(회차)-삼십번].split('_')[i]} 
        if (i>0) {document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십번+1) + ') > div > div')[i].innerHTML=회차별배열[Number(회차)-삼십번].split('_')[i+1]} 
      }
    } 
  }
  if (1==1) { //#당번_오주삼십주개수 작성 및 변수에 값 넣기, //#당번변수 : 안에 class가 #분석자료변수 안에도 동일하므로... 부모id
    var 부모id='#당번변수', 개수id='#당번_오주삼십주개수';
    변수명순서대로.forEach(변수명 => {
      document.querySelector(`${부모id} .${변수명}`).innerHTML='';
      document.querySelector(`${개수id} .${변수명}`).innerHTML=0; //?넣어도 안넘어가네 forEach, d-none으로 넣어줬다.
      //forEach안에서는 삼항연산은 쓸수있다. 체이닝은 쓸수없다.
    } )
    if (i==0 && 회차==최근회차) {document.querySelector(`${부모id} .${변수명순서대로[0]}`).innerHTML='_,_,_,_,_,_'}//0 공통변수_다음당번
    if (i==0 && 회차!=최근회차) {document.querySelector(`${부모id} .${변수명순서대로[0]}`).innerHTML=회차별배열[회차+1].split('_').slice(2,8).join(',')} //0 공통변수_다음당번
    var 좌우수=[], 이웃수=[];
    당번=회차별배열[회차].split('_').slice(2,8);
    document.querySelector(`${부모id} .공통변수_당번`).innerHTML=회차별배열[회차].split('_').slice(2,8).join(',');
    document.querySelector(`${개수id} .공통변수_당번`).innerHTML=6;
    document.querySelector(`${부모id} .공통변수_당번이웃`).innerHTML=회차별배열[회차].split('_').slice(2,8).join(',')+',';
    document.querySelector(`${개수id} .공통변수_당번이웃`).innerHTML=6;
    
    회차별배열[회차].split('_').slice(2,8).forEach(숫자 => {
      if (숫자==1) {좌우수.push(45); 좌우수.push(2);} 
      if (숫자==45) {좌우수.push(44); 좌우수.push(1);} 
      if (숫자>1 && 숫자<45) {좌우수.push(Number(숫자)-1); 좌우수.push(Number(숫자)+1);} 
    })
    좌우수=new Set(좌우수); 좌우수=[...좌우수]
    좌우수.forEach(숫자 => {
      if (!회차별배열[회차].split('_').slice(2,8).includes(숫자)) {
          document.querySelector(`${부모id} .공통변수_이웃`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .공통변수_이웃`).innerHTML=Number(document.querySelector(`${개수id} .공통변수_이웃`).innerHTML)+1;
          document.querySelector(`${부모id} .공통변수_당번이웃`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .공통변수_당번이웃`).innerHTML=Number(document.querySelector(`${개수id} .공통변수_당번이웃`).innerHTML)+1;
      };
    })

    var 오주당번모음=[], 십주당번모음=[], 십오주당번모음=[],삼십주당번모음=[];
    for (var i=0;i<30; i++) {
      if (i<5) {회차별배열[회차-i].split('_').slice(2,8).forEach( 번호 => {오주당번모음.push(번호)} )}
      if (i<10) {회차별배열[회차-i].split('_').slice(2,8).forEach( 번호 => {십주당번모음.push(번호)} )}
      if (i<15) {회차별배열[회차-i].split('_').slice(2,8).forEach( 번호 => {십오주당번모음.push(번호)} )}
      if (i<30) {회차별배열[회차-i].split('_').slice(2,8).forEach( 번호 => {삼십주당번모음.push(번호)} )}
    }
    /* 
    0 공통변수_다음당번  1 공통변수_당번  2 공통변수_이웃  3 공통변수_당번이웃  4 공통변수_5주출  5 공통변수_5주0출  6 공통변수_5주1출  
    7 공통변수_5주2출   8 공통변수_5주3출  9 공통변수_10주0출  10 공통변수_15주0출  11 공통변수_30주0출  12 공통변수_30주1출  
    13 공통변수_30주2출  14 공통변수_30주3출  15 공통변수_30주4출  16 공통변수_30주5출  17 공통변수_30주6출  18 공통변수_30주7출 
    19 공통변수_30주8출  20 공통변수_30주9출  21 공통변수_30주10출  22 공통변수_30주11출  23 공통변수_30주12출
    */
    for (var i=0; i<45; i++) {
      var 오주출개수=오주당번모음.filter( 숫자 => 숫자==(i+1) ).length;
      var 숫자=i+1;
      if (오주출개수>0) {
          document.querySelector(`${부모id} .${변수명순서대로[4]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[4]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[4]}`).innerHTML)+1;
      }
      if (오주출개수==0) {
          document.querySelector(`${부모id} .${변수명순서대로[5]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[5]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[5]}`).innerHTML)+1;
      }
      if (오주출개수==1) {
          document.querySelector(`${부모id} .${변수명순서대로[6]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[6]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[6]}`).innerHTML)+1;
      }
      if (오주출개수==2) {
          document.querySelector(`${부모id} .${변수명순서대로[7]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[7]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[7]}`).innerHTML)+1;
      }
      if (오주출개수>2) {
          document.querySelector(`${부모id} .${변수명순서대로[8]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[8]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[8]}`).innerHTML)+1;
      }
      var 십주출개수=십주당번모음.filter( 숫자 => 숫자==(i+1) ).length;
      var 십오주출개수=십오주당번모음.filter( 숫자 => 숫자==(i+1) ).length;
      if (십주출개수==0) {
          document.querySelector(`${부모id} .${변수명순서대로[9]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[9]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[9]}`).innerHTML)+1;
      }
      if (십오주출개수==0) {
          document.querySelector(`${부모id} .${변수명순서대로[10]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[10]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[10]}`).innerHTML)+1;
      }

      var 삼십주출개수=삼십주당번모음.filter( 숫자 => 숫자==(i+1) ).length;
      if (삼십주출개수==0) {
          document.querySelector(`${부모id} .${변수명순서대로[11]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[11]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[11]}`).innerHTML)+1;
      }
      if (삼십주출개수==1) {
          document.querySelector(`${부모id} .${변수명순서대로[12]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[12]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[12]}`).innerHTML)+1;
      }
      if (삼십주출개수==2) {
          document.querySelector(`${부모id} .${변수명순서대로[13]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[13]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[13]}`).innerHTML)+1;
      }
      if (삼십주출개수==3) {
          document.querySelector(`${부모id} .${변수명순서대로[14]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[14]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[14]}`).innerHTML)+1;
      }
      if (삼십주출개수==4) {
          document.querySelector(`${부모id} .${변수명순서대로[15]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[15]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[15]}`).innerHTML)+1;
      }
      if (삼십주출개수==5) {
          document.querySelector(`${부모id} .${변수명순서대로[16]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[16]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[16]}`).innerHTML)+1;
      }
      if (삼십주출개수==6) {
          document.querySelector(`${부모id} .${변수명순서대로[17]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[17]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[17]}`).innerHTML)+1;
      }
      if (삼십주출개수==7) {
          document.querySelector(`${부모id} .${변수명순서대로[18]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[18]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[18]}`).innerHTML)+1;
      }
      if (삼십주출개수==8) {
          document.querySelector(`${부모id} .${변수명순서대로[19]}`).innerHTML=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[19]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[19]}`).innerHTML)+1;
      }
      if (삼십주출개수==9) {
          document.querySelector(`${부모id} .${변수명순서대로[20]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[20]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[20]}`).innerHTML)+1;
      }
      if (삼십주출개수==10) {
          document.querySelector(`${부모id} .${변수명순서대로[21]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[21]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[21]}`).innerHTML)+1;
      }
      if (삼십주출개수==11) {
          document.querySelector(`${부모id} .${변수명순서대로[22]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[22]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[22]}`).innerHTML)+1;
      }
      if (삼십주출개수==12) {
          document.querySelector(`${부모id} .${변수명순서대로[23]}`).innerHTML+=숫자 + ',';
          document.querySelector(`${개수id} .${변수명순서대로[23]}`).innerHTML=Number(document.querySelector(`${개수id} .${변수명순서대로[23]}`).innerHTML)+1;
      }
    }
    변수명순서대로.forEach(변수명 => {
      var 요소확인=document.querySelector(`${부모id} .${변수명}`);
      if (요소확인.innerHTML.slice(-1)==','){요소확인.innerHTML=요소확인.innerHTML.slice(0,-1)} //마지막이 쉼표(,)이면 쉼표삭제
    } )

  }
  //-------------- 흐름




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
  if (아이디=='당번플러스') {if (회차>최근회차) {alert('최근회차입니다');return;}}
  if (아이디=='분석플러스') {if (회차>최근회차) {alert('최근회차입니다');return;}}

  if (설정유형=='당번') {document.querySelector('#당번_회차select').value=회차;}
  if (설정유형=='분석') {document.querySelector('#분석자료_회차select').value=회차;}
  var 범용당번배열=$('#당번숨김_안에_저장중').html().split(','); 범용당번배열.pop(); //마지막 배열값 제거(빈거)

  var 당번=[],_이웃=[],_당번플러스이웃=[],_5주출=[],_5주0출=[],_5주1출=[],_5주2출=[], _5주3출이상=[], _10주0출=[],_15주0출=[];
  var 삼십_00=[],삼십_01=[],삼십_02=[],삼십_03=[],삼십_04=[],삼십_05=[],삼십_06=[],삼십_07=[],삼십_08=[],삼십_09=[],삼십_10=[],삼십_11=[],삼십_12=[];
  var 삼십주번호들=[], 오주번호들=[], 십주번호들=[], 십오주번호들=[];
  for (var i=0; i<30; i++) {
    for (var 추출=2; 추출<8; 추출++) {
      if (i==0) {당번.push(범용당번배열[Number(회차)-i].split('_')[추출].trim())}
      if (i<5) {오주번호들.push(범용당번배열[Number(회차)-i].split('_')[추출].trim())}
      if (i<10) {십주번호들.push(범용당번배열[Number(회차)-i].split('_')[추출].trim())}
      if (i<15) {십오주번호들.push(범용당번배열[Number(회차)-i].split('_')[추출].trim())}
      삼십주번호들.push(범용당번배열[Number(회차)-i].split('_')[추출].trim())      
    }
  }
  for (i=0; i<45; i++) {
    var 오주출개수=오주번호들.filter(번호 => 번호==(i+1)).length;
    var 십주0출개수=십주번호들.filter(번호 => 번호==(i+1)).length;
    var 십오주0출개수=십오주번호들.filter(번호 => 번호==(i+1)).length;
    var 삼십주출개수=삼십주번호들.filter(번호 => 번호==(i+1)).length;
    if (오주출개수==0) {_5주0출.push((i+1))}
    if (오주출개수>0) {_5주출.push((i+1))}
    if (오주출개수==1) {_5주1출.push((i+1))}
    if (오주출개수==2) {_5주2출.push((i+1))}
    if (오주출개수>2) {_5주3출이상.push((i+1))}
    if (십주0출개수==0) {_10주0출.push((i+1))}
    if (십오주0출개수==0) {_15주0출.push((i+1))}
    if (삼십주출개수==0) {삼십_00.push((i+1))}
    if (삼십주출개수==1) {삼십_01.push((i+1))}
    if (삼십주출개수==2) {삼십_02.push((i+1))}
    if (삼십주출개수==3) {삼십_03.push((i+1))}
    if (삼십주출개수==4) {삼십_04.push((i+1))}
    if (삼십주출개수==5) {삼십_05.push((i+1))}
    if (삼십주출개수==6) {삼십_06.push((i+1))}
    if (삼십주출개수==7) {삼십_07.push((i+1))}
    if (삼십주출개수==8) {삼십_08.push((i+1))}
    if (삼십주출개수==9) {삼십_09.push((i+1))}
    if (삼십주출개수==10) {삼십_10.push((i+1))}
    if (삼십주출개수==11) {삼십_11.push((i+1))}
    if (삼십주출개수==12) {삼십_12.push((i+1))}
  }
  if (설정유형=='당번') {
    //다음회차 위치
    if (범용당번배열[회차+1]) {
      for (var i=0; i<8; i++) {
        if (i==0) {document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML=범용당번배열[회차+1].split('_')[i]} 
        if (i>0) {document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML=범용당번배열[회차+1].split('_')[i+1]} 
      }
    } else {
      for (var i=0; i<8; i++) {
        document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML='_';
      }
    }
    //30회분 번호
    for (var 삼십번=0; 삼십번<30; 삼십번++) {
      for (var i=0; i<8; i++) {
        if (i==0) {document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십번+1) + ') > div > div')[i].innerHTML=범용당번배열[회차-삼십번].split('_')[i]} 
        if (i>0) {document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십번+1) + ') > div > div')[i].innerHTML=범용당번배열[회차-삼십번].split('_')[i+1]} 
      }
    }
    //5주변수, 30주변수 넣기
    document.querySelector('#당번_변수_당번').innerHTML=당번.join(',');
    document.querySelector('#당번_변수_이웃').innerHTML=당번.join(',');
    document.querySelector('#당번_변수_당번이웃').innerHTML=당번.join(',');
    document.querySelector('#당번_변수_5주출').innerHTML=_5주출.join(',');
    document.querySelector('#당번_변수_5주0출').innerHTML=_5주0출.join(',');
    document.querySelector('#당번_변수_5주1출').innerHTML=_5주1출.join(',');
    document.querySelector('#당번_변수_5주2출').innerHTML=_5주2출.join(',');
    document.querySelector('#당번_변수_5주3출').innerHTML=_5주3출이상.join(',');
    document.querySelector('#당번_변수_10주0출').innerHTML=_10주0출.join(',');
    document.querySelector('#당번_변수_15주0출').innerHTML=_15주0출.join(',');
    document.querySelector('#당번_변수_30주0출').innerHTML=삼십_00.join(',');
    document.querySelector('#당번_변수_30주1출').innerHTML=삼십_01.join(',');
    document.querySelector('#당번_변수_30주2출').innerHTML=삼십_02.join(',');
    document.querySelector('#당번_변수_30주3출').innerHTML=삼십_03.join(',');
    document.querySelector('#당번_변수_30주4출').innerHTML=삼십_04.join(',');
    document.querySelector('#당번_변수_30주5출').innerHTML=삼십_05.join(',');
    document.querySelector('#당번_변수_30주6출').innerHTML=삼십_06.join(',');
    document.querySelector('#당번_변수_30주7출').innerHTML=삼십_07.join(',');
    document.querySelector('#당번_변수_30주8출').innerHTML=삼십_08.join(',');
    document.querySelector('#당번_변수_30주9출').innerHTML=삼십_09.join(',');
    document.querySelector('#당번_변수_30주10출').innerHTML=삼십_10.join(',');
    document.querySelector('#당번_변수_30주11출').innerHTML=삼십_11.join(',');
    document.querySelector('#당번_변수_30주12출').innerHTML=삼십_12.join(',');
    //오른쪽에 오주관련개수 넣기, 30주관련 개수 넣기
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(2) > button:nth-of-type(2)').innerHTML=당번.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(3) > button:nth-of-type(2)').innerHTML=당번.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(4) > button:nth-of-type(2)').innerHTML=당번.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(5) > button:nth-of-type(2)').innerHTML=_5주출.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(6) > button:nth-of-type(2)').innerHTML=_5주0출.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(7) > button:nth-of-type(2)').innerHTML=_5주1출.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(8) > button:nth-of-type(2)').innerHTML=_5주2출.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(9) > button:nth-of-type(2)').innerHTML=_5주3출이상.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(10) > button:nth-of-type(2)').innerHTML=_10주0출.length;
    document.querySelector('#당번_오주연결버튼 > div:nth-of-type(11) > button:nth-of-type(2)').innerHTML=_15주0출.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(2) > button:nth-of-type(2)').innerHTML=삼십_00.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(3) > button:nth-of-type(2)').innerHTML=삼십_01.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(4) > button:nth-of-type(2)').innerHTML=삼십_02.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(5) > button:nth-of-type(2)').innerHTML=삼십_03.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(6) > button:nth-of-type(2)').innerHTML=삼십_04.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(7) > button:nth-of-type(2)').innerHTML=삼십_05.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(8) > button:nth-of-type(2)').innerHTML=삼십_06.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(9) > button:nth-of-type(2)').innerHTML=삼십_07.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(10) > button:nth-of-type(2)').innerHTML=삼십_08.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(11) > button:nth-of-type(2)').innerHTML=삼십_09.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(12) > button:nth-of-type(2)').innerHTML=삼십_10.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(13) > button:nth-of-type(2)').innerHTML=삼십_11.length;
    document.querySelector('#당번_삼십주연결버튼 > div:nth-of-type(14) > button:nth-of-type(2)').innerHTML=삼십_12.length;
  }
}

function 고정html_구조생성() {
  const 당번한줄html=`<div><div class="당번회차 d-inline-block"><div></div></div><div 
  class="당번만 d-inline-block"><div></div><div></div><div></div><div></div><div></div><div></div></div><div 
  class="보볼 d-inline-block"><div></div></div></div>`
  document.querySelector('#당번_다음회차').innerHTML=당번한줄html;
  for (var i=0; i<30; i++) {
  document.querySelector('#당번_불러온당첨정보').innerHTML+=당번한줄html;
  }
  //id="분석자료_표_상_js"
  if ('분석자료_표_상_js'=='분석자료_표_상_js') {
    for (var 외부=0; 외부<20; 외부++) {
      var 가로한줄=document.createElement('div');
      var 번호선택_추출_c=document.createElement('div');
      var 번호선택배열=['번호선택','당번','이웃수','당번+이웃','15주미출','10주미출','5주0출','5주출','5주1출','5주2출','5주3출']
      for (var i=0; i<4; i++) {
        var div요소=document.createElement('div'); // div 요소 변수에 담는다.
        if (i==0) {div요소.textContent=번호선택배열[외부]}
        if (i==1 && 외부==0) {div요소.textContent='수'}

        if (i==2) {div요소=document.createElement('button');}
        if (i==2 && 외부==0) {div요소.textContent='출'}
        if (i==2 && 외부!=0) {div요소.setAttribute('class','카운팅')}      //녹색부분에 카운팅 클래스 넣기

        if (i==3 && 외부==0) {div요소.textContent='C'}
        if (i==3 && 외부!=0) {div요소.setAttribute('class','앞요소값clear')}

        if (i==3 && 외부!=0) {div요소.textContent=외부}
        //11부터 추가 : 번호선택 위치에 onclick="분석자료_11에서20_keep번호셑팅(this)", 수 위치에 onclick="keep셑팅초기화()"
        if (외부>10) {
          if (i==0) {div요소.setAttribute('onclick','분석자료_11에서20_keep번호셑팅(this)')}
          if (i==0) {div요소.setAttribute('contenteditable','true')}
          if (i==1) {div요소.setAttribute('onclick','keep셑팅초기화(this)')}
        }
        번호선택_추출_c.appendChild(div요소);
      }
      var 번호45=document.createElement('div');
      //if (외부!=0) {번호45.setAttribute('class','다섯개씩번갈아색칠');}
      번호45.setAttribute('class','다섯개씩번갈아색칠');

      for (var i=1; i<46; i++) {
        var div요소=document.createElement('div'); // div 요소 변수에 담는다. 다섯개씩번갈아색칠
        번호45.appendChild(div요소);
      }
      가로한줄.appendChild(번호선택_추출_c);
      가로한줄.appendChild(번호45);
      가로한줄.setAttribute('class','js클릭번호')

      document.querySelector('#분석자료_표_상_js').appendChild(가로한줄);
    } //20회반복 끝

    for (var i=0; i<45; i++) {document.querySelectorAll('#분석자료_표_상_js > div')[0].children[1].children[i].innerHTML=i+1}
    //다 만들고 난 후에 숨김할것 처리
    var 요소=document.querySelectorAll('#분석자료숨김버튼 button');
    for (var i=0; i<요소.length; i++) {
      if (요소[i].classList.contains('분석버튼숨김')) {
        document.querySelector('#분석자료_표_상_js').children[요소[i].innerHTML].classList.add('d-none');
      }
    }
  }







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
}
function 회차select옵션생성() {//마지막 하나 제거하려면 .slice(0, -1)
  let 옵션 = $('#당번숨김_안에_저장중').html().split(',').reverse().map(v => `<option>${v.split('_')[0]}</option>`).join('');
  $('#당번_회차select, #분석자료_회차select').html(옵션);
}
function check_초기설정() {
  $('.check클래스').each(function() {
    $(this).next('label').attr('for', this.id);
    this.checked && $('#' + this.id.slice(6)).removeClass('d-none');
  });
  //const html = $('.분류').map((_, el) => `<div onclick="이동클릭관련(this)">${el.id}</div>`).get().join('');
  const html = $('.분류').map((_, el) => `<div>${el.id}</div>`).get().join('');
  $('#이동할위치div리스트, #이동할div리스트').html(html);
}
function 리스너_바디_click(e) {
  console.log('리스너_바디_click(e)')
  if ((e.target.parentElement.id=='분석자료숨김버튼' && e.target.innerHTML=='a') || (e.target.parentElement.id=='분석자료숨김버튼' && e.target.innerHTML=='b')) {
    var 분석버튼숨김클래스개수=0;
    var 다음요소=e.target;
    for (var i=0; i<3; i++) {
      다음요소=다음요소.nextElementSibling;
      if (다음요소.classList.contains('분석버튼숨김')) {분석버튼숨김클래스개수+=1;}
    }
    다음요소=e.target;
    if (분석버튼숨김클래스개수==0) {
      for (var i=0; i<3; i++) {
        다음요소=다음요소.nextElementSibling;
        다음요소.classList.add('분석버튼숨김');
        document.querySelector('#분석자료_표_상_js').children[다음요소.innerHTML].classList.add('d-none')
      }
    }
    다음요소=e.target;
    if (분석버튼숨김클래스개수!=0) {
      for (var i=0; i<3; i++) {
        다음요소=다음요소.nextElementSibling;
        다음요소.classList.remove('분석버튼숨김');
        document.querySelector('#분석자료_표_상_js').children[다음요소.innerHTML].classList.remove('d-none')
      }
    }

    return;
  }
  if ((e.target.parentElement.id=='분석자료숨김버튼' && e.target.innerHTML=='c')) {
    var 분석버튼숨김클래스개수=0;
    var 다음요소=e.target;
    for (var i=0; i<4; i++) {
      다음요소=다음요소.nextElementSibling;
      if (다음요소.classList.contains('분석버튼숨김')) {분석버튼숨김클래스개수+=1;}
    }
    다음요소=e.target;
    if (분석버튼숨김클래스개수==0) {
      for (var i=0; i<4; i++) {
        다음요소=다음요소.nextElementSibling;
        다음요소.classList.add('분석버튼숨김');
        document.querySelector('#분석자료_표_상_js').children[다음요소.innerHTML].classList.add('d-none')
      }
    }
    다음요소=e.target;
    if (분석버튼숨김클래스개수!=0) {
      for (var i=0; i<4; i++) {
        다음요소=다음요소.nextElementSibling;
        다음요소.classList.remove('분석버튼숨김');
        document.querySelector('#분석자료_표_상_js').children[다음요소.innerHTML].classList.remove('d-none')
      }
    }
    return;
  }
  if ((e.target.parentElement.id=='분석자료숨김버튼' && e.target.innerHTML=='d')) {
    var 분석버튼숨김클래스개수=0;
    var 다음요소=e.target;
    for (var i=0; i<9; i++) {
      다음요소=다음요소.nextElementSibling;
      if (다음요소.classList.contains('분석버튼숨김')) {분석버튼숨김클래스개수+=1;}
    }
    다음요소=e.target;
    if (분석버튼숨김클래스개수==0) {
      for (var i=0; i<9; i++) {
        다음요소=다음요소.nextElementSibling;
        다음요소.classList.add('분석버튼숨김');
        document.querySelector('#분석자료_표_상_js').children[다음요소.innerHTML].classList.add('d-none')
      }
    }
    다음요소=e.target;
    if (분석버튼숨김클래스개수!=0) {
      for (var i=0; i<9; i++) {
        다음요소=다음요소.nextElementSibling;
        다음요소.classList.remove('분석버튼숨김');
        document.querySelector('#분석자료_표_상_js').children[다음요소.innerHTML].classList.remove('d-none')
      }
    }
    return;
  }
  if (e.target.parentElement.id=='분석자료숨김버튼') {
    if (e.target.classList.contains('분석버튼숨김')) {
      e.target.classList.remove('분석버튼숨김');
      document.querySelector('#분석자료_표_상_js').children[e.target.innerHTML].classList.remove('d-none')
    } else {
      e.target.classList.add('분석버튼숨김');
      document.querySelector('#분석자료_표_상_js').children[e.target.innerHTML].classList.add('d-none')
    }
    return;
  }
  if (e.target.parentElement.id=='분석자료_플마버튼') {
    if (e.target.innerHTML=='X') {
      for (var i=0; i<document.querySelector('#분석자료_표_상_js').children.length; i++) {
        document.querySelector('#분석자료_표_상_js').children[i].classList.add('d-none');
      }
      for (var i=0; i<document.querySelectorAll('#분석자료숨김버튼 button').length; i++) {
        document.querySelectorAll('#분석자료숨김버튼 button')[i].classList.add('분석버튼숨김');
        var 값=document.querySelectorAll('#분석자료숨김버튼 button')[i].innerHTML;
        if (값=='a' || 값=='b' || 값=='c' || 값=='d') {document.querySelectorAll('#분석자료숨김버튼 button')[i].classList.remove('분석버튼숨김');}
      }
    }
    if (e.target.innerHTML=='O') {
      for (var i=0; i<document.querySelector('#분석자료_표_상_js').children.length; i++) {
        document.querySelector('#분석자료_표_상_js').children[i].classList.remove('d-none');
      }
      for (var i=0; i<document.querySelectorAll('#분석자료숨김버튼 button').length; i++) {
        document.querySelectorAll('#분석자료숨김버튼 button')[i].classList.remove('분석버튼숨김');
      }
    }
  }
  if (e.target.classList.contains('카운팅')) {
    console.log('리스너_바디_click(e) : 카운팅 클래스 있을때')
    var 현재=Number(e.target.innerHTML);
    if (isNaN(현재)) {alert('현재 숫자 아님(공백은 0)');return;}
    if (현재==6) {e.target.innerHTML=''} else {e.target.innerHTML=현재+1;}
  }
  if (e.target.classList.contains('앞요소값clear')) {
    console.log('리스너_바디_click(e) : 앞요소값clear 클래스 있을때')
    e.target.previousElementSibling.innerHTML='';
  }

  if (['이동할div리스트','이동할위치div리스트'].includes(e.target.parentElement.id)) { //이동 클릭 관련
     e.target.classList.contains('active') ? 
     e.target.classList.remove('active') : 
     (e.target.parentElement.querySelector('.active')?.classList.remove('active'), e.target.classList.add('active'));
  }
}
리스너_바디.addEventListener('mousedown',리스너_바디_click);