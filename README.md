Simple React Host With Proxy
-----------------------------

This is for testing react apps in a way closer to production. Just copy the result of your build to the build folder and
run.

Any requests to /api are redirected to http://localhost:8080

Anything else is either served statically from the /build dir or served index.html

## running

copy your built node app to the build folder in the root of this project

