# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CirfTest1.spec.js >> Verify All checkList
- Location: tests\CirfTest1.spec.js:34:5

# Error details

```
Error: locator.count: Unsupported token "@name" while parsing css selector "input[@name='selected_id']". Did you mean to CSS.escape it?
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
                    - cell [ref=e170]
                    - cell "Edit Refresh Hide Close" [ref=e171]:
                      - img "Edit" [ref=e172]
                      - img "Refresh" [ref=e174] [cursor=pointer]
                      - img "Hide" [ref=e176] [cursor=pointer]
                      - img "Close" [ref=e177]
              - table [ref=e178]:
                - rowgroup [ref=e179]:
                  - row [ref=e180]:
                    - cell [ref=e181]:
                      - img [ref=e184]
              - table [ref=e185]:
                - rowgroup [ref=e186]:
                  - row "Scroll" [ref=e187]:
                    - cell "Scroll" [ref=e188]:
                      - link "Scroll" [ref=e189] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e190]:
              - table [ref=e191]:
                - rowgroup [ref=e192]:
                  - row "Top Accounts Edit Refresh Hide Close" [ref=e193]:
                    - cell "Top Accounts" [ref=e194]
                    - cell [ref=e195]:
                      - img [ref=e197]
                    - cell "Edit Refresh Hide Close" [ref=e198]:
                      - img "Edit" [ref=e200] [cursor=pointer]
                      - img "Refresh" [ref=e202] [cursor=pointer]
                      - img "Hide" [ref=e204] [cursor=pointer]
                      - img "Close" [ref=e205]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e206]:
                - rowgroup [ref=e207]:
                  - row "Scroll More" [ref=e208]:
                    - cell "Scroll" [ref=e209]:
                      - link "Scroll" [ref=e210] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e211]:
                      - link "More" [ref=e212] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e213]:
              - table [ref=e214]:
                - rowgroup [ref=e215]:
                  - row "Top Potentials Edit Refresh Hide Close" [ref=e216]:
                    - cell "Top Potentials" [ref=e217]
                    - cell [ref=e218]:
                      - img [ref=e220]
                    - cell "Edit Refresh Hide Close" [ref=e221]:
                      - img "Edit" [ref=e223] [cursor=pointer]
                      - img "Refresh" [ref=e225] [cursor=pointer]
                      - img "Hide" [ref=e227] [cursor=pointer]
                      - img "Close" [ref=e228]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e229]:
                - rowgroup [ref=e230]:
                  - row "Scroll More" [ref=e231]:
                    - cell "Scroll" [ref=e232]:
                      - link "Scroll" [ref=e233] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e234]:
                      - link "More" [ref=e235] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e236]:
              - table [ref=e237]:
                - rowgroup [ref=e238]:
                  - row "Top Quotes Edit Refresh Hide Close" [ref=e239]:
                    - cell "Top Quotes" [ref=e240]
                    - cell [ref=e241]:
                      - img [ref=e243]
                    - cell "Edit Refresh Hide Close" [ref=e244]:
                      - img "Edit" [ref=e246] [cursor=pointer]
                      - img "Refresh" [ref=e248] [cursor=pointer]
                      - img "Hide" [ref=e250] [cursor=pointer]
                      - img "Close" [ref=e251]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e252]:
                - rowgroup [ref=e253]:
                  - row "Scroll More" [ref=e254]:
                    - cell "Scroll" [ref=e255]:
                      - link "Scroll" [ref=e256] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e257]:
                      - link "More" [ref=e258] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e259]:
              - table [ref=e260]:
                - rowgroup [ref=e261]:
                  - row "Key Metrics Edit Refresh Hide Close" [ref=e262]:
                    - cell "Key Metrics" [ref=e263]
                    - cell [ref=e264]:
                      - img [ref=e266]
                    - cell "Edit Refresh Hide Close" [ref=e267]:
                      - img "Edit" [ref=e268]
                      - img "Refresh" [ref=e270] [cursor=pointer]
                      - img "Hide" [ref=e272] [cursor=pointer]
                      - img "Close" [ref=e273]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e274]:
                - rowgroup [ref=e275]:
                  - row "Scroll" [ref=e276]:
                    - cell "Scroll" [ref=e277]:
                      - link "Scroll" [ref=e278] [cursor=pointer]:
                        - /url: javascript:;
            - generic [ref=e279]:
              - table [ref=e280]:
                - rowgroup [ref=e281]:
                  - row "Top Trouble Tickets Edit Refresh Hide Close" [ref=e282]:
                    - cell "Top Trouble Tickets" [ref=e283]
                    - cell [ref=e284]:
                      - img [ref=e286]
                    - cell "Edit Refresh Hide Close" [ref=e287]:
                      - img "Edit" [ref=e289] [cursor=pointer]
                      - img "Refresh" [ref=e291] [cursor=pointer]
                      - img "Hide" [ref=e293] [cursor=pointer]
                      - img "Close" [ref=e294]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e295]:
                - rowgroup [ref=e296]:
                  - row "Scroll More" [ref=e297]:
                    - cell "Scroll" [ref=e298]:
                      - link "Scroll" [ref=e299] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e300]:
                      - link "More" [ref=e301] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e302]:
              - table [ref=e303]:
                - rowgroup [ref=e304]:
                  - row "Upcoming Activities Edit Refresh Hide Close" [ref=e305]:
                    - cell "Upcoming Activities" [ref=e306]
                    - cell [ref=e307]:
                      - img [ref=e309]
                    - cell "Edit Refresh Hide Close" [ref=e310]:
                      - img "Edit" [ref=e312] [cursor=pointer]
                      - img "Refresh" [ref=e314] [cursor=pointer]
                      - img "Hide" [ref=e316] [cursor=pointer]
                      - img "Close" [ref=e317]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e318]:
                - rowgroup [ref=e319]:
                  - row "Scroll More" [ref=e320]:
                    - cell "Scroll" [ref=e321]:
                      - link "Scroll" [ref=e322] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e323]:
                      - link "More" [ref=e324] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e325]:
              - table [ref=e326]:
                - rowgroup [ref=e327]:
                  - row "Top Sales Orders Edit Refresh Hide Close" [ref=e328]:
                    - cell "Top Sales Orders" [ref=e329]
                    - cell [ref=e330]:
                      - img [ref=e332]
                    - cell "Edit Refresh Hide Close" [ref=e333]:
                      - img "Edit" [ref=e335] [cursor=pointer]
                      - img "Refresh" [ref=e337] [cursor=pointer]
                      - img "Hide" [ref=e339] [cursor=pointer]
                      - img "Close" [ref=e340]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e341]:
                - rowgroup [ref=e342]:
                  - row "Scroll More" [ref=e343]:
                    - cell "Scroll" [ref=e344]:
                      - link "Scroll" [ref=e345] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e346]:
                      - link "More" [ref=e347] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e348]:
              - table [ref=e349]:
                - rowgroup [ref=e350]:
                  - row "Top Invoices Edit Refresh Hide Close" [ref=e351]:
                    - cell "Top Invoices" [ref=e352]
                    - cell [ref=e353]:
                      - img [ref=e355]
                    - cell "Edit Refresh Hide Close" [ref=e356]:
                      - img "Edit" [ref=e358] [cursor=pointer]
                      - img "Refresh" [ref=e360] [cursor=pointer]
                      - img "Hide" [ref=e362] [cursor=pointer]
                      - img "Close" [ref=e363]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e364]:
                - rowgroup [ref=e365]:
                  - row "Scroll More" [ref=e366]:
                    - cell "Scroll" [ref=e367]:
                      - link "Scroll" [ref=e368] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e369]:
                      - link "More" [ref=e370] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e371]:
              - table [ref=e372]:
                - rowgroup [ref=e373]:
                  - row "My New Leads Edit Refresh Hide Close" [ref=e374]:
                    - cell "My New Leads" [ref=e375]
                    - cell [ref=e376]:
                      - img [ref=e378]
                    - cell "Edit Refresh Hide Close" [ref=e379]:
                      - img "Edit" [ref=e381] [cursor=pointer]
                      - img "Refresh" [ref=e383] [cursor=pointer]
                      - img "Hide" [ref=e385] [cursor=pointer]
                      - img "Close" [ref=e386]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e387]:
                - rowgroup [ref=e388]:
                  - row "Scroll More" [ref=e389]:
                    - cell "Scroll" [ref=e390]:
                      - link "Scroll" [ref=e391] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e392]:
                      - link "More" [ref=e393] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e394]:
              - table [ref=e395]:
                - rowgroup [ref=e396]:
                  - row "Top Purchase Orders Edit Refresh Hide Close" [ref=e397]:
                    - cell "Top Purchase Orders" [ref=e398]
                    - cell [ref=e399]:
                      - img [ref=e401]
                    - cell "Edit Refresh Hide Close" [ref=e402]:
                      - img "Edit" [ref=e404] [cursor=pointer]
                      - img "Refresh" [ref=e406] [cursor=pointer]
                      - img "Hide" [ref=e408] [cursor=pointer]
                      - img "Close" [ref=e409]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e410]:
                - rowgroup [ref=e411]:
                  - row "Scroll More" [ref=e412]:
                    - cell "Scroll" [ref=e413]:
                      - link "Scroll" [ref=e414] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e415]:
                      - link "More" [ref=e416] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e417]:
              - table [ref=e418]:
                - rowgroup [ref=e419]:
                  - row "Pending Activities Edit Refresh Hide Close" [ref=e420]:
                    - cell "Pending Activities" [ref=e421]
                    - cell [ref=e422]:
                      - img [ref=e424]
                    - cell "Edit Refresh Hide Close" [ref=e425]:
                      - img "Edit" [ref=e427] [cursor=pointer]
                      - img "Refresh" [ref=e429] [cursor=pointer]
                      - img "Hide" [ref=e431] [cursor=pointer]
                      - img "Close" [ref=e432]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e433]:
                - rowgroup [ref=e434]:
                  - row "Scroll More" [ref=e435]:
                    - cell "Scroll" [ref=e436]:
                      - link "Scroll" [ref=e437] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e438]:
                      - link "More" [ref=e439] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e440]:
              - table [ref=e441]:
                - rowgroup [ref=e442]:
                  - row "My Recent FAQs Edit Refresh Hide Close" [ref=e443]:
                    - cell "My Recent FAQs" [ref=e444]
                    - cell [ref=e445]:
                      - img [ref=e447]
                    - cell "Edit Refresh Hide Close" [ref=e448]:
                      - img "Edit" [ref=e450] [cursor=pointer]
                      - img "Refresh" [ref=e452] [cursor=pointer]
                      - img "Hide" [ref=e454] [cursor=pointer]
                      - img "Close" [ref=e455]
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=e456]:
                - rowgroup [ref=e457]:
                  - row "Scroll More" [ref=e458]:
                    - cell "Scroll" [ref=e459]:
                      - link "Scroll" [ref=e460] [cursor=pointer]:
                        - /url: javascript:;
                    - cell "More" [ref=e461]:
                      - link "More" [ref=e462] [cursor=pointer]:
                        - /url: "#"
  - table [ref=e463]:
    - rowgroup [ref=e464]:
      - row "vtiger CRM 5.2.1 © 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e465]:
        - cell "vtiger CRM 5.2.1" [ref=e466]
        - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy" [ref=e467]:
          - generic [ref=e468]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=e469] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=e470] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=e471] [cursor=pointer]:
              - /url: http://www.vtiger.com/products/crm/privacy_policy.html
```

