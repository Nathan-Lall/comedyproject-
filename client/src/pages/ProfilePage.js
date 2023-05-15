import React from 'react';
import { SchulzImage,AriImage,BertImage,BillImage,DaveImage,ElonImage,LouisImage,MarkImage,MattImage,TomImage,LogoImage } from '../assets';

const Profilepagetemplate = () => {
  return (
    <div class="profiletext">
      <div className="picture">
        <img src={AriImage}></img>
        
      </div>
      <div className="iframe">
      
      </div>
      <h1>Welcome to My Profile Page</h1>
      <div className="upcoming-shows">
        <h2>Upcoming Shows</h2>
        <ul>
          <li>Show 1 - May 15</li>
          <li>Show 2 - June 10</li>
          <li>Show 3 - July 5</li>
        </ul>
      </div>
      <div className="user-comments">
        <h2 >User Comments</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" /><br /><br />
          <label htmlFor="comment">Comment:</label><br />
          <textarea id="comment" name="comment" rows="5" cols="50"></textarea><br /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <iframe
              src="https://www.youtube.com/embed/T88r9Vj0154"
              width="1020"
              height="615"
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
    </div>
  );
};

export default Profilepagetemplate;
