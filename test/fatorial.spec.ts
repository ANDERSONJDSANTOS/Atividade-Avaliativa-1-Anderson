import { calculaFatorialDuploPositivo } from '../src/fatorialduplo'

describe('ohce', () => {
  test('tem que retornar 1 quando numero for igual a 1.', ()=>{
    expect(calculaFatorialDuploPositivo(1)).toBe(1)
  })
  test('tem que retornar 0 quando numero for igual a 0.', ()=>{
    expect(calculaFatorialDuploPositivo(0)).toBe(0)
  })
  test('tem que retornar o fatorial duplo do numero quando o mesmo for diferente de 0 e 1 e que seja positivo.', ()=>{
    expect(calculaFatorialDuploPositivo(7)).toBe(105)
  })

})