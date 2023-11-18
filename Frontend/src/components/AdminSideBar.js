import "./adminSideBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faUtensils,
  faPizzaSlice,
  faPeopleGroup,
  faCog,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function AdminSideBar() {
  return (
    <>
      <div className="list-group admin-side-bar">
        <Link
          to="/dashboard"
          className="list-group-item side-bar-list list-group-item-action !active"
        >
          <FontAwesomeIcon className="adminSidebar-icons" icon={faList} />
          {"Dashboard"}
        </Link>
        <Link
          to="/adminmenu"
          className="list-group-item side-bar-list list-group-item-action"
        >
          <FontAwesomeIcon className="adminSidebar-icons" icon={faUtensils} />
          {"Menu"}
        </Link>
        <Link
          to="/orders"
          className="list-group-item side-bar-list list-group-item-action"
        >
          <FontAwesomeIcon className="adminSidebar-icons" icon={faPizzaSlice} />
          {"Orders"}
        </Link>
        <Link
          to="/customers"
          className="list-group-item side-bar-list list-group-item-action"
        >
          <FontAwesomeIcon
            className="adminSidebar-icons"
            icon={faPeopleGroup}
          />
          {"Customers"}
        </Link>

        <Link
          to="/settings"
          className="list-group-item side-bar-list list-group-item-action"
        >
          <FontAwesomeIcon className="adminSidebar-icons" icon={faCog} />
          {"Settings"}
        </Link>
        <Link
          to="/feedbacks"
          className="list-group-item side-bar-list list-group-item-action"
        >
          <FontAwesomeIcon className="adminSidebar-icons" icon={faThumbsUp} />
          {"Feedbacks"}
        </Link>
      </div>
    </>
  );
}

export default AdminSideBar;
