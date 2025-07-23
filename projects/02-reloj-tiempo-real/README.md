## 2. Checklist: Reloj en Tiempo Real

### 🟩 Mínimos obligatorios:

[X] Mostrar la hora actual en pantalla (HH:MM:SS).

[X] Actualizar la hora automáticamente cada segundo (setInterval o setTimeout en useEffect).

[X] Mostrar los componentes de tiempo con ceros a la izquierda (por ejemplo, 09:05:03).

[X] Detener el intervalo cuando el componente se desmonta (limpieza de useEffect).

### 🟨 Extras sugeridos:

[] Mostrar también la fecha actual (día de la semana, mes, año).

[] Opción para elegir entre formato 12h o 24h.

[] Mostrar una frase según el momento del día (ej. "Buenos días", "Buenas tardes").

[] Agregar una animación suave al cambiar los segundos.

[] Diseño visual bonito y claro (centrado, tipografía agradable, colores según el día/noche).

[] Personalización del formato: mostrar solo hora, solo fecha o ambos.

### 🟥 Retos avanzados:

[] Detectar y mostrar la hora en diferentes zonas horarias (usando Intl.DateTimeFormat o una librería como luxon).

[] Cambiar estilos dinámicamente según la hora (ej. fondo oscuro de noche).

[] Usar requestAnimationFrame en vez de setInterval para optimizar cambios.

[] Agregar un botón para pausar/reanudar el reloj.

[] Mostrar una cuenta regresiva hacia una hora objetivo.

[] Mostrar una línea de tiempo o barras de progreso (minuto actual, segundo actual, etc.).