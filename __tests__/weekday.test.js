import { InputDate } from "../src/weekday";

describe('InputDate', () => {

  test('should correctly create an inputDate object with three properties', () => {
    const date = new Date();
    const inputDate = new InputDate(date, date.getDay(), '')
    expect(inputDate.date).toEqual(date);
    expect(inputDate.dayOfWeek).toEqual(date.getDay());
    expect(inputDate.dayOfWeekName).toEqual('');
  });

  test('should correctly update dayOfWeekName with the weekday name', () => {
    let date = new Date('7/2/2023');
    let inputDate = new InputDate(date, date.getDay(), '');
    inputDate.getDayName();
    expect(inputDate.dayOfWeekName).toEqual('Sunday');
    
    date = new Date('7/3/2023');
    inputDate = new InputDate(date, date.getDay(), '');
    inputDate.getDayName();
    expect(inputDate.dayOfWeekName).toEqual('Monday');
    
    date = new Date('7/4/2023');
    inputDate = new InputDate(date, date.getDay(), '');
    inputDate.getDayName();
    expect(inputDate.dayOfWeekName).toEqual('Tuesday');
    
    date = new Date('7/5/2023');
    inputDate = new InputDate(date, date.getDay(), '');
    inputDate.getDayName();
    expect(inputDate.dayOfWeekName).toEqual('Wednesday');
    
    date = new Date('7/6/2023');
    inputDate = new InputDate(date, date.getDay(), '');
    inputDate.getDayName();
    expect(inputDate.dayOfWeekName).toEqual('Thursday');
    
    date = new Date('7/7/2023');
    inputDate = new InputDate(date, date.getDay(), '');
    inputDate.getDayName();
    expect(inputDate.dayOfWeekName).toEqual('Friday');
    
    date = new Date('7/8/2023');
    inputDate = new InputDate(date, date.getDay(), '');
    inputDate.getDayName();
    expect(inputDate.dayOfWeekName).toEqual('Saturday');
  });
})