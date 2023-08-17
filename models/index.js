const User = require('./User');
const Comments = require('./Comments');
const SongPost = require('./SongPosts');
User.hasMany(SongPost, {
    foreignKey: 'user_id' ,
    onDelete: 'CASCADE'
});
SongPosts.hasMany(Comments, {
  foreignKey: "songposts_id",
  onDelete: "CASCADE",
});

SongPosts.belongsTo(User, {
  foreignKey: "user_id",
});
Comments.belongsTo(SongPosts, {
  foreignKey: "songposts_id",
});
Comments.belongsTo(User, {
  foreignKey: "user_id",
});
module.exports = { User, SongPosts, Comments };
