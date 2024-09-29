import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accessCheck'
})
export class AccessCheckPipe implements PipeTransform {

  transform(requestedFeature: string, ...args: unknown[]): boolean {
    return this.accessibleFeatures.includes(requestedFeature);
  }

  get accessibleFeatures(): string[] {
    const authorisationData: any = localStorage.getItem('loginDetails');
    return JSON.parse(authorisationData)['featureIdentifiers'];
  }

  // Declare and export this pipe in shared module of the app to make it available to all the other feature modules,
  // withoug any additional module import in other feature modules

}
