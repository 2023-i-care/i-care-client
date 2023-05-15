import React from "react";
import Navbar from "../Navbar";
import styles from "@/CommunityPosting.module.css";

const CommunityPosting = () => {
  return (
    <div>
      <Navbar />
      <div>
        <label for="content">내용</label>
        <textarea
          class="form-control"
          rows="5"
          id="content"
          name="content"
          placeholder="내용 작성"
        ></textarea>
      </div>
    </div>
  );
};

export default CommunityPosting;
