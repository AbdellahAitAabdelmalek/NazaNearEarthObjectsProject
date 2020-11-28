export interface Card {
  id: number;
  neo_reference_id:number;
  name:string;
  name_limited: string;
  designation: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: number;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: string;
  orbital_data: string;
  is_sentry_object: boolean;
}
