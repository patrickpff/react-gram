import { api, requestConfig } from "../utils/config";

// Register an user
const register = async (data:any) => {
    const config = requestConfig("POST", data)

    try {
        const res = await fetch(api + "/users/register", config)
    } catch (error) {
        console.log(error)
    }
}