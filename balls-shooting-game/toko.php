<?php 

  if (isset($_POST['btnid1'])) {
    var_dump($_POST);
  }





 ?>
<body class="bg-dark text-light">
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">

  <!-- Body -->

  <!-- As a heading -->
  <nav class="fixed navbar navbar-dark bg-dark shadow-lg">
    <div class="container">
      <span class="navbar-brand mb-0 h1 disable">Shop & Upgrades</span>
      <span class="navbar-brand mb-0 h1 disable"><i class="bi bi-cash-coin">Money</i> : 0</span>
    </div>
  </nav>

  <!-- Shop body -->
  <div class="container-fluid pt-4 fs-4 ps-5 text-light">
    <form method="post">
    <div class="row g-4 pb-2">
  <div class="col-sm">
    <fieldset disabled>
    <input type="text" class="form-control" placeholder="Attack Speed ++" aria-label="City">
  </fieldset>
  </div>
  <div class="col-sm">
    <button class="btn btn-primary" type="submit" name="btnid1">Buy!</button>
  </div>
  <div class="col-sm">
    <fieldset disabled>
    <input type="text" class="form-control" placeholder="City" aria-label="City">
  </fieldset>
  </div>
  <div class="col-sm">
    <button class="btn btn-primary" type="submit" name="btnid2">Buy!</button>
  </div>
</div>

<!-- baris 2 -->
<div class="row g-4 pb-2">
  <div class="col-sm">
    <fieldset disabled>
    <input type="text" class="form-control" placeholder="City" aria-label="City">
  </fieldset>
  </div>
  <div class="col-sm">
    <button class="btn btn-primary" type="submit" name="btnid3">Buy!</button>
  </div>
  <div class="col-sm">
    <fieldset disabled>
    <input type="text" class="form-control" placeholder="City" aria-label="City">
  </fieldset>
  </div>
  <div class="col-sm">
    <button class="btn btn-primary" type="submit" name="btnid4">Buy!</button>
  </div>
</div>

<!-- baris 3 -->
<div class="row g-4 pb-2">
  <div class="col-sm">
    <fieldset disabled>
    <input type="text" class="form-control" placeholder="City" aria-label="City">
  </fieldset>
  </div>
  <div class="col-sm">
    <button class="btn btn-primary" type="submit" name="btnid5">Buy!</button>
  </div>
  <div class="col-sm">
    <fieldset disabled>
    <input type="text" class="form-control" placeholder="City" aria-label="City">
  </fieldset>
  </div>
  <div class="col-sm">
    <button class="btn btn-primary" type="submit" name="btnid6">Buy!</button>
  </div>
</div>

    </form>
  </div>
  <!-- end shop body -->

  <!-- End Body -->

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
  <script type="text/javascript">
    
  </script>
</body>
