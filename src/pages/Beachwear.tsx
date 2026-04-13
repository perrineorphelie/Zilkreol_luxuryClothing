import CategoryPage from './CategoryPage';
import beachwearImage from '../assets/beach.jpg';

export default function Beachwear() {
  return (
    <CategoryPage
      category="beachwear"
      title="Beachwear"
      subtitle="Stylish Swimwear & Resort Wear"
      heroImage={beachwearImage}
    />
  );
}