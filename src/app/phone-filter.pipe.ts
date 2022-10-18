import { Pipe, PipeTransform } from '@angular/core';
import { phonebook_interface } from './phonebook.service';


@Pipe({
  name: 'phoneFilter'
})
export class PhoneFilterPipe implements PipeTransform {

  transform(value: phonebook_interface[],filteredString:string)
  {

    if(value.length === 0 || filteredString==='')
    return value;
  const  phones = [];
    for ( const phone of value){
     if(phone.name.toLowerCase().indexOf(filteredString.toLocaleLowerCase())!==-1){
      phones.push(phone)
     }
    }

      return phones;


   }

}


