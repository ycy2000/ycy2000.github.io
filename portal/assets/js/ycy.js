//span구조정보 'id,span개수만큼div,span개수만큼div반복생성'
const span구조정보 = [
  '#기본_다음당번,9,1', '#기본_당번,9,50', 
  '#기본_321당첨_머리글,5,1', '#기본_321당첨,5,50', 
  '#기본_321개수_머리글,5,1', '#기본_321개수,5,50', 
  '#기본_321평균_머리글,5,1', '#기본_321평균,5,50', 
  '#기본_30주개수_머리글,7,1', '#기본_30주개수,7,50', 
  '#기본_30주당첨_머리글,7,1', '#기본_30주당첨,7,50', 
  '#기본_빈공간개수_머리글,6,1', '#기본_빈공간개수,6,50', 
  '#기본_빈공간당첨_머리글,6,1', '#기본_빈공간당첨,6,50',
  '#기본_빈공간평균_머리글,6,1', '#기본_빈공간평균,6,50'
];
//구조만들기
function span(num) {return '<div>' + Array.from({length:num}).map(() => {return '<span></span>'}).join('') + '</div>';}
span구조정보.forEach((ele) => {
  const [selector, spanArg, countStr] = ele.split(',');
  const count = Number(countStr); 
  const spansHtml = Array(count).fill(null).map(() => span(spanArg)).join('');
  $(selector).html(spansHtml); 
});

//데이터 준비
const 원본 = $('#숨김정보_당번전체').text().replace(/\s/g, '').split('_');
const 데이터 = [];
for (let i = 0; i < 원본.length; i += 9) {데이터.push({회차: 원본[i],날짜: 원본[i + 1],당첨번호: 원본.slice(i + 2, i + 8).map(Number)});}

let 회차=데이터.length-1; // 데이터 만든 후, 첫 회차 설정, 순서일치위해 0회차가 기록되어 있음
//회차select옵션생성, 회차는 순서가 중요한게 아니라 결과 그대로 회차를 의마하는 숫자로 활용된다.
let 옵션 = 데이터.map(v => `<option>${v.회차}</option>`).reverse().join('');
$('#당번_회차select, #분석자료_회차select').html(옵션);

function 당번_회차change설정() { // +, -, 옵션변경 : +, - 일때는 html에서 회차를 +,-하여 전달하는데 범위 벗어나면 여기서 원래대로 처리한다
  if (회차 < 0 || 회차 > 데이터.length - 1) {회차 = 회차 < 0 ? 회차 + 1 : 회차 - 1; alert('+,- 실행시, 최소값보다 작거나 최대값보다 크다.');return;}
  $('#당번_회차select').val(회차); //옵션에 없는 회차(문자)이면 공백으로 보임 공백 ''전달과 같음
}


function 연습() {
  let 횟수=3;
  let 결과=span(횟수);
  console.log(결과);

}


let 리스너_바디 = $('body');
let 드래그이동_대상 = $('#캔버스결과, #이동테스트1, #이동테스트2');

function mousedownOrTouchstart(e) {
  /* 요소 드래그할때 이미지는 자체 드래그 액션이 있는데 막아줌 css : img {-webkit-user-drag: none;user-select: none;} */
  const 대상 = $(e.currentTarget); //드래그이동_대상 중에 하나
  let 처음타겟TOP숫자 = parseInt(대상.css('top')) || 0;
  let 처음타겟LEFT숫자 = parseInt(대상.css('left')) || 0;
  const isTouchEvent = e.type === 'touchstart';
  const orige = e.originalEvent || e;
  const 첫마우스y = isTouchEvent ? orige.touches[0].clientY : e.clientY;
  const 첫마우스x = isTouchEvent ? orige.touches[0].clientX : e.clientX;

  function 마우스moveOrTouchmove(e) {
    const orige = e.originalEvent || e;
    if (isTouchEvent && e.cancelable) {e.preventDefault();}

    const move_y = isTouchEvent ? orige.touches[0].clientY : e.clientY;
    const move_x = isTouchEvent ? orige.touches[0].clientX : e.clientX;

    let 새로운_상자_위치_y = 처음타겟TOP숫자 + (move_y - 첫마우스y);
    let 새로운_상자_위치_x = 처음타겟LEFT숫자 + (move_x - 첫마우스x);

    if (새로운_상자_위치_y < 0) 새로운_상자_위치_y = 0;
    if (새로운_상자_위치_x < 0) 새로운_상자_위치_x = 0;

    대상.css({top: 새로운_상자_위치_y + 'px',left: 새로운_상자_위치_x + 'px'});
  }

  function 마우스upOrTouchend() {
    $(window).off('mousemove touchmove',마우스moveOrTouchmove);
    $(window).off('mouseup touchend',마우스upOrTouchend);
  }

  $(window).on('mousemove touchmove',마우스moveOrTouchmove);
  $(window).on('mouseup touchend',마우스upOrTouchend);
}

function 리스너_바디_click(e) {
  console.log('리스너_바디_click(e)');
  if ($(e.target).parents().eq(1).is('#캔버스바디')) {
    $('#캔버스결과').html($('#' + e.target.title).html()).removeClass('d-none');
    return;
  }
}

// 이벤트 바인딩 (jQuery 스타일)
리스너_바디.on('click', 리스너_바디_click);
드래그이동_대상.on('mousedown touchstart',mousedownOrTouchstart);

