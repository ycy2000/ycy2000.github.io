
//메모div에 리스터 걸고(html시작시부터 있어야되므로) 안에 집구조전체 div가 있으면 리스너 작동
var 메모div내_집구조전체div가있을때만작동하는것=document.querySelector('#메모');
function 공통켤때위치있는거메모div내_가구배치() {
  console.log('공통켤때위치있는거메모div내_가구배치()')
  var 집구조클래스들=document.querySelectorAll('#메모 .집구조');
  for (var i=0; i<집구조클래스들.length; i++) {
    집구조클래스들[i].id='집구조_구조물' + (i+1);
  }
  for (var i=0; i<집구조클래스들.length; i++) {
    var 이름=document.querySelectorAll('#메모 #' + 집구조클래스들[i].id + ' div')[1].innerText;
    var 가로=document.querySelectorAll('#메모 #' + 집구조클래스들[i].id + ' div')[3].innerText;
    var 세로=document.querySelectorAll('#메모 #' + 집구조클래스들[i].id + ' div')[5].innerText;
    var 레프트=document.querySelectorAll('#메모 #' + 집구조클래스들[i].id + ' div')[7].innerText;
    var 탑=document.querySelectorAll('#메모 #' + 집구조클래스들[i].id + ' div')[9].innerText;
    var 숫자보정값=0.1;
    if (isNaN(가로) || isNaN(세로) || isNaN(레프트) || isNaN(탑)) {
      //alert('가로, 세로, 높이, 넓이 중에 숫자가 아닌게 있음')
    } else if (가로>0 && 세로>0 && 레프트>0 && 탑>0) {
      console.log('켤때 만들고, style도 변경')
      var 추가할네모=document.createElement('div');
      추가할네모.textContent=이름;
      추가할네모.style.textAlign='center';
      추가할네모.id=집구조클래스들[i].id + '네모div';
      추가할네모.style.position='absolute';
      추가할네모.style.border='1px solid black';
      if (이름=='소파') {
        추가할네모.style.backgroundImage='url(portal/images/문서연결_kim/소파.png)'
      }
      if (이름=='바디프랜드') {
        추가할네모.style.backgroundImage='url(portal/images/문서연결_kim/바디프랜드.png)'
      }
      추가할네모.style.backgroundColor='yellow';
      추가할네모.style.width= (가로*숫자보정값) + 'px';
      추가할네모.style.height= (세로*숫자보정값) + 'px';
      추가할네모.style.left= (레프트*숫자보정값)*10 + 'px';
      추가할네모.style.top= (탑*숫자보정값)*10 + 'px';
      document.querySelector('#메모 #집구조그림테두리').appendChild(추가할네모);
      //console.log(document.querySelector('#메모 #집구조그림테두리').innerHTML)

    }

  }
}
function 가구지우기() {
  console.log('가구지우기')
  document.querySelector('#메모 #집구조그림테두리').innerHTML='';
}
function 가구만들기() {
  console.log('가구만들기')
  공통켤때위치있는거메모div내_가구배치()
}

function 메모div내_집구조전체(e) {
  //document.querySelector('#메모 #집구조전체').style.whiteSpace='nowrap'
  console.log('메모div내_집구조전체(e)')
  if (e.target.innerHTML=='회전') {//#메모 #집구조전체 일때만 회전 있다
    var 선택또는만들기div들=document.querySelectorAll('#메모 #집구조전체 > .집구조 > div:nth-child(1)');
    var js집구조선택노랑i플러스일;
    for (var i=0; i<선택또는만들기div들.length; i++) {
      if(선택또는만들기div들[i].classList.contains('js집구조선택노랑')) {js집구조선택노랑i플러스일=i+1}
    }
    if (document.querySelector('#메모 #집구조전체 #집구조_구조물' + js집구조선택노랑i플러스일 + '네모div')) {
      var 배치div=document.querySelector('#메모 #집구조전체 #집구조_구조물' + js집구조선택노랑i플러스일 + '네모div');
      if (배치div.style.transform=='') {
        배치div.style.transform='rotate(90deg)'
      } else if (배치div.style.transform=='rotate(90deg)'){
        배치div.style.transform='rotate(180deg)'
      } else if (배치div.style.transform=='rotate(180deg)'){
        배치div.style.transform='rotate(270deg)'
      } else if (배치div.style.transform=='rotate(270deg)'){
        배치div.style.transform=''
      }
    }
    
    //js집구조선택노랑i플러스일 해당순번의 배치가 안되어 있을수도 있다.

  }
  if (e.target.classList.contains('집구조선택또는만들기')) {
    console.log(e.target.parentNode.id)
    for (var i=0; i<document.querySelectorAll('.js집구조선택노랑').length; i++) {
      document.querySelectorAll('.js집구조선택노랑')[i].classList.remove('js집구조선택노랑');
    }

    e.target.classList.add('js집구조선택노랑')
    var 선택된네모div;
    
    var 이름=document.querySelectorAll('#메모 #' + e.target.parentNode.id + ' div')[1].innerText;
    var 가로=document.querySelectorAll('#메모 #' + e.target.parentNode.id + ' div')[3].innerText;
    var 세로=document.querySelectorAll('#메모 #' + e.target.parentNode.id + ' div')[5].innerText;
    var 레프트=document.querySelectorAll('#메모 #' + e.target.parentNode.id + ' div')[7].innerText;
    var 탑=document.querySelectorAll('#메모 #' + e.target.parentNode.id + ' div')[9].innerText;
    var 숫자보정값=0.1;

    if (isNaN(가로) || isNaN(세로) || isNaN(레프트) || isNaN(탑)) {
      if (document.querySelector('#메모 #집구조그림테두리 #' + e.target.parentNode.id + '네모div')) {
        document.querySelector('#메모 #집구조그림테두리 #' + e.target.parentNode.id + '네모div').remove();
      }
    } else if (레프트==0 || 탑==0) {
      //가로세로가 0인데, 네모div가 있으면 remove
      if (document.querySelector('#메모 #집구조그림테두리 #' + e.target.parentNode.id + '네모div')) {
        document.querySelector('#메모 #집구조그림테두리 #' + e.target.parentNode.id + '네모div').remove();
      }

    } else {
      if (document.querySelector('#메모 #집구조그림테두리 #' + e.target.parentNode.id + '네모div')) {
        선택된네모div=document.querySelector('#메모 #집구조그림테두리 #' + e.target.parentNode.id + '네모div');
        console.log(e.target.parentNode.id + ' : 이미 있다. 만들지 않고, style만 변경')
        선택된네모div.textContent=이름;
        선택된네모div.style.textAlign='center';
        선택된네모div.style.position='absolute';
        선택된네모div.style.border='1px solid black';
        선택된네모div.style.backgroundColor='yellow';
        선택된네모div.style.width= (가로*숫자보정값) + 'px';
        선택된네모div.style.height= (세로*숫자보정값) + 'px';
        선택된네모div.style.left= (레프트*숫자보정값)*10 + 'px';
        선택된네모div.style.top= (탑*숫자보정값)*10 + 'px';
      } else {

        console.log(e.target.parentNode.id + ' : 없으니. 만들고, style도 변경')
        var 추가할네모=document.createElement('div');
        추가할네모.textContent=이름;
        추가할네모.style.textAlign='center';
        추가할네모.id=e.target.parentNode.id + '네모div';
        추가할네모.style.position='absolute';
        추가할네모.style.border='1px solid black';
        추가할네모.style.backgroundColor='yellow';
        추가할네모.style.width= (가로*숫자보정값) + 'px';
        추가할네모.style.height= (세로*숫자보정값) + 'px';
        추가할네모.style.left= (레프트*숫자보정값)*10 + 'px';
        추가할네모.style.top= (탑*숫자보정값)*10 + 'px';
        document.querySelector('#메모 #집구조그림테두리').appendChild(추가할네모);
        //console.log(document.querySelector('#메모 #집구조그림테두리').innerHTML)
      }
    }
  }
}
function 집구조그림테두리mousedown(e) {
  // 마우스좌표가 div 의 top이 되려면 : 
  console.log('집구조그림테두리mousedown(e), e.target.id : ' + e.target.id);
  if ((e.target.id).substr(0, 7)!='집구조_구조물') {return;} 
  var 집구조그림테두리요소=document.querySelector('#메모 #집구조그림테두리');
  var 집구조그림테두리요소_정보=집구조그림테두리요소.getBoundingClientRect();
  //var 그림테두리세로좌표=window.pageYOffset+좌표참고요소자료.top;//204
  var 클릭요소=document.querySelector('#메모 #집구조그림테두리 #' + e.target.id);
  var 클릭요소정보=클릭요소.getBoundingClientRect();
  console.log('window.scrollY : ' + window.scrollY)
  console.log('집구조그림테두리요소.id : ' + 집구조그림테두리요소.id)
  console.log(집구조그림테두리요소_정보) //top
  //console.log('클릭요소.id : ' + 클릭요소.id)
  //console.log(클릭요소정보)
  console.log('마우스포인터 Y : mousedown시 값과 move값의 차이를 쓸 예정')
  console.log(e.clientY)



}

메모div내_집구조전체div가있을때만작동하는것.addEventListener('click',메모div내_집구조전체);
메모div내_집구조전체div가있을때만작동하는것.addEventListener('mousedown',집구조그림테두리mousedown);




//색칠보기에  .색칠보기_페이지 1개 있는데 9개 추가
일단다숨기기();
document.querySelector('#기본보기').classList.remove('d-none');

for (var i=0; i<9; i++) {
  document.querySelector('#색칠보기').innerHTML=document.querySelector('#색칠보기').innerHTML + document.querySelector('.색칠보기_페이지').outerHTML;
}
for (var i=1; i<10; i++) {
  document.querySelectorAll('.색칠보기_페이지')[i].classList.add('d-none');
}

