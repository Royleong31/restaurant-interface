/*
  converts number to formatted price. number -> string.
  const num: number = 4.8;
  const price: string = numToPrice(num);
  console.log(price); //4.80
*/
export default function numToPrice(num: number): string {
  //num has 1 dec place //5.9 -> 5.90
  if ((num * 10) % 1 === 0) return num.toString().concat("0");

  //num is whole number //5 -> 5
  //num has 2 dec place //5.99 -> 5.99
  return num.toString();
}
