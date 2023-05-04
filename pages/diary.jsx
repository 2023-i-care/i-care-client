import React from "react";
import Navbar from "./Navbar";
import styles from '../styles/Diary.module.css'

const DiaryList = () => {
  return (
    <div>
      <Navbar />
      <button className={`${styles.btn}`} href="/diary/posting">
        <p className={`${styles.btntext}`}>우리 아기의 이야기를 기록해보세요</p>
      </button>
      <div className={`${styles.box}`}>
        <p className={`${styles.diary}`}>
          오늘은 설윤이가 밥도 맛있게 먹고 처음으로 엄마라고 말도 했다!
          <br /> 나를 닮아 편식이 심해 걱정인데... <br />
          i-care 사이트에서 편식 줄일 수 있는 팁을 찾아서 공부해봐야겠다...ㅠㅠ
        </p>
      </div>
      <div className={`${styles.box}`}>
        <p className={`${styles.diary}`}>
          오늘은 설윤이가 밥도 맛있게 먹고 처음으로 엄마라고 말도 했다!
          <br /> 나를 닮아 편식이 심해 걱정인데... <br />
          i-care 사이트에서 편식 줄일 수 있는 팁을 찾아서 공부해봐야겠다...ㅠㅠ
        </p>
      </div>
      <div className={`${styles.box}`}>
        <p className={`${styles.diary}`}>
          오늘은 설윤이가 밥도 맛있게 먹고 처음으로 엄마라고 말도 했다!
          <br /> 나를 닮아 편식이 심해 걱정인데... <br />
          i-care 사이트에서 편식 줄일 수 있는 팁을 찾아서 공부해봐야겠다...ㅠㅠ
        </p>
      </div>
      <div className={`${styles.box}`}>
        <p className={`${styles.diary}`}>
          오늘은 설윤이가 밥도 맛있게 먹고 처음으로 엄마라고 말도 했다!
          <br /> 나를 닮아 편식이 심해 걱정인데... <br />
          i-care 사이트에서 편식 줄일 수 있는 팁을 찾아서 공부해봐야겠다...ㅠㅠ
        </p>
      </div>
      <div className={`${styles.box}`}>
        <p className={`${styles.diary}`}>
          오늘은 설윤이가 밥도 맛있게 먹고 처음으로 엄마라고 말도 했다!
          <br /> 나를 닮아 편식이 심해 걱정인데... <br />
          i-care 사이트에서 편식 줄일 수 있는 팁을 찾아서 공부해봐야겠다...ㅠㅠ
        </p>
      </div>
    </div>
  );
};

export default DiaryList;