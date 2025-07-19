$('#당번숨김_안에_저장중').append($('#당번숨김_안에_기록중').html());
document.querySelector('#당번숨김_안에_저장중').innerHTML=document.querySelector('#당번숨김_안에_저장중').innerHTML.replace(/\n/g, '');// \n 제거
document.querySelector('#당번숨김_안에_저장중').innerHTML=document.querySelector('#당번숨김_안에_저장중').innerHTML.replace(/\s*/g, '');// 공백 제거
check_초기설정();
회차select옵션생성();
고정html_구조생성();
var 설정유형='당번' //당번 또는 분석
var 최근회차=document.querySelectorAll('#당번_회차select option').length-1;
var 아이디='당번_회차select';
var 회차=document.querySelectorAll('#당번_회차select option').length-1;
회차change설정(); //처음에 e를 인식못하여서...
var 바디=document.querySelector('body');



function 연습() {
  let arr=[1,2,3]
  let arr2=[1,2,3]
  console.log(arr + arr2);
}
function 색칠_1_동작설정() {
}
function 색칠_2_설정대로색칠동작() {
}

function 회차change설정() {
  if (아이디=='당번플러스') {if (회차>최근회차) {alert('최근회차입니다');return;}}
  if (아이디=='분석플러스') {if (회차>최근회차) {alert('최근회차입니다');return;}}

  if (설정유형=='당번') {document.querySelector('#당번_회차select').value=회차;}
  if (설정유형=='분석') {document.querySelector('#분석자료_회차select').value=회차;}
  var 범용당번배열=$('#당번숨김_안에_저장중').html().split(','); 범용당번배열.pop(); //마지막 배열값 제거(빈거)

  var 당번=[],_5주출=[],_5주0출=[],_5주1출=[],_5주2출=[], _5주3출이상=[], _10주0출=[],_15주0출=[];
  var 삼십_00=[],삼십_01=[],삼십_02=[],삼십_03=[],삼십_04=[],삼십_05=[],삼십_06=[],삼십_07=[],삼십_08=[],삼십_09=[],삼십_10=[],삼십_11=[],삼십_12=[];
  var 삼십주번호들=[], 오주번호들=[], 십주번호들=[], 십오주번호들=[];
  for (var i=0; i<30; i++) {
    for (var 추출=2; 추출<8; 추출++) {
      if (i==0) {당번.push(범용당번배열[Number(회차)-i].split('_')[추출].trim())}
      if (i<5) {오주번호들.push(범용당번배열[Number(회차)-i].split('_')[추출].trim())}
      if (i<10) {십주번호들.push(범용당번배열[Number(회차)-i].split('_')[추출].trim())}
      if (i<15) {십오주번호들.push(범용당번배열[Number(회차)-i].split('_')[추출].trim())}
      삼십주번호들.push(범용당번배열[Number(회차)-i].split('_')[추출].trim())      
    }
  }
  for (i=0; i<45; i++) {
    var 오주출개수=오주번호들.filter(번호 => 번호==(i+1)).length;
    var 십주0출개수=십주번호들.filter(번호 => 번호==(i+1)).length;
    var 십오주0출개수=십오주번호들.filter(번호 => 번호==(i+1)).length;
    var 삼십주출개수=삼십주번호들.filter(번호 => 번호==(i+1)).length;
    if (오주출개수==0) {_5주0출.push((i+1))}
    if (오주출개수>0) {_5주출.push((i+1))}
    if (오주출개수==1) {_5주1출.push((i+1))}
    if (오주출개수==2) {_5주2출.push((i+1))}
    if (오주출개수>2) {_5주3출이상.push((i+1))}
    if (십주0출개수==0) {_10주0출.push((i+1))}
    if (십오주0출개수==0) {_15주0출.push((i+1))}
    if (삼십주출개수==0) {삼십_00.push((i+1))}
    if (삼십주출개수==1) {삼십_01.push((i+1))}
    if (삼십주출개수==2) {삼십_02.push((i+1))}
    if (삼십주출개수==3) {삼십_03.push((i+1))}
    if (삼십주출개수==4) {삼십_04.push((i+1))}
    if (삼십주출개수==5) {삼십_05.push((i+1))}
    if (삼십주출개수==6) {삼십_06.push((i+1))}
    if (삼십주출개수==7) {삼십_07.push((i+1))}
    if (삼십주출개수==8) {삼십_08.push((i+1))}
    if (삼십주출개수==9) {삼십_09.push((i+1))}
    if (삼십주출개수==10) {삼십_10.push((i+1))}
    if (삼십주출개수==11) {삼십_11.push((i+1))}
    if (삼십주출개수==12) {삼십_12.push((i+1))}
  }
  if (설정유형=='당번') {
    //다음회차 위치
    if (범용당번배열[회차+1]) {
      for (var i=0; i<8; i++) {
        if (i==0) {document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML=범용당번배열[회차+1].split('_')[i]} 
        if (i>0) {document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML=범용당번배열[회차+1].split('_')[i+1]} 
      }
    } else {
      for (var i=0; i<8; i++) {
        document.querySelectorAll('#당번_다음회차 > div > div > div')[i].innerHTML='_';
      }
    }
    //5주변수, 30주변수 넣기
    document.querySelector('#당번_변수_당번').innerHTML=당번.join(',');
    document.querySelector('#당번_변수_이웃').innerHTML=당번.join(',');
    document.querySelector('#당번_변수_당번이웃').innerHTML=당번.join(',');
    document.querySelector('#당번_변수_5주출').innerHTML=_5주출.join(',');
    document.querySelector('#당번_변수_5주0출').innerHTML=_5주0출.join(',');
    document.querySelector('#당번_변수_5주1출').innerHTML=_5주1출.join(',');
    document.querySelector('#당번_변수_5주2출').innerHTML=_5주2출.join(',');
    document.querySelector('#당번_변수_5주3출').innerHTML=_5주3출이상.join(',');
    document.querySelector('#당번_변수_10주0출').innerHTML=_10주0출.join(',');
    document.querySelector('#당번_변수_15주0출').innerHTML=_15주0출.join(',');
    document.querySelector('#당번_변수_30주0출').innerHTML=삼십_00.join(',');
    document.querySelector('#당번_변수_30주1출').innerHTML=삼십_01.join(',');
    document.querySelector('#당번_변수_30주2출').innerHTML=삼십_02.join(',');
    document.querySelector('#당번_변수_30주3출').innerHTML=삼십_03.join(',');
    document.querySelector('#당번_변수_30주4출').innerHTML=삼십_04.join(',');
    document.querySelector('#당번_변수_30주5출').innerHTML=삼십_05.join(',');
    document.querySelector('#당번_변수_30주6출').innerHTML=삼십_06.join(',');
    document.querySelector('#당번_변수_30주7출').innerHTML=삼십_07.join(',');
    document.querySelector('#당번_변수_30주8출').innerHTML=삼십_08.join(',');
    document.querySelector('#당번_변수_30주9출').innerHTML=삼십_09.join(',');
    document.querySelector('#당번_변수_30주10출').innerHTML=삼십_10.join(',');
    document.querySelector('#당번_변수_30주11출').innerHTML=삼십_11.join(',');
    document.querySelector('#당번_변수_30주12출').innerHTML=삼십_12.join(',');
    //오른쪽에 오주관련개수 넣기, 30주관련 개수 넣기

    //30칸 위치
    for (var 삼십회=0; 삼십회<30; 삼십회++) {
      for (var i=0; i<8; i++) {
        if (i==0) {document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십회+1) + ') > div > div')[i].innerHTML=범용당번배열[회차-삼십회].split('_')[i]} 
        if (i>0) {document.querySelectorAll('#당번_불러온당첨정보 > div:nth-of-type(' + (삼십회+1) + ') > div > div')[i].innerHTML=범용당번배열[회차-삼십회].split('_')[i+1]} 
      }
    }

    
    
  }



}


