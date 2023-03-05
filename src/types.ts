export interface Citizen {
  name: string;
  roles: string[];
  allowed_places?: string[];
}

export interface Place {
  name: string;
}

export interface Role {
  title: string;
  allowed_places: string[];
  roles?: string[];
}

export interface Knowledge {
  citizens: Citizen[];
  places: Place[];
  roles: Role[];
}
