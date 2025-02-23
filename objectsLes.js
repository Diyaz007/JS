class User {
    constructor(countryCode) {
        this.code = countryCode
    }
}
   function getCountryCode(user){
        return user?.code ?? "unknown"
   }

   let user1 = new User("KGZ")
    console.log(getCountryCode(user1))

