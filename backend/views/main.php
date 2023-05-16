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
            <div class="col-2" id="categoriesContainer">
                <h3>Categories</h3>
            </div>
            <div class="col-8" id="goodsContainer">
                <h3>Goods</h3>
            </div>
            <div class="col-2" id="filtersContainer">
                <h3>Filters</h3>
                <select class="form-select" id="filter" aria-label="Default select example"> 
                    <option value="1" selected>cheaper first</option>
                    <option value="2">alphabetically</option>
                    <option value="3">new first</option>
                </select>
            </div>
        </div>
    </div> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <script src="/js/index.js"></script>

</body>

</html>