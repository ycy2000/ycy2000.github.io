function 연습() {
  var 연습요소id='_02_수출품목정보_오징어';
  var 연습요소=document.querySelector('#' + 연습요소id);
  document.querySelector('#전체대체').innerHTML=연습요소.outerHTML;
  document.querySelector('#전체대체').classList.remove('d-none');

}

function 전체대체클릭시(e) {
  console.log('전체대체클릭시(e)');
  var 결과부분 = document.querySelector('#전체대체');
  if (e.target.classList.contains('스티커정보')) {
    if (document.querySelector('#' + e.target.title)) {
      document.querySelector('#스티커_수품원_내용').innerHTML=document.querySelector('#' + e.target.title).outerHTML;
      document.querySelector('#스티커_수품원').classList.remove('d-none');
      document.querySelector('#스티커_수품원').style.top=(window.scrollY + parseInt(45)) + 'px';
      // 스크롤 아래의 것 클릭시 안보이는 맨 위에 나타나므로 현재 화면 기준으로 나타나게 해야함
    }
  }
  if (document.querySelector('#전체대체 section')) {
      if (e.target.id.substr(0,4)=='move' && document.querySelectorAll('#전체대체 section #' + e.target.id)) {
        var 스크롤요소들=document.querySelectorAll('#전체대체 section #' + e.target.id);
        var 절대좌표 = window.scrollY + 스크롤요소들[1].getBoundingClientRect().top;
        var fix높이=getComputedStyle(document.querySelector('header')).height
        fix높이=fix높이.replace('/[^0-9]/g', ''); //숫자형식만 남기기
        fix높이 = parseInt(fix높이); //숫자형식으로 변환
        window.scrollTo({ left: 0, top: 절대좌표 - fix높이, behavior: "smooth" });
      }
  }
}

