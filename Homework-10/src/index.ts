// 1. Написати декоратор методу @Catch, який має перехоплювати помилки та виводити повідомлення "Oops, there is an error in ${METHOD_NAME}: ${ERROR}".
// Наприклад
// class UsersService {
//   @Catch
//   getUsers() {
//     throw new Error("No users");
//   }
// }
// На виклику методу getUsers у консоль має вивестись повідомлення "Oops, there is an error in getUsers: No users"


const Catch = (target: any, context: ClassMethodDecoratorContext) => {
  try {
    target();
  } catch (error: any) {
    console.log(`Oops, there is an error in ${target.name}: ${error.message}`);
  }
};

class UsersService {
  @Catch
  getUsers() {
    throw new Error("No users");
  }
}

const service1 = new UsersService();
