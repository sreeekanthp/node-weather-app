const request = require('request')

const forecast = (lattitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e18debf647ed648011da4dfb4153229a&query='+ lattitude + ',' + longitude
        request({url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currenlty ' + body.current.temperature + ' degrees out. Feels liks ' + body.current.feelslike)
        }
    })
}

module.exports = forecast