function 파일리스트() {//index.html에서 안쓸껄
  console.log('파일리스트()')
  //다음 두 변수 정의할때, #전체대체로 들어갔을때 정의해야 됨.
  const fileInput = document.querySelector('#file_input');
  const fileListContainer = document.querySelector('.file_list_container');

  fileListContainer.innerHTML="<li><div>사용중인html파일</div><div>경로만</div><div>파일이름 </div></li>";

  //리스너 등록할때 #전체대체로 들어갔을때 등록해야 됨. change는 파일명이 추가될때마다 실행됨.
  fileInput.addEventListener('change', displaySelectedDirectories);

      function displaySelectedDirectories() {

        const selectedDirectories = fileInput.files; //파일들이 모두 담겨있다.

        for (const file of selectedDirectories) {
          var li태그생성=document.createElement('li');
          var 내부div태그생성=document.createElement('div');
          //내부div태그생성.textContent='없음';
          내부div태그생성.innerText='없음';
          li태그생성.appendChild(내부div태그생성);

          var 경로div태그생성=document.createElement('div');
          var 경로만='portal/' + file.webkitRelativePath.split('/').slice(0,file.webkitRelativePath.split('/').length-1).join('/');
          경로div태그생성.innerText=경로만 + '/';
          li태그생성.appendChild(경로div태그생성);
  
          var 파일이름div생성=document.createElement('div');
          파일이름div생성.textContent=file.name;
  
          li태그생성.appendChild(파일이름div생성);
  
          fileListContainer.appendChild(li태그생성);
        }
      } 
}
function 파일리스트결과폭조정() {
  var div들=document.querySelectorAll('#전체대체 .file_list_container > li > div:nth-child(1)');
  var 요소정보;
  var 최대폭=0;
  for (var i=0; i<div들.length; i++) {
    요소정보=div들[i].getBoundingClientRect();
    if (요소정보.width>최대폭) {최대폭=요소정보.width}
  }
  console.log('최대폭 : ' + 최대폭)
  for (var i=0; i<div들.length; i++) {
    div들[i].setAttribute('style','width:' + 최대폭 + 'px;')
   
  }

  var div들=document.querySelectorAll('#전체대체 .file_list_container > li > div:nth-child(2)');
  var 요소정보;
  var 최대폭=0;
  for (var i=0; i<div들.length; i++) {
    요소정보=div들[i].getBoundingClientRect();
    if (요소정보.width>최대폭) {최대폭=요소정보.width}
  }
  console.log('최대폭 : ' + 최대폭)
  for (var i=0; i<div들.length; i++) {
    div들[i].setAttribute('style','width:' + 최대폭 + 'px;')
   
  }

  var div들=document.querySelectorAll('#전체대체 .file_list_container > li > div:nth-child(3)');
  var 요소정보;
  var 최대폭=0;
  for (var i=0; i<div들.length; i++) {
    요소정보=div들[i].getBoundingClientRect();
    if (요소정보.width>최대폭) {최대폭=요소정보.width}
  }
  console.log('최대폭 : ' + 최대폭)
  for (var i=0; i<div들.length; i++) {
    div들[i].setAttribute('style','width:' + 최대폭 + 'px;')
   
  }
}
function textarea정보에서html파일이름추출() {
  console.log('textarea정보에서html파일이름추출()')
  var 리스트정보li들=document.querySelectorAll('#전체대체 .file_list_container li');
  //현재 html body.innerHTML에서 
  var src, 카운트=0, html의값있는src개수, 원본정보text, 파악된html들정보요소, 원본정보text에서추출된html파일이름;
  파악된html들정보요소=document.querySelector('#파악된html리스트');
  원본정보text=document.querySelector('body').innerHTML;
  원본정보text에서추출된html파일이름=document.querySelector('#html파일이름').innerText;

  if (1==1) {
    if (파악된html들정보요소.innerText.indexOf(원본정보text에서추출된html파일이름)>-1 && 리스트정보li들.length>1) {
      //html파일이름이 있고, 파일을 읽어온 상태 = 추출안해도됨
      console.log('현재html작업 건너뜀 : html파일이름이 있고, 파일을 읽어온 상태')
    } else if(리스트정보li들.length==1) {
      //파일을 읽어온 상태가 아니면 = 추출안해도됨
      console.log('현재html작업 건너뜀 : 파일을 읽어온 상태가 아니면 = 추출안해도됨')
    } else {
      //for문은 파일리스트 부분에 사용된 html파일이름 적는것
      for (var i=0; i<리스트정보li들.length; i++) {
        리스트정보li들[i].classList.add('임시표시클래스');
        src=document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(2)').innerHTML
          + document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(3)').innerHTML
        if (document.querySelector('body').innerHTML.indexOf('src="' + src + '"')>-1) {//있으면
          카운트+=1;
          if(document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML=='없음') {
            document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML = 원본정보text에서추출된html파일이름;
            document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').classList.add('src있음');
          } else { // 하나 이상 있을때
            document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML =document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML +  '<br>' + 원본정보text에서추출된html파일이름;
          }
        } 
        리스트정보li들[i].classList.remove('임시표시클래스');
      }
      html의값있는src개수=document.querySelectorAll('body [src]').length-document.querySelectorAll('body [src=""]').length;
      document.querySelector('#결과표_현재html .결과 > div:nth-child(3)').innerHTML=원본정보text에서추출된html파일이름;
      document.querySelector('#결과표_현재html .결과 > div:nth-child(4)').innerHTML=html의값있는src개수;
      document.querySelector('#결과표_현재html .결과 > div:nth-child(5)').innerHTML=카운트;
      document.querySelector('#결과표_현재html .결과 > div:nth-child(6)').innerHTML=html의값있는src개수 - 카운트;
      카운트=0;
      var 자식요소=document.createElement('span');
      자식요소.textContent=원본정보text에서추출된html파일이름;
      파악된html들정보요소.appendChild(자식요소);
    }
  }

  //#결과표_전체 내의 textarea만큼 반복
  var textarea들=document.querySelectorAll('#전체대체 #결과표_전체 textarea');
  for (var 고정=0; 고정<textarea들.length; 고정++) {
    var src, 카운트=0, html의값있는src개수, 원본정보text, 파악된html들정보요소, 원본정보text에서추출된html파일이름;
    파악된html들정보요소=document.querySelector('#파악된html리스트');
    원본정보text=textarea들[고정].value.substring(textarea들[고정].value.indexOf('body')+4,textarea들[고정].value.length)
    var 추출관련문자열='id="html파일이름" style="display:none">';
    var html추출시작index=원본정보text.indexOf(추출관련문자열) + 추출관련문자열.length;
    var html추출끝index=원본정보text.indexOf('<',html추출시작index);
    //"문자열".substring(startIndex, endIndex);0부터, 1부터
    원본정보text에서추출된html파일이름=원본정보text.substring(html추출시작index,html추출끝index)
    
    if (원본정보text.match(/src="*"/ig)) {//없으면 null 인데 length 물어보면 에러?
      html의값있는src개수=원본정보text.match(/src="*"/ig).length; 
    } else {
      html의값있는src개수=0;
    }
    

    if (파악된html들정보요소.innerHTML.indexOf(원본정보text에서추출된html파일이름)>-1 || 리스트정보li들.length==1 || html의값있는src개수==0) {
      //건너뜀
    } else {
      if (html추출끝index>-1 && 원본정보text에서추출된html파일이름.length>5) {
        document.querySelector('#전체대체 #결과표_textarea' + (고정+1) + ' .결과 > div:nth-child(3)').innerHTML=원본정보text에서추출된html파일이름;
        document.querySelector('#전체대체 #결과표_textarea' + (고정+1) + ' .결과 > div:nth-child(4)').innerHTML=html의값있는src개수;
        파악된html들정보요소.innerHTML=파악된html들정보요소.innerHTML + ', ' + 원본정보text에서추출된html파일이름;

      }
      for (var i=0; i<리스트정보li들.length; i++) {
        리스트정보li들[i].classList.add('임시표시클래스');
        src=document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(2)').innerHTML
          + document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(3)').innerHTML
        if (원본정보text.indexOf('src="' + src + '"')>-1) {//있으면
          카운트+=1;
          if(document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML=='없음') {
            document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML = 원본정보text에서추출된html파일이름;
            document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').classList.add('src있음');
          } else { // 하나 이상 있을때
            document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML =document.querySelector('#전체대체 .임시표시클래스 > div:nth-child(1)').innerHTML +  '<br>' + 원본정보text에서추출된html파일이름;
          }
        } 
        리스트정보li들[i].classList.remove('임시표시클래스');
      }
      document.querySelector('#전체대체 #결과표_textarea' + (고정+1) + ' .결과 > div:nth-child(5)').innerHTML=카운트;
      document.querySelector('#전체대체 #결과표_textarea' + (고정+1) + ' .결과 > div:nth-child(6)').innerHTML=html의값있는src개수 - 카운트;
    }







}

console.log('마지막')




   

  
}
function 파일리스트_연습() {
  //다음 두 변수 정의할때, #전체대체로 들어갔을때 정의해야 됨.
  const fileInput = document.querySelector('#연습_file_input');
  const fileListContainer = document.querySelector('.연습file_list_container');

  fileListContainer.innerHTML='';

  //리스너 등록할때 #전체대체로 들어갔을때 등록해야 됨. change는 파일명이 추가될때마다 실행됨.
  fileInput.addEventListener('change', displaySelectedDirectories);

      function displaySelectedDirectories() {

          const selectedDirectories = fileInput.files;




          // 그룹화된 파일을 저장할 객체 생성
          const filesByDirectory = {};
          //선택한디렉토리(안의 파일), 하부디렉톡리(안의 파일)

          // 선택한 디렉터리 내의 파일을 그룹화
          for (const file of selectedDirectories) {

            

              const directoryPath = file.webkitRelativePath.split('/').slice(0, -1).join('/'); //slice(0, -1) 첫번째배열부터(처음폴더포함), 끝에서 두번째 배열까지(파일명제외)
              //const directoryPath = file.webkitRelativePath.split('/').slice(1, -1).join('/'); // 파일을 담은 폴더이름
              //const directoryPath = file.webkitRelativePath; // 선택한폴더부터 파일명까지 모두 사용할경우 directoryPath 값이 모두 고유값이다.
              //선택한 폴더인 경우 결과가 ''이다. length=0, 하위폴더인 경우 폴더이름.


  

              if (!filesByDirectory[directoryPath]) {
                  console.log('시작인 경우')
                  filesByDirectory[directoryPath] = [];
              }
              //console.log('directoryPath : ' + directoryPath)
              //console.log(filesByDirectory[directoryPath])



              filesByDirectory[directoryPath].push(file);
          }
          //console.log(filesByDirectory[''][0])

          // 파일을 그룹화된 디렉터리별로 나열
          const directoryList = document.createElement('ul');
          fileListContainer.appendChild(directoryList);
          //폴더명이 공백이면 내용없는 ul이 생기기때문에 폴더이름이 안보임, 폴더이름 부분에 첫번째 파일이름이 나오게 됨

          for (const directoryPath in filesByDirectory) {
              const directoryItem = document.createElement('li');
              const directoryName = document.createElement('div');

              directoryName.textContent = directoryPath;
              directoryItem.appendChild(directoryName);

              const fileList = document.createElement('ul');
              for (const file of filesByDirectory[directoryPath]) {
                  const fileItem = document.createElement('li');
                  fileItem.setAttribute('style','margin-bottom:-1px;')
                  var 사용유무div=document.createElement('div');
                  사용유무div.textContent='_' //공백하나 넣기, 상자로 보이도록
                  사용유무div.setAttribute('style','width:100px;border:1px solid black;display:inline-block;margin-right:3px;')
                  if (document.querySelector('[src="portal/' + directoryPath + '/' + file.name + '"]')) {
                    사용유무div.textContent='사용중'
                    사용유무div.setAttribute('style','width:100px;border:1px solid black;display:inline-block;margin-right:3px;background-color:yellow;')
                  }
                  
                  const fileName = document.createElement('div');
                  fileName.setAttribute('style','display:inline-block;')

                  fileName.textContent = file.name;
                  fileItem.appendChild(사용유무div);
                  fileItem.appendChild(fileName);
                  fileList.appendChild(fileItem);
              }

              directoryItem.appendChild(fileList);
              directoryList.appendChild(directoryItem);
          }
      }
}

