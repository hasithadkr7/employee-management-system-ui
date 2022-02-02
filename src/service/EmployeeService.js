import axios from "axios";

const EMPLOYEE_BASE_URL = "http://127.0.0.1:8080/api/v1/employees"

class EmployeeSerivce{
    saveEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL, employee);
    }

    getEmployees(){
        return axios.get(EMPLOYEE_BASE_URL);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_BASE_URL + "/" + id);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_BASE_URL + "/" + id);
    }

    updateEmployee(employee, id){
        return axios.put(EMPLOYEE_BASE_URL + "/" + id, employee);
    }

}

export default new EmployeeSerivce();