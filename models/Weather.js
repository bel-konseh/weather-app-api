export class Weather{
    constructor(id,cityId, humidity, temperature, description, date){
        this.id = id
        this.cityId = cityId
        this.humidity = humidity
        this.temperature = temperature
        this.description = description
        this.date = date
    }
}