# JWT Authentication Server

I created this project to learn about API and web app authentication.
I found that a lot of tutorials out there show how to do basic authentication,
but many of them do not finish explaining things or, they do not follow the
[The OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749).

## Issues with current project state

It is not a good idea to use this project for any production grade authentication.
There are some(defiantly not all) edge cases that need to be addressed:

1. Users can use a refresh token as an access token.
    1. **Suggested fix**: run the refresh token through `bycrypt`.
2. You cannot force unauthorize access tokens

## TODO

- [] Run refresh tokens through `bycrpt` to prevent them from being abused as access tokens
- [] Add ability to force unauthorize access tokens
- [] Add MySql to docker
- [] Make Auth controller and associated functions into an object
- [] Add swagger documentation
- [] Store encrypted access tokens as a cookie?
