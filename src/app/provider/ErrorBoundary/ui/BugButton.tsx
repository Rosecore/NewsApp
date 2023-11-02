import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

const BugButton = () => {
    const [error, setError] = useState(false)

    const throwErr = () =>{
        setError(true)
    }
    useEffect(()=>{
        if (error){
            throw new Error()
        }
    },[error])
    return (
        <Button className='bug-button' onClick={throwErr}>throw error</Button>
    );
};

export default BugButton;