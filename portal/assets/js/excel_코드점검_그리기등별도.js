function 전체대체클릭시____(e) {
  console.log('전체대체클릭시(e)');

  var 캔버스관련자료none안_타겟element;
  var 결과부분 = document.querySelector('#전체대체');
  //다른곳 클릭하면 캔버스 그림이 지워지는 이유를 모르겠다.
  
  if (e.target.classList.contains('캔버스그리기')) {
    console.log('e.target.classList.contains(캔버스그리기)')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치1');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    // DPR 정보 가져오기
    var dpr = window.devicePixelRatio;
    // 캔버스 요소의 크기 가져오기
    var rect = 캔버스.getBoundingClientRect();
    캔버스.width = rect.width * dpr;
    캔버스.height = rect.height * dpr;
    // scale() 함수를 사용하여 캔버스 유닛 크기 보정
    그리기.scale(dpr, dpr);

    //선색, 정렬, 선폭 미리 정해두기
    그리기.font = "bold 10pt '맑은 고딕'";
    그리기.textBaseline="top"; //top, middle, bottom, alphabetic, hanging, ideo graphic
    그리기.fillStyle = 'red'; //채워지는 색깔, fillText도 채우기임
    그리기.textAlign = 'left';
    그리기.strokeStyle='blue'; // 선 색상, stroke()는 선 그리기 명령어
    그리기.lineWidth='1';

    그리기.clearRect(0,0,캔버스.width,캔버스.height)
    그리기.strokeRect(5,5,200,40); //사각형그리기, 테두리
    그리기.fillStyle = 'black'; //채워지는 색깔, fillText도 채우기임
    그리기.fillText('사각형 테두리 바로 만들기;',8,8); //사각형그리기, 테두리
    그리기.fillText('그리기.strokeRect(5,5,200,40);',8,25); //사각형그리기, 테두리

    그리기.beginPath();
    그리기.strokeStyle = 'black'; //채워지는 색깔, fillText도 채우기임
    그리기.rect(5,50,200,102); //사각형그리기, 테두리
    그리기.stroke();
    그리기.fillText('stroke()로 사각형 테두리 만들기;',8,56); //사각형그리기, 테두리
    그리기.fillText('그리기.beginPath();',8,76); //사각형그리기, 테두리
    그리기.fillText('그리기.strokeStyle = black;',8,96); //사각형그리기, 테두리
    그리기.fillText('그리기.rect(5,50,200,90);',8,116); //사각형그리기, 테두리
    그리기.fillText('그리기.stroke();',8,136); //사각형그리기, 테두리
    // 그리기.fill(); ==> 그리기.stroke(); 결과에 채움
    
    그리기.beginPath();
    그리기.fillText('채우기, 그리기.fill()은;',8,160); //사각형그리기, 테두리
    그리기.fillText('그리기.beginPath(); 이후에',8,180); //사각형그리기, 테두리
    그리기.fillText('변수에 담기는 것들 모두에',8,200); //사각형그리기, 테두리
    그리기.fillText('채워진다.; 그리기.fillStyle = red;',8,220); //사각형그리기, 테두리
    
    그리기.fillStyle = 'red';
    그리기.rect(5,240,200,80); //사각형그리기, 테두리
    그리기.fill();
    그리기.stroke();

    그리기.fillStyle = 'black';
    그리기.fillText('그리기.fillStyle = black;',8,245); //사각형그리기, 테두리
    그리기.fillText('그리기.rect(5,220,200,50);',8,265); //사각형그리기, 테두리
    그리기.fillText('그리기.fill();',8,285); //사각형그리기, 테두리
    그리기.fillText('그리기.stroke();',8,305); //사각형그리기, 테두리

    그리기.moveTo(220,10);
    그리기.lineTo(420,10);
    그리기.lineTo(420,100);
    그리기.stroke();

    그리기.fillText('그리기.moveTo(220,10);',223,12); //사각형그리기, 테두리
    그리기.fillText('그리기.lineTo(420,10);',223,32); //사각형그리기, 테두리
    그리기.fillText('그리기.lineTo(420,100);',223,52); //사각형그리기, 테두리
    그리기.fillText('그리기.stroke();',223,72); //사각형그리기, 테두리

    그리기.moveTo(220,110);
    그리기.lineTo(420,110);
    그리기.lineTo(420,220);
    그리기.closePath();
    그리기.stroke();

    그리기.fillText('그리기.moveTo(220,10);',223,113); //사각형그리기, 테두리
    그리기.fillText('그리기.lineTo(420,10);',223,133); //사각형그리기, 테두리
    그리기.fillText('그리기.lineTo(420,100);',223,153); //사각형그리기, 테두리
    그리기.fillStyle = 'blue';
    그리기.fillText('그리기.closePath();',223,173); //사각형그리기, 테두리
    그리기.fillText('처음과 끝좌표 연결',223,193); //사각형그리기, 테두리
    그리기.fillStyle = 'black';
    그리기.fillText('그리기.stroke();',223,213); //사각형그리기, 테두리

    그리기.beginPath();
    그리기.moveTo(220,240);
    그리기.lineTo(420,240);
    그리기.lineTo(420,350);
    그리기.closePath();
    그리기.fillStyle = 'red';
    그리기.fill();
    그리기.stroke();

    그리기.fillStyle = 'black';
    그리기.fillText('그리기.moveTo(220,10);',223,113); //사각형그리기, 테두리
    그리기.fillText('그리기.lineTo(420,10);',223,133); //사각형그리기, 테두리
    그리기.fillText('그리기.lineTo(420,100);',223,153); //사각형그리기, 테두리
    그리기.fillStyle = 'blue';
    그리기.fillText('그리기.closePath();',223,173); //사각형그리기, 테두리
    그리기.fillText('처음과 끝좌표 연결',223,193); //사각형그리기, 테두리
    그리기.fillStyle = 'black';
    그리기.fillText('그리기.stroke();',223,213); //사각형그리기, 테두리

    그리기.fillStyle = 'blue';
    그리기.fillText('그리',223,250); //사각형그리기, 테두리
    그리기.fillStyle = 'yellow';
    그리기.fillText('기.stroke(); 직전에',250,250); //사각형그리기, 테두리
    그리기.fillStyle = 'blue';
    그리기.fillText('채우기 명령',223,270); //사각형그리기, 테두리
    그리기.fillText('그리기.fill();',223,290); //사각형그리기, 테두리
    그리기.fillText('그리기.closePath();',223,310); //사각형그리기, 테두리
    그리기.fillText('없어도 채워짐;',223,330); //사각형그리기, 테두리

    그리기.fillStyle = 'blue';
    그리기.fillText('글자 넣는건 fillText',433,10); //사각형그리기, 테두리
    그리기.fillStyle = 'black';
    그리기.fillText('그리기.fillText("글자 넣는건 fillText",223,233)',433,30); //사각형그리기, 테두리
    그리기.fillStyle = 'blue';
    그리기.fillText('채우기색깔은 fillStyle',433,50); //사각형그리기, 테두리
    그리기.fillStyle = 'black';
    그리기.fillText('그리기.fillStyle = "blue";',433,70); //사각형그리기, 테두리

    그리기.lineWidth=20;
    그리기.strokeRect(433,95,232,80);
    그리기.fillText('그리기.lineWidth=20;',443,110);
    그리기.fillText('그리기.strokeRect(433,90,180,40);',443,130);
    그리기.fillText('사각형부분은 선의 중앙;',443,150);

    그리기.fillRect(675,95,232,80);
    그리기.fillStyle = 'yellow';
    그리기.fillText('그리기.fillRect(675,95,232,80);',685,105);
    그리기.fillText('채워진사각형',685,125);

    그리기.strokeRect(433,200,232,80);
    그리기.fillStyle = 'yellow';
    그리기.fillRect(433,200,232,80);
    그리기.fillStyle = 'black';
    그리기.fillText('순서',443,215);
    그리기.fillText('strokeRect > fillRect;',443,230);
    그리기.fillText('나중꺼가 덮어씀',443,250);

    그리기.fillStyle = 'yellow';
    그리기.fillRect(675,200,232,80);
    그리기.strokeStyle='black';
    그리기.strokeRect(675,200,232,80);
    그리기.fillStyle = 'black';
    그리기.fillText('순서',685,215);
    그리기.fillText('fillRect > strokeRect;',685,235);
    그리기.fillText('나중꺼가 덮어씀',685,255);






    return;
  }
  if (e.target.innerHTML.substring(0,3)=='초기화') {
    console.log("e.target.innerHTML.substring(0,2)=='초기화'");
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치' + e.target.innerHTML.substr(3,2));
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    그리기.clearRect(0,0,캔버스.width,캔버스.height);
  }
  if (e.target.innerHTML=='그리기2') {
    console.log('e.target.innerHTML==그리기2')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치2');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성

    //그리기.lineCap = "butt/square/round" 

    그리기.strokeStyle='black';
    그리기.fillStyle='black';
    그리기.font = "bold 10pt '맑은 고딕'"; // 순서 중요하네
    그리기.lineWidth=20;
    그리기.beginPath();

    그리기.moveTo(15,15);
    그리기.lineTo(80,15);
    그리기.lineTo(80,55);
    그리기.lineTo(15,55);
    그리기.lineTo(15,15);
    그리기.lineCap='butt';
    그리기.stroke();
    그리기.fillText('butt (디폴트)',5,80);

    그리기.fillText('맨마지막에만 적용된다. ',5,100);
    그리기.fillText('나머지는 꺽이는 부분 서식으로 해야함. ',5,120);
    그리기.fillText('그리기.lineJoin="속성 값"',5,140);

    그리기.beginPath();
    그리기.moveTo(110,15);
    그리기.lineTo(175,15);
    그리기.lineTo(175,55);
    그리기.lineTo(110,55);
    그리기.lineTo(110,15);
    그리기.lineCap='square';
    그리기.stroke();
    그리기.fillText('square',120,80);

    그리기.beginPath();
    그리기.moveTo(205,15);
    그리기.lineTo(270,15);
    그리기.lineTo(270,55);
    그리기.lineTo(205,55);
    그리기.lineTo(205,15);
    그리기.lineCap='round';
    그리기.stroke();
    그리기.fillText('round',215,80);


  }
  if (e.target.innerHTML=='그리기3') {
    console.log('e.target.innerHTML==그리기3')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치3');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성

    //선 꺾이는 부분 처리, 그리기.lineJoin = "miter" // miter (디폴트), bevel, round 중 1개

    그리기.strokeStyle='black';
    그리기.fillStyle='black';
    그리기.font = "bold 10pt '맑은 고딕'"; // 순서 중요하네
    그리기.lineWidth=20;
    그리기.beginPath();

    그리기.lineJoin='miter';
    그리기.moveTo(15,15);
    그리기.lineTo(80,15);
    그리기.lineTo(80,55);
    그리기.lineTo(15,55);
    그리기.lineTo(15,15);
    그리기.stroke();
    그리기.fillText('miter (디폴트)',5,80);

    그리기.fillText('꺽어지는 부분에만 적용된다. ',5,100);
    그리기.fillText('그리기.lineJoin="속성 값"',5,120);
    그리기.fillStyle='blueviolet';
    그리기.fillText('line폭의 1/2을 처리하는 서식?',5,140);
    그리기.fillStyle='black';

    그리기.beginPath();
    그리기.lineJoin='bevel'; //좌표에서 벗어나 튀어나오는 라인폭의 1/2을 잘라냄
    그리기.moveTo(110,15);
    그리기.lineTo(175,15);
    그리기.lineTo(175,55);
    그리기.lineTo(110,55);
    그리기.lineTo(110,15);
    그리기.stroke();
    그리기.fillText('bevel',120,80);

    그리기.beginPath();
    그리기.lineJoin='round';
    그리기.moveTo(205,15);
    그리기.lineTo(270,15);
    그리기.lineTo(270,55);
    그리기.lineTo(205,55);
    그리기.lineTo(205,15);
    그리기.stroke();
    그리기.fillText('round',215,80);
  }
  if (e.target.innerHTML=='그리기4') {
    console.log('e.target.innerHTML==그리기4')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치4');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    var 각도;

    //Math.PI=3.14..(라디안값) 180도, 1라디안 57.3...도
    //30도를 표현할때 라디안 부분에 입력할 값은 : 30(각도) / (180/Math.PI)

    //호 : arc(x, y, radius, startAngle, endAngle, anticlockwise)
    그리기.beginPath();
    그리기.lineWidth='2'
    그리기.arc(50, 50, 40, 0, 2*Math.PI);
    그리기.stroke();

    그리기.font = "bold 10pt '맑은 고딕' ";
    그리기.fillText('각도시작은',18,40);
    그리기.fillText('오른쪽끝',22,60);
    그리기.fillText('anticlockwise 기본값 : false (시계방향)',3,105);
    그리기.fillText('각도부분 입력값은 라디안값 : 시작각도, 종료각도',3,125);
    그리기.fillText('각도로 변환 : 30(각도) / (180/Math.PI)',3,145);

    그리기.beginPath();
    각도=90;
    그리기.arc(140, 50, 40, 0, 각도 / (180/Math.PI));
    그리기.fill();
    그리기.stroke();

    그리기.beginPath();
    각도=270;
    그리기.arc(140, 50, 40, Math.PI, 각도 / (180/Math.PI));
    그리기.fill();
    그리기.stroke();

    그리기.beginPath();
    그리기.arc(230, 50, 40, Math.PI, 2*Math.PI);
    그리기.fill();
    그리기.stroke();


  }
  if (e.target.innerHTML=='그리기5') {
    console.log('e.target.innerHTML==그리기5')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치5');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    var 각도;

    //Math.PI=3.14..(라디안값) 180도, 1라디안 57.3...도
    //30도를 표현할때 라디안 부분에 입력할 값은 : 30(각도) / (180/Math.PI)

    //호 : arc(x, y, radius, startAngle, endAngle, anticlockwise)
    그리기.beginPath();
    그리기.lineWidth='2'
    그리기.moveTo(10,10);
    그리기.arc(35, 35, 40, 0, 70 / (180/Math.PI));
    그리기.closePath();
    그리기.fillStyle='yellow';
    그리기.fill();
    그리기.stroke();

    그리기.font = "bold 10pt '맑은 고딕' ";
    그리기.fillStyle='black';
    그리기.fillText('부채꼴 : 1)그리기.moveTo(x,y)',25,15);
    그리기.fillText('2)그리기.arc(x,y,반지름,시작각도,종료각도)',78,35);
    그리기.fillText('3)그리기.closePath()',78,55);

    그리기.fillText('a)그리기.moveTo(10,10);',5,85);
    그리기.fillText('b)그리기.arc(35, 35, 40, 0, 70 / (180/Math.PI));',5,105);
    그리기.fillText('b)부분이 lineTo처럼 작동되었다.;',5,125);
    그리기.fillText('그리기.closePath();에서 처음과 끝부분이 연결됨',5,145);

    




  }
  if (e.target.innerHTML=='그리기6') {
    console.log('e.target.innerHTML==그리기6')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치6');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성

    var 이미지객체=new Image();
    이미지객체.src='portal/images/문서연결_엑셀VBA/원호.png';
    이미지객체.onload=function() {
      그리기.drawImage(이미지객체,0,0); //(이미지객체,x,y,width,height)
    }
    그리기.fillStyle='black';
    그리기.font='bold 10px 맑은 고딕';
    그리기.fillText('var 이미지객체=new Image();',5,90);
    그리기.fillText('이미지객체.src="portal/images/문서연결_엑셀VBA/원호.png";',5,105);
    그리기.fillText('이미지객체.onload=function()',5,120);
    그리기.fillText('{그리기.drawImage(이미지객체,0,0);}',5,135);
    그리기.font='bold 13px 맑은 고딕';
    그리기.fillText('그리기.drawImage(이미지객체,0,0);가',100,15);
    그리기.fillText('캔버스에 이미지 넣는 동작인데.',100,35);
    그리기.fillText('이미지객체.onload 안쓰면',100,55);
    그리기.fillText('두번째 실행때 나타난다?',100,75);
  }
  if (e.target.innerHTML=='그리기7') {
    console.log('e.target.innerHTML==그리기7')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치7');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    
    그리기.font='bold 13px 맑은 고딕';
    그리기.fillStyle='black';
    그리기.beginPath();
    그리기.arc(35,35,30,0,2*Math.PI);
    그리기.setLineDash([4,2]);
    그리기.stroke();
    그리기.beginPath();
    그리기.arc(35,110,30,0,2*Math.PI);
    그리기.setLineDash([0,0]);
    그리기.stroke();
    그리기.fillText("그리기.font='bold 13px 맑은 고딕';",75,15)
    그리기.fillText('그리기.beginPath();',75,35)
    그리기.fillText('그리기.arc(35,35,30,0,2*Math.PI);',75,55)
    그리기.fillText('그리기.setLineDash([4,2]);',75,75)
    그리기.fillText('그리기.stroke();',75,95)
    그리기.fillStyle='red';
    그리기.fillText('점선없애기는 setLineDash([0,0]);',75,115)


  }
  if (e.target.innerHTML=='그리기8') {
    console.log('e.target.innerHTML==그리기8')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치8');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성

    그리기.globalAlpha='0.5';
    그리기.fillStyle='black';
    그리기.fillRect(5,5,40,40);
    그리기.fillStyle='yellow';
    그리기.fillRect(25,25,40,40);
    그리기.fillStyle='green';
    그리기.fillRect(45,45,40,40);
    그리기.fillStyle='red';
    그리기.fillRect(65,65,40,40);

    그리기.globalAlpha='0.9';
    그리기.fillStyle='black';
    그리기.fillRect(95,5,40,40);
    그리기.fillStyle='yellow';
    그리기.fillRect(115,25,40,40);
    그리기.fillStyle='green';
    그리기.fillRect(135,45,40,40);
    그리기.fillStyle='red';
    그리기.fillRect(155,65,40,40);

    그리기.globalAlpha='1';
    그리기.fillStyle='black';
    그리기.fillRect(185,5,40,40);
    그리기.fillStyle='yellow';
    그리기.fillRect(205,25,40,40);
    그리기.fillStyle='green';
    그리기.fillRect(225,45,40,40);
    그리기.fillStyle='red';
    그리기.fillRect(245,65,40,40);

    그리기.fillStyle='black';
    그리기.font='bold 14px 맑은 고딕';
    그리기.fillText("그리기.globalAlpha='1'; 예제는 0.5, 0.9, 1",10,120);
    그리기.fillText("0일때 투명, 1일때 가장 진함;",10,140);

  }
  if (e.target.innerHTML=='그리기9') {
    console.log('e.target.innerHTML==그리기9')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치9');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
  }
  if (e.target.innerHTML=='그리기10') {
    console.log('e.target.innerHTML==그리기10')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치10');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
  }
  if (e.target.innerHTML=='그리기11') {
    console.log('e.target.innerHTML==그리기11')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치11');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    var 각도;
        // DPR 정보 가져오기
        var dpr = window.devicePixelRatio;
        // 캔버스 요소의 크기 가져오기
        var rect = 캔버스.getBoundingClientRect();
        캔버스.width = rect.width * dpr;
        캔버스.height = rect.height * dpr;
        // scale() 함수를 사용하여 캔버스 유닛 크기 보정
        그리기.scale(dpr, dpr);

    //두 직선 사이 호 arcTo(x1, y1, x2, y2, radius) : 두 선 사이에 radius반지름의 원형태로 처리한다?
    그리기.lineWidth='2'
    그리기.font='bold 10px 맑은 고딕';
    그리기.fillStyle='red';
    그리기.fillRect(10,10,10,10);
    그리기.fillRect(200,40,10,10);
    그리기.fillRect(10,70,10,10);
    그리기.fillText('(10,10)',10,30)
    그리기.fillText('(200,40)',180,60)
    그리기.fillText('(10,70)',10,90)
    그리기.fillStyle='black';
    그리기.font='bold 13px 맑은 고딕';
    그리기.fillText('1) 그리기.moveTo(10, 10);',10,110);
    그리기.fillText('2) 그리기.lineTo(200, 40);',10,130);
    그리기.fillText('3) 그리기.lineTo(10, 70);',10,150);
    그리기.fillText('4) 그리기.stroke();',10,170);

    그리기.moveTo(10, 10);
    그리기.lineTo(200, 40);
    그리기.lineTo(10, 70);
    그리기.stroke();

    //반지름 10 원
    그리기.beginPath();
    그리기.fillStyle='red';
    그리기.strokeStyle='blue';
    그리기.arc(142,40,10,0,2*Math.PI);
    그리기.stroke();
    그리기.fill(); // stroke()와 별개이다. stroke
    그리기.fillStyle='black';
    그리기.fillText('반지름10인원 예시',5,45);

    그리기.beginPath();
    그리기.fillStyle='red';
    그리기.strokeStyle='blue';
    그리기.arc(142,210,10,0,2*Math.PI);
    그리기.stroke();
    그리기.fill(); // stroke()와 별개이다. stroke
    그리기.fillStyle='black';

    그리기.beginPath();
    그리기.strokeStyle='blue';
    그리기.beginPath();
    그리기.moveTo(10, 180);
    그리기.lineTo(210, 210);
    그리기.stroke();
    

    그리기.strokeStyle='black';
    그리기.beginPath();
    그리기.moveTo(10, 180);
    //그리기.lineTo(440, 40); 이거 대신에 그리기.arcTo(앞x, 얖y, 뒤x, 뒤y, 반지름); 
    // 앞좌표 moveTo에서 향하는 목적지, 뒤좌표 다음선의 목적지
    그리기.arcTo(210, 210, 10, 240, 10);
    그리기.lineTo(10, 240);
    그리기.stroke();

    그리기.font='bold 10px 맑은 고딕';
    그리기.fillStyle='red';
    그리기.fillRect(10,180,10,10);
    그리기.fillRect(210,210,10,10);
    그리기.fillRect(10,240,10,10);
    그리기.fillText('(10,180)',10,200)
    그리기.fillText('(210,210)',185,230)
    그리기.fillText('(10,240)',10,260)
    그리기.fillStyle='black';
    그리기.font='bold 13px 맑은 고딕';
    그리기.fillText('1) 그리기.beginPath();',10,280);
    그리기.fillText('2) 그리기.moveTo(240, 10);',10,300);
    그리기.fillText('3) 그리기.arcTo(440, 40, 240, 70, 10);',10,320);
    그리기.fillText('4) 그리기.lineTo(240, 70);',10,340);
    그리기.fillText('5) 그리기.stroke();',10,360);

    //두번째
    그리기.beginPath();
    그리기.strokeStyle='red';
    그리기.moveTo(400, 40);
    그리기.lineTo(600, 70);
    그리기.lineTo(400, 100);
    그리기.stroke();
    그리기.beginPath();
    그리기.moveTo(400, 100);
    그리기.lineTo(200, 130);
    그리기.stroke();

    그리기.beginPath();
    그리기.strokeStyle='black';
    그리기.moveTo(400, 40);
    그리기.arcTo(600, 70, 400, 100, 50);
    그리기.lineTo(400, 150);
    그리기.stroke();
    그리기.fillStyle='red';
    그리기.fillRect(400,40,10,10);
    그리기.fillRect(600,70,10,10);
    그리기.fillRect(400,100,10,10);
    그리기.fillRect(400,150,10,10);
    그리기.fillText('A.(400,40)',400,38);
    그리기.fillText('B.(600,70)',550,60);
    그리기.fillText('C.(400,100)',420,110);
    그리기.fillText('D.(400,150)',420,160);

    그리기.beginPath();
    그리기.fillStyle='black';
    그리기.strokeStyle='red';
    그리기.fillText('그리기.moveTo(400, 40);',620,15);
    그리기.fillText('그리기.arcTo(600, 70, 400, 100, 50);',620,45);
    그리기.moveTo(715,17);
    그리기.lineTo(765,17);
    그리기.stroke();
    그리기.moveTo(700,47);
    그리기.lineTo(745,47);
    그리기.stroke();
    그리기.moveTo(750,47);
    그리기.lineTo(800,47);
    그리기.stroke();
    그리기.moveTo(814,47);
    그리기.lineTo(830,47);
    그리기.stroke();
    그리기.moveTo(700,127);
    그리기.lineTo(760,127);
    그리기.stroke();
    그리기.beginPath();
    그리기.arc(263,70,50,0,2*Math.PI);
    그리기.stroke();
    그리기.fillStyle='red';
    그리기.fillText('좌표 A',717,32);
    그리기.fillText('좌표 B',700,62);
    그리기.fillText('좌표 C',760,62);
    그리기.fillText('반지름',810,62);
    그리기.fillText('좌표 D',710,141);
    그리기.fillText('내접하는 호에 선이 그어졌는데, 좌표 D 와 연결선 그린다.',570,156);
    그리기.fillText('A와B, B와C를 있는 연장선상의 직선과 내접하는',620,82);
    그리기.fillText('반지름 50의 원을 만든다.',620,102);
    그리기.fillStyle='black';
    그리기.fillText('그리기.lineTo(400, 150);',620,122);

    


    그리기.beginPath();
    그리기.strokeStyle='black';
    그리기.moveTo(400, 240);
    그리기.arcTo(600, 270, 400, 300, 50);
    그리기.lineTo(400, 350);
    그리기.stroke();
    그리기.fillStyle='red';
    그리기.fillRect(400,240,10,10);
    그리기.fillRect(600,270,10,10);
    그리기.fillRect(400,300,10,10);
    그리기.fillRect(400,350,10,10);
    그리기.fillText('A.(400,40)',400,238);
    그리기.fillText('B.(600,70)',550,290);
    그리기.fillText('C.(400,100)',400,290);
    그리기.fillText('D.(400,150)',420,360);

    그리기.beginPath();
    그리기.strokeStyle='black';
    그리기.moveTo(650, 190);
    그리기.arcTo(850, 220, 650, 250, 25);
    그리기.lineTo(650, 300);
    그리기.stroke();
    그리기.fillStyle='red';
    그리기.fillRect(650,190,10,10);
    그리기.fillRect(850,220,10,10);
    그리기.fillRect(650,250,10,10);
    그리기.fillRect(650,300,10,10);
    그리기.fillText('반지름 : 25 일때',750,200);
    그리기.fillText('A.(400,40)',650,190);
    그리기.fillText('B.(600,70)',800,243);
    그리기.fillText('C.(400,100)',650,247);
    그리기.fillText('D.(400,150)',665,310);
    그리기.fillText('반지름이 작으면 오른쪽으로 이동할 것이고...',650,330);
  }
  if (e.target.innerHTML=='그리기12') {
    console.log('e.target.innerHTML==그리기12')
    var 캔버스 = document.querySelector('#전체대체 #선긋기와위치12');
    var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
    var 각도;
        // DPR 정보 가져오기
        var dpr = window.devicePixelRatio;
        // 캔버스 요소의 크기 가져오기
        var rect = 캔버스.getBoundingClientRect();
        캔버스.width = rect.width * dpr;
        캔버스.height = rect.height * dpr;
        // scale() 함수를 사용하여 캔버스 유닛 크기 보정
        그리기.scale(dpr, dpr);

    if ('quadrtic'=='quadrtic')  {  
      //이차(Quadratic )곡선 : quadraticCurveTo(cp1x, cp1y, x, y)
      그리기.font='bold 14px 맑은 고딕';
      그리기.fillStyle='black';
      그리기.fillText('그리기.moveTo(30,290); // 시작좌표',15,15);
      그리기.fillStyle='red';
      그리기.fillText('quadraticCurveTo(제어점x, 제어점y, 종료x , 종료y)',15,35);
      그리기.fillStyle='black';
      그리기.fillText('quadraticCurveTo(cp1x, cp1y, x, y)',15,55);
      그리기.fillText('(30,290))',10,315);
      그리기.fillText('(340,290)',310,315);
      그리기.fillText('제어점',30,150);
      그리기.fillText('제어점',175,80);
      그리기.fillText('제어점',315,148);
      그리기.fillStyle='blue';
      그리기.fillText('(50,177)',25,165);
      그리기.fillStyle='red';
      그리기.fillText('(188,110)',163,98);
      그리기.fillStyle='black';
      그리기.fillText('(330,177)',302,165);
      그리기.arc(190,290,180,0,2*Math.PI);
      그리기.stroke();
      그리기.fillStyle='red';
      그리기.fillRect(30,290,10,10);
      그리기.fillRect(340,290,10,10);
      그리기.beginPath();
      그리기.strokeStyle='blue';
      그리기.lineWidth=1;
      그리기.setLineDash([2,2]);
      그리기.moveTo(30,290);
      그리기.lineTo(340,290);
      그리기.stroke();

      그리기.strokeStyle='blue';
      그리기.lineWidth=2;
      그리기.setLineDash([2,0]);
      그리기.beginPath();
      그리기.arc(50,177,5,0,2*Math.PI);
      그리기.stroke();

      그리기.strokeStyle='red';
      그리기.beginPath();
      그리기.arc(188,110,5,0,2*Math.PI);
      그리기.stroke();

      그리기.strokeStyle='black';
      그리기.beginPath();
      그리기.arc(330,177,5,0,2*Math.PI);
      그리기.stroke();

      그리기.beginPath();
      그리기.moveTo(30,290);
      그리기.quadraticCurveTo(50, 177, 340, 290); //제어점, 목표점
      그리기.stroke();

      그리기.strokeStyle='red';
      그리기.beginPath();
      그리기.moveTo(30,290);
      그리기.quadraticCurveTo(188, 110, 340, 290); //제어점, 목표점
      그리기.stroke();

      그리기.strokeStyle='black';
      그리기.beginPath();
      그리기.moveTo(30,290);
      그리기.quadraticCurveTo(330, 177, 340, 290); //제어점, 목표점
      그리기.stroke();

      그리기.clearRect(0,320,380,320);
      그리기.fillStyle='black';
      그리기.fillText('그리기.beginPath();',10,340);
      그리기.fillText('그리기.moveTo(30,290);',10,360);
      그리기.fillText('그리기.quadraticCurveTo(330, 177, 340, 290);',10,380);
      그리기.fillText('그리기.stroke();',10,400);
    } 
    if ('bezierCurveTo'=='bezierCurveTo')  {  //550 오른쪽
      그리기.beginPath();
      그리기.arc(640,290,180,0,2*Math.PI);
      그리기.stroke();

      그리기.fillStyle='red';
      그리기.fillRect(480,290,10,10);
      그리기.fillRect(790,290,10,10);
      그리기.beginPath();
      그리기.strokeStyle='blue';
      그리기.lineWidth=1;
      그리기.setLineDash([2,2]);
      그리기.moveTo(480,290);
      그리기.lineTo(790,290);
      그리기.stroke();
      그리기.fillStyle='black';
      그리기.fillText('(480,290)',460,313);
      그리기.fillText('(790,290)',760,313);

      그리기.strokeStyle='blue';
      그리기.lineWidth=2;
      그리기.setLineDash([2,0]);
      그리기.beginPath();
      그리기.arc(50,177,5,0,2*Math.PI);
      그리기.stroke();

      그리기.strokeStyle='red';
      그리기.beginPath();
      그리기.arc(188,110,5,0,2*Math.PI);
      그리기.stroke();

      그리기.fillText('그리기.beginPath();',480,15);
      그리기.fillText('그리기.moveTo(480,290);',480,35);
      그리기.fillStyle='red';
      그리기.fillText('그리기.bezierCurveTo(x커브점1, y커브점1,',480,55);
      그리기.fillText('x커브점2, y커브점2, x종료점, y종료점);',625,75);
      그리기.fillStyle='black';
      그리기.fillText('그리기.bezierCurveTo(500, 176, 600, 400, 790, 290);',480,95);
      그리기.fillText('그리기.stroke();',480,115);

      그리기.strokeStyle='red';
      그리기.beginPath();
      그리기.arc(500,176,5,0,2*Math.PI);
      그리기.stroke();
      그리기.beginPath();
      그리기.arc(600,400,5,0,2*Math.PI);
      그리기.stroke();
      그리기.fillStyle='red';
      그리기.fillText('(500,176)',467,196);
      그리기.fillText('(600,400)',568,420);
      그리기.fillStyle='black';
      그리기.fillText('커브점 1',472,216);
      그리기.fillText('커브점 2',573,440);

      그리기.beginPath();
      그리기.moveTo(480,290);
      그리기.bezierCurveTo(500, 176, 600, 400, 790, 290);
      그리기.stroke();



      그리기.strokeStyle='blue';
      그리기.beginPath();
      그리기.arc(700,140,5,0,2*Math.PI);
      그리기.stroke();
      그리기.beginPath();
      그리기.arc(850,450,5,0,2*Math.PI);
      그리기.stroke();
      그리기.strokeStyle='black';
      그리기.beginPath();
      그리기.arc(600,200,5,0,2*Math.PI);
      그리기.stroke();
      그리기.beginPath();
      그리기.arc(650,200,5,0,2*Math.PI);
      그리기.stroke();
      그리기.fillStyle='blue';
      그리기.fillText('(700,140)',670,160);
      그리기.fillText('(850,450)',820,470);
      그리기.fillStyle='black';
      그리기.fillText('커브점 1',675,180);
      그리기.fillText('커브점 2',825,490);
      그리기.fillStyle='black';
      그리기.fillText('커브점 1',675,180);
      그리기.fillText('커브점 2',825,490);
      그리기.fillStyle='black';
      그리기.fillText('(600,200)',560,192);
      그리기.fillText('(650,200)',625,192);
      그리기.fillText('커브점 1',560,220);
      그리기.fillText('커브점 2',625,220);

      그리기.strokeStyle='blue';
      그리기.beginPath();
      그리기.moveTo(480,290);
      그리기.bezierCurveTo(700, 140, 850, 450, 790, 290);
      그리기.stroke();

      그리기.strokeStyle='black';
      그리기.beginPath();
      그리기.moveTo(480,290);
      그리기.bezierCurveTo(600, 200, 650, 200, 790, 290);
      그리기.stroke();






      

    }



  }
}
function 파일리스트() {
  console.log('파일리스트()')
  //다음 두 변수 정의할때, #전체대체로 들어갔을때 정의해야 됨.
  const fileInput = document.querySelector('#file_input');
  const fileListContainer = document.querySelector('.file_list_container');

  fileListContainer.innerHTML="<li><div>사용중인html파일</div><div>경로만</div><div>파일이름 </div></li>";

  //리스너 등록할때 #전체대체로 들어갔을때 등록해야 됨. change는 파일명이 추가될때마다 실행됨.
  fileInput.addEventListener('change', displaySelectedDirectories);

      function displaySelectedDirectories() {

        const selectedDirectories = fileInput.files; //파일들이 모두 담겨있다.

        for (const file of selectedDirectories) {
          var li태그생성=document.createElement('li');
          var 내부div태그생성=document.createElement('div');
          //내부div태그생성.textContent='없음';
          내부div태그생성.innerText='없음';
          li태그생성.appendChild(내부div태그생성);

          var 경로div태그생성=document.createElement('div');
          var 경로만='portal/' + file.webkitRelativePath.split('/').slice(0,file.webkitRelativePath.split('/').length-1).join('/');
          경로div태그생성.innerText=경로만 + '/';
          li태그생성.appendChild(경로div태그생성);
  
          var 파일이름div생성=document.createElement('div');
          파일이름div생성.textContent=file.name;
  
          li태그생성.appendChild(파일이름div생성);
  
          fileListContainer.appendChild(li태그생성);
        }







      } 
}
function 파일리스트결과폭조정() {
  var div들=document.querySelectorAll('#전체대체 .file_list_container > li > div:nth-child(1)');
  var 요소정보;
  var 최대폭=0;
  for (var i=0; i<div들.length; i++) {
    요소정보=div들[i].getBoundingClientRect();
    if (요소정보.width>최대폭) {최대폭=요소정보.width}
  }
  console.log('최대폭 : ' + 최대폭)
  for (var i=0; i<div들.length; i++) {
    div들[i].setAttribute('style','width:' + 최대폭 + 'px;')
   
  }

  var div들=document.querySelectorAll('#전체대체 .file_list_container > li > div:nth-child(2)');
  var 요소정보;
  var 최대폭=0;
  for (var i=0; i<div들.length; i++) {
    요소정보=div들[i].getBoundingClientRect();
    if (요소정보.width>최대폭) {최대폭=요소정보.width}
  }
  console.log('최대폭 : ' + 최대폭)
  for (var i=0; i<div들.length; i++) {
    div들[i].setAttribute('style','width:' + 최대폭 + 'px;')
   
  }

  var div들=document.querySelectorAll('#전체대체 .file_list_container > li > div:nth-child(3)');
  var 요소정보;
  var 최대폭=0;
  for (var i=0; i<div들.length; i++) {
    요소정보=div들[i].getBoundingClientRect();
    if (요소정보.width>최대폭) {최대폭=요소정보.width}
  }
  console.log('최대폭 : ' + 최대폭)
  for (var i=0; i<div들.length; i++) {
    div들[i].setAttribute('style','width:' + 최대폭 + 'px;')
   
  }
}
function textarea정보에서html파일이름추출() {
  console.log('textarea정보에서html파일이름추출()')
  var 리스트정보li들=document.querySelectorAll('#전체대체 .file_list_container li');
  //현재 html body.innerHTML에서 
  var src, 카운트=0, html의값있는src개수, 원본정보text, 파악된html들정보요소, 원본정보text에서추출된html파일이름;
  파악된html들정보요소=document.querySelector('#파악된html리스트');
  원본정보text=document.querySelector('body').innerHTML;
  원본정보text에서추출된html파일이름=document.querySelector('#html파일이름').innerText;

  if (1==1) {
    if (파악된html들정보요소.innerText.indexOf(원본정보text에서추출된html파일이름)>-1 && 리스트정보li들.length>1) {
      //html파일이름이 있고, 파일을 읽어온 상태 = 추출안해도됨
      console.log('현재html작업 건너뜀 : html파일이름이 있고, 파일을 읽어온 상태')
    } else if(리스트정보li들.length==1) {
      //파일을 읽어온 상태가 아니면 = 추출안해도됨
      console.log('현재html작업 건너뜀 : 파일을 읽어온 상태가 아니면 = 추출안해도됨')
    } else {
      //for문은 파일리스트 부분에 사용된 html파일이름 적는것
      for (var i=0; i<리스트정보li들.length; i++) {
        리스트정보li들[i].classList.add('임시표시클래스');
        src=document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(2)').innerHTML
          + document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(3)').innerHTML
        if (document.querySelector('body').innerHTML.indexOf('src="' + src + '"')>-1) {//있으면
          카운트+=1;
          if(document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML=='없음') {
            document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML = 원본정보text에서추출된html파일이름;
            document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').classList.add('src있음');
          } else { // 하나 이상 있을때
            document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML =document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML +  '<br>' + 원본정보text에서추출된html파일이름;
          }
        } 
        리스트정보li들[i].classList.remove('임시표시클래스');
      }
      html의값있는src개수=document.querySelectorAll('body [src]').length-document.querySelectorAll('body [src=""]').length;
      document.querySelector('#결과표_현재html .결과 > div:nth-child(3)').innerHTML=원본정보text에서추출된html파일이름;
      document.querySelector('#결과표_현재html .결과 > div:nth-child(4)').innerHTML=html의값있는src개수;
      document.querySelector('#결과표_현재html .결과 > div:nth-child(5)').innerHTML=카운트;
      document.querySelector('#결과표_현재html .결과 > div:nth-child(6)').innerHTML=html의값있는src개수 - 카운트;
      카운트=0;
      var 자식요소=document.createElement('span');
      자식요소.textContent=원본정보text에서추출된html파일이름;
      파악된html들정보요소.appendChild(자식요소);
    }
  }

  //#결과표_전체 내의 textarea만큼 반복
  var textarea들=document.querySelectorAll('#전체대체 #결과표_전체 textarea');
  for (var 고정=0; 고정<textarea들.length; 고정++) {
    var src, 카운트=0, html의값있는src개수, 원본정보text, 파악된html들정보요소, 원본정보text에서추출된html파일이름;
    파악된html들정보요소=document.querySelector('#파악된html리스트');
    원본정보text=textarea들[고정].value.substring(textarea들[고정].value.indexOf('body')+4,textarea들[고정].value.length)
    var 추출관련문자열='id="html파일이름" style="display:none">';
    var html추출시작index=원본정보text.indexOf(추출관련문자열) + 추출관련문자열.length;
    var html추출끝index=원본정보text.indexOf('<',html추출시작index);
    //"문자열".substring(startIndex, endIndex);0부터, 1부터
    원본정보text에서추출된html파일이름=원본정보text.substring(html추출시작index,html추출끝index)

    console.log('원본정보text에서추출된html파일이름 : ' + 원본정보text에서추출된html파일이름)
    
    if (원본정보text.match(/src="*"/ig)) {//없으면 null 인데 length 물어보면 에러?
      html의값있는src개수=원본정보text.match(/src="*"/ig).length; 
    } else {
      html의값있는src개수=0;
    }
    

    if (파악된html들정보요소.innerHTML.indexOf(원본정보text에서추출된html파일이름)>-1 || 리스트정보li들.length==1 || html의값있는src개수==0) {
      //건너뜀
    } else {
      if (html추출끝index>-1 && 원본정보text에서추출된html파일이름.length>5) {
        document.querySelector('#전체대체 #결과표_textarea' + (고정+1) + ' .결과 > div:nth-child(3)').innerHTML=원본정보text에서추출된html파일이름;
        document.querySelector('#전체대체 #결과표_textarea' + (고정+1) + ' .결과 > div:nth-child(4)').innerHTML=html의값있는src개수;
        파악된html들정보요소.innerHTML=파악된html들정보요소.innerHTML + ', ' + 원본정보text에서추출된html파일이름;

      }
      for (var i=0; i<리스트정보li들.length; i++) {
        리스트정보li들[i].classList.add('임시표시클래스');
        src=document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(2)').innerHTML
          + document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(3)').innerHTML
        if (원본정보text.indexOf('src="' + src + '"')>-1) {//있으면
          카운트+=1;
          if(document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML=='없음') {
            document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML = 원본정보text에서추출된html파일이름;
            document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').classList.add('src있음');
          } else { // 하나 이상 있을때
            document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML =document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML +  '<br>' + 원본정보text에서추출된html파일이름;
          }
        } 
        리스트정보li들[i].classList.remove('임시표시클래스');
      }
      document.querySelector('#전체대체 #결과표_textarea' + (고정+1) + ' .결과 > div:nth-child(5)').innerHTML=카운트;
      document.querySelector('#전체대체 #결과표_textarea' + (고정+1) + ' .결과 > div:nth-child(6)').innerHTML=html의값있는src개수 - 카운트;
    }
  }
  console.log('마지막')  
}

