# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Handle_Multiplewindow1.spec.js >> Verify window Hanled
- Location: tests\Handle_Multiplewindow1.spec.js:3:5

# Error details

```
TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]:
          - img [ref=e17]
          - text: Elements
        - img [ref=e22]
      - generic [ref=e26] [cursor=pointer]:
        - generic [ref=e27]:
          - img [ref=e29]
          - text: Forms
        - img [ref=e35]
      - generic [ref=e37]:
        - generic [ref=e39] [cursor=pointer]:
          - generic [ref=e40]:
            - img [ref=e42]
            - text: Alerts, Frame & Windows
          - img [ref=e47]
        - list [ref=e50]:
          - listitem [ref=e51] [cursor=pointer]:
            - link "Browser Windows" [ref=e52]:
              - /url: /browser-windows
              - img [ref=e53]
              - text: Browser Windows
          - listitem [ref=e55] [cursor=pointer]:
            - link "Alerts" [ref=e56]:
              - /url: /alerts
              - img [ref=e57]
              - text: Alerts
          - listitem [ref=e59] [cursor=pointer]:
            - link "Frames" [ref=e60]:
              - /url: /frames
              - img [ref=e61]
              - text: Frames
          - listitem [ref=e63] [cursor=pointer]:
            - link "Nested Frames" [ref=e64]:
              - /url: /nestedframes
              - img [ref=e65]
              - text: Nested Frames
          - listitem [ref=e67] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e68]:
              - /url: /modal-dialogs
              - img [ref=e69]
              - text: Modal Dialogs
      - generic [ref=e73] [cursor=pointer]:
        - generic [ref=e74]:
          - img [ref=e76]
          - text: Widgets
        - img [ref=e82]
      - generic [ref=e86] [cursor=pointer]:
        - generic [ref=e87]:
          - img [ref=e89]
          - text: Interactions
        - img [ref=e94]
      - generic [ref=e98] [cursor=pointer]:
        - generic [ref=e99]:
          - img [ref=e101]
          - text: Book Store Application
        - img [ref=e106]
    - generic [ref=e109]:
      - heading "Browser Windows" [level=1] [ref=e110]
      - button "New Tab" [ref=e112] [cursor=pointer]
      - button "New Window" [active] [ref=e114] [cursor=pointer]
      - button "New Window Message" [ref=e116] [cursor=pointer]
  - contentinfo [ref=e123]:
    - generic [ref=e124]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | test('Verify window Hanled',async({browser})=>{
  4  | 
  5  |      const context= await browser.newContext({
  6  | 
  7  |         viewport:{width:1980,height:1020}
  8  | 
  9  |       })
  10 | 
  11 |       const page=await context.newPage();
  12 |       await page.goto("https://demoqa.com/browser-windows");
  13 | 
> 14 |      const[newPage]=Promise.all([context.waitForEvent("page"),page.locator("//button[@id='windowButton']").click()])
     |                     ^ TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
  15 |      const txt=newPage.locator("//h1[text()='This is a sample page']").textContent();
  16 |      console.log(txt);
  17 |      
  18 | 
  19 | })
```