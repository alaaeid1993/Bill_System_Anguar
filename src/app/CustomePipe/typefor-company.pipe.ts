import { Pipe, PipeTransform } from '@angular/core';
import { CompanyType } from '../Models/company-type';

@Pipe({
  name: 'typeforCompany'
})
export class TypeforCompanyPipe implements PipeTransform {

  transform(companyTypes: CompanyType[], companyId: number) : CompanyType[] {
    const types: CompanyType[] = []
    for (let cType of companyTypes) {
      if (cType.companyDataId == companyId)
        types.push(cType)
    }
    return types;
  }


  
}
