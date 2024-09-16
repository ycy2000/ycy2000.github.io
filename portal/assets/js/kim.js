function 전세계약시주의사항() {
    document.querySelector('#메모').classList.remove('d-none');
}


var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
var 회차select안옵션html;
var 회차개수=Number(당번전체.length/9);
for (var i=0; i<회차개수; i++) {
  if (i==0) {
    회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>'
  } else {
    회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>' + 회차select안옵션html
  }
}
document.querySelector('#span_날짜').innerHTML=당번전체[당번전체.length-8]; //날짜

for (var i=0; i<7; i++) {
  document.querySelectorAll('#span_날짜 ~ button')[i+1].innerHTML=당번전체[당번전체.length-7+i]; //날짜
}
document.querySelector('#회차select').innerHTML=회차select안옵션html; //<option>회차</option>


//위, 최근회차 설정 

  var 미출수전체='';
  var 미출수오주='';
  var 미출수십주='';
  var 미출수십오주='';
  var 미출수오주btn='';
  var 미출수십주btn='';
  var 미출수십오주btn='';
// 15주번호들을 담고 7*10=70개를 0으로 대체하면 5주번호들, 35개를 0으로 대체하면 10주번호들, 대체하지 않으면 15주번호들
  var 오주번호들=[];
  var 십주번호들=[];
  var 십오주번호들=[];
  //새로고침시 십오주번호들 : 
  var 시작배열값=(회차개수-15)*9; //회차,날짜,숫자7개 : 15전
  var 순번확인=0;

  for (var i=시작배열값; i<당번전체.length;i++ ) {
    순번확인=순번확인+1;
    if (순번확인>2) {
      십오주번호들.push(당번전체[i]);
    }
    if (순번확인==9) {순번확인=0;}
  }

  for (i=0; i<십오주번호들.length; i++) {
    if (i<70) {
      오주번호들.push(0);
    } else {
      오주번호들.push(십오주번호들[i]);
    } 
    if (i<35) {
      십주번호들.push(0);
    } else {
      십주번호들.push(십오주번호들[i]);
    } 
  }

  var 오주미출수=[];
  //오주미출수를 담는다
  for (i=0; i<45; i++) {
    if (오주번호들.filter(element => (i+1).toString() === element).length==0) {오주미출수.push(i+1);}
   }
//오주미출수를 담았다. 숫자 제대로 정렬하기 위함.  오주미출수.sort(); 는 문자열로 인식하여 정렬됨
  오주미출수.sort((a,t) => a-t);

  for (i=0; i<오주미출수.length; i++) {
    if (i==0) {
      미출수오주btn='<button>' + 오주미출수[i] + '</button>';
      if (!십주번호들.includes(오주미출수[i].toString())) {
        미출수십주btn='<button>' + 오주미출수[i] + '</button>';
      } else {
        미출수십주btn='<button>' + '</button>';
      }
      if (!십오주번호들.includes(오주미출수[i].toString())) {
        미출수십오주btn='<button>' + 오주미출수[i] + '</button>';
      } else {
        미출수십오주btn='<button>' + '</button>';
      }
    }//


    if (i!==0) {
      미출수오주btn+='<button>' + 오주미출수[i] + '</button>';
      if (!십주번호들.includes(오주미출수[i].toString())) {
        미출수십주btn+='<button>' + 오주미출수[i] + '</button>';
      } else {
        미출수십주btn+='<button>' + '</button>';
      }
      if (!십오주번호들.includes(오주미출수[i].toString())) {
        미출수십오주btn+='<button>' + 오주미출수[i] + '</button>';
      } else {
        미출수십오주btn+='<button>' + '</button>';
      }
    }
  }

  // alert(오주번호들 + ' 2개수' + 오주번호들.filter(ele => ele == 2).length);

    // 영사사플러스일개수[i]=숫자담기배열.filter(ele => ele == i+1).length;
    // uniqueChars.sort(); 오주미출수.sort((a,t) => a-t); 숫자정렬

  미출수오주='<div><div>5주간</div>' + 미출수오주btn + '</div>';
  미출수십주='<div><div>10주간</div>' + 미출수십주btn + '</div>';
  미출수십오주='<div class="십오주미출수"><div>15주간</div>' + 미출수십오주btn + '</div>';

  미출수전체= 미출수오주 + 미출수십주 + 미출수십오주;

  document.querySelector('#최근미출수와출수').innerHTML=미출수전체;

