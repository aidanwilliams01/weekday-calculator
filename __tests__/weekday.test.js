import InputDate from "../src/weekday";

describe('inputDate', () => {
  let date;
  let inputDate;

  beforeEach(() => {
    date = new Date();
    inputDate = new InputDate(date, date.getDay(), '')
  });

  test('should correctly create an inputDate object with three properties', () => {
    expect(inputDate.date).toEqual(date);
    expect(inputDate.dayOfWeek).toEqual(date.getDay());
    expect(inputDate.dayOfWeekName).toEqual('');
  });
})