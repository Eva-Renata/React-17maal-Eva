import './Footer.scss'
import PnudPic from '../../../assets/images/Partner-UNDP-Full.png'

export const Footer = () => {
  return(
    <footer>
      <div>
            <h3>Eksterne Links:</h3>
            <a href="">https://www.verdensmaalene.dk/</a>
            <a href="">https://www.globalgoals.org/</a>
            <a href="">https://www.un.org/sustainabledevelopment/</a>
            <a href="">https://worldslargestlesson.globalgoals.org/</a>
            <a href="">https://www.unenvironment.org/</a>
            <a href="">https://ve.dk/klimaberegner/</a>
        </div>
        <div>
            <h3>Ressourcer:</h3>
            <a href="pdf/Bliver verden bedre_ Final small.pdf" target="_blank">Bliver Verden Bedre (.pdf)</a>
            <a href="pdf/SPOTLIGHT-Rapport_Enkeltsider.pdf" target="_blank">Spotlight Rapport (.pdf)</a>
        </div>
        <div>
            <img src={PnudPic} alt="pnud"/>
      </div>
    </footer>
  )
}