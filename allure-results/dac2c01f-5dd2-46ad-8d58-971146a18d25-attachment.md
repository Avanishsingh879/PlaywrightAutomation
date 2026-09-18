# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Verify_Listbox.spec.js >> Verify list
- Location: tests\Verify_Listbox.spec.js:4:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  2
+ Received  + 10

  Array [
-   "Campaign Name",
-   "Campaign Type",
+   "
+ 			 Campaign No
+ Campaign Name
+ Campaign Type
+ Campaign Status
+ Expected Revenue
+ Expected Close Date
+ Assigned To
+
+ 			",
  ]
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
  - table [ref=e110]:
    - rowgroup [ref=e111]:
      - row "Campaigns" [ref=e112]:
        - cell "Campaigns" [ref=e113]:
          - link "Campaigns" [ref=e114] [cursor=pointer]:
            - /url: index.php?module=Campaigns&action=index&parenttab=Marketing
      - row "Accounts" [ref=e115]:
        - cell "Accounts" [ref=e116]:
          - link "Accounts" [ref=e117] [cursor=pointer]:
            - /url: index.php?module=Accounts&action=index&parenttab=Marketing
      - row "Contacts" [ref=e118]:
        - cell "Contacts" [ref=e119]:
          - link "Contacts" [ref=e120] [cursor=pointer]:
            - /url: index.php?module=Contacts&action=index&parenttab=Marketing
      - row "Webmail" [ref=e121]:
        - cell "Webmail" [ref=e122]:
          - link "Webmail" [ref=e123] [cursor=pointer]:
            - /url: index.php?module=Webmails&action=index&parenttab=Marketing
      - row "Leads" [ref=e124]:
        - cell "Leads" [ref=e125]:
          - link "Leads" [ref=e126] [cursor=pointer]:
            - /url: index.php?module=Leads&action=index&parenttab=Marketing
      - row "Calendar" [ref=e127]:
        - cell "Calendar" [ref=e128]:
          - link "Calendar" [ref=e129] [cursor=pointer]:
            - /url: index.php?module=Calendar&action=index&parenttab=Marketing
      - row "Documents" [ref=e130]:
        - cell "Documents" [ref=e131]:
          - link "Documents" [ref=e132] [cursor=pointer]:
            - /url: index.php?module=Documents&action=index&parenttab=Marketing
  - table [ref=e133]:
    - rowgroup [ref=e134]:
      - row [ref=e135]:
        - cell [ref=e136]
      - row "Marketing > Campaigns Create Campaign... Search in Campaigns... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Open All Menu... Campaigns Settings" [ref=e137]:
        - cell "Marketing > Campaigns" [ref=e138]:
          - text: Marketing >
          - link "Campaigns" [ref=e139] [cursor=pointer]:
            - /url: index.php?action=ListView&module=Campaigns&parenttab=Marketing
        - cell "Create Campaign... Search in Campaigns... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Open All Menu... Campaigns Settings" [ref=e140]:
          - table [ref=e141]:
            - rowgroup [ref=e142]:
              - row "Create Campaign... Search in Campaigns... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Open All Menu... Campaigns Settings" [ref=e143]:
                - cell [ref=e144]
                - cell "Create Campaign... Search in Campaigns..." [ref=e145]:
                  - table [ref=e146]:
                    - rowgroup [ref=e147]:
                      - row "Create Campaign... Search in Campaigns..." [ref=e148]:
                        - cell "Create Campaign... Search in Campaigns..." [ref=e149]:
                          - table [ref=e150]:
                            - rowgroup [ref=e151]:
                              - row "Create Campaign... Search in Campaigns..." [ref=e152]:
                                - cell "Create Campaign..." [ref=e153]:
                                  - link "Create Campaign..." [ref=e154] [cursor=pointer]:
                                    - /url: index.php?module=Campaigns&action=EditView&return_action=DetailView&parenttab=Marketing
                                    - img "Create Campaign..." [ref=e155]
                                - cell "Search in Campaigns..." [ref=e156]:
                                  - link "Search in Campaigns..." [ref=e157] [cursor=pointer]:
                                    - /url: javascript:;
                                    - img "Search in Campaigns..." [ref=e158]
                - cell [ref=e159]
                - cell "Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed" [ref=e160]:
                  - table [ref=e161]:
                    - rowgroup [ref=e162]:
                      - row "Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed" [ref=e163]:
                        - cell "Open Calendar..." [ref=e164]:
                          - link "Open Calendar..." [ref=e165] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Open Calendar..." [ref=e166]
                        - cell "Show World Clock..." [ref=e167]:
                          - link "Show World Clock..." [ref=e168] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Show World Clock..." [ref=e169]
                        - cell "Open Calculator..." [ref=e170]:
                          - link "Open Calculator..." [ref=e171] [cursor=pointer]:
                            - /url: "#"
                            - img "Open Calculator..." [ref=e172]
                        - cell "Chat..." [ref=e173]:
                          - link "Chat..." [ref=e174] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Chat..." [ref=e175]
                        - cell "Last Viewed" [ref=e176]:
                          - img "Last Viewed" [ref=e177]
                - cell [ref=e178]
                - cell [ref=e179]:
                  - table [ref=e180]:
                    - rowgroup [ref=e181]:
                      - row [ref=e182]:
                        - cell [ref=e183]:
                          - img [ref=e184]
                        - cell [ref=e185]:
                          - img [ref=e186]
                        - cell [ref=e187]:
                          - img [ref=e188]
                - cell [ref=e189]
                - cell "Open All Menu... Campaigns Settings" [ref=e190]:
                  - table [ref=e191]:
                    - rowgroup [ref=e192]:
                      - row "Open All Menu... Campaigns Settings" [ref=e193]:
                        - cell "Open All Menu..." [ref=e194]:
                          - link "Open All Menu..." [ref=e195] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Open All Menu..." [ref=e196]
                        - cell "Campaigns Settings" [ref=e197]:
                          - link "Campaigns Settings" [ref=e198] [cursor=pointer]:
                            - /url: index.php?module=Settings&action=ModuleManager&module_settings=true&formodule=Campaigns&parenttab=Settings
                            - img "Campaigns Settings" [ref=e199]
      - row [ref=e200]:
        - cell [ref=e201]
  - table [ref=e202]:
    - rowgroup [ref=e203]:
      - row [ref=e204]:
        - cell [ref=e205]:
          - img [ref=e206]
        - cell [ref=e207]:
          - table [ref=e210]:
            - rowgroup [ref=e211]:
              - row "Search Go to Advanced Search Search for In Campaign No Search Now [x]" [ref=e212]:
                - cell "Search Go to Advanced Search" [ref=e213]:
                  - text: Search
                  - link "Go to Advanced Search" [ref=e215] [cursor=pointer]:
                    - /url: "#"
                - cell "Search for" [ref=e216]
                - cell [ref=e217]:
                  - textbox [ref=e218]
                - cell "In" [ref=e219]
                - cell "Campaign No" [ref=e220]:
                  - combobox [ref=e222]:
                    - option "Campaign No" [selected]
                    - option "Campaign Name"
                    - option "Campaign Type"
                    - option "Campaign Status"
                    - option "Expected Revenue"
                    - option "Expected Close Date"
                    - option "Assigned To"
                - cell "Search Now" [ref=e223]:
                  - button "Search Now" [ref=e224]
                - cell "[x]" [ref=e225]
              - row "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" [ref=e226]:
                - cell "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" [ref=e227]:
                  - table [ref=e228]:
                    - rowgroup [ref=e229]:
                      - row "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" [ref=e230]:
                        - cell "A" [ref=e231] [cursor=pointer]
                        - cell "B" [ref=e232] [cursor=pointer]
                        - cell "C" [ref=e233] [cursor=pointer]
                        - cell "D" [ref=e234] [cursor=pointer]
                        - cell "E" [ref=e235] [cursor=pointer]
                        - cell "F" [ref=e236] [cursor=pointer]
                        - cell "G" [ref=e237] [cursor=pointer]
                        - cell "H" [ref=e238] [cursor=pointer]
                        - cell "I" [ref=e239] [cursor=pointer]
                        - cell "J" [ref=e240] [cursor=pointer]
                        - cell "K" [ref=e241] [cursor=pointer]
                        - cell "L" [ref=e242] [cursor=pointer]
                        - cell "M" [ref=e243] [cursor=pointer]
                        - cell "N" [ref=e244] [cursor=pointer]
                        - cell "O" [ref=e245] [cursor=pointer]
                        - cell "P" [ref=e246] [cursor=pointer]
                        - cell "Q" [ref=e247] [cursor=pointer]
                        - cell "R" [ref=e248] [cursor=pointer]
                        - cell "S" [ref=e249] [cursor=pointer]
                        - cell "T" [ref=e250] [cursor=pointer]
                        - cell "U" [ref=e251] [cursor=pointer]
                        - cell "V" [ref=e252] [cursor=pointer]
                        - cell "W" [ref=e253] [cursor=pointer]
                        - cell "X" [ref=e254] [cursor=pointer]
                        - cell "Y" [ref=e255] [cursor=pointer]
                        - cell "Z" [ref=e256] [cursor=pointer]
          - table [ref=e259]:
            - rowgroup [ref=e260]:
              - 'row "Delete Mass Edit Showing Records 1 - 10 of 10 1 of 1 Filters : All New | Edit | Delete Campaign No Campaign Name Campaign Type Campaign Status Expected Revenue Expected Close Date Assigned To Action CAM10 Test9 --None-- --None-- 0 2025-06-02 admin edit | del CAM9 Test8 --None-- --None-- 0 2025-06-02 admin edit | del CAM8 Test7 --None-- --None-- 0 2025-06-02 admin edit | del CAM7 Test7 --None-- --None-- 0 2025-06-02 admin edit | del CAM6 Test6 --None-- --None-- 0 2025-06-02 admin edit | del CAM5 Test5 --None-- --None-- 0 2025-06-02 admin edit | del CAM4 Test4 --None-- --None-- 0 2025-06-02 admin edit | del CAM3 Test2 --None-- --None-- 0 2025-06-02 admin edit | del CAM2 Test1 --None-- --None-- 0 2025-06-02 admin edit | del CAM1 Test --None-- --None-- 0 2025-06-02 admin edit | del Delete Mass Edit Showing Records 1 - 10 of 10 1 of 1" [ref=e261]':
                - 'cell "Delete Mass Edit Showing Records 1 - 10 of 10 1 of 1 Filters : All New | Edit | Delete Campaign No Campaign Name Campaign Type Campaign Status Expected Revenue Expected Close Date Assigned To Action CAM10 Test9 --None-- --None-- 0 2025-06-02 admin edit | del CAM9 Test8 --None-- --None-- 0 2025-06-02 admin edit | del CAM8 Test7 --None-- --None-- 0 2025-06-02 admin edit | del CAM7 Test7 --None-- --None-- 0 2025-06-02 admin edit | del CAM6 Test6 --None-- --None-- 0 2025-06-02 admin edit | del CAM5 Test5 --None-- --None-- 0 2025-06-02 admin edit | del CAM4 Test4 --None-- --None-- 0 2025-06-02 admin edit | del CAM3 Test2 --None-- --None-- 0 2025-06-02 admin edit | del CAM2 Test1 --None-- --None-- 0 2025-06-02 admin edit | del CAM1 Test --None-- --None-- 0 2025-06-02 admin edit | del Delete Mass Edit Showing Records 1 - 10 of 10 1 of 1" [ref=e262]':
                  - table [ref=e263]:
                    - rowgroup [ref=e264]:
                      - 'row "Delete Mass Edit Showing Records 1 - 10 of 10 1 of 1 Filters : All New | Edit | Delete" [ref=e265]':
                        - cell "Delete Mass Edit" [ref=e266]:
                          - button "Delete" [ref=e267]
                          - button "Mass Edit" [ref=e268]
                        - cell "Showing Records 1 - 10 of 10" [ref=e269]
                        - cell "1 of 1" [ref=e270]:
                          - table [ref=e271]:
                            - rowgroup [ref=e272]:
                              - row "1 of 1" [ref=e273]:
                                - cell "1 of 1" [ref=e274]:
                                  - img [ref=e275]
                                  - img [ref=e276]
                                  - textbox [ref=e277]: "1"
                                  - text: of 1
                                  - img [ref=e278]
                                  - img [ref=e279]
                        - 'cell "Filters : All New | Edit | Delete" [ref=e280]':
                          - table [ref=e281]:
                            - rowgroup [ref=e282]:
                              - 'row "Filters : All New | Edit | Delete" [ref=e283]':
                                - cell "Filters :" [ref=e284]
                                - cell "All" [ref=e285]:
                                  - combobox [ref=e286]:
                                    - option "All" [selected]
                                - cell "New | Edit | Delete" [ref=e287]:
                                  - link "New" [ref=e288] [cursor=pointer]:
                                    - /url: index.php?module=Campaigns&action=CustomView&parenttab=Marketing
                                  - text: "| Edit | Delete"
                  - table [ref=e290]:
                    - rowgroup [ref=e291]:
                      - row "Campaign No Campaign Name Campaign Type Campaign Status Expected Revenue Expected Close Date Assigned To Action" [ref=e292]:
                        - cell [ref=e293]:
                          - checkbox [ref=e294]
                        - cell "Campaign No" [ref=e295]:
                          - link "Campaign No" [ref=e296] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Campaign Name" [ref=e297]:
                          - link "Campaign Name" [ref=e298] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Campaign Type" [ref=e299]:
                          - link "Campaign Type" [ref=e300] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Campaign Status" [ref=e301]:
                          - link "Campaign Status" [ref=e302] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Expected Revenue" [ref=e303]:
                          - link "Expected Revenue" [ref=e304] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Expected Close Date" [ref=e305]:
                          - link "Expected Close Date" [ref=e306] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Assigned To" [ref=e307]:
                          - link "Assigned To" [ref=e308] [cursor=pointer]:
                            - /url: javascript:;
                        - cell "Action" [ref=e309]
                      - row "CAM10 Test9 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e310]:
                        - cell [ref=e311]:
                          - checkbox [ref=e312]
                        - cell "CAM10" [ref=e313]
                        - cell "Test9" [ref=e314]:
                          - link "Test9" [ref=e315] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=48
                        - cell "--None--" [ref=e316]
                        - cell "--None--" [ref=e317]
                        - cell "0" [ref=e318]
                        - cell "2025-06-02" [ref=e319]
                        - cell "admin" [ref=e320]
                        - cell "edit | del" [ref=e321]:
                          - link "edit" [ref=e322] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=48&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e323] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D48%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM9 Test8 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e324]:
                        - cell [ref=e325]:
                          - checkbox [ref=e326]
                        - cell "CAM9" [ref=e327]
                        - cell "Test8" [ref=e328]:
                          - link "Test8" [ref=e329] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=47
                        - cell "--None--" [ref=e330]
                        - cell "--None--" [ref=e331]
                        - cell "0" [ref=e332]
                        - cell "2025-06-02" [ref=e333]
                        - cell "admin" [ref=e334]
                        - cell "edit | del" [ref=e335]:
                          - link "edit" [ref=e336] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=47&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e337] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D47%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM8 Test7 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e338]:
                        - cell [ref=e339]:
                          - checkbox [ref=e340]
                        - cell "CAM8" [ref=e341]
                        - cell "Test7" [ref=e342]:
                          - link "Test7" [ref=e343] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=46
                        - cell "--None--" [ref=e344]
                        - cell "--None--" [ref=e345]
                        - cell "0" [ref=e346]
                        - cell "2025-06-02" [ref=e347]
                        - cell "admin" [ref=e348]
                        - cell "edit | del" [ref=e349]:
                          - link "edit" [ref=e350] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=46&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e351] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D46%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM7 Test7 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e352]:
                        - cell [ref=e353]:
                          - checkbox [ref=e354]
                        - cell "CAM7" [ref=e355]
                        - cell "Test7" [ref=e356]:
                          - link "Test7" [ref=e357] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=45
                        - cell "--None--" [ref=e358]
                        - cell "--None--" [ref=e359]
                        - cell "0" [ref=e360]
                        - cell "2025-06-02" [ref=e361]
                        - cell "admin" [ref=e362]
                        - cell "edit | del" [ref=e363]:
                          - link "edit" [ref=e364] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=45&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e365] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D45%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM6 Test6 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e366]:
                        - cell [ref=e367]:
                          - checkbox [ref=e368]
                        - cell "CAM6" [ref=e369]
                        - cell "Test6" [ref=e370]:
                          - link "Test6" [ref=e371] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=44
                        - cell "--None--" [ref=e372]
                        - cell "--None--" [ref=e373]
                        - cell "0" [ref=e374]
                        - cell "2025-06-02" [ref=e375]
                        - cell "admin" [ref=e376]
                        - cell "edit | del" [ref=e377]:
                          - link "edit" [ref=e378] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=44&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e379] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D44%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM5 Test5 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e380]:
                        - cell [ref=e381]:
                          - checkbox [ref=e382]
                        - cell "CAM5" [ref=e383]
                        - cell "Test5" [ref=e384]:
                          - link "Test5" [ref=e385] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=43
                        - cell "--None--" [ref=e386]
                        - cell "--None--" [ref=e387]
                        - cell "0" [ref=e388]
                        - cell "2025-06-02" [ref=e389]
                        - cell "admin" [ref=e390]
                        - cell "edit | del" [ref=e391]:
                          - link "edit" [ref=e392] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=43&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e393] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D43%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM4 Test4 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e394]:
                        - cell [ref=e395]:
                          - checkbox [ref=e396]
                        - cell "CAM4" [ref=e397]
                        - cell "Test4" [ref=e398]:
                          - link "Test4" [ref=e399] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=42
                        - cell "--None--" [ref=e400]
                        - cell "--None--" [ref=e401]
                        - cell "0" [ref=e402]
                        - cell "2025-06-02" [ref=e403]
                        - cell "admin" [ref=e404]
                        - cell "edit | del" [ref=e405]:
                          - link "edit" [ref=e406] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=42&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e407] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D42%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM3 Test2 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e408]:
                        - cell [ref=e409]:
                          - checkbox [ref=e410]
                        - cell "CAM3" [ref=e411]
                        - cell "Test2" [ref=e412]:
                          - link "Test2" [ref=e413] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=41
                        - cell "--None--" [ref=e414]
                        - cell "--None--" [ref=e415]
                        - cell "0" [ref=e416]
                        - cell "2025-06-02" [ref=e417]
                        - cell "admin" [ref=e418]
                        - cell "edit | del" [ref=e419]:
                          - link "edit" [ref=e420] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=41&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e421] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D41%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM2 Test1 --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e422]:
                        - cell [ref=e423]:
                          - checkbox [ref=e424]
                        - cell "CAM2" [ref=e425]
                        - cell "Test1" [ref=e426]:
                          - link "Test1" [ref=e427] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=40
                        - cell "--None--" [ref=e428]
                        - cell "--None--" [ref=e429]
                        - cell "0" [ref=e430]
                        - cell "2025-06-02" [ref=e431]
                        - cell "admin" [ref=e432]
                        - cell "edit | del" [ref=e433]:
                          - link "edit" [ref=e434] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=40&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e435] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D40%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                      - row "CAM1 Test --None-- --None-- 0 2025-06-02 admin edit | del" [ref=e436]:
                        - cell [ref=e437]:
                          - checkbox [ref=e438]
                        - cell "CAM1" [ref=e439]
                        - cell "Test" [ref=e440]:
                          - link "Test" [ref=e441] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&parenttab=Marketing&action=DetailView&record=39
                        - cell "--None--" [ref=e442]
                        - cell "--None--" [ref=e443]
                        - cell "0" [ref=e444]
                        - cell "2025-06-02" [ref=e445]
                        - cell "admin" [ref=e446]
                        - cell "edit | del" [ref=e447]:
                          - link "edit" [ref=e448] [cursor=pointer]:
                            - /url: index.php?module=Campaigns&action=EditView&record=39&return_module=Campaigns&return_action=index&parenttab=Marketing&return_viewname=29
                          - text: "|"
                          - link "del" [ref=e449] [cursor=pointer]:
                            - /url: javascript:confirmdelete("index.php%3Fmodule%3DCampaigns%26action%3DDelete%26record%3D39%26return_module%3DCampaigns%26return_action%3Dindex%26parenttab%3DMarketing%26return_viewname%3D29")
                  - table [ref=e450]:
                    - rowgroup [ref=e451]:
                      - row "Delete Mass Edit Showing Records 1 - 10 of 10 1 of 1" [ref=e452]:
                        - cell "Delete Mass Edit" [ref=e453]:
                          - button "Delete" [ref=e454]
                          - button "Mass Edit" [ref=e455]
                        - cell "Showing Records 1 - 10 of 10" [ref=e456]
                        - cell "1 of 1" [ref=e457]:
                          - table [ref=e458]:
                            - rowgroup [ref=e459]:
                              - row "1 of 1" [ref=e460]:
                                - cell "1 of 1" [ref=e461]:
                                  - img [ref=e462]
                                  - img [ref=e463]
                                  - textbox [ref=e464]: "1"
                                  - text: of 1
                                  - img [ref=e465]
                                  - img [ref=e466]
                        - cell [ref=e467]:
                          - table:
                            - rowgroup:
                              - row
        - cell [ref=e468]:
          - img [ref=e469]
  - table [ref=e470]:
    - rowgroup [ref=e471]:
      - row "vtiger CRM 5.2.1 © 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e472]:
        - cell "vtiger CRM 5.2.1" [ref=e473]
        - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e474]:
          - generic [ref=e475]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=e476] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=e477] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=e478] [cursor=pointer]:
              - /url: http://www.vtiger.com/products/crm/privacy_policy.html
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | import { console } from "inspector";
  3  | 
  4  | test('Verify list',async({browser})=>{
  5  | 
  6  |       
  7  |     const context= await browser.newContext({
  8  | 
  9  |             viewport:{width:1980,height:1020}
  10 |       })
  11 | 
  12 |       const page=await context.newPage();
  13 |       await page.goto("http://localhost:8888/");
  14 |       await page.locator("//input[@name='user_name']").fill("admin");
  15 |       await page.locator("//input[@name='user_password']").fill("admin");
  16 |       await page.locator("//input[@name='Login']").click();
  17 |       console.log("Login Sucessfully");
  18 |       await page.waitForTimeout(1000);
  19 |       await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  20 |       await page.locator("//a[text()='Marketing']").click();
  21 |       await page.waitForTimeout(1000);
  22 |       //Select value
  23 |       //const dropdownlist=page.locator("//select[@id='bas_searchfield']").first();
  24 |       //await dropdownlist.selectOption('Campaign Name');
  25 |       //console.log("Verify text")
  26 |       //select Lebel
  27 |       //const dropdown=page.locator("//select[@id='bas_searchfield']").first();
  28 |       //const txt = await dropdown.selectOption({ label: 'Campaign Name' });
  29 |       //console.log(txt);
  30 |       //select Index
  31 |       //const drop=page.locator("//select[@id='bas_searchfield']").first();
  32 |       //const txt=await drop.selectOption({index: 2 });
  33 |       //console.log(txt);
  34 |       /////////////////////////////////////////////////////////////
  35 |        //Using ToHaveValue///////////////
  36 | 
  37 |        const DropList=page.locator("//select[@id='bas_searchfield']").first();
  38 |        const allOptions=await DropList.allTextContents();
> 39 |       await expect(allOptions).toEqual(['Campaign Name','Campaign Type']);
     |                                ^ Error: expect(received).toEqual(expected) // deep equality
  40 |       console.log("Verify All text");
  41 | 
  42 | 
  43 | 
  44 | })
```