var 선택한캔버스id='없음';
var 이전캔버스id='없음';
var 리스너_header = document.querySelector('header');
var 리스너_전체대체 = document.querySelector('#전체대체');//캔버스클릭시(e)
var 리스너_보세_유니패스전체 = document.querySelector('#보세_유니패스전체');
var 리스너_수품원전체 = document.querySelector('#수품원전체');
var 리스너_전달사항_공문_발행물전체 = document.querySelector('#전달사항_공문_발행물전체');
var 리스너_기타전체 = document.querySelector('#기타전체');
var 리스너_라벨등전체 = document.querySelector('#라벨등전체');

function header_클릭시(e) {
  //Offcanvas클릭은 영향없다. 다른것일때
  console.log('header_클릭시(e)');
  if (e.target.innerHTML == '특문') {
    리스너_전체대체.innerHTML=document.querySelector('#html특수문자_click').innerHTML;
  }
  if (e.target.innerHTML == '보세,유니패스,미래,엑셀') {//캔버스 들어가려면 클릭이 된다.
    선택한캔버스id='보세_유니패스전체';
    console.log('  선택한캔버스id : ' + 선택한캔버스id);
    선택한캔버스_카테고리작성및_초기작업();
  }
  if (e.target.innerHTML == '전달사항_공문_발행물') {//캔버스 들어가려면 클릭이 된다.
    선택한캔버스id='전달사항_공문_발행물전체';
    console.log('  선택한캔버스id : ' + 선택한캔버스id);
    선택한캔버스_카테고리작성및_초기작업();
  }
  if (e.target.innerHTML == '수품원') {//캔버스 들어가려면 클릭이 된다.
    선택한캔버스id='수품원전체';
    console.log('  선택한캔버스id : ' + 선택한캔버스id);
    선택한캔버스_카테고리작성및_초기작업();
  }
  if (e.target.innerHTML == '기타') {//캔버스 들어가려면 클릭이 된다.
    선택한캔버스id='기타전체';
    console.log('  선택한캔버스id : ' + 선택한캔버스id);
    선택한캔버스_카테고리작성및_초기작업();
  }
  if (e.target.innerHTML == '라벨등') {//캔버스 들어가려면 클릭이 된다.
    선택한캔버스id='라벨등전체';
    console.log('  선택한캔버스id : ' + 선택한캔버스id);
    선택한캔버스_카테고리작성및_초기작업();
  }
}

