import {User} from '../model/user.interface'

const users: User[] = [
  {
    name: 'Dariush',
    company: 'Dariush Cars',
    location: 'Athens, Greece',
    bio: 'Dirty worker',
    avatarUrl: 'http://i.imgur.com/jav62p6.jpg',
    email: 'admin@dariush.pl'
  },

  {
    name: 'John Doe',
    company: 'True company',
    location: 'London, UK',
    bio: 'Great backend hero',
    avatarUrl: 'http://i.imgur.com/TzWcihb.png',
    email: 'john.doe@gmail.uu'
  }
]

export const USER_LIST = users;
