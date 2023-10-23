//너무 길어 숨기기 쉽게 if로 감쌌다.
if (1==1) {
  document.querySelector('#색칠용번호들').innerHTML='<div id="오주미출수"></div>'
  + '<div id="십주미출수"></div>'
  + '<div id="십오주미출수"></div>'
  + '<div id="이월수"></div>'
  + '<div id="이웃수"></div>'
  + '<div id="이월이웃수"></div>'
  + '<div id="오주1출수"></div>'
  + '<div id="오주2출수"></div>'
  + '<div id="오주3출수"></div>'
  + '<div id="오주4출수"></div>'
  + '<div id="오주5출수"></div>'
  + '<div id="단번대">1_2_3_4_5_6_7_8_9</div>'
  + '<div id="십번대">10_11_12_13_14_15_16_17_18_19</div>'
  + '<div id="이십번대">20_21_22_23_24_25_26_27_28_29</div>'
  + '<div id="삼십번대">30_31_32_33_34_35_36_37_38_39</div>'
  + '<div id="사십번대">40_41_42_43_44_45</div>'
  + '<div id="가로1라인">1_2_3_4_5_6_7</div>'
  + '<div id="가로2라인">8_9_10_11_12_13_14</div>'
  + '<div id="가로3라인">15_16_17_18_19_20_21</div>'
  + '<div id="가로4라인">22_23_24_25_26_27_28</div>'
  + '<div id="가로5라인">29_30_31_32_33_34_35</div>'
  + '<div id="가로6라인">36_37_38_39_40_41_42</div>'
  + '<div id="가로7라인">43_44_45</div>'
  + '<div id="세로1라인">1_8_15_22_29_36_43</div>'
  + '<div id="세로2라인">2_9_16_23_30_37_44</div>'
  + '<div id="세로3라인">3_10_17_24_31_38_45</div>'
  + '<div id="세로4라인">4_11_18_25_32_39</div>'
  + '<div id="세로5라인">5_12_19_26_33_40</div>'
  + '<div id="세로6라인">6_13_20_27_34_41</div>'
  + '<div id="세로7라인">7_14_21_28_35_42</div>'
  document.querySelector('#색칠용modal-body').innerHTML='<div>'
  + '<button>1</button> '
  + '<button>2</button> '
  + '<button>3</button> '
  + '<button>4</button> '
  + '<button>5</button> '
  + '<button>6</button> '
  + '<button>7</button> '
  + '</div>'
  + '<div>'
  + '<button>8</button> '
  + '<button>9</button> '
  + '<button>10</button> '
  + '<button>11</button> '
  + '<button>12</button> '
  + '<button>13</button> '
  + '<button>14</button> '
  + '</div>'
  + '<div>'
  + '<button>15</button> '
  + '<button>16</button> '
  + '<button>17</button> '
  + '<button>18</button> '
  + '<button>19</button> '
  + '<button>20</button> '
  + '<button>21</button> '
  + '</div>'
  + '<div>'
  + '<button>22</button> '
  + '<button>23</button> '
  + '<button>24</button> '
  + '<button>25</button> '
  + '<button>26</button> '
  + '<button>27</button> '
  + '<button>28</button> '
  + '</div>'
  + '<div>'
  + '<button>29</button> '
  + '<button>30</button> '
  + '<button>31</button> '
  + '<button>32</button> '
  + '<button>33</button> '
  + '<button>34</button> '
  + '<button>35</button> '
  + '</div>'
  + '<div>'
  + '<button>36</button> '
  + '<button>37</button> '
  + '<button>38</button> '
  + '<button>39</button> '
  + '<button>40</button> '
  + '<button>41</button> '
  + '<button>42</button> '
  + '</div>'
  + document.querySelector('#색칠용modal-body').innerHTML;
  }
  //function 선택회차날짜와당번넣기() 코드와 새로고침시 코드가 같도록 코딩하기.
  //너무 길어 숨기기 쉽게 if로 감쌌다.
  if (1==1) {
  var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
  var 회차개수=Number(당번전체.length/9);
  //select안에 option넣는것은 새로고침시 단독작업이다.
  var 회차select안옵션html;
  for (var i=0; i<회차개수; i++) {
    if (i==0) {
      회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>'
    } else {
      회차select안옵션html='<option>' + 당번전체[(i*9)] + '회</option>' + 회차select안옵션html
    }
  }
  document.querySelector('#회차select').innerHTML=회차select안옵션html; //<option>회차</option>
  document.querySelector('#색칠용회차select').innerHTML=회차select안옵션html; 
  //select안에 option넣는것은 새로고침시 단독작업이다.--->>
  var selectedindex=document.querySelector('#회차select').selectedIndex; //선택안되면 -1, 초기화면 0
  var 시작배열값;
  if (selectedindex==-1) {
    selectedindex=0;
    시작배열값=(회차개수-1)*9; 
  } else {
    시작배열값=(회차개수-selectedindex-1)*9;
  }
  document.querySelector('#span_날짜').innerHTML=당번전체[시작배열값+1]; //날짜
  var span_날짜_다음btn;
  var span_날짜_다음btn_누적;
  var 변경배열값;
  
  //30회차정보가져오기
  for (var 삼십번=0; 삼십번<100; 삼십번++) {
    if (당번전체[시작배열값-(삼십번*9)]) {
      변경배열값=시작배열값-(삼십번*9);
      for (var i=0; i<9; i++) {
        if (i==0) {
          span_날짜_다음btn='<button>' + 당번전체[변경배열값+i] + '회</button>'; 
        } else if (i==1) {
          //날짜 건너뜀
        } else {
          span_날짜_다음btn+='<button>' + 당번전체[변경배열값+i] + '</button>'; 
        }
      }  
      if (삼십번==0) {
        document.querySelector('#전체당번').innerHTML='<div>' + span_날짜_다음btn + '</div>';
      } else {
        document.querySelector('#전체당번').innerHTML=document.querySelector('#전체당번').innerHTML + '<div>' + span_날짜_다음btn + '</div>';
      }
    }
  }
  //있다면 다음회차 : 전체당번와 유사
  var 있다면다음회차_btn;
  있다면다음회차_btn='<button>' + (Number(당번전체[시작배열값])+1) + '회</button><button>_</button><button>_</button><button>_</button><button>_</button><button>_</button><button>_</button><button>_</button>';
  if (당번전체[시작배열값+10]) {
    있다면다음회차_btn='';
    for (var i=0; i<9; i++) {
      if (i==0) {
        있다면다음회차_btn='<button>' + 당번전체[시작배열값+i+9] + '회</button>'; 
      } else if (i==1) {
        //날짜 건너뜀
      } else {
        있다면다음회차_btn+='<button>' + 당번전체[시작배열값+i+9] + '</button>'; 
      }
    }  
  }  
  document.querySelector('#있다면다음회차').innerHTML=있다면다음회차_btn;
  
  //색칠용번호 넣기 : function과 유사하게 작성할것
  //
  var index에서빼기=0;
  시작배열값=(회차개수-selectedindex-index에서빼기)*9;
  
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
  
  var 십주미출수=[];
  //오주미출수를 담는다
  for (i=0; i<45; i++) {
    if (십주번호들.filter(element => (i+1).toString() === element).length==0) {십주미출수.push(i+1);}
   }
  //오주미출수를 담았다. 숫자 제대로 정렬하기 위함.  오주미출수.sort(); 는 문자열로 인식하여 정렬됨
  십주미출수.sort((a,t) => a-t);
  
  var 십오주미출수=[];
  //오주미출수를 담는다
  for (i=0; i<45; i++) {
    if (십오주번호들.filter(element => (i+1).toString() === element).length==0) {십오주미출수.push(i+1);}
   }
  //오주미출수를 담았다. 숫자 제대로 정렬하기 위함.  오주미출수.sort(); 는 문자열로 인식하여 정렬됨
  십오주미출수.sort((a,t) => a-t);
  
  var 오주미출결과;
  var 십주미출결과;
  var 십오주미출결과;
  for (i=0; i<오주미출수.length; i++) {
    if (i==0) {오주미출결과=오주미출수[i];}
    if (i!==0) {오주미출결과=오주미출결과 + '_' + 오주미출수[i];}
  }
  for (i=0; i<십주미출수.length; i++) {
    if (i==0) {십주미출결과=십주미출수[i];}
    if (i!==0) {십주미출결과=십주미출결과 + '_' + 십주미출수[i];}
  }
  for (i=0; i<십오주미출수.length; i++) {
    if (i==0) {십오주미출결과=십오주미출수[i];}
    if (i!==0) {십오주미출결과=십오주미출결과 + '_' + 십오주미출수[i];}
  }
  
  document.querySelector('#오주미출수').innerHTML=오주미출결과;
  document.querySelector('#십주미출수').innerHTML=십주미출결과;
  document.querySelector('#십오주미출수').innerHTML=십오주미출결과;
  
  var 오주1출결과;
  var 오주2출결과;
  var 오주3출결과;
  var 오주4출결과;
  var 오주5출결과;
  var 오주1출=[];
  var 오주2출=[];
  var 오주3출=[];
  var 오주4출=[];
  var 오주5출=[];
  
  for (i=0; i<45; i++) {
    if (오주번호들.filter(element => (i+1).toString() === element).length==1) {오주1출.push(i+1);}
    if (오주번호들.filter(element => (i+1).toString() === element).length==2) {오주2출.push(i+1);}
    if (오주번호들.filter(element => (i+1).toString() === element).length==3) {오주3출.push(i+1);}
    if (오주번호들.filter(element => (i+1).toString() === element).length==4) {오주4출.push(i+1);}
    if (오주번호들.filter(element => (i+1).toString() === element).length==5) {오주5출.push(i+1);}
   }
   for (i=0; i<오주1출.length; i++) {
    if (i==0) {오주1출결과=오주1출[i];}
    if (i!==0) {오주1출결과=오주1출결과 + '_' + 오주1출[i];}
  }
  for (i=0; i<오주2출.length; i++) {
    if (i==0) {오주2출결과=오주2출[i];}
    if (i!==0) {오주2출결과=오주2출결과 + '_' + 오주2출[i];}
  }
  for (i=0; i<오주3출.length; i++) {
    if (i==0) {오주3출결과=오주3출[i];}
    if (i!==0) {오주3출결과=오주3출결과 + '_' + 오주3출[i];}
  }
  for (i=0; i<오주4출.length; i++) {
    if (i==0) {오주4출결과=오주4출[i];}
    if (i!==0) {오주4출결과=오주4출결과 + '_' + 오주4출[i];}
  }
  for (i=0; i<오주5출.length; i++) {
    if (i==0) {오주5출결과=오주5출[i];}
    if (i!==0) {오주5출결과=오주5출결과 + '_' + 오주5출[i];}
  }
  document.querySelector('#오주1출수').innerHTML=오주1출결과;
  document.querySelector('#오주2출수').innerHTML=오주2출결과;
  document.querySelector('#오주3출수').innerHTML=오주3출결과;
  document.querySelector('#오주4출수').innerHTML=오주4출결과;
  document.querySelector('#오주5출수').innerHTML=오주5출결과;
  
  var 이월수결과;
  var 이웃수결과;
  var 이월수플러스이웃수결과;
  var 이월수=[];
  var 이웃수=[];
  var 이월수플러스이웃수=[];
  시작배열값=(회차개수-1)*9;
  for (i=2; i<9; i++) {
    이월수.push(당번전체[시작배열값+i])
  }
  for (i=0; i<이월수.length; i++) {
    if (i==0) {이월수결과=이월수[i];}
    if (i!==0) {이월수결과=이월수결과 + '_' + 이월수[i];}
  }
  이월수.sort((a,t) => a-t);
  
  for (i=0; i<7; i++) {
      if (이월수[i]==1) {
        이월수플러스이웃수.push(45);
        이월수플러스이웃수.push(2);
        이월수플러스이웃수.push(이월수[i]*1);
      } else if (이월수[i]==45) { //45 가능
        이월수플러스이웃수.push(1);
        이월수플러스이웃수.push(44);
        이월수플러스이웃수.push(이월수[i]*1);
      } else {
        이월수플러스이웃수.push((이월수[i]-1)*1);
        이월수플러스이웃수.push(이월수[i]*1+1);
        이월수플러스이웃수.push(이월수[i]*1);
      }
    }
    //모두 문자열로 변환후 중복제거
    for (i=0; i<이월수플러스이웃수.length; i++) {
      이월수플러스이웃수[i]=이월수플러스이웃수[i].toString();
    }
    이월수플러스이웃수=[...new Set(이월수플러스이웃수)];
    이월수플러스이웃수.sort((a,t) => a-t);
  var 순번;
  순번=0;
  for (i=0; i<이월수플러스이웃수.length; i++) {
    if (i==0) {이월수플러스이웃수결과=이월수플러스이웃수[i];}
    if (i!==0) {이월수플러스이웃수결과=이월수플러스이웃수결과 + '_' + 이월수플러스이웃수[i];}
  }
  
  //이월수플러러스이웃수 배열에 0 추가하고 이월수와 같은배열값을 0 으로 대체하고 정렬후 첫째배열(0)삭제
  이월수플러스이웃수.push(0);
  for (i=0; i<이월수플러스이웃수.length; i++) {
    for (a=0; a<이월수.length; a++) {
      if (이월수플러스이웃수[i]==이월수[a]) {이월수플러스이웃수[i]=0;}
    }
  }
    //중복제거
    이월수플러스이웃수=[...new Set(이월수플러스이웃수)];
    이월수플러스이웃수.sort((a,t) => a-t);
  
    for (i=1; i<이월수플러스이웃수.length; i++) {
      if (i==1) {이웃수결과=이월수플러스이웃수[i];}
      if (i!==1) {이웃수결과=이웃수결과 + '_' + 이월수플러스이웃수[i];}
    }
  
  
  document.querySelector('#이월수').innerHTML=이월수결과;
  document.querySelector('#이웃수').innerHTML=이웃수결과;
  document.querySelector('#이월이웃수').innerHTML=이월수플러스이웃수결과;
  
  // =====================================================>>
  
  }
  if (1==1) {새로고침시함수넣기();}
  if (1==1) {색칠_45();}
  //복사연습
  document.querySelector('#복사연습').innerHTML=document.querySelector('#세로구분_당첨번호들').innerHTML;
  
  function 색칠_45() {
    var 버튼45html;
    for (var i=0; i<45; i++) {
      if(i==0) {버튼45html='<button></button>'} else {버튼45html+='<button></button>'}
    }
    if (document.querySelector('#회차select').selectedIndex==0) {
      document.querySelector('#색칠45_있다면다음회차').innerHTML=버튼45html;
       } else {
        // 다음회차 당번 있을때

    }

    document.querySelector('#색칠45_순번').innerHTML=버튼45html;
    for (i=0; i<45; i++) {
      document.querySelectorAll('#색칠45_순번 button')[i].innerHTML=i+1
    }

    // 빈버튼 만들기
    for (var i=0; i<100; i++) {
        if(i==0) {
          document.querySelector('#색칠45_당번').innerHTML='<div>' + 버튼45html + '</div>';
        } else {
          document.querySelector('#색칠45_당번').innerHTML+='<div>' + 버튼45html + '</div>';
        }
     }

    // 색칠하기
    for (var i=0; i<100; i++) {
      //당번 6개씩 번호 넣고 색칠하기
   }
  }
  function 새로고침시함수넣기() {
    var 버튼들=버튼들=document.querySelectorAll('#아이디변경 button');
    for (var i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    버튼들=document.querySelectorAll('#복사연습 #있다면다음회차 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
  }
  function 당번색칠해제() {
    var 버튼들=버튼들=document.querySelectorAll('#전체당번 button');
    for (var i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    버튼들=document.querySelectorAll('#있다면다음회차 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
          //모달회차SELECTEDINDEX, 당번회차SELECTEDINDEX
          var 버튼들=document.querySelectorAll('#전체당번 button');
          if (document.querySelector('#색칠용회차select').selectedIndex>=document.querySelector('#회차select').selectedIndex) {
            var index차이=document.querySelector('#색칠용회차select').selectedIndex-document.querySelector('#회차select').selectedIndex;
            버튼들[(index차이*8)].classList.add('색칠용버튼');
          }
  }
  function 모달색칠해제() {
    var 버튼들=document.querySelectorAll('#색칠용modal-body button');
    for (var i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    버튼들=document.querySelectorAll('#모달번호45_있다면다음당번 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
          //모달회차SELECTEDINDEX, 당번회차SELECTEDINDEX
          var 버튼들=document.querySelectorAll('#전체당번 button');
          if (document.querySelector('#색칠용회차select').selectedIndex>=document.querySelector('#회차select').selectedIndex) {
            var index차이=document.querySelector('#색칠용회차select').selectedIndex-document.querySelector('#회차select').selectedIndex;
            버튼들[(index차이*8)].classList.add('색칠용버튼');
          }
  }
  function 현재색칠정보_click_색과정보초기화() {
    document.querySelector('#현재색칠정보').innerHTML='색칠할정보';
    document.querySelector('#현재색칠번호들').innerHTML='';
    당번색칠해제()
    모달색칠해제()
        //모달회차SELECTEDINDEX, 당번회차SELECTEDINDEX
        var 버튼들=document.querySelectorAll('#전체당번 button');
        if (document.querySelector('#색칠용회차select').selectedIndex>=document.querySelector('#회차select').selectedIndex) {
          var index차이=document.querySelector('#색칠용회차select').selectedIndex-document.querySelector('#회차select').selectedIndex;
          버튼들[(index차이*8)].classList.add('색칠용버튼');
        }
  }
  function 칠_click() {
    document.querySelector('#현재색칠정보').innerHTML='색칠할정보';
    document.querySelector('#현재색칠번호들').innerHTML='';
    var 색칠된번호묶음text;
    var 버튼들=document.querySelectorAll('#색칠용modal-body button'); //45개만쓴다
    var 색칠개수=0;
    for (var i=0; i<45; i++) {
      if (버튼들[i].classList.contains('색칠용버튼')) {색칠개수=색칠개수+1}
    }
    if (색칠개수==0) {return;}
    색칠개수=0;
    for (var i=0; i<45; i++) {
      if (버튼들[i].classList.contains('색칠용버튼')) {
        if (색칠개수==0) {색칠된번호묶음text=버튼들[i].innerHTML;}
        if (색칠개수!==0) {색칠된번호묶음text=색칠된번호묶음text + '_' + 버튼들[i].innerHTML;}
        색칠개수=색칠개수+1;
      }
    }
    document.querySelector('#현재색칠번호들').innerHTML=색칠된번호묶음text;
    당번색칠해제();
    모달색칠해제();
    셑팅번호_당번에색칠();
    셑팅번호_모달에색칠();
    출_출수제목_click시_숫자개수와평균();
  }
  function 셑팅번호_당번에색칠() {
    if (document.querySelector('#세로구분_색칠관련 #현재색칠번호들').innerHTML=='') {return;}
    var 번호들=document.querySelector('#세로구분_색칠관련 #현재색칠번호들').innerHTML.trim().split('_');
    버튼들=document.querySelectorAll('#세로구분_당첨번호들 #전체당번 button');
    for (var i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<버튼들.length; i++) {
      if (i%8==0) {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      } else {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      }
    }
    //모달회차SELECTEDINDEX, 당번회차SELECTEDINDEX
    if (document.querySelector('#세로구분_색칠관련 #색칠용회차select').selectedIndex>=document.querySelector('#세로구분_당첨번호들 #회차select').selectedIndex) {
      var index차이=document.querySelector('#세로구분_색칠관련 #색칠용회차select').selectedIndex-document.querySelector('#세로구분_당첨번호들 #회차select').selectedIndex;
      버튼들[(index차이*8)].classList.add('색칠용버튼');
    }
    
    // 버튼들=document.querySelectorAll('#세로구분_색칠관련 #있다면다음회차 button');
    버튼들=document.querySelectorAll('#세로구분_당첨번호들 #있다면다음회차 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<버튼들.length; i++) {
      if (i%8==0) {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      } else {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      }
    }
  }
  function 셑팅번호_모달에색칠() {
    if (document.querySelector('#세로구분_색칠관련 #현재색칠번호들').innerHTML=='') {return;}
    var 번호들=document.querySelector('#세로구분_색칠관련 #현재색칠번호들').innerHTML.trim().split('_');
    var 버튼들=document.querySelectorAll('#세로구분_색칠관련 #색칠용modal-body button'); //45개만쓴다
    for (var i=0; i<45; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<45; i++) {
      if (번호들.filter(element => i+1 == element).length!==0) {
        버튼들[i].classList.add('색칠용버튼');
        버튼들[i].setAttribute('title',i+1);
      }
    }
    버튼들=document.querySelectorAll('#세로구분_색칠관련 #모달번호45_있다면다음당번 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<버튼들.length; i++) {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
    }
      //모달회차SELECTEDINDEX, 당번회차SELECTEDINDEX
      버튼들=document.querySelectorAll('#세로구분_당첨번호들 #전체당번 button');
      if (document.querySelector('#세로구분_색칠관련 #색칠용회차select').selectedIndex>=document.querySelector('#세로구분_당첨번호들 #회차select').selectedIndex) {
        var index차이=document.querySelector('#세로구분_색칠관련 #색칠용회차select').selectedIndex-document.querySelector('#세로구분_당첨번호들 #회차select').selectedIndex;
        버튼들[(index차이*8)].classList.add('색칠용버튼');
      }
  }
  function 당번조회와_색칠하기() {
    선택회차날짜와당번넣기();
    셑팅번호_당번에색칠();
  }
  function 당번조회와_색칠하기_플러스_일() {
    if (document.querySelector('#회차select').selectedIndex!==0){
      document.querySelector('#회차select').selectedIndex=
      document.querySelector('#회차select').selectedIndex-1;
      선택회차날짜와당번넣기();
      셑팅번호_당번에색칠();
    }
  }
  function 당번조회와_색칠하기_마이너스_일() {
    document.querySelector('#회차select').selectedIndex=
    document.querySelector('#회차select').selectedIndex+1;
    선택회차날짜와당번넣기();
    셑팅번호_당번에색칠();
  }
  function 선택회차날짜와당번넣기() {//색칠해제됨
    var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
    var 회차개수=Number(당번전체.length/9);
    
    //select안에 option넣는것은 새로고침시 단독작업이다.
    //select안에 option넣는것은 새로고침시 단독작업이다.--->>
    
    var selectedindex=document.querySelector('#회차select').selectedIndex; //선택안되면 -1, 초기화면 0
    var 시작배열값;
    if (selectedindex==-1) {
      var 시작배열값=(회차개수-1)*9; 
    } else {
      시작배열값=(회차개수-selectedindex-1)*9;
    }
    document.querySelector('#span_날짜').innerHTML=당번전체[시작배열값+1]; //날짜
    var span_날짜_다음btn;
    var span_날짜_다음btn_누적;
    var 변경배열값;
    
    //30회차정보가져오기
     for (var 삼십번=0; 삼십번<100; 삼십번++) {
      if (당번전체[시작배열값-(삼십번*9)]) {
        변경배열값=시작배열값-(삼십번*9);
        for (var i=0; i<9; i++) {
          if (i==0) {
            span_날짜_다음btn='<button>' + 당번전체[변경배열값+i] + '회</button>'; 
          } else if (i==1) {
            //날짜 건너뜀
          } else {
            span_날짜_다음btn+='<button>' + 당번전체[변경배열값+i] + '</button>'; 
          }
        }  
        if (삼십번==0) {
          document.querySelector('#전체당번').innerHTML='<div>' + span_날짜_다음btn + '</div>';
        } else {
          document.querySelector('#전체당번').innerHTML=document.querySelector('#전체당번').innerHTML + '<div>' + span_날짜_다음btn + '</div>';
        }
      }
    }
    
    //있다면 다음회차 : 전체당번와 유사
    var 있다면다음회차_btn;
    있다면다음회차_btn='<button>' + (Number(당번전체[시작배열값])+1) + '회</button><button>_</button><button>_</button><button>_</button><button>_</button><button>_</button><button>_</button><button>_</button>';
    
    if (당번전체[시작배열값+10]) {
      있다면다음회차_btn='';
      for (var i=0; i<9; i++) {
        if (i==0) {
          있다면다음회차_btn='<button>' + 당번전체[시작배열값+i+9] + '회</button>'; 
        } else if (i==1) {
          //날짜 건너뜀
        } else {
          있다면다음회차_btn+='<button>' + 당번전체[시작배열값+i+9] + '</button>'; 
        }
      }  
    }  
    document.querySelector('#있다면다음회차').innerHTML=있다면다음회차_btn;
  }
  function 회차select_click() {
    document.querySelector('#span_날짜').innerHTML='';
  }
  function 모달회차_플러스_일 () {
    if (document.querySelector('#색칠용회차select').selectedIndex==0){return;}
    document.querySelector('#색칠용회차select').selectedIndex=
    document.querySelector('#색칠용회차select').selectedIndex-1;
    모달회차_change();
    셑팅번호_모달에색칠();
  }
  function 모달회차_마이너스_일 () {
    document.querySelector('#색칠용회차select').selectedIndex=
    document.querySelector('#색칠용회차select').selectedIndex+1;
    모달회차_change();
    셑팅번호_모달에색칠();
  }
  function 모달회차_change() {
    //색칠용번호 넣기 : function과 유사하게 작성할것
      var 당번전체=document.querySelector('#숨김정보_당번전체').innerHTML.trim().split('_');
      var 회차개수=Number(당번전체.length/9);
      var selectedindex=document.querySelector('#세로구분_색칠관련 #색칠용회차select').selectedIndex; //선택안되면 -1, 초기화면 0
      var 시작배열값;
    
    var index에서빼기=0;
    시작배열값=(회차개수-selectedindex-index에서빼기)*9;
  
    var 모달다음당번버튼들=document.querySelectorAll('#세로구분_색칠관련 #모달번호45_있다면다음당번 button');
    if (selectedindex>0) {
      for (i=0; i<모달다음당번버튼들.length; i++) {
        모달다음당번버튼들[i].innerHTML=당번전체[시작배열값+i+2];
      }
    } else {
      for (i=0; i<모달다음당번버튼들.length; i++) {
        모달다음당번버튼들[i].innerHTML='_';
      }
    }
  
  
    
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
    
    var 십주미출수=[];
    //오주미출수를 담는다
    for (i=0; i<45; i++) {
      if (십주번호들.filter(element => (i+1).toString() === element).length==0) {십주미출수.push(i+1);}
     }
    //오주미출수를 담았다. 숫자 제대로 정렬하기 위함.  오주미출수.sort(); 는 문자열로 인식하여 정렬됨
    십주미출수.sort((a,t) => a-t);
    
    var 십오주미출수=[];
    //오주미출수를 담는다
    for (i=0; i<45; i++) {
      if (십오주번호들.filter(element => (i+1).toString() === element).length==0) {십오주미출수.push(i+1);}
     }
    //오주미출수를 담았다. 숫자 제대로 정렬하기 위함.  오주미출수.sort(); 는 문자열로 인식하여 정렬됨
    십오주미출수.sort((a,t) => a-t);
    
    var 오주미출결과;
    var 십주미출결과;
    var 십오주미출결과;
    for (i=0; i<오주미출수.length; i++) {
      if (i==0) {오주미출결과=오주미출수[i];}
      if (i!==0) {오주미출결과=오주미출결과 + '_' + 오주미출수[i];}
    }
    for (i=0; i<십주미출수.length; i++) {
      if (i==0) {십주미출결과=십주미출수[i];}
      if (i!==0) {십주미출결과=십주미출결과 + '_' + 십주미출수[i];}
    }
    for (i=0; i<십오주미출수.length; i++) {
      if (i==0) {십오주미출결과=십오주미출수[i];}
      if (i!==0) {십오주미출결과=십오주미출결과 + '_' + 십오주미출수[i];}
    }
    
    document.querySelector('#오주미출수').innerHTML=오주미출결과;
    document.querySelector('#십주미출수').innerHTML=십주미출결과;
    document.querySelector('#십오주미출수').innerHTML=십오주미출결과;
    
    var 오주1출결과;
    var 오주2출결과;
    var 오주3출결과;
    var 오주4출결과;
    var 오주5출결과;
    var 오주1출=[];
    var 오주2출=[];
    var 오주3출=[];
    var 오주4출=[];
    var 오주5출=[];
    
    for (i=0; i<45; i++) {
      if (오주번호들.filter(element => (i+1).toString() === element).length==1) {오주1출.push(i+1);}
      if (오주번호들.filter(element => (i+1).toString() === element).length==2) {오주2출.push(i+1);}
      if (오주번호들.filter(element => (i+1).toString() === element).length==3) {오주3출.push(i+1);}
      if (오주번호들.filter(element => (i+1).toString() === element).length==4) {오주4출.push(i+1);}
      if (오주번호들.filter(element => (i+1).toString() === element).length==5) {오주5출.push(i+1);}
     }
     for (i=0; i<오주1출.length; i++) {
      if (i==0) {오주1출결과=오주1출[i];}
      if (i!==0) {오주1출결과=오주1출결과 + '_' + 오주1출[i];}
    }
    for (i=0; i<오주2출.length; i++) {
      if (i==0) {오주2출결과=오주2출[i];}
      if (i!==0) {오주2출결과=오주2출결과 + '_' + 오주2출[i];}
    }
    for (i=0; i<오주3출.length; i++) {
      if (i==0) {오주3출결과=오주3출[i];}
      if (i!==0) {오주3출결과=오주3출결과 + '_' + 오주3출[i];}
    }
    for (i=0; i<오주4출.length; i++) {
      if (i==0) {오주4출결과=오주4출[i];}
      if (i!==0) {오주4출결과=오주4출결과 + '_' + 오주4출[i];}
    }
    for (i=0; i<오주5출.length; i++) {
      if (i==0) {오주5출결과=오주5출[i];}
      if (i!==0) {오주5출결과=오주5출결과 + '_' + 오주5출[i];}
    }
    document.querySelector('#오주1출수').innerHTML=오주1출결과;
    document.querySelector('#오주2출수').innerHTML=오주2출결과;
    document.querySelector('#오주3출수').innerHTML=오주3출결과;
    document.querySelector('#오주4출수').innerHTML=오주4출결과;
    document.querySelector('#오주5출수').innerHTML=오주5출결과;
    
    var 이월수결과;
    var 이웃수결과;
    var 이월수플러스이웃수결과;
    var 이월수=[];
    var 이웃수=[];
    var 이월수플러스이웃수=[];
    시작배열값=(회차개수-selectedindex-1)*9;
    for (i=2; i<9; i++) {
      이월수.push(당번전체[시작배열값+i])
    }
    for (i=0; i<이월수.length; i++) {
      if (i==0) {이월수결과=이월수[i];}
      if (i!==0) {이월수결과=이월수결과 + '_' + 이월수[i];}
    }
    이월수.sort((a,t) => a-t);
    for (i=0; i<7; i++) {
        if (이월수[i]==1) {
          이웃수.push(45);
          이웃수.push(2);
          이웃수.push(이월수[i]);
        } else if (이월수[i]==45) { //45 가능
          이웃수.push(1);
          이웃수.push(44);
          이웃수.push(이월수[i]);
        } else {
          이웃수.push(이월수[i]-1);
          이웃수.push(이월수[i]*1+1);
          이웃수.push(이월수[i]);
        }
      }
  
  //모두 문자열로 변환후 중복제거
    for (i=0; i<이웃수.length; i++) {
      이웃수[i]=이웃수[i].toString();
    }
    이웃수=[...new Set(이웃수)];
    이웃수.sort((a,t) => a-t);
  
    var 순번;
    순번=0;
    for (i=0; i<45; i++) { //이월수제거 >> 이웃수
      if (이웃수.filter(element => (i+1) == element).length==1) {
        if (이월수.filter(element => (i+1) == element).length==0) {
          순번=순번+1;
          if (순번==1) {이웃수결과=i+1;}
          if (순번!==1) {이웃수결과=이웃수결과 + '_' + (i+1);}
        }
      }
    }
    for (i=0; i<이웃수.length; i++) { //1개인것만
        if (i==0) {이월수플러스이웃수결과=이웃수[i];}
        if (i!==0) {이월수플러스이웃수결과=이월수플러스이웃수결과 + '_' + 이웃수[i];}
      }
    
    
    document.querySelector('#이월수').innerHTML=이월수결과;
    document.querySelector('#이웃수').innerHTML=이웃수결과;
    document.querySelector('#이월이웃수').innerHTML=이월수플러스이웃수결과;
  
    //바뀐 출수번호들에서 : #현재색칠정보 ex:오주미출수이면 바뀐 정보로 색칠
    var 현재색칠정보text=document.querySelector('#세로구분_색칠관련 #현재색칠정보').innerHTML;
    if (document.querySelector('#' + 현재색칠정보text)) {
      change용색칠할번호선택시색칠하기()
    } else {
      당번색칠해제();
      셑팅번호_당번에색칠();
    }
    
  }
  function 오주전() {
    document.querySelector('#색칠용회차select').selectedIndex=
    document.querySelector('#회차select').selectedIndex+5;모달회차_change();셑팅번호_모달에색칠();
  }
  function 십주전() {
    document.querySelector('#색칠용회차select').selectedIndex=
    document.querySelector('#회차select').selectedIndex+10;모달회차_change();셑팅번호_모달에색칠();
  }
  function 십오주전() {
    document.querySelector('#색칠용회차select').selectedIndex=
    document.querySelector('#회차select').selectedIndex+15;모달회차_change();셑팅번호_모달에색칠();
  }
  function 이십주전() {
    document.querySelector('#색칠용회차select').selectedIndex=
    document.querySelector('#회차select').selectedIndex+20;모달회차_change();셑팅번호_모달에색칠();
  }
  function 삼십주전() {
    document.querySelector('#색칠용회차select').selectedIndex=
    document.querySelector('#회차select').selectedIndex+30;모달회차_change();셑팅번호_모달에색칠();
  }
  function 출_출수제목_click시_숫자개수와평균() {
    document.querySelector('#평균계산값').innerHTML='';
    var 숫자개수=document.querySelector('#현재색칠번호들').innerHTML.trim().split('_').length;
    var 평균=(숫자개수/7).toPrecision(2);
    var return값=' (' + 숫자개수 + '개, 평균 : ' + 평균 + ')';
    if (숫자개수>0) {
      document.querySelector('#평균계산값').innerHTML=return값;
    }
  }
  function 출수제목보기숨기기() {
    if (document.querySelector('#모달_출수제목보기숨기기').innerHTML=='&lt;') {
  
      document.querySelector('#모달_출수제목보기숨기기').innerHTML='&gt;';
      document.querySelector('#출수제목').classList.add('d-none');
    } else {
      document.querySelector('#모달_출수제목보기숨기기').innerHTML='&lt;';
      document.querySelector('#출수제목').classList.remove('d-none');
    }
  }
  function 모달번호감추기() {
    document.querySelector('#세로구분_색칠관련').classList.add('d-none');
    document.querySelector('#li_모달번호45보기숨기기').innerText='모달번호45보기';
  }
  function 모달번호_원래위치로() {
    document.querySelector('#세로구분_색칠관련').style.left='310px';
    document.querySelector('#세로구분_색칠관련').style.top='50px';
  }
  function 모달번호_왼쪽으로() {
    var 이동값=document.querySelector('#이동용input').value * 1;
    document.querySelector('#세로구분_색칠관련').style.left=
    (parseInt(document.querySelector('#세로구분_색칠관련').style.left) - 이동값) + 'px';
  }
  function 모달번호_오른쪽으로() {
    var 이동값=document.querySelector('#이동용input').value * 1;
    document.querySelector('#세로구분_색칠관련').style.left=
    (parseInt(document.querySelector('#세로구분_색칠관련').style.left) + 이동값) + 'px';
  }
  function 모달번호_위로() {
    var 이동값=document.querySelector('#이동용input').value * 1;
    document.querySelector('#세로구분_색칠관련').style.top=
    (parseInt(document.querySelector('#세로구분_색칠관련').style.top) - 이동값) + 'px';
  }
  function 모달번호_아래로() {
    var 이동값=document.querySelector('#이동용input').value * 1;
    document.querySelector('#세로구분_색칠관련').style.top=
    (parseInt(document.querySelector('#세로구분_색칠관련').style.top) + 이동값) + 'px';
  } 
  function header_dropdown_모달45보기숨기기() {
    if (document.querySelector('#li_모달번호45보기숨기기').innerText=='모달번호45숨기기') {
      document.querySelector('#세로구분_색칠관련').classList.add('d-none')
      document.querySelector('#li_모달번호45보기숨기기').innerText='모달번호45보기'
    } else {
    document.querySelector('#세로구분_색칠관련').classList.remove('d-none');
    document.querySelector('#li_모달번호45보기숨기기').innerText='모달번호45숨기기'
    }
  }
  function 문서연결닫기() {
    document.querySelector('#선택문서셑팅하는곳').innerHTML='';
    document.querySelector('#선택문서셑팅하는곳').classList.add('d-none');
  }
  function change용색칠할번호선택시색칠하기() {
    if (!document.querySelector('#' + document.querySelector('#세로구분_색칠관련 #현재색칠정보').innerHTML)) {return;}
    document.querySelector('#세로구분_색칠관련 #현재색칠번호들').innerHTML=document.querySelector('#' + document.querySelector('#세로구분_색칠관련 #현재색칠정보').innerHTML).innerHTML;  //색칠용번호들 정보를 가지고옴 1_2_3_형태
  
    var 번호들=document.querySelector('#' + document.querySelector('#세로구분_색칠관련 #현재색칠정보').innerHTML).innerHTML.trim().split('_');
    var 버튼들=document.querySelectorAll('#세로구분_색칠관련 #색칠용modal-body button'); //45개만쓴다
    for (var i=0; i<45; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
  
    }
    for (var i=0; i<45; i++) {
      if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
        버튼들[i].classList.add('색칠용버튼');
        버튼들[i].setAttribute('title',i+1);
      }
    }
    //왼쪽에 색칠
    버튼들=document.querySelectorAll('#세로구분_당첨번호들 #전체당번 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<버튼들.length; i++) {
      if (i%8==0) {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      } else {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      }
    }
    버튼들=document.querySelectorAll('#세로구분_당첨번호들 #있다면다음회차 button');
    for (i=0; i<버튼들.length; i++) {
      버튼들[i].classList.remove('색칠용버튼');
      버튼들[i].removeAttribute('title');
    }
    for (var i=0; i<버튼들.length; i++) {
      if (i%8==0) {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      } else {
        if (번호들.filter(element => 버튼들[i].innerHTML === element).length==1) {
          버튼들[i].classList.add('색칠용버튼');
          버튼들[i].setAttribute('title',버튼들[i].innerHTML);
        }
      }
    }
    출_출수제목_click시_숫자개수와평균();
  }
  
  var 리스너_색칠할번호선택_ul=document.querySelector('#색칠할번호선택_ul');
  var 리스너_모달번호들=document.querySelector('#색칠용modal-body');
  var 리스너_코딩메모문서연결=document.querySelector('#코딩메모_문서연결');
  
  function 리스너용모달번호각버튼색칠(e) {
    모달번호들=document.querySelectorAll('#색칠용modal-body button');
    if (모달번호들[e.target.innerHTML-1]) {
      if (모달번호들[e.target.innerHTML-1].classList.contains('색칠용버튼')) {
        모달번호들[e.target.innerHTML-1].classList.remove('색칠용버튼');
        모달번호들[e.target.innerHTML-1].removeAttribute('title');
      } else {
        모달번호들[e.target.innerHTML-1].classList.add('색칠용버튼');
        모달번호들[e.target.innerHTML-1].setAttribute('title',e.target.innerHTML);
      }
    }
  }
  function 리스너용색칠할번호선택시색칠하기(e) {
    if (!document.querySelector('#' + e.target.innerHTML)) {return;}
    document.querySelector('#현재색칠정보').innerHTML=e.target.innerHTML;
    document.querySelector('#현재색칠번호들').innerHTML=document.querySelector('#' + e.target.innerHTML).innerHTML;
    당번색칠해제();
    모달색칠해제();
    셑팅번호_당번에색칠();
    셑팅번호_모달에색칠();
    출_출수제목_click시_숫자개수와평균()
  }
  function 문서연결(e) {
    //문서정보숨김내_타이틀을id로가진outerhtml셑팅
    if (document.querySelector('#' + e.target.title)) {
      document.querySelector('#선택문서셑팅하는곳').innerHTML=document.querySelector('#' + e.target.title).outerHTML;
      document.querySelector('#선택문서셑팅하는곳').classList.remove('d-none');
    }
  }
  
  리스너_코딩메모문서연결.addEventListener('click', 문서연결); 
  리스너_색칠할번호선택_ul.addEventListener('click',리스너용색칠할번호선택시색칠하기);
  리스너_모달번호들.addEventListener('click',리스너용모달번호각버튼색칠);