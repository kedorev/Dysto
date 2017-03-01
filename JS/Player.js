/**
 * Created by apprenant on 28/02/17.
 */
function Player(numPlayer, namePlayer, isBot)
{
    var id = numPlayer;
    var name = namePlayer;
    var played = new Array();
    var boat = new Array();
    var bot = isBot;
    var totalPoint = 0;

    this.addPoint = function(value)
    {
        totalPoint = totalPoint + value;
    };

    this.getTotalPoint = function () {
        return totalPoint;
    };


    this.addBoat = function(boatToAdd)
    {
        if(boatToAdd instanceof Boat)
        {
            boat.push(boatToAdd);
            this.addPoint(boatToAdd.getCostPoint());
            this.showData("dataPlayer"+id);
            $("#canvas").on( "click", ".addHachiman", function() {
                boat1 = setHachiman(15,20,0);
                numPlayer = $(this).val();
                switch(numPlayer) {
                    case "1":
                        player1.addBoat(boat1);
                        break;
                    case "2":
                        player2.addBoat(boat1);
                        break;
                }
            });
        }
    };

    this.getBoat = function ()
    {
        return boat;
    };

    this.showData = function (area)
    {
        var str;
        var i = boat.length -1;
        //alert("show data");
        str = "  <div><span id=\"nameP1\">"+
            name+
            "</span></div>"+
            "<div><span id=\"totalPointP1\">"+
            totalPoint+
            "</span></div>"+
            "<div id=\"boatListPlayer1\">"+
                "<table class='table'>";
        //console.log(i);
        while ( i >= 0)
        {
            str = str + "<tr>"+
                            "<td>"+
                                boat[i].getName()+
                            "</td>"+
                            "<td>"+
                            "</td>"+
                        "</tr>";
            i--;
        }
        str = str +
                "</table>"+
            "</div>";
        $("#"+area).html(str);
    }
}
