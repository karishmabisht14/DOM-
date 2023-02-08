const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').style.backgroundColor = "black";
});

btn.addEventListener('mouseout', (e) => {
    document.querySelector('body').style.backgroundColor = 'white';
});

btn.addEventListener('mouseover', (e) => {
    document.querySelector('#mainheading').textContent = "Form Validation";
});

const myForm = document.querySelector('.my-form')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('.users');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '')
    {
        msg.classList.add('error');
        msg.innerHTML = "Please enter all fields.";

        setTimeout(() => msg.remove(), 3000);

    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        userList.appendChild(li);

        //Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }
});