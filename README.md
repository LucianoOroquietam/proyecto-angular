# Tienda de Cerveza - Proyecto Final de Angular

## Descripción del Proyecto

Este proyecto es una tienda de cerveza ficticia desarrollada como parte del trabajo final del seminario de Angular. La aplicación web permite a los usuarios explorar diferentes tipos de cervezas, y realizar compras. 
La tienda está conectada a una API de cervezas para obtener datos dinámicos y actualizados.

## Funcionalidades

- **Exploración de Cervezas**: Los usuarios pueden navegar a través de una lista de cervezas disponibles.
- **Carrito de Compras**: Los usuarios pueden agregar cervezas a un carrito de compras y proceder a la compra.
- **Verificación de Edad**: Se utiliza localStorage para simular la verificación de edad. Si el usuario confirma que es mayor de 18 años, no necesita volver a verificar.
- **Simulación de Compra**: Para simular una compra, al presionar el botón "Finalizar compra", la aplicación recarga la página con window.location.reload().

## Tecnologías Utilizadas

- **Angular**: Framework principal para el desarrollo de la aplicación.
- **API de Cervezas**: Para obtener los datos de las cervezas.
- **HTML y CSS**: Para el diseño y estilizado de la aplicación.
- **Bootstrap**: Framework CSS para el diseño responsivo.

## Información del Estudiante

- **Nombre y Apellido**: Luciano Oroquieta Merlino.
- **DNI**: 40289369.
- **Email**: oroquietaluciano@gmail.com.
- **Sede**: Tandil.

## Enlace al Proyecto en StackBlitz

[Proyecto en StackBlitz](https://stackblitz.com/~/github.com/LucianoOroquietam/proyecto-angular)

## Link de la API
https://6677082a145714a1bd738bd9.mockapi.io/api/beers

## Instrucciones para Ejecutar el Proyecto Localmente

1. Clona este repositorio:
 ```bash
git clone https://github.com/LucianoOroquietam/proyecto-angular.git
 ```
2. Instalar dependencias:
 ```npm
npm install
```
3. Ejecutar la aplicacion:
```ng
ng serve
Abre tu navegador y visita http://localhost:4200/.
```

## Bugs y Mejoras a Futuro

- **Botón "Finalizar compra"**: Actualmente, el botón "Finalizar compra" se muestra incluso cuando no hay artículos en el carrito. 
- **Manejo del stock"**: Cuando se agrega una cerveza al carrito y se descuenta del stock, al eliminarla del carrito, la cantidad en el stock no vuelve a su valor original.