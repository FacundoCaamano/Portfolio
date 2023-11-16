import './Home.css'
import { About } from './about/About'
import { Presentacion } from './presentacion/Presentacion'

export const Home = () => {
   return(
      <section className='homeContainer'>
         <Presentacion/>
         <About/>
      </section>
   )
}