import './Home.css'
import { About } from './about/About'
import { Certificate } from './certificate/Certificate'
import { Presentacion } from './presentacion/Presentacion'

export const Home = () => {
   return(
      <section className='homeContainer'>
         <Presentacion/>
         <About/>
         <Certificate/>
      </section>
   )
}