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
  - 74 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 71 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 500ms before taking screenshot
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
      - row [ref=e126]:
        - cell [ref=e127]:
          - generic [ref=e128]:
            - generic [ref=e129]:
              - table [ref=e130]:
                - rowgroup [ref=e131]:
                  - row "Tag Cloud Edit Refresh Hide Close" [ref=e132]:
                    - cell "Tag Cloud" [ref=e133]
                    - cell [ref=e134]
                    - cell "Edit Refresh Hide Close" [ref=e135]:
                      - img "Edit" [ref=e136]
                      - img "Refresh" [ref=e138] [cursor=pointer]
                      - img "Hide" [ref=e140] [cursor=pointer]
                      - img "Close" [ref=e141]
              - table [ref=e142]:
                - rowgroup [ref=e143]:
                  - row [ref=e144]:
                    - cell [ref=e145]:
                      - img [ref=e148]
              - table [ref=e149]:
                - rowgroup [ref=e150]:
                  - row "Scroll" [ref=e151]:
                    - cell "Scroll" [ref=e152]:
                      - link "Scroll" [ref=e153] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e154]:
              - table [ref=e155]:
                - rowgroup [ref=e156]:
                  - row "Top Accounts Edit Refresh Hide Close" [ref=e157]:
                    - cell "Top Accounts" [ref=e158]
                    - cell [ref=e159]
                    - cell "Edit Refresh Hide Close" [ref=e160]:
                      - img "Edit" [ref=e162] [cursor=pointer]
                      - img "Refresh" [ref=e164] [cursor=pointer]
                      - img "Hide" [ref=e166] [cursor=pointer]
                      - img "Close" [ref=e167]
              - table [ref=e168]:
                - rowgroup [ref=e169]:
                  - row "No Data Found" [ref=e170]:
                    - cell "No Data Found" [ref=e171]:
                      - generic [ref=e172]:
                        - generic [ref=e173]: No Data Found
                        - table [ref=e174]:
                          - rowgroup [ref=e175]:
                            - row [ref=e176]:
                              - cell [ref=e177]
              - table [ref=e178]:
                - rowgroup [ref=e179]:
                  - row "Scroll" [ref=e180]:
                    - cell "Scroll" [ref=e181]:
                      - link "Scroll" [ref=e182] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e183]:
              - table [ref=e184]:
                - rowgroup [ref=e185]:
                  - row "Top Potentials Edit Refresh Hide Close" [ref=e186]:
                    - cell "Top Potentials" [ref=e187]
                    - cell [ref=e188]
                    - cell "Edit Refresh Hide Close" [ref=e189]:
                      - img "Edit" [ref=e191] [cursor=pointer]
                      - img "Refresh" [ref=e193] [cursor=pointer]
                      - img "Hide" [ref=e195] [cursor=pointer]
                      - img "Close" [ref=e196]
              - table [ref=e197]:
                - rowgroup [ref=e198]:
                  - row "No Data Found" [ref=e199]:
                    - cell "No Data Found" [ref=e200]:
                      - generic [ref=e201]:
                        - generic [ref=e202]: No Data Found
                        - table [ref=e203]:
                          - rowgroup [ref=e204]:
                            - row [ref=e205]:
                              - cell [ref=e206]
              - table [ref=e207]:
                - rowgroup [ref=e208]:
                  - row "Scroll" [ref=e209]:
                    - cell "Scroll" [ref=e210]:
                      - link "Scroll" [ref=e211] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e212]:
              - table [ref=e213]:
                - rowgroup [ref=e214]:
                  - row "Top Quotes Edit Refresh Hide Close" [ref=e215]:
                    - cell "Top Quotes" [ref=e216]
                    - cell [ref=e217]
                    - cell "Edit Refresh Hide Close" [ref=e218]:
                      - img "Edit" [ref=e220] [cursor=pointer]
                      - img "Refresh" [ref=e222] [cursor=pointer]
                      - img "Hide" [ref=e224] [cursor=pointer]
                      - img "Close" [ref=e225]
              - table [ref=e226]:
                - rowgroup [ref=e227]:
                  - row "No Data Found" [ref=e228]:
                    - cell "No Data Found" [ref=e229]:
                      - generic [ref=e230]:
                        - generic [ref=e231]: No Data Found
                        - table [ref=e232]:
                          - rowgroup [ref=e233]:
                            - row [ref=e234]:
                              - cell [ref=e235]
              - table [ref=e236]:
                - rowgroup [ref=e237]:
                  - row "Scroll" [ref=e238]:
                    - cell "Scroll" [ref=e239]:
                      - link "Scroll" [ref=e240] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e241]:
              - table [ref=e242]:
                - rowgroup [ref=e243]:
                  - row "Key Metrics Edit Refresh Hide Close" [ref=e244]:
                    - cell "Key Metrics" [ref=e245]
                    - cell [ref=e246]
                    - cell "Edit Refresh Hide Close" [ref=e247]:
                      - img "Edit" [ref=e248]
                      - img "Refresh" [ref=e250] [cursor=pointer]
                      - img "Hide" [ref=e252] [cursor=pointer]
                      - img "Close" [ref=e253]
              - table [ref=e254]:
                - rowgroup [ref=e255]:
                  - row "Metrics Module Count More Information Prospect Accounts (admin) Accounts 0 More Information Open Tickets (admin) Trouble Tickets 2 More Information Hot Leads (admin) Leads 0 More Information Potentials Won (admin) Potentials 0 More Information Open Quotes (admin) Quotes 0" [ref=e256]:
                    - cell "Metrics Module Count More Information Prospect Accounts (admin) Accounts 0 More Information Open Tickets (admin) Trouble Tickets 2 More Information Hot Leads (admin) Leads 0 More Information Potentials Won (admin) Potentials 0 More Information Open Quotes (admin) Quotes 0" [ref=e257]:
                      - table [ref=e259]:
                        - rowgroup [ref=e260]:
                          - row "Metrics Module Count" [ref=e261]:
                            - cell [ref=e262]
                            - cell "Metrics" [ref=e263]
                            - cell "Module" [ref=e264]
                            - cell "Count" [ref=e265]
                          - row "More Information Prospect Accounts (admin) Accounts 0" [ref=e266]:
                            - cell "More Information" [ref=e267]:
                              - img "More Information" [ref=e268]
                            - cell "Prospect Accounts (admin)" [ref=e269]:
                              - link "Prospect Accounts" [ref=e270] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Accounts&viewname=5
                              - text: (admin)
                            - cell "Accounts" [ref=e271]:
                              - link "Accounts" [ref=e272] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Accounts&viewname=5
                            - cell "0" [ref=e273]:
                              - link "0" [ref=e274] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Accounts&viewname=5
                          - row "More Information Open Tickets (admin) Trouble Tickets 2" [ref=e275]:
                            - cell "More Information" [ref=e276]:
                              - img "More Information" [ref=e277]
                            - cell "Open Tickets (admin)" [ref=e278]:
                              - link "Open Tickets" [ref=e279] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=HelpDesk&viewname=14
                              - text: (admin)
                            - cell "Trouble Tickets" [ref=e280]:
                              - link "Trouble Tickets" [ref=e281] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=HelpDesk&viewname=14
                            - cell "2" [ref=e282]:
                              - link "2" [ref=e283] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=HelpDesk&viewname=14
                          - row "More Information Hot Leads (admin) Leads 0" [ref=e284]:
                            - cell "More Information" [ref=e285]:
                              - img "More Information" [ref=e286]
                            - cell "Hot Leads (admin)" [ref=e287]:
                              - link "Hot Leads" [ref=e288] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Leads&viewname=2
                              - text: (admin)
                            - cell "Leads" [ref=e289]:
                              - link "Leads" [ref=e290] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Leads&viewname=2
                            - cell "0" [ref=e291]:
                              - link "0" [ref=e292] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Leads&viewname=2
                          - row "More Information Potentials Won (admin) Potentials 0" [ref=e293]:
                            - cell "More Information" [ref=e294]:
                              - img "More Information" [ref=e295]
                            - cell "Potentials Won (admin)" [ref=e296]:
                              - link "Potentials Won" [ref=e297] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Potentials&viewname=11
                              - text: (admin)
                            - cell "Potentials" [ref=e298]:
                              - link "Potentials" [ref=e299] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Potentials&viewname=11
                            - cell "0" [ref=e300]:
                              - link "0" [ref=e301] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Potentials&viewname=11
                          - row "More Information Open Quotes (admin) Quotes 0" [ref=e302]:
                            - cell "More Information" [ref=e303]:
                              - img "More Information" [ref=e304]
                            - cell "Open Quotes (admin)" [ref=e305]:
                              - link "Open Quotes" [ref=e306] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Quotes&viewname=17
                              - text: (admin)
                            - cell "Quotes" [ref=e307]:
                              - link "Quotes" [ref=e308] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Quotes&viewname=17
                            - cell "0" [ref=e309]:
                              - link "0" [ref=e310] [cursor=pointer]:
                                - /url: index.php?action=ListView&module=Quotes&viewname=17
              - table [ref=e311]:
                - rowgroup [ref=e312]:
                  - row "Scroll" [ref=e313]:
                    - cell "Scroll" [ref=e314]:
                      - link "Scroll" [ref=e315] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e316]:
              - table [ref=e317]:
                - rowgroup [ref=e318]:
                  - row "Top Trouble Tickets Edit Refresh Hide Close" [ref=e319]:
                    - cell "Top Trouble Tickets" [ref=e320]
                    - cell [ref=e321]
                    - cell "Edit Refresh Hide Close" [ref=e322]:
                      - img "Edit" [ref=e324] [cursor=pointer]
                      - img "Refresh" [ref=e326] [cursor=pointer]
                      - img "Hide" [ref=e328] [cursor=pointer]
                      - img "Close" [ref=e329]
              - table [ref=e330]:
                - rowgroup [ref=e331]:
                  - 'row "Subject : Related To More Information test More Information Test" [ref=e332]':
                    - 'cell "Subject : Related To More Information test More Information Test" [ref=e333]':
                      - table [ref=e335]:
                        - rowgroup [ref=e336]:
                          - 'row "Subject : Related To" [ref=e337]':
                            - cell [ref=e338]
                            - cell "Subject :" [ref=e339]
                            - cell "Related To" [ref=e340]
                          - row "More Information test" [ref=e341]:
                            - cell "More Information" [ref=e342]:
                              - img "More Information" [ref=e343]
                            - cell "test" [ref=e344]:
                              - link "test" [ref=e345] [cursor=pointer]:
                                - /url: index.php?action=DetailView&module=HelpDesk&record=34
                            - cell [ref=e346]
                          - row "More Information Test" [ref=e347]:
                            - cell "More Information" [ref=e348]:
                              - img "More Information" [ref=e349]
                            - cell "Test" [ref=e350]:
                              - link "Test" [ref=e351] [cursor=pointer]:
                                - /url: index.php?action=DetailView&module=HelpDesk&record=24
                            - cell [ref=e352]
              - table [ref=e353]:
                - rowgroup [ref=e354]:
                  - row "Scroll More" [ref=e355]:
                    - cell "Scroll" [ref=e356]:
                      - link "Scroll" [ref=e357] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e358]:
                      - link "More" [ref=e359] [cursor=pointer]:
                        - /url: index.php?module=HelpDesk&action=index&query=true&Fields0=ticketstatus&Condition0=n&Srch_value0=closed&Fields1=assigned_user_id&Condition1=e&Srch_value1=admin&searchtype=advance&search_cnt=2&matchtype=all
            - generic [ref=e360]:
              - table [ref=e361]:
                - rowgroup [ref=e362]:
                  - row "Upcoming Activities Edit Refresh Hide Close" [ref=e363]:
                    - cell "Upcoming Activities" [ref=e364]
                    - cell [ref=e365]
                    - cell "Edit Refresh Hide Close" [ref=e366]:
                      - img "Edit" [ref=e368] [cursor=pointer]
                      - img "Refresh" [ref=e370] [cursor=pointer]
                      - img "Hide" [ref=e372] [cursor=pointer]
                      - img "Close" [ref=e373]
              - table [ref=e374]:
                - rowgroup [ref=e375]:
                  - row "More Information No Data Found" [ref=e376]:
                    - cell "More Information No Data Found" [ref=e377]:
                      - table [ref=e379]:
                        - rowgroup [ref=e380]:
                          - row [ref=e381]:
                            - cell [ref=e382]
                          - row "More Information No Data Found" [ref=e383]:
                            - cell "More Information" [ref=e384]:
                              - img "More Information" [ref=e385]
                            - cell "No Data Found" [ref=e386]:
                              - generic [ref=e387]: No Data Found
              - table [ref=e388]:
                - rowgroup [ref=e389]:
                  - row "Scroll More" [ref=e390]:
                    - cell "Scroll" [ref=e391]:
                      - link "Scroll" [ref=e392] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e393]:
                      - link "More" [ref=e394] [cursor=pointer]:
                        - /url: index.php?module=Calendar&action=index&action=ListView&from_homepage=upcoming_activities
            - generic [ref=e395]:
              - table [ref=e396]:
                - rowgroup [ref=e397]:
                  - row "Top Sales Orders Edit Refresh Hide Close" [ref=e398]:
                    - cell "Top Sales Orders" [ref=e399]
                    - cell [ref=e400]
                    - cell "Edit Refresh Hide Close" [ref=e401]:
                      - img "Edit" [ref=e403] [cursor=pointer]
                      - img "Refresh" [ref=e405] [cursor=pointer]
                      - img "Hide" [ref=e407] [cursor=pointer]
                      - img "Close" [ref=e408]
              - table [ref=e409]:
                - rowgroup [ref=e410]:
                  - row "No Data Found" [ref=e411]:
                    - cell "No Data Found" [ref=e412]:
                      - generic [ref=e413]:
                        - generic [ref=e414]: No Data Found
                        - table [ref=e415]:
                          - rowgroup [ref=e416]:
                            - row [ref=e417]:
                              - cell [ref=e418]
              - table [ref=e419]:
                - rowgroup [ref=e420]:
                  - row "Scroll" [ref=e421]:
                    - cell "Scroll" [ref=e422]:
                      - link "Scroll" [ref=e423] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e424]:
              - table [ref=e425]:
                - rowgroup [ref=e426]:
                  - row "Top Invoices Edit Refresh Hide Close" [ref=e427]:
                    - cell "Top Invoices" [ref=e428]
                    - cell [ref=e429]
                    - cell "Edit Refresh Hide Close" [ref=e430]:
                      - img "Edit" [ref=e432] [cursor=pointer]
                      - img "Refresh" [ref=e434] [cursor=pointer]
                      - img "Hide" [ref=e436] [cursor=pointer]
                      - img "Close" [ref=e437]
              - table [ref=e438]:
                - rowgroup [ref=e439]:
                  - row "No Data Found" [ref=e440]:
                    - cell "No Data Found" [ref=e441]:
                      - generic [ref=e442]:
                        - generic [ref=e443]: No Data Found
                        - table [ref=e444]:
                          - rowgroup [ref=e445]:
                            - row [ref=e446]:
                              - cell [ref=e447]
              - table [ref=e448]:
                - rowgroup [ref=e449]:
                  - row "Scroll" [ref=e450]:
                    - cell "Scroll" [ref=e451]:
                      - link "Scroll" [ref=e452] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e453]:
              - table [ref=e454]:
                - rowgroup [ref=e455]:
                  - row "My New Leads Edit Refresh Hide Close" [ref=e456]:
                    - cell "My New Leads" [ref=e457]
                    - cell [ref=e458]
                    - cell "Edit Refresh Hide Close" [ref=e459]:
                      - img "Edit" [ref=e461] [cursor=pointer]
                      - img "Refresh" [ref=e463] [cursor=pointer]
                      - img "Hide" [ref=e465] [cursor=pointer]
                      - img "Close" [ref=e466]
              - table [ref=e467]:
                - rowgroup [ref=e468]:
                  - row "No Data Found" [ref=e469]:
                    - cell "No Data Found" [ref=e470]:
                      - generic [ref=e471]:
                        - generic [ref=e472]: No Data Found
                        - table [ref=e473]:
                          - rowgroup [ref=e474]:
                            - row [ref=e475]:
                              - cell [ref=e476]
              - table [ref=e477]:
                - rowgroup [ref=e478]:
                  - row "Scroll" [ref=e479]:
                    - cell "Scroll" [ref=e480]:
                      - link "Scroll" [ref=e481] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e482]:
              - table [ref=e483]:
                - rowgroup [ref=e484]:
                  - row "Top Purchase Orders Edit Refresh Hide Close" [ref=e485]:
                    - cell "Top Purchase Orders" [ref=e486]
                    - cell [ref=e487]
                    - cell "Edit Refresh Hide Close" [ref=e488]:
                      - img "Edit" [ref=e490] [cursor=pointer]
                      - img "Refresh" [ref=e492] [cursor=pointer]
                      - img "Hide" [ref=e494] [cursor=pointer]
                      - img "Close" [ref=e495]
              - table [ref=e496]:
                - rowgroup [ref=e497]:
                  - row "No Data Found" [ref=e498]:
                    - cell "No Data Found" [ref=e499]:
                      - generic [ref=e500]:
                        - generic [ref=e501]: No Data Found
                        - table [ref=e502]:
                          - rowgroup [ref=e503]:
                            - row [ref=e504]:
                              - cell [ref=e505]
              - table [ref=e506]:
                - rowgroup [ref=e507]:
                  - row "Scroll" [ref=e508]:
                    - cell "Scroll" [ref=e509]:
                      - link "Scroll" [ref=e510] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
            - generic [ref=e511]:
              - table [ref=e512]:
                - rowgroup [ref=e513]:
                  - row "Pending Activities Edit Refresh Hide Close" [ref=e514]:
                    - cell "Pending Activities" [ref=e515]
                    - cell [ref=e516]
                    - cell "Edit Refresh Hide Close" [ref=e517]:
                      - img "Edit" [ref=e519] [cursor=pointer]
                      - img "Refresh" [ref=e521] [cursor=pointer]
                      - img "Hide" [ref=e523] [cursor=pointer]
                      - img "Close" [ref=e524]
              - table [ref=e525]:
                - rowgroup [ref=e526]:
                  - row "More Information No Data Found" [ref=e527]:
                    - cell "More Information No Data Found" [ref=e528]:
                      - table [ref=e530]:
                        - rowgroup [ref=e531]:
                          - row [ref=e532]:
                            - cell [ref=e533]
                          - row "More Information No Data Found" [ref=e534]:
                            - cell "More Information" [ref=e535]:
                              - img "More Information" [ref=e536]
                            - cell "No Data Found" [ref=e537]:
                              - generic [ref=e538]: No Data Found
              - table [ref=e539]:
                - rowgroup [ref=e540]:
                  - row "Scroll More" [ref=e541]:
                    - cell "Scroll" [ref=e542]:
                      - link "Scroll" [ref=e543] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e544]:
                      - link "More" [ref=e545] [cursor=pointer]:
                        - /url: index.php?module=Calendar&action=index&action=ListView&from_homepage=pending_activities
            - generic [ref=e546]:
              - table [ref=e547]:
                - rowgroup [ref=e548]:
                  - row "My Recent FAQs Edit Refresh Hide Close" [ref=e549]:
                    - cell "My Recent FAQs" [ref=e550]
                    - cell [ref=e551]
                    - cell "Edit Refresh Hide Close" [ref=e552]:
                      - img "Edit" [ref=e554] [cursor=pointer]
                      - img "Refresh" [ref=e556] [cursor=pointer]
                      - img "Hide" [ref=e558] [cursor=pointer]
                      - img "Close" [ref=e559]
              - table [ref=e560]:
                - rowgroup [ref=e561]:
                  - row "No Data Found" [ref=e562]:
                    - cell "No Data Found" [ref=e563]:
                      - generic [ref=e564]:
                        - generic [ref=e565]: No Data Found
                        - table [ref=e566]:
                          - rowgroup [ref=e567]:
                            - row [ref=e568]:
                              - cell [ref=e569]
              - table [ref=e570]:
                - rowgroup [ref=e571]:
                  - row "Scroll" [ref=e572]:
                    - cell "Scroll" [ref=e573]:
                      - link "Scroll" [ref=e574] [cursor=pointer]:
                        - /url: javascript:;
                    - cell
  - table [ref=e575]:
    - rowgroup [ref=e576]:
      - row "vtiger CRM 5.2.1 © 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e577]:
        - cell "vtiger CRM 5.2.1" [ref=e578]
        - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e579]:
          - generic [ref=e580]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=e581] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=e582] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=e583] [cursor=pointer]:
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
  31 |       const hover=page.locator("//a[@name='Marketing']");
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