function 일단다숨기기() {
  for (var i=0; i<document.querySelectorAll('.숨기기').length; i++) {
    document.querySelectorAll('.숨기기')[i].classList.add('d-none');
  }
}
function 전세계약시주의사항() {
  document.querySelector('#메모').innerHTML='<img src="portal/images/문서연결_kim/전세계약시주의사항.png" alt="이미지없음">';
  document.querySelector('#메모').classList.remove('d-none');
}
function 임시_집구조불러오기() {
  document.querySelector('#메모').innerHTML=document.querySelector('#집구조전체').outerHTML;
  document.querySelector('#메모').classList.remove('d-none');
}
function 임시_일신집구조불러오기() {
  document.querySelector('#메모').innerHTML=document.querySelector('#일신집구조전체').outerHTML;
  document.querySelector('#메모').classList.remove('d-none');
}
function 임시_일신집구조켤때캔버스그리기() {
  console.log('집구조켤때 한번 그리기')
  var 캔버스 = document.querySelector('#메모 #집구조캔버스');
  var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
  // DPR 정보 가져오기
  var dpr = window.devicePixelRatio;
  // 캔버스 요소의 크기 가져오기
  var rect = 캔버스.getBoundingClientRect();
  캔버스.width = rect.width * dpr;
  캔버스.height = rect.height * dpr;

  var 가로=0, 세로=0, X좌표, Y좌표;
  var 숫자보정값=0.1;
  // scale() 함수를 사용하여 캔버스 유닛 크기 보정
  그리기.scale(dpr, dpr);
  그리기.font = "bold 10pt '맑은 고딕'";
  그리기.textBaseline="top"; //top, middle, bottom, alphabetic, hanging, ideo graphic
  그리기.fillStyle = 'black'; //채워지는 색깔, fillText도 채우기임
  그리기.textAlign = 'center';
  그리기.strokeStyle='black'; // 선 말고 사각형으로채우기
  그리기.lineWidth='1';

  //컴퓨터방 : 가로 2250, 세로 3000
  그리기.fillStyle = 'gray';
  가로=2250*숫자보정값;세로=3000*숫자보정값;X좌표=100;Y좌표=20;
  그리기.fillRect(X좌표,Y좌표,가로,세로,);
  그리기.fillStyle='black';
  그리기.fillText('컴퓨터방',X좌표+30,Y좌표+10);
  
  //싱크대 : 가로 2250, 세로 700
  그리기.fillStyle = 'rgb(221, 235, 150)';//누런색
  가로=2250*숫자보정값;세로=700*숫자보정값;X좌표=340;Y좌표=20;
  그리기.fillRect(X좌표,Y좌표,가로,세로,);
  그리기.fillStyle='black';
  그리기.fillText('싱크대',X좌표+30,Y좌표+10);

  //냉장고 놓은 공간 : 가로 2250, 세로 2300
  그리기.fillStyle = 'gray';
  가로=2250*숫자보정값;세로=2300*숫자보정값;X좌표=340;Y좌표=90;
  그리기.fillRect(X좌표,Y좌표,가로,세로,);
  그리기.fillStyle='black';
  그리기.fillText('공간',X좌표+30,Y좌표+10);

  //큰방 : 가로 3090, 세로 3630
  그리기.fillStyle = 'gray';
  가로=3090*숫자보정값;세로=3630*숫자보정값;X좌표=100;Y좌표=335;
  그리기.fillRect(X좌표,Y좌표,가로,세로,);
  그리기.fillStyle='black';
  그리기.fillText('큰방',X좌표+30,Y좌표+10);

  //거실 : 가로 4380, 세로 2180
  그리기.fillStyle = 'gray';
  가로=4380*숫자보정값;세로=2180*숫자보정값;X좌표=423;Y좌표=480;
  그리기.fillRect(X좌표,Y좌표,가로,세로,);
  그리기.fillStyle='black';
  그리기.fillText('거실',X좌표+200,Y좌표+10);

  //전실과 신발장 : 문쪽으로 900, 신발장까지 1000, 신발장500 (), 벽은 150인듯, 벽 포함 1500이니 먼저하고 선을 덮어씀
  그리기.fillStyle = 'rgb(221, 235, 150)';//누런색
  가로=900*숫자보정값;세로=1500*숫자보정값;X좌표=655;Y좌표=320;
  그리기.fillRect(X좌표,Y좌표,가로,세로,);
  그리기.fillStyle='black';
  그리기.fillText('신발장',X좌표+30,Y좌표+10);
  그리기.fillText('현관',X좌표+30,Y좌표+80);
  그리기.fillStyle = 'gray';
  그리기.fillRect(X좌표,Y좌표+50,가로,3,);//신발장과 현관 구분선

  //거실과 붙은 현관 벽 선 : 가로 2060, 세로 100(선폭)
  그리기.fillStyle = 'black';
  가로=2060*숫자보정값;세로=100*숫자보정값;X좌표=655;Y좌표=470;
  그리기.fillRect(X좌표,Y좌표,가로,세로,);

  //화장실,세탁실 : 
  그리기.fillStyle = 'gray';
  가로=1680*숫자보정값;세로=3000*숫자보정값;X좌표=578;Y좌표=20;
  그리기.fillRect(X좌표,Y좌표,가로,세로,);
  그리기.fillStyle='black';
  그리기.fillText('세탁실',X좌표+30,Y좌표+10);
  그리기.fillText('화장실',X좌표+30,Y좌표+150);
  그리기.fillStyle = 'black';
  그리기.fillRect(X좌표,Y좌표+100,가로,1,);//세탁실과 화장실 구분선

  그리기.textAlign = 'left';
  그리기.fillText('컴퓨터방 : 가로 2250, 세로 3000',1300,20);
  그리기.fillText('큰방 : 가로 3090, 세로 3630',1300,50);
  그리기.fillText('거실 : 가로 4380, 세로 2180',1300,80);




  
  //가로 세로 100마다 점찍기
  var 점가로=0, 점세로=790;
  그리기.fillStyle='red'
  그리기.lineWidth=1;
  for (var i=0; i<36; i++) {
    점가로+=50; 
    그리기.beginPath();
    그리기.arc(점가로, 점세로, 2, 0, 2*Math.PI);
    그리기.fill();
    그리기.stroke();
    그리기.fillText(점가로,점가로,점세로-20);
  }
  var 점가로=50, 점세로=0;
  그리기.fillStyle='red'
  그리기.lineWidth=1;
  for (var i=0; i<15; i++) {
    점세로+=50; 
    그리기.beginPath();
    그리기.arc(점가로, 점세로, 2, 0, 2*Math.PI);
    그리기.fill();
    그리기.stroke();
    그리기.fillText(점세로,점가로-20,점세로-7);
  }
}
function 임시_집구조켤때캔버스그리기() {
  console.log('집구조켤때 한번 그리기')
  var 캔버스 = document.querySelector('#메모 #집구조캔버스');
  var 그리기 = 캔버스.getContext("2d"); //2d그림객체생성
  // DPR 정보 가져오기
  var dpr = window.devicePixelRatio;
  // 캔버스 요소의 크기 가져오기
  var rect = 캔버스.getBoundingClientRect();
  캔버스.width = rect.width * dpr;
  캔버스.height = rect.height * dpr;

  var 가로=0, 세로=0, X좌표, Y좌표,벽폭,문변수가로폭,문변수세로길이;
  var 숫자보정값=0.1;
  // scale() 함수를 사용하여 캔버스 유닛 크기 보정
  그리기.scale(dpr, dpr);
  그리기.font = "bold 10pt '맑은 고딕'";
  그리기.textBaseline="top"; //top, middle, bottom, alphabetic, hanging, ideo graphic
  그리기.fillStyle = 'black'; //채워지는 색깔, fillText도 채우기임
  그리기.textAlign = 'center';
  그리기.strokeStyle='black'; // 선 말고 사각형으로채우기
  그리기.lineWidth='1';

  //배란다
  그리기.fillStyle = 'rgba(128,128,128,0.4)';//회색
  가로=1100*숫자보정값;세로=6680*숫자보정값;X좌표=60;Y좌표=30;
  그리기.fillRect(X좌표,Y좌표,가로,세로);
  그리기.fillStyle='black';
  그리기.fillText('배란다',X좌표+(가로/2),Y좌표+(세로/2));
  벽폭=22;//가로일수도 세로일수도
  그리기.fillRect(X좌표,Y좌표-벽폭,가로,벽폭);//테두리 위
  그리기.fillRect(X좌표,Y좌표+세로,가로,벽폭);//테두리 아래

  그리기.fillStyle='black';
  그리기.fillRect(X좌표-벽폭,Y좌표-벽폭,벽폭,세로+벽폭*2);//테두리 왼쪽
  그리기.fillRect(X좌표,Y좌표+340,8,340);//테두리 왼쪽 튀어나온곳

  //컴퓨터방
  그리기.fillStyle = 'rgba(128,128,128,0.4)';//회색
  가로=3650*숫자보정값;세로=2800*숫자보정값;X좌표=192;Y좌표=30;
  그리기.fillRect(X좌표,Y좌표,가로,세로);
  그리기.fillStyle='black';
  그리기.fillText('컴퓨터방',X좌표+(가로/2),Y좌표+(세로/2));
  벽폭=22;//가로일수도 세로일수도
  그리기.fillRect(X좌표,Y좌표-벽폭,가로,벽폭);//테두리 위
  그리기.fillRect(X좌표,Y좌표+세로,가로,벽폭);//테두리 아래

  그리기.fillStyle='black';
  벽폭=22;//
  그리기.fillRect(X좌표-벽폭,Y좌표-벽폭,벽폭,세로+벽폭*2);//테두리 왼쪽

  그리기.fillStyle = 'rgba(0,0,128,0.4)';//문,창문,파랑, 왼쪽 창문
  문변수가로폭=벽폭; 문변수세로길이=252;
  그리기.clearRect(X좌표-벽폭,Y좌표,문변수가로폭,문변수세로길이);//창문
  그리기.fillRect(X좌표-벽폭,Y좌표,문변수가로폭,문변수세로길이);//창문

  그리기.fillStyle='black';
  그리기.fillRect(X좌표+가로,Y좌표-벽폭,벽폭,세로+벽폭*2);//테두리 오른쪽
  그리기.fillStyle = 'rgba(0,0,128,0.4)';//문,창문,파랑, 오른쪽 문
  문변수가로폭=벽폭; 문변수세로길이=130;
  그리기.clearRect(X좌표+가로,Y좌표-벽폭+160,문변수가로폭,문변수세로길이);//문
  그리기.fillRect(X좌표+가로,Y좌표-벽폭+160,문변수가로폭,문변수세로길이);//문  

  //큰방
  그리기.fillStyle = 'rgba(128,128,128,0.4)';//회색
  가로=3650*숫자보정값;세로=3670*숫자보정값;X좌표=192;Y좌표=353-벽폭;
  그리기.fillRect(X좌표,Y좌표,가로,세로);
  그리기.fillStyle='black';
  그리기.fillText('큰방',X좌표+(가로/2),Y좌표+(세로/2));
  벽폭=22;//가로일수도 세로일수도
  그리기.fillRect(X좌표,Y좌표-벽폭,가로,벽폭);//테두리 위
  그리기.fillRect(X좌표,Y좌표+세로,가로,벽폭);//테두리 아래

  그리기.fillStyle='black';
  그리기.fillRect(X좌표+가로,Y좌표-벽폭,벽폭,세로+벽폭*2);//테두리 오른쪽
  그리기.fillStyle = 'rgba(0,0,128,0.4)';//문,창문,파랑
  문변수가로폭=벽폭; 문변수세로길이=92;
  그리기.clearRect(X좌표+가로,Y좌표-벽폭+30,문변수가로폭,문변수세로길이);//문
  그리기.fillRect(X좌표+가로,Y좌표-벽폭+30,문변수가로폭,문변수세로길이);//문

  그리기.fillStyle='black';
  벽폭=22;
  그리기.fillRect(X좌표-벽폭,Y좌표-벽폭,벽폭,세로+벽폭*2);//테두리 왼쪽
  그리기.fillStyle = 'rgba(0,0,128,0.4)';//문,창문,파랑
  문변수가로폭=벽폭; 문변수세로길이=240;
  그리기.clearRect(X좌표-벽폭,Y좌표+10,문변수가로폭,문변수세로길이);//문
  그리기.fillRect(X좌표-벽폭,Y좌표+10,문변수가로폭,문변수세로길이);//문

  //신발장과 현관문 (구분선으로 구분)
  그리기.fillStyle = 'rgb(221, 235, 150)';//누런색
  가로=1660*숫자보정값;세로=1150*숫자보정값;X좌표=578;Y좌표=30;
  그리기.fillRect(X좌표,Y좌표,가로,세로,);
  그리기.fillStyle='black';
  그리기.fillText('신발장',X좌표+30,Y좌표+60);
  그리기.fillText('현관',X좌표+130,Y좌표+60);
  그리기.fillStyle = 'gray';
  그리기.fillRect(X좌표+35,Y좌표,3,세로);//신발장과 현관 구분선
  그리기.fillStyle='black';
  벽폭=22;//가로일수도 세로일수도
  그리기.fillRect(X좌표,Y좌표-벽폭,가로,벽폭);//테두리 위
  그리기.fillRect(X좌표,Y좌표+세로,153,벽폭);//테두리 아래
  그리기.fillRect(X좌표+가로,Y좌표-벽폭,벽폭,세로+벽폭*2);//테두리 오른쪽
  그리기.fillStyle = 'rgba(0,0,128,0.4)';
  문변수가로폭=벽폭; 문변수세로길이=130;
  그리기.clearRect(X좌표+가로,Y좌표+10,문변수가로폭,문변수세로길이-40);//문
  그리기.fillRect(X좌표+가로,Y좌표+10,문변수가로폭,문변수세로길이-40);//문  
  그리기.fillStyle = 'rgba(0,0,128,0.4)';//아래 중문
  문변수가로폭=152; 문변수세로길이=벽폭;
  그리기.clearRect(X좌표+15,Y좌표+세로,문변수가로폭,문변수세로길이);//문
  그리기.fillRect(X좌표+15,Y좌표+세로,문변수가로폭,문변수세로길이);//문

  //화장실
  그리기.fillStyle = 'rgba(128,128,128,0.4)';//회색
  가로=2060*숫자보정값;세로=1580*숫자보정값;X좌표=578;Y좌표=540;
  그리기.fillRect(X좌표,Y좌표,가로,세로);
  그리기.fillStyle='black';
  그리기.fillText('화장실',X좌표+(가로/2),Y좌표+(세로/2));
  벽폭=22;//가로일수도 세로일수도
  그리기.fillRect(X좌표,Y좌표-벽폭,가로,벽폭);//테두리 위
  그리기.fillRect(X좌표,Y좌표+세로,가로,벽폭);//테두리 아래
  그리기.fillStyle='black';
  그리기.fillRect(X좌표+가로,Y좌표-벽폭,벽폭,세로+벽폭*2);//테두리 오른쪽
  그리기.fillStyle = 'rgba(0,0,128,0.4)';//문,창문,파랑
  문변수가로폭=100; 문변수세로길이=벽폭;
  그리기.clearRect(X좌표+20,Y좌표-벽폭,문변수가로폭,문변수세로길이);//문
  그리기.fillRect(X좌표+20,Y좌표-벽폭,문변수가로폭,문변수세로길이);//문

  //부엌방
  그리기.fillStyle = 'rgba(128,128,128,0.4)';//회색
  가로=3030*숫자보정값;세로=2770*숫자보정값;X좌표=926;Y좌표=423;
  그리기.fillRect(X좌표,Y좌표,가로,세로);
  그리기.fillStyle='black';
  그리기.fillText('옷방',X좌표+(가로/2),Y좌표+(세로/2));
  벽폭=20;//가로일수도 세로일수도
  그리기.fillRect(X좌표,Y좌표-벽폭,가로,벽폭);//테두리 위
  그리기.fillRect(X좌표,Y좌표+세로,가로,벽폭);//테두리 아래
  그리기.fillStyle='black';
  그리기.fillRect(X좌표+가로,Y좌표-벽폭,41,317);//테두리 오른쪽
  그리기.fillRect(X좌표-벽폭,Y좌표-벽폭,벽폭,세로+벽폭*2);//테두리 왼쪽
  그리기.fillStyle = 'rgba(0,0,128,0.4)';//문,창문,파랑
  문변수가로폭=100; 문변수세로길이=벽폭;
  그리기.clearRect(X좌표+20,Y좌표-벽폭,문변수가로폭,문변수세로길이);//문
  그리기.fillRect(X좌표+20,Y좌표-벽폭,문변수가로폭,문변수세로길이);//문
  문변수세로길이=100;
  그리기.clearRect(X좌표+가로,Y좌표+20,41,문변수세로길이);//창문
  그리기.fillRect(X좌표+가로,Y좌표+20,41,문변수세로길이);//창문



  //부엌방공간과 우측벽
  그리기.fillStyle = 'rgba(128,128,128,0.4)';//회색
  가로=990*숫자보정값;세로=1580*숫자보정값;X좌표=805;Y좌표=540;
  그리기.fillRect(X좌표,Y좌표,가로,세로);
  그리기.fillStyle='black';
  그리기.fillText('옷방',X좌표+(가로/2),Y좌표+(세로/2)-30);
  그리기.fillText('수납',X좌표+(가로/2),Y좌표+(세로/2));
  그리기.fillText('공간',X좌표+(가로/2),Y좌표+(세로/2)+30);
  벽폭=22;//가로일수도 세로일수도
  그리기.fillRect(X좌표,Y좌표-벽폭,가로,벽폭);//테두리 위
  그리기.fillRect(X좌표,Y좌표+세로,가로,벽폭);//테두리 아래
  그리기.fillStyle='black';
  그리기.fillRect(X좌표+가로,Y좌표-벽폭,벽폭,세로+벽폭*2);//테두리 오른쪽
  그리기.fillStyle = 'rgba(0,0,128,0.4)';//문,창문,파랑
  문변수가로폭=벽폭; 문변수세로길이=135;
  그리기.clearRect(X좌표+가로,Y좌표+벽폭-10,문변수가로폭,문변수세로길이);//문
  그리기.fillRect(X좌표+가로,Y좌표+벽폭-10,문변수가로폭,문변수세로길이);//문

  //거실 네모
  그리기.fillStyle = 'rgba(128,128,128,0.4)';//회색
  가로=3270*숫자보정값;세로=3520*숫자보정값;X좌표=579;Y좌표=167;
  그리기.fillRect(X좌표,Y좌표,가로,세로);

  //거실 네모 오른쪽
  그리기.fillStyle = 'rgba(128,128,128,0.4)';//회색
  가로=4255*숫자보정값;세로=2370*숫자보정값;X좌표=906;Y좌표=167;
  그리기.fillRect(X좌표,Y좌표,가로,세로);

  그리기.fillStyle = 'rgba(128,128,128,0.4)';//자투리
  가로=650*숫자보정값;세로=10;X좌표=1276;Y좌표=405;
  그리기.fillRect(X좌표,Y좌표,가로,세로);

  //거실 네모 오른쪽 끝
  그리기.fillStyle = 'rgba(128,128,128,0.4)';//회색
  가로=1250*숫자보정값;세로=2860*숫자보정값;X좌표=1270;Y좌표=415;
  그리기.fillRect(X좌표,Y좌표,가로,세로);

  //싱크대쪽 위쪽 벽, 싱크대 오른쪽 벽, 세탁실 아래쪽 벽
  벽폭=22;//가로일수도 세로일수도
  그리기.fillStyle='black';
  가로=6650*숫자보정값;세로=벽폭;X좌표=733;Y좌표=145;//싱크대쪽 위쪽 벽,
  그리기.fillRect(X좌표,Y좌표,가로,세로);
  가로=벽폭;세로=5700*숫자보정값;X좌표=1395;Y좌표=145;//싱크대 오른쪽 벽
  그리기.fillRect(X좌표,Y좌표,가로,세로);
  가로=1690*숫자보정값;세로=벽폭;X좌표=1250;Y좌표=698;//세탁실 아래쪽 벽
  그리기.fillRect(X좌표-2,Y좌표,가로,세로);

  가로=300*숫자보정값;세로=12;X좌표=1248;Y좌표=403;//세탁실 입구 왼쪽
  그리기.fillRect(X좌표,Y좌표,가로,세로);

  가로=600*숫자보정값;세로=12;X좌표=1340;Y좌표=403;//세탁실 입구 오른쪽
  그리기.fillRect(X좌표,Y좌표,가로,세로);

  //싱크대
  가로=174+66;세로=58;X좌표=1155;Y좌표=167;
  그리기.fillStyle = 'rgb(221, 235, 150)';//누런색
  그리기.strokeStyle='black'; // 선 말고 사각형으로채우기
  그리기.lineWidth='1';
  그리기.fillRect(X좌표,Y좌표,가로,세로);

  그리기.beginPath();
  그리기.strokeRect(X좌표,Y좌표,가로,세로);
  그리기.stroke();
  그리기.fill();

  가로=66;세로=238;X좌표=X좌표+174;Y좌표=167;//싱크대쪽 위쪽 벽,
  그리기.fillStyle = 'rgb(221, 235, 150)';//누런색
  그리기.strokeStyle='black'; // 선 말고 사각형으로채우기
  그리기.lineWidth='1';
  그리기.fillRect(X좌표,Y좌표,가로,세로);

  그리기.beginPath();
  그리기.strokeRect(X좌표,Y좌표,가로,세로);
  그리기.stroke();
  그리기.fill();

  그리기.fillRect(X좌표-2,Y좌표+1,가로,56);//선 없애기

  //방크기 메모
  그리기.fillStyle='black';
  그리기.textAlign='left';
  그리기.fillText('[컴퓨터방] 가로:365cm, 세로:280cm',800,10);
  그리기.fillText('  [큰방] 가로:365cm, 세로:367cm',817,40);
  그리기.fillText(' [옷방] 가로:303cm, 세로:277cm',817,70);

  그리기.fillStyle = 'rgba(128,128,128,1)';//회색
  그리기.fillRect(1009,670,220,20);
  그리기.fillStyle='black';
  그리기.textAlign='left';
  그리기.fillText(' 높이  : 223cm',1050,650);
  그리기.fillText(' 문 열렸을때  : 220cm, 닫았을때 302cm',970,673);

  그리기.fillText(' 문:92cm',535,380);
  그리기.fillText(' 문:92cm',625,524);
  그리기.fillText(' 문:92cm',970,405);

  //콘센트
  그리기.fillStyle='white';
  그리기.fillRect(290,20,10,10);
  그리기.fillRect(556,80,10,10);
  그리기.fillRect(290,322,10,10);
  그리기.fillRect(556,450,10,10);
  그리기.fillRect(835,157,10,10);
  그리기.fillRect(1085,157,10,10);//냉장고 문쪽
  그리기.fillRect(1170,403,10,10);
  그리기.fillRect(1228,470,10,10);


  
  //치수 마지막 기록
  가로=3650*숫자보정값;세로=2800*숫자보정값;X좌표=192;Y좌표=30;//컴퓨터방
  그리기.beginPath();
  그리기.strokeStyle='yellow';
  그리기.lineWidth=2;
  그리기.setLineDash([2,8]);
  그리기.moveTo(X좌표,Y좌표-13);
  그리기.lineTo(X좌표+가로,Y좌표-13);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('365cm',X좌표+(가로/2),Y좌표-12);

  그리기.beginPath();
  그리기.strokeStyle='yellow';
  그리기.lineWidth=2;
  그리기.setLineDash([2,8]);
  그리기.moveTo(X좌표-18,Y좌표);
  그리기.lineTo(X좌표-18,Y좌표+세로);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('2',X좌표-12,Y좌표+100);
  그리기.fillText('8',X좌표-12,Y좌표+100+15);
  그리기.fillText('0',X좌표-12,Y좌표+100+30);
  그리기.fillText('cm',X좌표-17,Y좌표+100+45);

가로=3650*숫자보정값;세로=3670*숫자보정값;X좌표=192;Y좌표=353-벽폭;//큰방
  그리기.beginPath();
  그리기.strokeStyle='yellow';
  그리기.lineWidth=2;
  그리기.setLineDash([2,8]);
  그리기.moveTo(X좌표-18,Y좌표);
  그리기.lineTo(X좌표-18,Y좌표+세로);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('3',X좌표-12,Y좌표+100);
  그리기.fillText('6',X좌표-12,Y좌표+100+15);
  그리기.fillText('7',X좌표-12,Y좌표+100+30);
  그리기.fillText('cm',X좌표-17,Y좌표+100+45);

가로=3280*숫자보정값;세로=3510*숫자보정값;X좌표=576;Y좌표=167;//거실 네모
  그리기.beginPath();
  그리기.strokeStyle='yellow';
  그리기.lineWidth=2;
  그리기.setLineDash([2,8]);
  그리기.moveTo(X좌표+9,Y좌표+60);
  그리기.lineTo(X좌표+가로+9,Y좌표+60);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('328cm',X좌표+(가로/2),Y좌표+60);

  그리기.beginPath();
  그리기.strokeStyle='yellow';
  그리기.lineWidth=2;
  그리기.setLineDash([2,8]);
  그리기.moveTo(X좌표+110,Y좌표+3);
  그리기.lineTo(X좌표+110,Y좌표+세로);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('3',X좌표+115,Y좌표+100);
  그리기.fillText('5',X좌표+115,Y좌표+100+15);
  그리기.fillText('1',X좌표+115,Y좌표+100+30);
  그리기.fillText('cm',X좌표+111,Y좌표+100+45);

  그리기.beginPath();//거실네모 오른쪽 둘로 나눈거 위쪽
  그리기.strokeStyle='yellow';
  그리기.lineWidth=2;
  세로=238;
  그리기.setLineDash([2,8]);
  그리기.moveTo(X좌표+330,Y좌표+3);
  그리기.lineTo(X좌표+330,Y좌표+세로);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('2',X좌표+315,Y좌표+100);
  그리기.fillText('3',X좌표+315,Y좌표+100+15);
  그리기.fillText('8',X좌표+315,Y좌표+100+30);
  그리기.fillText('cm',X좌표+310,Y좌표+100+45);
  그리기.fillRect(X좌표+가로-13,Y좌표-3,30,3);
  그리기.fillRect(X좌표+가로-13,Y좌표+세로-2,30,3);

  X좌표=907;Y좌표=402;세로=113;//거실네모 오른쪽 둘로 나눈거 아래쪽
  그리기.beginPath();
  그리기.setLineDash([2,8]);
  그리기.moveTo(X좌표,Y좌표);
  그리기.lineTo(X좌표,Y좌표+세로);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('1',X좌표+6,Y좌표+30);
  그리기.fillText('1',X좌표+6,Y좌표+30+15);
  그리기.fillText('3',X좌표+6,Y좌표+30+30);
  그리기.fillText('cm',X좌표+1,Y좌표+30+45);
  그리기.fillRect(X좌표-15,Y좌표+세로+1,25,3);

  그리기.beginPath();//옷방 위쪽 가로
  그리기.strokeStyle='yellow';
  그리기.setLineDash([2,3]);
  그리기.lineWidth=2;
  가로=303;X좌표=926;Y좌표=420;
  그리기.moveTo(X좌표,Y좌표);
  그리기.lineTo(X좌표+가로,Y좌표);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('303cm',X좌표+가로/2,Y좌표-15);

  그리기.beginPath();//현관왼쪽부터 154cm
  그리기.strokeStyle='yellow';
  그리기.setLineDash([0,0]);
  그리기.lineWidth=2;
  가로=154;X좌표=579;Y좌표=150;
  그리기.moveTo(X좌표,Y좌표);
  그리기.lineTo(X좌표+가로,Y좌표);
  그리기.stroke();
  그리기.fillStyle='black';
  그리기.fillText('154cm',X좌표+가로/2,Y좌표-15);

  그리기.beginPath();//현관왼쪽부터 154cm 오른쪽 174cm
  그리기.strokeStyle='yellow';
  그리기.setLineDash([0,0]);
  그리기.lineWidth=2;
  가로=174;X좌표=579+154;Y좌표=150;
  그리기.moveTo(X좌표,Y좌표+3);
  그리기.lineTo(X좌표+가로,Y좌표+3);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('174cm',X좌표+가로/2,Y좌표-11);

  그리기.beginPath();//현관왼쪽부터 154cm 오른쪽 174cm 오른쪽 249cm
  그리기.strokeStyle='yellow';
  그리기.setLineDash([0,0]);
  그리기.lineWidth=2;
  가로=249;X좌표=X좌표+174;Y좌표=147;
  그리기.moveTo(X좌표,Y좌표+3);
  그리기.lineTo(X좌표+가로,Y좌표+3);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('249cm',X좌표+가로/2,Y좌표-11);

  그리기.beginPath();//현관왼쪽부터 154cm 오른쪽 174cm 오른쪽 249cm 오른쪽 174cm
  그리기.strokeStyle='yellow';
  그리기.setLineDash([0,0]);
  그리기.lineWidth=2;
  가로=174;X좌표=X좌표+249;Y좌표=150;
  그리기.moveTo(X좌표,Y좌표+3);
  그리기.lineTo(X좌표+가로,Y좌표+3);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('174cm',X좌표+가로/2,Y좌표-11);

  그리기.beginPath();//현관왼쪽부터 154cm 오른쪽 174cm 오른쪽 249cm 오른쪽 174cm 오른쪽 66cm
  그리기.strokeStyle='yellow';
  그리기.setLineDash([0,0]);
  그리기.lineWidth=2;
  가로=66;X좌표=X좌표+174;Y좌표=147;
  그리기.moveTo(X좌표,Y좌표+3);
  그리기.lineTo(X좌표+가로,Y좌표+3);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('66cm',X좌표+가로/2,Y좌표-11);

  그리기.beginPath();//보일러실 가로
  그리기.strokeStyle='yellow';
  그리기.setLineDash([2,4]);
  그리기.lineWidth=2;
  가로=125;X좌표=1270;Y좌표=670;
  그리기.moveTo(X좌표,Y좌표);
  그리기.lineTo(X좌표+가로,Y좌표);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('125cm',X좌표+40,Y좌표-16);











  그리기.beginPath();//옷방 세로
  그리기.strokeStyle='yellow';
  그리기.lineWidth=2;
  세로=303;X좌표=926;Y좌표=420;
  그리기.setLineDash([0,0]);
  그리기.moveTo(X좌표,Y좌표);
  그리기.lineTo(X좌표,Y좌표+세로);
  그리기.stroke();
  그리기.fillStyle='yellow';
  그리기.fillText('277cm',X좌표,Y좌표+세로/2);

  가로=174+66;세로=58;X좌표=1156;Y좌표=167;//싱크대 58cm
  그리기.beginPath();
  그리기.strokeStyle='red';
  그리기.lineWidth=2;
  그리기.setLineDash([2,2]);//[2,8]
  그리기.moveTo(X좌표,Y좌표);
  그리기.lineTo(X좌표,Y좌표+세로);
  그리기.stroke();
  그리기.fillStyle='red';
  그리기.fillText('5',X좌표+5,Y좌표+10);
  그리기.fillText('8',X좌표+5,Y좌표+25);
  그리기.fillText('cm',X좌표+2,Y좌표+40);

  그리기.beginPath();//싱크대 58cm 아래부분
  그리기.strokeStyle='red';
  그리기.lineWidth=2;
  세로=238-59;Y좌표=Y좌표+58;
  X좌표=X좌표+150;
  그리기.setLineDash([2,2]);//[2,8]
  그리기.moveTo(X좌표,Y좌표+3);
  그리기.lineTo(X좌표,Y좌표+세로);
  그리기.stroke();
  그리기.fillStyle='red';
  그리기.fillText('1',X좌표+3,Y좌표+60);
  그리기.fillText('8',X좌표+3,Y좌표+60+15);
  그리기.fillText('0',X좌표+3,Y좌표+60+30);
  그리기.fillText('cm',X좌표,Y좌표+60+45);
  그리기.fillRect(X좌표-10,Y좌표-3,20,3);
  그리기.fillRect(X좌표-10,Y좌표+세로-2,20,3);



  그리기.fillStyle='gray';
  X좌표=1335;Y좌표=167;//가스레인지
  그리기.fillRect(X좌표+2,Y좌표+170,45.5,59);//
  그리기.fillRect(X좌표+2,Y좌표+88-41,50,82);//
  그리기.fillStyle='black';
  그리기.fillText('가스',X좌표+11,Y좌표+180);
  그리기.fillText('레인지',X좌표+5,Y좌표+205);
  그리기.fillText('세척대',X좌표+5,Y좌표+80);


  //가로 세로 100마다 점찍기
  var 점가로=0, 점세로=790;
  그리기.fillStyle='red'
  그리기.lineWidth=1;
  for (var i=0; i<36; i++) {
    점가로+=50; 
    그리기.beginPath();
    그리기.arc(점가로, 점세로, 2, 0, 2*Math.PI);
    그리기.fill();
    그리기.stroke();
    그리기.fillText(점가로,점가로-15,점세로-20);
  }
  var 점가로=33, 점세로=0;
  그리기.fillStyle='red'
  그리기.lineWidth=1;
  for (var i=0; i<15; i++) {
    점세로+=50; 
    그리기.beginPath();
    그리기.arc(점가로, 점세로, 2, 0, 2*Math.PI);
    그리기.fill();
    그리기.stroke();
    그리기.fillText(점세로,점가로-26,점세로-7);
  }
}

