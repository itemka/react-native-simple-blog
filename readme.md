# CREATE NAVIGATION

## Links:

https://reactnative.dev/

https://expo.io/

Work with 4 version - react-navigation@^4
doc: https://reactnavigation.org/docs/4.x/getting-started/

Work with 5 version - @react-navigation/native
doc: https://reactnavigation.org/docs/getting-started/

https://reactnavigation.org/docs/navigation-prop

https://reactnavigation.org/docs/4.x/navigation-prop

### Notes
- expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context

- react-navigation is replacing route into web SPA 

- the toolbar is added automatically

# IMPLEMENT UI

- `yarn add react-navigation-header-buttons @expo/vector-icons
            react-navigation-tabs
            react-navigation-material-bottom-tabs react-native-paper
            react-navigation-drawer`

# WORK WITH REDUX

- create actionTypes/action/reducer/store

- import { `useDispatch`, `useSelector` } from `'react-redux'`;

# WORK WITH NATIVE ELEMENTS

- `expo install expo-image-picker
    expo install expo-permissions`

- prepare to connect database + https://docs.expo.io/versions/latest/sdk/sqlite/

- `expo install expo-sqlite` + https://www.w3schools.com/sql/sql_create_table.asp

- get data from DB

- save photo local and work with this photos | us lib: `expo install expo-file-system`

- implement create post and add into DB

- update and remove post + add loader when loading posts

# PREPARATION AND DEPLOY

- https://docs.expo.io/workflow/configuration/

- https://docs.expo.io/guides/splash-screens/#customize-the-splash-screen-for-your-app

- `expo publish` -> log in Expo -> get link: https://expo.io/@itemka/ReactNativeSelfPosts

- `expo build:android -t app-bundle` and `expo build:ios` https://docs.expo.io/distribution/building-standalone-apps/

- you can monitor the android build at https://expo.io/dashboard/itemka/builds/143fc608-e496-459e-b555-676762b30967

- after the build was this link: https://expo.io/artifacts/598db76d-5900-4352-aa1c-283d458b2a32

- `expo upload:ios` (https://docs.expo.io/distribution/building-standalone-apps/)

- for get keys: `expo fetch:android:keystore` and then `expo upload:android`

- `expo build:android -t apk` then get apk by the link, for example: https://expo.io/artifacts/9acd6923-7551-4873-87ae-3b9b15b9b73b
