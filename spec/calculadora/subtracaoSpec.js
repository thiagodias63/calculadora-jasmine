describe('Testar o uso da substração', () => {
  const Calculadora = require('../../src/js/calculadora.js')

  it('Deve efetuar uma subtração', () => {
    expect(Calculadora.subtrair(2,1)).toEqual(1)
  })

  it('Deve efetuar uma subtração com valores em texto', () => {
    expect(Calculadora.subtrair('25', '21')).toEqual(4)
  })

  it('Deve efetuar uma subtração com valores em decimal', () => {
    expect(Calculadora.subtrair(41.5, 41.5)).toEqual(0)
    expect(Calculadora.subtrair(41.5, 40.5)).toEqual(1)
  })

  it('Deve efetuar uma validação do primeiro valor', () => {
    expect(Calculadora.subtrair(undefined, 10)).toEqual(0)
  })
  it('Deve efetuar uma validação do segundo valor', () => {
    expect(Calculadora.subtrair(10, undefined)).toEqual(0)
  })
})
