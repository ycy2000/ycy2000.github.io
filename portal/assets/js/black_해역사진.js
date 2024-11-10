// document.querySelector('#적재가능일반무게').value=document.querySelector('#점진무게').title;
document.querySelector('#적재가능일반무게').value = 26100;//새로고침시 무게 용맹무게??
function 교섭력계산() {
  var 일회교섭력 = Number(document.querySelector('#일회교섭력').value);
  if (isNaN(일회교섭력)) { 일회교섭력 = 0 }
  //곱하는값은 인풋 오른쪽 형제 
  document.querySelector('#계산_재갱1회당').value = (일회교섭력 * (4.30022)).toFixed(0);

  document.querySelector('#계산_하코저가').value = 20698;
  document.querySelector('#계산_더코').value = 25614;
  document.querySelector('#계산_하코').value = 30790;
  document.querySelector('#계산_대양저가').value = 32734;
  document.querySelector('#계산_대양고가').value = 40917;

  document.querySelector('#계산_하코4종').value = Number(document.querySelector('#계산_하코저가').value * 2)
    + Number(document.querySelector('#계산_더코').value) + Number(document.querySelector('#계산_하코').value);
  document.querySelector('#계산_대양8종').value = document.querySelector('#계산_대양저가').value * 3 + document.querySelector('#계산_대양고가').value * 5;
  document.querySelector('#계산_하코와대양합').value = Number(document.querySelector('#계산_하코4종').value) + Number(document.querySelector('#계산_대양8종').value);
  document.querySelector('#계산_사단까주').value = 15226;
  document.querySelector('#계산_사단까주8개').value = (document.querySelector('#계산_사단까주').value * 8).toFixed(0);

  document.querySelector('#계산_차감후교섭의일갱개수').value = (Number(document.querySelector('#차감후교섭력').value) / 일회교섭력).toFixed(3);

  if (isNaN(document.querySelectorAll('#남은_차감후_교섭력 input')[0].value)) { document.querySelectorAll('#남은_차감후_교섭력 input')[0].value = 0; }
  if (isNaN(document.querySelectorAll('#남은_차감후_교섭력 input')[1].value)) { document.querySelectorAll('#남은_차감후_교섭력 input')[1].value = 0; }
  var 보유교섭력_요소 = document.querySelectorAll('#남은_차감후_교섭력 input')[0];
  var 남은교섭력_요소 = document.querySelectorAll('#남은_차감후_교섭력 input')[1];

  var 차감할1회교섭력_12개 = document.querySelectorAll('#차감input들 input');
  var 차감할횟수_12개 = document.querySelectorAll('#차감input들 button');

  var 차감할교섭력 = 0;
  var 곱할값 = 0;

  for (var i = 0; i < 차감할1회교섭력_12개.length; i++) {
    if (isNaN(차감할1회교섭력_12개[i].value * 1)) {
      곱할값 = 0;
    } else {
      곱할값 = 차감할1회교섭력_12개[i].value * 1;
    }

    차감할교섭력 += Number(차감할횟수_12개[i].innerHTML) * 곱할값;
  }
  남은교섭력_요소.value = 보유교섭력_요소.value - 차감할교섭력;
  document.querySelector('#나눈값').value = (Number(보유교섭력_요소.value) / Number(document.querySelector('#일회교섭력').value)).toFixed(1);
  document.querySelector('#계산_차감후교섭의일갱개수').value = (Number(document.querySelector('#차감후교섭력').value) / Number(document.querySelector('#일회교섭력').value)).toFixed(3);
}
교섭력계산();
//캔버스가 있다면 캔버스 head에 카테고리 제목들을 자동 셑팅해주는 코드를 만들어야함
if (document.querySelector('#캔버스header')) {
  var 카테고리버튼생성 = '';//<button class="카테고리실행" title="참고">참고</button> 
  var id_캔버스관련자료none_안_class_canvas카테고리 = document.querySelectorAll('#캔버스관련자료none .canvas카테고리');
  for (var i = 0; i < id_캔버스관련자료none_안_class_canvas카테고리.length; i++) {
    카테고리버튼생성 += '<button class="카테고리실행" style="margin-right:-2px" title="' + id_캔버스관련자료none_안_class_canvas카테고리[i].id + '">' + id_캔버스관련자료none_안_class_canvas카테고리[i].id + '</button>';
  }
  document.querySelector('#캔버스header').innerHTML = document.querySelector('#캔버스header').innerHTML + 카테고리버튼생성;
}

