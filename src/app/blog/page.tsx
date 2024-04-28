import React from "react";

const Blogs = () => {
  return (
    <section className="blog-area section-padding">
      <div className="container">
        <div className="row mtn-40">
          <div className="col-lg-3 order-2 order-lg-1 blog-widget-wrapper">
            <div className="blog-widget mt-40">
              <h4 className="blog-widget-title">Search</h4>
              <form className="widget-search-form">
                <input
                  placeholder="Search keyword"
                  type="text"
                  className="search-field"
                />
                <button type="submit" className="search-btn">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>

            <div className="blog-widget mt-40">
              <h4 className="blog-widget-title">Categories</h4>
              <ul className="blog-categories">
                <li>
                  <a href="blog-details.html">Ant Control</a>
                  <span>(20)</span>
                </li>
                <li>
                  <a href="blog-details.html">Cockroach</a>
                  <span>(18)</span>
                </li>
                <li>
                  <a href="blog-details.html">Mocquito Control</a>
                  <span>(40)</span>
                </li>
                <li>
                  <a href="blog-details.html">Insect control</a>
                  <span>(30)</span>
                </li>
                <li>
                  <a href="blog-details.html">Termite Control</a>
                  <span>(66)</span>
                </li>
                <li>
                  <a href="blog-details.html">Rodent control</a>
                  <span>(66)</span>
                </li>
              </ul>
            </div>

            <div className="blog-widget mt-40">
              <h4 className="blog-widget-title">Recent Posts</h4>
              <ul className="recent-posts-inner">
                <li className="recent-posts">
                  <div className="recent-posts-image">
                    <a href="blog-details.html">
                      <img
                        src="assets/img/blog/recent-01.jpg"
                        alt="post thumb"
                      />
                    </a>
                  </div>
                  <div className="recent-posts-body">
                    <span className="recent-posts-meta">February 13, 2018</span>
                    <h6 className="recent-posts-title">
                      <a href="blog-details.html">
                        Diffrent title gose This is demo
                      </a>
                    </h6>
                  </div>
                </li>
                <li className="recent-posts">
                  <div className="recent-posts-image">
                    <a href="blog-details.html">
                      <img
                        src="assets/img/blog/recent-02.jpg"
                        alt="post thumb"
                      />
                    </a>
                  </div>
                  <div className="recent-posts-body">
                    <span className="recent-posts-meta">February 13, 2018</span>
                    <h6 className="recent-posts-title">
                      <a href="blog-details.html">
                        Diffrent title gose This is demo
                      </a>
                    </h6>
                  </div>
                </li>
                <li className="recent-posts">
                  <div className="recent-posts-image">
                    <a href="blog-details.html">
                      <img
                        src="assets/img/blog/recent-03.jpg"
                        alt="post thumb"
                      />
                    </a>
                  </div>
                  <div className="recent-posts-body">
                    <span className="recent-posts-meta">February 13, 2018</span>
                    <h6 className="recent-posts-title">
                      <a href="blog-details.html">
                        Diffrent title gose This is demo
                      </a>
                    </h6>
                  </div>
                </li>
                <li className="recent-posts">
                  <div className="recent-posts-image">
                    <a href="blog-details.html">
                      <img
                        src="assets/img/blog/recent-04.jpg"
                        alt="post thumb"
                      />
                    </a>
                  </div>
                  <div className="recent-posts-body">
                    <span className="recent-posts-meta">February 13, 2018</span>
                    <h6 className="recent-posts-title">
                      <a href="blog-details.html">
                        Diffrent title gose This is demo
                      </a>
                    </h6>
                  </div>
                </li>
              </ul>
            </div>

            <div className="blog-widget mt-40">
              <h4 className="blog-widget-title">Tags</h4>
              <div className="blog-tag">
                <a href="blog-details.html">Insect</a>
                <a href="blog-details.html">Control</a>
                <a href="blog-details.html">Bugs</a>
                <a href="blog-details.html">Prevention</a>
                <a href="blog-details.html">Support</a>
              </div>
            </div>
          </div>
          <div className="col-lg-9 order-1 order-lg-2 pl-lg-45">
            <div className="blog-item mt-40">
              <div className="blog-thumb">
                <a href="blog-details.html">
                  <img
                    src="assets/img/blog/blog-details-2.jpg"
                    alt="blog thumb"
                  />
                </a>
              </div>
              <div className="blog-content blog-details">
                <h3 className="blog-title">
                  Beneficial strategies tempora culpa possimus assumenda
                </h3>
                <div className="blog-meta">
                  <a href="#">25 October, 2019</a>
                </div>
                <p>
                  {" "}
                  Bigger ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate perferendis consequuntur illo aliquid nihil ad
                  neque, debitis praesentium libero ullam asperiores
                  exercitationem deserunt inventore facilis, officiis,
                </p>
                <blockquote>
                  <p>
                    Quisque semper nunc vitae erat pellentesque, ac placerat
                    arcu consectetur. venenatis elit ac ultrices convallis. Duis
                    est nisi, tincidunt ac urna sed, cursus blandit lectus. In
                    ullamcorper sit amet ligula ut eleifend. Proin dictum tempor
                    ligula, ac feugiat metus. Sed finibus tortor eu scelerisque
                    scelerisque.
                  </p>
                </blockquote>
                <p>
                  aliquam maiores asperiores recusandae commodi blanditiis ipsum
                  tempora culpa possimus assumenda ab quidem a voluptatum quia
                  natus? Ex neque, saepe reiciendis quasi velit perspiciatis
                  error vel quas quibusdam autem nesciunt voluptas odit quis
                  dignissimos eos aspernatur voluptatum est repellat. Pariatur
                  praesentium, corrupti deserunt ducimus quo doloremque nostrum
                  aspernatur saepe cupiditate sit autem exercitationem debitis,
                  maiores vitae perferendis nemo? Voluptas illo, animi
                  temporibus quod earum molestias eaque, iure rem amet autem
                  dignissimos officia dolores numquam distinctio esse voluptates
                  optio pariatur aspernatur omnis? Ipsam qui commodi velit natus
                  reiciendis quod quibusdam nemo eveniet similique animi!
                </p>
              </div>
            </div>

            <div className="comment-section section-padding">
              <h4>03 Comment</h4>
              <ul>
                <li>
                  <div className="author-avatar">
                    <img src="assets/img/blog/comment-icon.png" alt="" />
                  </div>
                  <div className="comment-body">
                    <span className="reply-btn">
                      <a href="#">Reply</a>
                    </span>
                    <h5 className="comment-author">Erik Jhonson</h5>
                    <div className="comment-post-date">
                      15 Dec, 2019 at 9:15pm
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim maiores adipisci optio ex, non pariatur itaque illo
                      sunt?
                    </p>
                  </div>
                </li>
                <li className="comment-children">
                  <div className="author-avatar">
                    <img src="assets/img/blog/comment-icon.png" alt="" />
                  </div>
                  <div className="comment-body">
                    <span className="reply-btn">
                      <a href="#">Reply</a>
                    </span>
                    <h5 className="comment-author">Pitter Looks</h5>
                    <div className="comment-post-date">
                      20 Nov, 2019 at 9:30am
                    </div>
                    <p>
                      pariatur itaque Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Enim maiores adipisci optio ex,
                      laboriosam facilis non illo sunt?
                    </p>
                  </div>
                </li>
                <li>
                  <div className="author-avatar">
                    <img src="assets/img/blog/comment-icon.png" alt="" />
                  </div>
                  <div className="comment-body">
                    <span className="reply-btn">
                      <a href="#">Reply</a>
                    </span>
                    <h5 className="comment-author">Dominic Palma</h5>
                    <div className="comment-post-date">
                      25 Jan, 2019 at 8:50pm
                    </div>
                    <p>
                      Enim maiores Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. adipisci optio ex, laboriosam facilis
                      non pariatur itaque illo sunt?
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="blog-comment-wrapper">
              <h4>Leave A Reply</h4>
              <p>
                Email address will not be published. Required fields are marked
                *
              </p>
              <form action="#">
                <div className="comment-post-box">
                  <div className="row">
                    <div className="col-12">
                      <label>Comment</label>
                      <textarea
                        name="commnet"
                        placeholder="Write a comment"
                      ></textarea>
                    </div>
                    <div className="col-md-4">
                      <label>Name</label>
                      <input
                        type="text"
                        className="coment-field"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-4">
                      <label>Email</label>
                      <input
                        type="text"
                        className="coment-field"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-4">
                      <label>Website</label>
                      <input
                        type="text"
                        className="coment-field"
                        placeholder="Website"
                      />
                    </div>
                    <div className="col-12">
                      <div className="coment-btn">
                        <input
                          className="btn btn-all"
                          type="submit"
                          name="submit"
                          value="Post Comment"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
