import InputDate from "../src/weekday";

describe('inputDate', () => {

  test('should correctly create an inputDate object with three properties', () => {
    const date = new Date();
    const inputDate = new InputDate(date, date.getDay(), '')
    expect(inputDate.date).toEqual(date);
    expect(inputDate.dayOfWeek).toEqual(date.getDay());
    expect(inputDate.dayOfWeekName).toEqual('');
  });

  test('should correctly update dayOfWeekName with the weekday name', () => {
    const inputDate = new InputDate('7/5/2023', date.getDay(), '');
    expect(inputDate.dayOfWeekName).toEqual('Wednesday');
  });
})