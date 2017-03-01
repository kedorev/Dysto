/**
 * Created by apprenant on 28/02/17.
 */

var selectBoat;

var player1;
var player2;
var globalId;

$( Document).ready(function(){

    $("#civPlayer").html("  <OPTION value=\"EoBS\">EoBS"+
        "<OPTION value=\"Prussian\">Prussian");

    globalId = 0;
    player1 = new Player(1,"kedorev",0);
    player2 = new Player(2,"bot",1);

    // Handle keyboard controls
    var keysDown = {};



    $("#body").on( "click", "#btnStart", function() {
        console.log("start btn");
        var nbTurn = $("#nbTurn");
        if(isDeployementTurn())
        {
            $("#factionBoatListP1").hide();
            $("#factionBoatListP2").hide();
            $("#btnStart").html("Next Turn");
            $("#turn").html("Tour ");
            nbTurn.html("1");
            nbTurn.val(1);

        }
        else if(nbTurn.val() < 7)
        {
            nbTurn.html(parseInt(nbTurn.val())+1);
            nbTurn.val(parseInt(nbTurn.val())+1);
        }
        else
        {
            alert("Fin de partie");
        }
    });

    addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
        console.log(e);
    }, false);

    addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
    }, false);

    /*$(document).click(function(event) {
        console.log($(event.target));
    });*/

});


function pow(nb)
{
    return nb*nb;
}

function isDeployementTurn()
{
    return(($("#turn").html()) == "Déploiement")
}