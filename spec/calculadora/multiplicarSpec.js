describe('Teste do metodo de multiplicar', () => {

  const Calculadora = require('../../src/js/calculadora.js')

  it('Deve efetuar a multiplicação de dois números', () => {
    expect(Calculadora.multiplicar(3,5)).toEqual(15)
  })

  it('Deve efetuar a multiplicação de dois número em formato texto', () => {
    expect(Calculadora.multiplicar('10','4')).toEqual(40)
  })

  it('Deve efetuar a multiplicação de dois número em decimal', () => {
    expect(Calculadora.multiplicar(3.5, 2)).toEqual(7)
  })

  it('Deve retornar 0 para multiplicação com 0', () => {
    expect(Calculadora.multiplicar(3.5, 0)).toEqual(0)
    expect(Calculadora.multiplicar(5, 0)).toEqual(0)
  })

  it('Deve validar o primeiro número', () => {
    expect(Calculadora.multiplicar(undefined, 10)).toEqual(0)
  })

  it('Deve validar o segundo número', () => {
    expect(Calculadora.multiplicar(10, undefined)).toEqual(0)
  })
})
