<p align="center"><br><br><br><br>
<img style="width: 100%;" src="https://logo.kla6.net/download/logo_hori_colr_alon.svg" height="64">
<br><br><br><br><br></p>

# Pure Bootstrap Docs
<img style="width: 100%;" src="http://envato.pure.kla6.net/220311_result_01_2.jpg">
<b>Pure Bootstrap Docs</b> is a <b>Single Page Website Template</b> for <b>Structured Online User Manual Documentation</b>.
It uses the default characteristics of the Bootstrap itself, so the name is 'Pure Bootstrap'.
Especially, about 0.25, 0.5, 1, 1.5 and 3 rem size unit rule, it strictly follows the Bootstrap's way, but if you don't know what the size unit rule means, you may ignore.
It targets to achieve the universal and conventional design, which accentuates the content, without any visual distraction, to all people, regardless of ages, genders or other factors.

## Changeable Theme & Color Set
<img style="width: 100%;" src="http://envato.pure.kla6.net/220311_result_02_1.jpg">
It provides simple JS functions which can change the theme & color of your website.
The functions are located in `/index_init.js` file.
If you have basic JS knowlege, you can add more color sets by adding JSON variables in `k6_color()` funtion.
```
function k6_theme( mode = '' ) { ... } // E.g., k6_theme( 'dark' )
function k6_color( mode = '' ) {
  let C = { your_color_set: { 'bs-primary': 'RRGGBB', ... }, ... }
  ...
} // E.g., k6_color( 'your_color_set' )
```

## Fully Responsive & Mobile Ready
As Bootstrap is fully responsive, it is fully responsive as well.
Also, it uses Bootstrap's own <a href="https://getbootstrap.com/docs/5.1/components/navbar" target="_blank">Navbar</a> and <a href="https://getbootstrap.com/docs/5.1/components/offcanvas" target="_blank">Offcanvas</a>,
so you have a few expreinces of Bootstrap, you will feel easy to understand and customize the code structure.


## Navigation by JSON
<img style="width: 100%;" src="http://envato.pure.kla6.net/220311_result_03.jpg">
The navigation parts such as <sup>[1]</sup> primary heder, <sup>[2]</sup> secondary header, <sup>[3]</sup> left aside, <sup>[4]</sup> right aside and <sup>[5]</sup> footer are editable by JSON variable in `/index_data.js` file.
```
var k6_head_menu = [ { text: 'Home'    , href    : '#'                            , onclick: `alert( 'This is an onclick event example.' )`, },
                     { text: 'Docs'    , href    : '/'                            ,                                                          },
                     { text: 'Blog'    , href    : 'https://blog.kla6.net'        , target : '_blank'                                      , },
                     { text: 'Dropdown', children: [ {  text   : 'You Can Make'   , href   : '#', },
                                                     {  text   : 'a Dropdown Menu', href   : '#', },
                                                     {  text   : null             ,               },
{  text   : 'by JSON Editing', href   : '#', }, ], } ]
```

## Page Index & Link Auto Generation
<img style="width: 100%;" src="http://envato.pure.kla6.net/220311_result_05.jpg">
The page content index on the right aside will be automatically generated according to the article content, by parsing `<h1>` ~ `<h6>` tags with a JS function.
Also, it generate mouse hover hash links on each head tags as well.

## PHP Inclusion Structure
The code is divided to 8 PHP files by `include` functions to understand and use easily for your own purpose.
```
<header     id="k6-head"  ><?php include 'index_head.php' ; ?></header>
<div        id="k6-neck"  ><?php include 'index_neck.php' ; ?></div>
<div        id="k6-middle">
  <aside    id="k6-left"  ><?php include 'index_left.php' ; ?></aside>
  <div      id="k6-center">
    <main   id="k6-body"  ><?php include 'index_body.php' ; ?></main>
    <footer id="k6-foot"  ><?php include 'index_foot.php' ; ?></footer>
  </div>
 <aside    id="k6-right" ><?php include 'index_right.php'; ?></aside>
</div>
```

## Convenient Search Modal
<img style="width: 100%;" src="http://envato.pure.kla6.net/220311_result_04.jpg">
As more and more mobile users increase, it provides full screen search modal for a better search sight.
At the same time, it conisdered PC users as well by caring the Tab key pressing navigation situation.
You may test it by pressing Tab key continuosly near the search box to understand what this means.

## Dependencies
- <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction" target="_blank">Bootstrap 5.1.3</a></li>
- <a href="https://jquery.com/download"                                    target="_blank">jQuery 3.6.0</a>, but this dependency will be removed within next a few updates by replacing every jQuery part with Vanilla JS.</li>
