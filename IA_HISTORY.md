# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** Claudio Emmanuel Britez
**Fecha:** 23/04/2026

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

Arreglando semantica del html

```
<!--

  Indicá en qué punto del examen usaste este prompt.

  Después de hacer manualmente los cambios de HTML semántico, usé la IA para revisar si la estructura había quedado correcta y si todavía había errores de semántica o accesibilidad.

  Quería controlar que los cambios que había hecho a mano realmente cumplieran la consigna de HTML y accesibilidad.


```

### Lo que le pedí a la IA

revisá bloque "x" de html y decime si todavía tiene errores de semántica o accesibilidad, no trabajamos en el css todavia, solo html

este prompt lo use despues de chequear cada bloque

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?

  La ia chequeo la semantica del html, controlando que no me salteara ningun etiqueta ni clase, esto sin hacer cambios en el css.

  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?

  si, ya que solo fue validacion. 

  - ¿Qué parte te resultó útil como punto de partida?

  me resulto util no tener que revisar bloque por bloque otra vez, agilizando tiempo.


```

### Qué debí corregir manualmente y por qué

```
<!--
 
En este primer prompt no tuve que corregir a la IA porque solo fue una revision a mi trabajo.

-->
```

---

## Prompt 2

### Momento del proceso

```
<!--
  despues de corregir y validar el html para asegurarme de que los estilos sigan teniendo efecto en el index
-->
```

### Lo que le pedí a la IA

```
hacé los cambios necesarios en css para que el nav y las secciones funcionen con el html nuevo
```

### Análisis del resultado obtenido

```
La ia adapto el css teniendo en cuenta los cambios realizados en el index, el resultado fue correcto y solo me quedo la parte del layout macro y el display flex 

### Qué debí corregir manualmente y por qué

```
la IA adptao el css bastante bien, no tuve que hacer grandes cambios mas que controlar e implentar el layout macro y el flex ademas de controlar detalles visuales indicados en el readme sobre contraste

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  - ¿Qué tipo de errores repitió la IA que tuviste que corregir?

  No hubo grandes errores por la IA, pero aun asi debi revisar desde la pagina web y consola por las dudas. Ademas compare resultados con las consignas del readme para asegurarme cumplir con dichas especificaciones.

  - ¿Hubo algo que la IA resolvió bien a la primera sin que necesitaras tocarlo?

  La ia resolvio rapidamente las partes en las que le pedi simplemente revision semantica del html, me ahorro bastante tiempo. 

  - ¿Cambiarías la forma en que le pedís cosas a la IA la próxima vez? ¿Por qué?

  Intentaria usar prompts un poco mas especificos o desarrollados.


-->
```
