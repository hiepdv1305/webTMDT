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
                                <h1 v-if="category=='phone'" class="page-title">Điện thoại</h1>
                                <h1 v-if="category=='tablet'" class="page-title">Máy tính bảng</h1>
                                <h1 v-if="category=='laptop'" class="page-title">Laptop</h1>
                                <h1 v-if="category=='TV'" class="page-title">TV</h1>
                                <h1 v-if="category=='camera'" class="page-title">Máy ảnh</h1>
                                <p class="woocommerce-result-count">Hiển thị {{(pagination.page-1)*pagination.itemsPerPage+1}}&ndash;{{Math.min(pagination.page*pagination.itemsPerPage,stock.length)}} trong {{stock.length}} kết quả</p>
                            </header>
                            <div class="shop-control-bar">
                                <form class="woocommerce-ordering" method="get">
                                    <select name="orderby" @change="sort()" v-model="sortBy" class="orderby">
                                        <option value="newest" selected='selected'>Sự kiện mới nhất</option>
                                        <option value="end" >Sự kiện sắp kết thúc</option>
                                        <option value="prices_increase"  >Sắp xếp theo giá: Tăng dần</option>
                                        <option value="price_descending" >Sắp xếp theo giá: Giảm dần</option>
                                    </select>
                                </form>
                                <form @change="onChange()" class="form-electro-wc-ppp"><select name="ppp" class="electro-wc-wppp-select c-select" v-model.number="pagination.itemsPerPage"><option value="15" selected='selected'>Hiển thị 15</option><option value="30" selected='selected'>Hiển thị 30</option><option :value="stock.length" @click="this.pagination.itemsPerPage = this.stock.length;this.pagination.page=1" >Hiển thị tất cả</option></select></form>
                                <nav class="electro-advanced-pagination">
                                    <form class="form-adv-pagination" @change="onChange()"><i @click="pagination.page= pagination.page>1 ? pagination.page -1: pagination.page,onChange()" class="fas fa-chevron-right" style="cursor: pointer;margin: 0px 10px;">&#x3c;</i><input v-model.number="pagination.page" id="goto-page" min="1" :max="Math.ceil(stock.length/pagination.itemsPerPage)" step="1" type="number" value="1"/></form> of {{Math.ceil(stock.length/pagination.itemsPerPage)}}<i @click="pagination.page= pagination.page<Math.ceil(stock.length/pagination.itemsPerPage) ? pagination.page +1: pagination.page,onChange()" class="fas fa-chevron-right" style="cursor: pointer;">&#x3e;</i>
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

                                                            <img src="../assets/images/products/3.jpg" alt="">

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
                                                            <img class="wp-post-image" src="../assets/images/products/1.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/2.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/3.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/4.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/5.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/6.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/4.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/2.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/5.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/1.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/6.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/3.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/5.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/4.jpg" alt="">
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
                                                            <img class="wp-post-image" src="../assets/images/products/2.jpg"  alt="">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </main><!-- #main -->
                    </div><!-- #primary -->

                    <div id="sidebar" class="sidebar" role="complementary">
                        <aside class="widget woocommerce widget_product_categories electro_widget_product_categories">
                                    <!-- <h3 class="widget-title">Danh mục sản phẩm</h3> -->
                                    <ul>
                                        <li class="cat-item current-cat" style="cursor: pointer; padding: 10px;"><div @click="category='camera',filter()">Máy ảnh</div></li>
                                        <li class="cat-item current-cat" style="cursor: pointer; padding: 10px;"><div @click="category='phone',filter()">Điện thoại</div></li>
                                        <li class="cat-item current-cat" style="cursor: pointer; padding: 10px;"><div @click="category='TV',filter()">TV</div></li>
                                        <li class="cat-item current-cat" style="cursor: pointer; padding: 10px;"><div @click="category='tablet',filter()">Máy tính bảng</div></li>
                                        <li class="cat-item current-cat" style="cursor: pointer; padding: 10px;"><div @click="category='laptop',filter()">Laptop</div>
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
import api from '../api/api'
var paginate = require('vuejs-paginate')
export default {
  name: 'home',
  components: {
    paginate
  },
  data () {
    return {
      count: 0,
      category: 'all',
      beforeStock:[],
      stock: [],
      events:[],
      sortBy: 'newest',
      pagination: {
        itemsPerPage: 15,
        page: 1,
        paginationItems: []
      }
    }
  },
  mounted () {
    this.getAllEvent()
  },
  methods: {
    filter(){
        this.pagination.page=1
        this.stock= []
        switch (this.category) {
        case 'all':
            this.beforeStock.forEach(item => {
                this.stock.push(item)
            });
            break;
        case 'phone':
            this.beforeStock.forEach(item => {
                if(item.category=='điện thoại') this.stock.push(item)
            });
            break;
        case 'laptop':
            this.beforeStock.forEach(item => {
                if(item.category=='laptop') this.stock.push(item)
            });
            break;
        case 'tablet':
            this.beforeStock.forEach(item => {
                if(item.category=='máy tính bảng') this.stock.push(item)
            });
            break;
        case 'TV':
            this.beforeStock.forEach(item => {
                if(item.category=='TV') this.stock.push(item)
            });
            break;
        case 'camera':
            this.beforeStock.forEach(item => {
                if(item.category=='camera') this.stock.push(item)
            });
            break;
        default:
            this.beforeStock.forEach(item => {
                this.stock.push(item)
            });
            break;
      }
      this.onChange()
    },
    async getAllEvent () {
      let result = await api.getAllEvent()
    //   console.log(result)
      this.events = result.data.data.Items
      this.beforeStock = result.data.data.Items
      this.filter()
    },
    onChange() {
        // console.log('The new value is: ', this.pagination.itemsPerPage)
        // console.log('page is: ', this.pagination.page)
        this.events = this.stock.slice((this.pagination.page-1)*this.pagination.itemsPerPage,this.pagination.page*this.pagination.itemsPerPage)
        // console.log(this.stock)
    },
    sort(){
        this.pagination.page=1
        switch (this.sortBy) {
            case 'newest':
                this.events.sort((a,b)=>{
                    if (a.createdAt.valueOf()<b.createdAt.valueOf()) return 1;
                    if (a.createdAt.valueOf()>b.createdAt.valueOf()) return -1;
                    return 0
                })
                break;
            case 'end':
                this.events.sort((a,b)=>{
                    if(a.currentPoint/a.totalPoint<b.currentPoint/b.totalPoint) return 1
                    if(a.currentPoint/a.totalPoint>b.currentPoint/b.totalPoint) return -1
                    return 0
                })
                break;
            case 'prices_increase':
                this.events.sort((a,b)=>{
                    if (a.price>b.price) return 1;
                    if (a.price<b.price) return -1;
                    return 0
                })
                break;
            case 'price_descending':
                this.events.sort((a,b)=>{
                    if (a.price<b.price) return 1;
                    if (a.price>b.price) return -1;
                    return 0
                })
                break;
            default:
                break;
        }
    }
  }
}
</script>
<style>
  /* @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"); */
  @import "../assets/css/animate.min.css";
  @import "../assets/css/bootstrap.css";
  @import "../assets/css/bootstrap.min.css";
  @import "../assets/css/config.css";
  @import "../assets/css/font-awesome.min.css";
  @import "../assets/css/font-electro.css";
  @import "../assets/css/owl-carousel.css";
  @import "../assets/css/style.css";
  @import "../assets/css/colors/black.css";
  @import "../assets/css/colors/blue.css";
  @import "../assets/css/colors/flat-blue.css";
  @import "../assets/css/colors/gold.css";
  @import "../assets/css/colors/green.css";
  @import "../assets/css/colors/orange.css";
  @import "../assets/css/colors/pink.css";
  @import "../assets/css/colors/red.css";
  @import "../assets/css/colors/yellow.css";
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
