if ('초기작업'=='초기작업') {
    //회차SELECT에 회차 넣는것은 공통..
  var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
  var 회차select안옵션html;
  var 회차개수=Number(당번전체.length/9);//현재회차까지 회차개수
  var 회차selectedIndex=0;//초기값
  for (var i=0; i<회차개수; i++) {
    if (i==0) {
      회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>'
    } else {
      회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>' + 회차select안옵션html
    }
  }
  document.querySelector('#회차select').innerHTML=회차select안옵션html; //<option>회차</option>

  document.querySelector('#회귀수입력').value=1;
  var 일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  회차변경실행();//함수가 아래에 있어도 되네..
}
function 회차변경실행() {
  console.log('회차변경실행()');
  //회차SELECT부분,당번전체[0]은 2001년처음정보
  회차selectedIndex=document.querySelector('#회차select').selectedIndex;
  document.querySelector('#span_날짜').innerHTML=당번전체[-(회차selectedIndex*9) + 당번전체.length - 8]; //날짜, -9하면 회차(9개정보)
  for (var i=0; i<7; i++) {
    document.querySelectorAll('#span_날짜 ~ p')[i].innerHTML=당번전체[-(회차selectedIndex*9) + 당번전체.length - 7 + i]; 
  }
  //id_배치_왼쪽_다음회차 : 10게 p
  var id_배치_왼쪽_다음회차=document.querySelectorAll('#id_배치_왼쪽_다음회차 p');
  id_배치_왼쪽_다음회차[0].innerHTML='다음';
  id_배치_왼쪽_다음회차[1].innerHTML=(Number(document.querySelector('#회차select').value.substring(0, document.querySelector('#회차select').value.length-1))+1) + '회';
  if (회차selectedIndex==0) {
    for (var 내부=2;내부<10;내부++) {
      id_배치_왼쪽_다음회차[내부].innerHTML='';
    }
   } else {
    id_배치_왼쪽_다음회차[2].innerHTML=당번전체[-((회차selectedIndex-1)*9) + 당번전체.length - 8];//날짜
    for (var 내부=3;내부<10;내부++) {
      id_배치_왼쪽_다음회차[내부].innerHTML=당번전체[-((회차selectedIndex-1)*9) + 당번전체.length - 7 + 내부-3]; 
    }
  }
  //5,10,15,30,60회귀. 가로한줄당 p가 10개, [0]:100 200 ..., [1]:회차, [2]:날짜, [3~9]:번호
  일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  var 열개씩다섯줄p=document.querySelectorAll('#id_배치_왼쪽_고정회귀5종 p');
  var 회귀숫자;
  var 순번=0;
  var 최근회차=Number(document.querySelector('#회차select').value.substring(0, document.querySelector('#회차select').value.length-1))
  for (var 반복=1;반복<6;반복++) {
    if (반복==1) {회귀숫자=Number(5);}
    if (반복==2) {회귀숫자=Number(10);}
    if (반복==3) {회귀숫자=Number(15);}
    if (반복==4) {회귀숫자=Number(30);}
    if (반복==5) {회귀숫자=Number(60);}

    열개씩다섯줄p[순번].innerHTML=회귀숫자 + '회귀';
    순번+=1;
    열개씩다섯줄p[순번].innerHTML=(최근회차-회귀숫자) + '회';
    순번+=1;
    열개씩다섯줄p[순번].innerHTML=당번전체[-((회차selectedIndex+회귀숫자)*9) + 당번전체.length - 8];//날짜
    순번+=1;

    for (var 내부당번=0;내부당번<7;내부당번++) {
      열개씩다섯줄p[순번].innerHTML=당번전체[-((회차selectedIndex+회귀숫자)*9) + 당번전체.length - 7 + 내부당번];
      순번+=1;
    }
  }
  //id_배치_왼쪽_회귀변경 input값 회귀(1,5,100,input값). 20개까지(100회귀는 가능한 수만큼)
  회귀숫자=Number(document.querySelector('#회귀수입력').value);
  document.querySelector('#js_회귀변경p생성').innerHTML='';
  var js_회귀변경p생성html='';
  for (var 값이있으면=0; 값이있으면<20; 값이있으면++) {
    if (당번전체[-((회차selectedIndex+(회귀숫자*(값이있으면+1)))*9) + 당번전체.length - 8]) {
      js_회귀변경p생성html+='<P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><h6></h6><br>'
    }
  }
  document.querySelector('#js_회귀변경p생성').innerHTML=js_회귀변경p생성html;
  var 회귀변경가로개수=document.querySelectorAll('#js_회귀변경p생성 p').length/10;
  순번=0;
  for (var 값이있으면=0; 값이있으면<20; 값이있으면++) {
    if (당번전체[-((회차selectedIndex+(회귀숫자*(값이있으면+1)))*9) + 당번전체.length - 8]) {
      document.querySelectorAll('#js_회귀변경p생성 p')[순번].innerHTML=회귀숫자*(값이있으면+1);
      순번+=1;
      document.querySelectorAll('#js_회귀변경p생성 p')[순번].innerHTML=(최근회차-(회귀숫자*(값이있으면+1))) + '회';
      순번+=1;
      document.querySelectorAll('#js_회귀변경p생성 p')[순번].innerHTML=당번전체[-((회차selectedIndex+(회귀숫자*(값이있으면+1)))*9) + 당번전체.length - 8];//날짜
      순번+=1;

      for (var 내부당번=0;내부당번<7;내부당번++) {
        document.querySelectorAll('#js_회귀변경p생성 p')[순번].innerHTML=당번전체[-((회차selectedIndex+(회귀숫자*(값이있으면+1)))*9) + 당번전체.length - 7 + 내부당번];
        순번+=1;
      }
    }
  }
  //최근회차가 맨앞에 고정으로 추가되기를 원한다.
  document.querySelector('#js_회귀변경p생성').innerHTML='<P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><h6></h6><br>' + document.querySelector('#js_회귀변경p생성').innerHTML;
  document.querySelectorAll('#js_회귀변경p생성 p')[0].innerHTML='';
  document.querySelectorAll('#js_회귀변경p생성 p')[1].innerHTML=document.querySelector('#회차select').value;
  document.querySelectorAll('#js_회귀변경p생성 p')[2].innerHTML=document.querySelector('#span_날짜').innerHTML;
  document.querySelectorAll('#js_회귀변경p생성 p')[3].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[0].innerHTML;
  document.querySelectorAll('#js_회귀변경p생성 p')[4].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[1].innerHTML;
  document.querySelectorAll('#js_회귀변경p생성 p')[5].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[2].innerHTML;
  document.querySelectorAll('#js_회귀변경p생성 p')[6].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[3].innerHTML;
  document.querySelectorAll('#js_회귀변경p생성 p')[7].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[4].innerHTML;
  document.querySelectorAll('#js_회귀변경p생성 p')[8].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[5].innerHTML;
  document.querySelectorAll('#js_회귀변경p생성 p')[9].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[6].innerHTML;
   //----최근회차가 맨앞에 고정으로 추가되기를 원한다.>
  //미출수기록
  if (회차selectedIndex>(회차개수-15)) {alert('회차selectedIndex>(회차개수-15)');return;}
  var 최근회차포함5주간번호들=[];//당번전체 한회당 9개, 회차_날짜_번호7개, 작업중
  var 최근회차포함10주간번호들=[];
  var 최근회차포함15주간번호들=[];
  // console.log('회차개수 : ' + 회차개수)
  // console.log('회차selectedIndex : ' + 회차selectedIndex)
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+1])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+2])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+3])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+4])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+5])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+6])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+7])
  // console.log(당번전체[(회차개수-회차selectedIndex-1)*9+8])
  // console.log((회차개수-회차selectedIndex-1)*9 % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+1) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+2) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+3) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+4) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+5) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+6) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+7) % 9)
  // console.log(((회차개수-회차selectedIndex-1)*9+8) % 9)
  // console.log('당번전체.length : ' + 당번전체.length + ' : ' + ((회차개수-회차selectedIndex-1)*9+8))
  for (var i=0; i<(9*15); i++) {//회차개수-회차selectedIndex-1+8 : 해당회차 마지막 번호
    if (((회차개수-회차selectedIndex-1)*9+8-i) % 9 < 2||((회차개수-회차selectedIndex-1)*9+8-i) % 9 == 8) {
      //회차, 날짜 건너뜀. or||보볼제외 뒤에서 온다.
    } else {
      if (i<(9*5)) {최근회차포함5주간번호들.push(당번전체[((회차개수-회차selectedIndex-1)*9+8-i)])}
      if (i<(9*10)) {최근회차포함10주간번호들.push(당번전체[((회차개수-회차selectedIndex-1)*9+8-i)])}
      if (i<(9*15)) {최근회차포함15주간번호들.push(당번전체[((회차개수-회차selectedIndex-1)*9+8-i)])}
    }
  }
  var 미출수5_html='';
  var 미출수10_html='';
  var 미출수15_html='';
  var 미출수5_html_개수=0;
  var 미출수10_html_개수=0;
  var 미출수15_html_개수=0;
  // for (var i=0; i<45; i++) {
  //   if (최근회차포함5주간번호들.filter(element => (i+1).toString() === element).length==0) {미출수5_html+='<p>' + (i+1) + '</p>'}
  //   if (최근회차포함10주간번호들.filter(element => (i+1).toString() === element).length==0) {미출수10_html+='<p>' + (i+1) + '</p>'}
  //   if (최근회차포함15주간번호들.filter(element => (i+1).toString() === element).length==0) {미출수15_html+='<p>' + (i+1) + '</p>'}
  // }
  for (var i=0; i<45; i++) {
    if (최근회차포함5주간번호들.filter(element => (i+1).toString() === element).length==0) {
      미출수5_html+='<p>' + (i+1) + '</p>';
      미출수5_html_개수+=1;
      if (최근회차포함10주간번호들.filter(element => (i+1).toString() === element).length==0) {
        미출수10_html+='<p>' + (i+1) + '</p>';
        미출수10_html_개수+=1;
      } else {
        미출수10_html+='<p></p>';
      }
      if (최근회차포함15주간번호들.filter(element => (i+1).toString() === element).length==0) {
        미출수15_html+='<p>' + (i+1) + '</p>';
        미출수15_html_개수+=1;
      } else {
        미출수15_html+='<p></p>';
      }
    }
  }
  미출수5_html='<div id="미출수5주간"><span>5주간미출</span><span id="전체변수_색칠유형_미출수5주">색칠</span><span>' + 미출수5_html_개수 + '개</span>' + 미출수5_html + '</div>';
  미출수10_html='<div id="미출수10주간"><span>10주간미출</span><span id="전체변수_색칠유형_미출수10주">색칠</span><span>' + 미출수10_html_개수 + '개</span>' + 미출수10_html + '</div>';
  미출수15_html='<div id="미출수15주간"><span>15주간미출</span><span id="전체변수_색칠유형_미출수15주">색칠</span><span>' + 미출수15_html_개수 + '개</span>' + 미출수15_html + '</div>';
  document.querySelector('#배치_오른쪽_5_10_15주미출수').innerHTML=미출수5_html + 미출수10_html + 미출수15_html;

  //5주출수, 최근회차포함5주간번호들
  var 횟수담기=[];
  for (var i=1; i<46; i++) {
    횟수담기.push(최근회차포함5주간번호들.filter(element => i == element).length)
  }
  //
  var maxValue = Math.max.apply(null, 횟수담기);
  var minValue = Math.min.apply(null, 횟수담기);
  // console.log('최근회차포함5주간번호들 : ' + 최근회차포함5주간번호들)
  // console.log('횟수담기 : ' + 횟수담기)
  // console.log('maxValue : ' + maxValue)
  // console.log('minValue : ' + minValue)
  //횟수만 만들기 '<div id="미출수15주간"><span>15주간</span><span onclick="색칠1_미출수15주_색칠할번호_전체변수설정()">색칠</span>' + 미출수15_html + '</div>'
  var 횟수만html='';
  var 개수확인;
  for (var i=minValue;i<=maxValue; i++) {//최대 최소 사이의 값이 없을수도 있음.
    if (횟수담기.filter(element => i == element).length>0) {
      횟수만html+='<div id="오주' + i + '출수"><span>오주' + i + '출수</span><span id="전체변수_색칠유형_오주' + i + '출수">색칠</span>'
      //개수확인
      개수확인=0;
      for (var 번호순회=0;번호순회<45;번호순회++) {
        if(횟수담기[번호순회]==i) {개수확인+=1;}
      }
      횟수만html+='<span>' + 개수확인 + '개</span>'
      //html만들기
      for (var 번호순회=0;번호순회<45;번호순회++) {
        if(횟수담기[번호순회]==i) {횟수만html+='<p>' + (번호순회+1) + '</p>'}
      }
      횟수만html+='</div>'
    }
  }
  //'<div id="미출수15주간"><span>15주간</span><span onclick="색칠1_미출수15주_색칠할번호_전체변수설정()">색칠</span>' + 미출수15_html + '</div>'
  document.querySelector('#배치_오른쪽_5주출수').innerHTML=횟수만html;

  //전체변수대로 색칠 하려면 자체적으로 변수를 만들어줘야함. 변경할때
  if (전체변수_색칠유형=='전체변수_색칠유형_미출수5주') {
    기존표시제거();
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#미출수5주간 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (전체변수_색칠유형=='전체변수_색칠유형_미출수10주') {
    기존표시제거();
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#미출수10주간 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (전체변수_색칠유형=='전체변수_색칠유형_미출수15주') {
    기존표시제거();
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#미출수15주간 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (전체변수_색칠유형=='전체변수_색칠유형_오주0출수') {
    기존표시제거();
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#오주0출수 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (전체변수_색칠유형=='전체변수_색칠유형_오주1출수') {
    기존표시제거();
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#오주1출수 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (전체변수_색칠유형=='전체변수_색칠유형_오주2출수') {
    기존표시제거();
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#오주2출수 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (전체변수_색칠유형=='전체변수_색칠유형_오주3출수') {
    기존표시제거();
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#오주3출수 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (전체변수_색칠유형=='전체변수_색칠유형_오주4출수') {
    기존표시제거();
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#오주4출수 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (전체변수_색칠유형=='전체변수_색칠유형_오주5출수') {
    기존표시제거();
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#오주5출수 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  전체변수대로색칠()
}
var 전체변수_색칠할번호자신요소들;//없을수도 있음
var 전체변수_배열_색칠할번호들=[];
var 전체변수_색칠유형="";//회귀변경, 회차변경시 우측 정보가 초기화되어 색칠이 해제되므로....

