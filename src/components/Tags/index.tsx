
import { Divider,  List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core'

import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {useHomeStyles} from '../../pages/Home/theme'
import { selectedTagsItem, selectIsTagsLoaded } from '../../store/ducks/tags/selectors'

interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>,
    
}

export const Tag:React.FC<TagsProps> = ({ classes }):React.ReactElement | null => {
    const items = useSelector(selectedTagsItem)
    const isLoaded = useSelector(selectIsTagsLoaded)
    if(!isLoaded) {
        return null
    }
    return (
        <Paper className={classes.rightSideBlock}>
        <Paper className={classes.rightSideBlockHeader} variant="outlined">
          <b>Актуальные темы</b>
        </Paper>
        <List >
        {items.map((tags) => <React.Fragment  key={tags._id} > 
        <ListItem className={classes.rightSideBlockItem}>
            <Link to={`/home/search?q=${tags.name}`}>
            <ListItemText
              primary={tags.name}
              secondary={
                <Typography component="span" variant="body2" color="textSecondary">
                  Твитов: {tags.count}
                </Typography>
              }
            />
              </Link>
          </ListItem>
        
          <Divider component="li" />
          </React.Fragment>
          )}
        </List>
      </Paper>
    )
}