function 고정html_구조생성() {
  const 당번한줄html=`<div><div class="당번회차" style="display:inline-block"><div style="display:inline-block"></div></div><div 
  class="당번만" style="display:inline-block"><div></div><div></div><div></div><div></div><div></div><div></div></div><div 
  class="보볼" style="display:inline-block"><div></div></div></div>`
  document.querySelector('#당번_다음회차').innerHTML=당번한줄html;
  document.querySelector('#분석자료_다음회차').innerHTML=당번한줄html;  
  for (var i=0; i<30; i++) {
  document.querySelector('#당번_불러온당첨정보').innerHTML+=당번한줄html;
  }
}

function 이동하기() {
  const $from = $('#이동할div리스트 .active'), $to = $('#이동할위치div리스트 .active');
  if (!$from.length || !$to.length) return alert('둘다선택되어야함');
  if ($from.text() === $to.text()) return alert('둘은달라야함');
  const f = $from.text(), t = $to.text(), dir = $('#앞에').prop('checked') ? 'Before' : 'After';
  console.log(`${f}, ${t}, 어디로 : ${dir === 'Before' ? '앞에' : '뒤에'}`);
  $('#' + f)[`insert${dir}`]('#' + t);
}
function 이동클릭관련(e) {
  e.classList.contains('active') ? e.classList.remove('active') :
    (e.parentElement.querySelector('.active')?.classList.remove('active'), e.classList.add('active'));
}
function 코드셑팅(e) {
  const $e = $(e);
  if ($e.toggleClass('active').hasClass('active'))
    $('#코드_클릭한정보call').html($($e.attr('title')).html());
  else $('#코드_클릭한정보call').html('');
}
function 체크this활용(e) {
  const $i = $(e).children('input'), id = '#' + $i.attr('id').slice(6);
  $(id).toggleClass('d-none', !$i.prop('checked'));
}
function 회차select옵션생성() {
  let 옵션 = $('#당번숨김_안에_저장중').html().split(',').slice(0, -1).reverse().map(v => `<option>${v.split('_')[0]}</option>`).join('');
  $('#당번_회차select, #분석자료_회차select').html(옵션);
}
function check_초기설정() {
  $('.check클래스').each(function() {
    $(this).next('label').attr('for', this.id);
    this.checked && $('#' + this.id.slice(6)).removeClass('d-none');
  });
  const html = $('.분류').map((_, el) => `<div onclick="이동클릭관련(this)">${el.id}</div>`).get().join('');
  $('#이동할위치div리스트, #이동할div리스트').html(html);
}
function 바디이벤트리스너(e) {
  //회차change설정(e)이 시작하면서는 e 를 캐치하지 못하여 변수를 바디리스너에서 받아오기로 하였다.
  if (e.target.id=='당번플러스' || e.target.id=='당번마이너스' || e.target.id=='당번_회차select') {설정유형='당번'; 아이디=e.target.id;}
  if (e.target.id=='당번플러스') {회차=Number(document.querySelector('#당번_회차select').value)+1;}
  if (e.target.id=='당번마이너스') {회차=Number(document.querySelector('#당번_회차select').value)-1;}
  if (e.target.id=='당번_회차select') {회차=Number(document.querySelector('#당번_회차select').value);}

  if (e.target.id=='분석플러스' || e.target.id=='분석마이너스' || e.target.id=='분석자료_회차select') {설정유형='분석';아이디=e.target.id;}
  if (e.target.id=='분석플러스') {회차=Number(document.querySelector('#분석자료_회차select').value)+1;}
  if (e.target.id=='분석마이너스') {회차=Number(document.querySelector('#분석자료_회차select').value)-1;}
  if (e.target.id=='분석자료_회차select') {회차=Number(document.querySelector('#분석자료_회차select').value);}
}
바디.addEventListener('mousedown',바디이벤트리스너);