'use client'

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label,name}){

    const [pickedImage,setPickedImage] = useState()

    const imageInput = useRef()

    function  handlePickaAnImage(){
        imageInput.current.click()
    }

    function handlePickedImageChange(event){
        const file =  event.target.files[0];

        if (!file){
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader()

        fileReader.onload = () =>{
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }

    return <>

    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
    
    <div className={classes.controls}>
    <div className={classes.preview}>
            {!pickedImage && <p>No Image Picked yet.</p>}
            {pickedImage &&<Image src={pickedImage} fill alt="Picked Image By The User." />}
        </div>
        <input className={classes.input} 
        id={name} type='file' 
        accept='image/png , image/jpeg'
        name={name}
        ref={imageInput}
        required
        onChange={handlePickedImageChange}/>
        <button className={classes.button} type='button' onClick={handlePickaAnImage}>Pick An Image</button>
    </div>
    
    </div>
    </>
}