var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
var 회차select안옵션html;
var 회차개수=Number(당번전체.length/9);
for (var i=0; i<회차개수; i++) {
  if (i==0) {
    회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>'
  } else {
    회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>' + 회차select안옵션html
  }
}
document.querySelector('#span_날짜').innerHTML=당번전체[당번전체.length-8]; //날짜

for (var i=0; i<7; i++) {
  document.querySelectorAll('#span_날짜 ~ button')[i+1].innerHTML=당번전체[당번전체.length-7+i]; //날짜
}
document.querySelector('#회차select').innerHTML=회차select안옵션html; //<option>회차</option>


//위, 최근회차 설정 

  var 미출수전체='';
  var 미출수오주='';
  var 미출수십주='';
  var 미출수십오주='';
  var 미출수오주btn='';
  var 미출수십주btn='';
  var 미출수십오주btn='';
// 15주번호들을 담고 7*10=70개를 0으로 대체하면 5주번호들, 35개를 0으로 대체하면 10주번호들, 대체하지 않으면 15주번호들
  var 오주번호들=[];
  var 십주번호들=[];
  var 십오주번호들=[];
  //새로고침시 십오주번호들 : 
  var 시작배열값=(회차개수-15)*9; //회차,날짜,숫자7개 : 15전
  var 순번확인=0;

  for (var i=시작배열값; i<당번전체.length;i++ ) {
    순번확인=순번확인+1;
    if (순번확인>2) {
      십오주번호들.push(당번전체[i]);
    }
    if (순번확인==9) {순번확인=0;}
  }

  for (i=0; i<십오주번호들.length; i++) {
    if (i<70) {
      오주번호들.push(0);
    } else {
      오주번호들.push(십오주번호들[i]);
    } 
    if (i<35) {
      십주번호들.push(0);
    } else {
      십주번호들.push(십오주번호들[i]);
    } 
  }

  var 오주미출수=[];
  //오주미출수를 담는다
  for (i=0; i<45; i++) {
    if (오주번호들.filter(element => (i+1).toString() === element).length==0) {오주미출수.push(i+1);}
   }
