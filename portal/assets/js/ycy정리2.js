var 회차index=''; //회차번호보다 1 작다
var 리스너_당번숨김=document.querySelector('#당번숨김');
var _5주번호들배열, _5주0출, _5주1출, _5주2출, _5주3출이상, _10주0출;
var _10주번호들배열;
var _30주번호들배열, _30주0출, _30주1출, _30주2출, _30주3출, _30주4출, _30주5출, _30주6출, _30주7출, _30주8출, _30주9출, _30주10출, _30주11출, _30주12출;
var 당첨정보=document.querySelectorAll('.당첨정보');
var 전체변수_회차select안옵션html;
for (var i = 0; i < 당첨정보.length; i++) {
    전체변수_회차select안옵션html = '<option>' + 당첨정보[i].children[0].innerHTML + '회</option>' + 전체변수_회차select안옵션html
}
document.querySelector('#회차select').innerHTML=전체변수_회차select안옵션html;
function 리스너_당번숨김_click(e) {
  회차index=''; //회차초기화, 
  console.log('리스너_당번숨김_click(e)'); //회차만 확인하고 다음진행은 함수를 넣는다.
  if (e.target.parentElement.classList.contains('당첨정보')) {
    document.querySelector('.js임시')?.classList.remove('js임시');
    e.target.parentElement.classList.add('js임시');
    for (var i=0; i<당첨정보.length; i++) {if (당첨정보[당첨정보.length-i-1].classList.contains('js임시')) {회차index=당첨정보.length-i-1;break;}}
    document.querySelector('.js임시')?.classList.remove('js임시');
    if (회차index<29 || isNaN(회차index)) {console.log('회차index : ' + 회차index + ', return;');return;} else {console.log('회차index : ' + 회차index)}
    _1_5주번호정보();
    _1_30주번호정보();
  }
}
function _1_5주번호정보() {
  if (회차index>28 && !isNaN(회차index)) {} else {console.log('회차index>29 && !isNaN(회차index); return') ;return;}
  console.log('  _1_5주번호정보() 회차index : ' + 회차index);
  _5주번호들배열='', _5주0출=[],  _5주1출=[],  _5주2출=[], _5주3출이상=[], _10주0출=[];
  for (var i=0; i<5; i++) {_5주번호들배열+=당첨정보[회차index-4+i].children[2].innerHTML}
  _5주번호들배열=_5주번호들배열.substring(0,_5주번호들배열.length-1) //마지막 _ 하나 지움
  _5주번호들배열=_5주번호들배열.split('_');
  //console.log('_5주번호들배열 : ' + _5주번호들배열);
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
}
function _1_30주번호정보() { 
  if (회차index>28 && !isNaN(회차index)) {} else {console.log('회차index>29 && !isNaN(회차index); return') ;return;}
  _30주번호들배열='', _30주0출=[], _30주1출=[], _30주2출=[], _30주3출=[], _30주4출=[], _30주5출=[];
  _30주6출=[], _30주7출=[], _30주8출=[], _30주9출=[], _30주10출=[], _30주11출=[], _30주12출=[];
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
}

function 회차select_change() {
  
}


리스너_당번숨김.addEventListener('click',리스너_당번숨김_click)


