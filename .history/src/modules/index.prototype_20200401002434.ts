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
  merge(arr2: []): [];
}
/**
 * Normal char to unicode
 */
String.prototype.normal = function(): string {
  return this.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
};

/**
 * Convert string to lower case and keep only A-Z a-z character
 */
String.prototype.toOnlyWord = function() {
  let temp: string = this.toLowerCase().normal();
  return temp.replace(/[^A-Za-z ]+/g, ' ');
};

/**
 * Convert string to lower case and keep only A-Z a-z 0-9 character
 */
String.prototype.toOnlyWordnNumber = function() {
  let temp: String = this.toLowerCase().normal();
  return temp.replace(/[^A-Za-z0-9 ]+/g, ' ');
};

/**
 * Convert string to only 0-9 character
 */
String.prototype.toOnlyDigit = function() {
  return this.replace(/\D/g, '');
};

/**
 * Convert string to only special character string
 */
String.prototype.toOnlySpecialChar = function() {
  return this.replace(/[A-Za-z0-9 ]+/g, '');
};

/**
 * Convert string to upper first case
 */
String.prototype.toFirstUpper = function() {
  if (!this[0]) return this;
  let temp = this.toLowerCase();
  return temp[0].toUpperCase() + temp.slice(1);
};

/**
 * Upper first case of each word -> Human name
 */
String.prototype.toHumanName = function(): string {
  let temp: string[] = this.toLowerCase().split(' ');
  let result = temp[0].toFirstUpper();
  temp.slice(1).forEach((word) => {
    result += ' ' + word.toFirstUpper();
  });
  return result;
};

/**
 * Check if string is only contain letters
 */
String.prototype.isContainSpecialChar = function() {
  return !/^[a-zA-Z ]+$/.test(this);
};

/**
 * Check if number in in range min - max
 */
Number.prototype.inRange = function(min: number, max: number): boolean {
  return (this - min) * (this - max) <= 0;
};

/**
 * Merge two array and remove it duplicate items
 */
Array.prototype.merge = function(arr2: []): [] {
  return Array.from(new Set(this.concat(arr2)));
};

/**
 * Check if two array is equal, and it items like eachother
 */
Array.prototype.equal = function(arr2: Array): Boolean {
  return JSON.stringify(this) == JSON.stringify(arr2);
};