//각 캔버스는 header에  카테고리 목록은 고정이 아니라 캔버스관련자료none에서 가져오는 정보이다.
function 선택한캔버스_카테고리작성및_초기작업() {
  //캔버스 클릭시 유연성_선택한캔버스id 설정된다 ★★캔버스바디 목록이 살아있도록 !!
  console.log('    ' + 선택한캔버스id + '카테고리작성및_초기작업')

  //중요. 리스너 재설정
  리스너_선택한캔버스전체 = document.querySelector('#' + 선택한캔버스id);

  var 카테고리버튼생성 = '';//<button class="카테고리실행" title="참고">참고</button> 
  var 관련자료none_개별카테고리class들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none .개별카테고리');

  if (!관련자료none_개별카테고리class들) {console.log('if (!관련자료none_개별카테고리class들) {console.log();return;}');return;}

  //header 카테고리들 버튼 내용 생성, id가 excel캔버스전체_excel일때 버튼안의 값이 excel로 나타나게 split
  // 관련자료none_개별카테고리class들.length : 없으면 0, 에러는 아님

  var 문자열;
  for (var i = 0; i < 관련자료none_개별카테고리class들.length; i++) {
    문자열=관련자료none_개별카테고리class들[i].id;
    카테고리버튼생성 += '<button class="카테고리실행" style="margin-right:-2px" title="' 
                       + 문자열 + '">' 
                       + 문자열.substring(문자열.search('_')+1) + '</button>';
                       //+ 관련자료none_개별카테고리class들[i].id.split('_')[1] + '</button>';  [대상 문자열].search([조건 문자열]);
  }
  //header 카테고리들 버튼 생성
  if (관련자료none_개별카테고리class들.length>0) {
    document.querySelector('#' + 선택한캔버스id + ' .js카테고리생성').innerHTML=카테고리버튼생성;
  }
  //이전 캔버스 선택상태를 그대로 유지하기 위해서
  if (이전캔버스id!=선택한캔버스id) {document.querySelector('#' + 선택한캔버스id + ' .캔버스바디').innerHTML='';}
  이전캔버스id=선택한캔버스id;
}
function 전체대체마진top조정() {
  // getComputedStyle(document.querySelector('header')).height : 한줄은 44px
  var header한줄높이=Number(44);
  var header현재높이= Number(getComputedStyle(document.querySelector('header')).height.substring(0,getComputedStyle(document.querySelector('header')).height.length-2));
  document.querySelector('#전체대체').style.marginTop=(header현재높이-header한줄높이) + 'px';

}
function 우원풀기() {
  console.log('우원풀기()')
  var 원본텍스트 = document.querySelector('#우원원본').innerHTML;
  var 원본_줄바꿈split = 원본텍스트.split('\n');
  document.querySelector('#우원원본풀기js').innerHTML='';
  var 우원원본풀기js = document.querySelector('#우원원본풀기js');
  var 머리글='<table><tbody><tr><td>품명</td><td>규격</td><td>표시</td><td>kg</td></tr></tbody></table>';

  var 자료풀림결과 = '';
  for (var i = 2; i < 34; i++) {
    var div안span4 = '';
    div안span4 = '<td>' + 원본_줄바꿈split[i].split('\t')[0] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[3] + '</td>'
    //div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[25] + '</td>' //시간) : 엑셀에 넣으면 시간이 지워지니 표시안함
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    자료풀림결과+=div안span4;
  }
  자료풀림결과='<div>' + 머리글 + 자료풀림결과 + '</div>'
  우원원본풀기js.innerHTML=우원원본풀기js.innerHTML+자료풀림결과;

  var 자료풀림결과 = '';
  for (var i = 34; i < 65; i++) {
    var div안span4 = '';
    if (i==42) {
    div안span4 = '<td>빅버터플라이 <br>브레디드 쉬림프</td>'
    } else {
    div안span4 = '<td>' + 원본_줄바꿈split[i].split('\t')[0] + '</td>'
    }
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[3] + '</td>'
    //div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[25] + '</td>' //시간) : 엑셀에 넣으면 시간이 지워지니 표시안함
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    자료풀림결과+=div안span4;
  }
  자료풀림결과='<div>' + 머리글 + 자료풀림결과 + '</div>'
  우원원본풀기js.innerHTML=우원원본풀기js.innerHTML+자료풀림결과;

  var 자료풀림결과 = '';
  for (var i = 65; i < 97; i++) {
    var div안span4 = '';
    div안span4 = '<td>' + 원본_줄바꿈split[i].split('\t')[0] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[3] + '</td>'
    //div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[25] + '</td>' //시간) : 엑셀에 넣으면 시간이 지워지니 표시안함
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    자료풀림결과+=div안span4;
  }
  자료풀림결과='<div>' + 머리글 + 자료풀림결과 + '</div>'
  우원원본풀기js.innerHTML=우원원본풀기js.innerHTML+자료풀림결과;

  var 자료풀림결과 = '';
  for (var i = 97; i < 129; i++) {
    var div안span4 = '';
    div안span4 = '<td>' + 원본_줄바꿈split[i].split('\t')[0] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[3] + '</td>'
    //div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[25] + '</td>' //시간) : 엑셀에 넣으면 시간이 지워지니 표시안함
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    자료풀림결과+=div안span4;
  }
  자료풀림결과='<div>' + 머리글 + 자료풀림결과 + '</div>'
  우원원본풀기js.innerHTML=우원원본풀기js.innerHTML+자료풀림결과;

  var 자료풀림결과 = '';
  for (var i = 129; i < 원본_줄바꿈split.length - 1; i++) {
    var div안span4 = '';
    if (i==134) {
    div안span4 = '<td>코코넛 버터플라이 <br>브레디드 쉬림프</td>'}  else if(i==147) {
    div안span4 = '<td>탈각새우 <br>(아르헨티나 붉은새우)</td>'
    }
    else {
    div안span4 = '<td>' + 원본_줄바꿈split[i].split('\t')[0] + '</td>'
    }
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[1] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[2] + '</td>'
    div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[3] + '</td>'
    //div안span4 += '<td>' + 원본_줄바꿈split[i].split('\t')[25] + '</td>' //시간) : 엑셀에 넣으면 시간이 지워지니 표시안함
    div안span4 = '<table><tbody><tr>' + div안span4 + '</tr></tbody></table>'//이게 안들어가면 안되는데 왜인지 모르겠다.
    자료풀림결과+=div안span4;
  }
  자료풀림결과='<div>' + 머리글 + 자료풀림결과 + '</div>'
  우원원본풀기js.innerHTML=우원원본풀기js.innerHTML+자료풀림결과;
  return;
  for (var i = 1; i < 원본_줄바꿈split.length - 1; i++) {
  }

}
function 선택한캔버스클릭시(e) {
  console.log('선택한캔버스클릭시(e)')
  console.log('  선택한캔버스 : ' + 선택한캔버스id)
  var 선택한캔버스관련자료none안_타겟element; 
  var 셑팅_선택한캔버스바디 = document.querySelector('#' + 선택한캔버스id + ' .캔버스바디');
  var 결과부분 = document.querySelector('#전체대체');

  if (1 == 1) {
    //header의  카테고리 버튼을 눌렀을때 : 캔버스바디에 카테고리 div 가지고온다. header에 선택된 버튼 색칠한다.
    if (e.target.classList.contains('카테고리실행')) {
      console.log('선택한캔버스클릭시(e) > e.target.classList.contains(카테고리실행)');
      선택한캔버스관련자료none안_타겟element = document.querySelector('#' + e.target.title);
      셑팅_선택한캔버스바디.innerHTML = 선택한캔버스관련자료none안_타겟element.outerHTML;
      for (var i = 0; i < document.querySelectorAll('#' + 선택한캔버스id + ' .카테고리실행').length; i++) {
        document.querySelectorAll('#' + 선택한캔버스id + ' .카테고리실행')[i].classList.remove('현재카테고리');//카테고리 버튼들 색칠클래스 제거
      }
      document.querySelector('[title=' + e.target.title + ']').classList.add('현재카테고리');//선택한 카테고리 버튼 색칠클래스 제거
    }

    //우원전용
    if (e.target.classList.contains('canvas_div') && e.target.title=='라벨_우원품명') {
      console.log('캔버스바디의 목록을 눌렀을때 : canvas_div 클래스 있으면 타이틀을 id로하는 div를 셑팅')
      선택한캔버스관련자료none안_타겟element = document.querySelector('#' + e.target.title);
      결과부분.innerHTML = 선택한캔버스관련자료none안_타겟element.outerHTML;
      document.querySelector('#선택문서id').innerHTML=e.target.title;
      document.querySelector('#선택문서제목').innerHTML=e.target.innerHTML;
      //우원전용
      우원풀기();
      전체대체마진top조정();
    }

    //캔버스바디의 목옥을 눌렀을때 : canvas_div 클래스 있으면 타이틀을 id로하는 div를 셑팅
    if (e.target.classList.contains('canvas_div')) {
      console.log('캔버스바디의 목록을 눌렀을때 : canvas_div 클래스 있으면 타이틀을 id로하는 div를 셑팅')
      선택한캔버스관련자료none안_타겟element = document.querySelector('#' + e.target.title);
      결과부분.innerHTML = 선택한캔버스관련자료none안_타겟element.outerHTML;
      document.querySelector('#선택문서id').innerHTML=e.target.title;
      document.querySelector('#선택문서제목').innerHTML=e.target.innerHTML;
      전체대체마진top조정();

      if (1 == 1) {
        //canvas_div : 배치
        if (선택한캔버스관련자료none안_타겟element.tagName=='SECTION') {
          //section인경우 id="스크립트로ul추가"에 .목차 넣기
          var 클릭한정보텍스트=e.target.id;
          var h1='<h1>' + 클릭한정보텍스트 + '</h1>';
          var 목차=document.querySelectorAll('#전체대체 #스크립트로ul추가~.목차');
          var 앞문자열='<ul class="결과_section_목차">' + h1;
          var 뒷문자열='</ul>';
          var 중간문자열='';
          for (var i=0; i<목차.length; i++) {//여기서 아이디를 타이틀로 변경하면 목차[i]도 변경된다??
              중간문자열=중간문자열 + 목차[i].outerHTML;
          }
          var 추가할문자열;
          추가할문자열=앞문자열 + 중간문자열 + 뒷문자열;
          if (document.querySelector('#전체대체 #스크립트로ul추가')) {
            document.querySelector('#전체대체 #스크립트로ul추가').innerHTML=추가할문자열;
          }
          
        }
      }
    }
    //
    if (e.target.classList.contains('연결없음')) {
      console.log('연결없음 : 연결된 div 등이 없음')
      alert('연결된 문서 없음');
    }
    //
    if (e.target.innerHTML=='clear') {
      console.log('파일검색값 clear');
      document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value='';
      // 이전 찾은거 색칠한거 그대로, 두번 전꺼는 지워진다
      var 검색결과바탕색_클래스들 = document.querySelectorAll('.검색결과바탕색');
      for (var i=0; i<검색결과바탕색_클래스들.length; i++) {
        검색결과바탕색_클래스들[i].outerHTML=검색결과바탕색_클래스들[i].innerHTML;
      }
    }
  }
  if (1 == 1) {
    if (e.target.innerHTML=='초기화') {
      console.log('(e.target.innerHTML==초기화')
      선택한캔버스_카테고리작성및_초기작업();
    }
    if (e.target.innerHTML=='모든제목보기') {
      console.log('모든제목보기')
      //34개까지는 17개가 초과하면 왼쪽17개 나머지 오른쪽
      //34개이상일때 나누기2 왼쪽오른쪽
      셑팅_선택한캔버스바디.innerHTML = '';
      //'#' + 선택한캔버스id + ' .개별카테고리 > div > h6 : 제목의 구조적 위치
      var 검색할위치제목들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none .개별카테고리 > div > h6');//코딩등메모장text파일, canvas_div
      var 개수 = 검색할위치제목들.length;
      var 왼쪽내부html = '';
      var 오른쪽내부html = '';

      if (개수 <= 17) {
        console.log('개수 <= 17 조건 진행');
        for (var i = 0; i < 검색할위치제목들.length; i++) {
          // console.log(검색할버튼클래스들[i].outerHTML);
          왼쪽내부html += 검색할위치제목들[i].outerHTML;
        }
        왼쪽내부html = '<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;">' + 왼쪽내부html + '</div>'
        오른쪽내부html = '<div class="js모든파일리스트div"></div>'
        셑팅_선택한캔버스바디.innerHTML = 왼쪽내부html + 오른쪽내부html;
      }

      var 왼쪽내부html = '';
      var 오른쪽내부html = '';
      if (개수 >= 18 && 개수 <= 34) {
        console.log('개수 >= 18 && 개수 <= 34 조건 진행');
        for (var i = 0; i < 17; i++) {
          왼쪽내부html += 검색할위치제목들[i].outerHTML;
        }
        for (var i = 17; i < 개수; i++) {
          오른쪽내부html += 검색할위치제목들[i].outerHTML;
        }
        왼쪽내부html = '<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;">' + 왼쪽내부html + '</div>'
        오른쪽내부html = '<div class="js모든파일리스트div"">' + 오른쪽내부html + '</div>'
        셑팅_선택한캔버스바디.innerHTML = 왼쪽내부html + 오른쪽내부html;
      }

      var 왼쪽내부html = '';
      var 오른쪽내부html = '';
      if (개수 > 34) {
        console.log('개수 > 34 조건 진행');
        for (var i = 0; i < 개수; i++) {
          if (i < (개수 / 2)) {
            왼쪽내부html += 검색할위치제목들[i].outerHTML;
          } else {
            오른쪽내부html += 검색할위치제목들[i].outerHTML;
          }
        }
        왼쪽내부html = '<div class="js모든파일리스트div" style="border-right:1px solid;margin-right:10px;">' + 왼쪽내부html + '</div>'
        오른쪽내부html = '<div class="js모든파일리스트div"">' + 오른쪽내부html + '</div>'
        셑팅_선택한캔버스바디.innerHTML = 왼쪽내부html + 오른쪽내부html;
      }
    }
    if (e.target.innerHTML=='모든카테고리') {
      //최종적으로 세로 두줄이 되도록 한다. 17줄
      셑팅_선택한캔버스바디.innerHTML = '';
      var 검색할버튼클래스들 = document.querySelectorAll('#' + 선택한캔버스id + ' .카테고리실행');
      var 내부html = '';
      for (var i = 0; i < 검색할버튼클래스들.length; i++) {
        내부html += 검색할버튼클래스들[i].outerHTML;
      }
      셑팅_선택한캔버스바디.innerHTML = 내부html;
    }
    if (e.target.classList.contains('캔버스바디_카테고리숨김')) {
      console.log('e.target.classList.contains(캔버스바디_카테고리숨김')
      //class="카테고리실행". 
      var 숨김수 = 0;
      var 검색할버튼클래스들 = document.querySelectorAll('.카테고리실행');
      for (var i = 0; i < 검색할버튼클래스들.length; i++) {
        //5개씩 d-none 클래스추가
        if (!검색할버튼클래스들[i].classList.contains('d-none')) {
          if (숨김수 < 5) { 검색할버튼클래스들[i].classList.add('d-none'); 숨김수 += 1; }
        }
      }
    }
    if (e.target.classList.contains('캔버스바디_카테고리숨김해제')) {
      console.log('e.target.classList.contains(캔버스바디_카테고리숨김해제')
      //class="카테고리실행". 
      var 검색할버튼클래스들 = document.querySelectorAll('.카테고리실행');
      var none수 = 0;
      for (var i = 0; i < 검색할버튼클래스들.length; i++) {
        if (검색할버튼클래스들[i].classList.contains('d-none')) { none수 += 1; }
      }
      if (none수 > 0) {
        for (var i = none수 - 5; i < none수; i++) {
          if (i > -1) { 검색할버튼클래스들[i].classList.remove('d-none') }
        }
      }
    }

  }
}

