export default {
    methods: {
        showAccount(payload) {
          console.log('showAccount payload', payload)
          this.$refs.account.OpenModal(payload);
        },
        addUser(newUser) {
          this.users.push(newUser)
          let foundIndex = this.findUserIndex(newUser)
          this.loginUser(foundIndex);
          this.forceRefresh();
          // this.saveUsersToServer();
        },
    
        login(userobj){
          let foundIndex = this.findUserIndex(userobj)
          if (foundIndex !== -1) {
            this.loginUser(foundIndex);
          } else {
            alert('Login fallito. Riprova.');
          }
        },
    
        loginUser(user){
          this.loggedInUser=user;
          this.isLoggedIn = true;
          this.pageLocation="table"
        },
    
        updateUser(user){
          console.log(user)
          this.users[this.loggedInUser]=user;
          this.forceRefresh();
        },
        logout(){
          confirm('Log out?')
          this.loggedInUser = null;
          this.isLoggedIn = false;
        },
        forceRefresh() {
          this.refreshKey += 1;
        },
    
        findUserIndex(userobj){
          return this.users.findIndex(user => user.username === userobj.username && user.password === userobj.password);
        },
    
        // saveUsersToServer() {
        //   fetch('http://localhost:3000/save-users', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(this.users),
        //   })
        //     .then(response => response.json())
        //     .then(data => {
        //       console.log(data.message);
        //     })
        //     .catch(error => {
        //       console.error('Errore nel salvataggio dei dati utente:', error);
        //     });
        //   },
    

    
      },
      data:{
        users: [
          { username: "1", email:'user@uno.it', password: "1" },
          { username: "z", email:'user@z.it', password: "z" },
          { username: "jnz", email:'janzo@jnz.it',password: "j" },
        ],
        loggedInUser : null,
        isLoggedIn: false,
        refreshKey: 0,
      }
}