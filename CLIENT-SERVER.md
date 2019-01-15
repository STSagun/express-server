# <p align="center"> CLIENT-SERVER ARCHITECTURE</p>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GctqQWNsX3wJ7PesmwvMvtM03uMHnmPAiqybExC_pAxvLrfPDQ" height="100"  align="left">    Client-server architecture (client/server) is a network architecture in which each computer or process on the network is either a client or a server. Servers are powerful computers or processes dedicated to managing disk drives (file servers), printers (print servers), or network traffic (network servers).

> ## _How a request get served_
 Web browsers communicate with web servers using the HyperTextTransfer Protocol (HTTP). When you click a link on a web page, submit a form, or run a search, the browser sends an HTTP Request to the server.
 This request includes:
 * A URL identifying the target server and resource (e.g. an HTML file, a particular data point on the server, or a tool to run).
* A method that defines the required action (for example, to get a file or to save or update some data). The different methods/verbs and their associated actions are listed below:
     * GET: Get a specific resource (e.g. an HTML file containing information about a product, or a list of products).
    * POST: Create a new resource (e.g. add a new article to a wiki, add a new contact to a database).

Web servers wait for client request messages, process them when they arrive, and reply to the web browser with an HTTP Response message. The response contains an HTTP Response status code indicating whether or not the request succeeded (e.g. "200 OK" for success, "404 Not Found" if the resource cannot be found, "403 Forbidden" if the user isn't authorised to see the resource, etc). The body of a successful response to a GET request would contain the requested resource.


