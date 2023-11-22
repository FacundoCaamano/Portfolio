import { Form } from "./form/Form"
import './Contact.css'
export const Contact = ({isDarkMode, setIsDarkMode})=>{
    return(
        <div className="formContainer">
            <Form isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        </div>
    )
}