function 연습() {
  document.querySelector('#전체대체').innerHTML=document.querySelector('#excel_js_선긋기와위치').outerHTML;
  document.querySelector('#전체대체').classList.remove('d-none');

}

var 선택한캔버스id='없음';
var 이전캔버스id='없음';
var 리스너_header = document.querySelector('header');
var 리스너_전체대체 = document.querySelector('#전체대체');//캔버스클릭시(e)
var 리스너_excel캔버스전체 = document.querySelector('#excel캔버스전체');
var 리스너_탁구github전체 = document.querySelector('#탁구github전체');
var 리스너_htmlJavascript전체 = document.querySelector('#htmlJavascript전체');

function header_클릭시(e) {
  //Offcanvas클릭은 영향없다. 다른것일때
  console.log('header_클릭시(e)');
  if (e.target.innerHTML == '특문') {
    리스너_전체대체.innerHTML=document.querySelector('#html특수문자_click').innerHTML;
  }
  if (e.target.innerHTML == 'Excel,Vba') {//캔버스 들어가려면 클릭이 된다.
    선택한캔버스id='excel캔버스전체';
    console.log('  선택한캔버스id : ' + 선택한캔버스id);
    선택한캔버스_카테고리작성및_초기작업();
  }
  if (e.target.innerHTML == '탁구,github,샷컷') {//캔버스 들어가려면 클릭이 된다.
    선택한캔버스id='탁구github전체';
    console.log('  선택한캔버스id : ' + 선택한캔버스id);
    선택한캔버스_카테고리작성및_초기작업();
  }
  if (e.target.innerHTML == 'htmlJava') {//캔버스 들어가려면 클릭이 된다.
    선택한캔버스id='htmlJavascript전체';
    console.log('  선택한캔버스id : ' + 선택한캔버스id);
    선택한캔버스_카테고리작성및_초기작업();
  }
}

//각 캔버스는 header에  카테고리 목록은 고정이 아니라 캔버스관련자료none에서 가져오는 정보이다.
function 선택한캔버스_카테고리작성및_초기작업() {
  //캔버스 클릭시 유연성_선택한캔버스id 설정된다 ★★캔버스바디 목록이 살아있도록 !!
  console.log('    ' + 선택한캔버스id + '카테고리작성및_초기작업')

  //중요. 리스너 재설정
  리스너_선택한캔버스전체 = document.querySelector('#' + 선택한캔버스id);

  var 카테고리버튼생성 = '';//<button class="카테고리실행" title="참고">참고</button> 
  var 관련자료none_개별카테고리class들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none .개별카테고리');

  if (!관련자료none_개별카테고리class들) {console.log('if (!관련자료none_개별카테고리class들) {console.log();return;}');return;}

  //header 카테고리들 버튼 내용 생성, id가 excel캔버스전체_excel일때 버튼안의 값이 excel로 나타나게 split
  // 관련자료none_개별카테고리class들.length : 없으면 0, 에러는 아님
  var 문자열;
  for (var i = 0; i < 관련자료none_개별카테고리class들.length; i++) {
    문자열=관련자료none_개별카테고리class들[i].id;
    카테고리버튼생성 += '<button class="카테고리실행" style="margin-right:-2px" title="' 
                       + 문자열 + '">' 
                       + 문자열.substring(문자열.search('_')+1) + '</button>';
                       //+ 관련자료none_개별카테고리class들[i].id.split('_')[1] + '</button>';  [대상 문자열].search([조건 문자열]);
  }

  //header 카테고리들 버튼 생성
  if (관련자료none_개별카테고리class들.length>0) {
    document.querySelector('#' + 선택한캔버스id + ' .js카테고리생성').innerHTML=카테고리버튼생성;
  }
  //이전 캔버스 선택상태를 그대로 유지하기 위해서
  if (이전캔버스id!=선택한캔버스id) {document.querySelector('#' + 선택한캔버스id + ' .캔버스바디').innerHTML='';}
  이전캔버스id=선택한캔버스id;
}

