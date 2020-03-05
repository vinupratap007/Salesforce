import { LightningElement } from 'lwc';

export default class HelloWebComponent extends LightningElement {
    greeting = 'Hello ! How are you today';
    currentDate = new Date().toDateString();
    d = new Date();
    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }

    get capitalizedGreeting() {
        return 'Hello' + this.greeting.toUpperCase()+'!';
    }

}