import { $, browser } from '@wdio/globals'
import Page from './page.js';


class formApplicant extends Page {
    get btnSubmit() {return $('button=Submit')}
    get nameApplicant() {return $('input[name="nama"]')}
    get emailApplicant() {return $('input[name="email"]')}
    get numberphoneApplicant() {return $('input[name="nomorHP"]')}
    get clicklastEducation() {return $('.react-select__control')}
    get valuelastEducation() {return $('.react-select__menu-list').$('div=S1')}
    get birthdayDate() {return $('input[type="date"]')}
    get btnAddjob() {return $('svg.lucide-plus')}
    get btnDeletejob() {return $('svg.lucide-trash2')}
    get chooseJob() {return $("#react-select-3-live-region ~ .react-select__control")}
    get valueJob() {return $('#react-select-3-live-region ~ .react-select__menu').$('div=Angular Developer')}
    get chooseExperience() {return $("#react-select-4-live-region ~ .react-select__control")}
    get valueExperience() {return $('#react-select-4-live-region ~ .react-select__menu').$('div=2 tahun')}
    get chooseJob2() {return $("#react-select-8-live-region ~ .react-select__control")}
    get valueJob2() {return $('#react-select-8-live-region ~ .react-select__menu').$('div=Cloud Engineer')}
    get chooseExperience2() {return $("#react-select-9-live-region ~ .react-select__control")}
    get valueExperience2() {return $('#react-select-9-live-region ~ .react-select__menu').$('div=1 tahun')}
    get chooseFramework() {return $("#react-select-5-live-region ~ .react-select__control")}
    get valueFramework() {return $("#react-select-5-live-region ~ .react-select__menu").$("div=PostgreSQL")}
    get chooseReadyOnsite() {return $("select[name='lamaran.onsite']")}
    get valueReadyOnsite() {return $("option=Ya")}
    get valueReadyOnsite2() {return $("option=Tidak")}
    get domicileApplicant() {return $("input[name='domisili']")}
    get chooseJoin() {return $("select[name='lamaran.kesiapanJoin']")}
    get valueJoin() {return $("option=ASAP")}
    get valueJoin2() {return $("option=Pilih Kesiapan Join")}
    get currentSalary() {return $("input[name='lamaran.currentSalary']")}
    get expectedSalary() {return $("input[name='lamaran.expectedSalary']")}
    

    async open(){
        return super.open('public/9999/job-application/invitedby/dummy@prosigmaka.com')
    }

    async clickbtnSubmit(){
        await this.btnSubmit.click()
    }

    async clickaddJob(){
        await this.btnAddjob.click()
    }

    async clickdeleteJob(){
        await this.btnDeletejob.click()
    }

    async addName(fullname){
        await this.nameApplicant.setValue(fullname)
    }

    

    async addEmail(email){
        await this.emailApplicant.setValue(email)
    }

    async addNumberPhone(numberPhone){
        await this.numberphoneApplicant.setValue(numberPhone)
    }

    async chooselastEducation(){
        await this.clicklastEducation.click()
        await this.valuelastEducation.click()
    }

    async setBirthdayDate(birthdayDate){
        // await this.birthdayDate.click()
        // await this.birthdayDate.setValue(birthdayDate)
        await browser.execute(function (selectedDate){
            document.querySelector("[name='tanggalLahir']").value = selectedDate
        }, birthdayDate )
    }

    async chooseJobs(){
        await this.chooseJob.click()
        await this.valueJob.click()
    }

    async chooseExperiences(){
        await this.chooseExperience.click()
        await this.valueExperience.click()
    }

    async chooseJobs2(){
        await this.chooseJob2.click()
        await this.valueJob2.click()
    }

    async chooseExperiences2(){
        await this.chooseExperience2.click()
        await this.valueExperience2.click()
    }


    async chooseFrameworks(){
        await this.chooseFramework.click()
        await this.valueFramework.click()
    }

    async chooseReadyOnsites(){
        await this.chooseReadyOnsite.click()
        await this.valueReadyOnsite.click()
    }

    async chooseNotReadyOnsites(){
        await this.chooseReadyOnsite.click()
        await this.valueReadyOnsite2.click()
    }

    async adddomicileApplicant(domicile){
        await this.domicileApplicant.setValue(domicile)
    }

    async chooseJoins(){
        await this.chooseJoin.click()
        await this.valueJoin.click()
    }

    async getJoinValue(){
        await this.valueJoin2.getValue()
    }

    async addcurrentSalary(current){
        await this.currentSalary.setValue(current)
    }

    async addexpectedSalary(expected){
        await this.expectedSalary.setValue(expected)
    }
}

export default new formApplicant();
