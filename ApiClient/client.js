import axios from "axios"
import { Lacquer } from "next/font/google"

const base_url = "https://api.open-meteo.com/v1/forecast"

export default class ApiClient {
    async responseStatusCheck(responseObject) {
        if (responseObject.status >= 200 && responseObject.status < 300){
            return responseObject
        }
        throw new Error(responseObject.statusText)
    }

    async getRequest(endpoint, params = {}) {
        try {
            const response = await axios.get(`${base_url}${endpoint}`, {
                params
            })
            return this.responseStatusCheck(response)
        } catch (error) {
            throw new Error("Oops! Something went wrong...")
        }
    }

    async getForecast({location}){
        const params = {
            latitude : location.latitude,
            longitude : location.longitude,
            daily : "weathercode,temperature_2m_max,temperature_2m_min,wind_speed_10m_max",
            timezone: "Europe/London"
        }
        return this.getRequest("", params)
    }
}