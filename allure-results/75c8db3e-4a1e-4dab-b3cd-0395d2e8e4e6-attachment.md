# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Automate_keyboard_Mouse.spec.js >> Handle Keyboard and Mouse2
- Location: tests\Automate_keyboard_Mouse.spec.js:51:5

# Error details

```
TypeError: page.mouse is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - table [ref=e3]:
      - rowgroup [ref=e4]:
        - row [ref=e5]:
          - cell [ref=e6]:
            - img [ref=e7]
    - table [ref=e8]:
      - rowgroup [ref=e9]:
        - row "vtiger CRM The honest Open Source CRM" [ref=e10]:
          - cell "vtiger CRM" [ref=e11]:
            - img "vtiger CRM" [ref=e12]
          - cell "The honest Open Source CRM" [ref=e13]:
            - img "The honest Open Source CRM" [ref=e14]
        - row "Sign in User Name admin Password admin Color Theme softed Language US English Login [Alt+L]" [ref=e15]:
          - cell [ref=e16]:
            - img [ref=e17]
          - cell "Sign in User Name admin Password admin Color Theme softed Language US English Login [Alt+L]" [ref=e18]:
            - table [ref=e20]:
              - rowgroup [ref=e21]:
                - row "Sign in" [ref=e22]:
                  - cell "Sign in" [ref=e23]:
                    - img "Sign in" [ref=e24]
                - row "User Name admin Password admin Color Theme softed Language US English Login [Alt+L]" [ref=e25]:
                  - cell "User Name admin Password admin Color Theme softed Language US English Login [Alt+L]" [ref=e26]:
                    - table [ref=e27]:
                      - rowgroup [ref=e28]:
                        - row "User Name admin" [ref=e29]:
                          - cell "User Name" [ref=e30]
                          - cell "admin" [ref=e31]:
                            - textbox [ref=e32]: admin
                        - row "Password admin" [ref=e33]:
                          - cell "Password" [ref=e34]
                          - cell "admin" [ref=e35]:
                            - textbox [active] [ref=e36]: admin
                        - row "Color Theme softed" [ref=e37]:
                          - cell "Color Theme" [ref=e38]
                          - cell "softed" [ref=e39]:
                            - combobox [ref=e40]:
                              - option "alphagrey"
                              - option "bluelagoon"
                              - option "softed" [selected]
                              - option "woodspice"
                        - row "Language US English" [ref=e41]:
                          - cell "Language" [ref=e42]
                          - cell "US English" [ref=e43]:
                            - combobox [ref=e44]:
                              - option "US English" [selected]
                              - option "DE Deutsch"
                              - option "NL-Dutch"
                              - option "Francais"
                              - option "HU Magyar"
                              - option "ES Spanish"
                        - row "Login [Alt+L]" [ref=e45]:
                          - cell [ref=e46]
                          - cell "Login [Alt+L]" [ref=e47]:
                            - button "Login [Alt+L]" [ref=e48] [cursor=pointer]: Login
  - table [ref=e49]:
    - rowgroup [ref=e50]:
      - row "vtiger CRM 5.2.1 © 2004-2026 vtiger.com | Read License | Privacy Policy |" [ref=e51]:
        - cell "vtiger CRM 5.2.1" [ref=e52]
        - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy |" [ref=e53]:
          - generic [ref=e54]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=e55] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=e56] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=e57] [cursor=pointer]:
              - /url: http://www.vtiger.com/products/crm/privacy_policy.html
          - img "|" [ref=e58]
```

# Test source

```ts
  1  | //keyboard & Mouse   keyboard.press() method.
  2  | //Locator API  → interact with specific DOM elements
  3  | //Keyboard     → keyboard events
  4  | //Mouse        → coordinate-based mouse events//await page.mouse.click(300, 200);
  5  | 
  6  | 
  7  | 
  8  | 
  9  | import {test,expect} from "@playwright/test"
  10 | 
  11 | test('Handle Keyboard and Mouse',async({browser})=>{
  12 | 
  13 |     const context=await browser.newContext({
  14 |      
  15 |              viewport:{width:1980,height:1020}
  16 | 
  17 |     })
  18 | 
  19 |     const page= await context.newPage();
  20 |     await page.goto("http://localhost:8888/");
  21 |     await page.locator("//input[@name='user_name']").fill("admin");
  22 |     const pwd=page.locator("//input[@name='user_password']");
  23 |     await pwd.click();
  24 |     await page.keyboard.type('admin');
  25 |     await page.waitForTimeout(3000);
  26 | 
  27 | 
  28 | })
  29 | 
  30 | test('Handle Keyboard and Mouse1',async({browser})=>{
  31 | 
  32 |     const context=await browser.newContext({
  33 |      
  34 |              viewport:{width:1980,height:1020}
  35 | 
  36 |     })
  37 | 
  38 |     const page= await context.newPage();
  39 |     await page.goto("http://localhost:8888/");
  40 |     await page.locator("//input[@name='user_name']").fill("admin");
  41 |     const pwd=page.locator("//input[@name='user_password']");
  42 |     await pwd.click();
  43 |     await page.keyboard.type('admin');
  44 |     await page.keyboard.press('Enter');
  45 |     await page.waitForTimeout(3000);
  46 | 
  47 | 
  48 | })
  49 | 
  50 | 
  51 | test('Handle Keyboard and Mouse2',async({browser})=>{
  52 | 
  53 |     const context=await browser.newContext({
  54 |      
  55 |              viewport:{width:1980,height:1020}
  56 | 
  57 |     })
  58 | 
  59 |     const page= await context.newPage();
  60 |     await page.goto("http://localhost:8888/");
  61 |     await page.locator("//input[@name='user_name']").fill("admin");
  62 |     const pwd=page.locator("//input[@name='user_password']");
  63 |     await pwd.click();
  64 |     await page.keyboard.type('admin');
  65 |     const signIN=page.locator("//input[@name='Login']");
> 66 |     await page.mouse().click();
     |                ^ TypeError: page.mouse is not a function
  67 |     await page.waitForTimeout(3000);
  68 | 
  69 | 
  70 | })
  71 | 
  72 | 
  73 | 
  74 | 
  75 | 
  76 | 
```