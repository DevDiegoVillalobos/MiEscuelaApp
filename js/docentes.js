async function fetchImagesCats() {
    const response = await fetch('data/docentes.json', {
        headers: { Accept: 'application/json' },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
  fetchImagesCats().then(data => {
    let titulos = [];
    Object.entries(data).forEach(([key, value]) => {
        titulos = [];
        Object.entries(value.grados_academicos).forEach(([key, grades]) => {
                titulos.push(grades.titulo);
            })
            
    document.getElementById('tablita').innerHTML +=
    `<tr>
    <td>${value.id}</td>
    <td>${value.nombre}</td>
    <td>
        <ul>
            <li>${titulos.toString()}</li>
        </ul>
    </td>
    </tr>`
    })
  });