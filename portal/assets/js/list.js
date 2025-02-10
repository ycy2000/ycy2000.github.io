//메모 관련 달력
const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("monthYear");
let currentDate = new Date();

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
let currentDate2 = new Date();
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
  var 첫번째버튼들 = document.querySelectorAll('#메모div > div > button:nth-of-type(1)');
  for (var i=0; i<첫번째버튼들.length; i++) {
    console.log(첫번째버튼들[i].innerHTML)
    //달력월, 달력일, 버튼월, 버튼일 / 버튼 월 일을 배열에 담아놓고, 달력 순회하여 표시하도록 코딩
  }

}
첫번째버튼날짜있을때댤력에표시();
//메모 관련 끝..  

//가로 한줄씩 : var 줄바꿈정보=문자열.split('\n');, 한줄안의 셀들 :줄바꿈한줄정보=줄바꿈정보[i].split('\t');
function 풀기_리스트() {
  console.log('풀기_리스트()')
  document.querySelector('#풀기셑팅').classList.remove('d-none');
  document.querySelector('#PNG셑팅').classList.add('d-none');

    var 문자열=document.querySelector('#풀기_리스트_왼쪽').innerHTML;
    var 줄바꿈정보=문자열.split('\n'); //\n=줄바꿈 (가로10칸이 하나의 정보)
    var 줄바꿈한줄정보;
    var 한줄결과문자열='';
    var 왼쪽결과합치기문자열='';
    if (문자열=='') {return;}
    for (var i=0; i<줄바꿈정보.length-1; i++) {
      한줄결과문자열='';
      줄바꿈한줄정보=줄바꿈정보[i].split('\t'); //\t=셀당1개정보
      for (var 내부=0; 내부<줄바꿈한줄정보.length; 내부++) {
        if (내부==0 && i==0) {한줄결과문자열+='<div></div>';}
        if (내부==0 && i>0) {한줄결과문자열+='<div>' + i + '</div>';}
        한줄결과문자열+='<div>' + 줄바꿈한줄정보[내부] + '</div>';
      }
      한줄결과문자열='<div>' + 한줄결과문자열 + '</div>';
      왼쪽결과합치기문자열=왼쪽결과합치기문자열 + 한줄결과문자열;
    }
    왼쪽결과합치기문자열='<div id="js_리스트_왼쪽">' + 왼쪽결과합치기문자열 + '</div>'; //inline-block 설정을 위한 div 감싸기

    var 문자열=document.querySelector('#풀기_리스트_정리').innerHTML;
    var 줄바꿈정보=문자열.split('\n'); //정리
    var 줄바꿈한줄정보;
    var 한줄결과문자열='';
    var 정리결과합치기문자열='';
    if (문자열=='') {return;}
    for (var i=0; i<줄바꿈정보.length-1; i++) {
      한줄결과문자열='';
      줄바꿈한줄정보=줄바꿈정보[i].split('\t'); //\t=셀당1개정보
      for (var 내부=0; 내부<줄바꿈한줄정보.length; 내부++) {
        한줄결과문자열+='<div>' + 줄바꿈한줄정보[내부] + '</div>';
      }
      한줄결과문자열='<div>' + 한줄결과문자열 + '</div>';
      정리결과합치기문자열=정리결과합치기문자열 + 한줄결과문자열;
    }
    정리결과합치기문자열='<div id="js_리스트_정리">' + 정리결과합치기문자열 + '</div>'; //inline-block 설정을 위한 div 감싸기

    document.querySelector('#풀기셑팅').innerHTML=왼쪽결과합치기문자열 + 정리결과합치기문자열;
}

//시작시 작동코드
document.querySelector('#풀기셑팅').classList.add('d-none');
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
    document.querySelector('#풀기셑팅').classList.add('d-none');
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_리스트.png" alt="이미지없음">';
  }
  if (e.target.innerHTML=='예정') {
    console.log('PNG_예정_셑팅')
    document.querySelector('#풀기셑팅').classList.add('d-none');
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_예정.png" alt="이미지없음">';
  }
  if (e.target.innerHTML=='완료') {
    console.log('PNG_완료_셑팅')
    document.querySelector('#풀기셑팅').classList.add('d-none');
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_완료.png" alt="이미지없음">';
  }
  if (e.target.innerHTML=='면허,운송') {
    console.log('PNG_면허운송_셑팅')
    document.querySelector('#풀기셑팅').classList.add('d-none');
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_면허운송.png" alt="이미지없음">';
  }
  if (e.target.innerHTML=='메모') {
    console.log('PNG_면허운송_셑팅')
    document.querySelector('#풀기셑팅').classList.add('d-none');
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML=document.querySelector('#PNG셑팅에들어갈메모').innerHTML;
  }
}
function 리스너_head_button_group더블클릭이벤트(e) {
  console.log('더블클릭:클릭 실행후 더블클릭 실행됨')
  if (e.target.innerHTML=='리스트') {
    풀기_리스트();
  }
}

리스너_head_button_group.addEventListener('click', 리스너_head_button_group클릭이벤트);
리스너_head_button_group.addEventListener('dblclick', 리스너_head_button_group더블클릭이벤트);

