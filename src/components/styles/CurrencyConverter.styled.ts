import styled from 'styled-components';
import { lighten } from 'polished';

import { Icon } from './Icon.syled';

export const StyledCurrencyConverted = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const CurrencyAmountInput = styled.input`
  padding: 12px;
  margin-bottom: 12px;
  border: 2px solid ${({ theme }) => theme.colors.grayishBlue};
  border-radius: 3px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => lighten(0.1, theme.colors.grayishBlue)};
  }
`;

export const CurrencyPickers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 28px;
`;

export const CurrencyIcon = styled(Icon)`
  align-self: center;
`;

export const CurrencySelect = styled.select`
  padding: 12px;
  border: none;
  border-radius: 3px;

  background-color: ${({ theme }) => theme.colors.mildBlue};
  color: ${({ theme }) => theme.colors.white};
`;

export const CurrencyResult = styled.div``;

export const CurrencyEnteredValue = styled.p`
  margin-bottom: 2px;

  color: ${({ theme }) => theme.colors.white};

  font-size: 12px;
`;

export const CurrencyResultValue = styled.p`
  color: ${({ theme }) => theme.colors.white};

  font-size: 26px;
`;
