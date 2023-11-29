# Getting Started with a typical Milan's project.

Hello everyone,

this project should demonstrate my skills and experience.
I hope that you are able to run it smoothly and without any issues.

I work in Windows and I'm unfortunately unable to validate if it is possible to run my project smoothly under macOS.

First, you can start with the server part.
In your command line (PowerShell), open the folder cocos-server and run:
`yarn install`
This will install all packages which you need to run this part of the project.
It takes a few minutes (depending on the internet connection and your HW).

After that, you can run
`yarn dev`
This will run the server node on port 1492.

The next step is to run the thin client.
Open cocos-client folder and follow the same procedure as with the server.

In your command line run command
`yarn install`
This will install all packages needed for the client to run.
After the installation finished, run:
`yarn dev`

It runs web which you can open in your preferred web browser on http://localhost:8000 .
