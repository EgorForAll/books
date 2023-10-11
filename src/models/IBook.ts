interface IVolume {
  title: string;
  authors: Array<string>;
  publisher: string;
  publishedDate: number;
  description: string;
  industryIdentifiers: [
    {
      type: string;
      identifier: number;
    },
    {
      type: string;
      identifier: number;
    }
  ];
  readingModes: {
    text: boolean;
    image: boolean;
  };
  pageCount: number;
  printType: string;
  categories: Array<string>;
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string | undefined;
  };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

interface ISale {
  country: string;
  saleability: string;
  isEbook: boolean;
}

interface IAccess {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: {
    isAvailable: boolean;
  };
  pdf: {
    isAvailable: boolean;
  };
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

interface ISearch {
  textSnippet: string;
}

export interface IBook {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: IVolume;
  saleInfo: ISale;
  accessInfo: IAccess;
  searchInfo: ISearch;
}
