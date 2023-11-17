import Angular from '../../../../assets/certificates/Angular.png';
import desarrolloWeb from '../../../../assets/certificates/desarrolloWeb.png'
import ReactJs from '../../../../assets/certificates/ReactJs.png' 
import JavaScript from '../../../../assets/certificates/JavaScript.png'
import './Certificate.css' 
export const Certificate =()=>{
    return(
        <>
            <div className='certificatesContainer' id='certificate'>
                <img className='certificatesContainer--img'src={desarrolloWeb} alt="" />
                <img className='certificatesContainer--img'src={JavaScript} alt="" />
                <img className='certificatesContainer--img'src={ReactJs} alt="" />
                <img className='certificatesContainer--img'src={Angular} alt="" />
            </div>
        </>
    )
}