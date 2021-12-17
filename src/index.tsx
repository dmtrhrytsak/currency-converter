import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';

import CurrencyConverter from './components/CurrencyConverter';
import { GlobalStyles } from './lib/GlobalStyles';
import theme from './lib/theme';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CurrencyConverter />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
