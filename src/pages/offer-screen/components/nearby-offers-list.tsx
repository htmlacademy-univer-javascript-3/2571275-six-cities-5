import Offer from '../../../models/offer.ts';
import OfferCard from '../../../components/offer-card/offer-card.tsx';

type NearbyOffersListProps = {
  nearbyOffers: Offer[];
};

function NearbyOffersList({ nearbyOffers }: NearbyOffersListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {nearbyOffers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default NearbyOffersList;