function 선택한캔버스클릭시(e) {
  console.log('선택한캔버스클릭시(e)')
  console.log('  선택한캔버스 : ' + 선택한캔버스id)
  var 선택한캔버스관련자료none안_타겟element; 
  var 셑팅_선택한캔버스바디 = document.querySelector('#' + 선택한캔버스id + ' .캔버스바디');
  var 결과부분 = document.querySelector('#전체대체');

  if (1 == 1) {
    //header의  카테고리 버튼을 눌렀을때 : 캔버스바디에 카테고리 div 가지고온다. header에 선택된 버튼 색칠한다.
    if (e.target.classList.contains('카테고리실행')) {
      console.log('선택한캔버스클릭시(e) > e.target.classList.contains(카테고리실행)');
      선택한캔버스관련자료none안_타겟element = document.querySelector('#' + e.target.title);
      셑팅_선택한캔버스바디.innerHTML = 선택한캔버스관련자료none안_타겟element.outerHTML;
      for (var i = 0; i < document.querySelectorAll('#' + 선택한캔버스id + ' .카테고리실행').length; i++) {
        document.querySelectorAll('#' + 선택한캔버스id + ' .카테고리실행')[i].classList.remove('현재카테고리');//카테고리 버튼들 색칠클래스 제거
      }
      document.querySelector('[title=' + e.target.title + ']').classList.add('현재카테고리');//선택한 카테고리 버튼 색칠클래스 제거
    }
    //캔버스바디의 목옥을 눌렀을때 : 메모장 형식 미완성
    if (e.target.classList.contains('코딩등메모장text파일')) {
      선택한캔버스관련자료none안_타겟element = document.querySelector('#canvas텍스트');
      결과부분.innerHTML = 선택한캔버스관련자료none안_타겟element.outerHTML;
      document.querySelector('#embed부분').src = 'portal/images/black_코딩등메모장/' + e.target.title;
    }
    //캔버스바디의 목옥을 눌렀을때 : canvas_div 클래스 있으면 타이틀을 id로하는 div를 셑팅
    if (e.target.classList.contains('canvas_div')) {
      console.log('캔버스바디의 목록을 눌렀을때 : canvas_div 클래스 있으면 타이틀을 id로하는 div를 셑팅')
      선택한캔버스관련자료none안_타겟element = document.querySelector('#' + e.target.title);
      결과부분.innerHTML = 선택한캔버스관련자료none안_타겟element.outerHTML;
      document.querySelector('#선택문서id').innerHTML=e.target.title;
      document.querySelector('#선택문서제목').innerHTML=e.target.innerHTML;
    }
    //
    if (e.target.classList.contains('연결없음')) {
      console.log('연결없음 : 연결된 div 등이 없음')
      alert('연결된 문서 없음');
    }
    //
    if (e.target.innerHTML=='clear') {
      console.log('파일검색값 clear');
      document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value='';
    }
  }
  if (1 == 1) {
    if (e.target.innerHTML=='초기화') {
      console.log('(e.target.innerHTML==초기화')
      선택한캔버스_카테고리작성및_초기작업();
    }
    if (e.target.innerHTML=='모든제목보기') {
      console.log('모든제목보기')
      //34개까지는 17개가 초과하면 왼쪽17개 나머지 오른쪽
      //34개이상일때 나누기2 왼쪽오른쪽
      셑팅_선택한캔버스바디.innerHTML = '';
      //'#' + 선택한캔버스id + ' .개별카테고리 > div > h6 : 제목의 구조적 위치
      var 검색할위치제목들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none .개별카테고리 > div > h6');//코딩등메모장text파일, canvas_div
      var 개수 = 검색할위치제목들.length;
      var 왼쪽내부html = '';
      var 오른쪽내부html = '';

      if (개수 <= 17) {
        console.log('개수 <= 17 조건 진행');
        for (var i = 0; i < 검색할위치제목들.length; i++) {
          // console.log(검색할버튼클래스들[i].outerHTML);
          왼쪽내부html += 검색할위치제목들[i].outerHTML;
        }
        왼쪽내부html = '<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;">' + 왼쪽내부html + '</div>'
        오른쪽내부html = '<div class="js모든파일리스트div"></div>'
        셑팅_선택한캔버스바디.innerHTML = 왼쪽내부html + 오른쪽내부html;
      }

      var 왼쪽내부html = '';
      var 오른쪽내부html = '';
      if (개수 >= 18 && 개수 <= 34) {
        console.log('개수 >= 18 && 개수 <= 34 조건 진행');
        for (var i = 0; i < 17; i++) {
          왼쪽내부html += 검색할위치제목들[i].outerHTML;
        }
        for (var i = 17; i < 개수; i++) {
          오른쪽내부html += 검색할위치제목들[i].outerHTML;
        }
        왼쪽내부html = '<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;">' + 왼쪽내부html + '</div>'
        오른쪽내부html = '<div class="js모든파일리스트div"">' + 오른쪽내부html + '</div>'
        셑팅_선택한캔버스바디.innerHTML = 왼쪽내부html + 오른쪽내부html;
      }

      var 왼쪽내부html = '';
      var 오른쪽내부html = '';
      if (개수 > 34) {
        console.log('개수 > 34 조건 진행');
        for (var i = 0; i < 개수; i++) {
          if (i < (개수 / 2)) {
            왼쪽내부html += 검색할위치제목들[i].outerHTML;
          } else {
            오른쪽내부html += 검색할위치제목들[i].outerHTML;
          }
        }
        왼쪽내부html = '<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;">' + 왼쪽내부html + '</div>'
        오른쪽내부html = '<div class="js모든파일리스트div"">' + 오른쪽내부html + '</div>'
        셑팅_선택한캔버스바디.innerHTML = 왼쪽내부html + 오른쪽내부html;
      }
    }
    if (e.target.innerHTML=='모든카테고리') {
      //최종적으로 세로 두줄이 되도록 한다. 17줄
      셑팅_선택한캔버스바디.innerHTML = '';
      var 검색할버튼클래스들 = document.querySelectorAll('#' + 선택한캔버스id + ' .카테고리실행');
      var 내부html = '';
      for (var i = 0; i < 검색할버튼클래스들.length; i++) {
        내부html += 검색할버튼클래스들[i].outerHTML;
      }
      셑팅_선택한캔버스바디.innerHTML = 내부html;
    }
    if (e.target.classList.contains('캔버스바디_카테고리숨김')) {
      console.log('e.target.classList.contains(캔버스바디_카테고리숨김')
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
    if (e.target.classList.contains('캔버스바디_카테고리숨김해제')) {
      console.log('e.target.classList.contains(캔버스바디_카테고리숨김해제')
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

function 원본_선택한캔버스_검색input_change시(e) {
  console.log('캔버스_검색value_change시');
  //추가 : 검색결과바탕색 클래스 TEXT만 남기기
  var 검색결과바탕색_클래스들 = document.querySelectorAll('.검색결과바탕색');
  for (var i=0; i<검색결과바탕색_클래스들.length; i++) {
    검색결과바탕색_클래스들[i].outerHTML=검색결과바탕색_클래스들[i].innerHTML;
  }
  //innerHTML로 검색한다. 메모도 검색해야하니까. 처음에만 두번표시한다?
  var 검색할문자 = document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value.toUpperCase();
  if (document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value == '') { return; }

  //예전코드 대비 추가 1 : id(공백도 있으니 유의) 요소의 innerHTML에 검색문자 있을때 id 를 배열에 담기.
  var 검색결과포함id배열=[];
  // 해당 캔버스관련만 : var 검색할클래스들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none > [id]');
  var 검색할클래스들 = document.querySelectorAll('.모든검색 > [id]');
  console.log(선택한캔버스id + ', id있는것개수 : ' + 검색할클래스들.length)  
  for (var i = 0; i < 검색할클래스들.length; i++) {
  //예전코드 대비 추가 2 : if 조건 조정, 검색할클래스들의 title이 검색결과포함id배열 에 있으면 추가하는 코드는 먼저 진행하도록 한다  
    if (검색할클래스들[i].id!='' && 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      검색결과포함id배열.push(검색할클래스들[i].id);
    }
  }
  //예전코드 대비 추가 1 끝

  // 해당 캔버스관련만 : var 검색할클래스들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none .개별카테고리 > div > h6');
  var 검색할클래스들 = document.querySelectorAll('.모든검색 .개별카테고리 > div > h6');
  var 내부html = '';
  for (var i = 0; i < 검색할클래스들.length; i++) {
  //예전코드 대비 추가 2 : if 조건 조정, 검색할클래스들의 title이 검색결과포함id배열 에 있으면 추가하는 코드는 먼저 진행하도록 한다  
    if (검색결과포함id배열.includes(검색할클래스들[i].title) || 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      내부html += 검색할클래스들[i].outerHTML;
      //제목부분과, 해당아이디 div가 있으면 그 내부의 모든 검색문자에 바탕색
    }  
  }
  if (내부html == '') { alert('없음'); return; }
  document.querySelector('#' + 선택한캔버스id + ' .캔버스바디').innerHTML = 내부html;
  document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value = 검색할문자;
}

function 선택한캔버스_검색input_change시(e) {
  console.log('캔버스_검색value_change시');
  //추가 : 검색결과바탕색 클래스 TEXT만 남기기
  var 검색결과바탕색_클래스들 = document.querySelectorAll('.검색결과바탕색');
  for (var i=0; i<검색결과바탕색_클래스들.length; i++) {
    검색결과바탕색_클래스들[i].outerHTML=검색결과바탕색_클래스들[i].innerHTML;
  }
  //innerHTML로 검색한다. 메모도 검색해야하니까. 처음에만 두번표시한다?
  var 검색할문자 = document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value.toUpperCase(); 
  if (document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value == '') { return; }

  var 찾는값=document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value; 
  var 정규식내부= new RegExp('(?![^<]*>)' + 찾는값, 'ig')

  //예전코드 대비 추가 1 : id(공백도 있으니 유의) 요소의 innerHTML에 검색문자 있을때 id 를 배열에 담기.
  var 검색결과포함id배열=[];
  // 해당 캔버스관련만 : var 검색할클래스들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none > [id]');
  var 검색할클래스들 = document.querySelectorAll('.모든검색 > [id]');
  console.log(선택한캔버스id + ', id있는것개수 : ' + 검색할클래스들.length)  
  for (var i = 0; i < 검색할클래스들.length; i++) {
  //예전코드 대비 추가 2 : if 조건 조정, 검색할클래스들의 title이 검색결과포함id배열 에 있으면 추가하는 코드는 먼저 진행하도록 한다  
    if (검색할클래스들[i].id!='' && 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      검색결과포함id배열.push(검색할클래스들[i].id);
      if (검색할문자!=' ') {
        검색할클래스들[i].innerHTML=
        검색할클래스들[i].innerHTML.replace(정규식내부, '<span class="검색결과바탕색">' + 찾는값 + '</span>');
      }
    }
  }
  //예전코드 대비 추가 1 끝

  // 해당 캔버스관련만 : var 검색할클래스들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none .개별카테고리 > div > h6');
  var 검색할클래스들 = document.querySelectorAll('.모든검색 .개별카테고리 > div > h6');
  var 내부html = '';
  for (var i = 0; i < 검색할클래스들.length; i++) {
  //예전코드 대비 추가 2 : if 조건 조정, 검색할클래스들의 title이 검색결과포함id배열 에 있으면 추가하는 코드는 먼저 진행하도록 한다  
    if (검색결과포함id배열.includes(검색할클래스들[i].title) || 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      if (검색할문자!=' ') {
        검색할클래스들[i].innerHTML=검색할클래스들[i].innerHTML.replace(정규식내부, '<span class="검색결과바탕색">' + 찾는값 + '</span>');
      }
      내부html += 검색할클래스들[i].outerHTML;
      //제목부분과, 해당아이디 div가 있으면 그 내부의 모든 검색문자에 바탕색
    }  
  }
  if (내부html == '') { alert('없음'); return; }
  document.querySelector('#' + 선택한캔버스id + ' .캔버스바디').innerHTML = 내부html;
  document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value = 검색할문자;
}

function 전체대체클릭시(e) {
  console.log('전체대체클릭시(e)');
  var 캔버스관련자료none안_타겟element;
  var 결과부분 = document.querySelector('#전체대체');
  //다른곳 클릭하면 캔버스 그림이 지워지는 이유를 모르겠다.
  
  if (e.target.classList.contains('캔버스그리기')) {
    console.log('e.target.classList.contains(캔버스그리기)')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치1');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    // DPR 정보 가져오기
    var dpr = window.devicePixelRatio;
    // 캔버스 요소의 크기 가져오기
    var rect = 캔버스.getBoundingClientRect();
    캔버스.width = rect.width * dpr;
    캔버스.height = rect.height * dpr;
    // scale() 함수를 사용하여 캔버스 유닛 크기 보정
    그리기.scale(dpr, dpr);

    //선색, 정렬, 선폭 미리 정해두기
    그리기.font = "bold 10pt '맑은 고딕'";
    그리기.textBaseline="top"; //top, middle, bottom, alphabetic, hanging, ideo graphic
    그리기.fillStyle = 'red'; //채워지는 색깔, fillText도 채우기임
    그리기.textAlign = 'left';
    그리기.strokeStyle='blue'; // 선 색상, stroke()는 선 그리기 명령어
    그리기.lineWidth='1';

    그리기.clearRect(0,0,캔버스.width,캔버스.height)
    그리기.strokeRect(5,5,200,40); //사각형그리기, 테두리
    그리기.fillStyle = 'black'; //채워지는 색깔, fillText도 채우기임
    그리기.fillText('사각형 테두리 바로 만들기;',8,8); //사각형그리기, 테두리
    그리기.fillText('그리기.strokeRect(5,5,200,40);',8,25); //사각형그리기, 테두리

    그리기.beginPath();
    그리기.strokeStyle = 'black'; //채워지는 색깔, fillText도 채우기임
    그리기.rect(5,50,200,102); //사각형그리기, 테두리
    그리기.stroke();
    그리기.fillText('stroke()로 사각형 테두리 만들기;',8,56); //사각형그리기, 테두리
    그리기.fillText('그리기.beginPath();',8,76); //사각형그리기, 테두리
    그리기.fillText('그리기.strokeStyle = black;',8,96); //사각형그리기, 테두리
    그리기.fillText('그리기.rect(5,50,200,90);',8,116); //사각형그리기, 테두리
    그리기.fillText('그리기.stroke();',8,136); //사각형그리기, 테두리
    // 그리기.fill(); ==> 그리기.stroke(); 결과에 채움
    
    그리기.beginPath();
    그리기.fillText('채우기, 그리기.fill()은;',8,160); //사각형그리기, 테두리
    그리기.fillText('그리기.beginPath(); 이후에',8,180); //사각형그리기, 테두리
    그리기.fillText('변수에 담기는 것들 모두에',8,200); //사각형그리기, 테두리
    그리기.fillText('채워진다.; 그리기.fillStyle = red;',8,220); //사각형그리기, 테두리
    
    그리기.fillStyle = 'red';
    그리기.rect(5,240,200,80); //사각형그리기, 테두리
    그리기.fill();
    그리기.stroke();

    그리기.fillStyle = 'black';
    그리기.fillText('그리기.fillStyle = black;',8,245); //사각형그리기, 테두리
    그리기.fillText('그리기.rect(5,220,200,50);',8,265); //사각형그리기, 테두리
    그리기.fillText('그리기.fill();',8,285); //사각형그리기, 테두리
    그리기.fillText('그리기.stroke();',8,305); //사각형그리기, 테두리

    그리기.moveTo(220,10);
    그리기.lineTo(420,10);
    그리기.lineTo(420,100);
    그리기.stroke();

    그리기.fillText('그리기.moveTo(220,10);',223,12); //사각형그리기, 테두리
    그리기.fillText('그리기.lineTo(420,10);',223,32); //사각형그리기, 테두리
    그리기.fillText('그리기.lineTo(420,100);',223,52); //사각형그리기, 테두리
    그리기.fillText('그리기.stroke();',223,72); //사각형그리기, 테두리

    그리기.moveTo(220,110);
    그리기.lineTo(420,110);
    그리기.lineTo(420,220);
    그리기.closePath();
    그리기.stroke();

    그리기.fillText('그리기.moveTo(220,10);',223,113); //사각형그리기, 테두리
    그리기.fillText('그리기.lineTo(420,10);',223,133); //사각형그리기, 테두리
    그리기.fillText('그리기.lineTo(420,100);',223,153); //사각형그리기, 테두리
    그리기.fillStyle = 'blue';
    그리기.fillText('그리기.closePath();',223,173); //사각형그리기, 테두리
    그리기.fillText('처음과 끝좌표 연결',223,193); //사각형그리기, 테두리
    그리기.fillStyle = 'black';
    그리기.fillText('그리기.stroke();',223,213); //사각형그리기, 테두리

    그리기.beginPath();
    그리기.moveTo(220,240);
    그리기.lineTo(420,240);
    그리기.lineTo(420,350);
    그리기.closePath();
    그리기.fillStyle = 'red';
    그리기.fill();
    그리기.stroke();

    그리기.fillStyle = 'black';
    그리기.fillText('그리기.moveTo(220,10);',223,113); //사각형그리기, 테두리
    그리기.fillText('그리기.lineTo(420,10);',223,133); //사각형그리기, 테두리
    그리기.fillText('그리기.lineTo(420,100);',223,153); //사각형그리기, 테두리
    그리기.fillStyle = 'blue';
    그리기.fillText('그리기.closePath();',223,173); //사각형그리기, 테두리
    그리기.fillText('처음과 끝좌표 연결',223,193); //사각형그리기, 테두리
    그리기.fillStyle = 'black';
    그리기.fillText('그리기.stroke();',223,213); //사각형그리기, 테두리

    그리기.fillStyle = 'blue';
    그리기.fillText('그리',223,250); //사각형그리기, 테두리
    그리기.fillStyle = 'yellow';
    그리기.fillText('기.stroke(); 직전에',250,250); //사각형그리기, 테두리
    그리기.fillStyle = 'blue';
    그리기.fillText('채우기 명령',223,270); //사각형그리기, 테두리
    그리기.fillText('그리기.fill();',223,290); //사각형그리기, 테두리
    그리기.fillText('그리기.closePath();',223,310); //사각형그리기, 테두리
    그리기.fillText('없어도 채워짐;',223,330); //사각형그리기, 테두리

    그리기.fillStyle = 'blue';
    그리기.fillText('글자 넣는건 fillText',433,10); //사각형그리기, 테두리
    그리기.fillStyle = 'black';
    그리기.fillText('그리기.fillText("글자 넣는건 fillText",223,233)',433,30); //사각형그리기, 테두리
    그리기.fillStyle = 'blue';
    그리기.fillText('채우기색깔은 fillStyle',433,50); //사각형그리기, 테두리
    그리기.fillStyle = 'black';
    그리기.fillText('그리기.fillStyle = "blue";',433,70); //사각형그리기, 테두리

    그리기.lineWidth=20;
    그리기.strokeRect(433,95,232,80);
    그리기.fillText('그리기.lineWidth=20;',443,110);
    그리기.fillText('그리기.strokeRect(433,90,180,40);',443,130);
    그리기.fillText('사각형부분은 선의 중앙;',443,150);

    그리기.fillRect(675,95,232,80);
    그리기.fillStyle = 'yellow';
    그리기.fillText('그리기.fillRect(675,95,232,80);',685,105);
    그리기.fillText('채워진사각형',685,125);

    그리기.strokeRect(433,200,232,80);
    그리기.fillStyle = 'yellow';
    그리기.fillRect(433,200,232,80);
    그리기.fillStyle = 'black';
    그리기.fillText('순서',443,215);
    그리기.fillText('strokeRect > fillRect;',443,230);
    그리기.fillText('나중꺼가 덮어씀',443,250);

    그리기.fillStyle = 'yellow';
    그리기.fillRect(675,200,232,80);
    그리기.strokeStyle='black';
    그리기.strokeRect(675,200,232,80);
    그리기.fillStyle = 'black';
    그리기.fillText('순서',685,215);
    그리기.fillText('fillRect > strokeRect;',685,235);
    그리기.fillText('나중꺼가 덮어씀',685,255);






    return;
  }
  if (e.target.innerHTML=='캔버스초기화1') {
    console.log('e.target.innerHTML==캔버스초기화1');
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치1');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    그리기.clearRect(0,0,캔버스.width,캔버스.height);
  }
  if (e.target.innerHTML=='초기화2') {
    console.log('e.target.innerHTML==초기화2');
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치2');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    그리기.clearRect(0,0,캔버스.width,캔버스.height);
  }
  if (e.target.innerHTML=='초기화3') {
    console.log('e.target.innerHTML==초기화3');
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치3');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    그리기.clearRect(0,0,캔버스.width,캔버스.height);
  }
  if (e.target.innerHTML=='초기화4') {
    console.log('e.target.innerHTML==초기화4');
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치4');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    그리기.clearRect(0,0,캔버스.width,캔버스.height);
  }
  if (e.target.innerHTML=='초기화5') {
    console.log('e.target.innerHTML==초기화5');
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치5');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    그리기.clearRect(0,0,캔버스.width,캔버스.height);
  }
  if (e.target.innerHTML=='초기화6') {
    console.log('e.target.innerHTML==초기화6');
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치6');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    그리기.clearRect(0,0,캔버스.width,캔버스.height);
  }
  if (e.target.innerHTML=='초기화7') {
    console.log('e.target.innerHTML==초기화7');
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치7');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    그리기.clearRect(0,0,캔버스.width,캔버스.height);
  }
  if (e.target.innerHTML=='초기화8') {
    console.log('e.target.innerHTML==초기화8');
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치8');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    그리기.clearRect(0,0,캔버스.width,캔버스.height);
  }
  if (e.target.innerHTML=='그리기2') {
    console.log('e.target.innerHTML==그리기2')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치2');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성

    //그리기.lineCap = "butt/square/round" 

    그리기.strokeStyle='black';
    그리기.fillStyle='black';
    그리기.font = "bold 10pt '맑은 고딕'"; // 순서 중요하네
    그리기.lineWidth=20;
    그리기.beginPath();

    그리기.moveTo(15,15);
    그리기.lineTo(80,15);
    그리기.lineTo(80,55);
    그리기.lineTo(15,55);
    그리기.lineTo(15,15);
    그리기.lineCap='butt';
    그리기.stroke();
    그리기.fillText('butt (디폴트)',5,80);

    그리기.fillText('맨마지막에만 적용된다. ',5,100);
    그리기.fillText('나머지는 꺽이는 부분 서식으로 해야함. ',5,120);
    그리기.fillText('그리기.lineJoin="속성 값"',5,140);

    그리기.beginPath();
    그리기.moveTo(110,15);
    그리기.lineTo(175,15);
    그리기.lineTo(175,55);
    그리기.lineTo(110,55);
    그리기.lineTo(110,15);
    그리기.lineCap='square';
    그리기.stroke();
    그리기.fillText('square',120,80);

    그리기.beginPath();
    그리기.moveTo(205,15);
    그리기.lineTo(270,15);
    그리기.lineTo(270,55);
    그리기.lineTo(205,55);
    그리기.lineTo(205,15);
    그리기.lineCap='round';
    그리기.stroke();
    그리기.fillText('round',215,80);


  }
  if (e.target.innerHTML=='그리기3') {
    console.log('e.target.innerHTML==그리기3')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치3');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성

    //선 꺾이는 부분 처리, 그리기.lineJoin = "miter" // miter (디폴트), bevel, round 중 1개

    그리기.strokeStyle='black';
    그리기.fillStyle='black';
    그리기.font = "bold 10pt '맑은 고딕'"; // 순서 중요하네
    그리기.lineWidth=20;
    그리기.beginPath();

    그리기.lineJoin='miter';
    그리기.moveTo(15,15);
    그리기.lineTo(80,15);
    그리기.lineTo(80,55);
    그리기.lineTo(15,55);
    그리기.lineTo(15,15);
    그리기.stroke();
    그리기.fillText('miter (디폴트)',5,80);

    그리기.fillText('꺽어지는 부분에만 적용된다. ',5,100);
    그리기.fillText('그리기.lineJoin="속성 값"',5,120);
    그리기.fillStyle='blueviolet';
    그리기.fillText('line폭의 1/2을 처리하는 서식?',5,140);
    그리기.fillStyle='black';

    그리기.beginPath();
    그리기.lineJoin='bevel'; //좌표에서 벗어나 튀어나오는 라인폭의 1/2을 잘라냄
    그리기.moveTo(110,15);
    그리기.lineTo(175,15);
    그리기.lineTo(175,55);
    그리기.lineTo(110,55);
    그리기.lineTo(110,15);
    그리기.stroke();
    그리기.fillText('bevel',120,80);

    그리기.beginPath();
    그리기.lineJoin='round';
    그리기.moveTo(205,15);
    그리기.lineTo(270,15);
    그리기.lineTo(270,55);
    그리기.lineTo(205,55);
    그리기.lineTo(205,15);
    그리기.stroke();
    그리기.fillText('round',215,80);
  }
  if (e.target.innerHTML=='그리기4') {
    console.log('e.target.innerHTML==그리기4')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치4');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    var 각도;

    //Math.PI=3.14..(라디안값) 180도, 1라디안 57.3...도
    //30도를 표현할때 라디안 부분에 입력할 값은 : 30(각도) / (180/Math.PI)

    //호 : arc(x, y, radius, startAngle, endAngle, anticlockwise)
    그리기.beginPath();
    그리기.lineWidth='2'
    그리기.arc(50, 50, 40, 0, 2*Math.PI);
    그리기.stroke();

    그리기.font = "bold 10pt '맑은 고딕' ";
    그리기.fillText('각도시작은',18,40);
    그리기.fillText('오른쪽끝',22,60);
    그리기.fillText('anticlockwise 기본값 : false (시계방향)',3,105);
    그리기.fillText('각도부분 입력값은 라디안값 : 시작각도, 종료각도',3,125);
    그리기.fillText('각도로 변환 : 30(각도) / (180/Math.PI)',3,145);

    그리기.beginPath();
    각도=90;
    그리기.arc(140, 50, 40, 0, 각도 / (180/Math.PI));
    그리기.fill();
    그리기.stroke();

    그리기.beginPath();
    각도=270;
    그리기.arc(140, 50, 40, Math.PI, 각도 / (180/Math.PI));
    그리기.fill();
    그리기.stroke();

    그리기.beginPath();
    그리기.arc(230, 50, 40, Math.PI, 2*Math.PI);
    그리기.fill();
    그리기.stroke();


  }
  if (e.target.innerHTML=='그리기5') {
    console.log('e.target.innerHTML==그리기5')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치5');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    var 각도;

    //Math.PI=3.14..(라디안값) 180도, 1라디안 57.3...도
    //30도를 표현할때 라디안 부분에 입력할 값은 : 30(각도) / (180/Math.PI)

    //호 : arc(x, y, radius, startAngle, endAngle, anticlockwise)
    그리기.beginPath();
    그리기.lineWidth='2'
    그리기.moveTo(10,10);
    그리기.arc(35, 35, 40, 0, 70 / (180/Math.PI));
    그리기.closePath();
    그리기.fillStyle='yellow';
    그리기.fill();
    그리기.stroke();

    그리기.font = "bold 10pt '맑은 고딕' ";
    그리기.fillStyle='black';
    그리기.fillText('부채꼴 : 1)그리기.moveTo(x,y)',25,15);
    그리기.fillText('2)그리기.arc(x,y,반지름,시작각도,종료각도)',78,35);
    그리기.fillText('3)그리기.closePath()',78,55);

    그리기.fillText('a)그리기.moveTo(10,10);',5,85);
    그리기.fillText('b)그리기.arc(35, 35, 40, 0, 70 / (180/Math.PI));',5,105);
    그리기.fillText('b)부분이 lineTo처럼 작동되었다.;',5,125);
    그리기.fillText('그리기.closePath();에서 처음과 끝부분이 연결됨',5,145);

    




  }
  if (e.target.innerHTML=='그리기6') {
    console.log('e.target.innerHTML==그리기6')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치6');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성

    var 이미지객체=new Image();
    이미지객체.src='portal/images/문서연결_엑셀VBA/원호.png';
    이미지객체.onload=function() {
      그리기.drawImage(이미지객체,0,0); //(이미지객체,x,y,width,height)
    }
  }
  if (e.target.innerHTML=='그리기7') {
    console.log('e.target.innerHTML==그리기7')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치7');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    var 각도;


  }
  if (e.target.innerHTML=='그리기8') {
    console.log('e.target.innerHTML==그리기8')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치8');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    var 각도;
        // DPR 정보 가져오기
        var dpr = window.devicePixelRatio;
        // 캔버스 요소의 크기 가져오기
        var rect = 캔버스.getBoundingClientRect();
        캔버스.width = rect.width * dpr;
        캔버스.height = rect.height * dpr;
        // scale() 함수를 사용하여 캔버스 유닛 크기 보정
        그리기.scale(dpr, dpr);

    //두 직선 사이 호 arcTo(x1, y1, x2, y2, radius) : 두 선 사이에 radius반지름의 원형태로 처리한다?
    그리기.lineWidth='2'
    그리기.font='bold 10px 맑은 고딕';
    그리기.fillStyle='red';
    그리기.fillRect(10,10,10,10);
    그리기.fillRect(200,40,10,10);
    그리기.fillRect(10,70,10,10);
    그리기.fillText('(10,10)',10,30)
    그리기.fillText('(200,40)',180,60)
    그리기.fillText('(10,70)',10,90)
    그리기.fillStyle='black';
    그리기.font='bold 13px 맑은 고딕';
    그리기.fillText('1) 그리기.moveTo(10, 10);',10,110);
    그리기.fillText('2) 그리기.lineTo(200, 40);',10,130);
    그리기.fillText('3) 그리기.lineTo(10, 70);',10,150);
    그리기.fillText('4) 그리기.stroke();',10,170);

    그리기.moveTo(10, 10);
    그리기.lineTo(200, 40);
    그리기.lineTo(10, 70);
    그리기.stroke();

    //반지름 10 원
    그리기.beginPath();
    그리기.fillStyle='red';
    그리기.strokeStyle='black';
    그리기.arc(143,40,10,0,2*Math.PI);
    그리기.fill();
    그리기.fillStyle='black';
    그리기.fillText('반지름10인원 예시',5,45);

    그리기.beginPath();
    그리기.strokeStyle='blue';
    그리기.beginPath();
    그리기.moveTo(10, 180);
    그리기.lineTo(210, 210);
    그리기.stroke();
    

    그리기.strokeStyle='black';
    그리기.beginPath();
    그리기.moveTo(10, 180);
    //그리기.lineTo(440, 40); 이거 대신에 그리기.arcTo(앞x, 얖y, 뒤x, 뒤y, 반지름); 
    // 앞좌표 moveTo에서 향하는 목적지, 뒤좌표 다음선의 목적지
    그리기.arcTo(210, 210, 10, 240, 10);
    그리기.lineTo(10, 240);
    그리기.stroke();

    그리기.font='bold 10px 맑은 고딕';
    그리기.fillStyle='red';
    그리기.fillRect(10,180,10,10);
    그리기.fillRect(210,210,10,10);
    그리기.fillRect(10,240,10,10);
    그리기.fillText('(10,180)',10,200)
    그리기.fillText('(210,210)',185,230)
    그리기.fillText('(10,240)',10,260)
    그리기.fillStyle='black';
    그리기.font='bold 13px 맑은 고딕';
    그리기.fillText('1) 그리기.beginPath();',10,280);
    그리기.fillText('2) 그리기.moveTo(240, 10);',10,300);
    그리기.fillText('3) 그리기.arcTo(440, 40, 240, 70, 10);',10,320);
    그리기.fillText('4) 그리기.lineTo(240, 70);',10,340);
    그리기.fillText('5) 그리기.stroke();',10,360);

    //두번째
    그리기.moveTo(300, 10);
    //그리기.lineTo(440, 40);
    그리기.arcTo(500, 40, 300, 70, 35);
    그리기.lineTo(300, 70);
    그리기.stroke();

    




  }
  

  if (1 == 1) {
    //코딩등메모장text파일 : #canvas텍스트 배치후에 embed부분 수정
    if (e.target.classList.contains('코딩등메모장text파일')) {
      캔버스관련자료none안_타겟element = document.querySelector('#canvas결과모음 > #canvas텍스트');
      결과부분.innerHTML = 캔버스관련자료none안_타겟element.outerHTML;
      document.querySelector('#embed부분').src = 'portal/images/black_코딩등메모장/' + e.target.title;
    }
    //canvas_div : 배치
    if (e.target.classList.contains('canvas_div')) {
      캔버스관련자료none안_타겟element = document.querySelector('#' + e.target.title);
      결과부분.innerHTML = 캔버스관련자료none안_타겟element.outerHTML;
    }
    //canvas_div : 배치
    if (e.target.nodeName=='CODE' && e.target.parentElement.classList.contains('폼control이벤트')) {
      console.log('부모요소의 클래스에 "폼control이벤트" 포함시')
      폼컨트롤이벤트_컨트롤이름클릭시같은이름노랑색칠(e)
    }    
  }
}

폼컨트롤이벤트_단독기능보라_클래스부여();

function 폼컨트롤이벤트_단독기능보라_클래스부여() {//html켤때 동작, 전체대체로 outerhtml복사될 예정
  console.log('폼컨트롤이벤트_단독기능보라_클래스부여()');
  let 모든control이름들=[]; //let arr1 = [];let arr2 = new Array();
  var 요소들;
  //요소들.length : 처음에 188 이라면 전체대체로 올라왔다면 두배다.
  if (document.querySelectorAll('#전체대체 .폼control이벤트').length==0) {//전체대체로 복사전
    요소들=document.querySelectorAll('.폼control이벤트 > code:not(:first-child)');
  } else {
    요소들=document.querySelectorAll('#전체대체 .폼control이벤트 > code:not(:first-child)');
  }

  for (var i=0; i<요소들.length; i++) {
    모든control이름들.push(요소들[i].innerHTML);
  }
  //고유값 확인
  //let 고유값배열 = Array.from(new Set(모든control이름들))
  //console.log(고유값배열);

  for (var i=0; i<요소들.length; i++) {
    요소들[i].classList.remove('폼컨트롤이벤트_단독기능노랑_클래스');
    요소들[i].classList.remove('폼컨트롤이벤트_단독기능보라_클래스');
    요소들[i].classList.remove('폼컨트롤이벤트_모두포함브라운_클래스');
  }
  for (var i=0; i<요소들.length; i++) {
    if (모든control이름들.filter(element => 요소들[i].innerHTML == element).length == 1) { 요소들[i].classList.add('폼컨트롤이벤트_단독기능보라_클래스') }
    if (모든control이름들.filter(element => 요소들[i].innerHTML == element).length == 13) { 요소들[i].classList.add('폼컨트롤이벤트_모두포함브라운_클래스') }
  }
}
function 폼컨트롤이벤트_컨트롤이름클릭시같은이름노랑색칠(e) {//전체대체로 outerhtml복사된 곳
  console.log('폼컨트롤이벤트_컨트롤이름클릭시같은이름노랑색칠(e)');

  if (document.querySelector('.선택이벤트설명요소색칠')) {
    document.querySelector('.선택이벤트설명요소색칠').classList.remove('선택이벤트설명요소색칠');
  }

  let 모든control이름들=[]; //let arr1 = [];let arr2 = new Array();
  var 요소들=document.querySelectorAll('#전체대체 .폼control이벤트 > code:not(:first-child)');

  var 색칠할이름=e.target.innerHTML;
  console.log('색칠할이름 :' + 색칠할이름)

  for (var i=0; i<요소들.length; i++) {
    모든control이름들.push(요소들[i].innerHTML);
  }

  폼컨트롤이벤트_단독기능보라_클래스부여()

  for (var i=0; i<요소들.length; i++) {
    if (요소들[i].innerHTML == 색칠할이름) { 
      요소들[i].classList.remove('폼컨트롤이벤트_단독기능노랑_클래스');
      요소들[i].classList.remove('폼컨트롤이벤트_단독기능보라_클래스');
      요소들[i].classList.remove('폼컨트롤이벤트_모두포함브라운_클래스');
      요소들[i].classList.add('폼컨트롤이벤트_단독기능노랑_클래스') 
    }
  }
  //.이벤트작업code > code : innerHTML에서 클릭한 동작이름찾고 있으면 이동
  var 이벤트설명요소들=document.querySelectorAll('#전체대체 .이벤트설명요소');
  var 선택이벤트설명요소;
  var 선택이벤트설명요소첫번째=0;
  //  [대상 문자열].search([조건 문자열]); 대소문자 구분
  if (!이벤트설명요소들.length==0) {
    for (var i=0; i<이벤트설명요소들.length; i++) {
      if (이벤트설명요소들[i].innerHTML.search(색칠할이름)>0 && 선택이벤트설명요소첫번째==0) {
        선택이벤트설명요소=이벤트설명요소들[i];
        선택이벤트설명요소첫번째=1; //0이 아닌것으로 변경, 다음에 나오는거 설정안되도록
      }
    }

    if (선택이벤트설명요소) {
      선택이벤트설명요소.classList.add('선택이벤트설명요소색칠');
      var 절대좌표 = window.scrollY + 선택이벤트설명요소.getBoundingClientRect().top;
      var fix높이=getComputedStyle(document.querySelector('header')).height
      fix높이=fix높이.replace('/[^0-9]/g', ''); //숫자형식만 남기기
      fix높이 = parseInt(fix높이); //숫자형식으로 변환
      window.scrollTo({ left: 0, top: 절대좌표 - fix높이, behavior: "smooth" });
    }

  }
}

리스너_header.addEventListener('click', header_클릭시);
리스너_전체대체.addEventListener('click', 전체대체클릭시);
//리스너를 이것 저것으로 변경이 안됨??
리스너_excel캔버스전체.addEventListener('click', 선택한캔버스클릭시);
리스너_excel캔버스전체.addEventListener('change', 선택한캔버스_검색input_change시);
리스너_탁구github전체.addEventListener('click', 선택한캔버스클릭시);
리스너_탁구github전체.addEventListener('change', 선택한캔버스_검색input_change시);
리스너_htmlJavascript전체.addEventListener('click', 선택한캔버스클릭시);
리스너_htmlJavascript전체.addEventListener('change', 선택한캔버스_검색input_change시);





