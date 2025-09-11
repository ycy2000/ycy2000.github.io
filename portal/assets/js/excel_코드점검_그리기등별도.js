function textarea정보에서html파일이름추출() {
  if (document.querySelector('#전체대체 #js파일리스트기록').children.length<2) {alert('image폴더클릭_파일사용현황파악() 실행 후 사용할 것'); return;}
  var 모든파일webkitRelativePath=Array.from(document.querySelectorAll('#js파일리스트기록 > div:not(:first-child)'));
  모든파일webkitRelativePath=모든파일webkitRelativePath.map( value => value=value.children[1].innerHTML + value.children[2].innerHTML)
  // Path문자열형식 : portal/images/문서연결_엑셀VBA/API_Key_발급방법.png <> src="Path문자열"
  //이미 기록된것은 건너뛰도록한다
  var 파악된html리스트=document.querySelector('#파악된html리스트').innerHTML.split(',');
  var 리스트정보div들=document.querySelectorAll('#전체대체 #js파일리스트기록 > div');


  //정규식 (HTML 태그 안의 src 속성만, 내부 경로만)
  //<[^>]+src="([^"]+)"[^>]*>/ig
  //<[^>]+ → 여는 태그 시작 (<img, <script, <iframe 등)
  //src="([^"]+)" → src="...내용..." 에서 내용만 캡처
  //[^>]*> → 태그 끝날 때까지
  //  match 결과는 value 그대로 사용하면 되고
  //  matchAll : 결과가 2가지 정보를 가진 배열이다 다른 여러 정보도 있다: [0]match결과 <img src="경로">, [1]macthall결과 경로 
  var html파일이름=document.querySelector('#html파일이름').innerText;   
  if (파악된html리스트.indexOf(html파일이름)==-1) {

    var 미사용누적 = document.querySelector('#결과표_현재html_미사용src'); 미사용누적.innerHTML='';
    var 검색할text = document.querySelector('body').innerHTML;

    var 카운트정보요소=document.querySelector('#전체대체 #결과표_현재html .결과');
    // HTML 태그 안의 src 속성만 추출 (내부 경로만)
    //var 찾은src들 = [...검색할text.matchAll(/<[^>]+src="([^"]+)"[^>]*>/ig)]; //사이에 1글자 이상이어야 가져옴
    var 찾은src들 = [...검색할text.matchAll(/<[^>]+src="([^"]*)"[^>]*>/ig)]; //사이에 공백이어도 가져옴

    
    //console.log('찾은src들[0] : ' + 찾은src들[0]) 0,1이 같다. 하나민 두번나오는 이유?
    //console.log('찾은src들[1] : ' + 찾은src들[1])
    //console.log('찾은src들[2] : ' + 찾은src들[2])
    //console.log('찾은src들[2] : ' + 찾은src들[3])

    //var 찾은src들 = [...검색할text.match(/<*[^>]+src="([^"]+)"[^>]*>/ig)];
    var 사용src=0, 공백src=0, 미사용src=0;
    if (찾은src들) { // 있으면, 1.모든파일webkitRelativePath 에 있을때 : html이름표시, 2.없을때 : 미사용누적 에 누적
      찾은src들.forEach ( (value,index,arr) => {
        //value[0] : <img src=\"portal/images/문서연결_엑셀VBA/파일리스트설명.png\" alt=\"이미지없음\">
        //value[1] : portal/images/문서연결_엑셀VBA/파일리스트설명.png
        if (value[1].length==0) {공백src+=1;}
        else { // 경로가 있을때
          if (index==0) {
           //console.log('찾은src들[0] : ' + 찾은src들[0]) 0,1이 같다. 하나민 두번나오는 이유?
          } else {
            if (모든파일webkitRelativePath.indexOf(value[1]) !== -1) {
              사용src+=1;
              var index플러스1=모든파일webkitRelativePath.indexOf(value[1])+1;
              console.log('index : ' + index + ', path : ' + value[1] + ', ' + 리스트정보div들[index플러스1].children[0].innerHTML)
              if (리스트정보div들[index플러스1].children[0].innerHTML=='') {
                리스트정보div들[index플러스1].children[0].innerHTML=html파일이름;
              } else {
                리스트정보div들[index플러스1].children[0].innerHTML+='<br>' + html파일이름;
              }
              리스트정보div들[index플러스1].children[0].classList.add('src있음');
            } else {
              미사용src+=1;
              var div = document.createElement('div');
              div.innerText=value[1];
              미사용누적.appendChild(div);
            }
          }

        }
      }); //찾은src들.forEach
    }
    카운트정보요소.children[2].innerHTML=html파일이름; //html 파일이름
    카운트정보요소.children[3].innerHTML=찾은src들.length-1-공백src; //값있는src개수
    카운트정보요소.children[4].innerHTML=사용src; //사용중개수
    카운트정보요소.children[5].innerHTML=미사용src; //미사용개수
    카운트정보요소.children[6].innerHTML=공백src; //src=""
  }

  //textarea 정보 관련
  var textarea관련=document.querySelectorAll('#전체대체 .textarea결과만');
  var 미사용누적id=['결과표_textarea1_미사용src','결과표_textarea2_미사용src','결과표_textarea3_미사용src','결과표_textarea4_미사용src','결과표_textarea5_미사용src'];
  var 카운트정보요소id=['#전체대체 #결과표_textarea1 .결과','#전체대체 #결과표_textarea2 .결과','#전체대체 #결과표_textarea3 .결과','#전체대체 #결과표_textarea4 .결과','#전체대체 #결과표_textarea5 .결과'];
  var 검색할text요소id=['#전체대체 #결과표_textarea1 textarea','#전체대체 #결과표_textarea2 textarea','#전체대체 #결과표_textarea3 textarea','#전체대체 #결과표_textarea4 textarea','#전체대체 #결과표_textarea5 textarea'];
  for (var i=0; i<textarea관련.length; i++) {
    var 미사용누적 = document.querySelector('#' + 미사용누적id[i]); 미사용누적.innerHTML='';
    var 검색할text = document.querySelector(검색할text요소id[i]).value.substring(document.querySelector(검색할text요소id[i]).value.indexOf('body')+4,document.querySelector(검색할text요소id[i]).value.length)
        var html이름추출관련문자열='id="html파일이름" style="display:none">';
        var html추출시작index=검색할text.indexOf(html이름추출관련문자열) + html이름추출관련문자열.length;
        var html추출끝index=검색할text.indexOf('<',html추출시작index);
        //"문자열".substring(startIndex, endIndex);0부터, 1부터
        원본정보text에서추출된html파일이름=검색할text.substring(html추출시작index,html추출끝index)
    var html파일이름 = 검색할text.substring(html추출시작index,html추출끝index);    
    var 카운트정보요소 = document.querySelector(카운트정보요소id[i]);
    // HTML 태그 안의 src 속성만 추출 (내부 경로만)
    var 찾은src들 = [...검색할text.matchAll(/<[^>]+src="([^"]+)"[^>]*>/ig)];
    //var 찾은src들 = [...검색할text.match(/<*[^>]+src="([^"]+)"[^>]*>/ig)];
    var 사용src=0, 공백src=0, 미사용src=0;
    if (찾은src들) { // 있으면, 1.모든파일webkitRelativePath 에 있을때 : html이름표시, 2.없을때 : 미사용누적 에 누적
      찾은src들.forEach ( (value,index,arr) => {
        //value[0] : <img src=\"portal/images/문서연결_엑셀VBA/파일리스트설명.png\" alt=\"이미지없음\">
        //value[1] : portal/images/문서연결_엑셀VBA/파일리스트설명.png
        if (value[1].length==0) {공백src+=1;}
        else { // 경로가 있을때
          if (모든파일webkitRelativePath.indexOf(value[1]) !== -1) {
            사용src+=1;
            var index플러스1=모든파일webkitRelativePath.indexOf(value[1])+1;
            if (리스트정보div들[index플러스1].children[0].innerHTML=='') {
              리스트정보div들[index플러스1].children[0].innerHTML=html파일이름;
            } else {
              리스트정보div들[index플러스1].children[0].innerHTML+='<br>' + html파일이름;
            }
            리스트정보div들[index플러스1].children[0].classList.add('src있음');
          } else {
            미사용src+=1;
            var div = document.createElement('div');
            div.innerText=value[1];
            미사용누적.appendChild(div);
          }
        }
      }); //찾은src들.forEach
    }
    카운트정보요소.children[2].innerHTML=html파일이름; //html 파일이름
    카운트정보요소.children[3].innerHTML=찾은src들.length; //값있는src개수
    카운트정보요소.children[4].innerHTML=사용src; //사용중개수
    카운트정보요소.children[5].innerHTML=미사용src; //미사용개수
    카운트정보요소.children[6].innerHTML=공백src; //src=""
  }
}
function image폴더클릭_파일사용현황파악() {
  document.querySelector('#파악된html리스트').innerHTML='';
  var 모든파일webkitRelativePath=[];
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
      모든파일webkitRelativePath.push('portal/' + file.webkitRelativePath);
      if (index==0) {//제목부분
        var div=document.createElement('div');
        var span=document.createElement('span');
        span.innerText= '사용중인html';
        div.appendChild(span);
        var span=document.createElement('span');
        span.innerText= '경로만';
        div.appendChild(span);
        var span=document.createElement('span');
        span.innerText= '파일이름';
        div.appendChild(span);
        기록할곳.appendChild(div);
      }
      var div=document.createElement('div');
      var span=document.createElement('span');
      //span.innerText= '_';
      div.appendChild(span);
      var span=document.createElement('span');
      span.innerText= 'portal/' + file.webkitRelativePath.split('/').slice(0,file.webkitRelativePath.split('/').length-1).join('/') + '/';
      div.appendChild(span);
      var span=document.createElement('span');
      span.innerText= file.name;
      div.appendChild(span);
      기록할곳.appendChild(div);
    })
     //폭조정
    //========== 실행 다 하고, 이벤트 발생시 이벤트함수 실행하므로, 폭조정을 이벤트 함수안에 넣어야 된다  
    var 첫번째width=[];
    var 두번째width=[];
    var 세번째width=[];
    Array.from(document.querySelectorAll('#js파일리스트기록 > div')).forEach ( (요소,index,array) => {
      if (요소.children.length>1) {두번째width.push(요소.children[1].clientWidth)};
      if (요소.children.length>2) {세번째width.push(요소.children[2].clientWidth)};
    });
    Array.from(document.querySelectorAll('#js파일리스트기록 > div')).forEach ( (요소,index,array) => {
      if (요소.children.length>1) {요소.children[1].setAttribute('style','width:' + Math.max(...두번째width) + 'px')};
      if (요소.children.length>2) {요소.children[2].setAttribute('style','width:' + Math.max(...세번째width) + 'px')};
    });
  }
  이벤트감지.addEventListener('change',함수내파일리스트가공)
}
function 캔버스_개별카테고리_h6의title과id순서() {
  //왼쪽 : id나열
  var 아이디=Array.from(document.querySelectorAll('.모든id모음 > div > [id]'), (요소,index) => 요소.id); 
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
    if (value.length!=0) {
      var div=document.createElement('div');
      var span=document.createElement('span');
      span.innerText=index + 1; //value는 id
      div.appendChild(span);
      var span=document.createElement('span');
      span.innerText=value; //value는 id
      div.appendChild(span);
      넣을곳.appendChild(div);
    }
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
  var h6정보=Array.from(document.querySelectorAll('.캔버스관련모두감싸기 .개별카테고리 > div > [title]'));
  var 넣을곳=document.querySelector('#title나열');넣을곳.innerHTML='';
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

  //서로 없는 정보에     if (!아이디.includes(title)) {span.setAttribute('class','노랑바탕색')}
  var 타이틀=Array.from(document.querySelectorAll('.캔버스관련모두감싸기 .개별카테고리 > div > [title]'), (요소,index) => 요소.title); 
  var id요소=document.querySelectorAll('#id나열 > div:not(:first-child)');
  Array.from(id요소).forEach ( (요소, index, arr) => {
    if (타이틀.indexOf(요소.children[1].innerHTML)==-1) {요소.children[1].classList.add('노랑바탕색')}
  });
  var title요소=document.querySelectorAll('#title나열 > div:not(:first-child)');
  Array.from(title요소).forEach ( (요소, index, arr) => {
    if (아이디.indexOf(요소.children[2].innerHTML)==-1) {요소.children[2].classList.add('노랑바탕색')}
  });
}