const User = require('./User');
const Comments = require('./Comments');
const SongPost = require('./SongPost');
User.hasMany(SongPost, {
    foreignKey: 'user_id' ,
    onDelete: 'CASCADE'
});
SongPost.hasMany(Comments, {
    foreignKey: 'user_id' ,
    onDelete: 'CASCADE'
});

SongPost.belongsTo(User, {
    foreignKey: 'user_id'
});
Comments.belongsTo(SongPost, {
    foreignKey: 'user_id'
});
module.exports = { User, SongPost, Comments};

 