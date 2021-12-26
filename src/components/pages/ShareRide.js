import React, { useState } from "react";
import { Share } from "../styles/Share.styled";

const ShareRide = () => {
  const [copied, setCopied] = useState(false);

  const handleCopied = () => {
    setCopied(copied => true);
  };
  return (
    <Share>
      <h2>Share your ride details!</h2>
      <div className="img-container">
        <img src="/img/share-img.png" alt="share" />
      </div>

      <p>
        Your ride has a unique web link that you can share with family and
        friends
      </p>
      <button className=" copy-btn" onClick={handleCopied}>
        {" "}
        {copied === false && <img src="img/copy.png" alt="copy" />}
        {copied === true && <img src="img/check.png" alt="check" />}
        {copied === false && <p>Copy my link</p>}
        {copied === true && <p>Link copied!</p>}
      </button>
      <button className=" whatsapp-btn">
        {" "}
        <img src="img/whatsapp.png" alt="whatsapp" /> <p>Share on Whatsapp</p>
      </button>
    </Share>
  );
};

export default ShareRide;
