//#region 1
//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
//(Araştırma konusu : şart blokları : if )

function getPrimeNumber(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i] + " Çift Sayıdır");
        }
        else if (numbers[i] % 3 === 0) {
            console.log(numbers[i] + " Tek Sayıdır");
        }
        else {
            console.log(numbers[i] + " Asal Sayıdır");
        }
    }
    console.log("***********************************");
}
getPrimeNumber(7, 2, 9, 11);
getPrimeNumber(2, 5, 8, 21, 13)
//#endregion 1

//#region 2
//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
//İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
function findFriendNumber(number1, number2) {
    let totalNumber1 = 0;
    let totalNumber2 = 0;

    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0)
            totalNumber1 += i;
    }

    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0)
            totalNumber2 += i;
    }

    if (number1 == totalNumber2 && number2 == totalNumber1)
        return console.log("Arkadaş Sayılardır.");
    else
        return console.log("Arkadaş Sayılar Değildir.");

}
findFriendNumber(220, 284);
//#endregion 2

//#region 3
// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
// mükemmel sayı :kalansız tam bölenlerinin toplamı kendisine eşit olan sayılara verilen isimdir,

function perfectNumber(number) {
    let totalNumber = 0;

    for (let i = 1; i < number; i++) {
        if (number % i == 0)
            totalNumber += i;
    }
    console.log("***********************************");

    if (number == totalNumber)
        return console.log("Mükemmel Sayıdır.");
    else
        return console.log("Mükemmel Sayı Değildir.");
}
perfectNumber(12);
perfectNumber(28);
//#endregion 3

//#region 4
// 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function primeNumber() {
    let prvPrimeNumbers = []
    for (let i = 2; i < 1000; i++) {
        if (i % 2 !== 0 && i % 3 !== 0) {
            prvPrimeNumbers.push([i])
        }
    }
    console.log(" Asal Sayılar : " + prvPrimeNumbers);
}
primeNumber();
//#endregion 4