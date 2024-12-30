# WEB102 Prework - *Sea Monster Crowdfunding*

Submitted by: **Ajani Levere**

**Sea Monster Crowdfunding** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **8** hours mins spent in total

## Required Features

The following **required** functionality is completed:

* [X] The introduction section explains the background of the company and how many games remain unfunded.
* [X] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [X] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [X] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [ ] List anything else that you can get done to improve the app functionality!
* [X] Changing page background color, positioning, and color of title text
* [X] Can search for a game, using Fuse API for near matches
* [X] Modal popup as a result for searching a game, displaying how close a game is to its goal
* [X] Modal popup shows donate button if pledge amount is less than goal

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='./assets/DEMO.gif' title='Video Walkthrough' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

Researched "header" tag as a more visually appealing way to present game name and description in the cards.

Implementing Fuse.js was challenging to do locally, but setting the fuse object as a global variable within the file made it able to be accessed across all JS files. As a result, I was able to use it in search.js file for searching for a game.

I also had some challenges with using flexbox in the modal to arrange the information how I wanted it to. By experimenting and playing around with it, it came out how I wanted.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
