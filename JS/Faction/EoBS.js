/**
 * Created by apprenant on 28/02/17.
 */
$( Document).ready(function(){
    $("#body").on( "click", ".addHachiman", function() {
        boat1 = setHachiman(15,20,-65);
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
    $("#body").on( "click", ".addKaiju", function() {
        boat1 = setKaiju(25,20,0,"");
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
});


function setHachiman(positionX, PositionY ,direction )
{
    var boat = new Boat(positionX, PositionY, direction, "Hachiman","Img/EoBS/hachiman.png");
    boat.setCrew(10);
    boat.setCostPoint(375);
    boat.setMove(50);
    var weapon = new Weapon();
    weapon.setRange(400);
    weapon.setPower(5);
    boat.addWeapon(weapon);
    return boat;
}



function setKaiju(positionX, PositionY ,direction )
{
    var boat = new Boat(positionX, PositionY, direction, "Kaiju","");
    boat.setCrew(7);
    boat.setCostPoint(220);
    return boat;
}



function htmlEoBSListBoat(area, player)
{
    $("#"+area+"P"+player).html("<div>"+
                        "<ul>"+
                            "<li>Hachiman<button class='addHachiman' value='"+player+"'>+</button></li>"+
                        "</ul>"+
                        "<ul>"+
                            "<li>Kaiju<button class='addKaiju' value='"+player+"'>+</button></li>"+
                        "</ul>"+
                    "</div>");
}