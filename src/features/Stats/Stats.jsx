import React, { useState, useEffect } from 'react';
import { Panel, Text, H2, H4 } from 'components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Races from 'db/races.json';
import Ranks from 'db/ranks.json';
import Armors from 'db/armors.json';
import Shields from 'db/shields.json';
import StatsDb from 'db/stats.json';

const constructChoicesString = (choice) => {
  const options = choice.map((option) => {
    return ` [${Object.keys(option).map((value) => `+${option[value]} ${StatsDb[value].name}`)}] or`
  }).toString();
  return options.substring(0, options.length - 3);
};


const Stats = () => {
  const [hp, setHp] = useState();
  const [str, setStr] = useState();
  const [dex, setDex] = useState();
  const [con, setCon] = useState();
  const [wis, setWis] = useState();
  const [int, setInt] = useState();
  const [cha, setCha] = useState();
  const [bonus, setBonus] = useState();
    const [choice, setChoice] = useState();
  const race = useSelector((state) => state.character?.race);
  const rank = useSelector((state) => state.character?.rank);
  const armor = useSelector((state) => state.character?.armor);
  const shield = useSelector((state) => state.character?.shield);

  useEffect(() => {
    const _race = Races.find(({ name }) => name === race);
    const _armor = Armors.find(({ name }) => name === armor);
    const _shield = Shields.find(({ name }) => name === shield);
    const _rank = Ranks.find(({ name }) => name === rank);

    console.log(_race, _armor, _shield)
    setHp(7 + (_race.con || 0) + _armor.hp + _shield.hp)
    setStr(_race.str || 0);
    setDex((_race.dex || 0) + _armor.dex || 0);
    setCon(_race.con || 0);
    setWis(_race.wis || 0);
    setInt(_race.int || 0);
    setCha(_race.cha || 0);
    setBonus((_race.bonus || 0) + (_rank.bonus || 0))
    setChoice(_race.choice);
  }, [race, rank, armor, shield])

  return (
    <>
      <Link to="/character" style={{ textAlign: 'left' }}><H4>{'<--'} Back</H4></Link>
      <Panel>
        <H2>Your character</H2>
        <div style={{ textAlign: 'left' }}>
          <Text>You are a {rank} {race} wearing {armor} armor and {shield} shield.</Text>
          <Text>This means that your stats are as follows:</Text>
          <Text><strong>Hit Points</strong>: {hp}</Text>
          <Text><strong>Strength</strong>: {str}</Text>
          <Text><strong>Dexterity</strong>: {dex}</Text>
          <Text><strong>Constitution</strong>: {con}</Text>
          <Text><strong>Wisdom</strong>: {wis}</Text>
          <Text><strong>Intelligence</strong>: {int}</Text>
          <Text><strong>Charisma</strong>: {cha}</Text>
          <Text>You have {bonus} points to spend in your stats as you please.</Text>
          { choice && <Text> You have a choice between: {constructChoicesString(choice)} </Text> }
        </div>
      </Panel>
    </>
  );
};

export default Stats;
