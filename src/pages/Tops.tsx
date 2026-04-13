import CategoryPage from './CategoryPage';
import topsImage from '../assets/top.jpg';

export default function Tops() {
  return (
    <CategoryPage
      category="tops"
      title="Tops"
      subtitle="Haute Couture Tops"
      heroImage={topsImage}
    />
  );
}