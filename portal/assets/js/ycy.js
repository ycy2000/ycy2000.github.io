function span(num) {return '<div>' + Array.from({length:num}).map(() => {return '<span></span>'}).join('') + '</div>';}
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

span구조정보.forEach((ele) => {
  // 1. 데이터를 미리 분할하고 숫자로 변환
  const [selector, spanArg, countStr] = ele.split(',');
  const count = Number(countStr); 

  // 2. 반복 횟수만큼 span HTML 문자열을 배열로 생성한 후 하나로 합침
  const spansHtml = Array(count).fill(null).map(() => span(spanArg)).join('');

  // 3. 대상 엘리먼트에 한 번에 삽입 (기존 내용 교체 원할 시 .html, 추가 원할 시 .append)
  $(selector).html(spansHtml); 
});










let 당번정보구조한줄 = `<div class="자식div가로">
        <div class="기본_회차 자식span24"><span style="width:40px;"></span></div>
        <div class="기본_날짜 자식span24"><span style="width:80px;"></span></div>
        <div class="기본_당번6 자식span24"><span></span><span></span><span></span><span></span><span></span><span></span></div>
        <div class="기본_보볼 자식span24"><span></span></div>
    </div>`











//요소.insertAdjacentHTML('afterbegin', div.outerHTML) : "beforebegin","afterbegin","beforeend","afterend"

function aaa() {
  let spanDiv='<div>' + Array.from({length:7}).map(() => {return '<span>40</span>'}).join('') + '</div>';
  let div=document.createElement('div');
  div.innerHTML='<div class="span20">' + Array.from({length:30}).map(ele => {return spanDiv}).join('') + '</div>';
  document.querySelector('#기본_당번').innerHTML=div.innerHTML;
}


function 연습() {
  let 횟수=3;
  let 결과=span(횟수);
  console.log(결과);

}


let 리스너_바디 = $('body');
let 드래그이동_캔버스결과 = $('#캔버스결과');

function mousedownOrTouchstart(e) {
  // 원래 text/code 기반의 e.type 검사 대신 jQuery 이벤트 객체의 pointer/touch/mouse 통합 활용
  var isTouchEvent = e.type === 'touchstart';
  var target = 드래그이동_캔버스결과[0]; // JavaScript DOM 객체로 접근
  var isDragging = true;

  // 스타일 값 추출 간소화 (jQuery의 parseInt 유연성 활용)
  var 처음타겟TOP숫자 = parseInt(드래그이동_캔버스결과.css('top')) || 0;
  var 처음타겟LEFT숫자 = parseInt(드래그이동_캔버스결과.css('left')) || 0;

  // TouchEvent인 경우 원래 이벤트 객체(originalEvent)에서 좌표 추출
  var orige = e.originalEvent || e;
  var 첫마우스y = isTouchEvent ? orige.touches[0].clientY : e.clientY;
  var 첫마우스x = isTouchEvent ? orige.touches[0].clientX : e.clientX;

  function 마우스moveOrTouchmove(e) {
    if (!isDragging) return;
    
    var orige = e.originalEvent || e;
    
    // 모바일 스크롤 방지 (이벤트가 취소 가능할 때만 실행하여 에러 방지)
    if (isTouchEvent && e.cancelable) { 
      e.preventDefault();
    }

    var move_y = isTouchEvent ? orige.touches[0].clientY : e.clientY;
    var move_x = isTouchEvent ? orige.touches[0].clientX : e.clientX;
    
    var 새로운_상자_위치_y = 처음타겟TOP숫자 + (move_y - 첫마우스y);
    var 새로운_상자_위치_x = 처음타겟LEFT숫자 + (move_x - 첫마우스x);

    if (새로운_상자_위치_y < 0) 새로운_상자_위치_y = 0;
    if (새로운_상자_위치_x < 0) 새로운_상자_위치_x = 0;

    드래그이동_캔버스결과.css({
      top: 새로운_상자_위치_y + 'px',
      left: 새로운_상자_위치_x + 'px'
    });
  }

  function 마우스upOrTouchend() {
    isDragging = false;
    // 마우스와 터치 이벤트를 윈도우 전체에서 한 번에 깔끔하게 제거
    $(window).off('mousemove touchmove', 마우스moveOrTouchmove);
    $(window).off('mouseup touchend', 마우스upOrTouchend);
  }

  // 공통으로 마우스와 터치 이벤트 모두에 move와 up 이벤트를 걸어줍니다.
  $(window).on('mousemove touchmove', 마우스moveOrTouchmove);
  $(window).on('mouseup touchend', 마우스upOrTouchend);
}

function 리스너_바디_click(e) {
  if ($(e.target).parents().eq(1).is('#캔버스바디')) {
    $('#캔버스결과').html($('#' + e.target.title).html()).removeClass('d-none');
    return;
  }
}

// 이벤트 바인딩 (jQuery 스타일)
리스너_바디.on('click', 리스너_바디_click);
드래그이동_캔버스결과.on('mousedown touchstart', mousedownOrTouchstart);

