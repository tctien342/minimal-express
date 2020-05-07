interface String {
    normal(): string;
    toOnlyWord(): string;
    toOnlyWordnNumber(): string;
    toOnlyDigit(): string;
    toOnlySpecialChar(): string;
    toFirstUpper(): string;
    toHumanName(): string;
    isContainSpecialChar(): boolean;
  }
  interface Number {
    inRange(min: number, max: number): boolean;
  }
  
  interface Array<T> {
    merge(arr2: []): any[];
    equal(arr2: []): boolean;
  }