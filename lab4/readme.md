# NPM Project 

1. Create Project Folder
2. right click on project folder and select open integrated terminal 
![alt text](image.png)
3. type in terminal `npm init -y` press enter
4. open package.json file from project folder 
5. Update type as `type:module` in package.json 
![alt text](image1.png)
6. type in terminal `npm i nodemon -D` to install , which restarts server while changes . -D flag indicate install as dev dependancy 
7. it creates node_modules folder and package-lock.json
8. update  .getignore file and write project-folder/node_modules
9. update package.json to run the project , update scripts property as below 
![alt text](image2.png)
```
"scripts": {
    "start": "node app.js",
    "dev": nodemon app.js"
},
```
10. now you can start the server by typing `npm run dev` in the teeminal of project folder