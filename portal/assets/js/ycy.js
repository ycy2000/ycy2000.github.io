//span구조정보 'id,span개수만큼div,span개수만큼div반복생성'
const span구조정보 = ['#기본_다음당번,9,1', '#기본_당번,9,50', 
                     '#기본_321당첨_머리글,5,1', '#기본_321당첨,5,50', 
                     '#기본_321개수_머리글,5,1', '#기본_321개수,5,50', 
                     '#기본_321평균_머리글,5,1', '#기본_321평균,5,50', 
                     '#기본_30주당첨_머리글,6,1', '#기본_30주당첨,6,50', 
                     '#기본_30주개수_머리글,6,1', '#기본_30주개수,6,50', 
                     '#기본_30주평균_머리글,6,1', '#기본_30주평균,6,50', 
                     '#기본_빈공간개수_머리글,6,1', '#기본_빈공간개수,6,50', 
                     '#기본_빈공간당첨_머리글,6,1', '#기본_빈공간당첨,6,50',
                     '#기본_빈공간평균_머리글,6,1', '#기본_빈공간평균,6,50',
                     '#기본_이월이웃색칠_머리글,6,1', '#기본_이월이웃색칠,6,50',
                     '#기본_이월이웃개수_머리글,3,1', '#기본_이월이웃개수,3,50'];
//구조만들기
function span(num) {return '<div>' + Array.from({length:num}).map(() => {return '<span></span>'}).join('') + '</div>';}
span구조정보.forEach((ele) => {
  const [selector, spanArg, countStr] = ele.split(',');
  const count = Number(countStr); 
  const spansHtml = Array(count).fill(null).map(() => span(spanArg)).join('');
  $(selector).html(spansHtml); 
});

const span머리글정보 = ['#기본_321당첨_머리글,5,장_미_1_2_3',
                      '#기본_321개수_머리글,5,장_미_1_2_3',
                      '#기본_321평균_머리글,5,장_미_1_2_3',
                      '#기본_30주당첨_머리글,6,2_3_4_5_6_M',
                      '#기본_30주개수_머리글,6,2_3_4_5_6_M',
                      '#기본_30주평균_머리글,6,2_3_4_5_6_M',
                      '#기본_빈공간당첨_머리글,6,A_B_C_D_E_F',
                      '#기본_빈공간개수_머리글,6,A_B_C_D_E_F',
                      '#기본_빈공간평균_머리글,6,A_B_C_D_E_F',
                      '#기본_이월이웃색칠_머리글,6,A_B_C_D_E_F',
                      '#기본_이월이웃개수_머리글,3,이월_이웃_합'];
span머리글정보.forEach((ele) => {
  const [selector, spanArg, countStr] = ele.split(',');
  const text=countStr.split('_');
  Array.from($(selector + ' > div > span')).forEach( (ele,index) => ele.innerHTML=text[index]);
});
  

//데이터 준비
const 원본 = $('#숨김정보_당번전체').text().replace(/\s/g, '').split('_');
const 데이터 = [];
for (let i = 0; i < 원본.length; i += 9) {데이터.push({회차: 원본[i],날짜: 
                                         원본[i + 1],당첨번호: 원본.slice(i + 2, i + 8).map(Number),
                                         보너스: Number(원본[i + 8])}
                                      );}

let 회차=데이터.length-1; // 데이터 만든 후, 첫 회차 설정, 순서일치위해 0회차가 기록되어 있음
//회차select옵션생성, 회차는 순서가 중요한게 아니라 결과 그대로 회차를 의마하는 숫자로 활용된다.
let 옵션 = 데이터.map(v => `<option>${v.회차}</option>`).reverse().join('');
$('#당번_회차select, #분석자료_회차select').html(옵션);

당번_회차change설정();

function 당번_회차change설정() {
  if (회차 < 0 || 회차 > 데이터.length - 1) {회차 = 회차 < 0 ? 회차 + 1 : 회차 - 1;alert('+,- 실행시, 최소값보다 작거나 최대값보다 크다.');return;}
  // 다음 당번이 없는 경우 그리고 else
  if (회차 > 데이터.length - 2) {document.querySelectorAll('#기본_다음당번 span').forEach(ele => ele.textContent = '_');} 
  else {// 다음 회차 데이터
    const 다음 = 데이터[회차 + 1];
    const 다음값 = [다음.회차,다음.날짜,...다음.당첨번호,다음.보너스];
    document.querySelectorAll('#기본_다음당번 span').forEach((span, i) => {span.textContent = 다음값[i];});
  }
  $('#당번_회차select').val(회차); // ---정상 change이므로 html값 변경
  // #기본_당번 > div : 50개
  document.querySelectorAll('#기본_당번 > div').forEach((div, i) => {
      const 현재 = 데이터[회차-i];
      const 현재값 = [현재.회차,현재.날짜,...현재.당첨번호,현재.보너스];
      // 각 div 안의 span : 9개
      const spans = div.querySelectorAll('span');
      //1)당번기록(회차,날짜,당번6,보너스)
      spans.forEach((span, j) => {span.textContent = 현재값[j];});
    });
  // 이후 필요 : 현재당번6, 이전당번6,

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

