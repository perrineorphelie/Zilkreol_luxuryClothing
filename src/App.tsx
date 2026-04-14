import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NewArrivals from './pages/NewArrivals.tsx';
import Outwear from './pages/Outerwear.tsx';
import Dresses from './pages/Dresses.tsx';
import Tops from './pages/Tops.tsx';
import Footwear from './pages/Footwear.tsx';
import Perfumes from './pages/Perfumes.tsx';
import Jewelry from './pages/Jewelry.tsx';
import Gifts from './pages/Gifts.tsx';
import StoreLocator from './pages/StoreLocator.tsx';
import BookAppointment from './pages/BookAppointment.tsx';
import Contact from './pages/Contact.tsx';
import Profile from './pages/Profile.tsx';
import Wishlist from './pages/Wishlist.tsx';
import Cart from './pages/Cart.tsx';
import ProductPage from './pages/ProductPage.tsx';
import Search from './pages/Search.tsx';
import Bottoms from './pages/Bottoms.tsx';
import Beachwear from './pages/Beachwear.tsx';
import Coords from './pages/Coords.tsx';
import Shop from './pages/Shop';
import PersonalStylist from './pages/PersonalStylist';
import ShippingReturns from './pages/ShippingReturns';
import FAQ from './pages/FAQ';
import Heritage from './pages/Heritage';
import ArtOfCraft from './pages/ArtOfCraft';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';
import Press from './pages/Press';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';
import Accessibility from './pages/Accessibility';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router basename="/Zilkreol_luxuryClothing/">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="new" element={<NewArrivals />} />
                <Route path="outerwear" element={<Outwear />} />
                <Route path="dresses" element={<Dresses />} />
                <Route path="bottoms" element={<Bottoms />} />
                <Route path="tops" element={<Tops />} />
                <Route path="footwear" element={<Footwear />} />
                <Route path="perfumes" element={<Perfumes />} />
                <Route path="jewelry" element={<Jewelry />} />
                <Route path="gifts" element={<Gifts />} />
                <Route path="stores" element={<StoreLocator />} />
                <Route path="book" element={<BookAppointment />} />
                <Route path="contact" element={<Contact />} />
                <Route path="profile" element={<Profile />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="cart" element={<Cart />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="search" element={<Search />} />
                <Route path="beachwear" element={<Beachwear />} />
                <Route path="coords" element={<Coords />} />
                <Route path="shop" element={<Shop />} />

                {/* Footer pages */}
                <Route path="stylist" element={<PersonalStylist />} />
                <Route path="shipping" element={<ShippingReturns />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="about" element={<Heritage />} />
                <Route path="craft" element={<ArtOfCraft />} />
                <Route path="sustainability" element={<Sustainability />} />
                <Route path="careers" element={<Careers />} />
                <Route path="press" element={<Press />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfUse />} />
                <Route path="cookies" element={<CookiePolicy />} />
                <Route path="accessibility" element={<Accessibility />} />
              </Route>
            </Routes>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;