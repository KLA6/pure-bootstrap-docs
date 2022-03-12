<!-- ==== ==== ==== ==== ==== ==== ==== ==== CENTER -->

<article class="d-grid k6-article k6-theme-dark-2" id="k6-center-article">

<h1 class="fw-bold">Pure Bootstrap Docs</h1>
<blockquote class="blockquote border-start k6-border-primary border-3 rounded-end bg-primary bg-opacity-10 p-3">
  Single Page Template for Structured Docs
</blockquote>
<!-- <img class="mb-3 w-100" src="/image_1.jpg"> -->
<p>
  This is a single page template for structured documents by KLA6.
  It uses the default characteristics of the <a href="https://getbootstrap.com" target="_blank">Bootstrap</a> itself, so the name is 'Pure Bootstrap'.
  Especially, about 0.25, 0.5, 1, 1.5 and 3 rem size unit rule, it strictly follows the Bootstrap's way, but if you don't know what the size unit rule means, you may ignore.
  It targets to achieve the universal and conventional design, which accentuates the content, without any visual distraction, to all people, regardless of ages, genders or other factors.
</p>

<h2>Features</h2>
<p>
  Please check the core features of Pure Bootstrap Docs HTML Template in below.
  FYI, this demostration page is only a part of the full code, and the full code will be provided after your purchase.
</p>

<h3>Changeable Theme & Color Set without Refresh</h3>
<!-- <img class="mb-3 w-100" src="/image_2.jpg"> -->
<blockquote class="blockquote border-start k6-border-secondary border-3 rounded-end bg-secondary bg-opacity-10 p-3">
  <table class="table">
    <thead>
      <tr>
        <th colspan="4">Click below links to try.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col-3">Theme</td>
        <td class="col-3"><a class="k6-demo-theme fw-bold text-decoration-none" href="javascript:" onclick="k6_theme(         ); $('.k6-demo-theme').removeClass( 'fw-bold text-decoration-none' ); $( this ).addClass( 'fw-bold text-decoration-none' )">Default</a></td>
        <td class="col-3"><a class="k6-demo-theme"                              href="javascript:" onclick="k6_theme( 'light' ); $('.k6-demo-theme').removeClass( 'fw-bold text-decoration-none' ); $( this ).addClass( 'fw-bold text-decoration-none' )">Light</a  ></td>
        <td class="col-3"><a class="k6-demo-theme"                              href="javascript:" onclick="k6_theme( 'dark'  ); $('.k6-demo-theme').removeClass( 'fw-bold text-decoration-none' ); $( this ).addClass( 'fw-bold text-decoration-none' )">Dark</a   ></td>
      </tr>
      <tr>
        <td class="text-nowrap">Color Set</td>
        <td                    ><a class="k6-demo-color fw-bold text-decoration-none text-decoration-none" href="javascript:" onclick="k6_color(             ); $('.k6-demo-color').removeClass( 'fw-bold text-decoration-none' ); $( this ).addClass( 'fw-bold text-decoration-none' )">Default</a  ></td>
        <td class="text-nowrap"><a class="k6-demo-color"                                                   href="javascript:" onclick="k6_color( 'link_mint' ); $('.k6-demo-color').removeClass( 'fw-bold text-decoration-none' ); $( this ).addClass( 'fw-bold text-decoration-none' )">Link Mint</a></td>
        <td                    ><a class="k6-demo-color"                                                   href="javascript:" onclick="k6_color( 'blue'      ); $('.k6-demo-color').removeClass( 'fw-bold text-decoration-none' ); $( this ).addClass( 'fw-bold text-decoration-none' )">Blue</a     ></td>
      </tr>
      <tr>
        <td class="border-0 text-nowrap k6-fs-1rem" colspan="4">You may have 3 ⨉ 3 combinations or even more.</td>
      </tr>
    </tbody>
  </table>
</blockquote>
<p>
  It provides simple JS functions which can change the theme & color of your website.
  The functions are located in <code>/index_init.js</code> file.
  If you have basic JS knowlege, you can add more color sets by adding JSON variables in <code>k6_color()</code> funtion.
