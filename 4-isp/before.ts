// Bloated interface
interface UserActions {
    viewProfile(): void;
    editProfile(): void;
    deleteUser(userId: string): void;
    grantAdminPrivileges(): void;
}

// Regular User forced to implement admin methods
class RegularUser implements UserActions {
    viewProfile() {
        console.log("Viewing profile...");
    }

    editProfile() {
        console.log("Editing profile...");
    }

    deleteUser(userId: string) {
        throw new Error("Regular users cannot delete users!");
    }

    grantAdminPrivileges() {
        throw new Error("Regular users cannot grant admin privileges!");
    }
}

// Admin User implements all methods
class AdminUser implements UserActions {
    viewProfile() {
        console.log("Viewing profile...");
    }

    editProfile() {
        console.log("Editing profile...");
    }

    deleteUser(userId: string) {
        console.log(`Deleting user ${userId}...`);
    }

    grantAdminPrivileges() {
        console.log("Granting admin privileges...");
    }
}

// Test the code
const regularUser: UserActions = new RegularUser();
const adminUser: UserActions = new AdminUser();

console.log("=== BEFORE ISP ===");
try {
    regularUser.viewProfile();
    regularUser.deleteUser("123"); // Throws error
} catch (error) {
    console.log("Error:", error.message);
}

adminUser.grantAdminPrivileges(); // Works
