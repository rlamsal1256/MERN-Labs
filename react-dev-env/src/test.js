class myClass{
    constructor(name){
        this.name = name;
    }

    display(){
        console.log(this.name);
    }
}

new myClass("myClass").display();