//오주미출수를 담았다. 숫자 제대로 정렬하기 위함.  오주미출수.sort(); 는 문자열로 인식하여 정렬됨
  오주미출수.sort((a,t) => a-t);

  for (i=0; i<오주미출수.length; i++) {
    if (i==0) {
      미출수오주btn='<button>' + 오주미출수[i] + '</button>';
      if (!십주번호들.includes(오주미출수[i].toString())) {
        미출수십주btn='<button>' + 오주미출수[i] + '</button>';
      } else {
        미출수십주btn='<button>' + '</button>';
      }
      if (!십오주번호들.includes(오주미출수[i].toString())) {
        미출수십오주btn='<button>' + 오주미출수[i] + '</button>';
      } else {
        미출수십오주btn='<button>' + '</button>';
      }
    }//


    if (i!==0) {
      미출수오주btn+='<button>' + 오주미출수[i] + '</button>';
      if (!십주번호들.includes(오주미출수[i].toString())) {
        미출수십주btn+='<button>' + 오주미출수[i] + '</button>';
      } else {
        미출수십주btn+='<button>' + '</button>';
      }
      if (!십오주번호들.includes(오주미출수[i].toString())) {
        미출수십오주btn+='<button>' + 오주미출수[i] + '</button>';
      } else {
        미출수십오주btn+='<button>' + '</button>';
      }
    }
  }

  // alert(오주번호들 + ' 2개수' + 오주번호들.filter(ele => ele == 2).length);

    // 영사사플러스일개수[i]=숫자담기배열.filter(ele => ele == i+1).length;
    // uniqueChars.sort(); 오주미출수.sort((a,t) => a-t); 숫자정렬

  미출수오주='<div><div>5주간</div>' + 미출수오주btn + '</div>';
  미출수십주='<div><div>10주간</div>' + 미출수십주btn + '</div>';
  미출수십오주='<div class="십오주미출수"><div>15주간</div>' + 미출수십오주btn + '</div>';

  미출수전체= 미출수오주 + 미출수십주 + 미출수십오주;

  document.querySelector('#최근미출수와출수').innerHTML=미출수전체;

//새로고침시 회귀부분
var 회귀번호들=[];
//새로고침시 십오주번호들 : 
시작배열값=(회차개수-5)*9; //회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
  if (i==0) {
    회귀번호들.push(5);
    회귀번호들.push(당번전체[시작배열값+i]);
  } else {
    회귀번호들.push(당번전체[시작배열값+i]);
  }
}
시작배열값=(회차개수-10)*9; //회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
  if (i==0) {
    회귀번호들.push(10);
    회귀번호들.push(당번전체[시작배열값+i]);
  } else {
    회귀번호들.push(당번전체[시작배열값+i]);
  }
}
시작배열값=(회차개수-15)*9; //회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
  if (i==0) {
    회귀번호들.push(15);
    회귀번호들.push(당번전체[시작배열값+i]);
  } else {
    회귀번호들.push(당번전체[시작배열값+i]);
  }
}
시작배열값=(회차개수-30)*9; //회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
  if (i==0) {
    회귀번호들.push(30);
    회귀번호들.push(당번전체[시작배열값+i]);
  } else {
    회귀번호들.push(당번전체[시작배열값+i]);
  }
}
시작배열값=(회차개수-60)*9; //회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
  if (i==0) {
    회귀번호들.push(60);
    회귀번호들.push(당번전체[시작배열값+i]);
  } else {
    회귀번호들.push(당번전체[시작배열값+i]);
  }
}

