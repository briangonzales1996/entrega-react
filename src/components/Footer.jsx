import React from 'react'

export const Footer = () => {
    const base_path = import.meta.env.BASE_URL;
    return (
        <footer className="footer">
            <div>
                <div className="footer-items">
                    <div className="footer-item">
                        <h3>PRIVACIDAD</h3>
                        <div className="form-services">
                            <p>Autores</p>
                            <p>Privacity</p>
                            <p>Freelancers</p>
                            <p>Agencies</p>
                            <p>Tienda</p>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h3>SERVICIOS</h3>
                        <div className="form-services">
                            <p>Online</p>
                            <p>PayPal</p>
                            <p>Credito</p>
                            <p>Digital</p>
                            <p>Moda</p>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h3>INFORMACIÓN</h3>
                        <div className="form-services">
                            <p>Documentación</p>
                            <p>Blog</p>
                            <p>Nike</p>
                            <p>Systema</p>
                            <p>Más</p>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h3>AYUDA</h3>
                        <div className="form-services">
                            <p>Servicios</p>
                            <p>Help</p>
                            <p>About Us</p>
                            <p>Document</p>
                            <p>Legal</p>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h3>REDES SOCIALES</h3>
                        <div className="form-services">
                            <p>Facebook</p>
                            <p>Youtube</p>
                            <p>Instragram</p>
                            <p>Linkeding</p>
                        </div>
                    </div>
                </div>
                <div className="footer-logo">
                    <img src="assets/logo.png" alt="logo de windows" />
                </div>
            </div>
        </footer>
    )
}
