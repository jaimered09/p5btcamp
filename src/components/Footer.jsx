import { NavLink } from 'react-router-dom'
import './footer.css';

export const Footer = () => {
    return (
        <>
            <footer id='footer-full' className="w-100 py-8 flex-shrink-0 footer-yellow-bg text-white">
                <div className="container py-2">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-5">
                            <NavLink className="" to="/"><img src="public/images2/footerlogos.png" alt="logo" className="img-fluid" /></NavLink>
                            <br />
                            <p className="small text-muted">Los mejores celulares | Respaldo ProPhone</p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-black mb-3">Enlaces</h5>
                            <ul className="list-unstyled text-muted">
                                <li id='lista'><NavLink to="/">Inicio</NavLink></li>
                                <li id='lista' ><NavLink to="/menu">Productos</NavLink></li>
                                <li id='lista'><NavLink to="/novedades">Novedades</NavLink></li>
                                <li id='lista'><NavLink to="/">Trabaja con nosotros</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-black mb-3">Empresa</h5>
                            <ul className="list-unstyled text-muted">
                                <li id='lista'><NavLink to="#">Procesos</NavLink></li>
                                <li id='lista'><NavLink to="#">Comunidad</NavLink></li>
                                <li id='lista'><NavLink to="#">Reciclaje</NavLink></li>
                                <li id='lista'><NavLink to="#">Política de privacidad</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <p className="small text-muted">BUSCA TU PRÓXIMO CELULAR:</p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Marca | Modelo" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-auto">
                    <p className="small text-muted mb-0">&copy; Copyrights. Todos los derechos reservados.
                        <NavLink className="text-primary" to="/" >prophone.cl</NavLink></p>
                        </div>
                        </div>
            </footer>
        </>
    )
}


