//코드정리작업 메모
//1. 캔버스는 하나면 된다. 캔버스바디에 들어갈 div넣을때 필요한 버튼만 생성하면 된다.
//2. 


//-----코드정리작업 모메 끝
var 리스너_바디=document.querySelector('body');
function 캔버스_연결버튼_클릭(e) {
  //#대표캔버스 열리기전에 작동한다. 1.e.title:'캔버스'이름, 2.
  if (document.querySelector('#현재캔버스이름').innerHTML==e.title) {console.log('reutrn;');return;}
  document.querySelector('#현재캔버스이름').innerHTML=e.title;
  document.querySelector('#js카테고리생성').innerHTML='';
  var 카테고리들=document.querySelectorAll('#' + e.title + ' .개별카테고리'); if(카테고리들.length==0) {return;}
  
  Array.from(카테고리들).forEach ( (요소,index) => {
    var 버튼생성=document.createElement('button');
    버튼생성.setAttribute('onclick','카테고리배치(this)')
    버튼생성.innerText=요소.id;
    document.querySelector('#js카테고리생성').appendChild(버튼생성);
    if (index==0) {     
      document.querySelector('#캔버스바디').innerHTML=document.querySelector('#' + 요소.id).outerHTML;
      버튼생성.setAttribute('class','선택카테고리');
    }
  });
}
function 카테고리배치(e) {
  console.log('카테고리배치(e)')
  document.querySelector('.선택카테고리').classList.remove('선택카테고리');
  e.setAttribute('class','선택카테고리');
  document.querySelector('#캔버스바디').innerHTML=document.querySelector('#' + e.innerHTML).outerHTML
}
function 리스너_바디_click(e) {
  //캔버스바디 클릭 h6의 타이틀과 같은 id를 가진 요소를 전체대체에 셑팅
  if (e.target.parentElement.parentElement.classList.contains('개별카테고리') && e.target.title.trim().length>0 && document.querySelector('#' + e.target.title)) {
    document.querySelector('#전체대체').innerHTML=document.querySelector('#' + e.target.title).outerHTML;
  }
}
리스너_바디.addEventListener('click',리스너_바디_click)
