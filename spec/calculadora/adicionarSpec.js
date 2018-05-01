describe('Teste da função adicionar', () => {
  const Calculadora = require('../../src/js/calculadora.js')

  it('Deve efeturar uma soma', () => {
    expect(Calculadora.adicionar(2,5)).toEqual(7)
  })
  it('Deve efetuar uma soma para valores em formato texto', () => {
    expect(Calculadora.adicionar('3','6')).toEqual(9)
  })
  it('Deve efetuar uma soma para valores decimais', () => {
    expect(Calculadora.adicionar(3.5, 18)).toEqual(21.5)
  })
  it('Deve efetuar validação do primeiro número', () => {
    expect(Calculadora.adicionar(undefined, 25)).toEqual(0)
  })
  it('Deve efetuar validação do segundo número', () => {
    expect(Calculadora.adicionar(36, undefined)).toEqual(0)
  })

})
