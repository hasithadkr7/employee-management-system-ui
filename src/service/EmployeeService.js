import axios from "axios";

const EMPLOYEE_BASE_URL = "http://127.0.0.1:8080/api/v1/employees"

class EmployeeSerivce{
    saveEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL, employee);
    }

    getEmployees(){
        return axios.get(EMPLOYEE_BASE_URL);
    }
}

export default new EmployeeSerivce();