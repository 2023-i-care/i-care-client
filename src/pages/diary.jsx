import React from "react";
import "./DiaryList.css";
import img from "../../img/baby.jpg";

const DiaryList = () => {
  return (
    <div>


      <div className="box">
        <h3 className="title">기여워</h3>
        <p className="diary">
          아웅 어떻게 저렇게 기엽냐ㅜㅜ아웅 어떻게 저렇게 기엽냐ㅜㅜ<br />
          아웅 어떻게 저렇게 기엽냐ㅜㅜ아웅 어떻게 저렇게 기엽냐ㅜㅜ<br />
        </p>
        <img className="img" src={img} />
      </div>

      <div className="box">
        <h3 className="title">머리 다 헝클어짐</h3>
        <p className="diary">
          머리 산발됐는데도 귀엽다 왕 귀여워 죽겟어머리<br />
          산발됐는데도 귀엽다 왕 귀여워 죽겟어머리<br />
          산발됐는데도 귀엽다 왕 귀여워<br />
          죽겟어머리 산발됐는데도 귀엽다 왕 귀여워 <br />
          죽겟어머리 산발됐는데도 귀엽다 왕 귀여워 죽겟어
        </p>
        <img className="img" src={img} />
      </div>

      <div className="box">
        <h3 className="title">웃는 거 귀여ㅜ어..</h3>

        <p className="diary">
          흠 기엽다는 말 밖에 할말이 업군.,<br />
          흠 기엽다는 말 밖에 할말이 업군.,<br />
          흠 기엽다는 말 밖에 할말이 업군.,<br />
          흠 기엽다는 말 밖에 할말이 업군.,<br />
          흠 기엽다는 말 밖에 할말이 업군.,<br />
          흠 기엽다는 말 밖에 할말이 업군.,
        </p>
        <img className="img" src={img} />
      </div>

      <div className="box">
        <h3 className="title">장난기 가득한 표정</h3>
        <p className="diary">
          메롱하는 거봐 완전 귀여웡 메롱하는 거<br />
          완전 귀여웡 메롱하는 거봐 완전 귀여웡 메롱하는<br />
          거봐 완전 귀여웡 메롱하는 거봐 완전 귀여웡 메롱하는<br />
          거봐 완전 귀여웡 메롱하는 거봐 완전 귀여웡 메롱하는 거봐<br />
          완전 귀여웡 메롱하는 거봐 완전 귀여웡
        </p>
        <img className="img" src={img} />
      </div>

      <div className="box">
        <h3 className="title">이쁜 옷 입힘</h3>

        <p className="diary">
          예이~예이~예이~예이~예이~예이~유ㅜㅇ<br />
          웨이잉ㅇ~예이~예이~예이~예이~예이~예이~유ㅜㅇ<br />
          웨이잉ㅇ~예이~예이~예이~예이~예이~예이~유ㅜㅇ<br />
          웨이잉ㅇ~예이~예이~예이~예이~예이~예이~유ㅜㅇ웨이잉ㅇ~
        </p>
        <img className="img" src={img} />
      </div>

      <button id="btn"></button>
    </div>
  );
};

export default DiaryList;