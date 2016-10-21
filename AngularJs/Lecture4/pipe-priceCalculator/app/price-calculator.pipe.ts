/**
 * Created by Rajiv on 10/21/2016.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'priceCalculator'})
export class PriceCalculator implements PipeTransform{
    transform(value: number, quantity:String){
        return value * +quantity;
    }
}
