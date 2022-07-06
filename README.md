# Homemade CI Default App

This is nothing more than an express app that returns the "Deployment not found" page.

It is intended to be used with [Homemade CI Template](https://github.com/tithanayut/hmci-template) as a wildcard route that will notify a user that a particular deployment is no longer or yet to exist. More importantly, this also serves as a service for router that makes Traefik request a wildcard TLS/SSL certificate on initialization for future use. See [Homemade CI Template](https://github.com/tithanayut/hmci-template) for more details.
