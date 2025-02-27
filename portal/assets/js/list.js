  var user = navigator.userAgent;
  var is_mobile = false;
  
  if( user.indexOf("iPhone") > -1 
      || user.indexOf("Android") > -1 
      || user.indexOf("iPad") > -1
      || user.indexOf("iPod") > -1
  ) {
      is_mobile = true; // 깃허브도 데스트탑 아닌걸로, 로컬 작업때만 false
  }

//메모 관련 달력
const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("monthYear");

var 임시오늘날짜 = new Date();
var 임시오늘년 = 임시오늘날짜.getFullYear();
var 임시오늘월 = 임시오늘날짜.getMonth();
var id달력날짜기준월 = document.querySelector('#달력날짜기준').innerHTML.substring(0, document.querySelector('#달력날짜기준').innerHTML.indexOf('월')) * 1 - 1;
if (임시오늘월 < 3 && id달력날짜기준월 > 8) { 임시오늘년 = 임시오늘년 - 1 }
if (임시오늘월 > 8 && id달력날짜기준월 < 3) { 임시오늘년 = 임시오늘년 + 1 }

let currentDate = new Date(임시오늘년, id달력날짜기준월, 1);
// let currentDate = new Date() new Date(2025,0,1)=>1월1일일;

function renderCalendar() {
  console.log('renderCalendar()')
  daysContainer.innerHTML = "";
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  monthYear.textContent = `${year}년 ${month + 1}월`;

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    daysContainer.appendChild(emptyCell);
  }

  for (let day = 1; day <= lastDate; day++) {
    const dayCell = document.createElement("div");
    dayCell.className = "day";
    dayCell.textContent = day;
    if (isCurrentMonth && day === today.getDate()) {
      dayCell.classList.add("today");
    }
    daysContainer.appendChild(dayCell);
  }
}

renderCalendar();
// 두번째 달력
const daysContainer2 = document.getElementById("days2");
const monthYear2 = document.getElementById("monthYear2");
let currentDate2 = currentDate;
currentDate2 = new Date(currentDate2.getFullYear(), currentDate2.getMonth() + 1, 1);

function renderCalendar2() {
  console.log('renderCalendar2()')
  daysContainer2.innerHTML = "";
  const year2 = currentDate2.getFullYear();
  const month2 = currentDate2.getMonth();
  monthYear2.textContent = `${year2}년 ${month2 + 1}월`;

  const firstDay2 = new Date(year2, month2, 1).getDay();
  const lastDate2 = new Date(year2, month2 + 1, 0).getDate();
  const today2 = new Date(currentDate2.getFullYear(), currentDate2.getMonth() + 1, 1);

  const isCurrentMonth2 = today2.getFullYear() === year2 && today2.getMonth() === month2;

  for (let i = 0; i < firstDay2; i++) {
    const emptyCell2 = document.createElement("div");
    daysContainer2.appendChild(emptyCell2);
  }

  for (let day2 = 1; day2 <= lastDate2; day2++) {
    const dayCell2 = document.createElement("div");
    dayCell2.className = "day";
    dayCell2.textContent = day2;
    if (isCurrentMonth2 && day2 === today2.getDate()) {
      dayCell2.classList.add("today");
    }
    daysContainer2.appendChild(dayCell2);
  }
}
renderCalendar2();
//메모 관련 달력 끝..  
//메모 관련, #메모div > div > button:nth-of-type(1)에 날짜가 있을때 달력에 표시
function 첫번째버튼날짜있을때댤력에표시() {
  console.log('첫번째버튼날짜있을때댤력에표시()')
  var 메모날짜버튼들 = document.querySelectorAll('#메모div > div > button:nth-of-type(1)');
  var 메모날짜정보배열 = []; //2_11
  var 월index, 일index, 월, 일, 진행, 버튼문자열;
  var 오늘 = new Date();
  var 요일관련오늘년 = 오늘.getFullYear();
  var 요일관련오늘월 = 오늘.getMonth() + 1;
  var 메모날짜년도;
  var 오늘월_일 = (오늘.getMonth() + 1) + '_' + 오늘.getDate();

  //요일넣기
  const 요일들 = ["일", "월", "화", "수", "목", "금", "토"];
  var 메모날짜;
  //날짜가 있으면(?월?일 일로 끝남) 다음 button에 요일넣기, 
  for (var i = 0; i < 메모날짜버튼들.length; i++) {
    if (메모날짜버튼들[i].nextElementSibling.nextElementSibling.innerHTML.trim() == '') {
      메모날짜버튼들[i].nextElementSibling.nextElementSibling.innerHTML = '_';
    }
    버튼문자열 = 메모날짜버튼들[i].innerHTML;
    월index = 버튼문자열.indexOf('월'); //없으면 -1, 처음에 나오면 0
    일index = 버튼문자열.indexOf('일'); //없으면 -1, 처음에 나오면 0
    if (월index > 0) { 월 = 버튼문자열.substring(0, 월index)*1} else { 월 = '숫자아님' }
    if (일index > 0) { 일 = 버튼문자열.substring(월index + 1, 일index) } else { 일 = '숫자아님' }

    if (isNaN(월) || isNaN(일)) { 진행 = false; } else { 진행 = true; }
    if (진행) {
      메모날짜정보배열.push(월 + '_' + 일);
      //console.log(월 + '_' + 일 + ' / ' + 오늘월_일)
      if ((월 + '_' + 일) == 오늘월_일) {
        메모날짜버튼들[i].classList.add('js오늘메모');
        메모날짜버튼들[i].nextElementSibling.classList.add('js오늘메모');
      }
      //요일넣기. new Date(2025,0,1) : 2025년1월1일일
      if (요일관련오늘월 == 1 && (월 == 11 || 월 == 12)) {
        메모날짜년도 = 요일관련오늘년 - 1;
        메모날짜 = new Date(메모날짜년도, 월-1, 일);
        요일 = 요일들[메모날짜.getDay()];
        메모날짜버튼들[i].nextElementSibling.innerHTML = 요일 + '요일';
      } else if (요일관련오늘월 == 12 && (월 == 1 || 월 == 2)) {
        메모날짜년도 = 요일관련오늘년 + 1;
        메모날짜 = new Date(메모날짜년도, 월-1, 일);
        요일 = 요일들[메모날짜.getDay()];
        메모날짜버튼들[i].nextElementSibling.innerHTML = 요일 + '요일';
      } else {
        메모날짜년도 = 요일관련오늘년;
        메모날짜 = new Date(메모날짜년도, 월-1, 일);
        요일 = 요일들[메모날짜.getDay()];
        메모날짜버튼들[i].nextElementSibling.innerHTML = 요일 + '요일';
      }
    }
    //console.log('메모날짜버튼개수 : ' + 메모날짜버튼들.length + ', 월index : ' + 월index + ', 일index : ' + 일index + ', 진행 : ' + 진행 + ', 월 : ' + 월 + ', 일 : ' + 일)
  }
  var 달력년월 = document.querySelector('#monthYear').innerHTML;
  var 달력월 = 달력년월.substring(달력년월.indexOf('년') + 1, 달력년월.indexOf('월')).trim();
  var 현재날짜확인;
  for (var i = 0; i < document.querySelectorAll('#days > div').length; i++) {
    현재날짜확인 = 달력월 + '_' + document.querySelectorAll('#days > div')[i].innerHTML;
    if (메모날짜정보배열.indexOf(현재날짜확인) > -1) {
      document.querySelectorAll('#days > div')[i].classList.add('js메모있는날짜달력표시');
    }
  }

  var 달력년월 = document.querySelector('#monthYear2').innerHTML;
  var 달력월 = 달력년월.substring(달력년월.indexOf('년') + 1, 달력년월.indexOf('월')).trim();
  for (var i = 0; i < document.querySelectorAll('#days2 > div').length; i++) {
    현재날짜확인 = 달력월 + '_' + document.querySelectorAll('#days2 > div')[i].innerHTML;
    if (메모날짜정보배열.indexOf(현재날짜확인) > -1) {
      document.querySelectorAll('#days2 > div')[i].classList.add('js메모있는날짜달력표시');
    }
  }

}
첫번째버튼날짜있을때댤력에표시();
//메모 관련 끝..  

