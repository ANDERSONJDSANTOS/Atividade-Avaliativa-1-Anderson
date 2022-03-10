import { ohce } from '../src/ohce'

describe('ohce', () => {
  test('tem que retornar "Gostei da palavra" quando a string for um palindrome.', ()=>{
    expect(ohce('ana')).toBe('Gostei da palavra')
  })
  test('tem que retornar a string invertida quando a palavra não for um palindrome.', ()=>{
    expect(ohce('roma')).toBe("amor")
  })

})