function 파일리스트_연습() {
  //다음 두 변수 정의할때, #전체대체로 들어갔을때 정의해야 됨.
  const fileInput = document.querySelector('#연습_file_input');
  const fileListContainer = document.querySelector('.연습file_list_container');

  fileListContainer.innerHTML='';

  //리스너 등록할때 #전체대체로 들어갔을때 등록해야 됨. change는 파일명이 추가될때마다 실행됨.
  fileInput.addEventListener('change', displaySelectedDirectories);

      function displaySelectedDirectories() {

          const selectedDirectories = fileInput.files;




          // 그룹화된 파일을 저장할 객체 생성
          const filesByDirectory = {};
          //선택한디렉토리(안의 파일), 하부디렉톡리(안의 파일)

          // 선택한 디렉터리 내의 파일을 그룹화
          for (const file of selectedDirectories) {

            

              const directoryPath = file.webkitRelativePath.split('/').slice(0, -1).join('/'); //slice(0, -1) 첫번째배열부터(처음폴더포함), 끝에서 두번째 배열까지(파일명제외)
              //const directoryPath = file.webkitRelativePath.split('/').slice(1, -1).join('/'); // 파일을 담은 폴더이름
              //const directoryPath = file.webkitRelativePath; // 선택한폴더부터 파일명까지 모두 사용할경우 directoryPath 값이 모두 고유값이다.
              //선택한 폴더인 경우 결과가 ''이다. length=0, 하위폴더인 경우 폴더이름.


  

              if (!filesByDirectory[directoryPath]) {
                  console.log('시작인 경우')
                  filesByDirectory[directoryPath] = [];
              }
              //console.log('directoryPath : ' + directoryPath)
              //console.log(filesByDirectory[directoryPath])



              filesByDirectory[directoryPath].push(file);
          }
          //console.log(filesByDirectory[''][0])

          // 파일을 그룹화된 디렉터리별로 나열
          const directoryList = document.createElement('ul');
          fileListContainer.appendChild(directoryList);
          //폴더명이 공백이면 내용없는 ul이 생기기때문에 폴더이름이 안보임, 폴더이름 부분에 첫번째 파일이름이 나오게 됨

          for (const directoryPath in filesByDirectory) {
              const directoryItem = document.createElement('li');
              const directoryName = document.createElement('div');

              directoryName.textContent = directoryPath;
              directoryItem.appendChild(directoryName);

              const fileList = document.createElement('ul');
              for (const file of filesByDirectory[directoryPath]) {
                  const fileItem = document.createElement('li');
                  fileItem.setAttribute('style','margin-bottom:-1px;')
                  var 사용유무div=document.createElement('div');
                  사용유무div.textContent='_' //공백하나 넣기, 상자로 보이도록
                  사용유무div.setAttribute('style','width:100px;border:1px solid black;display:inline-block;margin-right:3px;')
                  if (document.querySelector('[src="portal/' + directoryPath + '/' + file.name + '"]')) {
                    사용유무div.textContent='사용중'
                    사용유무div.setAttribute('style','width:100px;border:1px solid black;display:inline-block;margin-right:3px;background-color:yellow;')
                  }
                  
                  const fileName = document.createElement('div');
                  fileName.setAttribute('style','display:inline-block;')

                  fileName.textContent = file.name;
                  fileItem.appendChild(사용유무div);
                  fileItem.appendChild(fileName);
                  fileList.appendChild(fileItem);
              }

              directoryItem.appendChild(fileList);
              directoryList.appendChild(directoryItem);
          }
      }
}

