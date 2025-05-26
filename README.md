# Zarautz Web (front)


## REQUISITOS Y TECNOLOGÍAS
- React Vite
- Rutas con React Router
- Manejo de usuarios y autenticación con JWT
- Gestión de imágenes múltiples con multer
- Enfoque Mobile First


## PUESTA EN MARCHA
Para poder visualizar e interactuar con este proyecto, necesitas la parte de [Backend de Zarautz](https://github.com/jauregiazcue/backend_individual_project). Sigue las instrucciones del README del BackEnd para ponerlo en marcha.

Una vez configurado el BackEnd, para acceder al FrontEnd, necesitas ejecutar el comando:
```
npm install
```
Una vez ejecutado el install (se hace una sola vez), podrás acceder al Front siempre utilizando este otro comando y accediendo al link que se te proporciona en **Local:**:
```
npm run dev
```

## ESTRUCTURA DEL PROYECTO
```
src
├── eslint.config.js
├── index.html
│   ├── api
│   │   ├── auth.js
│   │   ├── fetch.js
│   │   ├── objectCat.js
│   │   └── object.js
│   ├── assets
│   │   ├── bag.jpg
│   │   ├── bicicle.jpg
│   │   ├── carousel
│   │   │   ├── 1.jpg
│   │   │   ├── 2.jpg
│   │   │   ├── 3.jpg
│   │   │   ├── 4.jpg
│   │   │   ├── 5.jpg
│   │   │   └── 6.jpg
│   │   ├── clothes.jpg
│   │   ├── creditCard.jpg
│   │   ├── electronics.jpg
│   │   ├── joyas.jpg
│   │   ├── key.jpg
│   │   ├── logo.png
│   │   ├── other.jpg
│   │   ├── telephones.jpg
│   │   └── udaltzaingoIcon.jpeg
│   ├── components
│   │   ├── button
│   │   │   ├── Button.css
│   │   │   └── Button.jsx
│   │   ├── carousel
│   │   │   ├── Carousel.css
│   │   │   └── Carousel.jsx
│   │   ├── footer
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── header
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── lostCard
│   │   │   ├── LostCard.css
│   │   │   └── LostCard.jsx
│   │   ├── lostControlCard
│   │   │   ├── LostControlCard.css
│   │   │   └── LostControlCard.jsx
│   │   ├── nav
│   │   │   ├── Nav.css
│   │   │   └── Nav.jsx
│   │   ├── searchFilter
│   │   │   └── SearchFilter.jsx
│   │   └── verticalNav
│   │       ├── VerticalNav.css
│   │       └── VerticalNav.jsx
│   ├── content
│   │   ├── AuthContext.jsx
│   │   └── routeContext.jsx
│   ├── main.jsx
│   └── pages
│       ├── city
│       │   ├── City.css
│       │   └── City.jsx
│       ├── home
│       │   ├── Home.css
│       │   └── Home.jsx
│       ├── lostAndFound
│       │   ├── LostAndFound.css
│       │   └── LostAndFound.jsx
│       ├── lostList
│       │   ├── LostList.css
│       │   ├── LostList.jsx
│       │   └── LostListNav.jsx
│       ├── municipalPolice
│       │   ├── login
│       │   │   ├── Login.css
│       │   │   └── Login.jsx
│       │   ├── Municipal.jsx
│       │   └── objectControl
│       │       ├── ObjectControl.css
│       │       └── ObjectControl.jsx
│       └── root
│           ├── App.css
│           ├── Root.jsx
│           └── Router.jsx
└── vite.config.js
```