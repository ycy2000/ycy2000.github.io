function 임시() {
  var 요소=document.querySelector('#임시');
  요소.style.display='blosdfck'
  console.log(요소.style.display)
}
//캔버스body초기화
var 셑팅_캔버스바디=document.querySelector('#캔버스바디');
셑팅_캔버스바디.innerHTML='';
for (var i=0; i<document.querySelectorAll('.카테고리실행').length; i++) {
  document.querySelectorAll('.카테고리실행')[i].classList.remove('현재카테고리');
}
셑팅_캔버스바디.innerHTML=document.querySelector('#참고').outerHTML;
document.querySelector('[title="참고"]').classList.add('현재카테고리');

var 유형='카피보기' //canvas_div
function 보기셑팅() {
  if (유형=='카피보기') {
    document.querySelector('#카피').classList.remove('d-none');
    document.querySelector('#캔버스결과').classList.add('d-none');
  }
  if (유형=='canvas_div') {
    document.querySelector('#카피').classList.add('d-none');
    document.querySelector('#캔버스결과').classList.remove('d-none');
  }
}
보기셑팅()

var 선사기존html='<div id="선사정보" style="visibility: hidden;"></div>'
document.querySelector('#카피').innerHTML=선사기존html + document.querySelector('#결과모음_none #결과_선사').outerHTML;//안에 내용만
//비밀번호 입력위해 숨기기
if ('비밀번호'=='비밀번') {
  document.querySelector('#modal').classList.remove('d-none');
  document.querySelector('#카피').classList.add('d-none');
  document.querySelector('#head_button_group').classList.add('d-none');
  
  var btnCheck = document.getElementById('btnCheck');
  function check클릭 () {
    if (document.querySelector('#pwd').value=='3368') {
      document.querySelector('#카피').classList.remove('d-none');
      document.querySelector('#head_button_group').classList.remove('d-none');
      document.querySelector('#modal').classList.add('d-none');
    } else {
      alert('비밀번호가 맞지 않습니다 (힌트:팩스)')
    }
  }
}


// 링크이동시 실행될것 한번더
var 리스너_카피=document.querySelector('#카피');
var 리스너_head_button_group=document.querySelector('#head_button_group');
var 리스너_캔버스=document.querySelector('#offcanvasBottom');
var 리스너_execl범위풀_기결과=document.querySelector('#execl범위풀_기결과');

