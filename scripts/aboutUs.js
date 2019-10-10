const titlesArray = [...document.querySelectorAll('.title')]

for (i=0; i<titlesArray.length; i++){
    titlesArray[i].addEventListener('click',toggle);
}

function toggle (event){
  event.currentTarget.classList.toggle('moved');
}