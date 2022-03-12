// This code is not really organized well at the moment.

// TO DO // The jQuery dependancy will be removed.
// TO DO // The init scripts will be wrapped as functions, so they will be able to use after a page load as well.
// TO DO // If there is any critical request from the customer, it will be implemented.

// ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // FUNCTION

function k6_hex_rgb( hex ) { return hex.match( new RegExp( '(.{' + hex.length / 3 + '})', 'g' ) ).map( l => { return parseInt( hex.length % 2 ? l + l : l, 16 ) } ).join( ',' ) }

function k6_link( obj ) { return `${ obj.href    ? `href   ="${obj.href   }"` : '' }"
                                  ${ obj.target  ? `target ="${obj.target }"` : '' }"
                                  ${ obj.title   ? `title  ="${obj.title  }"` : '' }"
                                  ${ obj.onclick ? `onclick="${obj.onclick}"` : '' }"
                                  ${ obj.tooltip ? `data-bs-toggle="tooltip"` : '' }"` }

function k6_color( mode = '' ) { // The color code must be RRGGBB format, not #RRGGBB, RGB, #RGB or rgb( ... ) format.
  let O
  let C = { default  : { 'bs-primary': '0d6efd', 'bs-secondary': '6c757d', 'bs-success': '198754', 'bs-warning': 'ffc107', 'bs-danger': 'dc3545', 'bs-light': 'f8f9fa', 'bs-dark': '212529', 'k6-darker': '111111' },
            link_mint: { 'bs-primary': '669999', 'bs-secondary': '6c757d', 'bs-success': '198754', 'bs-warning': 'ffc107', 'bs-danger': 'dc3545', 'bs-light': 'f8f9fa', 'bs-dark': '212529', 'k6-darker': '111111' },
            blue     : { 'bs-primary': '35567B', 'bs-secondary': 'B4B4B5', 'bs-success': '35567B', 'bs-warning': '35567B', 'bs-danger': '35567B', 'bs-light': 'E6EDF2', 'bs-dark': '1b2b3e', 'k6-darker': '0d161f' }, }

  if( typeof mode == 'string' ) { if( typeof C[ mode ] != 'undefined' ) O = C[ mode ]; else O = C.default }
  else                                                                  O =    mode
  Object.entries( O ).forEach( ( V, I, A ) => { document.documentElement.style.setProperty( `--${V[0]}`    , '#'       + V[ 1 ]   )
                                                document.documentElement.style.setProperty( `--${V[0]}-rgb`, k6_hex_rgb( V[ 1 ] ) ) } )
} // function

function k6_theme( mode = '' ) {
  let L = [ [            'bg-dark' ,                'bg-white'     ],
            [        'navbar-dark' ,            'navbar-light'     ],
            [ 'dropdown-menu-dark' ,                        ''     ], ]
  let D = [ [            'bg-light', 'k6-bg-darker text-light'     ],
            [            'bg-white',    'bg-dark   text-light'     ],
            [                    '',     'dropdown-menu-dark'      ],
            [                    '',              'text-light'     ],
            [                    '',         'btn-close-white'     ],
            [                    '',            'border-secondary' ], ]
                        L.forEach( ( V, I, A ) => $( `.k6-theme-light-${ I + 1 }` ).addClass( V[ 0 ] ).removeClass( V[ 1 ] ) )
                        D.forEach( ( V, I, A ) => $( `.k6-theme-dark-${  I + 1 }` ).addClass( V[ 0 ] ).removeClass( V[ 1 ] ) )
  if( mode == 'light' ) L.forEach( ( V, I, A ) => $( `.k6-theme-light-${ I + 1 }` ).addClass( V[ 1 ] ).removeClass( V[ 0 ] ) )
  if( mode == 'dark'  ) D.forEach( ( V, I, A ) => $( `.k6-theme-dark-${  I + 1 }` ).addClass( V[ 1 ] ).removeClass( V[ 0 ] ) )
} // function

// ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // DOMContentLoaded

