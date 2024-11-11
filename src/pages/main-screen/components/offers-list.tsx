import OfferCard from './offer-card.tsx';
import Offer from '../../../models/offer.ts';
import { Link } from 'react-router-dom';
import {AppRoutes} from '../../../components/app/AppRoutes.ts';

type OffersListProps = {
  offers: Offer[];
  onOfferHover: (offer: Offer | null) => void;
};

function OffersList({ offers, onOfferHover }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Link to={AppRoutes.Offer.replace(':id', offer.id)} key={offer.id} className="places__list-item">
          <OfferCard
            offer={offer}
            onMouseOver={() => onOfferHover(offer)}
            onMouseOut={() => onOfferHover(null)}
          />
        </Link>
      ))}
    </div>
  );
}

export default OffersList;
