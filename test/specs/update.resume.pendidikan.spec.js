import { expect,browser,$ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ConfirmLogin from '../pageobjects/confirmLogin.page.js'
import { username, password } from '../account/akun.js'
import resume from '../pageobjects/updateresume.js'
import confirm from '../pageobjects/confirm.js'
import { tingkatPendidikan } from '../data/tingkat-pendidikan.js'

describe('Checking Update Resume Pendidikan', () => {
    const bulan = ['January','February','March','April','May','June','July','August','September','October','November','December']
    before(async () => {
        await LoginPage.open()
        await LoginPage.login(username, password)
        await expect(ConfirmLogin.checkLogin).toBeExisting()
    });
    beforeEach(async () => {
        await resume.open()
        await resume.clickUpdateResume()
        await resume.switchToCurrentWindow()
        await resume.clickPendidikan()
    });
    it('Check Pendidikan ubah data', async () => {
        await resume.clickBtnUbahData()
        await expect(confirm.checkBtnBatal).toBeDisplayed()
        await expect(confirm.checkBtnSubmit).toBeDisplayed()
        await expect(confirm.sectionBtn).toBeDisplayed()
        await resume.clickBtnBatal()
        await browser.closeWindow()
    })
    it('Check Pendidikan tambah data', async () => {
        await resume.clickBtnUbahData()
        await expect(confirm.checkBtnBatal).toBeDisplayed()
        await expect(confirm.checkBtnSubmit).toBeDisplayed()
        await expect(confirm.sectionBtn).toBeDisplayed()
        const jumlahDataPendidikan = await confirm.jumlahData
        if(jumlahDataPendidikan > 1){
            await expect(resume.btnTambah).toBeEnabled()
            await expect(resume.btnHapus).toBeEnabled()
        }else{
            await expect(resume.btnTambah).toBeEnabled()
            await expect(resume.btnHapus).toBeDisabled()
        }
        await resume.clickBtnTambahData()
        const jumlahDataSetelahBtnTambahPendidikan = await confirm.jumlahData
        await expect(jumlahDataSetelahBtnTambahPendidikan).toEqual(jumlahDataPendidikan+1)
        await resume.clickBtnBatal()
        await browser.closeWindow()
    })
    it('Check Pendidikan hapus data', async () => { 
        await resume.clickBtnUbahData()
        await resume.clickBtnTambahData()
        const jumlahDataBtnTambahPendidikan = await confirm.jumlahData
        await resume.clickBtnHapusData()
        await resume.waitJumlahData()
        const jumlahDataBtnHapus = await confirm.jumlahData
        await expect(confirm.checkStatus).toHaveText('Sukses Delete Pendidikan Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true });
        await expect(jumlahDataBtnHapus).toEqual(jumlahDataBtnTambahPendidikan-1)
        await browser.closeWindow()
    })
    //uji yang required terlebih dahulu
    it('Check pendidikan - Uji Tingkat Pendidikan diisi kosong', async () => {
        await resume.clickBtnUbahData()
        expect(await confirm.checkValidityTingkatPendidikan()).toBe(false)
        await browser.closeWindow()
    })
    it('Check pendidikan - Uji Tingkat Pendidikan semua option', async () => {
        await resume.clickBtnUbahData()
        const lengthTingkatPendidikan = await confirm.lengthTngkatPendidikan
        for(let i=0;i<lengthTingkatPendidikan;i++){
        await resume.inputTingkatPendidikan(i)
        expect(await confirm.getTextTingkatPendidikan()).toHaveText(tingkatPendidikan[i])
        await browser.closeWindow()
        }
    })
    it('Check pendidikan - Uji Bulan mulai diisi kosong', async () => {
        await resume.clickBtnUbahData()
        expect(await confirm.checkValidityTahunMulai()).toBe(false)
        await browser.closeWindow()
    })
    it('Check pendidikan - Uji Bulan Selesai diisi kosong', async () => {
        await resume.clickBtnUbahData()
        expect(await confirm.checkValidityTahunSelesai()).toBe(false)
        await browser.closeWindow()
    })
    it('Check pendidikan - Uji tahun mulai input valid', async () => {
        await resume.clickBtnUbahData()
        const startDate = '2020'
        await resume.inputTanggalMulaiPendidikan(startDate)
        expect(await confirm.getValueTanggalMulaiPendidikan()).toEqual(startDate)
        await browser.closeWindow()
    })
    it('Check pendidikan - Uji tahun selesai input valid', async () => {
        await resume.clickBtnUbahData()
        const endDate = '2021'
        await resume.inputTanggalSelesaiPendidikan(endDate)
        expect(await confirm.getValueTanggalSelesaiPendidikan()).toEqual(endDate)
        await browser.closeWindow()
    })
    it('Check pendidikan - Uji input nama institusi diisi valid', async () => {
        await resume.clickBtnUbahData()
        const namaInstitusi = 'Universitas Andalas'
        await resume.inputNamaInstitusiPendidikan(namaInstitusi)
        expect (await confirm.getValueNamaInstitusiPendidikan()).toEqual(namaInstitusi)
        await browser.closeWindow()
    })
    it('Check pendidikan - Uji input jurusan diisi valid', async () => {
        await resume.clickBtnUbahData()
        const jurusan = 'Matematika'
        await resume.inputJurusanPendidikan(jurusan)
        expect (await confirm.getValueJurusanPendidikan()).toEqual(jurusan)
        await browser.closeWindow()
    })
    it('Check pendidikan - Uji input IPK/Nilai akhir diisi valid', async () => {
        await resume.clickBtnUbahData()
        const nilaiAkhir = '3.45'
        await resume.inputNilaiPendidikan(nilaiAkhir)
        expect (await confirm.getValueNilaiPendidikan()).toEqual(nilaiAkhir)
        await browser.closeWindow()
    })
    it('Check pendidikan - Uji input semua option bulan mulai', async () => {
        await resume.clickBtnUbahData()
        const selectorBulanMulai = 4
        const selectorConfirmBulanMulai = 0
        for(let i=0;i<bulan.length;i++){
            let month = i
            await resume.inputBulanMulaiPendidikan(selectorBulanMulai,month)
            expect(await confirm.getBulanPendidikan(selectorConfirmBulanMulai)).toHaveText(bulan[month])
        }
        await browser.closeWindow()
    })
    it.only('Check pendidikan - Uji input semua option bulan selesai', async () => {
        await resume.clickBtnUbahData()
        const selectorBulanSelesai = 5
        const selectorConfirmBulanSelesai = 0
        for(let i=0;i<bulan.length;i++){
            let month = i
            await resume.inputBulanSelesaiPendidikan(selectorBulanSelesai,month)
            expect(await confirm.getTextBulan[selectorConfirmBulanSelesai].getText()).toHaveText(bulan[month])
        }
        await browser.closeWindow()
    })
    it('Check pendidikan - Uji Bulan Mulai ', async () => {
        await resume.clickBtnUbahData() 
        const month = 1
        await resume.inputBulanMulaiPendidikan(4,month)
        await expect(confirm.getBulanPendidikan(0))
        await browser.closeWindow()
    })
    it('Check pendidikan - Uji Bulan Selesai', async () => {
    })
    it('Check pendidikan - Uji Tingkat Pendidikan diisi kosong', async () => {
    })
    it('Check pendidikan - Uji Tingkat Pendidikan diisi kosong', async () => {
    })
    it('Check pendidikan - Uji Tingkat Pendidikan diisi kosong', async () => {
    })
    it('Check pendidikan - Uji Tingkat Pendidikan diisi kosong', async () => {
    })
    it('Check pendidikan - Uji Tingkat Pendidikan diisi kosong', async () => {
    })
    it('Check pendidikan - Uji Tingkat Pendidikan diisi kosong', async () => {
    })

})