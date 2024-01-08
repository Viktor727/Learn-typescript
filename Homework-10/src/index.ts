// 1. Написати декоратор методу @Catch, який має перехоплювати помилки та виводити повідомлення "Oops, there is an error in ${METHOD_NAME}: ${ERROR}".
// Наприклад
// class UsersService {
//   @Catch
//   getUsers() {
//     throw new Error("No users");
//   }
// }
// На виклику методу getUsers у консоль має вивестись повідомлення "Oops, there is an error in getUsers: No users"


const Catch = (target: any, methodName: string, descriptor: PropertyDescriptor) => {    
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      try {
        const result = originalMethod.apply(this, args);
      } catch (error: any) {
        console.log(`Oops, there is an error in ${methodName}: ${error.message}`);
      }
    };

    return descriptor
};

class UsersService {
  @Catch
  getUsers() {
    throw new Error("No users");
  }
}

const service1 = new UsersService();
service1.getUsers();
