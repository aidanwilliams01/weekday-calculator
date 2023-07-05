import InputDate from "../src/weekday";

describe('inputDate', () => {
  let date;
  let inputDate;

  beforeEach(() => {
    date = new Date('7/5/2023');
    inputDate = new InputDate(date, date.getDay(), '')
  });

  test('should correctly create an inputDate object with three properties', () => {
    expect(inputDate.date).toEqual('Wed Jul 05 2023 00:00:00 GMT-0700 (Pacific Daylight Time)');
    expect(inputDate.dayOfWeek).toEqual(3);
    expect(inputDate.dayOfWeekName).toEqual('');
  });
})