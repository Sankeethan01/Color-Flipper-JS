var code=document.getElementById("code")
var box=document.querySelector(".box")
var button=document.querySelector("button")

const arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


 
button.addEventListener('click',function(){
        let colorCode='#'
        for(let i=0;i<6;i++)
        {
            colorCode+=arr[Math.floor(Math.random()*16)]
        }
        box.style.background=colorCode
       code.innerHTML=colorCode
})