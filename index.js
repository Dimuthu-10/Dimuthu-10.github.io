var imgBox = document.getElementById("imgBox");
var fullImg = document.getElementById("fullImg");

function OpenImg(src){
    imgBox.style.display = "flex";
    fullImg.src = src;
}

function CloseImg(){
    imgBox.style.display = "none";
}
