<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- The below code is vertically aligned to show its structure.
         Before using, turn off word wrap function of your code editor, or use your own code formatter. -->

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport"           content="width=device-width, initial-scale=1">

    <link  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" rel="stylesheet">
    <link  href="https://cdn.jsdelivr.net/gh/KLA6/more-bootstrap@1.0.0/more-bootstrap.min.css"                                                                                     crossorigin="anonymous" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"                 integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="                     crossorigin="anonymous"></script>

    <script src="index_data.js"></script>
    <script src="index_init.js"></script>

    <style>
      #k6-head   { max-height: 4rem; height:   4rem  ; }
      #k6-neck   { max-height: 4rem; height:   4rem  ; }
      #k6-middle { min-height: calc(  100vh - 12rem ); } /* #k6-center { flex: 1; } */
      #k6-foot   { min-height: 4rem;                   }

      @media( max-width:  767.98px ) { #k6-left  > div { width: 16rem; height:       100vh         ; max-width: 75vw; } #k6-left  .offcanvas-backdrop { width: 100vw; max-width : 100vw  ;                } } /*  md */
      @media( max-width:  991.98px ) { #k6-right > div { width: 16rem; height:       100vh         ; max-width: 75vw; } #k6-right .offcanvas-backdrop { width: 100vw; max-width : 100vw  ; z-index: 1045; }
                                                                                                                        #k6-right .offcanvas          {                                    z-index: 1055; } } /*  lg */
      @media( max-width:  767.98px ) { #k6-head-nav    { width: 100% ; top   :               3rem  ;                             position : absolute;                                                     } } /*  md */ /* iPhone */
      @media( min-width:  768px    ) { #k6-left  > div { width: 16rem; height: calc( 100vh - 4rem ); transform: none; top: 4rem; position: sticky; align-self: start; visibility: visible !important;     } } /*  md */
      @media( min-width:  992px    ) { #k6-right > div { width: 12rem; height: calc( 100vh - 4rem ); transform: none; top: 4rem; position: sticky; align-self: start; visibility: visible !important;     } } /*  lg */
      @media( min-width: 1400px    ) { #k6-left        {               margin-left :        -1rem  ;                                                                                                      } } /* xxl */
      @media( min-width: 1400px    ) { #k6-right       {               margin-right:        -1rem  ;                                                                                                      } } /* xxl */
    </style>

    <!-- <style> @import url( 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap' ); * { font-family: 'Noto Sans', sans-serif; } </style> Remove this line, if you don't want to use Google Font. -->

    <?php include 'index_meta.php'; ?>

  </head>
  <body class="k6-theme-dark-2">

    <header     id="k6-head"                                      ><?php include 'index_head.php' ; ?></header>
    <div        id="k6-neck"   class="sticky-top"                 ><?php include 'index_neck.php' ; ?></div   >
    <div        id="k6-middle" class="d-flex px-0 container-xxl"  >
      <aside    id="k6-left"                                      ><?php include 'index_left.php' ; ?></aside >
      <div      id="k6-center" class="d-block p-3 ps-md-0 pe-lg-0">
        <main   id="k6-body"                                      ><?php include 'index_body.php' ; ?></main  >
        <footer id="k6-foot"                                      ><?php include 'index_foot.php' ; ?></footer>
      </div>
      <aside    id="k6-right"                                     ><?php include 'index_right.php'; ?></aside >
    </div>

    <?php include 'index_modal.php'; ?>

  </body>
</html>
