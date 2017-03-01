/**
 * Created by apprenant on 28/02/17.
 */

$( document ).ready(function()
{
    $("#civPlayer1").click(function()
    {
        civPlayer1 = $('select[name=civPlayer1]').val();
        switch(civPlayer1)
        {
            case "EoBS":
                htmlEoBSListBoat("factionBoatList", 1);
                break;
            case "Prussian":
                htmlPrussianListBoat("factionBoatList", 1);
                break;
        }
    });
});