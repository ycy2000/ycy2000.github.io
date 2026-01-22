if (1==1) {//달력부분 및 초기화
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
  document.querySelector('#PNG셑팅').innerHTML = '<img src="portal/images/문서연결_리스트/A예정.png" alt="이미지없음">';
}
if (1==1) {//전체변수
  var 전체변수_이전탭='예정png';
  var 전체변수_클릭한탭='';
  var 전체변수_원본텍스트='';
  var now = new Date();	// 현재 날짜 및 시간
  var year = now.getFullYear();	// 연도
  document.querySelector('#year').textContent=year;

}
function 메모셑팅(e) {
  if (e.classList.contains('제목선택')) {
    document.querySelector('#코드_call').innerHTML='';
    document.querySelector('.제목 .제목선택')?.classList.remove('제목선택');
    return;
  }
  document.querySelector('#코드_call').innerHTML=document.querySelector(e.title).outerHTML;
  document.querySelector('.제목 .제목선택')?.classList.remove('제목선택');
  e.classList.add('제목선택');
}
if (1==1) {//리스너_head_button_group클릭이벤트(e)
  var 리스너_head_button_group = document.querySelector('#head_button_group');
  function 리스너_head_button_group클릭이벤트(e) {
    for (var i = 0; i < document.querySelectorAll('.카테고리').length; i++) {
      document.querySelectorAll('.카테고리')[i].classList.remove('active');
    }

    //자료보관 : 리스트,입항관리 클래스부여 등 그대로 보관하고 다른탭으로 넘어가려면, 전체변수_이전탭 이 리스트나 입항관리일때때
    if (전체변수_이전탭=='리스트') {
      if (document.querySelector('#PNG셑팅 #PNG셑팅내부_리스트자료풀림결과')) {
          document.querySelector('#리스트독립수정가능정보').innerHTML=document.querySelector('#PNG셑팅 #PNG셑팅내부_리스트자료풀림결과').innerHTML
      }
    }
    if (전체변수_이전탭=='입항관리') {
      if (document.querySelector('#PNG셑팅 #입항관리자료풀림결과')) {
        document.querySelector('#입항관리독립수정가능정보').innerHTML=document.querySelector('#PNG셑팅 #입항관리자료풀림결과').innerHTML
      }
    }


    //자료보관 끝>>>>

    if (e.target.classList.contains('카테고리')) { e.target.classList.add('active') }

    if (e.target.classList.contains('카테고리')) {
      if (e.target.innerHTML == '리스트') {
          전체변수_클릭한탭='리스트'
        } else if (e.target.innerHTML == '입항관리') {
          전체변수_클릭한탭='입항관리'
        } else {
          전체변수_클릭한탭='else'
      }
      if (전체변수_이전탭=='리스트') {리스트수정분적용()}
      if (전체변수_이전탭=='입항관리') {입항관리수정분적용()}
    }
    if (e.target.innerHTML == '예정') {//모바일에서 파일이름이 _로 시작되면 안되는듯
      전체변수_이전탭='else'
      console.log('PNG_예정_셑팅')
      document.querySelector('#PNG셑팅').innerHTML = '<img src="portal/images/문서연결_리스트/A예정.png" alt="이미지없음">';
    }
    if (e.target.innerHTML == '완료') {
      전체변수_이전탭='else'
      console.log('PNG_완료_셑팅')
      document.querySelector('#PNG셑팅').innerHTML = '<img src="portal/images/문서연결_리스트/A완료.png" alt="이미지없음">';
    }
    if (e.target.innerHTML == '운송') {
      전체변수_이전탭='else'
      console.log('PNG_면허운송_셑팅')
      document.querySelector('#PNG셑팅').innerHTML = '<img src="portal/images/문서연결_리스트/A면허운송.png" alt="이미지없음">';
    }
    if (e.target.innerHTML == '메모') {
      전체변수_이전탭='else'
      console.log('PNG_메모_셑팅')
      document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#탭_메모_wrap용도_none').innerHTML;
    }
    if (e.target.innerHTML == '라벨') {
      전체변수_이전탭='else'
      console.log('라벨_셑팅')
    }
    if (e.target.innerHTML == '리스트') {//위에 코드가 먼저 실행되니 수정분이 적용되는것이다.
      전체변수_이전탭='리스트'
      document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#탭_리스트풀기관련_wrap용도_none').innerHTML;
      리스트_탭클릭시_가져오기()
    }
    if (e.target.innerHTML == '입항관리') {
      전체변수_이전탭='입항관리'
      document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#탭_입항관리관련_wrap용도_none').innerHTML;
      입항관리_탭클릭시_가져오기()
      일단none숨겨();
      document.querySelector('#PNG셑팅 #표시_오른쪽2CY자료수집').classList.remove('d-none')
    }
    if (e.target.innerHTML == '축산예정') {
      전체변수_이전탭='else'
      console.log('축산예정_셑팅')
      document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#탭_축산예정관련_wrap용도_none').innerHTML;
      텍스트를_테이블형식으로_축산예정풀기()
    }
    if (e.target.innerHTML == '메_모') {
      전체변수_이전탭='else'
      console.log('메_모_셑팅')
      document.querySelector('#PNG셑팅').innerHTML = document.querySelector('#탭_메_모관련_wrap용도_none').innerHTML;
    }
  }
}
if (1==1) {//초기화때 3종, 초기화때원본텍스트테이블형식으로리스트풀기() : 초기화때만 ... 수정본에 결과 넣기
  function 리스트수정분적용() {
    console.log('리스트수정분적용()')
  }
  function 입항관리수정분적용() {
    console.log('  입항관리수정분적용()')
    var 수정할곳=document.querySelectorAll('#입항관리독립수정가능정보 tr');
    var 수정된요소=document.querySelectorAll('#PNG셑팅 #입항관리자료풀림결과 tr');
    for (var i=0; i<수정된요소.length; i++) {
      if (수정할곳[i].children[9].innerHTML!=수정된요소[i].children[9].innerHTML){
          수정할곳[i].children[9].innerHTML=수정된요소[i].children[9].innerHTML
          수정할곳[i].children[13].classList.add('수정')
      }
      if (수정할곳[i].children[11].innerHTML!=수정된요소[i].children[11].innerHTML){
          수정할곳[i].children[11].innerHTML=수정된요소[i].children[11].innerHTML
          수정할곳[i].children[13].classList.add('수정')
      }
      if (수정할곳[i].children[12].innerHTML!=수정된요소[i].children[12].innerHTML){
          수정할곳[i].children[12].innerHTML=수정된요소[i].children[12].innerHTML
          수정할곳[i].children[13].classList.add('수정')
      }
    }

  }
  function 리스트_탭클릭시_가져오기() {
    console.log('리스트_탭클릭시_가져오기()')
    document.querySelector("#PNG셑팅 #PNG셑팅내부_리스트자료풀림결과").innerHTML=document.querySelector("#리스트독립수정가능정보").innerHTML
  }
  function 입항관리_탭클릭시_가져오기() {
    console.log('입항관리_탭클릭시_가져오기()')
    document.querySelector("#PNG셑팅 #입항관리자료풀림결과").innerHTML=document.querySelector("#입항관리독립수정가능정보").innerHTML
  }
  function 텍스트를_테이블형식으로_리스트풀기() {
    //리스트독립수정가능정보 요소에 테이블형식 가공정보 넣는것까지만...
    console.log('초기화때리스트풀기()')
    var 리스트줄바꿈split = 전체변수_원본텍스트.split('\n');
    var 자료풀림결과 = document.querySelector('#리스트독립수정가능정보');
  
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
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[11] + '</td>' //구분(20,40피트), 13 화찰 제외
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[12] + '</td>' //입관운.도코딩
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[13] + '</td>' //내메모
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[14] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[15] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[16] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[17] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[18] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[19] + '</td>' //화찰입항
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[20] + '</td>' //요약1/2
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[21] + '</td>' //요약2/2

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
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[11] + '</td>' //입관운.도코딩
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[12] + '</td>' //내메모
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[13] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[14] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[15] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[16] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[17] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[18] + '</td>' //화찰입항
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[19] + '</td>' //요약1/2
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[20] + '</td>' //요약2/2
    
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
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[13] + '</td>' //입관운.도코딩
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[14] + '</td>' //내메모
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[15] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[16] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[17] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[18] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[19] + '</td>' //
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[20] + '</td>' //화찰입항
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[21] + '</td>' //요약1/2
        div안span4 += '<td>' + 리스트줄바꿈split[i].split('\t')[22] + '</td>' //요약2/2

        div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
        자료풀림결과.innerHTML = 자료풀림결과.innerHTML + div안span4;
      }
    }
    자료풀림결과.innerHTML='<table><tbody>' + 자료풀림결과.innerHTML + '</tbody></table>'

    var 시간노랑확인요소=document.querySelectorAll('#리스트독립수정가능정보 tr')
    for (var i = 0; i < 시간노랑확인요소.length; i++) {
      if (시간노랑확인요소[i].children[11].innerHTML == '도착시간') {
        시간노랑확인요소[i].children[14].classList.add('js시간노랑');
        break;
      }
    }
    var 요소=document.querySelectorAll('#리스트독립수정가능정보 table')
    for (var i=0; i<요소.length; i++) {
      //console.log(Math.round(((i+2) / 10)) % 2)
      if (Math.round(((i+3) / 10)) % 2 ==0 && i>1) {요소[i].classList.add('그레이')}
    }

  }
  function 텍스트를_테이블형식으로_입항관리풀기() {
    console.log('초기화때입항관리풀기()')
    // document.querySelector('#원본화주와컨').value=document.querySelector('#원본화주와컨').value;
    //탭 : \t, 줄바꿈 \n : split는 정규식으로 입력받는다.
    var 입항관리화주부터상세까지12텍스트 = 전체변수_원본텍스트;
    var 입항관리화주부터상세까지12_줄바꿈split = 입항관리화주부터상세까지12텍스트.split('\n');
    // var 입항관리화주부터상세까지12_줄바꿈split = 입항관리화주부터상세까지12_줄바꿈split.filter(function(item) {return item !== null && item !== undefined && item !== '';});
    //마지막 배열이 0 이다, 이거 피해야함함
    var 입관자료풀림결과 = document.querySelector('#입항관리독립수정가능정보');
     //1.화주,2.컨,4.상세,6.운송,7.물품,9.선명,10.BL,11.도착항,12.상세원본
    
    //메모2관련 입항관리의 컨,bl 배열담기
    var 입관bl=[], 입관컨=[];
  
  
    for (var i = 0; i < 입항관리화주부터상세까지12_줄바꿈split.length - 1; i++) {
      //if (입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[0].trim().length!=0) { 리스트에 활용시 첫 정보가 비어 있을수 있는데 건너뛴다..
      //브라우저 드래그한거 넣으면 trim에서 에러난다.
      입관bl.push(입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[10])
      입관컨.push(입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[2])
      var div안span4 = '';
      div안span4 = '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[0] + '</td>'
      div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[1] + '</td>'
      div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[2] + '</td>'
      div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[3] + '</td>'
      div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[4] + '</td>'//상세참조
      div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[5] + '</td>' //빈칸
      div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[6] + '</td>'
      div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[7] + '</td>'
      div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[8] + '</td>' //-2
      div안span4 += '<td class="class상세편집토글">' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[9] + '</td>' //선명
      div안span4 += '<td>' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[10] + '</td>'
      div안span4 += '<td class="class상세편집토글">' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[11] + '</td>' //도착항
      div안span4 += '<td class="class상세편집토글">' + 입항관리화주부터상세까지12_줄바꿈split[i].split('\t')[12] + '</td>' //상세내용원본
      if (i==0) {
        div안span4 += '<td>복사</td>' //빈칸(상세원본복사쉽도록)
      } else {
        div안span4 += '<td></td>' //빈칸(상세원본복사쉽도록)
      }
      div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
      입관자료풀림결과.innerHTML = 입관자료풀림결과.innerHTML + div안span4;
    }
    입관자료풀림결과.innerHTML='<table><tbody>' + 입관자료풀림결과.innerHTML + '</tbody></table>'
  
    입관자료풀림결과=document.querySelectorAll('#입항관리독립수정가능정보 tr');
  
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
    
    //위에서 입관bl, 입관컨 배열이 있음
    var 메모2자료풀림결과=document.querySelectorAll('#오른쪽리스트메모2만 td');
    var 리스트bl=[], 리스트컨=[], 리스트메모2=[];
    for (var i=0; i<document.querySelectorAll('#리스트독립수정가능정보 tr').length; i++) {
      리스트bl.push(document.querySelectorAll('#리스트독립수정가능정보 tr')[i].children[2].innerHTML.trim());
      리스트컨.push(document.querySelectorAll('#리스트독립수정가능정보 tr')[i].children[4].innerHTML.trim());
      리스트메모2.push(document.querySelectorAll('#리스트독립수정가능정보 tr')[i].children[14].innerHTML.trim());
    }
  
    for (var i = 1; i < 리스트bl.length; i++) {
      //입항관리의 bl이나 컨중 일치하면 넣는다.
      if (입관bl.indexOf(리스트bl[i])>-1) {
        메모2자료풀림결과[입관bl.indexOf(리스트bl[i])].innerHTML=리스트메모2[i];
        continue;
      } 
      if (입관컨.indexOf(리스트컨[i])>-1) {
        메모2자료풀림결과[입관컨.indexOf(리스트컨[i])].innerHTML=리스트메모2[i];
        continue;
      } 
      //console.log('리스트bl개수 : ' + 리스트bl.length + ' 개 중에 BL:' + 리스트bl[i] + ' 위치 : ' + '입관bl개수 : ' + 입관bl.length + ' 개 중에' + 입관bl.indexOf(리스트bl[i]))
    }
    
  }
  function 텍스트를_테이블형식으로_축산예정풀기() {
    console.log('초기화때축산예정풀기()')
    var 원본텍스트 = document.querySelector('#원본text_머리글제외_a열제외_축산예정_b_aa시간열까지').innerHTML;
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
  전체변수_원본텍스트 = document.querySelector('#원본text_리스트1부터w요약열까지').innerHTML;
  텍스트를_테이블형식으로_리스트풀기()
    //리스트단독 입항관리에 넣을때 사용할 요소다
    //document.querySelector('#리스트독립수정가능정보').innerHTML=document.querySelector('#PNG셑팅내부_리스트자료풀림결과').outerHTML;
  전체변수_원본텍스트 = document.querySelector('#원본text_입항관리도크부터도착항우측까지').innerHTML;
  텍스트를_테이블형식으로_입항관리풀기()
  전체변수_원본텍스트 = document.querySelector('#원본text_머리글제외_a열제외_축산예정_b_aa시간열까지').innerHTML;
  텍스트를_테이블형식으로_축산예정풀기()

  function 리스트1부터요약까지복붙자료풀기() {
    //div,input 하면 줄바꿈 \n이 없다?
    console.log('리스트1부터요약까지복붙자료풀기()')
    document.querySelector('#리스트독립수정가능정보').innerHTML='';
    전체변수_원본텍스트 = document.querySelector('#리스트복붙textarea').value;
    텍스트를_테이블형식으로_리스트풀기();
    리스트_탭클릭시_가져오기();
  }
  function 입항관리BM복붙자료풀기() {
    //div,input 하면 줄바꿈 \n이 없다?
    console.log('입항관리BM복붙자료풀기()')
    document.querySelector('#입항관리독립수정가능정보').innerHTML='';
    전체변수_원본텍스트 = document.querySelector('#입항관리복붙textarea').value;
    텍스트를_테이블형식으로_입항관리풀기();
    입항관리_탭클릭시_가져오기();
  }
  function 리스트단독입항관리맨에추가() {
    console.log('리스트단독입항관리맨뒤에추가()')
    var 입항관리수정결과 = document.querySelector('#입항관리독립수정가능정보');
    var 입항관리bl_컨_결합문자열 = 입항관리수정결과.innerText;
    var 단독담기배열=[];
    var 리스트메모2=[];
    var 오늘날짜 = new Date();
    var 오늘년 = 오늘날짜.getFullYear();
    var 월,일,요일;
    //var 리스트목록한줄div = document.querySelectorAll('#PNG셑팅 #PNG셑팅내부_리스트자료풀림결과 tr');
    var 리스트목록한줄div = document.querySelectorAll('#리스트독립수정가능정보 tr');
    var 리스트목록개수 = 리스트목록한줄div.length;
    for (var i = 0; i < 리스트목록개수; i++) {
      var 비엘 = 리스트목록한줄div[i].children[2].innerHTML.trim();
      var 컨 = 리스트목록한줄div[i].children[4].innerHTML.trim();
      if (비엘 == 'B/LNO.' || 컨 == '' || 입항관리bl_컨_결합문자열.indexOf(컨) > -1) { continue; } //다음반복문으로

      var 단독배열push문자열=[]; //일단배열에 담아 가공한다.

      리스트메모2.push(리스트목록한줄div[i].children[14].innerHTML.trim()); // 메모부분은 별도로 담아둔다다

      //★★입항관리에 넣을 정보를 가공해야함★★
      //리스트목록한줄div[i].children[13] : 입관운.도코딩 (도착항,운송사 정보 혼재, 점(.)이있으면 두개로 분리 좌(운송사),우(도착항))
      //                                                 값이 있는데 점이없다면 도착항만 있다.
      //리스트목록한줄div[i].children[16] : 선명
      //리스트목록한줄div[i].children[8] : 날짜아니면 "미정", 날짜면 "03/06(목)입항예정" 형태로 가공
      //리스트목록한줄div[i].children[10] : 도착일부분에 선사를 넣을수 있다. (:)가 없고 값이 있으면 선사 =>운송사(선사), 또는 ?????(선사)로 사용됨
      var 선명;
      if (리스트목록한줄div[i].children[16].innerHTML.trim().length==0) {선명='확인안함'; } else { 선명=리스트목록한줄div[i].children[16].innerHTML.trim()}

      //입항일=미정, 입항일=쓰여진대로, 입항일=날짜(입항예정) 형식이 될수 있다.

      var 입항일,입항일검사; //연관성 없지만 입항일은 변경값으로 전달.
      const 요일들 = ["일", "월", "화", "수", "목", "금", "토"]; // 요일 = 요일들[메모날짜.getDay()]; 입항일=new Date(2025,"0","1"); 1월1일
      입항일검사=리스트목록한줄div[i].children[8].innerHTML.trim();
      if (입항일검사.length==0 || 입항일검사.length=="미정") {
        입항일="미정"; // else if 조건은 일단 값이있는 경우다.
        } else if (입항일검사.indexOf('/')>-1 && 입항일검사.split('/').length==2) {// / 가 하나만 있는경우.. 날짜일가능성 많음.
          월=입항일검사.substring(0,입항일검사.indexOf('/'));
          일=입항일검사.substring(입항일검사.indexOf('/')+1,입항일검사.length);
          if (!isNaN(월) && !isNaN(일)) {//둘다 숫자면 날짜로 보자
            if (월>0 && 월<13 && 일 > 0 && 일 < 32 ) { //한번더 확인
              if (오늘날짜.getMonth()<3 && 월>9) {오늘년=오늘년-1}
              if (오늘날짜.getMonth()>8 && 월<4) {오늘년=오늘년+1}
              입항일검사=new Date(오늘년,월-1,일);
              요일=요일들[입항일검사.getDay()]
              월=입항일검사.getMonth()+1;
              일=입항일검사.getDate();
              // 숫자.length 는 사용이 안된다.
              if (월<10) {월='0' + 월}
              if (일<10) {일='0' + 일}
              입항일=월 + '/' + 일 + '(' + 요일 + ')입항예정'
            }
          }
        } else {
        입항일=입항일검사; //미정도 아니고 공백도 아니고 날짜도 아니면 있는그대로 쓴다.
      }
      //        리스트에 선사(도착일위치에)가 있는경우 : 1)운송사가 없으면 : ?????(선사). 2)운송사 있으면 : 운송사(선사) 로 전달 
      var 운송사,도착항,선사; //연관성 있는 것들. 선사 10, 운.도 13, 운.도 단독은 도착항 
      var 운도검사;
      선사=리스트목록한줄div[i].children[10].innerHTML.trim(); //선사로 쓰일때는 문자열넣겠지만... 도착일은 날짜고 숫자이다.
      //console.log('공백이나 문자열일때 true : ' + isNaN(선사)) 날짜일때 false
      if (isNaN(선사)) {선사='(' + 선사 + ')'} //공백이나 문자열(선사)일때, 지정업으면 공백이된다.
      운도검사=리스트목록한줄div[i].children[13].innerHTML.trim();//점이 있으면 두개로 분리
      if (운도검사.indexOf('.')>-1) {
            if (선사.length>0) {
              운송사=운도검사.substring(0,운도검사.indexOf('.')-1) + 선사
            } else {
              운송사=운도검사.substring(0,운도검사.indexOf('.')-1)
            }
            도착항=운도검사.substring(운도검사.indexOf('.')+1,운도검사.length)
      } else { // 점이 없을때. 공백 또는 값 있을때 
        if (운도검사.length==0) {
            if (선사.length>0) {
              운송사='?????' + 선사;
            } else {
              운송사='?????'
            }
            도착항='확인안함'
        } else { //하나의 값만 있을때는 도착항이다.
            운송사='?????'
            도착항=운도검사
        }
      }
      //★★입항관리에 넣을 정보를 가공해야함★★끝

      //입항관리 뿌리는것 : 0도크,1화주,2컨,3작업순서,4상세,5,빈칸,6운송사,7,물품,8빈칸,9선사,10BL,11상세원본
      단독배열push문자열.push(100);//0도크,순번부분
      단독배열push문자열.push(리스트목록한줄div[i].children[3].innerHTML.trim());//1화주
      단독배열push문자열.push(리스트목록한줄div[i].children[4].innerHTML.trim());//2컨
      단독배열push문자열.push('작업미정');//3작업순서
      단독배열push문자열.push('_' + 리스트목록한줄div[i].children[8].innerHTML.trim());//4상세. 리스트 입항일 값 넣는다
      단독배열push문자열.push('');//5빈칸
      단독배열push문자열.push(운송사 + 선사);//6운송사 + 선사있으면 (선사) + 하기
      단독배열push문자열.push(리스트목록한줄div[i].children[6].innerHTML.trim() + ' ' + 리스트목록한줄div[i].children[5].innerHTML.trim());//7 수량 띄우고 물품
      단독배열push문자열.push('');//8빈칸
      단독배열push문자열.push(선명);//9선명
      단독배열push문자열.push(리스트목록한줄div[i].children[2].innerHTML.trim());//10BL
      단독배열push문자열.push(도착항);//11도착항
      단독배열push문자열.push(입항일);//12상세원본, 리스트 입항일 값 넣는다

      단독배열push문자열=단독배열push문자열.join('\t');//탭으로 묶는다. 나중에 분리하여 사용할것이다
      단독담기배열.push(단독배열push문자열);

    }
    if (단독담기배열.length==0) {alert('단독 없음!'); return;} else {alert(단독담기배열.length + ' 건. 맨 아래 추가')}
    //console.log(단독담기배열) : 입항관리에 단독만 표시되도록 코딩
  
    var 자료풀림결과 = document.querySelector('#입항관리독립수정가능정보');
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
    document.querySelector('#입항관리자료풀림결과').innerHTML=자료풀림결과.innerHTML;
    console.log('메모2부분')
    //리스트시트 메모2부분 만들기
    var 메모2자료풀림결과=document.querySelector('#PNG셑팅 #오른쪽리스트메모2만');
     for (var i = 0; i < 리스트메모2.length; i++) {
      var div안span4 = '';
      div안span4 = '<table><tbody><tr><td>' + 리스트메모2[i] + '</td></tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
      메모2자료풀림결과.innerHTML = 메모2자료풀림결과.innerHTML + div안span4;
    }
  }
  function 축산예정_입항관리에없는목록색칠() {
    var 개수 = document.querySelectorAll('.js한줄색칠있음').length;
    for (i = 0; i < 개수; i++) {
      document.querySelectorAll('.js한줄색칠있음')[0].classList.remove('js한줄색칠있음')
    }
    //입항관리자료는 전체문자열로 받아서 처리해야한다.
    var 입항관리수정결과 = document.querySelector('#원본text_입항관리도크부터도착항우측까지').innerHTML;
    var 입항관리줄바꿈개수 = 입항관리수정결과.split('\n');
    var 입항관리bl_컨_결합문자열 = [];//컨_bl, 공백이 있을수 있지만 _ 는 있다. undefined 또는 공백
    for (var i = 0; i < 입항관리줄바꿈개수.length; i++) {
      입항관리bl_컨_결합문자열.push(입항관리줄바꿈개수[i].split('\t')[2] + '!' + 입항관리줄바꿈개수[i].split('\t')[10])
    }
    //배열을 다시 ! 로 join하여 하나의 문자열로 만든다. (컨과 bl이 느낌표로 결합된 하나의 문자열이 됨됨)
    입항관리bl_컨_결합문자열 = 입항관리bl_컨_결합문자열.join('!');
  
    var 리스트bl_컨_배열 = [];
    var 없는거개수=0;
    //변수 그냥 사용 : #PNG셑팅내부_리스트자료풀림결과 를 #축산예정자료풀기결과 로 변경하여...
    //var 리스트목록한줄div = document.querySelectorAll('#PNG셑팅 #PNG셑팅내부_리스트자료풀림결과 > div');
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
  function 리스트_입항관리에없는목록색칠() {
    var 개수 = document.querySelectorAll('.js한줄색칠있음').length;
    for (i = 0; i < 개수; i++) {
      document.querySelectorAll('.js한줄색칠있음')[0].classList.remove('js한줄색칠있음')
    }
    var 없는거개수=0;
    //입항관리자료는 전체문자열로 받아서 처리해야한다.
    var 입항관리전체문자열 = document.querySelector('#입항관리독립수정가능정보').innerText;
    var 리스트목록한줄div = document.querySelectorAll('#PNG셑팅 #PNG셑팅내부_리스트자료풀림결과 tr');
    var 리스트목록개수 = 리스트목록한줄div.length;
    for (var i = 0; i < 리스트목록개수; i++) {
      var 비엘 = 리스트목록한줄div[i].children[2].innerHTML.trim();
      var 컨 = 리스트목록한줄div[i].children[4].innerHTML.trim();
      if (비엘 == 'B/LNO.' || (비엘 == '' && 컨 == '')) { continue; } //다음반복문으로
      //문자열.indexOf('찾는문자열') 없으면 -1
      if (입항관리전체문자열.indexOf(비엘) > -1 || 입항관리전체문자열.indexOf(컨) > -1) {
        //컨이나 bl중 하나라도 맞으면 건너뜀
      } else {
        //console.log('없음 : ' + 비엘 + ', ' + 컨)
        리스트목록한줄div[i].classList.add('js한줄색칠있음');
        없는거개수+=1;
      }
    }
    if (없는거개수==0) {alert('모두 입항관리에 있음')}
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

var 리스너png셑팅 = document.querySelector('#PNG셑팅');
function 보숨토글(e) {
  let 요소=document.querySelector('#' + e.title);
  요소.classList.toggle('d-none'); // 보기, 숨기기 외 글자이면 건드리지 않는다.
  if (!['보기','숨기기'].includes(e.innerHTML)) {} else {if (요소.classList.contains('d-none')) {e.innerHTML='보기'} else {e.innerHTML='숨기기'}}
}
function 공통한줄색칠있음clear() {
  var 개수 = document.querySelectorAll('.js한줄색칠있음').length;
  for (i = 0; i < 개수; i++) {
    document.querySelectorAll('.js한줄색칠있음')[0].classList.remove('js한줄색칠있음')
  }
}
async function 임시코드() {
  const res = await fetch(`https://dongil-server.onrender.com/unipass?blno=${blno}&year=${year}`);
  let xmlText = await res.text();
  if (xmlText) {xmlText=`xml문자열`}

}
async function call_다시작성중() { 
//fetch()의 Response 객체는 body를 단 한 번만 읽을 수 있는 스트림입니다.
//body 소비 이후 Response 객체 접근 시도 자체가 에러를 던지는 경우가 있습니다
//console.log(res.status);(된다) xmlText = await res.text(); console.log(res.status);(안된다) 미리 저장할것
  const blno = document.getElementById("blno").textContent;
  const year = document.getElementById("year").textContent;
  let resok, resstatus; rescontenttype;
  //-------- 브라우저에서 api서버에 요청하는 함수 관련 -------- 
  try {
    // res는 response 객체. res.status, res.ok : res.status 값이 200~299이면 true
    // try에서 에러나면 멈추지 않고, 다음코드 상관없이 바로 catch구문으로 이동함. vba의 onerror resume next와 유사
    // e 는 에러의 이유를 설명하는 내부 문자열이거나 throw한 객체 보통 Error(문자열또는 객체)로 보낸다. 에러설명이 되게
    const res = await fetch(`https:/dongil-server.onrender.com/unipass?blno=${blno}&year=${year}`);
    resok=res.ok; resstatus=res.status;rescontenttype=res.headers.get("content-type");
    console.log('try에서 res.ok : ' + resok)
    console.log('try에서 res.status : ' + resstatus)
    console.log('try에서 content-type : ' + rescontenttype)
    if (!res.ok) throw new Error(res.status);
    if (res.status==404) throw new Error(res.status);
  } catch(e) {
    console.log(e);
  }

  let xmlText = await res.text();


    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, "text/xml"); //현재 xml이 깨질 경우 조용히 실패할 수 있음.
    //xml 파싱 오류 감지 추가 추천 (콘솔에 오류메세지 띄워줌)
    if (xml.querySelector("parsererror")) {
      console.error("XML 파싱 오류", xml.querySelector("parsererror").textContent);
      return;
    }

    //엑셀 vba(SelectSingleNode) 와 헷갈리지마라. xml.querySelector( ) 이렇게 쓰면 된다. <tCnt>44</tCnt>
    // body처럼 let root=xml.documentElement; // <?xml부분 제외한 전체를 담은 태그
    // xml에서는 innerHTML(X), textContent(O, 이것은 html에도 가능, 공통)
    document.querySelectorAll("#result > div > span:nth-of-type(2)").forEach( e => e.textContent='');

    let 결과정보제목들 =document.querySelectorAll("#result > div > span:nth-of-type(1)");

    // textContent 권장, html, xml 공통 / 공백노드 섞일 경우 대시 .trim() 권장
    let 진행단계 = xml.querySelector("tCnt");
    if (!진행단계) { // 찾은거 첫번째
      [...결과정보제목들].find(ele => ele.textContent === "진행정보").nextElementSibling.textContent="없음";return;
    }
    if (진행단계.textContent.trim()==0) {
      console.log('<tCnt>0</tCnt> return');
      [...결과정보제목들].find(ele => ele.textContent === "res.ok").nextElementSibling.textContent=res.ok;
      document.querySelector('#닫기').classList.remove('d-none');
      return;
    }
    
    // 진행단계 0 일때
    if (진행단계.textContent==0) {console.log('<tCnt>0</tCnt> return;'); return;}
    [...결과정보제목들].find(ele => ele.textContent === "진행정보").nextElementSibling.textContent=
        xml.querySelector("cargCsclPrgsInfoQryVo > prgsStts").textContent;

    let 문자열 = ''; let node; // 반출일시, 면허, cy에 사용할 변수
    // 면허(운송사)는 '보세운송 신고 접수'에 공란일수도 있다. 
    // cargTrcnRelaBsopTpcd '보세운송 신고 수리' 같은레벨 rlbrBssNo
    // rlbrCn '보세운송 반출' 같은레벨 <rlbrDttm>2025-12-24 07:05:27
    // 면허와 반출시간은 접수에서 있는거 쓰고, 수리에서 덮어쓰느 형식

    // 면허
    node=Array.from(xml.querySelectorAll('cargTrcnRelaBsopTpcd')).find(ele => ele.textContent === '보세운송 신고 접수');
    if (node) {
      문자열=node.parentNode.querySelector('rlbrBssNo')?.textContent || ''; // 안전하게
      [...결과정보제목들].find(ele => ele.textContent === "면허").nextElementSibling.textContent=문자열;
    }
    node=Array.from(xml.querySelectorAll('cargTrcnRelaBsopTpcd')).find(ele => ele.textContent === '보세운송 신고 수리');
    if (node) {
      문자열=node.parentNode.querySelector('rlbrBssNo')?.textContent || ''; // 안전하게
      [...결과정보제목들].find(ele => ele.textContent === "면허").nextElementSibling.textContent=문자열;
    }
    // 반출일시
    node=Array.from(xml.querySelectorAll('rlbrCn')).find(ele => ele.textContent === '보세운송 반출');
    if (node) {
      console.log('보세운송 반출 있음')
      문자열=node.parentNode.querySelector('rlbrDttm')?.textContent || ''; // 안전하게
      [...결과정보제목들].find(ele => ele.textContent === "반출일시").nextElementSibling.textContent=문자열;
    }

    let 숫자=xml.querySelector("cargCsclPrgsInfoQryVo > etprDt").textContent; //20260105
    [...결과정보제목들].find(ele => ele.textContent === "입항일시").nextElementSibling.textContent=
        `${숫자.slice(0,4)}-${숫자.slice(4,6)}-${숫자.slice(6,8)}`;

    // <cargTrcnRelaBsopTpcd>'입항적재화물목록 제출' 같은레벨 shedNm 태그 tectContent
    node=Array.from(xml.querySelectorAll('cargTrcnRelaBsopTpcd')).find(ele => ele.textContent === '입항적재화물목록 제출');
    if (node) {문자열=node.parentNode.querySelector('shedNm')?.textContent || '';}
    [...결과정보제목들].find(ele => ele.textContent === "cy").nextElementSibling.textContent=문자열;

    [...결과정보제목들].find(ele => ele.textContent === "선사").nextElementSibling.textContent=
        xml.querySelector("cargCsclPrgsInfoQryVo > shcoFlco").textContent;
    [...결과정보제목들].find(ele => ele.textContent === "선명").nextElementSibling.textContent=
        xml.querySelector("cargCsclPrgsInfoQryVo > shipNm").textContent;
    [...결과정보제목들].find(ele => ele.textContent === "컨개수").nextElementSibling.textContent=
        xml.querySelector("cargCsclPrgsInfoQryVo > cntrGcnt").textContent;
    [...결과정보제목들].find(ele => ele.textContent === "컨번호").nextElementSibling.textContent=
        xml.querySelector("cargCsclPrgsInfoQryVo > cntrNo").textContent;
    [...결과정보제목들].find(ele => ele.textContent === "포딩").nextElementSibling.textContent=
        xml.querySelector("cargCsclPrgsInfoQryVo > frwrEntsConm").textContent;

    document.querySelector('#닫기').classList.remove('d-none');
}
async function call() { 
//fetch()의 Response 객체는 body를 단 한 번만 읽을 수 있는 스트림입니다.
//body 소비 이후 Response 객체 접근 시도 자체가 에러를 던지는 경우가 있습니다
//console.log(res.status);(된다) xmlText = await res.text(); console.log(res.status);(안된다) 미리 저장할것
  console.log('async function call()');
  let 통신사용=true;
  let xmlText, resok, resstatus;
  if (통신사용) {
    const blno = document.getElementById("blno").textContent;
    const year = document.getElementById("year").textContent;
    // 이곳이 localhost:3000 이면 http://localhost:3000 생략가능, 현재는 8080;https://github.com/ycy2000/dongil-server
    //const res = await fetch(`http://localhost:3000/unipass?blno=${blno}&year=${year}`);
    const res = await fetch(`https://dongil-server.onrender.com/unipass?blno=${blno}&year=${year}`);
    resok=res.ok; resstatus=res.status
    console.log(resok);
    console.log(resstatus);
    xmlText = await res.text();
  } else {
    xmlText=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cargCsclPrgsInfoQryRtnVo><ntceInfo></ntceInfo></cargCsclPrgsInfoQryRtnVo>`
    // XML 파싱
  }
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, "text/xml"); //현재 xml이 깨질 경우 조용히 실패할 수 있음.

    //xml 파싱 오류 감지 추가 추천 (콘솔에 오류메세지 띄워줌)
    if (xml.querySelector("parsererror")) {
      console.error("XML 파싱 오류", xml.querySelector("parsererror").textContent);
      return;
    }

    //엑셀 vba(SelectSingleNode) 와 헷갈리지마라. xml.querySelector( ) 이렇게 쓰면 된다. <tCnt>44</tCnt>
    // body처럼 let root=xml.documentElement; // <?xml부분 제외한 전체를 담은 태그
    // xml에서는 innerHTML(X), textContent(O, 이것은 html에도 가능, 공통)
    document.querySelectorAll("#result > div > span:nth-of-type(2)").forEach( e => e.textContent='');

    let 결과정보제목들 =document.querySelectorAll("#result > div > span:nth-of-type(1)");

    // textContent 권장, html, xml 공통 / 공백노드 섞일 경우 대시 .trim() 권장
    let 진행단계 = xml.querySelector("tCnt");
    if (!진행단계) { // 찾은거 첫번째
      [...결과정보제목들].find(ele => ele.textContent === "진행정보").nextElementSibling.textContent="없음";return;
    }
    if (진행단계.textContent.trim()==0) {
      console.log('<tCnt>0</tCnt> return');
      [...결과정보제목들].find(ele => ele.textContent === "res.ok").nextElementSibling.textContent=res.ok;
      document.querySelector('#닫기').classList.remove('d-none');
      return;
    }
    
    // 진행단계 0 일때
    if (진행단계.textContent==0) {console.log('<tCnt>0</tCnt> return;'); return;}
    [...결과정보제목들].find(ele => ele.textContent === "진행정보").nextElementSibling.textContent=
        xml.querySelector("cargCsclPrgsInfoQryVo > prgsStts").textContent;

    let 문자열 = ''; let node; // 반출일시, 면허, cy에 사용할 변수
    // 면허(운송사)는 '보세운송 신고 접수'에 공란일수도 있다. 
    // cargTrcnRelaBsopTpcd '보세운송 신고 수리' 같은레벨 rlbrBssNo
    // rlbrCn '보세운송 반출' 같은레벨 <rlbrDttm>2025-12-24 07:05:27
    // 면허와 반출시간은 접수에서 있는거 쓰고, 수리에서 덮어쓰느 형식

    // 면허
    node=Array.from(xml.querySelectorAll('cargTrcnRelaBsopTpcd')).find(ele => ele.textContent === '보세운송 신고 접수');
    if (node) {
      문자열=node.parentNode.querySelector('rlbrBssNo')?.textContent || ''; // 안전하게
      [...결과정보제목들].find(ele => ele.textContent === "면허").nextElementSibling.textContent=문자열;
    }
    node=Array.from(xml.querySelectorAll('cargTrcnRelaBsopTpcd')).find(ele => ele.textContent === '보세운송 신고 수리');
    if (node) {
      문자열=node.parentNode.querySelector('rlbrBssNo')?.textContent || ''; // 안전하게
      [...결과정보제목들].find(ele => ele.textContent === "면허").nextElementSibling.textContent=문자열;
    }
    // 반출일시
    node=Array.from(xml.querySelectorAll('rlbrCn')).find(ele => ele.textContent === '보세운송 반출');
    if (node) {
      console.log('보세운송 반출 있음')
      문자열=node.parentNode.querySelector('rlbrDttm')?.textContent || ''; // 안전하게
      [...결과정보제목들].find(ele => ele.textContent === "반출일시").nextElementSibling.textContent=문자열;
    }

    let 숫자=xml.querySelector("cargCsclPrgsInfoQryVo > etprDt").textContent; //20260105
    [...결과정보제목들].find(ele => ele.textContent === "입항일시").nextElementSibling.textContent=
        `${숫자.slice(0,4)}-${숫자.slice(4,6)}-${숫자.slice(6,8)}`;

    // <cargTrcnRelaBsopTpcd>'입항적재화물목록 제출' 같은레벨 shedNm 태그 tectContent
    node=Array.from(xml.querySelectorAll('cargTrcnRelaBsopTpcd')).find(ele => ele.textContent === '입항적재화물목록 제출');
    if (node) {문자열=node.parentNode.querySelector('shedNm')?.textContent || '';}
    [...결과정보제목들].find(ele => ele.textContent === "cy").nextElementSibling.textContent=문자열;

    [...결과정보제목들].find(ele => ele.textContent === "선사").nextElementSibling.textContent=
        xml.querySelector("cargCsclPrgsInfoQryVo > shcoFlco").textContent;
    [...결과정보제목들].find(ele => ele.textContent === "선명").nextElementSibling.textContent=
        xml.querySelector("cargCsclPrgsInfoQryVo > shipNm").textContent;
    [...결과정보제목들].find(ele => ele.textContent === "컨개수").nextElementSibling.textContent=
        xml.querySelector("cargCsclPrgsInfoQryVo > cntrGcnt").textContent;
    [...결과정보제목들].find(ele => ele.textContent === "컨번호").nextElementSibling.textContent=
        xml.querySelector("cargCsclPrgsInfoQryVo > cntrNo").textContent;
    [...결과정보제목들].find(ele => ele.textContent === "포딩").nextElementSibling.textContent=
        xml.querySelector("cargCsclPrgsInfoQryVo > frwrEntsConm").textContent;

    document.querySelector('#닫기').classList.remove('d-none');
}

async function 매크로1_JS() {
  const url =
    "https://unipass.customs.go.kr:38010/ext/rest/cargCsclPrgsInfoQry/" +
    "retrieveCargCsclPrgsInfo?crkyCn=c290s255d192h253h000l090g5&mblNo=SGN501734600&blYy=2025";

  try {

    const response = await fetch(url); // 여기서 에러?

    if (!response.ok) return;

    const xmlText = await response.text();

    console.log(xmlText);

    // XML 파싱
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    console.log("xmlDoc.childNodes.length :", xmlDoc.childNodes.length);

    xmlDoc.childNodes.forEach(child => {
      console.log(
        `child.nodename : ${child.nodeName}, child.childNodes.length : ${child.childNodes.length}`
      );

      child.childNodes.forEach(innerChild => {
        console.log(
   `내부child.ChildNodes.length : ${innerChild.childNodes.length}, nodename : ${innerChild.nodeName}, type : ${innerChild.nodeType}`
        );
        console.log(innerChild.textContent);
      });
    });
  } catch (e) {
    console.error(e);
  }
}


function png셑팅click(e) {
  // 대부분의 모바일 브라우저(특히 iOS Safari, Chrome)는 <embed> 태그를 제대로 지원하지 않아요.
  console.log('png셑팅click(e)')
  
  if (e.target.classList.contains('입관파일넣기')) {
    console.log('e.target.classList.contains(입관파일넣기)')
    document.querySelector('#PNG셑팅 #입관클릭파일').innerHTML=document.querySelector('#' + e.target.title).innerHTML
    document.querySelector('#PNG셑팅 #입관클릭파일').classList.remove('d-none')
  }
  //리스트메모내용과 (width:250px) 독립되어 움직인다 연동하도록 하고싶다
  var 작동위치=''

  //리스트 목록 클릭 했을때 BL : 누른거에 부모의 3번째자식
  if (e.target.parentNode.tagName == 'TR') {
    console.log(e.target.parentNode.parentNode.parentNode.parentNode.id)
    작동위치=e.target.parentNode.parentNode.parentNode.parentNode.id;
    if (e.target.parentNode.classList.contains('js한줄색칠있음')) {
      e.target.parentNode.classList.remove('js한줄색칠있음');     
    } else {
      Array.from(document.querySelectorAll('.js한줄색칠있음')).forEach ( ele => ele.classList.remove('js한줄색칠있음'));
      e.target.parentNode.classList.add('js한줄색칠있음');
    }
    var 복사텍스트=e.target.innerHTML;

    if (작동위치=='') {alert('작동위치=="" 종료됨'); return;}

    if (작동위치=='PNG셑팅내부_리스트자료풀림결과') {
      document.querySelector('#PNG셑팅 #클릭복사본').innerHTML=복사텍스트.replace(/,/gmi,'<br>');
      document.querySelector('#blno').textContent=e.target.parentNode.children[2].textContent;
    }


  }
}
function 클릭파일d_none() {
  document.querySelector('#PNG셑팅 #클릭파일').classList.add('d-none');
}
function 입관클릭파일d_none() {
  document.querySelector('#PNG셑팅 #입관클릭파일').classList.add('d-none');
}
function 클릭파일d_none제거() {
  if (document.querySelector('#PNG셑팅 #클릭파일').classList.contains('d-none')) {
    document.querySelector('#PNG셑팅 #클릭파일').classList.remove('d-none');
  } else {
    document.querySelector('#PNG셑팅 #클릭파일').classList.add('d-none');
  }
}
function 입관클릭파일d_none제거() {
  if (document.querySelector('#PNG셑팅 #입관클릭파일').classList.contains('d-none')) {
    document.querySelector('#PNG셑팅 #입관클릭파일').classList.remove('d-none');
  } else {
    document.querySelector('#PNG셑팅 #입관클릭파일').classList.add('d-none');
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
function 일단none숨겨() {
  for (var i=0; i<document.querySelectorAll('.일단none').length; i++) {
    if (document.querySelectorAll('.일단none')[i].classList.contains('d-none')) {} else {document.querySelectorAll('.일단none')[i].classList.add('d-none')}
  }
}
function 선사on_off() {
  console.log('선사on_off()')
  if (document.querySelector('#PNG셑팅 #표시_오른쪽1선사와자료수집').classList.contains('d-none')) {
    document.querySelector('#PNG셑팅 #표시_오른쪽1선사와자료수집').classList.remove('d-none');
    document.querySelector('#PNG셑팅 #표시_오른쪽2CY자료수집').classList.add('d-none');
  } else {
    document.querySelector('#PNG셑팅 #표시_오른쪽1선사와자료수집').classList.add('d-none');
    document.querySelector('#PNG셑팅 #표시_오른쪽2CY자료수집').classList.add('d-none');
  }
}
function cy_on_off() {
  console.log('cy_on_off()')
  if (document.querySelector('#PNG셑팅 #표시_오른쪽2CY자료수집').classList.contains('d-none')) {
    document.querySelector('#PNG셑팅 #표시_오른쪽2CY자료수집').classList.remove('d-none');
    document.querySelector('#PNG셑팅 #표시_오른쪽1선사와자료수집').classList.add('d-none');
  } else {
    document.querySelector('#PNG셑팅 #표시_오른쪽2CY자료수집').classList.add('d-none');
    document.querySelector('#PNG셑팅 #표시_오른쪽1선사와자료수집').classList.add('d-none');
  }
}
function 리스트메모onoff() {
  console.log('리스트메모onoff()')
  if (document.querySelector('#메모외곽').classList.contains('d-none')) {
    document.querySelector('#PNG셑팅 #메모외곽').classList.remove('d-none');
    document.querySelector('#리스트메모onoff').innerHTML='메모off '
    document.querySelector('#표시_오른쪽2CY자료수집').style.marginLeft='-50px' 
    document.querySelector('#표시_오른쪽1선사와자료수집').style.marginLeft='-50px' 
    
  } else {
    document.querySelector('#메모외곽').classList.add('d-none');
    document.querySelector('#리스트메모onoff').innerHTML='메모on '
    document.querySelector('#표시_오른쪽2CY자료수집').style.marginLeft='0px' 
    document.querySelector('#표시_오른쪽1선사와자료수집').style.marginLeft='0px' 
  }
}

function 상세내용편집상태on_off() {
  console.log('상세내용편집상태on_off()')
  var 요소들=document.querySelectorAll('#PNG셑팅 .class상세편집토글');
  if (document.querySelector('#PNG셑팅 #편집상태표시').innerHTML=='편집 ON 상태(복사불편)') {
    for (var i=0; i<요소들.length; i++) {
      요소들[i].setAttribute('contenteditable','false')
    }
    document.querySelector('#PNG셑팅 #편집상태표시').innerHTML='편집 OFF 상태(복사용이)'
    return;
  }
  for (var i=0; i<요소들.length; i++) {
    요소들[i].setAttribute('contenteditable','true')
  }
  document.querySelector('#PNG셑팅 #편집상태표시').innerHTML='편집 ON 상태(복사불편)'
}
function 입관복사정보토글() {
  console.log('입관복사정보토글()')
  if (document.querySelector('#PNG셑팅 #입관클릭파일닫기').innerHTML=='X') {
    document.querySelector('#PNG셑팅 #입관클릭복사본').classList.add('d-none');
    document.querySelector('#PNG셑팅 #입관클릭파일닫기').innerHTML='O'
  } else {
    document.querySelector('#PNG셑팅 #입관클릭복사본').classList.remove('d-none');
    document.querySelector('#PNG셑팅 #입관클릭파일닫기').innerHTML='X'
  }
}
function 상세내용폭변경토글() {
  console.log('상세내용폭변경토글()') //class 입관td기본, 입관td최소화
  if (document.querySelector('#PNG셑팅 #입항관리자료풀림결과').classList.contains('입관td기본')) {
    document.querySelector('#PNG셑팅 #입항관리자료풀림결과').classList.remove('입관td기본');
    document.querySelector('#PNG셑팅 #입항관리자료풀림결과').classList.add('입관td최소화');
  } else if (document.querySelector('#PNG셑팅 #입항관리자료풀림결과').classList.contains('입관td최소화')) {
    document.querySelector('#PNG셑팅 #입항관리자료풀림결과').classList.remove('입관td최소화');
    document.querySelector('#PNG셑팅 #입항관리자료풀림결과').classList.add('입관td기본');
  }
}
function 파일리스트() {
  //파일순환전에 다른코드를 다 실행하기때문에.... 파일순환 결과를 사용할 수 없음

  console.log('파일리스트()')

  if (document.querySelector('.js문서연결리스트전체감싸기')) {return;}

  //이거 안넣으면 리스트 오른쪽에도 넣어진다. 처음 한번만 되는이유???  지우거나 지우지 않거나 한번만 되네
  //  파일선택 20개 글자가 유지되어서 그렇다 fileInput.value=''
  //document.querySelector('#PNG셑팅').innerHTML='';//마지막에 넣을 곳

  var 리스트메모=document.querySelectorAll('#리스트독립수정가능정보 tr');
  var 리스트독립수정가능정보메모통합=[];
  for (var i=0; i<리스트메모.length; i++) {
    리스트독립수정가능정보메모통합.push(리스트메모[i].children[14].innerHTML);
  }
  리스트독립수정가능정보메모통합=리스트독립수정가능정보메모통합.join('!');

  var 문서연결리스트전체감싸기div=document.createElement('div');  문서연결리스트전체감싸기div.setAttribute('class','js문서연결리스트전체감싸기');
  var 좌우2개만감싸기div;
  var 좌우2개누적=document.createElement('div');
  var 파일이름, 좌_문서이름, 우_존재유무;
  var 머리글2개, 머리글왼쪽, 머리글오른쪽, 머리글오른쪽안버튼;

  // 파일돌기전에 나머지 작동하고 파일을 돈다??? function 파일돌때마다실행() 은 한번한다?
  const fileInput = document.querySelector('#file_input');
  fileInput.addEventListener('change', 파일돌때마다실행);
    function 파일돌때마다실행() {//소구분태그생성1, 소구분태그생성2 완성
      const 탐색기에서선택한폴더 = fileInput.files; //파일들이 모두 담겨있다.
      for (const 각파일 of 탐색기에서선택한폴더) {
        console.log('파일돌기')
        if (각파일.name.substring(0,3)=='PDF' || 각파일.name.substring(0,3)=='PNG') {

          파일이름=각파일.name.substring(0,각파일.name.indexOf('.'))
          좌_문서이름=document.createElement('div');
          좌_문서이름.textContent=파일이름;
          우_존재유무=document.createElement('div');
          if (리스트독립수정가능정보메모통합.indexOf('[' + 파일이름 + ']')>-1) { //있다면 빈거만든다
            우_존재유무.textContent='O';
          } else {
            우_존재유무.textContent='리스트메모에없음';
          }
          좌우2개만감싸기div=document.createElement('div');
          좌우2개만감싸기div.appendChild(좌_문서이름);
          좌우2개만감싸기div.appendChild(우_존재유무);
          좌우2개누적.appendChild(좌우2개만감싸기div);
        }
      } //반복구문 끝
    } 
  //여기까지 파일순환 끝
  머리글왼쪽=document.createElement('div');
  머리글왼쪽.textContent='문서연결_리스트';
  머리글오른쪽=document.createElement('div');
  머리글오른쪽안버튼=document.createElement('button');
  머리글오른쪽안버튼.setAttribute('class','btn btn-light 카테고리 js맨위버튼')
  머리글오른쪽안버튼.setAttribute('onclick','파일선택후속()')
  머리글오른쪽안버튼.textContent='파일 선택 후속()';
  머리글오른쪽.appendChild(머리글오른쪽안버튼)
  머리글2개=document.createElement('div');
  머리글2개.appendChild(머리글왼쪽)
  머리글2개.appendChild(머리글오른쪽)
  좌우2개누적.prepend(머리글2개)
  문서연결리스트전체감싸기div.appendChild(좌우2개누적)
  
  //
  var 두개모두감싸기=document.createElement('div');
  두개모두감싸기.setAttribute('class','js두개모두감싸기')

  두개모두감싸기.appendChild(문서연결리스트전체감싸기div)
  //


  document.querySelector('#PNG셑팅').appendChild(두개모두감싸기);

  fileInput.value=''
}

function 파일선택후속() {
    //파일순환전에 다른코드를 다 실행하기때문에.... 파일순환 결과를 사용할 수 없음

    console.log('파일선택후속()')
    if (document.querySelector('.js문서연결리스트전체감싸기오른쪽')) {return;}

    //document.querySelector('#PNG셑팅').innerHTML='';//마지막에 넣을 곳
    var 문서연결리스트요소=document.querySelectorAll('#PNG셑팅 .js문서연결리스트전체감싸기 > div > div > div:nth-of-type(1)')
    var 문서연결리스트파일들=[];
    for (var i=1; i<문서연결리스트요소.length; i++) {
      문서연결리스트파일들.push(문서연결리스트요소[i].innerHTML)
    }
    문서연결리스트파일들=문서연결리스트파일들.join('!'); //문서연결_리스트와 비교할떄 필요
    console.log(문서연결리스트요소.length)
  
    var 문서연결리스트전체감싸기div=document.createElement('div');  문서연결리스트전체감싸기div.setAttribute('class','js문서연결리스트전체감싸기오른쪽');
    var 좌우2개만감싸기div;
    var 좌우2개누적=document.createElement('div');
    var 파일이름, 좌_문서이름, 우_존재유무;
    var 머리글2개, 머리글왼쪽, 머리글오른쪽, 머리글오른쪽안버튼;
  
    var 리스트메모=document.querySelectorAll('#리스트독립수정가능정보 tr');
    for (var i=0; i<리스트메모.length; i++) {
      // [PNG..] [PDF..] 형식이 있는 곳만 작업. 머리글태그생성3 에 넣고, 머리글태그생성4에는 문서연결_리스트에 있는지 확인
      if (리스트메모[i].children[14].innerHTML.indexOf('[')>-1 && 리스트메모[i].children[14].innerHTML.indexOf(']')>-1 && (리스트메모[i].children[14].innerHTML.indexOf(']') - 리스트메모[i].children[14].innerHTML.indexOf('['))>0) { //있다면 빈거만든다
        파일이름=리스트메모[i].children[14].innerHTML.substring(리스트메모[i].children[14].innerHTML.indexOf('[')+1,리스트메모[i].children[14].innerHTML.indexOf(']'));
        좌_문서이름=document.createElement('div');
        좌_문서이름.textContent=파일이름;
        우_존재유무=document.createElement('div');
        if (문서연결리스트파일들.indexOf(파일이름)>-1) { //있다면 빈거만든다
          우_존재유무.textContent='O';
          } else {
            우_존재유무.textContent='문서연결_리스트에없음';
        }
        좌우2개만감싸기div=document.createElement('div');
        좌우2개만감싸기div.appendChild(좌_문서이름);
        좌우2개만감싸기div.appendChild(우_존재유무);
        좌우2개누적.appendChild(좌우2개만감싸기div);
      }
    } //반복구문 끝
    머리글왼쪽=document.createElement('div');
    머리글왼쪽.textContent='리스트시트';
    머리글오른쪽=document.createElement('div');
    머리글2개=document.createElement('div');
    머리글2개.appendChild(머리글왼쪽)
    머리글2개.appendChild(머리글오른쪽)
    좌우2개누적.prepend(머리글2개)
    문서연결리스트전체감싸기div.appendChild(좌우2개누적)
  
    document.querySelector('#PNG셑팅 .js두개모두감싸기').appendChild(문서연결리스트전체감싸기div); 
}

리스너_head_button_group.addEventListener('click', 리스너_head_button_group클릭이벤트);
리스너png셑팅.addEventListener('click', png셑팅click);






