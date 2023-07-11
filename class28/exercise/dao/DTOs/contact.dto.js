export default class ContactDto {
    constructor({name, last_name, phone}){
        this.name = `${name} ${last_name}`;
        this.phone = phone ? phone.split('-').join('') : '';
    }
}