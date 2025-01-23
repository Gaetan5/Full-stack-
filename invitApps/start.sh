#!/bin/bash

# Variables
BACKEND_DIR="./backend"
FRONTEND_DIR="./frontend"

# Lancer le serveur Flask
echo "Starting Flask server..."
cd $BACKEND_DIR
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi
source venv/bin/activate
pip install -r requirements.txt
flask run --host=0.0.0.0 &

# Lancer le serveur Next.js
echo "Starting Next.js server..."
cd ../$FRONTEND_DIR
npm install
npm run dev
