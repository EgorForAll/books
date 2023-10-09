export interface IBook {
  kind: string;
  id: number;
  totalItems: number;
  title: string;
  items: [
    {
      kind: string;
      id: string;
      etag: string;
      selfLink: string;
      volumeInfo: {
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
        imageLinks: {
          smallThumbnail: string;
          thumbnail: string;
        };
        language: string;
        previewLink: string;
        infoLink: string;
        canonicalVolumeLink: string;
      };
      saleInfo: {
        country: string;
        saleability: string;
        isEbook: boolean;
      };
      accessInfo: {
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
      };
      searchInfo: {
        textSnippet: string;
      };
    }
  ];
}
