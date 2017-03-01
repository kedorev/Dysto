/**
 * Created by apprenant on 28/02/17.
 */

function htmlPrussianListBoat(area, player)
{
    $("#"+area+"P"+player).html("<div>"+
        "<ul>"+
        "<li>Blücher<button class='addBlucher' value='"+player+"'>+</button></li>"+
        "</ul>"+
        "</div>");
}