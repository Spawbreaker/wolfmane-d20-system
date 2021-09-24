import React, { useState } from 'react';
import { Panel, Card, H3, Button, H2, Text, H4 } from 'components';
import Races from 'db/races.json';
import Ranks from 'db/ranks.json';
import Armors from 'db/armors.json';
import Shields from 'db/shields.json';
import { Link } from 'react-router-dom';

const CharacterBuild = () => {
  const [race, setRace] = useState();
  const [rank, setRank] = useState();
  const [armor, setArmor] = useState();
  const [shield, setShield] = useState();

  return (
    <>
      <Link to="/" style={{ textAlign: 'left' }}><H4>{'<--'} Back</H4></Link>
      <Panel className="page" style={{ maxWidth: '1100px' }}>
        <H2>Basic Information</H2>
        <Text>
          In the Wolfmane D20 System, each player will have <strong>Stats</strong> that modify
          each of their rolls, depending on the stats that apply to the action. These stats depend on
          a couple of things: The <strong>race</strong> of your character, your <strong>rank</strong>
          &nbsp;in the guild and your <strong>armor & shield</strong>.
        </Text>
        <Text>
          To help you build your character, please specify the following values which apply to your character.
        </Text>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2fr auto', maxWidth: '1000px', gridGap: '0.5rem' }}>
          <Panel>
            <H3>Race</H3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '8px' }}>
              {Races.map(({ name }) => (<Card title={name} onClick={() => setRace(name)} active={race === name} />))}
            </div>
          </Panel>
          <Panel>
            <H3>Rank</H3>
            {Ranks.map(({ name }) => <Card title={name} onClick={() => setRank(name)} active={rank === name} />)}
          </Panel>
          <Panel>
            <H3>Defensives</H3>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gridGap: '8px' }}>
              <div>
                <H4>Armor</H4>
                {Armors.map(({ name }) => <Card title={name} onClick={() => setArmor(name)} active={armor === name} />)}
              </div>
              <div>
                <H4>Shield</H4>
                {Shields.map(({ name }) => <Card title={name} onClick={() => setShield(name)} active={shield === name} />)}
              </div>
            </div>
          </Panel>
          <div style={{ alignSelf: 'center', justifySelf: 'center' }}>
            <Button>Continue</Button>
          </div>
        </div>
      </Panel>
    </>
);
}
export default CharacterBuild;
