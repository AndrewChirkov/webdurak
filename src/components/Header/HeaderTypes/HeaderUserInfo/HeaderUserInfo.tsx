import { observer } from "mobx-react-lite";
import { user } from "../../../../store/user.state";
import { Money } from "../../../Money/Money";
import "./HeaderUserInfo.css";

export const HeaderUserInfo = observer(() => {
  return (
    <div className="header">
      <div className="user-info-container">
        <div className="user-info-name">{user.name}</div>
        <div className="user-info-balance">
          <Money count={user.balance} />
        </div>
      </div>
    </div>
  );
});
