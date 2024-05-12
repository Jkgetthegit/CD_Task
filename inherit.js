class Parent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    displayParentMethod() {
        console.log(`Parent value ${this.x} and ${this.y} are printed`);
    }
}

class Child extends Parent {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    displayChildMethod() {
        this.displayParentMethod();
        console.log(`Child value ${this.z} is printed`);
    }
}

let obj = new Child(2, 3, 4);
obj.displayChildMethod();
