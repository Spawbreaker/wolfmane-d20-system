import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Panel, Card, H3, Button, H2, Text, H4 } from 'components';
import Races from 'db/races.json';
import Ranks from 'db/ranks.json';
import Armors from 'db/armors.json';
import Shields from 'db/shields.json';
import { Link } from 'react-router-dom';
import { setArmor, setRace, setRank, setShield } from 'store/character';

const CharacterBuild = () => {
  const dispatch = useDispatch();

  const race = useSelector((state) => state.character?.race);
  const rank = useSelector((state) => state.character?.rank);
  const armor = useSelector((state) => state.character?.armor);
  const shield = useSelector((state) => state.character?.shield);

  const changeRace = (val) => dispatch(setRace(val));
  const changeRank = (val) => dispatch(setRank(val));
  const changeArmor = (val) => dispatch(setArmor(val));
  const changeShield = (val) => dispatch(setShield(val));

  return (
    <>
      <Link to="/" style={{ textAlign: 'left' }}><H4>{'<--'} Back</H4></Link>
      <Panel className="page" style={{ display: 'grid', width: 'auto', justifyItems: 'center', maxWidth: '800px' }}>
        <H2 style={{ textOverflow: 'elipsis' }}>Basic Info</H2>
        <Text style={{ textAlign: 'justify' }}>
          In the Wolfmane D20 System, each player will have <strong>Stats</strong> that modify
          each of their rolls, depending on the stats that apply to the action. These stats depend on
          a couple of things: The <strong>race</strong> of your character, your <strong>rank</strong>
          &nbsp;in the guild and your <strong>armor & shield</strong>.
        </Text>
        <Text style={{ textAlign: 'justify' }}>
          To help you build your character, please specify the following values which apply to your character.
        </Text>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', width: '100%', maxWidth: '700px'}}>
          <Panel>
            <H3>Race</H3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '8px', justifySelf: 'center' }}>
              {Races.map(({ name }) => (<Card title={name} onClick={() => changeRace(name)} active={race === name} />))}
            </div>
          </Panel>
          <Panel>
            <H3>Rank</H3>
            {Ranks.map(({ name }) => <Card title={name} onClick={() => changeRank(name)} active={rank === name} />)}
          </Panel>
          <Panel>
            <H3>Armor</H3>
            {Armors.map(({ name }) => <Card title={name} onClick={() => changeArmor(name)} active={armor === name} />)}
          </Panel>
          <Panel>
            <H3>Shield</H3>
            {Shields.map(({ name }) => <Card title={name} onClick={() => changeShield(name)} active={shield === name} />)}
          </Panel>
          <div style={{ alignSelf: 'center', justifySelf: 'center' }}>
            <Link to="/stats"><Button disabled={!race || !rank || !armor || !shield}>Continue</Button></Link>
          </div>
        </div>
      </Panel>
    </>
);
}
export default CharacterBuild;
