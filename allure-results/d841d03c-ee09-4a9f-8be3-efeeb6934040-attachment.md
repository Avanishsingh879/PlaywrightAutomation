# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CirfTest.spec.js >> Verify AllLinks
- Location: tests\CirfTest.spec.js:91:9

# Error details

```
TypeError: _console.Console.log is not a function
```

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
      - row "Marketing > Campaigns Create Campaign... Search in Campaigns... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Open All Menu... Campaigns Settings" [ref=e113]:
        - cell "Marketing > Campaigns" [ref=e114]:
          - text: Marketing >
          - link "Campaigns" [ref=e115] [cursor=pointer]:
            - /url: index.php?action=ListView&module=Campaigns&parenttab=Marketing
        - cell "Create Campaign... Search in Campaigns... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Open All Menu... Campaigns Settings" [ref=e116]:
          - table [ref=e117]:
            - rowgroup [ref=e118]:
              - row "Create Campaign... Search in Campaigns... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Open All Menu... Campaigns Settings" [ref=e119]:
                - cell [ref=e120]
                - cell "Create Campaign... Search in Campaigns..." [ref=e121]:
                  - table [ref=e122]:
                    - rowgroup [ref=e123]:
                      - row "Create Campaign... Search in Campaigns..." [ref=e124]:
                        - cell "Create Campaign... Search in Campaigns..." [ref=e125]:
                          - table [ref=e126]:
                            - rowgroup [ref=e127]:
                              - row "Create Campaign... Search in Campaigns..." [ref=e128]:
                                - cell "Create Campaign..." [ref=e129]:
                                  - link "Create Campaign..." [ref=e130] [cursor=pointer]:
                                    - /url: index.php?module=Campaigns&action=EditView&return_action=DetailView&parenttab=Marketing
                                    - img "Create Campaign..." [ref=e131]
                                - cell "Search in Campaigns..." [ref=e132]:
                                  - link "Search in Campaigns..." [ref=e133] [cursor=pointer]:
                                    - /url: javascript:;
                                    - img "Search in Campaigns..." [ref=e134]
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
                - cell [ref=e155]:
                  - table [ref=e156]:
                    - rowgroup [ref=e157]:
                      - row [ref=e158]:
                        - cell [ref=e159]:
                          - img [ref=e160]
                        - cell [ref=e161]:
                          - img [ref=e162]
                        - cell [ref=e163]:
                          - img [ref=e164]
                - cell [ref=e165]
                - cell "Open All Menu... Campaigns Settings" [ref=e166]:
                  - table [ref=e167]:
                    - rowgroup [ref=e168]:
                      - row "Open All Menu... Campaigns Settings" [ref=e169]:
                        - cell "Open All Menu..." [ref=e170]:
                          - link "Open All Menu..." [ref=e171] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Open All Menu..." [ref=e172]
                        - cell "Campaigns Settings" [ref=e173]:
                          - link "Campaigns Settings" [ref=e174] [cursor=pointer]:
                            - /url: index.php?module=Settings&action=ModuleManager&module_settings=true&formodule=Campaigns&parenttab=Settings
                            - img "Campaigns Settings" [ref=e175]
      - row [ref=e176]:
        - cell [ref=e177]
  - table [ref=e178]:
    - rowgroup [ref=e179]:
      - row [ref=e180]:
        - cell [ref=e181]:
          - img [ref=e182]
        - cell [ref=e183]:
          - table [ref=e186]:
            - rowgroup [ref=e187]:
              - row "Search Go to Advanced Search Search for In Campaign No Search Now [x]" [ref=e188]:
                - cell "Search Go to Advanced Search" [ref=e189]:
                  - text: Search
                  - link "Go to Advanced Search" [ref=e191] [cursor=pointer]:
                    - /url: "#"
                - cell "Search for" [ref=e192]
                - cell [ref=e193]:
                  - textbox [ref=e194]
                - cell "In" [ref=e195]
                - cell "Campaign No" [ref=e196]:
                  - combobox [ref=e198]:
                    - option "Campaign No" [selected]
                    - option "Campaign Name"
                    - option "Campaign Type"
                    - option "Campaign Status"
                    - option "Expected Revenue"
                    - option "Expected Close Date"
                    - option "Assigned To"
                - cell "Search Now" [ref=e199]:
                  - button "Search Now" [ref=e200]
                - cell "[x]" [ref=e201]
              - row "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" [ref=e202]:
                - cell "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" [ref=e203]:
                  - table [ref=e204]:
                    - rowgroup [ref=e205]:
                      - row "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" [ref=e206]:
                        - cell "A" [ref=e207] [cursor=pointer]
                        - cell "B" [ref=e208] [cursor=pointer]
                        - cell "C" [ref=e209] [cursor=pointer]
                        - cell "D" [ref=e210] [cursor=pointer]
                        - cell "E" [ref=e211] [cursor=pointer]
                        - cell "F" [ref=e212] [cursor=pointer]
                        - cell "G" [ref=e213] [cursor=pointer]
                        - cell "H" [ref=e214] [cursor=pointer]
                        - cell "I" [ref=e215] [cursor=pointer]
                        - cell "J" [ref=e216] [cursor=pointer]
                        - cell "K" [ref=e217] [cursor=pointer]
                        - cell "L" [ref=e218] [cursor=pointer]
                        - cell "M" [ref=e219] [cursor=pointer]
                        - cell "N" [ref=e220] [cursor=pointer]
                        - cell "O" [ref=e221] [cursor=pointer]
                        - cell "P" [ref=e222] [cursor=pointer]
                        - cell "Q" [ref=e223] [cursor=pointer]
                        - cell "R" [ref=e224] [cursor=pointer]
                        - cell "S" [ref=e225] [cursor=pointer]
                        - cell "T" [ref=e226] [cursor=pointer]
                        - cell "U" [ref=e227] [cursor=pointer]
                        - cell "V" [ref=e228] [cursor=pointer]
                        - cell "W" [ref=e229] [cursor=pointer]
                        - cell "X" [ref=e230] [cursor=pointer]
                        - cell "Y" [ref=e231] [cursor=pointer]
                        - cell "Z" [ref=e232] [cursor=pointer]
          - table [ref=e235]:
            - rowgroup [ref=e236]:
              - 'row "Delete Mass Edit Showing Records 1 - 10 of 10 1 of 1 Filters : All New | Edit | Delete Campaign No Campaign Name Campaign Type Campaign Status Expected Revenue Expected Close Date Assigned To Action CAM10 Test9 --None-- --None-- 0 2025-06-02 admin edit | del CAM9 Test8 --None-- --None-- 0 2025-06-02 admin edit | del CAM8 Test7 --None-- --None-- 0 2025-06-02 admin edit | del CAM7 Test7 --None-- --None-- 0 2025-06-02 admin edit | del CAM6 Test6 --None-- --None-- 0 2025-06-02 admin edit | del CAM5 Test5 --None-- --None-- 0 2025-06-02 admin edit | del CAM4 Test4 --None-- --None-- 0 2025-06-02 admin edit | del CAM3 Test2 --None-- --None-- 0 2025-06-02 admin edit | del CAM2 Test1 --None-- --None-- 0 2025-06-02 admin edit | del CAM1 Test --None-- --None-- 0 2025-06-02 admin edit | del Delete Mass Edit Showing Records 1 - 10 of 10 1 of 1" [ref=e237]':
                - 'cell "Delete Mass Edit Showing Records 1 - 10 of 10 1 of 1 Filters : All New | Edit | Delete Campaign No Campaign Name Campaign Type Campaign Status Expected Revenue Expected Close Date Assigned To Action CAM10 Test9 --None-- --None-- 0 2025-06-02 admin edit | del CAM9 Test8 --None-- --None-- 0 2025-06-02 admin edit | del CAM8 Test7 --None-- --None-- 0 2025-06-02 admin edit | del CAM7 Test7 --None-- --None-- 0 2025-06-02 admin edit | del CAM6 Test6 --None-- --None-- 0 2025-06-02 admin edit | del CAM5 Test5 --None-- --None-- 0 2025-06-02 admin edit | del CAM4 Test4 --None-- --None-- 0 2025-06-02 admin edit | del CAM3 Test2 --None-- --None-- 0 2025-06-02 admin edit | del CAM2 Test1 --None-- --None-- 0 2025-06-02 admin edit | del CAM1 Test --None-- --None-- 0 2025-06-02 admin edit | del Delete Mass Edit Showing Records 1 - 10 of 10 1 of 1" [ref=e238]':
                  - table [ref=e239]:
                    - rowgroup [ref=e240]:
                      - 'row "Delete Mass Edit Showing Records 1 - 10 of 10 1 of 1 Filters : All New | Edit | Delete" [ref=e241]':
                        - cell "Delete Mass Edit" [ref=e242]:
                          - button "Delete" [ref=e243]
                          - button "Mass Edit" [ref=e244]
                        - cell "Showing Records 1 - 10 of 10" [ref=e245]
                        - cell "1 of 1" [ref=e246]:
                          - table [ref=e247]:
                            - rowgroup [ref=e248]:
                              - row "1 of 1" [ref=e249]:
                                - cell "1 of 1" [ref=e250]:
                                  - img [ref=e251]
                                  - img [ref=e252]
                                  - textbox [ref=e253]: "1"
                                  - text: of 1
                                  - img [ref=e254]
                                  - img [ref=e255]
                        - 'cell "Filters : All New | Edit | Delete" [ref=e256]':
                          - table [ref=e257]:
                            - rowgroup [ref=e258]:
                              - 'row "Filters : All New | Edit | Delete" [ref=e259]':
                                - cell "Filters :" [ref=e260]
                                - cell "All" [ref=e261]:
                                  - combobox [ref=e262]:
                                    - option "All" [selected]
                                - cell "New | Edit | Delete" [ref=e263]:
                                  - link "New" [ref=e264] [cursor=pointer]:
                                    - /url: index.php?module=Campaigns&action=CustomView&parenttab=Marketing
                                  - text: "| Edit | Delete"
                  - table [ref=e266]:
                    - rowgroup [ref=e267]:
                      - row "Campaign No Campaign Name Campaign Type Campaign Status Expected Revenue Expected Close Date Assigned To Action" [ref=e268]:
                        - cell [ref=e269]:
                          - checkbox [ref=e270]
                        - cell "Campaign No" [ref=e271]:
                          - link "Campaign No" [ref=e272] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Campaign Name" [ref=e273]:
                          - link "Campaign Name" [ref=e274] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Campaign Type" [ref=e275]:
                          - link "Campaign Type" [ref=e276] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Campaign Status" [ref=e277]:
                          - link "Campaign Status" [ref=e278] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Expected Revenue" [ref=e279]:
                          - link "Expected Revenue" [ref=e280] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Expected Close Date" [ref=e281]:
                          - link "Expected Close Date" [ref=e282] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Assigned To" [ref=e283]:
                          - link "Assigned To" [ref=e284] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Action" [ref=e285]
                      - row "CAM10 Test9 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e286]:
                        - cell [ref=e287]:
                          - checkbox [ref=e288]
                        - cell "CAM10" [ref=e289]
                        - cell "Test9" [ref=e290]:
                          - link "Test9" [ref=e291] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=48
                        - cell "--None--" [ref=e292]
                        - cell "--None--" [ref=e293]
                        - cell "0" [ref=e294]
                        - cell "2025-06-02" [ref=e295]
                        - cell "admin" [ref=e296]
                        - cell "edit | del" [ref=e297]:
                          - link "edit" [ref=e298] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=48&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e299] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D48%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM9 Test8 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e300]:
                        - cell [ref=e301]:
                          - checkbox [ref=e302]
                        - cell "CAM9" [ref=e303]
                        - cell "Test8" [ref=e304]:
                          - link "Test8" [ref=e305] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=47
                        - cell "--None--" [ref=e306]
                        - cell "--None--" [ref=e307]
                        - cell "0" [ref=e308]
                        - cell "2025-06-02" [ref=e309]
                        - cell "admin" [ref=e310]
                        - cell "edit | del" [ref=e311]:
                          - link "edit" [ref=e312] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=47&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e313] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D47%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM8 Test7 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e314]:
                        - cell [ref=e315]:
                          - checkbox [ref=e316]
                        - cell "CAM8" [ref=e317]
                        - cell "Test7" [ref=e318]:
                          - link "Test7" [ref=e319] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=46
                        - cell "--None--" [ref=e320]
                        - cell "--None--" [ref=e321]
                        - cell "0" [ref=e322]
                        - cell "2025-06-02" [ref=e323]
                        - cell "admin" [ref=e324]
                        - cell "edit | del" [ref=e325]:
                          - link "edit" [ref=e326] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=46&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e327] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D46%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM7 Test7 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e328]:
                        - cell [ref=e329]:
                          - checkbox [ref=e330]
                        - cell "CAM7" [ref=e331]
                        - cell "Test7" [ref=e332]:
                          - link "Test7" [ref=e333] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=45
                        - cell "--None--" [ref=e334]
                        - cell "--None--" [ref=e335]
                        - cell "0" [ref=e336]
                        - cell "2025-06-02" [ref=e337]
                        - cell "admin" [ref=e338]
                        - cell "edit | del" [ref=e339]:
                          - link "edit" [ref=e340] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=45&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e341] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D45%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM6 Test6 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e342]:
                        - cell [ref=e343]:
                          - checkbox [ref=e344]
                        - cell "CAM6" [ref=e345]
                        - cell "Test6" [ref=e346]:
                          - link "Test6" [ref=e347] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=44
                        - cell "--None--" [ref=e348]
                        - cell "--None--" [ref=e349]
                        - cell "0" [ref=e350]
                        - cell "2025-06-02" [ref=e351]
                        - cell "admin" [ref=e352]
                        - cell "edit | del" [ref=e353]:
                          - link "edit" [ref=e354] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=44&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e355] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D44%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM5 Test5 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e356]:
                        - cell [ref=e357]:
                          - checkbox [ref=e358]
                        - cell "CAM5" [ref=e359]
                        - cell "Test5" [ref=e360]:
                          - link "Test5" [ref=e361] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=43
                        - cell "--None--" [ref=e362]
                        - cell "--None--" [ref=e363]
                        - cell "0" [ref=e364]
                        - cell "2025-06-02" [ref=e365]
                        - cell "admin" [ref=e366]
                        - cell "edit | del" [ref=e367]:
                          - link "edit" [ref=e368] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=43&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e369] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D43%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM4 Test4 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e370]:
                        - cell [ref=e371]:
                          - checkbox [ref=e372]
                        - cell "CAM4" [ref=e373]
                        - cell "Test4" [ref=e374]:
                          - link "Test4" [ref=e375] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=42
                        - cell "--None--" [ref=e376]
                        - cell "--None--" [ref=e377]
                        - cell "0" [ref=e378]
                        - cell "2025-06-02" [ref=e379]
                        - cell "admin" [ref=e380]
                        - cell "edit | del" [ref=e381]:
                          - link "edit" [ref=e382] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=42&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e383] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D42%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM3 Test2 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e384]:
                        - cell [ref=e385]:
                          - checkbox [ref=e386]
                        - cell "CAM3" [ref=e387]
                        - cell "Test2" [ref=e388]:
                          - link "Test2" [ref=e389] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=41
                        - cell "--None--" [ref=e390]
                        - cell "--None--" [ref=e391]
                        - cell "0" [ref=e392]
                        - cell "2025-06-02" [ref=e393]
                        - cell "admin" [ref=e394]
                        - cell "edit | del" [ref=e395]:
                          - link "edit" [ref=e396] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=41&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e397] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D41%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM2 Test1 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e398]:
                        - cell [ref=e399]:
                          - checkbox [ref=e400]
                        - cell "CAM2" [ref=e401]
                        - cell "Test1" [ref=e402]:
                          - link "Test1" [ref=e403] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=40
                        - cell "--None--" [ref=e404]
                        - cell "--None--" [ref=e405]
                        - cell "0" [ref=e406]
                        - cell "2025-06-02" [ref=e407]
                        - cell "admin" [ref=e408]
                        - cell "edit | del" [ref=e409]:
                          - link "edit" [ref=e410] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=40&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e411] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D40%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM1 Test --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e412]:
                        - cell [ref=e413]:
                          - checkbox [ref=e414]
                        - cell "CAM1" [ref=e415]
                        - cell "Test" [ref=e416]:
                          - link "Test" [ref=e417] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=39
                        - cell "--None--" [ref=e418]
                        - cell "--None--" [ref=e419]
                        - cell "0" [ref=e420]
                        - cell "2025-06-02" [ref=e421]
                        - cell "admin" [ref=e422]
                        - cell "edit | del" [ref=e423]:
                          - link "edit" [ref=e424] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=39&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e425] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D39%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                  - table [ref=e426]:
                    - rowgroup [ref=e427]:
                      - row "Delete Mass Edit Showing Records 1 - 10 of 10 1 of 1" [ref=e428]:
                        - cell "Delete Mass Edit" [ref=e429]:
                          - button "Delete" [ref=e430]
                          - button "Mass Edit" [ref=e431]
                        - cell "Showing Records 1 - 10 of 10" [ref=e432]
                        - cell "1 of 1" [ref=e433]:
                          - table [ref=e434]:
                            - rowgroup [ref=e435]:
                              - row "1 of 1" [ref=e436]:
                                - cell "1 of 1" [ref=e437]:
                                  - img [ref=e438]
                                  - img [ref=e439]
                                  - textbox [ref=e440]: "1"
                                  - text: of 1
                                  - img [ref=e441]
                                  - img [ref=e442]
                        - cell [ref=e443]:
                          - table:
                            - rowgroup:
                              - row
        - cell [ref=e444]:
          - img [ref=e445]
  - table [ref=e446]:
    - rowgroup [ref=e447]:
      - row "vtiger CRM 5.2.1 © 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e448]:
        - cell "vtiger CRM 5.2.1" [ref=e449]
        - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e450]:
          - generic [ref=e451]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=e452] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=e453] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=e454] [cursor=pointer]:
              - /url: http://www.vtiger.com/products/crm/privacy_policy.html
```

# Test source

```ts
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
  102 |         const alllinks=page.locator("//a[@class='searchAlph']");
  103 | 
  104 |         for(let i=0;i< await alllinks.count();i++){
  105 | 
  106 |             await alllinks.nth(i).click();
  107 |             page.waitForTimeout(1000);
  108 |         }
  109 | 
> 110 |         page.waitForTimeout(1000);
      |              ^ Error: page.waitForTimeout: Test ended.
  111 |         Console.log("All Links Verifyed")
  112 |     })
  113 | 
  114 | 
```