//육십주번호들에서
//육십주번호들에서
var 선택회차다음번호=''; //있을때
var 회귀전체='';
var 각회귀누적='';
var 회귀제목='';
var 회귀btn='';
var 다음btn='';



  //새로고침시 회귀와 미출수부분 코드와 유사; 단독 : 최근회차가아닐때 설정된회차 다음회차 당번넣기
  시작배열값=(회차개수 - 1)*9;
  for (var i=0; i<9; i++) {
    if (i==0) {
      //회귀번호
      다음btn='<button>다음</button>';
      다음btn+='<button>' + Number(parseInt(당번전체[시작배열값+i])+1) + '회</button>';
    } else if (i==1) {
      다음btn+='<button>_</button>';//날짜
    } else {
      //숫자부분
      다음btn+='<button>_</button>';
    }
  }
  선택회차다음번호='<div>' + 다음btn + '</div>';

  회귀제목='<div></div><div><span>회귀</span><span>회차</span><span>날짜</span><span>1st</span><span>2st</span><span>3st</span><span>4st</span><span>5st</span><span>6st</span><span>B</span></div>'

  for (var i=0; i<회귀번호들.length; i++) {
    //i=9, i=19, i=29, i=39, i=49 일때 각회귀 완성 + 회귀전체 완성
    //각회귀 <div><button></button>열개 </div>
    if (i==0 || i==10 || i==20 || i==30 || i==40) {
      //회귀번호
      회귀btn='<button>' + 회귀번호들[i] + '회귀</button>'; 

    } else if (i==1 || i==11 || i==21 || i==31 || i==41) {
      //회차
      회귀btn+='<button>' + 회귀번호들[i] + '회</button>'; 

    } else if (i==2 || i==12 || i==22 || i==32 || i==42) {
      회귀btn+='<button class="span_날짜">' + 회귀번호들[i] + '</button>';//날짜
    } else {
          //숫자부분
      회귀btn+='<button>' + 회귀번호들[i] + '</button>'; 
    }
    if (i==9 || i==19 || i==29 || i==39 || i==49) {
      if (i==9) {각회귀누적='<div>' + 회귀btn + '</div>'}
      if (i!==9) {각회귀누적=각회귀누적 + '<div>' + 회귀btn + '</div>'}
    }
  }
  회귀전체=회귀제목 + 각회귀누적;
  document.querySelector('#id_번호입력아래당첨번호숨김').innerHTML=회귀전체;


  // 100회귀 고정이었는데 선택할수 있는 버튼 추가
var 회귀선택버튼div;
회귀선택버튼div='<div style="margin-top:5px;"><input id="회귀수입력" type = "text" spellcheck="false" style="width:50px;vertical-align:bottom;text-align:center;" value=100>'
+ '<button style="width:70px;height:30px;" onclick="신규회귀변경()">회귀변경</button>'
+ '<button style="width:50px;height:30px;background-color: green;" onclick="신규회귀변경3회귀()">5회귀</button>'
+ '<button style="width:75px;height:30px;background-color: green;" onclick="신규회귀변경100회귀()">100회귀</button></div>'
// 100회귀 고정이었는데 선택할수 있는 버튼 추가>>
  //INDEX 전용 100회귀, 작업중
  var 백회귀개수=10;//표시되는 수
  var 신규회귀값=100;//회귀값 100고정이었다가 ...
  i=1;
  // while ((회차개수+1-(100*i))>0) {
  //   백회귀개수=백회귀개수+1;
  //   i=i+1;
  // }

  var 백회귀번호들=[];
  for (i=0; i<백회귀개수; i++) {
    시작배열값=(회차개수 - (신규회귀값 * (i+1)))*9;
    for (var t=0; t<9; t++) {
      백회귀번호들.push(당번전체[시작배열값+t]);
    }
    // if (i==0) {alert('회차개수 : ' + 회차개수 + ' 백회귀번호들 : ' + 백회귀번호들)}
  }
  
    var 백회귀전체='';
    var 각백회귀누적='';
    var 백회귀제목='';
    var 백회귀btn='';
    var 백누적=0;
    백회귀제목=회귀선택버튼div + '<div></div><div><span>회귀</span><span>회차</span><span>날짜</span><span>1st</span><span>2st</span><span>3st</span><span>4st</span><span>5st</span><span>6st</span><span>B</span></div>'
  
    for (var i=0; i<백회귀번호들.length; i++) {
      if ((i % 9)==0) {
        백누적=Number(백누적+신규회귀값);
        백회귀btn='<button>' + 백누적 + '</button>'; 
        백회귀btn+='<button>' + 백회귀번호들[i] + '회</button>'; 
      } else if ((i % 9)==1) {
        백회귀btn+='<button class="span_날짜">' + 백회귀번호들[i] + '</button>';//날짜
      } else {
        //숫자부분
        백회귀btn+='<button>' + 백회귀번호들[i] + '</button>'; 
      }
  
      if ((i % 9)==8) {
        if (i==8) {각백회귀누적='<div>' + 백회귀btn + '</div>'}
        if (i!==8) {각백회귀누적=각백회귀누적 + '<div>' + 백회귀btn + '</div>'}
      }
    }
    백회귀전체='<div id="js백회귀전체">' + 백회귀제목 + 각백회귀누적 + '</div>';
    document.querySelector('#id_번호입력아래당첨번호숨김').innerHTML=선택회차다음번호 + document.querySelector('#id_번호입력아래당첨번호숨김').innerHTML+백회귀전체;

var 전체변수selectdindex=document.querySelector('#회차select').selectedIndex;
function 신규회귀변경3회귀() {
  전체변수selectdindex=document.querySelector('#회차select').selectedIndex;
  document.querySelector('#회귀수입력').value=5;
  신규회귀변경()
}
function 신규회귀변경100회귀() {
  전체변수selectdindex=document.querySelector('#회차select').selectedIndex;
  document.querySelector('#회귀수입력').value=100;
  신규회귀변경()
}

function 신규회귀변경() {
  전체변수selectdindex=document.querySelector('#회차select').selectedIndex;
  var 회귀수=document.querySelector('#회귀수입력').value;
  신규회귀값=Number(회귀수);

  var 백회귀번호들=[];
  for (i=0; i<백회귀개수; i++) {
    시작배열값=(회차개수 - 전체변수selectdindex - (신규회귀값 * (i+1)))*9;
    for (var t=0; t<9; t++) {
      백회귀번호들.push(당번전체[시작배열값+t]);
    }
    // if (i==0) {alert('회차개수 : ' + 회차개수 + ' 백회귀번호들 : ' + 백회귀번호들)}
  }
  
    var 백회귀전체='';
    var 각백회귀누적='';
    var 백회귀제목='';
    var 백회귀btn='';
    var 백누적=0;
    백회귀제목=회귀선택버튼div + '<div></div><div><span>회귀</span><span>회차</span><span>날짜</span><span>1st</span><span>2st</span><span>3st</span><span>4st</span><span>5st</span><span>6st</span><span>B</span></div>'
  
    for (var i=0; i<백회귀번호들.length; i++) {
      if ((i % 9)==0) {
        백누적=Number(백누적+신규회귀값);
        백회귀btn='<button>' + 백누적 + '</button>'; 
        백회귀btn+='<button>' + 백회귀번호들[i] + '회</button>'; 
      } else if ((i % 9)==1) {
        백회귀btn+='<button class="span_날짜">' + 백회귀번호들[i] + '</button>';//날짜
      } else {
        //숫자부분
        백회귀btn+='<button>' + 백회귀번호들[i] + '</button>'; 
      }
  
      if ((i % 9)==8) {
        if (i==8) {각백회귀누적='<div>' + 백회귀btn + '</div>'}
        if (i!==8) {각백회귀누적=각백회귀누적 + '<div>' + 백회귀btn + '</div>'}
      }
    }
    백회귀전체=백회귀제목 + 각백회귀누적;
    document.querySelector('#js백회귀전체').innerHTML=백회귀전체;
    document.querySelector('#회귀수입력').value=신규회귀값; //100으로 고정되어버리네 이거 안하면
}

//새로고침시 진행되는 코드 끝..

function 선택회차날짜와당번넣기() {

  var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
  var 회차개수=Number(당번전체.length/9);
  var selectedindex=document.querySelector('#회차select').selectedIndex;
  //selectedindex 마지막회차가 0 이다. 선택회차의 회차는 : 당번전체.length - 9 - 보정값
  var index에서빼기=0;
  var 시작배열값=(회차개수-selectedindex-1-index에서빼기)*9;
  document.querySelector('#span_날짜').innerHTML=당번전체[시작배열값+1]; //날짜
  for (var i=0; i<7; i++) {
    document.querySelectorAll('#span_날짜 ~ button')[i+1].innerHTML=당번전체[시작배열값+2+i]; //날짜
  }  
  //새로고침시 회귀와 미출수부분 코드와 유사; 
  


//위, 최근회차 설정 

var 미출수전체='';
var 미출수오주='';
var 미출수십주='';
var 미출수십오주='';
var 미출수오주btn='';
var 미출수십주btn='';
var 미출수십오주btn='';
// 15주번호들을 담고 7*10=70개를 0으로 대체하면 5주번호들, 35개를 0으로 대체하면 10주번호들, 대체하지 않으면 15주번호들
var 오주번호들=[];
var 십주번호들=[];
var 십오주번호들=[];
//새로고침시 십오주번호들 : 
index에서빼기=15;
시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
var 순번확인=0;

for (var i=시작배열값; i<Number(시작배열값+135);i++ ) {
  순번확인=순번확인+1;
  if (순번확인>2) {
    십오주번호들.push(당번전체[i]);
  }
  if (순번확인==9) {순번확인=0;}
}

for (i=0; i<십오주번호들.length; i++) {
  if (i<70) {
    오주번호들.push(0);
  } else {
    오주번호들.push(십오주번호들[i]);
  } 
  if (i<35) {
    십주번호들.push(0);
  } else {
    십주번호들.push(십오주번호들[i]);
  } 
}

var 오주미출수=[];
//오주미출수를 담는다
for (i=0; i<45; i++) {
  if (오주번호들.filter(element => (i+1).toString() === element).length==0) {오주미출수.push(i+1);}
 }
//오주미출수를 담았다. 숫자 제대로 정렬하기 위함.  오주미출수.sort(); 는 문자열로 인식하여 정렬됨
오주미출수.sort((a,t) => a-t);

for (i=0; i<오주미출수.length; i++) {
  if (i==0) {
    미출수오주btn='<button>' + 오주미출수[i] + '</button>';
    if (!십주번호들.includes(오주미출수[i].toString())) {
      미출수십주btn='<button>' + 오주미출수[i] + '</button>';
    } else {
      미출수십주btn='<button>' + '</button>';
    }
    if (!십오주번호들.includes(오주미출수[i].toString())) {
      미출수십오주btn='<button>' + 오주미출수[i] + '</button>';
    } else {
      미출수십오주btn='<button>' + '</button>';
    }
  }//


  if (i!==0) {
    미출수오주btn+='<button>' + 오주미출수[i] + '</button>';
    if (!십주번호들.includes(오주미출수[i].toString())) {
      미출수십주btn+='<button>' + 오주미출수[i] + '</button>';
    } else {
      미출수십주btn+='<button>' + '</button>';
    }
    if (!십오주번호들.includes(오주미출수[i].toString())) {
      미출수십오주btn+='<button>' + 오주미출수[i] + '</button>';
    } else {
      미출수십오주btn+='<button>' + '</button>';
    }
  }
}

// alert(오주번호들 + ' 2개수' + 오주번호들.filter(ele => ele == 2).length);

  // 영사사플러스일개수[i]=숫자담기배열.filter(ele => ele == i+1).length;
  // uniqueChars.sort(); 오주미출수.sort((a,t) => a-t); 숫자정렬

미출수오주='<div><div>5주간</div>' + 미출수오주btn + '</div>';
미출수십주='<div><div>10주간</div>' + 미출수십주btn + '</div>';
미출수십오주='<div class="십오주미출수"><div>15주간</div>' + 미출수십오주btn + '</div>';

미출수전체= 미출수오주 + 미출수십주 + 미출수십오주;

document.querySelector('#최근미출수와출수').innerHTML=미출수전체;

//새로고침시 회귀부분
var 회귀번호들=[];
//새로고침시 십오주번호들 : 
index에서빼기=5;
시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
if (i==0) {
  회귀번호들.push(5);
  회귀번호들.push(당번전체[시작배열값+i]);
} else {
  회귀번호들.push(당번전체[시작배열값+i]);
}
}
index에서빼기=10;
시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
if (i==0) {
  회귀번호들.push(10);
  회귀번호들.push(당번전체[시작배열값+i]);
} else {
  회귀번호들.push(당번전체[시작배열값+i]);
}
}
index에서빼기=15;
시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
if (i==0) {
  회귀번호들.push(15);
  회귀번호들.push(당번전체[시작배열값+i]);
} else {
  회귀번호들.push(당번전체[시작배열값+i]);
}
}
index에서빼기=30;
시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
if (i==0) {
  회귀번호들.push(30);
  회귀번호들.push(당번전체[시작배열값+i]);
} else {
  회귀번호들.push(당번전체[시작배열값+i]);
}
}
index에서빼기=60;
시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
if (i==0) {
  회귀번호들.push(60);
  회귀번호들.push(당번전체[시작배열값+i]);
} else {
  회귀번호들.push(당번전체[시작배열값+i]);
}
}

