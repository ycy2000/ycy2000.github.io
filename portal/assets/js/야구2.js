let 결과=[];//기회정보만의 결과
let 최종결과=[];
let js노랑결과=[];
let js포함결과=[];
첫번째빈C색칠();
function 랜덤번호맞추기모드확인() {
  if (document.querySelector('.form-check-input')?.checked) {console.log('체크')} else {return;}
  if (document.querySelector('#숨겨진랜덤번호').innerHTML=='') {랜덤번호생성();}//랜덤번호 없으면 생성한다.
  //기회번호 4개에 대해서 B S 기록한다.
  랜덤번호있을때_SB기록();
}
function 중복제거모든조합() {
  var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var result = [];

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      for (let m = 0; m < list.length; m++) {
        for (let k = 0; k < list.length; k++) {
          // 중복된 요소 제거
          if (i === j || i === m || j === m || j === k || m === k || k === i) continue;
          // 중복 방지를 위해 Set에 문자열로 저장
          var combination = [list[i], list[j], list[m], list[k]];
          result.push(combination);
        }
      }
    }
  }
  // Set을 다시 배열로 변환하며 각 문자열을 숫자 배열로 변환
  return result;
}
let 모든조합=중복제거모든조합();
function 연습() {
  console.log(document.querySelector('.form-check-input').checked)
}
function 랜덤번호생성() {
  var 랜덤배열10개=[];
  var 확정배열4개=[];
  var 최대값인덱스;
  for (var i=0; i<10; i++) {
    랜덤배열10개.push(Math.random());
  }
  for (var 추출=0; 추출<4; 추출++) {
    최대값인덱스=랜덤배열10개.indexOf(Math.max(...랜덤배열10개));
    랜덤배열10개[최대값인덱스]=-1;//다음최대값 추출위해 -1로 변경해둠, 최소값 0이 여러개 나올수 있으므로
    확정배열4개.push(최대값인덱스);
  }
  //console.log(확정배열4개)
  document.querySelector('#숨겨진랜덤번호').innerHTML=확정배열4개.join(',');
  //기본적으로 * 로 표시
  for (i=0; i<4; i++) {
    document.querySelectorAll('#랜덤번호 div')[i].innerHTML='*';
  }
}
function 랜덤번호보기() {
  var 랜덤번호span값=document.querySelector('#숨겨진랜덤번호').innerHTML;
  var 랜덤번호span값배열=랜덤번호span값.split(',');
  for (var i=0; i<4; i++) {
    if (랜덤번호span값=='') {
      document.querySelectorAll('#랜덤번호 > div')[i].innerHTML='';
    } else {
      document.querySelectorAll('#랜덤번호 > div')[i].innerHTML=랜덤번호span값배열[i];
    }
  }
}
function 랜덤번호숨기기() {
  var 랜덤번호span값=document.querySelector('#숨겨진랜덤번호').innerHTML;
  for (var i=0; i<4; i++) {
    if (랜덤번호span값=='') {
      document.querySelectorAll('#랜덤번호 > div')[i].innerHTML='';
    } else {
      document.querySelectorAll('#랜덤번호 > div')[i].innerHTML='*';
    }
  }
}
function 랜덤번호지움() {
  document.querySelector('#숨겨진랜덤번호').innerHTML='';
  for (var i=0; i<4; i++) {
    document.querySelectorAll('#랜덤번호 > div')[i].innerHTML='';
  }
}
function 랜덤번호있을때_SB기록() {
  console.log(' 랜덤번호있을때_SB기록()')
  //숫자일치,위치일치 클래스 값 제거
  for (var i=0; i<document.querySelectorAll('.숫자일치').length; i++) {
    document.querySelectorAll('.숫자일치')[i].innerHTML='';
    document.querySelectorAll('.위치일치')[i].innerHTML='';
  }

  var 랜덤번호span값=document.querySelector('#숨겨진랜덤번호').innerHTML;
  var 랜덤번호span값배열=[];
  랜덤번호span값배열=랜덤번호span값.split(',');

  for (var i=0; i<10; i++) {
    var 볼=0, 스트=0;
    var 현재기회div4개=document.querySelectorAll('#기회' + i + ' *'); 

    if (현재기회div4개[0].innerHTML=='' && 현재기회div4개[1].innerHTML=='' && 현재기회div4개[2].innerHTML=='' && 현재기회div4개[3].innerHTML=='') {
      //console.log('모두공란이면 continue')
      continue;
    }

    for (var t=0; t<4; t++) {
      //console.log('랜덤번호span값배열[t] : ' + 랜덤번호span값배열[t] + ' == ' + 현재기회div4개[t].innerHTML)
      //console.log(랜덤번호span값배열[t] == 현재기회div4개[t].innerHTML)
      if (랜덤번호span값배열[t]==현재기회div4개[t].innerHTML) {스트+=1;}
      if (랜덤번호span값배열[t]!=현재기회div4개[t].innerHTML && 랜덤번호span값배열.includes(현재기회div4개[t].innerHTML)) {볼+=1;}
    }

    if (볼!=0) {현재기회div4개[4].innerHTML=볼;}
    if (스트!=0) {현재기회div4개[5].innerHTML=스트;}
  }
} 
function 계산() {
  랜덤번호맞추기모드확인()
  결과=[];
  //1.기회정보 정의 : {기회번호, 숫자일치, 위치일치}, parseInt(), 값이 없거나 문자열로 시작되면 NaN
  var 기회들=[], 기회숫자=[], 숫자일치, 위치일치;
  for (var i=0; i<document.querySelectorAll('.기회').length; i++) {
    var 기회=document.querySelectorAll(`#기회${i} *`);
    if (기회[0].innerHTML=='' || 기회[1].innerHTML=='' || 기회[2].innerHTML=='' || 기회[3].innerHTML=='') {continue;} else {}
    for (var m=0; m<기회.length; m++) {
      기회숫자=[parseInt(기회[0].innerHTML, 10),parseInt(기회[1].innerHTML, 10),parseInt(기회[2].innerHTML, 10),parseInt(기회[3].innerHTML, 10)]
      숫자일치=parseInt(기회[4].innerHTML ? 기회[4].innerHTML : 0); //''이거나 0 이면 0,
      위치일치=parseInt(기회[5].innerHTML ? 기회[5].innerHTML : 0); //''이거나 0 이면 0,
    }
    기회들.push({기회숫자,숫자일치,위치일치})
  }
  //2.모든조합을 비교 : 기회숫자는 위치일치 확인,
  모든조합.forEach(조합 => {
    let 유효 = true;
    for (const { 기회숫자, 숫자일치, 위치일치 } of 기회들) {
      let 위치일치수 = 0;
      let 숫자일치수 = 0;
      // 위치와 값이 모두 일치하는 개수
      for (let i = 0; i < 4; i++) {if (조합[i] == 기회숫자[i]) {위치일치수++;}}
      // 숫자만 일치하는 개수  
      const 조합복사 = [...조합];     //-1값 넣어 변경되니까 복사본 사용
      const 기회복사 = [...기회숫자]; //-1값 넣어 변경되니까 복사본 사용
      for (let i = 0; i < 4; i++) {if (조합[i] == 기회숫자[i]) {조합복사[i] = -1; /*일치한 위치는 제외*/기회복사[i] = -1;}}    
      숫자일치수 = 조합복사.filter(num => num !== -1 && 기회복사.includes(num)).length;
      // 조건 불일치 시 필터링
      if (위치일치수 != 위치일치 || 숫자일치수 != 숫자일치) {유효 = false;break;} //break는 for 문 나오는것
    }
    if (유효) 결과.push(조합);
  })
  //------결과에 대해서 가능번호는 해당위치에 없는 것을 색칠하도록 한다.
  var 없는번호1st=[],없는번호2st=[],없는번호3st=[],없는번호4st=[];
  for (var i=0; i<4; i++) {
    for (내부=0; 내부<10; 내부++) {
      if (결과.filter(번호4 => 번호4[i]==내부).length==0) {
        if (i==0) {없는번호1st.push(내부)}
        if (i==1) {없는번호2st.push(내부)}
        if (i==2) {없는번호3st.push(내부)}
        if (i==3) {없는번호4st.push(내부)}
      }
    }
  }
  var 가능숫자하나=document.querySelectorAll('.가능숫자하나'); //다음 활용위해 재 정의 ... 없어야할번호에서 한번더 활용됨
  for (var i=0; i<document.querySelectorAll('.가능숫자하나 > div').length; i++) {
    document.querySelectorAll('.가능숫자하나 > div')[i].classList.remove('js가능제외');
  }
  for (var i=0; i<없는번호1st.length; i++) {
    가능숫자하나[없는번호1st[i]].children[0].classList.add('js가능제외');
  }
  for (var i=0; i<없는번호2st.length; i++) {
    가능숫자하나[없는번호2st[i]].children[1].classList.add('js가능제외');
  }
  for (var i=0; i<없는번호3st.length; i++) {
    가능숫자하나[없는번호3st[i]].children[2].classList.add('js가능제외');
  }
  for (var i=0; i<없는번호4st.length; i++) {
    가능숫자하나[없는번호4st[i]].children[3].classList.add('js가능제외');
  }
  // 기회계산 한정 : 제외수(없는숫자), 포함수(모두있는숫자 + 위치에 모두 있지는 않다), 위치확정수(모두있는숫자 + 위치에 모두있다) 설정
  var 기회계산제외수=[];
  for (var i=0; i<10; i++) {
    if (결과.join(',').indexOf(i) == -1) {기회계산제외수.push(i);}
  }
  //   1)기회계산제외수는 아래로 무조건 내리고 색칠한다.(결과 조합에는 이미 기회계산에서 제외되어있다)
  for (var i=0; i<10; i++) {//위 입력, 아래 입력토글
    document.querySelectorAll('.입력토글')[i].classList.remove('js표시');
    if (기회계산제외수.includes(i)) { //내리고 색칠
      document.querySelectorAll('.입력')[i].innerHTML='';
      document.querySelectorAll('.입력토글')[i].innerHTML=i;
      document.querySelectorAll('.입력토글')[i].classList.add('js표시');
    }
  }
  //기회계산 포함수 : 결과에 모두 들어있는 숫자
  var 기회계산포함수=[];
  for (var i=0; i<10; i++) {
    if (결과.length > 0 && 결과.filter(번호4 => 번호4.includes(i)).length==결과.length) {기회계산포함수.push(i)}
  }
  for (var i=0; i<10; i++) {//위에 색칠(포함수)
    document.querySelectorAll('.입력')[i].classList.remove('js표시');
    if (기회계산포함수.includes(i)) { //내리고 색칠
      document.querySelectorAll('.입력토글')[i].innerHTML='';
      document.querySelectorAll('.입력')[i].innerHTML=i;
      document.querySelectorAll('.입력')[i].classList.add('js표시');
    }
  }
  // 순서확정된번호 : 기회계산포함수에서...
  for (var 네개=0; 네개<4; 네개++) {
    document.querySelectorAll('#순서확정된번호 > div')[네개]='';
    var 순서확정='';
    //첫번째를 볼때 포함수를 넣어보면서 결과개수=포함수개수와 같을때
    for (var 내부=0; 내부<기회계산포함수.length; 내부++) {
      if (결과.length==결과.filter(번호4 => 번호4[네개]==기회계산포함수[내부]).length) {
        document.querySelectorAll('#순서확정된번호 > div')[네개].innerHTML=기회계산포함수[내부];
      }
    }
  }
  document.querySelector('#없어야할번호').innerHTML=기회계산제외수;
  document.querySelector('#포함해야할번호').innerHTML=기회계산포함수;

  최종결과=결과;
  최종결과표시();
  첫번째빈C색칠();
}
function 최종결과표시() {
  document.querySelector('#결과수').innerHTML=최종결과.length;
  document.querySelector('#가능한조합').innerHTML='';
  var div4=document.querySelector('#숨김번호4');//안에 div안에 div4개
  var 번호4넣을곳=document.querySelectorAll('#숨김번호4 > div > div');
  var 번호넣기;
  var 카운트=0, 누적='';

  for (var 번호4 of 최종결과) {
    카운트+=1;
    for (var i=0; i<4; i++) {
      번호4넣을곳[i].innerHTML=번호4[i];
    }
    누적=누적+div4.innerHTML; //div 안에 div4개
    if (카운트 % 30 == 0) {
      //감싸기 + 숨김번호4에 추가 후 누적정보 초기화
      누적='<div>' + 누적 + '</div>';
      document.querySelector('#가능한조합').innerHTML+=누적;
      누적='';
    }
    if (카운트 % 30 != 0 && 카운트==최종결과.length) {
      //30개 미만인경우나 30배수 초과인경우, 
      //감싸기 + 숨김번호4에 추가 후 누적정보 초기화
      누적='<div>' + 누적 + '</div>';
      document.querySelector('#가능한조합').innerHTML+=누적;
      누적='';
    }
  }
}
function 첫번째빈C색칠() {
  //C 부분 설정 : 빈곳이 있으면 첫번째 빈곳에 .js기록중 넣기
  document.querySelector('.js기록중')?.classList.remove('js기록중'); //? 없으면 작동안함
  for (var i=0; i<document.querySelectorAll('.기회').length; i++) {
    var 기회=document.querySelectorAll(`#기회${i} *`);
    if (기회[0].innerHTML=='' && 기회[1].innerHTML=='' && 기회[2].innerHTML=='' && 기회[3].innerHTML=='' && 기회[4].innerHTML=='' && 기회[5].innerHTML=='') {
      기회[6].classList.add('js기록중'); break;
    }
  } 
}
function 기회정보제외_초기화() {
  //계산() 내부에 js가능제외 지우는것 있다. 계산을 누르기 전 상태이긴한데....
  for (var i=0; i<10; i++) {
    document.querySelectorAll('.입력')[i].innerHTML=i;
    document.querySelectorAll('.입력')[i].classList.remove('js표시');
    document.querySelectorAll('.입력토글')[i].innerHTML='';
    document.querySelectorAll('.입력토글')[i].classList.remove('js표시');

    document.querySelector('#없어야할번호').innerHTML='';
    document.querySelector('#포함해야할번호').innerHTML='';
  }
  for (var i=0; i<4; i++) {document.querySelectorAll('#순서확정된번호 > div')[i].innerHTML=''}
  for (var i=0; i<document.querySelectorAll('.가능숫자하나 > div').length; i++) {document.querySelectorAll('.가능숫자하나 > div')[i].classList.remove('js노랑')}
  for (var i=0; i<10; i++) {document.querySelectorAll('#포함선택번호10 > div > div')[i].classList.remove('js노랑');
  }
}
function 계산_기회계산만적용() {
  //기회계산을 제외한 다른 조건을 초기화하고 계산();
  기회정보제외_초기화();
  계산();
}

