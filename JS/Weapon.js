/**
 * Created by apprenant on 28/02/17.
 */

function Weapon()
{
    var range;
    var power;

    this.getRange = function(){
        return range;
    };
    this.getPower = function(){
        return power;
    };
    this.setRange = function(rng){
        range = rng;
    };
    this.setPower = function(pwr){
        power = pwr;
    }
}