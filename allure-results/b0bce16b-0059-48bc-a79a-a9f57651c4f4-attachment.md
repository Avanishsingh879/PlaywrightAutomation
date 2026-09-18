# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Verify_Listbox.spec.js >> Verify Listbox
- Location: tests\Verify_Listbox.spec.js:3:5

# Error details

```
Error: Screenshot name "admin---My-Home-Page---Home---vtiger-CRM-5---Commercial-Open-Source-CRM-chromium-win32" must have '.png' extension
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - table [ref=e2]:
    - rowgroup [ref=e3]:
      - row "vtiger CRM Gmail Bookmarklet vtiger News Feedback My Preferences Help About Us Sign Out (admin)" [ref=e4]:
        - cell "vtiger CRM" [ref=e5]:
          - img "vtiger CRM" [ref=e6]
        - cell [ref=e7]
        - cell "Gmail Bookmarklet vtiger News Feedback My Preferences Help About Us Sign Out (admin)" [ref=e9]:
          - table [ref=e10]:
            - rowgroup [ref=e11]:
              - row "Gmail Bookmarklet vtiger News Feedback My Preferences Help About Us Sign Out (admin)" [ref=e12]:
                - cell "Gmail Bookmarklet" [ref=e13]:
                  - link "Gmail Bookmarklet" [ref=e14] [cursor=pointer]:
                    - /url: javascript:(function()%7Bvar%20doc=top.document;var%20bodyElement=document.body;doc.vtigerURL%20=%22http://localhost:8888/%22;var%20scriptElement=document.createElement(%22script%22);scriptElement.type=%22text/javascript%22;scriptElement.src=doc.vtigerURL+%22modules/Emails/GmailBookmarkletTrigger.js%22;bodyElement.appendChild(scriptElement);%7D)();
                - cell "vtiger News" [ref=e15]:
                  - link "vtiger News" [ref=e16] [cursor=pointer]:
                    - /url: javascript:void(0);
                - cell "Feedback" [ref=e17]:
                  - link "Feedback" [ref=e18] [cursor=pointer]:
                    - /url: javascript:void(0);
                - cell "My Preferences" [ref=e19]:
                  - link "My Preferences" [ref=e20] [cursor=pointer]:
                    - /url: index.php?module=Users&action=DetailView&record=1&modechk=prefview
                - cell "Help" [ref=e21]:
                  - link "Help" [ref=e22] [cursor=pointer]:
                    - /url: http://wiki.vtiger.com/index.php/Main_Page
                - cell "About Us" [ref=e23]:
                  - link "About Us" [ref=e24] [cursor=pointer]:
                    - /url: javascript:;
                - cell "Sign Out (admin)" [ref=e25]:
                  - link "Sign Out" [ref=e26] [cursor=pointer]:
                    - /url: index.php?module=Users&action=Logout
                  - text: (admin)
  - table [ref=e27]:
    - rowgroup [ref=e28]:
      - row "My Home Page Marketing Sales Support Analytics Inventory Tools Settings Quick Create... Search... Find" [ref=e29]:
        - cell [ref=e30]
        - cell "My Home Page Marketing Sales Support Analytics Inventory Tools Settings Quick Create..." [ref=e31]:
          - table [ref=e32]:
            - rowgroup [ref=e33]:
              - row "My Home Page Marketing Sales Support Analytics Inventory Tools Settings Quick Create..." [ref=e34]:
                - cell [ref=e35]:
                  - img [ref=e36]
                - cell "My Home Page" [ref=e37]:
                  - link "My Home Page" [ref=e38] [cursor=pointer]:
                    - /url: index.php?module=Home&action=index&parenttab=My Home Page
                  - img [ref=e39]
                - cell [ref=e40]:
                  - img [ref=e41]
                - cell "Marketing" [ref=e42]:
                  - link "Marketing" [ref=e43] [cursor=pointer]:
                    - /url: index.php?module=Campaigns&action=index&parenttab=Marketing
                  - img [ref=e44]
                - cell [ref=e45]:
                  - img [ref=e46]
                - cell "Sales" [ref=e47]:
                  - link "Sales" [ref=e48] [cursor=pointer]:
                    - /url: index.php?module=Leads&action=index&parenttab=Sales
                  - img [ref=e49]
                - cell [ref=e50]:
                  - img [ref=e51]
                - cell "Support" [ref=e52]:
                  - link "Support" [ref=e53] [cursor=pointer]:
                    - /url: index.php?module=HelpDesk&action=index&parenttab=Support
                  - img [ref=e54]
                - cell [ref=e55]:
                  - img [ref=e56]
                - cell "Analytics" [ref=e57]:
                  - link "Analytics" [ref=e58] [cursor=pointer]:
                    - /url: index.php?module=Reports&action=index&parenttab=Analytics
                  - img [ref=e59]
                - cell [ref=e60]:
                  - img [ref=e61]
                - cell "Inventory" [ref=e62]:
                  - link "Inventory" [ref=e63] [cursor=pointer]:
                    - /url: index.php?module=Products&action=index&parenttab=Inventory
                  - img [ref=e64]
                - cell [ref=e65]:
                  - img [ref=e66]
                - cell "Tools" [ref=e67]:
                  - link "Tools" [ref=e68] [cursor=pointer]:
                    - /url: index.php?module=Rss&action=index&parenttab=Tools
                  - img [ref=e69]
                - cell [ref=e70]:
                  - img [ref=e71]
                - cell "Settings" [ref=e72]:
                  - link "Settings" [ref=e73] [cursor=pointer]:
                    - /url: index.php?module=Settings&action=index&parenttab=Settings
                  - img [ref=e74]
                - cell [ref=e75]:
                  - img [ref=e76]
                - cell "Quick Create..." [ref=e77]:
                  - combobox [ref=e78]:
                    - option "Quick Create..." [selected]
                    - option "New Account"
                    - option "New Asset"
                    - option "New To Do"
                    - option "New Campaign"
                    - option "New Comment"
                    - option "New Contact"
                    - option "New Document"
                    - option "New Event"
                    - option "New Ticket"
                    - option "New Lead"
                    - option "New Potential"
                    - option "New PriceBook"
                    - option "New Product"
                    - option "New Project"
                    - option "New Project Milestone"
                    - option "New Project Task"
                    - option "New Service Contract"
                    - option "New Service"
                    - option "New Vendor"
        - cell "Search... Find" [ref=e79]:
          - table [ref=e80]:
            - rowgroup [ref=e81]:
              - row "Search... Find" [ref=e82]:
                - cell "Search..." [ref=e83]:
                  - link:
                    - /url: javascript:void(0);
                    - img [ref=e84] [cursor=pointer]
                  - textbox [ref=e85]: Search...
                - cell "Find" [ref=e86]:
                  - button "Find" [ref=e87]
  - table [ref=e88]:
    - rowgroup [ref=e89]:
      - row "Home Calendar Webmail" [ref=e90]:
        - cell "Home Calendar Webmail" [ref=e91]:
          - table [ref=e92]:
            - rowgroup [ref=e93]:
              - row "Home Calendar Webmail" [ref=e94]:
                - cell "Home" [ref=e95]:
                  - link "Home" [ref=e96] [cursor=pointer]:
                    - /url: index.php?module=Home&action=index&parenttab=My Home Page
                - cell "Calendar" [ref=e97]:
                  - link "Calendar" [ref=e98] [cursor=pointer]:
                    - /url: index.php?module=Calendar&action=index&parenttab=My Home Page
                - cell "Webmail" [ref=e99]:
                  - link "Webmail" [ref=e100] [cursor=pointer]:
                    - /url: index.php?module=Webmails&action=index&parenttab=My Home Page
  - table [ref=e101]:
    - rowgroup [ref=e102]:
      - row "My Home Page > Home Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Open All Menu... Change layout" [ref=e103] [cursor=pointer]:
        - cell "My Home Page > Home" [ref=e104]:
          - text: My Home Page >
          - link "Home" [ref=e105]:
            - /url: index.php?action=index&module=Home
        - cell [ref=e106]
        - cell [ref=e107]:
          - img [ref=e108]
        - cell "Open Calendar..." [ref=e109]:
          - img "Open Calendar..." [ref=e110]
        - cell "Show World Clock..." [ref=e111]:
          - img "Show World Clock..." [ref=e112]
        - cell "Open Calculator..." [ref=e113]:
          - img "Open Calculator..." [ref=e114]
        - cell "Chat..." [ref=e115]:
          - img "Chat..." [ref=e116]
        - cell "Last Viewed" [ref=e117]:
          - img "Last Viewed" [ref=e118]
        - cell "Open All Menu..." [ref=e119]:
          - img "Open All Menu..." [ref=e120]
        - cell "Change layout" [ref=e121]:
          - img "Change layout" [ref=e122]
        - cell [ref=e123]
  - table [ref=e124]:
    - rowgroup [ref=e125]:
      - row "Tag Cloud Edit Refresh Hide Close Scroll Top Accounts Edit Refresh Hide Close Scroll More Top Potentials Edit Refresh Hide Close Scroll More Top Quotes Edit Refresh Hide Close Scroll More Key Metrics Edit Refresh Hide Close Scroll Top Trouble Tickets Edit Refresh Hide Close Scroll More Upcoming Activities Edit Refresh Hide Close Scroll More Top Sales Orders Edit Refresh Hide Close Scroll More Top Invoices Edit Refresh Hide Close Scroll More My New Leads Edit Refresh Hide Close Scroll More Top Purchase Orders Edit Refresh Hide Close Scroll More Pending Activities Edit Refresh Hide Close Scroll More My Recent FAQs Edit Refresh Hide Close Scroll More" [ref=e126]:
        - cell "Tag Cloud Edit Refresh Hide Close Scroll Top Accounts Edit Refresh Hide Close Scroll More Top Potentials Edit Refresh Hide Close Scroll More Top Quotes Edit Refresh Hide Close Scroll More Key Metrics Edit Refresh Hide Close Scroll Top Trouble Tickets Edit Refresh Hide Close Scroll More Upcoming Activities Edit Refresh Hide Close Scroll More Top Sales Orders Edit Refresh Hide Close Scroll More Top Invoices Edit Refresh Hide Close Scroll More My New Leads Edit Refresh Hide Close Scroll More Top Purchase Orders Edit Refresh Hide Close Scroll More Pending Activities Edit Refresh Hide Close Scroll More My Recent FAQs Edit Refresh Hide Close Scroll More" [ref=e127]:
          - generic [ref=e128]:
            - generic [ref=e129]:
              - table [ref=e130]:
                - rowgroup [ref=e131]:
                  - row "Tag Cloud Edit Refresh Hide Close" [ref=e132]:
                    - cell "Tag Cloud" [ref=e133]
                    - cell [ref=e134]:
                      - img [ref=e136]
                    - cell "Edit Refresh Hide Close" [ref=e137]:
                      - img "Edit" [ref=e138]
                      - img "Refresh" [ref=e140] [cursor=pointer]
                      - img "Hide" [ref=e142] [cursor=pointer]
                      - img "Close" [ref=e143]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e144]:
                - rowgroup [ref=e145]:
                  - row "Scroll" [ref=e146]:
                    - cell "Scroll" [ref=e147]:
                      - link "Scroll" [ref=e148] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e149]:
              - table [ref=e150]:
                - rowgroup [ref=e151]:
                  - row "Top Accounts Edit Refresh Hide Close" [ref=e152]:
                    - cell "Top Accounts" [ref=e153]
                    - cell [ref=e154]:
                      - img [ref=e156]
                    - cell "Edit Refresh Hide Close" [ref=e157]:
                      - img "Edit" [ref=e159] [cursor=pointer]
                      - img "Refresh" [ref=e161] [cursor=pointer]
                      - img "Hide" [ref=e163] [cursor=pointer]
                      - img "Close" [ref=e164]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e165]:
                - rowgroup [ref=e166]:
                  - row "Scroll More" [ref=e167]:
                    - cell "Scroll" [ref=e168]:
                      - link "Scroll" [ref=e169] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e170]:
                      - link "More" [ref=e171] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e172]:
              - table [ref=e173]:
                - rowgroup [ref=e174]:
                  - row "Top Potentials Edit Refresh Hide Close" [ref=e175]:
                    - cell "Top Potentials" [ref=e176]
                    - cell [ref=e177]:
                      - img [ref=e179]
                    - cell "Edit Refresh Hide Close" [ref=e180]:
                      - img "Edit" [ref=e182] [cursor=pointer]
                      - img "Refresh" [ref=e184] [cursor=pointer]
                      - img "Hide" [ref=e186] [cursor=pointer]
                      - img "Close" [ref=e187]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e188]:
                - rowgroup [ref=e189]:
                  - row "Scroll More" [ref=e190]:
                    - cell "Scroll" [ref=e191]:
                      - link "Scroll" [ref=e192] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e193]:
                      - link "More" [ref=e194] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e195]:
              - table [ref=e196]:
                - rowgroup [ref=e197]:
                  - row "Top Quotes Edit Refresh Hide Close" [ref=e198]:
                    - cell "Top Quotes" [ref=e199]
                    - cell [ref=e200]:
                      - img [ref=e202]
                    - cell "Edit Refresh Hide Close" [ref=e203]:
                      - img "Edit" [ref=e205] [cursor=pointer]
                      - img "Refresh" [ref=e207] [cursor=pointer]
                      - img "Hide" [ref=e209] [cursor=pointer]
                      - img "Close" [ref=e210]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e211]:
                - rowgroup [ref=e212]:
                  - row "Scroll More" [ref=e213]:
                    - cell "Scroll" [ref=e214]:
                      - link "Scroll" [ref=e215] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e216]:
                      - link "More" [ref=e217] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e218]:
              - table [ref=e219]:
                - rowgroup [ref=e220]:
                  - row "Key Metrics Edit Refresh Hide Close" [ref=e221]:
                    - cell "Key Metrics" [ref=e222]
                    - cell [ref=e223]:
                      - img [ref=e225]
                    - cell "Edit Refresh Hide Close" [ref=e226]:
                      - img "Edit" [ref=e227]
                      - img "Refresh" [ref=e229] [cursor=pointer]
                      - img "Hide" [ref=e231] [cursor=pointer]
                      - img "Close" [ref=e232]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e233]:
                - rowgroup [ref=e234]:
                  - row "Scroll" [ref=e235]:
                    - cell "Scroll" [ref=e236]:
                      - link "Scroll" [ref=e237] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e238]:
              - table [ref=e239]:
                - rowgroup [ref=e240]:
                  - row "Top Trouble Tickets Edit Refresh Hide Close" [ref=e241]:
                    - cell "Top Trouble Tickets" [ref=e242]
                    - cell [ref=e243]:
                      - img [ref=e245]
                    - cell "Edit Refresh Hide Close" [ref=e246]:
                      - img "Edit" [ref=e248] [cursor=pointer]
                      - img "Refresh" [ref=e250] [cursor=pointer]
                      - img "Hide" [ref=e252] [cursor=pointer]
                      - img "Close" [ref=e253]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e254]:
                - rowgroup [ref=e255]:
                  - row "Scroll More" [ref=e256]:
                    - cell "Scroll" [ref=e257]:
                      - link "Scroll" [ref=e258] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e259]:
                      - link "More" [ref=e260] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e261]:
              - table [ref=e262]:
                - rowgroup [ref=e263]:
                  - row "Upcoming Activities Edit Refresh Hide Close" [ref=e264]:
                    - cell "Upcoming Activities" [ref=e265]
                    - cell [ref=e266]:
                      - img [ref=e268]
                    - cell "Edit Refresh Hide Close" [ref=e269]:
                      - img "Edit" [ref=e271] [cursor=pointer]
                      - img "Refresh" [ref=e273] [cursor=pointer]
                      - img "Hide" [ref=e275] [cursor=pointer]
                      - img "Close" [ref=e276]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e277]:
                - rowgroup [ref=e278]:
                  - row "Scroll More" [ref=e279]:
                    - cell "Scroll" [ref=e280]:
                      - link "Scroll" [ref=e281] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e282]:
                      - link "More" [ref=e283] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e284]:
              - table [ref=e285]:
                - rowgroup [ref=e286]:
                  - row "Top Sales Orders Edit Refresh Hide Close" [ref=e287]:
                    - cell "Top Sales Orders" [ref=e288]
                    - cell [ref=e289]:
                      - img [ref=e291]
                    - cell "Edit Refresh Hide Close" [ref=e292]:
                      - img "Edit" [ref=e294] [cursor=pointer]
                      - img "Refresh" [ref=e296] [cursor=pointer]
                      - img "Hide" [ref=e298] [cursor=pointer]
                      - img "Close" [ref=e299]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e300]:
                - rowgroup [ref=e301]:
                  - row "Scroll More" [ref=e302]:
                    - cell "Scroll" [ref=e303]:
                      - link "Scroll" [ref=e304] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e305]:
                      - link "More" [ref=e306] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e307]:
              - table [ref=e308]:
                - rowgroup [ref=e309]:
                  - row "Top Invoices Edit Refresh Hide Close" [ref=e310]:
                    - cell "Top Invoices" [ref=e311]
                    - cell [ref=e312]:
                      - img [ref=e314]
                    - cell "Edit Refresh Hide Close" [ref=e315]:
                      - img "Edit" [ref=e317] [cursor=pointer]
                      - img "Refresh" [ref=e319] [cursor=pointer]
                      - img "Hide" [ref=e321] [cursor=pointer]
                      - img "Close" [ref=e322]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e323]:
                - rowgroup [ref=e324]:
                  - row "Scroll More" [ref=e325]:
                    - cell "Scroll" [ref=e326]:
                      - link "Scroll" [ref=e327] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e328]:
                      - link "More" [ref=e329] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e330]:
              - table [ref=e331]:
                - rowgroup [ref=e332]:
                  - row "My New Leads Edit Refresh Hide Close" [ref=e333]:
                    - cell "My New Leads" [ref=e334]
                    - cell [ref=e335]:
                      - img [ref=e337]
                    - cell "Edit Refresh Hide Close" [ref=e338]:
                      - img "Edit" [ref=e340] [cursor=pointer]
                      - img "Refresh" [ref=e342] [cursor=pointer]
                      - img "Hide" [ref=e344] [cursor=pointer]
                      - img "Close" [ref=e345]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e346]:
                - rowgroup [ref=e347]:
                  - row "Scroll More" [ref=e348]:
                    - cell "Scroll" [ref=e349]:
                      - link "Scroll" [ref=e350] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e351]:
                      - link "More" [ref=e352] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e353]:
              - table [ref=e354]:
                - rowgroup [ref=e355]:
                  - row "Top Purchase Orders Edit Refresh Hide Close" [ref=e356]:
                    - cell "Top Purchase Orders" [ref=e357]
                    - cell [ref=e358]:
                      - img [ref=e360]
                    - cell "Edit Refresh Hide Close" [ref=e361]:
                      - img "Edit" [ref=e363] [cursor=pointer]
                      - img "Refresh" [ref=e365] [cursor=pointer]
                      - img "Hide" [ref=e367] [cursor=pointer]
                      - img "Close" [ref=e368]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e369]:
                - rowgroup [ref=e370]:
                  - row "Scroll More" [ref=e371]:
                    - cell "Scroll" [ref=e372]:
                      - link "Scroll" [ref=e373] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e374]:
                      - link "More" [ref=e375] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e376]:
              - table [ref=e377]:
                - rowgroup [ref=e378]:
                  - row "Pending Activities Edit Refresh Hide Close" [ref=e379]:
                    - cell "Pending Activities" [ref=e380]
                    - cell [ref=e381]:
                      - img [ref=e383]
                    - cell "Edit Refresh Hide Close" [ref=e384]:
                      - img "Edit" [ref=e386] [cursor=pointer]
                      - img "Refresh" [ref=e388] [cursor=pointer]
                      - img "Hide" [ref=e390] [cursor=pointer]
                      - img "Close" [ref=e391]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e392]:
                - rowgroup [ref=e393]:
                  - row "Scroll More" [ref=e394]:
                    - cell "Scroll" [ref=e395]:
                      - link "Scroll" [ref=e396] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e397]:
                      - link "More" [ref=e398] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e399]:
              - table [ref=e400]:
                - rowgroup [ref=e401]:
                  - row "My Recent FAQs Edit Refresh Hide Close" [ref=e402]:
                    - cell "My Recent FAQs" [ref=e403]
                    - cell [ref=e404]:
                      - img [ref=e406]
                    - cell "Edit Refresh Hide Close" [ref=e407]:
                      - img "Edit" [ref=e409] [cursor=pointer]
                      - img "Refresh" [ref=e411] [cursor=pointer]
                      - img "Hide" [ref=e413] [cursor=pointer]
                      - img "Close" [ref=e414]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e415]:
                - rowgroup [ref=e416]:
                  - row "Scroll More" [ref=e417]:
                    - cell "Scroll" [ref=e418]:
                      - link "Scroll" [ref=e419] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e420]:
                      - link "More" [ref=e421] [cursor=pointer]:
                        - /url: "#"
  - table [ref=e422]:
    - rowgroup [ref=e423]:
      - row "vtiger CRM 5.2.1 © 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e424]:
        - cell "vtiger CRM 5.2.1" [ref=e425]
        - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e426]:
          - generic [ref=e427]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=e428] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=e429] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=e430] [cursor=pointer]:
              - /url: http://www.vtiger.com/products/crm/privacy_policy.html
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | test('Verify Listbox',async({browser})=>{
  4  | 
  5  |       const context= await browser.newContext({
  6  |  
  7  |         viewport:{width:1980,height:1020}
  8  | 
  9  | 
  10 |        })
  11 | 
  12 |        const page=await context.newPage();
  13 |        await page.goto("http://localhost:8888/");
  14 |        await page.locator("//input[@name='user_name']").fill("admin");
  15 |        await page.locator("//input[@name='user_password']").fill("admin");
  16 |        await page.locator("//input[@name='Login']").click();
  17 | 
  18 |        console.log("Login Sucessfully");
> 19 |        await expect(page).toHaveScreenshot("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
     |                           ^ Error: Screenshot name "admin---My-Home-Page---Home---vtiger-CRM-5---Commercial-Open-Source-CRM-chromium-win32" must have '.png' extension
  20 | 
  21 | 
  22 | })
  23 | 
  24 | test('verify Hover',async({page})=>{
  25 |       
  26 |     
  27 |       await page.goto("http://localhost:8888/");
  28 |       await page.locator("//input[@name='user_name']").fill("admin");
  29 |       await page.locator("//input[@name='user_password']").fill("admin");
  30 |       await page.locator("//input[@name='Login']").click();
  31 |       await page.waitForTimeout(1000);
  32 |       const hover=page.locator("//a[@name='Marketing']").hover();
  33 | 
  34 |       const Marketing_btn=page.locator("//div[@id='Marketing_sub']//a[text()='Accounts']");
  35 |       await Marketing_btn.click();
  36 |       await page.waitForTimeout(1000);
  37 | 
  38 |       const allCheck=await page.locator("//input[@name='selected_id']");
  39 | 
  40 |       for(let i=0;i< await allCheck.count();i++){
  41 | 
  42 |         await allCheck.nth(i).click();
  43 |         await page.waitForTimeout(1000);
  44 | 
  45 |       }
  46 | 
  47 | })
```