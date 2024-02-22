if ('초기화'=='초기화') {
  var 분석자료_회차index;
  var 분석자료_당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
  var 분석자료_회차개수=Number(분석자료_당번전체.length/9);
  var 분석자료_시작배열값=(분석자료_회차개수-분석자료_회차index)*9;//9개정보중 회차번호
  var 분석자료_당번_회차select안옵션html;
  for (var i=0; i<분석자료_회차개수; i++) {
    if (i==0) {
      분석자료_당번_회차select안옵션html='<option>' + 분석자료_당번전체[(i*9)] + '회</option>'
    } else {
      분석자료_당번_회차select안옵션html='<option>' + 분석자료_당번전체[(i*9)] + '회</option>' + 분석자료_당번_회차select안옵션html
    }
  }
  document.querySelector('#분석자료_당번_회차select').innerHTML=전체변수_회차select안옵션html; 
  분석자료_회차index=document.querySelector('#분석자료_당번_회차select').selectedIndex;//선택안되면 -1, 초기화면 0
  document.querySelector('#분석자료_당번_회차select').selectedIndex=분석자료_회차index;//통일성
  //#분석자료_당번_있다면다음회차 : 회차span, 날짜span, 번호7개
  var 버튼7개_html='';
  for (var i=0; i<7; i++) {
    버튼7개_html+='<button></button>'
  }
  document.querySelector('#분석자료_당번_있다면다음회차').innerHTML='<span></span><span></span>' + 버튼7개_html;
  document.querySelector('#분석자료_당번').innerHTML='<span></span>' + 버튼7개_html;
  
  var 임시_45개버튼='';
  for (var i=0; i<45; i++) {
    임시_45개버튼+='<button></button>'
  }
  var 분석자료_여러45칸div_들=document.querySelectorAll('#분석자료_여러45칸 > div');
  for (var i=0; i<분석자료_여러45칸div_들.length; i++) {
    분석자료_여러45칸div_들[i].innerHTML+=임시_45개버튼;//빈 45개 버튼
  }
  for (var i=0; i<45; i++) {
    document.querySelectorAll('#임시_순번45 button')[i].innerHTML=i+1;//#임시_순번45 button
  }
  분석자료_회차_change();
}
function 분석자료_회차_change() {
  console.log('분석자료_회차_change()')
  분석자료_회차index=document.querySelector('#분석자료_당번_회차select').selectedIndex;//선택안되면 -1, 초기화면 0
  document.querySelector('#분석자료_당번_회차select').selectedIndex=분석자료_회차index;
  분석자료_시작배열값=(분석자료_회차개수-분석자료_회차index-1)*9;//9개정보중 회차번호
  if (분석자료_회차index==0) {
    document.querySelectorAll('#분석자료_당번_있다면다음회차 span')[0].innerHTML='_';//회차
    document.querySelectorAll('#분석자료_당번_있다면다음회차 span')[1].innerHTML='_';//날짜
    for (var i=0; i<7; i++) {//세번째부터 9번째 버튼까지 7개
      document.querySelectorAll('#분석자료_당번_있다면다음회차 button')[i].innerHTML='_';
    }
  } else {
    document.querySelectorAll('#분석자료_당번_있다면다음회차 span')[0].innerHTML=분석자료_당번전체[분석자료_시작배열값-9+0] + '회';//회차
    document.querySelectorAll('#분석자료_당번_있다면다음회차 span')[1].innerHTML=분석자료_당번전체[분석자료_시작배열값-9+1];//날짜
    for (var i=0; i<7; i++) {//세번째부터 9번째 버튼까지 7개
      document.querySelectorAll('#분석자료_당번_있다면다음회차 button')[i].innerHTML=분석자료_당번전체[분석자료_시작배열값-9+2+i];
    }
  }
  document.querySelectorAll('#분석자료_당번 span')[0].innerHTML=분석자료_당번전체[분석자료_시작배열값+1];//날짜
  for (var i=0; i<7; i++) {
    document.querySelectorAll('#분석자료_당번 button')[i].innerHTML=분석자료_당번전체[분석자료_시작배열값+2+i];
  }
  //고정번호 새로고침
  var 고정번호들=document.querySelectorAll('.분석자료_고정등번호색칠');
  console.log('고정번호들.length : ' + 고정번호들.length)
  for (var i=0; i<고정번호들.length; i++) {
    고정번호들[i].classList.remove('분석자료_고정등번호색칠');
    고정번호들[i].innerHTML='';
  }
  //
  var 이월수_배열=[];
  var 색칠할곳45버튼들;
  for (var i=0; i<6; i++) {//당번 6개
    이월수_배열.push(분석자료_당번전체[분석자료_시작배열값+2+i]);
  }
  //당번색칠 
  색칠할곳45버튼들=document.querySelectorAll('#임시_당번45 button');
  for (var i=0; i<이월수_배열.length; i++) {
    색칠할곳45버튼들[이월수_배열[i]-1].innerHTML=이월수_배열[i];
    색칠할곳45버튼들[이월수_배열[i]-1].classList.add('분석자료_고정등번호색칠')
  }
  //이웃수색칠 
  var 왼쪽번호, 오른쪽번호;
  var 이웃수_배열=[];
  색칠할곳45버튼들=document.querySelectorAll('#임시_이웃수45 button');
  for (var i=0; i<6; i++) {
    if (분석자료_당번전체[분석자료_시작배열값+2+i]==1) {
      왼쪽번호=45;
    } else {
      왼쪽번호=Number(분석자료_당번전체[분석자료_시작배열값+2+i])-1;
    }
    if (분석자료_당번전체[분석자료_시작배열값+2+i]==45) {
      오른쪽번호=1;
    } else {
      오른쪽번호=Number(분석자료_당번전체[분석자료_시작배열값+2+i])+1;
    }
    if (이월수_배열.filter(element => 왼쪽번호 == element).length==0 && 이웃수_배열.filter(element => 왼쪽번호 == element).length==0) {이웃수_배열.push(왼쪽번호);}
    if (이월수_배열.filter(element => 오른쪽번호 == element).length==0 && 이웃수_배열.filter(element => 오른쪽번호 == element).length==0) {이웃수_배열.push(오른쪽번호);}
  }
  for (var i=0; i<이웃수_배열.length; i++) {
    색칠할곳45버튼들[이웃수_배열[i]-1].innerHTML=이웃수_배열[i];
    색칠할곳45버튼들[이웃수_배열[i]-1].classList.add('분석자료_고정등번호색칠')
  }
  //오주 미출부터 1,2,3출이상 색칠하기
  var 십오주간번호_보볼제외=[], 십주간번호_보볼제외=[], 오주간번호_보볼제외=[];
  var 나머지;
  for (var i=0; i<9*15; i++) {//결과번호 개수는 90개다. 6*15
    나머지=i%9;
    if (나머지<2 || 나머지==8) {

    } else {
      if (i<9*5) {오주간번호_보볼제외.push(분석자료_당번전체[분석자료_시작배열값-i])}
      if (i<9*10) {십주간번호_보볼제외.push(분석자료_당번전체[분석자료_시작배열값-i])}
      if (i<9*15) {십오주간번호_보볼제외.push(분석자료_당번전체[분석자료_시작배열값-i])}
    }
  }
  for (var i=1; i<46; i++) {
    if (오주간번호_보볼제외.filter(element => i == element).length==1) {//#임시_1출45
      document.querySelectorAll('#임시_1출45 button')[i-1].innerHTML=i+1;
      document.querySelectorAll('#임시_1출45 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
    if (오주간번호_보볼제외.filter(element => i == element).length==2) {//#임시_2출45
      document.querySelectorAll('#임시_2출45 button')[i-1].innerHTML=i+1;
      document.querySelectorAll('#임시_2출45 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
    if (오주간번호_보볼제외.filter(element => i == element).length>=2) {//#임시_3출이상45
      document.querySelectorAll('#임시_3출이상45 button')[i-1].innerHTML=i+1;
      document.querySelectorAll('#임시_3출이상45 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
    if (오주간번호_보볼제외.filter(element => i == element).length==0) {//#임시_미출5
      document.querySelectorAll('#임시_미출5 button')[i-1].innerHTML=i+1;
      document.querySelectorAll('#임시_미출5 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
    if (십주간번호_보볼제외.filter(element => i == element).length==0) {//#임시_미출10
      document.querySelectorAll('#임시_미출10 button')[i-1].innerHTML=i+1;
      document.querySelectorAll('#임시_미출10 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
    if (십오주간번호_보볼제외.filter(element => i == element).length==0) {//#임시_미출15
      document.querySelectorAll('#임시_미출15 button')[i-1].innerHTML=i+1;
      document.querySelectorAll('#임시_미출15 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
  }










}
function 분석자료_회차_플러스() {
  console.log('분석자료_회차_플러스()')
  if (분석자료_회차index==0) {alert('가장 최근 회차입니다.'); return;}
  분석자료_회차index=document.querySelector('#분석자료_당번_회차select').selectedIndex - 1;//선택안되면 -1, 초기화면 0
  document.querySelector('#분석자료_당번_회차select').selectedIndex=분석자료_회차index;
  분석자료_회차_change();
}
function 분석자료_회차_마이너스() {
  console.log('분석자료_회차_마이너스()')

  분석자료_회차index=document.querySelector('#분석자료_당번_회차select').selectedIndex + 1;//선택안되면 -1, 초기화면 0
  document.querySelector('#분석자료_당번_회차select').selectedIndex=분석자료_회차index;
  분석자료_회차_change();
}