폼컨트롤이벤트_단독기능보라_클래스부여();
function 폼컨트롤이벤트_단독기능보라_클래스부여() {//html켤때 동작, 전체대체로 outerhtml복사될 예정
  console.log('폼컨트롤이벤트_단독기능보라_클래스부여()');
  let 모든control이름들=[]; //let arr1 = [];let arr2 = new Array();
  var 요소들;
  //요소들.length : 처음에 188 이라면 전체대체로 올라왔다면 두배다.
  if (document.querySelectorAll('#전체대체 .폼control이벤트').length==0) {//전체대체로 복사전
    요소들=document.querySelectorAll('.폼control이벤트 > code:not(:first-child)');
  } else {
    요소들=document.querySelectorAll('#전체대체 .폼control이벤트 > code:not(:first-child)');
  }

  for (var i=0; i<요소들.length; i++) {
    모든control이름들.push(요소들[i].innerHTML);
  }
  //고유값 확인
  //let 고유값배열 = Array.from(new Set(모든control이름들))
  //console.log(고유값배열);

  for (var i=0; i<요소들.length; i++) {
    요소들[i].classList.remove('폼컨트롤이벤트_단독기능노랑_클래스');
    요소들[i].classList.remove('폼컨트롤이벤트_단독기능보라_클래스');
    요소들[i].classList.remove('폼컨트롤이벤트_모두포함브라운_클래스');
  }
  for (var i=0; i<요소들.length; i++) {
    if (모든control이름들.filter(element => 요소들[i].innerHTML == element).length == 1) { 요소들[i].classList.add('폼컨트롤이벤트_단독기능보라_클래스') }
    if (모든control이름들.filter(element => 요소들[i].innerHTML == element).length == 13) { 요소들[i].classList.add('폼컨트롤이벤트_모두포함브라운_클래스') }
  }
}
function 폼컨트롤이벤트_컨트롤이름클릭시같은이름노랑색칠(e) {//전체대체로 outerhtml복사된 곳
  console.log('폼컨트롤이벤트_컨트롤이름클릭시같은이름노랑색칠(e)');

  if (document.querySelector('.선택이벤트설명요소색칠')) {
    document.querySelector('.선택이벤트설명요소색칠').classList.remove('선택이벤트설명요소색칠');
  }

  let 모든control이름들=[]; //let arr1 = [];let arr2 = new Array();
  var 요소들=document.querySelectorAll('#전체대체 .폼control이벤트 > code:not(:first-child)');

  var 색칠할이름=e.target.innerHTML;
  console.log('색칠할이름 :' + 색칠할이름)

  for (var i=0; i<요소들.length; i++) {
    모든control이름들.push(요소들[i].innerHTML);
  }

  폼컨트롤이벤트_단독기능보라_클래스부여()

  for (var i=0; i<요소들.length; i++) {
    if (요소들[i].innerHTML == 색칠할이름) { 
      요소들[i].classList.remove('폼컨트롤이벤트_단독기능노랑_클래스');
      요소들[i].classList.remove('폼컨트롤이벤트_단독기능보라_클래스');
      요소들[i].classList.remove('폼컨트롤이벤트_모두포함브라운_클래스');
      요소들[i].classList.add('폼컨트롤이벤트_단독기능노랑_클래스') 
    }
  }
  //.이벤트작업code > code : innerHTML에서 클릭한 동작이름찾고 있으면 이동
  var 이벤트설명요소들=document.querySelectorAll('#전체대체 .이벤트설명요소');
  var 선택이벤트설명요소;
  var 선택이벤트설명요소첫번째=0;
  //  [대상 문자열].search([조건 문자열]); 대소문자 구분
  if (!이벤트설명요소들.length==0) {
    for (var i=0; i<이벤트설명요소들.length; i++) {
      if (이벤트설명요소들[i].innerHTML.search(색칠할이름)>0 && 선택이벤트설명요소첫번째==0) {
        선택이벤트설명요소=이벤트설명요소들[i];
        선택이벤트설명요소첫번째=1; //0이 아닌것으로 변경, 다음에 나오는거 설정안되도록
      }
    }

    if (선택이벤트설명요소) {
      선택이벤트설명요소.classList.add('선택이벤트설명요소색칠');
      var 절대좌표 = window.scrollY + 선택이벤트설명요소.getBoundingClientRect().top;
      var fix높이=getComputedStyle(document.querySelector('header')).height
      fix높이=fix높이.replace('/[^0-9]/g', ''); //숫자형식만 남기기
      fix높이 = parseInt(fix높이); //숫자형식으로 변환
      window.scrollTo({ left: 0, top: 절대좌표 - fix높이, behavior: "smooth" });
    }

  }
}


