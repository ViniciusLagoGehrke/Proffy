##on laptop using VS CODE:
  * change index.html location to src
  * install and import node
  * install git bash
  * npm init -y

#on pachage.json clean all except
  * name, script

#criando o servidor
  * npm install express
  * npm install nodemon -D
  * create server.js inside src folder

# inside src/server.js
"
require('express')()
  .get("/", (req, res) => {
      return res.send("Hi from NLW")
  })
  .get("/study", (req, res) => {
    return res.send("Página study")
  })
  .listen(5500)

"

* delete repl.it