//육십주번호들에서
var 선택회차다음번호=''; //있을때
var 회귀전체='';
var 각회귀누적='';
var 회귀제목='';
var 회귀btn='';
var 다음btn='';



  //새로고침시 회귀와 미출수부분 코드와 유사; 단독 : 최근회차가아닐때 설정된회차 다음회차 당번넣기
var 신규회귀값=Number(document.querySelector('#회귀수입력').value);//지워지기전에
if (selectedindex!==0) {
  시작배열값=(회차개수 - selectedindex )*9;
  for (var i=0; i<9; i++) {
    if (i==0) {
      //회귀번호
      다음btn='<button>다음</button>';
      다음btn+='<button>' + 당번전체[시작배열값+i] + '회</button>';
    } else if (i==1) {
      다음btn+='<button>' + 당번전체[시작배열값+i] + '</button>';//날짜
    } else {
      //숫자부분
      다음btn+='<button>' + 당번전체[시작배열값+i] + '</button>';
    }
  }
  선택회차다음번호='<div>' + 다음btn + '</div>';

} else {
  시작배열값=(회차개수 - selectedindex-1 )*9;
  for (var i=0; i<9; i++) {
    if (i==0) {
      //회귀번호
      다음btn='<button>다음</button>';
      다음btn+='<button>' + Number(parseInt(당번전체[시작배열값+i])+1) + '회</button>';
    } else if (i==1) {
      if (selectedindex==0) {
        다음btn+='<button>_</button>';//날짜
      } else {
        다음btn+='<button>' + 당번전체[시작배열값+i] + '</button>';//날짜
      }
    } else {
      //숫자부분
      다음btn+='<button>_</button>';
    }
  }
  선택회차다음번호='<div>' + 다음btn + '</div>';
}

회귀제목='<div></div><div><span>회귀</span><span>회차</span><span>날짜</span><span>1st</span><span>2st</span><span>3st</span><span>4st</span><span>5st</span><span>6st</span><span>B</span></div>'

for (var i=0; i<회귀번호들.length; i++) {
  //i=9, i=19, i=29, i=39, i=49 일때 각회귀 완성 + 회귀전체 완성
  //각회귀 <div><button></button>열개 </div>
  if (i==0 || i==10 || i==20 || i==30 || i==40) {
    //회귀번호
    회귀btn='<button>' + 회귀번호들[i] + '회귀</button>'; 

  } else if (i==1 || i==11 || i==21 || i==31 || i==41) {
    //회차
    회귀btn+='<button>' + 회귀번호들[i] + '회</button>'; 

  } else if (i==2 || i==12 || i==22 || i==32 || i==42) {
    회귀btn+='<button>' + 회귀번호들[i] + '</button>';//날짜

  } else {
        //숫자부분
    회귀btn+='<button>' + 회귀번호들[i] + '</button>'; 
  }

  if (i==9 || i==19 || i==29 || i==39 || i==49) {
    if (i==9) {각회귀누적='<div>' + 회귀btn + '</div>'}
    if (i!==9) {각회귀누적=각회귀누적 + '<div>' + 회귀btn + '</div>'}
  }
}
회귀전체=회귀제목 + 각회귀누적;
document.querySelector('#id_번호입력아래당첨번호숨김').innerHTML=회귀전체;



  // 100회귀 고정이었는데 선택할수 있는 버튼 추가
  var 회귀선택버튼div;
  회귀선택버튼div='<div style="margin-top:5px;"><input id="회귀수입력" type = "text" spellcheck="false" style="width:50px;vertical-align:bottom;text-align:center;" value=100>'
  + '<button style="width:70px;height:30px;" onclick="신규회귀변경()">회귀변경</button>'
  + '<button style="width:50px;height:30px;background-color: green;" onclick="신규회귀변경3회귀()">5회귀</button>'
  + '<button style="width:75px;height:30px;background-color: green;" onclick="신규회귀변경100회귀()">100회귀</button></div>'
  // 100회귀 고정이었는데 선택할수 있는 버튼 추가>>
    //INDEX 전용 100회귀, 작업중
    var 백회귀개수=10;//표시되는 수
    // var 신규회귀값=100;  지워지기전에 위부분에
    i=1;
    // while ((회차개수+1-(100*i))>0) {
    //   백회귀개수=백회귀개수+1;
    //   i=i+1;
    // }
  
    var 백회귀번호들=[];
     console.log('시작배열값 : ' + 시작배열값)
    for (i=0; i<백회귀개수; i++) {
      시작배열값=(회차개수 - selectedindex - (신규회귀값 * (i+1)))*9;
      for (var t=0; t<9; t++) {
        백회귀번호들.push(당번전체[시작배열값+t]);
      }
      // if (i==0) {alert('회차개수 : ' + 회차개수 + ' 백회귀번호들 : ' + 백회귀번호들)}
    }
    
      var 백회귀전체='';
      var 각백회귀누적='';
      var 백회귀제목='';
      var 백회귀btn='';
      var 백누적=0;
      백회귀제목=회귀선택버튼div + '<div></div><div><span>회귀</span><span>회차</span><span>날짜</span><span>1st</span><span>2st</span><span>3st</span><span>4st</span><span>5st</span><span>6st</span><span>B</span></div>'
    
      for (var i=0; i<백회귀번호들.length; i++) {
        if ((i % 9)==0) {
          백누적=Number(백누적+신규회귀값);
          백회귀btn='<button>' + 백누적 + '</button>'; 
          백회귀btn+='<button>' + 백회귀번호들[i] + '회</button>'; 
        } else if ((i % 9)==1) {
          백회귀btn+='<button class="span_날짜">' + 백회귀번호들[i] + '</button>';//날짜
        } else {
          //숫자부분
          백회귀btn+='<button>' + 백회귀번호들[i] + '</button>'; 
        }
    
        if ((i % 9)==8) {
          if (i==8) {각백회귀누적='<div>' + 백회귀btn + '</div>'}
          if (i!==8) {각백회귀누적=각백회귀누적 + '<div>' + 백회귀btn + '</div>'}
        }
      }
      백회귀전체='<div id="js백회귀전체">' + 백회귀제목 + 각백회귀누적 + '</div>';
      document.querySelector('#id_번호입력아래당첨번호숨김').innerHTML=선택회차다음번호 + document.querySelector('#id_번호입력아래당첨번호숨김').innerHTML+백회귀전체;
      document.querySelector('#회귀수입력').value=신규회귀값;
}


//안씀
function 최근미출수와출수_viewHide() {
  var 최근미출수와출수보기숨기기=	document.querySelector('#최근미출수와출수');
  
  //button은 세관용, li_a는 my용
  if(최근미출수와출수보기숨기기.classList.contains('none_js')){ 		
    최근미출수와출수보기숨기기.classList.remove('none_js');
    document.querySelector('#미출수와출수보기숨기기').innerText='미출수숨기기';
  }else{ 		
    최근미출수와출수보기숨기기.classList.add('none_js');
    document.querySelector('#미출수와출수보기숨기기').innerText='미출수보이기';
  } 
}

function 자동번호나온횟수지우기() {
  document.querySelector('.자동번호나온횟수').innerHTML='<div>자동번호 나온횟수</div>';
}
function 자동번호나온횟수() {
  //#id_번호입력 > div > div
  var id_번호입력_div개수=document.querySelectorAll('#id_번호입력 > div > div');
  if (document.querySelectorAll('#id_번호입력 > div > div').length==0) {자동번호나온횟수지우기(); return;}
  var 숫자담기배열=[];
  var 숫자있을때증가=0;
  
  //번호담기 : 공백도 담아보자
  for (var i=0; i<id_번호입력_div개수.length; i++) {
          숫자담기배열.push(id_번호입력_div개수[숫자있을때증가].innerText);
      숫자있을때증가=숫자있을때증가+1;

    // if (id_번호입력_div개수[i].innerText.length!==0) {
    //   숫자담기배열.push(id_번호입력_div개수[숫자있을때증가].innerText);
    //   숫자있을때증가=숫자있을때증가+1;
    // } 이거는 빈란만큼 카운팅이 빠지더라... 공백이 담겨도 공백을 계산하지 않는다??
  }

  var 영사사플러스일개수=[];
  //0을 담는다. 안담길때 0이므로??
  for (i=0; i<45; i++) {영사사플러스일개수[i]=0;}
  //번호별 나온 횟수 담는다.
  for (i=0; i<45; i++) {
    영사사플러스일개수[i]=숫자담기배열.filter(ele => ele == Number(i+1)).length;
  }
   //고유값 추출 오주미출수.sort((a,t) => a-t);
  let uniqueChars = [];
  영사사플러스일개수.forEach((c) => {
      if (!uniqueChars.includes(c)) {
          uniqueChars.push(c);
      }
  });
  //정렬
  uniqueChars.sort((a,q) => a-q);
  //일단 횟수 나열
  var 자동번호나온횟수div=document.querySelector('.자동번호나온횟수');

  if(document.querySelector('#id_번호입력').classList.contains('none_js')){ 		
    document.querySelector('#id_번호입력').classList.remove('none_js');
    document.querySelector('#자동번호나온횟수보기숨기기').innerText='자동횟수보이기';
  } //보이게하기
  if(document.querySelector('#id_번호입력아래당첨번호숨김').classList.contains('none_js')){ 		
    document.querySelector('#id_번호입력아래당첨번호숨김').classList.remove('none_js');
    document.querySelector('#회귀번호보기숨기기').innerText='회귀번호숨기기';
  } //보이게하기


  var 추가할요소='';
  var 추가할번호들='';
  for (i=0; i<uniqueChars.length; i++) {
    추가할번호들='';
    if (i==0) {추가할요소='<div><div>' + uniqueChars[i] + ' 회</div>'};
    if (i!==0) {추가할요소+='<div><div>' + uniqueChars[i] + ' 회</div>'};
    //횟수에 해당하는 번호를 넣어야함. 추가할요소+=번호들
    for (var t=0; t<영사사플러스일개수.length; t++) {


      if (영사사플러스일개수[t]==uniqueChars[i]) {
        if (t==0) {추가할번호들='<button>' + (t+1) + '</button>'};
        if (t!==0) {추가할번호들+='<button>' + (t+1) + '</button>'};
      }
    }
    추가할번호들=추가할번호들 + '</div>';
    // 추가할요소+=추가할번호들;
    추가할요소+=추가할번호들;
  }
  자동번호나온횟수div.innerHTML='<div>자동번호 나온횟수</div>' + 추가할요소;
}
//안씀
function 입력번호와회귀번호숨기기() {
  var 입력번호보기숨기기=	document.querySelector('#id_번호입력');
  var 회귀번호보기숨기기=	document.querySelector('#id_번호입력아래당첨번호숨김');
  if(!입력번호보기숨기기.classList.contains('none_js')){ 		
    입력번호보기숨기기.classList.add('none_js');
    document.querySelector('#입력번호보기숨기기').innerText='입력번호보이기';
  }
  if(!회귀번호보기숨기기.classList.contains('none_js')){ 		
    회귀번호보기숨기기.classList.add('none_js');
    document.querySelector('#회귀번호보기숨기기').innerText='회귀번호보이기';
  }
}
//안씀
function 입력번호와회귀번호보이기() {
  var 입력번호보기숨기기=	document.querySelector('#id_번호입력');
  var 회귀번호보기숨기기=	document.querySelector('#id_번호입력아래당첨번호숨김');
  if(입력번호보기숨기기.classList.contains('none_js')){ 		
    입력번호보기숨기기.classList.remove('none_js');
    document.querySelector('#입력번호보기숨기기').innerText='입력번호숨기기';
  }
  if(회귀번호보기숨기기.classList.contains('none_js')){ 		
    회귀번호보기숨기기.classList.remove('none_js');
    document.querySelector('#회귀번호보기숨기기').innerText='회귀번호숨기기';
  }
}


