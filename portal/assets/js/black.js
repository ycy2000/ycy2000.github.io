if (1==1) {
  var embed_루트src_탐색기='';
  for (var i=0; i<document.querySelectorAll('input').length; i++) {
    document.querySelectorAll('input')[i].autocomplete="off";
  }
}
function navbar_임시함수_click () {
  var 순번; 카운팅=-1;
  var target=document.querySelectorAll('#연습_타겟순번확인 span')[3];
  target.classList.add('표시');

  for (var i=0; i<target.parentNode.children.length; i++) {
    console.log(target.parentNode.children[i].classList)
    카운팅=카운팅+1;
    if (target.parentNode.children[i].classList.contains('표시')) {
      순번=카운팅;
      target.parentNode.children[i].remove('표시');
    }
  }

}

var 리스너_header=document.querySelector('#head_button_group');
var 리스너_main사이드=document.querySelector('#메인사이드와우측을함께담은div');
var 리스너_캔버스=document.querySelector('#offcanvasBottom');
function header_click시 (e) {
  //캔버스여는 버튼, 초기화
  if (e.target.id=='header_canvas_click') {
    var 셑팅_캔버스바디=document.querySelector('#캔버스바디');
    셑팅_캔버스바디.innerHTML='';
    for (var i=0; i<document.querySelectorAll('.카테고리실행').length; i++) {
      document.querySelectorAll('.카테고리실행')[i].classList.remove('현재카테고리');
    }
    셑팅_캔버스바디.innerHTML=document.querySelector('#유의사항').outerHTML;
    document.querySelector('[title=유의사항]').classList.add('현재카테고리');
  }
  if (e.target.id=='navbar_main사이드숨기기') {
      var 타겟=document.querySelector('#navbar_main사이드숨기기');
      if (타겟.innerHTML=='main사이드숨기기') {
        document.querySelector('#main사이드').classList.add('d-none')
        타겟.innerHTML='main사이드보기'
      } else  {
        document.querySelector('#main사이드').classList.remove('d-none')
        타겟.innerHTML='main사이드숨기기'
      }  
  }
  if (e.target.id=='navbar_우측닫기_click') {
    document.querySelector('#main사이드우측의_코딩결과div').classList.add('d-none');
  }
  if (e.target.id=='navbar_html특수문자_click') {
    var 타겟element;
    var 셑팅할곳;
    //파일셑팅
      타겟element=document.querySelector('#html특수문자_click');
      셑팅할곳=document.querySelector('#메인사이드와우측을함께담은div > #main사이드우측의_코딩결과div');
      셑팅할곳.innerHTML=타겟element.outerHTML;
      document.querySelector('#main사이드우측의_코딩결과div').classList.remove('d-none');
  }
}

