import OfferCard from './offer-card.tsx';
import Offer from '../../../models/offer.ts';
import {useState} from 'react';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map(
          (offer) => (
            <OfferCard
              offer={offer}
              key={offer.id}
              onMouseOver={() => setActiveOfferId(offer.id)}
              onMouseOut={() => setActiveOfferId(null)}
            />
          )
        )
      }
    </div>
  );
}

export default OffersList;
