function 섬이름검색() {
  var 검색명=document.getElementById('섬이름검색명').value; //인풋의 value
  alert('input박스의.value : ' + 검색명);

}
function 해양죄표와섬이름() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext("2d");
  var x=0;
  ctx.font = "Arial bold 10px Arial, sans-serif"; //italic Arial서체 없을 경우, sans-serif 적용
  ctx.fillStyle = 'yellow';
  ctx.textAlign = 'center';
  ctx.strokeStyle='yellow';
  ctx.lineWidth='1';

  for (var i=1; i<16; i++) {
    x=x+100;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 10);
    ctx.stroke();
    if (i==5 || i==10 || i==15) {
      ctx.fillText(x, x, 20);
    }
    ctx.beginPath();
    ctx.moveTo(0, x);
    ctx.lineTo(10, x);
    ctx.stroke();
    if (i==5 || i==10 || i==15) {
      ctx.fillText(x, 20, x+3);
    }
  }
  //섬이름
  ctx.fillText('에프데 룬', 743, 625);
  ctx.fillText('베이루와', 840, 625);
  ctx.fillText('파라타마', 790, 580);
  ctx.fillText('웨이타', 770, 515);
  ctx.fillText('바레미', 745, 480);
  ctx.fillText('아지르', 825, 430);
  ctx.fillText('알하나', 780, 390);
  ctx.fillText('라시드', 822, 330);
  ctx.fillText('칸베라', 830, 530);
  ctx.fillText('아라킬', 850, 555);
  ctx.fillText('타라무라', 900, 600);
  ctx.fillText('오스트라', 915, 570);
  ctx.fillText('델링하트', 990, 580);
  ctx.fillText('필바라', 1050, 610);
  ctx.fillText('소코타', 1150, 655);
  ctx.fillText('리에드', 1225, 610);
  ctx.fillText('에스파', 1260, 540);
  ctx.fillText('티그리스', 1240, 510);
  ctx.fillText('시르나', 1290, 510);
  ctx.fillText('오리샤', 1260, 370);
  ctx.fillText('보아', 1260, 432);
  ctx.fillText('할마드', 1433, 415);
  ctx.fillText('카슈마', 1460, 380);
  ctx.fillText('푸자라', 1057, 480);
  ctx.fillText('샤샤', 1062, 335);
  ctx.fillText('로즈반', 1130, 325);
  ctx.fillText('포르타넨', 1100, 260);
  ctx.fillText('틴베라', 1000, 180);
  ctx.fillText('레라오', 1070, 180);

  ctx.fillText('타슈', 580, 290);
  ctx.fillText('툴루', 625, 425);
  ctx.fillText('오르프스', 665, 425);
  ctx.fillText('발베쥬', 615, 500);
  ctx.fillText('마를레느', 660, 500);
  ctx.fillText('에베토', 640, 560);
  ctx.fillText('두흐', 612, 575);
  ctx.fillText('루비아노', 680, 605);
  ctx.fillText('마리베노', 700, 550);
  ctx.fillText('앙쥬', 570, 540);
  ctx.fillText('인버넨', 580, 460);
  ctx.fillText('마르카', 505, 530);
  ctx.fillText('나르보', 500, 470);
  ctx.fillText('루루브', 465, 545);
  ctx.fillText('리스즈', 440, 505);
  ctx.fillText('스타렌', 422, 580);
  ctx.fillText('알브레서', 332, 620);
  ctx.fillText('바라테르', 335, 650);
  ctx.fillText('란디스', 230, 680);
  ctx.fillText('세르카', 230, 705);
  ctx.fillText('던데', 255, 610);
  ctx.fillText('에버딘', 290, 600);
  ctx.fillText('네트넘', 210, 590);
  ctx.fillText('오벤', 250, 550);
  ctx.fillText('데이튼', 175, 550);
  ctx.fillText('진버레이', 180, 650);
  ctx.fillText('테야말', 73, 750);
  ctx.fillText('라메다', 95, 650);
  ctx.fillText('시오닐', 117, 710);
  ctx.fillText('모드릭', 150, 715);
  ctx.fillText('바에자', 190, 730);
  ctx.fillText('테스테', 194, 440);
  ctx.fillText('파딕스', 300, 394);
  ctx.fillText('알마이', 230, 390);
  ctx.fillText('쿠이트제도', 300, 337);
  ctx.fillText('아리타', 430, 400);
  ctx.fillText('', 840, 600);




}
//임시실행
if (1=="임시") {
  document.querySelector('#선택문서셑팅하는곳').innerHTML+=document.querySelector('#S1_해역사진').outerHTML;
  document.querySelector('#선택문서셑팅하는곳').classList.remove('d-none');
  document.querySelector('#선택문서셑팅하는곳').classList.remove('d-none');
  document.querySelector('#main사이드').classList.add('d-none');
  해양죄표와섬이름()
}



function 임시() {
// 1. canvas 엘리먼트를 취득한다.
const canvas = document.getElementById('myCanvas');

// 2. 2d모드의 그리기 객체를 취득한다. => 이 객체를 통해 canvas에 그림을 그릴 수 있다.
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height); //초기화
해양죄표와섬이름()
// 3. 새선 그리기 설정
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(600, 350);
ctx.lineTo(600, 500);
ctx.lineTo(350, 500);
ctx.lineTo(350, 350);
ctx.strokeStyle='yellow';
ctx.lineWidth='1';
ctx.setLineDash([2])
ctx.stroke();
}
var black리스너용=document.querySelector('#black리스너용');
function 문서연결또는하위메뉴(e) {
  //하위메뉴 타이틀인경우 하위메뉴 나오게하고 끝. 문서가 연결된 경우 문서연결만하고 끝 / e.target.title 자체로는 에러가 안남 length=0
  //querySeloctor #만 있으면 에러, 뭐라도 있으면 에러는 아님 undefined
  var 타이틀;
  if (e.target.title.length==0) { 
    타이틀='_' 
  } else {
    타이틀=e.target.title;
  }
//1.class 파일연결 ==> 타이틀과 같은 이름의 element있으면 #선택문서셑팅하는곳 으로 가지고오기 ==> #선택문서셑팅하는곳 class d-none remove : return;    
  if (e.target.classList.contains('파일연결') && document.querySelector('#' + 타이틀)) {
    document.querySelector('#선택문서셑팅하는곳').innerHTML=document.querySelector('#선택문서셑팅하는곳 button').outerHTML;
    document.querySelector('#선택문서셑팅하는곳').innerHTML+=document.querySelector('#' + 타이틀).outerHTML;
    document.querySelector('#선택문서셑팅하는곳').classList.remove('d-none');
    return;
  }
}
black리스너용.addEventListener('click',문서연결또는하위메뉴);