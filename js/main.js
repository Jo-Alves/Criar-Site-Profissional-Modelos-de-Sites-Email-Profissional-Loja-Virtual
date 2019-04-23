(function(){
    var $body = document.querySelector("body");
    var Menu = document.querySelector(".btn-menu");

    $body.addEventListener("load", AdicionarClasse());

    Menu.getAttribute.remove("style");
       
    function AdicionarClasse(){
        $body.classList.remove("no-js");
        $body.classList.add("js");
    }
    

})()