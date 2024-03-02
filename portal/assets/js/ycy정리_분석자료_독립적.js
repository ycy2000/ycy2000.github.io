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
    if (오주간번호_보볼제외.filter(element => i == element).length>0) {//#임시_미출5
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
    // document.querySelectorAll('#임시_3출이상45 button')[i-1].innerHTML=i+1;
    // document.querySelectorAll('#임시_3출이상45 button')[i-1].classList.add('분석자료_고정등번호색칠')
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
    if (버튼안숫자개수<document.querySelectorAll('.클릭_더블클릭')[i].innerHTML) {
      alert('추출개수 기록 숫자가 숫자가 있는 버튼수보다 크면 안됨 : return;');
      분석자료_번호추출_진행가능판단='불가능';
    }
  }
  

}
function 분석자료_번호추출() {
  분석자료_번호추출_진행가능판단_실행();
  if (분석자료_번호추출_진행가능판단=='불가능') {return;}
  console.log('분석자료_번호추출()')
  var 추출개수=Number(document.querySelector('#분석자료_번호추출개수').value);
  var 누적할요소=document.querySelector('#추출된번호_30개씩무한누적');
  var 추가할html='';
  var 추출개수카운트=0;
  var 삼십카운트=0;//div묶고
  for (var i=0; i<추출개수; i++) {//추출개수 : <div>버튼6개</div>
    삼십카운트+=1;
    var 인스턴트text='';
    var 생성번호배열=['','','','','',''];//length==0, 각 i 당 배열 담을때 모두 돌아야한다.

    //마구 넣고, 중복제거가 6개 초과시 6개만 가져오는것으로. 6개 미만인경우 값없는 버튼

    for (var 한줄=0; 한줄<document.querySelectorAll('#분석자료_여러45칸 .클릭_더블클릭').length; 한줄++) {
      var 버튼안숫자개수=0;
      var 한줄추출개수=Number(document.querySelectorAll('.클릭_더블클릭')[한줄].innerHTML);
      var 한줄번호배열=[];
      var 한줄랜덤배열=[];
      var 여섯개만=[];
      if (document.querySelectorAll('.클릭_더블클릭')[한줄].innerHTML.length>0) {
        for (var 한줄내부=0; 한줄내부<45; 한줄내부++) {
          if (document.querySelectorAll('#분석자료_여러45칸 > div:nth-of-type(' + (한줄+2) + ') button')[한줄내부].innerHTML.length>0) {
            버튼안숫자개수+=1;
            한줄번호배열.push(Number(document.querySelectorAll('#분석자료_여러45칸 > div:nth-of-type(' + (한줄+2) + ') button')[한줄내부].innerHTML));        
          }
        }
      }
      if (한줄번호배열.length>0 && 한줄추출개수>0 && 버튼안숫자개수>=document.querySelectorAll('.클릭_더블클릭')[한줄].innerHTML) {
        for (var 한줄랜덤배열i=0; i<한줄번호배열.length; 한줄랜덤배열i++) {
          한줄랜덤배열.push(Math.random());
        }
        for (var 한줄추출개수i=0; i<한줄추출개수; 한줄추출개수i++) {
          // 생성번호배열.push(한줄번호배열(한줄랜덤배열.indexof(Math.max(...한줄랜덤배열))));
          생성번호배열.push(한줄번호배열[한줄랜덤배열.indexOf(Math.max(...한줄랜덤배열))]);
          한줄랜덤배열[한줄랜덤배열.indexOf(Math.max(...한줄랜덤배열))]=0;
        }
        생성번호배열=new Set(생성번호배열); //중복제거 배열아님 : 색칠이 없을때 중복발생
        생성번호배열=[...생성번호배열];//배열로 전환
        for (var 생성번호배열i=0; 생성번호배열i<6; 생성번호배열i++) {
          if (생성번호배열[생성번호배열i]) {
            여섯개만.push(생성번호배열[생성번호배열i]);
          } else {
            여섯개만.push('');
          }
        }
        여섯개만.sort((a,t) => a-t);//정렬
        console.log('여섯개만 : ' + 여섯개만)
      }
    }

    for (var 인스턴트text내부=0; 인스턴트text내부<6; 인스턴트text내부++) {
      if (여섯개만[인스턴트text내부]) {
        인스턴트text+='<button>' + 여섯개만[인스턴트text내부] + '</button>';
      } else {
        인스턴트text+='<button></button>';
      }

    }
    console.log('추출개수 : ' + (i+1))
    인스턴트text='<div>' + 인스턴트text + '</div>' //가로한줄
    추가할html+=인스턴트text //가로한줄
    if (삼십카운트==30 || (i+1)==추출개수) {
      추가할html='<div>' + 추가할html + '</div>'
      누적할요소.innerHTML+=추가할html;
      추가할html='';
      삼십카운트=0;
    }
  }
  var 클릭_더블클릭=document.querySelectorAll('.클릭_더블클릭');
  //클릭_더블클릭이 0보다큰것이면 실행 : 추출개수가 번호개수보다 크지않다면 진행
  


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
  if (e.target.innerHTML=='넣기1' || e.target.innerHTML=='넣기2' || e.target.innerHTML=='넣기3' || e.target.innerHTML=='넣기4') {
    console.log('리스너용_세로구분_분석자료_전체_click시(e) ==> e.target.innerHTML==넣기1,넣기2,넣기3,넣기4')
    if (e.target.innerHTML=='넣기1') {넣기아이디='임시_1'}
    if (e.target.innerHTML=='넣기2') {넣기아이디='임시_2'}
    if (e.target.innerHTML=='넣기3') {넣기아이디='임시_3'}
    if (e.target.innerHTML=='넣기4') {넣기아이디='임시_4'}
    분석자료_넣기아이디에_색칠번호넣기();
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
      숫자=1;e.target.innerHTML=숫자;
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
  }
}
function 리스너용_세로구분_분석자료_전체_dblclick시(e) {
  if (e.target.classList.contains('클릭_더블클릭')) {
    console.log('리스너용_세로구분_분석자료_전체_dblclick시(e) ==> 더블클릭')
    e.target.innerHTML='';
  }
}
var 리스너용빈곳번호=document.querySelector('#분석자료_여러45칸');
function 리스너용빈곳번호_번호색칠(e) {
  if (e.target.nodeName!='BUTTON') {console.log('버튼아님'); return;}
  if (e.target.innerHTML!='') {console.log('innerHTML있음'); return;}
  e.target.classList.add('표시');
  var 카운트=-1;
  var 표시배열값;
  var 표시포함버튼들=document.querySelectorAll('#' + e.target.parentNode.id + ' button');
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