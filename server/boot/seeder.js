module.exports = function(app) {
    let User = app.models.User;
    let Role = app.models.Role;
    let RoleMapping = app.models.RoleMapping;
  
    User.create([
      {username: 'anonymoussc', email: '50c5ac69@opayq.com', password: '50c5ac69@opayq.com'},
      {username: 'user', email: 'user@user.com', password: 'user@user.com'}
    ], function(err, users) {
      if (err) throw err;
  
      console.log('Created users:', users);
  
      Role.create({
        name: 'admin'
      }, function(err, role) {
        if (err) throw err;
  
        console.log('Created role:', role);
  
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: users[0].id
        }, function(err, principal) {
          if (err) throw err;
  
          console.log('Created principal:', principal);
        });
      });

      Role.create({
        name: 'user'
      }, function(err, role) {
        if (err) throw err;
  
        console.log('Created role:', role);
  
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: users[1].id
        }, function(err, principal) {
          if (err) throw err;
  
          console.log('Created principal:', principal);
        });
      });

    });    
  };