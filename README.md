# Events App - FrontEnd

This is a `NextJS, TS and TailwindCSS` project.

## Getting Started

This project uses `yarn workspaces` as default monorepo architecture.

#### First clone the repo

```bash
git clone https://github.com/hngx-org/events-web-app.git
```

#### Install all dependencies

```bash
yarn install
```

#### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Types

As you know by now that this is a typescript based project. Please all types must be created separately in the `@types` directly outside of the componentss folder. If your components require a custom type, create them inside a folder called `types` or `@types` and export it to be used somewhere else.

# Commit Standards

Check the .github folder in the repository to check the commit template.

## Branches

- **dev** -> pr this branch for everything `frontend` related
- **main** -> **dont touch** this branch, this is what is running in production.

## Contributions

events-app is open to contributions, but I recommend creating an issue or replying in a comment to let us know what you are working on first that way we don't overwrite each other.

## Contribution Guidelines

1. Clone the repo `git clone https://github.com/hngx-org/events-web-app.git`.
2. Open your terminal & set the origin branch: `git remote add origin https://github.com/hngx-org/events-web-app.git.web.git`
3. Pull origin `git pull origin dev`
4. Create a new branch for the task you were assigned to, eg `TicketNumber/(Feat/Bug/Fix/Chore)/Ticket-title` : `git checkout -b ZA-001/Feat/Sign-Up-from`
5. After making changes, do `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts, run `git pull origin dev`.
8. Push changes to your new branch, run `git push -u origin ZA-001/Feat/Sign-Up-from`.
9. Create a pull request to the `dev` branch not `main`.
10. Ensure to describe your pull request.
11. > If you've added code that should be tested, add some test examples.

# Merging

Under no circumstances should you merge a pull requests on a specific branch to the `dev` or `main` branch

## Code Explanation

### API Calls

A separate folder called `http` which contains `interceptor.ts` and `lib` folder were created to handle any outgoing or incoming http request/response. the `lib` folder should contain all outgoing `API` calls to the backend server.

> ❗❗Do not create any custom http calls inside a page or components. Whatever calls that need to be processed by the server should be called within the `lib` folder.

### MainLayout.tsx

Within this file contains a `MainLayout` component, rather than calling `Footer`, `Sidebar`, `TopBar` component on every file manually, all you have to do is first invoke the `<MainLayout>` component inside any page before adding the children of that page.

for example

```js
import MainLayout from "../components/Layout/MainLayout";

function Home() {
  return (
    <MainLayout className="">
      <p className="text-dark-100">Home Page</p>
    </MainLayout>
  );
}

export default Home;
```
