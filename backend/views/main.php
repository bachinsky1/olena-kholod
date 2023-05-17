<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-light bg-light mb-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="https://getbootstrap.com//docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
            </a>
        </div>
    </nav>
    <div class="container-fluid">

        <div class="row">
            <div class="col-2">
                <h3><?= $leftHeader ?></h3>
                <div id="categoriesContainer"></div>
            </div>
            <div class="col-8">
                <h3><?= $centertHeader ?></h3>
                <div class="d-flex justify-content-center" id="spinner" style="display: none;">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div id="goodsContainer"></div>
            </div>
            <div class="col-2">
                <h3><?= $rightHeader ?></h3>
                <div id="filtersContainer">
                    <select class="form-select" id="filter" aria-label="Default select example"></select>
                </div>
            </div>
        </div>

    </div>

    <!-- The Modal -->
    <div class="modal" id="myModal"></div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <script src="/js/index.js"></script>



</body>

</html>