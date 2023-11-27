import logo from '../logo.jpg';
import Nav from './Nav';

function Header() {
    return <header>
        <img src={logo} alt='App Header Logo' width='202'/>
        <Nav />
    </header>;
}

export default Header;