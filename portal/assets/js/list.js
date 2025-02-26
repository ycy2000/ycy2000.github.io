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

  if (e.target.innerHTML == '리스트DDDD') {
    console.log('PNG_리스트_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = '<img src="portal/images/문서연결_리스트/PNG_리스트.png" alt="이미지없음">';
  }
  if (e.target.innerHTML == '리스트') {
    console.log('리스트_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#리스트풀기관련').innerHTML;
    리스트풀기()
  }
  if (e.target.innerHTML == '예정') {
    console.log('PNG_예정_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = '<img src="portal/images/문서연결_리스트/PNG_예정.png" alt="이미지없음">';
  }
  if (e.target.innerHTML == '완료') {
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
  if (e.target.innerHTML == '입항관리') {
    console.log('선사_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#선사와CY관련').innerHTML;
    if (document.querySelector('#두개중선사관련').classList.contains('d-none')) { document.querySelector('#두개중선사관련').classList.remove('d-none') }
    if (document.querySelector('#두개중CY관련').classList.contains('d-none')) { } else { document.querySelector('#두개중CY관련').classList.remove('d-none') }
    입항관리풀기()
  }
  if (e.target.innerHTML == 'CY') {
    console.log('CY_셑팅')
    document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#선사와CY관련').innerHTML;
    if (document.querySelector('#두개중CY관련').classList.contains('d-none')) { document.querySelector('#두개중CY관련').classList.remove('d-none') }
    if (document.querySelector('#두개중선사관련').classList.contains('d-none')) { } else { document.querySelector('#두개중선사관련').classList.remove('d-none') }
  }
}
function 리스트단어검색() {
  console.log('리스트단어검색click()');
  //추가 : 검색결과바탕색 클래스 TEXT만 남기기
  var 검색결과바탕색_클래스들 = document.querySelectorAll('.검색결과바탕색');
  for (var i = 0; i < 검색결과바탕색_클래스들.length; i++) {
    검색결과바탕색_클래스들[i].outerHTML = 검색결과바탕색_클래스들[i].innerHTML;
  }
  //innerHTML로 검색한다. 메모도 검색해야하니까. 처음에만 두번표시한다?
  var 검색할문자 = document.querySelector('#리스트검색input').value.toUpperCase();
  if (document.querySelector('#리스트검색input').value == '') { return; }

  var 찾는값 = document.querySelector('#리스트검색input').value;
  var 정규식내부 = new RegExp('(?![^<]*>)' + 찾는값, 'ig')

  //예전코드 대비 추가 1 : id(공백도 있으니 유의) 요소의 innerHTML에 검색문자 있을때 id 를 배열에 담기.
  var 검색결과포함id배열 = [];
  // 해당 캔버스관련만 : var 검색할클래스들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none > [id]');

  //id의 innerHTML에 찾는값 있을때 '아이디추출', 내부 값 색칠
  //var 검색할클래스들 = document.querySelectorAll('.검색 > div > *');
  var 검색할클래스들 = document.querySelectorAll('.검색 td');

  for (var i = 0; i < 검색할클래스들.length; i++) {
    if (검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      검색결과포함id배열.push(검색할클래스들[i].id);
      if (검색할문자 != ' ') {
        검색할클래스들[i].innerHTML =
          검색할클래스들[i].innerHTML.replace(정규식내부, '<span class="검색결과바탕색">' + 찾는값 + '</span>');
      }
    }
  }
  if (document.querySelectorAll('.검색결과바탕색').length == 0) {
    alert('검색결과 없음')
  }
}
function 입항관리단어검색() {
  console.log('입항관리단어검색click()');
  //추가 : 검색결과바탕색 클래스 TEXT만 남기기
  var 검색결과바탕색_클래스들 = document.querySelectorAll('.검색결과바탕색');
  for (var i = 0; i < 검색결과바탕색_클래스들.length; i++) {
    검색결과바탕색_클래스들[i].outerHTML = 검색결과바탕색_클래스들[i].innerHTML;
  }
  //innerHTML로 검색한다. 메모도 검색해야하니까. 처음에만 두번표시한다?
  var 검색할문자 = document.querySelector('#입항관리검색input').value.toUpperCase();
  if (document.querySelector('#입항관리검색input').value == '') { return; }

  var 찾는값 = document.querySelector('#입항관리검색input').value;
  var 정규식내부 = new RegExp('(?![^<]*>)' + 찾는값, 'ig')

  //예전코드 대비 추가 1 : id(공백도 있으니 유의) 요소의 innerHTML에 검색문자 있을때 id 를 배열에 담기.
  var 검색결과포함id배열 = [];
  // 해당 캔버스관련만 : var 검색할클래스들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none > [id]');

  //id의 innerHTML에 찾는값 있을때 '아이디추출', 내부 값 색칠
  var 검색할클래스들 = document.querySelectorAll('.검색 tr');

  for (var i = 0; i < 검색할클래스들.length; i++) {
    if (검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      검색결과포함id배열.push(검색할클래스들[i].id);
      if (검색할문자 != ' ') {
        검색할클래스들[i].innerHTML =
          검색할클래스들[i].innerHTML.replace(정규식내부, '<span class="검색결과바탕색">' + 찾는값 + '</span>');
      }
    }
  }
  if (document.querySelectorAll('.검색결과바탕색').length == 0) {
    alert('검색결과 없음')
  }
}
function 리스트1부터요약까지복붙자료풀기() {
  //div,input 하면 줄바꿈 \n이 없다?
  console.log('리스트1부터요약까지복붙자료풀기()')
  document.querySelector('#리스트1부터20피트구분까지만').innerHTML = document.querySelector('#리스트복붙textarea').value;
  리스트풀기();
}
function 리스트풀기() {
  // document.querySelector('#원본화주와컨').value=document.querySelector('#원본화주와컨').value;
  //탭 : \t, 줄바꿈 \n : split는 정규식으로 입력받는다.
  var 리스트텍스트 = document.querySelector('#리스트1부터20피트구분까지만').innerHTML;
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
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[1] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[2] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[3] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[4] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[5] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[6] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[7] + '</td>'
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[8] + '</td>' //입항일
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[9] + '</td>' //구분(축산수산구분 제외외)
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[0] + '</td>' //도착일
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[10] + '</td>' //도착시간
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[11] + '</td>' //구분(20,40피트), 13 화찰 제외
  
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
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[10] + '</td>' //구분(20,40피트), 13 화찰 제외
  
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
      div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[12] + '</td>' //구분(20,40피트), 13 화찰 제외
  
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
  var 자료풀림결과 = document.querySelector('#입항관리자료풀림결과');
  자료풀림결과.innerHTML = '';
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
    자료풀림결과.innerHTML = 자료풀림결과.innerHTML + div안span4;
  }
  자료풀림결과.innerHTML='<table><tbody>' + 자료풀림결과.innerHTML + '</tbody></table>'

  자료풀림결과=document.querySelectorAll('#입항관리자료풀림결과 tr');

  for (var i = 0; i < 자료풀림결과.length; i++) {
     if (자료풀림결과[i].children[7].innerHTML == '물품') {
      자료풀림결과[i].children[9].classList.add('js시간노랑');
      break;
    }
  }
  document.querySelector('#입항관리복붙textarea').value = '';
}
입항관리풀기()
리스트풀기()

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
  if (단독담기배열.length==0) {return;}
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
    }



  }
}

function 공통한줄색칠있음clear() {
  var 개수 = document.querySelectorAll('.js한줄색칠있음').length;
  for (i = 0; i < 개수; i++) {
    document.querySelectorAll('.js한줄색칠있음')[0].classList.remove('js한줄색칠있음')
  }
}
function png셑팅click(e) {
  //nodeName(BODY), parentNode : BODY가 되면 작동하지 않는다. break; 탈출, continue; 다음반복문, 5번 상위로 검사하면 충분할것같아서 5로 함함
  console.log('png셑팅click(e)')
  if (e.target.parentNode.tagName == 'TR') {
    navigator.clipboard.writeText(e.target.innerHTML)
    if (e.target.parentNode.classList.contains('js한줄색칠있음')) {
      e.target.parentNode.classList.remove('js한줄색칠있음'); return;
    } else {
      e.target.parentNode.classList.add('js한줄색칠있음'); return;
    }
  }
}
리스너_head_button_group.addEventListener('click', 리스너_head_button_group클릭이벤트);
리스너png셑팅.addEventListener('click', png셑팅click);






