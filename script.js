let number1 = document.getElementById('number1');
        let number2 = document.getElementById('number2');
        let frontEndCircle = document.getElementById('frontEndCircle');
        let backEndCircle = document.getElementById('backEndCircle');
        let dataBaseCircle = document.getElementById('dataBaseCircle');

        let counter1 = 0;
        let counter2 = 0;
        let counter3 = 0;
        

        setInterval(() => {
            if (counter1 == 80) {
                clearInterval();
            }
            else {

                counter1 += 1;
                number1.innerHTML = counter1 + '%';
                frontEndCircle.style.strokeDashoffset = 435 - (435 * counter1) / 100;
                
            }
        }, 26);

        setInterval(() => {
            if (counter2 == 55) {
                clearInterval();
            }
            else {
                counter2 += 1;
                number2.innerHTML = counter2 + '%';
                backEndCircle.style.strokeDashoffset = 472 - (472 * counter2) / 100;
            }
        }, 30);

        setInterval(() => {
            if (counter3 == 65) {
                clearInterval();
            }
            else {
                counter3 += 1;
                number3.innerHTML = counter3 + '%';
                dataBaseCircle.style.strokeDashoffset = 472 - (472 * counter3) / 100;
            }
        }, 30);
