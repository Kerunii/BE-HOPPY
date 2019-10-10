const titlesArray = [...document.querySelectorAll('.title')]

for (i=0; i<titlesArray.length; i++){
    title = titlesArray[i]
}


title.addEventListener('click',toggle);

function toggle (){
  title.classList.toggle('moved');
}