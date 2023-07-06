async function fetchAsignatures() {
    const response = await fetch('./data/asignaturas.json', {
        headers: { Accept: 'application/json' },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
  fetchAsignatures().then(data => {
    Object.entries(data).forEach(([key, value]) => {
      document.getElementById('tablita').innerHTML +=
        `<tr>
        <td>${value.id}</td>
        <td>${value.nombre}</td>
        <td>${value.codigo}</td>
        <td>${value.seriacion===null ? "N/A" : value.seriacion}</td>
        <td>${value.creditos}</td>
        <td>${value.cuatrimestre}</td>
        <td>${value.carrera.nombre}</td>
      </tr>`
    });
  });