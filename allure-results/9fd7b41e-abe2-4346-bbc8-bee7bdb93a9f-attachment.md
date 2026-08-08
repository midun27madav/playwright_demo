# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Handleframe.spec.js >> Nested frames
- Location: tests\Handleframe.spec.js:23:1

# Error details

```
Error: locator.fill: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//div[@jscontroller="sWGJ4b"]/descendant::div[@class="Xb9hP"]/input]' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6136:25)
    at InjectedScript._queryEngineAll (<anonymous>:6804:49)
    at InjectedScript.querySelectorAll (<anonymous>:6791:30)
    at eval (eval at evaluate (:303:30), <anonymous>:2:39)
    at UtilityScript.evaluate (<anonymous>:305:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('//div[@jscontroller="sWGJ4b"]/descendant::div[@class="Xb9hP"]/input]')

```