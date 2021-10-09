'use script'

let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let date = new Date();

for( let day of week) {
    let nday = day;
    if (day == week[date.getDay()]) {
        nday = day.bold();
    }
    if (day == 'Sunday' || day == 'Saturday') {
        nday = nday.italics();
    }
    let newEl = document.createElement('p');
    newEl.innerHTML = nday;
    document.body.appendChild(newEl);
    console.log(nday)
}
