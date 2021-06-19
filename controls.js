    //Orientações

    var x = $(window).width() - 100;

    var y = $(window).height() - 90;

    var square = $('.square');

    var body = $('body')

    body.keypress(function(b){

          //Movimentação
    
        switch(b.keyCode) {
            case 50:
                square.css("bottom",0);
                square.css('margin-left', x/2 + 'px');//p baixo
                square.css("background-color","grey");
            break;
            case 49:
                square.css("bottom",0);
                square.css('margin-left', '0px');//p inferior esquerda
                square.css("background-color","green");
            break;
            case 51:
                square.css("bottom",0);
                square.css("margin-left", x + 'px');//p inferior direita
                square.css("background-color","orange");
            break;
            case 54:
            square.css("bottom",'50%');
                square.css("margin-top", y/2 + 'px');
                square.css("margin-left", x + 'px')//p direita
                square.css("background-color","yellow");
            break;
            case 53:
                square.css("bottom","50%");
                square.css("margin-left", x/2 + 'px');
                square.css("background-color","red");//meio
            break;
            case 52:
                square.css("bottom",'50%');
                square.css("margin-left", '0px')//p esquerda
                square.css("background-color","black");
            break;
            case 55:
                square.css("bottom",'90%');
                square.css("margin-left",'0px');//superior esquerda -- arrumar
                square.css("background-color","blue");
            break;
            case 57:
                square.css("bottom",'90%');
                square.css("margin-left", x + 'px');//superior direita
                square.css("background-color","violet");
            break;
            case 56:
                square.css("bottom","90%");
                square.css("margin-left", x/2 + 'px');//p cima
                square.css("background-color","white");
            break;

            //Rotação e Velocidade

            case 47:
                square.addClass('rot');
            break;
            case 42:
                square.removeClass('rot');
            break;
            case 45:
                square.css("animation-duration","+=.5s");
            break;
            case 43:
                square.css("animation-duration","-=.5s");
            break;
        }
    })