//새로고침시 회귀부분
var 회귀번호들=[];
//새로고침시 십오주번호들 : 
시작배열값=(회차개수-5)*9; //회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
  if (i==0) {
    회귀번호들.push(5);
    회귀번호들.push(당번전체[시작배열값+i]);
  } else {
    회귀번호들.push(당번전체[시작배열값+i]);
  }
}
시작배열값=(회차개수-10)*9; //회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
  if (i==0) {
    회귀번호들.push(10);
    회귀번호들.push(당번전체[시작배열값+i]);
  } else {
    회귀번호들.push(당번전체[시작배열값+i]);
  }
}
시작배열값=(회차개수-15)*9; //회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
  if (i==0) {
    회귀번호들.push(15);
    회귀번호들.push(당번전체[시작배열값+i]);
  } else {
    회귀번호들.push(당번전체[시작배열값+i]);
  }
}
시작배열값=(회차개수-30)*9; //회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
  if (i==0) {
    회귀번호들.push(30);
    회귀번호들.push(당번전체[시작배열값+i]);
  } else {
    회귀번호들.push(당번전체[시작배열값+i]);
  }
}
시작배열값=(회차개수-60)*9; //회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
  if (i==0) {
    회귀번호들.push(60);
    회귀번호들.push(당번전체[시작배열값+i]);
  } else {
    회귀번호들.push(당번전체[시작배열값+i]);
  }
}

//육십주번호들에서
//육십주번호들에서
var 선택회차다음번호=''; //있을때
var 회귀전체='';
var 각회귀누적='';
var 회귀제목='';
var 회귀btn='';
var 다음btn='';



  //새로고침시 회귀와 미출수부분 코드와 유사; 단독 : 최근회차가아닐때 설정된회차 다음회차 당번넣기
  시작배열값=(회차개수 - 1)*9;
  for (var i=0; i<9; i++) {
    if (i==0) {
      //회귀번호
      다음btn='<button>다음</button>';
      다음btn+='<button>' + Number(parseInt(당번전체[시작배열값+i])+1) + '회</button>';
    } else if (i==1) {
      다음btn+='<button>_</button>';//날짜
    } else {
      //숫자부분
      다음btn+='<button>_</button>';
    }
  }
  선택회차다음번호='<div>' + 다음btn + '</div>';

  회귀제목='<div></div><div><span>회귀</span><span>회차</span><span>날짜</span><span>1st</span><span>2st</span><span>3st</span><span>4st</span><span>5st</span><span>6st</span><span>B</span></div>'

  for (var i=0; i<회귀번호들.length; i++) {
    //i=9, i=19, i=29, i=39, i=49 일때 각회귀 완성 + 회귀전체 완성
    //각회귀 <div><button></button>열개 </div>
    if (i==0 || i==10 || i==20 || i==30 || i==40) {
      //회귀번호
      회귀btn='<button>' + 회귀번호들[i] + '회귀</button>'; 

    } else if (i==1 || i==11 || i==21 || i==31 || i==41) {
      //회차
      회귀btn+='<button>' + 회귀번호들[i] + '회</button>'; 

    } else if (i==2 || i==12 || i==22 || i==32 || i==42) {
      회귀btn+='<button class="span_날짜">' + 회귀번호들[i] + '</button>';//날짜
    } else {
          //숫자부분
      회귀btn+='<button>' + 회귀번호들[i] + '</button>'; 
    }
    if (i==9 || i==19 || i==29 || i==39 || i==49) {
      if (i==9) {각회귀누적='<div>' + 회귀btn + '</div>'}
      if (i!==9) {각회귀누적=각회귀누적 + '<div>' + 회귀btn + '</div>'}
    }
  }
  회귀전체=회귀제목 + 각회귀누적;
  document.querySelector('#id_번호입력아래당첨번호숨김').innerHTML=회귀전체;


  // 100회귀 고정이었는데 선택할수 있는 버튼 추가
var 회귀선택버튼div;
회귀선택버튼div='<div style="margin-top:5px;"><input id="회귀수입력" type = "text" spellcheck="false" style="width:50px;vertical-align:bottom;text-align:center;" value=100>'
+ '<button style="width:70px;height:30px;" onclick="신규회귀변경()">회귀변경</button>'
+ '<button style="width:50px;height:30px;background-color: green;" onclick="신규회귀변경3회귀()">5회귀</button>'
+ '<button style="width:75px;height:30px;background-color: green;" onclick="신규회귀변경100회귀()">100회귀</button></div>'
// 100회귀 고정이었는데 선택할수 있는 버튼 추가>>
  //INDEX 전용 100회귀, 작업중
  var 백회귀개수=10;//표시되는 수
  var 신규회귀값=100;//회귀값 100고정이었다가 ...
  i=1;
  // while ((회차개수+1-(100*i))>0) {
  //   백회귀개수=백회귀개수+1;
  //   i=i+1;
  // }

  var 백회귀번호들=[];
  for (i=0; i<백회귀개수; i++) {
    시작배열값=(회차개수 - (신규회귀값 * (i+1)))*9;
    for (var t=0; t<9; t++) {
      백회귀번호들.push(당번전체[시작배열값+t]);
    }
    // if (i==0) {alert('회차개수 : ' + 회차개수 + ' 백회귀번호들 : ' + 백회귀번호들)}
  }
  
    var 백회귀전체='';
    var 각백회귀누적='';
    var 백회귀제목='';
    var 백회귀btn='';
    var 백누적=0;
    백회귀제목=회귀선택버튼div + '<div></div><div><span>회귀</span><span>회차</span><span>날짜</span><span>1st</span><span>2st</span><span>3st</span><span>4st</span><span>5st</span><span>6st</span><span>B</span></div>'
  
    for (var i=0; i<백회귀번호들.length; i++) {
      if ((i % 9)==0) {
        백누적=Number(백누적+신규회귀값);
        백회귀btn='<button>' + 백누적 + '</button>'; 
        백회귀btn+='<button>' + 백회귀번호들[i] + '회</button>'; 
      } else if ((i % 9)==1) {
        백회귀btn+='<button class="span_날짜">' + 백회귀번호들[i] + '</button>';//날짜
      } else {
        //숫자부분
        백회귀btn+='<button>' + 백회귀번호들[i] + '</button>'; 
      }
  
      if ((i % 9)==8) {
        if (i==8) {각백회귀누적='<div>' + 백회귀btn + '</div>'}
        if (i!==8) {각백회귀누적=각백회귀누적 + '<div>' + 백회귀btn + '</div>'}
      }
    }
    백회귀전체='<div id="js백회귀전체">' + 백회귀제목 + 각백회귀누적 + '</div>';
    document.querySelector('#id_번호입력아래당첨번호숨김').innerHTML=선택회차다음번호 + document.querySelector('#id_번호입력아래당첨번호숨김').innerHTML+백회귀전체;

