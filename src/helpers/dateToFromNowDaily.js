import moment from 'moment'
import "moment/locale/ru"

export function dateToFromNowDaily( myDate ) {

    // get from-now for this date
    let fromNow = moment( myDate ).fromNow();

    // ensure the date is displayed with today and yesterday
    return moment( myDate ).calendar( null, {
        // when the date is closer, specify custom values
        sameDay: '[Сегодня]',
        nextDay: '[Завтра]',
        lastDay:  '[Вчера]',
        lastWeek: function () {
            return "[" + fromNow + "]";
        },
        nextWeek: function () {
            return "[" + fromNow + "]";
        },
        // when the date is further away, use from-now functionality
        sameElse: function () {
            return "[" + fromNow + "]";
        }
        // lastWeek: function (now) {
        //     if (now.week() !== this.week()) {
        //         switch (this.day()) {
        //             case 0:
        //                 return '[В прошлое] dddd';
        //             case 1:
        //             case 2:
        //             case 4:
        //                 return '[В прошлый] dddd';
        //             case 3:
        //             case 5:
        //             case 6:
        //                 return '[В прошлую] dddd';
        //         }
        //     } else {
        //         if (this.day() === 2) {
        //             return '[Во] dddd';
        //         } else {
        //             return '[В] dddd';
        //         }
        //     }
        // },
        // nextWeek: function (now) {
        //     if (now.week() !== this.week()) {
        //         switch (this.day()) {
        //             case 0:
        //                 return '[В следующее] dddd';
        //             case 1:
        //             case 2:
        //             case 4:
        //                 return '[В следующий] dddd';
        //             case 3:
        //             case 5:
        //             case 6:
        //                 return '[В следующую] dddd';
        //         }
        //     } else {
        //         if (this.day() === 2) {
        //             return '[Во] dddd';
        //         } else {
        //             return '[В] dddd';
        //         }
        //     }
        // },
    });
}