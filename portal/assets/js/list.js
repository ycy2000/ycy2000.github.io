//가로 한줄씩 : var 줄바꿈정보=문자열.split('\n');, 한줄안의 셀들 :줄바꿈한줄정보=줄바꿈정보[i].split('\t');
function 풀기_리스트() {
  console.log('풀기_리스트()')
  document.querySelector('#풀기셑팅').classList.remove('d-none');
  document.querySelector('#PNG셑팅').classList.add('d-none');

    var 문자열=document.querySelector('#풀기_리스트_왼쪽').innerHTML;
    var 줄바꿈정보=문자열.split('\n'); //\n=줄바꿈 (가로10칸이 하나의 정보)
    var 줄바꿈한줄정보;
    var 한줄결과문자열='';
    var 왼쪽결과합치기문자열='';
    if (문자열=='') {return;}
    for (var i=0; i<줄바꿈정보.length-1; i++) {
      한줄결과문자열='';
      줄바꿈한줄정보=줄바꿈정보[i].split('\t'); //\t=셀당1개정보
      for (var 내부=0; 내부<줄바꿈한줄정보.length; 내부++) {
        if (내부==0 && i==0) {한줄결과문자열+='<div></div>';}
        if (내부==0 && i>0) {한줄결과문자열+='<div>' + i + '</div>';}
        한줄결과문자열+='<div>' + 줄바꿈한줄정보[내부] + '</div>';
      }
      한줄결과문자열='<div>' + 한줄결과문자열 + '</div>';
      왼쪽결과합치기문자열=왼쪽결과합치기문자열 + 한줄결과문자열;
    }
    왼쪽결과합치기문자열='<div id="js_리스트_왼쪽">' + 왼쪽결과합치기문자열 + '</div>'; //inline-block 설정을 위한 div 감싸기

    var 문자열=document.querySelector('#풀기_리스트_정리').innerHTML;
    var 줄바꿈정보=문자열.split('\n'); //정리
    var 줄바꿈한줄정보;
    var 한줄결과문자열='';
    var 정리결과합치기문자열='';
    if (문자열=='') {return;}
    for (var i=0; i<줄바꿈정보.length-1; i++) {
      한줄결과문자열='';
      줄바꿈한줄정보=줄바꿈정보[i].split('\t'); //\t=셀당1개정보
      for (var 내부=0; 내부<줄바꿈한줄정보.length; 내부++) {
        한줄결과문자열+='<div>' + 줄바꿈한줄정보[내부] + '</div>';
      }
      한줄결과문자열='<div>' + 한줄결과문자열 + '</div>';
      정리결과합치기문자열=정리결과합치기문자열 + 한줄결과문자열;
    }
    정리결과합치기문자열='<div id="js_리스트_정리">' + 정리결과합치기문자열 + '</div>'; //inline-block 설정을 위한 div 감싸기

    document.querySelector('#풀기셑팅').innerHTML=왼쪽결과합치기문자열 + 정리결과합치기문자열;
}

//시작시 작동코드
document.querySelector('#풀기셑팅').classList.add('d-none');
document.querySelector('#PNG셑팅').classList.remove('d-none');
document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_예정.png" alt="이미지없음">';

var 리스너_head_button_group=document.querySelector('#head_button_group');
function 리스너_head_button_group클릭이벤트(e) {
  for (var i=0; i<document.querySelectorAll('.카테고리').length; i++) {
    document.querySelectorAll('.카테고리')[i].classList.remove('active');
  }
  if(e.target.classList.contains('카테고리')) {e.target.classList.add('active')}

  if (e.target.innerHTML=='리스트') {
    console.log('PNG_리스트_셑팅')
    document.querySelector('#풀기셑팅').classList.add('d-none');
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_리스트.png" alt="이미지없음">';
  }
  if (e.target.innerHTML=='예정') {
    console.log('PNG_예정_셑팅')
    document.querySelector('#풀기셑팅').classList.add('d-none');
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_예정.png" alt="이미지없음">';
  }
  if (e.target.innerHTML=='완료') {
    console.log('PNG_완료_셑팅')
    document.querySelector('#풀기셑팅').classList.add('d-none');
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_완료.png" alt="이미지없음">';
  }
  if (e.target.innerHTML=='면허,운송') {
    console.log('PNG_면허운송_셑팅')
    document.querySelector('#풀기셑팅').classList.add('d-none');
    document.querySelector('#PNG셑팅').classList.remove('d-none');
    document.querySelector('#PNG셑팅').innerHTML='<img src="portal/images/문서연결_리스트/PNG_면허운송.png" alt="이미지없음">';
  }
}
function 리스너_head_button_group더블클릭이벤트(e) {
  console.log('더블클릭:클릭 실행후 더블클릭 실행됨')
  if (e.target.innerHTML=='리스트') {
    풀기_리스트();
  }
}

리스너_head_button_group.addEventListener('click', 리스너_head_button_group클릭이벤트);
리스너_head_button_group.addEventListener('dblclick', 리스너_head_button_group더블클릭이벤트);

