import React, { useRef } from 'react';

const Ref = () => {
    const nameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();

    const handleCreate = () => {
        const newObject = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
        };
        console.log(newObject);
    };

    return (
        <div>
            <h1>    Form</h1>
            <div>
                <label>
                    Name:
                    <input type="text" ref={nameRef} />
                </label>
            </div>
            <div>
                <label>
                    Username:
                    <input type="text" ref={usernameRef} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" ref={emailRef} />
                </label>
            </div>
            <button onClick={handleCreate}>create</button>
        </div>
    );
};

export default Ref;