var 전체변수selectdindex=document.querySelector('#회차select').selectedIndex;
function 신규회귀변경3회귀() {
  전체변수selectdindex=document.querySelector('#회차select').selectedIndex;
  document.querySelector('#회귀수입력').value=5;
  신규회귀변경()
}
function 신규회귀변경100회귀() {
  전체변수selectdindex=document.querySelector('#회차select').selectedIndex;
  document.querySelector('#회귀수입력').value=100;
  신규회귀변경()
}

function 신규회귀변경() {
  전체변수selectdindex=document.querySelector('#회차select').selectedIndex;
  var 회귀수=document.querySelector('#회귀수입력').value;
  신규회귀값=Number(회귀수);

  var 백회귀번호들=[];
  for (i=0; i<백회귀개수; i++) {
    시작배열값=(회차개수 - 전체변수selectdindex - (신규회귀값 * (i+1)))*9;
    for (var t=0; t<9; t++) {
      백회귀번호들.push(당번전체[시작배열값+t]);
    }
    // if (i==0) {alert('회차개수 : ' + 회차개수 + ' 백회귀번호들 : ' + 백회귀번호들)}
  }
  
    var 백회귀전체='';
    var 각백회귀누적='';
    var 백회귀제목='';
    var 백회귀btn='';
    var 백누적=0;
    백회귀제목=회귀선택버튼div + '<div></div><div><span>회귀</span><span>회차</span><span>날짜</span><span>1st</span><span>2st</span><span>3st</span><span>4st</span><span>5st</span><span>6st</span><span>B</span></div>'
  
    for (var i=0; i<백회귀번호들.length; i++) {
      if ((i % 9)==0) {
        백누적=Number(백누적+신규회귀값);
        백회귀btn='<button>' + 백누적 + '</button>'; 
        백회귀btn+='<button>' + 백회귀번호들[i] + '회</button>'; 
      } else if ((i % 9)==1) {
        백회귀btn+='<button class="span_날짜">' + 백회귀번호들[i] + '</button>';//날짜
      } else {
        //숫자부분
        백회귀btn+='<button>' + 백회귀번호들[i] + '</button>'; 
      }
  
      if ((i % 9)==8) {
        if (i==8) {각백회귀누적='<div>' + 백회귀btn + '</div>'}
        if (i!==8) {각백회귀누적=각백회귀누적 + '<div>' + 백회귀btn + '</div>'}
      }
    }
    백회귀전체=백회귀제목 + 각백회귀누적;
    document.querySelector('#js백회귀전체').innerHTML=백회귀전체;
    document.querySelector('#회귀수입력').value=신규회귀값; //100으로 고정되어버리네 이거 안하면
}

//새로고침시 진행되는 코드 끝..