</p>
<pre><code>function k6_theme( mode = '' ) { ... } // E.g., k6_theme( 'dark' )
function k6_color( mode = '' ) {
  let C = { your_color_set: { 'bs-primary': 'RRGGBB', ... }, ... }
  ...
 } // E.g., k6_color( 'your_color_set' )</code></pre>

<h3>Fully Responsive & Mobile Ready</h3>
<p>
  As Bootstrap is fully responsive, it is fully responsive as well.
  Also, it uses Bootstrap's own <a href="https://getbootstrap.com/docs/5.1/components/navbar" target="_blank">Navbar</a> and <a href="https://getbootstrap.com/docs/5.1/components/offcanvas" target="_blank">Offcanvas</a>,
  so you have a few expreinces of Bootstrap, you will feel easy to understand and customize the code structure.
</p>

<h3>Navigation by JSON</h3>
<!-- <img class="mb-3 w-100" src="/image_3.jpg"> -->
<p>
  The navigation parts such as <sup>[1]</sup> primary heder, <sup>[2]</sup> secondary header, <sup>[3]</sup> left aside, <sup>[4]</sup> right aside and <sup>[5]</sup> footer are editable by JSON variable in <code>/index_data.js</code> file.
  This demo page is NOT same (not including the JS navigation functions) with the code the you get after purchasing, because of preventing the code steal without purchasing.
</p>
<pre><code>var k6_head_menu = [ { text: 'Home'    , href    : '#'                            , onclick: `alert( 'This is an onclick event example.' )`, },
                     { text: 'Docs'    , href    : '/'                            ,                                                          },
                     { text: 'Blog'    , href    : 'https://blog.kla6.net'        , target : '_blank'                                      , },
                     { text: 'Dropdown', children: [ {  text   : 'You Can Make'   , href   : '#', },
                                                     {  text   : 'a Dropdown Menu', href   : '#', },
                                                     {  text   : null             ,               },
                                                     {  text   : 'by JSON Editing', href   : '#', }, ], } ]</code></pre>

<h3>Page Index & Link Auto Generation</h3>
<!-- <img class="mb-3 w-100" src="/image_4.jpg"> -->
<p>
  The page content index on the right aside will be automatically generated according to the article content, by parsing <code>&lt;h1></code> ~ <code>&lt;h6></code> tags with a JS function.
  Also, it generate mouse hover hash links on each head tags as well.
</p>

<h3>PHP Inclusion Structure</h3>
<p>
  The code is divided to 8 PHP files by `include` functions to understand and use easily for your own purpose.
</p>
<pre><code>&lt;header     id="k6-head"  >&lt;?php include 'index_head.php' ; ?>&lt;/header>
&lt;div        id="k6-neck"  >&lt;?php include 'index_neck.php' ; ?>&lt;/div>
&lt;div        id="k6-middle">
  &lt;aside    id="k6-left"  >&lt;?php include 'index_left.php' ; ?>&lt;/aside>
  &lt;div      id="k6-center">
    &lt;main   id="k6-body"  >&lt;?php include 'index_body.php' ; ?>&lt;/main>
    &lt;footer id="k6-foot"  >&lt;?php include 'index_foot.php' ; ?>&lt;/footer>
  &lt;/div>
  &lt;aside    id="k6-right" >&lt;?php include 'index_right.php'; ?>&lt;/aside>
&lt;/div></code></pre>

<h3>Convenient Search Modal</h3>
<!-- <img class="mb-3 w-100" src="/image_5.jpg"> -->
<p>
  As more and more mobile users increase, it provides full screen search modal for a better search sight.
  At the same time, it conisdered PC users as well by caring the Tab key pressing navigation situation.
  You may test it by pressing Tab key continuosly near the search box to understand what this means.
</p>

<h2>Dependencies</h2>
<ul>
  <li><a href="https://getbootstrap.com/docs/5.1/getting-started/introduction" target="_blank">Bootstrap 5.1.3</a></li>
  <li><a href="https://jquery.com/download"                                    target="_blank">jQuery 3.6.0</a>, but this dependency will be removed within next a few updates by replacing every jQuery part with Vanilla JS.</li>
</ul>

</article>
