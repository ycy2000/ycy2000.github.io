var 유연성_선택한캔버스id='없음';

//각 캔버스는 header에  카테고리 목록은 고정이 아니라 캔버스관련자료none에서 가져오는 정보이다.
function 선택한캔버스_카테고리작성및_초기작업() {
  //캔버스 클릭시 유연성_선택한캔버스id 설정된다
  console.log('작성중_선택한캔버스_카테고리작성')

  //현재카테고리 : header에 색칠된곳의 클래스이름 모두 제거
  for (var i = 0; i < document.querySelectorAll('.카테고리실행').length; i++) {
    document.querySelectorAll('.카테고리실행')[i].classList.remove('현재카테고리');
  }

  if (!document.querySelector('#' + 유연성_선택한캔버스id)) {console.log('return;'); return;}
  var 카테고리버튼생성 = '';//<button class="카테고리실행" title="참고">참고</button> 
  var id_캔버스관련자료none_안_class_canvas카테고리 = document.querySelectorAll('#' + 유연성_선택한캔버스id + '_관련자료none .canvas카테고리');

  //header 카테고리들 버튼 내용 생성
  for (var i = 0; i < id_캔버스관련자료none_안_class_canvas카테고리.length; i++) {
    카테고리버튼생성 += '<button class="카테고리실행" style="margin-right:-2px" title="' + id_캔버스관련자료none_안_class_canvas카테고리[i].id + '">' + id_캔버스관련자료none_안_class_canvas카테고리[i].id + '</button>';
  }

  //header 카테고리들 버튼 생성
  document.querySelector('#' + 유연성_선택한캔버스id + ' .캔버스header').innerHTML = document.querySelector('#' + 유연성_선택한캔버스id + ' .캔버스header').innerHTML + 카테고리버튼생성;

  //header 선택한 카테고리 전체정보 생성
  document.querySelector('#' + 유연성_선택한캔버스id + ' .캔버스바디').innerHTML = document.querySelector('#' + 유연성_선택한캔버스id).outerHTML;
}

