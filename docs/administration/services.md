---
sidebar_position: 1
---

# Servicio

### Definicion
Un servicio es un ítem intangible que cubre las necesidades del cliente. Un servicio es un conjunto de sub servicios.

### Propiedades
- `Nombre` *(Obligatorio)*
- `Descripción` *(Obligatorio)*
- `Modalidad` *(Obligatorio)*
    - `Recurrente`
    - `Por demanda`
    - `Venta`
- [`Sub-servicios relacionados`](./subService) *(Obligatorio)*: Cada sub-servicio relacionado tiene un porcentaje de participación. Esto con la finalidad de poder distribuir porcentualmente el valor entre cada uno cuando se realice una adquisición.
- `Tarifas relacionadas` *(Opcional)*


### Validaciones

- Un servicio tiene que tener relacionado obligatoriamente al menos un sub-servicio

### Comportamiento en ADQUISICIONES
Se denomina una adquisición cuando un **cliente** adquiere un **servicio** con unas caracteristicas especificas. Un cliente puede adquirir tantos servicios como desee, adicionalmente también puede adquirir varios servicios iguales.

## Ruta
`Inicio/Configuraciones/Servicios`