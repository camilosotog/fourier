# Fourier QA Challenge - Automation Module

## Descripción

Este proyecto corresponde al módulo de Automatización de la Prueba Técnica para el cargo de Analista QA Automation.

El framework fue desarrollado utilizando Playwright y TypeScript, implementando el patrón Page Object Model (POM), manejo de variables de entorno mediante dotenv y reportería con Allure.

La aplicación seleccionada para la automatización fue Demoblaze, utilizando un flujo de negocio completo que incluye:

* Inicio de sesión.
* Selección de producto.
* Adición al carrito.
* Confirmación de compra.
* Validación de compra exitosa.

---

# Arquitectura del Proyecto

```text
01-Automation
│
├── pages
├── tests
├── helpers
├── data
├── reports
├── screenshots
│
├── playwright.config.ts
├── package.json
├── .env.example
└── README.md
```

### Componentes principales

**Pages**
Implementación del patrón Page Object Model para encapsular elementos y acciones de cada pantalla.

**Tests**
Contiene los escenarios automatizados organizados por criticidad.

**Helpers**
Funciones reutilizables para manejo de datos, validaciones y utilidades comunes.

**Data**
Datos de prueba utilizados por los escenarios automatizados.

---

# Prerrequisitos

* Node.js v20 o superior
* npm
* Git

Verificar instalación:

```bash
node -v
npm -v
git --version
```

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/camilosotog/fourier.git
cd automation
```

Instalar dependencias:

```bash
npm install
```

Instalar navegadores de Playwright:

```bash
npx playwright install
```

---

# Configuración

Crear un archivo `.env` en la raíz del proyecto:

```env
BASE_URL=https://www.demoblaze.com
```

---

# Ejecución de Pruebas

Ejecutar todas las pruebas:

```bash
npx playwright test
```
---

# Generación de Reportes

### Reporte HTML

```bash
npx playwright show-report
```

### Reporte Allure

Generar reporte:

```bash
allure generate allure-results --clean
```

Visualizar reporte:

```bash
Eliminar carpeta de "allure-results" antes de ejecutar las pruebas
npm run allure
```

---

# Comandos Git para subir el proyecto desde cero

### 1. Inicializar repositorio local

```bash
git init
```

### 2. Agregar archivos al área de preparación

```bash
git add .
```

### 3. Crear el primer commit

```bash
git commit -m "Initial commit - Playwright Automation"
```

### 4. Crear repositorio remoto (GitHub o Azure Repos)

Una vez creado el repositorio remoto:

```bash
git remote add origin https://github.com/usuario/repositorio.git
```

### 5. Verificar configuración del remoto

```bash
git remote -v
```

### 6. Renombrar rama principal

```bash
git branch -M main
```

### 7. Subir proyecto al repositorio remoto

```bash
git push -u origin main
```

Guardar cambios:

```bash
git add .
git commit -m "Add purchase flow automation"
```

Enviar cambios:

```bash
git push origin feature/new-test
```

---

# Estrategia de Integración con Azure DevOps

