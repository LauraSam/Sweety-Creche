var models = require('../models');

// Chief Model

module.exports = function(sequelize, DataTypes) {

    var Users = sequelize.define('Users', {
        id: {
            type: DataTypes.BIGINT,
            field: 'id',
            primaryKey: true,
            autoIncrement: true
        },
        Firstname: DataTypes.STRING,
        Lastname: DataTypes.STRING,
        Login: DataTypes.INTEGER,
        Password: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                Users.belongsTo(models.Roles, { foreignKey: 'FK_IdRole', constraints: false, targetKey: 'id' });
            }
        },
        tableName: 'Users',
        timestamps: false,
    })
    return Users;
};
