import { HeaderProps } from "../interfaces";

export const Header = ({
  titleText,
  textColor,
  backgroundColor,
  logoImage,
  logoImageAltText,
  logoLink,
  view,
}: HeaderProps) => {
  const socialShare = view && (
    <instant-apps-social-share
      slot="actions-end"
      shareButtonColor="inverse"
      displayTipText={false}
    />
  );
  return (
    <div slot="header">
      <instant-apps-header
        titleText={titleText}
        textColor={textColor}
        backgroundColor={backgroundColor}
        logoImage={logoImage}
        logoImageAltText={logoImageAltText}
        logoLink={logoLink}
      >
        {socialShare}
      </instant-apps-header>
    </div>
  );
};
