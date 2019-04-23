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
        container: ".page-menu",
        pageNav: ".pag-nav-menu",
        pagePrin: ".page-principal",
        pageMenu: ".pag__menu",
        btnMenu: ".btn-menu",
        btnFechar: ".pag__btn-fechar",
        btnSubMenu: ".pag__subMenu",
        maxWidthScreen: 681,
    })

})()