
<!-- ---- ---- ---- ---- MODAL SEARCH -->
<div            class="modal collapse k6-z-tooltip" id="k6-modal-search" tabindex="-1" aria-modal="true" role="dialog">
  <div          class="modal-dialog modal-fullscreen">
    <div        class="modal-content                 k6-theme-dark-2">
      <div      class="modal-header   ps-2 pe-3 py-1 k6-theme-dark-6">
        <input  class="w-100 border-0 me-2 mb-0 p-2  k6-theme-dark-2 k6-fs-1p5rem k6-outline-0" type="text"   id="k6-modal-search-input" placeholder="Search" onkeydown="if( ! this.value && event.key == 'Tab' ) { document.getElementById('k6-modal-search-close').click(); if( event.shiftKey ) document.getElementById('k6-neck-search-prev').focus(); else document.getElementById('k6-neck-search-next').focus() }">
        <button class="btn-close                     k6-theme-dark-5"                           type="button" id="k6-modal-search-close"  aria-label="Close"  data-bs-dismiss="modal" ></button>
      </div>
      <div      class="modal-body p-2">

        <? for( $i = 0; $i < 16; $i ++ ) { ?>
          <a           class="text-decoration-none" href="">
            <div       class="d-flex p-2">
              <div     class="w-100">
                <h6    class="mb-1">Lorem ipsum dolor, sit amet.</h6>
                <small class="text-muted lh-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod iusto aperiam sapiente accusantium nihil.</small>
              </div>
              <div     class="rounded bg-light ms-2 k6-theme-dark-1" style="min-width: 6rem;"></div>
            </div>
          </a>
        <? } # for ?>

      </div>
    </div>
  </div>
</div>
