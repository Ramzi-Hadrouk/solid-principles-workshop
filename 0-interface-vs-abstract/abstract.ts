abstract class BaseRepository {
    // Default in-memory storage
    protected storage: string[] = ["Ramzi", "Saif", "Khaled"];

    // Abstract method to be implemented by subclasses
    abstract create(data: string): string[];

    // Display all items in storage
    getAll(): void {
        this.storage.forEach(name => console.log(name));
    }

    // Clear the storage
    deleteAll(): void {
        this.storage = [];
    }
}

class UserRepository extends BaseRepository {
    // Implement the abstract create method
    create(name: string): string[] {
        this.storage.push(name);
        return this.storage;
    }
}

// ✅ Usage example
const repo = new UserRepository();
repo.getAll(); // Prints: Ramzi, Saif, Khaled
console.log('----------')
repo.create("Omar");
repo.getAll(); // Now includes Omar

// ❌ Error case: this class would cause a compile-time error
/*
class BrokenRepository extends BaseRepository {
    // Missing create() implementation — TypeScript will throw an error
}
*/
