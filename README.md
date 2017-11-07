# next-express-bootstrap-boilerplate
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)



## TL;DR.
Boilerplate code to get you up and running quickly with a full stack JavaScript web application whose frontend is built with <b>[React.js](https://reactjs.org/)</b>, <b>[Next.js](https://github.com/zeit/next.js)</b>, <b>[Bootstrap](https://react-bootstrap.github.io/)</b> and <b>[SCSS](http://sass-lang.com/)</b> and backend is built using <b>[Express.js](https://expressjs.com/)</b>. React code is isomorphic and the components are rendered both on the server with <b>Server Side Rendering</b> (SSR) and as well as on the browser.
<br />
<br />

## Installation.
• First clone the repo. `git clone https://github.com/MustansirZia/next-express-bootstrap-boilerplate`.

• `cd next-express-bootstrap-boilerplate`.


• `npm i` or if you have yarn `yarn`.

• `npm run dev` or if you have yarn `yarn dev`. (For development)

• `npm start` or if you have yarn `yarn start`. (For production). `start` script will first build the app and then serve the production version at `:9001`.

• Go to `localhost:9001` to verify.
<br />
<br />

## App structure.
```
|-- app 						   // Next.js app lives here.
|  |
|  `-- components 			     // Common components live here.
|  |  |
|  |  `-- Theme.js
|  |
|   `-- pages 					 // App routes live here.
|  |  |
|  |  `-- index.js
|  |  |
|  |  `-- profile.js
|  |
|  `-- styles 					// CSS and SCSS files live here.
|  |  |
|  |  `-- index.scss
|  |  |
|  |  `-- vendor
|  |  |
|  |  `-- bootstrap.min.css
|  |
|  `-- .babelrc					
|  |
|  `-- next.config.js 			// App config lives here.
|  |
|  `-- postcss.config.js   
|
|
`-- app.js
|
`-- next.js
|
`-- package.json
|
`-- README.md
|
`-- LICENSE
```

<br />
Our React app is housed under `app/`. Since it uses Next.js, all the main app routes go under `app/pages`. The common or miscellaneous components are housed under `app/components`.
<br />


Next.js uses [styled-jsx](https://github.com/zeit/styled-jsx) to apply styles to our components. it is a css-in-js solution and will work inside this boilerplate too. But apart from this, we can write our own individual `css` or `scss` files for each of our components and place them under `app/styles`.
We can later on import these style files just as we do in plain react but we need to put them inside `<style>` tags for them to work. (Since that's how Next.js handles all the styling).
<br />

As you can see our `bootstrap.min.css` is also housed under `app/styles/vendor` and is loaded inside a HOC called `Theme`. We essentially load all the bootstrap styling into this component and make it a wrapper for every component which uses components from <b>[react-bootstrap](https://react-bootstrap.github.io/)</b>. That's how we can import and use bootstrap components into our own components. Check `app/pages/index.js` as an example for this.


#### • How it works?
Our `css` and `scss` files are essentially transpiled to css-in-js during runtime and loaded or hot loaded into our app by a recipe that I got from [here](https://github.com/zeit/next.js/tree/master/examples/with-global-stylesheet). That's what the `app/.babelrc`, `app/postcss.config.js` and the webpack config inside `app/next.config.js` are for.

### `app/pages/index.js`.
```jsx
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Theme from '../components/Theme';

// Straight away require/import scss/css just like in react.
import indexStyle from '../styles/index.scss';

const Index = () => (
    // Wrap your page inside <Theme> HOC to get bootstrap styling.
    // Theme can also be omitted if react-bootstrap components are not used.
    <Theme>
        {
            /*
            Set indexStyling via dangerouslySetInnerHTML.
            This step will make the below classes to work.
            */
        }
        <style dangerouslySetInnerHTML={{ __html: indexStyle }} />

        <span className="heading">React.js | Next.js | Express.js | Bootstrap - SCSS</span>
        <span className="text">with SSR.</span>
        <span className="text"><a href="https://github.com/MustansirZia/next-express-bootstrap-boilerplate">Github</a></span>
        <br />
        <div className="btn">
            <Link href="/profile">
                <Button bsStyle="primary">Click Me</Button>
            </Link>
        </div>

        {/* Styling using styled-jsx. */}
        <style jsx>{`
              .btn {
                display: flex;
                justify-content: center;
              }`
        }
        </style>
    </Theme>
);

export default Index;
```
