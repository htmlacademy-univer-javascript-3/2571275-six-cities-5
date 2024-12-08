import {CityName} from '../../../const.ts';

type CitiesListProps = {
  current: CityName;
  onCityNameChange: (city: CityName) => void;
};

function CitiesList({ current, onCityNameChange } : CitiesListProps){
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityName).map((city) => (
            <li className="locations__item" key={city}>
              <div
                className={`locations__item-link tabs__item ${city === current && 'tabs__item--active'}`}
                onClick={() => onCityNameChange(city)}
              >
                <span>{city}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
