import React from 'react';


const Profilepagetemplate = () => {
  return (
    <div>
      <div className="picture">
        <img src="profile_picture.jpg" alt="Profile Picture" width="200" />
      </div>
      <div className="iframe">
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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
        <h2>User Comments</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" /><br /><br />
          <label htmlFor="comment">Comment:</label><br />
          <textarea id="comment" name="comment" rows="5" cols="50"></textarea><br /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Profilepagetemplate;
