import {useState} from 'react';
import {SortingOptions} from '../../../const.ts';

type SortingOptionsFormProps = {
  onOptionChange: (option: SortingOptions) => void;
}

function SortingOptionsForm({ onOptionChange } : SortingOptionsFormProps) : JSX.Element {
  const [sortingOption, setSortingOption] = useState<SortingOptions>(SortingOptions.Popular);

  const handleOptionChange = (option : SortingOptions) => {
    if (option === sortingOption) {
      return;
    }

    onOptionChange(option);
    setSortingOption(option);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}> Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          Object.entries(SortingOptions).map(([key, value]) => (
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
    </form>
  );
}

export default SortingOptionsForm;
