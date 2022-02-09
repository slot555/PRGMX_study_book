document.addEventListener("DOMContentLoaded", () => {
    
    //Инструкция «if»
    let year = prompt('Please enter year', '');
    if (Number(year) || Number(year) == 0){
        year = Number(year);

        if (year == 2022) {
            console.log("You're right it's 2022 year now.");
        } else if (year == 0) {
            console.log('Are you looking for Jesus, not a rigt place.');
        } else if (year <= 2021) {
            console.log('Trying to look at the past? You need to learn history.');
        } else if (year >= 2023) {
            console.log('Trying to look to the feature? You need to try better.');
        }
    } else {
        alert ('You need to enter number, now refresh page');
    }
});

