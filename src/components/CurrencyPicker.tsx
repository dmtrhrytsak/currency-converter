import { CurrencySelect } from './styles/CurrencyConverter.styled';

type Props = {
  currencyList?: string[];
  convertValue: string;
  changeConvertValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CurrencyPicker: React.FC<Props> = ({
  currencyList,
  convertValue,
  changeConvertValue,
}) => {
  return (
    <CurrencySelect value={convertValue} onChange={changeConvertValue}>
      {currencyList && currencyList.length > 0 ? (
        currencyList.map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))
      ) : (
        <option value={convertValue}>{convertValue}</option>
      )}
    </CurrencySelect>
  );
};

export default CurrencyPicker;
