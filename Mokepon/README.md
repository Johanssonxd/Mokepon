# 🐾 Mokepon!

Juego multijugador en tiempo real inspirado en Pokémon, desarrollado con JavaScript vanilla en el frontend y Node.js + Express en el backend. Los jugadores se mueven por un mapa, colisionan entre sí y pelean con un sistema de ataques por turnos basado en Piedra, Papel o Tijera.

---

## 🎮 ¿Cómo se juega?

1. Abre el juego en tu navegador
2. Elige tu **Mokepon** entre los 6 disponibles
3. Muévete por el mapa hasta **colisionar con otro jugador**
4. Selecciona tus **5 ataques** en orden
5. El resultado se calcula comparando ataque por ataque
6. ¡El que gane más rondas, gana la pelea!

### ⚔️ Sistema de combate

| Ataque | Gana a | Pierde contra |
|--------|--------|----------------|
| 🔥 Fuego | 🌱 Tierra | 💧 Agua |
| 💧 Agua | 🔥 Fuego | 🌱 Tierra |
| 🌱 Tierra | 💧 Agua | 🔥 Fuego |

---

## 🐉 Mokepones disponibles

| Mokepon | Tipo principal | Ataques |
|---------|---------------|---------|
| Hipodoge | 💧 Agua | 3×Agua, 1×Fuego, 1×Tierra |
| Capipepo | 🌱 Tierra | 3×Tierra, 1×Fuego, 1×Agua |
| Ratipot | 🔥 Fuego | 3×Fuego, 1×Agua, 1×Tierra |
| Langostel | 🔥🔥💧💧 | 2×Fuego, 2×Agua, 1×Tierra |
| Tucapalma | 💧🌱 | 2×Agua, 2×Tierra, 1×Fuego |
| Pydos | 🌱🔥 | 2×Tierra, 2×Fuego, 1×Agua |

---

## 🗂️ Estructura del proyecto

```
Mokepon/
├── public/               # Frontend (servido estáticamente)
│   ├── index.html        # Estructura del juego
│   ├── styles.css        # Estilos
│   ├── codigo.js         # Lógica del cliente
│   └── Imgs/             # Sprites y mapa
│       ├── mapa.png
│       ├── hipodoge.png
│       ├── capipepo.png
│       ├── ratipot.png
│       ├── mokepons_langostel.png
│       ├── Tucapalma.png
│       ├── Pydos.png
│       └── mokepons_*.png
├── index.js              # Servidor Express
├── package.json
└── package-lock.json
```

---

## 🛠️ Tecnologías usadas

- **Frontend:** HTML5, CSS3, JavaScript vanilla, Canvas API
- **Backend:** Node.js, Express
- **Comunicación:** REST API con polling (fetch periódico)
- **Estilos:** Google Fonts (Poppins, Google Sans, Momo Trust Display)

---

## 🚀 Instalación y uso

### Requisitos

- [Node.js](https://nodejs.org/) v14 o superior

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/mokepon.git

# 2. Entra a la carpeta
cd Mokepon

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor
node index.js
```

### Jugar

Abre `http://localhost:8080` en tu navegador.

Para jugar en multijugador abre la misma URL en **dos pestañas o más**.

---

## 🔌 API del servidor

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/unirse` | Registra un nuevo jugador y devuelve su ID |
| POST | `/mokepon/:id` | Asigna un Mokepon al jugador |
| POST | `/mokepon/:id/posicion` | Actualiza la posición y devuelve la lista de enemigos |
| POST | `/mokepon/:id/ataque` | Guarda los 5 ataques del jugador |
| GET | `/mokepon/:id/ataque` | Obtiene los ataques de un jugador (para el rival) |

---

## 🕹️ Controles

| Acción | Teclado | Móvil |
|--------|---------|-------|
| Mover arriba | `↑` | Botón ↑ |
| Mover abajo | `↓` | Botón ↓ |
| Mover izquierda | `←` | Botón ← |
| Mover derecha | `→` | Botón → |

---

## 📝 Notas

- El servidor guarda los jugadores **en memoria**, por lo que se reinicia con el servidor
- El mapa tiene detección de **colisiones** entre mokepones en tiempo real
- Los ataques se procesan de forma **simultánea** una vez que ambos jugadores los envían
