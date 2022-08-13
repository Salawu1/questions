//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll('.question-btn'); 


questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

//btns.addEventListener(function(btn){
    btn.EventListener("click", function (){
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
       // console.log(e.currentTarget);
    });
});