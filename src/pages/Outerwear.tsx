import CategoryPage from './CategoryPage';
import jacket from '../assets/jacket.jpg';

export default function Women() {
  return (
    <CategoryPage
      category="outerwear"
      title="Outerwear"
      subtitle="Ready-to-Wear"
      heroImage={jacket}
    />
  );
}