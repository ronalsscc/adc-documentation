---
sidebar_position: 3
---

# Detalle de sub-servicio

### Definicion
Un detalle es ítem que define las características de un sub servicio, tiene las siguientes características.

### Propiedades
- `Nombre` *(Obligatorio)*
- `Descripción` *(Obligatorio)*
- `Porcentaje de participación` *(Obligatorio)*: Cada detalle relacionado a un sub-servicio tiene un porcentaje de participación. Esto con la finalidad de poder distribuir porcentualmente el valor entre cada uno cuando se realice una adquisición.

### Validaciones

- Debe estar relacionado obligatoriamente a un [sub-servicio](./subService).

### Comportamiento en ADQUISICIONES
Un cliente puede hacer una **adquisición** de un servicio con sus correspondientes **sub-servicios** y con los detalles de sub-servicio que desee, en cualquier momento puede relacionar más **detalles de sub-servicios** nuevos.

## Ruta
`Inicio/Configuraciones/Detalles`