function 선택회차날짜와당번넣기() {

  var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
  var 회차개수=Number(당번전체.length/9);
  var selectedindex=document.querySelector('#회차select').selectedIndex;
  //selectedindex 마지막회차가 0 이다. 선택회차의 회차는 : 당번전체.length - 9 - 보정값
  var index에서빼기=0;
  var 시작배열값=(회차개수-selectedindex-1-index에서빼기)*9;
  document.querySelector('#span_날짜').innerHTML=당번전체[시작배열값+1]; //날짜
  for (var i=0; i<7; i++) {
    document.querySelectorAll('#span_날짜 ~ button')[i+1].innerHTML=당번전체[시작배열값+2+i]; //날짜
  }  
  //새로고침시 회귀와 미출수부분 코드와 유사; 
  


//위, 최근회차 설정 

var 미출수전체='';
var 미출수오주='';
var 미출수십주='';
var 미출수십오주='';
var 미출수오주btn='';
var 미출수십주btn='';
var 미출수십오주btn='';
// 15주번호들을 담고 7*10=70개를 0으로 대체하면 5주번호들, 35개를 0으로 대체하면 10주번호들, 대체하지 않으면 15주번호들
var 오주번호들=[];
var 십주번호들=[];
var 십오주번호들=[];
//새로고침시 십오주번호들 : 
index에서빼기=15;
시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
var 순번확인=0;

for (var i=시작배열값; i<Number(시작배열값+135);i++ ) {
  순번확인=순번확인+1;
  if (순번확인>2) {
    십오주번호들.push(당번전체[i]);
  }
  if (순번확인==9) {순번확인=0;}
}

for (i=0; i<십오주번호들.length; i++) {
  if (i<70) {
    오주번호들.push(0);
  } else {
    오주번호들.push(십오주번호들[i]);
  } 
  if (i<35) {
    십주번호들.push(0);
  } else {
    십주번호들.push(십오주번호들[i]);
  } 
}

var 오주미출수=[];
//오주미출수를 담는다
for (i=0; i<45; i++) {
  if (오주번호들.filter(element => (i+1).toString() === element).length==0) {오주미출수.push(i+1);}
 }
//오주미출수를 담았다. 숫자 제대로 정렬하기 위함.  오주미출수.sort(); 는 문자열로 인식하여 정렬됨
오주미출수.sort((a,t) => a-t);

for (i=0; i<오주미출수.length; i++) {
  if (i==0) {
    미출수오주btn='<button>' + 오주미출수[i] + '</button>';
    if (!십주번호들.includes(오주미출수[i].toString())) {
      미출수십주btn='<button>' + 오주미출수[i] + '</button>';
    } else {
      미출수십주btn='<button>' + '</button>';
    }
    if (!십오주번호들.includes(오주미출수[i].toString())) {
      미출수십오주btn='<button>' + 오주미출수[i] + '</button>';
    } else {
      미출수십오주btn='<button>' + '</button>';
    }
  }//


  if (i!==0) {
    미출수오주btn+='<button>' + 오주미출수[i] + '</button>';
    if (!십주번호들.includes(오주미출수[i].toString())) {
      미출수십주btn+='<button>' + 오주미출수[i] + '</button>';
    } else {
      미출수십주btn+='<button>' + '</button>';
    }
    if (!십오주번호들.includes(오주미출수[i].toString())) {
      미출수십오주btn+='<button>' + 오주미출수[i] + '</button>';
    } else {
      미출수십오주btn+='<button>' + '</button>';
    }
  }
}

// alert(오주번호들 + ' 2개수' + 오주번호들.filter(ele => ele == 2).length);

  // 영사사플러스일개수[i]=숫자담기배열.filter(ele => ele == i+1).length;
  // uniqueChars.sort(); 오주미출수.sort((a,t) => a-t); 숫자정렬

미출수오주='<div><div>5주간</div>' + 미출수오주btn + '</div>';
미출수십주='<div><div>10주간</div>' + 미출수십주btn + '</div>';
미출수십오주='<div class="십오주미출수"><div>15주간</div>' + 미출수십오주btn + '</div>';

미출수전체= 미출수오주 + 미출수십주 + 미출수십오주;

document.querySelector('#최근미출수와출수').innerHTML=미출수전체;

//새로고침시 회귀부분
var 회귀번호들=[];
//새로고침시 십오주번호들 : 
index에서빼기=5;
시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
if (i==0) {
  회귀번호들.push(5);
  회귀번호들.push(당번전체[시작배열값+i]);
} else {
  회귀번호들.push(당번전체[시작배열값+i]);
}
}
index에서빼기=10;
시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
if (i==0) {
  회귀번호들.push(10);
  회귀번호들.push(당번전체[시작배열값+i]);
} else {
  회귀번호들.push(당번전체[시작배열값+i]);
}
}
index에서빼기=15;
시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
if (i==0) {
  회귀번호들.push(15);
  회귀번호들.push(당번전체[시작배열값+i]);
} else {
  회귀번호들.push(당번전체[시작배열값+i]);
}
}
index에서빼기=30;
시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
if (i==0) {
  회귀번호들.push(30);
  회귀번호들.push(당번전체[시작배열값+i]);
} else {
  회귀번호들.push(당번전체[시작배열값+i]);
}
}
index에서빼기=60;
시작배열값=(회차개수-selectedindex-index에서빼기)*9;//회차,날짜,숫자7개 : 15전
for (var i=0; i<9;i++ ) {
if (i==0) {
  회귀번호들.push(60);
  회귀번호들.push(당번전체[시작배열값+i]);
} else {
  회귀번호들.push(당번전체[시작배열값+i]);
}
}

