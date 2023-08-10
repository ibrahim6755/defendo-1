import './App.css';
import ContactUs from './components/pages/ContactUs/ContactUs';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnnouncementBar from './components/announcement-bar/AnnouncementBar';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import NewReleases from './components/pages/NewReleases/NewReleases';
import Grid4 from './components/grid/Grid4';
import Chains from './components/pages/Chains/Chains';
import Rings from './components/pages/Rings/Rings';
import Bracelets from './components/pages/Bracelets/Bracelets';
import FAQs from './components/pages/FAQs/FAQs';
import ProductDescription from './components/pages/Product description/ProductDescription';
import Account from './components/pages/Account/Account';
import SignUp from './components/SignUp/SignUp';
import Checkout from './components/Checkout/Checkout'
import SecondaryNav from './components/SecondaryNav/SecondaryNav';
import ComingSoon from './components/ComingSoon/ComingSoon';
import ReturnRefund from './components/pages/ReturnRefund/ReturnRefund';
import WarrantyCoverage from './components/pages/WarrantyCoverage/WarrantyCoverage';
import LimitedDrops from './components/pages/LimitedDrops/LimitedDrops';
import BraceletDescription from './components/pages/bracelet-description/BraceletDescription';
import ChainDescription from './components/pages/chain description/ChainDescription'
import CheckoutSuccess from './components/Checkout success/CheckoutSuccess'
import AdminPanel from './AdminPanel/AdminPanel';
import LimitedDropsDescription from './components/pages/limited Drop Description/LimitedDropsDescription'
import NewReleasesDescription from './components/pages/NewReleases Description/NewReleasesDescription';
import RingsProduct from './AdminPanel/RingsProduct';
import Orders from './AdminPanel/Orders';



function App() {
  return (
    <Router>
      <AnnouncementBar />
      <NavBar />
      <SecondaryNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/new-releases' element={<NewReleases />} />
        <Route path='/grid4*4' element={<Grid4 />} />
        <Route path='/Pendants' element={<Chains />} />
        <Route path='/chains' element={<Chains />} />
        <Route path='/Rings' element={<Rings />} />
        <Route path='/Bracelets' element={<Bracelets />} />
        <Route path='/faq' element={<FAQs />} />
        <Route path='/product-description/:id' element={<ProductDescription />} />
        <Route path='/bracelet-description/:id' element={<BraceletDescription />} />
        <Route path='/chain-description/:id' element={<ChainDescription />} />
        <Route path='/account/login' element={<Account />} />
        <Route path='/account/signup' element={<SignUp />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/coming-soon' element={<ComingSoon />} />
        <Route path='/warranty-coverage' element={<WarrantyCoverage />} />
        <Route path='/return-refund' element={<ReturnRefund />} />
        <Route path='/limited-drops' element={<LimitedDrops />} />

        <Route path='/Admin-panel' element={<AdminPanel/>} />
        <Route path='/faq' element={<FAQs/>} />
        <Route path='/product-description/:id' element={<ProductDescription/>} />
        <Route path='/bracelet-description/:id' element={<BraceletDescription/>} />
        <Route path='/chain-description/:id' element={<ChainDescription />} />
        <Route path='/limitedDrop-description/:id' element={<LimitedDropsDescription />} />
        <Route path='/newReleases-description/:id' element={<NewReleasesDescription />} />
        <Route path='/account/login' element={<Account/>} />
        <Route path='/account/signup' element={<SignUp/>} />
        <Route path='/coming-soon' element={<ComingSoon/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/checkout-success' element={<CheckoutSuccess/>} />
        <Route path='/warranty-coverage' element={<WarrantyCoverage/>} />
        <Route path='/return-refund' element={<ReturnRefund/>} />
        <Route path='/limited-drops' element={<LimitedDrops/>} />
        <Route path='/ring-product' element={<RingsProduct />} />
        <Route path='/admin-panel/orders' element={<Orders />} />

        
        


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
