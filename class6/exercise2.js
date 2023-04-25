import moment from "moment";

const today = moment();
const birthdate = moment('2002-05-02', 'YYYY-MM-DD');

if(birthdate.isValid()){
    const difference = today.diff(birthdate, 'days')
    console.log(difference);
}else{
    console.log('date not valid');
}

console.log(today);