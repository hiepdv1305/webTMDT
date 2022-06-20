<template>
  <body class="single-product full-width">
        <div id="page" class="hfeed site">
            <a class="skip-link screen-reader-text" href="#site-navigation">Skip to navigation</a>
            <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
            <div id="content" class="site-content" tabindex="-1">
                <div class="container">

                    <nav class="woocommerce-breadcrumb">
                        <a href="home.html">Trang chủ</a>
                        <span class="delimiter"><i class="fa fa-angle-right"></i></span>
                        <a href="product-category.html">Loại sản phẩm</a>
                        <span class="delimiter"><i class="fa fa-angle-right"></i></span>
                        <a href="product-category.html">{{event.category}}</a>
                        <span class="delimiter"><i class="fa fa-angle-right"></i>
                        </span>{{event.eventName}}
                    </nav><!-- /.woocommerce-breadcrumb -->

                    <div id="primary" class="content-area">
                        <main id="main" class="site-main">

                            <div class="product">

                                <div class="single-product-wrapper">
                                    <div class="product-images-wrapper">
                                        <span class="onsale">Sale!</span>
                                        <div class="images electro-gallery">
                                            <div class="thumbnails-single owl-carousel owl-loaded owl-drag">
                                                <a :href="event.image" class="zoom owl-item active" title="" data-rel="prettyPhoto[product-gallery]"><img :src="event.image" class="wp-post-image" alt=""></a>
<!--
                                                <a href="../assets/images/single-product/s1.jpg" class="zoom" title="" data-rel="prettyPhoto[product-gallery]"><img src="../assets/images/single-product/s1.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/s2.jpg" class="zoom" title="" data-rel="prettyPhoto[product-gallery]"><img src="../assets/images/single-product/s2.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/s3.jpg" class="zoom" title="" data-rel="prettyPhoto[product-gallery]"><img src="../assets/images/single-product/s3.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/s4.jpg" class="zoom" title="" data-rel="prettyPhoto[product-gallery]"><img src="assets/images/blank.gif" data-echo="assets/images/single-product/s4.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/s5.jpg" class="zoom" title="" data-rel="prettyPhoto[product-gallery]"><img src="assets/images/blank.gif" data-echo="assets/images/single-product/s5.jpg" class="wp-post-image" alt=""></a> -->
                                            </div><!-- .thumbnails-single -->
                                            <!-- <div class="thumbnails-all columns-5 owl-carousel owl-loaded owl-drag">
                                                <a href="../assets/images/single-product/single-thumb1.jpg" class="first" title=""><img src="../assets/images/single-product/single-thumb1.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/single-thumb2.jpg" class="" title=""><img src="../assets/images/single-product/single-thumb2.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/single-thumb3.jpg" class="" title=""><img src="../assets/images/single-product/single-thumb3.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/single-thumb4.jpg" class="" title=""><img src="../assets/images/single-product/single-thumb4.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/single-thumb5.jpg" class="last" title=""><img src="../assets/images/single-product/single-thumb5.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/single-thumb6.jpg" class="first" title=""><img src="../assets/images/single-product/single-thumb6.jpg" class="wp-post-image" alt=""></a>
                                            </div> -->
                                        </div><!-- .electro-gallery -->
                                    </div><!-- /.product-images-wrapper -->

                                    <div class="summary entry-summary">

                                        <span class="loop-product-categories">
                                            <a href="product-category.html" rel="tag">{{event.category}}</a>
                                        </span><!-- /.loop-product-categories -->

                                        <h1 itemprop="name" class="product_title entry-title">{{event.eventName}}</h1>
                                        <span class="price">
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-striped" role="progressbar" :style="'width:'+(event.currentPoint/event.totalPoint)*100+'%'" :aria-valuenow="event.currentPoint" aria-valuemin="0" :aria-valuemax="event.totalPoint"></div>
                                            </div>
                                            <span class="electro-price" style="font-weight: bold;color: #4a5b6a; margin-top: -15px"><span class="amount">{{event.currentPoint}}</span>/<span>{{event.totalPoint}}</span></span>
                                        </span>
                                        <div v-if="event.status == 'active' " class="availability in-stock">Trạng thái: <span>Đang diễn ra</span></div><!-- .availability -->
                                        <div v-else class="availability in-stock">Trạng thái: <span style="color: red">Kết thúc</span></div><!-- .availability -->
                                        <hr class="single-product-title-divider" />

                                        <div class="action-buttons">

                                            <a href="#" class="add_to_wishlist" >
                                                Yêu thích
                                            </a>

                                            <a href="#" class="add-to-compare-link" data-product_id="2452">So sánh</a>
                                        </div><!-- .action-buttons -->

                                        <div itemprop="description">
                                            {{event.description}}
                                        </div><!-- .description -->

                                        <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">

                                            <p class="price"><span class="electro-price"><ins><span class="amount">{{event.price}}</span></ins></span></p>
                                        </div><!-- /itemprop -->

                                        <div class="variations_form cart">
                                            <div class="single_variation_wrap">
                                                <div class="woocommerce-variation single_variation"></div>
                                                <div class="woocommerce-variation-add-to-cart variations_button">
                                                    <div class="quantity">
                                                        <label>Số điểm:</label>
                                                        <input v-model.number="point" type="number" name="quantity" value="1" min="1" title="Qty" class="input-text qty text"/>
                                                    </div>
                                                    <button class="single_add_to_cart_button button" @click="myModel=true">Mua ngay</button>
                                                    <!-- <input type="button" class="btn btn-success btn-xs" @click="myModel=true" value="Add" /> -->
                                                    <div v-if="myModel">
                                                        <transition name="model">
                                                        <div class="modal-mask">
                                                        <div class="modal-wrapper">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                            <div class="modal-header">
                                                                Tuyệt vời
                                                            <button type="button" class="close" @click="myModel=false"><span aria-hidden="true">&times;</span></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <h5>Bạn có chắc muốn dùng {{(point*10000).toLocaleString('vi', { style: 'currency', currency: 'VND' })}} để mua {{point}} điểm không</h5>
                                                            <br />
                                                            <div align="center">
                                                            <button class="" type="button" @click="myModel=false">Hủy</button>
                                                            <button style="background-color: #fed700; margin-left: 10px" type="button" @click="createDeal">Mua ngay</button>
                                                            </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </transition>
                                                    </div>
                                                    <!-- <button type="submit" class="single_add_to_cart_button button">Mua ngay</button> -->
                                                </div>
                                            </div>
                                        </div>

                                    </div><!-- .summary -->
                                </div><!-- /.single-product-wrapper -->

                                <div class="woocommerce-tabs wc-tabs-wrapper">
                                    <ul class="nav nav-tabs electro-nav-tabs tabs wc-tabs" role="tablist">
                                        <li class="nav-item description_tab">
                                            <a :class="{ active: tab ===1 }" @click="tab=1" data-toggle="tab">Mô tả</a>
                                        </li>
