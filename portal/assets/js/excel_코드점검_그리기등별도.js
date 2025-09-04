function image폴더클릭_파일사용현황파악() {

}
function 캔버스_개별카테고리_h6의title과id순서() {
  //id나열
  var 아이디=Array.from(document.querySelectorAll('.모든id모음위치자유 > [id]'), (요소,index) => 요소.id); 
  var h6정보=Array.from(document.querySelectorAll('.개별카테고리 > div > [title]'));
  var 타이틀=Array.from(document.querySelectorAll('.개별카테고리 > div > [title]'), (요소,index) => 요소.title); 
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
    if (!타이틀.includes(value)) {span.setAttribute('class','노랑바탕색')}
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
  //h6의 title 부분 : {캔버스id,카테고리id,title} 따오기
  var 캔버스id, 카테고리id, title;
  var h6정보3종=[];
  // 위에 정의 : var h6정보=Array.from(document.querySelectorAll('.개별카테고리 > div > [title]'));
  document.querySelector('#title개수').innerHTML=h6정보.length;
  h6정보.forEach ( (요소,인덱스,array) => {
    캔버스id=요소.parentElement.parentElement.parentElement.id;
    카테고리id=요소.parentElement.parentElement.id;
    title=요소.title;
    //h6정보3종.push({'캔버스id':캔버스id,'카테고리id':카테고리id,'title':title})
    h6정보3종.push({캔버스id,카테고리id,title})
  })
  var 카운트=0;
  var 넣을곳=document.querySelector('#title나열');넣을곳.innerHTML='';
  for (const { 캔버스id,카테고리id,title } of h6정보3종) {
    카운트+=1;
    if (카운트==1) {
      var div=document.createElement('div');
      Array.from({length:4}).forEach ( (ele,내부index) => {
        var span=document.createElement('span');
        span.innerText=['캔버스id','카테고리id','title','innerTEXT'][내부index];
        div.appendChild(span);
      })
      넣을곳.appendChild(div);
    }
    var div=document.createElement('div');
    var span=document.createElement('span');
    span.innerText=캔버스id;
    div.appendChild(span);
    var span=document.createElement('span');
    span.innerText=카테고리id; 
    div.appendChild(span);
    //아이디와 innerTEXT가 공백일때 _ 로 대체 (높이)
    var span=document.createElement('span');
    span.innerText=title=='' ? '_':title; 
    if (!아이디.includes(title)) {span.setAttribute('class','노랑바탕색')}
    div.appendChild(span);
    var span=document.createElement('span');
    span.innerText=document.querySelector('[title="' + title + '"]').innerText=='' ? '_':document.querySelector('[title="' + title + '"]').innerText; 
    div.appendChild(span);
    넣을곳.appendChild(div);
  };
  var 첫번째width=[];
  var 두번째width=[];
  var 세번째width=[];
  var 네번째width=[];
  Array.from(document.querySelectorAll('#title나열 > div')).forEach ( (요소,index,array) => {
    첫번째width.push(요소.children[0].clientWidth);
    두번째width.push(요소.children[1].clientWidth);
    세번째width.push(요소.children[2].clientWidth);
    네번째width.push(요소.children[3].clientWidth);
  });
  Array.from(document.querySelectorAll('#title나열 > div')).forEach ( (요소,index,array) => {
    요소.children[0].setAttribute('style','width:' + Math.max(...첫번째width) + 'px');
    요소.children[1].setAttribute('style','width:' + Math.max(...두번째width) + 'px');
    요소.children[2].setAttribute('style','width:' + Math.max(...세번째width) + 'px');
    요소.children[3].setAttribute('style','width:' + Math.max(...네번째width) + 'px');
  });
}