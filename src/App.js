import { Container, Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './app/components/Header';
import Footer from './app/components/Footer';

function App() {
    return (
        <div className='App'>
           <Header />
            <CampsitesDirectoryPage />
            <Footer />
        </div>
    );
}

export default App;
