#!/bin/bash

SERVER="postgres";
PW="vwillian";
DB="cygnus";

# create the db 
echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
echo "\l" | docker exec -i $SERVER psql -U postgres

echo "========================================"
echo "please run:"
echo ">>> npm run typeorm:migration:run"
echo ">>> npm run start:dev:db:seed-data"
echo ">>> npm run start:dev";