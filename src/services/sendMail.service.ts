import { nodemailer } from 'node';
import { nodemailer } from 'nodemailer';
import "nodemailer"
interface ISendMail{
    userSend: string,
    userReceive: string,
    mailSummary: string,
    mailMessage: Text
}

class SendMail{
    async execute({ 
        userSend, 
        userReceive, 
        mailSummary, 
        mailMessage
    } : ISendMail)
    {
        const account = await nodemailer.createTestAccount();
        const transporter = nodemailer.createTransporter({
            host: ''
        })
    }
}

export { SendMail }