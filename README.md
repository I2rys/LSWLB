# LSWLB
Blazing fast Linksys Smart Wi-Fi login bruteforcer.

## Installation
Github:
```
git clone https://github.com/I2rys/LSWLB
```

NpmJS:
```
npm i request-async fs
```

## Usage
```
node index.js <url> <username> <dictionary>
```

+ url - The url of the Linksys Smart Wi-Fi login page.
+ username - The username of the admin.
+ dictionary - The passwords to use for bruteforcing.

## Note
If you don't know how to get the admin username. Go to the login page then open Inspect and go to Network, now find "Access Router" in the login page below it type a random word then click "Sign In", find a sent request that has "/JNAP/" in It's link now find "X-JNAP-Authorization" in the request headers of the sent request get the value then decode it using a Base64 decoder then before the : is the admin username.

## License
MIT © I2rys
