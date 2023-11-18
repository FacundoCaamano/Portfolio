
import emailjs from '@emailjs/browser';

export const Form = () => {

    const handleSubmit = (event)=>{
        event.preventDefault()
        alert('se envio')
        emailjs.sendForm('service_q2ws05f', 'template_8hmvq1p', event.target, 'FxsY6Mi7n6sti1PHk' )
    }
    return (
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input className="form-control" type="text" name="nombre" required />
        </div>
        <div className="mb-3">
          <label>Asunto</label>
          <input className="form-control" type="text" name="asunto" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Su dirección de correo electrónico</label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputText" className="form-label">Motivo</label>
          <textarea className="form-control" name="message" required minLength="2"></textarea>
          <div className="invalid-feedback">Por favor ingrese al menos 2 letras.</div>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    )
}