function main사이드클릭시_문서연결_버튼플러스일후남은교섭력계산(e) {//교섭력계산기능
  //class="파일연결" title="S1_해상일퀘동선" 타이틀을 아이디로 가진 div가 id=숨김_main사이드와header관련 안에 있다
  var 유형='';
  var 타겟element;
  var 셑팅할곳;
  if (e.target.classList.contains('파일연결')) {
    유형="파일연결";
    타겟element=document.querySelector('#' + e.target.title);
    셑팅할곳=document.querySelector('#메인사이드와우측을함께담은div > #main사이드우측의_코딩결과div');
    셑팅할곳.innerHTML=타겟element.outerHTML;
  }
  document.querySelector('#main사이드우측의_코딩결과div').classList.remove('d-none');
}
function 캔버스_검색value_change시(e) {
  //#canvas검색 input value가 change됐을때 검색실행,  
    //처음에 input value가 있다가 마지막에 사라짐?
    var 검색할문자=document.querySelector('#canvas검색').value;
    if (document.querySelector('#canvas검색').value=='') {return;}
    var 검색할버튼클래스들=document.querySelectorAll('.canvas카테고리 h6');
    var 내부html='';
    for (var i=0; i<검색할버튼클래스들.length; i++) {
      if (검색할버튼클래스들[i].title.search(검색할문자)>-1) {
        내부html+=검색할버튼클래스들[i].outerHTML;
      }
    }
    if (내부html=='') {alert('없음');return;}
    document.querySelector('#캔버스바디').innerHTML=내부html;
    document.querySelector('#canvas검색').value=검색할문자;
}
function 캔버스클릭시(e) {
  //카테고리실행 class, canvastext파일 class, canvas_div class 일때
  //id="캔버스바디_초기화", id="캔버스바디_모든text파일", id="캔버스바디_모든카테고리", id="canvas검색_clear", 
  //id="캔버스바디_카테고리숨김", id="캔버스바디_카테고리숨김해제"

  //공통 변수 3개
  var 타겟element;
  var 셑팅_캔버스바디=document.querySelector('#캔버스바디');
  var 셑팅_main사이드우측=document.querySelector('#메인사이드와우측을함께담은div > #main사이드우측의_코딩결과div');

  //카테고리실행 class, canvastext파일 class, canvas_div class 일때
  if (1==1) {
    var 유형='';
    if (e.target.classList.contains('카테고리실행')) {
      유형="카테고리실행";
      타겟element=document.querySelector('#' + e.target.title);
      셑팅_캔버스바디.innerHTML=타겟element.outerHTML;
    }

    if (e.target.classList.contains('canvastext파일')) {
      유형="canvastext파일";
      타겟element=document.querySelector('#숨김_main사이드와header관련 > #canvas텍스트');
      셑팅_main사이드우측.innerHTML=타겟element.outerHTML;
    }
    
    if (e.target.classList.contains('canvas_div')) {
      유형="canvas_div";
      타겟element=document.querySelector('#' + e.target.title);
      셑팅_main사이드우측.innerHTML=타겟element.outerHTML;
    }

    //후속작업
    if (유형=='카테고리실행') {
      for (var i=0; i<document.querySelectorAll('.카테고리실행').length; i++) {
        document.querySelectorAll('.카테고리실행')[i].classList.remove('현재카테고리');
      }
      document.querySelector('[title=' + e.target.title + ']').classList.add('현재카테고리');
    }

    if (유형=='canvastext파일') {
      embed_루트src_탐색기='portal/images/black_코딩등메모장/';
      document.querySelector('#embed부분').src=embed_루트src_탐색기 + e.target.title;
    }
  }

  //id="캔버스바디_초기화", id="캔버스바디_모든text파일", id="캔버스바디_모든카테고리", id="canvas검색_clear", 
  //id="캔버스바디_카테고리숨김", id="캔버스바디_카테고리숨김해제"
  if (1==1) {
    if (e.target.id=='캔버스바디_초기화') {
      var 셑팅_캔버스바디=document.querySelector('#캔버스바디');
      셑팅_캔버스바디.innerHTML='';
      for (var i=0; i<document.querySelectorAll('.카테고리실행').length; i++) {
        document.querySelectorAll('.카테고리실행')[i].classList.remove('현재카테고리');
      }
      셑팅_캔버스바디.innerHTML=document.querySelector('#유의사항').outerHTML;
      document.querySelector('[title=유의사항]').classList.add('현재카테고리');
    }
    if (e.target.id=='캔버스바디_모든text파일') {
      //34개까지는 17개가 초과하면 왼쪽17개 나머지 오른쪽
      //34개이상일때 나누기2 왼쪽오른쪽
      셑팅_캔버스바디.innerHTML='';
      var 검색할버튼클래스들=document.querySelectorAll('.canvas카테고리 h6');//canvastext파일, canvas_div
      var 개수=검색할버튼클래스들.length;
      var 왼쪽내부html='';
      var 오른쪽내부html='';

      if (개수<=17) {
        for (var i=0; i<검색할버튼클래스들.length; i++) {
          console.log(검색할버튼클래스들[i].outerHTML);
          왼쪽내부html+=검색할버튼클래스들[i].outerHTML;
        }
        왼쪽내부html='<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;>' + 왼쪽내부html + '</div>'
        오른쪽내부html='<div class="js모든파일리스트div"></div>'
      }

      if (개수>=18 && 개수<=34) {
        for (var i=0; i<17; i++) {
          왼쪽내부html+=검색할버튼클래스들[i].outerHTML;
        }
        for (var i=17; i<개수; i++) {
          오른쪽내부html+=검색할버튼클래스들[i].outerHTML;
        }
        왼쪽내부html='<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;>' + 왼쪽내부html + '</div>'
        오른쪽내부html='<div class="js모든파일리스트div"">' + 오른쪽내부html + '</div>'

      }
      if (개수>34) {
        for (var i=0; i<(개수/2); i++) {
          왼쪽내부html+=검색할버튼클래스들[i].outerHTML;
        }
        for (var i=(개수/2); i<개수; i++) {
          오른쪽내부html+=검색할버튼클래스들[i].outerHTML;
        }
        왼쪽내부html='<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;>' + 왼쪽내부html + '</div>'
        오른쪽내부html='<div class="js모든파일리스트div"">' + 오른쪽내부html + '</div>'

      }
      셑팅_캔버스바디.innerHTML=왼쪽내부html + 오른쪽내부html;
      var 카테고리들=document.querySelectorAll('.카테고리');
      for (var i=0; i<카테고리들.length; i++) {
        카테고리들[i].style.display='none';
      }
    }
    if (e.target.id=='캔버스바디_모든카테고리') {
      //최종적으로 세로 두줄이 되도록 한다. 17줄
      셑팅_캔버스바디.innerHTML='';
      var 검색할버튼클래스들=document.querySelectorAll('.카테고리실행');
      var 내부html='';
      for (var i=0; i<검색할버튼클래스들.length; i++) {
        내부html+=검색할버튼클래스들[i].outerHTML;
      }
      셑팅_캔버스바디.innerHTML=내부html;
      var 카테고리들=document.querySelectorAll('.카테고리');
      for (var i=0; i<카테고리들.length; i++) {
        카테고리들[i].style.display='none';
      }

    }
    if (e.target.id=='canvas검색_clear') {
      document.querySelector('#canvas검색').innerHTML='';   
    }
    if (e.target.id=='캔버스바디_카테고리숨김') {
      //class="카테고리실행". 
      var 숨김수=0;
      var 검색할버튼클래스들=document.querySelectorAll('.카테고리실행');
      for (var i=0; i<검색할버튼클래스들.length; i++) {
        //5개씩 d-none 클래스추가
        if (!검색할버튼클래스들[i].classList.contains('d-none')) {
          if (숨김수<5) {검색할버튼클래스들[i].classList.add('d-none'); 숨김수+=1;}
        }
      }
    }
    if (e.target.id=='캔버스바디_카테고리숨김해제') {
      //class="카테고리실행". 
      var 검색할버튼클래스들=document.querySelectorAll('.카테고리실행');
      var none수=0;
      for (var i=0; i<검색할버튼클래스들.length; i++) {
        if (검색할버튼클래스들[i].classList.contains('d-none')) {none수+=1;}
      }
      if (none수>0) {
        for (var i=none수-5; i<none수; i++) {
          if (i>-1) {검색할버튼클래스들[i].classList.remove('d-none')}
        }
      }     
    }

  }
  document.querySelector('#main사이드우측의_코딩결과div').classList.remove('d-none');
}
리스너_header.addEventListener('click',header_click시);
리스너_main사이드.addEventListener('click',main사이드클릭시_문서연결_버튼플러스일후남은교섭력계산);
리스너_캔버스.addEventListener('click',캔버스클릭시);
리스너_캔버스.addEventListener('change',캔버스_검색value_change시);




