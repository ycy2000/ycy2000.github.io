//회차SELECT에 회차 넣는것은 공통..
var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
var 회차select안옵션html;
var 회차개수=Number(당번전체.length/9);
var 회차selectedIndex=0;//초기값
for (var i=0; i<회차개수; i++) {
  if (i==0) {
    회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>'
  } else {
    회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>' + 회차select안옵션html
  }
}
document.querySelector('#회차select').innerHTML=회차select안옵션html; //<option>회차</option>

회차변경실행();//함수가 아래에 있어도 되네..

function 회차변경실행() {
  console.log('#회차select.selectedIndex : ' +  document.querySelector('#회차select').selectedIndex)
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
    console.log('else')
    id_배치_왼쪽_다음회차[2].innerHTML='날짜';
    id_배치_왼쪽_다음회차[3].innerHTML='날짜';
    id_배치_왼쪽_다음회차[4].innerHTML='날짜';
    id_배치_왼쪽_다음회차[5].innerHTML='날짜';
  }

}


