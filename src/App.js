import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPgae from './pages/AboutPgae';
import './App.css';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
    }, [dispatch]);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='about' element={<AboutPgae />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}
                />            </Routes>
            <Footer />
        </div>
    );
}

export default App;