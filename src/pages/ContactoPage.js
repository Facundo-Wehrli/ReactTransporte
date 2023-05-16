import "../styles/contacto.css"

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <section>
                <h2>Contacto Rápido</h2>
                <form action="" className="formulario">
                    <p>
                        <label htmlFor="">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </p>

                    <p>
                        <label htmlFor="">Telefono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </section>
            <section className="datos">
                <h2>Otras vias de comunicación</h2>
                <p>Tambien podes contactarte con nosotros usuando los siguientes medios</p>
                <ul>
                    <li ><a href="https://www.instagram.com/faku_webdev/">Instagram</a></li>
                    <li ><a href="https://www.linkedin.com/in/facundo-wehrli/">Linkedin</a></li>
                    <li ><a href="https://github.com/Facundo-Wehrli">Github</a></li>
                </ul>
            </section>
        </main>
    )
}

export default ContactoPage;