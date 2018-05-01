describe('Teste do metodo de divisão', () => {

  const Calculadora = require('../../src/js/calculadora.js')

  it('Deve retornar a  divisão de dois números', () => {
    expect(Calculadora.dividir(100,10)).toEqual(10)
  })

  it('Deve retornar a divisão de dois número em formato texto', () => {
    expect(Calculadora.dividir('50','2')).toEqual(25)
  })

  it('Deve retornar a divisão de dois número em decimal', () => {
    expect(Calculadora.dividir(4.5, 2.25)).toEqual(2)
  })

  it('Deve retornar "Error" para uma divisão por 0', () => {
    expect(Calculadora.dividir(5, 0)).toEqual("Error")
  })

  it('Deve efetuar uma validação do primeiro valor', () => {
    expect(Calculadora.dividir(undefined, 10)).toEqual(0)
  })

  it('Deve efetuar uma validação do segundo valor', () => {
    expect(Calculadora.dividir(10, undefined)).toEqual(0)
  })
})