function 숫자() {
  // var 클릭수=document.querySelector('#클릭수').innerHTML;
  var 클릭수=Number('1');
  alert(클릭수);
}


var 입력된번호들=document.querySelector('#id_번호입력');
var 번호입력선긋기번호들=document.querySelector('#id_번호입력');
function 번호하나삭제(e) {
  if (e.target.classList.contains('삭제')) {
    var 삭제할요소=e.target.parentNode;
    삭제할요소.innerHTML='';
  }
}
function 번호지움() {
  document.querySelector('#id_번호입력').innerHTML='<div></div>';
  document.querySelector('#canvas').classList.add('d-none');
  var 버튼들=document.querySelectorAll('.모달바디왼쪽45 button');
  for (var i=0; i<버튼들.length; i++) {
    if (버튼들[i].classList.contains('bg-primary')) {
      버튼들[i].classList.remove('bg-primary');
    }
  }
  document.querySelector('#클릭수').innerHTML=0;
}

function 번호입력선긋기(e) {
  console.log('번호입력 선긋기(e)')
  var canvas = document.querySelector('#canvas');
  var 선긋기요소=e.target.parentNode; //div안에 div 6개 안에 숫자있음
  console.log('e.target.innerHTML : ' + e.target.innerHTML)

  //선긋기표시 없을때 x 일때 지우고 return;
  if (!선긋기요소 && e.target.innerHTML=='X') {
    console.log('!선긋기요소 && e.target.innerHTML==X')
    var 버튼들=document.querySelectorAll('.모달바디왼쪽45 button');
    for (var i=0; i<버튼들.length; i++) {
      if (버튼들[i].classList.contains('bg-primary')) {
        버튼들[i].classList.remove('bg-primary');
      }
    }
    document.querySelector('#클릭수').innerHTML=0;
    canvas.classList.add('d-none');
    return;
  }

  //선긋기표시 있는거 클릭시 초기화, 
  if (선긋기요소.classList.contains('선긋기표시')) {
    console.log('선긋기(e) 선긋기표시 클래스 있는거 다시 클릭시')
    선긋기요소.classList.remove('선긋기표시');
    canvas.classList.add('d-none');
      //번호45색칠 초기화
    var 버튼들=document.querySelectorAll('.모달바디왼쪽45 button');
    for (var i=0; i<버튼들.length; i++) {
      if (버튼들[i].classList.contains('bg-primary')) {
        버튼들[i].classList.remove('bg-primary');
      }
    }
    document.querySelector('#클릭수').innerHTML=0;
    return; // 이 동작만 여깃 중단
  } else if (document.querySelectorAll('.선긋기표시').length==1) {
    console.log('선긋기(e) 선긋기표시 클래스 있을때')
    document.querySelector('.선긋기표시').classList.remove('선긋기표시');
    선긋기요소.classList.add('선긋기표시');
  } else if (document.querySelectorAll('.선긋기표시').length==0) {
    console.log('선긋기(e) 선긋기표시 클래스 없을때')
    선긋기요소.classList.add('선긋기표시')
  }
  var 숫자담기배열=[];
  for (var i=0; i<document.querySelectorAll('.선긋기표시 > div').length; i++) {
    숫자담기배열.push(document.querySelectorAll('.선긋기표시 > div')[i].innerText)
  }
  //번호45색칠 초기화
  var 버튼들=document.querySelectorAll('.모달바디왼쪽45 button');
  for (var i=0; i<버튼들.length; i++) {
    if (버튼들[i].classList.contains('bg-primary')) {
      버튼들[i].classList.remove('bg-primary');
    }
  }
  //번호45, 6개번호 색칠
  for (var i=0; i<버튼들.length; i++) {
    if (숫자담기배열.find(element => element == i+1)) { 버튼들[i].classList.add('bg-primary');}
  }
  document.querySelector('#클릭수').innerHTML=6;

  var canvas = document.getElementById("canvas");
  canvas.classList.remove('d-none')
  var 선긋기 = canvas.getContext('2d');
    // 픽셀 정리
    선긋기.clearRect(0, 0, canvas.width, canvas.height);
    // 컨텍스트 리셋
    선긋기.beginPath();
  var 가로;
  var 세로;
//5번 선을 긋는다. (가로, 세로), 메모_#숫자#몫#나머지:Math.floor( 12 / 5)==> 2, 10 % 3==> 1
for (var i=0; i<6; i++) {
    가로=버튼들[숫자담기배열[i]-1].offsetLeft+17;
    세로=버튼들[숫자담기배열[i]-1].offsetTop-42;
    console.log(가로 + ', ' + 세로 + ' , 버튼들[숫자담기배열[i]].innerHTML : '  + 버튼들[숫자담기배열[i]].innerHTML)
    if (i==0) {선긋기.moveTo(가로,세로)}
    if (i>0) {선긋기.lineTo(가로,세로)}
    if (i==5) {선긋기.stroke()}
  }
}

var 번호입력모달body=document.querySelector('.모달바디왼쪽45');
function 번호입력(e) {
  var 클릭수=Number(document.querySelector('#클릭수').innerHTML);
  // bg-primary있으면 빼고 id=클릭수 숫자 -1
  if (e.target.tagName=='BUTTON' && e.target.classList.contains('bg-primary')) {
    e.target.classList.remove('bg-primary');
    클릭수=Number(클릭수-1);
    document.querySelector('#클릭수').innerHTML=클릭수

    // bg-primary 없으면 넣고 id=클릭수 숫자 +1
  } else if(e.target.tagName=='BUTTON' && !e.target.classList.contains('bg-primary'))  {
    e.target.classList.add('bg-primary');
    클릭수=Number(클릭수+1);
    document.querySelector('#클릭수').innerHTML=클릭수
  }

  // 클릭수가 6일때
  if (클릭수==6) {
    var 버튼들=document.querySelectorAll('.모달바디왼쪽45 button');
    var 추가할innerhtml="<div>";
    //숫자 6개 입력
    for (var i=0; i<버튼들.length; i++) {
      if (버튼들[i].classList.contains('bg-primary')) {
        //innertext : 번호
        추가할innerhtml= 추가할innerhtml + '<div>' + 버튼들[i].innerHTML + '</div>';
      }
    }
    //document.querySelector('#id_번호입력').innerHTML=추가할innerhtml + '<button class="삭제">X</button><button class="선긋기">선긋기</button></div>' + document.querySelector('#id_번호입력').innerHTML;
    document.querySelector('#id_번호입력').innerHTML+=추가할innerhtml + '<button class="삭제">X</button><button class="선긋기">선긋기</button></div>';
    //console.log(document.querySelector('#id_번호입력').innerHTML);

    //색칠해제후 클릭수0 초기화
    for (var i=0; i<버튼들.length; i++) {
      if (버튼들[i].classList.contains('bg-primary')) {
        버튼들[i].classList.remove('bg-primary');
      }
    }
    document.querySelector('#클릭수').innerHTML=0
  }
  // 클릭수가 6일때 끝

  // 클릭수가 7일때 (선긋기 보기할 때 하나 더 누르게 되면 초기화)
  if (클릭수==7) {
    var 버튼들=document.querySelectorAll('.모달바디왼쪽45 button');
    for (var i=0; i<버튼들.length; i++) {
      if (버튼들[i].classList.contains('bg-primary')) {
        버튼들[i].classList.remove('bg-primary');
      }
    }
    document.querySelector('#클릭수').innerHTML=0
  }
}
function 기본보기() {
  console.log('기본보기');
  document.querySelector('#기본보기').classList.remove('d-none');
  document.querySelector('#색칠보기').classList.add('d-none');
}
function 색칠보기() {
  console.log('색칠보기');
  document.querySelector('#기본보기').classList.add('d-none');
  document.querySelector('#색칠보기').classList.remove('d-none');
}

