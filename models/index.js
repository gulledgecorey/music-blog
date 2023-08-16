const User = require('./user');
const Comments = require('./comments');
const SongPosts = require('./songposts');
User.hasMany(SongPosts, {
    foreignKey: 'user_id' ,
    onDelete: 'CASCADE'
});
SongPosts.hasMany(Comments, {
    foreignKey: 'songposts_id' ,
    onDelete: 'CASCADE'
});

SongPosts.belongsTo(User, {
    foreignKey: 'user_id'
});
Comments.belongsTo(SongPosts, {
    foreignKey: 'songposts_id'
});
Comments.belongsTo(User, {
    foreignKey: 'user_id'
})
module.exports = { User, SongPosts, Comments};

 