function excel캔버스클릭시(e) {
  console.log('excel캔버스클릭시(e)');
  var 캔버스관련자료none안_타겟element;
  var 셑팅_캔버스바디 = document.querySelector('#' + 유연성_선택한캔버스id + ' .캔버스바디');
  var 결과부분 = document.querySelector('#전체대체');

  if (1 == 1) {
    //카테고리실행 : 캔버스바디에 카테고리 제목들 나오게한다.
    if (e.target.classList.contains('카테고리실행')) {
      보기셑팅유형 = "카테고리실행";
      캔버스관련자료none안_타겟element = document.querySelector('#' + e.target.title);
      셑팅_캔버스바디.innerHTML = 캔버스관련자료none안_타겟element.outerHTML;
      for (var i = 0; i < document.querySelectorAll('#' + 유연성_선택한캔버스id + ' .카테고리실행').length; i++) {
        document.querySelectorAll('#' + 유연성_선택한캔버스id + ' .카테고리실행')[i].classList.remove('현재카테고리');
      }
      document.querySelector('[title=' + e.target.title + ']').classList.add('현재카테고리');
    }
    //코딩등메모장text파일 : #canvas텍스트 배치후에 embed부분 수정
    if (e.target.classList.contains('코딩등메모장text파일')) {
      보기셑팅유형 = "코딩등메모장text파일";
      캔버스관련자료none안_타겟element = document.querySelector('#excelcanvas결과모음 > #canvas텍스트');
      결과부분.innerHTML = 캔버스관련자료none안_타겟element.outerHTML;
      document.querySelector('#embed부분').src = 'portal/images/black_코딩등메모장/' + e.target.title;
    }
    //canvas_div : 배치
    if (e.target.classList.contains('canvas_div')) {
      console.log('dfsdfsd')
      보기셑팅유형 = "canvas_div";
      캔버스관련자료none안_타겟element = document.querySelector('#' + e.target.title);
      결과부분.innerHTML = 캔버스관련자료none안_타겟element.outerHTML;
    }
    //
    if (e.target.innerHTML=='파일검색') {
      document.querySelector('#excelcanvas검색input').value='';
    }
  }
  if (1 == 1) {
    if (e.target.classList.contains('캔버스바디_초기화')) {
      console.log('캔버스바디 초기화')
      console.log(document.querySelector('#' + 유연성_선택한캔버스id + ' .캔버스바디').innerHTML)
      document.querySelector('#' + 유연성_선택한캔버스id + ' .캔버스바디').innerHTML = '';
      for (var i = 0; i < document.querySelectorAll('#' + 유연성_선택한캔버스id + ' .카테고리실행').length; i++) {
        document.querySelectorAll('#' + 유연성_선택한캔버스id + ' .카테고리실행')[i].classList.remove('현재카테고리');
      }
    }
    if (e.target.id == 'excel캔버스바디_모든제목보기') {
      //34개까지는 17개가 초과하면 왼쪽17개 나머지 오른쪽
      //34개이상일때 나누기2 왼쪽오른쪽
      셑팅_캔버스바디.innerHTML = '';
      var 검색할버튼클래스들 = document.querySelectorAll('#excelcanvas카테고리모음 .canvas카테고리 h6');//코딩등메모장text파일, canvas_div
      var 개수 = 검색할버튼클래스들.length;
      var 왼쪽내부html = '';
      var 오른쪽내부html = '';

      console.log('e.target.id == excel캔버스바디_모든제목보기');
      console.log('#excelcanvas카테고리모음 .canvas카테고리 안 h6 개수 : ' + 개수);

      if (개수 <= 17) {
        console.log('개수 <= 17 조건 진행');
        for (var i = 0; i < 검색할버튼클래스들.length; i++) {
          // console.log(검색할버튼클래스들[i].outerHTML);
          왼쪽내부html += 검색할버튼클래스들[i].outerHTML;
        }
        왼쪽내부html = '<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;">' + 왼쪽내부html + '</div>'
        오른쪽내부html = '<div class="js모든파일리스트div"></div>'
        셑팅_캔버스바디.innerHTML = 왼쪽내부html + 오른쪽내부html;
      }

      var 왼쪽내부html = '';
      var 오른쪽내부html = '';
      if (개수 >= 18 && 개수 <= 34) {
        console.log('개수 >= 18 && 개수 <= 34 조건 진행');
        for (var i = 0; i < 17; i++) {
          왼쪽내부html += 검색할버튼클래스들[i].outerHTML;
        }
        for (var i = 17; i < 개수; i++) {
          오른쪽내부html += 검색할버튼클래스들[i].outerHTML;
        }
        왼쪽내부html = '<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;">' + 왼쪽내부html + '</div>'
        오른쪽내부html = '<div class="js모든파일리스트div"">' + 오른쪽내부html + '</div>'
        셑팅_캔버스바디.innerHTML = 왼쪽내부html + 오른쪽내부html;
      }

      var 왼쪽내부html = '';
      var 오른쪽내부html = '';
      if (개수 > 34) {
        console.log('개수 > 34 조건 진행');
        for (var i = 0; i < 개수; i++) {
          if (i < (개수 / 2)) {
            왼쪽내부html += 검색할버튼클래스들[i].outerHTML;
          } else {
            오른쪽내부html += 검색할버튼클래스들[i].outerHTML;
          }
        }
        왼쪽내부html = '<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;">' + 왼쪽내부html + '</div>'
        오른쪽내부html = '<div class="js모든파일리스트div"">' + 오른쪽내부html + '</div>'
        셑팅_캔버스바디.innerHTML = 왼쪽내부html + 오른쪽내부html;
      }
    }
    if (e.target.id == 'excel캔버스바디_모든카테고리') {
      //최종적으로 세로 두줄이 되도록 한다. 17줄
      셑팅_캔버스바디.innerHTML = '';
      var 검색할버튼클래스들 = document.querySelectorAll('.카테고리실행');
      var 내부html = '';
      for (var i = 0; i < 검색할버튼클래스들.length; i++) {
        내부html += 검색할버튼클래스들[i].outerHTML;
      }
      셑팅_캔버스바디.innerHTML = 내부html;
    }
    if (e.target.id == 'excelcanvas검색input_clear') {
      document.querySelector('#excelcanvas검색input').value = '';
    }
    if (e.target.id == 'excel캔버스바디_카테고리숨김') {
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
    if (e.target.id == 'excel캔버스바디_카테고리숨김해제') {
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

var 리스너_header = document.querySelector('header');
var 리스너_전체대체 = document.querySelector('#전체대체');//캔버스클릭시(e)
var 리스너_excel캔버스전체 = document.querySelector('#excel캔버스전체');

function header_클릭시(e) {
  //Offcanvas클릭은 영향없다. 다른것일때
  console.log('header_클릭시(e)');
  if (e.target.innerHTML == 'html특수문자') {
    리스너_전체대체.innerHTML=document.querySelector('#html특수문자_click').innerHTML;
  }
  if (e.target.innerHTML == 'Excel,Vba') {//캔버스 들어가려면 클릭이 된다.
    유연성_선택한캔버스id='excel캔버스전체';
    선택한캔버스_카테고리작성및_초기작업();
  }
  if (e.target.innerHTML == '추가캔버스') {//캔버스 들어가려면 클릭이 된다.
    유연성_선택한캔버스id='추가캔버스전체';
    선택한캔버스_카테고리작성및_초기작업();
  }
}
function head_excel캔버스_검색input_change시() {
  console.log('head_excel캔버스_검색input_change시');
  //innerHTML로 검색한다. 메모도 검색해야하니까. 처음에만 두번표시한다?
  var 검색할문자 = document.querySelector('#head_excel캔버스_검색input').value.toUpperCase();
  if (document.querySelector('#head_excel캔버스_검색input').value == '') { return; }
  var 검색할버튼클래스들 = document.querySelectorAll('#excelcanvas카테고리모음 .canvas카테고리 h6');
  var 내부html = '';
  for (var i = 0; i < 검색할버튼클래스들.length; i++) {
    if (검색할버튼클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      내부html += 검색할버튼클래스들[i].outerHTML;
    }
  }
  if (내부html == '') { alert('없음'); return; }
  document.querySelector('#전체대체').innerHTML = 내부html;
  document.querySelector('#head_excel캔버스_검색input').value = 검색할문자;
}
function excel캔버스_검색input_change시(e) {
  console.log('excel캔버스_검색value_change시');
  //innerHTML로 검색한다. 메모도 검색해야하니까. 처음에만 두번표시한다?
  var 검색할문자 = document.querySelector('#excelcanvas검색input').value.toUpperCase();
  if (document.querySelector('#excelcanvas검색input').value == '') { return; }
  var 검색할버튼클래스들 = document.querySelectorAll('#excelcanvas카테고리모음 .canvas카테고리 h6');
  var 내부html = '';
  for (var i = 0; i < 검색할버튼클래스들.length; i++) {
    if (검색할버튼클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      내부html += 검색할버튼클래스들[i].outerHTML;
    }
  }
  if (내부html == '') { alert('없음'); return; }
  document.querySelector('#excel캔버스바디').innerHTML = 내부html;
  document.querySelector('#excelcanvas검색input').value = 검색할문자;
}

function 전체대체클릭시(e) {
  console.log('전체대체클릭시(e)');
  var 캔버스관련자료none안_타겟element;
  var 결과부분 = document.querySelector('#전체대체');

  if (1 == 1) {
    //코딩등메모장text파일 : #canvas텍스트 배치후에 embed부분 수정
    if (e.target.classList.contains('코딩등메모장text파일')) {
      보기셑팅유형 = "코딩등메모장text파일";
      캔버스관련자료none안_타겟element = document.querySelector('#canvas결과모음 > #canvas텍스트');
      결과부분.innerHTML = 캔버스관련자료none안_타겟element.outerHTML;
      document.querySelector('#embed부분').src = 'portal/images/black_코딩등메모장/' + e.target.title;
    }
    //canvas_div : 배치
    if (e.target.classList.contains('canvas_div')) {
      보기셑팅유형 = "canvas_div";
      캔버스관련자료none안_타겟element = document.querySelector('#' + e.target.title);
      결과부분.innerHTML = 캔버스관련자료none안_타겟element.outerHTML;
    }
  }
}

리스너_header.addEventListener('click', header_클릭시);
리스너_전체대체.addEventListener('click', 전체대체클릭시);
리스너_excel캔버스전체.addEventListener('click', excel캔버스클릭시);
리스너_excel캔버스전체.addEventListener('change', excel캔버스_검색input_change시);


