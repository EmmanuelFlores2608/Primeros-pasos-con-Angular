import { Pipe, PipeTransform } from "@angular/core";
//import { resourceLimits } from "worker_threads";

@Pipe({
    name: 'calculadora'
})
export class CalculadroaPipe implements PipeTransform{
    //Dato | calculadrora: otro dato
    transform(value: any, value_two: any) {
        let operaciones = `
            Suma: ${value+value_two} -
            Resta: ${value-value_two} -
            Multiplicación: ${value*value_two} -
            División: ${value/value_two} -
        `
        return operaciones;
    }
}