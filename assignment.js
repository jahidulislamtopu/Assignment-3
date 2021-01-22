// 01.kilometerToMeter 

function kilometerToMeter(kilometer) {
    var easyMeter = kilometer * 1000;
    return easyMeter;
}
var newResultMeter = kilometerToMeter(1);
console.log(newResultMeter);


// 02.budgetCalculator 

function budgetCalculator(SmartWatch, iphone, hpLaptop) {
    var newWatchPrice = SmartWatch * 50;
    var newPhonePrice = iphone * 100;
    var newLaptopPrice = hpLaptop * 500;
    var TotalPrice = newWatchPrice + newPhonePrice + newLaptopPrice;
    return TotalPrice;
}

var budgetResult = budgetCalculator(1, 2, 3);
console.log(budgetResult);


// 03.hotelCost 

function hotelCost(dayCount) {
    var totalPrice = 0;
    if (dayCount <= 10) {
        totalPrice = dayCount * 100;
    } else if (dayCount <= 20) {
        var firstStayPrice = 10 * 100;
        var secondStay = dayCount - 10;
        var secondStayPrice = secondStay * 80;
        var totalPrice = firstStayPrice + secondStayPrice;
    } else {
        var firstStayPrice = 10 * 100;
        var secondStayPrice = 10 * 80;
        var thirdStay = dayCount - 20;
        var thirdStayPrice = thirdStay * 50;
        var totalPrice = firstStayPrice + secondStayPrice + thirdStayPrice;
    }
    return totalPrice;
}

var HotelCost = hotelCost(21);
console.log(HotelCost);


// 04.megaFriend

function megaFriend(friendListName) {
    var longestName = '';
    for (var i = 0; i < friendListName.length; i++) {
        if (longestName.length < friendListName[i].length) {
            longestName = friendListName[i];
        }
    }
    return longestName;
}
var MegaFriend = megaFriend([
    'Ali Azam Tuser',
    'Mehedi Hassan',
    'Arafat sanny',
    'Topu',
    'Nadim'
]);
console.log(MegaFriend);