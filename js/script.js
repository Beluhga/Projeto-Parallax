//  para como passar o mouse por cima mostra os itens ocultos //

$(document).ready(function(){

    $('.parallax').parallax();

    $("a.tooltip").mouseover(function(){                               //essa parte ira captura o texto quando o mouse estiver em cima//
        var texto= $(this).attr('data-tooltip');
        $(this).children(".text_tooltip").html(texto);
        $(this).children(".text_tooltip").css('opacity','1');
    });

    $("a.tooltip").mouseout(function(){
        $(this).children(".text_tooltip").css('opacity', '0');
    });

    $(".text_tooltip").mouseover(function(e){                           //essa é pra quando tira o mouse de cima ele apagar o texto
        e.stopPropagation();
    });

    var page = $('body, html'); // Coloquei o body,html junto com o pq sem eles nao funciona no navegador firefox (tipo se eu colocar so o "body") //
    $('a.tooltip').click(function(){
        page.animate({
            scrollTop: $($.attr(this, 'href') ).offset().top
        }, 500);

        return false;
    });

    $("nav").mouseover(function(){
        $(".nav-itens").addClass("nav-show");
    });

    $("nav").mouseout(function(){
        $(".nav-itens").removeClass("nav-show");
    });


// para aumentar e diminuir quando usar o scroll na pagina//

$(document).scroll(function(){
    var topWindow = $(window).scrollTop();
    if(topWindow > 60){

        $("header").addClass('header_fixed');
    }

    else {

        $("header").removeClass('header_fixed');
    };
});

});