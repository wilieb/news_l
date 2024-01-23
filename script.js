document.addEventListener('DOMContentLoaded', ()=> {

    const button = document.getElementById('btn');

    button.addEventListener('click', (e)=> {
        e.preventDefault();

        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const email = document.getElementById('email').value;
        const error = document.getElementById('err');

        if (email.trim() != "" && email.match(regex)) {
            error.style.display = 'none';
            email.value = ""
            window.location.href = "success.html"
        } else { 
            email.value = ""; 
            error.style.display = 'block'; 
        };
    });
});