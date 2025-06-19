//리뉴얼
if ('초기작업'=='초기작업') {
  var 변경할페이지='';
  var 색칠할번호들노랑및일반=[];
  var 색칠할번호들주황=[];
  document.querySelector('#회귀결과정보수').value=50;
  var 색칠유형='';
  var 회차selectedIndex=0;
  document.querySelector('#회귀수입력').value=1;

    //회차SELECT에 회차옵션 넣는 동작. 회귀수 설정(현재 상태로)
    if ('회차옵션설정및회귀수정의'=='회차옵션설정및회귀수정의'){
      var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
      var 회차select안옵션html;
      var 회차개수=Number(당번전체.length/9);//현재회차까지 회차개수
      for (var i=0; i<회차개수; i++) {
        if (i==0) {
          회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>'
        } else {
          회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>' + 회차select안옵션html
        }
      }
      document.querySelector('#회차select').innerHTML=회차select안옵션html; //<option>회차</option>
      var 일_오_백회귀수선택=Number(document.querySelector('#회귀수입력').value);
    }

  회차변경실행();//함수가 아래에 있어도 되네..
}
function 페이지변경() {
  if (변경할페이지=='') {return;}
  var 모든페이지=document.querySelectorAll('.페이지');
  for (var i=0; i<모든페이지.length; i++) {
    모든페이지[i].classList.add('d-none');
  }
  document.querySelector('#' + 변경할페이지).classList.remove('d-none');
  변경할페이지='';//초기화 상태로 
}
function 회차변경실행() {
  console.log('회차변경실행()');
  //회차selectedIndex에 따라 번호들이 들어간다. #span_날짜=최근회차 날짜
  console.log('회차selectedIndex= : ' + 회차selectedIndex)
  회차selectedIndex=document.querySelector('#회차select').selectedIndex;
  //    1.최근회차 날짜와 번호넣기
  if ('회차selectedIndex에따라_최근번호날짜와번호넣기'=='회차selectedIndex에따라_최근번호날짜와번호넣기') {
    document.querySelector('#span_날짜').innerHTML=당번전체[-(회차selectedIndex*9) + 당번전체.length - 8]; //날짜, -9하면 회차(9개정보)
    for (var i=3; i<10; i++) {//P가 10개다. 다른것과 맞추기위해
      document.querySelectorAll('#span_날짜 ~ p')[i].innerHTML=당번전체[-(회차selectedIndex*9) + 당번전체.length - 7 + (i-3)]; 
    }
  }
  //    2.최근회차 다음회차가 있으면  날짜와 번호넣기
  if ('최근회차다음회차가있으면날짜와번호넣기'=='최근회차다음회차가있으면날짜와번호넣기') {
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
    //js피해서색칠_우측_다음회차
    var id_배치_왼쪽_다음회차=document.querySelectorAll('#js피해서색칠_우측_다음회차 p');
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
  }
  //    3.5,10,15,30,60회귀. 가로한줄당 p가 10개, [0]:100 200 ..., [1]:회차, [2]:날짜, [3~9]:번호
  if ('3.5,10,15,30,60회귀'=='3.5,10,15,30,60회귀') {
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
  }
  //    4.아래 회귀변경 숫자 생성
  if ('아래 회귀변경 숫자 생성'=='아래 회귀변경 숫자 생성') {
    회귀숫자=Number(document.querySelector('#회귀수입력').value);
    document.querySelector('#js_회귀변경p생성').innerHTML='';
    var js_회귀변경p생성html='';
    var 회귀결과정보수=document.querySelector('#회귀결과정보수').value;
    if (isNaN(회귀결과정보수)) {회귀결과정보수=50;document.querySelector('#회귀결과정보수').value=50;}
    for (var 값이있으면=0; 값이있으면<회귀결과정보수; 값이있으면++) {
      if (당번전체[-((회차selectedIndex+(회귀숫자*(값이있으면+1)))*9) + 당번전체.length - 8]) {
        js_회귀변경p생성html+='<P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><br>'
      }
    }
    document.querySelector('#js_회귀변경p생성').innerHTML=js_회귀변경p생성html;
    var 회귀변경가로개수=document.querySelectorAll('#js_회귀변경p생성 p').length/10;
    순번=0;
    
    for (var 값이있으면=0; 값이있으면<회귀결과정보수; 값이있으면++) {
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
    //    최근회차가 맨앞에 고정으로 추가되기를 원한다.
    document.querySelector('#js_회귀변경p생성').innerHTML='<P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><P></P><br>' + document.querySelector('#js_회귀변경p생성').innerHTML;
    document.querySelectorAll('#js_회귀변경p생성 p')[0].innerHTML='';
    document.querySelectorAll('#js_회귀변경p생성 p')[1].innerHTML=document.querySelector('#회차select').value;
    document.querySelectorAll('#js_회귀변경p생성 p')[2].innerHTML=document.querySelector('#span_날짜').innerHTML;
    document.querySelectorAll('#js_회귀변경p생성 p')[3].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[3].innerHTML;
    document.querySelectorAll('#js_회귀변경p생성 p')[4].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[4].innerHTML;
    document.querySelectorAll('#js_회귀변경p생성 p')[5].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[5].innerHTML;
    document.querySelectorAll('#js_회귀변경p생성 p')[6].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[6].innerHTML;
    document.querySelectorAll('#js_회귀변경p생성 p')[7].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[7].innerHTML;
    document.querySelectorAll('#js_회귀변경p생성 p')[8].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[8].innerHTML;
    document.querySelectorAll('#js_회귀변경p생성 p')[9].innerHTML=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[9].innerHTML;
  }
   //    5.미출수기록
  if ('미출수기록'=='미출수기록') {
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
        미출수5_html_개수+=1; //몇개 부분
        if (최근회차포함10주간번호들.filter(element => (i+1).toString() === element).length==0) {
          미출수10_html+='<p>' + (i+1) + '</p>';
          미출수10_html_개수+=1; //몇개 부분
        } else {
          미출수10_html+='<p></p>';
        }
        if (최근회차포함15주간번호들.filter(element => (i+1).toString() === element).length==0) {
          미출수15_html+='<p>' + (i+1) + '</p>';
          미출수15_html_개수+=1; //몇개 부분
        } else {
          미출수15_html+='<p></p>';
        }
      }
    }
    // 몇개 부분 없애기 전
    // 미출수5_html='<div id="미출수5주간"><span>5주간미출</span><span id="색칠유형_미출수5주">색칠</span><span>' + 미출수5_html_개수 + '개</span>' + 미출수5_html + '</div>';
    // 미출수10_html='<div id="미출수10주간"><span>10주간미출</span><span id="색칠유형_미출수10주">색칠</span><span>' + 미출수10_html_개수 + '개</span>' + 미출수10_html + '</div>';
    // 미출수15_html='<div id="미출수15주간"><span>15주간미출</span><span id="색칠유형_미출수15주">색칠</span><span>' + 미출수15_html_개수 + '개</span>' + 미출수15_html + '</div>';
    
    미출수5_html='<div id="미출수5주간"><span>5주간미출</span><span id="색칠유형_미출수5주">색칠</span>' + 미출수5_html + '</div>';
    미출수10_html='<div id="미출수10주간"><span>10주간미출</span><span id="색칠유형_미출수10주">색칠</span>' + 미출수10_html + '</div>';
    미출수15_html='<div id="미출수15주간"><span>15주간미출</span><span id="색칠유형_미출수15주">색칠</span>' + 미출수15_html + '</div>';
    document.querySelector('#배치_오른쪽_5_10_15주미출수').innerHTML=미출수5_html + 미출수10_html + 미출수15_html;

    //    7.5주출수, 최근회차포함5주간번호들
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

      if (i==0) {//오주0출수는 만들지 않는다

      } else {
        if (횟수담기.filter(element => i == element).length>0) {
          횟수만html+='<div id="오주' + i + '출수"><span>오주' + i + '출수</span><span id="색칠유형_오주' + i + '출수">색칠</span>'
          //개수확인
          개수확인=0;
          for (var 번호순회=0;번호순회<45;번호순회++) {
            if(횟수담기[번호순회]==i) {개수확인+=1;}
          }
              // 몇개 부분 없애기 전
          // 횟수만html+='<span>' + 개수확인 + '개</span>'

          //html만들기
          for (var 번호순회=0;번호순회<45;번호순회++) {
            if(횟수담기[번호순회]==i) {횟수만html+='<p>' + (번호순회+1) + '</p>'}
          }
          횟수만html+='</div>'
        }
      }
    }
    //'<div id="미출수15주간"><span>15주간</span><span onclick="색칠1_미출수15주_색칠할번호_전체변수설정()">색칠</span>' + 미출수15_html + '</div>'
    document.querySelector('#배치_오른쪽_5주출수').innerHTML=미출수5_html + 횟수만html; 
  }
}
function 색칠해제() {//class 제거 : 본인색칠, 왼쪽색칠
  var 색칠할번호들노랑및일반=[];
  var 색칠할번호들주황=[];
  var 색칠유형='';
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
  //주황
  var 본인색칠요소=document.querySelectorAll('.본인색칠주황');
  var 본인색칠개수=본인색칠요소.length;
  if (본인색칠요소.length>0) {
    for (var i=0; i<본인색칠개수; i++) {
      본인색칠요소[i].classList.remove('본인색칠주황');
    }
  }
  //먼저 다 지운다.
  var 왼쪽색칠요소=document.querySelectorAll('.왼쪽색칠주황');
  var 왼쪽색칠개수=왼쪽색칠요소.length;
  if (왼쪽색칠요소.length>0) {
    for (var i=0; i<왼쪽색칠개수; i++) {
      왼쪽색칠요소[i].classList.remove('왼쪽색칠주황');
    }
  }
}
function 색칠유형대로색칠() {
  if (색칠유형=='') {return;}//색칠 버튼 누를때 색칠유형 설정.
  console.log('색칠유형대로색칠()')
  var 있다면본인색칠할요소를포함하는p요소들;
  //색칠할번호들노랑및일반=[];
  //색칠할번호들주황=[];
  if (색칠유형=='색칠유형_최근회차'||색칠유형=='색칠유형_미출수5주'||색칠유형=='색칠유형_미출수10주'||색칠유형=='색칠유형_미출수15주'||
  색칠유형=='색칠유형_오주0출수'||색칠유형=='색칠유형_오주1출수'||색칠유형=='색칠유형_오주2출수'||색칠유형=='색칠유형_오주3출수'||
  색칠유형=='색칠유형_오주4출수'||색칠유형=='색칠유형_오주5출수') {
    //회차변경시 ex 색칠유형_오주5출수 가 없을수도 있으니... 색칠할번호들[]...
    if (document.querySelector('#' + 색칠유형)) {
      있다면본인색칠할요소를포함하는p요소들=document.querySelectorAll('#' + document.querySelector('#' + 색칠유형).parentElement.id + ' p');
      //ex:배치_오른쪽_회차선택과_조회_선택회차당번(p10개), 미출수5주간, 미출수10주간, 미출수15주간, 오주1~5출수
      for (var i=0; i<있다면본인색칠할요소를포함하는p요소들.length; i++) {
        if (있다면본인색칠할요소를포함하는p요소들[i].classList.contains('색칠제외') || 있다면본인색칠할요소를포함하는p요소들[i].innerHTML=='') {
          //색칠제외 클래스가 있거나 공백을때 push하지 않는다.
        } else {
          색칠할번호들노랑및일반.push(있다면본인색칠할요소를포함하는p요소들[i].innerHTML);
          있다면본인색칠할요소를포함하는p요소들[i].classList.add('본인색칠');
        }
      }
    }
  }
  //색칠유형=='색칠유형_다음'일때
  if (색칠유형=='색칠유형_다음') {
    있다면본인색칠할요소를포함하는p요소들=document.querySelectorAll('#' + document.querySelector('#' + 색칠유형).parentElement.id + ' p:not(.제외)');
    //ex:배치_오른쪽_회차선택과_조회_선택회차당번(p10개), 미출수5주간, 미출수10주간, 미출수15주간, 오주1~5출수
    console.log('색칠유형대로색칠()')
    for (var i=0; i<있다면본인색칠할요소를포함하는p요소들.length; i++) {
      if (있다면본인색칠할요소를포함하는p요소들[i].classList=='') {
        색칠할번호들노랑및일반.push(있다면본인색칠할요소를포함하는p요소들[i].innerHTML);
      }
    }
    //오른쪽 색칠 : 배치_오른쪽_회차선택과_조회_선택회차당번, 배치_오른쪽_5_10_15주미출수, 배치_오른쪽_5주출수
    var 오른쪽=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p');
    for (var i=0; i<오른쪽.length; i++) {
      if (색칠할번호들노랑및일반.find(element => element==오른쪽[i].innerHTML)) {오른쪽[i].classList.add('본인색칠')}
    }
    오른쪽=document.querySelectorAll('#배치_오른쪽_5_10_15주미출수 p');
    for (var i=0; i<오른쪽.length; i++) {
      if (색칠할번호들노랑및일반.find(element => element==오른쪽[i].innerHTML)) {오른쪽[i].classList.add('본인색칠')}
    }
    오른쪽=document.querySelectorAll('#배치_오른쪽_5주출수 p');
    for (var i=0; i<오른쪽.length; i++) {
      if (색칠할번호들노랑및일반.find(element => element==오른쪽[i].innerHTML)) {오른쪽[i].classList.add('본인색칠')}
    }
  }
  //추가, 주황누르면 주황으로 누적되도록
  if (색칠유형=='색칠유형_노란색번호색칠') {
    있다면본인색칠할요소를포함하는p요소들=document.querySelectorAll('#js피해서색칠 button');
    //ex:배치_오른쪽_회차선택과_조회_선택회차당번(p10개), 미출수5주간, 미출수10주간, 미출수15주간, 오주1~5출수
    console.log('피할번호연계 클래스 수 : ' + document.querySelectorAll('.피할번호연계').length)
    for (var i=0; i<있다면본인색칠할요소를포함하는p요소들.length; i++) {
      if (있다면본인색칠할요소를포함하는p요소들[i].classList.contains('피할번호연계')) {
        색칠할번호들노랑및일반.push(있다면본인색칠할요소를포함하는p요소들[i].innerHTML);
      }
    }
    //오른쪽 색칠 : 배치_오른쪽_회차선택과_조회_선택회차당번, 배치_오른쪽_5_10_15주미출수, 배치_오른쪽_5주출수
    var 오른쪽=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p');
    for (var i=0; i<오른쪽.length; i++) {
      if (색칠할번호들노랑및일반.find(element => element==오른쪽[i].innerHTML)) {오른쪽[i].classList.add('본인색칠')}
    }
    오른쪽=document.querySelectorAll('#배치_오른쪽_5_10_15주미출수 p');
    for (var i=0; i<오른쪽.length; i++) {
      if (색칠할번호들노랑및일반.find(element => element==오른쪽[i].innerHTML)) {오른쪽[i].classList.add('본인색칠')}
    }
    오른쪽=document.querySelectorAll('#배치_오른쪽_5주출수 p');
    for (var i=0; i<오른쪽.length; i++) {
      if (색칠할번호들노랑및일반.find(element => element==오른쪽[i].innerHTML)) {오른쪽[i].classList.add('본인색칠')}
    }
  }
  if (색칠유형=='색칠유형_주황색번호색칠') {
    있다면본인색칠할요소를포함하는p요소들=document.querySelectorAll('#js피해서색칠 button');
    //ex:배치_오른쪽_회차선택과_조회_선택회차당번(p10개), 미출수5주간, 미출수10주간, 미출수15주간, 오주1~5출수
    console.log('피할번호연계 클래스 수 : ' + document.querySelectorAll('.피할번호연계').length)
    for (var i=0; i<있다면본인색칠할요소를포함하는p요소들.length; i++) {
      if (있다면본인색칠할요소를포함하는p요소들[i].classList.contains('피할번호연계') || 있다면본인색칠할요소를포함하는p요소들[i].classList=='') {

      } else {
        색칠할번호들주황.push(있다면본인색칠할요소를포함하는p요소들[i].innerHTML);
      }
    }
    //오른쪽 색칠 : 배치_오른쪽_회차선택과_조회_선택회차당번, 배치_오른쪽_5_10_15주미출수, 배치_오른쪽_5주출수
    var 오른쪽=document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p');
    for (var i=0; i<오른쪽.length; i++) {
      if (색칠할번호들주황.find(element => element==오른쪽[i].innerHTML)) {오른쪽[i].classList.add('본인색칠주황')}
    }
    오른쪽=document.querySelectorAll('#배치_오른쪽_5_10_15주미출수 p');
    for (var i=0; i<오른쪽.length; i++) {
      if (색칠할번호들주황.find(element => element==오른쪽[i].innerHTML)) {오른쪽[i].classList.add('본인색칠주황')}
    }
    오른쪽=document.querySelectorAll('#배치_오른쪽_5주출수 p');
    for (var i=0; i<오른쪽.length; i++) {
      if (색칠할번호들주황.find(element => element==오른쪽[i].innerHTML)) {오른쪽[i].classList.add('본인색칠주황')}
    }
  }

  //왼쪽색칠은 공통이 될듯 : 색칠할번호들이 둘중 하나가 되어버린다.
  var 몇개=0;
  console.log('색칠할번호들노랑및일반 : ' + 색칠할번호들노랑및일반)
  if (색칠할번호들노랑및일반[0]) {
    var 왼쪽div안10개p전체=document.querySelectorAll('.왼쪽당번 p');//0회귀,1회차,2날짜, 9보볼
    for (var i=0; i<왼쪽div안10개p전체.length; i++) {
      if (((i+1) % 10) > 3) {//나머지 : 1회귀,2회차,3날짜, 0보볼
        if (색칠할번호들노랑및일반.find(element => element==왼쪽div안10개p전체[i].innerHTML)) {
          몇개+=1;
          왼쪽div안10개p전체[i].classList.add('왼쪽색칠');
        }
      }
      if ((i+1) % 10 == 0) {
        if (몇개>0) {
          // 왼쪽div안10개p전체[i].nextElementSibling.innerHTML=몇개 + '개'; ==> 몇개 부분
          몇개=0;
        } else {

        }
      }
    }
  }
  var 몇개=0;
  console.log('색칠할번호들주황 : ' + 색칠할번호들주황)
  if (색칠할번호들주황[0]) {
    var 왼쪽div안10개p전체=document.querySelectorAll('.왼쪽당번 p');//0회귀,1회차,2날짜, 9보볼
    for (var i=0; i<왼쪽div안10개p전체.length; i++) {
      if (((i+1) % 10) > 3) {//나머지 : 1회귀,2회차,3날짜, 0보볼
        if (색칠할번호들주황.find(element => element==왼쪽div안10개p전체[i].innerHTML)) {
          몇개+=1;
          왼쪽div안10개p전체[i].classList.add('왼쪽색칠주황');
        }
      }
      if ((i+1) % 10 == 0) {
        if (몇개>0) {
          // 왼쪽div안10개p전체[i].nextElementSibling.innerHTML=몇개 + '개'; ==> 몇개 부분
          몇개=0;
        } else {

        }
      }
    }
  }
}
function 전체변수_색칠유형_초기화() {
  색칠유형='';
}
function 색칠해제와변수초기화() {
  전체변수_색칠유형_초기화();
  색칠해제();
}
function 회귀수증가() {
  if (document.querySelector('#회귀수입력').value>0) {
    document.querySelector('#회귀수입력').value=Number(document.querySelector('#회귀수입력').value) + 1;
  }
  회차변경실행();
  //색칠해제();
  색칠유형대로색칠()
}
function 회귀수감소() {
  if (document.querySelector('#회귀수입력').value>1) {
    document.querySelector('#회귀수입력').value=Number(document.querySelector('#회귀수입력').value) - 1;
  } else {alert('1미만 입력제한.')  }
  회차변경실행();
  //색칠해제();
  색칠유형대로색칠()
}
function 회귀변경() {
  회차변경실행();
  //색칠해제();
  색칠유형대로색칠()
}
function 회귀변경1() {
  document.querySelector('#회귀수입력').value=1;
  회차변경실행();
  //색칠해제();
  색칠유형대로색칠()
}
function 회귀변경5() {
  document.querySelector('#회귀수입력').value=5;
  회차변경실행();
  //색칠해제();
  색칠유형대로색칠()
}
function 회귀변경100() {
  document.querySelector('#회귀수입력').value=100;
  회차변경실행();
  //색칠해제();
  색칠유형대로색칠()
}
function 회차증가() {//index 0일때 최근회차, 증가는 index 감소
  console.log('회차증가()');
  if (회차selectedIndex==0) {
    alert('가장 최근 회차입니다')
  } else {
    document.querySelector('#회차select').selectedIndex=회차selectedIndex-=1;
    회차변경실행();
    색칠해제();
    색칠유형대로색칠()
  }
}
function 회차감소() {//index 0일때 최근회차, 감소는 index 증가
  console.log('회차감소()');
  document.querySelector('#회차select').selectedIndex=회차selectedIndex+=1;
  회차변경실행();
  색칠해제();
  색칠유형대로색칠()
}
function 회차selectedIndex_change() {//index 0일때 최근회차, 감소는 index 증가
  console.log('회차selectedIndex_change()');
  회차변경실행();
  색칠해제();
  색칠유형대로색칠()
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
function 최근번호피해서색칠() {//최근번호피해서색칠() : 일단 안씀
    // 임시 최근회차번호 6개를 넣고
    console.log('최근번호피해서색칠()');
    var 버튼들=document.querySelectorAll('#js피해서색칠 button');
    if (document.querySelectorAll('.피할번호')[0]) {
      for (var i=0; i<버튼들.length; i++) {
        버튼들[i].classList.remove('피할번호');
      }
    }
    if (document.querySelectorAll('.피할번호연계')[0]) {
      for (var i=0; i<버튼들.length; i++) {
        버튼들[i].classList.remove('피할번호연계');
      }
    }
    버튼들[Number(document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[3].innerHTML)-1].classList.add('피할번호');
    버튼들[Number(document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[4].innerHTML)-1].classList.add('피할번호');
    버튼들[Number(document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[5].innerHTML)-1].classList.add('피할번호');
    버튼들[Number(document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[6].innerHTML)-1].classList.add('피할번호');
    버튼들[Number(document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[7].innerHTML)-1].classList.add('피할번호');
    버튼들[Number(document.querySelectorAll('#배치_오른쪽_회차선택과_조회_선택회차당번 p')[8].innerHTML)-1].classList.add('피할번호');
    피해서번호색칠()
}
function 피해서번호색칠() {
  console.log('피해서번호색칠()');
  //피할번호연계 클래스 모두 지우고 시작
  var 버튼들=document.querySelectorAll('#js피해서색칠 button');
  if (document.querySelectorAll('.피할번호')[0]) {
    for (var i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('피할번호연계');
    }
  } else {
    for (var i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('피할번호연계');
    }
  }
  //피할번호 있으면 작동, 몫과 나머지 구해놓기
  var 몫=[];
  var 나머지=[];
  if (document.querySelectorAll('.피할번호')[0]) {
    for (var i=0; i<버튼들.length; i++) {
      if (버튼들[i].classList.contains('피할번호')) {
        몫.push(Math.floor( i / 7));
        나머지.push(i % 7);
      }
    }
  }
  //몫.find(element => element==Math.floor(i / 7))    나머지.find(element => element==(i % 7))
  console.log('몫 : ' + 몫 + ' , 나머지 : ' + 나머지)
  for (var i=0; i<버튼들.length; i++) {
    // console.log('번호 ' + (i+1) + ' 의 몫 : ' + Math.floor(i / 7) + ' 개수 : ' + 몫.filter(element => element==Math.floor(i / 7)).length)
    if (몫.filter(element => element==Math.floor(i / 7)).length==0) {버튼들[i].classList.add('피할번호연계')}
    if (나머지.filter(element => element==(i % 7)).length==0) {버튼들[i].classList.add('피할번호연계')}
  }
}
var 바디=document.querySelector('body');
function 클릭이벤트통합(e) {
  var 아이디=e.target.id;
  console.log('클릭이벤트통합(e), e.target.id : ' + e.target.id);
  if (e.target.classList.contains('보기숨기기') && e.target.innerHTML=='피해서번호') {
    if (document.querySelector('#js피해서색칠').classList.contains('d-none')) {
      document.querySelector('#js피해서색칠').classList.remove('d-none')
    } else {
      document.querySelector('#js피해서색칠').classList.add('d-none')
    }
    return;
  }
  if (e.target.classList.contains('보기숨기기') && e.target.innerHTML=='일반색칠') {
    if (document.querySelector('#js피해서색칠우측').classList.contains('d-none')) {
      document.querySelector('#js피해서색칠우측').classList.remove('d-none')
    } else {
      document.querySelector('#js피해서색칠우측').classList.add('d-none')
    }
    return;
  }  
  //색칠관련 요소 클릭시 전체변수_'색칠유형 설정:전체변수대로색칠() 관련됨
  if (아이디=='색칠유형_최근회차'||아이디=='색칠유형_미출수5주'||아이디=='색칠유형_미출수10주'||아이디=='색칠유형_미출수15주'||
      아이디=='색칠유형_오주0출수'||아이디=='색칠유형_오주1출수'||아이디=='색칠유형_오주2출수'||아이디=='색칠유형_오주3출수'||
      아이디=='색칠유형_오주4출수'||아이디=='색칠유형_오주5출수'||아이디=='색칠유형_다음') {색칠유형=아이디;색칠해제();색칠유형대로색칠();}
  //
  if (아이디=='페이지1') {변경할페이지=아이디; 페이지변경();return;}
  if (아이디=='js색칠해제와변수초기화' || 아이디=='색칠유형_노랑주황색칠해제') {색칠해제와변수초기화();return;}
  if (아이디=='js회귀수증가') {회귀수증가();return;}
  if (아이디=='js회귀수감소') {회귀수감소();return;}
  if (아이디=='js회귀변경1') {회귀변경1();return;}
  if (아이디=='js회귀변경5') {회귀변경5();return;}
  if (아이디=='js회귀변경100') {회귀변경100();return;}
  if (아이디=='js회차증가') {회차증가();return;}
  if (아이디=='js회차감소') {회차감소();return;}
  if (아이디=='js전체번호지움') {
    document.querySelector('#번호입력').innerHTML='';
    document.querySelector('#js나온횟수결과').innerHTML='';
    return;}
  if (아이디=='js입력번호횟수계산') {번호입력나온횟수();return;}
  if (e.target.innerHTML=='삭제' && e.target.parentNode.parentNode.id=='번호입력') {e.target.parentNode.outerHTML='';}//번호하나삭제
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
  if (e.target.parentNode.id=='js피해서색칠' && e.target.nodeName=='BUTTON') {
    console.log('e.target.parentNode.id==js피해서색칠 && e.target.nodeName==BUTTON')
    if (e.target.classList.contains('피할번호')) {
      e.target.classList.remove('피할번호');
      피해서번호색칠();
    } else {
      e.target.classList.add('피할번호');
      피해서번호색칠();
    }   
  }
  if (e.target.id=='색칠유형_노란색번호색칠') {
    색칠유형='색칠유형_노란색번호색칠';
    //색칠해제();
    색칠유형대로색칠();
  }
  if (e.target.id=='색칠유형_주황색번호색칠') {
    색칠유형='색칠유형_주황색번호색칠';
    //색칠해제();
    색칠유형대로색칠();
  }
}

바디.addEventListener('click', 클릭이벤트통합); 











