

const changePassword = (otp: string, name:string) => {
    return `

        <div>   
            <h3>Hello ${name} here is your OTP pin </h3>
            </br>
            </br>
            <h3>${otp}</h3>
        </div>
    
    `
}


export default {
    changePassword
}
