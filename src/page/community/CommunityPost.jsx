import React from "react";
import styled from "styled-components";

const CommunityPost = () => {
    return (
        <div>
            <label for="content">내용</label>
            <textarea class="form-control" rows="5" id="content"
                name="content" placeholder="내용 작성"></textarea>
        </div>
    );
}

export default CommunityPost;