import {test, expect} from '@playwright/test'

//Local link access
test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
    })
    //Access Forms --> Forms Layouts
    test.describe("Forms and Form Layouts", () => {
        test.beforeEach(async ({page}) => {
            await page.getByText('Forms').click()
            await page.getByText('Form Layouts').click()
        })
    //Access email field
    test('email input field', async({page}) => {
        const secondEmailInput = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"})
    //E-mail address input
        //await secondEmailInput.fill('test@test.com')
        //await secondEmailInput.clear()
        //fills by simulating the keyboard type
        await secondEmailInput.pressSequentially('test2@test.com', {delay: 500}) //this is simulating delays between keys
        
        //generic assertion 
        const inputValue = await secondEmailInput.inputValue()
        //inputValue() is extracting the value from the locator and assigns it to the contant
        expect(inputValue).toEqual('test2@test.com')
        //calling a generic assertion to perform the validation

        //locator assertion
        await expect(secondEmailInput).toHaveValue('test2@test.com')
        //here you provide the locator and use the toHaveValue() and assign the value inside the input field
    })

    test('radio buttons', async({page}) => {
        const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Grid"})
        //await usingTheGridEmailInput.getByLabel('Option 1').check({force: true})
        await usingTheGridEmailInput.getByRole('radio', {name: "Option 1"}).check({force: true})
        const radioStatus = await usingTheGridEmailInput.getByRole('radio', {name: "Option 1"}).isChecked()
        expect(radioStatus).toBeTruthy()
        await expect(usingTheGridEmailInput.getByRole('radio', {name: "Option 1"})).toBeChecked()
    
        await usingTheGridEmailInput.getByRole('radio', {name: "Option 2"}).check({force: true})
        expect(await usingTheGridEmailInput.getByRole('radio', {name: "Option 1"}).isChecked()).toBeFalsy()
        expect(await usingTheGridEmailInput.getByRole('radio', {name: "Option 2"}).isChecked()).toBeTruthy()
//To select a radio button the most recommended way is to use getByRole() and provide the name of the radio button
//To select a radio button we use the method check()
//If the radio button is hidden we use the command {force: true} to bypass Playwright check of availability
//In order to validate if the status is selected or not we can use generic assertion or locator assertion 
//For generic assertion we use the isChecked() to get the status of the web element and then make a validation of the status with the toBeTruthy() or toBeFalsey()
//If we use locator assertion we use toBeChecked()

    })
    })
             