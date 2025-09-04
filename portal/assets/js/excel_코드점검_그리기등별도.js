function image폴더클릭_파일사용현황파악() {
  //'파일선택' 클릭하면 파일리스트 추출완료시 change 감지됨
  var 이벤트감지=document.querySelector('#file_input');
  var 기록할곳=document.querySelector('#js파일리스트기록');
  //**webkitRelativePath**라는 속성에 상위 폴더명부터 파일까지의 상대 경로가 포함됩니다.
  //webkitRelativePath는 브라우저(주로 크롬, 엣지, 오페라 등)에서만 지원됩니다.
  //상위 폴더 이름은 첫 번째 파일의 webkitRelativePath를 /로 분리하면 됩니다.
  function 함수내파일리스트가공() {
    var 파일리스트배열=이벤트감지.files;
    var split개수=[];
    Array.from(파일리스트배열).forEach ( (file,index,arr) => {
      if (index==0) {
        var div=document.createElement('div');
        var span=document.createElement('span');
        span.innerText= 'src경로';
        div.appendChild(span);
        var span=document.createElement('span');
        span.innerText= '사용된html(횟수)';
        div.appendChild(span);
        기록할곳.appendChild(div);
      }
      var div=document.createElement('div');
      var span=document.createElement('span');
      span.innerText= 'portal/' + file.webkitRelativePath;
      div.appendChild(span);
      var span=document.createElement('span');
      span.innerText= '_';
      div.appendChild(span);
      기록할곳.appendChild(div);
    })
    //폭조정
    //========== 실행 다 하고, 이벤트 발생시 이벤트함수 실행하므로, 폭조정을 이벤트 함수안에 넣어야 된다  
    var 첫번째width=[];
    var 두번째width=[];
    Array.from(document.querySelectorAll('#js파일리스트기록 > div')).forEach ( (요소,index,array) => {
      if (요소.children.length>0) {첫번째width.push(요소.children[0].clientWidth)};
      if (요소.children.length>1) {두번째width.push(요소.children[1].clientWidth)};
    });
    Array.from(document.querySelectorAll('#js파일리스트기록 > div')).forEach ( (요소,index,array) => {
      if (요소.children.length>0) {요소.children[0].setAttribute('style','width:' + Math.max(...첫번째width) + 'px')};
      if (요소.children.length>1) {요소.children[1].setAttribute('style','width:' + Math.max(...두번째width) + 'px')};
    });
  }
  이벤트감지.addEventListener('change',함수내파일리스트가공)
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