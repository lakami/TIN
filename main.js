const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; //port na którym działa serwer

const mainPageRoute = require('./routes/mainPage');
app.use(cors({
    origin: "*",
    credentials: true
})); //nagłówek Access-Control-Allow-Origin będzie miał zawartość "*", a więc przeglądarka nie zablokuje zapytania z aplikacji react - działającej domyślnie na porcie 3000
app.use(bodyParser.json()); //parsowanie danych z formularza
app.use(bodyParser.urlencoded({extended: false})); //parsowanie danych z formularza

app.use('/server', mainPageRoute); //wejście do api po http://localhost:3000/server

app.use(express.static(path.join(__dirname, '/public/build'))); //zapytanie o plik główny

app.use('/images' ,express.static(path.join(__dirname, '/images'))); //zapytanie o pliki graficzne

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/public/build/index.html'));
}); //pozostałe pliki statyczne, dodatkowe zasoby gdzie serwer ma ich szukać


app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});