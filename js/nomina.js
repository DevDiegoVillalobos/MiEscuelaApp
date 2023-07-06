async function fetchNominas() {
    const response = await fetch('./data/nomina.json', {
        headers: { Accept: 'application/json' },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }



  fetchNominas().then(data => {
    Object.entries(data).forEach(([key, value]) => {
      document.getElementById('tablita').innerHTML +=
        `<tr>
        <td>${value.id}</td>
        <td>${value.fecha_pago}</td>
        <td>${value.profesor.nombre}</td>
        <td>${value.dias_trabajados}</td>
        <td>${value.salario}</td>
        <td>${value.retenciones}</td>
        <td>${value.vales_despensa}</td>
      </tr>`
    });
  });