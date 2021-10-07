let ru_week = ['Понедельник', 'Вторник', 'Среда', 'Четвер', 'Пятница', 'Субота', 'Воскресенье'];
let en_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let lang = prompt('Введите en или ru')


if (lang == 'ru') {
    ru_week.forEach(a => console.log(a))
} else if (lang == 'en') {
    en_week.forEach(b => console.log(b))
} else {
    console.log("Некорректное введение")
};

switch (lang) {
    case "en":
        en_week.forEach(b => console.log(b));
        break;
    case "ru":
        ru_week.forEach(a => console.log(a));
        break;
    default:
        console.log('Некорректный выбор языка')
};

let week = {ru : ru_week,
    en : en_week}
let massive = week[lang].forEach(b => console.log(b))
console.log(massive)


let namePerson = prompt('Введите Артем, Александр или любое другое имя');
(namePerson == 'Артем') ? console.log('Директор') : (namePerson == 'Александр') ? console.log('Преподаватель') :
    console.log('Студент')
