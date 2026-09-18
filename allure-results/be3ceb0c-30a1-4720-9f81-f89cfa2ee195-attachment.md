# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CirfTest.spec.js >> verify multiple window
- Location: tests\CirfTest.spec.js:58:6

# Error details

```
TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
```

```
Error: locator.click: Error: strict mode violation: locator('//input[@value=\'Send Mail\']') resolved to 2 elements:
    1) <input type="button" value="Send Mail" class="crmbutton small edit" onclick="return eMail('Contacts',this);"/> aka getByRole('button', { name: 'Send Mail' }).first()
    2) <input type="button" value="Send Mail" class="crmbutton small edit" onclick="return eMail('Contacts',this)"/> aka getByRole('button', { name: 'Send Mail' }).nth(1)

Call log:
  - waiting for locator('//input[@value=\'Send Mail\']')

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
      - row "Support > Contacts Create Contact... Search in Contacts... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Import Contacts Export Contacts Find Duplicates Open All Menu... Contacts Settings" [ref=e121]:
        - cell "Support > Contacts" [ref=e122]:
          - text: Support >
          - link "Contacts" [ref=e123] [cursor=pointer]:
            - /url: index.php?action=ListView&module=Contacts&parenttab=Support
        - cell "Create Contact... Search in Contacts... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Import Contacts Export Contacts Find Duplicates Open All Menu... Contacts Settings" [ref=e124]:
          - table [ref=e125]:
            - rowgroup [ref=e126]:
              - row "Create Contact... Search in Contacts... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Import Contacts Export Contacts Find Duplicates Open All Menu... Contacts Settings" [ref=e127]:
                - cell [ref=e128]
                - cell "Create Contact... Search in Contacts..." [ref=e129]:
                  - table [ref=e130]:
                    - rowgroup [ref=e131]:
                      - row "Create Contact... Search in Contacts..." [ref=e132]:
                        - cell "Create Contact... Search in Contacts..." [ref=e133]:
                          - table [ref=e134]:
                            - rowgroup [ref=e135]:
                              - row "Create Contact... Search in Contacts..." [ref=e136]:
                                - cell "Create Contact..." [ref=e137]:
                                  - link "Create Contact..." [ref=e138] [cursor=pointer]:
                                    - /url: index.php?module=Contacts&action=EditView&return_action=DetailView&parenttab=Support
                                    - img "Create Contact..." [ref=e139]
                                - cell "Search in Contacts..." [ref=e140]:
                                  - link "Search in Contacts..." [ref=e141] [cursor=pointer]:
                                    - /url: javascript:;
                                    - img "Search in Contacts..." [ref=e142]
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
                - cell "Import Contacts Export Contacts Find Duplicates" [ref=e163]:
                  - table [ref=e164]:
                    - rowgroup [ref=e165]:
                      - row "Import Contacts Export Contacts Find Duplicates" [ref=e166]:
                        - cell "Import Contacts" [ref=e167]:
                          - link "Import Contacts" [ref=e168] [cursor=pointer]:
                            - /url: index.php?module=Contacts&action=Import&step=1&return_module=Contacts&return_action=index&parenttab=Support
                            - img "Import Contacts" [ref=e169]
                        - cell "Export Contacts" [ref=e170]:
                          - link "Export Contacts" [ref=e171] [cursor=pointer]:
                            - /url: javascript:void(0)
                            - img "Export Contacts" [ref=e172]
                        - cell "Find Duplicates" [ref=e173]:
                          - link "Find Duplicates" [ref=e174] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Find Duplicates" [ref=e175]
                - cell [ref=e176]
                - cell "Open All Menu... Contacts Settings" [ref=e177]:
                  - table [ref=e178]:
                    - rowgroup [ref=e179]:
                      - row "Open All Menu... Contacts Settings" [ref=e180]:
                        - cell "Open All Menu..." [ref=e181]:
                          - link "Open All Menu..." [ref=e182] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Open All Menu..." [ref=e183]
                        - cell "Contacts Settings" [ref=e184]:
                          - link "Contacts Settings" [ref=e185] [cursor=pointer]:
                            - /url: index.php?module=Settings&action=ModuleManager&module_settings=true&formodule=Contacts&parenttab=Settings
                            - img "Contacts Settings" [ref=e186]
      - row [ref=e187]:
        - cell [ref=e188]
  - table [ref=e189]:
    - rowgroup [ref=e190]:
      - 'row "Search Go to Advanced Search Search for In Contact Id Search Now [x] A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Delete Mass Edit Send Mail Send SMS Showing Records 1 - 1 of 1 1 of 1 Filters : All New | Edit | Delete Contact Id First Name Last Name Title Account Name Email Office Phone Assigned To Action CON2 Contacts Test -- admin edit | del Delete Mass Edit Send Mail Send SMS Showing Records 1 - 1 of 1 1 of 1 Create Mail Merge templates" [ref=e191]':
        - cell [ref=e192]:
          - img [ref=e193]
        - 'cell "Search Go to Advanced Search Search for In Contact Id Search Now [x] A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Delete Mass Edit Send Mail Send SMS Showing Records 1 - 1 of 1 1 of 1 Filters : All New | Edit | Delete Contact Id First Name Last Name Title Account Name Email Office Phone Assigned To Action CON2 Contacts Test -- admin edit | del Delete Mass Edit Send Mail Send SMS Showing Records 1 - 1 of 1 1 of 1 Create Mail Merge templates" [ref=e194]':
          - table [ref=e197]:
            - rowgroup [ref=e198]:
              - row "Search Go to Advanced Search Search for In Contact Id Search Now [x]" [ref=e199]:
                - cell "Search Go to Advanced Search" [ref=e200]:
                  - text: Search
                  - link "Go to Advanced Search" [ref=e202] [cursor=pointer]:
                    - /url: "#"
                - cell "Search for" [ref=e203]
                - cell [ref=e204]:
                  - textbox [ref=e205]
                - cell "In" [ref=e206]
                - cell "Contact Id" [ref=e207]:
                  - combobox [ref=e209]:
                    - option "Contact Id" [selected]
                    - option "First Name"
                    - option "Last Name"
                    - option "Title"
                    - option "Account Name"
                    - option "Email"
                    - option "Office Phone"
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
              - 'row "Delete Mass Edit Send Mail Send SMS Showing Records 1 - 1 of 1 1 of 1 Filters : All New | Edit | Delete Contact Id First Name Last Name Title Account Name Email Office Phone Assigned To Action CON2 Contacts Test -- admin edit | del Delete Mass Edit Send Mail Send SMS Showing Records 1 - 1 of 1 1 of 1 Create Mail Merge templates" [ref=e248]':
                - 'cell "Delete Mass Edit Send Mail Send SMS Showing Records 1 - 1 of 1 1 of 1 Filters : All New | Edit | Delete Contact Id First Name Last Name Title Account Name Email Office Phone Assigned To Action CON2 Contacts Test -- admin edit | del Delete Mass Edit Send Mail Send SMS Showing Records 1 - 1 of 1 1 of 1 Create Mail Merge templates" [ref=e249]':
                  - table [ref=e250]:
                    - rowgroup [ref=e251]:
                      - 'row "Delete Mass Edit Send Mail Send SMS Showing Records 1 - 1 of 1 1 of 1 Filters : All New | Edit | Delete" [ref=e252]':
                        - cell "Delete Mass Edit Send Mail Send SMS" [ref=e253]:
                          - button "Delete" [ref=e254]
                          - button "Mass Edit" [ref=e255]
                          - button "Send Mail" [ref=e256]
                          - button "Send SMS" [ref=e257]
                        - cell "Showing Records 1 - 1 of 1" [ref=e258]
                        - cell "1 of 1" [ref=e259]:
                          - table [ref=e260]:
                            - rowgroup [ref=e261]:
                              - row "1 of 1" [ref=e262]:
                                - cell "1 of 1" [ref=e263]:
                                  - img [ref=e264]
                                  - img [ref=e265]
                                  - textbox [ref=e266]: "1"
                                  - text: of 1
                                  - img [ref=e267]
                                  - img [ref=e268]
                        - 'cell "Filters : All New | Edit | Delete" [ref=e269]':
                          - table [ref=e270]:
                            - rowgroup [ref=e271]:
                              - 'row "Filters : All New | Edit | Delete" [ref=e272]':
                                - cell "Filters :" [ref=e273]
                                - cell "All" [ref=e274]:
                                  - combobox [ref=e275]:
                                    - option "All" [selected]
                                    - option "Contacts Address"
                                    - option "Todays Birthday"
                                - cell "New | Edit | Delete" [ref=e276]:
                                  - link "New" [ref=e277] [cursor=pointer]:
                                    - /url: index.php?module=Contacts&action=CustomView&parenttab=Support
                                  - text: "| Edit | Delete"
                  - table [ref=e279]:
                    - rowgroup [ref=e280]:
                      - row "Contact Id First Name Last Name Title Account Name Email Office Phone Assigned To Action" [ref=e281]:
                        - cell [ref=e282]:
                          - checkbox [checked] [ref=e283]
                        - cell "Contact Id" [ref=e284]:
                          - link "Contact Id" [ref=e285] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "First Name" [ref=e286]:
                          - link "First Name" [ref=e287] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Last Name" [ref=e288]:
                          - link "Last Name" [ref=e289] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Title" [ref=e290]:
                          - link "Title" [ref=e291] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Account Name" [ref=e292]
                        - cell "Email" [ref=e293]:
                          - link "Email" [ref=e294] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Office Phone" [ref=e295]:
                          - link "Office Phone" [ref=e296] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Assigned To" [ref=e297]:
                          - link "Assigned To" [ref=e298] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Action" [ref=e299]
                      - row "CON2 Contacts Test -- admin edit | del" [ref=e300]:
                        - cell [ref=e301]:
                          - checkbox [checked] [active] [ref=e302]
                        - cell "CON2" [ref=e303]
                        - cell "Contacts" [ref=e304]:
                          - link "Contacts":
                            - /url: index.php?module=Contacts&parenttab=Support&action=DetailView&record=72
                        - cell "Test" [ref=e305]:
                          - link "Test" [ref=e306] [cursor=pointer]:
                            - /url: index.php?module=Contacts&parenttab=Support&action=DetailView&record=72
                        - cell [ref=e307]
                        - cell "--" [ref=e308]
                        - cell [ref=e309]:
                          - link:
                            - /url: javascript:InternalMailer(72,78,'email','Contacts','record_id');
                        - cell [ref=e310]:
                          - link:
                            - /url: javascript:;
                        - cell "admin" [ref=e311]
                        - cell "edit | del" [ref=e312]:
                          - link "edit" [ref=e313] [cursor=pointer]:
                            - /url: index.php?module=Contacts&action=EditView&record=72&return_module=Contacts&return_action=index&parenttab=Support&return_viewname=7
                          - text: "|"
                          - link "del" [ref=e314] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DContacts%26action%3DDelete%26record%3D72%26return_module%3DContacts%26return_action%3Dindex%26parenttab%3DSupport%26return_viewname%3D7")
                  - table [ref=e315]:
                    - rowgroup [ref=e316]:
                      - row "Delete Mass Edit Send Mail Send SMS Showing Records 1 - 1 of 1 1 of 1 Create Mail Merge templates" [ref=e317]:
                        - cell "Delete Mass Edit Send Mail Send SMS" [ref=e318]:
                          - button "Delete" [ref=e319]
                          - button "Mass Edit" [ref=e320]
                          - button "Send Mail" [ref=e321]
                          - button "Send SMS" [ref=e322]
                        - cell "Showing Records 1 - 1 of 1" [ref=e323]
                        - cell "1 of 1" [ref=e324]:
                          - table [ref=e325]:
                            - rowgroup [ref=e326]:
                              - row "1 of 1" [ref=e327]:
                                - cell "1 of 1" [ref=e328]:
                                  - img [ref=e329]
                                  - img [ref=e330]
                                  - textbox [ref=e331]: "1"
                                  - text: of 1
                                  - img [ref=e332]
                                  - img [ref=e333]
                        - cell "Create Mail Merge templates" [ref=e334]:
                          - table [ref=e335]:
                            - rowgroup [ref=e336]:
                              - row "Create Mail Merge templates" [ref=e337]:
                                - cell "Create Mail Merge templates" [ref=e338]:
                                  - link "Create Mail Merge templates" [ref=e339] [cursor=pointer]:
                                    - /url: index.php?module=Settings&action=upload&tempModule=Contacts&parenttab=Settings
        - cell [ref=e340]:
          - img [ref=e341]
  - table [ref=e342]:
    - rowgroup [ref=e343]:
      - row "vtiger CRM 5.2.1 © 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e344]:
        - cell "vtiger CRM 5.2.1" [ref=e345]
        - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e346]:
          - generic [ref=e347]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=e348] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=e349] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=e350] [cursor=pointer]:
              - /url: http://www.vtiger.com/products/crm/privacy_policy.html
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | import { console } from "inspector";
  3  | 
  4  | test('Verify Login page',async({browser})=>{
  5  | 
  6  |         const context= await browser.newContext({
  7  | 
  8  |             viewport:{width:1980,height:1020}
  9  |          })
  10 | 
  11 |          const page=await context.newPage();
  12 |          await page.goto("http://localhost:8888/");
  13 |          await page.locator("//input[@name='user_name']").fill("admin");
  14 |          await page.locator("//input[@name='user_password']").fill("admin");
  15 |          await page.locator("//input[@name='Login']").click();
  16 |          console.log("Login Sucessfully");
  17 |          await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  18 | 
  19 | })
  20 | 
  21 |  test('Verify Hover',async({page})=>{
  22 | 
  23 |        await page.goto("http://localhost:8888/");
  24 |        await page.locator("//input[@name='user_name']").fill("admin");
  25 |        await page.locator("//input[@name='user_password']").fill("admin");
  26 |        await page.locator("//input[@name='Login']").click();
  27 |        await page.waitForTimeout(1000);
  28 |        await page.screenshot({path:'./Screenshots/TestDataa.png'});
  29 |        await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  30 |        await page.locator("//a[text()='Marketing']").hover();
  31 |        console.log("Hover Verifyed");
  32 | 
  33 |  })
  34 | 
  35 |  test('Verify AllCheckList',async({page})=>{
  36 | 
  37 |       await page.goto("http://localhost:8888/");
  38 |       await page.locator("//input[@name='user_name']").fill("admin");
  39 |       await page.locator("//input[@name='user_password']").fill("admin");
  40 |       await page.locator("//input[@name='Login']").click();
  41 |       console.log("Login Sucessfully");
  42 |       await page.waitForTimeout(1000);
  43 |       await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  44 |       await page.locator("//a[text()='Support']").hover();
  45 |       await page.waitForTimeout(1000);
  46 |       const accountbtn=await page.locator("//div[@id='Support_sub']//a[text()='Accounts']");
  47 |       accountbtn.click();
  48 |       await page.waitForTimeout(4000);
  49 |       const ListData=page.locator("//input[@name='selected_id']");
  50 |       for(let i=0;i< await ListData.count();i++){
  51 | 
  52 |             await ListData.nth(i).click();
  53 |             await page.waitForTimeout(1000);
  54 |       }
  55 |  })
  56 | 
  57 | 
  58 |  test('verify multiple window',async({page})=>{
  59 | 
  60 |          await page.goto("http://localhost:8888/");
  61 |          await page.locator("//input[@name='user_name']").fill("admin");
  62 |          await page.locator("//input[@name='user_password']").fill("admin");
  63 |          await page.locator("//input[@name='Login']").click();
  64 |          await page.waitForTimeout(1000);
  65 |          await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  66 |          await page.screenshot({path: './Screenshots/Dataa.png'});
  67 |          await page.locator("//a[text()='Support']").hover();
  68 |          await page.waitForTimeout(1000);
  69 |         const contactt= await page.locator("//div[@id='Support_sub']//a[text()='Contacts']");
  70 |         await contactt.click();
  71 |         await page.waitForTimeout(2000);
  72 |         await page.locator("//input[@id='72']").click();
> 73 |         const[newPage]=Promise.all([page.waitForEvent('popup'),page.locator("//input[@value='Send Mail']").click()])
     |                                                                                                            ^ Error: locator.click: Error: strict mode violation: locator('//input[@value=\'Send Mail\']') resolved to 2 elements:
  74 |         await newPage.waitForTimeout(1000);
  75 |         const sub=await newPage.locator("//input[@name='subject']");
  76 |         await sub.fill("Test");
  77 |         await newPage.waitForTimeout(1000);
  78 |         newPage.screenshot({path: './Screenshots/Crif.png'});
  79 |       
  80 | 
  81 |  })
```