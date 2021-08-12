import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

interface NotificationProps {
  children: React.ReactElement;
}

export const Notification: React.FC<NotificationProps> = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [textNotification, setTextNotification] = React.useState<string>("");
  const openNotification = (text: string) => {
    setTextNotification(text);
    setOpen(true);
  };
  return (
    <>
      {React.cloneElement(children, openNotification)}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          {textNotification}
        </Alert>
      </Snackbar>
    </>
  );
};
