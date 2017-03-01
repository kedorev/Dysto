/**
 * Created by apprenant on 28/02/17.
 */

var onDrag = 0;

function Boat(positionX, positionZ, direction, nameBoat, pathImg) {
    var posX = positionX;
    var posY = 0;
    var posZ = positionZ;
    var name = nameBoat;
    globalId = globalId +1;
    var id = globalId;
    var dir = direction;
    var weapons = new Array();
    var crew;
    var move;
    var hasMoved = 0;
    var hasPlayed = 0;
    var thoughness;
    var victoryPoint;
    var hullPoint;
    var costPoint;

    var imgTemp = new Image();
    imgTemp.src = pathImg;
    imgTemp.onload = function ()
    {
        this.getMidImgPosX = function(){
            return posX+imgTemp.width/2;
        };
        this.getMidImgPosZ = function(){
            return posZ+imgTemp.height/2;
        };

        canvas.drawImage({
            source: pathImg,
            draggable: true,
            name: "boat" + id,
            x: positionX+imgTemp.width/2,
            y: positionZ+imgTemp.height/2,
            layer: true,
            rotate: direction,
            width: 150 ,
            height: 100 ,
            bringToFront: true,
            fromCenter: true,
            click: function (layer) {
                if(hasPlayed == 0)
                {
                    if (onDrag == 0) {
                        var val;

                        if ($("#turnRight").prop("checked")) {
                            val = "-";
                        }
                        else {
                            val = "+";
                        }
                        $(this).animateLayer(layer, {
                            rotate: val + '=10'
                        });
                    }
                    else {
                        onDrag = 0;
                    }
                }
            },
            dragstart: function (layer) {
                if(hasPlayed == 0)
                {
                    onDrag = 1;
                    if(!isDeployementTurn())
                    {
                        if(hasMoved == 0)
                        {
                            console.log(imgTemp);
                            canvas.drawArc({
                                strokeStyle: '#000',
                                layer: true,
                                name: "toRemoved",
                                strokeWidth: 5,
                                x: posX + imgTemp.width/2,
                                y: posZ + imgTemp.height/2,
                                radius: move
                            });
                        }
                    }
                    else {
                        canvas.drawLine({
                            strokeStyle: '#000',
                            layer:true,
                            name:"toRemoved",
                            strokeWidth: 10,
                            x1: 0, y1: deploymentArea,
                            x2: 600, y2: deploymentArea
                        });
                    }
                }
            },
            dragstop: function (layer) {
                if(hasPlayed == 0)
                {
                    var distance = Math.sqrt(pow(posX+imgTemp.width/2 - layer.x) + pow(posZ+imgTemp.height/2- layer.y));
                    canvas.removeLayer("toRemoved");
                    if(!isDeployementTurn())
                    {
                        if(hasMoved == 0)
                        {
                            if (distance > move) {
                                $(this).animateLayer(layer, {
                                    x: posX+imgTemp.width/2,
                                    y: posZ+imgTemp.height/2
                                });
                                alert("move far away !");
                            }
                            else {
                                posX += layer.x;
                                posZ += layer.y;
                                hasMoved = 1;
                            }


                        }
                        else
                        {
                            $(this).animateLayer(layer, {
                                x: posX,
                                y: posZ
                            });
                        }
                    }
                    else
                    {

                        console.log(imgTemp.height + layer.y);
                        if(deploymentArea > imgTemp.height + layer.y)
                        {
                            posX = layer.x;
                            posZ = layer.y;
                        }
                        else
                        {
                            $(this).animateLayer(layer, {
                                x: posX+imgTemp.width/2,
                                y: posZ+imgTemp.height/2
                            });
                        }
                    }
                    canvas.drawLayers();
                    console.log("image height : "+imgTemp.height);
                    console.log("layer height : "+layer.y);
                    console.log(name);
                }
            }
        });

        this.positionDeployementValide = function(layer)
        {

            return(deploymentArea > imgTemp.height + layer.y)
        }
    };




    this.getMoveArea = function() {
        $('canvas').drawArc({
            strokeStyle: '#000',
            strokeWidth: 5,
            x: posX, y: posZ,
            radius: move
        });
    };

    this.addWeapon = function(gun)    {
        if(gun instanceof Weapon) {
            weapons.push(gun);
        }
    };
    this.getWeapons = function(){
        return weapons;
    };
    this.getMove = function () {
        return move;
    };
    this.setMove = function (MV) {
        move = MV;
    };
    this.getDir = function () {
        return dir;
    };
    this.setDir = function (direction) {
        dir = direction;
    };
    this.getPosX = function () {
        return posX;
    };
    this.setPosX = function (positionX) {
        posX = positionX;
    };
    this.getPosY = function () {
        return posY;
    };
    this.setPosY = function (positionY) {
        posY = positionY;
    };
    this.getCrew = function () {
        return crew;
    };
    this.setCrew = function (NbCrew) {
        crew = NbCrew;
    };
    this.setCostPoint = function (nbPoint) {
        costPoint = nbPoint;
    };
    this.getCostPoint = function () {
        return costPoint;
    };
    this.getName = function (){
        return name;
    }

};
