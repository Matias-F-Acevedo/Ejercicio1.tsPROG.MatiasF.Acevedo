let ejercicioA = [
  "-Pasos para cocinar una torta-",
  "1. mezclar azucar y manteca, agregar los huevos uno a uno.",
  "2. se agrega la harina y se alterna con leche.",
  "3. incorporar polvo de hornear.",
  "4. verter la mezcla en un molde.",
  "5. llevar al horno a 180 Grados por 40min."
];

for (ejercicioA of ejercicioA) {
  console.log(ejercicioA);
  document.write(ejercicioA + "<br>");
}

let ejercicioB = [
  "-Pasos para dirigirse desde su domicilio hasta el supermercado-",
  "1. Salir del domicilio.",
  "2. Dirigirse hacia la derecha 2 cuadras y media",
  "3. Doblar a la derecha en la av. salenave.",
  "4. Seguir 3 cuadras por la misma",
  "5. Doblar a la izquierda en la av. San Martin.",
  "6. Dirigirse 2 cuadras por la misma.",
  "7. En la vereda izquierda se encuentra en supermercado.",
  "8. Ingresar al supermercado.",
  "9. Comprar lo que guste.",
  "10. Volver al domicilio"
];

let i = 0;
for (i; i <= 10; i++) {
  document.write(ejercicioB[i], "<br>");
  console.log(ejercicioB[i]);
}

let ejercicioC = [
  "-Como crear un posteo en Facebook-",
  "1. Iniciar sesion en nuestra cuenta de Facebook",
  "2. Ir a nuestro perfil principal",
  "3. Hacer click en el espacio para escribir",
  "4. Escribir algo de nuestro interes dispuestos a compartir",
  "5. Podemos agregrar un foto o video a nuestro posteo",
  "6. Podemos etiquetar personas a las que nos referimos",
  "7. Se puede habilitar la opcion para que personas lo compartan",
  "8. Verificamos que todo se encuentra a nuestro gusto",
  "9. Hcemos click en el boton azul Publicar",
  "10. ¡Ya tenememos nuestro posteo en facebook!"
];

let i = 0;
while (i <= 10) {
  document.write(ejercicioC[i], "<br>");
  console.log(ejercicioC[i]);
  i++;
}
