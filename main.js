var accordques=document.querySelectorAll(".accord-ques");
// console.log(accordques);
accordques.forEach(function(e){
    // console.log(accordques);
    e.addEventListener("click",function(){
        if(e.nextElementSibling.classList.contains("para")){
            e.nextElementSibling.classList.remove("para");
            e.querySelector("i").style.transform="rotate(180deg)";
        }
        else{
            e.nextElementSibling.classList.add("para");
            e.querySelector("i").style.transform="rotate(0deg)";
        }

    })

})
