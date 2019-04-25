(function(){
    var $body = document.querySelector("body");
    var btnMenu = document.querySelector(".btn-menu");

    $body.addEventListener("load", AdicionarClasse());

    
       
    function AdicionarClasse(){
        $body.classList.remove("no-js");
        $body.classList.add("js");
    }   

    var menu = new Menu({
        corpo: $body,
        lis: ".pag__menu-li",
        container: ".page-menu",
        pageNav: ".pag-nav-menu",
        pagePrin: ".page-principal",
        pageMenu: ".pag__menu",
        btnMenu: ".btn-menu",
        btnFechar: ".pag__btn-fechar",
        btnSubMenu: ".pag__subMenu",
        pagMenuServicosUl: ".pag__subMenuA",
        pagMenuServicosLi: ".pag__menu-servicos li",
        seta: ".fa-caret-down",
        maxWidthScreen: 681,
    })

})()