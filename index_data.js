// ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // WEBSITE THEME & COLOR

// ---- ---- ---- ---- ---- ---- ---- ---- // THEME // You can choose one of 'light' and 'dark'. If you don't choose, it uses 'default' theme.
// var k6_site_theme = 'light'
// var k6_site_theme = 'dark'

// ---- ---- ---- ---- ---- ---- ---- ---- // THEME // You can choose one of 'link_mint' and 'blue', or you can set color codes as the below examples. If you don't choose and set, it uses 'default' color.
// var k6_site_color = 'link_mint'
// var k6_site_color = 'blue'
// var k6_site_color = { 'bs-primary': '669999' } // The color code MUST be RRGGBB format, not #RRGGBB, RGB, #RGB or rgb( ... ) format.
// var k6_site_color = { 'bs-primary': '35567B', 'bs-secondary': 'B4B4B5', 'bs-success': '35567B', 'bs-warning': '35567B', 'bs-danger': '35567B', 'bs-light': 'E6EDF2', 'bs-dark': '1b2b3e', 'k6-darker': '0d161f' }

// ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // HEAD

var k6_head_title = '<span class="d-md-none d-lg-inline">Pure Bootstrap Docs <sup>by KLA6</sup></span>' // Using HTML or not for the title depends on your decision.
var k6_head_logo  = `
  <svg        viewBox="0 0 512 512" width="32" height="32">
    <g           fill="#${ typeof k6_color != 'undefined' ? ( typeof k6_color.primary != 'undefined' ? k6_color.primary : '0D6EFD' ) : '0D6EFD' }">
      <polygon points="256,140.6 179.1,140.6 140.6,140.6 140.6,217.7 179.1,217.7 256,217.7"/>
      <path         d="M64,214.6V102c0-10.4,3.8-19.4,11.5-27.1C82.8,67.6,91.8,64,102.6,64h76.6H256V0H64C28.7,0,0,28.7,0,64v192h64 V214.6z"/>
    </g>
    <path        fill="#${ typeof k6_color != 'undefined' ? ( typeof k6_color.warning != 'undefined' ? k6_color.warning : 'FFC107' ) : 'FFC107' }" class="st2" d="M448,0H256v64h76.9H410c10.4,0,19.4,3.6,27.1,10.9c7.3,7.7,10.9,16.7,10.9,27.1v77.1h-76.6v-38.6h-38.6H256 v77.1h76.9H410c10.4,0,19.4,3.6,27.1,10.9c7.3,7.7,10.9,16.7,10.9,27.1v0.3h64V64C512,28.7,483.3,0,448,0z"/>
    <g           fill="#${ typeof k6_color != 'undefined' ? ( typeof k6_color.danger  != 'undefined' ? k6_color.danger  : 'DC3545' ) : 'DC3545' }">
      <polygon points="371.4,371.4 371.4,357.9 371.4,294.3 332.9,294.3 256,294.3 256,371.4 332.9,371.4"/>
      <path         d="M448,256v153.4c0,10.8-3.6,19.8-10.9,27.1c-7.7,7.7-16.7,11.5-27.1,11.5h-77.1H256v64h192 c35.3,0,64-28.7,64-64V256H448z"/>
    </g>
    <g           fill="#${ typeof k6_color != 'undefined' ? ( typeof k6_color.success != 'undefined' ? k6_color.success : '198754' ) : '198754' }">
      <polygon points="256,371.4 256,294.3 179.1,294.3 140.6,294.3 140.6,371.4 179.1,371.4"/>
      <path         d="M179.1,448h-76.6c-10.8,0-19.8-3.8-27.1-11.5c-7.7-7.3-11.5-16.3-11.5-27.1V293.8V256H0v192 c0,35.3,28.7,64,64,64h192v-64H179.1z"/>
    </g>
  </svg>
` // The logo height should be 32 pixels, unless you might need to edit #k6-head height in <style> of <head>.

var k6_head_menu = [ { text: 'Home'    , href    : '#'                            , onclick: `alert( 'This is an onclick event example.' )`, },
                     { text: 'Docs'    , href    : '/'                            ,                                                          },
                     { text: 'Blog'    , href    : 'https://blog.kla6.net'        , target : '_blank'                                      , },
                     { text: 'Dropdown', children: [ {  text   : 'You Can Make'   , href   : '#', },
                                                     {  text   : 'a Dropdown Menu', href   : '#', },
                                                     {  text   : null             ,               },
                                                     {  text   : 'by JSON Editing', href   : '#', }, ], } ]

