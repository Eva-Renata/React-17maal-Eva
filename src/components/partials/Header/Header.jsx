import logo from '../../../assets/images/ColorWheel.png'  //importing the picture, and naming it "logo"
import { Nav } from '../Nav/Nav'
import './Header.scss'

export const Header = (links) => {
  return(
    <header id="header">
      {/* inserting the picture by calling it by the name */}
      <img src={logo} alt="Logo"></img>
      <div>
        <h1>THE GLOBAL GOALS</h1>
        <h2>For sustainable development</h2>
          <Nav data={links.data}/>
      </div>
      
    </header>
  )
}
