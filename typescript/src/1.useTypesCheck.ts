((function () {
  let flag: boolean = false;
  flag = null;
  console.log(flag);

  let n1: number = 123;
  let n2: number = 0x123;
  let n3: number = 0o123;
  let n4: number = 0b011;
  let n5: number = undefined;

  let s1: string = null;
  let s2: string = s1 + n1;
  console.log(s2);

  let arr1: number[] = [1, 2, 3, 1];
  let arr2: Array<number> = [1, 2, 3]  // 泛型写法

  let turple1: [number, any, string, boolean] = [123, new Object(), "heng", false];

  enum Color {
    red = 10,
    green,
    blue
  }
  let color: Color = Color.red;
  console.log(color);
  console.log(Color.red, Color.green, Color.blue);
  console.log(Color[11]);

  let what: any = 'li';
  what = 1234;
  let w2: void = null;

  let obj: object | string = "new Object()";

  function getLength(s: string | number): number {

    // return (s as string).length;
    return (<string>s).length;
  }

  let what3: unknown;
  let what4: any;
  let what2: number = what4;
  // what2 = what3;


})())