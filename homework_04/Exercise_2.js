// Exercise 2 
//Create a Reactive HTTP server that serves simple .txt files, where the file name is passed in the request as query parameter. 
// The file path is provided in the URL like this: http://localhost:4000/?url=path/to/my/file.txt 
//Reading the file should be in a separate child process: From the main process, send the filename to the child 
//process to start reading the file in chunks as stream, send every chunk back to the main process and to the response, 
//once the reading stream emit "end" then you should send a signal to the main process to end the response. 
//For more help check the stream API details: https://nodejs.org/api/stream.html 