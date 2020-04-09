module.exports = function (sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Burgers.associate = function(models){
        Burgers.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };
    return Burgers;
}