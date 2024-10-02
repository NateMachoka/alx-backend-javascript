import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName).then(
      (value) => ({ status: 'fulfilled', value }),
      (error) => ({ status: 'rejected', value: error.toString() })
    ),
    uploadPhoto(fileName).then(
      (value) => ({ status: 'fulfilled', value }),
      (error) => ({ status: 'rejected', value: error.toString() })
    )
  ];

  return Promise.all(promises);
}
