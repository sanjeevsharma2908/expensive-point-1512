const slides =document.querySelectorAll(".slide");
var counter =0;
slides.forEach((slide,index) =>{
    slide.style.left = `${index*100}%`
}) 
const slideImage =()=>{
    slide.forEach(
        (slide)=>{
            slide.sytle.transform = `transalateX(-${counter*100}%)`
        }
    )
}