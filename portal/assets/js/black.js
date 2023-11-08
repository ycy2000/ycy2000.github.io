  var black리스너용=document.querySelector('#black리스너용');
  function 문서연결또는하위메뉴(e) {
    //하위메뉴 타이틀인경우 하위메뉴 나오게하고 끝. 문서가 연결된 경우 문서연결만하고 끝 / e.target.title 자체로는 에러가 안남 length=0
    //querySeloctor #만 있으면 에러, 뭐라도 있으면 에러는 아님 undefined
    var 타이틀;
    if (e.target.title.length==0) { 
      타이틀='_' 
    } else {
      타이틀=e.target.title;
    }
//1.class 파일연결 ==> 타이틀과 같은 이름의 element있으면 #선택문서셑팅하는곳 으로 가지고오기 ==> #선택문서셑팅하는곳 class d-none remove : return;    
    if (e.target.classList.contains('파일연결') && document.querySelector('#' + 타이틀)) {
      document.querySelector('#선택문서셑팅하는곳').innerHTML=document.querySelector('#선택문서셑팅하는곳 button').outerHTML;
      document.querySelector('#선택문서셑팅하는곳').innerHTML+=document.querySelector('#' + 타이틀).outerHTML;
      document.querySelector('#선택문서셑팅하는곳').classList.remove('d-none');
      return;
    }
//2.class 서브리스트연결 ==> 타이틀과 같은 이름의 element있으면 #서브리스트가져오는곳 으로 가지고오기 ==> #서브리스트가져오는곳 class d-none remove : return;
    if (e.target.classList.contains('서브리스트연결') && document.querySelector('#' + 타이틀)) {
      document.querySelector('#서브리스트가져오는곳').innerHTML=document.querySelector('#서브리스트가져오는곳 button').outerHTML;
      document.querySelector('#서브리스트가져오는곳').innerHTML+=document.querySelector('#' + 타이틀).outerHTML;
      document.querySelector('#서브리스트가져오는곳').classList.remove('d-none');
      return;
    }

  }
  black리스너용.addEventListener('click',문서연결또는하위메뉴);