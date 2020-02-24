import  Parser from '../Parser';

describe('Parser tests', () => {
  
  it('Parsing expressions to AST correctly', () => {
    const p = new Parser();
    expect(p.parse('1 + 1')).toEqual({ type: '+', left: { type: 'number', value: "1"}, right: { type: 'number', value: "1"}})
  })

  // it('Thows exeption if input s invalid', () => {
  //   const p = new Parser();
  //   expect(p.parse('1 ++ 1')).toEqual()
  // })
  // todo: написать тесты на обработку исключений 

});