//육십주번호들에서
var 선택회차다음번호=''; //있을때
var 회귀전체='';
var 각회귀누적='';
var 회귀제목='';
var 회귀btn='';
var 다음btn='';



  //새로고침시 회귀와 미출수부분 코드와 유사; 단독 : 최근회차가아닐때 설정된회차 다음회차 당번넣기
var 신규회귀값=Number(document.querySelector('#회귀수입력').value);//지워지기전에
if (selectedindex!==0) {
  시작배열값=(회차개수 - selectedindex )*9;
  for (var i=0; i<9; i++) {
    if (i==0) {
      //회귀번호
      다음btn='<button>다음</button>';
      다음btn+='<button>' + 당번전체[시작배열값+i] + '회</button>';
    } else if (i==1) {
      다음btn+='<button>' + 당번전체[시작배열값+i] + '</button>';//날짜
    } else {
      //숫자부분
      다음btn+='<button>' + 당번전체[시작배열값+i] + '</button>';
    }
  }
  선택회차다음번호='<div>' + 다음btn + '</div>';

} else {
  시작배열값=(회차개수 - selectedindex-1 )*9;
  for (var i=0; i<9; i++) {
    if (i==0) {
      //회귀번호
      다음btn='<button>다음</button>';
      다음btn+='<button>' + Number(parseInt(당번전체[시작배열값+i])+1) + '회</button>';
    } else if (i==1) {
      if (selectedindex==0) {
        다음btn+='<button>_</button>';//날짜
      } else {
        다음btn+='<button>' + 당번전체[시작배열값+i] + '</button>';//날짜
      }
    } else {
      //숫자부분
      다음btn+='<button>_</button>';
    }
  }
  선택회차다음번호='<div>' + 다음btn + '</div>';
}

회귀제목='<div></div><div><span>회귀</span><span>회차</span><span>날짜</span><span>1st</span><span>2st</span><span>3st</span><span>4st</span><span>5st</span><span>6st</span><span>B</span></div>'

for (var i=0; i<회귀번호들.length; i++) {
  //i=9, i=19, i=29, i=39, i=49 일때 각회귀 완성 + 회귀전체 완성
  //각회귀 <div><button></button>열개 </div>
  if (i==0 || i==10 || i==20 || i==30 || i==40) {
    //회귀번호
    회귀btn='<button>' + 회귀번호들[i] + '회귀</button>'; 

  } else if (i==1 || i==11 || i==21 || i==31 || i==41) {
    //회차
    회귀btn+='<button>' + 회귀번호들[i] + '회</button>'; 

  } else if (i==2 || i==12 || i==22 || i==32 || i==42) {
    회귀btn+='<button>' + 회귀번호들[i] + '</button>';//날짜

  } else {
        //숫자부분
    회귀btn+='<button>' + 회귀번호들[i] + '</button>'; 
  }

  if (i==9 || i==19 || i==29 || i==39 || i==49) {
    if (i==9) {각회귀누적='<div>' + 회귀btn + '</div>'}
    if (i!==9) {각회귀누적=각회귀누적 + '<div>' + 회귀btn + '</div>'}
  }
}
회귀전체=회귀제목 + 각회귀누적;
document.querySelector('#id_번호입력아래당첨번호숨김').innerHTML=회귀전체;



  // 100회귀 고정이었는데 선택할수 있는 버튼 추가
  var 회귀선택버튼div;
  회귀선택버튼div='<div style="margin-top:5px;"><input id="회귀수입력" type = "text" spellcheck="false" style="width:50px;vertical-align:bottom;text-align:center;" value=100>'
  + '<button style="width:70px;height:30px;" onclick="신규회귀변경()">회귀변경</button>'
  + '<button style="width:50px;height:30px;background-color: green;" onclick="신규회귀변경3회귀()">5회귀</button>'
  + '<button style="width:75px;height:30px;background-color: green;" onclick="신규회귀변경100회귀()">100회귀</button></div>'
  // 100회귀 고정이었는데 선택할수 있는 버튼 추가>>
    //INDEX 전용 100회귀, 작업중
    var 백회귀개수=10;//표시되는 수
    // var 신규회귀값=100;  지워지기전에 위부분에
    i=1;
    // while ((회차개수+1-(100*i))>0) {
    //   백회귀개수=백회귀개수+1;
    //   i=i+1;
    // }
  
    var 백회귀번호들=[];
     console.log('시작배열값 : ' + 시작배열값)
    for (i=0; i<백회귀개수; i++) {
      시작배열값=(회차개수 - selectedindex - (신규회귀값 * (i+1)))*9;
      for (var t=0; t<9; t++) {
        백회귀번호들.push(당번전체[시작배열값+t]);
      }
      // if (i==0) {alert('회차개수 : ' + 회차개수 + ' 백회귀번호들 : ' + 백회귀번호들)}
    }
    
      var 백회귀전체='';
      var 각백회귀누적='';
      var 백회귀제목='';
      var 백회귀btn='';
      var 백누적=0;
      백회귀제목=회귀선택버튼div + '<div></div><div><span>회귀</span><span>회차</span><span>날짜</span><span>1st</span><span>2st</span><span>3st</span><span>4st</span><span>5st</span><span>6st</span><span>B</span></div>'
    
      for (var i=0; i<백회귀번호들.length; i++) {
        if ((i % 9)==0) {
          백누적=Number(백누적+신규회귀값);
          백회귀btn='<button>' + 백누적 + '</button>'; 
          백회귀btn+='<button>' + 백회귀번호들[i] + '회</button>'; 
        } else if ((i % 9)==1) {
          백회귀btn+='<button class="span_날짜">' + 백회귀번호들[i] + '</button>';//날짜
        } else {
          //숫자부분
          백회귀btn+='<button>' + 백회귀번호들[i] + '</button>'; 
        }
    
        if ((i % 9)==8) {
          if (i==8) {각백회귀누적='<div>' + 백회귀btn + '</div>'}
          if (i!==8) {각백회귀누적=각백회귀누적 + '<div>' + 백회귀btn + '</div>'}
        }
      }
      백회귀전체='<div id="js백회귀전체">' + 백회귀제목 + 각백회귀누적 + '</div>';
      document.querySelector('#id_번호입력아래당첨번호숨김').innerHTML=선택회차다음번호 + document.querySelector('#id_번호입력아래당첨번호숨김').innerHTML+백회귀전체;
      document.querySelector('#회귀수입력').value=신규회귀값;
}