function 원본_선택한캔버스_검색input_change시(e) {
  console.log('캔버스_검색value_change시');
  //추가 : 검색결과바탕색 클래스 TEXT만 남기기
  var 검색결과바탕색_클래스들 = document.querySelectorAll('.검색결과바탕색');
  for (var i=0; i<검색결과바탕색_클래스들.length; i++) {
    검색결과바탕색_클래스들[i].outerHTML=검색결과바탕색_클래스들[i].innerHTML;
  }
  //innerHTML로 검색한다. 메모도 검색해야하니까. 처음에만 두번표시한다?
  var 검색할문자 = document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value.toUpperCase(); 
  if (document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value == '') { return; }

  var 찾는값=document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value; 
  var 정규식내부= new RegExp('(?![^<]*>)' + 찾는값, 'ig')

  //예전코드 대비 추가 1 : id(공백도 있으니 유의) 요소의 innerHTML에 검색문자 있을때 id 를 배열에 담기.
  var 검색결과포함id배열=[];
  // 해당 캔버스관련만 : var 검색할클래스들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none > [id]');
  var 검색할클래스들 = document.querySelectorAll('.모든검색 > [id]');
  console.log(선택한캔버스id + ', id있는것개수 : ' + 검색할클래스들.length)  
  for (var i = 0; i < 검색할클래스들.length; i++) {
  //예전코드 대비 추가 2 : if 조건 조정, 검색할클래스들의 title이 검색결과포함id배열 에 있으면 추가하는 코드는 먼저 진행하도록 한다  

    //if (검색할클래스들[i].id!='' && 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
    console.log('검색할클래스들[i].id : ' + 검색할클래스들[i].id)
    console.log('찾는값 : "' + 찾는값 + '", 존재여부')


    if (검색할클래스들[i].id!='' && 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      검색결과포함id배열.push(검색할클래스들[i].id);
      if (검색할문자!=' ') {
        검색할클래스들[i].innerHTML=
        검색할클래스들[i].innerHTML.replace(정규식내부, '<span class="검색결과바탕색">' + 찾는값 + '</span>');
      }
    }
  }
  //예전코드 대비 추가 1 끝

  // 해당 캔버스관련만 : var 검색할클래스들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none .개별카테고리 > div > h6');
  var 검색할클래스들 = document.querySelectorAll('.모든검색 .개별카테고리 > div > h6');
  var 내부html = '';
  for (var i = 0; i < 검색할클래스들.length; i++) {
  //예전코드 대비 추가 2 : if 조건 조정, 검색할클래스들의 title이 검색결과포함id배열 에 있으면 추가하는 코드는 먼저 진행하도록 한다  
    if (검색결과포함id배열.includes(검색할클래스들[i].title) || 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      if (검색할문자!=' ') {
        검색할클래스들[i].innerHTML=검색할클래스들[i].innerHTML.replace(정규식내부, '<span class="검색결과바탕색">' + 찾는값 + '</span>');
      }
      내부html += 검색할클래스들[i].outerHTML;
      //제목부분과, 해당아이디 div가 있으면 그 내부의 모든 검색문자에 바탕색
    }  
  }
  if (내부html == '') { alert('없음'); return; }
  document.querySelector('#' + 선택한캔버스id + ' .캔버스바디').innerHTML = 내부html;
  document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value = 검색할문자;
}

