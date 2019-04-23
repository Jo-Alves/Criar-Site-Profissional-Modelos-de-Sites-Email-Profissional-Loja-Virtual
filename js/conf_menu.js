function Menu(Attribute){
    this.nav = (typeof Attribute.container === 'string') ?
                document.querySelector(Attribute.container) : Attribute.container;

    this.PageNav = (typeof Attribute.pageNav === 'string') ?
                    document.querySelector(Attribute.pageNav) : Attribute.pageNav;

    this.pageMenu = (typeof Attribute.pageMenu === 'string') ?
                    document.querySelector(Attribute.pageMenu) : Attribute.pageMenu;

     this.PagePrinc = (typeof Attribute.pagePrin === 'string') ?
                     document.querySelector(Attribute.pagePrin) : Attribute.pagePrin;
    
    this.corpo = Attribute.corpo;
    
    this.btnMenu = (typeof Attribute.btnMenu === 'string') ?
                    document.querySelector(Attribute.btnMenu) : Attribute.btnMenu;

    this.btnFechar = (typeof Attribute.btnFechar === 'string') ?
                    document.querySelector(Attribute.btnFechar) : Attribute.btnFechar;

    this.btnSubMenu = (typeof Attribute.btnSubMenu === 'string') ?
                        document.querySelector(Attribute === 'string') : Attribute.btnSubMenu;

    this.maxWidth = Attribute.maxWidthScreen || false;

     this.btnMenu.removeAttribute("style");

    var _this = this;


    this.btnMenu.addEventListener("click", abrirMenu);

    function abrirMenu(){  
        _this.corpo.style.overflowY = 'hidden';
        _this.PageNav.style.width = "300px";
        _this.PageNav.style.backgroundColor = "black";
        _this.PageNav.style.height = "120vh";
        _this.PageNav.style.position = "fixed";
        _this.PageNav.style.top = "0%";
        _this.PageNav.style.right = 0;
        _this.PageNav.style.zIndex = 1;
        _this.PagePrinc.style.transform = "translateX(-300px)";
        _this.btnFechar.style.display = 'block';
        _this.pageMenu.style.display = 'block';

        _this.PageNav.style.transitionProperty = 'width';
        _this.PageNav.style.transitionDuration = '.5s';
        _this.PageNav.style.transitionTimingFunction = "ease";

        
        _this.PagePrinc.style.transitionProperty = 'transform';
        _this.PagePrinc.style.transitionDuration = '.5s';
        _this.PagePrinc.style.transitionTimingFunction = "ease";

    }

    this.btnFechar.addEventListener("click", function(){
        _this.nav.style.width = '0';
        _this.PageNav.style.width = "0";
        _this.btnFechar.style.display = 'none';
        _this.pageMenu.style.display = 'none';
        _this.corpo.style.overflowY = 'auto';
        _this.PagePrinc.style.transform = "translateX(0)";
        _this.pagePrinc.style.transitionProperty = 'transform';
        _this.pagePrinc.style.transitionDuration = '2s';
        _this.pagePrinc.style.transitionTimingFunction = "ease";
        
    })
}