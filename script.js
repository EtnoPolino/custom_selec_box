const selectField = document.querySelector('#selectField');
const selectText = document.querySelector('#selectText');
const options = document.querySelectorAll('.options');
const listOptions = document.querySelector('#list');
const arrowIcon = document.querySelector('#arrowIcon');

selectField.addEventListener('click',() => { 
    listOptions.classList.toggle('hide'); // chaque fois qu'on va cliquer sur le même boutton il va mettre ou enlever
    arrowIcon.classList.toggle('rotate');
}); 

options.forEach((option) => {
    option.addEventListener('click', () => {
        selectText.innerHTML = option.textContent;
        listOptions.classList.toggle('hide')
        arrowIcon.classList.toggle('rotate');
    });
});
