import loginPage from "../pageobjects/login.page.js";
import formApplicant from "../pageobjects/job-applicant-form.page.js";
import { $, browser } from '@wdio/globals'


describe("Testing login", function(){
    it("Login dengan email dan pass valid", async function(){
        await loginPage.open()
        await loginPage.inputData("dummy@prosigmaka.com","dummypsm")
        await loginPage.checkPass()
        browser.pause(2000)
        await loginPage.clickBtnLogin()

        // const titlePage = await $("h2[contains(text(),'Selamat datang di PSM App')")
        // await expect(titlePage).toHaveText("Selamat datang di PSM App")
    })
})

describe.only('Testing form applicant', function(){
    it("FA-001_Submit without input fullname", async ()=>{
        await formApplicant.open()
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765')
        await formApplicant.setBirthdayDate("2002-10-28")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("input[name='nama']").checkValidity()
        })

        await expect(checkValidity).toBe(false)
    })

    it("FA-002_Submit without input email", async()=>{
        await formApplicant.open()
        await formApplicant.addName('Sugeng Cahyono')
        await formApplicant.addNumberPhone('087703076765')
        await formApplicant.setBirthdayDate('2000-09-20')
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("input[name='email']").checkValidity()
        })

        await expect(checkValidity).toBe(false)
    })

    // it("FA-003_Submit with invalid email", async()=>{
    //     await formApplicant.open()
    //     await formApplicant.addName('Sugeng Cahyono')
    //     await formApplicant.addEmail('rifqirizaldi@gmail')
    //     await formApplicant.addNumberPhone('087703076765')
    //     await formApplicant.setBirthdayDate('2000-09-20')
    //     await formApplicant.chooselastEducation()
    //     await formApplicant.chooseJobs()
    //     await formApplicant.chooseExperiences()
    //     await formApplicant.chooseFrameworks()
    //     await formApplicant.chooseJoins()
    //     await formApplicant.chooseReadyOnsites()
    //     await formApplicant.addcurrentSalary("3000000")
    //     await formApplicant.addexpectedSalary("4000000")
    //     // await browser.pause(3000)
    //     // await formApplicant.clickbtnSubmit()
    // })

    it("FA-004_Submit without input phone number", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("input[name='nomorHP']").checkValidity()
        })

        await expect(checkValidity).toBe(false)
    })

    it("FA-005_Submit without input last education", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("#react-select-2-live-region ~ .react-select__single-value")
        })

        await expect(checkValidity).not.toBeExisting()
    })

    it("FA-006_Submit without input birthday date", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765')
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("input[type='date']").checkValidity()
        })

        await expect(checkValidity).toBe(false)
    })

    it("FA-007_Submit without input job role", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const titlePage = await $("h2=Form Lamaran Kerja")
        const checkValidity = await browser.execute(function(){
            return document.querySelector("#react-select-3-live-region ~ .react-select__single-value")
        })

        await expect(checkValidity).not.toBeExisting()
    })
    
    it("FA-008_Submit without input experience", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("#react-select-4-live-region ~ .react-select__single-value")
        })

        await expect(checkValidity).not.toBeExisting()
    })

    it("FA-009_Add more job (without submit) ", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        await formApplicant.clickaddJob() 
        // await browser.pause(3000)
        // await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("#react-select-6-live-region")
        })

        await expect(checkValidity).toBeExisting()
    })


    it("FA-010_Add more job (with submit) ", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()        
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        await formApplicant.clickaddJob()
        await formApplicant.chooseJobs2()
        await formApplicant.chooseExperiences2()
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const titlePage = await $("h3=Selamat,")
        await expect(titlePage).toHaveText("Selamat,")
    })

    it("FA-011_Delete more job (without submit) ", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        await formApplicant.clickaddJob()
        await formApplicant.clickdeleteJob()
        // await browser.pause(3000)
        // await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("#react-select-6-live-region")
        })

        await expect(checkValidity).not.toBeExisting()
    })

    it("FA-012_Delete more job (with submit) ", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        await formApplicant.clickaddJob()
        await formApplicant.clickdeleteJob()
        // await browser.pause(3000)
        // await formApplicant.clickbtnSubmit()

        const titlePage = await $("h3=Selamat,")
        await expect(titlePage).toHaveText("Selamat,")
    })

    it("FA-013_Submit without input framework", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("#react-select-5-live-region ~ .react-select__single-value")
        })

        await expect(checkValidity).not.toBeExisting()
    })

    it("FA-014_Submit without input ready on-site", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("input[name='domisili']")
        })

        await expect(checkValidity).toBeExisting()
    })

    
    it("FA-015_User choose ready on-site", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        // await browser.pause(3000)
        // await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("input[name='domisili']")
        })

        await expect(checkValidity).not.toBeExisting()
    })

    it("FA-016_User choose not ready on-site (with submit)", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseJoins()
        await formApplicant.chooseNotReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        await formApplicant.adddomicileApplicant("Sidoarjo, Jawa Timur")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const titlePage = await $("h3=Selamat,")
        await expect(titlePage).toHaveText("Selamat,")
    })

    it("FA-017_Submit without input duration until joins", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            const ele =  document.querySelector("select[name='lamaran.kesiapanJoin']")
            const eleValue = ele.options[ele.selectedIndex].text
            return eleValue 
        })

        await expect(checkValidity).toEqual("Pilih Kesiapan Join")
    })

    it("FA-018_Submit without input current salary", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.chooseJoins()
        await formApplicant.addexpectedSalary("4000000")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("input[name='lamaran.currentSalary']").checkValidity()
        })

        await expect(checkValidity).toBe(false)
    })

    it("FA-019_Submit without input expected salary", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.chooseJoins()
        await formApplicant.addcurrentSalary("3000000")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const checkValidity = await browser.execute(function(){
            return document.querySelector("input[name='lamaran.expectedSalary']").checkValidity()
        })

        await expect(checkValidity).toBe(false)
    })

    it("FA-020_Submit full data", async ()=>{
        await formApplicant.open()
        await formApplicant.addName("Sugeng Cahyono")
        await formApplicant.addEmail('rifqirizaldi@gmail.com')
        await formApplicant.addNumberPhone('087703076765') 
        await formApplicant.setBirthdayDate("2000-09-20")
        await formApplicant.chooselastEducation()
        await formApplicant.chooseJobs()
        await formApplicant.chooseExperiences()
        await formApplicant.chooseFrameworks()
        await formApplicant.chooseReadyOnsites()
        await formApplicant.chooseJoins()
        await formApplicant.addcurrentSalary("3000000")
        await formApplicant.addexpectedSalary("4000000")
        // await browser.pause(3000)
        await formApplicant.clickbtnSubmit()

        const titlePage = await $("h3=Selamat,")
        await expect(titlePage).toHaveText("Selamat,")
    })
})