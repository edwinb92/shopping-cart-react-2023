# Instrucciones Generales para GitHub Copilot

## 1. Estilo de Nombres
- Las **variables** deben usar **camelCase**.
- Las **funciones** deben usar **PascalCase**.
- Las **constantes** deben utilizar **UPPER_SNAKE_CASE**.
- Utiliza nombres descriptivos y evita abreviaturas en las variables.

## 2. Manejo de Errores
- **Nunca ignores errores**. Siempre maneja excepciones con bloques `try-catch`.

## 3. Funciones y Métodos
- Las funciones deben ser **pequeñas y enfocadas**. No deben superar las 15-20 líneas de código.
- Las funciones deben **devolver valores** siempre que sea posible, evitando efectos secundarios innecesarios.
- Evita las funciones que hagan más de una cosa a la vez (principio de responsabilidad única).

## 4. Código Asíncrono
- Para el manejo de operaciones asíncronas, utiliza **`async/await`** siempre que sea posible.
- Utiliza **`Promise.all()`** para realizar tareas en paralelo y mejorar el rendimiento cuando sea adecuado.