class Admin{
    constructor(a_name,a_pwd,a_email){
        this.a_name=a_name
        this.a_pwd=a_pwd
        this.a_email=a_email
    }
}
cred=new Admin("SKM","5Nov199","skm@gmail.com")
console.log(cred.a_email);
console.log(cred.a_name);
console.log(cred.a_pwd);
console.log(cred);