import './BlogList.css'
import axios from "axios";
import { useState, useEffect } from 'react';


function BlogList() {

    let [blogs, setBlogs] = useState([]) // Remember to set the initial state! otherwise it will NOT create a reactive variable
    useEffect(() => {
        // TODO: Create a base axios so writting the full URL path its not needed
        axios.get('http://127.0.0.1:8000/api/blog/')
            .then(response => { setBlogs(response.data) })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }, []); // REMEMBER to add the ,[] because if you dont you endup with a loop of whatever is inside

    return (
        < ul className="post-list" >
            <li>
                {blogs.map((blog, index) => {
                    return (
                        <div className="post" key={index}>
                            <ul className="post-header">
                                <li>Abril 20, 2020 /&nbsp;</li>
                                <li>
                                    <a href="#">&nbsp;Python&nbsp;&nbsp;</a>
                            /
                        </li>&nbsp;
                        <li><a href="#">Author Conra</a></li>
                            </ul>
                            <a href="#" className="anchor-headline">{blog.title}</a>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, ea rerum! Alias ex quas delectus dolores eaque. Similique provident, veniam commodi qui labore magnam rerum porro perferendis, nihil facere cumque?
                            </p>
                        </div>
                    )
                })}
                <hr></hr>
            </li>
        </ul >
    )
}

export default BlogList