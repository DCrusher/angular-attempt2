import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', email: '11@gmail.com'},
      { id: 12, name: 'Narco', email: '12@gmail.com', age: 12 },
      { id: 13, name: 'Bombasto', email: '13@gmail.com', age: 13 },
      { id: 14, name: 'Celeritas', email: '14@gmail.com', age: 14 },
      { id: 15, name: 'Magneta', email: '15@gmail.com', age: 15, power: 2 },
      { id: 16, name: 'RubberMan', email: '16@gmail.com', age: 16 },
      { id: 17, name: 'Dynama', email: '17@gmail.com', age: 17 },
      { id: 18, name: 'Dr IQ', email: '18@gmail.com', age: 18, power: 1 },
      { id: 19, name: 'Magma', email: '19@gmail.com', age: 19, power: 3 },
      { id: 20, name: 'Tornado', email: '20@gmail.com', age: 20 }
    ];
    const powers = [
      { id: 1, name: 'Mental', hazard: 10 },
      { id: 2, name: 'Metal', hazard: 9 },
      { id: 3, name: 'Fire', hazard: 7 },
      { id: 4, name: 'Water', hazard: 7 },
      { id: 5, name: 'Dark Matter', hazard: 10 },
      { id: 6, name: 'Gravitation', hazard: 8 },
      { id: 7, name: 'Hypnosis', hazard: 9 },
      { id: 8, name: 'Physics', hazard: 5 },
      { id: 9, name: 'Regeneration', hazard: 8 },
      { id: 10, name: 'Electricity', hazard: 7 }
    ];
    return { heroes, powers };
  }
}
