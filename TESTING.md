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
Interactive elements should result in the expected or at least not an undesirable way when interacted with.
### Test
Through testing of interactive elements was conducted throughout the development process with many repeaded "playthroughs" of the game to check the the outcomes were consistently as expected throughout and at the end. I moved from screen to screen in each and every conbination an order that I could think of. I played the game, chosing every option and every conbination to get each of the 6 outcomes. Likewise with the options controls for sound and localStorage deletion.
### Result
Not always did things respond in the way they should be, at those times I returned to the code and would problem solve whatever issue had been recently introduced. However, but the end all issues were resolved and everythng functioned as indended.
### Fix
Frequent reajustments to code througout development.

## Peformance
### Expected
The site should load quickly.
### Test
Using Lighthouse from Chrome Developer tools, I ran a report.
### Result
The report flagged up 4 main issues impacting loading speed.
1. The linked Google Fonts needing to load before being abel to render the rest of the document.
2. Image file sizes.
3. Code that has not been minified.
4. Code that was not used (primarily from jQuery)
### Fix
I updated the images used from JPEGs to WebP files,reducing their filezise in half form ~200KB to ~100KB thereby increading the load speed.
I replaced the jQuery that I was using with the minimised verison of it, also speeding up the load time.
### Unresolved
Unfortunatley I do want to use the fonts that I am getting from Google Fonts, so it is still there slowing things up slightly.
I only used a small amount of jQuery when compared to the entire library, it miht be possible to strip out the parts of the library that I am not using, but that is not something I'm currently confident to carry out without causing issue at the moment.## Functionality
### Expected
Interactive elements should result in the expected or at least not an undesirable way when interacted with.
### Test
Thorough testing of interactive elements was conducted throughout the development process with many repeated "playthroughs" of the game to check the outcomes were consistently as expected throughout and at the end. I moved from screen to screen in each and every combination in and order that I could think of. I played the game, choosing every option and every combination to get each of the 6 outcomes. Likewise with the options controls for sound and localStorage deletion.
### Result
Not always did things respond in the way they should be, at those times I returned to the code and would problem solve whatever issue had been recently introduced. However, in the end all issues were resolved and everything functioned as intended.
### Fix
Frequent adjustments to code throughout development.
 
## Performance
### Expected
The site should load quickly.
### Test
Using Lighthouse from Chrome Developer tools, I ran a report.
### Result
The report flagged up 4 main issues impacting loading speed.
1. The linked Google Fonts needing to load before being able to render the rest of the document.
2. Image file sizes.
3. Code that has not been minified.
4. Code that was not used (primarily from jQuery)
### Fix
I updated the images used from JPEGs to WebP files,reducing their filezise in half from ~200KB to ~100KB thereby increasing the load speed.
I replaced the jQuery that I was using with the minimised version of it, also speeding up the load time.
### Unresolved
Unfortunately I do want to use the fonts that I am getting from Google Fonts, so it is still there slowing things up slightly.
I only used a small amount of jQuery when compared to the entire library, it might be possible to strip out the parts of the library that I am not using, but that is not something I'm currently confident to carry out without causing issues at the moment.
 
 
## Accessibility
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