var 바디=document.querySelector('body');
var 리스너가능한조합=document.querySelector('#가능한조합');
var 리스너가능=document.querySelector('#가능');
var 리스너포함선택=document.querySelector('#포함선택');
function 결과에포함선택정보적용() {
  var 포함수=[];
  for (var i=0; i<9; i++) {
    if (document.querySelectorAll('#포함선택번호10 > div > div')[i].classList.contains('js노랑')) {포함수.push(i+1)}
  }
  if (document.querySelectorAll('#포함선택번호10 > div > div')[9].classList.contains('js노랑')) {포함수.push(0)}
  console.log('포함수 : [' + 포함수 + ']')
  console.log('최종결과.length : ' + 최종결과.length)
  for (var i=0; i<포함수.length; i++) {
    최종결과=최종결과.filter(번호4 => 번호4.includes(포함수[i]))
  }
  //결과에가능정보적용() 마지막에 있는것 : 최종결과=js노랑결과; 최종결과표시();
  최종결과표시();
}
function 포함선택click(e) {
  //초기값 최종결과를 살릴수 있는 방법은?
  if (!e.target.parentElement.parentElement.id=='포함선택번호10') {return;}
  if (e.target.classList.contains('js노랑')) {
    e.target.classList.remove('js노랑');
  } else {
    e.target.classList.add('js노랑');
  }
  if (e.target.innerHTML=='초기화') {
    for (var i=0; i<10; i++) {
      document.querySelectorAll('#포함선택번호10 > div > div')[i].classList.remove('js노랑');
    }
    e.target.classList.remove('js노랑');
  }
  결과에가능정보적용(); //마지막에   최종결과=js노랑결과; 최종결과표시();
  var 포함번호=[];
  for (var i=0; i<9; i++) {
    if (document.querySelectorAll('#포함선택번호10 > div > div')[i].classList.contains('js노랑')) {포함번호.push(i+1)}
  }
  if (document.querySelectorAll('#포함선택번호10 > div > div')[9].classList.contains('js노랑')) {포함번호.push(0)}
  for (var i=0; i<포함번호.length; i++) {
    최종결과=최종결과.filter(번호4 => 번호4.includes(포함번호[i]))
  }
  최종결과표시();
}
function 결과에가능정보적용() {
  console.log('결과.length:' + 결과.length + ', 최종결과.length:' + 최종결과.length)
  js노랑결과=결과;
  var 몇번째위치인가;

  //js노랑이 없으면 종료하는것이 아니라(있다가 없어진 경우)
  //if (document.querySelectorAll(`[class~="js노랑"]`).length) {} else {
  //  console.log('js노랑 개수 : ' + document.querySelectorAll(`[class~="js노랑"]`).length + ' 종료')
  //  return;
  //}
  //js노랑이 있으면 filter
  var 노랑1st,노랑2st,노랑3st,노랑4st;
  노랑1st=document.querySelectorAll('.가능숫자하나 > div:nth-of-type(1)[class~="js노랑"]').length;
  노랑2st=document.querySelectorAll('.가능숫자하나 > div:nth-of-type(2)[class~="js노랑"]').length;
  노랑3st=document.querySelectorAll('.가능숫자하나 > div:nth-of-type(3)[class~="js노랑"]').length;
  노랑4st=document.querySelectorAll('.가능숫자하나 > div:nth-of-type(4)[class~="js노랑"]').length;
  //console.log('노랑1st : ' + 노랑1st  + ', 노랑2st : ' +  노랑2st + ', 노랑3st : ' + 노랑3st + ', 노랑4st : ' + 노랑4st )

  //몇번째위치인가 ==> (숫자임) 세로 몇번쨰 위치인가로 사용됨
  if (노랑1st) {
    var 검사10개=document.querySelectorAll('.가능숫자하나 > div:nth-of-type(1)');
    document.querySelectorAll('.가능숫자하나 > div:nth-of-type(1)[class~="js노랑"]')[0].classList.add('js임시');
    for (var i=0; i<10; i++) {
      if (검사10개[i].classList.contains('js임시')) {몇번째위치인가=i}
    }
    document.querySelectorAll('.가능숫자하나 > div:nth-of-type(1)[class~="js노랑"]')[0].classList.remove('js임시');
    js노랑결과=js노랑결과.filter(번호4 => 번호4[0]==몇번째위치인가);
  }
  if (노랑2st) {
    var 검사10개=document.querySelectorAll('.가능숫자하나 > div:nth-of-type(2)');
    document.querySelectorAll('.가능숫자하나 > div:nth-of-type(2)[class~="js노랑"]')[0].classList.add('js임시');
    for (var i=0; i<10; i++) {
      if (검사10개[i].classList.contains('js임시')) {몇번째위치인가=i}
    }
    document.querySelectorAll('.가능숫자하나 > div:nth-of-type(2)[class~="js노랑"]')[0].classList.remove('js임시');
    js노랑결과=js노랑결과.filter(번호4 => 번호4[1]==몇번째위치인가);
  }
  if (노랑3st) {
    var 검사10개=document.querySelectorAll('.가능숫자하나 > div:nth-of-type(3)');
    document.querySelectorAll('.가능숫자하나 > div:nth-of-type(3)[class~="js노랑"]')[0].classList.add('js임시');
    for (var i=0; i<10; i++) {
      if (검사10개[i].classList.contains('js임시')) {몇번째위치인가=i}
    }
    document.querySelectorAll('.가능숫자하나 > div:nth-of-type(3)[class~="js노랑"]')[0].classList.remove('js임시');
    js노랑결과=js노랑결과.filter(번호4 => 번호4[2]==몇번째위치인가);
  }
  if (노랑4st) {
    var 검사10개=document.querySelectorAll('.가능숫자하나 > div:nth-of-type(4)');
    document.querySelectorAll('.가능숫자하나 > div:nth-of-type(4)[class~="js노랑"]')[0].classList.add('js임시');
    for (var i=0; i<10; i++) {
      if (검사10개[i].classList.contains('js임시')) {몇번째위치인가=i}
    }
    document.querySelectorAll('.가능숫자하나 > div:nth-of-type(4)[class~="js노랑"]')[0].classList.remove('js임시');
    js노랑결과=js노랑결과.filter(번호4 => 번호4[3]==몇번째위치인가);
  }

  //------결과에 대해서 가능번호는 해당위치에 없는 것을 색칠하도록 한다.
  var 없는번호1st=[],없는번호2st=[],없는번호3st=[],없는번호4st=[];
  for (var i=0; i<4; i++) {
    for (내부=0; 내부<10; 내부++) {
      if (js노랑결과.filter(번호4 => 번호4[i]==내부).length==0) {
        if (i==0) {없는번호1st.push(내부)}
        if (i==1) {없는번호2st.push(내부)}
        if (i==2) {없는번호3st.push(내부)}
        if (i==3) {없는번호4st.push(내부)}
      }
    }
  }
  var 가능숫자하나=document.querySelectorAll('.가능숫자하나'); //다음 활용위해 재 정의 ... 없어야할번호에서 한번더 활용됨
  for (var i=0; i<document.querySelectorAll('.가능숫자하나 > div').length; i++) {
    document.querySelectorAll('.가능숫자하나 > div')[i].classList.remove('js가능제외');
  }
  for (var i=0; i<없는번호1st.length; i++) {
    가능숫자하나[없는번호1st[i]].children[0].classList.add('js가능제외');
  }
  for (var i=0; i<없는번호2st.length; i++) {
    가능숫자하나[없는번호2st[i]].children[1].classList.add('js가능제외');
  }
  for (var i=0; i<없는번호3st.length; i++) {
    가능숫자하나[없는번호3st[i]].children[2].classList.add('js가능제외');
  }
  for (var i=0; i<없는번호4st.length; i++) {
    가능숫자하나[없는번호4st[i]].children[3].classList.add('js가능제외');
  }

  최종결과=js노랑결과;
  최종결과표시();
}
function 가능click(e) {
  //주황일때 작동안함, 노랑일때 노랑지움, 흰색일때 해당위치에 해당번호인것만 
  if (!e.target.parentElement.classList.contains('가능숫자하나')) {console.log('부모가 가능숫자하나 아님');return;}
  var 몇번째위치인가; //무조건있다.
  e.target.classList.add('js임시');
  for (var i=0; i<4; i++) {
    if (e.target.parentElement.children[i].classList.contains('js임시')) {몇번째위치인가=i+1}
  }
  e.target.classList.remove('js임시');

  var 타겟이js가능제외인가=false;
  if (e.target.classList.contains('js가능제외')) {타겟이js가능제외인가=true}

  var js노랑있나=false; //length가 0 (false) 이 가능하다.
  if (document.querySelectorAll(`.가능숫자하나 > div:nth-of-type(${몇번째위치인가})[class~="js노랑"]`).length) {js노랑있나=true;}
  //작동순위 
  //1.js가능제외이면 아무작동안한다.
  //2.흰색이면, 클릭한곳 js노랑 넣고, js노랑이 있으면 지우고 js노랑 넣는다 
  if (타겟이js가능제외인가) {return;}
  if (js노랑있나 && e.target.classList.contains('js노랑')) {
    document.querySelectorAll(`.가능숫자하나 > div:nth-of-type(${몇번째위치인가})[class~="js노랑"]`)[0].classList.remove('js노랑');
   } else if (js노랑있나 && !e.target.classList.contains('js노랑')) {
    document.querySelectorAll(`.가능숫자하나 > div:nth-of-type(${몇번째위치인가})[class~="js노랑"]`)[0].classList.remove('js노랑');
    e.target.classList.add('js노랑')
  } else {
    e.target.classList.add('js노랑')
  }
  결과에가능정보적용();
}
function 가능한조합click(e) {
  console.log('가능한조합click(e) : ' + e.target.innerHTML*1)
  if (e.target.innerHTML=='') {return;}
  var 기록중index=document.querySelector('.js기록중').parentElement.id.substring(2, 3)*1;//인데스2부터 3번째까지
  for (var i=0; i<4; i++) {
    document.querySelectorAll('#기회' + 기록중index + ' *')[i].innerHTML=e.target.parentElement.children[i].innerHTML*1;
  }
  첫번째빈C색칠();
}
function 바디클릭이벤트(e) {
  //입력, 입력토글, 포함, 포함토글 기능 안씀.
  if (e.target.classList.contains('입력')) {
    console.log('바디이벤트 : class 입력 click')
    //var 숫자=e.target.innerHTML; 변경
    var 숫자;
    e.target.classList.add('js임시');
    for (var i=0; i<document.querySelectorAll('.입력').length; i++) {
      if (document.querySelectorAll('.입력')[i].classList.contains('js임시')) {숫자=i}
    }  
    e.target.classList.remove('js임시');
    //var 숫자=e.target.innerHTML; 변경 끝
    var c자식=document.querySelector('.js기록중').parentElement.children;
    for (var i=0; i<4; i++) {//같은게 있으면 지움
      if (!isNaN(숫자) && c자식[i].innerHTML.length==1 && 숫자==c자식[i].innerHTML) {
        c자식[i].innerHTML=''; 
        return;
      }
    }
    for (var i=0; i<4; i++) {//빈곳있으면 넣음
      if (!isNaN(숫자) && c자식[i].innerHTML=='') {
        c자식[i].innerHTML=숫자;
        return;
      }
    }
    alert ('번호가 가득 찻습니다')
  }
  if (e.target.innerHTML=='C') {
    console.log('바디이벤트 : C 부분 클릭시')
    document.querySelector('.js기록중')?.classList.remove('js기록중');
    e.target.classList.add('js기록중');
  }
  if (e.target.innerHTML=='C 부분 지움') {
    console.log('바디이벤트 : C 부분 지움')
    var 요소들=document.querySelector('.js기록중').parentElement.children;
    for (var i=0; i<요소들.length-1; i++) {요소들[i].innerHTML=''}
  }
  if (e.target.classList.contains('숫자일치') || e.target.classList.contains('위치일치')) {
    console.log('바디이벤트 : 숫자일치 또는 위치일치 클래스')
    var 입력숫자=e.target.innerHTML;
    if (입력숫자=='') {e.target.innerHTML=1};
    if (입력숫자==4) {e.target.innerHTML=''};
    if (입력숫자!=4 && 입력숫자!='') {e.target.innerHTML=parseInt(e.target.innerHTML, 10)+1};
  }
  if (e.target.innerHTML=='생성') {
    console.log('바디이벤트 : 생성')
    랜덤번호생성();
  }
  if (e.target.innerHTML=='지움') {
    console.log('바디이벤트 : 지움')
    랜덤번호지움();
  }
  if (e.target.innerHTML=='보기') {
    console.log('바디이벤트 : 보기')
    랜덤번호보기();
  }
  if (e.target.innerHTML=='숨기기') {
    console.log('바디이벤트 : 숨기기')
    랜덤번호숨기기();
  }
}
바디.addEventListener('click',바디클릭이벤트);
리스너가능한조합.addEventListener('click', 가능한조합click);
리스너가능.addEventListener('click', 가능click);
리스너포함선택.addEventListener('click', 포함선택click);