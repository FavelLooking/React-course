export default interface ItemProps {
  title: string;
  location: string;
  astronomicalObjectType: string;

  onClick: () => void;
}

export interface Location {
  uid: string;
  name: string;
}

export interface AstronomicalObject {
  uid: string;
  name: string;
  astronomicalObjectType: string;
  location: Location | null;
}

export interface Page {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
}

export interface ApiResponse {
  page: Page;
  sort: {
    clauses: [];
  };
  astronomicalObjects: AstronomicalObject[];
}

export interface MainProps {
  searchResults?: ApiResponse | null;
  isLoading: boolean;
}
