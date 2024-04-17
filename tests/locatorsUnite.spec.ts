import {test} from '@playwright/test'


test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/') 
  await page.getByText('Forms').click() 
  await page.getByText('Form Layouts').click()
  })

test('Locator syntax rules', async({page}) => {
//Find the Locator by Tag name
page.locator('input')

//Find the Locator by ID
page.locator('#inputEmail')

//Find the Locator by Class value
page.locator('.shape-rectangle')

//by attribute
page.locator('[placeholder="Email"]')

//by Class value (full)
page.locator('[class="input-full-width size-medium statud-basic shape-rectangle nb-transition"]')

//combine different selectors
page.locator('input[placeholder="Email"][nbinput]')

//by XPath
page.locator('//*[@id="inputEmail1"]')

//by partial text match
page.locator(':text("Using"')

//by exact text match
page.locator(':text("Using the Grid")')

})