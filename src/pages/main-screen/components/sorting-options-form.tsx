import {useState} from 'react';
import {SortingOption} from '../../../const.ts';

type SortingOptionsFormProps = {
  onOptionChange: (option: SortingOption) => void;
}

function SortingOptionsForm({ onOptionChange } : SortingOptionsFormProps) : JSX.Element {
  const [sortingOption, setSortingOption] = useState<SortingOption>(SortingOption.Popular);
  const [isOpened, setOpened] = useState(false);

  const setNegativeOpen = () => {
    setOpened((prev) => !prev);
  };

  const handleOptionChange = (option : SortingOption) => {
    if (option === sortingOption) {
      return;
    }

    onOptionChange(option);
    setSortingOption(option);
    setNegativeOpen();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={setNegativeOpen}>
        {sortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        isOpened &&
        <ul className="places__options places__options--custom places__options--opened">
          {
            Object.entries(SortingOption).map(([key, value]) => (
              <li
                key={key}
                className={`places__option ${value === sortingOption && 'places__option--active'}`}
                tabIndex={0}
                onClick={() => handleOptionChange(value)}
              >
                {value}
              </li>
            ))
          }
        </ul>
      }
    </form>
  );
}

export default SortingOptionsForm;
