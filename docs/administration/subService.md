---
sidebar_position: 2
---

# Sub-servicio

### Definicion
Un sub servicio es ítem que se especifica para la composición de un servicio, tiene las siguientes características independientes del servicio.

### Propiedades
- `Nombre` *(Obligatorio)*
- `Descripción` *(Obligatorio)*
- `Categoría` *(Obligatorio)*
- `Tarifas relacionadas` *(Opcional)*
- `Porcentaje de participación` *(Obligatorio)*: Cada sub-servicio relacionado a un servicio tiene un porcentaje de participación. Esto con la finalidad de poder distribuir porcentualmente el valor del servicio entre cada uno cuando se realice una adquisición.
- [`Detalles relacionados`](./subserviceDetail) *(Obligatorio)*: Cada detalle tiene un procentaje de participación, esto con la finalidad de poder distribuir porcentualmente el valor del sub-servicio entre cada uno.

### Validaciones

- Debe estar relacionado obligatoriamente al menos a un [servicio](./services).
- Debe tener minimo un [detalle de sub-servicio](./subserviceDetail).

### Comportamiento en ADQUISICIONES
Un cliente puede hacer una **adquisición** de un servicio con los sub-servicios que desee y en cualquier momento puede relacionar **sub-servicios** nuevos.

## Ruta
`Inicio/Configuraciones/Sub-Servicios`