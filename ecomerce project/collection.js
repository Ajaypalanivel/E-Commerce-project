var productlist=document.querySelector(".product-container")
var productarray=productlist.querySelectorAll("div")
var searchbutton=document.getElementById("search")
searchbutton.addEventListener("keyup",function(){
    var entertext=event.target.value.toUpperCase()
    for(i=0;i<productarray.length;i=i+1){
        var productname=productarray[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(entertext)<0){
            productarray[i].style.display="none"
        }
        else{
            productarray[i].style.display="block"
        }
    }
})