import * as React from 'react'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import PopupState, {
    bindHover,
    bindFocus,
    bindMenu,
} from 'material-ui-popup-state'
import {useNavigate} from "react-router-dom";

const HoverFocusMenu = ({text, url, id, items}) => {

    const navigate = useNavigate();

    return (
        <PopupState variant="popover" popupId="demoMenu">
            {(popupState) => (
                <React.Fragment>
                    <Button id={id}
                            variant="contained"
                            {...bindHover(popupState)}
                            {...bindFocus(popupState)}
                    >
                        {text}
                    </Button>
                    <HoverMenu
                        {...bindMenu(popupState)}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >

                        {items.map(item => <MenuItem key={item.text} onClick={() => {
                            popupState.close();
                            navigate(item.url)
                        }}>{item.text}</MenuItem>)
                        }
                    </HoverMenu>
                </React.Fragment>
            )}
        </PopupState>
    )
}

export default HoverFocusMenu