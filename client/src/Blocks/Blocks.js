import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlocks } from "../actions/blockchain";
import Block from "../Block/Block";

const Blocks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlocks());
  }, [dispatch]);

  const blockchain = useSelector((state) => state.blockchain);
  console.log(blockchain);

  return (
    <div>
      <h3>Blocks</h3>
      {blockchain.blocks.map((block) => (
        <Block key={block.hash} block={block} />
      ))}
    </div>
  );
};

export default Blocks;
