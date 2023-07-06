

async function fetchImagesCats() {
  const response = await fetch('./data/estudiantes.json', {
      headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}
fetchImagesCats().then(data => {
  Object.entries(data).forEach(([key, value]) => {
    document.getElementById('tablita').innerHTML +=
      `<tr>
      <td>${value.id}</td>
      <td>${value.nombre}</td>
      <td>${value.apellido_paterno}</td>
      <td>${value.apellido_materno}</td>
      <td>${value.fecha_nacimiento}</td>
      <td>${value.correo_electronico}</td>
      <td>${value.telefono}</td>
      <td>${value.direccion}</td>
      <td>${value.carrera.nombre}</td>
    </tr>`
  });
});