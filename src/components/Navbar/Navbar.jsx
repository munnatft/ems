import { useNavigate } from "react-router-dom";
import { menuIcon } from "../../assets";
import styles from "./Navbar.module.css";

const Navbar = ({
  email
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <header className={styles.header}>
      <div className={styles.heading}>List of employees</div>
      <div className={styles.dropDownContainer}>
        <img src={menuIcon} alt="menu-icon" />
        <div className={styles.dropdown}>
          <p>{email}</p>
          <button className={styles.logout} onClick={handleLogout}>logout</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
