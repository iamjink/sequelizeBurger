module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,150]
            }
        }
    });

    Post.associate = function(models) {
        Post.belongsTo(models.Burgers, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Post;
}