옵션생성();
var 회차index=document.querySelector('#당번_회차select').value; //회차번호보다 1 작다. 옵션생성() 앞에 있어도 된다. 함수를 먼저 하는듯
분석자료표만들기_상();
당번_회차select_change();
분석자료_회차select_change();
function 연습() {
  console.log(document.querySelector('#당번_변수_5주0출').innerHTML)
  console.log(document.querySelector('#당번_변수_5주1출').innerHTML)
  console.log(document.querySelector('#당번_변수_5주2출').innerHTML)
  console.log(document.querySelector('#당번_변수_5주3출이상').innerHTML)
  console.log(document.querySelector('#당번_변수_10주0출').innerHTML)
  console.log(document.querySelector('#당번_변수_15주0출').innerHTML)
  console.log('30주0출 : ' + document.querySelector('#당번_변수_30주0출').innerHTML)
  console.log(document.querySelector('#당번_변수_30주1출').innerHTML)
  console.log(document.querySelector('#당번_변수_30주2출').innerHTML)
  console.log(document.querySelector('#당번_변수_30주3출').innerHTML)
  console.log(document.querySelector('#당번_변수_30주40출').innerHTML)
}
function 분석자료표만들기_상() {
  for (var 외부=0; 외부<20; 외부++) {
    var 가로한줄=document.createElement('div');
    var 번호선택_추출_c=document.createElement('div');
    var 번호선택배열=['번호선택↓','당번','이웃수','당번+이웃','5주출','5주0출','5주1출','5주2출','5주3출','10주미출','15주미출','피해서번호']
    for (var i=0; i<3; i++) {
      var div요소=document.createElement('div'); // div 요소 변수에 담는다.
      if (i==0) {div요소.textContent=번호선택배열[외부]}
      if (i==1 && 외부==0) {div요소.textContent='출'}
      if (i==2) {div요소.textContent='C'}
      번호선택_추출_c.appendChild(div요소);
    }
    var 번호45=document.createElement('div');
    if (외부!=0) {번호45.setAttribute('class','다섯개씩번갈아색칠')}
    for (var i=1; i<46; i++) {
      var div요소=document.createElement('div'); // div 요소 변수에 담는다. 다섯개씩번갈아색칠
      번호45.appendChild(div요소);
    }
    가로한줄.appendChild(번호선택_추출_c);
    가로한줄.appendChild(번호45);

    document.querySelector('#분석자료_표_상_js').appendChild(가로한줄);
  }
  for (var i=0; i<45; i++) {document.querySelectorAll('#분석자료_표_상_js > div')[0].children[1].children[i].innerHTML=i+1}
}
function 분석자료_보기숨기기() {
  if (document.querySelector('#check_분석자료').checked) {
    document.querySelector('#분석자료').classList.remove('d-none')
  } else {
    document.querySelector('#분석자료').classList.add('d-none')
  }
}
function 당번_보기숨기기() {
  if (document.querySelector('#check_당번').checked) {
    document.querySelector('#당번').classList.remove('d-none')
  } else {
    document.querySelector('#당번').classList.add('d-none')
  }
}
function 분석자료_회차select_change() {
  회차index=parseInt(document.querySelector('#분석자료_회차select').value)-1; //parseInt(), 값전달 안하거나 공백은 NaN
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  //선택회차 셑팅
  var 가공결과='';
  var 가공=document.querySelector('#분석자료_선택회차');
  가공.innerHTML=당첨정보[회차index].children[1].outerHTML;
  가공.innerHTML+=당첨정보[회차index].children[2].outerHTML;
  가공.innerHTML+=당첨정보[회차index].children[3].outerHTML;
  var 당번split=가공.children[1].innerHTML.split('_');
  for (var 내부=0; 내부<6; 내부++) {
    가공결과+='<div title="' + 당번split[내부] + '">' + 당번split[내부] + '</div>'
  }
  가공.children[1].innerHTML=가공결과;
  가공.children[0].innerHTML=가공.children[0].innerHTML.substring(2,가공.children[0].innerHTML.length)

  //다음회차 있으면 #당번_다음회차 정보 셑팅
  if (당첨정보[회차index+1]) {
    var 가공결과='';
    console.log('다음회차 있으면')
    document.querySelector('#분석자료_다음회차').innerHTML=당첨정보[회차index].outerHTML; //일단가지고옴
    document.querySelector('#당번가공').innerHTML=당첨정보[회차index+1].outerHTML;
    var 가공=document.querySelector('#당번가공').firstChild;
    var 당번split=가공.children[2].innerHTML.split('_');
    for (var 내부=0; 내부<6; 내부++) {
      가공결과+='<div title="' + 당번split[내부] + '">' + 당번split[내부] + '</div>'
    }
    가공.children[2].innerHTML=가공결과;
    document.querySelector('#분석자료_다음회차').innerHTML=가공.outerHTML;
  } else {
    document.querySelector('#분석자료_다음회차').innerHTML=당첨정보[회차index].outerHTML; //일단가지고옴
    document.querySelector('#분석자료_다음회차').firstChild.children[0].innerHTML='_';
    document.querySelector('#분석자료_다음회차').firstChild.children[1].innerHTML='_';
    document.querySelector('#분석자료_다음회차').firstChild.children[2].innerHTML='<div>_</div><div>_</div><div>_</div><div>_</div><div>_</div><div>_</div>';
    document.querySelector('#분석자료_다음회차').firstChild.children[3].innerHTML='_';
  }
  분석자료_변수_초기화();
  분석자료_고정등번호색칠_클래스지우기();
  분석자료_변수_5주번호정보();
  분석자료_변수_30주번호정보();
}
function 당번_회차select_change() {
  회차index=parseInt(document.querySelector('#당번_회차select').value)-1; //parseInt(), 값전달 안하거나 공백은 NaN
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  var 넣을곳=document.querySelector('#당번_불러온당첨정보');
  넣을곳.innerHTML='';
  console.log('옵션값 : ' + document.querySelector('#당번_회차select').value + ', 회차index : ' + 회차index + ',당첨정보.length : ' + 당첨정보.length);
  //다음회차 있으면 #당번_다음회차 정보 셑팅
  if (당첨정보[회차index+1]) {
    var 가공결과='';
    console.log('다음회차 있으면')
    document.querySelector('#당번_다음회차').innerHTML=당첨정보[회차index].outerHTML; //일단가지고옴
    document.querySelector('#당번가공').innerHTML=당첨정보[회차index+1].outerHTML;
    var 가공=document.querySelector('#당번가공').firstChild;
    var 당번split=가공.children[2].innerHTML.split('_');
    for (var 내부=0; 내부<6; 내부++) {
      가공결과+='<div title="' + 당번split[내부] + '">' + 당번split[내부] + '</div>'
    }
    가공.children[2].innerHTML=가공결과;
    document.querySelector('#당번_다음회차').innerHTML=가공.outerHTML;
  } else {
    document.querySelector('#당번_다음회차').innerHTML=당첨정보[회차index].outerHTML; //일단가지고옴
    document.querySelector('#당번_다음회차').firstChild.children[0].innerHTML='_';
    document.querySelector('#당번_다음회차').firstChild.children[1].innerHTML='_';
    document.querySelector('#당번_다음회차').firstChild.children[2].innerHTML='<div>_</div><div>_</div><div>_</div><div>_</div><div>_</div><div>_</div>';
    document.querySelector('#당번_다음회차').firstChild.children[3].innerHTML='_';
  }
  //회차index 부터 30개 당번 가져오기 및 당번가공
  for (var i=0; i<30; i++) {
    var 가공결과='';
    document.querySelector('#당번가공').innerHTML=당첨정보[회차index-i].outerHTML;
    var 가공=document.querySelector('#당번가공').firstChild;
    var 당번split=가공.children[2].innerHTML.split('_');
    for (var 내부=0; 내부<6; 내부++) {
      가공결과+='<div title="' + 당번split[내부] + '">' + 당번split[내부] + '</div>'
    }
    가공.children[2].innerHTML=가공결과;
    //넣을곳.appendChild(가공); //appendChild하면 #당번숨김 의 요소를 잘라서 가지고온다??
    넣을곳.appendChild(가공);
  }
  당번_변수_초기화();
  당번_변수_5주번호정보();
  당번_변수_30주번호정보();
  당번_변수_이월이웃간격();
}

