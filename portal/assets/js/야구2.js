let 결과=[];//기회정보만의 결과
let 최종결과=[];

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
    console.log('기회[0].innerHTML : ' + 기회[0].innerHTML)
    if (기회[0].innerHTML=='' || 기회[1].innerHTML=='' || 기회[2].innerHTML=='' || 기회[3].innerHTML=='') {continue;} else {}
    for (var m=0; m<기회.length; m++) {
      기회숫자=[parseInt(기회[0].innerHTML, 10),parseInt(기회[1].innerHTML, 10),parseInt(기회[2].innerHTML, 10),parseInt(기회[3].innerHTML, 10)]
      숫자일치=parseInt(기회[4].innerHTML ? 기회[4].innerHTML : 0); //''이거나 0 이면 0,
      위치일치=parseInt(기회[5].innerHTML ? 기회[4].innerHTML : 0); //''이거나 0 이면 0,
    }
    기회들.push({기회숫자,숫자일치,위치일치})
  }
  //2.모든조합을 비교 : 기회숫자는 위치일치 확인,
  모든조합.forEach(조합 => {
    let 유효 = true;
    for (const { 기회숫자, 위치일치, 숫자일치 } of 기회들) {
      let 위치일치수 = 0;
      let 숫자일치수 = 0;
      // 위치와 값이 모두 일치하는 개수
      for (let i = 0; i < 4; i++) {if (조합[i] === 기회숫자[i]) {위치일치수++;}}
      // 숫자만 일치하는 개수  
      const 조합복사 = [...조합];     //-1값 넣어 변경되니까 복사본 사용
      const 기회복사 = [...기회숫자]; //-1값 넣어 변경되니까 복사본 사용
      for (let i = 0; i < 4; i++) {if (조합[i] === 기회숫자[i]) {조합복사[i] = -1; /*일치한 위치는 제외*/기회복사[i] = -1;}}    
      숫자일치수 = 조합복사.filter(num => num !== -1 && 기회복사.includes(num)).length;
      // 조건 불일치 시 필터링
      if (위치일치수 !== 위치일치 || 숫자일치수 !== 숫자일치) {유효 = false; break;} //break는 for 문 나오는것
    }

    if (유효) 결과.push(조합);
  })
  최종결과=결과;


  

  //C 부분 설정 : 빈곳이 있으면 첫번째 빈곳에 .js기록중 넣기
  document.querySelector('.js기록중')?.classList.remove('js기록중'); //? 없으면 작동안함
  for (var i=0; i<document.querySelectorAll('.기회').length; i++) {
    var 기회=document.querySelectorAll(`#기회${i} *`);
    if (기회[0].innerHTML=='' || 기회[1].innerHTML=='' || 기회[2].innerHTML=='' || 기회[3].innerHTML=='' || 기회[4].innerHTML=='' || 기회[5].innerHTML=='') {
      기회[6].classList.add('js기록중'); break;
    }
  }  
}
function 계산_기회계산만적용() {
  //기회계산을 제외한 다른 조건을 초기화하고 계산();

}



