# ux_directory_app

Author: Katelyn Lensch


## Getting Started
```
cd ux-directory-app
npm install
npm install -g bower
```

##Prepare App to Run on Cloud9
```
mv package.json package.json.bak
jq '.scripts.start="http-server -a $IP -p $PORT"' package.json.bak > package.json
```

### Run the Application
```
npm start
```

Now browse to the app at `http://localhost:8000/app/`.

