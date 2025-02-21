//메모 관련 달력
const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("monthYear");

var 임시오늘날짜=new Date();
var 임시오늘년=임시오늘날짜.getFullYear();
var 임시오늘월=임시오늘날짜.getMonth();
var id달력날짜기준월=document.querySelector('#달력날짜기준').innerHTML.substring(0,document.querySelector('#달력날짜기준').innerHTML.indexOf('월'))*1 -1;
if (임시오늘월<3 && id달력날짜기준월>8) {임시오늘년=임시오늘년-1}
if (임시오늘월>8 && id달력날짜기준월<3) {임시오늘년=임시오늘년+1}

let currentDate = new Date(임시오늘년,id달력날짜기준월,1);
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
currentDate2 = new Date(currentDate2.getFullYear(),currentDate2.getMonth()+1,1);




function renderCalendar2() {
  console.log('renderCalendar2()')
    daysContainer2.innerHTML = "";
    const year2 = currentDate2.getFullYear();
    const month2 = currentDate2.getMonth();
    monthYear2.textContent = `${year2}년 ${month2 + 1}월`;

    const firstDay2 = new Date(year2, month2, 1).getDay();
    const lastDate2 = new Date(year2, month2 + 1, 0).getDate();
    const today2 =  new Date(currentDate2.getFullYear(),currentDate2.getMonth()+1,1);

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
  var 메모날짜버튼들 = document.querySelectorAll('#메모div > div > button:nth-of-type(1)');
  var 메모날짜정보배열=[]; //2_11
  var 월index, 일index, 월, 일, 진행, 버튼문자열;
  var 오늘 = new Date();
  var 요일관련오늘년=오늘.getFullYear();
  var 요일관련오늘월=오늘.getMonth()+1;
  var 메모날짜년도;
  var 오늘월_일 = (오늘.getMonth()+1) + '_' + 오늘.getDate();

  //요일넣기
  const 요일들 = ["일","월","화","수","목","금","토"];
  var 메모날짜;
  //날짜가 있으면(?월?일 일로 끝남) 다음 button에 요일넣기, 
  for (var i=0; i<메모날짜버튼들.length; i++) {
    if (메모날짜버튼들[i].nextElementSibling.nextElementSibling.innerHTML.trim()=='') {
      메모날짜버튼들[i].nextElementSibling.nextElementSibling.innerHTML='_';
    }
    버튼문자열=메모날짜버튼들[i].innerHTML;
    월index=버튼문자열.indexOf('월'); //없으면 -1, 처음에 나오면 0
    일index=버튼문자열.indexOf('일'); //없으면 -1, 처음에 나오면 0
    if (월index>0) {월=버튼문자열.substring(0,월index)} else {월='숫자아님'}
    if (일index>0) {일=버튼문자열.substring(월index+1,일index)} else {일='숫자아님'}
    if (isNaN(월) || isNaN(일)) {진행=false;} else {진행=true;}
    if (진행) {
      메모날짜정보배열.push(월 + '_' + 일);
      //console.log(월 + '_' + 일 + ' / ' + 오늘월_일)
      if ((월 + '_' + 일)==오늘월_일) {
        메모날짜버튼들[i].classList.add('js오늘메모');
        메모날짜버튼들[i].nextElementSibling.classList.add('js오늘메모');
      }
      //요일넣기
      if (요일관련오늘월==1 && (월==11 || 월==12)) {
        메모날짜년도=요일관련오늘년-1;
        메모날짜=new Date(메모날짜년도,월,일);
        요일=요일들[메모날짜.getDay()];
        메모날짜버튼들[i].nextElementSibling.innerHTML=요일 + '요일';
      } else if (요일관련오늘월==12 && (월==1 || 월==2)) {
        메모날짜년도=요일관련오늘년+1;
        메모날짜=new Date(메모날짜년도,월,일);
        요일=요일들[메모날짜.getDay()];
        메모날짜버튼들[i].nextElementSibling.innerHTML=요일 + '요일';
      } else {
        메모날짜년도=요일관련오늘년;
        메모날짜=new Date(메모날짜년도,월,일);
        요일=요일들[메모날짜.getDay()];
        메모날짜버튼들[i].nextElementSibling.innerHTML=요일 + '요일';
      }
    }
    //console.log('메모날짜버튼개수 : ' + 메모날짜버튼들.length + ', 월index : ' + 월index + ', 일index : ' + 일index + ', 진행 : ' + 진행 + ', 월 : ' + 월 + ', 일 : ' + 일)
  }
  var 달력년월=document.querySelector('#monthYear').innerHTML;
  var 달력월=달력년월.substring(달력년월.indexOf('년')+1,달력년월.indexOf('월')).trim();
  var 현재날짜확인;
  for (var i=0; i<document.querySelectorAll('#days > div').length; i++) {
    현재날짜확인=달력월 + '_' + document.querySelectorAll('#days > div')[i].innerHTML;
    if (메모날짜정보배열.indexOf(현재날짜확인)>-1) {
      document.querySelectorAll('#days > div')[i].classList.add('js메모있는날짜달력표시');
    }
  }

  var 달력년월=document.querySelector('#monthYear2').innerHTML;
  var 달력월=달력년월.substring(달력년월.indexOf('년')+1,달력년월.indexOf('월')).trim();
  for (var i=0; i<document.querySelectorAll('#days2 > div').length; i++) {
    현재날짜확인=달력월 + '_' + document.querySelectorAll('#days2 > div')[i].innerHTML;
    if (메모날짜정보배열.indexOf(현재날짜확인)>-1) {
      document.querySelectorAll('#days2 > div')[i].classList.add('js메모있는날짜달력표시');
    }
  }

}
첫번째버튼날짜있을때댤력에표시();
//메모 관련 끝..  

