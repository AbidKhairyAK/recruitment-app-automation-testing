import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
    //Getter element
    get email() {return $('input[name="username"]')}
    get password() {return $('input[name="password"]')}
    get submitBtn() {return $('button=Login')}
    get seePass() {return $('svg.lucide-eye')}
    get homeBtn() {return $('button=Back to Home')}

    async inputData(username, password) {
        await this.email.setValue(username);
        await this.password.setValue(password);
    }

    async checkPass(){
        await this.seePass.click()
    }

    async backtoHome(){
        await this.homeBtn.click()
    }

    async clickBtnLogin(){
        await this.submitBtn.click()
    }
    
    async open() {
        return super.open('login');
    }
}

export default new LoginPage();
