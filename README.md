# Tourist Weather App

**Ciaușescu Mircea, gr. 1132**

---

## Link-uri utile

- [Aplicație publicată](https://tourist-weather-app.vercel.app/)
- [Video prezentare proiect](https://youtu.be/VAdq2wEcrxk)
- [Documentația completă](https://docs.google.com/document/d/1gsdxRzdwfrMJfrt6n_o_t8lf72u5p8xmccUdjswKod8/edit?usp=sharing)

---

## 1. Introducere

**Tourist Weather App** este o aplicație web care oferă informații meteo actualizate și detalii despre obiective turistice din România. Aplicația integrează două servicii cloud:
- **OpenWeatherMap** pentru date meteo
- **MongoDB Atlas** pentru stocarea și gestionarea datelor despre obiectivele turistice

Utilizatorii pot căuta un obiectiv turistic, pot vedea vremea actuală și pot accesa informații utile despre activități, facilități, perioada optimă de vizitare și sfaturi practice.

---

## 2. Descriere problemă

Planificarea unei excursii implică accesarea mai multor surse pentru a obține date relevante despre destinație: vreme, activități, facilități, recomandări.  
**Tourist Weather App** centralizează aceste informații într-o singură interfață, simplificând procesul de informare și ajutând utilizatorii să ia decizii mai bune privind planificarea călătoriilor.

---

## 3. Descriere API

### Servicii cloud folosite

- **OpenWeatherMap API**  
  Oferă date meteo actualizate pentru orice locație.  
  Accesul se face pe bază de cheie API.

- **MongoDB Atlas**  
  Bază de date NoSQL în cloud, folosită pentru stocarea și gestionarea datelor despre obiectivele turistice.  
  Accesul la date se face printr-un API REST propriu (backend Node.js/Express).

### Structura API-ului

- **OpenWeatherMap**  
  `GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}`

- **Backend propriu (Node.js/Express)**  
  - `GET /api/obiective` – lista obiectivelor turistice  
  - `GET /api/obiective/{id}` – detalii despre un obiectiv turistic

---

## 4. Flux de date

1. Utilizatorul accesează aplicația și selectează un obiectiv turistic.
2. Frontend-ul trimite un request către backend pentru a obține detalii despre obiectiv (din MongoDB Atlas).
3. Frontend-ul trimite un request către OpenWeatherMap pentru a obține datele meteo pentru locația respectivă.
4. Datele sunt afișate în interfață.

### Exemple de request/response

#### Request către backend (obiective turistice)

```http
GET https://tourist-weather-app-production.up.railway.app/api/objectives/1
```

**Response:**
```json
{
  "_id": "6832ea40b27e5cf6d2752769",
  "objectiveId": 1,
  "name": "Lacul Colibița",
  "description": "Lacul Colibița este un lac de acumulare situat în Munții Călimani, județul Bistrița-Năsăud. Construit în 1991, lacul are o suprafață de 270 hectare și este înconjurat de păduri de conifere și pajiști alpine. Este un loc ideal pentru relaxare, activități nautice și drumeții montane.",
  "activities": [
    "Pescuit",
    "Plimbări cu barca",
    "Hiking",
    "Fotografie",
    "Camping",
    "Ciclism montan"
  ],
  "facilities": [
    "Restaurant",
    "Cazare",
    "Parcare",
    "Închiriere bărcuțe",
    "Pontoane",
    "Toalete"
  ],
  "bestTime": "Mai - Septembrie",
  "tips": "Se recomandă echipament de drumeție pentru traseele din zonă. Lacul este perfect pentru pescuitul păstrăvului. Temperatura apei este rece chiar și vara, așa că aduceți echipament adecvat.",
  "history": "Lacul a fost creat prin construirea unui baraj pe râul Bistrița în 1991. Zona este cunoscută pentru frumusețea peisajelor montane și pentru fauna bogată.",
  "altitude": "850m",
  "depth": "35m"
}

```

### Metode HTTP

- `GET` pentru obținerea datelor despre obiectivele turistice din backend (MongoDB Atlas)
- `GET` pentru obținerea datelor meteo din OpenWeatherMap

### Autentificare și autorizare

- **OpenWeatherMap API**: Accesul se face pe bază de cheie API, transmisă ca parametru în URL.
- **MongoDB Atlas**: Accesul la baza de date se face prin intermediul backend-ului, care gestionează conexiunea securizată cu baza de date. Utilizatorul final nu are acces direct la baza de date, ci doar la datele expuse de API-ul backend-ului.

---

## 5. Capturi ecran aplicație

### Acestea pot fi văzute pe site sau în documentația completă a proiectului.

---

## 6. Referințe

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [Express.js Documentation](https://expressjs.com/)
- [Vercel](https://vercel.com/)
- [REST API Concepts](https://restfulapi.net/)
- [MDN Web Docs – Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

