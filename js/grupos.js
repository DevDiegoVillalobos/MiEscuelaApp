async function fetchGroups() {
    const response = await fetch('data/grupos.json', {
        headers: { Accept: 'application/json' },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
  fetchGroups().then(data => {
    Object.entries(data).forEach(([key, value]) => {
      document.getElementById('tablita').innerHTML +=
        `<tr>
        <td>${value.id}</td>
        <td>${value.cuatrimestre}</td>
        <td>${value.grupo}</td>
        <td>${value.generacion}</td>
        <td>${value.carrera.nombre}</td>
        <td>${value.jefe_grupo.nombre} - ${value.jefe_grupo.email}</td>
        <td>${value.profesor_tutor.nombre} - ${value.profesor_tutor.email}</td>
      </tr>`
    });
  });