'use script';

const repeating = function () {
    let today = new Date();

    // console.log(today);

    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let dayWeek = today.getDay();

    if (dayWeek != 0) {
        dayWeek = dayWeek - 1;
    } else {
        dayWeek = 6;
    }
    // console.log(year, month, day, hours, minutes, seconds, dayWeek);

let one = document.querySelector('.one');
let two = document.querySelector('.two');

    const csz = [' час ', ' часа ', ' часов '];
    const min = [' минута ', ' минуты ', ' минут '];
    const sec = [' секунда ', ' секунды ', ' секунд '];

    const endings = function (n) {
        let inone = n % 10;
        return inone == 1 && n != 11 ? 0 :
            (n > 4 && n < 21) || (inone > 4 && inone <= 9) ? 2 :
                inone == 0 ? 2 :
                    1;
    };

    const days = ['Понедельник', 'Вторник', 'Среда', 'Четвер', 'Пятница', 'Субота', 'Воскресенье'];
    const monthes = [' января ', ' февраля ', ' марта ',
        ' апреля ', ' мая ', ' июня ', ' июля ', ' августа ', ' сентября ',
        ' октября ', ' ноября ', ' декабря '];

    let a = `Сегодня ${days[dayWeek]}, ${day} ${monthes[month]} ${year} года, ${hours} ${csz[endings(hours)]} ${minutes} ${min[endings(minutes)]} ${seconds} ${sec[endings(seconds)]}`;
    console.log(a);
    one.textContent = a;

    const nei = function (el) {
        let neil = el.toString();
        return neil.length == 1 ? '0' + neil :
            +neil;
    }

    let b = `${nei(day)}.${nei(month + 1)}.${year} - ${nei(hours)}:${nei(minutes)}:${nei(seconds)}`;
    console.log(b);
    two.textContent = b;
};

setInterval(repeating, 1000 );
