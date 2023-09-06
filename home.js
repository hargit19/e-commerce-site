function myfunc(){
    if(document.getElementById("nav-list").style.display == "none"){
        document.getElementById("nav-list").style.display = "block";
    }
    else{
        document.getElementById("nav-list").style.display = "none"
    }
}
imagearr = ["img/products/f1.jpg","img/products/f2.jpg","img/products/f3.jpg","img/products/f4.jpg"]

document.getElementById("product2").addEventListener("click",function(){
    document.getElementById("prod-img").src = "img/products/f2.jpg";
})

