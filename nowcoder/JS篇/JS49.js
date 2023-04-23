function isAvailableEmail(sEmail) {
    return sEmail.includes('@') && sEmail.indexOf('@') !==0 && sEmail.indexOf('@') !== sEmail.length-1;
}
console.log(isAvailableEmail('@sss'));