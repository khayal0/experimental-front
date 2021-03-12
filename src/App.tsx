import React, { FC } from 'react';
import Container from 'shared/components/Container';
import { routes } from 'routes';

const App: FC = () => {
    return <Container>{routes}</Container>;
};

export default App;
