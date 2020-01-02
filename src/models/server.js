module.exports = (sequelize, type) => {
    return sequelize.define('server', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncremet: true
        },
        serverName: {
            type: type.STRING,
        },
        ip: {
            type: type.STRING
        },
        hostname: {
            type: type.STRING
        },
        os_id: {
            type: type.INTEGER
        },
        cpu: { 
            type: type.STRING 
        },
        mem: { 
            type: type.STRING 
        },
        vlan: { 
            type: type.STRING 
        },
    })
}