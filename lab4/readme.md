# NPM project

1. create project folder
2. right click on project folder and select reveal in terminal

3. type in terminal 'npm init -y' press enter
4. open package.json file from project folder
5. update 'type:module' in packege.json
     
6. type in terminal 'npm i nodeman -D' to install nodeman, which restarts server while file changes -D flag indicate install in dev dependency
7. it creates node_modules folder and packege-lock.json
8. update .gitgnore file and write project-folder/node.modules
9. update packege .json to run the project, update script properlyas below:
'''
"scripts": {
    "start": "node app.js",
    "dev": "nodeman app.js"
  },
'''
10. now you can start the server by typing 'npm run dev' in the terminal of project folder