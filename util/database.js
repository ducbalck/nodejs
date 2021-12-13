const Sequelize =  require('sequelize');

const sequelize = new Sequelize('node-complete','root', 'mjnhduc237',{
    dialect:'mysql',
    host: 'localhost'
});

module.exports = sequelize ;