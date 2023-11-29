if (1==1) {
  for (var i=0; i<document.querySelectorAll('input').length; i++) {
    document.querySelectorAll('input')[i].autocomplete="off";
  }
  var 단계1물품=['앵두나무 씨앗 주머니','황금빛 모래','쫄깃한 전어 회',
  '해상 전투 식량','해적의 화약','로아 꽃 씨앗 주머니','알수없는 고대 벽화','뗏목 조각품',
  '거대한 물고기 뼈','비옥한 흙','갈퀴 꽃 씨앗 주머니','고대 항아리 파편','때 탄 갈매기 조각상','말린 푸른 장미']
  var 단계2물품=['섬마을 도시락','최고급 굴 상자','넓찍한 돌판','정제된 식수','오색 구슬','해적선 돛대','괴생물 촉수',
  '나르보산 해삼','소라게 껍질 장식','해양 구조품','크론성 금주화','해적 금주화','성게 가시','균형잡힌 돌탑']
  var 단계3물품=['롭스타 그물','족제비 가죽 외투','해골 장식 찻잔','해적단의 보급상자','찢어진 해적 보물지도','낡은 지령서',
  '해골무늬 카페트','반달 조리용 칼','정찰병 망원경','오래된 모래 시계','푸른 야초 더미','희귀 약초 무더기','걸쭉한 괴생물 혈액','종유석 파편']
  var 단계4물품=['뱃사공의 수련서','청동 촛대','해상 기사단의 창','훔친 해적단 단도','조개 껍질 장식','청록빛 소금덩어리','해적의 열쇠',
  '자수정 파편','해상 기사단의 투구','만병통치약','목 잘린 용 조각상','굳어진 용암 액','오색빛 실타래','금주화가 담긴 낡은 상자']
  var 단계5물품=['젊음을 담은 비약','고대인을 형상화한 초상화','102년 묵은 황금초','조각상의 눈물','푸른빛 석영','팔각 문양 보관함','정체불명의 암석',
  '황금빛 물고기 비늘','팔랑나비 박제품','37년된 약주','흰색 애벌레 박제품','고급 문양의 옷감','빛바랜 황금용 조각상','최고급 황금 촛대']

  var 구역01_동끝=['푸자라'];
  var 구역01_남남동끝=['델링하트'];
  var 구역01_남=['오스트라','타라무라'];
  var 구역01_남서=['칸베라','아라킬'];
  var 구역01_북서=['아지르','알나하'];

  var 구역02_동북=['샤샤'];
  var 구역02_남동=['필바라'];
  var 구역02_남남서=['베이루와'];
  var 구역02_남서=['파라타마'];
  var 구역02_서서남=['웨이타'];
  var 구역02_서끝=['바레미'];
  var 구역02_서북=['알나하','라시드'];

  var 구역03_북서=['로즈반'];
  var 구역03_남서=['에프데룬'];
  var 구역03_서서남=['마리베노'];

  var 구역04_북북서=['틴베라'];
  var 구역04_=북서['포르타넨'];
  var 구역04_동=['티그리스'];
  var 구역04_동남=['리에드','소코타'];
  var 구역04_서남=['루비아노'];
  var 구역04_서서남=['에베토','발베쥬','마를레느'];
  var 구역04_서서북=['툴루','오르프스'];

  var 구역05_북북동=['레라오'];
  var 구역05_동동북=['오리샤','보아'];
  var 구역05_동=['시르나','에스파'];
  var 구역05_동동남=['리에드'];
  var 구역05_남동=['소코타'];
  var 구역05_서서남=['두흐','앙쥬'];
  var 구역05_서=['인버넨',''];

  var 구역06_서서남=['마르카'];
  var 구역06_서=['나르보'];
  var 구역06_서북=['타슈'];

  var 구역07_서남=['리스즈','루루브','스타렌'];
  var 구역07_서=['나르보'];
  var 구역07_서서북=['아리타'];

  var 구역08_서서북=['쿠이트','파딕스'];
  var 구역08_서서남=['알브레서','바라테르'];

  var 구역09_서서북=['테스테','알마이'];
  var 구역09_서서남=['데이튼','오벤','네트넘','던데','에버딘','진버레이'];
  var 구역09_서남=['란디스','세르카'];

  var 구역10_서끝=['라메다','테야말'];
  var 구역10_서남=['시오닐','모드릭','바에자'];

  var 일반물품섬='_바에자_세르카_란디스_바라테르_스타렌_두흐_에베토_마리베노_에프데룬_베이루와_파라타마_';
  var 단계1섬='_쿠이트_테스테_타슈_아리타_라시드_포르타넨_보아_에스파_소코타_틴베라_레라오_';
  var 단계2섬='_모드릭_진버레이_던데_알브레서_루루브_앙쥬_마를레느_웨이타_칸베라_아라킬_오스트라_타라무라_';
  var 단계3섬='_데이튼_테야말_리스즈_툴루_알나하_샤샤_로즈반_오리샤_티그리스_시르나_리에드_'
  var 단계4섬='_오벤_파딕스_라메다_시오닐_나르보_오르프스_발베쥬_바레미_아지르_푸자라_필바라_';
  var 재료교환섬='_네트넘_에버딘_마르카_인버넨_델링하트_';
}
  //파템료계산. 재료별로 동작 [파템제작재료12종]
  //1.재료 우측에 필요수량 합산하에 좌측 전체필요수에 넣는다. 세번쨰버튼이 첫번째 파템 필요수
  //필요수,보유수(수동입력),남은수,일get(수동입력),일퀘수 : 첫버튼부터 다섯개버튼씩
