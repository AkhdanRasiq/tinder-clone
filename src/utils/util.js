import CONFIG from '../static/config.json'

export function strHost() {
    if (CONFIG.connection.port !== '') {
        console.log(CONFIG.connection.address)
        return CONFIG.connection.protocol + CONFIG.connection.address + CONFIG.connection.port
    }
    return CONFIG.connection.protocol + CONFIG.connection.address
}
