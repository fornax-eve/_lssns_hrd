let ru_week = ['Понедельник', 'Вторник', 'Среда', 'Четвер', 'Пятница', 'Субота', 'Воскресенье'];
let en_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let sposob = prompt('Введите if, switch или array для выбора способа решения задачи')
let lang = prompt('Введите en или ru')

if (sposob == 'if') {
    if (lang == 'ru') {
        ru_week.forEach(a => console.log(a))
    } else if (lang == 'en') {
        en_week.forEach(b => console.log(b))
    } else {
        console.log("Некорректное введение")
    }
    ;
} else if (sposob == 'switch') {
    switch (lang) {
        case "en":
            en_week.forEach(b => console.log(b));
            break;
        case "ru":
            ru_week.forEach(a => console.log(a));
            break;
        default:
            console.log('Некорректный выбор языка')
    }
} else if (sposob == 'array') {
    let week = {
        ru: ru_week,
        en: en_week
    }
    week[lang].forEach(b => console.log(b))
} else {
    alert('Неправильный ввод данных!')
}

setTimeout(() => {
    let namePerson = prompt('Введите Артем, Александр или любое другое имя');
    (namePerson == 'Артем') ? console.log('Директор') : (namePerson == 'Александр') ? console.log('Преподаватель') :
        console.log('Студент')
}, 5000)

