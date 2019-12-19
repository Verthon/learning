import { Repository } from "../model/respository.interface";
import { USER_LIST } from "../mocks/user.mock";

const repositoryList: Repository[] = [
  {
    name: 'Ionic 3 Camera',
    description: 'This respository shows the usage of the Camera functionality within Ionic 3',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 SMS',
    description: 'This respository shows the usage of the SMS functionality within Ionic 3',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 Geolocation',
    description: 'This respository shows the usage of the Geolocation functionality within Ionic 3',
    owner: USER_LIST[1]
  },
  {
    name: 'Ionic 3 Vibration',
    description: 'This respository shows the usage of the Vibration functionality within Ionic 3',
    owner: USER_LIST[1]
  },
];


export const REPOSITORY_LIST = repositoryList;
