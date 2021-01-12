import axios from "axios";

function renderDataAPI() {
    return axios.get("https://randomuser.me/api/?results=20");
}
export default renderDataAPI