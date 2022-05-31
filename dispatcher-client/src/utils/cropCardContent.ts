import { SCREENS } from './constants/screenSizes';

const { breakpoint700 } = SCREENS;

const cropCardContent = (content: string, width: number): string => {
  const MAXMOBILE = 190;
  const MAXDESKTOP = 145;
  const isMobile = width > breakpoint700 ? false : true;
  if (isMobile && content.length > MAXMOBILE) {
    return content.slice(0, MAXMOBILE) + ' ...';
  } else if (!isMobile && content.length > MAXDESKTOP) {
    return content.slice(0, MAXDESKTOP) + ' ...';
  } else return content;
};

export default cropCardContent;
