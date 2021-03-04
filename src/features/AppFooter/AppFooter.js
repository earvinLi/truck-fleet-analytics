// External Dependencies
import React from 'react';

// Material-UI Dependencies
import Typography from '@material-ui/core/Typography';
import GithubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getAppFooterStyles from './styles/appFooterStyles';

// Component Definition
const AppHeader = () => {
  const {
    mainContainerStyle,
    typographyTextStyle,
    linkTextStyle,
  } = makeStyles((theme) => getAppFooterStyles(theme))();

  return (
    <div className={mainContainerStyle}>
      <Typography
        variant="subtitle2"
        className={typographyTextStyle}
      >
        Created by the Mawsitsit Team
      </Typography>
      <Typography
        variant="subtitle2"
        className={typographyTextStyle}
      >
        Check our&nbsp;
        <GithubIcon style={{ fontSize: 18 }} />
        &nbsp;
        <a
          href="https://github.com/earvinLi/truck-fleet-analytics"
          className={linkTextStyle}
        >
          Github
        </a>
        &nbsp;if intetrested
      </Typography>
    </div>
  );
};

export default AppHeader;
