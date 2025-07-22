var 초기화='초기화';
if ('초기설정' == '초기설정') {
  $('#당번숨김_안에_저장중').append($('#당번숨김_안에_기록중').html());
  document.querySelector('#당번숨김_안에_저장중').innerHTML=
  document.querySelector('#당번숨김_안에_저장중').innerHTML.replace(/\n|\s/g, '') //→ 줄바꿈(\n)과 모든 띄워쓰기(공백 및 탭 등)(\s)을 한 번에 제거
  var 회차별배열=[];
  $('#당번숨김_안에_저장중').html().split(',').forEach(요소=> {회차별배열.push(요소)}) //당번만추출한배열[0]=='보정' (회차와 일치하도록 됨)
  var 변수명순서대로=[];
  document.querySelectorAll('#당번변수 > div').forEach(요소=> {변수명순서대로.push(요소.classList[0]);
    //console.log(요소.classList[0]);
  })
  check_초기설정();
  회차select옵션생성();
  고정html_구조생성();
  if ('1==1') {//bode클릭시(아이디, 설정유형_아이딩따라 설정됨, 초기설정을 한다)
    var 아이디='당번_회차select';
    var 설정유형='당번변수' //당번변수 또는 분석자료변수
    var 최근회차=document.querySelectorAll('#당번_회차select option').length-1;
    var 회차=최근회차;
  }
  회차change설정(); //처음에 e를 인식못하여서...
  초기화=''; //초기화때, 회차change설정() 할때, 분석자료관련 번호들도 넣는다. 
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
function 회차change설정() {
  //console.log('설정유형 : ' + 설정유형 + ' ,회차 : ' + 회차 + ' , 최근회차 : ' + 최근회차)
  if (회차>최근회차) {console.log('회차가 최근회차보다 크면 종료'); return;}
  if (1==1) { //1. 당번8칸채우기(30회분), 다음회차 채우기, 설정유형별로 회차 적용하기
    if (설정유형=='분석자료변수') {document.querySelector('#분석자료_회차select').value=회차}
    if (설정유형=='당번변수') {//당번8칸 채우기
      document.querySelector('#당번_회차select').value=회차
      //다음회차 위치
      if (회차별배열[회차+1]) {
        for (var i=0; i<8; i++) {
          if (i==0) {document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML=회차별배열[회차+1].split('_')[i]} 
          if (i>0) {document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML=회차별배열[회차+1].split('_')[i+1]} 
        }
      } else {
        for (var i=0; i<8; i++) {
          document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML='_';
        }
      }
      //30회분 번호
      for (var 삼십번=0; 삼십번<30; 삼십번++) {
        for (var i=0; i<8; i++) {
          if (i==0) {document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십번+1) + ') > div > div')[i].innerHTML=회차별배열[회차-삼십번].split('_')[i]} 
          if (i>0) {document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십번+1) + ') > div > div')[i].innerHTML=회차별배열[회차-삼십번].split('_')[i+1]} 
        }
      }
    }
  }
  if (1==1) { //2. 변수에 들어갈 번호들 작성, 공통으로 작성 (다음에 설정유형별로 들어가는 곳이 달라짐)
              //변수에 들어갈 번호들 작성 : document.querySelector('#' + 설정유형 + ' #' + 변수명순서대로[0]) 
              //                       == document.querySelector('#당번변수 #공통변수_다음당번')
    //공통 변수명순서대로 : 초기화 후 값넣기, #당번_오주삼십주개수 에는 0 공통변수_다음당번 이 없다. 
    변수명순서대로.forEach(변수명 => {
      document.querySelector(`#${설정유형} .${변수명}`).innerHTML='';
    } )
    console.log('설정유형 : ' + 설정유형 + ' , 변수명순서대로[0] : ' + 변수명순서대로[0])
    if (i==0 && 회차==최근회차) {document.querySelector(`#${설정유형} .${변수명순서대로[0]}`).innerHTML='_,_,_,_,_,_'}//0 공통변수_다음당번
    if (i==0 && 회차!=최근회차) {document.querySelector(`#${설정유형} .${변수명순서대로[0]}`).innerHTML=회차별배열[회차+1].split('_').slice(2,8).join(',')} //0 공통변수_다음당번
    document.querySelector(`#${설정유형} .${변수명순서대로[1]}`).innerHTML=회차별배열[회차].split('_').slice(2,8).join(',') //1 공통변수_당번
    var 좌우수=[], 이웃수=[];
    회차별배열[회차].split('_').slice(2,8).forEach(숫자 => {
      if (숫자==1) {좌우수.push(45); 좌우수.push(2);} 
      if (숫자==45) {좌우수.push(44); 좌우수.push(1);} 
      if (숫자>1 && 숫자<45) {좌우수.push(Number(숫자)-1); 좌우수.push(Number(숫자)+1);} 
    })
    좌우수=new Set(좌우수); 좌우수=[...좌우수]
    좌우수.forEach(숫자 => {
      if (!회차별배열[회차].split('_').slice(2,8).includes(숫자)) {이웃수.push(숫자)}
    })
    document.querySelector(`#${설정유형} .${변수명순서대로[2]}`).innerHTML=이웃수.join(','); //2 공통변수_이웃
    document.querySelector(`#${설정유형} .${변수명순서대로[3]}`).innerHTML=회차별배열[회차].split('_').slice(2,8).join(',') + ',' + 이웃수.join(','); //3 공통변수_당번이웃
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
    var 오주출=[],오주미출=[],오주1출=[],오주2출=[],오주3출=[],십주미출=[],십오주미출=[];
    var 삼십_00=[],삼십_01=[],삼십_02=[],삼십_03=[],삼십_04=[],삼십_05=[],삼십_06=[],삼십_07=[],삼십_08=[],삼십_09=[],삼십_10=[],삼십_11=[],삼십_12=[];
    for (var i=0; i<45; i++) {
      var 오주출개수=오주당번모음.filter( 번호 => 번호==(i+1) ).length;
      if (오주출개수>0) {오주출.push(i+1)}
      if (오주출개수==0) {오주미출.push(i+1)}
      if (오주출개수==1) {오주1출.push(i+1)}
      if (오주출개수==2) {오주2출.push(i+1)}
      if (오주출개수>2) {오주3출.push(i+1)}
      if (십주당번모음.filter( 번호 => 번호==(i+1)).length==0) {십주미출.push(i+1)}
      if (십오주당번모음.filter( 번호 => 번호==(i+1)).length==0) {십오주미출.push(i+1)}

      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==0) {삼십_00.push(i+1)}
      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==1) {삼십_01.push(i+1)}
      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==2) {삼십_02.push(i+1)}  
      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==3) {삼십_03.push(i+1)}  
      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==4) {삼십_04.push(i+1)}  
      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==5) {삼십_05.push(i+1)}  
      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==6) {삼십_06.push(i+1)}  
      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==7) {삼십_07.push(i+1)}  
      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==8) {삼십_08.push(i+1)}  
      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==9) {삼십_09.push(i+1)}  
      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==10) {삼십_10.push(i+1)}  
      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==11) {삼십_11.push(i+1)}  
      if (삼십주당번모음.filter( 번호 => 번호==(i+1)).length==12) {삼십_12.push(i+1)}  
    }
      document.querySelector(`#${설정유형} .${변수명순서대로[4]}`).innerHTML=오주출.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[5]}`).innerHTML=오주미출.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[6]}`).innerHTML=오주1출.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[7]}`).innerHTML=오주2출.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[8]}`).innerHTML=오주3출.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[9]}`).innerHTML=십주미출.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[10]}`).innerHTML=십오주미출.join(',');

      document.querySelector(`#${설정유형} .${변수명순서대로[11]}`).innerHTML=삼십_00.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[12]}`).innerHTML=삼십_01.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[13]}`).innerHTML=삼십_02.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[14]}`).innerHTML=삼십_03.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[15]}`).innerHTML=삼십_04.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[16]}`).innerHTML=삼십_05.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[17]}`).innerHTML=삼십_06.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[18]}`).innerHTML=삼십_07.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[19]}`).innerHTML=삼십_08.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[20]}`).innerHTML=삼십_09.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[21]}`).innerHTML=삼십_10.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[22]}`).innerHTML=삼십_11.join(',');
      document.querySelector(`#${설정유형} .${변수명순서대로[23]}`).innerHTML=삼십_12.join(',');

      //#당번_오주삼십주개수 .
      if (설정유형=='당번변수') {
        변수명순서대로.forEach(변수명 => {
          document.querySelector(`#당번_오주삼십주개수 .${변수명}`).innerHTML=''; //?넣어도 안넘어가네 forEach, d-none으로 넣어줬다.
        } )
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[4]}`).innerHTML=오주출.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[5]}`).innerHTML=오주미출.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[6]}`).innerHTML=오주1출.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[7]}`).innerHTML=오주2출.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[8]}`).innerHTML=오주3출.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[9]}`).innerHTML=십주미출.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[10]}`).innerHTML=십오주미출.length;

        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[11]}`).innerHTML=삼십_00.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[12]}`).innerHTML=삼십_01.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[13]}`).innerHTML=삼십_02.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[14]}`).innerHTML=삼십_03.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[15]}`).innerHTML=삼십_04.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[16]}`).innerHTML=삼십_05.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[17]}`).innerHTML=삼십_06.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[18]}`).innerHTML=삼십_07.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[19]}`).innerHTML=삼십_08.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[20]}`).innerHTML=삼십_09.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[21]}`).innerHTML=삼십_10.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[22]}`).innerHTML=삼십_11.length;
        document.querySelector(`#당번_오주삼십주개수 .${변수명순서대로[23]}`).innerHTML=삼십_12.length;  
      }
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
function 회차change설정_GPT() {
  if (['당번플러스', '분석플러스'].includes(아이디) && 회차 > 최근회차) {
    alert('최근회차입니다');
    return;
  }

  const selectId = 설정유형 === '당번' ? '#당번_회차select' : '#분석자료_회차select';
  document.querySelector(selectId).value = 회차;

  const 범용당번배열 = $('#당번숨김_안에_저장중').html().split(',').filter(Boolean);
  const 당번 = [], 오주 = [], 십주 = [], 십오주 = [], 삼십주 = [];

  for (let i = 0; i < 30; i++) {
    for (let j = 2; j < 8; j++) {
      const 번호 = 범용당번배열[Number(회차) - i]?.split('_')[j]?.trim();
      if (!번호) continue;
      if (i === 0) 당번.push(번호);
      if (i < 5) 오주.push(번호);
      if (i < 10) 십주.push(번호);
      if (i < 15) 십오주.push(번호);
      삼십주.push(번호);
    }
  }

  const 결과 = Array.from({ length: 45 }, (_, i) => {
    const 번호 = (i + 1).toString();
    const 오 = 오주.filter(x => x === 번호).length;
    const 십 = 십주.filter(x => x === 번호).length;
    const 십오 = 십오주.filter(x => x === 번호).length;
    const 삼십 = 삼십주.filter(x => x === 번호).length;

    return {
      번호,
      _5주출: 오 > 0,
      _5주0출: 오 === 0,
      _5주1출: 오 === 1,
      _5주2출: 오 === 2,
      _5주3출이상: 오 > 2,
      _10주0출: 십 === 0,
      _15주0출: 십오 === 0,
      [`삼십_${삼십.toString().padStart(2, '0')}`]: true
    };
  });

  // 결과 분류
  const 분류 = {
    당번,
    _5주출: [], _5주0출: [], _5주1출: [], _5주2출: [], _5주3출이상: [],
    _10주0출: [], _15주0출: [],
    삼십: Array.from({ length: 13 }, () => [])
  };

  결과.forEach(({ 번호, ...flags }) => {
    for (const key in flags) {
      if (flags[key]) {
        if (key.startsWith('삼십_')) {
          const idx = parseInt(key.split('_')[1]);
          if (분류.삼십[idx]) 분류.삼십[idx].push(번호);
        } else {
          분류[key].push(번호);
        }
      }
    }
  });

  if (설정유형 === '당번') {
    // 다음회차 정보
    const 다음회차 = 범용당번배열[회차 + 1]?.split('_') || [];
    const cells = document.querySelectorAll('#당번_다음회차 > div > div > div');
    cells.forEach((cell, i) => {
      cell.innerHTML = 다음회차.length ? (i === 0 ? 다음회차[i] : 다음회차[i + 1]) : '_';
    });

    // 변수 업데이트 헬퍼
    const 변수 = (id, 값) => document.querySelector(id).innerHTML = 값.join(',');

    변수('#당번_변수_당번', 분류.당번);
    변수('#당번_변수_이웃', 분류.당번);
    변수('#당번_변수_당번이웃', 분류.당번);
    변수('#당번_변수_5주출', 분류._5주출);
    변수('#당번_변수_5주0출', 분류._5주0출);
    변수('#당번_변수_5주1출', 분류._5주1출);
    변수('#당번_변수_5주2출', 분류._5주2출);
    변수('#당번_변수_5주3출', 분류._5주3출이상);
    변수('#당번_변수_10주0출', 분류._10주0출);
    변수('#당번_변수_15주0출', 분류._15주0출);

    분류.삼십.forEach((배열, i) => {
      변수(`#당번_변수_30주${i}출`, 배열);
    });

    const 갯수설정 = (sel, 값들) => {
      document.querySelector(sel).innerHTML = 값들.length;
    };

    // 버튼 갯수 출력
    const base = '#당번_오주연결버튼 > div:nth-of-type';
    갯수설정(`${base}(2) > button:nth-of-type(2)`, 분류.당번);
    갯수설정(`${base}(3) > button:nth-of-type(2)`, 분류.당번);
    갯수설정(`${base}(4) > button:nth-of-type(2)`, 분류.당번);
    갯수설정(`${base}(5) > button:nth-of-type(2)`, 분류._5주출);
    갯수설정(`${base}(6) > button:nth-of-type(2)`, 분류._5주0출);
    갯수설정(`${base}(7) > button:nth-of-type(2)`, 분류._5주1출);
    갯수설정(`${base}(8) > button:nth-of-type(2)`, 분류._5주2출);
    갯수설정(`${base}(9) > button:nth-of-type(2)`, 분류._5주3출이상);
    갯수설정(`${base}(10) > button:nth-of-type(2)`, 분류._10주0출);
    갯수설정(`${base}(11) > button:nth-of-type(2)`, 분류._15주0출);

    분류.삼십.forEach((배열, i) => {
      갯수설정(`#당번_삼십주연결버튼 > div:nth-of-type(${i + 2}) > button:nth-of-type(2)`, 배열);
    });
  }
}

