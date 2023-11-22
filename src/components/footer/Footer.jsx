import './Footer.css'
export const Footer = ({isDarkMode, setIsDarkMode}) => {
    return (
        <footer className={isDarkMode ? 'footer darkModeFooter' : 'footer'}>
            <div className='footer--container'>
                <a href="https://github.com/FacundoCaamano?tab=repositories" target='_blank'>
                    <img className='footer--img' src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/facundo-caama%C3%B1o-6a581324b/" target='_blank'>
                    <img className='footer--img' src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
                </a>
            </div>
            <h2 className='footer--title'>Portfolio Facundo Caamaño</h2>
        </footer>
    )
}