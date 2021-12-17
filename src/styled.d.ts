import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      bgBlue: string;
      darkBlue: string;
      mildBlue: string;
      grayishBlue: string;
    };
  }
}
