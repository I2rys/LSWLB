<h1 align="center">LSWLB</h1>
<h4 align="center">Blazing fast Linksys Smart Wi-Fi login bruteforcer</h4>
<p align="center">
	<a href="https://github.com/I2rys/LSWLB/blob/main/LICENSE"><img src="https://img.shields.io/github/license/I2rys/LSWLB?style=flat-square"></img></a>
	<a href="https://github.com/I2rys/LSWLB/issues"><img src="https://img.shields.io/github/issues/I2rys/LSWLB.svg"></img></a>
	<a href="https://nodejs.org/"><img src="https://img.shields.io/badge/-Nodejs-green?style=flat-square&logo=Node.js"></img></a>
</p>


## Installation
Github:

    git clone https://github.com/I2rys/LSWLB

NPM Packages:

    npm i base-64 && npm i request
    
## Usage

    node index.js <url> <username> <dictionary>

+ url - The url of the Linksys Smart Wi-Fi login page.
+ username - The username of the admin.
+ dictionary - The passwords to use for bruteforcing.

## Note
If you don't know how to get the admin username. Go to the login page then open Inspect and go to Network, now find "Access Router" in the login page below it type a random word then click "Sign In", find a sent request that has "/JNAP/" in It's link now find "X-JNAP-Authorization" in the request headers of the sent request get the value then decode it using a Base64 decoder then before the : is the admin username.

## License
MIT © I2rys
