import OfferCard from './offer-card.tsx';
import Offer from '../../../models/offer.ts';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AppRoutes} from '../../../components/app/AppRoutes.ts';

type OffersListProps = {
  offers: Offer[];
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Link to={AppRoutes.Offer.replace(':id', offer.id)} key={offer.id} className="places__list-item">
          <OfferCard
            offer={offer}
            onMouseOver={() => setActiveOfferId(offer.id)}
            onMouseOut={() => setActiveOfferId(null)}
          />
        </Link>
      ))}
    </div>
  );
}

export default OffersList;
