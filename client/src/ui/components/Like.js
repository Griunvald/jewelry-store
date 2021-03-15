import React, { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const Like = () => {
  const [like, setLike] = useState(false);
  return (
    <div className="heart-component" onClick={() => setLike(!like)}>
      {like ? <BsHeartFill /> : <BsHeart />}
    </div>
  );
};

export default Like;
