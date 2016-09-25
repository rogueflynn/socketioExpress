All I'm doing is testing functionality between node, parse server and socket.io.  

The project uses the express generator with EJS views, socket.io and parse server.

I can currently query the parse database and pass it to socket.io using 
a combination of the response and io object. This updates the data in real time.

Using the refernces below, the app can now send realtime requests to the server
and the server can respond in real time.  The data can be saved to parse (mongodb)
within the socket. For whatever reason, the app cannot run parse queries and return 
the data from within the socket.  So far, this is only achieved by running the query
and returing the io object as a response object.  


References:
http://stackoverflow.com/questions/24609991/using-socket-io-in-express-4-and-express-generators-bin-www

http://chariotsolutions.com/blog/post/getting-chatty-angular-socket-io-nodeexpress-bootstrap/

https://onedesigncompany.com/news/express-generator-and-socket-io


