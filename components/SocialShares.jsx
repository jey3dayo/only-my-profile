import React from 'react';
import Button from 'grommet/components/Button';

import SocialTwitter from 'grommet/components/icons/base/SocialTwitter';
import SocialFacebook from 'grommet/components/icons/base/SocialFacebook';
import SocialGithub from 'grommet/components/icons/base/SocialGithub';
import SocialInstagram from 'grommet/components/icons/base/SocialInstagram';
import SocialBlog from 'grommet/components/icons/base/Blog';
import SocialHatena from './SocialHatena';

const contents = () => (
  <div>
    <Button
      icon={<SocialTwitter />}
      target="blank"
      href="https://twitter.com/j138"
    />
    <Button
      icon={<SocialFacebook />}
      target="blank"
      href="https://www.facebook.com/nakazajun"
    />
    <Button
      icon={<SocialInstagram />}
      target="blank"
      href="https://www.instagram.com/jey3dayo/"
    />
    <Button
      icon={<SocialGithub />}
      target="blank"
      href="https://github.com/j138"
    />
    <Button
      icon={<SocialHatena />}
      target="blank"
      href="http://b.hatena.ne.jp/J138"
    />
    <Button
      icon={<SocialBlog />}
      target="blank"
      href="https://medium.com/@J138"
    />
  </div>
);

export default contents;