if (1==1) {
  var 전체필요수=0;
  var 더할수1=0;
  var 더할수2=0;
  var 더할수3=0;
  var 더할수4=0;
  var 타겟;
  var 보유수=0;
  var 전체수=0;
  var 첫타겟순번=0;
  var 일퀘수=0;
  var 남은수=0;
  var 일퀘남은날=0;
  for (var i=0; i<17; i++) {
    첫타겟순번+=2;
    if (isNaN(document.querySelectorAll('#파템_함포 button')[첫타겟순번].innerHTML)) {더할수1=0;} 
    else {더할수1=Number(document.querySelectorAll('#파템_함포 button')[첫타겟순번].innerHTML);}
    if (isNaN(document.querySelectorAll('#파템_선수상 button')[첫타겟순번].innerHTML)) {더할수2=0;} 
    else {더할수2=Number(document.querySelectorAll('#파템_선수상 button')[첫타겟순번].innerHTML);}
    if (isNaN(document.querySelectorAll('#파템_장갑 button')[첫타겟순번].innerHTML)) {더할수3=0;} 
    else {더할수3=Number(document.querySelectorAll('#파템_장갑 button')[첫타겟순번].innerHTML);}
    if (isNaN(document.querySelectorAll('#파템_돛 button')[첫타겟순번].innerHTML)) {더할수4=0;} 
    else {더할수4=Number(document.querySelectorAll('#파템_돛 button')[첫타겟순번].innerHTML);}
    //전체필요수
    전체수=더할수1+더할수2+더할수3+더할수4;
    document.querySelectorAll('#파템재료_일퀘개수 button')[i*5].innerHTML=전체수;

    //남은수
    if (document.querySelectorAll('#파템재료_일퀘개수 button')[(i*5)+1].innerHTML=='') {
      보유수=0;
    } else {
      보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(i*5)+1].innerHTML);
    }
    남은수=전체수-보유수;
    document.querySelectorAll('#파템재료_일퀘개수 button')[(i*5)+2].innerHTML=남은수;

    //일퀘남은날수  : 일퀘수가 기록되어 있을때, 남은수 나누기 일퀘수 올림,,,,,,,일퀘남은날=(남은수/일퀘수).toPrecision(0);
    타겟=document.querySelectorAll('#파템재료_일퀘개수 button')[(i*5)+3];//일퀘수
    if (isNaN(타겟.innerHTML) || 타겟.innerHTML=='') {} else {
      일퀘수=Number(타겟.innerHTML);
      일퀘남은날=Number(남은수/일퀘수).toFixed(0);
      document.querySelectorAll('#파템재료_일퀘개수 button')[(i*5)+4].innerHTML=일퀘남은날;
    }
  }
}

if (1==1) {
    //반복문을 벗어나 단독작업
    //함포,선수상,흑장갑,돛 필요수 우측에 보유수 채워넣기
    //보유수
    //심해의 눈물
    var 비교수=0;
    var 순번=0;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_함포 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_함포 button')[((순번+1)*2)+1].innerHTML=보유수;
    //화려한 진주 결정
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_함포 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_함포 button')[((순번+1)*2)+1].innerHTML=보유수;
    //콕스유물 전추
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_함포 button')[((순번+1)*2)].innerHTML);
    if (비교수>보유수) {document.querySelectorAll('#파템_함포 button')[((순번+1)*2)+1].innerHTML=보유수;} else {
      document.querySelectorAll('#파템_함포 button')[((순번+1)*2)+1].innerHTML=125;
      document.querySelectorAll('#파템_장갑 button')[((순번+1)*2)+1].innerHTML=보유수-125;
    }
    //화려한 암염 주괴
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_함포 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_함포 button')[((순번+1)*2)+1].innerHTML=보유수;
    //짙은 파도빛이 감도는 규격 각목
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_함포 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_함포 button')[((순번+1)*2)+1].innerHTML=보유수;
    //달의 핏줄이 새겨진 아마포
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_함포 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_함포 button')[((순번+1)*2)+1].innerHTML=보유수;
    //홍조빛 해저단괴
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_선수상 button')[((순번+1)*2)].innerHTML);
    if (비교수>보유수) {document.querySelectorAll('#파템_선수상 button')[((순번+1)*2)+1].innerHTML=보유수;} else {
      document.querySelectorAll('#파템_선수상 button')[((순번+1)*2)+1].innerHTML=50;
      document.querySelectorAll('#파템_돛 button')[((순번+1)*2)+1].innerHTML=보유수-50;
    }
    //빛나는 코발트 주괴
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_돛 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_돛 button')[((순번+1)*2)+1].innerHTML=보유수;
    //달의 비늘이 새겨진 합판
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_함포 button')[((순번+1)*2)].innerHTML);
    if (비교수>보유수) {document.querySelectorAll('#파템_함포 button')[((순번+1)*2)+1].innerHTML=보유수;} else {
      document.querySelectorAll('#파템_함포 button')[((순번+1)*2)+1].innerHTML=300;
      document.querySelectorAll('#파템_장갑 button')[((순번+1)*2)+1].innerHTML=보유수-300;
    }
    //콕스유물 상급
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_돛 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_돛 button')[((순번+1)*2)+1].innerHTML=보유수;
    //순수한 진주 결정
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_장갑 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_장갑 button')[((순번+1)*2)+1].innerHTML=보유수;
    //파도빛이 감도는 규격 각목
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_함포 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_함포 button')[((순번+1)*2)+1].innerHTML=보유수;
    //대양의 견고한 현철
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_선수상 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_선수상 button')[((순번+1)*2)+1].innerHTML=보유수;
    // 심해초줄기
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_선수상 button')[((순번+1)*2)].innerHTML);
    if (비교수>보유수) {document.querySelectorAll('#파템_선수상 button')[((순번+1)*2)+1].innerHTML=보유수;} else {
      document.querySelectorAll('#파템_선수상 button')[((순번+1)*2)+1].innerHTML=125;
      document.querySelectorAll('#파템_돛 button')[((순번+1)*2)+1].innerHTML=보유수-125;
    }
    //순수한 암초 조각
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_함포 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_함포 button')[((순번+1)*2)+1].innerHTML=보유수;
    //콕스유물 하급
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_장갑 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_장갑 button')[((순번+1)*2)+1].innerHTML=보유수;
    //강화된 섬나무 증착합판
    순번+=1;
    보유수=Number(document.querySelectorAll('#파템재료_일퀘개수 button')[(순번*5)+1].innerHTML);
    비교수=Number(document.querySelectorAll('#파템_선수상 button')[((순번+1)*2)].innerHTML);
    document.querySelectorAll('#파템_선수상 button')[((순번+1)*2)+1].innerHTML=보유수;
}
//맨마지막에 넣어야함
var value있는것들=document.querySelectorAll('button[class~="모으기완료"');
var value있는것들다음버튼;
for (var i=0; i<value있는것들.length; i++) {
  value있는것들다음버튼=value있는것들[i].nextElementSibling;
  // console.log(value있는것들[i].innerHTML*1 + ' : ' + value있는것들다음버튼.innerHTML*1 + '같거나 뒤에 것이 클때');
  if (Number(value있는것들다음버튼.innerHTML*1)>=Number(value있는것들[i].innerHTML*1)) {
    value있는것들다음버튼.style.cssText ="background-color: chocolate";
  }
}

