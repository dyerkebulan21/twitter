import { Button, IconButton, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import BookmarkIcon from "@material-ui/icons/BookmarkBorder";
import Message from "@material-ui/icons/MailOutline";
import ListIcon from "@material-ui/icons/ListAlt";
import UserIcon from "@material-ui/icons/PersonOutline";
import React from "react";
import { useHomeStyles } from "../../pages/Home/theme";
import {Modal} from '../Modal'
interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}): React.ReactElement => {
  const[visibleModal, setVisibleModal] = React.useState<boolean>(false)
  const handleOpenModal = () => {
    setVisibleModal(true)
  }
  const handleCloseModal = () => {
    setVisibleModal(false)
  }
  return (
    <ul className={classes.sideMenuList}>
  
        <li className={classes.sideMenuListItem}>
        
          <IconButton className={classes.logo} color="primary">
            <TwitterIcon className={classes.logoIcon} />
          </IconButton>
      
        </li>
     
   
        <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Поиск
          </Typography>
          </div>
        </li>
     

      
        <li className={classes.sideMenuListItem}>
        <div>
          <NotificationIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Уведомления
          </Typography>
          </div>
        </li>
   
   
        <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Сообщения
          </Typography>
          </div>
        </li>
     
    
        <li className={classes.sideMenuListItem}>
        <div>
          <Message className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Закладки
          </Typography>
          </div>
        </li>
   
    
        <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon} />

          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Список
          </Typography>
          </div>
        </li>
  
    
        <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant="h6">
            Профиль
          </Typography>
          </div>
        </li>
        <li><Button onClick={handleOpenModal} color="primary" variant="contained" className={classes.sideMenuTweetButton} fullWidth>Твитнуть</Button></li>
        <Modal visible={visibleModal} title="" onClose={handleCloseModal}>.....</Modal>
       
    </ul>
  );
};
