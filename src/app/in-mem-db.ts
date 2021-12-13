enum Skill {
  NICE = 'NICE',
  TECH = 'TECH',
}

export class InMemoryDataService {
  createDb() {
    const colleagues = [
      { id: 11, name: 'Mr. Nice', skill: Skill.NICE },
      { id: 12, name: 'Narco' , skill: Skill.TECH },
      { id: 13, name: 'Bombasto' , skill: Skill.NICE },
      { id: 14, name: 'Celeritas' , skill: Skill.TECH },
      { id: 15, name: 'Magneta' , skill: Skill.NICE },
      { id: 16, name: 'RubberMan', skill: Skill.NICE  },
      { id: 17, name: 'Dynama' , skill: Skill.NICE },
      { id: 18, name: 'Dr IQ' , skill: Skill.TECH },
      { id: 19, name: 'Magma' , skill: Skill.TECH },
      { id: 20, name: 'Tornado' , skill: Skill.TECH },
    ];
    return { colleagues };
  }
}