var 색칠보기이벤트=document.querySelector('#색칠보기');
function 색칠보기클릭이벤트(e) {
  //임시부모표시 : 색칠div_45(작업캔버스있는곳)
  if (e.target.innerText=='선지움') {
    console.log('캔버스12선지움');
    e.target.parentNode.id='임시부모표시';//색칠div_45
    //선긋기초기화
    var 선긋기요소=document.querySelector('#임시부모표시 canvas');
    var 선긋기 = 선긋기요소.getContext('2d');
      // 픽셀 정리
      선긋기.clearRect(0, 0, canvas.width, canvas.height);
      // 컨텍스트 리셋
      선긋기.beginPath();
    //선긋기 끝
    //마무리
    document.querySelector('#임시부모표시 canvas').classList.add('d-none');
    e.target.parentNode.id='';
    e.target.innerText='선긋기';
    return;
  }
  if (e.target.innerText=='선긋기') {
    console.log('캔버스12선긋기');
    e.target.parentNode.id='임시부모표시';//색칠div_45
    var js버튼들=document.querySelectorAll('#임시부모표시 .js버튼');
    if (js버튼들.length<2) {console.log('js버튼개수<2 : return : js버튼개수 : ' + js버튼들.length);return;}
    //선긋기
    var 선긋기요소=document.querySelector('#임시부모표시 canvas');
    var 선긋기 = 선긋기요소.getContext('2d');
      // 픽셀 정리
      선긋기.clearRect(0, 0, 선긋기요소.width, 선긋기요소.height);
      // 컨텍스트 리셋
      선긋기.beginPath();//선긋기 실행 선긋기.stroke();선긋기.closePath()처음마지막 연결 안씀;
      // 선긋기 : 시작점 선긋기.moveTo(가로, 세로), 다음목적지 선긋기.lineTo(가로, 세로)
      var 가로, 세로;
      for (var i=0; i<js버튼들.length; i++) {
        //가로=js버튼들[i].offsetLeft;position이 relativer기준
        //세로=js버튼들[i].offsetTop;position이 relativer기준
        console.log('js버튼들[i].offsetTop : ' + js버튼들[i].offsetTop)
        가로=js버튼들[i].offsetLeft-18;
        세로=js버튼들[i].offsetTop-18;
        if (i==0) {선긋기.moveTo(가로,세로)}
        if (i>0) {선긋기.lineTo(가로,세로)}
        if (i==js버튼들.length-1) {선긋기.stroke()}
      }






    //마무리
    document.querySelector('#임시부모표시 canvas').classList.remove('d-none');
    e.target.parentNode.id='';
    e.target.innerText='선지움';
    return;
  }
  if (e.target.innerText=='모두초기화') {
    console.log('모두초기화');
    console.log('js버튼 개수 : ' + document.querySelectorAll('.js버튼').length)
    console.log('js세로색칠중 개수 : ' + document.querySelectorAll('.js세로색칠중').length)
    console.log('js세로노랑줄 개수 : ' + document.querySelectorAll('.js세로노랑줄').length)
    console.log('js가로색칠중 개수 : ' + document.querySelectorAll('.js가로색칠중').length)
    console.log('js가로노랑줄 개수 : ' + document.querySelectorAll('.js가로노랑줄').length)
    var js버튼개수=document.querySelectorAll('.js버튼').length;
    var js세로색칠중개수=document.querySelectorAll('.js세로색칠중').length;
    var js세로노랑줄개수=document.querySelectorAll('.js세로노랑줄').length;
    var js가로색칠중개수=document.querySelectorAll('.js가로색칠중').length;
    var js가로노랑줄개수=document.querySelectorAll('.js가로노랑줄').length;
    
    for (var i=0; i<js버튼개수; i++) {document.querySelectorAll('.js버튼')[js버튼개수-i-1].classList.remove('js버튼')}
    for (var i=0; i<js세로색칠중개수; i++) {document.querySelectorAll('.js세로색칠중')[js세로색칠중개수-i-1].classList.remove('js세로색칠중')}
    for (var i=0; i<js세로노랑줄개수; i++) {document.querySelectorAll('.js세로노랑줄')[js세로노랑줄개수-i-1].classList.remove('js세로노랑줄')}
    for (var i=0; i<js가로색칠중개수; i++) {document.querySelectorAll('.js가로색칠중')[js가로색칠중개수-i-1].classList.remove('js가로색칠중')}
    for (var i=0; i<js가로노랑줄개수; i++) {document.querySelectorAll('.js가로노랑줄')[js가로노랑줄개수-i-1].classList.remove('js가로노랑줄')}    

    //현재페이지초기화에서 캔버스 초기화 12개
    var 열두개각페이지들;
    var 선긋기요소;
    var 선긋기;

    for (var 전체페이지=0; 전체페이지<10; 전체페이지++) {

      열두개각페이지들=document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (전체페이지+1) + ')' + ' .색칠div_45');
        for (var i=0; i<열두개각페이지들.length; i++) {
          열두개각페이지들[i].id='임시부모표시';

          선긋기요소=document.querySelector('#임시부모표시 canvas');
          선긋기 = 선긋기요소.getContext('2d');
          선긋기.clearRect(0, 0, 선긋기요소.width, 선긋기요소.height);
          // 컨텍스트 리셋
          선긋기.beginPath();//선긋기 실행 선긋기.stroke();선긋기.closePath()처음마지막 연결 안씀;
          선긋기요소.classList.add('d-none');
          열두개각페이지들[i].id='';
        }

        for (var i=0; i<document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (전체페이지+1) + ')' + ' .색칠div_45 .선긋기').length; i++) {
          document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (전체페이지+1) + ')' + ' .색칠div_45 .선긋기')[i].innerHTML='선긋기';
        }



    }



    
  }
  if (e.target.innerText=='현재페이지초기화') {
    //#색칠보기 .색칠보기_페이지:nth-child : #색칠보기 첫번째 child는 #색칠보기_머리글 이고, 해당 순번이 .색칠보기_페이지 일때 선택됨. 순번2부터!!
    console.log('현재페이지초기화');
    var 페이지배열번호;
    for (var i=0; i<document.querySelectorAll('#색칠보기_페이지번호 button').length; i++) {
      if (document.querySelectorAll('#색칠보기_페이지번호 button')[i].classList.contains('선택노랑')) {페이지배열번호=i}
    }
    console.log('페이지배열번호 : ' + 페이지배열번호)
    console.log('js버튼 개수 : ' + document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js버튼').length)
    console.log('js세로색칠중 개수 : ' + document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js세로색칠중').length)
    console.log('js세로노랑줄 개수 : ' + document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js세로노랑줄').length)
    console.log('js가로색칠중 개수 : ' + document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js가로색칠중').length)
    console.log('js가로노랑줄 개수 : ' + document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js가로노랑줄').length)
    var js버튼개수=document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js버튼').length;
    var js세로색칠중개수=document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js세로색칠중').length;
    var js세로노랑줄개수=document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js세로노랑줄').length;
    var js가로색칠중개수=document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js가로색칠중').length;
    var js가로노랑줄개수=document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js가로노랑줄').length;

    for (var i=0; i<js버튼개수; i++) {
      console.log('js버튼 클래스 삭제')
      document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js버튼')[js버튼개수-i-1].classList.remove('js버튼')
    }
    for (var i=0; i<js세로색칠중개수; i++) {
      console.log('js세로색칠중 클래스 삭제')
      document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js세로색칠중')[js세로색칠중개수-i-1].classList.remove('js세로색칠중')
    }
    for (var i=0; i<js세로노랑줄개수; i++) {
      console.log('js세로노랑줄 클래스 삭제')
      document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js세로노랑줄')[js세로노랑줄개수-i-1].classList.remove('js세로노랑줄')
    }
    for (var i=0; i<js가로색칠중개수; i++) {
      console.log('js가로색칠중 클래스 삭제')
      document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js가로색칠중')[js가로색칠중개수-i-1].classList.remove('js가로색칠중')
    }
    for (var i=0; i<js가로노랑줄개수; i++) {
      console.log('js가로노랑줄 클래스 삭제')
      document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ') .js가로노랑줄')[js가로노랑줄개수-i-1].classList.remove('js가로노랑줄')
    }   
    //현재페이지초기화에서 캔버스 초기화 12개
    var 열두개각페이지들=document.querySelectorAll('#색칠보기 .색칠보기_페이지:nth-child(' + (페이지배열번호+2) + ')' + ' .색칠div_45');
    var 선긋기요소;
    var 선긋기;
    for (var i=0; i<열두개각페이지들.length; i++) {
      열두개각페이지들[i].id='임시부모표시';

      선긋기요소=document.querySelector('#임시부모표시 canvas');
      선긋기 = 선긋기요소.getContext('2d');
      선긋기.clearRect(0, 0, 선긋기요소.width, 선긋기요소.height);
      // 컨텍스트 리셋
      선긋기.beginPath();//선긋기 실행 선긋기.stroke();선긋기.closePath()처음마지막 연결 안씀;
      선긋기요소.classList.add('d-none');
      document.querySelector('#임시부모표시 .선긋기').innerHTML='선긋기';
      열두개각페이지들[i].id='';
    }

  }
  if (e.target.parentNode.id=='색칠보기_페이지번호' && e.target.innerText!='페이지선택') {
    //페이지 번호를 클릭했을때, 10개 페이지 일단 숨기기
    for (var i=0; i<10; i++) {
      document.querySelectorAll('.색칠보기_페이지')[i].classList.add('d-none');
    }
    document.querySelector('#색칠보기_페이지번호 > .선택노랑').classList='기본초코'
    e.target.classList='선택노랑';
    //페이지 번호를 클릭했을때, 해당페이지 보이기
    document.querySelectorAll('.색칠보기_페이지')[e.target.innerText-1].classList.remove('d-none');
  }
  //지움
  if (e.target.parentNode.classList.contains('세로색칠div들') && e.target.innerText=='지움') {
    console.log('지움')
    e.target.parentNode.parentNode.id='임시부모표시';
    //span값 지우기
    document.querySelector('#임시부모표시 span').innerHTML='';

    //span값 지우기 끝
    for (var i=0; i<document.querySelectorAll('#임시부모표시 button').length; i++) {
      document.querySelectorAll('#임시부모표시 button')[i].classList='';
    }
    for (var i=0; i<document.querySelectorAll('#임시부모표시 > div > div').length; i++) {
      document.querySelectorAll('#임시부모표시 > div > div')[i].classList='';
    }
    var 선긋기요소=document.querySelector('#임시부모표시 canvas');
    var 선긋기 = 선긋기요소.getContext('2d');
      // 픽셀 정리
      선긋기.clearRect(0, 0, 선긋기요소.width, 선긋기요소.height);
      // 컨텍스트 리셋
      선긋기.beginPath();//선긋기 실행 선긋기.stroke();선긋기.closePath()처음마지막 연결 안씀;
    document.querySelector('#임시부모표시 .선긋기').innerHTML='선긋기';
    선긋기요소.classList.add('d-none')
    e.target.parentNode.parentNode.id='';
  }
  //세로색칠
  if (e.target.parentNode.classList.contains('세로색칠div들') && e.target.innerText!='지움') {
    e.target.parentNode.parentNode.id='임시부모표시';
    e.target.classList.add('임시타겟표시');
    var 타겟순번=-1;
    for (var i=0; i < document.querySelectorAll('#임시부모표시 > .세로색칠div들 > div').length; i++) {
      if (document.querySelectorAll('#임시부모표시 > .세로색칠div들 > div')[i].classList.contains('임시타겟표시')) {
        타겟순번=i;
      }
    }
    //class 색칠중 있으면 색 지우기, 없으면 색 입히기, js노랑줄 
    if (document.querySelectorAll('#임시부모표시 > .세로색칠div들 > div')[타겟순번].classList.contains('js세로색칠중')) {
      for (var i=0; i<document.querySelectorAll('#임시부모표시 .가로색칠 button:nth-of-type(' + 타겟순번 + ')').length; i++) {
        document.querySelectorAll('#임시부모표시 .가로색칠 button:nth-of-type(' + 타겟순번 + ')')[i].classList.remove('js세로노랑줄');
      }
      document.querySelectorAll('#임시부모표시 > .세로색칠div들 > div')[타겟순번].classList.remove('js세로색칠중')
    } else {
      for (var i=0; i<document.querySelectorAll('#임시부모표시 .가로색칠 button:nth-of-type(' + 타겟순번 + ')').length; i++) {
        document.querySelectorAll('#임시부모표시 .가로색칠 button:nth-of-type(' + 타겟순번 + ')')[i].classList.add('js세로노랑줄');
      }
      document.querySelectorAll('#임시부모표시 > .세로색칠div들 > div')[타겟순번].classList.add('js세로색칠중')
    }
    e.target.classList.remove('임시타겟표시');
    e.target.parentNode.parentNode.id=''; //색칠div_45
  }
  //가로색칠
  if (e.target.parentNode.classList.contains('가로색칠') && e.target.tagName=='DIV') {
    e.target.parentNode.parentNode.id='임시부모표시';
    e.target.classList.add('임시타겟표시');
    e.target.parentNode.id='임시가로색칠';
    var 타겟순번=-1;
    for (var i=0; i < document.querySelectorAll('#임시부모표시 > .가로색칠 > div').length; i++) {
      if (document.querySelectorAll('#임시부모표시 > .가로색칠 > div')[i].classList.contains('임시타겟표시')) {
        타겟순번=i;
      }
    }
    //
    if (document.querySelectorAll('#임시부모표시 > .가로색칠 > div')[타겟순번].classList.contains('js가로색칠중')) {
      for (var i=0; i<document.querySelectorAll('#임시부모표시 #임시가로색칠 button').length; i++) {
        document.querySelectorAll('#임시부모표시 #임시가로색칠 button')[i].classList.remove('js가로노랑줄');
      }
      document.querySelectorAll('#임시부모표시 > .가로색칠 > div')[타겟순번].classList.remove('js가로색칠중')
    } else {
      for (var i=0; i<document.querySelectorAll('#임시부모표시 #임시가로색칠 button').length; i++) {
        document.querySelectorAll('#임시부모표시 #임시가로색칠 button')[i].classList.add('js가로노랑줄');
      }
      document.querySelectorAll('#임시부모표시 > .가로색칠 > div')[타겟순번].classList.add('js가로색칠중')
    }
    e.target.classList.remove('임시타겟표시');
    e.target.parentNode.parentNode.id='';
    e.target.parentNode.id='';
  }
  //버튼 틀릭했을때
  if (e.target.parentNode.classList.contains('가로색칠') && e.target.tagName=='BUTTON') {
    e.target.parentNode.parentNode.id='임시부모표시';//색칠div_45
    var js버튼들=document.querySelectorAll('#임시부모표시 .js버튼');
    console.log('js버튼 클래스 개수 : ' + js버튼들.length)
    if (js버튼들.length==6 && !e.target.classList.contains('js버튼')) {
      alert('6개 색칠중, 추가 안됨')
    } else {
      if (e.target.classList.contains('js버튼')) { 
        e.target.classList.remove('js버튼');
      } else {
        e.target.classList.add('js버튼');
      }
    }
    e.target.parentNode.id='';




    
  }
}









  // 각 번호 클릭시 active추가 삭제 아이디 클릭수에 클릭수 입력, active 6일때 active모두삭제 번호입력 아이디 클릭수에 클릭수 0




색칠보기이벤트.addEventListener('click', 색칠보기클릭이벤트); 
입력된번호들.addEventListener('click', 번호하나삭제); 
번호입력선긋기번호들.addEventListener('click', 번호입력선긋기); 
번호입력모달body.addEventListener('click', 번호입력); 