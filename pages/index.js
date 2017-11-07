import React from 'react';

import stylesheet from 'styles/index.scss';

export default () => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <p>ciao</p>
    </div>
);
