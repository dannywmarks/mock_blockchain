import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlocks } from "../actions/blockchain";
import { Link } from "react-router-dom";
import Block from "../Block/Block";

const Blocks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlocks());
  }, [dispatch]);

  const blockchain = useSelector((state) => state.blockchain);
  console.log(blockchain);

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <Link to="/">Home</Link>
        </div>
        <h3>Blocks</h3>

        {blockchain.blocks.map((block) => (
          <Block key={block.hash} block={block} />
        ))}
      </div>
    </div>
  );
};

export default Blocks;
