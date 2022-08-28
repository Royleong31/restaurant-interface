/*
  converts number to formatted price. number -> string.
  const num: number = 4.8;
  const price: string = numToPrice(num);
  console.log(price); //4.80
*/
export default function numToPrice(num: number): string {
  num = Math.round((num + Number.EPSILON) * 100) / 100; //rounding to 2 dec place

  //num is integer //5 -> 5.00
  if (num % 1 === 0) return num.toString().concat(".00");

  //num has 1 dec place //5.9 -> 5.90
  if ((num * 10) % 1 === 0) return num.toString().concat("0");

  //num has 2 dec place //5.99 -> 5.99
  return num.toString();
}
