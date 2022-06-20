<template>
  <div class="home">
    <body class="left-sidebar">
        <div id="page" class="hfeed site">
            <div id="content" class="site-content" tabindex="-1">
                <div class="container">

                    <nav class="woocommerce-breadcrumb" ><a href="/">Trang chủ</a><span class="delimiter"><i class="fa fa-angle-right"></i></span></nav>

                    <div id="primary" class="content-area">
                        <main id="main" class="site-main">

                            <header class="page-header">
                                <h1 class="page-title">Điện thoại</h1>
                                <p class="woocommerce-result-count">Hiển thị 1&ndash;15 trong 20 kết quả</p>
                            </header>
                            <div class="shop-control-bar">
                                <ul class="shop-view-switcher nav nav-tabs" role="tablist">
                                    <li class="nav-item"><a class="nav-link active" data-toggle="tab" title="Grid View" href="#grid"><i class="fa fa-th"></i></a></li>
                                    <li class="nav-item"><a class="nav-link " data-toggle="tab" title="Grid Extended View" href="#grid-extended"><i class="fa fa-align-justify"></i></a></li>
                                    <li class="nav-item"><a class="nav-link " data-toggle="tab" title="List View" href="#list-view"><i class="fa fa-list"></i></a></li>
                                    <li class="nav-item"><a class="nav-link " data-toggle="tab" title="List View Small" href="#list-view-small"><i class="fa fa-th-list"></i></a></li>
                                </ul>
                                <form class="woocommerce-ordering" method="get">
                                    <select name="orderby" class="orderby">
                                        <option value="menu_order"  selected='selected'>Default sorting</option>
                                        <option value="popularity" >Sort by popularity</option>
                                        <option value="rating" >Sort by average rating</option>
                                        <option value="date" >Sort by newness</option>
                                        <option value="price" >Sort by price: low to high</option>
                                        <option value="price-desc" >Sort by price: high to low</option>
                                    </select>
                                </form>
                                <form class="form-electro-wc-ppp"><select name="ppp" onchange="this.form.submit()" class="electro-wc-wppp-select c-select"><option value="15"  selected='selected'>Show 15</option><option value="-1" >Show All</option></select></form>
                                <nav class="electro-advanced-pagination">
                                    <form method="post" class="form-adv-pagination"><input id="goto-page" size="2" min="1" max="2" step="1" type="number" class="form-control" value="1" /></form> of 2<a class="next page-numbers" href="#">&rarr;</a>

                                </nav>
                            </div>

                            <div class="tab-content">

                                <div role="tabpanel" class="tab-pane" id="grid" aria-expanded="true">

                                    <ul v-for="(event,index ) in events" :key="event.eventId" class="products columns-3" style="display:flex">
                                        <li v-if="index%3===0" class="product first">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="#" rel="tag">{{event.category}}</a></span>
                                                    <a href="/event">
                                                        <h3>{{event.eventName}}</h3>
                                                        <div class="product-thumbnail">

                                                            <img :src="event.image" alt="">

                                                        </div>
                                                    </a>

                                                    <div class="price-add-to-cart" style="margin-top: 280px;">
                                                        <span class="price">
                                                            <div class="progress">
                                                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: v-bind('event.currentPoint/event.totalPoint')" :aria-valuenow="event.currentPoint" aria-valuemin="0" :aria-valuemax="event.totalPoint"></div>
                                                                </div>
                                                                <span class="electro-price" style="font-weight: bold;color: #4a5b6a; margin-top: -15px"><span class="amount">{{event.currentPoint}}</span>/<span>{{event.totalPoint}}</span></span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Xem chi tiết</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li v-if="index%3===1" class="product ">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">{{event.category}}</a></span>
                                                    <a href="/event">
                                                        <h3>{{event.name}}</h3>
                                                        <div class="product-thumbnail">

                                                            <img :src="event.image" alt="">

                                                        </div>
                                                    </a>

                                                    <div class="price-add-to-cart" style="margin-top: 280px;">
                                                        <span class="price">
                                                            <div class="progress">
                                                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: v-bind('event.currentPoint/event.totalPoint')" :aria-valuenow="event.currentPoint" aria-valuemin="0" :aria-valuemax="event.totalPoint"></div>
                                                                </div>
                                                                <span class="electro-price" style="font-weight: bold;color: #4a5b6a; margin-top: -15px"><span class="amount">{{event.currentPoint}}</span>/<span>{{event.totalPoint}}</span></span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li v-if="index%3===2" class="product last">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">

                                                            <img src="../../assets/images/products/3.jpg" alt="">

                                                        </div>
                                                    </a>

                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>

                                    </ul>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="grid-extended" aria-expanded="true">

                                    <ul class="products columns-3">
                                        <li class="product first">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/1.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product ">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/2.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product last">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/3.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product first">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/4.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product ">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/5.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product last">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/6.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product first">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/4.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product ">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/2.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product last">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/5.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product first">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/1.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product ">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/6.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product last">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/3.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product first">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/5.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product ">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/4.jpg" alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                        <li class="product last">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="/event">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img class="wp-post-image" src="../../assets/images/products/2.jpg"  alt="">
                                                        </div>

                                                        <div class="product-rating">
                                                            <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                        </div>

                                                        <div class="product-short-description">
                                                            <ul>
                                                                <li><span class="a-list-item">Intel Core i5 processors (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Intel Iris Graphics 6100 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Flash storage</span></li>
                                                                <li><span class="a-list-item">Up to 10 hours of battery life2 (13-inch model)</span></li>
                                                                <li><span class="a-list-item">Force Touch trackpad (13-inch model)</span></li>
                                                            </ul>
                                                        </div>

                                                        <div class="product-sku">SKU: 5487FB8/15</div>
                                                    </a>
                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                                <del><span class="amount">&#036;2,299.00</span></del>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="/event" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist">Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>

                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                    </ul>
                                </div>

                                <div role="tabpanel" class="tab-pane " id="list-view" aria-expanded="true">
                                    <ul v-for="event in events" :key="event.eventId" class="products columns-3">
                                        <li class="product list-view">
                                            <div class="media">
                                                <div class="media-left">
                                                    <a href="/event">
                                                        <img class="wp-post-image" :src="event.image" alt="">
                                                    </a>
                                                </div>
                                                <div class="media-body media-middle">
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <span class="loop-product-categories"><a rel="tag" href="#">{{event.category}}</a></span><a href="/event"><h3>{{event.eventName}}</h3>
                                                                <!-- <div class="product-rating">
                                                                    <div title="Rated 4 out of 5" class="star-rating"><span style="width:80%"><strong class="rating">4</strong> out of 5</span></div> (3)
                                                                </div> -->
                                                                <div class="product-short-description">
                                                                    <ul style="padding-left: 18px;">
                                                                        {{event.description}}
                                                                    </ul>
                                                                </div>
                                                                <div class="progress">
                                                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 50%" :aria-valuenow="event.currentPoint" aria-valuemin="0" :aria-valuemax="event.totalPoint"></div>
                                                                </div>
                                                                <span class="electro-price" style="font-weight: bold;color: #4a5b6a; margin-top: -15px"><span class="amount">{{event.currentPoint}}</span>/<span>{{event.totalPoint}}</span></span>
                                                            </a>
                                                        </div>
                                                        <div class="col-xs-12">

                                                            <div class="availability in-stock">Availablity: <span>In stock</span></div>

                                                            <span class="price"><span class="electro-price"><span class="amount">{{event.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}}</span></span></span>
                                                            <a class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_sku="5487FB8/35" data-product_id="2706" data-quantity="1" href="/event" rel="nofollow">Xem chi tiết</a>
                                                            <div class="hover-area">
                                                                <div class="action-buttons">
                                                                    <div class="yith-wcwl-add-to-wishlist add-to-wishlist-2706">
                                                                        <a class="add_to_wishlist" data-product-type="simple" data-product-id="2706" rel="nofollow" href="#">Yêu thích</a>

                                                                        <div style="display:none;" class="yith-wcwl-wishlistaddedbrowse hide">
                                                                            <span class="feedback">Product added!</span>
                                                                            <a rel="nofollow" href="#">Wishlist</a>
                                                                        </div>

                                                                        <div style="display:none" class="yith-wcwl-wishlistexistsbrowse hide">
                                                                            <span class="feedback">The product is already in the wishlist!</span>
                                                                            <a rel="nofollow" href="#">Wishlist</a>
                                                                        </div>

                                                                        <div style="clear:both"></div>
                                                                        <div class="yith-wcwl-wishlistaddresponse"></div>

                                                                    </div>
                                                                    <div class="clear"></div>
                                                                    <a data-product_id="2706" class="add-to-compare-link" href="#">So sánh</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div role="tabpanel" class="tab-pane active" id="list-view-small" aria-expanded="true">

                                    <ul v-for="event in events" :key="event.eventId" class="products columns-3">
                                        <li class="product list-view list-view-small">
                                            <div class="media">
                                                <div class="media-left">
                                                    <router-link :to="`/event/`+ event.eventId">
                                                        <img class="wp-post-image" :src="event.image" alt="">
                                                    </router-link>
                                                </div>
                                                <div class="media-body media-middle">
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <span class="loop-product-categories"><a rel="tag" href="product-category.html">{{event.category}}</a></span><router-link :to="`/event/`+ event.eventId"><h3>{{event.eventName}}</h3>
                                                                <div class="product-short-description">
                                                                    <ul style="padding-left: 18px;">
                                                                        {{event.description}}
                                                                    </ul>
                                                                </div>
                                                                <div class="progress">
                                                                    <div class="progress-bar progress-bar-striped" role="progressbar" :style="'width:'+(event.currentPoint/event.totalPoint)*100+'%'" :aria-valuenow="event.currentPoint" aria-valuemin="0" :aria-valuemax="event.totalPoint"></div>
                                                                </div>
                                                                <span class="electro-price" style="font-weight: bold;color: #4a5b6a; margin-top: -15px"><span class="amount">{{event.currentPoint}}</span>/<span>{{event.totalPoint}}</span></span>
                                                            </router-link>
                                                        </div>
                                                        <div class="col-xs-12">
                                                            <div class="price-add-to-cart">
                                                                <span class="price"><span class="electro-price"><span class="amount">{{event.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}}</span></span></span>
                                                                <router-link :to="`/event/`+ event.eventId" class="button add_to_cart_button">Xem chi tiết</router-link>
                                                            </div><!-- /.price-add-to-cart -->

                                                            <div class="hover-area">
                                                                <div class="action-buttons">
                                                                    <a href="#" rel="nofollow" class="add_to_wishlist">Yêu thích</a>
                                                                    <a href="compare.html" class="add-to-compare-link">So sánh</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="shop-control-bar-bottom">
                                <form class="form-electro-wc-ppp">
                                    <select class="electro-wc-wppp-select c-select" onchange="this.form.submit()" name="ppp"><option selected="selected" value="15">Hiển thị 15</option><option value="-1">Show All</option></select>
                                </form>
                                <p class="woocommerce-result-count">Hiển thị 1&ndash;15 trong 20 kết quả</p>
                                <nav class="woocommerce-pagination">
                                    <ul class="page-numbers">
                                        <li><span class="page-numbers current">1</span></li>
                                        <li><a href="#" class="page-numbers">2</a></li>
                                        <li><a href="#" class="next page-numbers">→</a></li>
                                    </ul>
                                </nav>
                            </div>

                        </main><!-- #main -->
                    </div><!-- #primary -->

                    <div id="sidebar" class="sidebar" role="complementary">
                        <aside class="widget woocommerce widget_product_categories electro_widget_product_categories">
                                    <!-- <h3 class="widget-title">Danh mục sản phẩm</h3> -->
                                    <ul>
                                        <li class="cat-item current-cat"><router-link to="/category/camera">Máy ảnh</router-link></li>
                                        <li class="cat-item current-cat"><router-link to="/category/phone">Điện thoại</router-link></li>
                                        <li class="cat-item current-cat"><router-link to="/category/TV">TV</router-link></li>
                                        <li class="cat-item current-cat"><router-link to="/category/tablet">Máy tính bảng</router-link></li>
                                        <li class="cat-item current-cat"><router-link to="/category/laptop">Laptop</router-link>
                                        </li>
                                    </ul>
                        </aside>
                    </div>

                </div><!-- .container -->
            </div><!-- #content -->
        </div><!-- #page -->
    </body>
  </div>
</template>
<script src="../../assets/js/jquery.min.js"></script>
<script src="../../assets/js/tether.min.js"></script>
<script src="../../assets/js/bootstrap.min.js"></script>
<script src="../../assets/js/bootstrap-hover-dropdown.min.js"></script>
<script src="../../assets/js/owl.carousel.min.js"></script>
<script src="../../assets/js/echo.min.js"></script>
<script src="../../assets/js/wow.min.js"></script>
<script src="../../assets/js/jquery.easing.min.js"></script>
<script src="../../assets/js/jquery.waypoints.min.js"></script>
<script src="../../assets/js/electro.js"></script>
<script src="../switchstylesheet/switchstylesheet.js"></script>
<script>
    jQuery(document).ready(function($){
        $( '.form-adv-pagination' ).on( 'submit', function() {
            var link        = '#',
            goto_page   = $( '#goto-page' ).val(),
            new_link    = link.replace( '%#%', goto_page );

            window.location.href = new_link;
            return false;
        });
    });
</script>
<script>
    (function($) {
        $(document).ready(function(){
            $(".changecolor").switchstylesheet( { seperator:"color"} );
            $('.show-theme-options').click(function(){
                $(this).parent().toggleClass('open');
                return false;
            });

            $('#home-pages').on( 'change', function() {
                $.ajax({
                    url : $('#home-pages option:selected').val(),
                    success:function(res) {
                        location.href = $('#home-pages option:selected').val();
                    }
                });
            });

            $('#demo-pages').on( 'change', function() {
                $.ajax({
                    url : $('#demo-pages option:selected').val(),
                    success:function(res) {
                        location.href = $('#demo-pages option:selected').val();
                    }
                });
            });

            $('#header-style').on( 'change', function() {
                $.ajax({
                    url : $('#header-style option:selected').val(),
                    success:function(res) {
                        location.href = $('#header-style option:selected').val();
                    }
                });
            });

            $('#shop-style').on( 'change', function() {
                $.ajax({
                    url : $('#shop-style option:selected').val(),
                    success:function(res) {
                        location.href = $('#shop-style option:selected').val();
                    }
                });
            });

            $('#product-category-col').on( 'change', function() {
                $.ajax({
                    url : $('#product-category-col option:selected').val(),
                    success:function(res) {
                        location.href = $('#product-category-col option:selected').val();
                    }
                });
            });

            $('#single-products').on( 'change', function() {
                $.ajax({
                    url : $('#single-products option:selected').val(),
                    success:function(res) {
                        location.href = $('#single-products option:selected').val();
                    }
                });
            });

            $('.style-toggle').on( 'click', function() {
                $(this).parent('.config').toggleClass( 'open' );
            });
        });
})(jQuery);
</script>
<script>
import api from '../../api/api'
var paginate = require('vuejs-paginate')
export default {
  name: 'home',
  components: {
    paginate
  },
  data () {
    return {
      count: 0,
      events:[]
    }
  },
  mounted () {
    this.getAllEvent()
  },
  methods: {
    async getAllEvent () {
      let result = await api.getAllEvent()
      console.log(result)
    //   this.events = result.data.data.Items
      result.data.data.Items.forEach(item => {
        if(item.category=='điện thoại') this.events.push(item)
      });
    },
  }
}
</script>
<style>
  /* @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"); */
  @import "../../assets/css/animate.min.css";
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/bootstrap.min.css";
  @import "../../assets/css/config.css";
  @import "../../assets/css/font-awesome.min.css";
  @import "../../assets/css/font-electro.css";
  @import "../../assets/css/owl-carousel.css";
  @import "../../assets/css/style.css";
  @import "../../assets/css/colors/black.css";
  @import "../../assets/css/colors/blue.css";
  @import "../../assets/css/colors/flat-blue.css";
  @import "../../assets/css/colors/gold.css";
  @import "../../assets/css/colors/green.css";
  @import "../../assets/css/colors/orange.css";
  @import "../../assets/css/colors/pink.css";
  @import "../../assets/css/colors/red.css";
  @import "../../assets/css/colors/yellow.css";
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,700italic,800,800italic,600italic,400italic,300italic");

  .progress {
    --bs-progress-height: 0.75rem;
    --bs-progress-font-size: 0.75rem;
    --bs-progress-bg: #e9ecef;
    --bs-progress-border-radius: 0.375rem;
    --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
    --bs-progress-bar-color: #fff;
    --bs-progress-bar-bg: #fed700;
    --bs-progress-bar-transition: width 0.6s ease;
    display: flex;
    /* margin-top: -15px; */
    height: var(--bs-progress-height);
    overflow: hidden;
    font-size: var(--bs-progress-font-size);
    background-color: var(--bs-progress-bg);
    border-radius: var(--bs-progress-border-radius);
  }
  .progress-bar-striped {
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-size: var(--bs-progress-height) var(--bs-progress-height);
}
.progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: var(--bs-progress-bar-color);
    text-align: center;
    white-space: nowrap;
    background-color: var(--bs-progress-bar-bg);
    transition: var(--bs-progress-bar-transition);
}
.progress {
    /* display: block; */
    width: 100%;
    height: 0.75rem;
    margin-bottom: 0.2rem;
}
</style>
