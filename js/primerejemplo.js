<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Ejemplo corregido</title>
        <style>
            /* Estilos mínimos para ver cambios */
                #menu {
                      padding: 12px;
                            background: #c00; /* color inicial */
                                  color: white;
                                      }
                                          #aside {
                                                padding: 12px;
                                                      background: rgba(200,200,200,0.3);
                                                          }
                                                              img { max-width: 300px; display:block; margin-bottom:8px; }
                                                                </style>
                                                                </head>
                                                                <body>

                                                                  <header id="menu">
                                                                      <img id="logo" src="imagenes/logo1.png" alt="Logo">
                                                                          <h2 id="Subtitulo">Subtítulo original</h2>
                                                                            </header>

                                                                              <main>
                                                                                  <section>
                                                                                        <h3>Imágenes</h3>
                                                                                              <!-- fíjate en los id: deben coincidir con JS -->
                                                                                                    <img id="avion" src="imagenes/avion.jpg" alt="Avión">
                                                                                                          <img id="torres" src="imagenes/torres.jpg" alt="Torres">
                                                                                                              </section>

                                                                                                                  <section>
                                                                                                                        <h3>Acciones</h3>
                                                                                                                              <button id="btnAvion">Mostrar Avión</button>
                                                                                                                                    <button id="btnTorres">Mostrar Torres</button>
                                                                                                                                          <button id="btnCambiarLogo">Cambiar logo</button>
                                                                                                                                                <button id="btnCambiarFondo">Cambiar fondo del menú</button>
                                                                                                                                                      <button id="btnCambioTexto">Cambiar subtítulo</button>
                                                                                                                                                            <button id="btnFondoAside">Cambiar fondo aside</button>
                                                                                                                                                                </section>
                                                                                                                                                                  </main>

                                                                                                                                                                    <aside id="aside">
                                                                                                                                                                        Contenido del aside
                                                                                                                                                                          </aside>

                                                                                                                                                                            <script>
                                                                                                                                                                                console.log("Hola Mundo");
                                                                                                                                                                                    // alert("Hola Mundo, esto es un alert."); // opcional, descomenta si quieres el alert

                                                                                                                                                                                        // --- Funciones corregidas y robustas ---
                                                                                                                                                                                            function setAvionImage() {
                                                                                                                                                                                                  const img = document.getElementById('avion');
                                                                                                                                                                                                        if (img) img.src = 'imagenes/avion.jpg';
                                                                                                                                                                                                            }

                                                                                                                                                                                                                function setTorresImage() {
                                                                                                                                                                                                                      const img = document.getElementById('torres');
                                                                                                                                                                                                                            if (img) img.src = 'imagenes/torres.jpg';
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                    function cambiarLogo() {
                                                                                                                                                                                                                                          const logo = document.getElementById('logo');
                                                                                                                                                                                                                                                if (logo) logo.src = 'imagenes/logo2.png';
                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                        function cambiarFondoMenu() {
                                                                                                                                                                                                                                                              const menu = document.getElementById('menu');
                                                                                                                                                                                                                                                                    if (menu) menu.style.background = 'rgba(121,0,0,1)'; // equivalente a #790000
                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                            function cambiodeTexto() {
                                                                                                                                                                                                                                                                                  const sub = document.getElementById('Subtitulo'); // respeta mayúsculas
                                                                                                                                                                                                                                                                                        if (sub) sub.textContent = "No cambies p";
                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                function fondoAside() {
                                                                                                                                                                                                                                                                                                      const aside = document.getElementById('aside');
                                                                                                                                                                                                                                                                                                            if (aside) aside.style.background = 'rgba(152,255,255,0.6)';
                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                    // --- Event listeners (se añaden cuando el DOM está listo) ---
                                                                                                                                                                                                                                                                                                                        document.addEventListener('DOMContentLoaded', () => {
                                                                                                                                                                                                                                                                                                                              // Botones
                                                                                                                                                                                                                                                                                                                                    const bAvion = document.getElementById('btnAvion');
                                                                                                                                                                                                                                                                                                                                          const bTorres = document.getElementById('btnTorres');
                                                                                                                                                                                                                                                                                                                                                const bLogo = document.getElementById('btnCambiarLogo');
                                                                                                                                                                                                                                                                                                                                                      const bFondo = document.getElementById('btnCambiarFondo');
                                                                                                                                                                                                                                                                                                                                                            const bTexto = document.getElementById('btnCambioTexto');
                                                                                                                                                                                                                                                                                                                                                                  const bAside = document.getElementById('btnFondoAside');

                                                                                                                                                                                                                                                                                                                                                                        if (bAvion) bAvion.addEventListener('click', setAvionImage);
                                                                                                                                                                                                                                                                                                                                                                              if (bTorres) bTorres.addEventListener('click', setTorresImage);
                                                                                                                                                                                                                                                                                                                                                                                    if (bLogo) bLogo.addEventListener('click', cambiarLogo);
                                                                                                                                                                                                                                                                                                                                                                                          if (bFondo) bFondo.addEventListener('click', cambiarFondoMenu);
                                                                                                                                                                                                                                                                                                                                                                                                if (bTexto) bTexto.addEventListener('click', cambiodeTexto);
                                                                                                                                                                                                                                                                                                                                                                                                      if (bAside) bAside.addEventListener('click', fondoAside);
                                                                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                                                                            </script>
                                                                                                                                                                                                                                                                                                                                                                                                            </body>
                                                                                                                                                                                                                                                                                                                                                                                                            </html