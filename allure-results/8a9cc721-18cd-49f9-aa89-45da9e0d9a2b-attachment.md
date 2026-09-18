# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Verify_Listbox.spec.js >> Verify Listbox
- Location: tests\Verify_Listbox.spec.js:3:5

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

Timeout: 5000ms
  Failed to take two consecutive stable screenshots.

Call log:
  - Expect "toHaveScreenshot" with timeout 5000ms
    - generating new stable screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 361 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 364 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 500ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - Timeout 5000ms exceeded.

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
  - table [ref=e102]:
    - rowgroup [ref=e103]:
      - row "My Home Page > Home Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Open All Menu... Change layout" [ref=e104] [cursor=pointer]:
        - cell "My Home Page > Home" [ref=e105]:
          - text: My Home Page >
          - link "Home" [ref=e106]:
            - /url: index.php?action=index&module=Home
        - cell [ref=e107]
        - cell [ref=e108]:
          - img [ref=e109]
        - cell "Open Calendar..." [ref=e110]:
          - img "Open Calendar..." [ref=e111]
        - cell "Show World Clock..." [ref=e112]:
          - img "Show World Clock..." [ref=e113]
        - cell "Open Calculator..." [ref=e114]:
          - img "Open Calculator..." [ref=e115]
        - cell "Chat..." [ref=e116]:
          - img "Chat..." [ref=e117]
        - cell "Last Viewed" [ref=e118]:
          - img "Last Viewed" [ref=e119]
        - cell "Open All Menu..." [ref=e120]:
          - img "Open All Menu..." [ref=e121]
        - cell "Change layout" [ref=e122]:
          - img "Change layout" [ref=e123]
        - cell [ref=e124]
  - table [ref=e125]:
    - rowgroup [ref=e126]:
      - row "Tag Cloud Edit Refresh Hide Close Scroll Top Accounts Edit Refresh Hide Close Scroll More Top Potentials Edit Refresh Hide Close Scroll More Top Quotes Edit Refresh Hide Close Scroll More Key Metrics Edit Refresh Hide Close Scroll Top Trouble Tickets Edit Refresh Hide Close Scroll More Upcoming Activities Edit Refresh Hide Close Scroll More Top Sales Orders Edit Refresh Hide Close Scroll More Top Invoices Edit Refresh Hide Close Scroll More My New Leads Edit Refresh Hide Close Scroll More Top Purchase Orders Edit Refresh Hide Close Scroll More Pending Activities Edit Refresh Hide Close Scroll More My Recent FAQs Edit Refresh Hide Close Scroll More" [ref=e127]:
        - cell "Tag Cloud Edit Refresh Hide Close Scroll Top Accounts Edit Refresh Hide Close Scroll More Top Potentials Edit Refresh Hide Close Scroll More Top Quotes Edit Refresh Hide Close Scroll More Key Metrics Edit Refresh Hide Close Scroll Top Trouble Tickets Edit Refresh Hide Close Scroll More Upcoming Activities Edit Refresh Hide Close Scroll More Top Sales Orders Edit Refresh Hide Close Scroll More Top Invoices Edit Refresh Hide Close Scroll More My New Leads Edit Refresh Hide Close Scroll More Top Purchase Orders Edit Refresh Hide Close Scroll More Pending Activities Edit Refresh Hide Close Scroll More My Recent FAQs Edit Refresh Hide Close Scroll More" [ref=e128]:
          - generic [ref=e129]:
            - generic [ref=e130]:
              - table [ref=e131]:
                - rowgroup [ref=e132]:
                  - row "Tag Cloud Edit Refresh Hide Close" [ref=e133]:
                    - cell "Tag Cloud" [ref=e134]
                    - cell [ref=e135]
                    - cell "Edit Refresh Hide Close" [ref=e136]:
                      - img "Edit" [ref=e137]
                      - img "Refresh" [ref=e139] [cursor=pointer]
                      - img "Hide" [ref=e141] [cursor=pointer]
                      - img "Close" [ref=e142]
              - table [ref=e143]:
                - rowgroup [ref=e144]:
                  - row [ref=e145]:
                    - cell [ref=e146]:
                      - img [ref=e149]
              - table [ref=e150]:
                - rowgroup [ref=e151]:
                  - row "Scroll" [ref=e152]:
                    - cell "Scroll" [ref=e153]:
                      - link "Scroll" [ref=e154] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e155]:
              - table [ref=e156]:
                - rowgroup [ref=e157]:
                  - row "Top Accounts Edit Refresh Hide Close" [ref=e158]:
                    - cell "Top Accounts" [ref=e159]
                    - cell [ref=e160]:
                      - img [ref=e162]
                    - cell "Edit Refresh Hide Close" [ref=e163]:
                      - img "Edit" [ref=e165] [cursor=pointer]
                      - img "Refresh" [ref=e167] [cursor=pointer]
                      - img "Hide" [ref=e169] [cursor=pointer]
                      - img "Close" [ref=e170]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e171]:
                - rowgroup [ref=e172]:
                  - row "Scroll More" [ref=e173]:
                    - cell "Scroll" [ref=e174]:
                      - link "Scroll" [ref=e175] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e176]:
                      - link "More" [ref=e177] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e178]:
              - table [ref=e179]:
                - rowgroup [ref=e180]:
                  - row "Top Potentials Edit Refresh Hide Close" [ref=e181]:
                    - cell "Top Potentials" [ref=e182]
                    - cell [ref=e183]:
                      - img [ref=e185]
                    - cell "Edit Refresh Hide Close" [ref=e186]:
                      - img "Edit" [ref=e188] [cursor=pointer]
                      - img "Refresh" [ref=e190] [cursor=pointer]
                      - img "Hide" [ref=e192] [cursor=pointer]
                      - img "Close" [ref=e193]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e194]:
                - rowgroup [ref=e195]:
                  - row "Scroll More" [ref=e196]:
                    - cell "Scroll" [ref=e197]:
                      - link "Scroll" [ref=e198] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e199]:
                      - link "More" [ref=e200] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e201]:
              - table [ref=e202]:
                - rowgroup [ref=e203]:
                  - row "Top Quotes Edit Refresh Hide Close" [ref=e204]:
                    - cell "Top Quotes" [ref=e205]
                    - cell [ref=e206]:
                      - img [ref=e208]
                    - cell "Edit Refresh Hide Close" [ref=e209]:
                      - img "Edit" [ref=e211] [cursor=pointer]
                      - img "Refresh" [ref=e213] [cursor=pointer]
                      - img "Hide" [ref=e215] [cursor=pointer]
                      - img "Close" [ref=e216]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e217]:
                - rowgroup [ref=e218]:
                  - row "Scroll More" [ref=e219]:
                    - cell "Scroll" [ref=e220]:
                      - link "Scroll" [ref=e221] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e222]:
                      - link "More" [ref=e223] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e224]:
              - table [ref=e225]:
                - rowgroup [ref=e226]:
                  - row "Key Metrics Edit Refresh Hide Close" [ref=e227]:
                    - cell "Key Metrics" [ref=e228]
                    - cell [ref=e229]:
                      - img [ref=e231]
                    - cell "Edit Refresh Hide Close" [ref=e232]:
                      - img "Edit" [ref=e233]
                      - img "Refresh" [ref=e235] [cursor=pointer]
                      - img "Hide" [ref=e237] [cursor=pointer]
                      - img "Close" [ref=e238]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e239]:
                - rowgroup [ref=e240]:
                  - row "Scroll" [ref=e241]:
                    - cell "Scroll" [ref=e242]:
                      - link "Scroll" [ref=e243] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e244]:
              - table [ref=e245]:
                - rowgroup [ref=e246]:
                  - row "Top Trouble Tickets Edit Refresh Hide Close" [ref=e247]:
                    - cell "Top Trouble Tickets" [ref=e248]
                    - cell [ref=e249]:
                      - img [ref=e251]
                    - cell "Edit Refresh Hide Close" [ref=e252]:
                      - img "Edit" [ref=e254] [cursor=pointer]
                      - img "Refresh" [ref=e256] [cursor=pointer]
                      - img "Hide" [ref=e258] [cursor=pointer]
                      - img "Close" [ref=e259]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e260]:
                - rowgroup [ref=e261]:
                  - row "Scroll More" [ref=e262]:
                    - cell "Scroll" [ref=e263]:
                      - link "Scroll" [ref=e264] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e265]:
                      - link "More" [ref=e266] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e267]:
              - table [ref=e268]:
                - rowgroup [ref=e269]:
                  - row "Upcoming Activities Edit Refresh Hide Close" [ref=e270]:
                    - cell "Upcoming Activities" [ref=e271]
                    - cell [ref=e272]:
                      - img [ref=e274]
                    - cell "Edit Refresh Hide Close" [ref=e275]:
                      - img "Edit" [ref=e277] [cursor=pointer]
                      - img "Refresh" [ref=e279] [cursor=pointer]
                      - img "Hide" [ref=e281] [cursor=pointer]
                      - img "Close" [ref=e282]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e283]:
                - rowgroup [ref=e284]:
                  - row "Scroll More" [ref=e285]:
                    - cell "Scroll" [ref=e286]:
                      - link "Scroll" [ref=e287] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e288]:
                      - link "More" [ref=e289] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e290]:
              - table [ref=e291]:
                - rowgroup [ref=e292]:
                  - row "Top Sales Orders Edit Refresh Hide Close" [ref=e293]:
                    - cell "Top Sales Orders" [ref=e294]
                    - cell [ref=e295]:
                      - img [ref=e297]
                    - cell "Edit Refresh Hide Close" [ref=e298]:
                      - img "Edit" [ref=e300] [cursor=pointer]
                      - img "Refresh" [ref=e302] [cursor=pointer]
                      - img "Hide" [ref=e304] [cursor=pointer]
                      - img "Close" [ref=e305]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e306]:
                - rowgroup [ref=e307]:
                  - row "Scroll More" [ref=e308]:
                    - cell "Scroll" [ref=e309]:
                      - link "Scroll" [ref=e310] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e311]:
                      - link "More" [ref=e312] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e313]:
              - table [ref=e314]:
                - rowgroup [ref=e315]:
                  - row "Top Invoices Edit Refresh Hide Close" [ref=e316]:
                    - cell "Top Invoices" [ref=e317]
                    - cell [ref=e318]:
                      - img [ref=e320]
                    - cell "Edit Refresh Hide Close" [ref=e321]:
                      - img "Edit" [ref=e323] [cursor=pointer]
                      - img "Refresh" [ref=e325] [cursor=pointer]
                      - img "Hide" [ref=e327] [cursor=pointer]
                      - img "Close" [ref=e328]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e329]:
                - rowgroup [ref=e330]:
                  - row "Scroll More" [ref=e331]:
                    - cell "Scroll" [ref=e332]:
                      - link "Scroll" [ref=e333] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e334]:
                      - link "More" [ref=e335] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e336]:
              - table [ref=e337]:
                - rowgroup [ref=e338]:
                  - row "My New Leads Edit Refresh Hide Close" [ref=e339]:
                    - cell "My New Leads" [ref=e340]
                    - cell [ref=e341]:
                      - img [ref=e343]
                    - cell "Edit Refresh Hide Close" [ref=e344]:
                      - img "Edit" [ref=e346] [cursor=pointer]
                      - img "Refresh" [ref=e348] [cursor=pointer]
                      - img "Hide" [ref=e350] [cursor=pointer]
                      - img "Close" [ref=e351]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e352]:
                - rowgroup [ref=e353]:
                  - row "Scroll More" [ref=e354]:
                    - cell "Scroll" [ref=e355]:
                      - link "Scroll" [ref=e356] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e357]:
                      - link "More" [ref=e358] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e359]:
              - table [ref=e360]:
                - rowgroup [ref=e361]:
                  - row "Top Purchase Orders Edit Refresh Hide Close" [ref=e362]:
                    - cell "Top Purchase Orders" [ref=e363]
                    - cell [ref=e364]:
                      - img [ref=e366]
                    - cell "Edit Refresh Hide Close" [ref=e367]:
                      - img "Edit" [ref=e369] [cursor=pointer]
                      - img "Refresh" [ref=e371] [cursor=pointer]
                      - img "Hide" [ref=e373] [cursor=pointer]
                      - img "Close" [ref=e374]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e375]:
                - rowgroup [ref=e376]:
                  - row "Scroll More" [ref=e377]:
                    - cell "Scroll" [ref=e378]:
                      - link "Scroll" [ref=e379] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e380]:
                      - link "More" [ref=e381] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e382]:
              - table [ref=e383]:
                - rowgroup [ref=e384]:
                  - row "Pending Activities Edit Refresh Hide Close" [ref=e385]:
                    - cell "Pending Activities" [ref=e386]
                    - cell [ref=e387]:
                      - img [ref=e389]
                    - cell "Edit Refresh Hide Close" [ref=e390]:
                      - img "Edit" [ref=e392] [cursor=pointer]
                      - img "Refresh" [ref=e394] [cursor=pointer]
                      - img "Hide" [ref=e396] [cursor=pointer]
                      - img "Close" [ref=e397]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e398]:
                - rowgroup [ref=e399]:
                  - row "Scroll More" [ref=e400]:
                    - cell "Scroll" [ref=e401]:
                      - link "Scroll" [ref=e402] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e403]:
                      - link "More" [ref=e404] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e405]:
              - table [ref=e406]:
                - rowgroup [ref=e407]:
                  - row "My Recent FAQs Edit Refresh Hide Close" [ref=e408]:
                    - cell "My Recent FAQs" [ref=e409]
                    - cell [ref=e410]:
                      - img [ref=e412]
                    - cell "Edit Refresh Hide Close" [ref=e413]:
                      - img "Edit" [ref=e415] [cursor=pointer]
                      - img "Refresh" [ref=e417] [cursor=pointer]
                      - img "Hide" [ref=e419] [cursor=pointer]
                      - img "Close" [ref=e420]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e421]:
                - rowgroup [ref=e422]:
                  - row "Scroll More" [ref=e423]:
                    - cell "Scroll" [ref=e424]:
                      - link "Scroll" [ref=e425] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e426]:
                      - link "More" [ref=e427] [cursor=pointer]:
                        - /url: "#"
  - table [ref=e428]:
    - rowgroup [ref=e429]:
      - row "vtiger CRM 5.2.1 © 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e430]:
        - cell "vtiger CRM 5.2.1" [ref=e431]
        - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e432]:
          - generic [ref=e433]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=e434] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=e435] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=e436] [cursor=pointer]:
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
> 19 |        await expect(page).toHaveScreenshot("");
     |                           ^ Error: expect(page).toHaveScreenshot(expected) failed
  20 | 
  21 | 
  22 | })
  23 | 
  24 | test('verify Hover',async({page})=>{
  25 | 
  26 |       await page.goto("http://localhost:8888/");
  27 |       await page.locator("//input[@name='user_name']").fill("admin");
  28 |       await page.locator("//input[@name='user_password']").fill("admin");
  29 |       await page.locator("//input[@name='Login']").click();
  30 | 
  31 |       const hover=page.locator("//a[@name='Marketing']").hover();
  32 | 
  33 |       const Marketing_btn=page.locator("//div[@id='Marketing_sub']//a[text()='Accounts']");
  34 |       await Marketing_btn.click();
  35 |       await page.waitForTimeout(1000);
  36 | 
  37 |       const allCheck=await page.locator("//input[@name='selected_id']");
  38 | 
  39 |       for(let i=0;i< await allCheck.count();i++){
  40 | 
  41 |         await allCheck.nth(i).click();
  42 |         await page.waitForTimeout(1000);
  43 | 
  44 |       }
  45 | 
  46 | })
```