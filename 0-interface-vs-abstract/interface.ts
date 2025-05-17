// Interface definition
interface UserProfile {
    name: string | null;
    displayName(): void;
    getName(): string;
}

class Person implements UserProfile {
    name = "Ramzi Hadrouk";

    displayName(): void {
        console.log(this.name);
    }

    getName(): string {
        return this.name;
    }
}


let user :Person=new Person() ;
user.displayName( )
