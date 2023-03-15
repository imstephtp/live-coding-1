/* 1.- Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.

- Escribe una función que reciba 2 parámetros
- Parámetro 1 - Un string
- Parámetro 2 - Un array de strings
- La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
*/

function filteredWords(str, arr) {
    return arr.filter(word => word.length > str.length);
}

// Ejemplo
const myArray = ['elotes', 'tostilocos', 'crepas', 'helados', 'escamocha', 'raspados'];
console.log(filteredWords('pastel', myArray));

// Output: [ 'tostilocos', 'helados', 'escamocha', 'raspados' ]

/*2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (<ul></ul>) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento **<li></li>**. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior.

- Escribe una función que reciba 1 parámetro
   - Parámetro 1 - Un array de strings
- La función debe mostrar la lista en el HTML, cada string del arreglo debe imprimirse en un elemento **<li></li>**.
- Ejemplo:
   - `const myArray = ['insecto', 'bootcamp', 'escritorio'];`
   - `printArray(myArray);`
   - Output - `<li>insecto</li>
               <li>bootcamp</li>
               <li>escritorio</li>
               ` */

               function showList(arr) {
                const ul = document.createElement('ul');
                for (let i = 0; i < arr.length; i++) {
                  const li = document.createElement('li');
                  li.textContent = arr[i];
                  ul.appendChild(li);
                }
                document.body.appendChild(ul);
              }
              
              // Ejemplo de uso:
              const myArray = ['elotes', 'tostilocos', 'crepas', 'helados', 'escamocha', 'raspados'];
              const resultArray = filteredWords('pastel', myArray);
              showList(resultArray);
              