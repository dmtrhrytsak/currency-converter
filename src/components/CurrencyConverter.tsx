import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash/debounce';

import CurrencyPicker from './CurrencyPicker';

import { Rate } from '../lib/types/Rate';
import { getLatestRates } from '../lib/api/rates';

import ExchangeIcon from '../lib/assets/exchange-icon.svg';

import {
  CurrencyAmountInput,
  CurrencyEnteredValue,
  CurrencyIcon,
  CurrencyPickers,
  CurrencyResult,
  CurrencyResultValue,
  StyledCurrencyConverted,
} from './styles/CurrencyConverter.styled';
import { Wrapper } from './styles/Wrapper.styled';

const CurrencyConverter = () => {
  const [rates, setRates] = useState<Rate | null>(null);
  const [currencyList, setCurrencyList] = useState<string[]>([]);
  const [enteredValue, setEnteredValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [convertFrom, setConvertFrom] = useState('USD');
  const [convertTo, setConvertTo] = useState('EUR');
  const [convertedValue, setConvertedValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latestRates: Rate = await getLatestRates();

        setRates(latestRates);
        setCurrencyList(Object.keys(latestRates.rates));
      } catch (error) {
        console.warn('Error has occured when fetching latest rates.');
      }
    };

    fetchData();
  }, [convertFrom]);

  useEffect(() => {
    const rate = rates?.rates[convertTo];

    setConvertedValue(amount * (rate || 0));
  }, [rates, convertTo, amount]);

  const convert = useMemo(
    () =>
      debounce((amount) => {
        setAmount(amount);
      }, 400),
    []
  );

  const changeConvertFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setConvertFrom(e.target.value);
  };

  const changeConvertTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setConvertTo(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;

    if (newAmount.length > 8 || /[^\d]/.test(newAmount)) {
      return;
    }

    setEnteredValue(+newAmount);
    convert(+newAmount);
  };

  return (
    <Wrapper>
      <StyledCurrencyConverted>
        <CurrencyAmountInput
          type="text"
          value={enteredValue}
          onChange={handleAmountChange}
        />

        <CurrencyPickers>
          <CurrencyPicker
            convertValue={convertFrom}
            changeConvertValue={changeConvertFrom}
          />
          <CurrencyIcon icon={ExchangeIcon} />
          <CurrencyPicker
            currencyList={currencyList}
            convertValue={convertTo}
            changeConvertValue={changeConvertTo}
          />
        </CurrencyPickers>

        {amount > 0 && convertedValue > 0 && (
          <CurrencyResult>
            <CurrencyEnteredValue>
              {`${amount} ${convertFrom} =`}
            </CurrencyEnteredValue>
            <CurrencyResultValue>
              {`${convertedValue.toFixed(2)} ${convertTo}`}
            </CurrencyResultValue>
          </CurrencyResult>
        )}
      </StyledCurrencyConverted>
    </Wrapper>
  );
};

export default CurrencyConverter;
