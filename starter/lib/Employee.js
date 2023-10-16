// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.name = name; // this is a property of an object that we can access with dot notation (employee.name).
    this.id = id;  // this is a property of an object that we can access with dot notation (employee.id).
    this.email = email;  // this is a property of an object that we can access with dot notation (employee.email).
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
}