//시작시 작동코드
document.querySelector('#PNG셑팅').innerHTML = '<img src="portal/images/문서연결_리스트/PNG_예정.png" alt="이미지없음">';

var 리스너_head_button_group = document.querySelector('#head_button_group');
function 리스너_head_button_group클릭이벤트(e) {
  for (var i = 0; i < document.querySelectorAll('.카테고리').length; i++) {
    document.querySelectorAll('.카테고리')[i].classList.remove('active');
  }
  if (e.target.classList.contains('카테고리')) { e.target.classList.add('active') }

  if (e.target.innerHTML == '리스트') {
    console.log('리스트_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#리스트풀기관련').innerHTML;
    리스트풀기()
  }
  if (e.target.innerHTML == '예정png') {
    console.log('PNG_예정_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = '<img src="portal/images/문서연결_리스트/PNG_예정.png" alt="이미지없음">';
  }
  if (e.target.innerHTML == '완료png') {
    console.log('PNG_완료_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = '<img src="portal/images/문서연결_리스트/PNG_완료.png" alt="이미지없음">';
  }
  if (e.target.innerHTML == '면허,운송') {
    console.log('PNG_면허운송_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = '<img src="portal/images/문서연결_리스트/PNG_면허운송.png" alt="이미지없음">';
  }
  if (e.target.innerHTML == '메모') {
    console.log('PNG_면허운송_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#PNG셑팅에들어갈메모').innerHTML;
  }
  if (e.target.innerHTML == '축산예정') {
    console.log('축산예정_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#축산예정관련').innerHTML;
    축산예정풀기()
  }
  if (e.target.innerHTML == '입항관리') {
    console.log('선사_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#선사와CY관련').innerHTML;
    if (document.querySelector('#두개중선사관련').classList.contains('d-none')) {} else { document.querySelector('#두개중선사관련').classList.add('d-none') }
    if (document.querySelector('#두개중CY관련').classList.contains('d-none')) { } else { document.querySelector('#두개중CY관련').classList.add('d-none') }
    입항관리풀기()
  }
  if (e.target.innerHTML == 'CY') {
    console.log('CY_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#선사와CY관련').innerHTML;
    if (document.querySelector('#두개중CY관련').classList.contains('d-none')) { document.querySelector('#두개중CY관련').classList.remove('d-none') }
    if (document.querySelector('#두개중선사관련').classList.contains('d-none')) { } else { document.querySelector('#두개중선사관련').classList.remove('d-none') }
  }
}
function 단어검색() {
  console.log('공통단어검색click()');
  var 검색결과바탕색_클래스들 = document.querySelectorAll('.검색결과바탕색');
  for (var i = 0; i < 검색결과바탕색_클래스들.length; i++) {
    검색결과바탕색_클래스들[i].outerHTML = 검색결과바탕색_클래스들[i].innerHTML;
  }
  if (document.querySelector('#PNG셑팅 #축산예정검색input')) { var 검색할문자 = document.querySelector('#축산예정검색input').value.toUpperCase();}
  if (document.querySelector('#PNG셑팅 #리스트검색input')) { var 검색할문자 = document.querySelector('#리스트검색input').value.toUpperCase();}
  if (document.querySelector('#PNG셑팅 #입항관리검색input')) { var 검색할문자 = document.querySelector('#입항관리검색input').value.toUpperCase();}
  if (검색할문자 == '') { return; }
  var 클래스부여결과='<span class="검색결과바탕색">' + 검색할문자 + '</span>';
  var 검색할클래스들 = document.querySelectorAll('.검색 td');
  for (var i = 0; i < 검색할클래스들.length; i++) {
    var 전체문자열=검색할클래스들[i].innerHTML.toUpperCase();
    if (전체문자열.indexOf(검색할문자)==-1) { continue; }
    var 스플릿=[]; // 없으면 0 있으면 2개이상상, 전체일치. 수월한 주식회사 : 월한 으로 split 하면 '수' ' 주식회사'
    스플릿=전체문자열.split(검색할문자);
    if (스플릿.length==0) {continue;} 
    var 전체길이=전체문자열.length;
    if (스플릿[0].length>0) {var 왼쪽문자열=전체문자열.substring(0,전체문자열.indexOf(검색할문자))} else {var 왼쪽문자열=''}
    if (전체문자열.length==왼쪽문자열.length + 검색할문자.length) {
      var 오른쪽문자열=''
    } else {
      var 오른쪽문자열=전체문자열.substring(왼쪽문자열.length+검색할문자.length,전체문자열.length)
    }
    검색할클래스들[i].innerHTML=왼쪽문자열 + 클래스부여결과 + 오른쪽문자열;
  }
  if (document.querySelector('#PNG셑팅 #축산예정검색input')) {document.querySelector('#축산예정검색input').value=''}
  if (document.querySelector('#PNG셑팅 #리스트검색input')) {document.querySelector('#리스트검색input').value=''}
  if (document.querySelector('#PNG셑팅 #입항관리검색input')) {document.querySelector('#입항관리검색input').value=''}
}

function 리스트1부터요약까지복붙자료풀기() {
  //div,input 하면 줄바꿈 \n이 없다?
  console.log('리스트1부터요약까지복붙자료풀기()')
  document.querySelector('#리스트1부터Z열메모2까지').innerHTML = document.querySelector('#리스트복붙textarea').value;
  리스트풀기();
}
function 리스트풀기() {
  // document.querySelector('#원본화주와컨').value=document.querySelector('#원본화주와컨').value;
  //탭 : \t, 줄바꿈 \n : split는 정규식으로 입력받는다.
  var 리스트텍스트 = document.querySelector('#리스트1부터Z열메모2까지').innerHTML;
  var 리스트줄바꿈split = 리스트텍스트.split('\n');

  var 자료풀림결과 = document.querySelector('#리스트자료풀림결과');
  자료풀림결과.innerHTML = '';

  //div안에 span에서  tr안에 td로 변경해보자 (복붙할때 엑셀에 테이블형식으로 되는지 확인인)
  //첫정보 비어있을때 코드로 해결해보자 : 최대length파악, 현재length차이만큼 값을 넣는다??
  var length최대=0;
  for (var i = 0; i < 리스트줄바꿈split.length - 1; i++) {
    if (리스트줄바꿈split[i].split('\t').length>length최대) {
      length최대=리스트줄바꿈split[i].split('\t').length;
    }
  }

  for (var i = 0; i < 리스트줄바꿈split.length - 1; i++) {
    var length최대와차이=0;
    var div안span4 = '';
    length최대와차이=length최대-리스트줄바꿈split[i].split('\t').length;
    if (length최대와차이==1) {
      div안span4 = '<td></td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[0] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[1] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[2] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[3] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[4] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[5] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[6] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[7] + '</td>' //입항일
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[8] + '</td>' //구분(축산수산구분 제외외)
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[9] + '</td>' //도착일
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[10] + '</td>' //도착시간
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[19] + '</td>' //구분(20,40피트), 13 화찰 제외
  
      div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
      자료풀림결과.innerHTML = 자료풀림결과.innerHTML + div안span4;
    }
    if (length최대와차이==2) {
      div안span4 = '<td></td>'
      div안span4 += '<td></td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[0] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[1] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[2] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[3] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[4] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[5] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[6] + '</td>' //입항일
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[7] + '</td>' //구분(축산수산구분 제외외)
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[8] + '</td>' //도착일
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[9] + '</td>' //도착시간
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[18] + '</td>' //구분(20,40피트), 13 화찰 제외
  
      div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
      자료풀림결과.innerHTML = 자료풀림결과.innerHTML + div안span4;
    }
    if (length최대와차이==0) {
      div안span4 = '<td>' + 리스트줄바꿈split[i].split('\t')[0] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[1] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[2] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[3] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[4] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[5] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[6] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[7] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[8] + '</td>' //입항일
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[9] + '</td>' //구분(축산수산구분 제외외)
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[10] + '</td>' //도착일
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[11] + '</td>' //도착시간
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[20] + '</td>' //구분(20,40피트), 13 화찰 제외
  
      div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
      자료풀림결과.innerHTML = 자료풀림결과.innerHTML + div안span4;
    }
  }
  자료풀림결과.innerHTML='<table><tbody>' + 자료풀림결과.innerHTML + '</tbody></table>'

  //리스트단독 입항관리에 넣을때 사용할 요소다
  document.querySelector('#리스트자료풀림결과js복사본').innerHTML=자료풀림결과.outerHTML;
  
  자료풀림결과=document.querySelectorAll('#리스트자료풀림결과 tr');

  for (var i = 0; i < 자료풀림결과.length; i++) {
    if (자료풀림결과[i].children[11].innerHTML == '도착시간') {
      자료풀림결과[i].children[12].classList.add('js시간노랑');
      break;
    }
  }

  document.querySelector('#리스트복붙textarea').value = '';
}
function 입항관리BM복붙자료풀기() {
  //div,input 하면 줄바꿈 \n이 없다?
  console.log('입항관리BM복붙자료풀기()')
  document.querySelector('#입항관리도크부터도착항우측까지').innerHTML = document.querySelector('#입항관리복붙textarea').value;
  입항관리풀기();
}
function 입항관리풀기() {
  // document.querySelector('#원본화주와컨').value=document.querySelector('#원본화주와컨').value;
  //탭 : \t, 줄바꿈 \n : split는 정규식으로 입력받는다.
  var 입항관리화주부터상세까지12텍스트 = document.querySelector('#입항관리도크부터도착항우측까지').innerHTML;
  var 입항관리화주부터상세까지12_줄바꿈split = 입항관리화주부터상세까지12텍스트.split('\n');
  // var 입항관리화주부터상세까지12_줄바꿈split = 입항관리화주부터상세까지12_줄바꿈split.filter(function(item) {return item !== null && item !== undefined && item !== '';});
  //마지막 배열이 0 이다, 이거 피해야함함
  var 입관자료풀림결과 = document.querySelector('#입항관리자료풀림결과');
  입관자료풀림결과.innerHTML = '';
  //1.화주,2.컨,4.상세,6.운송,7.물품,9.선명,10.BL,11.도착항,12.상세원본
  for (var i = 0; i < 입항관리화주부터상세까지12_줄바꿈split.length - 1; i++) {
    //if (입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[0].trim().length!=0) { 리스트에 활용시 첫 정보가 비어 있을수 있는데 건너뛴다..
    var div안span4 = '';
    div안span4 = '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[0] + '</td>'
    div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[3] + '</td>'
    div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[4] + '</td>'
    div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[5] + '</td>' //빈칸
    div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[6] + '</td>'
    div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[7] + '</td>'
    div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[8] + '</td>' //-2
    div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[9] + '</td>'
    div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[10] + '</td>'
    div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[11] + '</td>' //도착항
    div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[12] + '</td>' //상세내용원본
    div안span4 += '<td></td>' //빈칸(상세원본복사쉽도록)
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    입관자료풀림결과.innerHTML = 입관자료풀림결과.innerHTML + div안span4;
  }
  입관자료풀림결과.innerHTML='<table><tbody>' + 입관자료풀림결과.innerHTML + '</tbody></table>'

  입관자료풀림결과=document.querySelectorAll('#입항관리자료풀림결과 tr');

  for (var i = 0; i < 입관자료풀림결과.length; i++) {
     if (입관자료풀림결과[i].children[7].innerHTML == '물품') {
      입관자료풀림결과[i].children[9].classList.add('js시간노랑');
      break;
    }
  }
  document.querySelector('#입항관리복붙textarea').value = '';

  //리스트시트 메모2부분 만들기
  var 메모2자료풀림결과=document.querySelector('#오른쪽리스트메모2만');
  메모2자료풀림결과.innerHTML='';
  for (var i = 0; i < 입항관리화주부터상세까지12_줄바꿈split.length - 1; i++) {
    var div안span4 = '';
    if (i==0) {
      div안span4 = '<table><tbody><tr><td>리스트메모내용</td></tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    } else {
      div안span4 = '<table><tbody><tr><td></td></tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    }

    메모2자료풀림결과.innerHTML = 메모2자료풀림결과.innerHTML + div안span4;
  }
  메모2자료풀림결과.innerHTML='<table><tbody>' + 메모2자료풀림결과.innerHTML + '</tbody></table>'
  
  //
  var 메모2자료풀림결과=document.querySelectorAll('#오른쪽리스트메모2만 td');
  var 리스트_컨_bl_메모2_배열=[];
  var 컨, 비엘, 메모2 ;
  for (var i=0; i<document.querySelectorAll('#리스트자료풀림결과js복사본 tr').length; i++) {
    컨=document.querySelectorAll('#리스트자료풀림결과js복사본 tr')[i].children[4].innerHTML.trim();
    비엘=document.querySelectorAll('#리스트자료풀림결과js복사본 tr')[i].children[2].innerHTML.trim();
    메모2=document.querySelectorAll('#리스트자료풀림결과js복사본 tr')[i].children[12].innerHTML.trim();
    if ((컨.length>0 || 비엘.length) && 메모2.length>0) {
      리스트_컨_bl_메모2_배열.push(컨 + '#' + 비엘  + '#' + 메모2)
    }
  }

  for (var i = 1; i < 입항관리화주부터상세까지12_줄바꿈split.length - 1; i++) {
    //배열이 각 3가지 정보를 담고 있는데, 입항관리의 bl과 컨 중에 하나라도 있으면 메모부분을 가지고 온다.
   


  }
  
}
function 축산예정풀기() {
  var 원본텍스트 = document.querySelector('#머리글제외_a열제외_축산예정_b_aa시간열까지').innerHTML;
  var 원본_줄바꿈split = 원본텍스트.split('\n');
  // var 입항관리화주부터상세까지12_줄바꿈split = 입항관리화주부터상세까지12_줄바꿈split.filter(function(item) {return item !== null && item !== undefined && item !== '';});
  //마지막 배열이 0 이다, 이거 피해야함함
  var 자료풀림결과 = document.querySelector('#축산예정자료풀기결과');
  자료풀림결과.innerHTML = '';
  //1순번,2화주,3BL,4컨,5수량,6중량,7판매원,8입고예정,9이름,10입고층,11입항예정,12주의,13가공장번호,14계육,15AU다리살,
  //16스티커발주상태,17수출국,18가공일,19메모,20화찰BL,21화찰선명,22화물관리,23화찰수량,24화찰중량,25화찰입항
  for (var i = 0; i < 원본_줄바꿈split.length - 1; i++) {
    var div안span4 = '';
    div안span4 = '<td>' + 원본_줄바꿈split[i].split('\t')[0] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[3] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[4] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[5] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[6] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[7] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[8] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[9] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[10] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[11] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[12] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[13] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[14] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[15] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[16] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[17] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[18] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[19] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[20] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[21] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[22] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[23] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[24] + '</td>'
    if (i==0) {
      document.querySelector('#축산기록시간은수기로해야함').innerHTML=원본_줄바꿈split[i].split('\t')[25]
    }
    //div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[25] + '</td>' //시간) : 엑셀에 넣으면 시간이 지워지니 표시안함
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    자료풀림결과.innerHTML = 자료풀림결과.innerHTML + div안span4;
  }
  //1순번,2화주,3BL,4컨,5수량,6중량,7판매원,8입고예정,9이름,10입고층,11입항예정,12주의,13가공장번호,14계육,15AU다리살,
  //16스티커발주상태,17수출국,18가공일,19메모,20화찰BL,21화찰선명,22화물관리,23화찰수량,24화찰중량,25화찰입항

  var 축산예정머리글='<table><tbody><tr><td>순번</td><td>화주</td><td>BL.NO</td><td>컨테이너</td><td>수량</td><td>중량</td><td>판매원</td><td>입고예정</td>' +
                    '<td>이름</td><td>입고층</td><td>입항예정</td><td>주의</td><td>가공장번호</td><td>품종</td><td>브랜드</td><td>스티커발주</td>' + 
                    '<td>수출국</td><td>가공일</td><td>메모</td><td>화찰BL</td><td>화찰선명</td><td>화물관리</td><td>화찰수량</td>' + 
                    '<td>화찰중량</td><td>화찰입항</td></tr></tbody></table>';
  자료풀림결과.innerHTML=축산예정머리글+자료풀림결과.innerHTML;
}
리스트풀기()
입항관리풀기()
축산예정풀기()

var 리스너png셑팅 = document.querySelector('#PNG셑팅');
function 리스트단독입항관리맨에표시() {
  console.log('리스트단독입항관리맨에표시()')
  //입항관리자료는 전체문자열로 받아서 처리해야한다.
  var 입항관리전체문자열 = document.querySelector('#입항관리도크부터도착항우측까지').innerHTML;
  var 입항관리줄바꿈개수 = 입항관리전체문자열.split('\n');
  var 입항관리bl_컨_결합문자열 = [];//컨_bl, 공백이 있을수 있지만 _ 는 있다. undefined 또는 공백
  for (var i = 0; i < 입항관리줄바꿈개수.length; i++) {
    입항관리bl_컨_결합문자열.push(입항관리줄바꿈개수[i].split('\t')[2] + '!' + 입항관리줄바꿈개수[i].split('\t')[10])
  }
  //배열을 다시 ! 로 join하여 하나의 문자열로 만든다. (컨과 bl이 느낌표로 결합된 하나의 문자열이 됨됨)
  입항관리bl_컨_결합문자열 = 입항관리bl_컨_결합문자열.join('!');

  var 리스트bl_컨_배열 = [];
  var 단독담기배열=[];
  //var 리스트목록한줄div = document.querySelectorAll('#PNG셑팅 #리스트자료풀림결과 tr');
  var 리스트목록한줄div = document.querySelectorAll('#리스트자료풀림결과js복사본 tr');
  var 리스트목록개수 = 리스트목록한줄div.length;
  for (var i = 0; i < 리스트목록개수; i++) {
    var 비엘 = 리스트목록한줄div[i].children[2].innerHTML.trim();
    var 컨 = 리스트목록한줄div[i].children[4].innerHTML.trim();
    if (비엘 == 'B/LNO.' || (비엘 == '' && 컨 == '')) { continue; } //다음반복문으로
    //문자열.indexOf('찾는문자열') 없으면 -1
    if (입항관리bl_컨_결합문자열.indexOf(비엘) > -1 || 입항관리bl_컨_결합문자열.indexOf(컨) > -1) {
      //컨이나 bl중 하나라도 맞으면 건너뜀
    } else {
      console.log('단독')
      var 단독배열push문자열=[]; //일단배열에 담아 가공한다.

      //입항관리 뿌리는것 : 0도크,1화주,2컨,3작업순서,4상세,5,빈칸,6운송사,7,물품,8빈칸,9선사,10BL,11상세원본
      단독배열push문자열.push(100);//0도크,순번부분
      단독배열push문자열.push(리스트목록한줄div[i].children[3].innerHTML.trim());//1화주
      단독배열push문자열.push(리스트목록한줄div[i].children[4].innerHTML.trim());//2컨
      단독배열push문자열.push('작업미정');//3작업순서
      단독배열push문자열.push('_' + 리스트목록한줄div[i].children[8].innerHTML.trim());//4상세. 리스트 입항일 값 넣는다
      단독배열push문자열.push('');//5빈칸
      단독배열push문자열.push('');//6운송사
      단독배열push문자열.push(리스트목록한줄div[i].children[5].innerHTML.trim() + ' ' + 리스트목록한줄div[i].children[6].innerHTML.trim());//7물품, 품명 & 수량 넣는다
      단독배열push문자열.push('');//8빈칸
      단독배열push문자열.push(리스트목록한줄div[i].children[12].innerHTML.trim());//9선사(20피트표시에 선사메모사용)
      단독배열push문자열.push(리스트목록한줄div[i].children[2].innerHTML.trim());//10BL
      단독배열push문자열.push(리스트목록한줄div[i].children[7].innerHTML.trim());//11도착항
      단독배열push문자열.push('_' + 리스트목록한줄div[i].children[8].innerHTML.trim());//12상세원본, 리스트 입항일 값 넣는다

      단독배열push문자열=단독배열push문자열.join('\t');//탭으로 묶는다. 나중에 분리하여 사용할것이다
      단독담기배열.push(단독배열push문자열);
    }
  }
  if (단독담기배열.length==0) {alert('단독 없음!'); return;}
  //console.log(단독담기배열) : 입항관리에 단독만 표시되도록 코딩

  var 자료풀림결과 = document.querySelector('#입항관리자료풀림결과');
  자료풀림결과.innerHTML = '';
  //1.화주,2.컨,4.상세,6.운송,7.물품,9.선명,10.BL,11.도착항,12.상세원본
  for (var i = 0; i < 단독담기배열.length; i++) {
    var div안span4 = '';
    div안span4 = '<td>' + 단독담기배열[i].split('\t')[0] + '</td>'
    div안span4 += '<td>' + 단독담기배열[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 단독담기배열[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 단독담기배열[i].split('\t')[3] + '</td>'
    div안span4 += '<td>' + 단독담기배열[i].split('\t')[4] + '</td>'
    div안span4 += '<td>' + 단독담기배열[i].split('\t')[5] + '</td>' //빈칸
    div안span4 += '<td>' + 단독담기배열[i].split('\t')[6] + '</td>'
    div안span4 += '<td>' + 단독담기배열[i].split('\t')[7] + '</td>'
    div안span4 += '<td>' + 단독담기배열[i].split('\t')[8] + '</td>' //-2
    div안span4 += '<td>' + 단독담기배열[i].split('\t')[9] + '</td>'
    div안span4 += '<td>' + 단독담기배열[i].split('\t')[10] + '</td>'
    div안span4 += '<td>' + 단독담기배열[i].split('\t')[11] + '</td>' //도착항
    div안span4 += '<td>' + 단독담기배열[i].split('\t')[12] + '</td>' //상세내용원본
    div안span4 += '<td></td>' //빈칸(상세원본복사쉽도록)
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    자료풀림결과.innerHTML = 자료풀림결과.innerHTML + div안span4;
  }
  const 요일들 = ["일", "월", "화", "수", "목", "금", "토"];
  var today = new Date();   
  var hours = ('0' + today.getHours()).slice(-2); 
  var minutes = ('0' + today.getMinutes()).slice(-2);
  var seconds = ('0' + today.getSeconds()).slice(-2); 

  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);

  var 요일=요일들[today.getDay()];
  var dateString = year + '-' + month  + '-' + day;

  var 시간=month  + '/' + day + ' ' + 요일 + ' '  + hours + ':' + minutes

  var 입항관리머리글='<table><tbody><tr><td>도크</td><td>화주</td><td>컨테이너</td><td>작업순서</td><td>상세내용 참조</td><td></td><td>운송사</td><td>물품</td><td></td><td class="js시간노랑">' + 시간 + '</td><td>B/L</td><td>도착항</td><td>상세내용</td><td></td></tr></tbody></table>';
  자료풀림결과.innerHTML='<table><tbody>' + 입항관리머리글 + 자료풀림결과.innerHTML + '</tbody></table>'
}
function 축산예정_입항관리에없는목록색칠() {
  var 개수 = document.querySelectorAll('.js한줄색칠있음').length;
  for (i = 0; i < 개수; i++) {
    document.querySelectorAll('.js한줄색칠있음')[0].classList.remove('js한줄색칠있음')
  }
  //입항관리자료는 전체문자열로 받아서 처리해야한다.
  var 입항관리전체문자열 = document.querySelector('#입항관리도크부터도착항우측까지').innerHTML;
  var 입항관리줄바꿈개수 = 입항관리전체문자열.split('\n');
  var 입항관리bl_컨_결합문자열 = [];//컨_bl, 공백이 있을수 있지만 _ 는 있다. undefined 또는 공백
  for (var i = 0; i < 입항관리줄바꿈개수.length; i++) {
    입항관리bl_컨_결합문자열.push(입항관리줄바꿈개수[i].split('\t')[2] + '!' + 입항관리줄바꿈개수[i].split('\t')[10])
  }
  //배열을 다시 ! 로 join하여 하나의 문자열로 만든다. (컨과 bl이 느낌표로 결합된 하나의 문자열이 됨됨)
  입항관리bl_컨_결합문자열 = 입항관리bl_컨_결합문자열.join('!');

  var 리스트bl_컨_배열 = [];
  var 없는거개수=0;
  //변수 그냥 사용 : #리스트자료풀림결과 를 #축산예정자료풀기결과 로 변경하여...
  //var 리스트목록한줄div = document.querySelectorAll('#PNG셑팅 #리스트자료풀림결과 > div');
  var 리스트목록한줄div = document.querySelectorAll('#PNG셑팅 #축산예정자료풀기결과 tr');
  var 리스트목록개수 = 리스트목록한줄div.length;
  for (var i = 0; i < 리스트목록개수; i++) {
    //console.log(리스트목록한줄div[i].children[2].innerHTML) : BL
    //console.log(리스트목록한줄div[i].children[4].innerHTML) : 컨
    var 비엘 = 리스트목록한줄div[i].children[2].innerHTML;
    var 컨 = 리스트목록한줄div[i].children[3].innerHTML;
    if (비엘 == 'B/LNO.' || (비엘 == '' && 컨 == '')) { continue; } //다음반복문으로
    //문자열.indexOf('찾는문자열') 없으면 -1
    if (입항관리bl_컨_결합문자열.indexOf(비엘) > -1 || 입항관리bl_컨_결합문자열.indexOf(컨) > -1) {
      //컨이나 bl중 하나라도 맞으면 건너뜀
    } else {
      //console.log('없음 : ' + 비엘 + ', ' + 컨)
      리스트목록한줄div[i].classList.add('js한줄색칠있음');
      없는거개수+=1;
    }
  }
  if (없는거개수==0) {alert('모두 입항관리에 있음')}
}
function 입항관리에없는목록색칠() {
  var 개수 = document.querySelectorAll('.js한줄색칠있음').length;
  for (i = 0; i < 개수; i++) {
    document.querySelectorAll('.js한줄색칠있음')[0].classList.remove('js한줄색칠있음')
  }
  //입항관리자료는 전체문자열로 받아서 처리해야한다.
  var 입항관리전체문자열 = document.querySelector('#입항관리도크부터도착항우측까지').innerHTML;
  var 입항관리줄바꿈개수 = 입항관리전체문자열.split('\n');
  var 입항관리bl_컨_결합문자열 = [];//컨_bl, 공백이 있을수 있지만 _ 는 있다. undefined 또는 공백
  for (var i = 0; i < 입항관리줄바꿈개수.length; i++) {
    입항관리bl_컨_결합문자열.push(입항관리줄바꿈개수[i].split('\t')[2] + '!' + 입항관리줄바꿈개수[i].split('\t')[10])
  }
  //배열을 다시 ! 로 join하여 하나의 문자열로 만든다. (컨과 bl이 느낌표로 결합된 하나의 문자열이 됨됨)
  입항관리bl_컨_결합문자열 = 입항관리bl_컨_결합문자열.join('!');

  var 리스트bl_컨_배열 = [];
  var 없는거개수=0;
  //var 리스트목록한줄div = document.querySelectorAll('#PNG셑팅 #리스트자료풀림결과 > div');
  var 리스트목록한줄div = document.querySelectorAll('#PNG셑팅 #리스트자료풀림결과 tr');
  var 리스트목록개수 = 리스트목록한줄div.length;
  for (var i = 0; i < 리스트목록개수; i++) {
    //console.log(리스트목록한줄div[i].children[2].innerHTML) : BL
    //console.log(리스트목록한줄div[i].children[4].innerHTML) : 컨
    var 비엘 = 리스트목록한줄div[i].children[2].innerHTML;
    var 컨 = 리스트목록한줄div[i].children[4].innerHTML;
    if (비엘 == 'B/LNO.' || (비엘 == '' && 컨 == '')) { continue; } //다음반복문으로
    //문자열.indexOf('찾는문자열') 없으면 -1
    if (입항관리bl_컨_결합문자열.indexOf(비엘) > -1 || 입항관리bl_컨_결합문자열.indexOf(컨) > -1) {
      //컨이나 bl중 하나라도 맞으면 건너뜀
    } else {
      //console.log('없음 : ' + 비엘 + ', ' + 컨)
      리스트목록한줄div[i].classList.add('js한줄색칠있음');
      없는거개수+=1;
    }
  }
  if (없는거개수==0) {alert('모두 입항관리에 있음')}
}
function 공통한줄색칠있음clear() {
  var 개수 = document.querySelectorAll('.js한줄색칠있음').length;
  for (i = 0; i < 개수; i++) {
    document.querySelectorAll('.js한줄색칠있음')[0].classList.remove('js한줄색칠있음')
  }
}
function png셑팅click(e) {
  // 대부분의 모바일 브라우저(특히 iOS Safari, Chrome)는 <embed> 태그를 제대로 지원하지 않아요.
  // iOS에서는 PDF.js 같은 외부 뷰어 없이 PDF를 <embed>로 직접 표시할 수 없어요.

  //nodeName(BODY), parentNode : BODY가 되면 작동하지 않는다. break; 탈출, continue; 다음반복문, 5번 상위로 검사하면 충분할것같아서 5로 함함
  console.log('png셑팅click(e)')
  if (e.target.parentNode.tagName == 'TR') {
    if (e.target.parentNode.classList.contains('js한줄색칠있음')) {
      e.target.parentNode.classList.remove('js한줄색칠있음');
    } else {
      e.target.parentNode.classList.add('js한줄색칠있음');
    }

    //navigator.clipboard.writeText(e.target.innerHTML)
    //모바일에서 '클립보드에 복사되었어요.' 안뜨게
    navigator.clipboard.writeText(e.target.innerHTML).then(() => {})

    var 복사텍스트=e.target.innerHTML;
    document.querySelector('#클릭복사본').innerHTML=복사텍스트.replace(/!/gmi,'<br>');
    var 복사텍스트=document.querySelector('#클릭복사본').innerHTML;

    //규칙 : 시작부분에 [PDF파일이름] 형태로 입력해놓으면 어디서든
    //[pdf, [png, [txt,로 시작되는것이 있으면 "클릭파일"에 파일을 넣는다.
    var 열기위치=0;
    var 닫기위치=0;
    열기위치=복사텍스트.indexOf('[');
    닫기위치=복사텍스트.indexOf(']');

    if (열기위치==-1 || 닫기위치==-1 || 열기위치>닫기위치) {return;}

    var 파일이름=복사텍스트.substring(열기위치+1,닫기위치-열기위치).trim(); //파일이름 맞는데 인식이 안되기도함?
    var 바꿀문자열="[" + 파일이름 + "]";


    var 버튼문자열='<button onclick="클릭파일d_none()">닫기</button><br>';

    if (복사텍스트.indexOf('[PNG')>-1) { //정규식 어렵다 다른방식으로로
      //왼쪽에 표시되는 파일부분
      console.log(파일이름);
      var 대체문자열='<img src="portal/images/문서연결_리스트/' + 파일이름 + '.png" style="border:1px solid black;" alt="이미지없음">'
      document.querySelector('#PNG셑팅 #클릭파일').innerHTML=버튼문자열 + 대체문자열;      
      //파일보기로 변경한 복사내용
      document.querySelector('#PNG셑팅 #클릭복사본').innerHTML=복사텍스트.replace(바꿀문자열,'<button onclick="클릭파일d_none제거()">' + 파일이름 + '</button>')
      return;
    }

    if (복사텍스트.indexOf('[PDF')>-1) { //정규식 어렵다 다른방식으로로
      //왼쪽에 표시되는 파일부분
      console.log(파일이름);

      var 대체문자열='<embed src="portal/images/문서연결_리스트/' + 파일이름 + '.pdf" type="application/pdf" width="1010px" height="1000px/" dataset.searchdata="기본가로700">'
      document.querySelector('#PNG셑팅 #클릭파일').innerHTML=버튼문자열 + 대체문자열;      
      //파일보기로 변경한 복사내용
      if (is_mobile) {//새창에서 열기
        window.open(`portal/images/문서연결_리스트/${파일이름}.pdf`, '_blank');
      } else {
        document.querySelector('#PNG셑팅 #클릭복사본').innerHTML=복사텍스트.replace(바꿀문자열,'<button onclick="클릭파일d_none제거()">' + 파일이름 + '</button>')
      }
      return;
    }











  }
}
function 클릭파일d_none() {
  document.querySelector('#PNG셑팅 #클릭파일').classList.add('d-none');
}
function 클릭파일d_none제거() {
  if (document.querySelector('#PNG셑팅 #클릭파일').classList.contains('d-none')) {
    document.querySelector('#PNG셑팅 #클릭파일').classList.remove('d-none');
  } else {
    document.querySelector('#PNG셑팅 #클릭파일').classList.add('d-none');
  }
}
function 정보수집on_off() {
  if (document.querySelector('#오른쪽정보수집부분').classList.contains('d-none')) {
    document.querySelector('#오른쪽정보수집부분').classList.remove('d-none');
    document.querySelector('#왼쪽선사링크부분').setAttribute('style','margin-right:0px')
  } else {
    document.querySelector('#오른쪽정보수집부분').classList.add('d-none');
    document.querySelector('#왼쪽선사링크부분').setAttribute('style','margin-right:1500px')
  }
}
function 선사on_off() {
  if (document.querySelector('#두개중선사관련').classList.contains('d-none')) {
    document.querySelector('#두개중선사관련').classList.remove('d-none');
    document.querySelector('#왼쪽고정복사자료').setAttribute('style','margin-right:10px')
  } else {
    document.querySelector('#두개중선사관련').classList.add('d-none');
    document.querySelector('#왼쪽고정복사자료').setAttribute('style','margin-right:1500px')
  }
}
리스너_head_button_group.addEventListener('click', 리스너_head_button_group클릭이벤트);
리스너png셑팅.addEventListener('click', png셑팅click);






