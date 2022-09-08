import axios from "axios";

export const Plugin = axios.create({
    baseURL:'https://actflow-srv-office-l3cizs4bqa-uc.a.run.app/actflow/services/offices'
})