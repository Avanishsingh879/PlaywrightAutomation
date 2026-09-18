# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTestScript2.spec.js >> Verify Leads
- Location: tests\LoginTestScript2.spec.js:29:5

# Error details

```
ReferenceError: lists is not defined
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
      - row "Trouble Tickets FAQ Accounts Contacts Documents Webmail Calendar Service Contracts Project Milestones Project Tasks Projects" [ref=e90]:
        - cell "Trouble Tickets FAQ Accounts Contacts Documents Webmail Calendar Service Contracts Project Milestones Project Tasks Projects" [ref=e91]:
          - table [ref=e92]:
            - rowgroup [ref=e93]:
              - row "Trouble Tickets FAQ Accounts Contacts Documents Webmail Calendar Service Contracts Project Milestones Project Tasks Projects" [ref=e94]:
                - cell "Trouble Tickets" [ref=e95]:
                  - link "Trouble Tickets" [ref=e96] [cursor=pointer]:
                    - /url: index.php?module=HelpDesk&action=index&parenttab=Support
                - cell "FAQ" [ref=e97]:
                  - link "FAQ" [ref=e98] [cursor=pointer]:
                    - /url: index.php?module=Faq&action=index&parenttab=Support
                - cell "Accounts" [ref=e99]:
                  - link "Accounts" [ref=e100] [cursor=pointer]:
                    - /url: index.php?module=Accounts&action=index&parenttab=Support
                - cell "Contacts" [ref=e101]:
                  - link "Contacts" [ref=e102] [cursor=pointer]:
                    - /url: index.php?module=Contacts&action=index&parenttab=Support
                - cell "Documents" [ref=e103]:
                  - link "Documents" [ref=e104] [cursor=pointer]:
                    - /url: index.php?module=Documents&action=index&parenttab=Support
                - cell "Webmail" [ref=e105]:
                  - link "Webmail" [ref=e106] [cursor=pointer]:
                    - /url: index.php?module=Webmails&action=index&parenttab=Support
                - cell "Calendar" [ref=e107]:
                  - link "Calendar" [ref=e108] [cursor=pointer]:
                    - /url: index.php?module=Calendar&action=index&parenttab=Support
                - cell "Service Contracts" [ref=e109]:
                  - link "Service Contracts" [ref=e110] [cursor=pointer]:
                    - /url: index.php?module=ServiceContracts&action=index&parenttab=Support
                - cell "Project Milestones" [ref=e111]:
                  - link "Project Milestones" [ref=e112] [cursor=pointer]:
                    - /url: index.php?module=ProjectMilestone&action=index&parenttab=Support
                - cell "Project Tasks" [ref=e113]:
                  - link "Project Tasks" [ref=e114] [cursor=pointer]:
                    - /url: index.php?module=ProjectTask&action=index&parenttab=Support
                - cell "Projects" [ref=e115]:
                  - link "Projects" [ref=e116] [cursor=pointer]:
                    - /url: index.php?module=Project&action=index&parenttab=Support
  - table [ref=e117]:
    - rowgroup [ref=e118]:
      - row [ref=e119]:
        - cell [ref=e120]
      - row "Support > Accounts Create Account... Search in Accounts... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Import Accounts Export Accounts Find Duplicates Open All Menu... Accounts Settings" [ref=e121]:
        - cell "Support > Accounts" [ref=e122]:
          - text: Support >
          - link "Accounts" [ref=e123] [cursor=pointer]:
            - /url: index.php?action=ListView&module=Accounts&parenttab=Support
        - cell "Create Account... Search in Accounts... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Import Accounts Export Accounts Find Duplicates Open All Menu... Accounts Settings" [ref=e124]:
          - table [ref=e125]:
            - rowgroup [ref=e126]:
              - row "Create Account... Search in Accounts... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Import Accounts Export Accounts Find Duplicates Open All Menu... Accounts Settings" [ref=e127]:
                - cell [ref=e128]
                - cell "Create Account... Search in Accounts..." [ref=e129]:
                  - table [ref=e130]:
                    - rowgroup [ref=e131]:
                      - row "Create Account... Search in Accounts..." [ref=e132]:
                        - cell "Create Account... Search in Accounts..." [ref=e133]:
                          - table [ref=e134]:
                            - rowgroup [ref=e135]:
                              - row "Create Account... Search in Accounts..." [ref=e136]:
                                - cell "Create Account..." [ref=e137]:
                                  - link "Create Account..." [ref=e138] [cursor=pointer]:
                                    - /url: index.php?module=Accounts&action=EditView&return_action=DetailView&parenttab=Support
                                    - img "Create Account..." [ref=e139]
                                - cell "Search in Accounts..." [ref=e140]:
                                  - link "Search in Accounts..." [ref=e141] [cursor=pointer]:
                                    - /url: javascript:;
                                    - img "Search in Accounts..." [ref=e142]
                - cell [ref=e143]
                - cell "Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed" [ref=e144]:
                  - table [ref=e145]:
                    - rowgroup [ref=e146]:
                      - row "Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed" [ref=e147]:
                        - cell "Open Calendar..." [ref=e148]:
                          - link "Open Calendar..." [ref=e149] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Open Calendar..." [ref=e150]
                        - cell "Show World Clock..." [ref=e151]:
                          - link "Show World Clock..." [ref=e152] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Show World Clock..." [ref=e153]
                        - cell "Open Calculator..." [ref=e154]:
                          - link "Open Calculator..." [ref=e155] [cursor=pointer]:
                            - /url: "#"
                            - img "Open Calculator..." [ref=e156]
                        - cell "Chat..." [ref=e157]:
                          - link "Chat..." [ref=e158] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Chat..." [ref=e159]
                        - cell "Last Viewed" [ref=e160]:
                          - img "Last Viewed" [ref=e161]
                - cell [ref=e162]
                - cell "Import Accounts Export Accounts Find Duplicates" [ref=e163]:
                  - table [ref=e164]:
                    - rowgroup [ref=e165]:
                      - row "Import Accounts Export Accounts Find Duplicates" [ref=e166]:
                        - cell "Import Accounts" [ref=e167]:
                          - link "Import Accounts" [ref=e168] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=Import&step=1&return_module=Accounts&return_action=index&parenttab=Support
                            - img "Import Accounts" [ref=e169]
                        - cell "Export Accounts" [ref=e170]:
                          - link "Export Accounts" [ref=e171] [cursor=pointer]:
                            - /url: javascript:void(0)
                            - img "Export Accounts" [ref=e172]
                        - cell "Find Duplicates" [ref=e173]:
                          - link "Find Duplicates" [ref=e174] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Find Duplicates" [ref=e175]
                - cell [ref=e176]
                - cell "Open All Menu... Accounts Settings" [ref=e177]:
                  - table [ref=e178]:
                    - rowgroup [ref=e179]:
                      - row "Open All Menu... Accounts Settings" [ref=e180]:
                        - cell "Open All Menu..." [ref=e181]:
                          - link "Open All Menu..." [ref=e182] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Open All Menu..." [ref=e183]
                        - cell "Accounts Settings" [ref=e184]:
                          - link "Accounts Settings" [ref=e185] [cursor=pointer]:
                            - /url: index.php?module=Settings&action=ModuleManager&module_settings=true&formodule=Accounts&parenttab=Settings
                            - img "Accounts Settings" [ref=e186]
      - row [ref=e187]:
        - cell [ref=e188]
  - table [ref=e189]:
    - rowgroup [ref=e190]:
      - 'row "Search Go to Advanced Search Search for In Account No Search Now [x] A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 4 of 4 1 of 1 Filters : All New | Edit | Delete Account No Account Name Billing City Website Phone Assigned To Action ACC11 Test admin edit | del ACC12 Test2 admin edit | del ACC13 Test3 admin edit | del ACC14 Test4 admin edit | del Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 4 of 4 1 of 1 Create Mail Merge templates" [ref=e191]':
        - cell [ref=e192]:
          - img [ref=e193]
        - 'cell "Search Go to Advanced Search Search for In Account No Search Now [x] A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 4 of 4 1 of 1 Filters : All New | Edit | Delete Account No Account Name Billing City Website Phone Assigned To Action ACC11 Test admin edit | del ACC12 Test2 admin edit | del ACC13 Test3 admin edit | del ACC14 Test4 admin edit | del Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 4 of 4 1 of 1 Create Mail Merge templates" [ref=e194]':
          - table [ref=e197]:
            - rowgroup [ref=e198]:
              - row "Search Go to Advanced Search Search for In Account No Search Now [x]" [ref=e199]:
                - cell "Search Go to Advanced Search" [ref=e200]:
                  - text: Search
                  - link "Go to Advanced Search" [ref=e202] [cursor=pointer]:
                    - /url: "#"
                - cell "Search for" [ref=e203]
                - cell [ref=e204]:
                  - textbox [ref=e205]
                - cell "In" [ref=e206]
                - cell "Account No" [ref=e207]:
                  - combobox [ref=e209]:
                    - option "Account No" [selected]
                    - option "Account Name"
                    - option "Billing City"
                    - option "Website"
                    - option "Phone"
                    - option "Assigned To"
                - cell "Search Now" [ref=e210]:
                  - button "Search Now" [ref=e211]
                - cell "[x]" [ref=e212]
              - row "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" [ref=e213]:
                - cell "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" [ref=e214]:
                  - table [ref=e215]:
                    - rowgroup [ref=e216]:
                      - row "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" [ref=e217]:
                        - cell "A" [ref=e218] [cursor=pointer]
                        - cell "B" [ref=e219] [cursor=pointer]
                        - cell "C" [ref=e220] [cursor=pointer]
                        - cell "D" [ref=e221] [cursor=pointer]
                        - cell "E" [ref=e222] [cursor=pointer]
                        - cell "F" [ref=e223] [cursor=pointer]
                        - cell "G" [ref=e224] [cursor=pointer]
                        - cell "H" [ref=e225] [cursor=pointer]
                        - cell "I" [ref=e226] [cursor=pointer]
                        - cell "J" [ref=e227] [cursor=pointer]
                        - cell "K" [ref=e228] [cursor=pointer]
                        - cell "L" [ref=e229] [cursor=pointer]
                        - cell "M" [ref=e230] [cursor=pointer]
                        - cell "N" [ref=e231] [cursor=pointer]
                        - cell "O" [ref=e232] [cursor=pointer]
                        - cell "P" [ref=e233] [cursor=pointer]
                        - cell "Q" [ref=e234] [cursor=pointer]
                        - cell "R" [ref=e235] [cursor=pointer]
                        - cell "S" [ref=e236] [cursor=pointer]
                        - cell "T" [ref=e237] [cursor=pointer]
                        - cell "U" [ref=e238] [cursor=pointer]
                        - cell "V" [ref=e239] [cursor=pointer]
                        - cell "W" [ref=e240] [cursor=pointer]
                        - cell "X" [ref=e241] [cursor=pointer]
                        - cell "Y" [ref=e242] [cursor=pointer]
                        - cell "Z" [ref=e243] [cursor=pointer]
          - table [ref=e246]:
            - rowgroup [ref=e247]:
              - 'row "Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 4 of 4 1 of 1 Filters : All New | Edit | Delete Account No Account Name Billing City Website Phone Assigned To Action ACC11 Test admin edit | del ACC12 Test2 admin edit | del ACC13 Test3 admin edit | del ACC14 Test4 admin edit | del Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 4 of 4 1 of 1 Create Mail Merge templates" [ref=e248]':
                - 'cell "Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 4 of 4 1 of 1 Filters : All New | Edit | Delete Account No Account Name Billing City Website Phone Assigned To Action ACC11 Test admin edit | del ACC12 Test2 admin edit | del ACC13 Test3 admin edit | del ACC14 Test4 admin edit | del Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 4 of 4 1 of 1 Create Mail Merge templates" [ref=e249]':
                  - table [ref=e250]:
                    - rowgroup [ref=e251]:
                      - 'row "Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 4 of 4 1 of 1 Filters : All New | Edit | Delete" [ref=e252]':
                        - cell "Delete Mass Edit Send Mail Mailer Export Send SMS" [ref=e253]:
                          - button "Delete" [ref=e254]
                          - button "Mass Edit" [ref=e255]
                          - button "Send Mail" [ref=e256]
                          - button "Mailer Export" [ref=e257]
                          - button "Send SMS" [ref=e258]
                        - cell "Showing Records 1 - 4 of 4" [ref=e259]
                        - cell "1 of 1" [ref=e260]:
                          - table [ref=e261]:
                            - rowgroup [ref=e262]:
                              - row "1 of 1" [ref=e263]:
                                - cell "1 of 1" [ref=e264]:
                                  - img [ref=e265]
                                  - img [ref=e266]
                                  - textbox [ref=e267]: "1"
                                  - text: of 1
                                  - img [ref=e268]
                                  - img [ref=e269]
                        - 'cell "Filters : All New | Edit | Delete" [ref=e270]':
                          - table [ref=e271]:
                            - rowgroup [ref=e272]:
                              - 'row "Filters : All New | Edit | Delete" [ref=e273]':
                                - cell "Filters :" [ref=e274]
                                - cell "All" [ref=e275]:
                                  - combobox [ref=e276]:
                                    - option "All" [selected]
                                    - option "New This Week"
                                    - option "Prospect Accounts"
                                - cell "New | Edit | Delete" [ref=e277]:
                                  - link "New" [ref=e278] [cursor=pointer]:
                                    - /url: index.php?module=Accounts&action=CustomView&parenttab=Support
                                  - text: "| Edit | Delete"
                  - table [ref=e280]:
                    - rowgroup [ref=e281]:
                      - row "Account No Account Name Billing City Website Phone Assigned To Action" [ref=e282]:
                        - cell [ref=e283]:
                          - checkbox [ref=e284]
                        - cell "Account No" [ref=e285]:
                          - link "Account No" [ref=e286] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Account Name" [ref=e287]:
                          - link "Account Name" [ref=e288] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Billing City" [ref=e289]:
                          - link "Billing City" [ref=e290] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Website" [ref=e291]:
                          - link "Website" [ref=e292] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Phone" [ref=e293]:
                          - link "Phone" [ref=e294] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Assigned To" [ref=e295]:
                          - link "Assigned To" [ref=e296] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Action" [ref=e297]
                      - row "ACC11 Test admin edit | del" [ref=e298]:
                        - cell [ref=e299]:
                          - checkbox [ref=e300]
                        - cell "ACC11" [ref=e301]
                        - cell "Test" [ref=e302]:
                          - link "Test" [ref=e303] [cursor=pointer]:
                            - /url: index.php?module=Accounts&parenttab=Support&action=DetailView&record=64
                        - cell [ref=e304]
                        - cell [ref=e305]:
                          - link:
                            - /url: http://
                        - cell [ref=e306]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e307]
                        - cell "edit | del" [ref=e308]:
                          - link "edit" [ref=e309] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=EditView&record=64&return_module=Accounts&return_action=index&parenttab=Support&return_viewname=4
                          - text: "|"
                          - link "del" [ref=e310] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DAccounts%26action%3DDelete%26record%3D64%26return_module%3DAccounts%26return_action%3Dindex%26parenttab%3DSupport%26return_viewname%3D4")
                      - row "ACC12 Test2 admin edit | del" [ref=e311]:
                        - cell [ref=e312]:
                          - checkbox [ref=e313]
                        - cell "ACC12" [ref=e314]
                        - cell "Test2" [ref=e315]:
                          - link "Test2" [ref=e316] [cursor=pointer]:
                            - /url: index.php?module=Accounts&parenttab=Support&action=DetailView&record=65
                        - cell [ref=e317]
                        - cell [ref=e318]:
                          - link:
                            - /url: http://
                        - cell [ref=e319]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e320]
                        - cell "edit | del" [ref=e321]:
                          - link "edit" [ref=e322] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=EditView&record=65&return_module=Accounts&return_action=index&parenttab=Support&return_viewname=4
                          - text: "|"
                          - link "del" [ref=e323] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DAccounts%26action%3DDelete%26record%3D65%26return_module%3DAccounts%26return_action%3Dindex%26parenttab%3DSupport%26return_viewname%3D4")
                      - row "ACC13 Test3 admin edit | del" [ref=e324]:
                        - cell [ref=e325]:
                          - checkbox [ref=e326]
                        - cell "ACC13" [ref=e327]
                        - cell "Test3" [ref=e328]:
                          - link "Test3" [ref=e329] [cursor=pointer]:
                            - /url: index.php?module=Accounts&parenttab=Support&action=DetailView&record=66
                        - cell [ref=e330]
                        - cell [ref=e331]:
                          - link:
                            - /url: http://
                        - cell [ref=e332]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e333]
                        - cell "edit | del" [ref=e334]:
                          - link "edit" [ref=e335] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=EditView&record=66&return_module=Accounts&return_action=index&parenttab=Support&return_viewname=4
                          - text: "|"
                          - link "del" [ref=e336] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DAccounts%26action%3DDelete%26record%3D66%26return_module%3DAccounts%26return_action%3Dindex%26parenttab%3DSupport%26return_viewname%3D4")
                      - row "ACC14 Test4 admin edit | del" [ref=e337]:
                        - cell [ref=e338]:
                          - checkbox [ref=e339]
                        - cell "ACC14" [ref=e340]
                        - cell "Test4" [ref=e341]:
                          - link "Test4" [ref=e342] [cursor=pointer]:
                            - /url: index.php?module=Accounts&parenttab=Support&action=DetailView&record=67
                        - cell [ref=e343]
                        - cell [ref=e344]:
                          - link:
                            - /url: http://
                        - cell [ref=e345]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e346]
                        - cell "edit | del" [ref=e347]:
                          - link "edit" [ref=e348] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=EditView&record=67&return_module=Accounts&return_action=index&parenttab=Support&return_viewname=4
                          - text: "|"
                          - link "del" [ref=e349] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DAccounts%26action%3DDelete%26record%3D67%26return_module%3DAccounts%26return_action%3Dindex%26parenttab%3DSupport%26return_viewname%3D4")
                  - table [ref=e350]:
                    - rowgroup [ref=e351]:
                      - row "Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 4 of 4 1 of 1 Create Mail Merge templates" [ref=e352]:
                        - cell "Delete Mass Edit Send Mail Mailer Export Send SMS" [ref=e353]:
                          - button "Delete" [ref=e354]
                          - button "Mass Edit" [ref=e355]
                          - button "Send Mail" [ref=e356]
                          - button "Mailer Export" [ref=e357]
                          - button "Send SMS" [ref=e358]
                        - cell "Showing Records 1 - 4 of 4" [ref=e359]
                        - cell "1 of 1" [ref=e360]:
                          - table [ref=e361]:
                            - rowgroup [ref=e362]:
                              - row "1 of 1" [ref=e363]:
                                - cell "1 of 1" [ref=e364]:
                                  - img [ref=e365]
                                  - img [ref=e366]
                                  - textbox [ref=e367]: "1"
                                  - text: of 1
                                  - img [ref=e368]
                                  - img [ref=e369]
                        - cell "Create Mail Merge templates" [ref=e370]:
                          - table [ref=e371]:
                            - rowgroup [ref=e372]:
                              - row "Create Mail Merge templates" [ref=e373]:
                                - cell "Create Mail Merge templates" [ref=e374]:
                                  - link "Create Mail Merge templates" [ref=e375] [cursor=pointer]:
                                    - /url: index.php?module=Settings&action=upload&tempModule=Accounts&parenttab=Settings
        - cell [ref=e376]:
          - img [ref=e377]
  - table [ref=e378]:
    - rowgroup [ref=e379]:
      - row "vtiger CRM 5.2.1 © 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e380]:
        - cell "vtiger CRM 5.2.1" [ref=e381]
        - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e382]:
          - generic [ref=e383]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=e384] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=e385] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=e386] [cursor=pointer]:
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
  38 |     const sales=await page.locator("//a[text()='Support']").hover();
  39 |     console.log("Handled Hover");
  40 | 
  41 |     //const acc=await page.locator("//div[@id='Support_sub']//a[text()='Accounts']").textContent();
  42 |     //console.log(acc)
  43 |     const acc=await page.locator("//div[@id='Support_sub']//a[text()='Accounts']").click();
  44 |     await page.waitForTimeout(8000);
  45 |     ///////////////////////////////////////////////////
  46 |     const list=await page.locator("//input[@name='selected_id']");
> 47 |      for (let i = 0; i < await lists.count(); i++) {
     |                                ^ ReferenceError: lists is not defined
  48 |     await lists.nth(i).click();
  49 |     await page.waitForTimeout(2000);
  50 |     }
  51 |     console.log("Check box checked");
  52 | 
  53 | await page.screenshot({ path:'./Screenshots/Hover1.png'});
  54 |     console.log("Take Screenshot");
  55 | 
  56 | 
  57 | 
  58 | })
```