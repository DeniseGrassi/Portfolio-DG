// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      card: string;
      primary: string;
      text: string;
      subtext: string;
      border: string;
    };
    radius: string;
    shadow: string;
    maxw: string;
  }
}
