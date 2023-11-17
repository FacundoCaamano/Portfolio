import './Presentacion.css'
import foto from '../../../../assets/imgs/foto.jpg'
export const Presentacion =()=>{
    return (
        <div className='presentacionContainer' id='presentacion'>
            <section className="presentation-section">
                <div className="container">
                    <div className="intro">
                        <h1>Hola, soy <span className="highlight">Facundo Caamaño</span></h1>
                        <p>Soy un apasionado desarrollador frontend con experiencia en la creación de experiencias web increíbles.</p>
                    </div>
                    <div className="profile-image">
                        <img src={foto} alt="Tu Foto" />
                    </div>
                </div>
            </section>
        </div>

    )
}