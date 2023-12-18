//해역위치와 물품단계
if (1==1) {
  var embed_루트src_탐색기='';
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

  var 구역03_북서=['로즈반']; //결과에 북동으로
  var 구역03_남서=['에프데룬'];
  var 구역03_서서남=['마리베노'];

  var 구역04_북북동=['틴베라'];
  var 구역04_북동=['포르타넨'];
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

//재료보유수 기록 참조하여 부위별 정보의 보유수에 뿌리기
var 보유수=document.querySelectorAll('#파템재료_일퀘개수 .노랑');
//보유수[0]심해의 눈물 
//보유수[1]화려한 진주 결정
//보유수[3]화려한 암염 주괴
//보유수[4]짙은 파도빛이 감도는 규격 각목
//보유수[5]달의 핏줄이 새겨진 아마포
document.querySelector('#파템_일반재료1 > div:nth-of-type(2) > button:nth-of-type(2)').innerHTML=보유수[0].innerHTML;
document.querySelector('#파템_일반재료1 > div:nth-of-type(3) > button:nth-of-type(2)').innerHTML=보유수[1].innerHTML;
document.querySelector('#파템_일반재료1 > div:nth-of-type(4) > button:nth-of-type(2)').innerHTML=보유수[3].innerHTML;
document.querySelector('#파템_일반재료1 > div:nth-of-type(5) > button:nth-of-type(2)').innerHTML=보유수[4].innerHTML;
document.querySelector('#파템_일반재료1 > div:nth-of-type(6) > button:nth-of-type(2)').innerHTML=보유수[5].innerHTML;

//보유수[2]콕스 전투
//보유수[8]달의비늘 합판
//보유수[14]순수한 암초
//보유수[11]파도빛 각목
document.querySelector('#파템_일반재료1 > div:nth-of-type(8) > button:nth-of-type(2)').innerHTML=보유수[2].innerHTML;
document.querySelector('#파템_일반재료1 > div:nth-of-type(9) > button:nth-of-type(2)').innerHTML=보유수[8].innerHTML;
document.querySelector('#파템_일반재료1 > div:nth-of-type(10) > button:nth-of-type(2)').innerHTML=보유수[14].innerHTML;
document.querySelector('#파템_일반재료1 > div:nth-of-type(11) > button:nth-of-type(2)').innerHTML=보유수[11].innerHTML;

//보유수[6]홍조 단괴
//보유수[13]심해초 줄기
//보유수[12]대양의 현철
//보유수[16]강화된 섬나무
document.querySelector('#파템_일반재료1 > div:nth-of-type(13) > button:nth-of-type(2)').innerHTML=보유수[6].innerHTML;
document.querySelector('#파템_일반재료1 > div:nth-of-type(14) > button:nth-of-type(2)').innerHTML=보유수[13].innerHTML;
document.querySelector('#파템_일반재료1 > div:nth-of-type(15) > button:nth-of-type(2)').innerHTML=보유수[12].innerHTML;
document.querySelector('#파템_일반재료1 > div:nth-of-type(16) > button:nth-of-type(2)').innerHTML=보유수[16].innerHTML;

//=====================2
//보유수[2]콕스 전투
//보유수[8]달의비늘 합판
//보유수[10]순수한 진주
//보유수[15] 콕스 하급
document.querySelector('#파템_일반재료2 > div:nth-of-type(8) > button:nth-of-type(2)').innerHTML=보유수[2].innerHTML;
document.querySelector('#파템_일반재료2 > div:nth-of-type(9) > button:nth-of-type(2)').innerHTML=보유수[8].innerHTML;
document.querySelector('#파템_일반재료2 > div:nth-of-type(10) > button:nth-of-type(2)').innerHTML=보유수[10].innerHTML;
document.querySelector('#파템_일반재료2 > div:nth-of-type(11) > button:nth-of-type(2)').innerHTML=보유수[15].innerHTML;

//보유수[6]홍조 단괴
//보유수[13]심해초 줄기
//보유수[9]콕스 상급
//보유수[7] 빛나는 코발트
document.querySelector('#파템_일반재료2 > div:nth-of-type(13) > button:nth-of-type(2)').innerHTML=보유수[6].innerHTML;
document.querySelector('#파템_일반재료2 > div:nth-of-type(14) > button:nth-of-type(2)').innerHTML=보유수[13].innerHTML;
document.querySelector('#파템_일반재료2 > div:nth-of-type(15) > button:nth-of-type(2)').innerHTML=보유수[9].innerHTML;
document.querySelector('#파템_일반재료2 > div:nth-of-type(16) > button:nth-of-type(2)').innerHTML=보유수[7].innerHTML;
}
//배장비무게, 초기화때 return 쓰면 안되고, 초기화때는 배무게와 선원무게만으로 계산한다
if (1==1) {
    var 배와장비무게=document.querySelector('#계산_배와장비무게').value;
    var 일반등무게=document.querySelector('#계산_일반등무게').value;
    document.querySelector('#계산2_일반등무게').value=일반등무게;
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
function navbar_임시함수_click () {

}




var 리스너_리스너용전체=document.querySelector('#리스너용전체');
function main사이드_dblclick시(e) {
  console.log('main사이드_dblclick시(e)');
  if (e.target.parentNode.parentNode.id=='교섭력계산' && e.target.nodeName=='INPUT' && e.target.nextElementSibling.nodeName=='BUTTON') {
    e.target.nextElementSibling.innerHTML=1;
    if (isNaN(document.querySelectorAll('#남은_차감후_교섭력 input')[0].value)) {document.querySelectorAll('#남은_차감후_교섭력 input')[0].value=0;}
    if (isNaN(document.querySelectorAll('#남은_차감후_교섭력 input')[1].value)) {document.querySelectorAll('#남은_차감후_교섭력 input')[1].value=0;}
    var 보유교섭력_요소=document.querySelectorAll('#남은_차감후_교섭력 input')[0];
    var 남은교섭력_요소=document.querySelectorAll('#남은_차감후_교섭력 input')[1];
  
    var 차감할1회교섭력_12개=document.querySelectorAll('#차감input들 input');
    var 차감할횟수_12개=document.querySelectorAll('#차감input들 button');
  
    var 차감할교섭력=0;
    var 곱할값=0;
  
    for (var i=0; i<차감할1회교섭력_12개.length; i++) {
      if (isNaN(차감할1회교섭력_12개[i].value*1)) {
        곱할값=0;
      } else {
        곱할값=차감할1회교섭력_12개[i].value*1;
      }
  
      차감할교섭력+=Number(차감할횟수_12개[i].innerHTML)*곱할값;
    }
  
    남은교섭력_요소.value=보유교섭력_요소.value-차감할교섭력;
  }
}
function main사이드_change시(e) {
  console.log('main사이드_change시(e)');
  var text=e.target.value;
  var result='';
  //교섭력오른쪽의 버튼클릭시 값 +1, && e.target.nextElementSibling.nodeName=='BUTTON' 제거, 남은교섭력 change시에 작동안해서
  if (e.target.parentNode.parentNode.id=='교섭력계산' && e.target.nodeName=='INPUT') {
    if (isNaN(document.querySelectorAll('#남은_차감후_교섭력 input')[0].value)) {document.querySelectorAll('#남은_차감후_교섭력 input')[0].value=0;}
    if (isNaN(document.querySelectorAll('#남은_차감후_교섭력 input')[1].value)) {document.querySelectorAll('#남은_차감후_교섭력 input')[1].value=0;}
    var 보유교섭력_요소=document.querySelectorAll('#남은_차감후_교섭력 input')[0];
    var 남은교섭력_요소=document.querySelectorAll('#남은_차감후_교섭력 input')[1];
  
    var 차감할1회교섭력_12개=document.querySelectorAll('#차감input들 input');
    var 차감할횟수_12개=document.querySelectorAll('#차감input들 button');
  
    var 차감할교섭력=0;
    var 곱할값=0;
  
    for (var i=0; i<차감할1회교섭력_12개.length; i++) {
      if (isNaN(차감할1회교섭력_12개[i].value*1)) {
        곱할값=0;
      } else {
        곱할값=차감할1회교섭력_12개[i].value*1;
      }
  
      차감할교섭력+=Number(차감할횟수_12개[i].innerHTML)*곱할값;
    }
  
    남은교섭력_요소.value=보유교섭력_요소.value-차감할교섭력;
  }
  //섬이름검색
  if (1==1) {
    if (e.target.parentNode.parentNode.id=='리스너용섬이름검색' && e.target.nodeName=='INPUT' && e.target.parentNode.nextElementSibling.nodeName=='DIV') {
      e.target.parentNode.nextElementSibling.innerHTML='';
      // var text=e.target.value;
      // var result='';
      if (구역01_동끝.find(element => element==text)) {result="구역01_동끝"};
      if (구역01_남남동끝.find(element => element==text)) {result="구역01_남남동끝"};
      if (구역01_남.find(element => element==text)) {result="구역01_남"};
      if (구역01_남서.find(element => element==text)) {result="구역01_남서"};
      if (구역01_북서.find(element => element==text)) {result="구역01_북서"};
    
      if (구역02_동북.find(element => element==text)) {result="구역02_동북"};
      if (구역02_남동.find(element => element==text)) {result="구역02_남동"};
      if (구역02_남남서.find(element => element==text)) {result="구역02_남남서"};
      if (구역02_남서.find(element => element==text)) {result="구역02_남서"};
      if (구역02_서끝.find(element => element==text)) {result="구역02_서끝"};
      if (구역02_서서남.find(element => element==text)) {result="구역02_서서남"};
      if (구역02_서북.find(element => element==text)) {result="구역02_서북"};
    
      if (구역03_북서.find(element => element==text)) {result="구역03_북동"};
      if (구역03_남서.find(element => element==text)) {result="구역03_남서"};
      if (구역03_서서남.find(element => element==text)) {result="구역03_서서남"};
    
      if (구역04_북북동.find(element => element==text)) {result="구역04_북북동"};
      if (구역04_북동.find(element => element==text)) {result="구역04_=북동"};
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
    
      if (result=='') {
        e.target.value='';
        e.target.parentNode.nextElementSibling.innerHTML='';
      } else {
        e.target.parentNode.nextElementSibling.innerHTML=result;
        //포커스이동
        var 표시배열;
        e.target.classList.add('표시');
        for (var i=0; i<document.querySelectorAll('#리스너용섬이름검색 input').length; i++) {
          if (document.querySelectorAll('#리스너용섬이름검색 input')[i].classList.contains('표시')) {표시배열=i;}
        }
        if (표시배열==document.querySelectorAll('#리스너용섬이름검색 input').length-1) {
          document.querySelectorAll('#리스너용섬이름검색 input')[0].focus()
        } else {
          document.querySelectorAll('#리스너용섬이름검색 input')[표시배열+1].focus()
        }
      }
    }
  }
  //교섭력 기록후 포커스 이동, id="차감input들" 안의 input 12개
  if (e.target.parentNode.id=='차감input들' && e.target.nodeName=='INPUT') {
    e.target.classList.add('표시');
    var 표시순번;
    var 플러스일=-1;
    for (var i=0; i<document.querySelectorAll('#차감input들 input').length; i++) {
      플러스일+=1;
      if (document.querySelectorAll('#차감input들 input')[i].classList.contains('표시')) {표시순번=플러스일; e.target.classList.remove('표시');}
    }
    // console.log('document.querySelectorAll#차감input들 input).length : ' + document.querySelectorAll('#차감input들 input').length);
    // console.log('플러스일 : ' + 플러스일);
    // console.log('표시순번 : ' + 표시순번);
    if (표시순번==11) {
      document.querySelectorAll('#차감input들 input')[0].focus()
    } else if (표시순번<9){
      document.querySelectorAll('#차감input들 input')[표시순번+3].focus()
    } else if (표시순번==9){
      document.querySelectorAll('#차감input들 input')[1].focus()
    }
    else if (표시순번==10){
      document.querySelectorAll('#차감input들 input')[2].focus()
    }
  }// 끝 : 교섭력 기록후 포커스 이동
  //id=나의무게  자식요소 input change
  if (e.target.parentNode.id=='나의무게' && e.target.nodeName=='INPUT') {
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
    
    e.target.classList.add('표시');
    플러스일=-1; //버튼두개는 none, 3,4,5,6,7번째, 계산3_1단등무게,계산3_합산무게,계산3_800,계산3_900,계산3_천
    for (var i=0; i<document.querySelectorAll('#나의무게 input').length; i++) {
      플러스일+=1;
      if (document.querySelectorAll('#나의무게 input')[i].classList.contains('표시')) {표시순번=플러스일; e.target.classList.remove('표시');}
    }
    if (표시순번==2) {document.querySelectorAll('#나의무게 input')[4].focus();}
    if (표시순번==4) {document.querySelectorAll('#나의무게 input')[5].focus();}
    if (표시순번==5) {document.querySelectorAll('#나의무게 input')[6].focus();}   
  }
  //id=계산_배와장비무게,id=계산_일반등무게
  if (e.target.parentNode.classList.contains('무게input들') && e.target.tagName=='INPUT') {  
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

}
function main사이드_클릭시(e) {//교섭력계산기능
  console.log('main사이드_클릭시(e)');
  if (e.target.id=='background-position연습') {
    document.querySelector('#위무게와교섭력계산부분').classList.add('d-none');
    document.querySelector('#background-position연습').classList.add('d-none');
  }
  //교섭력오른쪽의 버튼클릭시 값 +1, 닫기 할때 다음줄에서 에러난다. 작동은 된다.
  if (e.target.parentNode.parentNode.id=='교섭력계산' && e.target.nodeName=='BUTTON' && e.target.previousElementSibling.nodeName=='INPUT') {
    e.target.innerHTML=Number(e.target.innerHTML)+1;
    if (isNaN(document.querySelectorAll('#남은_차감후_교섭력 input')[0].value)) {document.querySelectorAll('#남은_차감후_교섭력 input')[0].value=0;}
    if (isNaN(document.querySelectorAll('#남은_차감후_교섭력 input')[1].value)) {document.querySelectorAll('#남은_차감후_교섭력 input')[1].value=0;}
    var 보유교섭력_요소=document.querySelectorAll('#남은_차감후_교섭력 input')[0];
    var 남은교섭력_요소=document.querySelectorAll('#남은_차감후_교섭력 input')[1];
  
    var 차감할1회교섭력_12개=document.querySelectorAll('#차감input들 input');
    var 차감할횟수_12개=document.querySelectorAll('#차감input들 button');
  
    var 차감할교섭력=0;
    var 곱할값=0;
  
    for (var i=0; i<차감할1회교섭력_12개.length; i++) {
      if (isNaN(차감할1회교섭력_12개[i].value*1)) {
        곱할값=0;
      } else {
        곱할값=차감할1회교섭력_12개[i].value*1;
      }
  
      차감할교섭력+=Number(차감할횟수_12개[i].innerHTML)*곱할값;
    }
  
    남은교섭력_요소.value=보유교섭력_요소.value-차감할교섭력;
  }
  if (e.target.parentNode.id=='차감할교섭력_clear') {
    for (var i=0; i<document.querySelectorAll('#차감input들 button').length;) {
      document.querySelectorAll('#차감input들 input')[i].value='';
      document.querySelectorAll('#차감input들 button')[i].value='';
    }
    document.querySelectorAll('#남은_차감후_교섭력 input')[1].value=111;
  }
 

  //textarea보기숨기기 : 보기숨기기
  if (1==1) {
    if (e.target.id=='textarea보기숨기기') {
      //상단시작지점 top:212px; 그림아래top:1026px;*/
      if (document.querySelector('#textarea보기숨기기').innerHTML=='textarea내리기') {
        document.querySelector('#덩어리이동5개textarea').style.setProperty('top', '250px');
        document.querySelector('#textarea보기숨기기').innerHTML='textarea올리기';
      } else {
        document.querySelector('#덩어리이동5개textarea').style.setProperty('top', '-533px');
        document.querySelector('#textarea보기숨기기').innerHTML='textarea내리기';
        document.querySelector('#S1_일리야창고사진').style.visibility='hidden';
        document.querySelector('#S1_에페리아창고사진').style.visibility='hidden';
      }
    }
  }
  //섬검색초기화 클릭시
  if (e.target.id=='섬검색초기화') {
    for (var i=0; i<document.querySelectorAll('#리스너용섬이름검색 input').length; i++) {
      document.querySelectorAll('#리스너용섬이름검색 input')[i].value='';
    }
    for (var i=0; i<document.querySelectorAll('#리스너용섬이름검색 div').length; i++) {
      document.querySelectorAll('#리스너용섬이름검색 div')[i].innerHTML='';
    }
  }
  //S1_해역사진 아래 숨겨진 S1_일리야에페리아창고 사진 두장 보기 숨기기
  if (e.target.id=='S1_일리야에페리아창고') {
    console.log('S1_일리야에페리아창고 클릭시');
    if (document.querySelector('#S1_일리야창고사진').style.visibility=='hidden') {
      document.querySelector('#S1_일리야창고사진').style.visibility='visible';
      document.querySelector('#S1_에페리아창고사진').style.visibility='visible';
    } else {
      document.querySelector('#S1_일리야창고사진').style.visibility='hidden';
      document.querySelector('#S1_에페리아창고사진').style.visibility='hidden';
    }
  }
  //차감할교섭력_clear
  if (e.target.id=='차감할교섭력_clear') {
    document.querySelectorAll('#남은_차감후_교섭력 input')[1].value=0;
    for (var i=0; i<document.querySelectorAll('#차감input들 input').length; i++) {
      document.querySelectorAll('#차감input들 input')[i].value='';
      document.querySelectorAll('#차감input들 button')[i].innerHTML=1;
    }
  }
  //id=나의무게_clear
  if (e.target.id=='나의무게_clear') {
    for (var i=0; i<document.querySelectorAll('#나의무게 input').length; i++) {
      document.querySelectorAll('#나의무게 input')[i].value='';
    }    
  }
  //
  if (e.target.id=='물품단계클릭시') {
    if (document.querySelector('#해역_물품단계').classList.contains('d-none')) {
      console.log('해역_물품단계 d-none 제거')
      document.querySelector('#해역_물품단계').classList.remove('d-none');  
      document.querySelector('#모은재료none상태').classList.add('d-none');
      document.querySelector('#마고리아12별none상태').classList.add('d-none'); 
    } else {
      console.log('해역_물품단계 d-none추가')
      document.querySelector('#해역_물품단계').classList.add('d-none'); 
    }
  }
  if (e.target.id=='마고리아클릭시') {
    if (document.querySelector('#마고리아12별none상태').classList.contains('d-none')) {
      document.querySelector('#마고리아12별none상태').classList.remove('d-none'); 
    } else {
      document.querySelector('#마고리아12별none상태').classList.add('d-none');
    }
  }
  if (e.target.id=='모은재료클릭시') {
    if (document.querySelector('#모은재료none상태').classList.contains('d-none')) {
      document.querySelector('#해역_물품단계').classList.add('d-none');  
      document.querySelector('#모은재료none상태').classList.remove('d-none'); 
      document.querySelector('#마고리아12별none상태').classList.add('d-none'); 
    } else {
      document.querySelector('#모은재료none상태').classList.add('d-none');
      document.querySelector('#해역_물품단계').classList.remove('d-none'); 
    }
  }
}
리스너_리스너용전체.addEventListener('click',main사이드_클릭시);
리스너_리스너용전체.addEventListener('change',main사이드_change시);
리스너_리스너용전체.addEventListener('dblclick',main사이드_dblclick시);




