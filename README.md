# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## React Skeletor
### Installation
> yarn add react-loading-skeleton
npm install react-loading-skeleton

### Basic Usage
```javascript
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

<Skeleton /> // Simple, single-line loading skeleton
<Skeleton count={5} /> // Five-line loading skeleton
```

### Theming
Customize individual skeletons with props, or render a SkeletonTheme to style all skeletons below it in the React hierarchy:

```javascript
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div>
            <Skeleton count={3} />
        </div>
    </SkeletonTheme>
)
```

### Props Reference
#### Skeleton only
|  Prop | Description  | Default
| ------------ | ------------ |
| count?: number  | The number of lines of skeletons to render.   | 1
| circle?: boolean  |  Makes the skeleton circular by setting border-radius to 50%. | false
| className?: string | A custom class name for the individual skeleton elements which is used alongside the default class, react-loading-skeleton. |    -
| containerClassName?: string | A custom class name for the < span >  that wraps the individual skeleton elements. |  -
| containerTestId?: string | A string that is added to the container element as a data-testid attribute. Use it with screen.getByTestId('...') from React Testing Library. | -  |
| style?: React.CSSProperties | This is an escape hatch for advanced use cases and is not the preferred way to style the skeleton. Props (e.g. width, borderRadius) take priority over this style object. | -

#### Skeleton and SkeletonTheme
| Prop  | Description | Default
| ------------ | ------------ |
| baseColor?: string | The background color of the skeleton. | #ebebeb
| highlightColor?: string | The highlight color in the skeleton animation. | #f5f5f5
| width?: string / number | The width of the skeleton. | 100%
| height?: string / number | The height of each skeleton line. | The font size
| borderRadius?: string / number | The border radius of the skeleton. | 0.25rem
| inline?: boolean | By default, a < br /> is inserted after each skeleton so that each skeleton gets its own line. When inline is true, no line breaks are inserted. | false
| duration?: number | The length of the animation in seconds. | 1.5
| direction?: 'ltr' / 'rtl' | The direction of the animation, either left-to-right or right-to-left. | 'ltr'
| enableAnimation?: boolean | Whether the animation should play. The skeleton will be a solid color when this is false. You could use this prop to stop the animation if an error occurs. | true