function 리스너_카피_클릭이벤트(e) {
  console.log('리스너_카피_클릭이벤트(e)');
  //text-overflow: ellipsis 활성 여부 :  e.target.clientWidth >= e.target.scrollWidth) {//오버플로우 없는 경우
  //className은 문자열, classList는 배열?
  if (e.target.parentElement.className.search('독립')>-1) {//첫div클릭시 색칠/색칠해제, 다른div는 최대높이로.
    e.target.classList.add('코딩표시');
    var 높이확인용div들;
    var 코딩표시인덱스;
    console.log('e.target.parentElement.children.length : ' + e.target.parentElement.children.length)
    for (var i=0; i<e.target.parentElement.children.length; i++) {
      if (e.target.parentElement.children[i].classList.contains('코딩표시')) {코딩표시인덱스=i}
    }
      //코딩표시인덱스는 0 일때 첫번째일때만 색칠하려고 했는데 그냥 한다.
      if (e.target.parentElement.classList.contains('결과내검색색깔넣기')) {
        e.target.parentElement.classList.remove('결과내검색색깔넣기');
      } else {
        e.target.parentElement.classList.add('결과내검색색깔넣기');
      }

    e.target.classList.remove('코딩표시');
  }
  
  if (e.target.classList.contains('조회')) {
    alert('조회');

  }
  if (e.target.classList.contains('clear')) {
    e.target.previousElementSibling.previousElementSibling.value='';//input
  }
  //ex:id=선사_고려해운 일때 id=선사_고려해운_정보 가 있을때 id=선사정보에 가져옴
  //일단 hidden하고 #선사정보 안에 해당 아이디가 없으면 넣고 보이게한다.
  if (e.target.classList.contains('badge')) {
    console.log('e.target.classList.contains(badge)');
    var 아이디='_';
    아이디=e.target.parentNode.parentNode.id;
    if (아이디=='') {아이디='_'}
    //아이디:선사_OOCL, 선사==>선사정보 하려면

    var 배치할곳=document.querySelector('#선사정보');
    var 찾을정보있는none요소이름=아이디.split('_')[0] + '정보_none';
    var 찾을요소=document.querySelector('#' + 찾을정보있는none요소이름 + ' #' + 아이디 + '_정보');

    console.log(찾을정보있는none요소이름)

    //id=선사정보에 해당아이디가 없는 경우에만 셑팅한다. #선사정보 #' + 아이디 + '_정보'는 경과부분이고, 선사정보가 아닐수도 있으니 헷갈리지 말것
    //#선사정보_none #' + 아이디 + '_정보' 부분은 #선사정보_none==>#운송사정보_none 유연하게 될수 있도록 코딩한다.
    if (!document.querySelector('#선사정보 #' + 아이디 + '_정보') && 찾을요소) {
      배치할곳.innerHTML=찾을요소.outerHTML;
      배치할곳.style.visibility='visible';
    } else if (document.querySelector('#선사정보 #' + 아이디 + '_정보') && 배치할곳.style.visibility=='hidden') {
      배치할곳.style.visibility='visible';
    } else if (document.querySelector('#선사정보 #' + 아이디 + '_정보') && 배치할곳.style.visibility=='visible') {
      배치할곳.style.visibility='hidden';
    } else {
      배치할곳.style.visibility='hidden';
    }
    //left조정
    if (찾을정보있는none요소이름=='선사정보_none') {배치할곳.style.left='154px'}
    if (찾을정보있는none요소이름=='운송사정보_none') {배치할곳.style.left='284px'}

    console.log('아이디 : ' + 아이디 + ' : 마지막');
  }
  //보이게 한 선사정보 숨기기
  var 앞세글자;
  var 뒤세글자;
  앞세글자=e.target.parentElement.id.substring(0,3);
  뒤세글자=e.target.parentElement.id.substring(e.target.parentElement.id.length-3);
  console.log('length : ' + e.target.parentElement.id.length 
  + ' e.target.parentElement.id : ' + e.target.parentElement.id 
  + ' 앞세글자 : ' + 앞세글자 + ' ,뒤세글자 : ' + 뒤세글자)
  
  if (앞세글자=='선사_' && 뒤세글자=='_정보' && e.target.parentElement.id.length>6) {
    console.log('앞세글자==선사_ && 뒤세글자==_정보')
    document.querySelector('#선사정보').style.visibility='hidden';
  }
}
function 전체검색div보기() {
  document.querySelector('#전체검색div').classList.remove('d-none');
  //위치가 아래에 붙도록...
  var 전체검색div높이=document.querySelector('#전체검색div').style.height;//500px
  전체검색div높이=Number(전체검색div높이.substring(0,전체검색div높이.length-2));
  var 화면높이=window.innerHeight;//969
  document.querySelector('#전체검색div').style.top=(화면높이 - 전체검색div높이) + 'px';

  console.log('요소에 해당 style이 없을때')
  console.log('computedstyle.top : ' + window.getComputedStyle(document.querySelector('#전체검색div')).top);
  console.log('요소.style.top :  ' + document.querySelector('#전체검색div').style.top + ' ==> 적용하면 확인됨');
  console.log('전체검색div높이 : ' + 전체검색div높이);
  console.log('화면높이 - 전체검색div높이 : ' + (화면높이 - 전체검색div높이));
  console.log(window.getComputedStyle(document.querySelector('#전체검색div')).top);
}
function 리스너_head_button_group클릭이벤트(e) {
  console.log('리스너_head_button_group클릭이벤트(e)');
  if (e.target.id=='전체검색div보기') {
    전체검색div보기();
  }
  if (e.target.id=='전체검색_초기화버튼') {
    document.querySelector('#전체검색div').classList.add('d-none');
    document.querySelector('#전체검색input').value='';
  }
  if (e.target.id=='결과내검색_초기화버튼') {
    console.log('e.target.id==결과내검색_초기화버튼');
    //execl범위풀_기결과 안에 class 결과표시 가 있으면 classlist.remove
    //카피 안에 class 결과표시 가 있으면 classlist.remove
      var 찾을곳들=document.querySelectorAll('.결과내검색색깔넣기');
      for (var i=0; i<찾을곳들.length; i++) {
          찾을곳들[i].classList.remove('결과내검색색깔넣기');
      }
    document.querySelector('#결과내검색').value='';
  }
  //버튼에 색칠하고 해당버튼의 title을 id로가진 결과left모음_none안의 요소를 id=결과left 에 배치
  //카테고리의 경우 : 머리글이 각각 다르게 추가한 후에 배치한다??
  if (e.target.classList.contains('카테고리')) {
    for (var i=0; i<document.querySelectorAll('#head_button_group .카테고리').length; i++) {
      document.querySelectorAll('#head_button_group .카테고리')[i].classList.remove('active');
    }
    e.target.classList.add('active');
    타이틀=e.target.title;
    if (e.target.title=='') {타이틀='_'} //타이틀이 공백이면 #에서 에러난다.
    if (document.querySelector('#' + 타이틀)) {
      document.querySelector('#카피').innerHTML=선사기존html+document.querySelector('#결과모음_none #' + 타이틀).outerHTML;//안에 내용만
      유형='카피보기';
      보기셑팅()
    }
    var 최대높이div;//가장 높은 높이로 재설정
    var 현재div높이;
    var 높이px;
    var 가로한줄모두=document.querySelectorAll('#카피 > div > div');
    for (var i=0; i<가로한줄모두.length; i++) {
      최대높이div=0;//sustring:시작위치(0부터)에서 끝위치(1부터)까지
      for (var 내부=0; 내부<가로한줄모두[i].children.length; 내부++) {
        높이px=window.getComputedStyle(가로한줄모두[i].children[내부]).height;
        현재div높이=Number(높이px.substring(0,높이px.length-2));
        if (최대높이div<현재div높이) {최대높이div=현재div높이}
      }
      for (var 내부=0; 내부<가로한줄모두[i].children.length; 내부++) {
        가로한줄모두[i].children[내부].style.height=최대높이div + 'px';
      }
    }






    // var 시작시=window.getComputedStyle(e.target).whiteSpace;
    // if (window.getComputedStyle(e.target).whiteSpace=='normal') {
    //   e.target.style.whiteSpace='nowrap';
    //   e.target.style.height='28px';
    //   console.log('시작시 : ' + 시작시 + ', ==>변경 : nowrap, 결과높이 clientHeight : 28px');
    // } else {
    //   e.target.style.whiteSpace='normal';
    //   e.target.style.height=e.target.scrollHeight + 'px';
    //   console.log('시작시 : ' + 시작시 + ', ==>변경 : normal, 결과높이 scrollHeight : ' + e.target.scrollHeight + 'px');
    // }

    // e.target.classList.remove('코딩표시');
  }
  //textarea초기화
  if (e.target.innerHTML=='결과만초기화') {
    // document.querySelector('#execl범위풀_기결과').innerHTML='';
    document.querySelector('#execl범위풀_기결과').innerHTML='';
    document.querySelector('#execl범위풀_기결과').style.visibility='hidden';
    document.querySelector('#textarea_보기숨기기').innerHTML='결과만보기';
  }
  //tab으로분리보기, 엑셀범위 붙여넣기 하면 가로는 탭, 세로는 줄바꿈이 된다.
  if (e.target.innerHTML=='풀기') {
    var 문자열=document.querySelector('#dk').value;
    var 줄바꿈정보=문자열.split('\n');
    var 줄바꿈한줄정보;
    var 한줄결과문자열='';
    var 결과합치기문자열='';
    if (문자열=='') {return;}
    for (var i=0; i<줄바꿈정보.length-1; i++) {
      한줄결과문자열='';
      줄바꿈한줄정보=줄바꿈정보[i].split('\t');
      for (var 내부=0; 내부<줄바꿈한줄정보.length; 내부++) {
        한줄결과문자열+='<span>' + 줄바꿈한줄정보[내부] + '</span>';
      }
      한줄결과문자열='<div>' + 한줄결과문자열 + '</div>';
      결과합치기문자열=결과합치기문자열 + 한줄결과문자열;
    }

    var 문자열=document.querySelector('#dk').value;
    if (document.querySelector('#execl범위풀_기결과 span')) {
        document.querySelector('#execl범위풀_기결과').innerHTML+=결과합치기문자열;
        document.querySelector('#execl범위풀_기결과').style.visibility='visible';
        document.querySelector('#textarea_보기숨기기').innerHTML='결과만숨기기';
      } else {
        document.querySelector('#execl범위풀_기결과').innerHTML=결과합치기문자열;
        document.querySelector('#execl범위풀_기결과').style.visibility='visible';
        document.querySelector('#textarea_보기숨기기').innerHTML='결과만보기';
      }
    //span폭조정. 마지막에 1칸짜리가 생기는데..마지막 정보를 제외하고 정보생성하였다. 위에서
    var div안span최대넓이들=[];//기존꺼에 + 될때 최대개수 다를수 있다...
    var 스타일width;
    for (var i=0; i<document.querySelectorAll('#execl범위풀_기결과 div').length; i++) {
      document.querySelectorAll('#execl범위풀_기결과 div')[i].classList.add('코딩표시');

      for (var 내부=0; 내부<document.querySelectorAll('.코딩표시 > span').length; 내부++) {
        스타일width=window.getComputedStyle(document.querySelectorAll('.코딩표시 > span')[내부]).width;
        if (스타일width.width<3) {
          스타일width=0;
        } else {
          스타일width=Number(스타일width.substring(0,스타일width.length-2)).toFixed(0);
        }
        if (!div안span최대넓이들[내부]) {
          div안span최대넓이들.push(스타일width);
        } else {
          if (Number(div안span최대넓이들[내부])<Number(스타일width)) {
            div안span최대넓이들[내부]=스타일width;}
        }
      }
      document.querySelectorAll('#execl범위풀_기결과 div')[i].classList.remove('코딩표시');
    }
    console.log('-------------넓이 확인 끝 ---------------')
    //맨 상단에 지우기 span 추가
    var 맨상단지우기span='';
    for (var i=0; i<div안span최대넓이들.length; i++) {
      맨상단지우기span+='<span>del</span>'
    }
    맨상단지우기span='<div id="del">' + 맨상단지우기span + '</div>';

    //☆ 지우기span이 있으면 (첫번째 span의 innerHTML이 '숨김'일때 안넣는걸로...
    if (document.querySelector('#del')) {

    } else {
      document.querySelector('#execl범위풀_기결과').innerHTML=맨상단지우기span+document.querySelector('#execl범위풀_기결과').innerHTML;
    }
    //span넓이 조정
    for (var i=0; i<document.querySelectorAll('#execl범위풀_기결과 div').length; i++) {
      document.querySelectorAll('#execl범위풀_기결과 div')[i].classList.add('코딩표시');

      for (var 내부=0; 내부<document.querySelectorAll('.코딩표시 > span').length; 내부++) {
        document.querySelectorAll('.코딩표시 > span')[내부].style.width=Number(div안span최대넓이들[내부]) + 10 + 'px';
      }
      document.querySelectorAll('#execl범위풀_기결과 div')[i].classList.remove('코딩표시');
    }
    document.querySelector('#dk').classList.add('execl범위풀_기결과_보라색칠');
    document.querySelector('#textarea_보기숨기기').innerHTML='결과만숨기기';
  }
  //innerHTML이 clear
  if (e.target.innerHTML=='clear') {
    document.querySelector('#dk').value='';
    document.querySelector('#dk').classList.remove('execl범위풀_기결과_보라색칠');
  }
  //innerHTML이 보기/숨기기
  if (e.target.innerHTML=='결과만숨기기') {
    console.log('e.target.innerHTML==결과만숨기기');
    document.querySelector('#execl범위풀_기결과').style.visibility='hidden';//textarea는 현재보이는 정보가 value 
    e.target.innerHTML='결과만보기';
  } else if (e.target.innerHTML=='결과만보기') {
    document.querySelector('#execl범위풀_기결과').style.visibility='visible';//textarea는 현재보이는 정보가 value 
    e.target.innerHTML='결과만숨기기';
  }
}