function 최근미출수와출수_viewHide() {
  var 최근미출수와출수보기숨기기=	document.querySelector('#최근미출수와출수');
  
  //button은 세관용, li_a는 my용
  if(최근미출수와출수보기숨기기.classList.contains('none_js')){ 		
    최근미출수와출수보기숨기기.classList.remove('none_js');
    document.querySelector('#미출수와출수보기숨기기').innerText='미출수숨기기';
  }else{ 		
    최근미출수와출수보기숨기기.classList.add('none_js');
    document.querySelector('#미출수와출수보기숨기기').innerText='미출수보이기';
  } 
}

function 자동번호나온횟수지우기() {
  document.querySelector('.자동번호나온횟수').innerHTML='<div>자동번호 나온횟수</div>';
}
function 자동번호나온횟수() {
  //#id_번호입력 > div > div
  var id_번호입력_div개수=document.querySelectorAll('#id_번호입력 > div > div');
  var 숫자담기배열=[];
  var 숫자있을때증가=0;
  
  //번호담기 : 공백도 담아보자
  for (var i=0; i<id_번호입력_div개수.length; i++) {
          숫자담기배열.push(id_번호입력_div개수[숫자있을때증가].innerText);
      숫자있을때증가=숫자있을때증가+1;

    // if (id_번호입력_div개수[i].innerText.length!==0) {
    //   숫자담기배열.push(id_번호입력_div개수[숫자있을때증가].innerText);
    //   숫자있을때증가=숫자있을때증가+1;
    // } 이거는 빈란만큼 카운팅이 빠지더라... 공백이 담겨도 공백을 계산하지 않는다??
  }

  var 영사사플러스일개수=[];
  //0을 담는다. 안담길때 0이므로??
  for (i=0; i<45; i++) {영사사플러스일개수[i]=0;}
  //번호별 나온 횟수 담는다.
  for (i=0; i<45; i++) {
    영사사플러스일개수[i]=숫자담기배열.filter(ele => ele == Number(i+1)).length;
  }
   //고유값 추출 오주미출수.sort((a,t) => a-t);
  let uniqueChars = [];
  영사사플러스일개수.forEach((c) => {
      if (!uniqueChars.includes(c)) {
          uniqueChars.push(c);
      }
  });
  //정렬
  uniqueChars.sort((a,q) => a-q);
  //일단 횟수 나열
  var 자동번호나온횟수div=document.querySelector('.자동번호나온횟수');

  if(document.querySelector('#id_번호입력').classList.contains('none_js')){ 		
    document.querySelector('#id_번호입력').classList.remove('none_js');
    document.querySelector('#자동번호나온횟수보기숨기기').innerText='자동횟수보이기';
  } //보이게하기
  if(document.querySelector('#id_번호입력아래당첨번호숨김').classList.contains('none_js')){ 		
    document.querySelector('#id_번호입력아래당첨번호숨김').classList.remove('none_js');
    document.querySelector('#회귀번호보기숨기기').innerText='회귀번호숨기기';
  } //보이게하기


  var 추가할요소='';
  var 추가할번호들='';
  for (i=0; i<uniqueChars.length; i++) {
    추가할번호들='';
    if (i==0) {추가할요소='<div><div>' + uniqueChars[i] + ' 회</div>'};
    if (i!==0) {추가할요소+='<div><div>' + uniqueChars[i] + ' 회</div>'};
    //횟수에 해당하는 번호를 넣어야함. 추가할요소+=번호들
    for (var t=0; t<영사사플러스일개수.length; t++) {


      if (영사사플러스일개수[t]==uniqueChars[i]) {
        if (t==0) {추가할번호들='<button>' + (t+1) + '</button>'};
        if (t!==0) {추가할번호들+='<button>' + (t+1) + '</button>'};
      }
    }
    추가할번호들=추가할번호들 + '</div>';
    // 추가할요소+=추가할번호들;
    추가할요소+=추가할번호들;
  }
  자동번호나온횟수div.innerHTML='<div>자동번호 나온횟수</div>' + 추가할요소;
}
function 입력번호와회귀번호숨기기() {
  var 입력번호보기숨기기=	document.querySelector('#id_번호입력');
  var 회귀번호보기숨기기=	document.querySelector('#id_번호입력아래당첨번호숨김');
  if(!입력번호보기숨기기.classList.contains('none_js')){ 		
    입력번호보기숨기기.classList.add('none_js');
    document.querySelector('#입력번호보기숨기기').innerText='입력번호보이기';
  }
  if(!회귀번호보기숨기기.classList.contains('none_js')){ 		
    회귀번호보기숨기기.classList.add('none_js');
    document.querySelector('#회귀번호보기숨기기').innerText='회귀번호보이기';
  }
}
function 입력번호와회귀번호보이기() {
  var 입력번호보기숨기기=	document.querySelector('#id_번호입력');
  var 회귀번호보기숨기기=	document.querySelector('#id_번호입력아래당첨번호숨김');
  if(입력번호보기숨기기.classList.contains('none_js')){ 		
    입력번호보기숨기기.classList.remove('none_js');
    document.querySelector('#입력번호보기숨기기').innerText='입력번호숨기기';
  }
  if(회귀번호보기숨기기.classList.contains('none_js')){ 		
    회귀번호보기숨기기.classList.remove('none_js');
    document.querySelector('#회귀번호보기숨기기').innerText='회귀번호숨기기';
  }
}


