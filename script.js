document.addEventListener('DOMContentLoaded', ()=> {
    const button = document.getElementById('btn');

    button.addEventListener('click', (e)=> {
        e.preventDefault();

        const email = document.getElementById('email').value;
        console.log(email);
        if (email.trim() != "") {
            email.value = ""

            setTimeout(() => {
                window.location.href = "success.html"
            }, 500);
        } else { alert('Please enter a valid email'); }
        
    });
});