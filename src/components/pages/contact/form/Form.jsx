import './Form.css'
import emailjs from '@emailjs/browser';

export const Form = () => {

    const handleSubmit = (event)=>{
        event.preventDefault()
        alert('se envio')
        emailjs.sendForm('service_q2ws05f', 'template_8hmvq1p', event.target, 'FxsY6Mi7n6sti1PHk' )
    }
    return (
        <form onSubmit={handleSubmit} className='formContact'>
        <div className="mb-3">
          <label className="form-label labelForm">Nombre</label>
          <input className="form-control inputForm" type="text" name="nombre" required />
        </div>
        <div className="mb-3">
          <label className="form-label labelForm">Asunto</label>
          <input className="form-control inputForm" type="text" name="asunto" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label labelForm">Su dirección de correo electrónico</label>
          <input type="email" name='email' className="form-control inputForm" id="exampleInputEmail1" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputText" className="form-label labelForm">Motivo</label>
          <textarea className="form-control inputForm" name="message" required minLength="2"></textarea>
          <div className="invalid-feedback">Por favor ingrese al menos 2 letras.</div>
        </div>
        <div className="mb-3 buttonsForm">
          <button type="submit" className="btn btn-primary btnForm">Enviar</button>
          <button type="reset" className="btn btn-primary btnForm">reset</button>
        </div>
      </form>
    )
}