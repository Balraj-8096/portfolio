import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hightlightFiltervalue'
})
export class HightlightFiltervaluePipe implements PipeTransform {

  // only highlight value for the string type values

  transform(text: string | null | unknown | undefined, value: string): string {
    const regExp = new RegExp(value, 'gi');
    const highlightedValue = text ? (text as string).replace(regExp, (match: string) => `<span class="highlightFilterText">${match}</span>`) : '';

    return highlightedValue;
  }

  // only highlight value for the string-array type values

  // transform(text: string | null | unknown | undefined, filterValues: string[]): string {
  //   let highlightedText = (text as string);
  //   filterValues.forEach(filterValue => {
  //     if (filterValue) {
  //       const regExp = new RegExp(filterValue, 'gi');
  //       highlightedText = highlightedText.replace(regExp, (match) => `<span class="highlightFilterText">${match}</span>`);
  //     }
  //   });
  //   return highlightedText;
  // }


  //   both  highlight value  for the string anr string array type values

  // transform(text: string | null | unknown | undefined, filterValues: string | string[]): string {
  //   let highlightedText = (text as string);
  //   if (Array.isArray(filterValues)) {
  //     filterValues.forEach(filterValue => {
  //       if (filterValue) {
  //         const regExp = new RegExp(filterValue, 'gi');
  //         highlightedText = highlightedText.replace(regExp, (match) => `<span class="highlightFilterText">${match}</span>`);
  //       }
  //     });
  //   } else if (typeof filterValues === 'string') {
  //     const regExp = new RegExp(filterValues, 'gi');
  //     highlightedText = highlightedText.replace(regExp, (match) => `<span class="highlightFilterText">${match}</span>`);
  //   }
  //   return highlightedText;
  // }

}
