import './Home.css'
import { About } from './about/About'
import { Certificate } from './certificate/Certificate'
import { Presentacion } from './presentacion/Presentacion'
import { Skills } from './skills/Skills'
import { DropdownComponent } from './dropdown/DropdownComponent'


export const Home = ({isDarkMode, setIsDarkMode}) => {
   return (
      <div className='homeContainer'>
         <Presentacion isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
         <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
         <Certificate />
         <Skills />
         <DropdownComponent/>
      </div>
   )
}