var 메모아이디;
var 메모요소;
var 보기셑팅유형 = '해역사진초기값';
function 보기셑팅() {
  if (보기셑팅유형 == '해역사진초기값') {
    document.querySelector('#리스너용해역사진관련').classList.remove('d-none');
    document.querySelector('#해역_물품단계_고정').classList.remove('d-none');
    document.querySelector('#해역_물품단계_대체부분').classList.add('d-none');
    document.querySelector('#main과우측').classList.add('d-none');
    document.querySelector('#전체대체').classList.add('d-none');
  }
  if (보기셑팅유형 == '코딩등메모장text파일') {
    document.querySelector('#리스너용해역사진관련').classList.add('d-none');
    document.querySelector('#main과우측').classList.add('d-none');
    document.querySelector('#전체대체').classList.remove('d-none');
  }
  if (보기셑팅유형 == 'canvas_div') {
    document.querySelector('#리스너용해역사진관련').classList.add('d-none');
    document.querySelector('#main과우측').classList.add('d-none');
    document.querySelector('#전체대체').classList.remove('d-none');
  }
  if (보기셑팅유형 == 'main과우측') {
    document.querySelector('#리스너용해역사진관련').classList.add('d-none');
    document.querySelector('#main과우측').classList.remove('d-none');
    document.querySelector('#전체대체').classList.add('d-none');
  }

}
보기셑팅()
//캔버스body초기화
var 셑팅_캔버스바디 = document.querySelector('#캔버스바디');
셑팅_캔버스바디.innerHTML = '';
for (var i = 0; i < document.querySelectorAll('.카테고리실행').length; i++) {
  document.querySelectorAll('.카테고리실행')[i].classList.remove('현재카테고리');
}
셑팅_캔버스바디.innerHTML = document.querySelector('#참고').outerHTML;
document.querySelector('[title="참고"]').classList.add('현재카테고리');
//해역위치와 물품단계
if (document.querySelector('#해역_물품단계')) {
  for (var i = 0; i < document.querySelectorAll('input').length; i++) {
    document.querySelectorAll('input')[i].autocomplete = "off";
  }
  var 단계1물품 = ['앵두나무 씨앗 주머니', '황금빛 모래', '쫄깃한 전어 회',
    '해상 전투 식량', '해적의 화약', '로아 꽃 씨앗 주머니', '알수없는 고대 벽화', '뗏목 조각품',
    '거대한 물고기 뼈', '비옥한 흙', '갈퀴 꽃 씨앗 주머니', '고대 항아리 파편', '때 탄 갈매기 조각상', '말린 푸른 장미']
  var 단계2물품 = ['섬마을 도시락', '최고급 굴 상자', '넓찍한 돌판', '정제된 식수', '오색 구슬', '해적선 돛대', '괴생물 촉수',
    '나르보산 해삼', '소라게 껍질 장식', '해양 구조품', '크론성 금주화', '해적 금주화', '성게 가시', '균형잡힌 돌탑']
  var 단계3물품 = ['롭스타 그물', '족제비 가죽 외투', '해골 장식 찻잔', '해적단의 보급상자', '찢어진 해적 보물지도', '낡은 지령서',
    '해골무늬 카페트', '반달 조리용 칼', '정찰병 망원경', '오래된 모래 시계', '푸른 야초 더미', '희귀 약초 무더기', '걸쭉한 괴생물 혈액', '종유석 파편']
  var 단계4물품 = ['뱃사공의 수련서', '청동 촛대', '해상 기사단의 창', '훔친 해적단 단도', '조개 껍질 장식', '청록빛 소금덩어리', '해적의 열쇠',
    '자수정 파편', '해상 기사단의 투구', '만병통치약', '목 잘린 용 조각상', '굳어진 용암 액', '오색빛 실타래', '금주화가 담긴 낡은 상자']
  var 단계5물품 = ['젊음을 담은 비약', '고대인을 형상화한 초상화', '102년 묵은 황금초', '조각상의 눈물', '푸른빛 석영', '팔각 문양 보관함', '정체불명의 암석',
    '황금빛 물고기 비늘', '팔랑나비 박제품', '37년된 약주', '흰색 애벌레 박제품', '고급 문양의 옷감', '빛바랜 황금용 조각상', '최고급 황금 촛대']

  var 구역01_동 = ['푸자라'];
  var 구역01_동남45도 = ['델링하트'];
  var 구역01_남 = ['오스트라', '타라무라'];
  var 구역01_서남40도 = ['칸베라', '아라킬'];
  var 구역01_서북30도 = ['아지르'];

  var 구역02_동북45도 = ['샤샤'];
  var 구역02_동남45도 = ['필바라'];
  var 구역02_서남60도 = ['베이루와'];
  var 구역02_서남45도 = ['파라타마'];
  var 구역02_서남20도 = ['웨이타'];
  var 구역02_서 = ['바레미'];
  var 구역02_서북30도 = ['알나하'];
  var 구역02_서북50도 = ['라시드'];

  var 구역03_동북40도 = ['로즈반']; //결과에 북동으로
  var 구역03_서남45도 = ['에프데룬'];
  var 구역03_서남30도 = ['마리베노'];

  var 구역04_동북80도 = ['틴베라'];
  var 구역04_동북50도 = ['포르타넨'];
  var 구역04_동남10도 = ['티그리스'];
  var 구역04_동남30도 = ['리에드'];
  var 구역04_동남45도 = ['소코타'];
  var 구역04_서남40도 = ['루비아노'];
  var 구역04_서남30도 = ['에베토'];
  var 구역04_서남5도 = ['발베쥬', '마를레느'];
  var 구역04_서북15도 = ['툴루', '오르프스'];

  var 구역05_동북70도 = ['레라오'];
  var 구역05_동북15도 = ['보아'];
  var 구역05_동북30도 = ['오리샤'];
  var 구역05_동남10도 = ['시르나', '에스파'];
  var 구역05_동남30도 = ['리에드'];
  var 구역05_서남30도 = ['두흐'];
  var 구역05_서남15도 = ['앙쥬'];
  var 구역05_서 = ['인버넨'];

  var 구역06_서남20도 = ['마르카'];
  var 구역06_서 = ['나르보'];
  var 구역06_서북35도 = ['타슈'];

  var 구역07_서남5도 = ['리스즈'];
  var 구역07_서남20도 = ['루루브'];
  var 구역07_서남30도 = ['스타렌'];
  var 구역07_서북15도 = ['아리타'];

  var 구역08_서북25도 = ['쿠이트'];
  var 구역08_서북15도 = ['파딕스'];
  var 구역08_서남30도 = ['알브레서', '바라테르'];

  var 구역09_서북10도 = ['테스테'];
  var 구역09_서북20도 = ['알마이'];
  var 구역09_서남15도 = ['데이튼', '오벤', '네트넘'];
  var 구역09_서남25도 = ['던데', '에버딘', '진버레이'];
  var 구역09_서남35도 = ['란디스', '세르카'];

  var 구역10_서남25도 = ['라메다'];
  var 구역10_서남35도 = ['시오닐', '모드릭', '바에자', '테야말'];

  var 일반물품섬 = '_바에자_세르카_란디스_바라테르_스타렌_두흐_에베토_마리베노_에프데룬_베이루와_파라타마_';
  var 단계1섬 = '_쿠이트_테스테_타슈_아리타_라시드_포르타넨_보아_에스파_소코타_틴베라_레라오_';
  var 단계2섬 = '_모드릭_진버레이_던데_알브레서_루루브_앙쥬_마를레느_웨이타_칸베라_아라킬_오스트라_타라무라_';
  var 단계3섬 = '_데이튼_테야말_리스즈_툴루_알나하_샤샤_로즈반_오리샤_티그리스_시르나_리에드_'
  var 단계4섬 = '_오벤_파딕스_라메다_시오닐_나르보_오르프스_발베쥬_바레미_아지르_푸자라_필바라_';
  var 재료교환섬 = '_네트넘_에버딘_마르카_인버넨_델링하트_';

  //재료보유수 기록 참조하여 부위별 정보의 보유수에 뿌리기
  var 보유수 = document.querySelectorAll('#파템재료_일퀘개수 .노랑');
  //보유수[0]심해의 눈물 
  //보유수[1]화려한 진주 결정
  //보유수[3]화려한 암염 주괴
  //보유수[4]짙은 파도빛이 감도는 규격 각목
  //보유수[5]달의 핏줄이 새겨진 아마포
  document.querySelector('#파템_일반재료1 > div:nth-of-type(2) > button:nth-of-type(2)').innerHTML = 보유수[0].innerHTML;
  document.querySelector('#파템_일반재료1 > div:nth-of-type(3) > button:nth-of-type(2)').innerHTML = 보유수[1].innerHTML;
  document.querySelector('#파템_일반재료1 > div:nth-of-type(4) > button:nth-of-type(2)').innerHTML = 보유수[3].innerHTML;
  document.querySelector('#파템_일반재료1 > div:nth-of-type(5) > button:nth-of-type(2)').innerHTML = 보유수[4].innerHTML;
  document.querySelector('#파템_일반재료1 > div:nth-of-type(6) > button:nth-of-type(2)').innerHTML = 보유수[5].innerHTML;

  //보유수[2]콕스 전투
  //보유수[8]달의비늘 합판
  //보유수[14]순수한 암초
  //보유수[11]파도빛 각목
  document.querySelector('#파템_일반재료1 > div:nth-of-type(8) > button:nth-of-type(2)').innerHTML = 보유수[2].innerHTML;
  document.querySelector('#파템_일반재료1 > div:nth-of-type(9) > button:nth-of-type(2)').innerHTML = 보유수[8].innerHTML;
  document.querySelector('#파템_일반재료1 > div:nth-of-type(10) > button:nth-of-type(2)').innerHTML = 보유수[14].innerHTML;
  document.querySelector('#파템_일반재료1 > div:nth-of-type(11) > button:nth-of-type(2)').innerHTML = 보유수[11].innerHTML;

  //보유수[6]홍조 단괴
  //보유수[13]심해초 줄기
  //보유수[12]대양의 현철
  //보유수[16]강화된 섬나무
  document.querySelector('#파템_일반재료1 > div:nth-of-type(13) > button:nth-of-type(2)').innerHTML = 보유수[6].innerHTML;
  document.querySelector('#파템_일반재료1 > div:nth-of-type(14) > button:nth-of-type(2)').innerHTML = 보유수[13].innerHTML;
  document.querySelector('#파템_일반재료1 > div:nth-of-type(15) > button:nth-of-type(2)').innerHTML = 보유수[12].innerHTML;
  document.querySelector('#파템_일반재료1 > div:nth-of-type(16) > button:nth-of-type(2)').innerHTML = 보유수[16].innerHTML;

  //=====================2
  //보유수[2]콕스 전투
  //보유수[8]달의비늘 합판
  //보유수[10]순수한 진주
  //보유수[15] 콕스 하급
  document.querySelector('#파템_일반재료2 > div:nth-of-type(8) > button:nth-of-type(2)').innerHTML = 보유수[2].innerHTML;
  document.querySelector('#파템_일반재료2 > div:nth-of-type(9) > button:nth-of-type(2)').innerHTML = 보유수[8].innerHTML;
  document.querySelector('#파템_일반재료2 > div:nth-of-type(10) > button:nth-of-type(2)').innerHTML = 보유수[10].innerHTML;
  document.querySelector('#파템_일반재료2 > div:nth-of-type(11) > button:nth-of-type(2)').innerHTML = 보유수[15].innerHTML;

  //보유수[6]홍조 단괴
  //보유수[13]심해초 줄기
  //보유수[9]콕스 상급
  //보유수[7] 빛나는 코발트
  document.querySelector('#파템_일반재료2 > div:nth-of-type(13) > button:nth-of-type(2)').innerHTML = 보유수[6].innerHTML;
  document.querySelector('#파템_일반재료2 > div:nth-of-type(14) > button:nth-of-type(2)').innerHTML = 보유수[13].innerHTML;
  document.querySelector('#파템_일반재료2 > div:nth-of-type(15) > button:nth-of-type(2)').innerHTML = 보유수[9].innerHTML;
  document.querySelector('#파템_일반재료2 > div:nth-of-type(16) > button:nth-of-type(2)').innerHTML = 보유수[7].innerHTML;
  // id="파템재료_일퀘개수" : 에페리아 사진 참조하여 아이콘 따기, 
  var 초기가로 = -2; //초기값
  var 초기세로 = -2; //초기값
  var 가로이동 = 0;
  var 세로이동 = 0;
  var 속성값;
  var position조절할버튼들 = document.querySelectorAll('#파템재료_일퀘개수 .에페리아창고사진일부분');
  //Math.floor( 13 / 5); console.log(q) // 2
  var 아이콘순번 = 0; //17가지, 가로9칸, 첫째칸=1, 세로첫째칸=1 : 세로1, 가로4 
  var 가로순번;//9번째 나머지가 0인데 9로 하기 위함


  //button.setAttribute("name", "helloButton");background-position: -2px -2px;

  for (var i = 0; i < position조절할버튼들.length; i++) {
    if (i == 0) { 아이콘순번 = 1 };//심해의 눈물
    if (i == 1) { 아이콘순번 += 1 };//화려한 진주 결정
    if (i == 2) { 아이콘순번 += 1 };//
    if (i == 3) { 아이콘순번 += 1 };//
    if (i == 4) { 아이콘순번 += 1 };//
    if (i == 5) { 아이콘순번 += 1 };//
    if (i == 6) { 아이콘순번 += 1 };//
    if (i == 7) { 아이콘순번 += 1 };//빛나는 코발트
    if (i == 8) { 아이콘순번 += 1 };//달의 비늘이
    if (i == 9) { 아이콘순번 += 1 };//콕스 상급
    if (i == 10) { 아이콘순번 += 1 };//
    if (i == 11) { 아이콘순번 += 1 };//
    if (i == 12) { 아이콘순번 += 1 };//대양의 견고한 현철
    if (i == 13) { 아이콘순번 += 1 };//
    if (i == 14) { 아이콘순번 += 1 };//Math.floor( 아이콘순번 / 9)*43*-1;
    if (i == 15) { 아이콘순번 += 1 };//(parseInt( 아이콘순번 / 9)-1)*43*-1;
    if (i == 16) { 아이콘순번 += 1 };//강화된 섬나무 합판
    if ((아이콘순번 % 9) == 0) { 가로순번 = 9 } else { 가로순번 = 아이콘순번 % 9 }
    가로이동 = Number(초기가로) + (가로순번 - 1) * 38 * -1;
    세로이동 = Number(초기가로) + Math.floor((아이콘순번 - 1) / 9) * 38 * -1; //1-9는 몫이 0,
    속성값 = 가로이동 + 'px' + ' ' + 세로이동 + 'px';
    // position조절할버튼들[i].setAttribute("backgroundPosition", 속성값);
    position조절할버튼들[i].style.backgroundPosition = 속성값;
  }

  // position조절할버튼들[0].setAttribute("background-position", 위치문자열);//심해의 눈물 
  // position조절할버튼들[1].setAttribute("background-position", 위치문자열);//화려한 진주 결정
  // position조절할버튼들[2].setAttribute("background-position", 위치문자열);//콕스 전투
  // position조절할버튼들[3].setAttribute("background-position", 위치문자열);//화려한 암염 주괴
  // position조절할버튼들[4].setAttribute("background-position", 위치문자열);//짙은 파도빛이 감도는 규격 각목
  // position조절할버튼들[5].setAttribute("background-position", 위치문자열);//달의 핏줄이 새겨진 아마포
  // position조절할버튼들[6].setAttribute("background-position", 위치문자열);//홍조 단괴
  // position조절할버튼들[7].setAttribute("background-position", 위치문자열);//빛나는 코발트
  // position조절할버튼들[8].setAttribute("background-position", 위치문자열);//달의비늘 합판
  // position조절할버튼들[9].setAttribute("background-position", 위치문자열);//콕스 상급
  // position조절할버튼들[10].setAttribute("background-position", 위치문자열);//순수한 진주
  // position조절할버튼들[11].setAttribute("background-position", 위치문자열);//파도빛 각목
  // position조절할버튼들[12].setAttribute("background-position", 위치문자열);//대양의 현철
  // position조절할버튼들[13].setAttribute("background-position", 위치문자열);//심해초 줄기
  // position조절할버튼들[14].setAttribute("background-position", 위치문자열);//순수한 암초
  // position조절할버튼들[15].setAttribute("background-position", 위치문자열);//콕스 하급
  // position조절할버튼들[16].setAttribute("background-position", 위치문자열);//강화된 섬나무






  //백만 나누기 일회교섭력
  document.querySelector('#나눈값').value = (Number(document.querySelector('#남은교섭력').value) / Number(document.querySelector('#일회교섭력').value)).toFixed(1);
}
function 계산_배와장비무게() {
  //일반쪽 계산
  var 적재가능일반무게 = document.querySelector('#적재가능일반무게').value; //html에 기록
  document.querySelector('#적재가능과적무게').value = 적재가능일반무게 * 1.7;
  var 선원과장비무게일반쪽 = 10; //장비무게,해원석
  선원과장비무게일반쪽 += 200 * Number(document.querySelector('#선원_순수+button').innerHTML);
  선원과장비무게일반쪽 += 300 * Number(document.querySelector('#선원_현실+button').innerHTML);
  선원과장비무게일반쪽 += 300 * Number(document.querySelector('#선원_자신+button').innerHTML);
  document.querySelector('#선원과장비무게일반쪽').value = 선원과장비무게일반쪽;
  var 선실현황 = 0;
  선실현황 += 10 * Number(document.querySelector('#선원_순수+button').innerHTML);
  선실현황 += 10 * Number(document.querySelector('#선원_현실+button').innerHTML);
  선실현황 += 5 * Number(document.querySelector('#선원_자신+button').innerHTML);
  document.querySelector('#선실').innerHTML = 선실현황;
  var 여유무게일반쪽 = 적재가능일반무게 - 선원과장비무게일반쪽;
  document.querySelector('#일반여유무게').value = 여유무게일반쪽;
  document.querySelector('#일반계산_800').value = (여유무게일반쪽 / 800).toFixed(1);
  document.querySelector('#일반계산_900').value = (여유무게일반쪽 / 900).toFixed(1);
  document.querySelector('#일반계산_천').value = (여유무게일반쪽 / 1000).toFixed(1);
  //과적쪽 계산
  document.querySelector('#선원과장비무게과적쪽').value = 선원과장비무게일반쪽;
  var 여유무게과적쪽 = 적재가능일반무게 * 1.7 - 선원과장비무게일반쪽;
  document.querySelector('#과적여유무게').value = 여유무게과적쪽;
  document.querySelector('#과적계산_800').value = (여유무게과적쪽 / 800).toFixed(1);
  document.querySelector('#과적계산_900').value = (여유무게과적쪽 / 900).toFixed(1);
  document.querySelector('#과적계산_천').value = (여유무게과적쪽 / 1000).toFixed(1);
  //나의무게쪽 계산
  var 나의무게 = 0;
  document.querySelector('#선원과장비무게나의무게쪽').value = 선원과장비무게일반쪽;
  나의무게 += Number(document.querySelector('#선원과장비무게나의무게쪽').value);
  나의무게 += Number(document.querySelector('#나의무게계산_800').value) * 800;
  나의무게 += Number(document.querySelector('#나의무게계산_900').value) * 900;
  나의무게 += Number(document.querySelector('#나의무게계산_천').value) * 1000;
  document.querySelector('#나의무게input').value = 나의무게;
}
//배장비무게, 초기화때 return 쓰면 안되고, 초기화때는 배무게와 선원무게만으로 계산한다
if (document.querySelector('#해역_물품단계')) {
  계산_배와장비무게()
}
function navbar_임시함수_click() {
  let str = document.querySelector('#JS_search_find_match사용법').innerText;
  console.log(str.length);
  console.log(str.match('검색할버튼클래스들'));


}



