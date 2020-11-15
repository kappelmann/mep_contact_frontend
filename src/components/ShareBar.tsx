import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "@kashuab/react-share";
import {
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon
} from "@kashuab/react-share";


export type ShareBarProps = {
  url: string | (() => Promise<string>),
  disabled?: boolean
}

export const ShareBar = ({
  url,
  disabled
} : ShareBarProps) => {
  const sharedButtonProps = {
    url,
    disabled,
    // FIXME: why the hell does this not work without a typing assertion...?
    type: ("button" as React.ButtonHTMLAttributes<HTMLButtonElement>["type"])
  };
  const sharedIconProps = {
    size: 32,
    round: true
  };
  return (
    <Row className="m-3 text-center">
      <Col className="align-items-center">
        <EmailShareButton {...sharedButtonProps}>
          <EmailIcon {...sharedIconProps} />
        </EmailShareButton>
      </Col>
      <Col>
        <FacebookShareButton {...sharedButtonProps}>
          <FacebookIcon {...sharedIconProps} />
        </FacebookShareButton>
      </Col>
      <Col>
        <RedditShareButton {...sharedButtonProps}>
          <RedditIcon {...sharedIconProps} />
        </RedditShareButton>
      </Col>
      <Col>
        <TelegramShareButton {...sharedButtonProps}>
          <TelegramIcon {...sharedIconProps} />
        </TelegramShareButton>
      </Col>
      <Col>
        <TwitterShareButton {...sharedButtonProps}>
          <TwitterIcon {...sharedIconProps} />
        </TwitterShareButton>
      </Col>
      <Col>
        <WhatsappShareButton {...sharedButtonProps}>
          <WhatsappIcon {...sharedIconProps} />
        </WhatsappShareButton>
      </Col>
    </Row>
  );
};

export default ShareBar;
