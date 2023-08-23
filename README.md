# Getting Started 

## Hosted Version 
Access the live website [here](http://3.208.91.132:3000/) \
back-end code [here](https://github.com/gurashish1000-coder/spatial-back)

## How does it work ?
### front-end
Using the front-end interface, you can zoom in to a specific location, such as Dallas, Texas. After selecting a point, use the slider to define the desired range, and then click the "Request Data" button. The interface will display the total population and average income based on the selected parameters.

### back-end
1. **Location and Range Input:** The backend program receives the specified location and range.
2. **Intersecting Polygons:** The program identifies all polygons in the database that intersect with the provided location range.
3. **Centroid Calculation:** The centroids of these polygons are calculated.
4. **Centroid Inclusion Check:** Each centroid's inclusion within the defined location buffer (range) is verified. 
5. **Calculation Selection:** Only polygons with centroids within the buffer are considered for subsequent calculations.
   
## Available Scripts
In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

