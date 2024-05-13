const forms = document.getElementById('forms');


forms.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = JSON.stringify({
        name: document.getElementById('nome').value,
        email: document.getElementById('mail').value,
        password: document.getElementById('senha').value
    })



    fetch("http://10.92.198.38:8080/auth/signup", {
        method: "Post",
        body: data,
        headers: { "Content-type": "application/json; charset=utf-8" }
    }).then((result) => result.json()).then((data) => console.log(data)).catch((err) => console.log(err))


});