var k6_head_soc  = [ { text: 'GitHub'     , href: 'https://github.com'          , target : '_blank', icon: '<svg width="16" height="16" viewBox="-10 0 516 512"><path fill="currentColor" d="M166 397q-1 4 -5 4q-6 0 -6 -4q1 -3 5 -3q5 0 6 3v0zM135 393q-1 3 4 5q5 1 6 -2q1 -4 -4 -5t-6 2v0zM179 391q-5 1 -5 5q1 3 6 3q5 -2 5 -5q-1 -3 -6 -3v0zM245 8q-107 2 -175 70v0q-68 68 -70 174q1 85 47 149t123 90q18 1 17 -12v-15v-46q-2 0 -19 2q-18 1 -38 -4 q-20 -6 -28 -28q0 -2 -8 -16q-8 -13 -20 -21q-2 -1 -8 -8q-7 -6 10 -7q1 -1 14 4q13 4 24 22q18 27 39 27q22 0 34 -6q4 -24 16 -34q-44 -2 -77 -22q-33 -19 -35 -89q0 -20 6 -33q5 -13 17 -25q-2 -6 -4 -24t7 -44q18 -3 42 11q25 13 27 16v0q30 -9 63 -9q32 0 63 9 q0 -1 13 -9q12 -8 28 -14q16 -7 28 -4q9 26 7 44t-5 24q12 12 19 25t7 33q-1 48 -17 71q-17 22 -43 30t-55 10q16 11 17 46v66v18q-1 13 17 12q76 -26 122 -90q45 -64 46 -149q-1 -70 -34 -125q-34 -55 -90 -87q-57 -31 -127 -32v0zM97 353q-2 2 1 5t5 1t-1 -5q-2 -3 -5 -1 v0zM86 345q0 2 3 4q3 1 4 -1t-2 -4q-3 -1 -5 1v0zM119 380q-2 3 1 7q4 3 7 1q1 -3 -2 -7q-4 -3 -6 -1v0zM107 366q-2 2 0 6q3 3 6 2q2 -2 0 -6q-3 -4 -6 -2v0z"/></svg>' },
                     { text: 'YouTube'    , href: 'https://youtube.com'         , target : '_blank', icon: '<svg width="16" height="16" viewBox="-10 0 586 512"><path fill="currentColor" d="M550 124q-12 -37 -49 -49q-24 -5 -74 -8q-50 -2 -93 -3h-46h-46q-43 1 -93 3q-50 3 -74 8q-37 12 -49 49q-5 23 -8 53q-2 31 -3 55v24v25q1 24 3 54q3 31 8 54q12 37 49 48q24 5 74 8q50 2 93 3h46v0h46q43 -1 93 -3q50 -3 74 -8q37 -11 49 -48q5 -23 8 -54q2 -30 3 -54 v-25v-24q-1 -24 -3 -55q-3 -30 -8 -53v0zM232 338v-163l143 81l-143 82v0z"/></svg>' },
                  // { text: 'FaceBook'   , href: 'https://facebook.com'        , target : '_blank', icon: '<svg width="16" height="16" viewBox="-10 0 330 512"><path fill="currentColor" d="M279 288l14 -93h-89v-60q0 -20 12 -34q11 -15 41 -16h40v-79q-1 0 -23 -3q-21 -3 -49 -3q-55 0 -88 32q-32 32 -33 93v70h-81v93h81v224h100v-224h75z"/></svg>' },
                  // { text: 'Twitter'    , href: 'https://twitter.com'         , target : '_blank', icon: '<svg width="16" height="16" viewBox="-10 0 532 512"><path fill="currentColor" d="M459 152q1 7 1 13v0v0q0 71 -35 139q-34 68 -101 113q-66 45 -163 47q-90 -1 -161 -47q12 1 25 1q75 -1 131 -45q-36 -1 -62 -21t-36 -51q9 1 19 1q15 0 28 -3q-37 -8 -60 -36t-24 -67v-2q21 12 47 14q-44 -31 -47 -88q1 -29 15 -53q39 48 95 77q55 29 121 33 q-2 -12 -2 -24q1 -44 30 -74q30 -30 74 -31q47 1 77 33q36 -7 67 -25q-13 37 -46 58q31 -4 60 -17q-22 32 -53 55v0z"/></svg>' },
                     { text: 'Google Play', href: 'https://developer.google.com', target : '_blank', icon: '<svg width="16" height="16" viewBox="-10 0 522 512"><path fill="currentColor" d="M325 234l-220 -221l280 161l-60 60v0zM47 0q-21 11 -22 35v442q1 24 22 35l257 -256l-257 -256v0zM472 226l-59 -34l-65 64l65 65l60 -35q14 -11 14 -30t-15 -30v0zM105 499l280 -161l-60 -60l-220 221v0z"/></svg>' },
                     { text: 'App Store'  , href: 'https://developer.apple.com' , target : '_blank', icon: '<svg width="16" height="16" viewBox="-10 0 524 512"><path fill="currentColor" d="M256 121l9 -16q11 -15 28 -7q15 11 7 28l-87 151h63q16 1 23 14t0 27h-185q-19 -2 -21 -20q2 -19 21 -21h52l66 -115l-20 -36q-8 -17 7 -28q17 -8 28 7l9 16v0zM177 339l-19 34q-11 15 -28 7q-16 -10 -8 -27l15 -26q24 -7 40 12v0zM346 277h53q19 2 21 21q-2 18 -21 20 h-29l20 34q7 18 -8 28q-17 8 -28 -7q-26 -46 -46 -80q-17 -30 -29 -51q-12 -22 -8 -42q5 -19 15 -27q19 32 55 95q2 4 5 9v0zM256 8q-69 1 -125 34v0q-56 33 -89 89v0q-33 56 -34 125q1 69 34 125t89 89t125 34q69 -1 125 -34t89 -89t34 -125q-1 -69 -34 -125t-89 -89 t-125 -34v0zM472 256q-2 91 -63 153v0q-61 61 -153 63q-91 -2 -153 -63q-61 -61 -63 -153q2 -91 63 -153q61 -61 153 -63q91 2 153 63q61 61 63 153v0z"/></svg>' }, ]
