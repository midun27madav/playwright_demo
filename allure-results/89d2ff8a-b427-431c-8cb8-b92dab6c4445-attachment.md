# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Upload.spec.js >> Single Upload
- Location: tests\Upload.spec.js:25:6

# Error details

```
Error: locator.setInputFiles: Error: [webkitdirectory] input requires passing a path to a directory
Call log:
  - waiting for locator('input[id="upload-folder"]')
    - locator resolved to <input multiple type="file" directory="" id="upload-folder" webkitdirectory="" class="css-3fyy40"/>

```

# Page snapshot

```yaml
- generic [active] [ref=e5]:
  - generic [ref=e8]:
    - generic [ref=e11]:
      - navigation [ref=e12]:
        - link [ref=e13] [cursor=pointer]:
          - /url: /
          - img [ref=e14]
      - navigation [ref=e30]:
        - link "About" [ref=e31] [cursor=pointer]:
          - /url: /about
        - link "Plans" [ref=e32] [cursor=pointer]:
          - /url: /plans
        - link "Developers" [ref=e33] [cursor=pointer]:
          - /url: /developers
        - generic [ref=e34]: "|"
        - link "Sign Up" [ref=e35] [cursor=pointer]:
          - /url: /signup
        - link "Log In" [ref=e36] [cursor=pointer]:
          - /url: /login
    - generic [ref=e37]:
      - generic [ref=e41]:
        - paragraph [ref=e42]: Super simple file sharing!
        - paragraph [ref=e43]: Upload as many files as you like up to 4 GB and get a link to share.
        - link "Learn More" [ref=e45] [cursor=pointer]:
          - /url: /about
        - generic [ref=e47]:
          - generic [ref=e48] [cursor=pointer]:
            - img [ref=e49]
            - text: Upload Files
          - generic [ref=e51]: or Upload a folder
      - generic [ref=e53]:
        - heading "\"It's like snapchat, but for files!\"" [level=1] [ref=e54]
        - heading "- Ben A, Philadelphia" [level=2] [ref=e55]
        - paragraph [ref=e56]: Simply upload a file, share the link, and after it is downloaded, the file is completely deleted. For added security, set an expiration on the file and it is deleted within a certain amount of time, even if it was never downloaded.
        - paragraph [ref=e57]: All files are encrypted when stored on our servers.
        - generic [ref=e58]:
          - img [ref=e59]
          - img [ref=e61]
          - img [ref=e63]
      - generic [ref=e66]:
        - img "Convenient" [ref=e69]
        - generic [ref=e70]:
          - heading "Convenient" [level=1] [ref=e71]
          - heading "Share files quickly, easily and worry-free." [level=2] [ref=e72]
          - paragraph [ref=e73]: Share any type of file you like, with anyone, anywhere in the world. Generous data transfer rates and file size limits ensure even big files can be shared expeditiously.
          - paragraph [ref=e74]:
            - text: We're trying to keep it simple. Whether you prefer to send files from your browser or via our
            - link "REST API" [ref=e75] [cursor=pointer]:
              - /url: "#api"
            - text: ", you will find the experience to be as easy and streamlined as possible."
          - paragraph [ref=e76]: Once you have uploaded your files and shared the link, you can rest easy knowing that the file will not linger indefinitely in the cloud. As soon as it has been received by the intended recipient, your file is gone forever!
      - generic [ref=e78]:
        - img "Anonymous" [ref=e81]
        - generic [ref=e82]:
          - heading "Anonymous" [level=1] [ref=e83]
          - heading "We don't track you. We don't track your data." [level=2] [ref=e84]
          - paragraph [ref=e85]: We value privacy and we know that you do, too. Our focus is on providing a cool file sharing service, not aggregating or selling your personal data for profit.
          - paragraph [ref=e86]: Users are not required to create an account or provide any personal information in order to upload or download files.
          - paragraph [ref=e87]: Our server log files contain no personal identifying information. All uploaded files are permanently deleted once they have been downloaded or reached their expiration date. We do not maintain backups of shared files.
      - generic [ref=e89]:
        - img "Secure" [ref=e92]
        - generic [ref=e93]:
          - heading "Secure" [level=1] [ref=e94]
          - heading "Your files are safe with us." [level=2] [ref=e95]
          - paragraph [ref=e96]:
            - text: Your data is encrypted every step of the way. All communications to, from and among our servers including file uploads, file downloads and API requests is encrypted via
            - link "HTTPS/TLS" [ref=e97] [cursor=pointer]:
              - /url: https://en.wikipedia.org/wiki/Transport_Layer_Security
            - text: . In addition, as your uploaded file data is saved to our servers, it is re-secured using military-grade encryption.
          - paragraph [ref=e98]: Maintaining data security requires constant vigilance. We perform regular reviews of our security infrastructure and apply patches and upgrades immediately as required. All staff are required to undergo regular training to be sure that they understand and abide by security policies and best practices.
          - paragraph [ref=e99]: Sharing your files with file.io is also inherently more secure when compared to sending the files via email, chat or other cloud storage solutions. Since files are automatically deleted once they are downloaded or expired, there is no forgotten data hanging around in the cloud. The securest data is the data that's not even there!
      - generic [ref=e101]:
        - img "Free" [ref=e104]
        - generic [ref=e105]:
          - heading "FREE!" [level=1] [ref=e106]
          - heading "Maybe even better than free." [level=2] [ref=e107]
          - paragraph [ref=e108]: File.io is free to use with no gotchas and no hidden fees. No account or credit card is required to get started. Simply upload your files and share the link. Your wallet will be none-the-lighter!
          - paragraph [ref=e109]: "Just so we’re all 100% clear here: When you share a file, data is being transferred between your computer or phone and our servers, then from our servers to your friend’s device. The cost of that data transfer is covered by your internet service or the data plan on your phone. Unfortunately, we can’t make that part free. If only we could, we surely would!"
          - paragraph [ref=e110]: On the other hand, using file.io can actually save you money. When you use file.io, you avoid storing the file you’re sending in your cloud storage or mail server. Files transferred the old-fashioned way tend to pile up and be forgotten about, eventually costing you money in data storage fees. Why pay storage fees for a file that you just wanted to send to a friend or colleague?
          - paragraph [ref=e111]: Also, many team chat apps have limits to the size of files that can be transferred within their apps. Using file.io, you can circumvent those limits without paying to upgrade your team chat service.
      - generic [ref=e113]:
        - heading "Easy to use API" [level=1] [ref=e114]
        - paragraph [ref=e115]: "Try it out:"
        - code [ref=e118]: "$ curl -F \"file=@test.txt\" https://file.io {\"success\":true,\"key\":\"2ojE41\",\"link\":\"https://file.io/2ojE41\",\"expiry\":\"14 days\"} $ curl https://file.io/2ojE41 This is a test $ curl https://file.io/2ojE41 {\"success\":false,\"error\":404,\"message\":\"Not Found\"}"
        - paragraph [ref=e119]: "Or set an expiration:"
        - code [ref=e122]: "$ curl -F \"file=@test.txt\" https://file.io/?expires=1w {\"success\":true,\"key\":\"aQbnDJ\",\"link\":\"https://file.io/aQbnDJ\",\"expiry\":\"7 days\"} $ sleep 604801 $ curl https://file.io/aQbnDJ {\"success\":false,\"error\":404,\"message\":\"Not Found\"}"
        - paragraph [ref=e123]:
          - text: The query param
          - strong [ref=e124]: expires
          - text: must be a positive integer which, by default, represents the number of days until the file will be deleted (defaults to 14 days). If you follow it with
          - strong [ref=e125]: w
          - text: ", it will be the number of weeks."
          - strong [ref=e126]: M
          - text: for months and
          - strong [ref=e127]: "y"
          - text: for years.
        - paragraph [ref=e128]: "You can also send direct text to file.io:"
        - code [ref=e131]: "$ curl --data \"text=this is a secret pw\" https://file.io {\"success\":true,\"key\":\"pgiPc2\",\"link\":\"https://file.io/pgiPc2\",\"expiry\":\"14 days\"} $ curl https://file.io/pgiPc2 this is a secret pw $ curl https://file.io/pgiPc2 {\"success\":false,\"error\":404,\"message\":\"Not Found\"}"
        - paragraph
      - generic [ref=e133]:
        - heading "FAQ" [level=1] [ref=e134]
        - heading "Are there log files or any backups of the file after it is deleted?" [level=2] [ref=e135]
        - paragraph [ref=e136]: No, it is anonymous and we erase everything. Our log files contain no identifying information. There are no backups, and all files are stored encrypted.
        - heading "Is it free?" [level=2] [ref=e137]
        - paragraph [ref=e138]:
          - text: Yes we offer a free plan, as well as some
          - link "paid plans" [ref=e139] [cursor=pointer]:
            - /url: /plans
          - text: .
        - heading "What are some use cases?" [level=2] [ref=e140]
        - paragraph [ref=e141]:
          - link "temporary.pw" [ref=e142] [cursor=pointer]:
            - /url: https://temporary.pw
          - text: is an example of a pretty cool use case. It's a service that generates random temporary passwords. It uses file.io to store the passwords so that they are automatically deleted once they are viewed.
        - heading "What kinds of files can I share?" [level=2] [ref=e143]
        - paragraph [ref=e144]:
          - text: No illegal or copyrighted content is allowed. By using file.io you agree to the
          - link "Terms of Service" [ref=e145] [cursor=pointer]:
            - /url: /tos.html
        - heading "Is there a size limit?" [level=2] [ref=e146]
        - paragraph [ref=e147]: Yes, file transfers are limited to a total of 4 GB.
        - heading "I have a question or comment - how can I contact you?" [level=2] [ref=e148]
        - paragraph [ref=e149]:
          - text: "We would love to hear from you:"
          - link "support@file.io" [ref=e150] [cursor=pointer]:
            - /url: mailto:support@file.io
        - heading "Who are you and how can I trust you?" [level=2] [ref=e151]
        - paragraph [ref=e152]:
          - text: file.io is a project of
          - link "Mr Cowboy LLC" [ref=e153] [cursor=pointer]:
            - /url: http://mrcowboy.com
          - text: . It was created simply out of the joy of trying to build cool things on the internet, and we thought it may be useful for others. We take privacy very seriously and do not save any data once it has been deleted.
        - heading "How did you get such a great domain name?" [level=2] [ref=e154]
        - paragraph [ref=e155]:
          - text: From the awesome service at
          - link "park.io" [ref=e156] [cursor=pointer]:
            - /url: http://park.io
          - text: "- they have a lot of great"
          - link "startup domain names" [ref=e157] [cursor=pointer]:
            - /url: http://park.io
          - text: for hackers.
  - contentinfo [ref=e158]:
    - generic [ref=e159]:
      - list [ref=e161]:
        - listitem [ref=e162]:
          - img [ref=e163]
        - listitem [ref=e175]:
          - text: © 2022
          - link "Mr Cowboy LLC" [ref=e176] [cursor=pointer]:
            - /url: http://mrcowboy.com
      - list [ref=e178]:
        - listitem [ref=e179]:
          - link "Terms of Service" [ref=e180] [cursor=pointer]:
            - /url: /tos
        - listitem [ref=e181]:
          - link "Privacy Policy" [ref=e182] [cursor=pointer]:
            - /url: /privacy
        - listitem [ref=e183]:
          - link "Contact" [ref=e184] [cursor=pointer]:
            - /url: /contact
        - listitem [ref=e185]:
          - link "Advertise" [ref=e186] [cursor=pointer]:
            - /url: https://bid.glass/file.io
      - generic [ref=e189]:
        - link [ref=e191] [cursor=pointer]:
          - /url: https://twitter.com/filedotio
          - img [ref=e192]
        - link [ref=e195] [cursor=pointer]:
          - /url: https://www.facebook.com/file.io
          - img [ref=e196]
        - link [ref=e199] [cursor=pointer]:
          - /url: https://www.reddit.com/r/fileio
          - img [ref=e200]
        - link [ref=e203] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/file-io
          - img [ref=e204]
        - link [ref=e207] [cursor=pointer]:
          - /url: https://github.com/file-io
          - img [ref=e208]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Single and Multiple File Upload', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://testautomationpractice.blogspot.com/');
  6  | 
  7  |     // Scroll to the file upload section
  8  |     await page.locator('#singleFileInput').scrollIntoViewIfNeeded();
  9  | 
  10 |     // Single File Upload
  11 |     await page.locator('#singleFileInput').setInputFiles("C:/Users/Lenovo/Downloads/DevOps_Resume.pdf");
  12 |     await page.waitForTimeout(5000)
  13 | 
  14 |     // // Assertion (optional)
  15 |     // await expect(page.locator('#singleFileInput')).toHaveJSProperty('files');
  16 | 
  17 |     // // Multiple File Upload
  18 |     await page.locator('#multipleFilesInput').setInputFiles([]);
  19 | 
  20 |     // Click Upload button (if available)
  21 |     // await page.locator("button:has-text('Upload Multiple Files')").click();
  22 | 
  23 | });
  24 | 
  25 | test.only('Single Upload', async({ page })=>{
  26 |     await page.goto('https://www.file.io/');
  27 | 
  28 |     await page.waitForSelector('//label[@class="css-zpjtsm e12cce780"]'); 
  29 |     await page.locator('//label[@class="css-zpjtsm e12cce780"]').click();
> 30 |     await page.locator('input[id="upload-folder"]').setInputFiles("C:/Users/Lenovo/Downloads/DevOps_Resume.pdf");
     |     ^ Error: locator.setInputFiles: Error: [webkitdirectory] input requires passing a path to a directory
  31 |     await page.waitForTimeout(5000);
  32 | })
  33 | 
  34 | 
  35 | 
  36 | //Single file
  37 | // await page.locator('#singleFileInput')
  38 | //           .setInputFiles('tests/files/sample.pdf');
  39 | 
  40 | // //Multiple file
  41 | // await page.locator('#multipleFilesInput')
  42 | //           .setInputFiles([
  43 | //               'tests/files/sample.pdf',
  44 | //               'tests/files/image.png'
  45 | //           ]);
  46 | // //Remove
  47 | // await page.locator('#singleFileInput').setInputFiles([]);
```