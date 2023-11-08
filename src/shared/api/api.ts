import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

export const $ax = axios.create({
    baseURL:"http://localhost:8000",
    headers:{
        Authorization:localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
})