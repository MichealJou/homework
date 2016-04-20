// dao/userSqlMapping.js
// CRUD SQL语句
var admin = {
    insert:'INSERT INTO user(id, name, age) VALUES(0,?,?)',
    update:'update user set name=?, age=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user',
    queryByUserPassword:'select * from t_admin where email = ? and password = ? '
};

module.exports = admin;