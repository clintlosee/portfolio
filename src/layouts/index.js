import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import './pageclip';
import './pageclip.css';

import HeaderMenu from '../components/HeaderMenu';
import FooterSegment from '../components/FooterSegment';

const Header = () => (
    <div
        style={{
            background: 'rebeccapurple',
            marginBottom: '1.45rem'
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem'
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}
                >
                    Gatsby
                </Link>
            </h1>
        </div>
    </div>
);

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="Clint Losee Digital Portfolio"
            meta={[
                { name: 'description', content: 'Sample' },
                {
                    name: 'keywords',
                    content: 'Clint Losee, Web Developer, Front End Developer, Digital Portfolio, React, JavaScript'
                }
            ]}
        />
        {<HeaderMenu />}
        <div
            style={{
                margin: '0 auto',
                // maxWidth: 960,
                // padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0
            }}
        >
            {children()}
        </div>
        <FooterSegment />
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
