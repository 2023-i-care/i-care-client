import "./communityList.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import img from "../../img/baby.jpg";

const CommunityList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const click_heart = () => {
    setIsClick(!isClick);
  };

  return (
    <div>
      <table>
        <thead>
          <tr className="tr">

            <th>제목</th>
            <th>등록일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr">
            <img className="img" src={img} />
            <td>첫번째 게시글입니다.</td>
            <td>2020-10-25</td>
            <td>6</td>
          </tr>
          <tr className="tr">
            <img className="img" src={img} />
            <td>두번째 게시글입니다.</td>
            <td>2020-10-25</td>
            <td>5</td>
          </tr>
          <tr className="tr">
            <img className="img" src={img} />
            <td>세번째 게시글입니다.</td>
            <td>2020-10-25</td>
            <td>1</td>
          </tr>
          <tr className="tr">
            <img className="img" src={img} />
            <td>네번째 게시글입니다.</td>
            <td>2020-10-25</td>
            <td>2</td>
          </tr>
          <tr className="tr">
            <img className="img" src={img} />
            <td>다섯번째 게시글입니다.</td>
            <td>2020-10-25</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CommunityList;
