import CategoryPage from './CategoryPage';
import shoes from '../assets/shoes2.jpg';

export default function Shoes() {
  return (
    <CategoryPage
      category="footwear"
      title="Footwear"
      subtitle="Haute Couture Footwear"
      heroImage={shoes}
    />
  );
}