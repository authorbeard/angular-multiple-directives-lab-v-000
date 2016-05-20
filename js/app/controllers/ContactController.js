function ContactController() {
    this.contacts = [{
        name: 'Bob',
        phoneNumber: '0123458690'
    },{
        name: 'Tim',
        phoneNumber: '3934203242'
    },{
        name: 'Ross',
        phoneNumber: '0684059433'
    }];

    this.removeContact = function (index) {
        this.contacts.splice(index, 1);
    }

    this.addContact = function(name, phone){
        // debugger;
        var contact = {
            name: name,
            phoneNumber: phone
        }
        this.contacts.push(contact)
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);