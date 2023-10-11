import classNames from "classnames/bind";
import style from './AdminContainer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function AdminContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Welcome To Admin Page</h2>
                <h3 className={cx('sub-title')}>
                    Please choose any action
                    <FontAwesomeIcon className={cx('icon')} icon={faClipboardCheck}></FontAwesomeIcon>
                </h3>
            </div>
        </div>
    );
}

export default AdminContainer;