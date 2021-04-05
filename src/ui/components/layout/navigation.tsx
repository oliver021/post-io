import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { NavigationItems } from '../../../types/navigationModel';
import { ReactNode } from 'react';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = string;

export default function Navigation(props:{
    menu: NavigationItems
}) {
  const classes = useStyles();
  const [elementMenu, setElementMenu] = React.useState("___");

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    console.log("hi!!!!!");
  };

  const list = (anchor: Anchor, content: ReactNode) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {content}
    </div>
  );

  return (
    <>
      {props.menu.map((menu) => (
        <React.Fragment key={menu.key}>
           if(menu.content !== undefined){
              <Button onClick={() => setElementMenu(menu.key)}>
                {menu.icon}
              </Button>
           }else{
            <Button onClick={() => setElementMenu(menu.key)}>
              {menu.icon}
            </Button>
           }
         
          if(menu.content !== undefined){
            <SwipeableDrawer
            anchor='left'
            open={elementMenu === menu.key}
            onClose={() => setElementMenu("__")}
            onOpen={toggleDrawer(menu.key, true)}
          >
            {list(menu.key, menu.content)}
          </SwipeableDrawer>
          }
        </React.Fragment>
      ))}
    </>
  );
}
