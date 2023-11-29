
import './style.css';



(async () => {
  const response = await fetch('http://localhost:3100/api/pedido');
  const data = await response.json();

  let divTable = `<table>`;
  divTable += `<tr><th>id</th><th>idCliente</th><th>idRepartidor</th><th>fechaPedido</th></tr>`;
  data.forEach((pedido: IPedido) => {
    divTable += `<tr><td>${pedido.id}</td><td>${pedido.idCliente}</td><td>${pedido.idRepartidor}</td><td>${pedido.fechaPedido}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button></td></tr>`;
  });
  divTable += `</table>`;

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable;

  const divButton = `<button class="btn btn-primary" >Agregar</button>`;
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton;

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary');
  btnAgregar?.addEventListener('click', () => {
    const divForm = `<form>
    <div class="mb-3">
      <label for="idCliente" class="form-label">idCliente</label>
      <input type="text" class="form-control" id="idCliente">
    </div>
    <div class="mb-3">
      <label for="idRepartidor" class="form-label">idRepartidor</label>
      <input type="text" class="form-control" id="idRepartidor">
    </div>
    <div class="mb-3">
      <label for="fechaPedido" class="form-label">fechaPedido</label>
      <input type="text" class="form-control" id="fechaPedido">
    </div>
    <button type='button' class="btn btn-save">Guardar</button>
    <button type='submit' class="btn btn-cancel">Cancelar</button>
    </form>`;
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;
    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
    btnSave?.addEventListener('click', async (e) => {
      e.preventDefault();
      const idCliente = Number(document.querySelector<HTMLInputElement>('#idCliente')!.value);
      const idRepartidor = Number(document.querySelector<HTMLInputElement>('#idRepartidor')!.value);
      const fechaPedido = document.querySelector<HTMLInputElement>('#fechaPedido')!.value;
      const response = await fetch('http://localhost:3100/api/pedido', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idCliente, idRepartidor, fechaPedido })
      });
      const data = await response.json();
      console.log(data);
      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      console.log(id);
      await fetch(`http://localhost:3100/api/pedido/${id}`, {
        method: 'DELETE'
      });
      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      const response = await fetch(`http://localhost:3100/api/pedido/${id}`);
      const data = await response.json();
      // agregar botón para cancelar
      const btnCancel = `<button class="btn btn-cancel">Cancelar</button>`;
      const divForm = `<form>
      <div class="mb-3">
        <label for="idCliente" class="form-label">idCliente</label>
        <input type="text" class="form-control" id="idCliente" value="${data.idCliente}">
      </div>
      <div class="mb-3">
        <label for="idRepartidor" class="form-label">idRepartidor</label>
        <input type="text" class="form-control" id="idRepartidor" value="${data.idRepartidor}">
      </div>
      <div class="mb-3">
        <label for="fechaPedido" class="form-label">fechaPedido</label>
        <input type="text" class="form-control" id="fechaPedido" value="${data.fechaPedido}">
      </div>
      <button type='submit' class="btn btn-save">Guardar</button>
      ${btnCancel}
      </form>`;
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;
      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
      btnSave?.addEventListener('click', async (e) => {
        alert("Guardado")
        e.preventDefault();
        const idCliente = Number(document.querySelector<HTMLInputElement>('#idCliente')!.value);
        const idRepartidor = Number(document.querySelector<HTMLInputElement>('#idRepartidor')!.value);
        const fechaPedido = document.querySelector<HTMLInputElement>('#fechaPedido')!.value;
        const response = await fetch(`http://localhost:3100/api/pedido/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ idCliente, idRepartidor, fechaPedido })
        });
        const data = await response.json();
        console.log(data);
        alert(data);
        // reload page
        location.reload();
      });
    });
  });
})();
