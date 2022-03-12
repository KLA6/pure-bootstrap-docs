<!-- ==== ==== ==== ==== ==== ==== ==== ==== NECK -->

<div   class="h-100 d-block bg-light k6-theme-dark-1">
  <div class="h-100 d-flex container-xxl align-items-center px-3 px-xxl-0 py-3 k6-z-fixed">

    <!-- ---- ---- ---- ---- DOCUMENT INDEX BUTTON -->
    <button class="d-md-none btn btn-outline-secondary border-0 lh-1 me-2 p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#k6-left-offcanvas" aria-label="Toggle Document Index">
      <svg  width="24" height="24" viewBox="-10 0 532 512"><path fill="currentColor" d="M448 96h-172l-49 -45q-19 -19 -45 -19h-118q-27 1 -45 19t-19 45v320q1 27 19 45t45 19h384q27 -1 45 -19t19 -45v-256q-1 -27 -19 -45t-45 -19v0zM64 80h118q6 0 11 5l63 59h192q15 1 16 16v32h-416v-96q1 -15 16 -16v0zM448 432h-384q-15 -1 -16 -16v-176h416v176 q-1 15 -16 16v0z"/></svg>
    </button>

    <!-- ---- ---- ---- ---- SEARCH VERSION LANGUAGE -->
    <div   class="flex-grow-1 d-flex">                                                        <!-- The #k6-neck-search-prev and #k6-neck-search-next elements exist to navigate by the Tab key. -->
      <div class="me-2 position-relative"><button class="position-absolute start-50 top-50 k6-z-n1" id="k6-neck-search-prev"></button><input class="form-control text-truncate bg-light border-secondary k6-theme-dark-1" type="text" placeholder="Search" id="k6-neck-search" onfocus="new bootstrap.Modal( document.getElementById('k6-modal-search') ).show(); document.getElementById('k6-modal-search-input').focus()"><button class="position-absolute end-50 top-50 k6-z-n1" id="k6-neck-search-next"></div>
      <div class="flex-grow-1 k6-mx-n1"></div>
      <div class="ms-2"><div class="dropdown"><button class="btn k6-btn-outline-secondary text-truncate k6-dropdown-toggle-sm" id="k6-neck-ver-active"  data-bs-toggle="dropdown">Version </button><ul class="dropdown-menu dropdown-menu-end k6-theme-dark-3" id="k6-neck-ver" ></ul></div></div>
      <div class="ms-2"><div class="dropdown"><button class="btn k6-btn-outline-secondary text-truncate k6-dropdown-toggle-sm" id="k6-neck-lang-active" data-bs-toggle="dropdown">Language</button><ul class="dropdown-menu dropdown-menu-end k6-theme-dark-3" id="k6-neck-lang"></ul></div></div>
    </div>

    <!-- ---- ---- ---- ---- PAGE INDEX BUTTON  -->
    <button class="d-lg-none btn btn-outline-secondary border-0 lh-1 ms-2 p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#k6-right-offcanvas" aria-label="Toggle Page Index">
      <svg  width="24" height="24" viewBox="-10 0 532 512"><path fill="currentColor" d="M88 48q22 2 24 24v48q-2 22 -24 24h-48q-22 -2 -24 -24v-48q2 -22 24 -24h48v0zM488 72q22 2 24 24q-2 22 -24 24h-304q-22 -2 -24 -24q2 -22 24 -24h304v0zM488 232q22 2 24 24q-2 22 -24 24h-304q-22 -2 -24 -24q2 -22 24 -24h304v0zM488 392q22 2 24 24q-2 22 -24 24 h-304q-22 -2 -24 -24q2 -22 24 -24h304v0zM16 232q2 -22 24 -24h48q22 2 24 24v48q-2 22 -24 24h-48q-22 -2 -24 -24v-48v0zM88 368q22 2 24 24v48q-2 22 -24 24h-48q-22 -2 -24 -24v-48q2 -22 24 -24h48v0z"/></svg>
    </button>

    <!-- ---- ---- ---- ---- OFFCANVAS CLOSE -->
    <script>
      document.addEventListener( 'keydown', E => { if( E.key == 'Escape' ) { document.querySelectorAll('[data-bs-dismiss="offcanvas"]').forEach( V => V.click() ) /* Because the Bootstrap Offcanvas hide function doesn't work properly. */ } } )
    </script>

  </div>
</div>
