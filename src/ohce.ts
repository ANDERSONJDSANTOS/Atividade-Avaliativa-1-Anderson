
export function ohce (str: string)  {
    var reversed = str.split('').reverse().join('');
    if (str === reversed) 
    {
        return 'Gostei da palavra';
    }else
        return reversed  
   
}
console.log(ohce('roma'));