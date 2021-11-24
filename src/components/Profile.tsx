import styles from "../styles/components/Profile.module.css";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { useContext } from "react";

function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://i.ibb.co/DDH1Yw5/IMG-20210217-221236418.jpg"
        alt="Renan Fischer"
      />
      <div>
        <strong>Renan Fischer</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;
