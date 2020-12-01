export interface NearEarthObject {
  id: number;
  neo_reference_id:number;
  name:string;
  name_limited: string;
  designation: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
}
