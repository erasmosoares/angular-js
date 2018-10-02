import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform{
    transform(value: string, Limit?: number) {
        if(!value)
         return null;

         let actualLimit = (Limit) ? Limit : 50;
         return value.substr(0,actualLimit) + '...';
    }

}