const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SongPosts extends Model {}

SongPosts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    song_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // song_title: {
    //   type: DataTypes.STRING,
    // },
    // song_track: {
    //   type: DataTypes.STRING,
    // },
    // song_artist: {
    //   type: DataTypes.STRING,
    // },
    // song_image: {
    //   type: DataTypes.STRING,
    // },
    post: {
      type: DataTypes.STRING(140),
      allownull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "songposts",
  }
);

module.exports = SongPosts;