var 리스너_main과우측 = document.querySelector('#main과우측');
var 리스너_해역사진관련 = document.querySelector('#리스너용해역사진관련');
var 리스너_header = document.querySelector('header');
var 리스너_캔버스전체 = document.querySelector('#캔버스전체');
function header_클릭시(e) {
  console.log('header_클릭시(e)');
  if (e.target.id == '해역사진보기') {
    보기셑팅유형 = '해역사진초기값'
    console.log('보기셑팅유형 : ' + 보기셑팅유형);
    보기셑팅()
  }
  if (e.target.title == 'main과우측') {
    보기셑팅유형 = 'main과우측'
    console.log('보기셑팅유형 : ' + 보기셑팅유형);
    보기셑팅()
  }
}
function 리스너_해역사진관련_dblclick시(e) {
  //교섭력기록된곳 더블클릭시 오른쪽 수량버튼 1로 변하고 계산다시
  console.log('리스너_해역사진관련_dblclick시(e)');
  if (e.target.parentNode.parentNode.id == '교섭력계산' && e.target.nodeName == 'INPUT' && e.target.nextElementSibling.nodeName == 'BUTTON') {
    e.target.nextElementSibling.innerHTML = 1;
    교섭력계산()
  }
}
function 무게와교섭임시적용() {
  var text = document.querySelector('#무게와교섭임시적용input').value;
  if (text.substring(0, 2) != '점진' && text.substring(0, 2) != '용맹' && text.substring(0, 2) != '교섭') {
    alert('점진:21500:용맹:19500 형식으로 변수를 바꿀수 있다(split씀).\n첫글자는 "점진","용맹","교섭"으로 시작되어야함.\n시작글자 추가될 수 있음'
      + '\n:이후 숫자이어야한다.');
    return;
  }
  var 스플릿 = text.split(':');//작성중
  if (스플릿.length == 2 && 스플릿[1] > 0) { console.log('스플릿.length==2 && 스플릿[1]>0') }
  for (var i = 0; i < 스플릿.length; i += 2) {
    if (스플릿[i] == '점진' && 스플릿[i + 1] > 0) { document.querySelector('#적재가능일반무게').value = 스플릿[i + 1]; 계산_배와장비무게(); }
    if (스플릿[i] == '용맹' && 스플릿[i + 1] > 0) { document.querySelector('#적재가능일반무게').value = 스플릿[i + 1]; 계산_배와장비무게(); }
    if (스플릿[i] == '교섭' && 스플릿[i + 1] > 0) { document.querySelector('#일회교섭력').value = 스플릿[i + 1]; 교섭력계산(); }


  }
}
function 리스너_해역사진관련_change시(e) {
  console.log('리스너_해역사진관련_change시(e)');
  //일회교섭력 변경시 재갱회당소모값, 하코번4종, 대양6종 소모값 계산
  if (e.target.id == '일회교섭력으로') {

  }
  var text = e.target.value;//input
  var result = '';
  //교섭력오른쪽의 버튼클릭시 값 +1, && e.target.nextElementSibling.nodeName=='BUTTON' 제거, 남은교섭력 change시에 작동안해서
  if ((e.target.parentNode.parentNode.id == '교섭력계산' && e.target.nodeName == 'INPUT') || e.target.id == '일회교섭력') {
    교섭력계산()
  }
  //섬이름검색
  if (1 == 1) {
    if (e.target.parentNode.parentNode.id == '리스너용섬이름검색' && e.target.nodeName == 'INPUT' && e.target.parentNode.nextElementSibling.nodeName == 'DIV') {
      e.target.parentNode.nextElementSibling.innerHTML = '';//form결과를 나타내는 형제 div
      // var text=e.target.value;
      // var result='';
      if (구역01_동.find(element => element == text)) { result = "구역01_동" };
      if (구역01_동남45도.find(element => element == text)) { result = "구역01_동남45도" };
      if (구역01_남.find(element => element == text)) { result = "구역01_남" };
      if (구역01_서남40도.find(element => element == text)) { result = "구역01_서남40도" };
      if (구역01_서북30도.find(element => element == text)) { result = "구역01_서북30도" };

      if (구역02_동북45도.find(element => element == text)) { result = "구역02_동북45도" };
      if (구역02_동남45도.find(element => element == text)) { result = "구역02_동남45도" };
      if (구역02_서남60도.find(element => element == text)) { result = "구역02_서남60도" };
      if (구역02_서남45도.find(element => element == text)) { result = "구역02_서남45도" };
      if (구역02_서남20도.find(element => element == text)) { result = "구역02_서남20도" };
      if (구역02_서.find(element => element == text)) { result = "구역02_서" };
      if (구역02_서북30도.find(element => element == text)) { result = "구역02_서북30도" };
      if (구역02_서북50도.find(element => element == text)) { result = "구역02_서북50도" };

      if (구역03_동북40도.find(element => element == text)) { result = "구역03_동북40도" };
      if (구역03_서남45도.find(element => element == text)) { result = "구역03_서남45도" };
      if (구역03_서남30도.find(element => element == text)) { result = "구역03_서남30도" };

      if (구역04_동북80도.find(element => element == text)) { result = "구역04_동북80도" };
      if (구역04_동북50도.find(element => element == text)) { result = "구역04_동북50도" };
      if (구역04_동남10도.find(element => element == text)) { result = "구역04_동남10도" };
      if (구역04_동남30도.find(element => element == text)) { result = "구역04_동남30도" };
      if (구역04_동남45도.find(element => element == text)) { result = "구역04_동남45도" };
      if (구역04_서남30도.find(element => element == text)) { result = "구역04_서남30도" };
      if (구역04_서남40도.find(element => element == text)) { result = "구역04_서남40도" };
      if (구역04_서남5도.find(element => element == text)) { result = "구역04_서남5도" };
      if (구역04_서북15도.find(element => element == text)) { result = "구역04_서북15도" };

      if (구역05_동북70도.find(element => element == text)) { result = "구역05_동북70도" };
      if (구역05_동북15도.find(element => element == text)) { result = "구역05_동북15도" };
      if (구역05_동북30도.find(element => element == text)) { result = "구역05_동북30도" };
      if (구역05_동남10도.find(element => element == text)) { result = "구역05_동남10도" };
      if (구역05_동남30도.find(element => element == text)) { result = "구역05_동남30도" };
      if (구역05_서남30도.find(element => element == text)) { result = "구역05_서남30도" };
      if (구역05_서남15도.find(element => element == text)) { result = "구역05_서남15도" };
      if (구역05_서.find(element => element == text)) { result = "구역05_서" };

      if (구역06_서남20도.find(element => element == text)) { result = "구역06_서남20도" };
      if (구역06_서.find(element => element == text)) { result = "구역06_서" };
      if (구역06_서북35도.find(element => element == text)) { result = "구역06_서북35도" };

      if (구역07_서남5도.find(element => element == text)) { result = "구역07_서남5도" };
      if (구역07_서남20도.find(element => element == text)) { result = "구역07_서남20도" };
      if (구역07_서남30도.find(element => element == text)) { result = "구역07_서남30도" };
      if (구역07_서북15도.find(element => element == text)) { result = "구역07_서북15도" };

      if (구역08_서북25도.find(element => element == text)) { result = "구역08_서북25도" };
      if (구역08_서북15도.find(element => element == text)) { result = "구역08_서북15도" };
      if (구역08_서남30도.find(element => element == text)) { result = "구역08_서남30도" };

      if (구역09_서북10도.find(element => element == text)) { result = "구역09_서북10도" };
      if (구역09_서북20도.find(element => element == text)) { result = "구역09_서북20도" };
      if (구역09_서남15도.find(element => element == text)) { result = "구역09_서남15도" };
      if (구역09_서남25도.find(element => element == text)) { result = "구역09_서남25도" };
      if (구역09_서남35도.find(element => element == text)) { result = "구역09_서남35도" };

      if (구역10_서남25도.find(element => element == text)) { result = "구역10_서남25도" };
      if (구역10_서남35도.find(element => element == text)) { result = "구역10_서남35도" };

      if (result == '') {
        e.target.value = '';
        e.target.parentNode.nextElementSibling.innerHTML = '';
      } else {
        e.target.parentNode.nextElementSibling.innerHTML = result;
        //포커스이동
        var 표시배열;
        e.target.classList.add('표시');//표시된곳 i 를 찾지 못함
        for (var i = 0; i < document.querySelectorAll('#리스너용해역사진관련 #리스너용섬이름검색 form input').length; i++) {
          if (document.querySelectorAll('#리스너용해역사진관련 #리스너용섬이름검색 form input')[i].classList.contains('표시')) { 표시배열 = i; }
        }
        e.target.classList.remove('표시');
        if (표시배열 == document.querySelectorAll('#리스너용해역사진관련 #리스너용섬이름검색 form input').length - 1) {
          document.querySelectorAll('#리스너용해역사진관련 #리스너용섬이름검색 form input')[0].focus()
        } else {
          document.querySelectorAll('#리스너용해역사진관련 #리스너용섬이름검색 form input')[표시배열 + 1].focus()
        }
      }
    }
  }
  //교섭력 기록후 포커스 이동, id="차감input들" 안의 input 12개
  if (e.target.parentNode.id == '차감input들' && e.target.nodeName == 'INPUT') {
    e.target.classList.add('표시');
    var 표시순번;
    var 플러스일 = -1;
    for (var i = 0; i < document.querySelectorAll('#차감input들 input').length; i++) {
      플러스일 += 1;
      if (document.querySelectorAll('#차감input들 input')[i].classList.contains('표시')) { 표시순번 = 플러스일; e.target.classList.remove('표시'); }
    }
    // console.log('document.querySelectorAll#차감input들 input).length : ' + document.querySelectorAll('#차감input들 input').length);
    // console.log('플러스일 : ' + 플러스일);
    // console.log('표시순번 : ' + 표시순번);
    if (표시순번 == 11) {
      document.querySelectorAll('#차감input들 input')[0].focus()
    } else if (표시순번 < 9) {
      document.querySelectorAll('#차감input들 input')[표시순번 + 3].focus()
    } else if (표시순번 == 9) {
      document.querySelectorAll('#차감input들 input')[1].focus()
    }
    else if (표시순번 == 10) {
      document.querySelectorAll('#차감input들 input')[2].focus()
    }
  }// 끝 : 교섭력 기록후 포커스 이동
  //id=나의무게  자식요소 input change
  if (e.target.parentNode.id == '나의무게' && e.target.nodeName == 'INPUT') {
    console.log('e.target.parentNode.id==나의무게');
    계산_배와장비무게()
  }
  //id=배무게있는곳  자식요소 input change
  if (e.target.parentNode.id == '배무게있는곳' && e.target.id == '적재가능일반무게') {
    console.log('e.target.parentNode.id==적재가능일반무게');
    계산_배와장비무게()
  }
}
function 리스너_해역사진관련_클릭시(e) {//교섭력계산기능
  console.log('리스너_해역사진관련_클릭시(e)');
  if (e.target.id == '점진무게') {
    document.querySelector('#적재가능일반무게').value = document.querySelector('#점진무게').title;
    계산_배와장비무게()
  }
  if (e.target.id == '비상무게') {
    document.querySelector('#적재가능일반무게').value = document.querySelector('#비상무게').title;
    계산_배와장비무게()
  }
  //선원비율클릭시
  if (e.target.id == '육삼이') {
    document.querySelector('#선원_순수').nextElementSibling.innerHTML = 6;
    document.querySelector('#선원_현실').nextElementSibling.innerHTML = 3;
    document.querySelector('#선원_자신').nextElementSibling.innerHTML = 2;
    계산_배와장비무게();
  }
  if (e.target.id == '자신20') {
    document.querySelector('#선원_순수').nextElementSibling.innerHTML = 0;
    document.querySelector('#선원_현실').nextElementSibling.innerHTML = 0;
    document.querySelector('#선원_자신').nextElementSibling.innerHTML = 20;
    계산_배와장비무게();
  }
  if (e.target.id == '순수10') {
    document.querySelector('#선원_순수').nextElementSibling.innerHTML = 10;
    document.querySelector('#선원_현실').nextElementSibling.innerHTML = 0;
    document.querySelector('#선원_자신').nextElementSibling.innerHTML = 0;
    계산_배와장비무게();
  }
  if (e.target.id == '현실10') {
    document.querySelector('#선원_순수').nextElementSibling.innerHTML = 0;
    document.querySelector('#선원_현실').nextElementSibling.innerHTML = 10;
    document.querySelector('#선원_자신').nextElementSibling.innerHTML = 0;
    계산_배와장비무게();
  }
  //교섭력규칙 안의 숫자클릭시
  var 실행 = '';
  if (e.target.id == '계산_하코저가' || e.target.id == '계산_더코' || e.target.id == '계산_하코' || e.target.id == '계산_대양저가' || e.target.id == '계산_대양고가' ||
    e.target.id == '계산_하코4종' || e.target.id == '계산_대양8종' || e.target.id == '계산_사단까주' || e.target.id == '계산_사단까주8개' ||
    e.target.id == '계산_하코와대양합' || e.target.id == '일회교섭력으로' || e.target.id == '계산_재갱1회당' || e.target.id == '일회교섭력') {
    for (var i = 0; i < document.querySelectorAll('#차감input들 input').length; i++) {
      if (실행 == '' && document.querySelectorAll('#차감input들 input')[i].value == '') {
        console.log('실행되어야할 부분');

        document.querySelectorAll('#차감input들 input')[i].value = e.target.value;
        document.querySelectorAll('#차감input들 input')[i].nextElementSibling.innerHTML = 1;
        교섭력계산()
        실행 = '실행했음';
      }
    }
  }
  if (e.target.title=='메모_순수자신현실') {
    console.log('(e.target.title==메모_순수자신현실');
    if (document.querySelector('#메모_순수자신현실').style.visibility == 'hidden') {
      document.querySelector('#메모_순수자신현실').style.visibility = 'visible';
    } else {
      document.querySelector('#' + e.target.title).style.visibility = 'hidden';
    }
  }
  //메모 클릭하면 안보이게
  if (e.target.classList.contains('팝업메모')) {
    e.target.style.visibility = 'hidden';
  }
  if (e.target.innerHTML == '바다악어') {
    document.querySelector('#해역_물품단계_대체부분').innerHTML = document.querySelector('#해역관련자료none #바다악어').outerHTML;
    document.querySelector('#해역_물품단계_고정').classList.add('d-none');
    document.querySelector('#해역_물품단계_대체부분').classList.remove('d-none');
  }
  if (e.target.classList.contains('선원플러스')) {
    var 숫자 = Number(e.target.previousElementSibling.innerHTML);
    e.target.previousElementSibling.innerHTML = 숫자 + 1;
    계산_배와장비무게();
  }
  if (e.target.classList.contains('선원마이너스')) {
    var 숫자 = Number(e.target.previousElementSibling.previousElementSibling.innerHTML);
    if (숫자 - 1 < 0) {

    } else {
      e.target.previousElementSibling.previousElementSibling.innerHTML = 숫자 - 1;
      계산_배와장비무게();
    }
  }
  //id=해역_물품단계
  if (e.target.title == '해역_물품단계') {
    document.querySelector('#해역_물품단계_고정').classList.remove('d-none');
    document.querySelector('#해역_물품단계_대체부분').classList.add('d-none');
  }
  //
  if (e.target.title == '해역_물품단계안_S1_일리야에페리아창고') {
    document.querySelector('#해역_물품단계_고정').classList.remove('d-none');
    document.querySelector('#해역_물품단계_대체부분').classList.add('d-none');
    if (document.querySelector('#S1_일리야창고사진').style.visibility == 'hidden') {
      document.querySelector('#S1_일리야창고사진').style.visibility = 'visible';
      document.querySelector('#S1_에페리아창고사진').style.visibility = 'visible';
    } else {
      document.querySelector('#S1_일리야창고사진').style.visibility = 'hidden';
      document.querySelector('#S1_에페리아창고사진').style.visibility = 'hidden';
    }
  }
  //마고리아클릭시
  if (e.target.title == '마고리아클릭시') {
    document.querySelector('#해역_물품단계_대체부분').innerHTML = document.querySelector('#해역관련자료none #마고리아클릭시').outerHTML;
    document.querySelector('#해역_물품단계_고정').classList.add('d-none');
    document.querySelector('#해역_물품단계_대체부분').classList.remove('d-none');
  }
  //모은재료클릭시
  if (e.target.title == '모은재료클릭시') {
    document.querySelector('#해역_물품단계_대체부분').innerHTML = document.querySelector('#해역관련자료none #모은재료클릭시').outerHTML;
    document.querySelector('#해역_물품단계_고정').classList.add('d-none');
    document.querySelector('#해역_물품단계_대체부분').classList.remove('d-none');
  }
  //교섭력오른쪽의 버튼클릭시 값 +1, 닫기 할때 다음줄에서 에러난다. 작동은 된다.
  if (e.target.parentNode.parentNode.id == '교섭력계산' && e.target.nodeName == 'BUTTON' && e.target.previousElementSibling.nodeName == 'INPUT') {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (isNaN(document.querySelectorAll('#남은_차감후_교섭력 input')[0].value)) { document.querySelectorAll('#남은_차감후_교섭력 input')[0].value = 0; }
    if (isNaN(document.querySelectorAll('#남은_차감후_교섭력 input')[1].value)) { document.querySelectorAll('#남은_차감후_교섭력 input')[1].value = 0; }
    var 보유교섭력_요소 = document.querySelectorAll('#남은_차감후_교섭력 input')[0];
    var 남은교섭력_요소 = document.querySelectorAll('#남은_차감후_교섭력 input')[1];

    var 차감할1회교섭력_12개 = document.querySelectorAll('#차감input들 input');
    var 차감할횟수_12개 = document.querySelectorAll('#차감input들 button');

    var 차감할교섭력 = 0;
    var 곱할값 = 0;

    for (var i = 0; i < 차감할1회교섭력_12개.length; i++) {
      if (isNaN(차감할1회교섭력_12개[i].value * 1)) {
        곱할값 = 0;
      } else {
        곱할값 = 차감할1회교섭력_12개[i].value * 1;
      }
      차감할교섭력 += Number(차감할횟수_12개[i].innerHTML) * 곱할값;
    }
    교섭력계산();
  }
  if (e.target.parentNode.id == '차감할교섭력_clear') {
    var 남은교섭력 = document.querySelectorAll('#남은교섭력').value;
    for (var i = 0; i < document.querySelectorAll('#차감input들 button').length;) {
      document.querySelectorAll('#차감input들 input')[i].value = '';
      document.querySelectorAll('#차감input들 button')[i].value = 1;
    }
    document.querySelectorAll('#차감후교섭력').value = 남은교섭력;
    alert('실행했다');
  }

  //textarea보기숨기기 : 보기숨기기, id="해역_물품단계"가 셑팅이 안되어 있는경우, 되어있는경우.
  if (e.target.id == 'textarea보기숨기기') {
    //상단시작지점 top:212px; 그림아래top:1026px;*/
    document.querySelector('#해역_물품단계_고정').classList.remove('d-none');
    document.querySelector('#해역_물품단계_대체부분').classList.add('d-none');

    if (document.querySelector('#textarea보기숨기기').innerHTML == 'textarea내리기') {
      document.querySelector('#덩어리이동5개textarea').style.setProperty('top', '0px');
      document.querySelector('#textarea보기숨기기').innerHTML = 'textarea올리기';
    } else {
      document.querySelector('#덩어리이동5개textarea').style.setProperty('top', '-780px');
      document.querySelector('#textarea보기숨기기').innerHTML = 'textarea내리기';
      document.querySelector('#S1_일리야창고사진').style.visibility = 'hidden';
      document.querySelector('#S1_에페리아창고사진').style.visibility = 'hidden';
    }
  }
  //섬검색초기화 클릭시
  if (e.target.id == '섬검색초기화') {
    for (var i = 0; i < document.querySelectorAll('.섬검색인풋').length; i++) {
      document.querySelectorAll('.섬검색인풋')[i].value = '';
    }
    for (var i = 0; i < document.querySelectorAll('#리스너용섬이름검색 div').length; i++) {
      document.querySelectorAll('#리스너용섬이름검색 div')[i].innerHTML = '';
    }
  }
  //차감할교섭력_clear
  if (e.target.id == '차감할교섭력_clear') {
    for (var i = 0; i < document.querySelectorAll('#차감input들 input').length; i++) {
      document.querySelectorAll('#차감input들 input')[i].value = '';
      document.querySelectorAll('#차감input들 button')[i].innerHTML = 1;
    }
    document.querySelectorAll('#남은_차감후_교섭력 input')[1].value = document.querySelectorAll('#남은_차감후_교섭력 input')[0].value;
  }
  //id=나의무게_clear
  if (e.target.id == '나의무게_clear') {
    for (var i = 0; i < document.querySelectorAll('#나의무게 input').length; i++) {
      document.querySelectorAll('#나의무게 input')[i].value = '';
      계산_배와장비무게();
    }
  }
}
function 캔버스_검색input_change시(e) {
  console.log('캔버스_검색value_change시');
  //innerHTML로 검색한다. 메모도 검색해야하니까. 처음에만 두번표시한다?
  var 검색할문자 = document.querySelector('#canvas검색input').value.toUpperCase();
  if (document.querySelector('#canvas검색input').value == '') { return; }
  var 검색할버튼클래스들 = document.querySelectorAll('#canvas카테고리모음 .canvas카테고리 h6');
  var 내부html = '';
  for (var i = 0; i < 검색할버튼클래스들.length; i++) {
    if (검색할버튼클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      내부html += 검색할버튼클래스들[i].outerHTML;
    }
  }
  if (내부html == '') { alert('없음'); return; }
  document.querySelector('#캔버스바디').innerHTML = 내부html;
  document.querySelector('#canvas검색input').value = 검색할문자;
}
function 캔버스클릭시(e) {
  console.log('캔버스클릭시(e)');
  var 캔버스관련자료none안_타겟element;
  var 셑팅_캔버스바디 = document.querySelector('#캔버스바디');
  var 결과부분 = document.querySelector('#전체대체');

  if (1 == 1) {
    //카테고리실행 : 캔버스바디에 카테고리 제목들 나오게한다.
    if (e.target.classList.contains('카테고리실행')) {
      보기셑팅유형 = "카테고리실행";
      캔버스관련자료none안_타겟element = document.querySelector('#' + e.target.title);
      셑팅_캔버스바디.innerHTML = 캔버스관련자료none안_타겟element.outerHTML;
      for (var i = 0; i < document.querySelectorAll('.카테고리실행').length; i++) {
        document.querySelectorAll('.카테고리실행')[i].classList.remove('현재카테고리');
      }
      document.querySelector('[title=' + e.target.title + ']').classList.add('현재카테고리');
    }
    //코딩등메모장text파일 : #canvas텍스트 배치후에 embed부분 수정
    if (e.target.classList.contains('코딩등메모장text파일')) {
      보기셑팅유형 = "코딩등메모장text파일";
      캔버스관련자료none안_타겟element = document.querySelector('#canvas결과모음 > #canvas텍스트');
      결과부분.innerHTML = 캔버스관련자료none안_타겟element.outerHTML;
      document.querySelector('#embed부분').src = 'portal/images/black_코딩등메모장/' + e.target.title;
      보기셑팅();
    }
    //canvas_div : 배치
    if (e.target.classList.contains('canvas_div')) {
      보기셑팅유형 = "canvas_div";
      캔버스관련자료none안_타겟element = document.querySelector('#' + e.target.title);
      결과부분.innerHTML = 캔버스관련자료none안_타겟element.outerHTML;
      보기셑팅();
    }
  }
  if (1 == 1) {
    if (e.target.id == '캔버스바디_초기화') {
      var 셑팅_캔버스바디 = document.querySelector('#캔버스바디');
      셑팅_캔버스바디.innerHTML = '';
      for (var i = 0; i < document.querySelectorAll('.카테고리실행').length; i++) {
        document.querySelectorAll('.카테고리실행')[i].classList.remove('현재카테고리');
      }
      셑팅_캔버스바디.innerHTML = document.querySelectorAll('#canvas카테고리모음 .canvas카테고리')[0].outerHTML;
      document.querySelector('[title=' + document.querySelectorAll('.카테고리실행')[0].title + ']').classList.add('현재카테고리');
    }
    if (e.target.id == '캔버스바디_모든제목보기') {
      //34개까지는 17개가 초과하면 왼쪽17개 나머지 오른쪽
      //34개이상일때 나누기2 왼쪽오른쪽
      셑팅_캔버스바디.innerHTML = '';
      var 검색할버튼클래스들 = document.querySelectorAll('.canvas카테고리 h6');//코딩등메모장text파일, canvas_div
      var 개수 = 검색할버튼클래스들.length;
      var 왼쪽내부html = '';
      var 오른쪽내부html = '';

      if (개수 <= 17) {
        for (var i = 0; i < 검색할버튼클래스들.length; i++) {
          console.log(검색할버튼클래스들[i].outerHTML);
          왼쪽내부html += 검색할버튼클래스들[i].outerHTML;
        }
        왼쪽내부html = '<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;>' + 왼쪽내부html + '</div>'
        오른쪽내부html = '<div class="js모든파일리스트div"></div>'
      }

      if (개수 >= 18 && 개수 <= 34) {
        for (var i = 0; i < 17; i++) {
          왼쪽내부html += 검색할버튼클래스들[i].outerHTML;
        }
        for (var i = 17; i < 개수; i++) {
          오른쪽내부html += 검색할버튼클래스들[i].outerHTML;
        }
        왼쪽내부html = '<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;>' + 왼쪽내부html + '</div>'
        오른쪽내부html = '<div class="js모든파일리스트div"">' + 오른쪽내부html + '</div>'
      }
      if (개수 > 34) {
        for (var i = 0; i < 개수; i++) {
          if (i < (개수 / 2)) {
            왼쪽내부html += 검색할버튼클래스들[i].outerHTML;
          } else {
            오른쪽내부html += 검색할버튼클래스들[i].outerHTML;
          }
        }
        왼쪽내부html = '<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;>' + 왼쪽내부html + '</div>'
        오른쪽내부html = '<div class="js모든파일리스트div"">' + 오른쪽내부html + '</div>'
      }
      셑팅_캔버스바디.innerHTML = 왼쪽내부html + 오른쪽내부html;
    }
    if (e.target.id == '캔버스바디_모든카테고리') {
      //최종적으로 세로 두줄이 되도록 한다. 17줄
      셑팅_캔버스바디.innerHTML = '';
      var 검색할버튼클래스들 = document.querySelectorAll('.카테고리실행');
      var 내부html = '';
      for (var i = 0; i < 검색할버튼클래스들.length; i++) {
        내부html += 검색할버튼클래스들[i].outerHTML;
      }
      셑팅_캔버스바디.innerHTML = 내부html;
    }
    if (e.target.id == 'canvas검색input_clear') {
      document.querySelector('#canvas검색input').value = '';
    }
    if (e.target.id == '캔버스바디_카테고리숨김') {
      //class="카테고리실행". 
      var 숨김수 = 0;
      var 검색할버튼클래스들 = document.querySelectorAll('.카테고리실행');
      for (var i = 0; i < 검색할버튼클래스들.length; i++) {
        //5개씩 d-none 클래스추가
        if (!검색할버튼클래스들[i].classList.contains('d-none')) {
          if (숨김수 < 5) { 검색할버튼클래스들[i].classList.add('d-none'); 숨김수 += 1; }
        }
      }
    }
    if (e.target.id == '캔버스바디_카테고리숨김해제') {
      //class="카테고리실행". 
      var 검색할버튼클래스들 = document.querySelectorAll('.카테고리실행');
      var none수 = 0;
      for (var i = 0; i < 검색할버튼클래스들.length; i++) {
        if (검색할버튼클래스들[i].classList.contains('d-none')) { none수 += 1; }
      }
      if (none수 > 0) {
        for (var i = none수 - 5; i < none수; i++) {
          if (i > -1) { 검색할버튼클래스들[i].classList.remove('d-none') }
        }
      }
    }

  }
}
function main과우측_클릭시(e) {
  console.log('main과우측_클릭시(e) e.target.title : ' + e.target.title);
  if (e.target.classList.contains('파일연결')) {
    document.querySelector('#main사이드우측의_코딩결과div').innerHTML = document.querySelector('#' + e.target.title).outerHTML;
  }
}
리스너_header.addEventListener('click', header_클릭시);
리스너_해역사진관련.addEventListener('click', 리스너_해역사진관련_클릭시);
리스너_해역사진관련.addEventListener('change', 리스너_해역사진관련_change시);
리스너_해역사진관련.addEventListener('dblclick', 리스너_해역사진관련_dblclick시);
리스너_캔버스전체.addEventListener('click', 캔버스클릭시);
리스너_캔버스전체.addEventListener('change', 캔버스_검색input_change시);
리스너_main과우측.addEventListener('click', main과우측_클릭시);

