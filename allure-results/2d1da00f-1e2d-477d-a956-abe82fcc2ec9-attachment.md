# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Verify_Listbox.spec.js >> Handled Multipe window
- Location: tests\Verify_Listbox.spec.js:55:5

# Error details

```
TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
```

```
Error: page.waitForEvent: Test ended.
=========================== logs ===========================
waiting for event "page"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
      - row "Campaigns Accounts Contacts Webmail Leads Calendar Documents" [ref=e90]:
        - cell "Campaigns Accounts Contacts Webmail Leads Calendar Documents" [ref=e91]:
          - table [ref=e92]:
            - rowgroup [ref=e93]:
              - row "Campaigns Accounts Contacts Webmail Leads Calendar Documents" [ref=e94]:
                - cell "Campaigns" [ref=e95]:
                  - link "Campaigns" [ref=e96] [cursor=pointer]:
                    - /url: index.php?module=Campaigns&action=index&parenttab=Marketing
                - cell "Accounts" [ref=e97]:
                  - link "Accounts" [ref=e98] [cursor=pointer]:
                    - /url: index.php?module=Accounts&action=index&parenttab=Marketing
                - cell "Contacts" [ref=e99]:
                  - link "Contacts" [ref=e100] [cursor=pointer]:
                    - /url: index.php?module=Contacts&action=index&parenttab=Marketing
                - cell "Webmail" [ref=e101]:
                  - link "Webmail" [ref=e102] [cursor=pointer]:
                    - /url: index.php?module=Webmails&action=index&parenttab=Marketing
                - cell "Leads" [ref=e103]:
                  - link "Leads" [ref=e104] [cursor=pointer]:
                    - /url: index.php?module=Leads&action=index&parenttab=Marketing
                - cell "Calendar" [ref=e105]:
                  - link "Calendar" [ref=e106] [cursor=pointer]:
                    - /url: index.php?module=Calendar&action=index&parenttab=Marketing
                - cell "Documents" [ref=e107]:
                  - link "Documents" [ref=e108] [cursor=pointer]:
                    - /url: index.php?module=Documents&action=index&parenttab=Marketing
  - table [ref=e109]:
    - rowgroup [ref=e110]:
      - row [ref=e111]:
        - cell [ref=e112]
      - row "Marketing > Accounts Create Account... Search in Accounts... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Import Accounts Export Accounts Find Duplicates Open All Menu... Accounts Settings" [ref=e113]:
        - cell "Marketing > Accounts" [ref=e114]:
          - text: Marketing >
          - link "Accounts" [ref=e115] [cursor=pointer]:
            - /url: index.php?action=ListView&module=Accounts&parenttab=Marketing
        - cell "Create Account... Search in Accounts... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Import Accounts Export Accounts Find Duplicates Open All Menu... Accounts Settings" [ref=e116]:
          - table [ref=e117]:
            - rowgroup [ref=e118]:
              - row "Create Account... Search in Accounts... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Import Accounts Export Accounts Find Duplicates Open All Menu... Accounts Settings" [ref=e119]:
                - cell [ref=e120]
                - cell "Create Account... Search in Accounts..." [ref=e121]:
                  - table [ref=e122]:
                    - rowgroup [ref=e123]:
                      - row "Create Account... Search in Accounts..." [ref=e124]:
                        - cell "Create Account... Search in Accounts..." [ref=e125]:
                          - table [ref=e126]:
                            - rowgroup [ref=e127]:
                              - row "Create Account... Search in Accounts..." [ref=e128]:
                                - cell "Create Account..." [ref=e129]:
                                  - link "Create Account..." [ref=e130] [cursor=pointer]:
                                    - /url: index.php?module=Accounts&action=EditView&return_action=DetailView&parenttab=Marketing
                                    - img "Create Account..." [ref=e131]
                                - cell "Search in Accounts..." [ref=e132]:
                                  - link "Search in Accounts..." [ref=e133] [cursor=pointer]:
                                    - /url: javascript:;
                                    - img "Search in Accounts..." [ref=e134]
                - cell [ref=e135]
                - cell "Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed" [ref=e136]:
                  - table [ref=e137]:
                    - rowgroup [ref=e138]:
                      - row "Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed" [ref=e139]:
                        - cell "Open Calendar..." [ref=e140]:
                          - link "Open Calendar..." [ref=e141] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Open Calendar..." [ref=e142]
                        - cell "Show World Clock..." [ref=e143]:
                          - link "Show World Clock..." [ref=e144] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Show World Clock..." [ref=e145]
                        - cell "Open Calculator..." [ref=e146]:
                          - link "Open Calculator..." [ref=e147] [cursor=pointer]:
                            - /url: "#"
                            - img "Open Calculator..." [ref=e148]
                        - cell "Chat..." [ref=e149]:
                          - link "Chat..." [ref=e150] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Chat..." [ref=e151]
                        - cell "Last Viewed" [ref=e152]:
                          - img "Last Viewed" [ref=e153]
                - cell [ref=e154]
                - cell "Import Accounts Export Accounts Find Duplicates" [ref=e155]:
                  - table [ref=e156]:
                    - rowgroup [ref=e157]:
                      - row "Import Accounts Export Accounts Find Duplicates" [ref=e158]:
                        - cell "Import Accounts" [ref=e159]:
                          - link "Import Accounts" [ref=e160] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=Import&step=1&return_module=Accounts&return_action=index&parenttab=Marketing
                            - img "Import Accounts" [ref=e161]
                        - cell "Export Accounts" [ref=e162]:
                          - link "Export Accounts" [ref=e163] [cursor=pointer]:
                            - /url: javascript:void(0)
                            - img "Export Accounts" [ref=e164]
                        - cell "Find Duplicates" [ref=e165]:
                          - link "Find Duplicates" [ref=e166] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Find Duplicates" [ref=e167]
                - cell [ref=e168]
                - cell "Open All Menu... Accounts Settings" [ref=e169]:
                  - table [ref=e170]:
                    - rowgroup [ref=e171]:
                      - row "Open All Menu... Accounts Settings" [ref=e172]:
                        - cell "Open All Menu..." [ref=e173]:
                          - link "Open All Menu..." [ref=e174] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Open All Menu..." [ref=e175]
                        - cell "Accounts Settings" [ref=e176]:
                          - link "Accounts Settings" [ref=e177] [cursor=pointer]:
                            - /url: index.php?module=Settings&action=ModuleManager&module_settings=true&formodule=Accounts&parenttab=Settings
                            - img "Accounts Settings" [ref=e178]
      - row [ref=e179]:
        - cell [ref=e180]
  - table [ref=e181]:
    - rowgroup [ref=e182]:
      - 'row "Search Go to Advanced Search Search for In Account No Search Now [x] A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 8 of 8 1 of 1 Filters : All New | Edit | Delete Account No Account Name Billing City Website Phone Assigned To Action ACC11 Test admin edit | del ACC12 Test2 admin edit | del ACC13 Test3 admin edit | del ACC14 Test4 admin edit | del ACC15 T1 admin edit | del ACC16 T2 admin edit | del ACC17 T3 admin edit | del ACC18 T4 admin edit | del Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 8 of 8 1 of 1 Create Mail Merge templates" [ref=e183]':
        - cell [ref=e184]:
          - img [ref=e185]
        - 'cell "Search Go to Advanced Search Search for In Account No Search Now [x] A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 8 of 8 1 of 1 Filters : All New | Edit | Delete Account No Account Name Billing City Website Phone Assigned To Action ACC11 Test admin edit | del ACC12 Test2 admin edit | del ACC13 Test3 admin edit | del ACC14 Test4 admin edit | del ACC15 T1 admin edit | del ACC16 T2 admin edit | del ACC17 T3 admin edit | del ACC18 T4 admin edit | del Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 8 of 8 1 of 1 Create Mail Merge templates" [ref=e186]':
          - table [ref=e189]:
            - rowgroup [ref=e190]:
              - row "Search Go to Advanced Search Search for In Account No Search Now [x]" [ref=e191]:
                - cell "Search Go to Advanced Search" [ref=e192]:
                  - text: Search
                  - link "Go to Advanced Search" [ref=e194] [cursor=pointer]:
                    - /url: "#"
                - cell "Search for" [ref=e195]
                - cell [ref=e196]:
                  - textbox [ref=e197]
                - cell "In" [ref=e198]
                - cell "Account No" [ref=e199]:
                  - combobox [ref=e201]:
                    - option "Account No" [selected]
                    - option "Account Name"
                    - option "Billing City"
                    - option "Website"
                    - option "Phone"
                    - option "Assigned To"
                - cell "Search Now" [ref=e202]:
                  - button "Search Now" [ref=e203]
                - cell "[x]" [ref=e204]
              - row "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" [ref=e205]:
                - cell "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" [ref=e206]:
                  - table [ref=e207]:
                    - rowgroup [ref=e208]:
                      - row "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" [ref=e209]:
                        - cell "A" [ref=e210] [cursor=pointer]
                        - cell "B" [ref=e211] [cursor=pointer]
                        - cell "C" [ref=e212] [cursor=pointer]
                        - cell "D" [ref=e213] [cursor=pointer]
                        - cell "E" [ref=e214] [cursor=pointer]
                        - cell "F" [ref=e215] [cursor=pointer]
                        - cell "G" [ref=e216] [cursor=pointer]
                        - cell "H" [ref=e217] [cursor=pointer]
                        - cell "I" [ref=e218] [cursor=pointer]
                        - cell "J" [ref=e219] [cursor=pointer]
                        - cell "K" [ref=e220] [cursor=pointer]
                        - cell "L" [ref=e221] [cursor=pointer]
                        - cell "M" [ref=e222] [cursor=pointer]
                        - cell "N" [ref=e223] [cursor=pointer]
                        - cell "O" [ref=e224] [cursor=pointer]
                        - cell "P" [ref=e225] [cursor=pointer]
                        - cell "Q" [ref=e226] [cursor=pointer]
                        - cell "R" [ref=e227] [cursor=pointer]
                        - cell "S" [ref=e228] [cursor=pointer]
                        - cell "T" [ref=e229] [cursor=pointer]
                        - cell "U" [ref=e230] [cursor=pointer]
                        - cell "V" [ref=e231] [cursor=pointer]
                        - cell "W" [ref=e232] [cursor=pointer]
                        - cell "X" [ref=e233] [cursor=pointer]
                        - cell "Y" [ref=e234] [cursor=pointer]
                        - cell "Z" [ref=e235] [cursor=pointer]
          - table [ref=e238]:
            - rowgroup [ref=e239]:
              - 'row "Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 8 of 8 1 of 1 Filters : All New | Edit | Delete Account No Account Name Billing City Website Phone Assigned To Action ACC11 Test admin edit | del ACC12 Test2 admin edit | del ACC13 Test3 admin edit | del ACC14 Test4 admin edit | del ACC15 T1 admin edit | del ACC16 T2 admin edit | del ACC17 T3 admin edit | del ACC18 T4 admin edit | del Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 8 of 8 1 of 1 Create Mail Merge templates" [ref=e240]':
                - 'cell "Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 8 of 8 1 of 1 Filters : All New | Edit | Delete Account No Account Name Billing City Website Phone Assigned To Action ACC11 Test admin edit | del ACC12 Test2 admin edit | del ACC13 Test3 admin edit | del ACC14 Test4 admin edit | del ACC15 T1 admin edit | del ACC16 T2 admin edit | del ACC17 T3 admin edit | del ACC18 T4 admin edit | del Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 8 of 8 1 of 1 Create Mail Merge templates" [ref=e241]':
                  - table [ref=e242]:
                    - rowgroup [ref=e243]:
                      - 'row "Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 8 of 8 1 of 1 Filters : All New | Edit | Delete" [ref=e244]':
                        - cell "Delete Mass Edit Send Mail Mailer Export Send SMS" [ref=e245]:
                          - button "Delete" [ref=e246]
                          - button "Mass Edit" [ref=e247]
                          - button "Send Mail" [active] [ref=e248]
                          - button "Mailer Export" [ref=e249]
                          - button "Send SMS" [ref=e250]
                        - cell "Showing Records 1 - 8 of 8" [ref=e251]
                        - cell "1 of 1" [ref=e252]:
                          - table [ref=e253]:
                            - rowgroup [ref=e254]:
                              - row "1 of 1" [ref=e255]:
                                - cell "1 of 1" [ref=e256]:
                                  - img [ref=e257]
                                  - img [ref=e258]
                                  - textbox [ref=e259]: "1"
                                  - text: of 1
                                  - img [ref=e260]
                                  - img [ref=e261]
                        - 'cell "Filters : All New | Edit | Delete" [ref=e262]':
                          - table [ref=e263]:
                            - rowgroup [ref=e264]:
                              - 'row "Filters : All New | Edit | Delete" [ref=e265]':
                                - cell "Filters :" [ref=e266]
                                - cell "All" [ref=e267]:
                                  - combobox [ref=e268]:
                                    - option "All" [selected]
                                    - option "New This Week"
                                    - option "Prospect Accounts"
                                - cell "New | Edit | Delete" [ref=e269]:
                                  - link "New" [ref=e270] [cursor=pointer]:
                                    - /url: index.php?module=Accounts&action=CustomView&parenttab=Marketing
                                  - text: "| Edit | Delete"
                  - table [ref=e272]:
                    - rowgroup [ref=e273]:
                      - row "Account No Account Name Billing City Website Phone Assigned To Action" [ref=e274]:
                        - cell [ref=e275]:
                          - checkbox [ref=e276]
                        - cell "Account No" [ref=e277]:
                          - link "Account No" [ref=e278] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Account Name" [ref=e279]:
                          - link "Account Name" [ref=e280] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Billing City" [ref=e281]:
                          - link "Billing City" [ref=e282] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Website" [ref=e283]:
                          - link "Website" [ref=e284] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Phone" [ref=e285]:
                          - link "Phone" [ref=e286] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Assigned To" [ref=e287]:
                          - link "Assigned To" [ref=e288] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Action" [ref=e289]
                      - row "ACC11 Test admin edit | del" [ref=e290]:
                        - cell [ref=e291]:
                          - checkbox [ref=e292]
                        - cell "ACC11" [ref=e293]
                        - cell "Test" [ref=e294]:
                          - link "Test" [ref=e295] [cursor=pointer]:
                            - /url: index.php?module=Accounts&parenttab=Marketing&action=DetailView&record=64
                        - cell [ref=e296]
                        - cell [ref=e297]:
                          - link:
                            - /url: http://
                        - cell [ref=e298]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e299]
                        - cell "edit | del" [ref=e300]:
                          - link "edit" [ref=e301] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=EditView&record=64&return_module=Accounts&return_action=index&parenttab=Marketing&return_viewname=4
                          - text: "|"
                          - link "del" [ref=e302] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DAccounts%26action%3DDelete%26record%3D64%26return_module%3DAccounts%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D4")
                      - row "ACC12 Test2 admin edit | del" [ref=e303]:
                        - cell [ref=e304]:
                          - checkbox [checked] [ref=e305]
                        - cell "ACC12" [ref=e306]
                        - cell "Test2" [ref=e307]:
                          - link "Test2" [ref=e308] [cursor=pointer]:
                            - /url: index.php?module=Accounts&parenttab=Marketing&action=DetailView&record=65
                        - cell [ref=e309]
                        - cell [ref=e310]:
                          - link:
                            - /url: http://
                        - cell [ref=e311]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e312]
                        - cell "edit | del" [ref=e313]:
                          - link "edit" [ref=e314] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=EditView&record=65&return_module=Accounts&return_action=index&parenttab=Marketing&return_viewname=4
                          - text: "|"
                          - link "del" [ref=e315] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DAccounts%26action%3DDelete%26record%3D65%26return_module%3DAccounts%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D4")
                      - row "ACC13 Test3 admin edit | del" [ref=e316]:
                        - cell [ref=e317]:
                          - checkbox [ref=e318]
                        - cell "ACC13" [ref=e319]
                        - cell "Test3" [ref=e320]:
                          - link "Test3" [ref=e321] [cursor=pointer]:
                            - /url: index.php?module=Accounts&parenttab=Marketing&action=DetailView&record=66
                        - cell [ref=e322]
                        - cell [ref=e323]:
                          - link:
                            - /url: http://
                        - cell [ref=e324]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e325]
                        - cell "edit | del" [ref=e326]:
                          - link "edit" [ref=e327] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=EditView&record=66&return_module=Accounts&return_action=index&parenttab=Marketing&return_viewname=4
                          - text: "|"
                          - link "del" [ref=e328] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DAccounts%26action%3DDelete%26record%3D66%26return_module%3DAccounts%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D4")
                      - row "ACC14 Test4 admin edit | del" [ref=e329]:
                        - cell [ref=e330]:
                          - checkbox [ref=e331]
                        - cell "ACC14" [ref=e332]
                        - cell "Test4" [ref=e333]:
                          - link "Test4" [ref=e334] [cursor=pointer]:
                            - /url: index.php?module=Accounts&parenttab=Marketing&action=DetailView&record=67
                        - cell [ref=e335]
                        - cell [ref=e336]:
                          - link:
                            - /url: http://
                        - cell [ref=e337]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e338]
                        - cell "edit | del" [ref=e339]:
                          - link "edit" [ref=e340] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=EditView&record=67&return_module=Accounts&return_action=index&parenttab=Marketing&return_viewname=4
                          - text: "|"
                          - link "del" [ref=e341] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DAccounts%26action%3DDelete%26record%3D67%26return_module%3DAccounts%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D4")
                      - row "ACC15 T1 admin edit | del" [ref=e342]:
                        - cell [ref=e343]:
                          - checkbox [ref=e344]
                        - cell "ACC15" [ref=e345]
                        - cell "T1" [ref=e346]:
                          - link "T1" [ref=e347] [cursor=pointer]:
                            - /url: index.php?module=Accounts&parenttab=Marketing&action=DetailView&record=68
                        - cell [ref=e348]
                        - cell [ref=e349]:
                          - link:
                            - /url: http://
                        - cell [ref=e350]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e351]
                        - cell "edit | del" [ref=e352]:
                          - link "edit" [ref=e353] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=EditView&record=68&return_module=Accounts&return_action=index&parenttab=Marketing&return_viewname=4
                          - text: "|"
                          - link "del" [ref=e354] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DAccounts%26action%3DDelete%26record%3D68%26return_module%3DAccounts%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D4")
                      - row "ACC16 T2 admin edit | del" [ref=e355]:
                        - cell [ref=e356]:
                          - checkbox [ref=e357]
                        - cell "ACC16" [ref=e358]
                        - cell "T2" [ref=e359]:
                          - link "T2" [ref=e360] [cursor=pointer]:
                            - /url: index.php?module=Accounts&parenttab=Marketing&action=DetailView&record=69
                        - cell [ref=e361]
                        - cell [ref=e362]:
                          - link:
                            - /url: http://
                        - cell [ref=e363]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e364]
                        - cell "edit | del" [ref=e365]:
                          - link "edit" [ref=e366] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=EditView&record=69&return_module=Accounts&return_action=index&parenttab=Marketing&return_viewname=4
                          - text: "|"
                          - link "del" [ref=e367] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DAccounts%26action%3DDelete%26record%3D69%26return_module%3DAccounts%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D4")
                      - row "ACC17 T3 admin edit | del" [ref=e368]:
                        - cell [ref=e369]:
                          - checkbox [ref=e370]
                        - cell "ACC17" [ref=e371]
                        - cell "T3" [ref=e372]:
                          - link "T3" [ref=e373] [cursor=pointer]:
                            - /url: index.php?module=Accounts&parenttab=Marketing&action=DetailView&record=70
                        - cell [ref=e374]
                        - cell [ref=e375]:
                          - link:
                            - /url: http://
                        - cell [ref=e376]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e377]
                        - cell "edit | del" [ref=e378]:
                          - link "edit" [ref=e379] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=EditView&record=70&return_module=Accounts&return_action=index&parenttab=Marketing&return_viewname=4
                          - text: "|"
                          - link "del" [ref=e380] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DAccounts%26action%3DDelete%26record%3D70%26return_module%3DAccounts%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D4")
                      - row "ACC18 T4 admin edit | del" [ref=e381]:
                        - cell [ref=e382]:
                          - checkbox [ref=e383]
                        - cell "ACC18" [ref=e384]
                        - cell "T4" [ref=e385]:
                          - link "T4" [ref=e386] [cursor=pointer]:
                            - /url: index.php?module=Accounts&parenttab=Marketing&action=DetailView&record=71
                        - cell [ref=e387]
                        - cell [ref=e388]:
                          - link:
                            - /url: http://
                        - cell [ref=e389]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e390]
                        - cell "edit | del" [ref=e391]:
                          - link "edit" [ref=e392] [cursor=pointer]:
                            - /url: index.php?module=Accounts&action=EditView&record=71&return_module=Accounts&return_action=index&parenttab=Marketing&return_viewname=4
                          - text: "|"
                          - link "del" [ref=e393] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DAccounts%26action%3DDelete%26record%3D71%26return_module%3DAccounts%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D4")
                  - table [ref=e394]:
                    - rowgroup [ref=e395]:
                      - row "Delete Mass Edit Send Mail Mailer Export Send SMS Showing Records 1 - 8 of 8 1 of 1 Create Mail Merge templates" [ref=e396]:
                        - cell "Delete Mass Edit Send Mail Mailer Export Send SMS" [ref=e397]:
                          - button "Delete" [ref=e398]
                          - button "Mass Edit" [ref=e399]
                          - button "Send Mail" [ref=e400]
                          - button "Mailer Export" [ref=e401]
                          - button "Send SMS" [ref=e402]
                        - cell "Showing Records 1 - 8 of 8" [ref=e403]
                        - cell "1 of 1" [ref=e404]:
                          - table [ref=e405]:
                            - rowgroup [ref=e406]:
                              - row "1 of 1" [ref=e407]:
                                - cell "1 of 1" [ref=e408]:
                                  - img [ref=e409]
                                  - img [ref=e410]
                                  - textbox [ref=e411]: "1"
                                  - text: of 1
                                  - img [ref=e412]
                                  - img [ref=e413]
                        - cell "Create Mail Merge templates" [ref=e414]:
                          - table [ref=e415]:
                            - rowgroup [ref=e416]:
                              - row "Create Mail Merge templates" [ref=e417]:
                                - cell "Create Mail Merge templates" [ref=e418]:
                                  - link "Create Mail Merge templates" [ref=e419] [cursor=pointer]:
                                    - /url: index.php?module=Settings&action=upload&tempModule=Accounts&parenttab=Settings
        - cell [ref=e420]:
          - img [ref=e421]
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
  19 |        await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  20 |        await page.screenshot({path:'./Screenshots/Listbox.png'});
  21 | 
  22 | 
  23 | })
  24 | 
  25 | test('verify Hover',async({page})=>{
  26 |       
  27 |     
  28 |       const url=await page.goto("http://localhost:8888/");
  29 |       await page.context({
  30 | 
  31 |         viewport:{width:1980,height:1020}
  32 |       })
  33 |       await page.locator("//input[@name='user_name']").fill("admin");
  34 |       await page.locator("//input[@name='user_password']").fill("admin");
  35 |       await page.locator("//input[@name='Login']").click();
  36 |       await page.waitForTimeout(1000);
  37 |       const hover=page.locator("//a[text()='Marketing']").hover();
  38 |       await page.waitForTimeout(1000);
  39 |       const Marketing_btn=page.locator("//div[@id='Marketing_sub']//a[text()='Accounts']");
  40 |       await Marketing_btn.click();
  41 |       await page.waitForTimeout(1000);
  42 | 
  43 |       const allCheck=await page.locator("//input[@name='selected_id']");
  44 | 
  45 |       for(let i=0;i< await allCheck.count();i++){
  46 | 
  47 |         await allCheck.nth(i).click();
  48 |         await page.waitForTimeout(1000);
  49 | 
  50 |       }
  51 | 
  52 | })
  53 | 
  54 | 
  55 | test('Handled Multipe window',async({page})=>{
  56 | 
  57 |     await page.goto("http://localhost:8888/");
  58 |      
  59 |    await page.content({
  60 | 
  61 |         viewport:{width:1980,height:1020}
  62 |     })
  63 | 
  64 |     await page.locator("//input[@name='user_name']").fill("admin");
  65 |     await page.locator("//input[@name='user_password']").fill("admin");
  66 |     await page.locator("//input[@name='Login']").click();
  67 | 
  68 |     console.log("Login Sucessfully");
  69 |     page.screenshot({path:'./Screenshots/java.png'});
  70 | 
  71 |     await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  72 |     console.log("Title Verifyed");
  73 | 
  74 |     await page.locator("//a[text()='Marketing']").hover();
  75 |     await page.waitForTimeout(1000);
  76 | 
  77 |     const accBtn=page.locator("//div[@id='Marketing_sub']//a[text()='Accounts']");
  78 |     await accBtn.click();
  79 |     await page.waitForTimeout(1000);
  80 |     await page.locator("//input[@id='65']").click();
  81 |     const popup=await page.locator("//input[@value='Send Mail'][1]").first().click();
  82 |     await page.waitForTimeout(2000);
> 83 |     const[newPage]=Promise.all([page.waitForEvent("page"),page.locator(popup)]);
     |                                      ^ Error: page.waitForEvent: Test ended.
  84 |     await newPage.waitForEvent(1000);
  85 |     await newPage.locator("//input[@name='subject']").fill("Test");
  86 | 
  87 |           
  88 | 
  89 | 
  90 | 
  91 | })
```