import CategoryPage from './CategoryPage';
import jewelryImage from '../assets/ring.jpg';

export default function Jewelry() {
  return (
    <CategoryPage
      category="jewelry"
      title="Jewelry & Accessories"
      subtitle="Haute Couture Adornments"
      heroImage={jewelryImage}
    />
  );
}