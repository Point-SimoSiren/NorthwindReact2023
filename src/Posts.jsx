import React, {useState, useEffect} from "react"
import './App.css'

const Posts = ({info, tervehdys}) => {

    // State määritys
    const [posts, setPosts] = useState([])
    const [showPosts, setShowPosts] = useState(false)

    // Use Effect funktio tulee ajetuksi aina alussa kerran
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json()) // json data javascript muotoon
      .then(data => setPosts(data))
    }
    ,[])

return(
    <div className="posts">

        <h2 onClick={() => setShowPosts(!showPosts)}>Typicode posts</h2>

        {/* Propsina vastaanotetut */}
        <p>{tervehdys}</p>
        <p>{info}</p>

        {/* Jos showposts on tosi ja data saapunut niin postaukset loopataan läpi ja renderöidään */}
        {showPosts && posts && posts.map(p => 
            <div className="post">
                <h4>{p.title}</h4>
                <p>{p.body}</p>
            </div>
        
        )}

    </div>
)
}

export default Posts