function 숫자() {
  // var 클릭수=document.querySelector('#클릭수').innerHTML;
  var 클릭수=Number('1');
  alert(클릭수);
}


var 입력된번호들=document.querySelector('#id_번호입력');
var 선긋기번호들=document.querySelector('#id_번호입력');
function 번호하나삭제(e) {
  if (e.target.classList.contains('삭제')) {
    var 삭제할요소=e.target.parentNode;
    삭제할요소.innerHTML='';
  }
}
function 번호지움() {
  document.querySelector('#id_번호입력').innerHTML='<div></div>';
  document.querySelector('#canvas').classList.add('d-none');
  var 버튼들=document.querySelectorAll('.모달바디왼쪽45 button');
  for (var i=0; i<버튼들.length; i++) {
    if (버튼들[i].classList.contains('bg-primary')) {
      버튼들[i].classList.remove('bg-primary');
    }
  }
  document.querySelector('#클릭수').innerHTML=0;
}
function 선긋기(e) {
  var canvas = document.querySelector('#canvas');
  var 선긋기요소=e.target.parentNode; //div안에 div 6개 안에 숫자있음
  //선긋기표시 있는거 클릭시 초기화, 
  if (선긋기요소.classList.contains('선긋기표시')) {
    console.log('선긋기(e) 선긋기표시 클래스 있는거 다시 클릭시')
    선긋기요소.classList.remove('선긋기표시');
    canvas.classList.add('d-none');
      //번호45색칠 초기화
    var 버튼들=document.querySelectorAll('.모달바디왼쪽45 button');
    for (var i=0; i<버튼들.length; i++) {
      if (버튼들[i].classList.contains('bg-primary')) {
        버튼들[i].classList.remove('bg-primary');
      }
    }
    document.querySelector('#클릭수').innerHTML=0;
    return; // 이 동작만 여깃 중단
  } else if (document.querySelectorAll('.선긋기표시').length==1) {
    console.log('선긋기(e) 선긋기표시 클래스 있을때')
    document.querySelector('.선긋기표시').classList.remove('선긋기표시');
    선긋기요소.classList.add('선긋기표시');
  } else if (document.querySelectorAll('.선긋기표시').length==0) {
    console.log('선긋기(e) 선긋기표시 클래스 없을때')
    선긋기요소.classList.add('선긋기표시')
  }
  var 숫자담기배열=[];
  for (var i=0; i<document.querySelectorAll('.선긋기표시 > div').length; i++) {
    숫자담기배열.push(document.querySelectorAll('.선긋기표시 > div')[i].innerText)
  }
  //번호45색칠 초기화
  var 버튼들=document.querySelectorAll('.모달바디왼쪽45 button');
  for (var i=0; i<버튼들.length; i++) {
    if (버튼들[i].classList.contains('bg-primary')) {
      버튼들[i].classList.remove('bg-primary');
    }
  }
  //번호45, 6개번호 색칠
  for (var i=0; i<버튼들.length; i++) {
    if (숫자담기배열.find(element => element == i+1)) { 버튼들[i].classList.add('bg-primary');}
  }
  document.querySelector('#클릭수').innerHTML=6;

  var canvas = document.getElementById("canvas");
  canvas.classList.remove('d-none')
  var ctx = canvas.getContext('2d');
    // 픽셀 정리
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 컨텍스트 리셋
    ctx.beginPath();
  var 가로나머지;
  var 세로몫;
  var 가로;
  var 세로;
//5번 선을 긋는다. (가로, 세로), 메모_#숫자#몫#나머지:Math.floor( 12 / 5)==> 2, 10 % 3==> 1
  for (var i=0; i<6; i++) {
    세로몫=Math.floor((숫자담기배열[i]-1)/7);
    가로나머지=(숫자담기배열[i]-1) % 7
    if (가로나머지==0) {가로=26;} //
    if (가로나머지==1) {가로=74;}
    if (가로나머지==2) {가로=122;}
    if (가로나머지==3) {가로=169;}
    if (가로나머지==4) {가로=216;}
    if (가로나머지==5) {가로=264;}
    if (가로나머지==6) {가로=311;} //

    if (세로몫==0) {세로=25;}
    if (세로몫==1) {세로=73;}
    if (세로몫==2) {세로=120;}
    if (세로몫==3) {세로=168;}
    if (세로몫==4) {세로=217;}
    if (세로몫==5) {세로=266;}
    if (세로몫==6) {세로=315;}//
    //console.log('(숫자담기배열[i]-1) : ' + (숫자담기배열[i]-1) + ', 가로나머지 : ' + 가로나머지 + ', 세로몫 : ' + 세로몫)
    if (i==0) {
      ctx.beginPath();
      ctx.moveTo(가로, 세로); //숫자담기배열[0] 좌표
      //console.log('ctx.moveTo(가로, 세로) : ' + 가로 + ', ' + 세로)
    }
    if (i>0) {
      ctx.lineTo(가로, 세로);
      //console.log('ctx.lineTo(가로, 세로) : ' + 가로 + ', ' + 세로)
    }
  }
  ctx.stroke();
  //ctx.closePath();
  //7. 그려진 경로의 출력 방법을 설정합니다. -->

}

