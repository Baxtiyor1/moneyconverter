form.addEventListener('submit', function(e){
    e.preventDefault();

    let inputValue = (input.value.trim())

    let selectValue = (select.value)
    
    text.textContent =(inputValue / selectValue).toFixed(2);

    input.value = '' // null
})