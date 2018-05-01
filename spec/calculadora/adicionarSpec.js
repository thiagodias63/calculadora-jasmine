describe('Teste da função adicionar', () => {
  let Calculadora = require('../../src/js/calculadora.js')

  it('Testar uma soma', () => {
    expect(Calculadora.adicionar(2,5)).toEqual(7)
  })
  it('Testar uma soma para valores em formato texto', () => {
    expect(Calculadora.adicionar('3','6')).toEqual(9)
  })
  it('Testar uma soma para valores decimais', () => {
    expect(Calculadora.adicionar(3.5, 18)).toEqual(21.5)
  })
  it('Testar validação do primeiro número', () => {
    expect(Calculadora.adicionar(undefined, 25)).toEqual(0)
  })
  it('Testar validação do segundo número', () => {
    expect(Calculadora.adicionar(36, undefined)).toEqual(0)
  })

})
