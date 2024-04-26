---
sidebar_position: 4
---

# Adquisición

### Definicion
Es la precisión de los servicios, sub-servicios y detalles que tiene un cliente, bajo los acuerdos establecidos en las condiciones comerciales.

### Propiedades
- `Fecha de adquisición` *(Obligatorio)*
- `Modalidad` *(Obligatorio)*
- `Frecuencia de cobro` *(Opcional)*
- `Tipo de reajuste` *(Opcional)*
- `Tarifas/Precio` *(Opcional)*
- `Sub-adquisiciones` *(Obligatorio)*

### Validaciones

- Debe estar relacionado obligatoriamente a un [sub-servicio](./subService).

### Comportamiento en ADQUISICIONES
Un cliente puede hacer una **adquisición** de un servicio con sus correspondientes **sub-servicios** y con los detalles de sub-servicio que desee, en cualquier momento puede relacionar más **detalles de sub-servicios** nuevos.

## Ruta
`Inicio/Configuraciones/Detalles`