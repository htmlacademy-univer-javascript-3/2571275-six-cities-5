import MainScreen from '../../pages/main-screen/main-screen.tsx';
import Offer from '../../models/offer.ts';

type AppProps = {
  offersCount: number;
}

const someOffer : Offer = {
  id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  isFavorite: true,
  isPremium: true,
  rating: 4,
  previewImage: 'img/apartment-03.jpg'
};

function App({offersCount} : AppProps): JSX.Element {
  return (
    <MainScreen offers={new Array(offersCount).fill(someOffer)}/>
  );
}

export default App;