//시작시 작동코드
document.querySelector('#PNG셑팅').classList.remove('d-none');
document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_예정.png" alt="이미지없음">';

var 리스너_head_button_group=document.querySelector('#head_button_group');
function 리스너_head_button_group클릭이벤트(e) {
  for (var i=0; i<document.querySelectorAll('.카테고리').length; i++) {
    document.querySelectorAll('.카테고리')[i].classList.remove('active');
  }
  if(e.target.classList.contains('카테고리')) {e.target.classList.add('active')}

  if (e.target.innerHTML=='리스트') {
    console.log('PNG_리스트_셑팅')
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_리스트.png" alt="이미지없음">';
  }
  if (e.target.innerHTML=='예정') {
    console.log('PNG_예정_셑팅')
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_예정.png" alt="이미지없음">';
  }
  if (e.target.innerHTML=='완료') {
    console.log('PNG_완료_셑팅')
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_완료.png" alt="이미지없음">';
  }
  if (e.target.innerHTML=='입항관리') {
    console.log('PNG_완료_셑팅')
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_입항관리.png" alt="이미지없음">';
  }
  if (e.target.innerHTML=='면허,운송') {
    console.log('PNG_면허운송_셑팅')
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_면허운송.png" alt="이미지없음">';
  }
  if (e.target.innerHTML=='메모') {
    console.log('PNG_면허운송_셑팅')
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML=document.querySelector('#PNG셑팅에들어갈메모').innerHTML;
  }
  if (e.target.innerHTML=='선사') {
    console.log('선사_셑팅')
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML=document.querySelector('#선사와CY관련').innerHTML;
    if (document.querySelector('#두개중선사관련').classList.contains('d-none')) {document.querySelector('#두개중선사관련').classList.remove('d-none')}
    if (document.querySelector('#두개중CY관련').classList.contains('d-none')) {} else {document.querySelector('#두개중CY관련').classList.remove('d-none')}
  }
  if (e.target.innerHTML=='CY') {
    console.log('CY_셑팅')
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML=document.querySelector('#선사와CY관련').innerHTML;
    if (document.querySelector('#두개중CY관련').classList.contains('d-none')) {document.querySelector('#두개중CY관련').classList.remove('d-none')}
    if (document.querySelector('#두개중선사관련').classList.contains('d-none')) {} else {document.querySelector('#두개중선사관련').classList.remove('d-none')}
  }
}
function 풀기() {
  // document.querySelector('#원본화주와컨').value=document.querySelector('#원본화주와컨').value;
  //탭 : \t, 줄바꿈 \n : split는 정규식으로 입력받는다.
  var 입항관리화주부터상세까지12텍스트=document.querySelector('#입항관리화주부터상세까지12').innerHTML;
  var 입항관리화주부터상세까지12_줄바꿈split=입항관리화주부터상세까지12텍스트.split('\n');
  // var 입항관리화주부터상세까지12_줄바꿈split = 입항관리화주부터상세까지12_줄바꿈split.filter(function(item) {return item !== null && item !== undefined && item !== '';});
  //마지막 배열이 0 이다, 이거 피해야함함
  var 자료풀림결과=document.querySelector('#자료풀림결과');
  자료풀림결과.innerHTML='';
  //1.화주,2.컨,4.상세,6.운송,7.물품,9.선명,10.BL,11.도착항,12.상세원본
  for (var i=0; i<입항관리화주부터상세까지12_줄바꿈split.length-1; i++) {
    if (입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[0].trim().length!=0) {
      var div안span4='';
      div안span4='<span>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[0] + '</span>'
      div안span4+='<span>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[1] + '</span>'
      div안span4+='<span>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[8] + '</span>'
      div안span4+='<span>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[9] + '</span>'
      div안span4+='<span>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[11] + '</span>'
      div안span4+='<span contenteditable></span>'
      div안span4='<div>' + div안span4 + '</div>'
      자료풀림결과.innerHTML=자료풀림결과.innerHTML+div안span4;
    }
  }





} 
풀기()

리스너_head_button_group.addEventListener('click', 리스너_head_button_group클릭이벤트);

