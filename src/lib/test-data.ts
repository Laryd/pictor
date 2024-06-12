import { Album } from "@/redux/slices/albumSlice";
import { Photo } from "@/redux/slices/photoSlice";
import { User } from "@/redux/slices/userSlice";

export const albums: Album[] = [
  {
    userId: 1,
    id: 2,
    title: "sunt qui excepturi placeat culpa",
  },
  {
    userId: 1,
    id: 3,
    title: "omnis laborum odio",
  },
  {
    userId: 1,
    id: 4,
    title: "non esse culpa molestiae omnis sed optio",
  },
  {
    userId: 1,
    id: 5,
    title: "eaque aut omnis a",
  },
  {
    userId: 1,
    id: 6,
    title: "natus impedit quibusdam illo est",
  },
  {
    userId: 1,
    id: 7,
    title: "quibusdam autem aliquid et et quia",
  },
  {
    userId: 1,
    id: 8,
    title: "qui fuga est a eum",
  },
  {
    userId: 1,
    id: 9,
    title: "saepe unde necessitatibus rem",
  },
  {
    userId: 1,
    id: 10,
    title: "distinctio laborum qui",
  },
];

export const users: User[] = [
  {
    id: 1,
    name: 'Test User One',
    username: 'testuser1',
    email: 'testuser1@example.com',
    address: {
      street: 'Test Street 1',
      suite: 'Apt. 101',
      city: 'Testville',
      zipcode: '11111-1111',
      geo: {
        lat: '10.0000',
        lng: '20.0000'
      }
    },
    phone: '123-456-7890',
    website: 'testuser1.com',
    company: {
      name: 'Test Company One',
      catchPhrase: 'Innovative test solutions',
      bs: 'integrate test environments'
    }
  },
  {
    id: 2,
    name: 'Test User Two',
    username: 'testuser2',
    email: 'testuser2@example.com',
    address: {
      street: 'Test Street 2',
      suite: 'Apt. 202',
      city: 'Testtown',
      zipcode: '22222-2222',
      geo: {
        lat: '30.0000',
        lng: '40.0000'
      }
    },
    phone: '987-654-3210',
    website: 'testuser2.com',
    company: {
      name: 'Test Company Two',
      catchPhrase: 'Efficient testing services',
      bs: 'maximize testing throughput'
    }
  },
  {
    id: 3,
    name: 'Test User Three',
    username: 'testuser3',
    email: 'testuser3@example.com',
    address: {
      street: 'Test Street 3',
      suite: 'Apt. 303',
      city: 'Testopolis',
      zipcode: '33333-3333',
      geo: {
        lat: '50.0000',
        lng: '60.0000'
      }
    },
    phone: '555-555-5555',
    website: 'testuser3.com',
    company: {
      name: 'Test Company Three',
      catchPhrase: 'Advanced test methodologies',
      bs: 'streamline testing processes'
    }
  }
];

export const photos: Photo[] = [
  {
    albumId: 2,
    id: 30,
    title: "odio enim voluptatem quidem aut nihil illum",
    url: "https://via.placeholder.com/600/372c93",
    thumbnailUrl: "https://via.placeholder.com/150/372c93",
  },
  {
    albumId: 2,
    id: 31,
    title: "voluptate voluptates sequi",
    url: "https://via.placeholder.com/600/a7c272",
    thumbnailUrl: "https://via.placeholder.com/150/a7c272",
  },
  {
    albumId: 2,
    id: 32,
    title: "ad enim dignissimos voluptatem similique",
    url: "https://via.placeholder.com/600/c70a4d",
    thumbnailUrl: "https://via.placeholder.com/150/c70a4d",
  },
  {
    albumId: 2,
    id: 33,
    title: "culpa ipsam nobis qui fuga magni et mollitia",
    url: "https://via.placeholder.com/600/501fe1",
    thumbnailUrl: "https://via.placeholder.com/150/501fe1",
  },
  {
    albumId: 1,
    id: 34,
    title: "vitae est facere quia itaque adipisci perferendis id maiores",
    url: "https://via.placeholder.com/600/35185e",
    thumbnailUrl: "https://via.placeholder.com/150/35185e",
  },
];