var k6_head_btn  = [ { text: 'Download'   , href: 'https://codecanyon.net'      ,                    },
                     { text: 'Purchase'   , href: 'https://codecanyon.net'      , target : '_blank', }, ]

// ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // NECK // The 'neck' means the second row of the header navigation.

var k6_neck_ver  = [ { text: 'Ver. 3.0<span class="d-none d-md-inline"> - Latest</span>', href: '#' /* '/1.0/en' */, }, { text: '' },
                     { text: 'Ver. 2.0'                                                 , href: '#' /* '/2.0/en' */, },
                     { text: 'Ver. 1.0'                                                 , href: '#' /* '/3.0/en' */, }, ]
var k6_neck_lang = [ { text: 'English'                                                  , href: '#' /* '/1.0/en' */, },
                     { text: '한국어'                                                   , href: '#' /* '/1.0/ko' */, },
                     { text: 'Tiếng Việt'                                               , href: '#' /* '/1.0/vi' */, }, ]

var k6_neck_ver_active  = ''
var k6_neck_lang_active = ''

// ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // LEFT

var k6_left_menu = [ { text: 'Introduction' , href    : '#'                             , title   : 'This is a Bootstrap Tooltip example.', tooltip: true, },
                     { text: 'Tree Folder 1', children: [ { text: 'Active Page Example' , href    : '#'                                   , active : true, },
                                                          { text: 'Unlimited Tree Depth', href    : '#', },
                                                          { text: 'Child Tree Folder'   , children: [ { text: 'Page'                      , href    : '#', },
                                                                                                      { text: 'Another Page'              , href    : '#', },
                                                                                                      { text: 'Another Child Tree Folder' , children: [ { text: 'More Page 1', href: '#', },
                                                                                                                                                        { text: 'More Page 2', href: '#', },
                                                                                                                                                        { text: 'More Page 3', href: '#', }, ], }, ], }, ], },
                     { text: 'Tree Folder 2', children: [ { text: 'Page        2 1'     , href    : '#', },
                                                          { text: 'Page        2 2'     , href    : '#', },
                                                          { text: 'Tree Folder 2 3'     , children: [ { text: 'Page        2 3 1'         , href    : '#', },
                                                                                                      { text: 'Page        2 3 2'         , href    : '#', },
                                                                                                      { text: 'Tree Folder 2 3 3'         , children: [ { text: 'Page 2 3 3 1', href: '#', },
                                                                                                                                                        { text: 'Page 2 3 3 2', href: '#', }, ], }, ], }, ], }, ]

// ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // RIGHT

// The right aside list will be auto generated by the main article's <h1> ~ <h6> tags.

// ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // FOOT

var k6_foot_title   = 'Pure Bootstrap Docs <sup>by KLA6</sup>'
var k6_foot_title_1 = 'Theme'
var k6_foot_title_2 = 'Color'

var k6_foot_menu_1  = [ { text: 'Default', href: '#', onclick: 'k6_theme()' }, { text: 'Light'    , href: '#', onclick: `k6_theme( 'light'     )` }, { text: 'Dark', href: '#', onclick: `k6_theme( 'dark' )` }, ]
var k6_foot_menu_2  = [ { text: 'Default', href: '#', onclick: 'k6_color()' }, { text: 'Link Mint', href: '#', onclick: `k6_color( 'link_mint' )` }, { text: 'Blue', href: '#', onclick: `k6_color( 'blue' )` }, ]

var k6_foot_desc = `<p  class="mb-1">This page is the documentation, also the demostration at the same time, of Pure Bootstrap Docs. You can purchase the code on the CodeCanyon of Envato.</p>
                    <p  class="mb-0">Copyright 2022 by KLA6, all rights reserved.</p>`

// ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== // CENTER

// var k6_center_article = `<h1>Example</h1><p>Try to remove '//' at the start of this line to check what happens.</p>`
