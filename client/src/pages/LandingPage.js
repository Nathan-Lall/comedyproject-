import React from 'react';
import { SchulzImage,AriImage,BertImage,BillImage,DaveImage,ElonImage,LouisImage,MarkImage,MattImage,TomImage,LogoImage } from '../assets';

const Landingpage = () => {
    return (
    <body  bg='rgb(4,4,60)'>
    
    <img src={LogoImage} alt="Comedytopia" style={{ width: '1000px', height: '400px' }} />
    <div class="vertical-center"style={{text_align:"center",backgroundColor: 'rgb(4,4,60)'}}>
        <a href="./EntryPage">
            <button class="centered-button">Enter</button>
        </a>
    </div>
</body>
    )
}
export default Landingpage;