# Test source

```ts
  1   | import{test,expect} from "@playwright/test"
  2   | 
  3   | test('Verify Login Test',async({browser})=>{
  4   | 
  5   |     const context=await browser.newContext({
  6   | 
  7   |         viewport:{width:1980,height:1020}
  8   |     })
  9   | 
  10  |     const page=await context.newPage();
  11  |     await page.goto("http://localhost:8888/");
  12  |     await page.locator("//input[@name='user_name']").fill("admin");
  13  |     await page.locator("//input[@name='user_password']").fill("admin");
  14  |     await page.locator("//input[@name='Login']").click();
  15  |     console.log("Login Sucessfully");
  16  |     await page.waitForTimeout(1000);
  17  | })
  18  | 
  19  | test('Verify Hover',async({page})=>{
  20  | 
  21  |     await page.goto("http://localhost:8888/");
  22  |     await page.locator("//input[@name='user_name']").fill("admin");
  23  |     await page.locator("//input[@name='user_password']").fill("admin");
  24  |     page.locator("//input[@name='Login']").click();
  25  |     await page.waitForTimeout(1000);
  26  |     console.log("Login Sucessfully");
  27  |     await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  28  |     console.log("Title Verifyed");
  29  |     await page.locator("a[text()='Marketing']").hover();
  30  |     console.log("Hover Verifyed");
  31  |     await page.waitForTimeout(1000);
  32  | })
  33  | 
  34  | test('Verify All checkList',async({page})=>{
  35  | 
  36  |     await page.goto("http://localhost:8888/");
  37  |     await page.locator("//input[@name='user_name']").fill("admin");
  38  |     await page.locator("//input[@name='user_password']").fill("admin");
  39  |     await page.locator("//input[@name='Login']").click();
  40  |     console.log("Login Sucessfully");
  41  |     await page.waitForTimeout(1000);
  42  |     await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  43  |     await page.locator("//a[text()='Support']").hover();
  44  |     await page.locator("//div[@id='Support_sub']//a[text()='Accounts']");
  45  |     console.log("User able to click on Account Tab");
  46  |     await page.waitForTimeout(1000);
  47  |     const AllChk=page.locator("input[@name='selected_id']");
  48  | 
> 49  |     for(let i=0;i< await AllChk.count();i++){
      |                                 ^ Error: locator.count: Unsupported token "@name" while parsing css selector "input[@name='selected_id']". Did you mean to CSS.escape it?
  50  | 
  51  |         await AllChk.nth(i).click();
  52  |         await page.waitForTimeout(1000);
  53  |     }
  54  | 
  55  |     await page.waitForTimeout(1000);
  56  | 
  57  | })
  58  | 
  59  | 
  60  | test('Verify Multiple Window',async({page})=>{
  61  | 
  62  |     await page.goto("http://localhost:8888/");
  63  |     await page.locator("//input[@name='user_name']").fill("admin");
  64  |     await page.locator("//input[@name='user_password']").fill("admin");
  65  |     await page.locator("//input[@name='Login']").click();
  66  |     console.log("Login Susessfully");
  67  |     await page.waitForTimeout(1000);
  68  |     await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  69  |     await page.locator("//a[text()='Sales']").hover();
  70  |     await page.locator("//div[@id='Sales_sub']//a[text()='Contacts']").click();
  71  |     await page.waitForTimeout(1000);
  72  |     await page.locator("//input[@id='72']").check();
  73  |     ///Handle Multiple window//////
  74  |     const[newPage]=await Promise.all([page.waitForEvent('popup'),page.locator("//input[@value='Send Mail']").first().click()])
  75  |     await newPage.waitForTimeout(1000);
  76  |     const sub=await newPage.locator("//input[@name='subject']");
  77  |     await sub.fill("Test");
  78  |     console.log("Test completed");
  79  |     await newPage.waitForTimeout(1000);
  80  |     
  81  | 
  82  | })
  83  | 
  84  | test('Verify AllLinks',async({page})=>{
  85  | 
  86  |      await page.goto("http://localhost:8888/");
  87  |      await page.locator("//input[@name='user_name']").fill("admin");
  88  |      await page.locator("//input[@name='user_password']").fill("admin");
  89  |      await page.locator("//input[@name='Login']").click();
  90  |      await page.waitForTimeout(1000);
  91  |      console.log("Login Sucessfully");
  92  |      await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  93  |      await page.locator("//a[text()='Sales']").click();
  94  |      await page.waitForTimeout(1000);
  95  |      const allLinks=page.locator("//td[@class='searchAlph']");
  96  | 
  97  |      for(let i=0;i< await allLinks.count();i++){
  98  | 
  99  |         await allLinks.nth(i).click();
  100 |         await page.waitForTimeout(1000);
  101 |      }
  102 |      
  103 | 
  104 |        
  105 | 
  106 | })
  107 | 
  108 | 
  109 | test('Verify  dropdownList',async({page})=>{
  110 | 
  111 |     await page.goto("http://localhost:8888/");
  112 |     await page.locator("//input[@name='user_name']").fill("admin");
  113 |     await page.locator("//input[@name='user_password']").fill("admin");
  114 |     await page.locator("//input[@name='Login']").click();
  115 |     await page.waitForTimeout(1000);
  116 |     console.log("Login Sucessfully");
  117 |     await page.locator("a[text()='Support']").click();
  118 |     await page.waitForTimeout(1000);
  119 |     const Listbox=await page.locator("//select[@id='bas_searchfield']").first();
  120 |     await Listbox.selectOption('Ticket No');
  121 |     console.log("List Verifyed");
  122 | 
  123 | })
```