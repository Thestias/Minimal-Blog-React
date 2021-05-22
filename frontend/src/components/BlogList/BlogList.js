import './BlogList.css'

function BlogList() {
  return (
      <ul class="post-list">
          <li>
              <div class="post">
                  <ul class="post-header">
                      <li>Abril 20, 2020 /&nbsp;</li>
                      <li>
                          <a href="#">&nbsp;Python&nbsp;&nbsp;</a>
                  /
              </li>&nbsp;
                  <li><a href="#">Author Conra</a></li>
                  </ul>
                  <a href="#" class="anchor-headline">The issues with drinking too much water</a>
                  <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, ea rerum! Alias ex quas delectus dolores eaque. Similique provident, veniam commodi qui labore magnam rerum porro perferendis, nihil facere cumque?
          </p>
              </div>
              <hr></hr>
          </li>
      </ul>
  )
}

export default BlogList