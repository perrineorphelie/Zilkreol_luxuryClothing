import CategoryPage from './CategoryPage';
import perfumeImage from '../assets/perfume.jpg';

export default function Perfumes() {
  return (
    <CategoryPage
      category="perfumes"
      title="Perfumes"
      subtitle="Haute Couture Fragrance"
      heroImage={perfumeImage}
    />
  );
}