var 바디=document.querySelector('body');
function 클릭이벤트통합(e) {
  var 아이디=e.target.id;
  console.log('클릭이벤트통합(e), e.target.id : ' + e.target.id);
  //색칠관련 요소 클릭시 전체변수_'색칠유형 설정:전체변수대로색칠() 관련됨
  if (아이디=='전체변수_색칠유형_최근회차') {
    기존표시제거();
    전체변수_색칠유형=아이디;
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p');//최근회차, p 7개
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {//7번째 제외
      if (((i+1) % 7) > 0 && 전체변수_색칠할번호자신요소들[i].innerHTML!='') {//7일때 나머지 0;
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수대로색칠();
  }
  if (아이디=='전체변수_색칠유형_미출수5주') {
    기존표시제거();
    전체변수_색칠유형=아이디;
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#미출수5주간 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (아이디=='전체변수_색칠유형_미출수10주') {
    기존표시제거();
    전체변수_색칠유형=아이디;
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#미출수10주간 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (아이디=='전체변수_색칠유형_미출수15주') {
    기존표시제거();
    전체변수_색칠유형=아이디;
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#미출수15주간 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (아이디=='전체변수_색칠유형_오주0출수') {
    기존표시제거();
    전체변수_색칠유형=아이디;
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#오주0출수 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (아이디=='전체변수_색칠유형_오주1출수') {
    기존표시제거();
    전체변수_색칠유형=아이디;
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#오주1출수 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (아이디=='전체변수_색칠유형_오주2출수') {
    기존표시제거();
    전체변수_색칠유형=아이디;
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#오주2출수 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (아이디=='전체변수_색칠유형_오주3출수') {
    기존표시제거();
    전체변수_색칠유형=아이디;
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#오주3출수 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (아이디=='전체변수_색칠유형_오주4출수') {
    기존표시제거();
    전체변수_색칠유형=아이디;
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#오주4출수 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }
  if (아이디=='전체변수_색칠유형_오주5출수') {
    기존표시제거();
    전체변수_색칠유형=아이디;
    전체변수_배열_색칠할번호들=[];//초기화 해 놓는다
    전체변수_색칠할번호자신요소들=document.querySelectorAll('#오주5출수 p');
    //색칠할 번호들 담기
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      if (전체변수_색칠할번호자신요소들[i].innerHTML!='') {
        전체변수_배열_색칠할번호들.push(전체변수_색칠할번호자신요소들[i].innerHTML);
        전체변수_색칠할번호자신요소들[i].classList.add('표시');
      }
    }
    전체변수_색칠할번호자신요소들=document.querySelectorAll('.표시');
    전체변수대로색칠();
  }






  //
  if (아이디=='js색칠해제와변수초기화') {색칠해제와변수초기화();return;}
  if (아이디=='js회귀수증가') {회귀수증가();return;}
  if (아이디=='js회귀수감소') {회귀수감소();return;}
  if (아이디=='js회귀변경') {회귀변경();return;}
  if (아이디=='js회귀변경1') {회귀변경1();return;}
  if (아이디=='js회귀변경5') {회귀변경5();return;}
  if (아이디=='js회귀변경100') {회귀변경100();return;}
  if (아이디=='js회차증가') {회차증가();return;}
  if (아이디=='js회차감소') {회차감소();return;}
  if (아이디=='js전체번호지움') {document.querySelector('#번호입력').innerHTML='';return;}
  if (아이디=='js입력번호횟수계산') {회차감소();return;}
  if (e.target.parentNode.id=='modal_왼쪽' && e.target.nodeName=='BUTTON') {//클릭한거 색칠 전환, 색칠 6개일때 번호추가
    var 클릭수=Number(document.querySelector('#modal클릭수').innerHTML);
    // bg-primary있으면 빼고 id=클릭수 숫자 -1
    if (e.target.classList.contains('bg-primary')) {
      e.target.classList.remove('bg-primary');
      클릭수=Number(클릭수-1);
      document.querySelector('#modal클릭수').innerHTML=클릭수;
      // bg-primary 없으면 넣고 id=클릭수 숫자 +1
    } else if(!e.target.classList.contains('bg-primary'))  {
      e.target.classList.add('bg-primary');
      클릭수=Number(클릭수+1);
      document.querySelector('#modal클릭수').innerHTML=클릭수;
    }
    // 클릭수가 6일때
    if (클릭수==6) {
      var 버튼들=document.querySelectorAll('#modal_왼쪽 button');
      var 추가할innerhtml='';
      //숫자 6개 입력
      for (var i=0; i<버튼들.length; i++) {
        if (버튼들[i].classList.contains('bg-primary')) {
          //innertext : 번호
          추가할innerhtml+= '<P>' + 버튼들[i].innerHTML + '</P>';
        }
      }
      추가할innerhtml='<div><span>삭제</span>' + 추가할innerhtml + '</div>'
  
      document.querySelector('#번호입력').innerHTML+=추가할innerhtml;
  
      //색칠해제후 클릭수0 초기화
      for (var i=0; i<버튼들.length; i++) {
        if (버튼들[i].classList.contains('bg-primary')) {
          버튼들[i].classList.remove('bg-primary');
        }
      }
      document.querySelector('#modal클릭수').innerHTML=0
    }
  }
  if (e.target.innerHTML=='삭제' && e.target.parentNode.parentNode.id=='번호입력') {e.target.parentNode.outerHTML='';}//번호하나삭제
  if (아이디=='js입력번호횟수계산') {번호입력나온횟수();return;}
}

바디.addEventListener('click', 클릭이벤트통합); 

function 기존표시제거() {
  //먼저 다 지운다.
  var 표시요소=document.querySelectorAll('.표시');
  var 표시요소개수=표시요소.length;
  if (표시요소개수>0) {
    for (var i=0; i<표시요소개수; i++) {
      표시요소[i].classList.remove('표시');
    }
  }
}
function 색칠해제() {
  var 본인색칠요소=document.querySelectorAll('.본인색칠');
  var 본인색칠개수=본인색칠요소.length;
  if (본인색칠요소.length>0) {
    for (var i=0; i<본인색칠개수; i++) {
      본인색칠요소[i].classList.remove('본인색칠');
    }
  }
  //먼저 다 지운다.
  var 왼쪽색칠요소=document.querySelectorAll('.왼쪽색칠');
  var 왼쪽색칠개수=왼쪽색칠요소.length;
  if (왼쪽색칠요소.length>0) {
    for (var i=0; i<왼쪽색칠개수; i++) {
      왼쪽색칠요소[i].classList.remove('왼쪽색칠');
    }
  }
}
function 전체변수_색칠유형_초기화() {
  전체변수_색칠유형="";
}
function 색칠해제와변수초기화() {
  전체변수_색칠유형_초기화();
  색칠해제();
}
function 회귀수증가() {
  if (document.querySelector('#회귀수입력').value>0) {
    document.querySelector('#회귀수입력').value=Number(document.querySelector('#회귀수입력').value) + 1;
  }
  일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  회차변경실행();
}
function 회귀수감소() {
  if (document.querySelector('#회귀수입력').value>1) {
    document.querySelector('#회귀수입력').value=Number(document.querySelector('#회귀수입력').value) - 1;
  } else {alert('가장 최근회차입니다.')  }
  일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  회차변경실행();
}
function 회귀변경() {
  일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  회차변경실행();
}
function 회귀변경1() {
  document.querySelector('#회귀수입력').value=1;
  일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  회차변경실행();
}
function 회귀변경5() {
  document.querySelector('#회귀수입력').value=5;
  일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  회차변경실행();
}
function 회귀변경100() {
  document.querySelector('#회귀수입력').value=100;
  일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
  회차변경실행();
}
function 회차증가() {//index 0일때 최근회차, 증가는 index 감소
  console.log('회차증가()');
  if (회차selectedIndex==0) {
    alert('가장 최근 회차입니다')
  } else {
    document.querySelector('#회차select').selectedIndex=Number(회차selectedIndex-1);
    회차변경실행()
  }
}
function 회차감소() {//index 0일때 최근회차, 감소는 index 증가
  console.log('회차감소()');
    document.querySelector('#회차select').selectedIndex=Number(회차selectedIndex+1);
    회차변경실행()
}
function 번호입력나온횟수() {
  console.log('번호입력나온횟수()')
  var 번호입력p들=document.querySelectorAll('#번호입력 p');
  if (번호입력p들.length==0) {document.querySelector('#js나온횟수결과').innerHTML='';return;}
  var 번호담기=[];
  for (var i=0; i<번호입력p들.length; i++) {
    번호담기.push(번호입력p들[i].innerHTML)
  }
  var 횟수담기=[];
  for (var i=1; i<46; i++) {
    횟수담기.push(번호담기.filter(element => i == element).length)
  }
  //
  var maxValue = Math.max.apply(null, 횟수담기);
  var minValue = Math.min.apply(null, 횟수담기);
  console.log('번호담기 : ' + 번호담기)
  console.log('횟수담기 : ' + 횟수담기)
  console.log('maxValue : ' + maxValue)
  console.log('minValue : ' + minValue)
  //횟수만 만들기
  var 횟수만html='';
  for (var i=minValue;i<=maxValue; i++) {//최대 최소 사이의 값이 없을수도 있음.
    if (횟수담기.filter(element => i == element).length>0) {
      횟수만html+='<div><span>' + i + '회</span>'
      for (var 번호순회=0;번호순회<45;번호순회++) {
        if(횟수담기[번호순회]==i) {횟수만html+='<p>' + (번호순회+1) + '</p>'}
      }
      횟수만html+='</div>'
    }
  }
  document.querySelector('#js나온횟수결과').innerHTML=횟수만html;
}
function 전체변수대로색칠() {
  색칠해제();
  if (전체변수_색칠유형=='') {return;}
  console.log('전체변수대로색칠()')
  //자신 색칠, 하나라도 있으면
  if (전체변수_색칠할번호자신요소들) {
    for (var i=0; i<전체변수_색칠할번호자신요소들.length; i++) {
      전체변수_색칠할번호자신요소들[i].classList.add('본인색칠');
    }
  }
  //왼쪽색칠
  var 몇개=0;
  console.log(전체변수_배열_색칠할번호들)
  if (전체변수_배열_색칠할번호들) {
    var 왼쪽div안10개p전체=document.querySelectorAll('.왼쪽당번 p');//0회귀,1회차,2날짜, 9보볼
    for (var i=0; i<왼쪽div안10개p전체.length; i++) {
      if (((i+1) % 10) > 3) {//나머지 : 1회귀,2회차,3날짜, 0보볼
        if (전체변수_배열_색칠할번호들.find(element => element==왼쪽div안10개p전체[i].innerHTML)) {
          몇개+=1;
          왼쪽div안10개p전체[i].classList.add('왼쪽색칠');
        }
      }
      if ((i+1) % 10 == 0) {
        if (몇개>0) {
          왼쪽div안10개p전체[i].nextElementSibling.innerHTML=몇개 + '개';
          몇개=0;
        } else {

        }
      }
    }
  } else {

  }

}












