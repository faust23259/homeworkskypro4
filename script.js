// Task 1

let i = 0;
while (i < 2) {
    console.log("Привет!");
    i++;
}

// Task 2

let c = 1;
while (c <= 5) {
    console.log(n);
    n++;
}

// Task 3

let b = 7;
while (b >= 7 && b <=22) {
    console.log(b);
    b++;
}

// Task 4

let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}
for (let nameWorker in obj) {
    console.log(`${nameWorker} - зарплата ${obj[nameWorker]} долларов.`);
}

// Task 5

let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(`Получилось число" ${n}`);
console.log(`Количество итераций ${num}`);

// Task 6

let firstFriday = 3;

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}


