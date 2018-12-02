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

        {/* Acquire static assets from express static directly. */}
        <div className="img-container">
            <img alt="" src="/icons/github.png" />
        </div>

        <span className="text">
            <a href="https://github.com/MustansirZia/next-express-bootstrap-boilerplate">
              Github
            </a>
        </span>
        <br />
        <div className="btn">
            <Link href="/profile">
                <Button bsStyle="primary">Click Me</Button>
            </Link>
        </div>

        {/* Styling using styled-jsx. */}
        <style jsx>
            {`
              .btn {
                display: flex;
                justify-content: center;
              }`
            }
        </style>
    </Theme>
);

export default Index;
