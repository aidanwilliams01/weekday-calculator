export default class InputDate {
  constructor(date, dayOfWeek, dayOfWeekName) {
    this.date = date;
    this.dayOfWeek = dayOfWeek;
    this.dayOfWeekName = dayOfWeekName;
  }

  getDayName() {
    if (this.dayOfWeek === 0) {
      this.dayOfWeekName = 'Sunday';
    }
    else if (this.dayOfWeek === 1) {
      this.dayOfWeekName = 'Monday';
    }
    else if (this.dayOfWeek === 2) {
      this.dayOfWeekName = 'Tuesday';
    }
    else if (this.dayOfWeek === 3) {
      this.dayOfWeekName = 'Wednesday';
    }
    else if (this.dayOfWeek === 4) {
      this.dayOfWeekName = 'Thursday';
    }
    else if (this.dayOfWeek === 5) {
      this.dayOfWeekName = 'Friday';
    }
    else if (this.dayOfWeek === 6) {
      this.dayOfWeekName = 'Saturday';
    }
  }
}