function 고정html_구조생성() {
  const 당번한줄html=`<div><div class="당번회차" style="display:inline-block"><div style="display:inline-block"></div></div><div 
  class="당번만" style="display:inline-block"><div></div><div></div><div></div><div></div><div></div><div></div></div><div 
  class="보볼" style="display:inline-block"><div></div></div></div>`
  document.querySelector('#당번_다음회차').innerHTML=당번한줄html;
  document.querySelector('#분석자료_다음회차').innerHTML=당번한줄html;  
  for (var i=0; i<30; i++) {
  document.querySelector('#당번_불러온당첨정보').innerHTML+=당번한줄html;
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
  //var 아이디='당번_회차select';
  //var 설정유형_아이디에따라='당번체인지' //당번체인지, 당번플러스, 당번마이너스, 분석체인지, 분석플러스, 분석마이너스
  //회차change설정(e)이 시작하면서는 e 를 캐치하지 못하여 변수를 바디리스너에서 받아오기로 하였다.
  if (['당번플러스','당번마이너스','당번_회차select'].includes(e.target.id)) {설정유형='당번변수'; 아이디=e.target.id;}
  if (e.target.id=='당번플러스') {회차=Number(document.querySelector('#당번_회차select').value)+1;}
  if (e.target.id=='당번마이너스') {회차=Number(document.querySelector('#당번_회차select').value)-1;}
  if (['분석플러스','분석마이너스','분석자료_회차select'].includes(e.target.id)) {설정유형='분석자료변수';아이디=e.target.id;}
  if (e.target.id=='분석플러스') {회차=Number(document.querySelector('#분석자료_회차select').value)+1;}
  if (e.target.id=='분석마이너스') {회차=Number(document.querySelector('#분석자료_회차select').value)-1;}
  if (['당번_회차select','분석자료_회차select'].includes(e.target.id)) {회차=Number(document.querySelector('#' + e.target.id).value);}

  if (['이동할div리스트','이동할위치div리스트'].includes(e.target.parentElement.id)) { //이동 클릭 관련
     e.target.classList.contains('active') ? 
     e.target.classList.remove('active') : 
     (e.target.parentElement.querySelector('.active')?.classList.remove('active'), e.target.classList.add('active'));
  }
}
리스너_바디.addEventListener('mousedown',리스너_바디_click);