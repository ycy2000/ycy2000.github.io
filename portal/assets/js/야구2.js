function 계산() {
//작동설명(1,2순서중요). 숫자내림 초기화 후에 작동한다.
//      ?? 계산결과를 두고 숫자내림 등에 따라 계산결과가 필터링되어도 다시 계산결과를 가져올수 있도록
//  1.기회숫자에 기록된 B S 참고하여 필터링
//    - S가 없을때 (있으면 안되는 번호들 가능번호에 색칠)
//      a)모두 빈값이면 가능번호에 모두 색칠
//      b)B가 있으면 해당위치의 번호만 가능번호에 색칠
//  2.제외할 숫자 있는것 필터링, 포함할 숫자있는것 필터링, 
//  3.없어야할번호 토글로 내리고 색칠 + 없어야할 번호에 기록
//  4.포함해야할번호 포함토글로 내리고 색칠 + 포함해야하는 번호에 기록
//  5.순서 확정된 번호 해당위치에 기록
//  6.필터링된 조합 결과를 표시


계산및초기화시_c_기록중_셑팅()
}





리스너_기회_BS_C=document.querySelector('#기회');
function 기회click (e) {
  console.log('리스너_기회_BS_C => 기회click(e)')
  if (e.target.classList.contains('숫자일치') || e.target.classList.contains('위치일치')) {
    if (e.target.innerHTML=='') {e.target.innerHTML=1} 
    else if (e.target.innerHTML==1) {e.target.innerHTML=2} 
    else if (e.target.innerHTML==2) {e.target.innerHTML=3} 
    else if (e.target.innerHTML==3) {e.target.innerHTML=4} 
    else if (e.target.innerHTML==4) {e.target.innerHTML=''} 
  }
  if (e.target.innerHTML=='C') {
    document.querySelector('.기록중').classList.remove('기록중');
    e.target.classList.add('기록중');
  }
  if (e.target.innerHTML=='계산') {계산()}
  if (e.target.innerHTML=='현재기록중 1개 clear') {
    let 기록중클래스의부모요소의자식들=document.querySelector('.기록중').parentElement.children;
    for (let i=0; i<기록중클래스의부모요소의자식들.length-1; i++) { //기록중 요소는 놔둔다
      기록중클래스의부모요소의자식들[i].innerHTML='';
    }
  }
  if (e.target.innerHTML=='사용법') {사용법()}
  if (e.target.innerHTML=='다시') {location.reload();}
  if (e.target.classList.contains('입력')) {
    if (e.target.innerHTML=='') { /*숫자가 아래로 내려져 비어있는 경우*/return;}
    //기록중 클래스 숫자는 부모의 children 0~3까지 4개 div
    let 기록중클래스의부모요소의자식들=document.querySelector('.기록중').parentElement.children;
    let 클릭숫자=e.target.innerHTML;
    for (let i=0; i<4; i++) {
      if (기록중클래스의부모요소의자식들[i].innerHTML==클릭숫자) {
        기록중클래스의부모요소의자식들[i].innerHTML='' //있는 숫자면 있는숫자를 지움
        return;
      }
    }
    for (let i=0; i<4; i++) {
      if (기록중클래스의부모요소의자식들[i].innerHTML=='') {
        기록중클래스의부모요소의자식들[i].innerHTML=클릭숫자 //빈곳을 만나면 넣음
        return;
      }
    }
    alert('번호가 4개 모두 기록되어 있음 종료')
  }
  if (e.target.classList.contains('토글')) {
    if (e.target.innerHTML=='') {
      e.target.innerHTML=e.target.previousElementSibling.innerHTML;e.target.previousElementSibling.innerHTML='';
    } else {
      e.target.previousElementSibling.innerHTML=e.target.innerHTML;e.target.innerHTML='';
    } 
  }
  if (e.target.classList.contains('포함토글')) {
    if (e.target.innerHTML=='') {
      e.target.innerHTML=e.target.previousElementSibling.innerHTML;e.target.previousElementSibling.innerHTML='';
    } else {
      e.target.previousElementSibling.innerHTML=e.target.innerHTML;e.target.innerHTML='';
    } 
  }
}
function 계산및초기화시_c_기록중_셑팅() {
  console.log('function 계산및초기화시_c_기록중_셑팅()');
  let 기회들=document.querySelectorAll('.기회');
  let 비어있는기회개수확인=0;
  for (let i=0; i<기회들.length; i++) {//모두 값이 있으면 기록중 클래스 지우면 안된다. 확인!
    if (기회들[i].children[0].innerHTML=='' && 기회들[i].children[1].innerHTML=='' && 기회들[i].children[2].innerHTML=='' && 기회들[i].children[3].innerHTML=='') {
      비어있는기회개수확인+=1;
      break;
    }
  }
  if (비어있는기회개수확인!=1) {return;} //모두 차 있는 경우
  if (document.querySelector('.기록중')) {document.querySelector('.기록중').classList.remove('기록중');}  
  for (let i=0; i<기회들.length; i++) {
    if (기회들[i].children[0].innerHTML=='' && 기회들[i].children[1].innerHTML=='' && 기회들[i].children[2].innerHTML=='' && 기회들[i].children[3].innerHTML=='') {
      기회들[i].children[6].classList.add('기록중');
      break;
    }
  }
}
function 왼쪽토글() {
  console.log('왼쪽 토글');
  if (document.querySelector('#textarea왼쪽').classList.contains('d-block')) {
    document.querySelector('#textarea왼쪽').classList.remove('d-block');
    document.querySelector('#textarea왼쪽').classList.add('d-none');
  } else {
    document.querySelector('#textarea왼쪽').classList.remove('d-none');
    document.querySelector('#textarea왼쪽').classList.add('d-block');
  }

}
function 왼쪽지우기() {
console.log('왼쪽 지우기기');
document.querySelector('#textarea왼쪽').value='';
}
function 사용법() {
  if (document.querySelector('#사용법').classList.contains('d-none')) {
    document.querySelector('#사용법').classList.remove('d-none')
  } else {
    document.querySelector('#사용법').classList.add('d-none')
  }
}
function 랜덤번호지움() {
  //랜덤번호지움 실행후 사용할것
  console.log('function 랜덤번호지움 ()')
  document.querySelector('#숨겨진랜덤번호').innerHTML='';
  for (i=0; i<4; i++) {
    document.querySelectorAll('#랜덤번호 div')[i].innerHTML='';
  }
}
function 랜덤번호생성() {
  console.log('function 랜덤번호생성()')
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
  //기존값 지우기=> * 로 표시하기
  for (i=0; i<4; i++) {
    document.querySelectorAll('#랜덤번호 div')[i].innerHTML='*';
  }

  for (var i=0; i<document.querySelectorAll('.입력').length; i++) {
    document.querySelectorAll('.입력')[i].innerHTML=i;
    document.querySelectorAll('.입력')[i].nextSibling.innerHTML='';
  }
  for (var i=0; i<document.querySelectorAll('.포함').length; i++) {
    document.querySelectorAll('.포함')[i].innerHTML=i;
    document.querySelectorAll('.포함')[i].nextSibling.innerHTML='';
  }
  for (var i=0; i<document.querySelectorAll('#선택 div').length; i++) {
    if (document.querySelectorAll('#선택 div')[i].classList.contains('번호_선택또는가능초코')) {
      document.querySelectorAll('#선택 div')[i].classList.remove('번호_선택또는가능초코')
    }
  }

}
function 랜덤번호보기숨기기() {
  console.log('function 랜덤번호보기숨기기()')
  var 랜덤번호span값=document.querySelector('#숨겨진랜덤번호').innerHTML;

  var 랜덤번호span값배열=[];
  if (document.querySelectorAll('#랜덤번호 > div')[0].innerHTML!='*' && 랜덤번호span값!='') {
    console.log('null이 아니거나 값이 있을때')
      //기록되어 있을때
      for (var i=0; i<4; i++) {
        document.querySelectorAll('#랜덤번호 > div')[i].innerHTML='*';
      }
      return;
  }
  //기록이 없을때, 랜덤번호span값 있을때
  if (랜덤번호span값!='' && 랜덤번호span값!=null) {
    랜덤번호span값배열=랜덤번호span값.split(',');
    console.log('랜덤번호span값배열 : ' + 랜덤번호span값배열)
    for (var i=0; i<4; i++) {
        document.querySelectorAll('#랜덤번호 > div')[i].innerHTML=랜덤번호span값배열[i];
      }
  }
}
function 랜덤번호직접기록() {
  //랜덤번호지움 실행후 사용할것
  console.log('리턴번호 : ' + 리턴번호)
  var 번호4개배열=[];
  var 랜덤번호들=document.querySelectorAll('#랜덤번호 div');
  if (랜덤번호들[0].innerHTML=='' && 리턴번호!='') {
      document.querySelectorAll('#랜덤번호 div')[0].innerHTML=리턴번호;
    } else if (랜덤번호들[1].innerHTML=='' && 리턴번호!='') {
      document.querySelectorAll('#랜덤번호 div')[1].innerHTML=리턴번호;
    } else if (랜덤번호들[2].innerHTML=='' && 리턴번호!='') {
      document.querySelectorAll('#랜덤번호 div')[2].innerHTML=리턴번호;
    } else if (랜덤번호들[3].innerHTML=='' && 리턴번호!='') {
      document.querySelectorAll('#랜덤번호 div')[3].innerHTML=리턴번호;
  } 
  if (랜덤번호들[0].innerHTML!='' && 랜덤번호들[1].innerHTML!='' && 랜덤번호들[2].innerHTML!='' && 랜덤번호들[3].innerHTML!='') {
    console.log('모두기록상태')
    for (var i=0; i<4; i++) {
      //console.log(랜덤번호들[i].innerHTML)
      번호4개배열.push(랜덤번호들[i].innerHTML);
    }
      document.querySelector('#숨겨진랜덤번호').innerHTML=번호4개배열.join(',');
      document.querySelector('#랜덤번호정보').innerHTML='랜덤번호 있음 BS 계산()시 입력됨'
  }
} 



계산및초기화시_c_기록중_셑팅()
const 모든조합=중복제거모든조합_result(); // 모든조합.length=5040
function 중복제거모든조합_result() {
  //결과는 번호 숫자 4개가 들어있는 배열들
  var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var resultSet = new Set();

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      for (let m = 0; m < list.length; m++) {
        for (let k = 0; k < list.length; k++) {
          // 중복된 요소 제거
          if (i === j || i === m || j === m || j === k || m === k || k === i) continue;
          // 중복 방지를 위해 Set에 문자열로 저장
          var combination = [list[i], list[j], list[m], list[k]].join('');
          resultSet.add(combination);
        }
      }
    }
  }
  // Set을 다시 배열로 변환하며 각 문자열을 숫자 배열로 변환
  return Array.from(resultSet).map(combination => combination.split('').map(Number));
}

리스너_기회_BS_C.addEventListener('click', 기회click);
