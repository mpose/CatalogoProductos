# 📦 Catálogo de Productos
👨‍💻Autor: 
Martin Pose
Aplicación web desarrollada con Angular CLI versión 16.2.7.

Permite **listar**, **agregar**, **editar** y **eliminar** productos de un catálogo.  
Creada como parte de una evaluación técnica.

## ✨ Funcionalidad principal

- Listado de productos
- Alta de nuevos productos
- Edición de productos existentes
- Eliminación de productos del listado

### 📝 Sugerencia de carga

Al agregar un nuevo producto, se recomienda completar los siguientes campos:

- **Nombre del producto**
- **Precio**
- **Correo del proveedor**
- **Fecha de ingreso**

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/martinpose/catalogo-productos.git
cd catalogo-productos
2. Instalar dependencias:
npm install
3. Ejecutar el servidor de desarrollo:
ng serve
4. Abrir en el navegador:
http://localhost:4200

📁 Estructura general

src/
├── app/
│   ├── components/
│   │   ├── product-form/
│   │   │   ├── product-form.component.html
│   │   │   ├── product-form.component.scss
│   │   │   ├── product-form.component.spec.ts
│   │   │   └── product-form.component.ts
│   │   └── product-list/
│   │       ├── product-list.component.html
│   │       ├── product-list.component.scss
│   │       ├── product-list.component.spec.ts
│   │       └── product-list.component.ts
│   ├── models/
│   ├── services/
│   │   ├── product.service.spec.ts
│   │   └── product.service.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
├── environments/
├── favicon.ico
├── index.html
├── main.ts
├── styles.scss
