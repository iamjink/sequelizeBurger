module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,150]
            }
        }
    });

    Customer.associate = function(models) {
        Customer.hasMany(models.Burgers, {
           
        })
    }

    return Customer;
}