document.addEventListener( 'DOMContentLoaded', () => {

  // ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // WEBSITE IDENTITY

  if( typeof k6_head_logo  != 'undefined' ) $('#k6-head-logo' ).html( k6_head_logo  ).find( 'svg, img' ).addClass( 'd-block' ); else $('#k6-head-title').addClass( 'ms-0'   )
  if( typeof k6_head_title != 'undefined' ) $('#k6-head-title').html( k6_head_title )                                         ; else $('#k6-head-title').addClass( 'd-none' )

  // ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // HEAD

  // ---- ---- ---- ---- ---- ---- ---- ---- // HEAD MENU
  if( typeof k6_head_menu != 'undefined' ) k6_head_menu.forEach( ( V, I, A ) => {
    if( ! V.children ) $('#k6-head-menu').append( `<li class="nav-item col-6 col-md-auto"><a class="nav-link lh-1 px-0 px-md-2" ${ k6_link( V ) }>${V.text}</a></li>` )
    else {
      if( V.text ) $('#k6-head-menu').append( `
        <li       class="nav-item col-6 col-md-auto" role="button">
          <div    class="dropdown">
            <span class="dropdown-toggle nav-link lh-1 px-0 px-md-2" ${ k6_link( V ) }              id="k6-head-menu-${I}" data-bs-toggle="dropdown" aria-expanded="false">${V.text}</span>
            <ul   class="dropdown-menu dropdown-menu-dark k6-z-fixed k6-theme-light-2" aria-labelledby="k6-head-menu-${I}"></ul>
          </div>
        </li>
      ` )
      V.children.forEach( ( V1, I1, E1 ) => {
        if( V1.text ) $(`#k6-head-menu-${I} + ul`).append( `<li><a  class="dropdown-item" ${ k6_link( V ) }>${V1.text}</a></li>` )
        else          $(`#k6-head-menu-${I} + ul`).append( '<li><hr class="dropdown-divider"                             ></li>' )
      } ) // forEach
    } // if
  } ) // forEach

  // ---- ---- ---- ---- ---- ---- ---- ---- // HEAD SOCIAL
  if( typeof k6_head_soc != 'undefined' ) k6_head_soc.forEach( ( V, I, A ) => {
    if( V.text && V.icon ) $('#k6-head-soc').append( `
      <li        class="nav-item col-6 col-md-auto">
        <a       class="nav-link d-flex align-items-center px-0 px-md-2" rel="noopener" ${ k6_link( V ) }>${V.icon}
          <small class="lh-1     d-line-block d-md-none    ms-2"                                         >${V.text}</small>
        </a>
      </li>
    ` )
    $('#k6-head-soc img, #k6-head-soc svg').addClass( 'd-inline-block d-md-block' )
  } ) // forEach

  // ---- ---- ---- ---- ---- ---- ---- ---- // HEAD BUTTON
  if( typeof k6_head_btn != 'undefined' ) k6_head_btn.forEach( ( V, I, A ) => {
    if( V.text ) $('#k6-head-btn').append( `
      <a class="btn ms-2 k6-btn-outline-secondary -k6-my-n3px" ${ k6_link( V ) }>${V.text}</a>
    ` )
  } ) // forEach

  // ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // NECK

  // ---- ---- ---- ---- ---- ---- ---- ---- // NECK VERSION & LANGUAGE
  if( typeof k6_neck_ver_active  != 'undefined' ) if( k6_neck_ver [ 0 ]['text'] ) $('#k6-neck-ver-active' ).html( k6_neck_ver_active  || k6_neck_ver [ 0 ]['text'] ) ; else $('#k6-neck-ver-active' ).hide();
  if( typeof k6_neck_lang_active != 'undefined' ) if( k6_neck_lang[ 0 ]['text'] ) $('#k6-neck-lang-active').html( k6_neck_lang_active || k6_neck_lang[ 0 ]['text'] ) ; else $('#k6-neck-lang-active').hide();

  // ---- ---- ---- ---- ---- ---- ---- ---- // NECK VERSION
  if( typeof k6_neck_ver != 'undefined' ) k6_neck_ver.forEach( ( V, I, A ) => {
    if( V.text ) $('#k6-neck-ver').append( `<li><a  class="dropdown-item" ${ k6_link( V ) }>${V.text}</a></li>` )
    else         $('#k6-neck-ver').append( `<li><hr class="dropdown-divider"                            ></li>` )
  } ) // forEach

  // ---- ---- ---- ---- ---- ---- ---- ---- // NECK LANGUAGE
  if( typeof k6_neck_lang != 'undefined' ) k6_neck_lang.forEach( ( V, I, A ) => {
    if( V.text ) $('#k6-neck-lang').append( `<li><a  class="dropdown-item" ${ k6_link( V ) }>${V.text}</a></li>` )
    else         $('#k6-neck-lang').append( `<li><hr class="dropdown-divider"                            ></li>` )
  } ) // forEach

  // ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // LEFT

  var k6_left_menu_li = ( obj, id ) => { return `<li><a        class="${ id.split( '-' ).length > 2 ? 'ms-2' : '' } d-inline-flex align-items-center text-decoration-none p-1 k6-link-primary"        id="k6-left-menu-li${id}" ${ k6_link( obj ) }      >${obj.text}</a></li>` }
  var k6_left_menu_ul = ( obj, id ) => { return `<li><ul       class="${ id.split( '-' ).length > 2 ? 'ms-2' : '' } list-unstyled mb-0">
                                                   <li><button class="d-inline-flex align-items-center position-relative w-100 p-1 border-0 btn k6-btn-li k6-theme-dark-4" type="button" data-bs-target="#k6-left-menu-ul${id}" data-bs-toggle="collapse">${obj.text}</button>
                                                       <ul     class="list-unstyled collapse k6-transition-none"                                                                                      id="k6-left-menu-ul${id}"></ul></li>
                                                 </ul></li>` }

  var k6_left_menu_tree = ( obj, id = '' ) => {
    obj.forEach( ( V, I, A ) => {
      if( ! V.children )           $(`#k6-left-menu-ul${id}`     ).append( k6_left_menu_li( V, `${id}-${I}` ) )
      else               {         $(`#k6-left-menu-ul${id}`     ).append( k6_left_menu_ul( V, `${id}-${I}` ) ) ; k6_left_menu_tree( V.children, `${id}-${I}` ) }
      if(   V.active   ) { let T = $(`#k6-left-menu-li${id}-${I}`)
               T               .addClass( 'fw-bold active' )
        while( T.parent(      ).closest ( '.collapse'      ).length ) {
          T  = T.parent(      ).closest ( '.collapse'      ).eq( 0  )
          if(  T.attr  ( 'id' ).indexOf ( 'k6-left-menu-'  )   < 0  ) break
               T               .collapse( 'show'           )
        } // while
      } // if
    } ) // forEach
  } // function

  k6_left_menu_tree( k6_left_menu )

  // ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // CENTER

  if( typeof k6_center_article != 'undefined' ) $('#k6-center-article').html( k6_center_article )

  // ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // RIGHT

  $('#k6-center-article').find( 'h1, h2, h3, h4, h5, h6' ).each( ( I, E ) => {
    let T1 = $( E ).prop( 'tagName' ), T2, T3 = encodeURIComponent( $( E ).text() )
    if( T1 == 'H1' ) T2 = 'fw-bold'
    if( T1 == 'H2' ) T2 = ''
    if( T1 == 'H3' ) T2 = 'ms-2'
    if( T1 == 'H4' ) T2 = 'ms-3'
    if( T1 == 'H5' ) T2 = 'ms-4'
    if( T1 == 'H6' ) T2 = 'ms-4 small'
    $('#k6-right-menu-ul').append( `<li class="p-1 ${T2}"><a class="text-decoration-none k6-link-primary" href="#${T3}" onclick="if( document.getElementById('k6-right-offcanvas-close').offsetParent != null ) { document.getElementById('k6-right-offcanvas-close').click(); setTimeout( () => document.getElementById('${T3}').scrollIntoView(), 100 ) }">${ $( E ).text().replace( /</g, '&lt;' ) }</a></li>` )
    $( E ).html( `
    <span class="k6-hash-target" id="${T3}"></span>
    <span class="d-inline-block w-100 k6-hash-area">
      ${ $( E ).html() }
      <a class="ms-2 k6-hash-link" href="#${T3}"><svg width="16" height="16" viewBox="-10 0 468 512"><path fill="currentColor" d="M424 136h-74l14 -76q1 -22 -20 -28q-22 -1 -28 20l-15 84h-111l14 -76q1 -22 -20 -28q-22 -1 -28 20l-15 84h-85q-22 2 -24 24q2 22 24 24h77l-26 144h-83q-22 2 -24 24q2 22 24 24h74l-14 76q-1 22 20 28h4q19 -1 24 -20l15 -84h111l-14 76q-2 22 20 28h4q19 -1 24 -20 l15 -84h85q22 -2 24 -23q-2 -22 -24 -24h-77l26 -144l83 -1q22 -2 24 -23q-2 -23 -24 -25v0zM267 327h-111l25 -144h112l-26 144v0z" /></svg></a>
    </span>
  ` )
  } ) // each

  // ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // FOOT

  if( typeof k6_foot_title   != 'undefined' ) $('#k6-foot-title'  ).html( k6_foot_title   )
  if( typeof k6_foot_title_1 != 'undefined' ) $('#k6-foot-title-1').html( k6_foot_title_1 )
  if( typeof k6_foot_title_2 != 'undefined' ) $('#k6-foot-title-2').html( k6_foot_title_2 )
  if( typeof k6_foot_desc    != 'undefined' ) $('#k6-foot-desc'   ).html( k6_foot_desc    )

  if( typeof k6_foot_menu_1 != 'undefined' ) k6_foot_menu_1.forEach( V => { $('#k6-foot-memu-1').append( `<li class="mt-1"><a class="text-decoration-none k6-link-primary" ${ k6_link( V ) }>${V.text}</a></li>` ) } )
  if( typeof k6_foot_menu_2 != 'undefined' ) k6_foot_menu_2.forEach( V => { $('#k6-foot-memu-2').append( `<li class="mt-1"><a class="text-decoration-none k6-link-primary" ${ k6_link( V ) }>${V.text}</a></li>` ) } )

  // ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // THEME & COLOR

  if( typeof k6_site_theme != 'undefined' ) k6_theme( k6_site_theme )
  if( typeof k6_site_color != 'undefined' ) k6_color( k6_site_color )

  // ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // OTHER

  $('[data-bs-toggle="tooltip"]').tooltip() // Bootstrap Tooltip

} ) // addEventListener
