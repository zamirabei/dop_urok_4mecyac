import React, {useState} from 'react';
import {useForm} from "react-hook-form";

function CreatePostPage() {
    const {handleSubmit, reset,register} = useForm()
    const [post, setPost] = useState({
        name:'',
        username:'',
        email: '',
        tel: '',
        website: ''

    })
const [array, setArray] = useState([])

    function changeInput(e){
        const name = e.target.name;
        const value = e.target.value;

        setPost({
            ...post,
            [name]: value
        })
    }

    function createPost() {
        if (post.name.trim() === '' || post.username.trim()==='' || post.email.trim()==='' || post.tel.trim()===''){
           alert('Заполните поля')
        }else {setArray([...array, post ])
            reset(
                setPost({
                name: '',
                username: '',
                tel: '',
                email: '',
                website: ''
            }))
        }
    }
    function deleteDannye (id){
        setArray(prevState => prevState.filter((_,i)=>i !== id ))
    }
    function deleteTable (){
        setArray([])
    }
    return (
        <div className='container'>
            <h2>create post</h2>
            <form onSubmit={handleSubmit (createPost)} onChange={changeInput}>
                <input type="text" placeholder='name'  {...register('name',{required:true})} value={post.name}/>
                <input type="text" placeholder='username' {...register('username',{required:true})} value={post.username}/>
                <input type="text" placeholder='email'  {...register('email',{required:true})} value={post.email}/>
                <input type="tel" placeholder='tel'  {...register('tel',{required:true})} value={post.tel}/>
                <input type="url" placeholder='website'  {...register('website')} value={post.website}/>

                <button onClick={createPost}>create</button>
                 <button onClick={reset}>reset</button>
                <button onClick={deleteTable}> delete tables</button>
                <div className='table-header'>
                    <div>Name</div>
                    <div>Username</div>
                    <div>Email</div>
                    <div>tel</div>
                    <div>Website</div>
                </div>
                {array.length > 0 ? (<div>{array.map((word1, idx)=> (<div className= 'arr1' key={idx}>
                    <p>{word1.name}</p>
                    <p>{word1.username}</p>
                    <p>{word1.email}</p>
                    <p>{word1.tel}</p>
                    <p>{word1.website}</p>
                    <button onClick={()=> deleteDannye(idx)}>Удалить</button>
                </div>))
                }</div> ) : (<div className='empty-table'>Таблица пуста</div>)}
            </form>

        </div>
    );
}

export default CreatePostPage;