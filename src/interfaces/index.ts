export interface Comic {
    id: number;
    title: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    } 
    creators: {
      items: [
            {
              name: string,
            }
          ];
    }
    stories: {
      items: [
            {
              name: string,
            }
          ]
  }
}

export interface ComicSelected {
  id: number;
  title: string;
  description: string;
  thumbnail: string | undefined;
  creators: {
    items: [
          {
            name: string,
          }
        ];
  }
  stories: {
    items: [
          {
            name: string,
          }
        ]
}
}
  
  // export interface Pokemon {
  //   name: string;
  //   sprites: {
  //     front_default: string,
  //     other: {
  //       home: {
  //         front_default: string
  //       }
  //     }
  //   };
  //   id: number;
  //   height: number;
  //   weight: number;
  //   stats: [
  //     {
  //       base_stat: number,
  //     }
  //   ];
  //   types: [
  //     {
  //       type: {
  //         name: string;
  //       }
  //     }
  //   ];
  // };