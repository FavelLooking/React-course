export interface Location {
  uid?: string;
  name: string;
}

export interface AstronomicalObject {
  uid: string;
  name: string;
  astronomicalObjectType: string;
  location: Location | null;
  astronomicalObjects?: [];
}

export interface Page {
  pageNumber?: number;
  pageSize?: number;
  numberOfElements?: number;
  totalElements?: number;
  totalPages: number;
  firstPage?: boolean;
  lastPage?: boolean;
}

export interface ApiResponse {
  sort?: string;
  astronomicalObject: AstronomicalObject;
  page: Page;

  astronomicalObjects?: [];
}
