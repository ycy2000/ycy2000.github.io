function 계산보관() {
  console.log('계산()')
  const 모든조합 = 중복제거모든조합_result();
  if (document.querySelector('#랜덤번호정보').innerHTML=='랜덤번호 있음 BS 계산()시 입력됨') {
    랜덤번호있을때_SB기록()
  }

  function 중복제거모든조합_result() {
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

  for (var i=0; i<document.querySelectorAll('#선택 div').length; i++) {
    if (document.querySelectorAll('#선택 div')[i].classList.contains('번호_선택또는가능초코')) {
      document.querySelectorAll('#선택 div')[i].classList.remove('번호_선택또는가능초코')
    }
  }
  // 랜덤번호 준비되어 있다면 B S 입력 추가 코드 작성

  for (var i=0; i<document.querySelectorAll('.입력').length; i++) {
    document.querySelectorAll('.입력')[i].classList.remove('번호_선택또는가능초코');
  }
  for (var i=0; i<document.querySelectorAll('.포함').length; i++) {
    document.querySelectorAll('.포함')[i].classList.remove('번호_선택또는가능초코');
  }
  // 제외 클래스 모두 제거
  for (var i=0; i<document.querySelectorAll('#가능 > div > div').length; i++) {
    document.querySelectorAll('#가능 > div > div')[i].classList.remove('제외');
  }

  const 기회들 = []; // 기회들의 숫자 정보를 담는 배열
  const 결과 = [];  // 최종적으로 조건에 맞는 조합을 저장

  // 각 기회에서 숫자와 위치 정보를 읽어오기
  for (let i = 0; i < 10; i++) {
    const 기회 = document.querySelectorAll(`#기회${i} div`);
    const 숫자일치 = document.querySelector(`#기회${i} .숫자일치`)?.innerHTML || '0';
    const 위치일치 = document.querySelector(`#기회${i} .위치일치`)?.innerHTML || '0';
    // || '0' : 공백일때 0(설정값) 을 입력하라는 의미인가?

    //위치일치='', 숫자일치는 숫자 일때, 가능숫자하나 에 제외 클래스 부여
    if (숫자일치!=0 && 위치일치==0) {
      //console.log('숫자일치 : ' + 숫자일치 + ', 위치일치 : ' + 위치일치)
      var 기회번호;
      for (var t=0; t<4; t++) {
        //i는 순서(0일때 첫번째), 기회[i].innerHTML 는 0~9사이의 숫자
        기회번호=기회[t].innerHTML;
        if (!document.querySelectorAll('#가능 > div:nth-of-type(' + (기회번호*1 + 1) + ') div')[t].classList.contains('제외')) {
          document.querySelectorAll('#가능 > div:nth-of-type(' + (기회번호*1 + 1) + ') div')[t].classList.add('제외')
        }
      }
    }

    //gpt 코드 : 모두 값이 있을때, trim은 왜 하는지? 공백값이 있을수 있기 때문인가?
    //if (기회[0] && 기회[1] && 기회[2] && 기회[3] && 기회[0].innerHTML.trim() !== '') {
    if (기회[0].innerHTML!='' && 기회[1].innerHTML!='' && 기회[2].innerHTML!='' && 기회[3].innerHTML!='') {
      const 기회숫자 = Array.from(기회).map(div => parseInt(div.innerHTML.trim(), 10));
      기회들.push({ 기회숫자, 위치일치: parseInt(위치일치, 10), 숫자일치: parseInt(숫자일치, 10) });
      
      console.log('기회숫자 : ' + 기회숫자 + ', 숫자일치 : ' + 숫자일치 + ' , 위치일치 : ' + 위치일치)
    }
  }
  // 조건에 맞는지 모든 조합 필터링
  모든조합.forEach(조합 => {
    let 유효 = true;

    for (const { 기회숫자, 위치일치, 숫자일치 } of 기회들) {
      let 위치일치수 = 0;
      let 숫자일치수 = 0;

      // 위치와 값이 모두 일치하는 개수
      for (let i = 0; i < 4; i++) {
        if (조합[i] === 기회숫자[i]) {
          위치일치수++;
        }
      }

      // 숫자만 일치하는 개수
      const 조합복사 = [...조합];
      const 기회복사 = [...기회숫자];

      for (let i = 0; i < 4; i++) {
        if (조합[i] === 기회숫자[i]) {
          조합복사[i] = -1; // 일치한 위치는 제외
          기회복사[i] = -1;
        }
      }    

      숫자일치수 = 조합복사.filter(num => num !== -1 && 기회복사.includes(num)).length;

      // 조건 불일치 시 필터링
      if (위치일치수 !== 위치일치 || 숫자일치수 !== 숫자일치) {
        유효 = false;
        break;
      }
    }

    if (유효) 결과.push(조합);
  });

  //--------------------------- 모든조합에서 기회조건 만족하는 조합 : 결과
  document.querySelector('#포함해야하는번호결과').innerHTML='';
  document.querySelector('#없어야할번호결과').innerHTML='';
  document.querySelectorAll('.순서확정')[0].innerHTML='';
  document.querySelectorAll('.순서확정')[1].innerHTML='';
  document.querySelectorAll('.순서확정')[2].innerHTML='';
  document.querySelectorAll('.순서확정')[3].innerHTML='';
  //console.log('모든조합.length : ' + 모든조합.length)
  if (결과.length > 0) {
    //console.log('결과.length : ' + 결과.length)
    var 개수0=0, 개수1=0, 개수2=0, 개수3=0, 개수4=0, 개수5=0, 개수6=0, 개수7=0, 개수8=0, 개수9=0;
    var 결과_번호위치1포함숫자들=[];
    var 결과_번호위치2포함숫자들=[];
    var 결과_번호위치3포함숫자들=[];
    var 결과_번호위치4포함숫자들=[];

    결과.forEach (조합 => {
      if (조합.includes(0)) {개수0+=1;}
      if (조합.includes(1)) {개수1+=1;}
      if (조합.includes(2)) {개수2+=1;}
      if (조합.includes(3)) {개수3+=1;}
      if (조합.includes(4)) {개수4+=1;}
      if (조합.includes(5)) {개수5+=1;}
      if (조합.includes(6)) {개수6+=1;}
      if (조합.includes(7)) {개수7+=1;}
      if (조합.includes(8)) {개수8+=1;}
      if (조합.includes(9)) {개수9+=1;}
      결과_번호위치1포함숫자들.push(조합[0]);
      결과_번호위치2포함숫자들.push(조합[1]);
      결과_번호위치3포함숫자들.push(조합[2]);
      결과_번호위치4포함숫자들.push(조합[3]);
    });

    결과_번호위치1포함숫자들=[...new Set(결과_번호위치1포함숫자들.sort(function(a, b)  {return a - b;}))];
    결과_번호위치2포함숫자들=[...new Set(결과_번호위치2포함숫자들.sort(function(a, b)  {return a - b;}))];
    결과_번호위치3포함숫자들=[...new Set(결과_번호위치3포함숫자들.sort(function(a, b)  {return a - b;}))];
    결과_번호위치4포함숫자들=[...new Set(결과_번호위치4포함숫자들.sort(function(a, b)  {return a - b;}))];

    console.log(결과_번호위치1포함숫자들)
    console.log(결과_번호위치2포함숫자들)
    console.log(결과_번호위치3포함숫자들)
    console.log(결과_번호위치4포함숫자들)

    for (var i=0; i<10; i++) {
      if (!결과_번호위치1포함숫자들.includes(i)) {//0을 포함하지 않는다면 index=0 위치
        document.querySelectorAll('#가능 > div:nth-of-type(' + (i*1+1) + ') > div')[0].classList.add('제외');
      }
      if (!결과_번호위치2포함숫자들.includes(i)) {//0을 포함하지 않는다면 index=0 위치
        document.querySelectorAll('#가능 > div:nth-of-type(' + (i*1+1) + ') > div')[1].classList.add('제외');
      }
      if (!결과_번호위치3포함숫자들.includes(i)) {//0을 포함하지 않는다면 index=0 위치
        document.querySelectorAll('#가능 > div:nth-of-type(' + (i*1+1) + ') > div')[2].classList.add('제외');
      }
      if (!결과_번호위치4포함숫자들.includes(i)) {//0을 포함하지 않는다면 index=0 위치
        document.querySelectorAll('#가능 > div:nth-of-type(' + (i*1+1) + ') > div')[3].classList.add('제외');
      }
    }



    var 포함해야하는번호=[];
    if (개수0==결과.length) {포함해야하는번호.push(0)}
    if (개수1==결과.length) {포함해야하는번호.push(1)}
    if (개수2==결과.length) {포함해야하는번호.push(2)}
    if (개수3==결과.length) {포함해야하는번호.push(3)}
    if (개수4==결과.length) {포함해야하는번호.push(4)}
    if (개수5==결과.length) {포함해야하는번호.push(5)}
    if (개수6==결과.length) {포함해야하는번호.push(6)}
    if (개수7==결과.length) {포함해야하는번호.push(7)}
    if (개수8==결과.length) {포함해야하는번호.push(8)}
    if (개수9==결과.length) {포함해야하는번호.push(9)}

    var 없어야할번호=[];
    if (개수0==0) {없어야할번호.push(0)}
    if (개수1==0) {없어야할번호.push(1)}
    if (개수2==0) {없어야할번호.push(2)}
    if (개수3==0) {없어야할번호.push(3)}
    if (개수4==0) {없어야할번호.push(4)}
    if (개수5==0) {없어야할번호.push(5)}
    if (개수6==0) {없어야할번호.push(6)}
    if (개수7==0) {없어야할번호.push(7)}
    if (개수8==0) {없어야할번호.push(8)}
    if (개수9==0) {없어야할번호.push(9)}

    console.log('조합 ' + 결과.length + ' => 포함개수만 ' + 개수0 + ', ' + 개수1 + ', ' + 개수2 + ', ' + 개수3 + ', ' + 개수4 + ', ' + 개수5 + ', ' + 개수6 + ', ' + 개수7 + ', ' + 개수8 + ', ' + 개수9 + ', ')
    if (포함해야하는번호.length>0) {document.querySelector('#포함해야하는번호결과').innerHTML=포함해야하는번호.join(' ,')}
    if (없어야할번호.length>0) {
      document.querySelector('#없어야할번호결과').innerHTML=없어야할번호.join(' ,');
      for (var i=0; i<없어야할번호.length; i++) {
        document.querySelectorAll('.입력')[없어야할번호[i]].nextElementSibling.classList.add('번호_선택또는가능초코');
        document.querySelectorAll('.입력')[없어야할번호[i]].nextElementSibling.innerHTML=없어야할번호[i];
        document.querySelectorAll('.입력')[없어야할번호[i]].innerHTML='';

        var 가능div특정;
        가능div특정=document.querySelectorAll('#가능 > div:nth-of-type(' + (없어야할번호[i]*1+1) + ') > div');
        for (var k=0; k<4; k++) {
          if (!가능div특정[k].classList.contains('제외')){가능div특정[k].classList.add('제외')}
        } 

        
      }
      
    
    }
    //포함해야하는 번호가 있으면 위치확정되는지 확인
    if (포함해야하는번호.length>0) {
      console.log('포함해야하는번호 : ' + 포함해야하는번호.length + ' 개')
      var 인덱스;
      for (var i=0; i<포함해야하는번호.length; i++) {
        document.querySelectorAll('.포함')[포함해야하는번호[i]].nextElementSibling.classList.add('번호_선택또는가능초코');
        document.querySelectorAll('.포함')[포함해야하는번호[i]].nextElementSibling.innerHTML=포함해야하는번호[i];
        document.querySelectorAll('.포함')[포함해야하는번호[i]].innerHTML='';
        //모든 배열에 포함되어 있으니 한번만 확인하면 된다
        개수0=0;//개수0 재사용
        인덱스=결과[0].indexOf(포함해야하는번호[i]);
        결과.forEach (조합 => {
          if (조합.indexOf(포함해야하는번호[i])==인덱스) {개수0+=1;}
        });
        console.log('포함해야하는번호 ' + 포함해야하는번호[i] + ' 의 index : ' + 인덱스 + ', 조합 ' + 결과.length + ' 출현' + 개수0)

        //결과.length==개수0 이면 해당 인덱스위치에 순서확정번호 넣기
        if (결과.length==개수0) {
          document.querySelectorAll('.순서확정')[인덱스].innerHTML=포함해야하는번호[i];
          //가능부분에 해당숫자만 제외하고 나머지 '제외'클래스 추가하는 코드.
          for (var m=0; m<10; m++) {
            if (m==포함해야하는번호[i]) {
              가능div특정=document.querySelectorAll('#가능 > div:nth-of-type(' + (포함해야하는번호[i]*1+1) + ') > div')[인덱스].classList.remove('제외');
            }  else {
              가능div특정=document.querySelectorAll('#가능 > div:nth-of-type(' + (m*1+1) + ') > div')[인덱스].classList.add('제외');
            }
            

          }
        }

      }
    }
  }



  //기회정보 검토 결과 포함해야하는번호와 순서확정번호를 class가능숫자하나 부분에 색칠하기
  //순서확정 : 해당 index에 해당번호 색칠해제 나머지 번호 모두 색칠
  //없어야할 번호 : 4개다 색칠











  // 제외할 숫자들 읽어오기
  const 제외할숫자들 = [];
  document.querySelectorAll('.토글').forEach(토글 => {
    if (토글.innerHTML !== '') {
      제외할숫자들.push(parseInt(토글.innerHTML, 10));
    }
  });

  console.log('제외할 숫자들 : ' + 제외할숫자들)
   // 제외할 숫자들 포함된 조합 필터링
  let 필터링된결과 = 결과.filter(조합 => {
    return !조합.some(숫자 => 제외할숫자들.includes(숫자));
  });

  // 포함할 숫자들 읽어오기
  const 포함할숫자들 = [];
  document.querySelectorAll('.포함토글').forEach(포함토글 => {
    if (포함토글.innerHTML !== '') {
      포함할숫자들.push(parseInt(포함토글.innerHTML, 10));
    }
  });

  // 포함할 숫자 조건으로 필터링
  필터링된결과 = 필터링된결과.filter(조합 =>
    포함할숫자들.every(숫자 => 조합.includes(숫자))
  );
  // 결과 출력 
  if (필터링된결과.length < 700) {
    document.querySelector('#가능한조합개수만').innerHTML = 필터링된결과.length;
    let 결과한줄씩연속묶음 = '';
    let 누적 = '';

    //마지막 length인데 i % 30 != 0 : 결과한줄씩연속묶음 을 div로 감싸기 (30개씩 세로로 배열 css 작성)
    //i! = 0 && i % 30 != 0 : 결과한줄씩연속묶음 을 div로 감싸기 (30개씩 세로로 배열 css 작성)
    for (var i=0; i<필터링된결과.length; i++) {
      
    }


    if (필터링된결과.length==30) {
      for (let i = 0; i < 필터링된결과.length; i++) {
        결과한줄씩연속묶음 += '<br>' + 필터링된결과[i];
        if (i % 30 === 29) {
          누적 += '<div>' + 결과한줄씩연속묶음 + '</div>';
          document.querySelector('#가능한조합').innerHTML = 누적;
      }
     }
     return;
    }




    for (let i = 0; i < 필터링된결과.length; i++) {
      결과한줄씩연속묶음 += '<br>' + 필터링된결과[i];
      if (i % 30 === 29) {
        누적 += '<div>' + 결과한줄씩연속묶음 + '</div>';
        결과한줄씩연속묶음 = '';
      }
    }
    if (필터링된결과.length < 31) {
      누적 = '<div>' + 결과한줄씩연속묶음 + '</div>';
    }
    if (필터링된결과.length % 30 < 29 && 필터링된결과.length > 30) {
      누적 += '<div>' + 결과한줄씩연속묶음 + '</div>';
    }

    document.querySelector('#가능한조합').innerHTML = 누적;
  }

  //gpt에 추가해 달라고한 코드 : 
  // 새로운 코드 추가





  
}


function 임시() {

// Input opportunities
const opportunities = [
  { candidate: [], positionMatch: 0, numberMatch: 0 },
  { candidate: [], positionMatch: 0, numberMatch: 0 },
  { candidate: [], positionMatch: 0, numberMatch: 0 },
  { candidate: [], positionMatch: 0, numberMatch: 0 },
  { candidate: [], positionMatch: 0, numberMatch: 0 },
  { candidate: [], positionMatch: 0, numberMatch: 0 },
  { candidate: [], positionMatch: 0, numberMatch: 0 },
  { candidate: [], positionMatch: 0, numberMatch: 0 },
  { candidate: [], positionMatch: 0, numberMatch: 0 },
  { candidate: [], positionMatch: 0, numberMatch: 0 },
];

for (var i=0; i<10; i++) {
  var 기회정보6개추출=[];
  for (var t=0; t<6; t++) {
    if (t<4) {opportunities[i].candidate.push(document.querySelectorAll('#기회' + i + ' *')[t].innerHTML)}
    if (t==4) {opportunities[i].numberMatch=document.querySelectorAll('#기회' + i + ' *')[t].innerHTML*1}
    if (t==5) {opportunities[i].positionMatch=document.querySelectorAll('#기회' + i + ' *')[t].innerHTML*1}
  }
}


console.log('return;')
return;

function findPossiblePasswords(opportunities) {
  const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const possiblePasswords = [];

  // Helper to count position matches
  function countPositionMatches(password, candidate) {
    console.log('function countPositionMatches(password, candidate) : ' + password + ', ' + candidate)
    return password.filter((num, idx) => num === candidate[idx]).length;
  }

  // Helper to count number matches (excluding position matches)
  function countNumberMatches(password, candidate) {
    return password.reduce((count, num, idx) => {
      if (candidate.includes(num) && num !== candidate[idx]) {
        return count + 1;
      }
      return count;
    }, 0);
  }

  // Generate all permutations of 4 numbers from 0 to 9
  function generatePermutations(arr, length) {
    if (length === 1) return arr.map((n) => [n]);
    const permutations = [];
    for (let i = 0; i < arr.length; i++) {
      const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
      const subPermutations = generatePermutations(remaining, length - 1);
      subPermutations.forEach((perm) => permutations.push([arr[i], ...perm]));
    }
    return permutations;
  }

  const allPermutations = generatePermutations(allNumbers, 4);

  // Filter permutations based on all opportunity conditions
  for (const password of allPermutations) {
    let isValid = true;

    for (const { candidate, positionMatch, numberMatch } of opportunities) {
      // Skip this opportunity if candidate length is not 4
      if (candidate.length !== 4) {
        continue;
      }

      const posMatches = countPositionMatches(password, candidate);
      const numMatches = countNumberMatches(password, candidate);

      if (posMatches !== positionMatch || numMatches !== numberMatch) {
        isValid = false;
        break;
      }
    }

    if (isValid) possiblePasswords.push(password.join(""));
  }

  return possiblePasswords;
}

// Find all valid passwords
const validPasswords = findPossiblePasswords(opportunities);

// Output the results
console.log("Possible passwords:", validPasswords);
console.log("Total count:", validPasswords.length);
}

function 임시보관() {
  // 배열 선언 : 3824 예시
  var 가능한번호들 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var 배열0 = [0, 1, 2, 3]; // b=1, s=1
  var 배열1 = [6, 7, 8, 9]; // b=1, s=0 : 45중하나
  var 배열2 = [1, 4, 2, 0]; // b=1, s=1 : 
  var 배열3 = [3, 8, 4, 9]; // b=1, s=2 : 89중 하나, 34있고
  var 배열4 = [3, 8, 5, 9]; // b=0, s=2 : 384확정, (4대신 5넣었을때 1개 줄었으니 4확정, 5제외), 3,8위치 확정 4위치 네번째로 확정
  var 배열5 = [];
  var 배열6 = [];
  var 배열7 = [];
  var 배열8 = [];
  var 배열9 = [];
  var bs0=[1,1];
  var bs1=[1,0];
  var bs2=[1,1];
  var bs3=[1,2];
  var bs4=[0,2];
  var bs5=[0,0];
  var bs6=[0,0];
  var bs7=[0,0];
  var bs8=[0,0];
  var bs9=[0,0];
  var 검토배열 = [];

  var 스트라이크; // 포함중_index일치개수
  var 볼; // 포함_검토배열값중에서가능한번들배열에있는개수

  var 확정배열 = [null, null, null, null]; // 초기값을 null로 설정

  var 포함될숫자 = [];
  var 제외될숫자 = [];

  // 반복문 수정: 각 배열에 대한 조건을 처리
  for (var i = 0; i < 10; i++) {
      // 각 배열 및 조건 설정
      if (i == 0) {검토배열 = 배열0; 볼=bs0[0]; 스트라이크=bs0[1];}
      if (i == 1) {검토배열 = 배열1; 볼=bs1[0]; 스트라이크=bs1[1];}
      if (i == 2) {검토배열 = 배열2; 볼=bs2[0]; 스트라이크=bs2[1];}
      if (i == 3) {검토배열 = 배열3; 볼=bs3[0]; 스트라이크=bs3[1];} // 3,4있고, 6,7제외
      if (i == 4) {검토배열 = 배열4; 볼=bs4[0]; 스트라이크=bs4[1];}
      if (i == 5) {검토배열 = 배열5; 볼=bs5[0]; 스트라이크=bs5[1];}
      if (i == 6) {검토배열 = 배열6; 볼=bs6[0]; 스트라이크=bs6[1];}
      if (i == 7) {검토배열 = 배열7; 볼=bs7[0]; 스트라이크=bs7[1];}
      if (i == 8) {검토배열 = 배열8; 볼=bs8[0]; 스트라이크=bs8[1];}
      if (i == 9) {검토배열 = 배열9; 볼=bs9[0]; 스트라이크=bs9[1];}

      if (검토배열.length!=4) continue;
      console.log('[' + 검토배열 + '] 볼 : ' + 볼 + ', 스트라이크 : ' + 스트라이크)

      //이곳에 추가될 코드에 대한 설명이다.
      //'볼'은 검토배열의 값 중에 반드시 포함하는 숫자이지만 index가 다른 개수이다. '스트라이크'는 반드시 포함하는 숫자이고 index도 일치하는 숫자이다.
      //반복문을 돌면서 조건을 모두 만족하는 값을 찾아가면서 '볼'의 숫자와 '스트라이크'의 숫자를 확정하는 코드이다.
      //'볼'로 확정된 숫자는 '포함될숫자'에 추가하고 중복을 제외한 결과로 나타낸다. '스트라이크'로 확정된 숫자는 '확정배열'의 index 위치에 입력한다.
      //'제외될숫자'는 반복문을 돌면서 모든 조건을 만족하는 값을 찾아가면서 반드시 포함되지 않는 숫자가 확정되면 추가하고 중복을 제거한다.

  }
}
var 리턴번호;
var 조합제거번호return;
var 조합제거리턴index;
function 조합제거번호셑팅() {

  console.log('조합제거번호셑팅 리턴값 : ' + 조합제거번호return + ' index : ' + 조합제거리턴index)
  //조합제거리턴index=0 일때 false 로 인식하는가?
  if (parseInt(조합제거번호return, 10) && (parseInt(조합제거리턴index, 10) || 조합제거리턴index==0)) {

  } else {
    console.log('필터링결과, 제거번호, 인덱스, 번호하나라도 모두 있어야함'); return;
  }
  //빈경우 숫자넣기, 값 있는경우 숫자넣기, 같은번호있는경우 숫자지우기기
  var 번호=document.querySelectorAll('#조합제거4개div div');
  if (번호[조합제거리턴index].innerHTML==조합제거번호return) {
    번호[조합제거리턴index].innerHTML='';
  } else {
    번호[조합제거리턴index].innerHTML=조합제거번호return;
  }







  
}
function 조합제거실행() {
  //필터링된결과는 다시 되돌릴수 있도록 놔두고 : 
  var 제거실행결과=[];
  var 번호1=document.querySelectorAll('#조합제거4개div div')[0].innerHTML;
  var 번호2=document.querySelectorAll('#조합제거4개div div')[1].innerHTML;
  var 번호3=document.querySelectorAll('#조합제거4개div div')[2].innerHTML;
  var 번호4=document.querySelectorAll('#조합제거4개div div')[3].innerHTML;

  필터링된결과.forEach(조합 => {

    let 유효 = true;

    console.log('[ ' + 번호1 + ', ' + 번호2 + ', ' + 번호3 + ', ' + 번호4 + ' ] 번호 <--> 조합 [ ' + 조합[0] + ', ' + 조합[1] + ', ' + 조합[2] + ', ' + 조합[3] + ' ]' )

    if (번호1!='' && 번호1!=조합[0]) {유효=false;}
    if (번호2!='' && 번호2!=조합[1]) {유효=false;}
    if (번호3!='' && 번호3!=조합[2]) {유효=false;}
    if (번호4!='' && 번호4!=조합[3]) {유효=false;}

    if (유효) {제거실행결과.push(조합);}

  });


  if (제거실행결과.length < 700) {
    document.querySelector('#가능한조합개수만').innerHTML = 제거실행결과.length;
    let 결과한줄씩연속묶음 = '';
    let 누적 = '';

    //마지막 length인데 i % 30 != 0 : 결과한줄씩연속묶음 을 div로 감싸기 (30개씩 세로로 배열 css 작성)
    //i! = 0 && i % 30 != 0 : 결과한줄씩연속묶음 을 div로 감싸기 (30개씩 세로로 배열 css 작성)
    for (var i=0; i<제거실행결과.length; i++) {
      
    }


    if (제거실행결과.length==30) {
      for (let i = 0; i < 제거실행결과.length; i++) {
        결과한줄씩연속묶음 += '<br>' + 제거실행결과[i];
        if (i % 30 === 29) {
          누적 += '<div>' + 결과한줄씩연속묶음 + '</div>';
          document.querySelector('#가능한조합').innerHTML = 누적;
      }
     }
     return;
    }




    for (let i = 0; i < 제거실행결과.length; i++) {
      결과한줄씩연속묶음 += '<br>' + 제거실행결과[i];
      if (i % 30 === 29) {
        누적 += '<div>' + 결과한줄씩연속묶음 + '</div>';
        결과한줄씩연속묶음 = '';
      }
    }
    if (제거실행결과.length < 31) {
      누적 = '<div>' + 결과한줄씩연속묶음 + '</div>';
    }
    if (제거실행결과.length % 30 < 29 && 제거실행결과.length > 30) {
      누적 += '<div>' + 결과한줄씩연속묶음 + '</div>';
    }

    document.querySelector('#가능한조합').innerHTML = 누적;
  }






}
function 조합제거ON_OFF() {
  console.log('조합제거ON_OFF()')
  if (document.querySelector('#조합제거').innerHTML=='조합제거 OFF') {
    document.querySelector('#조합제거').innerHTML='조합제거 ON';
    document.querySelector('#조합제거').classList.remove('조합제거off');
    document.querySelector('#조합제거').classList.add('조합제거on');
  } else {
    document.querySelector('#조합제거').innerHTML='조합제거 OFF';
    document.querySelector('#조합제거').classList.remove('조합제거on');
    document.querySelector('#조합제거').classList.add('조합제거off');

    for (var i=0; i<4; i++) {
      document.querySelectorAll('#조합제거4개div div')[i].innerHTML='';
    }
    계산();
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
  document.querySelector('#textarea왼쪽').innerHTML='';
}
function 랜덤번호지움 () {
  //랜덤번호지움 실행후 사용할것
  console.log('랜덤번호지움 ()')
  document.querySelector('#숨겨진랜덤번호').innerHTML='';
  for (i=0; i<4; i++) {
    document.querySelectorAll('#랜덤번호 div')[i].innerHTML='';
  }

  document.querySelector('#랜덤번호정보').innerHTML='랜덤번호가 XXXX BS직접입력';

} 

function 랜덤번호직접기록 () {
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

function 랜덤번호보기숨기기() {
  console.log('function 랜덤번호보기숨기기()')
  var 랜덤번호span값=document.querySelector('#숨겨진랜덤번호').innerHTML;

  var 랜덤번호span값배열=[];
  if (document.querySelectorAll('#랜덤번호 > div')[0].innerHTML!='') {
    console.log('null이 아니거나 값이 있을때')
      //기록되어 있을때
      for (var i=0; i<4; i++) {
        document.querySelectorAll('#랜덤번호 > div')[i].innerHTML='';
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
  //기존값 지우기
  for (i=0; i<4; i++) {
    document.querySelectorAll('#랜덤번호 div')[i].innerHTML='';
  }

}


리스너가능=document.querySelector('#가능');
리스너기회=document.querySelector('#기회');

if (1==1) {//중복제거모든조합_result()
  //var result = [];

}

function 다시() {

  document.querySelector('#조합제거').innerHTML='조합제거 OFF';
  document.querySelector('#조합제거').classList.remove('조합제거on');
  document.querySelector('#조합제거').classList.add('조합제거off');

  for (var i=0; i<4; i++) {
    document.querySelectorAll('#조합제거4개div div')[i].innerHTML='';
  }
  
  for (var i=0; i<document.querySelectorAll('#선택 div').length; i++) {
    if (document.querySelectorAll('#선택 div')[i].classList.contains('번호_선택또는가능초코')) {
      document.querySelectorAll('#선택 div')[i].classList.remove('번호_선택또는가능초코')
    }
  }

  document.querySelector('#포함해야하는번호결과').innerHTML='';
  document.querySelector('#없어야할번호결과').innerHTML='';
  document.querySelectorAll('.순서확정')[0].innerHTML='';
  document.querySelectorAll('.순서확정')[1].innerHTML='';
  document.querySelectorAll('.순서확정')[2].innerHTML='';
  document.querySelectorAll('.순서확정')[3].innerHTML='';

  document.querySelector('#가능한조합').innerHTML = '';

  for (var i=0; i<document.querySelectorAll('.숫자일치').length; i++) {
    document.querySelectorAll('.숫자일치')[i].innerHTML='';
    document.querySelectorAll('.위치일치')[i].innerHTML='';
  }

  for (var i=2; i<10; i++) {
    var 현재기회div4개=document.querySelectorAll('#기회' + i + ' *'); 
    for (var t=0; t<4; t++) {
      현재기회div4개[t].innerHTML='';
    }
  }
  
  document.querySelector('#랜덤번호직접입력').innerHTML='랜덤번호직접입력';
  document.querySelector('#랜덤번호정보').innerHTML='랜덤번호가 XXXX BS직접입력';
  document.querySelector('#숨겨진랜덤번호').innerHTML='';
  for (var i=0; i<4; i++) {
    document.querySelectorAll('#랜덤번호 > div')[i].innerHTML='';
  }

  document.querySelector('.기록중').classList.remove('기록중');
  document.querySelector('#초기화시기록중클래스부여').classList.add('기록중');
  

  for (var i=0; i<document.querySelectorAll('.가능숫자하나 div').length; i++) {
    document.querySelectorAll('.가능숫자하나 div')[i].classList.remove('제외')
  }
  for (var i=0; i<document.querySelectorAll('.입력').length; i++) {
    document.querySelectorAll('.입력')[i].innerHTML=i;
    document.querySelectorAll('.입력')[i].nextSibling.innerHTML='';
  }
  for (var i=0; i<document.querySelectorAll('.포함').length; i++) {
    document.querySelectorAll('.포함')[i].innerHTML=i;
    document.querySelectorAll('.포함')[i].nextSibling.innerHTML='';
  }
  for (var i=0; i<document.querySelectorAll('.기회 *').length; i++) {
    if (i % 7 == 6) {

    } else {
      //document.querySelectorAll('.기회 *')[i].innerHTML='';
    }
  }
  for (var i=0; i<document.querySelectorAll('#가능번호 div').length; i++) {
    document.querySelectorAll('#가능번호 div')[i].innerHTML=i;
  }
  for (var i=0; i<document.querySelectorAll('#확정번호만 div').length; i++) {
    document.querySelectorAll('#확정번호만 div')[i].innerHTML='';
  }
  document.querySelector('#가능한조합개수만').innerHTML='';
  필터링된결과=[]; //초기화
}

function 기회click(e) {
  if (e.target.innerHTML=='현재기록중 1개 clear') {
    var 기록중id=document.querySelector('.기록중').parentElement.id;
    var 기록중요소=document.querySelectorAll('#' + 기록중id + ' *');
    for (var i=0; i<기록중요소.length-1; i++) {
      기록중요소[i].innerHTML='';
    }
    return;
  }
  if (e.target.classList.contains('위치일치') || e.target.classList.contains('숫자일치')) {
    if (e.target.innerHTML=='') {
      e.target.innerHTML=1;
    } else if (e.target.innerHTML=='4') {
      e.target.innerHTML='';
    } else {e.target.innerHTML=e.target.innerHTML*1 + 1;}
    return;
  }
  if (e.target.classList.contains('토글')) {
    if (e.target.innerHTML!='') {
      e.target.previousSibling.innerHTML=e.target.innerHTML; 
      e.target.innerHTML=''
    } else {
      e.target.innerHTML=e.target.previousSibling.innerHTML;
      e.target.previousSibling.innerHTML=''; 
    }
    return;
  }
  if (e.target.classList.contains('포함토글')) {
    if (e.target.innerHTML!='') {
      e.target.previousSibling.innerHTML=e.target.innerHTML; 
      e.target.innerHTML=''
    } else {
      e.target.innerHTML=e.target.previousSibling.innerHTML;
      e.target.previousSibling.innerHTML=''; 
    }
    return;
  }

  if (e.target.innerHTML=='C') {
    document.querySelector('.기록중').classList.remove('기록중');
    e.target.classList.add('기록중');
    return;
  }

  if (e.target.innerHTML=='기회입력상태') {
    console.log('e.target.innerHTML==기회입력상태')
    e.target.innerHTML='직접입력상태'
    return;
  }

  if (e.target.innerHTML=='직접입력상태') {
    console.log('e.target.innerHTML==직접입력상태')
    e.target.innerHTML='기회입력상태'
    return;
  }


  if (e.target.classList.contains('입력') & document.querySelector('#랜덤번호직접입력').innerHTML=='직접입력상태') {
    console.log('e.target.classList.contains(입력) + 직접입력상태 일때')
    
    리턴번호=e.target.innerHTML;//전역변수
    랜덤번호직접기록 ()
    return;
  }

  if (e.target.classList.contains('입력') & document.querySelector('#랜덤번호직접입력').innerHTML!='직접입력상태') {
    console.log('e.target.classList.contains(입력) + 직접입력상태 아닐때')
    if (e.target.innerHTML=='') {console.log('\u00a0\u00a0\e.target.innerHTML=="") {return;}'); return;}

    var 기록중기회요소=document.querySelector('.기록중').parentNode;
    var 같은번호있음;
    for (var i=0; i<4; i++) {
      if (기록중기회요소.children[i].innerHTML==e.target.innerHTML*1) {
        같은번호있음='같은번호있음';
      }
    }
    if (같은번호있음=='같은번호있음') {
      console.log('같은번호있음')
      for (var i=0; i<4; i++) {
      if (기록중기회요소.children[i].innerHTML==e.target.innerHTML) {
        기록중기회요소.children[i].innerHTML='';
        return;
        }
      }
    }
    
    for (var i=0; i<4; i++) {
      if (기록중기회요소.children[i].innerHTML=='') {

              e.target.classList.add('임시표시');
              var 클릭한번호;
              for (var k=0; k<10; k++) {
                if (document.querySelectorAll('.입력')[k].classList.contains('임시표시')) {
                  클릭한번호=k;
                }
              }
              e.target.classList.remove('임시표시');

              if (1==2) {
              //제한을 두지 않는다. 인덱스는 i
                if (document.querySelectorAll('#가능 > div:nth-of-type(' + (클릭한번호*1 + 1) + ') div')[i].classList.contains('제외')) {
                  alert(클릭한번호*1 + ' : 해당숫자는 주황색칠숫자(가능번호 제외)')
                  return;
                }
              }

              

        기록중기회요소.children[i].innerHTML=e.target.innerHTML;
        return;
      }
    }
    return;
  }
  if (e.target.innerHTML=='랜덤번호생성') {
    console.log('e.target.innerHTML==랜덤번호생성');
    랜덤번호생성();
    document.querySelector('#랜덤번호정보').innerHTML='랜덤번호 있음 BS 계산()시 입력됨';
    return;
  }
  if (e.target.innerHTML=='번호보기/숨기기') {
    console.log('e.target.innerHTML==번호보기/숨기기');
    랜덤번호보기숨기기();
    return;
  }
  if (e.target.innerHTML=='랜덤번호지움') {
    console.log('e.target.innerHTML==랜덤번호지움');
    랜덤번호지움 ()
    return;
  }
}
function 가능click(e) {
  if (document.querySelector('#조합제거').innerHTML=='조합제거 ON') {
    조합제거번호return=e.target.innerHTML*1;

    e.target.classList.add('임시표시');
    var 표시확인부모요소=e.target.parentElement;
    for (var i=0; i<4; i++) {
      if (표시확인부모요소.children[i].classList.contains('임시표시')) {조합제거리턴index=i;}
    }
    e.target.classList.remove('임시표시');
    조합제거번호셑팅();

    return;
  }
  if (e.target.parentElement.classList.contains('가능숫자하나')) {
    console.log('가능click(e)')
    //제외 클래스 있으면 메세지 아니면 해당 C 선택된 해당 INDEX에 값 넣기
    var 기록중id=document.querySelector('.기록중').parentElement.id;
    var 기록중요소=document.querySelectorAll('#' + 기록중id + ' *');
    var 선택번호=e.target.innerHTML*1;
    var 선택index;
    if (e.target.classList.contains('제외')) {
      alert(선택번호 + ' 제외 번호')
    } else {
      e.target.classList.add('임시표시');
      var 표시확인부모요소=e.target.parentElement;
      for (var i=0; i<4; i++) {
        if (표시확인부모요소.children[i].classList.contains('임시표시')) {선택index=i;}
      }
      //console.log('선택index : ' + 선택index + ', 선택번호 : ' + 선택번호 + ' ,기록중id : ' + 기록중id)
      //console.log('기록중요소[선택index].innerHTML : ' +  기록중요소[선택index].innerHTML + ' == ' + 선택번호 + ' 선택번호')
      //console.log('위 조건 맞으면 지우기(같은숫자면 지우기)')
      // ''==0 이 참이다? 공백==0이 참이다?
      if (기록중요소[선택index].innerHTML!='' && 기록중요소[선택index].innerHTML==선택번호) {기록중요소[선택index].innerHTML='';return;}
      
      e.target.classList.remove('임시표시');
      기록중요소[선택index].innerHTML=e.target.innerHTML*1;
    }
    return;
  }
}
리스너가능.addEventListener('click', 가능click)
리스너기회.addEventListener('click', 기회click)