function 당번_변수_이월이웃간격() {
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  if (회차index>28 && !isNaN(회차index)) {} else {console.log('회차index>29 && !isNaN(회차index); return') ;return;}
  var 당번=[], 이월=[],이웃=[], 간격=[];

}
function 분석자료_변수_5주번호정보() {
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  var 당번=[];_5주0출=[],  _5주1출=[],  _5주2출=[], _5주3출이상=[], _10주0출=[],_15주0출=[], _5주번호들배열='', _10주번호들배열='', _15주번호들배열='';
  if (회차index>28 && !isNaN(회차index)) {} else {console.log('회차index>29 && !isNaN(회차index); return') ;return;}
  for (var i=0; i<5; i++) {_5주번호들배열+=당첨정보[회차index-4+i].children[2].innerHTML}
  _5주번호들배열=_5주번호들배열.substring(0,_5주번호들배열.length-1) //마지막 _ 하나 지움
  _5주번호들배열=_5주번호들배열.split('_');
  //console.log('_5주번호들배열 : ' + _5주번호들배열);
  for (var i=0; i<6; i++) {당번.push(당첨정보[회차index].children[2].innerHTML.split('_')[i]);}
  for (var i=0; i<45; i++) {
    if (_5주번호들배열.filter(번호 => 번호==i+1).length==0) {_5주0출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length==1) {_5주1출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length==2) {_5주2출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length>=3) {_5주3출이상.push(i+1)}
  }
  var _10주번호들배열=[];
  for (var i=0; i<10; i++) {_10주번호들배열+=당첨정보[회차index-9+i].children[2].innerHTML}
  _10주번호들배열=_10주번호들배열.substring(0,_10주번호들배열.length-1) //마지막 _ 하나 지움
  _10주번호들배열=_10주번호들배열.split('_');
  for (var i=0; i<45; i++) {
    if (_10주번호들배열.filter(번호 => 번호==i+1).length==0) {_10주0출.push(i+1)}
  }
  for (var i=0; i<10; i++) {_15주번호들배열+=당첨정보[회차index-14+i].children[2].innerHTML}
  _15주번호들배열=_15주번호들배열.substring(0,_15주번호들배열.length-1) //마지막 _ 하나 지움
  _15주번호들배열=_15주번호들배열.split('_');
  for (var i=0; i<45; i++) {
    if (_15주번호들배열.filter(번호 => 번호==i+1).length==0) {_15주0출.push(i+1)}
  }
  //        --- 값이 없으면 join이 안된다.
  if(당번.length>0) document.querySelector('#분석자료_변수_당번').innerHTML=당번.join(',');
  if(_5주0출.length>0) document.querySelector('#분석자료_변수_5주0출').innerHTML=_5주0출.join(',');
  if(_5주1출.length>0) document.querySelector('#분석자료_변수_5주1출').innerHTML=_5주1출.join(',');
  if(_5주2출.length>0) document.querySelector('#분석자료_변수_5주2출').innerHTML=_5주2출.join(',');
  if(_5주3출이상.length>0) document.querySelector('#분석자료_변수_5주3출이상').innerHTML=_5주3출이상.join(',');
  if(_10주0출.length>0) document.querySelector('#분석자료_변수_10주0출').innerHTML=_10주0출.join(',');
  if(_15주0출.length>0) document.querySelector('#분석자료_변수_15주0출').innerHTML=_15주0출.join(',');
  //표에 색칠하기
  for (var i=0; i<당번.length; i++) {
    var 색칠숫자들=document.querySelector('#분석자료_변수_당번').innerHTML.split(',');
    document.querySelector('#분석자료_표_상_js').children[1].children[1].children[색칠숫자들[i]-1].classList.add('분석자료_고정등번호색칠');
    document.querySelector('#분석자료_표_상_js').children[1].children[1].children[색칠숫자들[i]-1].innerHTML=색칠숫자들[i];
  }
}
function 당번_변수_5주번호정보() {
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  var 당번=[];_5주0출=[],  _5주1출=[],  _5주2출=[], _5주3출이상=[], _10주0출=[],_15주0출=[], _5주번호들배열='', _10주번호들배열='', _15주번호들배열='';
  if (회차index>28 && !isNaN(회차index)) {} else {console.log('회차index>29 && !isNaN(회차index); return') ;return;}
  for (var i=0; i<5; i++) {_5주번호들배열+=당첨정보[회차index-4+i].children[2].innerHTML}
  _5주번호들배열=_5주번호들배열.substring(0,_5주번호들배열.length-1) //마지막 _ 하나 지움
  _5주번호들배열=_5주번호들배열.split('_');
  //console.log('_5주번호들배열 : ' + _5주번호들배열);
  for (var i=0; i<6; i++) {당번.push(당첨정보[회차index].children[2].innerHTML.split('_')[i]);}
  for (var i=0; i<45; i++) {
    if (_5주번호들배열.filter(번호 => 번호==i+1).length==0) {_5주0출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length==1) {_5주1출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length==2) {_5주2출.push(i+1)}
    if (_5주번호들배열.filter(번호 => 번호==i+1).length>=3) {_5주3출이상.push(i+1)}
  }
  for (var i=0; i<10; i++) {_10주번호들배열+=당첨정보[회차index-9+i].children[2].innerHTML}
  _10주번호들배열=_10주번호들배열.substring(0,_10주번호들배열.length-1) //마지막 _ 하나 지움
  _10주번호들배열=_10주번호들배열.split('_');
  for (var i=0; i<45; i++) {
    if (_10주번호들배열.filter(번호 => 번호==i+1).length==0) {_10주0출.push(i+1)}
  }
  for (var i=0; i<10; i++) {_15주번호들배열+=당첨정보[회차index-14+i].children[2].innerHTML}
  _15주번호들배열=_15주번호들배열.substring(0,_15주번호들배열.length-1) //마지막 _ 하나 지움
  _15주번호들배열=_15주번호들배열.split('_');
  for (var i=0; i<45; i++) {
    if (_15주번호들배열.filter(번호 => 번호==i+1).length==0) {_15주0출.push(i+1)}
  }
  //        --- 값이 없으면 join이 안된다.
  if(당번.length>0) document.querySelector('#당번_변수_당번').innerHTML=당번.join(',');
  if(_5주0출.length>0) document.querySelector('#당번_변수_5주0출').innerHTML=_5주0출.join(',');
  if(_5주1출.length>0) document.querySelector('#당번_변수_5주1출').innerHTML=_5주1출.join(',');
  if(_5주2출.length>0) document.querySelector('#당번_변수_5주2출').innerHTML=_5주2출.join(',');
  if(_5주3출이상.length>0) document.querySelector('#당번_변수_5주3출이상').innerHTML=_5주3출이상.join(',');
  if(_10주0출.length>0) document.querySelector('#당번_변수_10주0출').innerHTML=_10주0출.join(',');
  if(_15주0출.length>0) document.querySelector('#당번_변수_15주0출').innerHTML=_15주0출.join(',');
}
function 분석자료_변수_30주번호정보() {}
function 당번_변수_30주번호정보() { 
  var 당첨정보=document.querySelectorAll('#당번숨김 .당첨정보');
  var _30주번호들배열='', _30주0출=[], _30주1출=[], _30주2출=[], _30주3출=[], _30주4출=[], _30주5출=[];
  var _30주6출=[], _30주7출=[], _30주8출=[], _30주9출=[], _30주10출=[], _30주11출=[], _30주12출=[];
  if (회차index>28 && !isNaN(회차index)) {} else {console.log('회차index>29 && !isNaN(회차index); return') ;return;}
  for (var i=0; i<30; i++) {_30주번호들배열+=당첨정보[회차index-29+i].children[2].innerHTML}
  _30주번호들배열=_30주번호들배열.substring(0,_30주번호들배열.length-1) //마지막 _ 하나 지움
  _30주번호들배열=_30주번호들배열.split('_');
  //console.log('_30주번호들배열 : ' + _30주번호들배열);
  for (var i=0; i<45; i++) {
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==0) {_30주0출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==1) {_30주1출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==2) {_30주2출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==3) {_30주3출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==4) {_30주4출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==5) {_30주5출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==6) {_30주6출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==7) {_30주7출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==8) {_30주8출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==9) {_30주9출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==10) {_30주10출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length==11) {_30주11출.push(i+1)}
    if (_30주번호들배열.filter(번호 => 번호==i+1).length>=12) {_30주12출.push(i+1)}
  }
  if(_30주0출.length>0) document.querySelector('#당번_변수_30주0출').innerHTML=_30주0출.join(',');
  if(_30주1출.length>0) document.querySelector('#당번_변수_30주1출').innerHTML=_30주1출.join(',');
  if(_30주2출.length>0) document.querySelector('#당번_변수_30주2출').innerHTML=_30주2출.join(',');
  if(_30주3출.length>0) document.querySelector('#당번_변수_30주3출').innerHTML=_30주3출.join(',');
  if(_30주4출.length>0) document.querySelector('#당번_변수_30주4출').innerHTML=_30주4출.join(',');
  if(_30주5출.length>0) document.querySelector('#당번_변수_30주5출').innerHTML=_30주5출.join(',');
  if(_30주6출.length>0) document.querySelector('#당번_변수_30주6출').innerHTML=_30주6출.join(',');
  if(_30주7출.length>0) document.querySelector('#당번_변수_30주7출').innerHTML=_30주7출.join(',');
  if(_30주8출.length>0) document.querySelector('#당번_변수_30주8출').innerHTML=_30주8출.join(',');
  if(_30주9출.length>0) document.querySelector('#당번_변수_30주9출').innerHTML=_30주9출.join(',');
  if(_30주10출.length>0) document.querySelector('#당번_변수_30주10출').innerHTML=_30주10출.join(',');
  if(_30주11출.length>0) document.querySelector('#당번_변수_30주11출').innerHTML=_30주11출.join(',');
  if(_30주12출.length>0) document.querySelector('#당번_변수_30주12출').innerHTML=_30주12출.join(',');
}



