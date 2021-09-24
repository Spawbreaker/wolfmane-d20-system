import React from 'react';
import { H1, Panel, Text, Link } from 'components';

const Welcome = () => (
  <Panel>
    <H1>Hello!</H1>
    <Text>
      Hi! I'm <strong>Xun Bruinbelly</strong>! And I am building something here for my tribe of tauren.
      So, if you have stumbled upon my happy little page... Hi! I'm Xun!
    </Text>
    <Text>
      For now, <Link href="https://shorturl.at/lnEKX" target="_blank" rel="noreferrer">here is a link</Link> to the content I will be implementing shortly.
    </Text>
    <Text>
      If you are here from Apex, well, the entirety of this CSS is written by hand!
      It is part of my training, coding along to <strong>CSS: The Definitive Guide</strong> by Eric A. Meyer & Estelle Weyl, published by O'Reilly.
    </Text>
    <Text>
      This has also been a great oportunity to use <Link href="https://glitch.com/" target="_blank" rel="noreferrer">Glitch.com</Link>.
      A tool for hosting websites, like Heroku, but... honestly? Seems kinda better.
    </Text>
  </Panel>
);

export default Welcome;
