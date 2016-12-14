import React from 'react';
import Button from 'grommet/components/Button';

import SocialTwitter from 'grommet/components/icons/base/SocialTwitter';
import SocialFacebook from 'grommet/components/icons/base/SocialFacebook';
import SocialGithub from 'grommet/components/icons/base/SocialGithub';
import SocialInstagram from 'grommet/components/icons/base/SocialInstagram';
import SocialMail from 'grommet/components/icons/base/SocialMail';

const contents = () => (
  <div>
    <Button primary icon={<SocialTwitter />} href="https://twitter.com/j138" />
    <Button primary icon={<SocialFacebook />} href="https://www.facebook.com/nakazajun" />
    <Button primary icon={<SocialInstagram />} href="https://www.instagram.com/jey3dayo/" />
    <Button primary icon={<SocialGithub />} href="https://github.com/j138" />
    <Button primary icon={<SocialMail />} href="mailto:j38cm at gmail.com" />
  </div>
);

export default contents;
