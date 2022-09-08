import { Plugin } from "./axios";

export default {

    listar:() => {
        return Plugin.get('offices')
    }

}