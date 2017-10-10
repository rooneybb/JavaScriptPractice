window.onload = init;

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++){
        images[i].onclick = changePic;
        images[i].onmouseover = picMouseOverSwitch;
        images[i].onmouseout = picMouseNotOver;
    }

}




function changePic(eventObj) {
    var pic = eventObj.target;
    var stringCheck = pic.src.toString();
    var name = pic.id;

    if (stringCheck.indexOf("_0") < 0) {
        pic.src = "resources/" + name + "_0.jpeg";
    }
    else {
        pic.src = "resources/" + name + ".jpeg";
    }

    pic.onmouseover = picMouseOverSwitch;
    setTimeout(picTimeSwitch, 5000, pic);

}

function picTimeSwitch(pic){
    pic.src = "resources/cool.jpeg";
}

function picMouseOverSwitch(eventObj) {
    var pic = eventObj.target;
    var origSrc = pic.src.toString();

    if (origSrc.indexOf("cool") > 0){
        pic.src = "resources/notCool.jpeg";
        console.log("picMouseOverSwitch() called on " + pic.src + ". Picture should have changed!");
    }
    else {
        console.log("picMouseOverSwitch() called on " + origSrc);
    }
}

function picMouseNotOver(eventObj){
    var pic = eventObj.target;
    var name = pic.id;
    var origSrc = pic.src.toString();
    if (origSrc.indexOf("notCool") > 0){
        pic.src = "resources/" + name + ".jpeg";
        console.log("picMouseNotOver() called on " + pic.src + ". Picture should have changed!");
    }
    else {
        console.log("picMouseNotOver() called on " + origSrc);
    }

}

