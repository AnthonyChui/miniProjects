const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
const steps = document.querySelectorAll(".step");
let progressBar = document.querySelector("progress");
let stepNumber = 0;

function update(){

    progress.style.width = (stepNumber-1) / (3) * 100 + '%';

    for(let i = 0; i < steps.length; i++){
        if(i<stepNumber){
            steps[i].classList.add("active");
        }
        else{
            steps[i].classList.remove("active");
        }
    }


    if(stepNumber==4){
        nextButton.disabled = true;
    }
    else{
        nextButton.disabled = false;
    }
    if(stepNumber==0){
        prevButton.disabled = true;
    }
    else{
        prevButton.disabled = false;
    }
}

function moveProgressBarBack(){

    return;
}

function pressNext(e){
    stepNumber++;
    update();
}

function pressPrev(e){
    stepNumber--;
    update();
}


nextButton.addEventListener("click", pressNext);
prevButton.addEventListener("click", pressPrev);