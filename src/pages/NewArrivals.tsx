import CategoryPage from './CategoryPage';
import newArrivalsImage from '../assets/newarrival.jpg';

export default function NewArrivals() {
  return (
    <CategoryPage
      category="new"
      title="New Arrivals"
      subtitle="Discover Our Latest Collection"
      heroImage={newArrivalsImage}
    />
  );
}