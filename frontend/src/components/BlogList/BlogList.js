import './BlogList.css'
import axios from "axios";


function BlogList() {

    let array_of_blogs = () => {
        axios({
            baseURL: 'http://127.0.0.1:8000/',
            method: 'get',
            url: 'api/blog/',
          })
            .then((res) => console.log(res))
    }


  return (
      <ul className="post-list">
          {array_of_blogs()}
          <li>
              <div className="post">
                  <ul className="post-header">
                      <li>Abril 20, 2020 /&nbsp;</li>
                      <li>
                          <a href="#">&nbsp;Python&nbsp;&nbsp;</a>
                  /
              </li>&nbsp;
                  <li><a href="#">Author Conra</a></li>
                  </ul>
                  <a href="#" className="anchor-headline">The issues with drinking too much water</a>
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