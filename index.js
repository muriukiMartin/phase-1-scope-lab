// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer() {
    return bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
} 

const leastFavoriteCustomer = 'John';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'James';
}