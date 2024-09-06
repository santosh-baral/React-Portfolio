import React from 'react';
// import './SocialLinks.css'; // Create this CSS file for styling
import './Footer.css';
function SocialLinks() {
  return (
    <div className="icons">
      <a href="https://github.com/santosh-baral"><img src="github.svg" alt="GitHub" height={50} width={50}/></a>
      <a href="https://www.linkedin.com/in/santosh-baral-8a00a0236"><img src="linkedin.svg" alt="LinkedIn" height={50} width={50} /></a>
      <a href="https://www.facebook.com/santosh.baral.9083"><img src="facebook.svg" alt="Facebook" height={50} width={50} /></a>
      <a href="https://twitter.com/Santos_baral?s=20&t=wnNQ9lGcHieqhZ9GCsR7LQ"><img src="twitter.svg" alt="Twitter" height={50} width={50}/></a>
      <p>Copyright©2022 santosh </p>
    </div>
  );
}

export default SocialLinks;