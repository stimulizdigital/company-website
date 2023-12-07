import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return <>
    <aside className="widget-area">
      <div className="widget widget_search">
        <form className="search-form">
          <input
            type="search"
            className="search-field"
            placeholder="Search your article"
          />
          <button type="submit">
            <i className="ri-search-line"></i>
          </button>
        </form>
      </div>

      <div className="widget widget_recent_post">
        <h3 className="widget-title">Recent Post</h3>

        <article className="item">
          <Link href="/blog/single-blog" className="thumb" legacyBehavior>

          <>  <span className="fullimage bg1" role="img"></span> </>

          </Link>
          <div className="info">
            <span>09th July 2022</span>
            <h4 className="title usmall">
              <Link href="/blog/single-blog">
               <> How Technology Dominate In The new World In 2022 </>
              </Link>
            </h4>
          </div>
        </article>

        <article className="item">
          <Link href="/blog/single-blog" className="thumb" legacyBehavior>

          <>  <span className="fullimage bg2" role="img"></span> </>

          </Link>
          <div className="info">
            <span>09th July 2022</span>
            <h4 className="title usmall">
              <Link href="/blog/single-blog">
                Top 10 Most Famous Technology Trend In 2022
              </Link>
            </h4>
          </div>
        </article>

        <article className="item">
          <Link href="/blog/single-blog" className="thumb" legacyBehavior>

        <>    <span className="fullimage bg3" role="img"></span> </>

          </Link>
          <div className="info">
            <span>09th July 2022</span>
            <h4 className="title usmall">
              <Link href="/blog/single-blog">
                Open Source Job Report Show More Openings Fewer
              </Link>
            </h4>
          </div>
        </article>
      </div>

      <div className="widget widget_categories">
        <h3 className="widget-title">Categories</h3>

        <ul className="list">
          <li>
            <Link
              href="/blog/categories"
              className=" d-flex justify-content-between align-items-center"
              legacyBehavior>
            <>  Technology<span>(11)</span> </>

            </Link>
          </li>
          <li>
            <Link
              href="/blog/categories"
              className=" d-flex justify-content-between align-items-center"
              legacyBehavior>
            <>  Information<span>(09)</span> </>

            </Link>
          </li>
          <li>
            <Link
              href="/blog/categories"
              className=" d-flex justify-content-between align-items-center"
              legacyBehavior>
            <>  Business<span>(29)</span> </>

            </Link>
          </li>
          <li>
            <Link
              href="/blog/categories"
              className=" d-flex justify-content-between align-items-center"
              legacyBehavior>
            <>  Development<span>(31)</span> </>

            </Link>
          </li>
          <li>
            <Link
              href="/blog/categories"
              className=" d-flex justify-content-between align-items-center"
              legacyBehavior>
           <>   IT Services<span>(25)</span> </>

            </Link>
          </li>
        </ul>
      </div>
    </aside>
  </>;
}

export default Sidebar
