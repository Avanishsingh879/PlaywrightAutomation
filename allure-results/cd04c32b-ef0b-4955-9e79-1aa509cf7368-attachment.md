# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CirfTest.spec.js >> Verify AllLinks
- Location: tests\CirfTest.spec.js:91:9

# Error details

```
Error: page.waitForTimeout: Test ended.
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
      - row [ref=e127]:
        - cell [ref=e128]:
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
                    - cell [ref=e160]
                    - cell "Edit Refresh Hide Close" [ref=e161]:
                      - img "Edit" [ref=e163] [cursor=pointer]
                      - img "Refresh" [ref=e165] [cursor=pointer]
                      - img "Hide" [ref=e167] [cursor=pointer]
                      - img "Close" [ref=e168]
              - table [ref=e169]:
                - rowgroup [ref=e170]:
                  - row "No Data Found" [ref=e171]:
                    - cell "No Data Found" [ref=e172]:
                      - generic [ref=e173]:
                        - generic [ref=e174]: No Data Found
                        - table [ref=e175]:
                          - rowgroup [ref=e176]:
                            - row [ref=e177]:
                              - cell [ref=e178]
              - table [ref=e179]:
                - rowgroup [ref=e180]:
                  - row "Scroll" [ref=e181]:
                    - cell "Scroll" [ref=e182]:
                      - link "Scroll" [ref=e183] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e184]:
              - table [ref=e185]:
                - rowgroup [ref=e186]:
                  - row "Top Potentials Edit Refresh Hide Close" [ref=e187]:
                    - cell "Top Potentials" [ref=e188]
                    - cell [ref=e189]
                    - cell "Edit Refresh Hide Close" [ref=e190]:
                      - img "Edit" [ref=e192] [cursor=pointer]
                      - img "Refresh" [ref=e194] [cursor=pointer]
                      - img "Hide" [ref=e196] [cursor=pointer]
                      - img "Close" [ref=e197]
              - table [ref=e198]:
                - rowgroup [ref=e199]:
                  - row "No Data Found" [ref=e200]:
                    - cell "No Data Found" [ref=e201]:
                      - generic [ref=e202]:
                        - generic [ref=e203]: No Data Found
                        - table [ref=e204]:
                          - rowgroup [ref=e205]:
                            - row [ref=e206]:
                              - cell [ref=e207]
              - table [ref=e208]:
                - rowgroup [ref=e209]:
                  - row "Scroll" [ref=e210]:
                    - cell "Scroll" [ref=e211]:
                      - link "Scroll" [ref=e212] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e213]:
              - table [ref=e214]:
                - rowgroup [ref=e215]:
                  - row "Top Quotes Edit Refresh Hide Close" [ref=e216]:
                    - cell "Top Quotes" [ref=e217]
                    - cell [ref=e218]
                    - cell "Edit Refresh Hide Close" [ref=e219]:
                      - img "Edit" [ref=e221] [cursor=pointer]
                      - img "Refresh" [ref=e223] [cursor=pointer]
                      - img "Hide" [ref=e225] [cursor=pointer]
                      - img "Close" [ref=e226]
              - table [ref=e227]:
                - rowgroup [ref=e228]:
                  - row "No Data Found" [ref=e229]:
                    - cell "No Data Found" [ref=e230]:
                      - generic [ref=e231]:
                        - generic [ref=e232]: No Data Found
                        - table [ref=e233]:
                          - rowgroup [ref=e234]:
                            - row [ref=e235]:
                              - cell [ref=e236]
              - table [ref=e237]:
                - rowgroup [ref=e238]:
                  - row "Scroll" [ref=e239]:
                    - cell "Scroll" [ref=e240]:
                      - link "Scroll" [ref=e241] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e242]:
              - table [ref=e243]:
                - rowgroup [ref=e244]:
                  - row "Key Metrics Edit Refresh Hide Close" [ref=e245]:
                    - cell "Key Metrics" [ref=e246]
                    - cell [ref=e247]
                    - cell "Edit Refresh Hide Close" [ref=e248]:
                      - img "Edit" [ref=e249]
                      - img "Refresh" [ref=e251] [cursor=pointer]
                      - img "Hide" [ref=e253] [cursor=pointer]
                      - img "Close" [ref=e254]
              - table [ref=e255]:
                - rowgroup [ref=e256]:
                  - row "Metrics Module Count More Information Prospect Accounts (admin) Accounts 0 More Information Open Tickets (admin) Trouble Tickets 2 More Information Hot Leads (admin) Leads 0 More Information Potentials Won (admin) Potentials 0 More Information Open Quotes (admin) Quotes 0" [ref=e257]:
                    - cell "Metrics Module Count More Information Prospect Accounts (admin) Accounts 0 More Information Open Tickets (admin) Trouble Tickets 2 More Information Hot Leads (admin) Leads 0 More Information Potentials Won (admin) Potentials 0 More Information Open Quotes (admin) Quotes 0" [ref=e258]:
                      - table [ref=e260]:
                        - rowgroup [ref=e261]:
                          - row "Metrics Module Count" [ref=e262]:
                            - cell [ref=e263]
                            - cell "Metrics" [ref=e264]
                            - cell "Module" [ref=e265]
                            - cell "Count" [ref=e266]
                          - row "More Information Prospect Accounts (admin) Accounts 0" [ref=e267]:
                            - cell "More Information" [ref=e268]:
                              - img "More Information" [ref=e269]
                            - cell "Prospect Accounts (admin)" [ref=e270]:
                              - link "Prospect Accounts" [ref=e271] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Accounts&viewname=5
                              - text: (admin)
                            - cell "Accounts" [ref=e272]:
                              - link "Accounts" [ref=e273] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Accounts&viewname=5
                            - cell "0" [ref=e274]:
                              - link "0" [ref=e275] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Accounts&viewname=5
                          - row "More Information Open Tickets (admin) Trouble Tickets 2" [ref=e276]:
                            - cell "More Information" [ref=e277]:
                              - img "More Information" [ref=e278]
                            - cell "Open Tickets (admin)" [ref=e279]:
                              - link "Open Tickets" [ref=e280] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=HelpDesk&viewname=14
                              - text: (admin)
                            - cell "Trouble Tickets" [ref=e281]:
                              - link "Trouble Tickets" [ref=e282] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=HelpDesk&viewname=14
                            - cell "2" [ref=e283]:
                              - link "2" [ref=e284] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=HelpDesk&viewname=14
                          - row "More Information Hot Leads (admin) Leads 0" [ref=e285]:
                            - cell "More Information" [ref=e286]:
                              - img "More Information" [ref=e287]
                            - cell "Hot Leads (admin)" [ref=e288]:
                              - link "Hot Leads" [ref=e289] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Leads&viewname=2
                              - text: (admin)
                            - cell "Leads" [ref=e290]:
                              - link "Leads" [ref=e291] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Leads&viewname=2
                            - cell "0" [ref=e292]:
                              - link "0" [ref=e293] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Leads&viewname=2
                          - row "More Information Potentials Won (admin) Potentials 0" [ref=e294]:
                            - cell "More Information" [ref=e295]:
                              - img "More Information" [ref=e296]
                            - cell "Potentials Won (admin)" [ref=e297]:
                              - link "Potentials Won" [ref=e298] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Potentials&viewname=11
                              - text: (admin)
                            - cell "Potentials" [ref=e299]:
                              - link "Potentials" [ref=e300] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Potentials&viewname=11
                            - cell "0" [ref=e301]:
                              - link "0" [ref=e302] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Potentials&viewname=11
                          - row "More Information Open Quotes (admin) Quotes 0" [ref=e303]:
                            - cell "More Information" [ref=e304]:
                              - img "More Information" [ref=e305]
                            - cell "Open Quotes (admin)" [ref=e306]:
                              - link "Open Quotes" [ref=e307] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Quotes&viewname=17
                              - text: (admin)
                            - cell "Quotes" [ref=e308]:
                              - link "Quotes" [ref=e309] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Quotes&viewname=17
                            - cell "0" [ref=e310]:
                              - link "0" [ref=e311] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Quotes&viewname=17
              - table [ref=e312]:
                - rowgroup [ref=e313]:
                  - row "Scroll" [ref=e314]:
                    - cell "Scroll" [ref=e315]:
                      - link "Scroll" [ref=e316] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e317]:
              - table [ref=e318]:
                - rowgroup [ref=e319]:
                  - row "Top Trouble Tickets Edit Refresh Hide Close" [ref=e320]:
                    - cell "Top Trouble Tickets" [ref=e321]
                    - cell [ref=e322]
                    - cell "Edit Refresh Hide Close" [ref=e323]:
                      - img "Edit" [ref=e325] [cursor=pointer]
                      - img "Refresh" [ref=e327] [cursor=pointer]
                      - img "Hide" [ref=e329] [cursor=pointer]
                      - img "Close" [ref=e330]
              - table [ref=e331]:
                - rowgroup [ref=e332]:
                  - 'row "Subject : Related To More Information test More Information Test" [ref=e333]':
                    - 'cell "Subject : Related To More Information test More Information Test" [ref=e334]':
                      - table [ref=e336]:
                        - rowgroup [ref=e337]:
                          - 'row "Subject : Related To" [ref=e338]':
                            - cell [ref=e339]
                            - cell "Subject :" [ref=e340]
                            - cell "Related To" [ref=e341]
                          - row "More Information test" [ref=e342]:
                            - cell "More Information" [ref=e343]:
                              - img "More Information" [ref=e344]
                            - cell "test" [ref=e345]:
                              - link "test" [ref=e346] [cursor=pointer]:
                                - /url: index.php?action=DetailView&module=HelpDesk&record=34
                            - cell [ref=e347]
                          - row "More Information Test" [ref=e348]:
                            - cell "More Information" [ref=e349]:
                              - img "More Information" [ref=e350]
                            - cell "Test" [ref=e351]:
                              - link "Test" [ref=e352] [cursor=pointer]:
                                - /url: index.php?action=DetailView&module=HelpDesk&record=24
                            - cell [ref=e353]
              - table [ref=e354]:
                - rowgroup [ref=e355]:
                  - row "Scroll More" [ref=e356]:
                    - cell "Scroll" [ref=e357]:
                      - link "Scroll" [ref=e358] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e359]:
                      - link "More" [ref=e360] [cursor=pointer]:
                        - /url: index.php?module=HelpDesk&action=index&query=true&Fields0=ticketstatus&Condition0=n&Srch_value0=closed&Fields1=assigned_user_id&Condition1=e&Srch_value1=admin&searchtype=advance&search_cnt=2&matchtype=all
            - generic [ref=e361]:
              - table [ref=e362]:
                - rowgroup [ref=e363]:
                  - row "Upcoming Activities Edit Refresh Hide Close" [ref=e364]:
                    - cell "Upcoming Activities" [ref=e365]
                    - cell [ref=e366]
                    - cell "Edit Refresh Hide Close" [ref=e367]:
                      - img "Edit" [ref=e369] [cursor=pointer]
                      - img "Refresh" [ref=e371] [cursor=pointer]
                      - img "Hide" [ref=e373] [cursor=pointer]
                      - img "Close" [ref=e374]
              - table [ref=e375]:
                - rowgroup [ref=e376]:
                  - row "More Information No Data Found" [ref=e377]:
                    - cell "More Information No Data Found" [ref=e378]:
                      - table [ref=e380]:
                        - rowgroup [ref=e381]:
                          - row [ref=e382]:
                            - cell [ref=e383]
                          - row "More Information No Data Found" [ref=e384]:
                            - cell "More Information" [ref=e385]:
                              - img "More Information" [ref=e386]
                            - cell "No Data Found" [ref=e387]:
                              - generic [ref=e388]: No Data Found
              - table [ref=e389]:
                - rowgroup [ref=e390]:
                  - row "Scroll More" [ref=e391]:
                    - cell "Scroll" [ref=e392]:
                      - link "Scroll" [ref=e393] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e394]:
                      - link "More" [ref=e395] [cursor=pointer]:
                        - /url: index.php?module=Calendar&action=index&action=ListView&from_homepage=upcoming_activities
            - generic [ref=e396]:
              - table [ref=e397]:
                - rowgroup [ref=e398]:
                  - row "Top Sales Orders Edit Refresh Hide Close" [ref=e399]:
                    - cell "Top Sales Orders" [ref=e400]
                    - cell [ref=e401]
                    - cell "Edit Refresh Hide Close" [ref=e402]:
                      - img "Edit" [ref=e404] [cursor=pointer]
                      - img "Refresh" [ref=e406] [cursor=pointer]
                      - img "Hide" [ref=e408] [cursor=pointer]
                      - img "Close" [ref=e409]
              - table [ref=e410]:
                - rowgroup [ref=e411]:
                  - row "No Data Found" [ref=e412]:
                    - cell "No Data Found" [ref=e413]:
                      - generic [ref=e414]:
                        - generic [ref=e415]: No Data Found
                        - table [ref=e416]:
                          - rowgroup [ref=e417]:
                            - row [ref=e418]:
                              - cell [ref=e419]
              - table [ref=e420]:
                - rowgroup [ref=e421]:
                  - row "Scroll" [ref=e422]:
                    - cell "Scroll" [ref=e423]:
                      - link "Scroll" [ref=e424] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e425]:
              - table [ref=e426]:
                - rowgroup [ref=e427]:
                  - row "Top Invoices Edit Refresh Hide Close" [ref=e428]:
                    - cell "Top Invoices" [ref=e429]
                    - cell [ref=e430]
                    - cell "Edit Refresh Hide Close" [ref=e431]:
                      - img "Edit" [ref=e433] [cursor=pointer]
                      - img "Refresh" [ref=e435] [cursor=pointer]
                      - img "Hide" [ref=e437] [cursor=pointer]
                      - img "Close" [ref=e438]
              - table [ref=e439]:
                - rowgroup [ref=e440]:
                  - row "No Data Found" [ref=e441]:
                    - cell "No Data Found" [ref=e442]:
                      - generic [ref=e443]:
                        - generic [ref=e444]: No Data Found
                        - table [ref=e445]:
                          - rowgroup [ref=e446]:
                            - row [ref=e447]:
                              - cell [ref=e448]
              - table [ref=e449]:
                - rowgroup [ref=e450]:
                  - row "Scroll" [ref=e451]:
                    - cell "Scroll" [ref=e452]:
                      - link "Scroll" [ref=e453] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e454]:
              - table [ref=e455]:
                - rowgroup [ref=e456]:
                  - row "My New Leads Edit Refresh Hide Close" [ref=e457]:
                    - cell "My New Leads" [ref=e458]
                    - cell [ref=e459]
                    - cell "Edit Refresh Hide Close" [ref=e460]:
                      - img "Edit" [ref=e462] [cursor=pointer]
                      - img "Refresh" [ref=e464] [cursor=pointer]
                      - img "Hide" [ref=e466] [cursor=pointer]
                      - img "Close" [ref=e467]
              - table [ref=e468]:
                - rowgroup [ref=e469]:
                  - row "No Data Found" [ref=e470]:
                    - cell "No Data Found" [ref=e471]:
                      - generic [ref=e472]:
                        - generic [ref=e473]: No Data Found
                        - table [ref=e474]:
                          - rowgroup [ref=e475]:
                            - row [ref=e476]:
                              - cell [ref=e477]
              - table [ref=e478]:
                - rowgroup [ref=e479]:
                  - row "Scroll" [ref=e480]:
                    - cell "Scroll" [ref=e481]:
                      - link "Scroll" [ref=e482] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e483]:
              - table [ref=e484]:
                - rowgroup [ref=e485]:
                  - row "Top Purchase Orders Edit Refresh Hide Close" [ref=e486]:
                    - cell "Top Purchase Orders" [ref=e487]
                    - cell [ref=e488]
                    - cell "Edit Refresh Hide Close" [ref=e489]:
                      - img "Edit" [ref=e491] [cursor=pointer]
                      - img "Refresh" [ref=e493] [cursor=pointer]
                      - img "Hide" [ref=e495] [cursor=pointer]
                      - img "Close" [ref=e496]
              - table [ref=e497]:
                - rowgroup [ref=e498]:
                  - row "No Data Found" [ref=e499]:
                    - cell "No Data Found" [ref=e500]:
                      - generic [ref=e501]:
                        - generic [ref=e502]: No Data Found
                        - table [ref=e503]:
                          - rowgroup [ref=e504]:
                            - row [ref=e505]:
                              - cell [ref=e506]
              - table [ref=e507]:
                - rowgroup [ref=e508]:
                  - row "Scroll" [ref=e509]:
                    - cell "Scroll" [ref=e510]:
                      - link "Scroll" [ref=e511] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e512]:
              - table [ref=e513]:
                - rowgroup [ref=e514]:
                  - row "Pending Activities Edit Refresh Hide Close" [ref=e515]:
                    - cell "Pending Activities" [ref=e516]
                    - cell [ref=e517]
                    - cell "Edit Refresh Hide Close" [ref=e518]:
                      - img "Edit" [ref=e520] [cursor=pointer]
                      - img "Refresh" [ref=e522] [cursor=pointer]
                      - img "Hide" [ref=e524] [cursor=pointer]
                      - img "Close" [ref=e525]
              - table [ref=e526]:
                - rowgroup [ref=e527]:
                  - row "More Information No Data Found" [ref=e528]:
                    - cell "More Information No Data Found" [ref=e529]:
                      - table [ref=e531]:
                        - rowgroup [ref=e532]:
                          - row [ref=e533]:
                            - cell [ref=e534]
                          - row "More Information No Data Found" [ref=e535]:
                            - cell "More Information" [ref=e536]:
                              - img "More Information" [ref=e537]
                            - cell "No Data Found" [ref=e538]:
                              - generic [ref=e539]: No Data Found
              - table [ref=e540]:
                - rowgroup [ref=e541]:
                  - row "Scroll More" [ref=e542]:
                    - cell "Scroll" [ref=e543]:
                      - link "Scroll" [ref=e544] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e545]:
                      - link "More" [ref=e546] [cursor=pointer]:
                        - /url: index.php?module=Calendar&action=index&action=ListView&from_homepage=pending_activities
            - generic [ref=e547]:
              - table [ref=e548]:
                - rowgroup [ref=e549]:
                  - row "My Recent FAQs Edit Refresh Hide Close" [ref=e550]:
                    - cell "My Recent FAQs" [ref=e551]
                    - cell [ref=e552]
                    - cell "Edit Refresh Hide Close" [ref=e553]:
                      - img "Edit" [ref=e555] [cursor=pointer]
                      - img "Refresh" [ref=e557] [cursor=pointer]
                      - img "Hide" [ref=e559] [cursor=pointer]
                      - img "Close" [ref=e560]
              - table [ref=e561]:
                - rowgroup [ref=e562]:
                  - row "No Data Found" [ref=e563]:
                    - cell "No Data Found" [ref=e564]:
                      - generic [ref=e565]:
                        - generic [ref=e566]: No Data Found
                        - table [ref=e567]:
                          - rowgroup [ref=e568]:
                            - row [ref=e569]:
                              - cell [ref=e570]
              - table [ref=e571]:
                - rowgroup [ref=e572]:
                  - row "Scroll" [ref=e573]:
                    - cell "Scroll" [ref=e574]:
                      - link "Scroll" [ref=e575] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
  - table [ref=e576]:
    - rowgroup [ref=e577]:
      - row "vtiger CRM 5.2.1 © 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e578]:
        - cell "vtiger CRM 5.2.1" [ref=e579]
        - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e580]:
          - generic [ref=e581]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=e582] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=e583] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=e584] [cursor=pointer]:
              - /url: http://www.vtiger.com/products/crm/privacy_policy.html
```

