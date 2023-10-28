//Purpose: JS code for Lab 7 Practice 2

//Function that changes the colors the border and background, and width based on values in text field.
function change_color(){
    //Sets values from text field into corresponding variables
    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value;
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    var tag = document.getElementById("paragraph"); //assigns "paragraph" element to tag
    tag.style.borderColor = `rgb(${border_R}, ${border_G}, ${border_B})`; //changes the border colors of "paragraph"
    tag.style.borderWidth = border_width; //changes the width of "paragraph"
    tag.style.backgroundColor = `rgb(${bg_R}, ${bg_G}, ${bg_B})`; //changes the background color of "paragraph"
}