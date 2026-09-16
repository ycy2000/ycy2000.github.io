//요소.insertAdjacentHTML('afterbegin', div.outerHTML) : "beforebegin","afterbegin","beforeend","afterend"

function aaa() {
  let spanDiv='<div>' + Array.from({length:7}).map(() => {return '<span>40</span>'}).join('') + '</div>';
  let div=document.createElement('div');
  div.innerHTML='<div class="span20">' + Array.from({length:30}).map(ele => {return spanDiv}).join('') + '</div>';
  document.querySelector('#기본_당번').innerHTML=div.innerHTML;
}
aaa();
