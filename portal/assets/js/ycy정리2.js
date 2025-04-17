옵션생성();
var 회차index=document.querySelector('#당번_회차select').value; //회차번호보다 1 작다. 옵션생성() 앞에 있어도 된다. 함수를 먼저 하는듯
분석자료표만들기_상();
분석자료표만들기_하();
버튼45관련만들기();
카테고리보기();
당번_회차select_change();
분석자료_회차select_change();
var 리스너_분석자료=document.querySelector('#분석자료');
function 리스너_분석자료_click(e) {
  console.log('리스너_분석자료_click(e)')
  if ((e.target.parentElement.id=='분석자료숨김버튼' && e.target.innerHTML=='a') || (e.target.parentElement.id=='분석자료숨김버튼' && e.target.innerHTML=='b')) {
    var 분석버튼숨김클래스개수=0;
    var 다음요소=e.target;
    for (var i=0; i<3; i++) {
      다음요소=다음요소.nextElementSibling;
      if (다음요소.classList.contains('분석버튼숨김')) {분석버튼숨김클래스개수+=1;}
    }
    다음요소=e.target;
    if (분석버튼숨김클래스개수==0) {
      for (var i=0; i<3; i++) {
        다음요소=다음요소.nextElementSibling;
        다음요소.classList.add('분석버튼숨김');
        document.querySelector('#분석자료_표_상_js').children[다음요소.innerHTML].classList.add('d-none')
      }
    }
    다음요소=e.target;
    if (분석버튼숨김클래스개수!=0) {
      for (var i=0; i<3; i++) {
        다음요소=다음요소.nextElementSibling;
        다음요소.classList.remove('분석버튼숨김');
        document.querySelector('#분석자료_표_상_js').children[다음요소.innerHTML].classList.remove('d-none')
      }
    }

    return;
  }
  if ((e.target.parentElement.id=='분석자료숨김버튼' && e.target.innerHTML=='c')) {
    var 분석버튼숨김클래스개수=0;
    var 다음요소=e.target;
    for (var i=0; i<4; i++) {
      다음요소=다음요소.nextElementSibling;
      if (다음요소.classList.contains('분석버튼숨김')) {분석버튼숨김클래스개수+=1;}
    }
    다음요소=e.target;
    if (분석버튼숨김클래스개수==0) {
      for (var i=0; i<4; i++) {
        다음요소=다음요소.nextElementSibling;
        다음요소.classList.add('분석버튼숨김');
        document.querySelector('#분석자료_표_상_js').children[다음요소.innerHTML].classList.add('d-none')
      }
    }
    다음요소=e.target;
    if (분석버튼숨김클래스개수!=0) {
      for (var i=0; i<4; i++) {
        다음요소=다음요소.nextElementSibling;
        다음요소.classList.remove('분석버튼숨김');
        document.querySelector('#분석자료_표_상_js').children[다음요소.innerHTML].classList.remove('d-none')
      }
    }
    return;
  }
  if ((e.target.parentElement.id=='분석자료숨김버튼' && e.target.innerHTML=='d')) {
    var 분석버튼숨김클래스개수=0;
    var 다음요소=e.target;
    for (var i=0; i<9; i++) {
      다음요소=다음요소.nextElementSibling;
      if (다음요소.classList.contains('분석버튼숨김')) {분석버튼숨김클래스개수+=1;}
    }
    다음요소=e.target;
    if (분석버튼숨김클래스개수==0) {
      for (var i=0; i<9; i++) {
        다음요소=다음요소.nextElementSibling;
        다음요소.classList.add('분석버튼숨김');
        document.querySelector('#분석자료_표_상_js').children[다음요소.innerHTML].classList.add('d-none')
      }
    }
    다음요소=e.target;
    if (분석버튼숨김클래스개수!=0) {
      for (var i=0; i<9; i++) {
        다음요소=다음요소.nextElementSibling;
        다음요소.classList.remove('분석버튼숨김');
        document.querySelector('#분석자료_표_상_js').children[다음요소.innerHTML].classList.remove('d-none')
      }
    }
    return;
  }
  if (e.target.parentElement.id=='삼십회횟수기록') {
    console.log('e.target.parentElement.id==삼십회횟수기록')
    //삼십회횟수기록 단독작업
    if (e.target.classList.contains('색칠')) {
      for (var i=0; i<document.querySelectorAll('#삼십회횟수기록 > div').length; i++) {
        document.querySelectorAll('#삼십회횟수기록 > div')[i].classList.remove('색칠');
      }
    } else {
      //1.클릭한 횟수부분이 색칠되어 있는경우, 2.색칠이 없는경우, 
      document.querySelector('#클릭번호들').innerHTML=document.querySelector('#분석자료_변수_30주' + e.target.innerHTML + '출').innerHTML.split(',').join(',');
      
      var 클릭번호들=document.querySelector('#클릭번호들').innerHTML.split(','); //리스너_분석자료_click(e)에서 횟수같은 번호들이 넘어감
      document.querySelector('#클릭번호정보').innerHTML='30회 ' + e.target.innerHTML + '회출 번호들, ' + 클릭번호들.length + '개'
      for (var i=0; i<document.querySelectorAll('#삼십회횟수기록 > div').length; i++) {
        document.querySelectorAll('#삼십회횟수기록 > div')[i].classList.remove('색칠');
      }
      for (var i=0; i<클릭번호들.length; i++) {
        document.querySelectorAll('#삼십회횟수기록 > div')[클릭번호들[i]-1].classList.add('색칠');
      }
    }
    클릭번호들처리();
    return;
  }
  if (e.target.innerHTML=='당번') {document.querySelector('#클릭번호들').innerHTML=document.querySelector('#분석자료_변수_당번').innerHTML;클릭번호들처리();}
  if (e.target.innerHTML=='이웃수') {document.querySelector('#클릭번호들').innerHTML=document.querySelector('#분석자료_변수_이웃').innerHTML;클릭번호들처리();}
  if (e.target.innerHTML=='당번+이웃') {document.querySelector('#클릭번호들').innerHTML=document.querySelector('#분석자료_변수_당번이웃').innerHTML;클릭번호들처리();}
  if (e.target.innerHTML=='15주미출') {document.querySelector('#클릭번호들').innerHTML=document.querySelector('#분석자료_변수_10에서15주0출').innerHTML;클릭번호들처리();}
  if (e.target.innerHTML=='10주미출') {document.querySelector('#클릭번호들').innerHTML=document.querySelector('#분석자료_변수_5에서10주0출').innerHTML;클릭번호들처리();}
  if (e.target.innerHTML=='5주0출') {document.querySelector('#클릭번호들').innerHTML=document.querySelector('#분석자료_변수_5주0출').innerHTML;클릭번호들처리();}
  if (e.target.innerHTML=='5주출') {document.querySelector('#클릭번호들').innerHTML=document.querySelector('#분석자료_변수_5주출').innerHTML;클릭번호들처리();}
  if (e.target.innerHTML=='5주1출') {document.querySelector('#클릭번호들').innerHTML=document.querySelector('#분석자료_변수_5주1출').innerHTML;클릭번호들처리();}
  if (e.target.innerHTML=='5주2출') {document.querySelector('#클릭번호들').innerHTML=document.querySelector('#분석자료_변수_5주2출').innerHTML;클릭번호들처리();}
  if (e.target.innerHTML=='5주3출') {document.querySelector('#클릭번호들').innerHTML=document.querySelector('#분석자료_변수_5주3출이상').innerHTML;클릭번호들처리();}
  if (e.target.parentElement.id=='분석자료숨김버튼') {
    if (e.target.classList.contains('분석버튼숨김')) {
      e.target.classList.remove('분석버튼숨김');
      document.querySelector('#분석자료_표_상_js').children[e.target.innerHTML].classList.remove('d-none')
    } else {
      e.target.classList.add('분석버튼숨김');
      document.querySelector('#분석자료_표_상_js').children[e.target.innerHTML].classList.add('d-none')
    }
    return;
  }
  if (e.target.parentElement.id=='XO플마') {
    if (e.target.innerHTML=='X') {
      for (var i=0; i<document.querySelector('#분석자료_표_상_js').children.length; i++) {
        document.querySelector('#분석자료_표_상_js').children[i].classList.add('d-none');
      }
      for (var i=0; i<document.querySelectorAll('#분석자료숨김버튼 button').length; i++) {
        document.querySelectorAll('#분석자료숨김버튼 button')[i].classList.add('분석버튼숨김');
        var 값=document.querySelectorAll('#분석자료숨김버튼 button')[i].innerHTML;
        if (값=='a' || 값=='b' || 값=='c' || 값=='d') {document.querySelectorAll('#분석자료숨김버튼 button')[i].classList.remove('분석버튼숨김');}
      }
    }
    if (e.target.innerHTML=='O') {
      for (var i=0; i<document.querySelector('#분석자료_표_상_js').children.length; i++) {
        document.querySelector('#분석자료_표_상_js').children[i].classList.remove('d-none');
      }
      for (var i=0; i<document.querySelectorAll('#분석자료숨김버튼 button').length; i++) {
        document.querySelectorAll('#분석자료숨김버튼 button')[i].classList.remove('분석버튼숨김');
      }
    }
  }
}
function 분석자료_회차마이너스() {
  console.log('분석자료_회차빼기()')
  var 선택회차=parseInt(document.querySelector('#분석자료_회차select').value);
  document.querySelector('#분석자료_회차select').value=선택회차-1;
  분석자료_회차select_change()
}
function 분석자료_회차플러스() {
  console.log('분석자료_회차빼기()')
  var 선택회차=parseInt(document.querySelector('#분석자료_회차select').value);
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  if (당첨정보.length==선택회차) {alert('가장 최근 회차입니다.'); return;}
  document.querySelector('#분석자료_회차select').value=선택회차+1;
  분석자료_회차select_change()
}
function 연습() {

    console.log(document.querySelector('#버튼45오른쪽단독_안에_셑팅1_번호들').outerHTML)
    console.log(document.querySelector('#버튼45오른쪽단독_안에_셑팅2_번호들').outerHTML)


}
function 분석자료표만들기_하() {
  //왼쪽과 오른쪽 구분하여 작성
  var 오른쪽45=document.createElement('div');
  for (var 외부=0; 외부<39; 외부++) {
    var 가로한줄=document.createElement('div');
    var 번호선택_추출_c=document.createElement('div');
    var 번호45=document.createElement('div');
    if (외부!=1) {번호45.setAttribute('class','다섯개씩번갈아색칠')}
    if (외부==1) {번호45.setAttribute('id','삼십회횟수기록')}
    for (var i=1; i<46; i++) {
      var div요소=document.createElement('div'); // div 요소 변수에 담는다. 다섯개씩번갈아색칠
      if (외부==0 || 외부==8) {div요소.innerText=i}
      번호45.appendChild(div요소);
    }
    오른쪽45.appendChild(번호45);
  }

  var 왼쪽전체=document.createElement('div'); //

  var 다섯칸머리글div=document.createElement('div'); //머리글 위에꺼(다음회차 있을때), 머리글 2번사용
  다섯칸머리글div.setAttribute('class','다섯칸_있다면다음회차');
  var 내부다섯칸맞추기=document.createElement('div');
  내부다섯칸맞추기.setAttribute('class','다섯칸');
  for (var i=0; i<5; i++) {
    var 가로한줄=document.createElement('div');
    내부다섯칸맞추기.appendChild(가로한줄)
  }
  다섯칸머리글div.appendChild(내부다섯칸맞추기)
  왼쪽전체.appendChild(다섯칸머리글div);

  var 다섯칸머리글div=document.createElement('div'); //머리글 위에꺼(다음회차 있을때), 머리글 2번사용
  다섯칸머리글div.setAttribute('class','다섯칸머리글');
  var 내부다섯칸맞추기=document.createElement('div');
  내부다섯칸맞추기.setAttribute('class','다섯칸');
  var 다섯칸제목=[0,1,2,3,'이월']
  for (var i=0; i<5; i++) {
    var 가로한줄=document.createElement('div');
    가로한줄.textContent=다섯칸제목[i];
    내부다섯칸맞추기.appendChild(가로한줄)
  }
  다섯칸머리글div.appendChild(내부다섯칸맞추기)
  왼쪽전체.appendChild(다섯칸머리글div);

  var 다섯칸div전체=document.createElement('div');
  다섯칸div전체.setAttribute('class','다섯칸div전체');
  for (var 다섯칸만들기반복=0; 다섯칸만들기반복<15; 다섯칸만들기반복++) {
    var 다섯칸div=document.createElement('div');
    다섯칸div.setAttribute('class','다섯칸');
    for (var i=0; i<5; i++) {
      var 가로한줄=document.createElement('div');
      다섯칸div.appendChild(가로한줄)
    }
    다섯칸div전체.appendChild(다섯칸div)
  }
  왼쪽전체.appendChild(다섯칸div전체);
  document.querySelector('#분석자료_표_하_js').appendChild(왼쪽전체)
  document.querySelector('#분석자료_표_하_js').appendChild(오른쪽45)
}
function 버튼45관련만들기() {
  for (var 외부=0; 외부<1; 외부++) {
    var 번호45=document.createElement('div');
    번호45.setAttribute('class','다섯개씩번갈아색칠')
    for (var i=1; i<46; i++) {
      var div요소=document.createElement('div'); // div 요소 변수에 담는다. 다섯개씩번갈아색칠
      번호45.appendChild(div요소);
    }
  }
  document.querySelector('#버튼45오른쪽단독_안에_keep').innerHTML=번호45.innerHTML;
  document.querySelector('#버튼45오른쪽단독_안에_셑팅1_번호들').innerHTML=번호45.innerHTML;
  document.querySelector('#버튼45오른쪽단독_안에_셑팅2_번호들').innerHTML=번호45.innerHTML;
  document.querySelector('#버튼45오른쪽단독_안에_셑팅1_2_중복번호들').innerHTML=번호45.innerHTML;
  document.querySelector('#버튼45오른쪽단독_안에_클릭번호들').innerHTML=번호45.innerHTML;
  document.querySelector('#버튼45오른쪽단독_안에_순번').innerHTML=번호45.innerHTML;
  for (var i=0; i<45; i++) {document.querySelectorAll('#버튼45오른쪽단독_안에_순번 > div')[i].innerHTML=i+1}
  console.log(document.querySelectorAll('#버튼45오른쪽단독 > .설명_첫번째div > .설명_가로한줄').length)
  for (var i=0; i<document.querySelectorAll('#버튼45오른쪽단독 > .설명_첫번째div > .설명_가로한줄').length; i++) {
    document.querySelectorAll('#버튼45오른쪽단독 > .설명_첫번째div > .설명_가로한줄')[i].children[0].children[0].innerHTML=0;
  }
}
function 분석자료표만들기_상() {
  for (var 외부=0; 외부<20; 외부++) {
    var 가로한줄=document.createElement('div');
    var 번호선택_추출_c=document.createElement('div');
    var 번호선택배열=['번호선택↓','당번','이웃수','당번+이웃','15주미출','10주미출','5주0출','5주출','5주1출','5주2출','5주3출']
    for (var i=0; i<3; i++) {
      var div요소=document.createElement('div'); // div 요소 변수에 담는다.
      if (i==0) {div요소.textContent=번호선택배열[외부]}
      if (i==1 && 외부==0) {div요소.textContent='출'}
      if (i==2 && 외부==0) {div요소.textContent='C'}
      if (i==2 && 외부!=0) {div요소.textContent=외부}
      번호선택_추출_c.appendChild(div요소);
    }
    var 번호45=document.createElement('div');
    //if (외부!=0) {번호45.setAttribute('class','다섯개씩번갈아색칠');}
    번호45.setAttribute('class','다섯개씩번갈아색칠');

    for (var i=1; i<46; i++) {
      var div요소=document.createElement('div'); // div 요소 변수에 담는다. 다섯개씩번갈아색칠
      번호45.appendChild(div요소);
    }
    가로한줄.appendChild(번호선택_추출_c);
    가로한줄.appendChild(번호45);
    가로한줄.setAttribute('class','js클릭번호')

    document.querySelector('#분석자료_표_상_js').appendChild(가로한줄);
  }
  for (var i=0; i<45; i++) {document.querySelectorAll('#분석자료_표_상_js > div')[0].children[1].children[i].innerHTML=i+1}
  //다 만들고 난 후에 숨김할것 처리
  var 요소=document.querySelectorAll('#분석자료숨김버튼 button');
  for (var i=0; i<요소.length; i++) {
    if (요소[i].classList.contains('분석버튼숨김')) {
      document.querySelector('#분석자료_표_상_js').children[요소[i].innerHTML].classList.add('d-none');
    }
  }
}
function 버튼45감싸기_보기숨기기() {
  if (document.querySelector('#check_번호45감싸기').checked) {
    document.querySelector('#버튼45감싸기').classList.remove('d-none')
  } else {
    document.querySelector('#버튼45감싸기').classList.add('d-none')
  }
}
function 버튼45_2st_보기숨기기() {
  if (document.querySelector('#버튼45_2st').checked) {
    document.querySelector('#id_버튼45_2st').classList.remove('d-none')
  } else {
    document.querySelector('#id_버튼45_2st').classList.add('d-none')
  }
}
function 버튼45_3st_보기숨기기() {
  if (document.querySelector('#버튼45_3st').checked) {
    document.querySelector('#id_버튼45_3st').classList.remove('d-none')
  } else {
    document.querySelector('#id_버튼45_3st').classList.add('d-none')
  }
}
function 사진_보기숨기기() {
  if (document.querySelector('#check_사진').checked) {
    document.querySelector('#사진').classList.remove('d-none')
  } else {
    document.querySelector('#사진').classList.add('d-none')
  }
}
function 사진_보기숨기기2() {
  if (document.querySelector('#check_사진2').checked) {
    document.querySelector('#사진2').classList.remove('d-none')
  } else {
    document.querySelector('#사진2').classList.add('d-none')
  }
}
function 분석자료_보기숨기기() {
  if (document.querySelector('#check_분석자료').checked) {
    document.querySelector('#분석자료').classList.remove('d-none')
  } else {
    document.querySelector('#분석자료').classList.add('d-none')
  }
}
function 대조45_보기숨기기() {
  if (document.querySelector('#대조45').checked) {
    document.querySelector('#버튼45오른쪽단독').classList.remove('d-none')
  } else {
    document.querySelector('#버튼45오른쪽단독').classList.add('d-none')
  }
}
function 당번_보기숨기기() {
  if (document.querySelector('#check_당번').checked) {
    document.querySelector('#당번').classList.remove('d-none')
  } else {
    document.querySelector('#당번').classList.add('d-none')
  }
}
function 삼십회_보기숨기기() {
  if (document.querySelector('#check_삼십회').checked) {
    document.querySelector('#분석자료_삼십회표').classList.remove('d-none')
  } else {
    document.querySelector('#분석자료_삼십회표').classList.add('d-none')
  }
}
function 분석자료_회차select_change() {
  회차index=parseInt(document.querySelector('#분석자료_회차select').value)-1; //parseInt(), 값전달 안하거나 공백은 NaN
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  //선택회차 셑팅
  var 가공결과='';
  var 가공=document.querySelector('#분석자료_선택회차');
  가공.innerHTML=당첨정보[회차index].children[1].outerHTML;
  가공.innerHTML+=당첨정보[회차index].children[2].outerHTML;
  가공.innerHTML+=당첨정보[회차index].children[3].outerHTML;
  var 당번split=가공.children[1].innerHTML.split(',');
  for (var 내부=0; 내부<6; 내부++) {
    가공결과+='<div>' + 당번split[내부] + '</div>'
    //가공결과+='<div title="' + 당번split[내부] + '">' + 당번split[내부] + '</div>'
  }
  가공.children[1].innerHTML=가공결과;
  가공.children[0].innerHTML=가공.children[0].innerHTML.substring(2,가공.children[0].innerHTML.length)

  //다음회차 있으면 #당번_다음회차 정보 셑팅
  if (당첨정보[회차index+1]) {
    var 가공결과='';
    console.log('다음회차 있으면')
    document.querySelector('#분석자료_다음회차').innerHTML=당첨정보[회차index].outerHTML; //일단가지고옴
    document.querySelector('#당번가공').innerHTML=당첨정보[회차index+1].outerHTML;
    var 가공=document.querySelector('#당번가공').firstChild;
    var 당번split=가공.children[2].innerHTML.split(',');
    for (var 내부=0; 내부<6; 내부++) {
      가공결과+='<div>' + 당번split[내부] + '</div>'
      //가공결과+='<div title="' + 당번split[내부] + '">' + 당번split[내부] + '</div>'
    }
    가공.children[2].innerHTML=가공결과;
    document.querySelector('#분석자료_다음회차').innerHTML=가공.outerHTML;
  } else {
    document.querySelector('#분석자료_다음회차').innerHTML=당첨정보[회차index].outerHTML; //일단가지고옴
    document.querySelector('#분석자료_다음회차').firstChild.children[0].innerHTML='_';
    document.querySelector('#분석자료_다음회차').firstChild.children[1].innerHTML='_';
    document.querySelector('#분석자료_다음회차').firstChild.children[2].innerHTML='<div>_</div><div>_</div><div>_</div><div>_</div><div>_</div><div>_</div>';
    document.querySelector('#분석자료_다음회차').firstChild.children[3].innerHTML='_';
  }
  분석자료_변수_초기화();
  분석자료_고정등번호색칠_클래스지우기();
  분석자료_변수_5주번호정보();
  분석자료_변수_30주번호정보();
  분석자료_삼십회표_js작성();
}
function 당번_회차select_change() {
  회차index=parseInt(document.querySelector('#당번_회차select').value)-1; //parseInt(), 값전달 안하거나 공백은 NaN
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  var 넣을곳=document.querySelector('#당번_불러온당첨정보');
  넣을곳.innerHTML='';
  document.querySelector('#당번_선택회차날짜').innerHTML=당첨정보[회차index].children[1].innerHTML;
  //다음회차 있으면 #당번_다음회차 정보 셑팅
  if (당첨정보[회차index+1]) {
    var 가공결과='';
    console.log('다음회차 있으면')
    document.querySelector('#당번_다음회차').innerHTML=당첨정보[회차index].outerHTML; //일단가지고옴
    document.querySelector('#당번가공').innerHTML=당첨정보[회차index+1].outerHTML;
    var 가공=document.querySelector('#당번가공').firstChild;
    var 당번split=가공.children[2].innerHTML.split(',');
    for (var 내부=0; 내부<6; 내부++) {
      //가공결과+='<div>' + 당번split[내부] + '</div>'
      가공결과+='<div title="' + 당번split[내부] + '">' + 당번split[내부] + '</div>'
    }
    가공.children[2].innerHTML=가공결과;
    document.querySelector('#당번_다음회차').innerHTML=가공.outerHTML;
  } else {
    document.querySelector('#당번_다음회차').innerHTML=당첨정보[회차index].outerHTML; //일단가지고옴
    document.querySelector('#당번_다음회차').firstChild.children[0].innerHTML='_';
    document.querySelector('#당번_다음회차').firstChild.children[1].innerHTML='_';
    document.querySelector('#당번_다음회차').firstChild.children[2].innerHTML='<div>_</div><div>_</div><div>_</div><div>_</div><div>_</div><div>_</div>';
    document.querySelector('#당번_다음회차').firstChild.children[3].innerHTML='_';
  }
  //회차index 부터 30개 당번 가져오기 및 당번가공
  for (var i=0; i<30; i++) {
    var 가공결과='';
    document.querySelector('#당번가공').innerHTML=당첨정보[회차index-i].outerHTML;
    var 가공=document.querySelector('#당번가공').firstChild;
    var 당번split=가공.children[2].innerHTML.split(',');
    for (var 내부=0; 내부<6; 내부++) {
      //가공결과+='<div>' + 당번split[내부] + '</div>'
      가공결과+='<div title="' + 당번split[내부] + '">' + 당번split[내부] + '</div>'
    }
    가공.children[2].innerHTML=가공결과;
    //넣을곳.appendChild(가공); //appendChild하면 #당번숨김 의 요소를 잘라서 가지고온다??
    넣을곳.appendChild(가공);
  }
  당번_변수_초기화();
  당번_변수_5주번호정보();
  당번_변수_30주번호정보();
  당번_변수_이월이웃간격();
}
function 당번_변수_이월이웃간격() {
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  if (회차index>28 && !isNaN(회차index)) {} else {console.log('회차index>29 && !isNaN(회차index); return') ;return;}
  var 당번=[], 이월=[],이웃=[], 간격=[];

}
function 분석자료_변수_5주번호정보_내부_미출부터이월수개수_표_하() {
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  //현재회차보다 한회차 전의 정보다 : _5주출=[], _5주0출=[],  _5주1출=[],  _5주2출=[], _5주3출이상=[]
  if (회차index>28 && !isNaN(회차index)) {} else {console.log('회차index>29 && !isNaN(회차index); return') ;return;}
  for (var 반복=0; 반복<15; 반복++) {
    var _5주번호들배열='', 당번=[]; 전회차당번=[], _5주0출=[], _5주1출=[], _5주2출=[], _5주3출이상=[];
    for (var i=0; i<6; i++) {당번.push(당첨정보[회차index-반복].children[2].innerHTML.split(',')[i]);}
    for (var i=0; i<6; i++) {전회차당번.push(당첨정보[회차index-반복-1].children[2].innerHTML.split(',')[i]);}
    for (var i=0; i<5; i++) {_5주번호들배열+=당첨정보[회차index-5+i-반복].children[2].innerHTML}
    _5주번호들배열=_5주번호들배열.substring(0,_5주번호들배열.length-1) //마지막 _ 하나 지움
    _5주번호들배열=_5주번호들배열.split(',');
    for (var i=0; i<45; i++) {
      if (_5주번호들배열.filter(번호 => 번호==i+1).length==0) {_5주0출.push(i+1)}
      if (_5주번호들배열.filter(번호 => 번호==i+1).length==1) {_5주1출.push(i+1)}
      if (_5주번호들배열.filter(번호 => 번호==i+1).length==2) {_5주2출.push(i+1)}
      if (_5주번호들배열.filter(번호 => 번호==i+1).length>=3) {_5주3출이상.push(i+1)}
    }
    var 이월=0, 출0=0, 출1=0, 출2=0, 출3이상=0;
    for (var i=0; i<6;i++) {출0+=_5주0출.filter(번호 => 번호==당번[i]).length;}
    for (var i=0; i<6;i++) {출1+=_5주1출.filter(번호 => 번호==당번[i]).length;}
    for (var i=0; i<6;i++) {출2+=_5주2출.filter(번호 => 번호==당번[i]).length;}
    for (var i=0; i<6;i++) {출3이상+=_5주3출이상.filter(번호 => 번호==당번[i]).length;}
    for (var i=0; i<6;i++) {이월+=전회차당번.filter(번호 => 번호==당번[i]).length;}
    document.querySelectorAll('.다섯칸div전체 .다섯칸')[반복].children[0].innerHTML=출0;
    document.querySelectorAll('.다섯칸div전체 .다섯칸')[반복].children[1].innerHTML=출1;
    document.querySelectorAll('.다섯칸div전체 .다섯칸')[반복].children[2].innerHTML=출2;
    document.querySelectorAll('.다섯칸div전체 .다섯칸')[반복].children[3].innerHTML=출3이상;
    document.querySelectorAll('.다섯칸div전체 .다섯칸')[반복].children[4].innerHTML=이월;
  }
  if (회차index==당첨정보.length-1) {
    document.querySelectorAll('.다섯칸_있다면다음회차 .다섯칸')[0].children[0].innerHTML='';
    document.querySelectorAll('.다섯칸_있다면다음회차 .다섯칸')[0].children[1].innerHTML='';
    document.querySelectorAll('.다섯칸_있다면다음회차 .다섯칸')[0].children[2].innerHTML='';
    document.querySelectorAll('.다섯칸_있다면다음회차 .다섯칸')[0].children[3].innerHTML='';
    document.querySelectorAll('.다섯칸_있다면다음회차 .다섯칸')[0].children[4].innerHTML='';
    return;}
  for (var 반복=0; 반복<1; 반복++) {
    var _5주번호들배열='', 당번=[]; 전회차당번=[], _5주0출=[], _5주1출=[], _5주2출=[], _5주3출이상=[];
    for (var i=0; i<6; i++) {당번.push(당첨정보[회차index+1].children[2].innerHTML.split(',')[i]);}
    for (var i=0; i<6; i++) {전회차당번.push(당첨정보[회차index+1-1].children[2].innerHTML.split(',')[i]);}
    for (var i=0; i<5; i++) {_5주번호들배열+=당첨정보[회차index-5+i+1].children[2].innerHTML}
    _5주번호들배열=_5주번호들배열.substring(0,_5주번호들배열.length-1) //마지막 _ 하나 지움
    _5주번호들배열=_5주번호들배열.split(',');
    for (var i=0; i<45; i++) {
      if (_5주번호들배열.filter(번호 => 번호==i+1).length==0) {_5주0출.push(i+1)}
      if (_5주번호들배열.filter(번호 => 번호==i+1).length==1) {_5주1출.push(i+1)}
      if (_5주번호들배열.filter(번호 => 번호==i+1).length==2) {_5주2출.push(i+1)}
      if (_5주번호들배열.filter(번호 => 번호==i+1).length>=3) {_5주3출이상.push(i+1)}
    }
    var 이월=0, 출0=0, 출1=0, 출2=0, 출3이상=0;
    for (var i=0; i<6;i++) {출0+=_5주0출.filter(번호 => 번호==당번[i]).length;}
    for (var i=0; i<6;i++) {출1+=_5주1출.filter(번호 => 번호==당번[i]).length;}
    for (var i=0; i<6;i++) {출2+=_5주2출.filter(번호 => 번호==당번[i]).length;}
    for (var i=0; i<6;i++) {출3이상+=_5주3출이상.filter(번호 => 번호==당번[i]).length;}
    for (var i=0; i<6;i++) {이월+=전회차당번.filter(번호 => 번호==당번[i]).length;}
    document.querySelectorAll('.다섯칸_있다면다음회차 .다섯칸')[반복].children[0].innerHTML=출0;
    document.querySelectorAll('.다섯칸_있다면다음회차 .다섯칸')[반복].children[1].innerHTML=출1;
    document.querySelectorAll('.다섯칸_있다면다음회차 .다섯칸')[반복].children[2].innerHTML=출2;
    document.querySelectorAll('.다섯칸_있다면다음회차 .다섯칸')[반복].children[3].innerHTML=출3이상;
    document.querySelectorAll('.다섯칸_있다면다음회차 .다섯칸')[반복].children[4].innerHTML=이월;
  }


}
function 분석자료_변수_5주번호정보() {
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  var 당번=[]; 이웃=[], 당번이웃=[],_5주출=[], _5주0출=[],  _5주1출=[],  _5주2출=[], _5주3출이상=[], _5에서10주0출=[],_10에서15주0출=[];
  // _5주번호들배열='', _10주번호들배열='', _15주번호들배열='';
  if (회차index>28 && !isNaN(회차index)) {} else {console.log('회차index>29 && !isNaN(회차index); return') ;return;}
  var _5주번호들배열='';
  for (var i=0; i<5; i++) {_5주번호들배열+=당첨정보[회차index-4+i].children[2].innerHTML}
  _5주번호들배열=_5주번호들배열.substring(0,_5주번호들배열.length-1) //마지막 , 하나 지움
  _5주번호들배열=_5주번호들배열.split(',');
  //console.log('_5주번호들배열 : ' + _5주번호들배열);
  for (var i=0; i<6; i++) {당번.push(당첨정보[회차index].children[2].innerHTML.split(',')[i]);}
  for (var i=0; i<6; i++) {
    if (당번[i]==1) {
      var 검토2=45, 검토1=2;
      if(당번.filter(번호 => 번호==검토1).length==0) {이웃.push(검토1)};
      if(당번.filter(번호 => 번호==검토2).length==0) {이웃.push(검토2)};
    } else if (당번[i]==45) {
      var 검토2=44, 검토1=1;
      if(당번.filter(번호 => 번호==검토1).length==0) {이웃.push(검토1)};
      if(당번.filter(번호 => 번호==검토2).length==0) {이웃.push(검토2)};
    } else {
      var 검토2=parseInt(당번[i])+1, 검토1=parseInt(당번[i])-1;
      if(당번.filter(번호 => 번호==번호+1).length==0) {이웃.push(검토1)};
      if(당번.filter(번호 => 번호==번호-1).length==0) {이웃.push(검토2)};
    }
  }
  당번이웃=[...당번, ...이웃]
  for (var i=0; i<45; i++) {
    if (_5주번호들배열.filter(번호 => 번호==i+1).length>=1) {_5주출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length==0) {_5주0출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length==1) {_5주1출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length==2) {_5주2출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length>=3) {_5주3출이상.push(i+1)}
  }
  var _5에서10주번호들배열=[];
  for (var i=0; i<10; i++) {_5에서10주번호들배열+=당첨정보[회차index-9+i].children[2].innerHTML}
  _5에서10주번호들배열=_5에서10주번호들배열.substring(0,_5에서10주번호들배열.length-1) //마지막 , 하나 지움
  _5에서10주번호들배열=_5에서10주번호들배열.split(',');
  for (var i=0; i<45; i++) {
    if (_5에서10주번호들배열.filter(번호 => 번호==i+1).length==0) {_5에서10주0출.push(i+1)}
  }
  var _10에서15주번호들배열=[];
  for (var i=0; i<15; i++) {_10에서15주번호들배열+=당첨정보[회차index-14+i].children[2].innerHTML}
  _10에서15주번호들배열=_10에서15주번호들배열.substring(0,_10에서15주번호들배열.length-1) //마지막 , 하나 지움
  _10에서15주번호들배열=_10에서15주번호들배열.split(',');
  for (var i=0; i<45; i++) {
    if (_10에서15주번호들배열.filter(번호 => 번호==i+1).length==0) {_10에서15주0출.push(i+1)}
  }
  //        --- 값이 없으면 join이 안된다.
  if(당번.length>0) document.querySelector('#분석자료_변수_당번').innerHTML=당번.join(',');
  if(이웃.length>0) document.querySelector('#분석자료_변수_이웃').innerHTML=이웃.join(',');
  if(당번이웃.length>0) document.querySelector('#분석자료_변수_당번이웃').innerHTML=당번이웃.join(',');
  if(_5주출.length>0) document.querySelector('#분석자료_변수_5주출').innerHTML=_5주출.join(',');
  if(_5주0출.length>0) document.querySelector('#분석자료_변수_5주0출').innerHTML=_5주0출.join(',');
  if(_5주1출.length>0) document.querySelector('#분석자료_변수_5주1출').innerHTML=_5주1출.join(',');
  if(_5주2출.length>0) document.querySelector('#분석자료_변수_5주2출').innerHTML=_5주2출.join(',');
  if(_5주3출이상.length>0) document.querySelector('#분석자료_변수_5주3출이상').innerHTML=_5주3출이상.join(',');
  if(_10주0출.length>0) document.querySelector('#분석자료_변수_5에서10주0출').innerHTML=_5에서10주0출.join(',');
  if(_15주0출.length>0) document.querySelector('#분석자료_변수_10에서15주0출').innerHTML=_10에서15주0출.join(',');
  //표에 색칠하기
  for (var i=0; i<당번.length; i++) {
    var 색칠숫자들=document.querySelector('#분석자료_변수_당번').innerHTML.split(',');
    document.querySelector('#분석자료_표_상_js').children[1].children[1].children[색칠숫자들[i]-1].classList.add('분석자료_고정등번호색칠');
    document.querySelector('#분석자료_표_상_js').children[1].children[1].children[색칠숫자들[i]-1].innerHTML=색칠숫자들[i];
  }
  for (var i=0; i<이웃.length; i++) {
    var 색칠숫자들=document.querySelector('#분석자료_변수_이웃').innerHTML.split(',');
    document.querySelector('#분석자료_표_상_js').children[2].children[1].children[색칠숫자들[i]-1].classList.add('분석자료_고정등번호색칠');
    document.querySelector('#분석자료_표_상_js').children[2].children[1].children[색칠숫자들[i]-1].innerHTML=색칠숫자들[i];
  }
 
  for (var i=0; i<당번이웃.length; i++) {
    var 색칠숫자들=document.querySelector('#분석자료_변수_당번이웃').innerHTML.split(',');
    document.querySelector('#분석자료_표_상_js').children[3].children[1].children[색칠숫자들[i]-1].classList.add('분석자료_고정등번호색칠');
    document.querySelector('#분석자료_표_상_js').children[3].children[1].children[색칠숫자들[i]-1].innerHTML=색칠숫자들[i];
  }
  for (var i=0; i<_10에서15주0출.length; i++) {
    var 색칠숫자들=document.querySelector('#분석자료_변수_10에서15주0출').innerHTML.split(',');
    document.querySelector('#분석자료_표_상_js').children[4].children[1].children[색칠숫자들[i]-1].classList.add('분석자료_고정등번호색칠');
    document.querySelector('#분석자료_표_상_js').children[4].children[1].children[색칠숫자들[i]-1].innerHTML=색칠숫자들[i];
  }
  for (var i=0; i<_5에서10주0출.length; i++) {
    var 색칠숫자들=document.querySelector('#분석자료_변수_5에서10주0출').innerHTML.split(',');
    document.querySelector('#분석자료_표_상_js').children[5].children[1].children[색칠숫자들[i]-1].classList.add('분석자료_고정등번호색칠');
    document.querySelector('#분석자료_표_상_js').children[5].children[1].children[색칠숫자들[i]-1].innerHTML=색칠숫자들[i];
  }
  for (var i=0; i<_5주0출.length; i++) {
    var 색칠숫자들=document.querySelector('#분석자료_변수_5주0출').innerHTML.split(',');
    document.querySelector('#분석자료_표_상_js').children[6].children[1].children[색칠숫자들[i]-1].classList.add('분석자료_고정등번호색칠');
    document.querySelector('#분석자료_표_상_js').children[6].children[1].children[색칠숫자들[i]-1].innerHTML=색칠숫자들[i];
  }
  for (var i=0; i<_5주출.length; i++) {
    var 색칠숫자들=document.querySelector('#분석자료_변수_5주출').innerHTML.split(',');
    document.querySelector('#분석자료_표_상_js').children[7].children[1].children[색칠숫자들[i]-1].classList.add('분석자료_고정등번호색칠');
    document.querySelector('#분석자료_표_상_js').children[7].children[1].children[색칠숫자들[i]-1].innerHTML=색칠숫자들[i];
  }
  for (var i=0; i<_5주1출.length; i++) {
    var 색칠숫자들=document.querySelector('#분석자료_변수_5주1출').innerHTML.split(',');
    document.querySelector('#분석자료_표_상_js').children[8].children[1].children[색칠숫자들[i]-1].classList.add('분석자료_고정등번호색칠');
    document.querySelector('#분석자료_표_상_js').children[8].children[1].children[색칠숫자들[i]-1].innerHTML=색칠숫자들[i];
  }
  for (var i=0; i<_5주2출.length; i++) {
    var 색칠숫자들=document.querySelector('#분석자료_변수_5주2출').innerHTML.split(',');
    document.querySelector('#분석자료_표_상_js').children[9].children[1].children[색칠숫자들[i]-1].classList.add('분석자료_고정등번호색칠');
    document.querySelector('#분석자료_표_상_js').children[9].children[1].children[색칠숫자들[i]-1].innerHTML=색칠숫자들[i];
  }
  for (var i=0; i<_5주3출이상.length; i++) {
    var 색칠숫자들=document.querySelector('#분석자료_변수_5주3출이상').innerHTML.split(',');
    document.querySelector('#분석자료_표_상_js').children[10].children[1].children[색칠숫자들[i]-1].classList.add('분석자료_고정등번호색칠');
    document.querySelector('#분석자료_표_상_js').children[10].children[1].children[색칠숫자들[i]-1].innerHTML=색칠숫자들[i];
  }
  분석자료_변수_5주번호정보_내부_미출부터이월수개수_표_하();
}
function 당번_변수_5주번호정보() {
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  var 당번=[]; _5주출=[],_5주0출=[],  _5주1출=[],  _5주2출=[], _5주3출이상=[], _10주0출=[],_15주0출=[], _5주번호들배열='', _10주번호들배열='', _15주번호들배열='';
  if (회차index>28 && !isNaN(회차index)) {} else {console.log('회차index>29 && !isNaN(회차index); return') ;return;}
  for (var i=0; i<5; i++) {_5주번호들배열+=당첨정보[회차index-4+i].children[2].innerHTML}
  _5주번호들배열=_5주번호들배열.substring(0,_5주번호들배열.length-1) //마지막 , 하나 지움
  _5주번호들배열=_5주번호들배열.split(',');
  //console.log('_5주번호들배열 : ' + _5주번호들배열);
  for (var i=0; i<6; i++) {당번.push(당첨정보[회차index].children[2].innerHTML.split(',')[i]);}
  for (var i=0; i<45; i++) {
    if (_5주번호들배열.filter(번호 => 번호==i+1).length>=1) {_5주출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length==0) {_5주0출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length==1) {_5주1출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length==2) {_5주2출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length>=3) {_5주3출이상.push(i+1)}
  }
  for (var i=0; i<10; i++) {_10주번호들배열+=당첨정보[회차index-9+i].children[2].innerHTML}
  _10주번호들배열=_10주번호들배열.substring(0,_10주번호들배열.length-1) //마지막 _ 하나 지움
  _10주번호들배열=_10주번호들배열.split(',');
  for (var i=0; i<45; i++) {
    if (_10주번호들배열.filter(번호 => 번호==i+1).length==0) {_10주0출.push(i+1)}
  }
  for (var i=0; i<10; i++) {_15주번호들배열+=당첨정보[회차index-14+i].children[2].innerHTML}
  _15주번호들배열=_15주번호들배열.substring(0,_15주번호들배열.length-1) //마지막 _ 하나 지움
  _15주번호들배열=_15주번호들배열.split(',');
  for (var i=0; i<45; i++) {
    if (_15주번호들배열.filter(번호 => 번호==i+1).length==0) {_15주0출.push(i+1)}
  }
  //        --- 값이 없으면 join이 안된다.
  if(당번.length>0) document.querySelector('#당번_변수_당번').innerHTML=당번.join(',');
  if(_5주출.length>0) document.querySelector('#당번_변수_5주출').innerHTML=_5주출.join(',');
  if(_5주0출.length>0) document.querySelector('#당번_변수_5주0출').innerHTML=_5주0출.join(',');
  if(_5주1출.length>0) document.querySelector('#당번_변수_5주1출').innerHTML=_5주1출.join(',');
  if(_5주2출.length>0) document.querySelector('#당번_변수_5주2출').innerHTML=_5주2출.join(',');
  if(_5주3출이상.length>0) document.querySelector('#당번_변수_5주3출이상').innerHTML=_5주3출이상.join(',');
  if(_10주0출.length>0) document.querySelector('#당번_변수_10주0출').innerHTML=_10주0출.join(',');
  if(_15주0출.length>0) document.querySelector('#당번_변수_15주0출').innerHTML=_15주0출.join(',');
}
function 분석자료_변수_30주번호정보() {
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  var _30주번호들배열='', _30주0출=[], _30주1출=[], _30주2출=[], _30주3출=[], _30주4출=[], _30주5출=[];
  var _30주6출=[], _30주7출=[], _30주8출=[], _30주9출=[], _30주10출=[], _30주11출=[], _30주12출=[];
  if (회차index>28 && !isNaN(회차index)) {} else {console.log('회차index>29 && !isNaN(회차index); return') ;return;}
  for (var i=0; i<30; i++) {_30주번호들배열+=당첨정보[회차index-29+i].children[2].innerHTML}
  _30주번호들배열=_30주번호들배열.substring(0,_30주번호들배열.length-1) //마지막 , 하나 지움
  _30주번호들배열=_30주번호들배열.split(',');
  //console.log('_30주번호들배열 : ' + _30주번호들배열);
  for (var i=0; i<45; i++) {
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==0) {_30주0출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==1) {_30주1출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==2) {_30주2출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==3) {_30주3출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==4) {_30주4출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==5) {_30주5출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==6) {_30주6출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==7) {_30주7출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==8) {_30주8출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==9) {_30주9출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==10) {_30주10출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==11) {_30주11출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length>=12) {_30주12출.push(i+1)}
  }
  if(_30주0출.length>0) document.querySelector('#분석자료_변수_30주0출').innerHTML=_30주0출.join(',');
  if(_30주1출.length>0) document.querySelector('#분석자료_변수_30주1출').innerHTML=_30주1출.join(',');
  if(_30주2출.length>0) document.querySelector('#분석자료_변수_30주2출').innerHTML=_30주2출.join(',');
  if(_30주3출.length>0) document.querySelector('#분석자료_변수_30주3출').innerHTML=_30주3출.join(',');
  if(_30주4출.length>0) document.querySelector('#분석자료_변수_30주4출').innerHTML=_30주4출.join(',');
  if(_30주5출.length>0) document.querySelector('#분석자료_변수_30주5출').innerHTML=_30주5출.join(',');
  if(_30주6출.length>0) document.querySelector('#분석자료_변수_30주6출').innerHTML=_30주6출.join(',');
  if(_30주7출.length>0) document.querySelector('#분석자료_변수_30주7출').innerHTML=_30주7출.join(',');
  if(_30주8출.length>0) document.querySelector('#분석자료_변수_30주8출').innerHTML=_30주8출.join(',');
  if(_30주9출.length>0) document.querySelector('#분석자료_변수_30주9출').innerHTML=_30주9출.join(',');
  if(_30주10출.length>0) document.querySelector('#분석자료_변수_30주10출').innerHTML=_30주10출.join(',');
  if(_30주11출.length>0) document.querySelector('#분석자료_변수_30주11출').innerHTML=_30주11출.join(',');
  if(_30주12출.length>0) document.querySelector('#분석자료_변수_30주12출').innerHTML=_30주12출.join(',');
  //30주간 개수 기록하기
  var 아이디들_30주=[]; 
  var 아이디들=document.querySelectorAll('#분석자료변수_초기화시_30주 > div')
  for (var i=0; i<아이디들.length; i++) {아이디들_30주.push(아이디들[i].id)}
  for (var i=0; i<아이디들.length; i++) { //i=0 => #분석자료_변수_30주0출. 숫자들
    var 기록할숫자들=document.querySelector('#' + 아이디들_30주[i]).innerHTML.split(','); 
    if (기록할숫자들[0]) {//값이 없어도 length가 1인데 없으면 첫째값이 undefined이다
      for (var 기록=0; 기록<기록할숫자들.length; 기록++) {//숫자넣기
        document.querySelector('#분석자료_표_하_js').children[1].children[1].children[기록할숫자들[기록]-1].innerHTML=i;
      }
    }
  }
  //1_5주,,,26~30주
  for (var i=0; i<5; i++) {_5주번호들배열+=당첨정보[회차index-4+i].children[2].innerHTML}
  var 마이너스=-1;
  for (var 오주간반복=0; 오주간반복<6; 오주간반복++) {
    var _5주번호들배열='';
    마이너스+=5;
    for (var i=0; i<5; i++) {_5주번호들배열+=당첨정보[회차index-마이너스+i].children[2].innerHTML}
    _5주번호들배열=_5주번호들배열.substring(0,_5주번호들배열.length-1) //마지막 , 하나 지움
    _5주번호들배열=_5주번호들배열.split(',');
    for (var 사오반복=0; 사오반복<45; 사오반복++) {
      if (_5주번호들배열.filter(번호 => 번호==사오반복+1).length>0) {
        document.querySelector('#분석자료_표_하_js').children[1].children[오주간반복+2].children[사오반복].classList.add('분석자료_고정등번호색칠');
        document.querySelector('#분석자료_표_하_js').children[1].children[오주간반복+2].children[사오반복].innerHTML=_5주번호들배열.filter(번호 => 번호==사오반복+1).length;
      }
    }
  }
  //최근 30주 당번 색칠
  for (var 분석당번30개=0; 분석당번30개<30; 분석당번30개++) {
    var 당번=당첨정보[parseInt(회차index)-분석당번30개].children[2].innerHTML;
    var 당번=당번.substring(0,당번.length-1).split(',')
    for (var 당번반복=0; 당번반복<6; 당번반복++) {
      document.querySelector('#분석자료_표_하_js').children[1].children[분석당번30개+9].children[당번[당번반복]-1].classList.add('분석자료_고정등번호색칠');
      document.querySelector('#분석자료_표_하_js').children[1].children[분석당번30개+9].children[당번[당번반복]-1].innerHTML=당번[당번반복];
    }
  }
}
function 분석자료_삼십회표_js작성() {
  document.querySelector('#분석자료_삼십회표_js').innerHTML='';
  var 삼십회출45배열=[];
  var 요소=document.querySelector('#분석자료_표_하_js').children[1].children[1].children;
  for (var i=0; i<요소.length; i++) {삼십회출45배열.push(요소[i].innerHTML)}
  var 오주미출전체=[];
  var 요소=document.querySelector('#분석자료_변수_5주0출');
  if (요소.innerHTML!='') {
    for (var i=0; i<요소.innerHTML.split(',').length; i++) {
      오주미출전체.push(요소.innerHTML.split(',')[i])
    }
  }
  var 장미수=[];
  var 요소=document.querySelector('#분석자료_변수_5에서10주0출');
  if (요소.innerHTML!='') {
    for (var i=0; i<요소.innerHTML.split(',').length; i++) {
      장미수.push(요소.innerHTML.split(',')[i])
    }
  }
  var 오주미출전체set=new Set([...오주미출전체])
  var 장미수set=new Set([...장미수])
  var 오주미출만=오주미출전체set.difference(장미수set)
  오주미출만=[...오주미출만]
  var 출1=[];
  if (document.querySelector('#분석자료_변수_5주1출').innerHTML!='') {
    출1=document.querySelector('#분석자료_변수_5주1출').innerHTML.split(',');
  }
  var 출2=[];
  if (document.querySelector('#분석자료_변수_5주2출').innerHTML!='') {
    출2=document.querySelector('#분석자료_변수_5주2출').innerHTML.split(',');
  }
  var 출3이상=[];
  if (document.querySelector('#분석자료_변수_5주3출이상').innerHTML!='') {
    출3이상=document.querySelector('#분석자료_변수_5주3출이상').innerHTML.split(',');
  }
  //표만들기(머리글)
  var 최대값_30회출=Math.max(...삼십회출45배열);
  var 머리글=document.createElement('div');
  머리글.setAttribute('class','삼십회머리글div')
  var 가로한줄=document.createElement('div');
  for (var i=0; i<최대값_30회출+2; i++) {
    var div요소=document.createElement('div');
    if (i==0) {div요소.innerText='횟수'};
    if (i!=0) {div요소.innerText=i-1};
    가로한줄.appendChild(div요소);
  }
  머리글.appendChild(가로한줄);
  document.querySelector('#분석자료_삼십회표_js').appendChild(머리글);
  //표만들기 : 장미수 부분
  var 장미수div=document.createElement('div');
  장미수div.setAttribute('class','장미수div')
  var 가로폭 = new Array(최대값_30회출+1);//안의 숫자가 배열 개수다. 배열값이 누적되면 ','로 연결됨
  for (var i=0; i<장미수.length; i++) {
    var 삼십주출횟수= 삼십회출45배열[장미수[i]-1];
    //가로폭[삼십주출횟수] : 없으면(처음이면) undefined
    if (가로폭[삼십주출횟수]) {
      가로폭[삼십주출횟수]=가로폭[삼십주출횟수] + ',' + 장미수[i];
    } else {
      가로폭[삼십주출횟수]=장미수[i];
    }
  }
  var 세로몇줄인가=0;
  for (var i=0; i<가로폭.length; i++) {
    if (가로폭[i]) {
      if (가로폭[i].split(',').length > 세로몇줄인가) {세로몇줄인가=가로폭[i].split(',').length}
    }
  }
  //      빈 서식 만들기
  for (var 세로반복=0; 세로반복<세로몇줄인가; 세로반복++) {
    var 가로한줄=document.createElement('div');
    for (var i=0; i<최대값_30회출+2; i++) {
      var div요소=document.createElement('div');
      if (i==0) {div요소.innerText='장미'};
      가로한줄.appendChild(div요소);
    }
    장미수div.appendChild(가로한줄);
    document.querySelector('#분석자료_삼십회표_js').appendChild(장미수div);
  }
  //      빈 서식에 값 넣기
  for (var i=0; i<가로폭.length; i++) {
    if (가로폭[i]) {
      for (반복=0; 반복<가로폭[i].split(',').length; 반복++) {
        document.querySelectorAll('.장미수div > div')[반복].children[i+1].innerHTML=가로폭[i].split(',')[반복];
      }
    }
  }
  //표만들기 : 오주미출만 부분
  var 오주미출만div=document.createElement('div');
  오주미출만div.setAttribute('class','오주미출만div')
  var 가로폭 = new Array(최대값_30회출+1);//안의 숫자가 배열 개수다. 배열값이 누적되면 '_'로 연결됨
  for (var i=0; i<오주미출만.length; i++) {
    var 삼십주출횟수= 삼십회출45배열[오주미출만[i]-1];
    //가로폭[삼십주출횟수] : 없으면(처음이면) undefined
    if (가로폭[삼십주출횟수]) {
      가로폭[삼십주출횟수]=가로폭[삼십주출횟수] + ',' + 오주미출만[i];
    } else {
      가로폭[삼십주출횟수]=오주미출만[i];
    }
  }
  var 세로몇줄인가=0;
  for (var i=0; i<가로폭.length; i++) {
    if (가로폭[i]) {
      if (가로폭[i].split(',').length > 세로몇줄인가) {세로몇줄인가=가로폭[i].split(',').length}
    }
  }
  //      빈 서식 만들기
  for (var 세로반복=0; 세로반복<세로몇줄인가; 세로반복++) {
    var 가로한줄=document.createElement('div');
    for (var i=0; i<최대값_30회출+2; i++) {
      var div요소=document.createElement('div');
      if (i==0) {div요소.innerText='출0'};
      가로한줄.appendChild(div요소);
    }
    오주미출만div.appendChild(가로한줄);
    document.querySelector('#분석자료_삼십회표_js').appendChild(오주미출만div);
  }
  //      빈 서식에 값 넣기
  for (var i=0; i<가로폭.length; i++) {
    if (가로폭[i]) {
      for (반복=0; 반복<가로폭[i].split(',').length; 반복++) {
        document.querySelectorAll('.오주미출만div > div')[반복].children[i+1].innerHTML=가로폭[i].split(',')[반복];
      }
    }
  }
  //표만들기 : 출1 부분
  var 출1div=document.createElement('div');
  출1div.setAttribute('class','출1div')
  var 가로폭 = new Array(최대값_30회출+1);//안의 숫자가 배열 개수다. 배열값이 누적되면 '_'로 연결됨
  for (var i=0; i<출1.length; i++) {
    var 삼십주출횟수= 삼십회출45배열[출1[i]-1];
    //가로폭[삼십주출횟수] : 없으면(처음이면) undefined
    if (가로폭[삼십주출횟수]) {
      가로폭[삼십주출횟수]=가로폭[삼십주출횟수] + ',' + 출1[i];
    } else {
      가로폭[삼십주출횟수]=출1[i];
    }
  }
  var 세로몇줄인가=0;
  for (var i=0; i<가로폭.length; i++) {
    if (가로폭[i]) {
      if (가로폭[i].split(',').length > 세로몇줄인가) {세로몇줄인가=가로폭[i].split(',').length}
    }
  }
  //      빈 서식 만들기
  for (var 세로반복=0; 세로반복<세로몇줄인가; 세로반복++) {
    var 가로한줄=document.createElement('div');
    for (var i=0; i<최대값_30회출+2; i++) {
      var div요소=document.createElement('div');
      if (i==0) {div요소.innerText='출1'};
      가로한줄.appendChild(div요소);
    }
    출1div.appendChild(가로한줄);
    document.querySelector('#분석자료_삼십회표_js').appendChild(출1div);
  }
  //      빈 서식에 값 넣기
  for (var i=0; i<가로폭.length; i++) {
    if (가로폭[i]) {
      for (반복=0; 반복<가로폭[i].split(',').length; 반복++) {
        document.querySelectorAll('.출1div > div')[반복].children[i+1].innerHTML=가로폭[i].split(',')[반복];
      }
    }
  }
  //표만들기 : 출2 부분
  var 출2div=document.createElement('div');
  출2div.setAttribute('class','출2div')
  var 가로폭 = new Array(최대값_30회출+1);//안의 숫자가 배열 개수다. 배열값이 누적되면 '_'로 연결됨
  for (var i=0; i<출2.length; i++) {
    var 삼십주출횟수= 삼십회출45배열[출1[i]-1];
    //가로폭[삼십주출횟수] : 없으면(처음이면) undefined
    if (가로폭[삼십주출횟수]) {
      가로폭[삼십주출횟수]=가로폭[삼십주출횟수] + ',' + 출2[i];
    } else {
      가로폭[삼십주출횟수]=출2[i];
    }
  }
  var 세로몇줄인가=0;
  for (var i=0; i<가로폭.length; i++) {
    if (가로폭[i]) {
      if (가로폭[i].split(',').length > 세로몇줄인가) {세로몇줄인가=가로폭[i].split(',').length}
    }
  }
  //      빈 서식 만들기
  for (var 세로반복=0; 세로반복<세로몇줄인가; 세로반복++) {
    var 가로한줄=document.createElement('div');
    for (var i=0; i<최대값_30회출+2; i++) {
      var div요소=document.createElement('div');
      if (i==0) {div요소.innerText='출2'};
      가로한줄.appendChild(div요소);
    }
    출2div.appendChild(가로한줄);
    document.querySelector('#분석자료_삼십회표_js').appendChild(출2div);
  }
  //      빈 서식에 값 넣기
  for (var i=0; i<가로폭.length; i++) {
    if (가로폭[i]) {
      for (반복=0; 반복<가로폭[i].split(',').length; 반복++) {
        document.querySelectorAll('.출2div > div')[반복].children[i+1].innerHTML=가로폭[i].split(',')[반복];
      }
    }
  }
    //표만들기 : 출3이상 부분
    var 출3이상div=document.createElement('div');
    출3이상div.setAttribute('class','출3이상div')
    var 가로폭 = new Array(최대값_30회출+1);//안의 숫자가 배열 개수다. 배열값이 누적되면 '_'로 연결됨
    for (var i=0; i<출3이상.length; i++) {
      var 삼십주출횟수= 삼십회출45배열[출1[i]-1];
      //가로폭[삼십주출횟수] : 없으면(처음이면) undefined
      if (가로폭[삼십주출횟수]) {
        가로폭[삼십주출횟수]=가로폭[삼십주출횟수] + ',' + 출3이상[i];
      } else {
        가로폭[삼십주출횟수]=출3이상[i];
      }
    }
    var 세로몇줄인가=0;
    for (var i=0; i<가로폭.length; i++) {
      if (가로폭[i]) {
        if (가로폭[i].split(',').length > 세로몇줄인가) {세로몇줄인가=가로폭[i].split(',').length}
      }
    }
    //      빈 서식 만들기
    for (var 세로반복=0; 세로반복<세로몇줄인가; 세로반복++) {
      var 가로한줄=document.createElement('div');
      for (var i=0; i<최대값_30회출+2; i++) {
        var div요소=document.createElement('div');
        if (i==0) {div요소.innerText='출3↑'};
        가로한줄.appendChild(div요소);
      }
      출3이상div.appendChild(가로한줄);
      document.querySelector('#분석자료_삼십회표_js').appendChild(출3이상div);
    }
    //      빈 서식에 값 넣기
    for (var i=0; i<가로폭.length; i++) {
      if (가로폭[i]) {
        for (반복=0; 반복<가로폭[i].split(',').length; 반복++) {
          document.querySelectorAll('.출3이상div > div')[반복].children[i+1].innerHTML=가로폭[i].split(',')[반복];
        }
      }
    }




  return;
  var 장미수div=document.createElement('div');
  var 가로한줄=document.createElement('div');
  var 가로몇줄인가=0;
  for (var i=0; i<최대값_30회출+2; i++) {

  }
  머리글.appendChild(가로한줄);
  document.querySelector('#분석자료_삼십회표_js').appendChild(머리글);


  //장미수, 오주미출만, 1출, 2출, 3출이상
  return;
  document.querySelector('#분석자료_삼십회표_js').appendChild(머리글);
  if (장미수.length>0) {document.querySelector('#분석자료_삼십회표_js').appendChild(장미수div);}
  if (오주미출만.length>0) {document.querySelector('#분석자료_삼십회표_js').appendChild(오주미출만div);}
  if (출1.length>0) {document.querySelector('#분석자료_삼십회표_js').appendChild(출1div);}
  if (출2.length>0) {document.querySelector('#분석자료_삼십회표_js').appendChild(출2div);}
  if (출3이상.length>0) {document.querySelector('#분석자료_삼십회표_js').appendChild(출3이상div);}


}
function 당번_변수_30주번호정보() { 
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  var _30주번호들배열='', _30주0출=[], _30주1출=[], _30주2출=[], _30주3출=[], _30주4출=[], _30주5출=[];
  var _30주6출=[], _30주7출=[], _30주8출=[], _30주9출=[], _30주10출=[], _30주11출=[], _30주12출=[];
  if (회차index>28 && !isNaN(회차index)) {} else {console.log('회차index>29 && !isNaN(회차index); return') ;return;}
  for (var i=0; i<30; i++) {_30주번호들배열+=당첨정보[회차index-29+i].children[2].innerHTML}
  _30주번호들배열=_30주번호들배열.substring(0,_30주번호들배열.length-1) //마지막 , 하나 지움
  _30주번호들배열=_30주번호들배열.split(',');
  //console.log('_30주번호들배열 : ' + _30주번호들배열);
  for (var i=0; i<45; i++) {
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==0) {_30주0출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==1) {_30주1출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==2) {_30주2출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==3) {_30주3출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==4) {_30주4출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==5) {_30주5출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==6) {_30주6출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==7) {_30주7출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==8) {_30주8출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==9) {_30주9출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==10) {_30주10출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==11) {_30주11출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length>=12) {_30주12출.push(i+1)}
  }
  if(_30주0출.length>0) document.querySelector('#당번_변수_30주0출').innerHTML=_30주0출.join(',');
  if(_30주1출.length>0) document.querySelector('#당번_변수_30주1출').innerHTML=_30주1출.join(',');
  if(_30주2출.length>0) document.querySelector('#당번_변수_30주2출').innerHTML=_30주2출.join(',');
  if(_30주3출.length>0) document.querySelector('#당번_변수_30주3출').innerHTML=_30주3출.join(',');
  if(_30주4출.length>0) document.querySelector('#당번_변수_30주4출').innerHTML=_30주4출.join(',');
  if(_30주5출.length>0) document.querySelector('#당번_변수_30주5출').innerHTML=_30주5출.join(',');
  if(_30주6출.length>0) document.querySelector('#당번_변수_30주6출').innerHTML=_30주6출.join(',');
  if(_30주7출.length>0) document.querySelector('#당번_변수_30주7출').innerHTML=_30주7출.join(',');
  if(_30주8출.length>0) document.querySelector('#당번_변수_30주8출').innerHTML=_30주8출.join(',');
  if(_30주9출.length>0) document.querySelector('#당번_변수_30주9출').innerHTML=_30주9출.join(',');
  if(_30주10출.length>0) document.querySelector('#당번_변수_30주10출').innerHTML=_30주10출.join(',');
  if(_30주11출.length>0) document.querySelector('#당번_변수_30주11출').innerHTML=_30주11출.join(',');
  if(_30주12출.length>0) document.querySelector('#당번_변수_30주12출').innerHTML=_30주12출.join(',');
}
function 옵션생성() {
  var 당첨정보=document.querySelectorAll('.당첨정보');
  var 옵션html;
  for (var i = 0; i < 당첨정보.length; i++) {
      옵션html = '<option>' + 당첨정보[i].children[0].innerHTML + '</option>' + 옵션html
  }
  document.querySelector('#당번_회차select').innerHTML=옵션html;
  document.querySelector('#분석자료_회차select').innerHTML=옵션html;
}
function 분석자료_변수_초기화() {
  for (var i=0; i<document.querySelectorAll('#분석자료변수_초기화시_5주 > div').length; i++) {
    document.querySelectorAll('#분석자료변수_초기화시_5주 > div')[i].innerHTML=''
  }
  for (var i=0; i<document.querySelectorAll('#분석자료변수_초기화시_30주 > div').length; i++) {
    document.querySelectorAll('#분석자료변수_초기화시_30주 > div')[i].innerHTML=''
  }
}
function 당번_변수_초기화() {
  for (var i=0; i<document.querySelectorAll('#당번변수_초기화시_5주 > div').length; i++) {
    document.querySelectorAll('#당번변수_초기화시_5주 > div')[i].innerHTML=''
  }
}
function 분석자료_고정등번호색칠_클래스지우기() {
  var 반복개수=document.querySelectorAll('.분석자료_고정등번호색칠').length;
  for (var i=0; i<반복개수; i++) {
    //지울때마다 하나씩 줄어들기 때문에 [0]만 계속 지우면 된다.
    document.querySelectorAll('.분석자료_고정등번호색칠')[0].innerHTML='';
    document.querySelectorAll('.분석자료_고정등번호색칠')[0].classList.remove('분석자료_고정등번호색칠');
  }
}
function 카테고리보기() {
  for (var i=0; i<document.querySelectorAll('.카테고리보기input').length; i++) {
    if (!document.querySelectorAll('.카테고리보기input')[i].checked) {
      document.querySelector('#' + document.querySelectorAll('.카테고리보기input')[i].title).classList.add('d-none')
    }
  }
}
리스너_분석자료.addEventListener('click',리스너_분석자료_click)

  
var 버튼45감싸기=document.querySelector('#버튼45감싸기');
var 버튼45오른쪽단독=document.querySelector('#버튼45오른쪽단독');
function 버튼45감싸기_click(e) {
  console.log('버튼45감싸기_click(e)')
  if (e.target.parentElement.id=='끝수' && e.target.nodeName=='BUTTON') {
    console.log('  버튼45감싸기_click(e) -- 끝수 버튼 클릭')
    document.querySelector('#클릭번호들').innerHTML=document.querySelector('#끝수' + e.target.innerHTML).innerHTML;
    클릭번호들처리();
  }
}
function 버튼45오른쪽단독_click(e) {
  console.log('버튼45오른쪽단독_click(e)')
}
function 클릭번호들처리() {
  var 클릭번호들배열=document.querySelector('#클릭번호들').innerHTML.split(',');
  if (클릭번호들배열[0]=='') {console.log('클릭번호들배열[0]==공백 : ' + 클릭번호들배열[0]=='');return;}
  document.querySelector('#버튼45오른쪽단독_안에_클릭번호들').parentElement.children[0].children[0].innerHTML=클릭번호들배열.length;
  for (var i=0; i<45; i++) {
    document.querySelectorAll('#버튼45오른쪽단독_안에_클릭번호들 > div')[i].innerHTML='';
    document.querySelectorAll('#버튼45오른쪽단독_안에_클릭번호들 > div')[i].classList.remove('색칠')
  }
  for (var i=0; i<클릭번호들배열.length; i++) {
    document.querySelectorAll('#버튼45오른쪽단독_안에_클릭번호들 > div')[클릭번호들배열[i]-1].innerHTML=클릭번호들배열[i];
    document.querySelectorAll('#버튼45오른쪽단독_안에_클릭번호들 > div')[클릭번호들배열[i]-1].classList.add('색칠');
  }
  //누적체크 : 색칠할번호들 합침
  if(document.querySelector('#keep').checked) {
    var 체크된곳번호들=document.querySelector('#keep번호들');
    var 색칠할곳=document.querySelector('#버튼45오른쪽단독_안에_keep');
    var 숫자기록할곳=색칠할곳.parentElement.children[0].children[0];
  }
  if(document.querySelector('#셑팅1').checked) {
    var 체크된곳번호들=document.querySelector('#셑팅1번호들');
    var 색칠할곳=document.querySelector('#버튼45오른쪽단독_안에_셑팅1_번호들');
    var 숫자기록할곳=색칠할곳.parentElement.children[0].children[0];
  }
  if(document.querySelector('#셑팅2').checked) {
    var 체크된곳번호들=document.querySelector('#셑팅2번호들');
    var 색칠할곳=document.querySelector('#버튼45오른쪽단독_안에_셑팅2_번호들');
    var 숫자기록할곳=색칠할곳.parentElement.children[0].children[0];
  }
  
  //숫자기록할곳의 초기화가 있어야되나???
  if (document.querySelector('#누적').checked) {
    var 기존배열=체크된곳번호들.innerHTML.split(',');
    if (기존배열[0]!='') {var 누적배열=new Set([...클릭번호들배열,...기존배열])}
    if (기존배열[0]=='') {var 누적배열=new Set([...클릭번호들배열])}
    누적배열=[...누적배열]
    for (var i=0; i<누적배열.length; i++) {
      색칠할곳.children[누적배열[i]-1].innerHTML=누적배열[i];
      색칠할곳.children[누적배열[i]-1].classList.add('색칠');
    }
    숫자기록할곳.innerHTML=누적배열.length;
  }
}
function 킵_보기숨기기(e) {
  var 버튼들=document.querySelectorAll('.설명_왼쪽div_버튼5개 > button');
  if (e.classList.contains('js숨김')) {e.classList.remove('js숨김')} else {e.classList.add('js숨김')}
  for (var i=0; i<버튼들.length; i++) {
    if (버튼들[i].classList.contains('js숨김')) {
      document.querySelectorAll('.설명_첫번째div > .설명_가로한줄')[i].classList.add('d-none')
    } else {
      document.querySelectorAll('.설명_첫번째div > .설명_가로한줄')[i].classList.remove('d-none')
    }
  }
  
}
function 색칠할번호들_clear() {
  document.querySelector('#클릭번호들').innerHTML='';
  버튼45관련만들기();

}
function 셑팅토글(e) {
  console.log('셑팅토글(e)')
  e.checked=true;
  if (e.id=='keep') {
    document.querySelector('#셑팅1').checked=false;
    document.querySelector('#셑팅2').checked=false;
  }
  if (e.id=='셑팅1') {
    document.querySelector('#keep').checked=false;
    document.querySelector('#셑팅2').checked=false;
  }
  if (e.id=='셑팅2') {
    document.querySelector('#keep').checked=false;
    document.querySelector('#셑팅1').checked=false;
  }
}
  function mousedownOrTouchstart(e) {
    // 터치 이벤트인지 마우스 이벤트인지 확인
    var isTouchEvent = e.type === 'touchstart';
    var target=document.querySelector('#버튼45감싸기');
    var isDragging = true;
    var 처음타겟TOP숫자 = parseInt(target.style.top.replace(/px/g, '')) || 0;
    var 처음타겟LEFT숫자 = parseInt(target.style.left.replace(/px/g, '')) || 0;
    //처음타겟TOP숫자, 처음타겟LEFT숫자 : 소수점자리가 큰 숫자로 바뀌는 것
    //var 처음타겟TOP숫자 = parseInt(target.style.top.replace(/[^0-9]/g, '')) || 0;
    //var 처음타겟LEFT숫자 = parseInt(target.style.left.replace(/[^0-9]/g, '')) || 0;
    var 첫마우스y = isTouchEvent ? e.touches[0].clientY : e.clientY;
    var 첫마우스x = isTouchEvent ? e.touches[0].clientX : e.clientX;
    // 부모 요소의 경계를 확인 (마우스이벤트예제div)
    var 부모_경계 = 버튼45감싸기.getBoundingClientRect();
    var 상자_너비 = target.offsetWidth;
    var 상자_높이 = target.offsetHeight;
    function 마우스moveOrTouchmove(e) {
        if (!isDragging) return;
        // 화면 스크롤 방지 (모바일)
        if (isTouchEvent) {
            e.preventDefault();//이거 에러나는듯, 검색 : preventDefault
            //window.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', 마우스moveOrTouchmove, {passive: false});
        }
        // 터치 이벤트인지 마우스 이벤트인지 확인
        var move_y = isTouchEvent ? e.touches[0].clientY : e.clientY;
        var move_x = isTouchEvent ? e.touches[0].clientX : e.clientX;
        var 첫마우스에서y이동거리 = move_y - 첫마우스y;
        var 첫마우스에서x이동거리 = move_x - 첫마우스x;
        // 새로운 위치 계산
        var 새로운_상자_위치_y = 처음타겟TOP숫자 + 첫마우스에서y이동거리;
        var 새로운_상자_위치_x = 처음타겟LEFT숫자 + 첫마우스에서x이동거리;
        // 경계 조건 설정 (상자 위치가 부모 요소를 벗어나지 않도록)
        if (새로운_상자_위치_y < 0) {
            새로운_상자_위치_y = 0;
        }
        if (새로운_상자_위치_x < 0) {
            새로운_상자_위치_x = 0;
        }
        // 상자 위치 적용
        target.style.top = 새로운_상자_위치_y + 'px';
        target.style.left = 새로운_상자_위치_x + 'px';
    }
    function 마우스upOrTouchend() {
        if (!isDragging) return;
        isDragging = false;
        // 이벤트 제거
        window.removeEventListener(isTouchEvent ? 'touchmove' : 'mousemove', 마우스moveOrTouchmove);
        window.removeEventListener(isTouchEvent ? 'touchend' : 'mouseup', 마우스upOrTouchend);
    }
    // 이벤트 추가
    window.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', 마우스moveOrTouchmove, {passive: false});
    window.addEventListener(isTouchEvent ? 'touchend' : 'mouseup', 마우스upOrTouchend);
  }
  // mousedown과 touchstart 이벤트 모두 처리
  function mousedownOrTouchstart2(e) {
    // 터치 이벤트인지 마우스 이벤트인지 확인
    var isTouchEvent = e.type === 'touchstart';
    var target=document.querySelector('#버튼45오른쪽단독');
    var isDragging = true;
    var 처음타겟TOP숫자 = parseInt(target.style.top.replace(/px/g, '')) || 0;
    var 처음타겟LEFT숫자 = parseInt(target.style.left.replace(/px/g, '')) || 0;
    //처음타겟TOP숫자, 처음타겟LEFT숫자 : 소수점자리가 큰 숫자로 바뀌는 것
    //var 처음타겟TOP숫자 = parseInt(target.style.top.replace(/[^0-9]/g, '')) || 0;
    //var 처음타겟LEFT숫자 = parseInt(target.style.left.replace(/[^0-9]/g, '')) || 0;
    var 첫마우스y = isTouchEvent ? e.touches[0].clientY : e.clientY;
    var 첫마우스x = isTouchEvent ? e.touches[0].clientX : e.clientX;
    // 부모 요소의 경계를 확인 (마우스이벤트예제div)
    var 부모_경계 = 버튼45감싸기.getBoundingClientRect();
    var 상자_너비 = target.offsetWidth;
    var 상자_높이 = target.offsetHeight;
    function 마우스moveOrTouchmove(e) {
        if (!isDragging) return;
        // 화면 스크롤 방지 (모바일)
        if (isTouchEvent) {
            e.preventDefault();//이거 에러나는듯, 검색 : preventDefault
            //window.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', 마우스moveOrTouchmove, {passive: false});
        }
        // 터치 이벤트인지 마우스 이벤트인지 확인
        var move_y = isTouchEvent ? e.touches[0].clientY : e.clientY;
        var move_x = isTouchEvent ? e.touches[0].clientX : e.clientX;
        var 첫마우스에서y이동거리 = move_y - 첫마우스y;
        var 첫마우스에서x이동거리 = move_x - 첫마우스x;
        // 새로운 위치 계산
        var 새로운_상자_위치_y = 처음타겟TOP숫자 + 첫마우스에서y이동거리;
        var 새로운_상자_위치_x = 처음타겟LEFT숫자 + 첫마우스에서x이동거리;
        // 경계 조건 설정 (상자 위치가 부모 요소를 벗어나지 않도록)
        if (새로운_상자_위치_y < 0) {
            새로운_상자_위치_y = 0;
        }
        if (새로운_상자_위치_x < 0) {
            새로운_상자_위치_x = 0;
        }
        // 상자 위치 적용
        target.style.top = 새로운_상자_위치_y + 'px';
        target.style.left = 새로운_상자_위치_x + 'px';
    }
    function 마우스upOrTouchend() {
        if (!isDragging) return;
        isDragging = false;
        // 이벤트 제거
        window.removeEventListener(isTouchEvent ? 'touchmove' : 'mousemove', 마우스moveOrTouchmove);
        window.removeEventListener(isTouchEvent ? 'touchend' : 'mouseup', 마우스upOrTouchend);
    }
    // 이벤트 추가
    window.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', 마우스moveOrTouchmove, {passive: false});
    window.addEventListener(isTouchEvent ? 'touchend' : 'mouseup', 마우스upOrTouchend);
  }
  // mousedown과 touchstart 이벤트 모두 처리
  버튼45감싸기.addEventListener('mousedown', mousedownOrTouchstart);
  버튼45감싸기.addEventListener('touchstart', mousedownOrTouchstart);
  버튼45감싸기.addEventListener('click', 버튼45감싸기_click);
  버튼45오른쪽단독.addEventListener('mousedown', mousedownOrTouchstart2);
  버튼45오른쪽단독.addEventListener('touchstart', mousedownOrTouchstart2);
  버튼45오른쪽단독.addEventListener('click', 버튼45감싸기_click);



  //메모div내_집구조전체div가있을때만작동하는것.addEventListener('click',메모div내_집구조전체);
