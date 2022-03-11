export function calculaFatorialDuploPositivo(numero: number): any{
    if (numero == 1){
        return 1;
    }else{
        if(numero ==0){
            return 0;
        }
    }
    return numero * calculaFatorialDuploPositivo(numero -2);
    
    

}
console.log(calculaFatorialDuploPositivo(7));
