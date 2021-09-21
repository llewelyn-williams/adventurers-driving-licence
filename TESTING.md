# Testing


## JSLint
### Expected
The code is expected to pass without any major issues highlighted.
### Test
Pasted JavaScript into [JSLint](https://www.jslint.com/) and ran the test.
### Result
A large number of warnings were issued but no errors.
### Fix
Where there were warnings for missing semicolons and the same variable being declared twice I went back to my code and made the changes and retested the code until those warnings were no longer there.


## WC3 Markup Validation 
### Expected
The site is expected to pass validation with no errors.
### Test
I supplied the GitHub Pages address of the site to [The WC3 Markup Validation Service](https://validator.w3.org/) and ran the test.
### Result
There were no errors but 4 warnings. Two warnings were for missing spaces between attributes and another two were because of sections elements that did not have any heading elements.
### Fix
I added in the missing spaces where they were needed, I also deleted one of the sections that was producing the warning as it was not needed. After re-running the test with the updated markup, only one warning remained, I opted not to add a heading to this section because of how it would have affected the design.


## Jigsaw CSS Validation
### Expected
The site is expected to pass validation with no errors.
### Test
I supplied the GitHub Pages address of the site to [The WC3 CSS Validation Service](https://jigsaw.w3.org/css-validator/) and ran the test.
### Result
The CSS passed with no errors.


## Responsiveness
### Expected
Throughout the different sections the design should remain well laid out regardless of the device size
### Test
Using Google Developer Tools I changed to each device available to see how the lawy out looked, as well as using the "responsive" layout and changing the shape and size of the viewport with the drag handles. I did this repeatedly during the development process and again at the end.
### Result
Throughout development, on occasion I discovered elements that were not displaying how I thought they ought to be, for example appearing off the screen or out of alignment with other elements. However, by the end I was satisfied that the elements were all appearing in a satisfactory position / proportion.
### Fix
As and when issues were spotted I amended styles for the elements to ensure that everything fit and flowed. Where necessary I added media queries for different device sizes or orientation.


## Functionality
### Expected
...
### Test
...
### Result
...
### Fix
...

## Peformance
### Expected
...
### Test
...
### Result
...
### Fix
...


## Accessibillity
### Expected
...
### Test
... Lighthouse, contrast specific
### Result
...
### Fix
...


## SEO
### Expected
...
### Test
...
### Result
...
### Fix
...