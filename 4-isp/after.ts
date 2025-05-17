// Segregated interfaces
interface ProfileActions {
    viewProfile(): void;
    editProfile(): void;
}

interface AdminActions {
    deleteUser(userId: string): void;
    grantAdminPrivileges(): void;
}

// Regular User only implements profile actions
class RegularUser implements ProfileActions {
    viewProfile() {
        console.log("Viewing profile...");
    }

    editProfile() {
        console.log("Editing profile...");
    }
}

// Admin User implements both interfaces
class AdminUser implements ProfileActions, AdminActions {
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
const regularUser: ProfileActions = new RegularUser();
const adminUser: AdminUser = new AdminUser();

console.log("\n=== AFTER ISP ===");
regularUser.viewProfile();

// TypeScript will block this at compile time:
// regularUser.deleteUser("123"); // ❌ Compile Error: Property 'deleteUser' does not exist

adminUser.grantAdminPrivileges(); // Works
