import './Home.css'
import { About } from './about/About'
import { Certificate } from './certificate/Certificate'
import { Presentacion } from './presentacion/Presentacion'
import { Skills } from './skills/Skills'
import { DropdownComponent } from './dropdown/DropdownComponent'


export const Home = () => {
   return (
      <div className='homeContainer'>
         <Presentacion />
         <About />
         <Certificate />
         <Skills />
         <DropdownComponent/>
      </div>
   )
}