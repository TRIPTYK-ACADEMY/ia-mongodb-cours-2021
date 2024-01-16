# ia-mongodb-cours-2021

# SCRIPT

## SUR WINDOWS 

./exec-script.bat

## SUR LINUX

bash exec-script.bash

## Manuellement

1. `docker exec -it mongo-db /bin/bash`
2. `mongosh mongodb://root:test123@127.0.0.1:27017/?authSource=admin`
3. `load('script.js')`

