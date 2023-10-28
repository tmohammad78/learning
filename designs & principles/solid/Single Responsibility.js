//// In this code,we have information about employee but we are calculating 
// the salary here that it's related to finance

/// Before
class ManageEmployee {

  constructor(http){
    this.http = http;
  }

  SERVER_URL = 'http://localhost:5000/employee';

  getEmployee (empId){
     return this.http.get(this.SERVER_URL + `/${empId}`);
  }

  updateEmployee (employee){
     return this.http.put(this.SERVER_URL + `/${employee.id}`,employee);
  }

  deleteEmployee (empId){
     return this.http.delete(this.SERVER_URL + `/${empId}`);
  }

  calculateEmployeeSalary (empId, workingHours){
    var employee = this.http.get(this.SERVER_URL + `/${empId}`);
    return employee.rate * workingHours;
  }

}

/// In this part, we separate responsibilities with two different classes
/// After
class ManageEmployee {

  constructor(http){
    this.http = http;
  }
  SERVER_URL = 'http://localhost:5000/employee';

  getEmployee (empId){
     return this.http.get(this.SERVER_URL + `/${empId}`);
  }

  updateEmployee (employee){
     return this.http.put(this.SERVER_URL + `/${employee.id}`,employee);
  }

  deleteEmployee (empId){
     return this.http.delete(this.SERVER_URL + `/${empId}`);
  }

}

class ManageSalaries {

  constructor(http){
    this.http = http;
  }
  SERVER_URL = 'http://localhost:5000/employee';

  calculateEmployeeSalary (empId, workingHours){
    var employee = this.http.get(this.SERVER_URL + `/${empId}`);
    return employee.rate * workingHours;
  }

}