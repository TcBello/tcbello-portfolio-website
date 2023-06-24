export async function sendEmail(message: string, name: string, email: string) {

    const emailBody = {
        message: message,
        name: name,
        email: email
    };

    try {
        let res = await fetch('https://tcbello-website-email-sender.vercel.app/send', {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailBody)
        });

        console.log(message, name, email);
        
        if(res.status == 200){
            return true
        }
        else return false;
    } catch (error) {
        console.log((error as Error).message);
        return false;
    }
}
    