<!--
                                        <li class="nav-item specification_tab">
                                            <a href="#tab-specification" data-toggle="tab">Specification</a>
                                        </li> -->

                                        <li class="nav-item reviews_tab">
                                            <a :class="{ active: tab ===2 }" @click="tab=2" data-toggle="tab">Reviews</a>
                                        </li>
                                        <li class="nav-item reviews_tab">
                                            <a :class="{ active: tab ===3 }" @click="tab=3" data-toggle="tab">Danh sách tham gia</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div :class="{ active: tab === 1 }" class="tab-pane in panel entry-content wc-tab">
                                            <div class="electro-description">

                                                <h3>Perfectly Done</h3>
                                                <p>Praesent ornare, ex a interdum consectetur, lectus diam sodales elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper viverra. In lobortis egestas massa. Nam nec massa nisi. Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat. Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus, non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt eu.</p>
                                                <table class="layout">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <h3>Wireless</h3>
                                                                <p>Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.</p>
                                                                <h3>Fresh Design</h3>
                                                                <p>Integer bibendum aliquet ipsum, in ultrices enim sodales sed. Quisque ut urna vitae lacus laoreet malesuada eu at massa. Pellentesque nibh augue, pellentesque nec dictum vel, pretium a arcu. Duis eu urna suscipit, lobortis elit quis, ullamcorper massa.</p>
                                                                <h3>Fabolous Sound</h3>
                                                                <p>Cras rutrum, nibh a sodales accumsan, elit sapien ultrices sapien, eget semper lectus ex congue elit. Nullam dui elit, fermentum a varius at, iaculis non dolor. In hac habitasse platea dictumst.</p>
                                                            </td>

                                                            <td>
                                                                <img class="alignright" :src="event.image" alt="">

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div><!-- /.electro-description -->

                                            <div class="product_meta">
                                                <span class="sku_wrapper">SKU: <span class="sku" itemprop="sku">FW511948218</span></span>

                                                <span class="posted_in">Category:
                                                    <a href="product-category.html" rel="tag">Tai nghe</a>
                                                </span>

                                                <span class="tagged_as">Tags:
                                                    <a href="product-category.html" rel="tag">Fast</a>,
                                                    <a href="product-category.html" rel="tag">Gaming</a>, <a href="product-category.html" rel="tag">Strong</a>
                                                </span>

                                            </div><!-- /.product_meta -->
                                        </div>
                                        <div :class="{ active: tab === 2 }" class="tab-pane panel entry-content wc-tab">
                                            <div id="reviews" class="electro-advanced-reviews">
                                                <div class="advanced-review row">
                                                    <div class="col-xs-12 col-md-6">
                                                        <h2 class="based-title">Based on 3 reviews</h2>
                                                        <div class="avg-rating">
                                                            <span class="avg-rating-number">4.3</span> overall
                                                        </div>

                                                        <div class="rating-histogram">
                                                            <div class="rating-bar">
                                                                <div class="star-rating" title="Rated 5 out of 5">
                                                                    <span style="width:100%"></span>
                                                                </div>
                                                                <div class="rating-percentage-bar">
                                                                    <span style="width:33%" class="rating-percentage">

                                                                    </span>
                                                                </div>
                                                                <div class="rating-count">1</div>
                                                            </div><!-- .rating-bar -->

                                                            <div class="rating-bar">
                                                                <div class="star-rating" title="Rated 4 out of 5">
                                                                    <span style="width:80%"></span>
                                                                </div>
                                                                <div class="rating-percentage-bar">
                                                                    <span style="width:67%" class="rating-percentage"></span>
                                                                </div>
                                                                <div class="rating-count">2</div>
                                                            </div><!-- .rating-bar -->

                                                            <div class="rating-bar">
                                                                <div class="star-rating" title="Rated 3 out of 5">
                                                                    <span style="width:60%"></span>
                                                                </div>
                                                                <div class="rating-percentage-bar">
                                                                    <span style="width:0%" class="rating-percentage"></span>
                                                                </div>
                                                                <div class="rating-count zero">0</div>
                                                            </div><!-- .rating-bar -->

                                                            <div class="rating-bar">
                                                                <div class="star-rating" title="Rated 2 out of 5">
                                                                    <span style="width:40%"></span>
                                                                </div>
                                                                <div class="rating-percentage-bar">
                                                                    <span style="width:0%" class="rating-percentage"></span>
                                                                </div>
                                                                <div class="rating-count zero">0</div>
                                                            </div><!-- .rating-bar -->

                                                            <div class="rating-bar">
                                                                <div class="star-rating" title="Rated 1 out of 5">
                                                                    <span style="width:20%"></span>
                                                                </div>
                                                                <div class="rating-percentage-bar">
                                                                    <span style="width:0%" class="rating-percentage"></span>
                                                                </div>
                                                                <div class="rating-count zero">0</div>
                                                            </div><!-- .rating-bar -->
                                                        </div>
                                                    </div><!-- /.col -->

                                                    <div class="col-xs-12 col-md-6">
                                                        <div id="review_form_wrapper">
                                                            <div id="review_form">
                                                                <div id="respond" class="comment-respond">
                                                                    <h3 id="reply-title" class="comment-reply-title">Add a review
                                                                        <small><a rel="nofollow" id="cancel-comment-reply-link" href="#" style="display:none;">Cancel reply</a>
                                                                        </small>
                                                                    </h3>

                                                                    <form action="#" method="post" id="commentform" class="comment-form">
                                                                        <p class="comment-form-rating">
                                                                            <label>Your Rating</label>
                                                                        </p>

                                                                        <p class="stars">
                                                                            <span><a class="star-1" href="#">1</a>
                                                                                <a class="star-2" href="#">2</a>
                                                                                <a class="star-3" href="#">3</a>
                                                                                <a class="star-4" href="#">4</a>
                                                                                <a class="star-5" href="#">5</a>
                                                                            </span>
                                                                        </p>

                                                                        <p class="comment-form-comment">
                                                                            <label for="comment">Your Review</label>
                                                                            <textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea>
                                                                        </p>

                                                                        <p class="form-submit">
                                                                            <input name="submit" type="submit" id="submit" class="submit" value="Add Review" />
                                                                            <input type='hidden' name='comment_post_ID' value='2452' id='comment_post_ID' />
                                                                            <input type='hidden' name='comment_parent' id='comment_parent' value='0' />
                                                                        </p>

                                                                        <input type="hidden" id="_wp_unfiltered_html_comment_disabled" name="_wp_unfiltered_html_comment_disabled" value="c7106f1f46" />
                                                                    </form><!-- form -->
                                                                </div><!-- #respond -->
                                                            </div>
                                                        </div>

                                                    </div><!-- /.col -->
                                                </div><!-- /.row -->

                                                <div id="comments">

                                                    <ol class="commentlist">
                                                        <li itemprop="review" class="comment even thread-even depth-1">

                                                            <div id="comment-390" class="comment_container">

                                                                <img alt='' src="assets/images/blog/avatar.jpg" class="avatar" height='60' width='60' />
                                                                <div class="comment-text">

                                                                    <div class="star-rating" title="Rated 4 out of 5">
                                                                        <span style="width:80%"><strong itemprop="ratingValue">4</strong> out of 5</span>
                                                                    </div>

                                                                    <p class="meta">
                                                                        <strong>John Doe</strong> &ndash;
                                                                        <time itemprop="datePublished" datetime="2016-03-03T14:13:48+00:00">March 3, 2016</time>:
                                                                    </p>

                                                                    <div itemprop="description" class="description">
                                                                        <p>Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.
                                                                        </p>
                                                                    </div>

                                                                    <p class="meta">
                                                                        <strong itemprop="author">John Doe</strong> &ndash; <time itemprop="datePublished" datetime="2016-03-03T14:13:48+00:00">March 3, 2016</time>
                                                                    </p>

                                                                </div>
                                                            </div>
                                                        </li><!-- #comment-## -->

                                                        <li class="comment odd alt thread-odd thread-alt depth-1">

                                                            <div class="comment_container">

                                                                <img alt='' src="assets/images/blog/avatar.jpg" class="avatar" height='60' width='60' />
                                                                <div class="comment-text">

                                                                    <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating" class="star-rating" title="Rated 5 out of 5">
                                                                        <span style="width:100%"><strong itemprop="ratingValue">5</strong> out of 5</span>
                                                                    </div>

                                                                    <p class="meta">
                                                                        <strong>Anna Kowalsky</strong> &ndash;
                                                                        <time itemprop="datePublished" datetime="2016-03-03T14:14:47+00:00">March 3, 2016</time>:
                                                                    </p>

                                                                    <div itemprop="description" class="description">
                                                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eget facilisis odio. Duis sodales augue eu tincidunt faucibus. Etiam justo ligula, placerat ac augue id, volutpat porta dui.
                                                                        </p>
                                                                    </div>

                                                                    <p class="meta">
                                                                        <strong itemprop="author">Anna Kowalsky</strong> &ndash; <time itemprop="datePublished" datetime="2016-03-03T14:14:47+00:00">March 3, 2016</time>
                                                                    </p>

                                                                </div>
                                                            </div>
                                                        </li><!-- #comment-## -->

                                                        <li class="comment odd alt thread-odd thread-alt depth-1">

                                                            <div class="comment_container">

                                                                <img alt='' src="assets/images/blog/avatar.jpg" class="avatar" height='60' width='60' />
                                                                <div class="comment-text">

                                                                    <div itemprop="reviewRating" class="star-rating" title="Rated 5 out of 5">
                                                                        <span style="width:100%"><strong itemprop="ratingValue">5</strong> out of 5</span>
                                                                    </div>

                                                                    <p class="meta">
                                                                        <strong>Anna Kowalsky</strong> &ndash;
                                                                        <time itemprop="datePublished" datetime="2016-03-03T14:14:47+00:00">March 3, 2016</time>:
                                                                    </p>

                                                                    <div itemprop="description" class="description">
                                                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eget facilisis odio. Duis sodales augue eu tincidunt faucibus. Etiam justo ligula, placerat ac augue id, volutpat porta dui.
                                                                        </p>
                                                                    </div>

                                                                    <p class="meta">
                                                                        <strong itemprop="author">Anna Kowalsky</strong> &ndash; <time itemprop="datePublished" datetime="2016-03-03T14:14:47+00:00">March 3, 2016</time>
                                                                    </p>

                                                                </div>
                                                            </div>
                                                        </li><!-- #comment-## -->
                                                    </ol><!-- /.commentlist -->

                                                </div><!-- /#comments -->

                                                <div class="clear"></div>
                                            </div><!-- /.electro-advanced-reviews -->
                                        </div><!-- /.panel -->
                                        <div :class="{ active: tab === 3 }" class="tab-pane in panel entry-content wc-tab">
                                            <div v-if="event.status=='finish'">Con số may mắn là <b>{{event.winnerNumber}}</b>. Chúc mừng <b>{{event.winner}}</b> đã là người chiến thắng sự kiện này</div>
                                            <div v-if="participants.length===0">
                                                <h3>Bạn hãy là người đầu tiên tham gia sự kiện này</h3>
                                            </div>
                                            <div v-else>
                                                <table>
                                                    <tr>
                                                        <th>Username</th>
                                                        <th>Số điểm</th>
                                                        <th>Điểm bắt đầu - kết thúc</th>
                                                    </tr>
                                                    <tr v-for="participant in participants" :key="participant.dealId">
                                                        <td>{{participant.username}}</td>
                                                        <td>{{participant.point}}</td>
                                                        <td v-if="participant.beginNumber===participant.endNumber">{{participant.beginNumber}}</td>
                                                        <td v-else>{{participant.beginNumber}}--{{participant.endNumber}}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div class="product_meta">
                                                <span class="sku_wrapper">SKU: <span class="sku" itemprop="sku">FW511948218</span></span>

                                                <span class="posted_in">Category:
                                                    <a href="product-category.html" rel="tag">{{event.category}}</a>
                                                </span>

                                                <span class="tagged_as">Tags:
                                                    <a href="product-category.html" rel="tag">Fast</a>,
                                                    <a href="product-category.html" rel="tag">Gaming</a>, <a href="product-category.html" rel="tag">Strong</a>
                                                </span>

                                            </div><!-- /.product_meta -->
                                        </div>
                                    </div>
                                </div><!-- /.woocommerce-tabs -->

                                <div class="related products">
                                    <h2>Có thể bạn quan tâm</h2>

                                    <ul class="products columns-5">

                                        <li class="product">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="single-product.html">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img data-echo="assets/images/products/1.jpg" src="assets/images/blank.gif" alt="">
                                                        </div>
                                                    </a>

                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="single-product.html" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist"> Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>
                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>

                                        <li class="product">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="single-product.html">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img data-echo="assets/images/products/2.jpg" src="assets/images/blank.gif" alt="">
                                                        </div>
                                                    </a>

                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="single-product.html" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist"> Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>
                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>

                                        <li class="product">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="single-product.html">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img data-echo="assets/images/products/3.jpg" src="assets/images/blank.gif" alt="">
                                                        </div>
                                                    </a>

                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="single-product.html" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist"> Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>
                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>

                                        <li class="product">
                                            <div class="product-outer">
                                                <div class="product-inner">
                                                    <span class="loop-product-categories"><a href="product-category.html" rel="tag">Smartphones</a></span>
                                                    <a href="single-product.html">
                                                        <h3>Notebook Black Spire V Nitro  VN7-591G</h3>
                                                        <div class="product-thumbnail">
                                                            <img data-echo="assets/images/products/4.jpg" src="assets/images/blank.gif" alt="">
                                                        </div>
                                                    </a>

                                                    <div class="price-add-to-cart">
                                                        <span class="price">
                                                            <span class="electro-price">
                                                                <ins><span class="amount">&#036;1,999.00</span></ins>
                                                            </span>
                                                        </span>
                                                        <a rel="nofollow" href="single-product.html" class="button add_to_cart_button">Add to cart</a>
                                                    </div><!-- /.price-add-to-cart -->

                                                    <div class="hover-area">
                                                        <div class="action-buttons">
                                                            <a href="#" rel="nofollow" class="add_to_wishlist"> Wishlist</a>
                                                            <a href="#" class="add-to-compare-link">Compare</a>
                                                        </div>
                                                    </div>
                                                </div><!-- /.product-inner -->
                                            </div><!-- /.product-outer -->
                                        </li>
                                    </ul><!-- /.products -->
                                </div><!-- /.related -->
                            </div><!-- /.product -->

                        </main><!-- /.site-main -->
                    </div><!-- /.content-area -->
                </div><!-- /.container -->
            </div><!-- /.site-content -->

            <section class="brands-carousel">
                <h2 class="sr-only">Brands Carousel</h2>
                <div class="container">
                    <div id="owl-brands" class="owl-brands owl-carousel unicase-owl-carousel owl-outer-nav">

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Acer</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                     <img src="assets/images/blank.gif" data-echo="assets/images/brands/1.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Apple</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                     <img src="assets/images/blank.gif" data-echo="assets/images/brands/2.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Asus</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                     <img src="assets/images/blank.gif" data-echo="assets/images/brands/3.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Dell</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/4.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Gionee</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/5.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>HP</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/6.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>HTC</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/3.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>IBM</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/5.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Lenova</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/2.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>LG</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/1.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Micromax</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/6.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Microsoft</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/4.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                    </div><!-- /.owl-carousel -->

                </div>
            </section>
        </div><!-- #page -->
    </body>
