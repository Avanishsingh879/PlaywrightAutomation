# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTestScript2.spec.js >> Verify Leads
- Location: tests\LoginTestScript2.spec.js:29:5

# Error details

```
TypeError: acc.click is not a function
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
      - row "Trouble Tickets" [ref=e104]:
        - cell "Trouble Tickets" [ref=e105]:
          - link "Trouble Tickets" [ref=e106] [cursor=pointer]:
            - /url: index.php?module=HelpDesk&action=index&parenttab=Support
      - row "FAQ" [ref=e107]:
        - cell "FAQ" [ref=e108]:
          - link "FAQ" [ref=e109] [cursor=pointer]:
            - /url: index.php?module=Faq&action=index&parenttab=Support
      - row "Accounts" [ref=e110]:
        - cell "Accounts" [ref=e111]:
          - link "Accounts" [ref=e112] [cursor=pointer]:
            - /url: index.php?module=Accounts&action=index&parenttab=Support
      - row "Contacts" [ref=e113]:
        - cell "Contacts" [ref=e114]:
          - link "Contacts" [ref=e115] [cursor=pointer]:
            - /url: index.php?module=Contacts&action=index&parenttab=Support
      - row "Documents" [ref=e116]:
        - cell "Documents" [ref=e117]:
          - link "Documents" [ref=e118] [cursor=pointer]:
            - /url: index.php?module=Documents&action=index&parenttab=Support
      - row "Webmail" [ref=e119]:
        - cell "Webmail" [ref=e120]:
          - link "Webmail" [ref=e121] [cursor=pointer]:
            - /url: index.php?module=Webmails&action=index&parenttab=Support
      - row "Calendar" [ref=e122]:
        - cell "Calendar" [ref=e123]:
          - link "Calendar" [ref=e124] [cursor=pointer]:
            - /url: index.php?module=Calendar&action=index&parenttab=Support
      - row "Service Contracts" [ref=e125]:
        - cell "Service Contracts" [ref=e126]:
          - link "Service Contracts" [ref=e127] [cursor=pointer]:
            - /url: index.php?module=ServiceContracts&action=index&parenttab=Support
      - row "Project Milestones" [ref=e128]:
        - cell "Project Milestones" [ref=e129]:
          - link "Project Milestones" [ref=e130] [cursor=pointer]:
            - /url: index.php?module=ProjectMilestone&action=index&parenttab=Support
      - row "Project Tasks" [ref=e131]:
        - cell "Project Tasks" [ref=e132]:
          - link "Project Tasks" [ref=e133] [cursor=pointer]:
            - /url: index.php?module=ProjectTask&action=index&parenttab=Support
      - row "Projects" [ref=e134]:
        - cell "Projects" [ref=e135]:
          - link "Projects" [ref=e136] [cursor=pointer]:
            - /url: index.php?module=Project&action=index&parenttab=Support
  - table [ref=e137]:
    - rowgroup [ref=e138]:
      - row "My Home Page > Home Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Open All Menu... Change layout" [ref=e139] [cursor=pointer]:
        - cell "My Home Page > Home" [ref=e140]:
          - text: My Home Page >
          - link "Home" [ref=e141]:
            - /url: index.php?action=index&module=Home
        - cell [ref=e142]
        - cell [ref=e143]:
          - img [ref=e144]
        - cell "Open Calendar..." [ref=e145]:
          - img "Open Calendar..." [ref=e146]
        - cell "Show World Clock..." [ref=e147]:
          - img "Show World Clock..." [ref=e148]
        - cell "Open Calculator..." [ref=e149]:
          - img "Open Calculator..." [ref=e150]
        - cell "Chat..." [ref=e151]:
          - img "Chat..." [ref=e152]
        - cell "Last Viewed" [ref=e153]:
          - img "Last Viewed" [ref=e154]
        - cell "Open All Menu..." [ref=e155]:
          - img "Open All Menu..." [ref=e156]
        - cell "Change layout" [ref=e157]:
          - img "Change layout" [ref=e158]
        - cell [ref=e159]
  - table [ref=e160]:
    - rowgroup [ref=e161]:
      - row "Tag Cloud Edit Refresh Hide Close Scroll Top Accounts Edit Refresh Hide Close Scroll More Top Potentials Edit Refresh Hide Close Scroll More Top Quotes Edit Refresh Hide Close Scroll More Key Metrics Edit Refresh Hide Close Scroll Top Trouble Tickets Edit Refresh Hide Close Scroll More Upcoming Activities Edit Refresh Hide Close Scroll More Top Sales Orders Edit Refresh Hide Close Scroll More Top Invoices Edit Refresh Hide Close Scroll More My New Leads Edit Refresh Hide Close Scroll More Top Purchase Orders Edit Refresh Hide Close Scroll More Pending Activities Edit Refresh Hide Close Scroll More My Recent FAQs Edit Refresh Hide Close Scroll More" [ref=e162]:
        - cell "Tag Cloud Edit Refresh Hide Close Scroll Top Accounts Edit Refresh Hide Close Scroll More Top Potentials Edit Refresh Hide Close Scroll More Top Quotes Edit Refresh Hide Close Scroll More Key Metrics Edit Refresh Hide Close Scroll Top Trouble Tickets Edit Refresh Hide Close Scroll More Upcoming Activities Edit Refresh Hide Close Scroll More Top Sales Orders Edit Refresh Hide Close Scroll More Top Invoices Edit Refresh Hide Close Scroll More My New Leads Edit Refresh Hide Close Scroll More Top Purchase Orders Edit Refresh Hide Close Scroll More Pending Activities Edit Refresh Hide Close Scroll More My Recent FAQs Edit Refresh Hide Close Scroll More" [ref=e163]:
          - generic [ref=e164]:
            - generic [ref=e165]:
              - table [ref=e166]:
                - rowgroup [ref=e167]:
                  - row "Tag Cloud Edit Refresh Hide Close" [ref=e168]:
                    - cell "Tag Cloud" [ref=e169]
                    - cell [ref=e170]:
                      - img [ref=e172]
                    - cell "Edit Refresh Hide Close" [ref=e173]:
                      - img "Edit" [ref=e174]
                      - img "Refresh" [ref=e176] [cursor=pointer]
                      - img "Hide" [ref=e178] [cursor=pointer]
                      - img "Close" [ref=e179]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e180]:
                - rowgroup [ref=e181]:
                  - row "Scroll" [ref=e182]:
                    - cell "Scroll" [ref=e183]:
                      - link "Scroll" [ref=e184] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e185]:
              - table [ref=e186]:
                - rowgroup [ref=e187]:
                  - row "Top Accounts Edit Refresh Hide Close" [ref=e188]:
                    - cell "Top Accounts" [ref=e189]
                    - cell [ref=e190]:
                      - img [ref=e192]
                    - cell "Edit Refresh Hide Close" [ref=e193]:
                      - img "Edit" [ref=e195] [cursor=pointer]
                      - img "Refresh" [ref=e197] [cursor=pointer]
                      - img "Hide" [ref=e199] [cursor=pointer]
                      - img "Close" [ref=e200]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e201]:
                - rowgroup [ref=e202]:
                  - row "Scroll More" [ref=e203]:
                    - cell "Scroll" [ref=e204]:
                      - link "Scroll" [ref=e205] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e206]:
                      - link "More" [ref=e207] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e208]:
              - table [ref=e209]:
                - rowgroup [ref=e210]:
                  - row "Top Potentials Edit Refresh Hide Close" [ref=e211]:
                    - cell "Top Potentials" [ref=e212]
                    - cell [ref=e213]:
                      - img [ref=e215]
                    - cell "Edit Refresh Hide Close" [ref=e216]:
                      - img "Edit" [ref=e218] [cursor=pointer]
                      - img "Refresh" [ref=e220] [cursor=pointer]
                      - img "Hide" [ref=e222] [cursor=pointer]
                      - img "Close" [ref=e223]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e224]:
                - rowgroup [ref=e225]:
                  - row "Scroll More" [ref=e226]:
                    - cell "Scroll" [ref=e227]:
                      - link "Scroll" [ref=e228] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e229]:
                      - link "More" [ref=e230] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e231]:
              - table [ref=e232]:
                - rowgroup [ref=e233]:
                  - row "Top Quotes Edit Refresh Hide Close" [ref=e234]:
                    - cell "Top Quotes" [ref=e235]
                    - cell [ref=e236]:
                      - img [ref=e238]
                    - cell "Edit Refresh Hide Close" [ref=e239]:
                      - img "Edit" [ref=e241] [cursor=pointer]
                      - img "Refresh" [ref=e243] [cursor=pointer]
                      - img "Hide" [ref=e245] [cursor=pointer]
                      - img "Close" [ref=e246]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e247]:
                - rowgroup [ref=e248]:
                  - row "Scroll More" [ref=e249]:
                    - cell "Scroll" [ref=e250]:
                      - link "Scroll" [ref=e251] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e252]:
                      - link "More" [ref=e253] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e254]:
              - table [ref=e255]:
                - rowgroup [ref=e256]:
                  - row "Key Metrics Edit Refresh Hide Close" [ref=e257]:
                    - cell "Key Metrics" [ref=e258]
                    - cell [ref=e259]:
                      - img [ref=e261]
                    - cell "Edit Refresh Hide Close" [ref=e262]:
                      - img "Edit" [ref=e263]
                      - img "Refresh" [ref=e265] [cursor=pointer]
                      - img "Hide" [ref=e267] [cursor=pointer]
                      - img "Close" [ref=e268]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e269]:
                - rowgroup [ref=e270]:
                  - row "Scroll" [ref=e271]:
                    - cell "Scroll" [ref=e272]:
                      - link "Scroll" [ref=e273] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e274]:
              - table [ref=e275]:
                - rowgroup [ref=e276]:
                  - row "Top Trouble Tickets Edit Refresh Hide Close" [ref=e277]:
                    - cell "Top Trouble Tickets" [ref=e278]
                    - cell [ref=e279]:
                      - img [ref=e281]
                    - cell "Edit Refresh Hide Close" [ref=e282]:
                      - img "Edit" [ref=e284] [cursor=pointer]
                      - img "Refresh" [ref=e286] [cursor=pointer]
                      - img "Hide" [ref=e288] [cursor=pointer]
                      - img "Close" [ref=e289]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e290]:
                - rowgroup [ref=e291]:
                  - row "Scroll More" [ref=e292]:
                    - cell "Scroll" [ref=e293]:
                      - link "Scroll" [ref=e294] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e295]:
                      - link "More" [ref=e296] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e297]:
              - table [ref=e298]:
                - rowgroup [ref=e299]:
                  - row "Upcoming Activities Edit Refresh Hide Close" [ref=e300]:
                    - cell "Upcoming Activities" [ref=e301]
                    - cell [ref=e302]:
                      - img [ref=e304]
                    - cell "Edit Refresh Hide Close" [ref=e305]:
                      - img "Edit" [ref=e307] [cursor=pointer]
                      - img "Refresh" [ref=e309] [cursor=pointer]
                      - img "Hide" [ref=e311] [cursor=pointer]
                      - img "Close" [ref=e312]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e313]:
                - rowgroup [ref=e314]:
                  - row "Scroll More" [ref=e315]:
                    - cell "Scroll" [ref=e316]:
                      - link "Scroll" [ref=e317] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e318]:
                      - link "More" [ref=e319] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e320]:
              - table [ref=e321]:
                - rowgroup [ref=e322]:
                  - row "Top Sales Orders Edit Refresh Hide Close" [ref=e323]:
                    - cell "Top Sales Orders" [ref=e324]
                    - cell [ref=e325]:
                      - img [ref=e327]
                    - cell "Edit Refresh Hide Close" [ref=e328]:
                      - img "Edit" [ref=e330] [cursor=pointer]
                      - img "Refresh" [ref=e332] [cursor=pointer]
                      - img "Hide" [ref=e334] [cursor=pointer]
                      - img "Close" [ref=e335]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e336]:
                - rowgroup [ref=e337]:
                  - row "Scroll More" [ref=e338]:
                    - cell "Scroll" [ref=e339]:
                      - link "Scroll" [ref=e340] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e341]:
                      - link "More" [ref=e342] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e343]:
              - table [ref=e344]:
                - rowgroup [ref=e345]:
                  - row "Top Invoices Edit Refresh Hide Close" [ref=e346]:
                    - cell "Top Invoices" [ref=e347]
                    - cell [ref=e348]:
                      - img [ref=e350]
                    - cell "Edit Refresh Hide Close" [ref=e351]:
                      - img "Edit" [ref=e353] [cursor=pointer]
                      - img "Refresh" [ref=e355] [cursor=pointer]
                      - img "Hide" [ref=e357] [cursor=pointer]
                      - img "Close" [ref=e358]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e359]:
                - rowgroup [ref=e360]:
                  - row "Scroll More" [ref=e361]:
                    - cell "Scroll" [ref=e362]:
                      - link "Scroll" [ref=e363] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e364]:
                      - link "More" [ref=e365] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e366]:
              - table [ref=e367]:
                - rowgroup [ref=e368]:
                  - row "My New Leads Edit Refresh Hide Close" [ref=e369]:
                    - cell "My New Leads" [ref=e370]
                    - cell [ref=e371]:
                      - img [ref=e373]
                    - cell "Edit Refresh Hide Close" [ref=e374]:
                      - img "Edit" [ref=e376] [cursor=pointer]
                      - img "Refresh" [ref=e378] [cursor=pointer]
                      - img "Hide" [ref=e380] [cursor=pointer]
                      - img "Close" [ref=e381]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e382]:
                - rowgroup [ref=e383]:
                  - row "Scroll More" [ref=e384]:
                    - cell "Scroll" [ref=e385]:
                      - link "Scroll" [ref=e386] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e387]:
                      - link "More" [ref=e388] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e389]:
              - table [ref=e390]:
                - rowgroup [ref=e391]:
                  - row "Top Purchase Orders Edit Refresh Hide Close" [ref=e392]:
                    - cell "Top Purchase Orders" [ref=e393]
                    - cell [ref=e394]:
                      - img [ref=e396]
                    - cell "Edit Refresh Hide Close" [ref=e397]:
                      - img "Edit" [ref=e399] [cursor=pointer]
                      - img "Refresh" [ref=e401] [cursor=pointer]
                      - img "Hide" [ref=e403] [cursor=pointer]
                      - img "Close" [ref=e404]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e405]:
                - rowgroup [ref=e406]:
                  - row "Scroll More" [ref=e407]:
                    - cell "Scroll" [ref=e408]:
                      - link "Scroll" [ref=e409] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e410]:
                      - link "More" [ref=e411] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e412]:
              - table [ref=e413]:
                - rowgroup [ref=e414]:
                  - row "Pending Activities Edit Refresh Hide Close" [ref=e415]:
                    - cell "Pending Activities" [ref=e416]
                    - cell [ref=e417]:
                      - img [ref=e419]
                    - cell "Edit Refresh Hide Close" [ref=e420]:
                      - img "Edit" [ref=e422] [cursor=pointer]
                      - img "Refresh" [ref=e424] [cursor=pointer]
                      - img "Hide" [ref=e426] [cursor=pointer]
                      - img "Close" [ref=e427]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e428]:
                - rowgroup [ref=e429]:
                  - row "Scroll More" [ref=e430]:
                    - cell "Scroll" [ref=e431]:
                      - link "Scroll" [ref=e432] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e433]:
                      - link "More" [ref=e434] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e435]:
              - table [ref=e436]:
                - rowgroup [ref=e437]:
                  - row "My Recent FAQs Edit Refresh Hide Close" [ref=e438]:
                    - cell "My Recent FAQs" [ref=e439]
                    - cell [ref=e440]:
                      - img [ref=e442]
                    - cell "Edit Refresh Hide Close" [ref=e443]:
                      - img "Edit" [ref=e445] [cursor=pointer]
                      - img "Refresh" [ref=e447] [cursor=pointer]
                      - img "Hide" [ref=e449] [cursor=pointer]
                      - img "Close" [ref=e450]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e451]:
                - rowgroup [ref=e452]:
                  - row "Scroll More" [ref=e453]:
                    - cell "Scroll" [ref=e454]:
                      - link "Scroll" [ref=e455] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e456]:
                      - link "More" [ref=e457] [cursor=pointer]:
                        - /url: "#"
  - table [ref=e458]:
    - rowgroup [ref=e459]:
      - row "vtiger CRM 5.2.1 © 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e460]:
        - cell "vtiger CRM 5.2.1" [ref=e461]
        - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e462]:
          - generic [ref=e463]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=e464] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=e465] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=e466] [cursor=pointer]:
              - /url: http://www.vtiger.com/products/crm/privacy_policy.html
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | test('verify sales Page',async({browser})=>{
  4  | 
  5  |       const context= await browser.newContext({
  6  | 
  7  |          viewport:{width:1980,height:1020}
  8  | 
  9  | 
  10 |        })
  11 | 
  12 |        
  13 |   const page=await context.newPage();
  14 |         await page.goto("http://localhost:8888/");
  15 |         await page.locator("//input[@name='user_name']").fill('admin');
  16 |         await page.locator("//input[@name='user_password']").fill('admin');
  17 |         await page.locator("//input[@name='Login']").click();
  18 | 
  19 |         ///////////////////////////////////////////////////////////////
  20 | 
  21 |         await page.waitForTimeout(1000);
  22 | 
  23 |         await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  24 |         console.log("Title Veriyed");
  25 | 
  26 | })
  27 | 
  28 | 
  29 | test('Verify Leads',async({page})=>{
  30 |    
  31 |     await page.goto("http://localhost:8888/");
  32 |     await page.locator("//input[@name='user_name']").fill('admin');
  33 |     await page.locator("//input[@name='user_password']").fill('admin');
  34 |     await page.locator("//input[@name='Login']").click();
  35 | 
  36 |     /////////////Hover//////////////////////////////////
  37 | 
  38 |     const sales=await page.locator("//a[text()='Support']");
  39 |     sales.hover();
  40 |     console.log("Handled Hover");
  41 |     await page.screenshot({ path:'./Screenshots/Hover.png'});
  42 |     console.log("Take Screenshot");
  43 |     const acc=await page.locator("//div[@id='Support_sub']//a[text()='Accounts']").textContent();
  44 |     console.log(acc)
> 45 |     acc.click();
     |         ^ TypeError: acc.click is not a function
  46 | 
  47 |     ///////////////////////////////////////////////////
  48 |     const list=await page.locator("//input[@id='selected_id']");
  49 |     for(let i=0; i< await list.count;i++){
  50 | 
  51 |       await list.nth(i).click();
  52 |       await page.waitForTimeout(1000);
  53 |     }
  54 |     console.log("Check box checked");
  55 | 
  56 | 
  57 | 
  58 | 
  59 | 
  60 | })
```