import { Knowledge } from './types';

export default function isAllowed(knowledge: Knowledge, citizenName: string, placeName: string): boolean {
  const citizen = knowledge.citizens.find((citizen) => citizen.name === citizenName);
  const place = knowledge.places.find((place) => place.name === placeName);

  if (!citizen || !place) return false;
  if (citizen?.allowed_places?.includes(placeName)) return true;

  const checkRoles = (roles: string[], checkedRoles: string[]): boolean => {
    // handle the case when roles is empty
    if (!roles.length) return false;

    const role = knowledge.roles.find((role) => role.title === roles[0]);
    if (role?.allowed_places?.includes(placeName)) return true;
    if (role?.roles) {
      // if the role has subroles, check if any of them is allowed to go to the place
      if (checkedRoles.includes(role.title)) return false;
      else {
        // if the role has subroles, check if any of them is allowed to go to the place
        checkedRoles.push(role.title);
        return checkRoles(role.roles, checkedRoles);
      }
    }
    return false;
  }
  // if the citizen has no roles, check if any of them is allowed to go to the place
  return checkRoles(citizen.roles, []);
}
