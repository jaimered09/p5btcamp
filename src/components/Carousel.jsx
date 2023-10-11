import { NavLink } from "react-router-dom";
import carousel from './carousel.css';


export const Carousel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="public/images2/iPhone-14 header copy.webp" className="d-block w-100" alt="..." width="1440" height="620" />
                    </div>
                    <div className="carousel-item">
                        <img src="public/images2/carouselheader.webp" className="d-block w-100" alt="..." width="1440" height="620" />
                    </div>
                    <div className="carousel-item">
                        <img src="public/images2/bannerheader iphone2- copy.webp" className="d-block w-100" alt="..." width="1440" height="620" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="titular">
                <p>
                    <h4> 📱 LOS TOP #3 SAMSUNG DE LA SEMANA 📱</h4>
                </p>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-4 mb-2">
                    <div className="thumbnail">
                        <img src="public/images2/iconmobile.png" alt="phone1" />
                        <div className="caption">
                            <h3>Samsung Galaxy S23</h3>
                            <p><a to="#" className="btn btn-primary" role="button">Comprar</a> <a to="#" className="btn btn-default" role="button">Ver</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-2">
                    <div className="thumbnail">
                        <img src="public/images2/iconmobile.png" alt="phone2" />
                        <div className="caption">
                            <h3>Samsung Galaxy S22</h3>
                            <p><a to="#" className="btn btn-primary" role="button">Comprar</a> <a to="#" className="btn btn-default" role="button">Ver</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-2">
                    <div className="thumbnail">
                        <img src="public/images2/iconmobile.png" alt="phone3" />
                        <div className="caption">
                            <h3>Samsung Galaxy S21</h3>
                            <p><a to="#" className="btn btn-primary" role="button">Comprar</a> <a to="#" className="btn btn-default" role="button">Ver</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="public/images2/header_landing_todo copy.png" alt="" />
            </div>
            <div className="titular2">
                <h4> CONOCE LA NORMATIVA DE LA SUBTEL AQUÍ</h4>
                <img src="public/images2/logo_subtel_reducido.png" alt="" />
                <img src="public/images2/banner 5g.png" alt="" />
            </div>
        </>
    )
}





