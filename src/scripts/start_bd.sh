#!/bin/bash

SERVER="postgres";
PW="vwillian";
DB="cygnus";

# create the db 
echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
echo "\l" | docker exec -i $SERVER psql -U postgres

echo "========================================"
echo "please run:"
echo ">>> yarn typeorm migration:create -n <tableName>"
echo ">>> yarn typeorm migration:run"
echo ">>> yarn start:dev";