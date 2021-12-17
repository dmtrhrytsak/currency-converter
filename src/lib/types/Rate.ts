export interface Rate {
  base: string;
  rates: {
    [key: string]: number;
  };
}