function 물품단계클릭시() {
  // 해역_물품단계
  // 모은재료none상태
  // 이동시간잡다한것none상태
  // 자동이동시간참고
  // 마고리아12별
  if (document.querySelector('#해역_물품단계').classList.contains('d-none')) {
    document.querySelector('#해역_물품단계').classList.remove('d-none');  
    document.querySelector('#모은재료none상태').classList.add('d-none');
    document.querySelector('#이동시간잡다한것none상태').classList.add('d-none');
    document.querySelector('#자동이동시간참고').classList.add('d-none'); 
    document.querySelector('#마고리아12별').classList.add('d-none'); 
  } else {
    document.querySelector('#해역_물품단계').classList.add('d-none'); 
  }
}
function 모은재료클릭시() {
  // 해역_물품단계
  // 모은재료none상태
  // 이동시간잡다한것none상태
  // 자동이동시간참고
  // 마고리아12별
  if (document.querySelector('#모은재료none상태').classList.contains('d-none')) {
    document.querySelector('#해역_물품단계').classList.add('d-none');  
    document.querySelector('#모은재료none상태').classList.remove('d-none'); 
    document.querySelector('#이동시간잡다한것none상태').classList.add('d-none');
    document.querySelector('#자동이동시간참고').classList.add('d-none'); 
    document.querySelector('#마고리아12별').classList.add('d-none'); 
  } else {
    document.querySelector('#모은재료none상태').classList.add('d-none');
  }
}
function 이동시간잡다한것클릭시() {
  // 해역_물품단계
  // 모은재료none상태
  // 이동시간잡다한것none상태
  // 자동이동시간참고
  // 마고리아12별
  if (document.querySelector('#이동시간잡다한것none상태').classList.contains('d-none')) {
    document.querySelector('#해역_물품단계').classList.add('d-none');  
    document.querySelector('#모은재료none상태').classList.add('d-none'); 
    document.querySelector('#이동시간잡다한것none상태').classList.remove('d-none');
    document.querySelector('#자동이동시간참고').classList.add('d-none'); 
    document.querySelector('#마고리아12별').classList.add('d-none'); 
  } else {
    document.querySelector('#이동시간잡다한것none상태').classList.add('d-none');
  }
}
function 자동이동클릭시() {
  // 해역_물품단계
  // 모은재료none상태
  // 이동시간잡다한것none상태
  // 자동이동시간참고
  // 마고리아12별
  if (document.querySelector('#자동이동시간참고').classList.contains('d-none')) {
    document.querySelector('#해역_물품단계').classList.add('d-none');  
    document.querySelector('#모은재료none상태').classList.add('d-none'); 
    document.querySelector('#이동시간잡다한것none상태').classList.add('d-none');
    document.querySelector('#자동이동시간참고').classList.remove('d-none'); 
    document.querySelector('#마고리아12별').classList.add('d-none'); 
  } else {
    document.querySelector('#자동이동시간참고').classList.add('d-none');
  }
}
function 마고리아클릭시() {
  // 해역_물품단계
  // 모은재료none상태
  // 이동시간잡다한것none상태
  // 자동이동시간참고
  // 마고리아12별
  if (document.querySelector('#마고리아12별').classList.contains('d-none')) {
    document.querySelector('#해역_물품단계').classList.add('d-none');  
    document.querySelector('#모은재료none상태').classList.add('d-none'); 
    document.querySelector('#이동시간잡다한것none상태').classList.add('d-none');
    document.querySelector('#자동이동시간참고').classList.add('d-none'); 
    document.querySelector('#마고리아12별').classList.remove('d-none'); 
  } else {
    document.querySelector('#마고리아12별').classList.add('d-none');
  }
}
function 물품조회_0() {
  var 시작배열=0;
  var 조회물품명=document.querySelectorAll('#물품조회 input')[시작배열].value;
  var 조회개수=0;
  var 물품조회결과='';
  if (조회물품명=='' || 조회물품명==' ' ) {document.querySelectorAll('#물품조회 input')[시작배열+1].value='';return;}
  for (var i=0; i<14; i++) {
    if (단계1물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[1]'+단계1물품[i]+'\n';}
    if (단계2물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[2]'+단계2물품[i]+'\n';}
    if (단계3물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[3]'+단계3물품[i]+'\n';}
    if (단계4물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[4]'+단계4물품[i]+'\n';}
    if (단계5물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[5]'+단계5물품[i]+'\n';}
  }
  if (조회개수==0) {document.querySelectorAll('#물품조회 input')[시작배열+1].value='없음';}
  if (조회개수==1) {document.querySelectorAll('#물품조회 input')[시작배열+1].value='[' + 조회개수 + '개]' + 물품조회결과;}
  if (조회개수>1) {
    alert('[' + 조회개수 + '개]' + 물품조회결과);
    document.querySelectorAll('#물품조회 input')[시작배열+1].value='[' + 조회개수 + '개]' + 물품조회결과;
  }
}
function 물품조회_1() {
  var 시작배열=2;
  var 조회물품명=document.querySelectorAll('#물품조회 input')[시작배열].value;
  var 조회개수=0;
  var 물품조회결과='';
  if (조회물품명=='' || 조회물품명==' ' ) {document.querySelectorAll('#물품조회 input')[시작배열+1].value='';return;}
  for (var i=0; i<14; i++) {
    if (단계1물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[1]'+단계1물품[i]+'\n';}
    if (단계2물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[2]'+단계2물품[i]+'\n';}
    if (단계3물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[3]'+단계3물품[i]+'\n';}
    if (단계4물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[4]'+단계4물품[i]+'\n';}
    if (단계5물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[5]'+단계5물품[i]+'\n';}
  }
  if (조회개수==0) {document.querySelectorAll('#물품조회 input')[시작배열+1].value='없음';}
  if (조회개수==1) {document.querySelectorAll('#물품조회 input')[시작배열+1].value='[' + 조회개수 + '개]' + 물품조회결과;}
  if (조회개수>1) {
    alert('[' + 조회개수 + '개]' + 물품조회결과);
    document.querySelectorAll('#물품조회 input')[시작배열+1].value='[' + 조회개수 + '개]' + 물품조회결과;
  }
}
function 물품조회_2() {
  var 시작배열=4;
  var 조회물품명=document.querySelectorAll('#물품조회 input')[시작배열].value;
  var 조회개수=0;
  var 물품조회결과='';
  if (조회물품명=='' || 조회물품명==' ' ) {document.querySelectorAll('#물품조회 input')[시작배열+1].value='';return;}
  for (var i=0; i<14; i++) {
    if (단계1물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[1]'+단계1물품[i]+'\n';}
    if (단계2물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[2]'+단계2물품[i]+'\n';}
    if (단계3물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[3]'+단계3물품[i]+'\n';}
    if (단계4물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[4]'+단계4물품[i]+'\n';}
    if (단계5물품[i].search(조회물품명)>-1) {조회개수=조회개수+1;물품조회결과+='[5]'+단계5물품[i]+'\n';}
  }
  if (조회개수==0) {document.querySelectorAll('#물품조회 input')[시작배열+1].value='없음';}
  if (조회개수==1) {document.querySelectorAll('#물품조회 input')[시작배열+1].value='[' + 조회개수 + '개]' + 물품조회결과;}
  if (조회개수>1) {
    alert('[' + 조회개수 + '개]' + 물품조회결과);
    document.querySelectorAll('#물품조회 input')[시작배열+1].value='[' + 조회개수 + '개]' + 물품조회결과;
  }
}
function 계산_나의무게계산() {
  var 일단등무게=document.querySelector('#계산3_1단등무게').value;
  var 계산3_800개수=document.querySelector('#계산3_800').value;
  var 계산3_900개수=document.querySelector('#계산3_900').value;
  var 계산3_천개수=document.querySelector('#계산3_천').value;
  if (일단등무게=='') {일단등무게=0;}
  if (계산3_800개수=='') {계산3_800개수=0;}
  if (계산3_900개수=='') {계산3_900개수=0;}
  if (계산3_천개수=='') {계산3_천개수=0;}
  if (isNaN(일단등무게)) {alert('일단등무게가 빈칸이나 숫자가 아님'); return;}; //숫자가 아니면
  if (isNaN(계산3_800개수)) {alert('계산3_800개수가 빈칸이나 숫자가 아님'); return;}; //숫자가 아니면
  if (isNaN(계산3_900개수)) {alert('계산3_900개수가 빈칸이나 숫자가 아님'); return;}; //숫자가 아니면
  if (isNaN(계산3_천개수)) {alert('계산3_천개수가 빈칸이나 숫자가 아님'); return;}; //숫자가 아니면
  document.querySelector('#계산3_합산무게').value=Number(일단등무게) + Number((계산3_800개수*800)) + Number((계산3_900개수*900)) + Number((계산3_천개수*1000));

}
function 차감교섭력clear() {
  document.querySelectorAll('#남은_차감후_교섭력 input')[1].value=0;
  for (var i=0; i<8; i++) {
    document.querySelectorAll('#차감input들 input')[i].value='';
    document.querySelectorAll('#차감input들 button')[i].innerHTML=1;
  }
}
function 개수1버튼더블클릭() {document.querySelectorAll('#차감input들 button')[0].innerHTML=1;남은교섭력계산();}
function 개수2버튼더블클릭() {document.querySelectorAll('#차감input들 button')[1].innerHTML=1;남은교섭력계산();}
function 개수3버튼더블클릭() {document.querySelectorAll('#차감input들 button')[2].innerHTML=1;남은교섭력계산();}
function 개수4버튼더블클릭() {document.querySelectorAll('#차감input들 button')[3].innerHTML=1;남은교섭력계산();}
function 개수5버튼더블클릭() {document.querySelectorAll('#차감input들 button')[4].innerHTML=1;남은교섭력계산();}
function 개수6버튼더블클릭() {document.querySelectorAll('#차감input들 button')[5].innerHTML=1;남은교섭력계산();}
function 개수7버튼더블클릭() {document.querySelectorAll('#차감input들 button')[6].innerHTML=1;남은교섭력계산();}
function 개수8버튼더블클릭() {document.querySelectorAll('#차감input들 button')[7].innerHTML=1;남은교섭력계산();}
function 개수1버튼클릭() {var 버튼=document.querySelectorAll('#차감input들 button')[0]; 버튼.innerHTML=Number(버튼.innerHTML) + 1;남은교섭력계산();}
function 개수2버튼클릭() {var 버튼=document.querySelectorAll('#차감input들 button')[1]; 버튼.innerHTML=Number(버튼.innerHTML) + 1;남은교섭력계산();}
function 개수3버튼클릭() {var 버튼=document.querySelectorAll('#차감input들 button')[2]; 버튼.innerHTML=Number(버튼.innerHTML) + 1;남은교섭력계산();}
function 개수4버튼클릭() {var 버튼=document.querySelectorAll('#차감input들 button')[3]; 버튼.innerHTML=Number(버튼.innerHTML) + 1;남은교섭력계산();}
function 개수5버튼클릭() {var 버튼=document.querySelectorAll('#차감input들 button')[4]; 버튼.innerHTML=Number(버튼.innerHTML) + 1;남은교섭력계산();}
function 개수6버튼클릭() {var 버튼=document.querySelectorAll('#차감input들 button')[5]; 버튼.innerHTML=Number(버튼.innerHTML) + 1;남은교섭력계산();}
function 개수7버튼클릭() {var 버튼=document.querySelectorAll('#차감input들 button')[6]; 버튼.innerHTML=Number(버튼.innerHTML) + 1;남은교섭력계산();}
function 개수8버튼클릭() {var 버튼=document.querySelectorAll('#차감input들 button')[7]; 버튼.innerHTML=Number(버튼.innerHTML) + 1;남은교섭력계산();}
function 남은교섭력계산() {
  var 남은_차감후_교섭력_2개=document.querySelectorAll('#남은_차감후_교섭력 input');
  var 차감개수들_8개=document.querySelectorAll('#차감input들 button');
  var 차감input들_8개=document.querySelectorAll('#차감input들 input');
  // 남은교석력, 차감교섭력과 개수 8셑트 16개input 컨트롤
  var 남은교섭력;
  if (남은_차감후_교섭력_2개[0].value=='') {남은교섭력=0;} else {남은교섭력=남은_차감후_교섭력_2개[0].value;};
  if (isNaN(남은교섭력)) {alert('남은교섭력이 공백 또는 숫자가 아님 return'); return;} //숫자가 아니면
  var 차감후은교섭력=남은_차감후_교섭력_2개[1];
  // 공란이면 0, 아니면 숫자일때 진행, 숫자아니면 메세지
  var 숫자확인;
  for (var i=0; i<차감input들_8개.length; i++) {
    if (차감input들_8개[i].value=='') {숫자확인=0;} else {숫자확인=차감input들_8개[i].value;}
    if (isNaN(숫자확인)) {alert('차감 박스가 공백 또는 숫자가 아님 return'); return;} //숫자가 아니면
  }
  var 차감할교섭력=0;
  for (var i=0; i<8; i++) {
    if (차감input들_8개[i].value=='') {숫자확인=0;} else {숫자확인=차감input들_8개[i].value;}
    차감할교섭력+=숫자확인*차감개수들_8개[i].innerHTML;
  }
  남은_차감후_교섭력_2개[1].value=남은교섭력-차감할교섭력;
}
function 계산_무게() {
  var 배와장비무게=document.querySelector('#계산_배와장비무게').value;
  var 일반등무게=document.querySelector('#계산_일반등무게').value;
  document.querySelector('#계산2_일반등무게').value=일반등무게;
  if (isNaN(배와장비무게)) {alert('배와장비무게가 숫자가 아님'); return;}; //숫자가 아니면
  if (isNaN(일반등무게)) {alert('일반등무게가 숫자가 아님'); return;}; //숫자가 아니면
  var 여유무게=배와장비무게-일반등무게;
  document.querySelector('#계산_여유무게').value=여유무게;
  document.querySelector('#계산_800').value=(여유무게/800).toFixed(1);
  document.querySelector('#계산_900').value=(여유무게/900).toFixed(1);
  document.querySelector('#계산_천').value=(여유무게/1000).toFixed(1);

  var 최대적재=배와장비무게*1.7;
  document.querySelector('#계산2_최대적재').value=최대적재;
  여유무게=최대적재-일반등무게;
  document.querySelector('#계산2_여유무게').value=여유무게;
  document.querySelector('#계산2_800').value=(여유무게/800).toFixed(1);
  document.querySelector('#계산2_900').value=(여유무게/900).toFixed(1);
  document.querySelector('#계산2_천').value=(여유무게/1000).toFixed(1);

}
function 섬검색초기화() {
  for (var i=0; i<document.querySelectorAll('#리스너용섬이름검색 input').length; i++) {
    document.querySelectorAll('#리스너용섬이름검색 input')[i].value='';
  }
  for (var i=0; i<document.querySelectorAll('#리스너용섬이름검색 div').length; i++) {
    document.querySelectorAll('#리스너용섬이름검색 div')[i].innerHTML='';
  }

} 
function textarea보기숨기기() {
  if (document.querySelector('#textarea기능버튼').innerHTML=='textarea숨기기') {
    document.querySelector('#추가2').classList.add('d-none');
    document.querySelector('#좌측상단메모').classList.add('d-none');
    document.querySelector('#우측상단메모').classList.add('d-none');
    document.querySelector('#textarea기능버튼').innerHTML='textarea보기';
  } else {
    document.querySelector('#추가2').classList.remove('d-none');
    document.querySelector('#좌측상단메모').classList.remove('d-none');
    document.querySelector('#우측상단메모').classList.remove('d-none');
    document.querySelector('#textarea기능버튼').innerHTML='textarea숨기기';
  }
} 
function 섬이름검색1() {
  //버튼 누를때만 작동되네?
  document.querySelector('#div섬구역1').innerHTML='';
  var text=document.querySelector('#input섬이름1').value;
  var result='';
  if (구역01_동끝.find(element => element==text)) {result="구역01_동끝"};
  if (구역01_남남동끝.find(element => element==text)) {result="구역01_남남동끝"};
  if (구역01_남.find(element => element==text)) {result="구역01_남"};
  if (구역01_북서.find(element => element==text)) {result="구역01_북서"};

  if (구역02_동북.find(element => element==text)) {result="구역02_동북"};
  if (구역02_남동.find(element => element==text)) {result="구역02_남동"};
  if (구역02_남남서.find(element => element==text)) {result="구역02_남남서"};
  if (구역02_남서.find(element => element==text)) {result="구역02_남서"};
  if (구역02_서끝.find(element => element==text)) {result="구역02_서끝"};
  if (구역02_서북.find(element => element==text)) {result="구역02_서북"};

  if (구역03_북서.find(element => element==text)) {result="구역03_북서"};
  if (구역03_남서.find(element => element==text)) {result="구역03_남서"};
  if (구역03_서서남.find(element => element==text)) {result="구역03_서서남"};

  if (구역04_북북서.find(element => element==text)) {result="구역04_북북서"};
  if (구역04_=북서.find(element => element==text)) {result="구역04_=북서"};
  if (구역04_동.find(element => element==text)) {result="구역04_동"};
  if (구역04_동남.find(element => element==text)) {result="구역04_동남"};
  if (구역04_서남.find(element => element==text)) {result="구역04_서남"};
  if (구역04_서서남.find(element => element==text)) {result="구역04_서서남"};
  if (구역04_서서북.find(element => element==text)) {result="구역04_서서북"};

  if (구역05_북북동.find(element => element==text)) {result="구역05_북북동"};
  if (구역05_동동북.find(element => element==text)) {result="구역05_동동북"};
  if (구역05_동.find(element => element==text)) {result="구역05_동"};
  if (구역05_동동남.find(element => element==text)) {result="구역05_동동남"};
  if (구역05_남동.find(element => element==text)) {result="구역05_남동"};
  if (구역05_서서남.find(element => element==text)) {result="구역05_서서남"};
  if (구역05_서.find(element => element==text)) {result="구역05_서"};

  if (구역06_서서남.find(element => element==text)) {result="구역06_서서남"};
  if (구역06_서.find(element => element==text)) {result="구역06_서"};
  if (구역06_서북.find(element => element==text)) {result="구역06_서북"};

  if (구역07_서남.find(element => element==text)) {result="구역07_서남"};
  if (구역07_서.find(element => element==text)) {result="구역07_서"};
  if (구역07_서서북.find(element => element==text)) {result="구역07_서서북"};

  if (구역08_서서북.find(element => element==text)) {result="구역08_서서북"};
  if (구역08_서서남.find(element => element==text)) {result="구역08_서서남"};

  if (구역09_서서북.find(element => element==text)) {result="구역09_서서북"};
  if (구역09_서서남.find(element => element==text)) {result="구역09_서서남"};
  if (구역09_서남.find(element => element==text)) {result="구역09_서남"};

  if (구역10_서끝.find(element => element==text)) {result="구역10_서끝"};
  if (구역10_서남.find(element => element==text)) {result="구역10_서남"};

  if (result=='') {document.querySelector('#div섬구역1').innerHTML=''} else {document.querySelector('#div섬구역1').innerHTML=result;};
}
function 섬이름검색2() {
  //버튼 누를때만 작동되네?
  document.querySelector('#div섬구역2').innerHTML='';
  var text=document.querySelector('#input섬이름2').value;
  var result='';
  if (구역01_동끝.find(element => element==text)) {result="구역01_동끝"};
  if (구역01_남남동끝.find(element => element==text)) {result="구역01_남남동끝"};
  if (구역01_남.find(element => element==text)) {result="구역01_남"};
  if (구역01_북서.find(element => element==text)) {result="구역01_북서"};

  if (구역02_동북.find(element => element==text)) {result="구역02_동북"};
  if (구역02_남동.find(element => element==text)) {result="구역02_남동"};
  if (구역02_남남서.find(element => element==text)) {result="구역02_남남서"};
  if (구역02_남서.find(element => element==text)) {result="구역02_남서"};
  if (구역02_서끝.find(element => element==text)) {result="구역02_서끝"};
  if (구역02_서북.find(element => element==text)) {result="구역02_서북"};

  if (구역03_북서.find(element => element==text)) {result="구역03_북서"};
  if (구역03_남서.find(element => element==text)) {result="구역03_남서"};
  if (구역03_서서남.find(element => element==text)) {result="구역03_서서남"};

  if (구역04_북북서.find(element => element==text)) {result="구역04_북북서"};
  if (구역04_=북서.find(element => element==text)) {result="구역04_=북서"};
  if (구역04_동.find(element => element==text)) {result="구역04_동"};
  if (구역04_동남.find(element => element==text)) {result="구역04_동남"};
  if (구역04_서남.find(element => element==text)) {result="구역04_서남"};
  if (구역04_서서남.find(element => element==text)) {result="구역04_서서남"};
  if (구역04_서서북.find(element => element==text)) {result="구역04_서서북"};

  if (구역05_북북동.find(element => element==text)) {result="구역05_북북동"};
  if (구역05_동동북.find(element => element==text)) {result="구역05_동동북"};
  if (구역05_동.find(element => element==text)) {result="구역05_동"};
  if (구역05_동동남.find(element => element==text)) {result="구역05_동동남"};
  if (구역05_남동.find(element => element==text)) {result="구역05_남동"};
  if (구역05_서서남.find(element => element==text)) {result="구역05_서서남"};
  if (구역05_서.find(element => element==text)) {result="구역05_서"};

  if (구역06_서서남.find(element => element==text)) {result="구역06_서서남"};
  if (구역06_서.find(element => element==text)) {result="구역06_서"};
  if (구역06_서북.find(element => element==text)) {result="구역06_서북"};

  if (구역07_서남.find(element => element==text)) {result="구역07_서남"};
  if (구역07_서.find(element => element==text)) {result="구역07_서"};
  if (구역07_서서북.find(element => element==text)) {result="구역07_서서북"};

  if (구역08_서서북.find(element => element==text)) {result="구역08_서서북"};
  if (구역08_서서남.find(element => element==text)) {result="구역08_서서남"};

  if (구역09_서서북.find(element => element==text)) {result="구역09_서서북"};
  if (구역09_서서남.find(element => element==text)) {result="구역09_서서남"};
  if (구역09_서남.find(element => element==text)) {result="구역09_서남"};

  if (구역10_서끝.find(element => element==text)) {result="구역10_서끝"};
  if (구역10_서남.find(element => element==text)) {result="구역10_서남"};

  if (result=='') {document.querySelector('#div섬구역2').innerHTML=''} else {document.querySelector('#div섬구역2').innerHTML=result;};
}
function 섬이름검색3() {
  //버튼 누를때만 작동되네?
  document.querySelector('#div섬구역3').innerHTML='';
  var text=document.querySelector('#input섬이름3').value;
  var result='';
  var result='';
  if (구역01_동끝.find(element => element==text)) {result="구역01_동끝"};
  if (구역01_남남동끝.find(element => element==text)) {result="구역01_남남동끝"};
  if (구역01_남.find(element => element==text)) {result="구역01_남"};
  if (구역01_북서.find(element => element==text)) {result="구역01_북서"};

  if (구역02_동북.find(element => element==text)) {result="구역02_동북"};
  if (구역02_남동.find(element => element==text)) {result="구역02_남동"};
  if (구역02_남남서.find(element => element==text)) {result="구역02_남남서"};
  if (구역02_남서.find(element => element==text)) {result="구역02_남서"};
  if (구역02_서끝.find(element => element==text)) {result="구역02_서끝"};
  if (구역02_서북.find(element => element==text)) {result="구역02_서북"};

  if (구역03_북서.find(element => element==text)) {result="구역03_북서"};
  if (구역03_남서.find(element => element==text)) {result="구역03_남서"};
  if (구역03_서서남.find(element => element==text)) {result="구역03_서서남"};

  if (구역04_북북서.find(element => element==text)) {result="구역04_북북서"};
  if (구역04_=북서.find(element => element==text)) {result="구역04_=북서"};
  if (구역04_동.find(element => element==text)) {result="구역04_동"};
  if (구역04_동남.find(element => element==text)) {result="구역04_동남"};
  if (구역04_서남.find(element => element==text)) {result="구역04_서남"};
  if (구역04_서서남.find(element => element==text)) {result="구역04_서서남"};
  if (구역04_서서북.find(element => element==text)) {result="구역04_서서북"};

  if (구역05_북북동.find(element => element==text)) {result="구역05_북북동"};
  if (구역05_동동북.find(element => element==text)) {result="구역05_동동북"};
  if (구역05_동.find(element => element==text)) {result="구역05_동"};
  if (구역05_동동남.find(element => element==text)) {result="구역05_동동남"};
  if (구역05_남동.find(element => element==text)) {result="구역05_남동"};
  if (구역05_서서남.find(element => element==text)) {result="구역05_서서남"};
  if (구역05_서.find(element => element==text)) {result="구역05_서"};

  if (구역06_서서남.find(element => element==text)) {result="구역06_서서남"};
  if (구역06_서.find(element => element==text)) {result="구역06_서"};
  if (구역06_서북.find(element => element==text)) {result="구역06_서북"};

  if (구역07_서남.find(element => element==text)) {result="구역07_서남"};
  if (구역07_서.find(element => element==text)) {result="구역07_서"};
  if (구역07_서서북.find(element => element==text)) {result="구역07_서서북"};

  if (구역08_서서북.find(element => element==text)) {result="구역08_서서북"};
  if (구역08_서서남.find(element => element==text)) {result="구역08_서서남"};

  if (구역09_서서북.find(element => element==text)) {result="구역09_서서북"};
  if (구역09_서서남.find(element => element==text)) {result="구역09_서서남"};
  if (구역09_서남.find(element => element==text)) {result="구역09_서남"};

  if (구역10_서끝.find(element => element==text)) {result="구역10_서끝"};
  if (구역10_서남.find(element => element==text)) {result="구역10_서남"};

  if (result=='') {document.querySelector('#div섬구역3').innerHTML=''} else {document.querySelector('#div섬구역3').innerHTML=result;};
}
function 섬이름검색4() {
  //버튼 누를때만 작동되네?
  document.querySelector('#div섬구역4').innerHTML='';
  var text=document.querySelector('#input섬이름4').value;
  var result='';
  if (구역01_동끝.find(element => element==text)) {result="구역01_동끝"};
  if (구역01_남남동끝.find(element => element==text)) {result="구역01_남남동끝"};
  if (구역01_남.find(element => element==text)) {result="구역01_남"};
  if (구역01_북서.find(element => element==text)) {result="구역01_북서"};

  if (구역02_동북.find(element => element==text)) {result="구역02_동북"};
  if (구역02_남동.find(element => element==text)) {result="구역02_남동"};
  if (구역02_남남서.find(element => element==text)) {result="구역02_남남서"};
  if (구역02_남서.find(element => element==text)) {result="구역02_남서"};
  if (구역02_서끝.find(element => element==text)) {result="구역02_서끝"};
  if (구역02_서북.find(element => element==text)) {result="구역02_서북"};

  if (구역03_북서.find(element => element==text)) {result="구역03_북서"};
  if (구역03_남서.find(element => element==text)) {result="구역03_남서"};
  if (구역03_서서남.find(element => element==text)) {result="구역03_서서남"};

  if (구역04_북북서.find(element => element==text)) {result="구역04_북북서"};
  if (구역04_=북서.find(element => element==text)) {result="구역04_=북서"};
  if (구역04_동.find(element => element==text)) {result="구역04_동"};
  if (구역04_동남.find(element => element==text)) {result="구역04_동남"};
  if (구역04_서남.find(element => element==text)) {result="구역04_서남"};
  if (구역04_서서남.find(element => element==text)) {result="구역04_서서남"};
  if (구역04_서서북.find(element => element==text)) {result="구역04_서서북"};

  if (구역05_북북동.find(element => element==text)) {result="구역05_북북동"};
  if (구역05_동동북.find(element => element==text)) {result="구역05_동동북"};
  if (구역05_동.find(element => element==text)) {result="구역05_동"};
  if (구역05_동동남.find(element => element==text)) {result="구역05_동동남"};
  if (구역05_남동.find(element => element==text)) {result="구역05_남동"};
  if (구역05_서서남.find(element => element==text)) {result="구역05_서서남"};
  if (구역05_서.find(element => element==text)) {result="구역05_서"};

  if (구역06_서서남.find(element => element==text)) {result="구역06_서서남"};
  if (구역06_서.find(element => element==text)) {result="구역06_서"};
  if (구역06_서북.find(element => element==text)) {result="구역06_서북"};

  if (구역07_서남.find(element => element==text)) {result="구역07_서남"};
  if (구역07_서.find(element => element==text)) {result="구역07_서"};
  if (구역07_서서북.find(element => element==text)) {result="구역07_서서북"};

  if (구역08_서서북.find(element => element==text)) {result="구역08_서서북"};
  if (구역08_서서남.find(element => element==text)) {result="구역08_서서남"};

  if (구역09_서서북.find(element => element==text)) {result="구역09_서서북"};
  if (구역09_서서남.find(element => element==text)) {result="구역09_서서남"};
  if (구역09_서남.find(element => element==text)) {result="구역09_서남"};

  if (구역10_서끝.find(element => element==text)) {result="구역10_서끝"};
  if (구역10_서남.find(element => element==text)) {result="구역10_서남"};

  if (result=='') {document.querySelector('#div섬구역4').innerHTML=''} else {document.querySelector('#div섬구역4').innerHTML=result;};
}
function 섬이름검색5() {
  //버튼 누를때만 작동되네?
  document.querySelector('#div섬구역5').innerHTML='';
  var text=document.querySelector('#input섬이름5').value;
  var result='';
  if (구역01_동끝.find(element => element==text)) {result="구역01_동끝"};
  if (구역01_남남동끝.find(element => element==text)) {result="구역01_남남동끝"};
  if (구역01_남.find(element => element==text)) {result="구역01_남"};
  if (구역01_북서.find(element => element==text)) {result="구역01_북서"};

  if (구역02_동북.find(element => element==text)) {result="구역02_동북"};
  if (구역02_남동.find(element => element==text)) {result="구역02_남동"};
  if (구역02_남남서.find(element => element==text)) {result="구역02_남남서"};
  if (구역02_남서.find(element => element==text)) {result="구역02_남서"};
  if (구역02_서끝.find(element => element==text)) {result="구역02_서끝"};
  if (구역02_서북.find(element => element==text)) {result="구역02_서북"};

  if (구역03_북서.find(element => element==text)) {result="구역03_북서"};
  if (구역03_남서.find(element => element==text)) {result="구역03_남서"};
  if (구역03_서서남.find(element => element==text)) {result="구역03_서서남"};

  if (구역04_북북서.find(element => element==text)) {result="구역04_북북서"};
  if (구역04_=북서.find(element => element==text)) {result="구역04_=북서"};
  if (구역04_동.find(element => element==text)) {result="구역04_동"};
  if (구역04_동남.find(element => element==text)) {result="구역04_동남"};
  if (구역04_서남.find(element => element==text)) {result="구역04_서남"};
  if (구역04_서서남.find(element => element==text)) {result="구역04_서서남"};
  if (구역04_서서북.find(element => element==text)) {result="구역04_서서북"};

  if (구역05_북북동.find(element => element==text)) {result="구역05_북북동"};
  if (구역05_동동북.find(element => element==text)) {result="구역05_동동북"};
  if (구역05_동.find(element => element==text)) {result="구역05_동"};
  if (구역05_동동남.find(element => element==text)) {result="구역05_동동남"};
  if (구역05_남동.find(element => element==text)) {result="구역05_남동"};
  if (구역05_서서남.find(element => element==text)) {result="구역05_서서남"};
  if (구역05_서.find(element => element==text)) {result="구역05_서"};

  if (구역06_서서남.find(element => element==text)) {result="구역06_서서남"};
  if (구역06_서.find(element => element==text)) {result="구역06_서"};
  if (구역06_서북.find(element => element==text)) {result="구역06_서북"};

  if (구역07_서남.find(element => element==text)) {result="구역07_서남"};
  if (구역07_서.find(element => element==text)) {result="구역07_서"};
  if (구역07_서서북.find(element => element==text)) {result="구역07_서서북"};

  if (구역08_서서북.find(element => element==text)) {result="구역08_서서북"};
  if (구역08_서서남.find(element => element==text)) {result="구역08_서서남"};

  if (구역09_서서북.find(element => element==text)) {result="구역09_서서북"};
  if (구역09_서서남.find(element => element==text)) {result="구역09_서서남"};
  if (구역09_서남.find(element => element==text)) {result="구역09_서남"};

  if (구역10_서끝.find(element => element==text)) {result="구역10_서끝"};
  if (구역10_서남.find(element => element==text)) {result="구역10_서남"};

  if (result=='') {document.querySelector('#div섬구역5').innerHTML=''} else {document.querySelector('#div섬구역5').innerHTML=result;};
}

function 해양죄표와섬이름() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext("2d");
  var x=0;
  ctx.font = "Arial bold 12px Arial, sans-serif"; //italic Arial서체 없을 경우, sans-serif 적용
  ctx.fillStyle = 'yellow';
  ctx.textAlign = 'center';
  ctx.strokeStyle='yellow';
  ctx.lineWidth='1';

  for (var i=1; i<16; i++) {
    x=x+100;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 10);
    ctx.stroke();
    if (i==5 || i==10 || i==15) {
      ctx.fillText(x, x, 20);
    }
    ctx.beginPath();
    ctx.moveTo(0, x);
    ctx.lineTo(10, x);
    ctx.stroke();
    if (i==5 || i==10 || i==15) {
      ctx.fillText(x, 20, x+3);
    }
  }
  //섬이름
  ctx.fillText('에프데 룬', 743, 625);
  ctx.fillText('베이루와', 840, 625);
  ctx.fillText('파라타마', 790, 580);
  ctx.fillText('웨이타', 770, 515);
  ctx.fillText('바레미', 745, 480);
  ctx.fillText('아지르', 825, 430);
  ctx.fillText('알나하', 780, 390);
  ctx.fillText('라시드', 822, 330);
  ctx.fillText('칸베라', 830, 530);
  ctx.fillText('아라킬', 850, 555);
  ctx.fillText('타라무라', 900, 600);
  ctx.fillText('오스트라', 915, 570);
  ctx.fillText('델링하트', 990, 580);
  ctx.fillText('필바라', 1050, 610);
  ctx.fillText('소코타', 1150, 655);
  ctx.fillText('리에드', 1225, 610);
  ctx.fillText('에스파', 1260, 540);
  ctx.fillText('티그리스', 1240, 510);
  ctx.fillText('시르나', 1290, 510);
  ctx.fillText('오리샤', 1260, 370);
  ctx.fillText('보아', 1260, 432);
  ctx.fillText('할마드', 1433, 415);
  ctx.fillText('카슈마', 1460, 380);
  ctx.fillText('푸자라', 1057, 480);
  ctx.fillText('샤샤', 1062, 335);
  ctx.fillText('로즈반', 1130, 325);
  ctx.fillText('포르타넨', 1100, 260);
  ctx.fillText('틴베라', 1000, 180);
  ctx.fillText('레라오', 1070, 180);

  ctx.fillText('타슈', 580, 290);
  ctx.fillText('툴루', 625, 425);
  ctx.fillText('오르프스', 665, 425);
  ctx.fillText('발베쥬', 615, 500);
  ctx.fillText('마를레느', 660, 500);
  ctx.fillText('에베토', 640, 560);
  ctx.fillText('두흐', 612, 575);
  ctx.fillText('루비아노', 680, 605);
  ctx.fillText('마리베노', 700, 550);
  ctx.fillText('앙쥬', 570, 540);
  ctx.fillText('인버넨', 580, 460);
  ctx.fillText('마르카', 505, 530);
  ctx.fillText('나르보', 500, 470);
  ctx.fillText('루루브', 465, 545);
  ctx.fillText('리스즈', 440, 505);
  ctx.fillText('스타렌', 422, 580);
  ctx.fillText('알브레서', 332, 620);
  ctx.fillText('바라테르', 335, 650);
  ctx.fillText('란디스', 230, 680);
  ctx.fillText('세르카', 230, 705);
  ctx.fillText('던데', 255, 610);
  ctx.fillText('에버딘', 290, 600);
  ctx.fillText('네트넘', 210, 590);
  ctx.fillText('오벤', 250, 550);
  ctx.fillText('데이튼', 175, 550);
  ctx.fillText('진버레이', 180, 650);
  ctx.fillText('테야말', 73, 750);
  ctx.fillText('라메다', 95, 650);
  ctx.fillText('시오닐', 117, 710);
  ctx.fillText('모드릭', 150, 715);
  ctx.fillText('바에자', 190, 730);
  ctx.fillText('테스테', 194, 440);
  ctx.fillText('파딕스', 300, 394);
  ctx.fillText('알마이', 230, 390);
  ctx.fillText('쿠이트제도', 300, 337);
  ctx.fillText('아리타', 430, 400);
  ctx.fillText('', 840, 600);




}
//임시실행
if (1=="임시") {
  document.querySelector('#선택문서셑팅하는곳').innerHTML+=document.querySelector('#S1_해역사진').outerHTML;
  document.querySelector('#선택문서셑팅하는곳').classList.remove('d-none');
  document.querySelector('#선택문서셑팅하는곳').classList.remove('d-none');
  document.querySelector('#main사이드').classList.add('d-none');
  해양죄표와섬이름()
}



function 임시() {
// 1. canvas 엘리먼트를 취득한다.
const canvas = document.getElementById('myCanvas');

// 2. 2d모드의 그리기 객체를 취득한다. => 이 객체를 통해 canvas에 그림을 그릴 수 있다.
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height); //초기화
해양죄표와섬이름()
// 3. 새선 그리기 설정
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(600, 350);
ctx.lineTo(600, 500);
ctx.lineTo(350, 500);
ctx.lineTo(350, 350);
ctx.strokeStyle='yellow';
ctx.lineWidth='1';
ctx.setLineDash([2])
ctx.stroke();
}
var 리스너용canvas모든버튼들=document.querySelector('#canvas모든버튼들');
var black리스너용=document.querySelector('#black리스너용');
function canvas텍스트보기(e) {
  document.querySelector('#embed부분').src=e.target.title;
  document.querySelector('#canvas텍스트').style.display='block';
} 
function 문서연결또는하위메뉴(e) {
  //하위메뉴 타이틀인경우 하위메뉴 나오게하고 끝. 문서가 연결된 경우 문서연결만하고 끝 / e.target.title 자체로는 에러가 안남 length=0
  //querySeloctor #만 있으면 에러, 뭐라도 있으면 에러는 아님 undefined
  var 타이틀;
  if (e.target.title.length==0) { 
    타이틀='_' 
  } else {
    타이틀=e.target.title;
  }
//1.class 파일연결 ==> 타이틀과 같은 이름의 element있으면 #선택문서셑팅하는곳 으로 가지고오기 ==> #선택문서셑팅하는곳 class d-none remove : return;    
  if (e.target.classList.contains('파일연결') && document.querySelector('#' + 타이틀)) {
    document.querySelector('#선택문서셑팅하는곳').innerHTML=document.querySelector('#' + 타이틀).outerHTML;
    document.querySelector('#선택문서셑팅하는곳').classList.remove('d-none');
    if (타이틀=='S1_해역사진') {계산_무게()};
    return;
  }
}
리스너용canvas모든버튼들.addEventListener('click',canvas텍스트보기);
black리스너용.addEventListener('click',문서연결또는하위메뉴);