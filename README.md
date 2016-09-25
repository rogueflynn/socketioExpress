All I'm doing is testing functionality between node, parse server and socket.io.  

The project uses the express generator, socket.io and parse server.

I can currently query the parse database and pass it to socket.io using 
a combination of the response and io object. This updates the data in real time.

Using the refernces below, the app can now send realtime requests to the server
and the server can respond in real time.  The data can be saved to parse (mongodb)
within the socket. For whatever reason, the app cannot run parse queries and return 
the data from within the socket.  So far, this is only achieved by running the query
and returing the io object as a response object.  


References:





