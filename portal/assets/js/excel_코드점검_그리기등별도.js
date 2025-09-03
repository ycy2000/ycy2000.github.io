function 캔버스_개별카테고리_h6의title과id순서() {
  //id나열
  var 아이디=Array.from(document.querySelectorAll('.모든id모음위치자유 > [id]'), (요소,index) => 요소.id); 
  var 넣을곳=document.querySelector('#id나열');넣을곳.innerHTML='';
  document.querySelector('#id개수').innerHTML=아이디.length;
  아이디.forEach ( (value,index,array) => {
    if (index==0) {
      var div=document.createElement('div');
      Array.from({length:2}).forEach ( (ele,내부index) => {
        var span=document.createElement('span');
        span.innerText=['id순번','id'][내부index];
        div.appendChild(span);
      })
      넣을곳.appendChild(div);
    }
    var div=document.createElement('div');
    var span=document.createElement('span');
    span.innerText=index + 1; //value는 id
    div.appendChild(span);
    var span=document.createElement('span');
    span.innerText=value; //value는 id
    div.appendChild(span);
    넣을곳.appendChild(div);
  });
  var 첫번째width=[];
  var 두번째width=[];
  Array.from(document.querySelectorAll('#id나열 > div')).forEach ( (요소,index,array) => {
    첫번째width.push(요소.children[0].clientWidth);
    두번째width.push(요소.children[1].clientWidth);
  });
  Array.from(document.querySelectorAll('#id나열 > div')).forEach ( (요소,index,array) => {
    요소.children[0].setAttribute('style','width:' + Math.max(...첫번째width) + 'px');
    요소.children[1].setAttribute('style','width:' + Math.max(...두번째width) + 'px');
  });

  //h6의 title 부분
  var 캔버스=Array.from(document.querySelectorAll('.캔버스'), (요소,index) => 요소.id);
}