function 선택한캔버스_검색input_change시(e) {
  console.log('캔버스_검색value_change시');
  //추가 : 검색결과바탕색 클래스 TEXT만 남기기
  var 검색결과바탕색_클래스들 = document.querySelectorAll('.검색결과바탕색');
  for (var i=0; i<검색결과바탕색_클래스들.length; i++) {
    검색결과바탕색_클래스들[i].outerHTML=검색결과바탕색_클래스들[i].innerHTML;
  }
  //innerHTML로 검색한다. 메모도 검색해야하니까. 처음에만 두번표시한다?
  var 검색할문자 = document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value.toUpperCase(); 
  if (document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value == '') { return; }

  var 찾는값=document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value; 
  var 정규식내부= new RegExp('(?![^<]*>)' + 찾는값, 'ig')

  //예전코드 대비 추가 1 : id(공백도 있으니 유의) 요소의 innerHTML에 검색문자 있을때 id 를 배열에 담기.
  var 검색결과포함id배열=[];
  // 해당 캔버스관련만 : var 검색할클래스들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none > [id]');

  //id의 innerHTML에 찾는값 있을때 '아이디추출', 내부 값 색칠

  //var 검색할클래스들 = document.querySelectorAll('.모든검색 > [id]');
  var 검색할클래스들 = document.querySelectorAll('[id]'); //전체대체꺼 색칠위해

  console.log(선택한캔버스id + ', id있는것개수 : ' + 검색할클래스들.length)  
  for (var i = 0; i < 검색할클래스들.length; i++) {
    if (검색할클래스들[i].id!='' && 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      검색결과포함id배열.push(검색할클래스들[i].id);
      if (검색할문자!=' ') {
        검색할클래스들[i].innerHTML=
        검색할클래스들[i].innerHTML.replace(정규식내부, '<span class="검색결과바탕색">' + 찾는값 + '</span>');
      }
    }
  }
  // title의 innerHTML에 찾는값 있을때 타이틀을 '검색결과포함id배열[]에 추가 내부 값 색칠
  var 검색할클래스들 = document.querySelectorAll('.모든검색 .개별카테고리 [title]');
  for (var i = 0; i < 검색할클래스들.length; i++) {
    if (검색할클래스들[i].title!='' && 검색할클래스들[i].innerHTML.toUpperCase().search(검색할문자) > -1) {
      검색결과포함id배열.push(검색할클래스들[i].title);
      if (검색할문자!=' ') {
        검색할클래스들[i].innerHTML=
        검색할클래스들[i].innerHTML.replace(정규식내부, '<span class="검색결과바탕색">' + 찾는값 + '</span>');
      }
    }
  }
  //검색결과포함id배열[] 고유값 추출 var uniqueArray = [...new Set(myArray)]
  검색결과포함id배열=[...new Set(검색결과포함id배열)];









  // 해당 캔버스관련만 : var 검색할클래스들 = document.querySelectorAll('#' + 선택한캔버스id + '_관련자료none .개별카테고리 > div > h6');
  var 검색할클래스들 = document.querySelectorAll('.모든검색 .개별카테고리 [title]');
  var 내부html = '';
  for (var i = 0; i < 검색할클래스들.length; i++) {
  //예전코드 대비 추가 2 : if 조건 조정, 검색할클래스들의 title이 검색결과포함id배열 에 있으면 추가하는 코드는 먼저 진행하도록 한다  
    if (검색결과포함id배열.includes(검색할클래스들[i].title)) {
      내부html += 검색할클래스들[i].outerHTML;
    }  
  }
  if (내부html == '') { alert('없음'); return; }
  document.querySelector('#' + 선택한캔버스id + ' .캔버스바디').innerHTML = 내부html;
  document.querySelector('#' + 선택한캔버스id + ' .canvas검색input').value = 검색할문자;
}

리스너_header.addEventListener('click', header_클릭시);
리스너_전체대체.addEventListener('click', 전체대체클릭시);
//리스너를 이것 저것으로 변경이 안됨??
리스너_보세_유니패스전체.addEventListener('click', 선택한캔버스클릭시);
리스너_보세_유니패스전체.addEventListener('change', 선택한캔버스_검색input_change시);
리스너_수품원전체.addEventListener('click', 선택한캔버스클릭시);
리스너_수품원전체.addEventListener('change', 선택한캔버스_검색input_change시);
리스너_전달사항_공문_발행물전체.addEventListener('click', 선택한캔버스클릭시);
리스너_전달사항_공문_발행물전체.addEventListener('change', 선택한캔버스_검색input_change시);
리스너_기타전체.addEventListener('click', 선택한캔버스클릭시);
리스너_기타전체.addEventListener('change', 선택한캔버스_검색input_change시);
리스너_라벨등전체.addEventListener('click', 선택한캔버스클릭시);
리스너_라벨등전체.addEventListener('change', 선택한캔버스_검색input_change시);





