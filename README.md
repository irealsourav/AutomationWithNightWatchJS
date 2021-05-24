# AutomationWithNightWatchJS
Prerequisites to run the project ::
======================================
* NodeJS and NPM should be installed and version should be v15 and 7.14.0 respectively.
* install nightwatch globally :: npm install nightwatch --save -g so that code caould be run from anywhere in the machine.
* After installation check the version as well to make sure it installed correctly.

How to run ::
================

1. At first ,do follow prerequisites.
2. clone this repository to local machine. 
3. Go to the root of this repo.
4. Now, verify package.json is visible from this location or not.
5. Now, open terminal and type npm install.
7. Now,type nightwatch tests/E2EScenario.js and it will run the test.

Project structure and few project insights::  
==============================================

* I have implemented the **Page Object Model** pattern and I have created one folder with **page_objects** where I have kept all the pages.
* I have created one test folder and kept the test spec **"E2EScenario.js"** inside it.
* I have created an **package.json** file  and kept all the dependencies inside it.  
*  I have created **dynamic waits** wherever required for better synchronization.
*  I have added several **assertions** to check whether the test script is not giving any false positive result and executing smoothly.
*  I have used Hooks like **before** and **after**.
*  










