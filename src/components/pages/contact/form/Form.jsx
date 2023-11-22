import './Form.css'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
export const Form = ({isDarkMode, setIsDarkMode}) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    emailjs.sendForm(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE, event.target, import.meta.env.VITE_KEY)

    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });

    event.target.reset()
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={isDarkMode ? 'formContact darkModeForm' : 'formContact'}>
        <div className="mb-3">
          <label className={isDarkMode ? "form-label labelForm darkModeForm" : "form-label labelForm"}>Nombre</label>
          <input className="form-control inputForm" type="text" name="nombre" required />
        </div>
        <div className="mb-3">
          <label className={isDarkMode ? "form-label labelForm darkModeForm" : "form-label labelForm"}>Asunto</label>
          <input className="form-control inputForm" type="text" name="asunto" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className={isDarkMode ? "form-label labelForm darkModeForm" : "form-label labelForm"}>Su dirección de correo electrónico</label>
          <input type="email" name='email' className="form-control inputForm" id="exampleInputEmail1" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputText" className={isDarkMode ? "form-label labelForm darkModeForm" : "form-label labelForm"}>Motivo</label>
          <textarea className="form-control inputForm" name="message" required minLength="2"></textarea>
          <div className="invalid-feedback">Por favor ingrese al menos 2 letras.</div>
        </div>
        <div className="mb-3 buttonsForm">
          <button type="submit" className="btn btn-primary btnForm">Enviar</button>
          <button type="reset" className="btn btn-primary btnForm">reset</button>
        </div>
      </form>
    </>
  )
}