</template>
<script src="../assets/js/jquery.min.js"></script>
<script src="../assets/js/tether.min.js"></script>
<script src="../assets/js/bootstrap.min.js"></script>
<script src="../assets/js/bootstrap-hover-dropdown.min.js"></script>
<script src="../assets/js/owl.carousel.min.js"></script>
<script src="../assets/js/echo.min.js"></script>
<script src="../assets/js/wow.min.js"></script>
<script src="../assets/js/jquery.easing.min.js"></script>
<script src="../assets/js/jquery.waypoints.min.js"></script>
<script src="../assets/js/electro.js"></script>
<script src="../switchstylesheet/switchstylesheet.js"></script>
<script>(function(){if(window===window.parent){document.getElementById('_wp_unfiltered_html_comment_disabled').name='_wp_unfiltered_html_comment';}})();</script>
<script>
import api from '../../api/api'
export default {
  name: 'login',
  data () {
    return {
      event: {},
      point: 1,
      myModel:false,
      tab:1,
      participants: []
    }
  },
  mounted () {
    this.getEvent()
    this.eventGetDeal()
  },
  methods: {
    async getEvent () {
      let id = this.$route.params.id
      // console.log(id)
      let result = await api.getEvent(id)
      if(result.status ===200){
        this.event = result.data.data
      }
        this.event.price = this.event.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })
    },
    async createDeal(){
        if(this.event.currentPoint+this.point>this.event.totalPoint){
            alert("Số điểm bạn muốn mua vượt quá giới hạn");
        }else{
            let result = await api.createDeal({
            eventId: this.$route.params.id,
            point: this.point,
            image: this.event.image,
            eventName: this.event.eventName,
            price: this.point*10000,
            eventPrice: this.event.price
        })
        console.log(result)
        if(result.data.statusCode === 200){
            this.myModel = false
            window.location.reload();
        }
        else{
            alert(result.data.message)
            this.myModel = false
        }
        }
    },
    async eventGetDeal(){
        let id = this.$route.params.id
        let result = await api.eventGetDeal(id)
        console.log(result)
        this.participants = result.data.data.Items
    }
  }
}
</script>
<style>
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
  .modal-mask {
     position: fixed;
     z-index: 9998;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, .5);
     display: table;
     transition: opacity .3s ease;
   }

   .modal-wrapper {
     display: table-cell;
     vertical-align: middle;
   }

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.progress {
    --bs-progress-height: 1rem;
    --bs-progress-font-size: 0.75rem;
    --bs-progress-bg: #e9ecef;
    --bs-progress-border-radius: 0.375rem;
    --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
    --bs-progress-bar-color: #fff;
    --bs-progress-bar-bg: #fed700;
    --bs-progress-bar-transition: width 0.6s ease;
    display: flex;
    height: var(--bs-progress-height);
    overflow: hidden;
    font-size: var(--bs-progress-font-size);
    background-color: var(--bs-progress-bg);
    border-radius: var(--bs-progress-border-radius);
}
.progress {
    width: 100%;
    height: 0.75rem;
    margin-bottom: 0.2rem;
}

</style>
