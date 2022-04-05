import { Pipe, PipeTransform } from '@angular/core';
import { ComType } from '../Models/com-type';


@Pipe({
  name: 'typeforCompany'
})
export class TypeforCompanyPipe implements PipeTransform {

  transform(companyTypes: ComType[], companyId: number) : ComType[] {
    const types: ComType[] = []
    for (let cType of companyTypes) {
      if (cType.companyDataId == companyId)
        types.push(cType)
    }
    return types;
  }


  
}
