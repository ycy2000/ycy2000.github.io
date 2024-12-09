if ('초기화'=='초기화') {
  var 분석자료_번호추출_진행가능판단;
  var 넣기아이디='';
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

  document.querySelector('#추출된번호_당번_있다면다음회차').innerHTML='<span></span><span></span>' + 버튼7개_html;

  document.querySelector('#추출된번호_당번').innerHTML='<span></span><span></span>' + 버튼7개_html;

  document.querySelector('#분석자료_당번').innerHTML='<span></span>' + 버튼7개_html;
  
  var 임시_45개버튼='';
  for (var i=0; i<45; i++) {
    임시_45개버튼+='<button></button>'
  }
  임시_45개버튼='<div style="display:inline-block;">' + 임시_45개버튼 + '</div>';//선택하기 쉽도록
  var 분석자료_여러45칸div_들=document.querySelectorAll('#분석자료_여러45칸 > div');
  for (var i=0; i<분석자료_여러45칸div_들.length; i++) {
    분석자료_여러45칸div_들[i].innerHTML+=임시_45개버튼;//빈 45개 버튼
  }
  for (var i=0; i<45; i++) {
    document.querySelectorAll('#임시_순번45 button')[i].innerHTML=i+1;//#임시_순번45 button
  }

  var 분석자료_30회차당번_제목div_들=document.querySelectorAll('#분석자료_30회차당번_제목 > div');
  for (var i=0; i<분석자료_30회차당번_제목div_들.length; i++) {
    분석자료_30회차당번_제목div_들[i].innerHTML+=임시_45개버튼;//빈 45개 버튼
  }
  for (var i=0; i<45; i++) {
    document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(1) button')[i].innerHTML=i+1;//#임시_순번45 button
  }
  var 분석자료_30회차당번div_들=document.querySelectorAll('#분석자료_30회차당번 > div');
  for (var i=0; i<분석자료_30회차당번div_들.length; i++) {
    분석자료_30회차당번div_들[i].innerHTML+=임시_45개버튼;//빈 45개 버튼
  }

  분석자료_회차_change();
  //시작시 한번만, 분석자료_색칠에따라_피해서번호생성();#id_임시버튼45 button 에 색칠용버튼 클래스 넣어주고 지워준다.
  for (var i=0; i<45; i++) {
    if (!document.querySelectorAll('#임시_당번45 button')[i].innerHTML=='') {document.querySelectorAll('#id_임시버튼45 button')[i].classList.add('색칠용버튼');}
  }
  분석자료_색칠에따라_피해서번호생성();
  for (var i=0; i<45; i++) {
    document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('색칠용버튼');
  }
}
function 분석자료_피해서3종보기() {
  for (var i=0; i<45; i++) {
    document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('색칠용버튼');
    document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('분석자료_피해서3종_선택번호');
    document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('분석자료_피해서3종_피해서번호');
    document.querySelectorAll('#id_임시버튼45 button')[i].removeAttribute('title');
  }
  for (var i=0; i<45; i++) {
    if (!document.querySelectorAll('#임시_피할번호 button')[i].innerHTML=='') {
      document.querySelectorAll('#id_임시버튼45 button')[i].classList.add('분석자료_피해서3종_선택번호');
      document.querySelectorAll('#id_임시버튼45 button')[i].setAttribute('title',i+1);
    }
    if (!document.querySelectorAll('#임시_피해서번호 button')[i].innerHTML=='') {
      document.querySelectorAll('#id_임시버튼45 button')[i].classList.add('분석자료_피해서3종_피해서번호');
      document.querySelectorAll('#id_임시버튼45 button')[i].setAttribute('title',i+1);
    }
  }
}
function 분석자료_임시버튼45clear() {
  for (var i=0; i<45; i++) {//3종 색 칠할때 쓰여질수 있어서지운다
    if (document.querySelectorAll('#id_임시버튼45 button')[i].classList.contains('색칠용버튼')) {
      document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('색칠용버튼');
      document.querySelectorAll('#id_임시버튼45 button')[i].removeAttribute('title');
    }
    if (document.querySelectorAll('#id_임시버튼45 button')[i].classList.contains('분석자료_피해서3종_선택번호')) {
      document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('분석자료_피해서3종_선택번호');
      document.querySelectorAll('#id_임시버튼45 button')[i].removeAttribute('title');
    }
    if (document.querySelectorAll('#id_임시버튼45 button')[i].classList.contains('분석자료_피해서3종_피해서번호')) {
      document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('분석자료_피해서3종_피해서번호');
      document.querySelectorAll('#id_임시버튼45 button')[i].removeAttribute('title');
    }
  }
}
function 분석자료_피해서번호3종clear() {
  for (var i=0; i<45; i++) {//3종 색 칠할때 쓰여질수 있어서지운다
    if (document.querySelectorAll('#id_임시버튼45 button')[i].classList.contains('분석자료_피해서3종_선택번호')) {
      document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('분석자료_피해서3종_선택번호');
      document.querySelectorAll('#id_임시버튼45 button')[i].removeAttribute('title');
    }
    if (document.querySelectorAll('#id_임시버튼45 button')[i].classList.contains('분석자료_피해서3종_피해서번호')) {
      document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('분석자료_피해서3종_피해서번호');
      document.querySelectorAll('#id_임시버튼45 button')[i].removeAttribute('title');
    }
  }
}
function 분석자료_색칠에따라_피해서번호생성() {
  분석자료_피해서번호3종clear();//45색만클리어
  var 버튼들=document.querySelectorAll('#id_임시버튼45 button');//필요없는버튼 두개가 더 있다. 칠, 번호종류
  var 색칠용버튼숫자=document.querySelectorAll('#id_임시버튼45 .색칠용버튼').length;
  //피할번호 있으면 작동, 몫과 나머지 구해놓기
  var 몫=[];
  var 나머지=[];
  var 번호묶음text='';
  for (var i=0; i<45; i++) {
    document.querySelectorAll('#임시_피할번호 button')[i].innerHTML='';
    document.querySelectorAll('#임시_피할번호 button')[i].classList.remove('분석자료_고정등번호색칠')
  }
  if (색칠용버튼숫자>0) {
    for (var i=0; i<45; i++) {
      if (버튼들[i].classList.contains('색칠용버튼')) {
        몫.push(Math.floor( i / 7));
        나머지.push(i % 7);
        document.querySelectorAll('#임시_피할번호 button')[i].innerHTML=i+1;
        document.querySelectorAll('#임시_피할번호 button')[i].classList.add('분석자료_고정등번호색칠')
      }
    }
  }
  console.log('몫 : ' + 몫 + ' , 나머지 : ' + 나머지)
  for (var i=0; i<45; i++) {
    document.querySelectorAll('#임시_피해서번호 button')[i].innerHTML='';
    document.querySelectorAll('#임시_피해서번호 button')[i].classList.remove('분석자료_고정등번호색칠');//지우고 
    if (몫.filter(element => element==Math.floor(i / 7)).length==0) {
      document.querySelectorAll('#임시_피해서번호 button')[i].innerHTML=i+1;
      document.querySelectorAll('#임시_피해서번호 button')[i].classList.add('분석자료_고정등번호색칠')
    }
    if (나머지.filter(element => element==(i % 7)).length==0) {
      document.querySelectorAll('#임시_피해서번호 button')[i].innerHTML=i+1;
      document.querySelectorAll('#임시_피해서번호 button')[i].classList.add('분석자료_고정등번호색칠')
    }
  }
  for (var i=0; i<45; i++) {
    document.querySelectorAll('#임시_흰색부분 button')[i].innerHTML='';
    document.querySelectorAll('#임시_흰색부분 button')[i].classList.remove('분석자료_고정등번호색칠');//지우고 
    if (document.querySelectorAll('#임시_피해서번호 button')[i].innerHTML=='' && !버튼들[i].classList.contains('색칠용버튼')) {
      document.querySelectorAll('#임시_흰색부분 button')[i].innerHTML=i+1;
      document.querySelectorAll('#임시_흰색부분 button')[i].classList.add('분석자료_고정등번호색칠')
    }
  }
}
function 분석자료_넣기아이디에_색칠번호넣기() {
  if (넣기아이디=='') {return;}
  for (var i=0; i<45; i++) {
    document.querySelectorAll('#' + 넣기아이디 + ' button')[i].innerHTML='';
    document.querySelectorAll('#' + 넣기아이디 + ' button')[i].classList.remove('분석자료_고정등번호색칠');
    if (document.querySelectorAll('#id_임시버튼45 button')[i].classList.contains('색칠용버튼')) {
      document.querySelectorAll('#' + 넣기아이디 + ' button')[i].innerHTML=i+1;
      document.querySelectorAll('#' + 넣기아이디 + ' button')[i].classList.add('분석자료_고정등번호색칠');
    }
  }
}
function 필터링조건표보기숨기기() {
  if (document.querySelector('#필터링조건표_전체').classList.contains('d-none')) {
    document.querySelector('#필터링조건표_전체').classList.remove('d-none');
  } else {
    document.querySelector('#필터링조건표_전체').classList.add('d-none');
  }
}
function 분석자료_회차_change() {
  console.log('분석자료_회차_change()')

  //3종 색 칠할때 쓰여질수 있어서지운다
  for (var i=0; i<45; i++) {
    if (document.querySelectorAll('#id_임시버튼45 button')[i].classList.contains('분석자료_피해서3종_선택번호')) {
      document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('분석자료_피해서3종_선택번호');
      document.querySelectorAll('#id_임시버튼45 button')[i].removeAttribute('title');
    }
    if (document.querySelectorAll('#id_임시버튼45 button')[i].classList.contains('분석자료_피해서3종_피해서번호')) {
      document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('분석자료_피해서3종_피해서번호');
      document.querySelectorAll('#id_임시버튼45 button')[i].removeAttribute('title');
    }
  }
  분석자료_회차index=document.querySelector('#분석자료_당번_회차select').selectedIndex;//선택안되면 -1, 초기화면 0
  document.querySelector('#분석자료_당번_회차select').selectedIndex=분석자료_회차index;
  분석자료_시작배열값=(분석자료_회차개수-분석자료_회차index-1)*9;//9개정보중 회차번호
  if (분석자료_회차index==0) {
    document.querySelectorAll('#분석자료_당번_있다면다음회차 span')[0].innerHTML='_';//회차
    document.querySelectorAll('#분석자료_당번_있다면다음회차 span')[1].innerHTML='_';//날짜

    document.querySelectorAll('#추출된번호_당번_있다면다음회차 span')[0].innerHTML='_';//회차
    document.querySelectorAll('#추출된번호_당번_있다면다음회차 span')[1].innerHTML='_';//날짜

    for (var i=0; i<7; i++) {//세번째부터 9번째 버튼까지 7개
      document.querySelectorAll('#분석자료_당번_있다면다음회차 button')[i].innerHTML='_';

      document.querySelectorAll('#추출된번호_당번_있다면다음회차 button')[i].innerHTML='_';
    }
  } else {
    document.querySelectorAll('#분석자료_당번_있다면다음회차 span')[0].innerHTML=분석자료_당번전체[분석자료_시작배열값+9+0] + '회';//회차
    document.querySelectorAll('#분석자료_당번_있다면다음회차 span')[1].innerHTML=분석자료_당번전체[분석자료_시작배열값+9+1];//날짜

    document.querySelectorAll('#추출된번호_당번_있다면다음회차 span')[0].innerHTML=분석자료_당번전체[분석자료_시작배열값+9+0] + '회';//회차
    document.querySelectorAll('#추출된번호_당번_있다면다음회차 span')[1].innerHTML=분석자료_당번전체[분석자료_시작배열값+9+1];//날짜

    for (var i=0; i<7; i++) {//세번째부터 9번째 버튼까지 7개
      document.querySelectorAll('#분석자료_당번_있다면다음회차 button')[i].innerHTML=분석자료_당번전체[분석자료_시작배열값+9+2+i];

      document.querySelectorAll('#추출된번호_당번_있다면다음회차 button')[i].innerHTML=분석자료_당번전체[분석자료_시작배열값+9+2+i];
    }
  }
  document.querySelectorAll('#분석자료_당번 span')[0].innerHTML=분석자료_당번전체[분석자료_시작배열값+1];//날짜

  document.querySelectorAll('#추출된번호_당번 span')[0].innerHTML=분석자료_당번전체[분석자료_시작배열값+0] + '회';//회차
  document.querySelectorAll('#추출된번호_당번 span')[1].innerHTML=분석자료_당번전체[분석자료_시작배열값+1];//날짜

  for (var i=0; i<7; i++) {
    document.querySelectorAll('#분석자료_당번 button')[i].innerHTML=분석자료_당번전체[분석자료_시작배열값+2+i];

    document.querySelectorAll('#추출된번호_당번 button')[i].innerHTML=분석자료_당번전체[분석자료_시작배열값+2+i];
  }
  //고정번호 새로고침
  var 고정번호들=document.querySelectorAll('.분석자료_고정등번호색칠');
  console.log('고정번호들.length : ' + 고정번호들.length)
  for (var i=0; i<고정번호들.length; i++) {
    if (고정번호들[i].parentNode.id!='임시_피할번호' && 고정번호들[i].parentNode.id!='임시_피해서번호' && 고정번호들[i].parentNode.id!='임시_흰색부분') {
      고정번호들[i].classList.remove('분석자료_고정등번호색칠');
      고정번호들[i].innerHTML='';
    }
  }
  //
  var 이월수_배열=[];
  var 색칠할곳45버튼들;
  for (var i=0; i<6; i++) {//당번 6개
    이월수_배열.push(분석자료_당번전체[분석자료_시작배열값+2+i]);
  }
  var 당번이웃버튼들=document.querySelectorAll('#임시_당번이웃 button');
  //당번색칠
  색칠할곳45버튼들=document.querySelectorAll('#임시_당번45 button');
  for (var i=0; i<이월수_배열.length; i++) {
    색칠할곳45버튼들[이월수_배열[i]-1].innerHTML=이월수_배열[i];
    색칠할곳45버튼들[이월수_배열[i]-1].classList.add('분석자료_고정등번호색칠')
    당번이웃버튼들[이월수_배열[i]-1].innerHTML=이월수_배열[i];
    당번이웃버튼들[이월수_배열[i]-1].classList.add('분석자료_고정등번호색칠')
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
    당번이웃버튼들[이웃수_배열[i]-1].innerHTML=이웃수_배열[i];
    당번이웃버튼들[이웃수_배열[i]-1].classList.add('분석자료_고정등번호색칠')
  }
  //오주 미출부터 1,2,3출이상 색칠하기
  var 십오주간번호_보볼제외=[], 십주간번호_보볼제외=[], 오주간번호_보볼제외=[];
  var 나머지;
  for (var i=0; i<9*15; i++) {//결과번호 개수는 90개다. 6*15
    나머지=i%9;
    if (나머지<2 || 나머지==8) {

    } else {//+8:해당회차의 보볼
      if (i<9*5) {오주간번호_보볼제외.push(분석자료_당번전체[분석자료_시작배열값-i+9])}
      if (i<9*10) {십주간번호_보볼제외.push(분석자료_당번전체[분석자료_시작배열값-i+9])}
      if (i<9*15) {십오주간번호_보볼제외.push(분석자료_당번전체[분석자료_시작배열값-i+9])}
    }
  }

  for (var i=1; i<46; i++) {
    if (오주간번호_보볼제외.filter(element => i == element).length==1) {//#임시_1출45
      document.querySelectorAll('#임시_1출45 button')[i-1].innerHTML=i;
      document.querySelectorAll('#임시_1출45 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
    if (오주간번호_보볼제외.filter(element => i == element).length==2) {//#임시_2출45
      document.querySelectorAll('#임시_2출45 button')[i-1].innerHTML=i;
      document.querySelectorAll('#임시_2출45 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
    if (오주간번호_보볼제외.filter(element => i == element).length>2) {//#임시_3출이상45
      document.querySelectorAll('#임시_3출이상45 button')[i-1].innerHTML=i;
      document.querySelectorAll('#임시_3출이상45 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
    if (오주간번호_보볼제외.filter(element => i == element).length>0) {//#임시_출
      document.querySelectorAll('#임시_출 button')[i-1].innerHTML=i;
      document.querySelectorAll('#임시_출 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
    if (오주간번호_보볼제외.filter(element => i == element).length==0) {//#임시_미출5
      document.querySelectorAll('#임시_미출5 button')[i-1].innerHTML=i;
      document.querySelectorAll('#임시_미출5 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
    if (십주간번호_보볼제외.filter(element => i == element).length==0) {//#임시_미출10
      document.querySelectorAll('#임시_미출10 button')[i-1].innerHTML=i;
      document.querySelectorAll('#임시_미출10 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
    if (십오주간번호_보볼제외.filter(element => i == element).length==0) {//#임시_미출15
      document.querySelectorAll('#임시_미출15 button')[i-1].innerHTML=i;
      document.querySelectorAll('#임시_미출15 button')[i-1].classList.add('분석자료_고정등번호색칠')
    }
  }
  //30회차번호기록관련 : #분석자료_30회차당번 > div 안에, span 하나, button 45개씩
  var 현재작업div내_버튼들;
  var 회차부분;
  for (var i=0; i<30; i++) {//당번부터
    현재작업div내_버튼들=document.querySelectorAll('#분석자료_30회차당번 > div:nth-of-type(' + (i+1) + ') button');
    회차부분=(분석자료_회차개수-분석자료_회차index-1-i)*9;
    for (var 내부=0; 내부<6; 내부++) {
      현재작업div내_버튼들[분석자료_당번전체[회차부분+2+내부]-1].innerHTML=분석자료_당번전체[회차부분+2+내부];
      현재작업div내_버튼들[분석자료_당번전체[회차부분+2+내부]-1].classList.add('분석자료_고정등번호색칠')
    }
  }
  //5주구간 출수 7종, 분석자료_시작배열값=(분석자료_회차개수-분석자료_회차index-1)*9;
  var 번호30주간=[], 번호5주간=[], 번호6_10주간=[], 번호11_15주간=[], 번호16_20주간=[], 번호21_25주간=[], 번호26_30주간=[];

  for (var i=0; i<30; i++) {//번호30주간
    for (var 내부=0; 내부<9; 내부++) {
      if (내부>1 && 내부<8) {
        번호30주간.push(분석자료_당번전체[(분석자료_회차개수-분석자료_회차index-1-i)*9+내부])
      }
    }
  }
  for (var i=0; i<5; i++) {//번호5주간
    for (var 내부=0; 내부<9; 내부++) {if (내부>1 && 내부<8) {번호5주간.push(분석자료_당번전체[(분석자료_회차개수-분석자료_회차index-1-i)*9+내부])}}
  }
  for (var i=0; i<5; i++) {//번호6_10주간
    for (var 내부=0; 내부<9; 내부++) {if (내부>1 && 내부<8) {번호6_10주간.push(분석자료_당번전체[(분석자료_회차개수-분석자료_회차index-1-i-5)*9+내부])}}
  }
  for (var i=0; i<5; i++) {//번호11_15주간
    for (var 내부=0; 내부<9; 내부++) {if (내부>1 && 내부<8) {번호11_15주간.push(분석자료_당번전체[(분석자료_회차개수-분석자료_회차index-1-i-10)*9+내부])}}
  }
  for (var i=0; i<5; i++) {//번호16_20주간
    for (var 내부=0; 내부<9; 내부++) {if (내부>1 && 내부<8) {번호16_20주간.push(분석자료_당번전체[(분석자료_회차개수-분석자료_회차index-1-i-15)*9+내부])}}
  }
  for (var i=0; i<5; i++) {//번호21_25주간
    for (var 내부=0; 내부<9; 내부++) {if (내부>1 && 내부<8) {번호21_25주간.push(분석자료_당번전체[(분석자료_회차개수-분석자료_회차index-1-i-20)*9+내부])}}
  }
  for (var i=0; i<5; i++) {//번호26_30주간
    for (var 내부=0; 내부<9; 내부++) {if (내부>1 && 내부<8) {번호26_30주간.push(분석자료_당번전체[(분석자료_회차개수-분석자료_회차index-1-i-25)*9+내부])}}
  }

  for (var i=1; i<46; i++) {
    if (번호30주간.filter(element => element==i).length>=0) {
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(2) button')[i-1].innerHTML=번호30주간.filter(element => element==i).length;
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(2) button')[i-1].classList.add('분석자료_고정등번호색칠_30주합계');
    }
    if (번호5주간.filter(element => element==i).length>0) {
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(3) button')[i-1].innerHTML=번호5주간.filter(element => element==i).length;
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(3) button')[i-1].classList.add('분석자료_고정등번호색칠');
    }
    if (번호6_10주간.filter(element => element==i).length>0) {
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(4) button')[i-1].innerHTML=번호6_10주간.filter(element => element==i).length;
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(4) button')[i-1].classList.add('분석자료_고정등번호색칠');
    }
    if (번호11_15주간.filter(element => element==i).length>0) {
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(5) button')[i-1].innerHTML=번호11_15주간.filter(element => element==i).length;
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(5) button')[i-1].classList.add('분석자료_고정등번호색칠');
    }
    if (번호16_20주간.filter(element => element==i).length>0) {
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(6) button')[i-1].innerHTML=번호16_20주간.filter(element => element==i).length;
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(6) button')[i-1].classList.add('분석자료_고정등번호색칠');
    }
    if (번호21_25주간.filter(element => element==i).length>0) {
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(7) button')[i-1].innerHTML=번호21_25주간.filter(element => element==i).length;
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(7) button')[i-1].classList.add('분석자료_고정등번호색칠');
    }
    if (번호26_30주간.filter(element => element==i).length>0) {
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(8) button')[i-1].innerHTML=번호26_30주간.filter(element => element==i).length;
      document.querySelectorAll('#분석자료_30회차당번_제목 > div:nth-of-type(8) button')[i-1].classList.add('분석자료_고정등번호색칠');
    }
  }
  //시험적이다.. 필터링조건표 편집 : 원구조에서 편집 : #분석자료_여러45칸_유사함 > div(#임시_순번45) > span2ro div1개(버튼45개)
  document.querySelector('#분석자료_여러45칸_유사함').innerHTML=document.querySelector('#분석자료_여러45칸').innerHTML
  //두줄더 추가, 
  document.querySelector('#분석자료_여러45칸_유사함').innerHTML=
  document.querySelector('#분석자료_여러45칸_유사함').innerHTML + document.querySelector('#임시_당번45').outerHTML
  + document.querySelector('#임시_당번45').outerHTML;
  //추가된 아이디변경 span1에 메모넣기
  var div개수=document.querySelectorAll('#분석자료_여러45칸_유사함 > div').length;
  document.querySelectorAll('#분석자료_여러45칸_유사함 > div')[div개수-2].id='구분추가1';
  document.querySelectorAll('#분석자료_여러45칸_유사함 > div')[div개수-1].id='구분추가2';
  document.querySelector('#분석자료_여러45칸_유사함 > #구분추가1 > span:nth-of-type(1)').innerHTML=',로 번호구분';
  document.querySelector('#분석자료_여러45칸_유사함 > #구분추가2 > span:nth-of-type(1)').innerHTML=',로 번호구분';
  //추가된 것은 div안의 버튼삭제
  document.querySelector('#분석자료_여러45칸_유사함 >  #구분추가1 > div').outerHTML='<input type = "text"><span style="width:40px;">메모</span><input type = "text">';
  document.querySelector('#분석자료_여러45칸_유사함 >  #구분추가2 > div').outerHTML='<input type = "text"><span style="width:40px;">메모</span><input type = "text">';
  //   임시_순번45 안 2번째 span을 2개로 늘린다.
  document.querySelector('#분석자료_여러45칸_유사함 > #임시_순번45 > span:nth-of-type(2)').outerHTML='<span onclick="인풋모두clear()">에서</span><span onclick="인풋모두clear()">까지</span>';
    //   다음으로나오는 형제 인풋 두개의 값을 지우는 클래스 부여한다
    for (var i=0; i< document.querySelectorAll('#분석자료_여러45칸_유사함 > div > .분석자료_번호선택').length; i++) {
      document.querySelectorAll('#분석자료_여러45칸_유사함 > div > .분석자료_번호선택')[i].classList.add('인풋clear');
    }
  //   나머지 안 2번째 span을 input2개로 늘린다.
  for (var i=0; i< document.querySelectorAll('#분석자료_여러45칸_유사함 > div > .분석자료_번호선택').length; i++) {
    document.querySelectorAll('#분석자료_여러45칸_유사함 > div > .분석자료_번호선택')[i].nextElementSibling.outerHTML='<input type = "text"><input type = "text">';
  }
  //까지 우측에 개별 span 추가
  for (var i=0; i< document.querySelectorAll('#분석자료_여러45칸_유사함 > div').length; i++) {
    if (i==0) {
      document.querySelectorAll('#분석자료_여러45칸_유사함 > div')[i].children[2].outerHTML=
      document.querySelectorAll('#분석자료_여러45칸_유사함 > div')[i].children[2].outerHTML + '<span style="width:35px;">개별</span>';
    } else {
    document.querySelectorAll('#분석자료_여러45칸_유사함 > div')[i].children[2].outerHTML=
    document.querySelectorAll('#분석자료_여러45칸_유사함 > div')[i].children[2].outerHTML + '<span style="width:35px;"></span>';
    }
  }









  if ('숨김'=='이거안씀') {
    //필터링조건표부분.
    var 숨김연결번호=document.querySelectorAll('#분석자료_여러45칸_유사함 > div > span:nth-of-type(2)')
    숨김연결번호[1].innerHTML='_' + 이월수_배열.join('_') + '_';
    숨김연결번호[2].innerHTML='_' + 이웃수_배열.join('_') + '_';
    숨김연결번호[3].innerHTML='_' + 이월수_배열.join('_') + '_' + 이웃수_배열.join('_') + '_';
    var 배열편집=[];//중복제거, 배열로전환, 정렬
    배열편집=new Set(오주간번호_보볼제외);
    배열편집=[...배열편집];
    배열편집.sort((a,t) => a-t);
    숨김연결번호[4].innerHTML='_' + 배열편집.join('_') + '_';//5주출
    배열편집=[];
    for (var i=1; i<45; i++) {
      if (오주간번호_보볼제외.indexOf(String(i))==-1) {배열편집.push(i)}
    }
    숨김연결번호[5].innerHTML='_' + 배열편집.join('_') + '_';//5주미출
    배열편집=[];
    for (var i=1; i<45; i++) {
      if (오주간번호_보볼제외.filter(element => i == element).length==1) {배열편집.push(i)}
    }
    숨김연결번호[6].innerHTML='_' + 배열편집.join('_') + '_';//5주1출
    배열편집=[];
    for (var i=1; i<45; i++) {
      if (오주간번호_보볼제외.filter(element => i == element).length==2) {배열편집.push(i)}
    }
    숨김연결번호[7].innerHTML='_' + 배열편집.join('_') + '_';//5주2출
    배열편집=[];
    for (var i=1; i<45; i++) {
      if (오주간번호_보볼제외.filter(element => i == element).length>=3) {배열편집.push(i)}
    }
    숨김연결번호[8].innerHTML='_' + 배열편집.join('_') + '_';//5주3출이상
    배열편집=[];
    for (var i=1; i<45; i++) {
      if (십주간번호_보볼제외.indexOf(String(i))==-1) {배열편집.push(i)}
    }
    숨김연결번호[9].innerHTML='_' + 배열편집.join('_') + '_';//십주미출
    배열편집=[];
    for (var i=1; i<45; i++) {
      if (십오주간번호_보볼제외.indexOf(String(i))==-1) {배열편집.push(i)}
    }
    숨김연결번호[10].innerHTML='_' + 배열편집.join('_') + '_';//십오주미출
    //필터링조건표부분. 끝==>

    //분석자료_여러45칸_유사함 제목 innerHTML가져오기
    var 복사할곳=document.querySelectorAll('#분석자료_여러45칸_유사함 > div > span:nth-of-type(1)');
    for (var i=1; i<document.querySelectorAll('#분석자료_여러45칸 > div > span:nth-of-type(1)').length; i++) {
      복사할곳[i].innerHTML=document.querySelectorAll('#분석자료_여러45칸 > div > span:nth-of-type(1)')[i].innerHTML;
    }
    //분석자료_여러45칸_유사함 제목 버튼가져오기
    var 복사할곳=document.querySelectorAll('#분석자료_여러45칸_유사함 > div > div');
    for (var i=1; i<document.querySelectorAll('#분석자료_여러45칸 > div > div').length; i++) {
      복사할곳[i].innerHTML=document.querySelectorAll('#분석자료_여러45칸 > div > div')[i].outerHTML;
    }
  }

}
function 인풋모두clear() {
  for (var i=0; i< document.querySelectorAll('#분석자료_여러45칸_유사함 input').length; i++) {
    document.querySelectorAll('#분석자료_여러45칸_유사함 input')[i].value='';
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
function 분석자료_번호추출_진행가능판단_실행() {
  console.log('분석자료_번호추출_진행가능판단_실행()')
  //분석자료_번호추출_진행가능판단='가능'
  분석자료_번호추출_진행가능판단='가능';//불가능을 추가한다.
  if (isNaN(document.querySelector('#분석자료_번호추출개수').value)) {
    alert('input : #분석자료_번호추출개수.value가 숫자가 아님 : return;');
    분석자료_번호추출_진행가능판단='불가능';
    return;
  }
  if (document.querySelector('#분석자료_번호추출개수').value<1) {
    alert('input : #분석자료_번호추출개수.value가 0보다 크지 않음, 빈칸 또는 공백일때 0으로 인식 : return;');
    분석자료_번호추출_진행가능판단='불가능';
    return;
  }

  for (var i=0; i<document.querySelectorAll('#분석자료_여러45칸 .클릭_더블클릭').length; i++) {
    var 버튼안숫자개수=0;
    for (var 내부=0; 내부<45; 내부++) {
      if (document.querySelectorAll('#분석자료_여러45칸 > div:nth-of-type(' + (i+2) + ') button')[내부].innerHTML.length>0) {버튼안숫자개수+=1;}
    }
    console.log('버튼안숫자개수 : ' + 버튼안숫자개수 + ', 추출개수 : ' + document.querySelectorAll('.클릭_더블클릭')[i].innerHTML)
    if (버튼안숫자개수<document.querySelectorAll('.클릭_더블클릭')[i].innerHTML) {
      alert('추출개수 기록 숫자가 숫자가 있는 버튼수보다 크면 안됨 : return;');
      분석자료_번호추출_진행가능판단='불가능';
    }
  }
  

}
function 분석자료_번호추출() {
          //중복제거, 배열로전환, 정렬
          // 생성번호배열=new Set(생성번호배열);
          // 생성번호배열=[...생성번호배열];
          // 여섯개만.sort((a,t) => a-t);
          // 최대값 : Math.max(...한줄랜덤배열)
          // 최대값의 인덱스 위치 : 한줄랜덤배열.indexOf(Math.max(...한줄랜덤배열))
          // 인덱스 위치의 값을 0으로 : 한줄랜덤배열[한줄랜덤배열.indexOf(Math.max(...한줄랜덤배열))]=0;
  분석자료_번호추출_진행가능판단_실행();
  if (분석자료_번호추출_진행가능판단=='불가능') {return;}
  console.log('분석자료_번호추출()')
  var 추출개수=Number(document.querySelector('#분석자료_번호추출개수').value);
  var 누적할요소=document.querySelector('#추출된번호_30개씩무한누적');
  var 한줄번호누적배열;
  var 번호한줄divhtml='';
  var 넣을html누적='';
  var 추출개수카운트=0;
  var 삼십카운트=0;//div묶고
  var 고정번호랜덤배열;
  var 임시_작업요소, 임시_아이디, 임시_span1, 임시_span2_숫자, 임시_버튼개수, 임시_분석자료_고정등번호색칠_클래스, 최대값인덱스;
  var 생성개수=0;
  //1회추출 먼저 작성하고 반복을 추가하기로
  for (var i=0; i<추출개수; i++) {
    console.log(i+1)
    한줄번호누적배열=[];//당번부터 임시4까지 번호추출 누적
    번호한줄divhtml=''
    //번호를 담는다...
    for (var 클릭_더블클릭반복=0; 클릭_더블클릭반복<document.querySelectorAll('#분석자료_여러45칸 .클릭_더블클릭').length; 클릭_더블클릭반복++) {
      임시_아이디=document.querySelectorAll('#분석자료_여러45칸 .클릭_더블클릭')[클릭_더블클릭반복].parentNode.id;
      임시_작업요소=document.querySelector('#분석자료_여러45칸 #' + 임시_아이디);
      임시_span1=document.querySelectorAll('#분석자료_여러45칸 #' + 임시_아이디 + ' span')[0].innerHTML;
      임시_span2_숫자=Number(document.querySelectorAll('#분석자료_여러45칸 #' + 임시_아이디 + ' span')[1].innerHTML);
      임시_버튼개수=document.querySelectorAll('#분석자료_여러45칸 #' + 임시_아이디 + ' button').length;
      임시_분석자료_고정등번호색칠_클래스=document.querySelectorAll('#분석자료_여러45칸 #' + 임시_아이디 + ' .분석자료_고정등번호색칠');
      // console.log('구분')
      // console.log('임시_작업요소.id : ' + 임시_작업요소.id)
      // console.log('임시_span1.innerHTML : ' + 임시_span1)
      // console.log('임시_span2_숫자(Number) : ' + 임시_span2_숫자)
      // console.log('임시_버튼개수 : ' + 임시_버튼개수)
      // console.log('임시_분석자료_고정등번호색칠_클래스개수 : ' + 임시_분석자료_고정등번호색칠_클래스.length)  
      if (임시_span2_숫자>0 && 임시_분석자료_고정등번호색칠_클래스.length>0) {//추출개수가 0보다 크고 숫자(색칠)이 있으면
        //랜덤배열 생성(추출하면 index참조하여 값을 0으로)
        고정번호랜덤배열=[];
        var 카운트=0;

        //0이 있을수 있고,,,, 중복도 가능하니... 다음꺼 안씀 (예전꺼)
        for (var 랜덤추가=0; 랜덤추가<임시_분석자료_고정등번호색칠_클래스.length; 랜덤추가++) {
          고정번호랜덤배열.push(Math.random());
        }

        
        console.log('임시_분석자료_고정등번호색칠_클래스.length : ' + 임시_분석자료_고정등번호색칠_클래스.length) //왜 두배의 개수가 나오는지 모르겠음
        console.log('고정번호랜덤배열.length : ' + 고정번호랜덤배열.length)




        //for (var 추출=0; 추출<임시_span2_숫자; 추출++) { : 중복된 숫자가 나온다....
        //while (condition) {}

        for (var 추출=0; 추출<임시_span2_숫자; 추출++) {
          최대값인덱스=고정번호랜덤배열.indexOf(Math.max(...고정번호랜덤배열));
          고정번호랜덤배열[최대값인덱스]=-1;//다음최대값 추출위해 0(최소값)으로 변경해둠
          한줄번호누적배열.push(임시_분석자료_고정등번호색칠_클래스[최대값인덱스].innerHTML);
        }
      }
    }
    //중복제거, 배열로전환, 정렬
    // console.log('new SET 전 한줄번호누적배열 : ' + typeof(한줄번호누적배열))
    // 한줄번호누적배열=new Set(한줄번호누적배열);
    // console.log('new SET 후 한줄번호누적배열 : ' + typeof(한줄번호누적배열))
    한줄번호누적배열=new Set(한줄번호누적배열);
    한줄번호누적배열=[...한줄번호누적배열];
    한줄번호누적배열.sort((a,t) => a-t);
    //#여섯개안되면.innerHTML : 나오는대로>패스, 여섯개안되면 6개 맞추기>==
    if (document.querySelector('#여섯개안되면').innerHTML=='여섯개안되면 6개 맞추기' && 한줄번호누적배열.length<6) {
      var 추가개수=6-한줄번호누적배열.length;
      고정번호랜덤배열=[];
      for (var 랜덤추가=0; 랜덤추가<45; 랜덤추가++) {
        고정번호랜덤배열.push(Math.random());
      }
      //기존번호 부분 0으로(최소값)
      for (var 랜덤추가=0; 랜덤추가<한줄번호누적배열.length; 랜덤추가++) {
        고정번호랜덤배열[Number(한줄번호누적배열[랜덤추가])-1]=0;
      }
      for (var 추출=0; 추출<추가개수; 추출++) {
        최대값인덱스=고정번호랜덤배열.indexOf(Math.max(...고정번호랜덤배열));
        고정번호랜덤배열[최대값인덱스]=0;//다음최대값 추출위해 0(최소값)으로 변경해둠
        한줄번호누적배열.push(최대값인덱스+1);
      }
      //중복제거, 배열로전환, 정렬
      한줄번호누적배열=new Set(한줄번호누적배열);
      한줄번호누적배열=[...한줄번호누적배열];
      한줄번호누적배열.sort((a,t) => a-t);
    }

    //번호한줄divhtml : <div>버튼,,,</div>
    if (한줄번호누적배열.length>0) {
      번호한줄divhtml='';
      for (var div생성=0; div생성<한줄번호누적배열.length; div생성++) {
        번호한줄divhtml+='<button>' + 한줄번호누적배열[div생성] + '</button>'
      }
      번호한줄divhtml='<div>' + 번호한줄divhtml + '</div>'
      넣을html누적+=번호한줄divhtml;
      번호한줄divhtml='';//초기화
      //30개? div 묶는 조건
      생성개수+=1;
      if (생성개수==30) {
        넣을html누적='<div>' + 넣을html누적 + '</div>'; 
        누적할요소.innerHTML+=넣을html누적;//넣기
        넣을html누적='';//초기화
        생성개수=0;
      }
    }
  }
  if (생성개수!=30) {//30미만일때 마지막 처리
    넣을html누적='<div>' + 넣을html누적 + '</div>'; 
    누적할요소.innerHTML+=넣을html누적;//넣기
    넣을html누적='';//초기화
  }
  document.querySelector('#번호누적개수').innerHTML=document.querySelectorAll('#추출된번호_30개씩무한누적 > div > div').length; 
  alert('생성완료! 추출된번호 클릭!')
}

//
var 리스너용_세로구분_분석자료_전체=document.querySelector('#세로구분_분석자료_전체');
function 리스너용_세로구분_분석자료_전체_click시(e) {
  if (e.target.nodeName=='BUTTON' && e.target.parentNode.parentNode.id=='id_임시버튼45') {//버튼 클릭시
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.nodeName==BUTTON && e.target.parentNode.parentNode.id==id_임시버튼45')
    if (e.target.classList.contains('색칠용버튼')) {
      e.target.classList.remove('색칠용버튼');
      e.target.removeAttribute('title');
    } else {
      e.target.classList.add('색칠용버튼');
      e.target.setAttribute('title',e.target.innerHTML);
    }
  }
  if (e.target.innerHTML=='번호선택↓') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==번호선택↓')
    if (document.querySelector('#id_임시버튼45').classList.contains('d-none')) {
      document.querySelector('#id_임시버튼45').classList.remove('d-none');
    } else {
      document.querySelector('#id_임시버튼45').classList.add('d-none');
    }
  }
  if (e.target.classList.contains('분석자료_번호선택')) {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.classList.contains(분석자료_번호선택)')
    if (document.querySelector('#id_임시버튼45').classList.contains('d-none')) {
      alert('번호선택↓ 누르고 번호박스 나오고 클릭하시오'); return;}
    var 분석자료_번호요소_버튼들=document.querySelectorAll('#' + e.target.parentNode.id + ' button');
    for (var i=0; i<45; i++) {
      document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('색칠용버튼');//지워준다, 아래꺼와 별개지만 반복횟수가 같다
      if (분석자료_번호요소_버튼들[i].classList.contains('분석자료_고정등번호색칠')) {
        document.querySelectorAll('#id_임시버튼45 button')[i].classList.add('색칠용버튼');
        document.querySelectorAll('#id_임시버튼45 button')[i].setAttribute('title',i+1);
      }
    }   
  }
  if (e.target.innerHTML=='피해서번호생성') {//피해서번호 와 다르다. #id_임시버튼45 에 당번 끌어온후 클릭하는 형식 또는 색칠한 번호에서 생성
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==피해서번호생성')
    분석자료_색칠에따라_피해서번호생성();
  }
  if (e.target.innerHTML=='피해서3종보기') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==피해서3종보기')
    분석자료_피해서3종보기();
  }
  if (e.target.innerHTML=='피해서번호생성') {//피해서번호 와 다르다. #id_임시버튼45 에 당번 끌어온후 클릭하는 형식 또는 색칠한 번호에서 생성
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==피해서번호생성')
    분석자료_색칠에따라_피해서번호생성();
  }
  if (e.target.innerHTML=='색_clear') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==색_clear')
    분석자료_임시버튼45clear();
  }
  if (e.target.innerHTML=='넣기1' || e.target.innerHTML=='넣기2' || e.target.innerHTML=='넣기3' || e.target.innerHTML=='넣기4' || e.target.innerHTML=='칠번호' || e.target.innerHTML=='선택1') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==넣기1,넣기2,넣기3,넣기4,칠번호,선택1')
    if (e.target.innerHTML=='넣기1') {넣기아이디='임시_1'}
    if (e.target.innerHTML=='넣기2') {넣기아이디='임시_2'}
    if (e.target.innerHTML=='넣기3') {넣기아이디='임시_3'}
    if (e.target.innerHTML=='넣기4') {넣기아이디='임시_4'}
    if (e.target.innerHTML=='칠번호') {넣기아이디='임시_칠번호'}
    if (e.target.innerHTML=='선택1') {넣기아이디='임시_선택1중복등'}
    분석자료_넣기아이디에_색칠번호넣기();
  }
  if (e.target.innerHTML=='칠관련번호색칠만') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==칠관련번호색칠만')
    분석자료_임시버튼45clear();
    //색칠상태그대로 갖고옴
    for (var i=0; i<45; i++) {
      if (document.querySelectorAll('#id_버튼45_1st button')[i].classList.contains('색칠용버튼')) {
      document.querySelectorAll('#id_임시버튼45 button')[i].classList.add('색칠용버튼');
      document.querySelectorAll('#id_임시버튼45 button')[i].setAttribute('title',i+1);
      }
    }  

  }
  if (e.target.innerHTML=='넣기번호메모') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==넣기번호메모')
    //칠관련 선택1의 색칠된 번호대로
    if (document.querySelector('#넣기번호메모').classList.contains('d-none')) {
      document.querySelector('#넣기번호메모').classList.remove('d-none');
    } else {
      document.querySelector('#넣기번호메모').classList.add('d-none');
    }
  }
  if (e.target.id=='넣기번호메모clear') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.id==넣기번호메모clear')
    for (var i=0; i<document.querySelectorAll('#넣기번호메모 input').length; i++) {
      document.querySelectorAll('#넣기번호메모 input')[i].value='';
    }
  }넣기번호메모clear
  if (e.target.innerHTML=='위로' || e.target.innerHTML=='아래로') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==위로,아래로')
    if (e.target.innerHTML=='위로') {document.querySelector('#id_임시버튼45').style.top='137px'}
    if (e.target.innerHTML=='아래로') {document.querySelector('#id_임시버튼45').style.top='556px'}
  }
  if (e.target.innerHTML=='피클') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==피클')
    for (var i=0; i<45; i++) {
      document.querySelectorAll('#임시_피할번호 button')[i].innerHTML='';
      document.querySelectorAll('#임시_피할번호 button')[i].classList.remove('분석자료_고정등번호색칠');
      document.querySelectorAll('#임시_피해서번호 button')[i].innerHTML='';
      document.querySelectorAll('#임시_피해서번호 button')[i].classList.remove('분석자료_고정등번호색칠');
      document.querySelectorAll('#임시_흰색부분 button')[i].innerHTML='';
      document.querySelectorAll('#임시_흰색부분 button')[i].classList.remove('분석자료_고정등번호색칠');
    }

  }
  if (e.target.classList.contains('클릭_더블클릭')) {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.classList.contains(클릭_더블클릭)')
    var 숫자;
    if (e.target.innerHTML=='') {
      숫자=0;e.target.innerHTML=숫자;
    } else if (e.target.innerHTML==6) {
      숫자='';e.target.innerHTML=숫자;
    } else {
      숫자=Number(e.target.innerHTML)
      숫자+=1;
      e.target.innerHTML=숫자;
    }
  }
  if (e.target.innerHTML=='추출') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==추출');
    for (var i=0; i<document.querySelectorAll('.클릭_더블클릭').length; i++) {//1부터 (두번째꺼부터)
      document.querySelectorAll('.클릭_더블클릭')[i].innerHTML='';
    }
  }
  if (e.target.innerHTML=='추출된번호clear') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==추출된번호clear');
    document.querySelector('#추출된번호_30개씩무한누적').innerHTML='';
    document.querySelector('#번호누적개수').innerHTML=0;
  }
  if (e.target.id=='여섯개안되면') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.id==여섯개안되면');
    if (document.querySelector('#여섯개안되면').innerHTML=='여섯개안되면 6개 맞추기') {
      document.querySelector('#여섯개안되면').innerHTML='나오는대로';
      document.querySelector('#여섯개안되면').style.width='85px';
    } else {
      document.querySelector('#여섯개안되면').innerHTML='여섯개안되면 6개 맞추기';
      document.querySelector('#여섯개안되면').style.width='180px';
    }
  }
}
function 리스너용_세로구분_분석자료_전체_dblclick시(e) {
  //if (e.target.classList.contains('클릭_더블클릭')) {
  //  console.log('리스너용_세로구분_분석자료_전체_dblclick시(e) ==> 더블클릭')
  //  e.target.innerHTML='';
  //}
}
var 리스너용빈곳번호=document.querySelector('#분석자료_여러45칸');
function 리스너용빈곳번호_번호색칠(e) {
  if (e.target.nodeName!='BUTTON') {console.log('버튼아님'); return;}
  if (e.target.innerHTML!='') {console.log('innerHTML있음'); return;}
  e.target.classList.add('표시');
  
  var 카운트=-1;
  var 표시배열값;
  var 표시포함버튼들=document.querySelectorAll('#' + e.target.parentNode.parentNode.id + ' button');
  for (var i=0; i<45; i++) {
    카운트+=1;
    if (표시포함버튼들[i].classList.contains('표시')) {표시배열값=카운트;}
  }
  e.target.classList.remove('표시');
  var 번호들=[];
  var 표시중단;
  //본인포함 오른쪽진행 1.배열44까지, 
  for (var i=표시배열값; i<45; i++) {//뒤로
    if (표시포함버튼들[i].innerHTML!=''){표시중단='중단';}
    if (표시중단!='중단' && 표시포함버튼들[i].innerHTML=='') {번호들.push(i+1);}
  }
  if (표시중단!='중단') {//2.배열44까지 중단없으면 0부터
    for (var i=0; i<45; i++) {//뒤로
      if (표시포함버튼들[i].innerHTML!=''){표시중단='중단';}
      if (표시중단!='중단' && 표시포함버튼들[i].innerHTML=='') {번호들.push(i+1);}
    }
  }
  표시중단='';
  //본인포함 왼쪽진행 1.배열44까지, 
  for (var i=표시배열값; i>=0; i--) {//뒤로
    if (표시포함버튼들[i].innerHTML!=''){표시중단='중단';}
    if (표시중단!='중단' && 표시포함버튼들[i].innerHTML=='') {번호들.push(i+1);}
  }
  if (표시중단!='중단') {//2.배열44까지 중단없으면 0부터
    for (var i=44; i>=0; i--) {//뒤로
      if (표시포함버튼들[i].innerHTML!=''){표시중단='중단';}
      if (표시중단!='중단' && 표시포함버튼들[i].innerHTML=='') {번호들.push(i+1);}
    }
  }
   번호들=new Set(번호들); //중복제거 배열아님 : 색칠이 없을때 중복발생
   번호들=[...번호들];//배열로 전환
   번호들.sort((a,t) => a-t);//정렬
  console.log('번호들 : ' + 번호들)
  //색칠하기
  document.querySelector('#id_임시버튼45').classList.remove('d-none');
  for (var i=0; i<45; i++) {
    document.querySelectorAll('#id_임시버튼45 button')[i].classList.remove('색칠용버튼');//지워준다, 아래꺼와 별개지만 반복횟수가 같다
    if (번호들.filter(element => element==i+1).length>0) {
      document.querySelectorAll('#id_임시버튼45 button')[i].classList.add('색칠용버튼');
      document.querySelectorAll('#id_임시버튼45 button')[i].setAttribute('title',i+1);
    }
  }  
}
리스너용_세로구분_분석자료_전체.addEventListener('click',리스너용_세로구분_분석자료_전체_click시);
리스너용_세로구분_분석자료_전체.addEventListener('dblclick',리스너용_세로구분_분석자료_전체_dblclick시);
리스너용빈곳번호.addEventListener('click',리스너용빈곳번호_번호색칠)
