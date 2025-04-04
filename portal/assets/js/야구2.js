let 결과=[];//기회정보만의 결과
let 최종결과=[];
첫번째빈C색칠();

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

function 계산() {
  결과=[]; 최종결과=[];
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
      
    }
  }


  // 기회계산 한정 : 제외수(없는숫자), 포함수(모두있는숫자 + 위치에 모두 있지는 않다), 위치확정수(모두있는숫자 + 위치에 모두있다) 설정
  var 기회계산제외수=[];
  for (var i=0; i<10; i++) {
    if (결과.join(',').indexOf(i) == -1) {기회계산제외수.push(i);}
  }
  //   1)기회계산제외수는 아래로 무조건 내리고 색칠한다.(결과 조합에는 이미 기회계산에서 제외되어있다)
  var 내려진제외수=[];
  for (var i=0; i<10; i++) {//위 입력, 아래 입력토글
    document.querySelectorAll('.입력토글')[i].classList.remove('js표시');
    if (기회계산제외수.includes(i)) { //내리고 색칠
      document.querySelectorAll('.입력')[i].innerHTML='';
      document.querySelectorAll('.입력토글')[i].innerHTML=i;
      document.querySelectorAll('.입력토글')[i].classList.add('js표시');
    } else {
      if (document.querySelectorAll('.입력토글')[i].innerHTML!='' && document.querySelectorAll('.입력토글')[i].innerHTML==i) {내려진제외수.push(i);}
    }
  }
  //   2)기회계산제외수가 아닌 내려진 숫자를 제외한다.
  for (var i=0; i<내려진제외수.length; i++) {
    결과=결과.filter(번호4 => !번호4.includes(내려진제외수[i]))
  }

  //기회계산 포함수 : 결과에 모두 들어있는 숫자
  var 기회계산포함수=[];
  for (var i=0; i<10; i++) {
    if (결과.length > 0 && 결과.filter(번호4 => 번호4.includes(i)).length==결과.length) {기회계산포함수.push(i)}
  }
  var 내려진포함수=[];
  for (var i=0; i<10; i++) {//위 포함, 아래 포함토글
    document.querySelectorAll('.포함토글')[i].classList.remove('js표시');
    if (기회계산포함수.includes(i)) { //내리고 색칠
      document.querySelectorAll('.포함')[i].innerHTML='';
      document.querySelectorAll('.포함토글')[i].innerHTML=i;
      document.querySelectorAll('.포함토글')[i].classList.add('js표시');
    } else {
      if (document.querySelectorAll('.포함토글')[i].innerHTML!='' && document.querySelectorAll('.포함토글')[i].innerHTML==i) {내려진포함수.push(i);}
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







  //포함, 제외, 위치특정 필터링
  결과.forEach(조합 => {

  })


  
  document.querySelector('#없어야할번호').innerHTML=기회계산제외수;
  document.querySelector('#포함해야할번호').innerHTML=기회계산포함수;
  document.querySelector('#결과수').innerHTML=결과.length;
  첫번째빈C색칠();
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
  for (var i=0; i<10; i++) {
    document.querySelectorAll('.입력')[i].innerHTML=i;
    document.querySelectorAll('.입력토글')[i].innerHTML='';
    document.querySelectorAll('.입력토글')[i].classList.remove('js표시');

    document.querySelectorAll('.포함')[i].innerHTML=i;
    document.querySelectorAll('.포함토글')[i].innerHTML='';
    document.querySelectorAll('.포함토글')[i].classList.remove('js표시');

    document.querySelector('#없어야할번호').innerHTML='';
    document.querySelector('#포함해야할번호').innerHTML='';
  }
  for (var i=0; i<4; i++) {document.querySelectorAll('#순서확정된번호 > div')[i].innerHTML=''}
}
function 계산_기회계산만적용() {
  //기회계산을 제외한 다른 조건을 초기화하고 계산();
  기회정보제외_초기화();
  계산();
}

var 바디=document.querySelector('body');
function 바디클릭이벤트(e) {
  if (e.target.classList.contains('입력')) {
    console.log('바디이벤트 : class 입력 click')
    var 숫자=e.target.innerHTML;
    var c자식=document.querySelector('.js기록중').parentElement.children;
    for (var i=0; i<4; i++) {//같은게 있으면 지움
      if (숫자.length==1 && c자식[i].innerHTML.length==1 && 숫자==c자식[i].innerHTML) {
        c자식[i].innerHTML=''; 
        return;
      }
    }
    for (var i=0; i<4; i++) {//빈곳있으면 넣음
      if (숫자.length==1 && c자식[i].innerHTML=='') {
        c자식[i].innerHTML=숫자;
        return;
      }
    }
    alert ('번호가 가득 찻습니다')
  }
  if (e.target.innerHTML=='기회계산만적용') {
    계산_기회계산만적용();
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
  if (e.target.classList.contains('입력토글') || e.target.classList.contains('포함토글')) {
    console.log('바디이벤트 : 입력토글 또는 포함토글')
    if (e.target.innerHTML=='') {
      e.target.innerHTML=e.target.previousElementSibling.innerHTML;
      e.target.previousElementSibling.innerHTML='';
    } else {
      e.target.previousElementSibling.innerHTML=e.target.innerHTML;
      e.target.innerHTML='';
    }
  }
}
바디.addEventListener('click',바디클릭이벤트);


function 계산보관() {
  결과=[]; 최종결과=[];
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
  //단독작업 S 가 없을때, 1)B만 있을때 2)모두없을때
  var 가능div=document.querySelectorAll('.가능숫자하나 > div');
  for (var i=0; i<가능div.length; i++) {가능div[i].classList.remove('js가능제외');}
  var 가능숫자하나=document.querySelectorAll('.가능숫자하나'); //다음 활용위해 재 정의 ... 없어야할번호에서 한번더 활용됨
  for (const { 기회숫자, 숫자일치, 위치일치 } of 기회들) {
    if (숫자일치==0 && 위치일치==0) {//out 해당번호 모든위치에 안됨
      for (var 내부=0; 내부<4; 내부++) {
        가능숫자하나[기회숫자[내부]].children[0].classList.add('js가능제외');
        가능숫자하나[기회숫자[내부]].children[1].classList.add('js가능제외');
        가능숫자하나[기회숫자[내부]].children[2].classList.add('js가능제외');
        가능숫자하나[기회숫자[내부]].children[3].classList.add('js가능제외');
      }
    }
    if (숫자일치!=0 && 위치일치==0) {//B만 있을때 해당번호 해당위치에 안됨
      //가능숫자하나[0][0] : 첫번째 [0] 은 가능숫자하나 클래스의 순번, 두번째 [0]은 그 안의 순번
      가능숫자하나[기회숫자[0]].children[0].classList.add('js가능제외');
      가능숫자하나[기회숫자[1]].children[1].classList.add('js가능제외');
      가능숫자하나[기회숫자[2]].children[2].classList.add('js가능제외');
      가능숫자하나[기회숫자[3]].children[3].classList.add('js가능제외');
    }
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

  // 기회계산 한정 : 제외수(없는숫자), 포함수(모두있는숫자 + 위치에 모두 있지는 않다), 위치확정수(모두있는숫자 + 위치에 모두있다) 설정
  var 기회계산제외수=[];
  for (var i=0; i<10; i++) {
    if (결과.join(',').indexOf(i) == -1) {기회계산제외수.push(i);}
  }
  //           가능번호 색칠 한번더 활용
  for (var 내부=0; 내부<기회계산제외수.length; 내부++) {
    console.log('기회계산제외수 : ' + 기회계산제외수)
    가능숫자하나[기회계산제외수[내부]].children[0].classList.add('js가능제외');
    가능숫자하나[기회계산제외수[내부]].children[1].classList.add('js가능제외');
    가능숫자하나[기회계산제외수[내부]].children[2].classList.add('js가능제외');
    가능숫자하나[기회계산제외수[내부]].children[3].classList.add('js가능제외');
  }
  //   1)기회계산제외수는 아래로 무조건 내리고 색칠한다.(결과 조합에는 이미 기회계산에서 제외되어있다)
  var 내려진제외수=[];
  for (var i=0; i<10; i++) {//위 입력, 아래 입력토글
    document.querySelectorAll('.입력토글')[i].classList.remove('js표시');
    if (기회계산제외수.includes(i)) { //내리고 색칠
      document.querySelectorAll('.입력')[i].innerHTML='';
      document.querySelectorAll('.입력토글')[i].innerHTML=i;
      document.querySelectorAll('.입력토글')[i].classList.add('js표시');
    } else {
      if (document.querySelectorAll('.입력토글')[i].innerHTML!='' && document.querySelectorAll('.입력토글')[i].innerHTML==i) {내려진제외수.push(i);}
    }
  }
  //   2)기회계산제외수가 아닌 내려진 숫자를 제외한다.
  for (var i=0; i<내려진제외수.length; i++) {
    결과=결과.filter(번호4 => !번호4.includes(내려진제외수[i]))
  }

  //기회계산 포함수 : 결과에 모두 들어있는 숫자
  var 기회계산포함수=[];
  for (var i=0; i<10; i++) {
    if (결과.length > 0 && 결과.filter(번호4 => 번호4.includes(i)).length==결과.length) {기회계산포함수.push(i)}
  }
  var 내려진포함수=[];
  for (var i=0; i<10; i++) {//위 포함, 아래 포함토글
    document.querySelectorAll('.포함토글')[i].classList.remove('js표시');
    if (기회계산포함수.includes(i)) { //내리고 색칠
      document.querySelectorAll('.포함')[i].innerHTML='';
      document.querySelectorAll('.포함토글')[i].innerHTML=i;
      document.querySelectorAll('.포함토글')[i].classList.add('js표시');
    } else {
      if (document.querySelectorAll('.포함토글')[i].innerHTML!='' && document.querySelectorAll('.포함토글')[i].innerHTML==i) {내려진포함수.push(i);}
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







  //포함, 제외, 위치특정 필터링
  결과.forEach(조합 => {

  })


  
  document.querySelector('#없어야할번호').innerHTML=기회계산제외수;
  document.querySelector('#포함해야할번호').innerHTML=기회계산포함수;
  document.querySelector('#결과수').innerHTML=결과.length;
  첫번째빈C색칠();
}
