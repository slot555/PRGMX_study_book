document.addEventListener("DOMContentLoaded", () => {
    
    //Унарный, бинарный операнд
    let x = 1, y = 3;
    x = -x; // x= -1
    console.log('Унарный - ', x);
    console.log('Бинарный - ', y - x);
    
    //Математика
    x = x + y; //x = 2
    y = y - -x; //y = 5
    x = x * y //x = 10
    y = x / y; //y = 2
    x = x % (y + 1);//x = 1
    y = y ** (y);//y = 4
    console.log(x); 
    console.log(y); 

    //Сложение строк
    x = 'String_01';
    y = 'String_02';
    x = x + ' ' + y;
    console.log(x); 

    //Приведение к числу
    x = '5';
    y = '2';
    x = +x + +y;
    console.log(x);

    //Приоритет операторов
    x = 2;
    y = 3;
    x = x * y + 1;
    console.log(x);

    //Присваивание по цепочке
    x = y = 2;
    console.log(x);
    console.log(y);

    //Сокращённая арифметика с присваиванием
    x = 2;
    x += 2; //x = 4
    x *= 2; //x = 8
    x /= 3; //x = 2.66...
    console.log(x);

    //Инкремент/декремент
    x = 2;
    console.log(x++); //2
    console.log(++x); //4
});

