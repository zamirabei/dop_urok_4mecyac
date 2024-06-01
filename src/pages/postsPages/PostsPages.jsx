import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
function PostsPages() {
    const {
        handleSubmit ,
        register,
        setValue,
        reset,
    } = useForm()

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({})
    const [editPostId, setEditPostId] = useState(null);
    const [updateMethod, setUpdateMethod] = useState('axios')


    useEffect(()=>{
        getPosts()
    },[]);

    async function getPosts(){
        // const response = await fetch("http://localhost:8000/posts")
        // const data = await response.json()
        // setPosts(data)
        const response = await axios.get("http://localhost:8000/posts")
        setPosts(response.data);
    }

    async function submit(values){
       // const response = await fetch ("http://localhost:8000/posts", {
       //     method: "POST",
       //     headers: {
       //         "Content-Type": "application/json",
       //     },
       //     body: JSON.stringify(values)
       // })
       //  getPosts()
        const response = await axios.post("http://localhost:8000/posts", values)
        getPosts();
    }
    async function deletePost (id){
        // const response = await fetch(`http://localhost:8000/posts/${id}`, {
        //     method: "DELETE"
        // })
        // getPosts()
        const response = await axios.delete(`http://localhost:8000/posts/${id}`)
        getPosts()
    }
    async function getOnePost (id){
        // const response = await fetch(`http://localhost:8000/posts/${id}`)
        // const postOne = await response.json()
        // setPost(postOne)
        const response = await axios.get(`http://localhost:8000/posts/${id}`)
        setPost(response.data)
    }
    // async function updatePostAxios(id, values){
    //     await axios.put(`http://localhost:8000/posts/${id}`, values);
    //     getPosts();
    //     setEditPostId(null);
    // }
    async function updatePost(id, values,) {
        if (updateMethod === 'axios') {
            await axios.put(`http://localhost:8000/posts/${id}`, values);
        } else {
            await fetch(`http://localhost:8000/posts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
        }
        getPosts();
        setEditPostId(null);
        reset();
    }

    async function updatePostFetch(id, values){
        await fetch(`http://localhost:8000/posts/${id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });
        getPosts();
        setEditPostId(null);
    }
    const handleEdit = (post) => {
        setEditPostId(post.id);
        setValue ('title', post.title);
        setValue ('body', post.body);
    };

    return (
        <div>
            <h2>Posts List</h2>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('title')} placeholder="title"/>
                <textarea cols="30" rows="10"{...register('body')} placeholder="body"></textarea>
                <button>Create</button>
            </form>
            <ul>
                { posts.length > 0 ? posts.map(post =>(
                        <li key = {post.id}>
                            {post.title}
                            <button onClick={()=> deletePost(post.id)}>delete post</button>
                        <button onClick={()=> getOnePost(post.id) }>get more info</button>
                            <button onClick={() => handleEdit(post)}>Update</button>
                        </li>
                    ))   :  <p>список пуст</p>
                }
            </ul>
            <ul>
                <li>
                    title: {post.title}
                </li>
                <li>
                    body: {post.body}
                </li>
            </ul>
            {
                editPostId && (
                    <form onSubmit={handleSubmit((values) => updatePost (editPostId, values))}>
                        <h3>Update post with AXIOS</h3>
                        <input type="text" {...register('title')}  placeholder="title"/>
                        <textarea cols="30" rows="10" {...register('body')} placeholder="body"></textarea>
                        <button>Update</button>
                    </form>
                )
            }
            {/*{*/}
            {/*    editPostId && (*/}
            {/*        <form onSubmit={handleSubmit(values => updatePostFetch(editPostId, values))}>*/}
            {/*            <h3>Update post with FetCH</h3>*/}
            {/*            <input type="text" {...register('title')} placeholder="title"/>*/}
            {/*            <textarea cols="30" rows="10" {...register('body')} placeholder="body"></textarea>*/}
            {/*            <button>Update</button>*/}
            {/*        </form>*/}
            {/*    )*/}
            {/*}*/}
            <div>
                <label>
                    <input
                        type="radio"
                        value="axios"
                        checked={updateMethod === 'axios'}
                        onChange={() => setUpdateMethod('axios')}
                    />
                    Axios
                </label>
                <label>
                    <input
                        type="radio"
                        value="fetch"
                        checked={updateMethod === 'fetch'}
                        onChange={() => setUpdateMethod('fetch')}
                    />
                    Fetch
                </label>
            </div>
        </div>

    )
}

export default PostsPages;
