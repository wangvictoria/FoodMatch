var insertName = "inserthere";
var prevName = "init";
var nameList = ["Waseem", "Daniel", "Graham", "John", "Vikash", "Julie", "Dominique", "Catie", "Tara", "Sandra", "Gerald"];
var globCounter = 20;

/* Dislike Button */

function changeImage(imageNum)
{
    document.getElementById(imageNum).style.filter = "grayscale(100%)";
    return false;
}

// function changeImage(imageNum, name)
// {
// var img = document.getElementById("image" + imageNum);
// img.src="images/test2";

// const elem = document.getElementById(name.trim());
// document.body.remove(elem);
// }


/* Like Button */
function addRecommend(name, link){
//    if (Math.random() < 0.3) {
//        return;
//    }
    let elem = document.createElement(name);
    const pIndex = Math.floor((Math.random() * nameList.length) + 1);

    name = name.replaceAll("_", " ");

    elem.innerHTML = "<div class=\"col-lg-10 col-md-6 icon-box\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n" + 
        "<div class=\"icon\"><i class=\"icofont-check-circled\"></i></div>\n" + 
        "<h4 class=\"title\"><a href=\"" + link + "\">" + name + "</a></h4>\n" +
        "<p class=\"description\">Matched with " + nameList[pIndex] + " " + globCounter + "s ago</p>\n" +
        "</div>";
    
    
    if (globCounter > 3){
        const deduct = Math.floor((Math.random() * 3) + 1);
        globCounter -= deduct;
    }
    const parentName = document.getElementById(insertName);
    let prev = document.getElementById(prevName);
    prevName = name;
    console.log(prevName);
    parentName.insertBefore(elem, prev);

    return true;
}