import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'titleCase'
})

export class TitleCasePipe implements PipeTransform{
    transform(value: string) {
        if(!value)
         return null;
        
        let  convertedText = value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() )); 
        return convertedText;
    }
}