var 번호입력모달body=document.querySelector('.모달바디왼쪽45');
function 번호입력(e) {
  var 클릭수=Number(document.querySelector('#클릭수').innerHTML);
  // bg-primary있으면 빼고 id=클릭수 숫자 -1
  if (e.target.tagName=='BUTTON' && e.target.classList.contains('bg-primary')) {
    e.target.classList.remove('bg-primary');
    클릭수=Number(클릭수-1);
    document.querySelector('#클릭수').innerHTML=클릭수

    // bg-primary 없으면 넣고 id=클릭수 숫자 +1
  } else if(e.target.tagName=='BUTTON' && !e.target.classList.contains('bg-primary'))  {
    e.target.classList.add('bg-primary');
    클릭수=Number(클릭수+1);
    document.querySelector('#클릭수').innerHTML=클릭수
  }

  // 클릭수가 6일때
  if (클릭수==6) {
    var 버튼들=document.querySelectorAll('.모달바디왼쪽45 button');
    var 추가할innerhtml="<div>";
    //숫자 6개 입력
    for (var i=0; i<버튼들.length; i++) {
      if (버튼들[i].classList.contains('bg-primary')) {
        //innertext : 번호
        추가할innerhtml= 추가할innerhtml + '<div>' + 버튼들[i].innerHTML + '</div>';
      }
    }
    document.querySelector('#id_번호입력').innerHTML=추가할innerhtml + '<button class="삭제">X</button><button class="선긋기">선긋기</button></div>' + document.querySelector('#id_번호입력').innerHTML;
    //console.log(document.querySelector('#id_번호입력').innerHTML);

    //색칠해제후 클릭수0 초기화
    for (var i=0; i<버튼들.length; i++) {
      if (버튼들[i].classList.contains('bg-primary')) {
        버튼들[i].classList.remove('bg-primary');
      }
    }
    document.querySelector('#클릭수').innerHTML=0
  }
  // 클릭수가 6일때 끝

  // 클릭수가 7일때 (선긋기 보기할 때 하나 더 누르게 되면 초기화)
  if (클릭수==7) {
    var 버튼들=document.querySelectorAll('.모달바디왼쪽45 button');
    for (var i=0; i<버튼들.length; i++) {
      if (버튼들[i].classList.contains('bg-primary')) {
        버튼들[i].classList.remove('bg-primary');
      }
    }
    document.querySelector('#클릭수').innerHTML=0
  }
}












  // 각 번호 클릭시 active추가 삭제 아이디 클릭수에 클릭수 입력, active 6일때 active모두삭제 번호입력 아이디 클릭수에 클릭수 0





입력된번호들.addEventListener('click', 번호하나삭제); 
선긋기번호들.addEventListener('click', 선긋기); 
번호입력모달body.addEventListener('click', 번호입력); 