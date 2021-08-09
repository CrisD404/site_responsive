document.getElementById("Inicio").innerHTML += 
`
  <img src="imagenes/camarero.png" alt="Logo - La Ferretería" class="marco-imagen">
  <h1 class="titulo">La Ferretería</h1>
  <p>
   Bar 24hs
  </p>
`

document.getElementsByClassName("pie")[0].innerHTML +=
`
<ul class="lista-horizontal lista-reset link-redes">
<li>
    <a href="https://www.facebook.com" target="new">
        <i class="fab fa-facebook-f"></i>
        Facebook
    </a>
</li>
<li>
    <a href="https://www.twitter.com" target="new">
        <i class="fab fa-twitter"></i>
        Twitter
    </a>
</li>
<li>
    <a href="https://www.instagram.com" target="new">
        <i class="fab fa-instagram"></i>
        Instagram
    </a>
</li>
<li>
    <a href="https://www.youtube.com.ar" target="new">
        <i class="fab fa-youtube"></i>
        YouTube
    </a>
</li>
</ul>

`


let request = new XMLHttpRequest();
request.open('GET', 'servicios.json', false);
request.send();
let obj = JSON.parse(request.response);

obj.servicios.forEach(e => {

    document.getElementById("services").innerHTML +=
        `
    <div class="columna-mitad columna-lg-uncuarto">
      <h3 class="efecto-subrrayar">${e.titulo}</h3>
      <p>${e.descripcion}</p>
      <button>Saber más</button>
    </div>
    `

});


let section = document.getElementById("Servicios");



section.addEventListener("click", (e) => {

    if (e.target.tagName === "BUTTON") {

        console.log(e.target.parentNode);

        let titulo = e.target.parentNode.getElementsByTagName("h3")[0].innerHTML;

        document.body.innerHTML +=
            `
            <div class="modal">
                <div class="modal_box">
                    <img src="/imagenes/close.png" alt="Cerrar modal del formulario" class="close_btn">
                    <form action="#" id="FormularioContacto" class="formservice columna-mitad columna-lg-uncuarto">

                        <div>
                            <label for="ElNombre">Nombre:</label>

                            <input type="text" id="ElNombre" required>
                        </div>

                        <div>
                            <label for="ElMail">Mail:</label>
                            <input type="email" id="ElMail" required>
                        </div>

                        <div>
                            <label for="Consulta">Su Consulta:</label>

                            <textarea class="form_consulta" cols="30" rows="5" required minlength="10"></textarea>
                        </div>

                        <a id="sendBtn" href="mailto:example@email.com?subject=Email%20Subject">Enviar consulta</a>.

                    </form>

                </div>
            </div>
        `
        let body = document.getElementsByClassName("form_consulta")[0]

        body.value = "¡Hola! Quisiera saber más sobre el servicio de: "+ titulo;

        document.getElementsByClassName("close_btn")[0].addEventListener("click", ()=>{
            location.reload();
            location.href.includes("#Servicios") ? '' : location.href = '#Servicios';
            document.getElementsByClassName("modal")[0].remove();
        })

        document.getElementsByClassName("formservice")[0].addEventListener("submit", (e)=>{
            e.preventDefault()
            alert("hola");
        })
        document.getElementById("sendBtn").href = `mailto:unmail?subject=${titulo}&body=${body.value}`
    }
});



