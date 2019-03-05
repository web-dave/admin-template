import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'admin-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @ViewChild('datepicker') datepicker;
  current;
  target;
  picker;
  selected;
  referers;
  defaults = {
    firstDayOfWeek: 0,
    months: {
      short: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      long: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    },
    navigateYear: true,
    outputFormat: '%Y-%m-%d',
    weekdays: {
      short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      long: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
    }
  };
  options;

  constructor() {
    this.options = this.defaults;
  }

  ngOnInit() {}

  bindCalendar(event) {
    let target = event.target;
    if (target.className === 'month-navigate next') {
      this.getMonth(1);
    } else if (target.className === 'month-navigate previous') {
      this.getMonth(-1);
    } else if (target.className === 'year-navigate next') {
      this.getYear(1);
    } else if (target.className === 'year-navigate previous') {
      this.getYear(-1);
    } else if (target.className === 'day') {
      this.setDate(target.innerHTML);
      this.close();
    } else {
      while (target && target.className !== 'vanilla-datepicker') {
        target = target.parentNode;
      }
      if (target) {
        this.show(target);
      }
      if (!target) {
        this.close();
      }
    }
  }
  keypressHandler(event) {
    const keyCode = event.which || event.keyCode;
    if (keyCode === 13) {
      this.bindCalendar(event);
    }
  }

  // matchesReferers(elm) {
  //   this.referers = document.querySelectorAll(this.query);
  //   for (var i = 0; i < this.referers.length; i++) {
  //     if (elm === this.referers[i]) return true;
  //   }
  //   return false;
  // }

  close() {
    this.current = null;
    this.target = null;
    if (this.picker) {
      this.picker.remove();
    }
  }

  show(target?) {
    this.target = target ? target : this.target;
    if (target || !this.current) {
      let current = new Date();
      if (target) {
        this.selected = null;
      }
      if (target && target.value) {
        const ts = this.parseDate(target.value);
        current = new Date(ts);
        this.selected = {
          year: current.getFullYear(),
          month: current.getMonth(),
          day: current.getDate()
        };
      }
      this.current = {
        year: current.getFullYear(),
        month: current.getMonth()
      };
    }
    this.cleanPicker();
    this.drawPicker();
  }

  cleanPicker() {
    const picker = document.querySelector('.vanilla-datepicker');
    if (picker) {
      picker.remove();
    }
  }

  drawPicker(e) {
    this.target = e.target;
    const position = {
      x: this.target.offsetLeft,
      y: this.target.offsetTop + this.target.offsetHeight
    };
    this.picker = document.createElement('div');
    this.picker.classList.add('vanilla-datepicker');
    this.picker.style.left = position.x + 'px';
    this.picker.style.top = position.y + 'px';
    this.picker.appendChild(this.drawNavigation());
    this.picker.appendChild(this.drawWeekHeader());
    const weeks = this.getWeeks();
    for (const week of weeks) {
      this.picker.appendChild(weeks);
    }

    this.target.parentNode.insertBefore(this.picker, this.target.nextSibling);
  }

  drawNavigation() {
    const nav = document.createElement('div');
    const previousYear = document.createElement('div');
    const nextYear = document.createElement('div');
    const previousMonth = document.createElement('div');
    const nextMonth = document.createElement('div');

    nav.classList.add('title-nav');

    if (this.options.navigateYear) {
      previousYear.classList.add('year-navigate');
      previousYear.classList.add('previous');
      previousYear.setAttribute('tabIndex', '0');
      previousYear.innerHTML = '<<';

      nextYear.classList.add('year-navigate');
      nextYear.classList.add('next');
      nextYear.setAttribute('tabIndex', '0');
      nextYear.innerHTML = '>>';
    }
    previousMonth.classList.add('month-navigate');
    previousMonth.classList.add('previous');
    previousMonth.setAttribute('tabIndex', '0');
    previousMonth.innerHTML = '<';

    const currentMonth = document.createTextNode(
      this.options.months.long[this.current.month] + ' ' + this.current.year
    );

    nextMonth.classList.add('month-navigate');
    nextMonth.classList.add('next');
    nextMonth.setAttribute('tabIndex', '0');
    nextMonth.innerHTML = '>';
    // nextMonth.addEventListener('click', this.getNextMonth, false);

    if (this.options.navigateYear) {
      nav.appendChild(previousYear);
    }
    nav.appendChild(previousMonth);
    nav.appendChild(currentMonth);
    nav.appendChild(nextMonth);
    if (this.options.navigateYear) {
      nav.appendChild(nextYear);
    }

    return nav;
  }

  getYear(offset: -1 | 1) {
    const date = new Date(this.current.year + offset, this.current.month);
    this.current = {
      year: date.getFullYear(),
      month: date.getMonth()
    };
    this.show();
  }

  getMonth(offset: -1 | 1): void {
    const date = new Date(this.current.year, this.current.month + offset);
    this.current = {
      year: date.getFullYear(),
      month: date.getMonth()
    };
    this.show();
  }

  drawWeekHeader(): HTMLDivElement {
    const weekdays = this.options.weekdays.short
      .slice(this.options.firstDayOfWeek)
      .concat(
        this.options.weekdays.short.slice(0, this.options.firstDayOfWeek)
      );
    const weekHeader = document.createElement('div');
    weekHeader.classList.add('week-header');
    for (let i = 0; i < 7; i++) {
      const dayOfWeek = document.createElement('div');
      dayOfWeek.setAttribute('tabIndex', '0');
      dayOfWeek.innerHTML = weekdays[i];
      weekHeader.appendChild(dayOfWeek);
    }
    return weekHeader;
  }

  getWeekDays(options) {
    // Get week days according to options
    return options.weekdays.short
      .slice(options.firstDayOfWeek)
      .concat(options.weekdays.short.slice(0, options.firstDayOfWeek));
  }

  getFirstOfMonth(options): number {
    // Get first day of month and update acconding to options
    let firstOfMonth = new Date(
      this.current.year,
      this.current.month,
      1
    ).getDay();
    firstOfMonth =
      firstOfMonth < options.firstDayOfWeek
        ? 7 + (firstOfMonth - options.firstDayOfWeek)
        : firstOfMonth - options.firstDayOfWeek;
    return firstOfMonth;
  }

  getNumberOfDaysInMonth(offset: 0 | 1): number {
    return new Date(
      this.current.year,
      this.current.month + offset,
      0
    ).getDate();
  }

  setDate(day) {
    const oldDateValue = this.target.value;
    const dayOfWeek = new Date(
      this.current.year,
      this.current.month,
      day
    ).getDay();
    const date = this.options.outputFormat
      .replace('%a', this.options.weekdays.short[dayOfWeek])
      .replace('%A', this.options.weekdays.long[dayOfWeek])
      .replace('%d', ('0' + day).slice(-2))
      .replace('%e', day)
      .replace('%b', this.options.months.short[this.current.month])
      .replace('%B', this.options.months.long[this.current.month])
      .replace('%m', ('0' + (this.current.month + 1)).slice(-2))
      .replace('%w', dayOfWeek)
      .replace('%Y', this.current.year);
    this.target.value = date;

    if (date !== oldDateValue) {
      if ('createEvent' in document) {
        const changeEvent = document.createEvent('HTMLEvents');
        changeEvent.initEvent('change', false, true);
        this.target.dispatchEvent(changeEvent);
      } else {
        this.target.fireEvent('onchange');
      }
    }
  }

  createDayDiv(classname, text, tabIndex: boolean | number = false) {
    const day = document.createElement('div');
    day.classList.add(classname);
    if (tabIndex !== false) {
      day.setAttribute('tabIndex', String(tabIndex));
    }
    day.innerHTML = String(text);
    return day;
  }

  getMonthDaysOffset(start: number, daysInPreviousMonth: number) {
    // Define last days of previous month if current month does not start on `firstOfMonth`
    const days = [];
    for (let i = start - 1; i >= 0; i--) {
      days.push(this.createDayDiv('no-select', daysInPreviousMonth - i));
    }
    return days;
  }

  getWeeks() {
    const weekdays = this.getWeekDays(this.options);
    const firstOfMonth = this.getFirstOfMonth(this.options);

    const daysInPreviousMonth = this.getNumberOfDaysInMonth(0);
    const daysInMonth = this.getNumberOfDaysInMonth(1);

    let days = this.getMonthDaysOffset(firstOfMonth, daysInPreviousMonth);
    const weeks = [];

    // Define days in current month
    for (let i = 0; i < daysInMonth; i++) {
      if (i && (firstOfMonth + i) % 7 === 0) {
        weeks.push(this.addWeek(days));
        days = [];
      }
      const day = this.createDayDiv('day', i + 1, 0);
      if (
        this.selected &&
        this.selected.year === this.current.year &&
        this.selected.month === this.current.month &&
        this.selected.day === i + 1
      ) {
        day.classList.add('selected');
      }
      days.push(day);
    }
    // Define days of next month if last week is not full
    if (days.length) {
      const len = days.length;
      for (let i = 0; i < 7 - len; i++) {
        days.push(this.createDayDiv('no-select', i + 1));
      }
      weeks.push(this.addWeek(days));
    }
    return weeks;
  }

  addWeek(days) {
    const week = document.createElement('div');
    week.classList.add('week');
    for (const day of days) {
      week.appendChild(day);
    }
    return week;
  }

  parseDate(date) {
    const acceptedFormats = [
      '%a',
      '%A',
      '%d',
      '%e',
      '%b',
      '%B',
      '%m',
      '%w',
      '%Y'
    ];
    const pattern = new RegExp(
      this.options.outputFormat.replace(/%[a-zA-Z]/g, '(.+)')
    );
    const groups = pattern.exec(this.options.outputFormat);
    const matches = pattern.exec(date);
    date = new Date();

    for (let i = 1; i < matches.length; i++) {
      if (acceptedFormats.indexOf(groups[i]) === -1) {
        console.log('DatePicker : Format error');
        break;
      }

      switch (groups[i]) {
        case '%d':
        case '%e':
          date.setDate(parseInt(matches[i], 10));
          break;
        case '%m':
          date.setMonth(parseInt(matches[i], 10) - 1, date.getDate());
          break;
        case '%b':
          let month = this.options.months.short.indexOf(matches[i]);
        case '%B':
          month =
            month !== -1 ? month : this.options.months.long.indexOf(matches[i]);
          date.setMonth(month, date.getDate());
          break;
        case '%Y':
          date.setYear(matches[i]);
          break;
      }
    }
    return date;
  }
}
