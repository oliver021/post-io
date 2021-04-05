import {
  List, ListItemText, ListItemIcon,
   Divider, ListItem
} from '@material-ui/core';
import { Fragment, useReducer, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { SearchSharp, AllInbox } from '@material-ui/icons';
import { INavigationResolver } from '../../../types/navigationModel';

export function AccessNetwork(props: {navigation: INavigationResolver, onNav: (el: string) => void}){
  const [mode, setMode] = useState("all");
    return <Fragment>
        <BottomNavigation value={mode}  onChange={(event, newValue) => {
            setMode(newValue);
        }} >
          <BottomNavigationAction label="Recents" value="search" icon={<SearchSharp />} />
          <BottomNavigationAction label="Favorites" value="all" icon={<AllInbox />} />
        </BottomNavigation>
        <Divider />
              <List>
                {props.navigation.getPagesList().map(info =>{
                  return <ListItem onClick={() => props.onNav(info.id)} disabled={info.avaliable} button key={info.id}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary={info.title} />
                        </ListItem>
                })}
              </List>
    </Fragment>
}

export function RecentsNav(){
  return <Fragment>
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
<Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Fragment>
}