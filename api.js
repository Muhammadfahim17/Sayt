let api = "https://6821ee3eb342dce8004c6630.mockapi.io/dataUser"
import getData from "./dom.js"

async function get() {
    try {
        let response = await fetch(api)
        let data = await response.json()
        getData(data)
    } catch (error) {
        
    }
}

export default get