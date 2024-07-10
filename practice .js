document.getElementById('username')
.insertAdjacentHTML('beforeBegin','<label for="username">Username:</label>');
document.getElementById('password')
.insertAdjacentHTML('beforeBegin','<label for="password">Password:</label>');
document.getElementById('confirmPassword')
.insertAdjacentHTML('beforeBegin','<label for="confirmPassword">ConfirmPassword:</label>');



const checkInput = () => {
    const errorElement = Array.from( event.target.parentNode.queryselectorsAll('span'));
    if( event.target.value === '' && !errorElement.length){
        event.target.insertAdjacentHTML('afterEnd','<span class="text-danger">Required</span>')
    }
    if(errorElement && event.target.value!==''){
        errorElement.forEach(elem => elem.remove());
    }
};
document.getElementById('username')
.addEventListener('blur',checkInput);

document.getElementById('password')
.addEventListener('blur',checkInput);


document.getElementById('confirmPassword')
.addEventListener('blur',checkInput);
