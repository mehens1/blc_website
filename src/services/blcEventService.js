import api from "../API/axios"

export const registerService = (data) => {
    return api.post('/blc/attendees', data);
}