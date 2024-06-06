# Project Documentation

## Overview

This documentation provides a comprehensive insight into the project structure, employed technologies, and architectural components. The application leverages TypeScript as its primary programming language, employing Next.js for server-side rendering, Shadcn for UI components, and Tailwind CSS for styling. Authentication functionalities are facilitated by NextAuth.js, integrating authentication via Google and GitHub. Additionally, the project utilizes a provider wrapping the layout component for enhanced modularity and scalability.

## Technologies Used

- **TypeScript**: The primary programming language utilized for its static typing and enhanced developer productivity.
- **Next.js**: A React framework employed for server-side rendering, routing, and building robust web applications.
- **Shadcn**: A comprehensive UI library offering pre-designed components for rapid application development.
- **Tailwind CSS**: A utility-first CSS framework facilitating efficient and consistent UI styling.
- **NextAuth.js**: A versatile authentication library streamlining authentication processes, supporting authentication via Google and GitHub.
- **Provider Pattern**: Utilized to encapsulate the layout component, enhancing modularity and scalability.

## Folder Structure

src
├───app
│ ├───api
│ │ └───auth
│ │ └───[...nextauth]
│ ├───home
│ ├───signin
│ ├───signup
│ └───user
│ └───[userId]
│ └───album
│ └───[albumId]
│ └───photo
│ └───[photoId]
├───components
│ ├───Album
│ ├───Dashboard
│ ├───Features
│ │ └───tests
│ ├───Hero
│ │ └───tests
│ ├───Photo
│ ├───ui
│ └───UserProfile
├───lib
└───redux
├───slices
└───store.ts

- **app**: The central directory housing primary application components and pages.
  - **api**: Contains API routes and authentication logic.
    - **auth**: Hosts authentication-related routes.
  - **home**: Contains components specific to the home page.
  - **signin**: Consists of components facilitating user sign-in functionality.
  - **signup**: Includes components responsible for user registration.
  - **user**: Houses user-specific pages and components.
    - **[userId]**: Directory for user-centric pages and components.
      - **album**: Contains components related to album management.
        - **[albumId]**: Specific album pages and components.
          - **photo**: Components governing photo-related functionalities.
            - **[photoId]**: Individual photo pages and components.
- **components**: Repository for reusable UI components fostering modularity and scalability.
  - **Album**: Components responsible for rendering album-related content.
  - **Dashboard**: Components contributing to the dashboard's interface.
  - **Features**: Feature-specific components augmenting application functionality.
    - **__tests__**: Test suites for feature components.
  - **Hero**: Components defining the hero section of the application.
    - **__tests__**: Testing suite for hero components.
  - **Photo**: Components facilitating photo display and management.
  - **ui**: UI components sourced from Shadcn for accelerated development.
  - **UserProfile**: Components tailored to user profile management.
- **lib**: Contains utility functions and helper modules crucial for application operations.
- **redux**: Houses Redux-related files, including state slices and test suites.
  - **slices**: Redux slice files facilitating organized state management.
  - **__tests__**: Test files ensuring the reliability and functionality of Redux store and StoreProvider using Jest.

## App Usage

### Log In
- Users can log in using either Google or GitHub.
- Authentication is managed by NextAuth.js, ensuring secure and streamlined access.

### Dashboard
- Once logged in, users are directed to the dashboard.
- The dashboard displays a list of users.

### User Profile
- Clicking on a user navigates to their profile page.
- The profile page displays user details and a list of their albums.

### Albums
- Users can click on an album to view the photos within it.
- Each album page showcases all the photos associated with that album.

### Photos
- Clicking on a photo navigates to a detailed view of the photo.
- Users can edit the title of the photo directly from this page.

## API Requests

- **GET Requests**: Fetch user data, albums, and photos.
- **PATCH Requests**: Update photo titles.

## State Management

- **Redux**: Used for handling global state and asynchronous actions.
  - **Slices**: State slices for users, albums, and photos.
  - **Store**: Centralized store for managing application state.
  - **Actions**: Fetch and update actions for interacting with the API.

## Testing

- **Jest**: Configured for unit testing.
- **Testing Library**: Used for testing React components.
- **Scripts**: Added to `package.json` for running tests.

## Conclusion

This documentation provides an extensive overview of the project's structure, technologies employed, and architectural components. By harnessing TypeScript for enhanced type safety and developer productivity, integrating Next.js for server-side rendering, and incorporating Shadcn for UI components, the application ensures robustness and scalability. Authentication functionalities, facilitated by NextAuth.js with support for Google and GitHub authentication, further enhance the user experience. Additionally, the utilization of a provider pattern encapsulating the layout component promotes modularity and facilitates code maintenance.
