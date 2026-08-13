# File System of NodeJs
It allows Js code running outside the browser and interact directly to operating system 

# common operation on the file/folder

- Reading and writing files  -> readFile() , writeFile() , appendFile()
- Directory Management -> mkdir(), rmdir(), readdir()
- Metadata/information -> stat() , lstat(), fstat()
- Watching for changes -> watch(), watchFile(), unwatchFile()
- Streaming Large Files -> createReadStream(), createWriteStream()
- File Operation -> rename() , truncate() , unlink() , link() , syslink()


await can be used with any promise in a sync function. That a sync function will also accessed by away keyword