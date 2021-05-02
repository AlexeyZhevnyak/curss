import axios from "axios";

const TEST_API = "http://localhost:8080/api/v1/greeting1";
class Service {
  getData() {
    return axios.get(TEST_API);
  }
}

export default new Service();
