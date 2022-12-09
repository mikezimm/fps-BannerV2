export interface ITest {
  test: string;
}

export const ThisConstant : ITest = {
  test: 'Test string'
}

export function updateTest( testStr: string ): ITest {
  const result: ITest = ThisConstant;
  result.test = testStr;
  return result;
  
}