function 리스너_head_button_group_change이벤트(e) {
  console.log('리스너_head_button_group_change이벤트(e)');
  if (e.target.id=='전체검색input') {
    var 검색할문자열=document.querySelector('#전체검색input').value.toUpperCase();
    if (검색할문자열=='') {return;}
    if (document.querySelector('#전체검색div').classList.contains('d-none')) {전체검색div보기()}
    // #결과모음_none > #결과>선사 > #각 한줄 div
    var 검색할요소들=document.querySelectorAll('#결과모음_none > div > div');
    var 추출문자열;
    var 결과='';
    var 결과유무='없음';
    추출문자열=검색할요소들[0].innerText;
    for (var i=0; i<검색할요소들.length; i++) {
      추출문자열=검색할요소들[i].innerText.toUpperCase();
      if (추출문자열.search(검색할문자열)>-1) {
        결과유무='있음';
        결과+=검색할요소들[i].outerHTML;
      }
      if (결과유무=='없음') {
        // alert('검색결과 : 없음')
      } else {
        document.querySelector('#전체검색body').innerHTML=결과;
      }
    }
  }
  if (e.target.id=='결과내검색') {//#카피 안에 들어와 있는 내용들을 확인한다. id=결과내검색 input 변경시
    //#카피 > div > div > div : #카피 > #결과>선사 > #선사_고려해운 > div(가로한줄)
    var text=document.querySelector('#결과내검색').value.toUpperCase();
    if (text=='') {return;}
    
    var 찾을곳들=document.querySelectorAll('#카피 > div > div > div');
    for (var i=0; i<찾을곳들.length; i++) {
      if (찾을곳들[i].innerText.toUpperCase().search(text.toUpperCase())>-1) {
        찾을곳들[i].parentElement.classList.add('결과내검색색깔넣기');
      }
    }
  }
}
function 캔버스_검색value_change시(e) {
  console.log('캔버스_검색value_change시(e)');
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
  유형='';
  console.log('캔버스클릭시(e)');
  var 캔버스관련자료none안_타겟element;
  var 셑팅_캔버스바디=document.querySelector('#캔버스바디');
  var 결과부분=document.querySelector('#캔버스결과');
  //카테고리실행 class, 코딩등메모장text파일 class, canvas_div class 일때
  if (1==1) {
    if (e.target.classList.contains('카테고리실행')) {
      유형="카테고리실행"; //#canvas텍스트 가져와서 나중에 후속작업이 있다.
      캔버스관련자료none안_타겟element=document.querySelector('#' + e.target.title);
      셑팅_캔버스바디.innerHTML=캔버스관련자료none안_타겟element.outerHTML;
    }   
    if (e.target.classList.contains('canvas_div')) {
      유형="canvas_div";
      캔버스관련자료none안_타겟element=document.querySelector('#' + e.target.title);
      결과부분.innerHTML=캔버스관련자료none안_타겟element.outerHTML;
      보기셑팅();
    }
    //후속작업
    if (유형=='카테고리실행') {
      for (var i=0; i<document.querySelectorAll('.카테고리실행').length; i++) {
        document.querySelectorAll('.카테고리실행')[i].classList.remove('현재카테고리');
      }
      document.querySelector('[title=' + e.target.title + ']').classList.add('현재카테고리');
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
      셑팅_캔버스바디.innerHTML=document.querySelector('#참고').outerHTML;
      document.querySelector('[title="참고"]').classList.add('현재카테고리');
    }
    if (e.target.id=='캔버스바디_모든text파일') {
      //34개까지는 17개가 초과하면 왼쪽17개 나머지 오른쪽
      //34개이상일때 나누기2 왼쪽오른쪽
      셑팅_캔버스바디.innerHTML='';
      var 검색할버튼클래스들=document.querySelectorAll('.canvas카테고리 h6');//코딩등메모장text파일, canvas_div
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
      document.querySelector('#canvas검색').value='';   
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
}
function execl범위풀_기결과_click시(e) {
  console.log('execl범위풀_기결과_click시(e)');
  //한줄당 하나의 div이고, div안에 span이 있다... 표시순번이 0인것(첫번째)==> 첫번째 세로숨김 제한. 첫번째 가로숨김 제한
  if (e.target.innerHTML=='del') {
    e.target.classList.add('코딩표시');
    var 표시순번;
    for (var i=0; i<document.querySelectorAll('#del span').length; i++) {
      if (document.querySelectorAll('#del span')[i].classList.contains('코딩표시')) {표시순번=i;}
    }
    e.target.classList.remove('코딩표시');
    for (var i=0; i<document.querySelectorAll('#execl범위풀_기결과 div').length; i++) {
      document.querySelectorAll('#execl범위풀_기결과 div')[i].classList.add('코딩표시');
      for (var 내부=0; 내부<document.querySelectorAll('.코딩표시 span').length; 내부++) {
        if (내부==표시순번) {
          document.querySelectorAll('.코딩표시 span')[내부].classList.add('d-none');
        }
      }
      document.querySelectorAll('#execl범위풀_기결과 div')[i].classList.remove('코딩표시');
    }
  }
}
리스너_카피.addEventListener('click', 리스너_카피_클릭이벤트);
리스너_head_button_group.addEventListener('click', 리스너_head_button_group클릭이벤트);
리스너_head_button_group.addEventListener('change', 리스너_head_button_group_change이벤트);
리스너_캔버스.addEventListener('click',캔버스클릭시);
리스너_캔버스.addEventListener('change',캔버스_검색value_change시);
리스너_execl범위풀_기결과.addEventListener('click',execl범위풀_기결과_click시);