# Test source

```ts
  7   |     const context=await browser.newContext({
  8   |      
  9   |         viewport:{width:1980,height:1020}
  10  | 
  11  |     })
  12  | 
  13  |     const page=await context.newPage();
  14  |     await page.goto("http://localhost:8888/");
  15  |     await page.locator("//input[@name='user_name']").fill("admin");
  16  |     await page.locator("//input[@name='user_password']").fill("admin");
  17  |     await page.locator("//input[@name='Login']").click();
  18  |     await page.waitForTimeout(1000);
  19  |     console.log("Login Sucessfully");
  20  |     await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  21  | 
  22  | })
  23  | 
  24  | test('Verify Hover',async({page})=>{
  25  | 
  26  |       await page.goto("http://localhost:8888/");
  27  |       await page.locator("//input[@name='user_name']").fill("admin")
  28  |       await page.locator("//input[@name='user_password']").fill("admin");
  29  |       await page.locator("//input[@name='Login']").click();
  30  |       console.log("Login Sucessfully");
  31  |       await page.waitForTimeout(1000);
  32  |       await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  33  |       await page.locator("//a[text()='Marketing']").hover();
  34  |       await page.screenshot({path: './Screenshots/NewTest.png'});
  35  |       await page.waitForTimeout(1000);
  36  | 
  37  | })
  38  | 
  39  | test('Verify Checkboxes',async({page})=>{
  40  | 
  41  |     await page.goto("http://localhost:8888/");
  42  |     await page.locator("//input[@name='user_name']").fill("admin");
  43  |     await page.locator("//input[@name='user_password']").fill("admin");
  44  |     await page.locator("//input[@name='Login']").click();
  45  |     await page.waitForTimeout(1000);
  46  |     await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  47  |     console.log("Login Sucessfully");
  48  | 
  49  |     await page.locator("//a[text()='Support']").hover();
  50  |     await page.waitForTimeout(1000);
  51  |     const acc=await page.locator("//div[@id='Support_sub']//a[text()='Accounts']");
  52  |     await acc.click();
  53  |     await page.waitForTimeout(1000);
  54  |     const links=await page.locator("//input[@name='selected_id']");
  55  | 
  56  |     for(let i=0;i<await links.count();i++){
  57  | 
  58  |        await links.nth(i).click();
  59  |        await page.waitForTimeout(1000);
  60  |     }
  61  |     
  62  |     await page.waitForTimeout(1000);
  63  |     console.log("All Check boxes checked");
  64  | 
  65  | })
  66  | 
  67  |   test('Verify Multiple window',async({page})=>{
  68  | 
  69  |        await page.goto("http://localhost:8888/");
  70  |        await page.locator("//input[@name='user_name']").fill("admin");
  71  |        await page.locator("//input[@name='user_password']").fill("admin");
  72  |        await page.locator("//input[@name='Login']").click();
  73  |        await page.waitForTimeout(1000);
  74  |        console.log("Login Sucessfully");
  75  |        await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  76  |        await page.locator("//a[text()='Support']").hover();
  77  |        await page.screenshot({path: './Screenshots/test1.png'});
  78  |        await page.waitForTimeout(1000);
  79  |        const accountBTN=await page.locator("//div[@id='Support_sub']//a[text()='Contacts']");
  80  |        accountBTN.click();
  81  |        await page.waitForTimeout(1000);
  82  |        await page.locator("//input[@id='72']").click();
  83  |        const[newPage]=await Promise.all([page.waitForEvent('popup'),page.locator("//input[@value='Send Mail']").first().click()])
  84  |        await newPage.waitForTimeout(1000);
  85  |        const sub=await newPage.locator("//input[@name='subject']");
  86  |        await sub.fill("Test");
  87  |        console.log("Test Verifyed");
  88  | 
  89  |     })
  90  | 
  91  |     test('Verify AllLinks',async({page})=>{
  92  | 
  93  |         await page.goto("http://localhost:8888/");
  94  |         await page.locator("//input[@name='user_name']").fill("admin");
  95  |         await page.locator("//input[@name='user_password']").fill("admin");
  96  |         await page.locator("//input[@name='Login']").click();
  97  |         console.log("Login Sucessfully");
  98  |         await page.waitForTimeout(1000);
  99  |         await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  100 |         await page.locator("//a[text()='Marketing']").click();
  101 |         await page.waitForTimeout(1000);
  102 |         const alllinks=await page.locator("//td[@class='searchAlph']");
  103 | 
  104 |         for(let i=0;i< await alllinks.count();i++){
  105 | 
  106 |             await alllinks.nth(i).click();
> 107 |             page.waitForTimeout(1000);
      |                  ^ Error: page.waitForTimeout: Test ended.
  108 |         }
  109 | 
  110 |        
  111 |        
  112 |     })
  113 | 
  114 | 
```