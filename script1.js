/* window.addEventListener("load", () => { */

/* defino variables */
/*     let div = document.querySelector("div") */

/* let nombre = prompt("como te llama vo") 
 
let color = prompt("pone tu color favorito")  */

/* agrego color de fonod igual que el definido por usuario */
/* document.body.style.backgroundColor = color; */

/* agrego un div con el saludo */
/* div.innerHTML = "Hola " + nombre */

/* agrego if, por si el usuario no se logea*/
/* if (div !== "Hola " + nombre) {
    div.innerHTML = "Hola invitado" 
}
console.log(div);
 
console.log(color); */

/* define confirme. estilo dark */
/* let confirme = confirm("queres estilo dark?")
 
 
/* si es true pone dark mode */

/*
if (confirme == true ) {
    let p = document.querySelector("p")
    p.style.backgroundColor = "red"
    
}   
 */





/* fetch("https://api.chucknorris.io/jokes/random")
.then(function(response){
return response.json();
})
.then(function(data){
console.log(data)
})
.catch(function(error){
console.error(error)
}) */

/* declaro variable */
/* let num = 34 */
/* la guardo en localstorage */
/* localStorage.setItem('test', num);
 */
/* prueba */
/* alert( localStorage.getItem('test') ); // 1
 
let test = localStorage.test = 2
console.log(test);
 */




/* area.value = localStorage.getItem('area');
 
area.oninput = () => {
    localStorage.setItem('area', area.value)
};
 */
/* })
 */

window.addEventListener("load", (e) => {
    let form = document.querySelector('#form')
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let repassword = document.querySelector('#repassword')
    let password = document.querySelector('#password')
    let nameError = document.querySelector('#nameError')
    let emailError = document.querySelector('#emailError')
    let repasswordError = document.querySelector('#repasswordError')
    let passwordError = document.querySelector('#passwordError')
    let errores = []
    console.log(form);

    form.addEventListener("submit", function (event) {
        if (name.value == "") {
            errores.push("El campo nombre está vacío");
        }
        if (name.value.length < 1) {
            errores.push("El campo nombre debe ser mas largo que una letra");
        }
        if (email.value == "") {
            errores.push("El campo email está vacío");
        }
        if (email.value.length < 1) {
            errores.push("El campo email debe ser mas largo que una letra");
        }        
        if (password.value == "") {
            errores.push("El password nombre está vacío");
        }
        if (password.value.length < 1) {
            errores.push("El campo password debe ser mas largo que una letra");
        }
        if (repassword.value == "") {
            errores.push("El repassword nombre está vacío");
        }
        if (repassword.value.length < 1) {
            errores.push("El campo repassword debe ser mas largo que una letra");
        }
        if (errores.length > 1) {
            event.preventDefault();
            let ulErrores = document.querySelector(".errores ul");
            errores.forEach(error => {
                ulErrores.innerHTML += ("<li>" + error + "</li>")
            })
        }
    })
})
