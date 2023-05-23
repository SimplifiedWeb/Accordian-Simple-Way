// const plus = document.querySelector('.plus')
// // console.log(plus)
// const minus = document.querySelector(".minus")
// const question = document.querySelector('.question')
// const answer = document.querySelector('.answer')
// const content = document.querySelector('.content')
// question.addEventListener("click", function(e){
//    if(answer.classList.contains("active")){
//     answer.classList.remove("active");
//     plus.style.display = "none"
//     minus.style.display = "block"
//    }else{
//     answer.classList.add("active")
//     plus.style.display = "block"
//     minus.style.display = "none"
//    }
// })                                                                           // Trying a different Approach.
// content.addEventListener("click", function(e){
//     if(answer.classList.contains("active")){
//         answer.classList.remove("active");
//         plus.style.display = "none"
//         minus.style.display = "block"
//        }else{
//         answer.classList.add("active")
//         plus.style.display = "block"
//         minus.style.display = "none"
//        }
// })



const accordian = document.getElementsByClassName("content-accordian")

for(i = 0; i < accordian.length; i++){
    accordian[i].addEventListener("click", function(e){                                               
        this.classList.toggle("active")
        
    })
}