function 옵션생성() {
  var 당첨정보=document.querySelectorAll('.당첨정보');
  var 옵션html;
  for (var i = 0; i < 당첨정보.length; i++) {
      옵션html = '<option>' + 당첨정보[i].children[0].innerHTML + '</option>' + 옵션html
  }
  document.querySelector('#당번_회차select').innerHTML=옵션html;
  document.querySelector('#분석자료_회차select').innerHTML=옵션html;
}
function 분석자료_변수_초기화() {
  for (var i=0; i<document.querySelectorAll('#분석자료변수_초기화시_5주 > div').length; i++) {
    document.querySelectorAll('#분석자료변수_초기화시_5주 > div')[i].innerHTML=''
  }
}
function 당번_변수_초기화() {
  for (var i=0; i<document.querySelectorAll('#당번변수_초기화시_5주 > div').length; i++) {
    document.querySelectorAll('#당번변수_초기화시_5주 > div')[i].innerHTML=''
  }
}
function 분석자료_고정등번호색칠_클래스지우기() {
  for (var i=0; i<document.querySelectorAll('.분석자료_고정번호등색칠').length; i++) {
    //지울때마다 하나씩 줄어들기 때문에 [0]만 계속 지우면 된다.
    document.querySelectorAll('.분석자료_고정번호등색칠')[0].innerHTML='';
    document.querySelectorAll('.분석자료_고정번호등색칠')[0].classList.remove('분석자료_고정번호등색칠');
  }
}